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
    define(['ApiClient', 'model/Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Response'));
  } else {
    // Browser globals (root is window)
    if (!root.WiserClient) {
      root.WiserClient = {};
    }
    root.WiserClient.DocumentsApi = factory(root.WiserClient.ApiClient, root.WiserClient.Response);
  }
}(this, function(ApiClient, Response) {
  'use strict';

  /**
   * Documents service.
   * @module api/DocumentsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DocumentsApi. 
   * @alias module:api/DocumentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Upload a processor agreement
     * Upload a processor agreement to Wise-r
     * @param {File} upload PDF bestand
     * @param {String} organisation id of the organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    this.putProcessorAgreement = function(upload, organisation) {
      var postBody = null;

      // verify the required parameter 'upload' is set
      if (upload == undefined || upload == null) {
        throw "Missing the required parameter 'upload' when calling putProcessorAgreement";
      }

      // verify the required parameter 'organisation' is set
      if (organisation == undefined || organisation == null) {
        throw "Missing the required parameter 'organisation' when calling putProcessorAgreement";
      }


      var pathParams = {
      };
      var queryParams = {
        'organisation': organisation
      };
      var headerParams = {
      };
      var formParams = {
        'upload': upload
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/v1/documents/processoragreement', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
