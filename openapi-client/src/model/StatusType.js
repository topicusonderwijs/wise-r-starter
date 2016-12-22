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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WiserClient) {
      root.WiserClient = {};
    }
    root.WiserClient.StatusType = factory(root.WiserClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatusType model module.
   * @module model/StatusType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StatusType</code>.
   * @alias module:model/StatusType
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>StatusType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusType} obj Optional instance to populate.
   * @return {module:model/StatusType} The populated <code>StatusType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Integer');
      }
      if (data.hasOwnProperty('reasonPhrase')) {
        obj['reasonPhrase'] = ApiClient.convertToType(data['reasonPhrase'], 'String');
      }
      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * @member {String} reasonPhrase
   */
  exports.prototype['reasonPhrase'] = undefined;
  /**
   * @member {module:model/StatusType.FamilyEnum} family
   */
  exports.prototype['family'] = undefined;


  /**
   * Allowed values for the <code>family</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FamilyEnum = {
    /**
     * value: "INFORMATIONAL"
     * @const
     */
    "INFORMATIONAL": "INFORMATIONAL",
    /**
     * value: "SUCCESSFUL"
     * @const
     */
    "SUCCESSFUL": "SUCCESSFUL",
    /**
     * value: "REDIRECTION"
     * @const
     */
    "REDIRECTION": "REDIRECTION",
    /**
     * value: "CLIENT_ERROR"
     * @const
     */
    "CLIENT_ERROR": "CLIENT_ERROR",
    /**
     * value: "SERVER_ERROR"
     * @const
     */
    "SERVER_ERROR": "SERVER_ERROR",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };


  return exports;
}));


