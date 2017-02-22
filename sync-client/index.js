var WiserClient = require('wise-r-openapi-client');

var exports = module.exports = function (clientInstance) {
    'use strict';
    var changesApi = new WiserClient.ChangesApi(clientInstance),
        cancelled = false;

    function getChangedResource (link) {
        var typeMap = {},
            urlAfterApi;
        typeMap.user = WiserClient.UserResource;
        typeMap.group = WiserClient.GroupResource;
        typeMap.schoollocation = WiserClient.SchoolLocationResource;
        urlAfterApi = link.url.slice(4); // strip off /api, is already included in baseUrl
        return clientInstance.callApi(urlAfterApi, 'GET', {}, {}, {}, {}, null, ['oauth_client_credentials'], [], ['application/json'], typeMap[link.resourceType]);
    }

    /**
     * Creates a promise that resolves an {@link exports.ChangeObject} when the resource is retrieved.
     *
     * @memberof exports-sdk
     * @private
     * @param change {Object} - Object that containt information about the change mutation.
     * @param change.id {String} - Change's id.
     * @param change.organisationId {String} - Change's oranisationId.
     * @param change.changeType {String} - CREATE, UPDATE or DELETE.
     * @param link    {Object} - Link to retrieve the resource from
     * @param link.url    {String} - URL to retrieve the resource from
     * @param link.resourceType    {String} - Type to retrieve the resource from
     * @returns {Promise<exports.ChangeObject>}
     */
    function getChangePromise (change, link) {
        return new Promise(function (resolve, reject) {
            getChangedResource(link).then(function (resource) {
                resolve(new exports.ChangeObject(change.id, change.organisationId, resource, link.resourceType + 's', change.changeType))
            }, error => {
                if ((error.status === 404 || error.status === 500) && change.changeType === "CREATE") {
                    // Resource is not available anymore
                    resolve(null);
                } else {
                    reject(error);
                }
            });
        });
    }

    /**
     * Processes a batch of changes, creating a list of {@link Promise<exports.ChangeObject>} items that can be resolved in
     * the right order.
     *
     * @memberof exports-sdk
     * @private
     * @param changes [Object] - Changes to be processed
     * @returns {Array<Promise<exports.ChangeObject>>}
     */
    function processChanges (changes) {
        var promises = [];

        changes.forEach(change => {
            var object;
            if (change.changedResourceType === 'groupmembership') {
                object = {};
                change.links.forEach(function (link) {
                    // Process link (e.g. {userid = '9141ae26-6692-42b9-bd06-48c6d40cacf0})
                    object[link.resourceType + 'id'] = link.url.split('/').pop();
                });

                promises.push(Promise.resolve(new exports.ChangeObject(change.id, change.organisationId, object, 'groupmemberships', change.changeType)));

            } else {
                change.links.forEach(link => {
                    promises.push(getChangePromise(change, link));
                });
            }
        });

        return promises;
    }


    /**
     * Retrieve the available changes for a designated school.
     *
     * @memberof exports-sdk
     * @private
     * @param {Object} school - The school te retrieve the changes from.
     * @param {string} school.id - The id of an school.
     * @param {number} nextId - The nextId determines where to start retrieving changes.
     * @param {changesCallback} changesCallback - Periodically called when (sorted) changes are retrieved.
     * @param {function} doneCallback - Called when the sequence is done
     */
    function retrieveChanges (school, nextId, changesCallback, doneCallback) {
        if (cancelled) {
            cancelled = false;
            return false;
        }

        changesApi.getChanges([school.id], { nextId: nextId }).then(function (response) {
            nextId = response.nextId;

            return Promise.all(processChanges(response.changes))
                .then(function (changes) {
                    if (changes) {
                        changes = changes.filter(change => {
                            return change !== null;
                        });

                        if (changes.length === 0) {
                            return doneCallback(nextId); // All changes are retrieved, return last nextId
                        }
                        // NB wat als alle changes null zijn

                        changesCallback(changes);

                        retrieveChanges(school, nextId, changesCallback, function (lastId) {
                            doneCallback(lastId);
                        });
                    }
                });
        }, function (error) {
            console.error('Error while processing changes', error);
        });
    }

    /**
     * Executes the async retrieveAndProcessChanges synchronously for each school. This works by waiting on the callback
     * function from retrieveAndProcessChanges, which indicates it is done processing all the changes of one school, and
     * then recursively calling syncSchoolSequence again.
     *
     * @memberof exports-sdk
     * @private
     * @param {Object[]} schools - The array of schools that are processed
     * @param {string} schools.id - The id of an school.
     * @param {string} [schools.nextId = 0] - The nextId where to start retrieving changes.
     * @param {changesCallback} changesCallback - Periodically called when (sorted) changes are retrieved.
     * @param {function} doneCallback - Called when the sequence is done
     * @param {number} [index = 0] - The current index of the retrieval process
     * @param {number} [highestNextId = 0] - The highest nextId
     */
    function syncSchoolSequence (schools, changesCallback, doneCallback, index, highestNextId) {
        var school;
        index = index || 0;
        highestNextId = highestNextId || 0;

        if (index < schools.length) {
            school = schools[index];
            index += 1;
            retrieveChanges(school, school.nextId || 0, changesCallback, function onDoneRetrieving (lastNextId) {
                if (lastNextId > highestNextId) {
                    highestNextId = lastNextId;
                }
                syncSchoolSequence(schools, changesCallback, doneCallback, index, highestNextId);
            });
        } else {
            doneCallback(highestNextId);
        }
    }

    /**
     * @function changeRetrieval
     * @public
     * @memberof exports-sdk
     * @param {Object[]} schools - The array of schools that are processed
     * @param {string} schools.id - The id of an school.
     * @param {string} schools.nextId - The nextId where to start retrieving changes.
     * @param {changesCallback} changesCallback - Periodically called when (sorted) changes are retrieved.
     * @returns {promise} A promise that will be resolved once all the changes are retrieved
     */
    this.changesRetrieval = function (schools, changesCallback) {
        cancelled = false;
        return new Promise(function (resolve, reject) {
            if (!schools) {
                reject('No schools given');
                return;
            }
            if (!changesCallback) {
                reject('No changesCallback given');
                return;
            }
            syncSchoolSequence(schools, changesCallback, resolve);
        });
    };

    /**
     * Is called periodically when a new batch of changes is available.
     *
     * @callback changesCallback
     * @param {passepartout.ChangeObject[]} changes - List with Changes.
     */



    /**
     * Cancels the current process.
     *
     * @memberof exports-sdk
     * @name cancel
     * @function cancel
     */
    this.cancel = function () {
        cancelled = true;
    };

};

/**
 * @class passepartout.ChangeObject
 * @classdesc The apiService.ChangeObject contains all the necessary data of a change.
 * @type {Object}
 *
 * @param {string} id - The change's id.
 * @param {string} organisationId - Organisation id the change belongs to.
 * @param {Object} object - Object containing the changes resource.
 * @param {string} tablename - Change type/table.
 * @param {string} changetype - Kind of change (CREATE/UPDATE/DELETE).
 * @constructor Creates a apiService.ChangeObject
 */
exports.ChangeObject = function (id, organisationId, object, tablename, changetype) {
    this.id = id;
    this.organisationId = organisationId;
    this.object = object;
    this.tablename = tablename;
    this.changetype = changetype;
};
