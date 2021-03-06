/**
 * Wise-r API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
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
    define(['ApiClient', 'model/Response', 'model/UserResourceV2', 'model/KeyringResourceV2', 'model/KeyValueResourceV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Response'), require('../model/UserResourceV2'), require('../model/KeyringResourceV2'), require('../model/KeyValueResourceV2'));
  } else {
    // Browser globals (root is window)
    if (!root.WiserClient) {
      root.WiserClient = {};
    }
    root.WiserClient.UsersApi = factory(root.WiserClient.ApiClient, root.WiserClient.Response, root.WiserClient.UserResourceV2, root.WiserClient.KeyringResourceV2, root.WiserClient.KeyValueResourceV2);
  }
}(this, function(ApiClient, Response, UserResourceV2, KeyringResourceV2, KeyValueResourceV2) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 2.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a key from keyring
     * Delete a client specific key from the keyring for the given User and the authenticated client
     * @param {String} id Encrypted userid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    this.deleteUserKey = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteUserKey";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/v2/users/{id}/keys/client', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get User
     * Returns the User with the given (encrypted) id. When receiving a userid through the SSU service, the linked usergroups can be fetched here, after which the groupmembers can be fetched using the Group API. Student details from a student with implied authorization (students in groups with groups permission obtained through SSU service) can also be obtained here.
     * @param {String} id Encrypted userid
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.archived Also return archived users, default false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResourceV2}
     */
    this.getUser = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getUser";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'archived': opts['archived']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserResourceV2;

      return this.apiClient.callApi(
        '/v2/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get key from keyring
     * Get the client specific key of the given User and the authenticated client.
     * @param {String} id Encrypted userid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyringResourceV2}
     */
    this.getUserKey = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getUserKey";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = KeyringResourceV2;

      return this.apiClient.callApi(
        '/v2/users/{id}/keys/client', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get keys from keyring
     * Get all keys, owned by the authenticated client, of the given User. Usually those keys are the client specific key and the &#39;UWLR&#39; key (provided that the authenticated client has access to the latter).
     * @param {String} id Encrypted userid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/KeyringResourceV2>}
     */
    this.getUserKeys = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getUserKeys";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [KeyringResourceV2];

      return this.apiClient.callApi(
        '/v2/users/{id}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get &#39;UWLR&#39; key from keyring
     * Get the &#39;UWLR&#39; key of the given User. This key is not client specific (and hence cannot be deleted).
     * @param {String} id Encrypted userid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyringResourceV2}
     */
    this.getUserUwlrKey = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getUserUwlrKey";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = KeyringResourceV2;

      return this.apiClient.callApi(
        '/v2/users/{id}/keys/uwlr', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Users
     * Returns all Users, filtered on schoollocation, group, or usertype. Calls with both &#39;schoollocation&#39; and &#39;groups&#39; empty are discouraged.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.usertype Filter the type of User (optional)
     * @param {Array.<String>} opts.schoollocations Filter on schoollocations (optional, list of id&#39;s)
     * @param {String} opts.school Filter on schoolid. Overruled by schoollocations, groups if multiple filters found.
     * @param {Array.<String>} opts.groups Filter on groups (optional, list of id&#39;s)
     * @param {Integer} opts.offset Paging: number of records to skip (optional) (default to 0)
     * @param {Integer} opts.limit Paging: number of records to return (optional, maximal value: 1000) (default to 100)
     * @param {String} opts.firstName Filter on given name of the users
     * @param {String} opts.surname Filter on the family name of the user
     * @param {String} opts.email Filter on the E-mail address of the user
     * @param {String} opts.grade Filter on the grade (if student)
     * @param {Boolean} opts.archived Also returns archived users, default false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/UserResourceV2>}
     */
    this.getUsers = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'usertype': opts['usertype'],
        'schoollocations': this.apiClient.buildCollectionParam(opts['schoollocations'], 'multi'),
        'school': opts['school'],
        'groups': this.apiClient.buildCollectionParam(opts['groups'], 'multi'),
        'offset': opts['offset'],
        'limit': opts['limit'],
        'firstName': opts['firstName'],
        'surname': opts['surname'],
        'email': opts['email'],
        'grade': opts['grade'],
        'archived': opts['archived']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [UserResourceV2];

      return this.apiClient.callApi(
        '/v2/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Save a key in keyring
     * Save a client specific key in the keyring for the given User and the authenticated client
     * @param {module:model/KeyValueResourceV2} body 
     * @param {String} id Encrypted userid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeyringResourceV2}
     */
    this.putUserKey = function(body, id) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling putUserKey";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling putUserKey";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = KeyringResourceV2;

      return this.apiClient.callApi(
        '/v2/users/{id}/keys/client', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
