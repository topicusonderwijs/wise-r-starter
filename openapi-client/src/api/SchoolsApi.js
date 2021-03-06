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
    define(['ApiClient', 'model/NotAuthorizedOrganisationResponse', 'model/SchoolResource', 'model/SchoolLocationResourceV2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NotAuthorizedOrganisationResponse'), require('../model/SchoolResource'), require('../model/SchoolLocationResourceV2'));
  } else {
    // Browser globals (root is window)
    if (!root.WiserClient) {
      root.WiserClient = {};
    }
    root.WiserClient.SchoolsApi = factory(root.WiserClient.ApiClient, root.WiserClient.NotAuthorizedOrganisationResponse, root.WiserClient.SchoolResource, root.WiserClient.SchoolLocationResourceV2);
  }
}(this, function(ApiClient, NotAuthorizedOrganisationResponse, SchoolResource, SchoolLocationResourceV2) {
  'use strict';

  /**
   * Schools service.
   * @module api/SchoolsApi
   * @version 2.0
   */

  /**
   * Constructs a new SchoolsApi. 
   * @alias module:api/SchoolsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get School
     * Returns the School with the given id.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SchoolResource}
     */
    this.getParentSchool = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getParentSchool";
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
      var returnType = SchoolResource;

      return this.apiClient.callApi(
        '/v2/schoolLocations/parent/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get SchoolLocation
     * Returns the SchoolLocation (and schoolId) with the given id.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SchoolLocationResourceV2}
     */
    this.getSchoolLocation = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getSchoolLocation";
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
      var returnType = SchoolLocationResourceV2;

      return this.apiClient.callApi(
        '/v2/schoolLocations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Schools
     * Returns the Schools and SchoolLocations for which the REST client has (partial) authorization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.naamFilter Filter on name (optional)
     * @param {String} opts.brincodeFilter Filter on brincode (optional)
     * @param {String} opts.dependancecodeFilter Filter on dependancecode (optional)
     * @param {String} opts.schoolkeyFilter Filter on schoolkey (optional)
     * @param {String} opts.schoolId Filter on parent school (optional)
     * @param {Integer} opts.offset Paging: number of records to skip (optional) (default to 0)
     * @param {Integer} opts.limit Paging: number of records to return (optional, maximal value: 100) (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SchoolLocationResourceV2>}
     */
    this.getSchoolLocations = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'naamFilter': opts['naamFilter'],
        'brincodeFilter': opts['brincodeFilter'],
        'dependancecodeFilter': opts['dependancecodeFilter'],
        'schoolkeyFilter': opts['schoolkeyFilter'],
        'schoolId': opts['schoolId'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth_client_credentials'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SchoolLocationResourceV2];

      return this.apiClient.callApi(
        '/v2/schoolLocations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
