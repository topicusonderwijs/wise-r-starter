/**
 * Wise-r API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NotAuthorizedOrganisationResponse', 'model/ChangeSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NotAuthorizedOrganisationResponse'), require('../model/ChangeSet'));
  } else {
    // Browser globals (root is window)
    if (!root.wise-r-openapi-client) {
      root.wise-r-openapi-client = {};
    }
    root.wise-r-openapi-client.ChangesApi = factory(root.wise-r-openapi-client.ApiClient, root.wise-r-openapi-client.NotAuthorizedOrganisationResponse, root.wise-r-openapi-client.ChangeSet);
  }
}(this, function(ApiClient, NotAuthorizedOrganisationResponse, ChangeSet) {
  'use strict';

  /**
   * Changes service.
   * @module api/ChangesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ChangesApi. 
   * @alias module:api/ChangesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Changes in Users and Groups.
     * &lt;p&gt;Returns Changes in Users and Groups. &lt;/p&gt;&lt;p&gt; The list of Changes contain one or more links to the relevant REST resources. Some Changes contain one link, others contain two links: &lt;/p&gt;&lt;ul&gt;&lt;li&gt;If a Group or User is changed, one link to that User or Group will be returned in the Change.&lt;/li&gt; &lt;li&gt;If a Groupmembership is changed, two links will be returned, one link to the User and one to the Group.&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The Changes are paginated, if there are more Changes available the call has to be repeated. The value of &#39;nextId&#39; determines which Change is retrieved last, and has to be used to get more Changes. If the list of Changes is empty, then there are no new Changes. The API does not remember which Changes you already have, the value of &#39;nextId&#39; determines the last retrieved Change of the client, so it is the responsibility of the REST client to remember this.&lt;/p&gt; &lt;p&gt;You have to always explicitly filter the Changes call on a given list of Schoollocations. When an authorization is removed from a Schoollocation, you wil get an error that indicates which authorizations have been removed.&lt;/p&gt;&lt;h2&gt;Initial synchronisation of new schoollocations&lt;/h2&gt;&lt;p&gt;If autorisation is added for a new schoollocation, the new schoollocation should be synchronised fully. This full sync is not necessary when adding an identity autorisation via the Single Sign Up functionality, if the identity is retrieved using the Users and Groups API&#39;s.&lt;/p&gt;&lt;p&gt;Detecting new schoollocations can be done with the Schools API: retrieve a list of schoollocations before every sync. Compare the list of schoollocations (which only contain schoollocations that the REST client is autorised for) to see if there are new schoollocations in the list, or if there are schoollocations that have been removed. If there is a new schoollocation, retrieve the Changes for this schoollocation, starting with nextId&#x3D;0. If the new schoollocation is up to date, it can be retrieved as part of a single call to retrieve changes for all schoollocations. &lt;/p&gt;&lt;p&gt; When combining schoollocations in a single call, always use the lowest &#39;nextId&#39; from these schoollocations.After adding the new schoollocations, retrieve the Changes for all schoollocations, while remembering the &#39;nextId&#39; per schoollocation.&lt;/p&gt; &lt;h2&gt;Permissions on Schoollocations&lt;/h2&gt;&lt;p&gt;If the REST client is not authorized for a schoollocation in the filter, an error message will be returned to indicate for which schoollocations there is no authorization.&lt;/p&gt;&lt;p&gt;When you have a permission for a specific Identity, this identity will also be included in the Changes API. When there is a permission for a Group, the students linked to this group will also be monitored for changes. When using the Single Sign Up service, when a teacher allows access to his identity information, he will automatically give (limited) access to his groups and students belonging to his groups.&lt;/p&gt;
     * @param {Array.<String>} schoollocations Filter on schoollocations (required, list of id&#39;s)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.nextId ID that was returned the last time when retrieving Changes for this set of schoollocations. When empty, all Changes will be returned from the start. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeSet}
     */
    this.getChanges = function(schoollocations, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'schoollocations' is set
      if (schoollocations == undefined || schoollocations == null) {
        throw "Missing the required parameter 'schoollocations' when calling getChanges";
      }


      var pathParams = {
      };
      var queryParams = {
        'schoollocations': this.apiClient.buildCollectionParam(schoollocations, 'multi'),
        'nextId': opts['nextId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ChangeSet;

      return this.apiClient.callApi(
        '/v1/changes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
