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
    if (!root.wise-r-openapi-client) {
      root.wise-r-openapi-client = {};
    }
    root.wise-r-openapi-client.RestResourceLink = factory(root.wise-r-openapi-client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RestResourceLink model module.
   * @module model/RestResourceLink
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RestResourceLink</code>.
   * @alias module:model/RestResourceLink
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RestResourceLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestResourceLink} obj Optional instance to populate.
   * @return {module:model/RestResourceLink} The populated <code>RestResourceLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('resourceType')) {
        obj['resourceType'] = ApiClient.convertToType(data['resourceType'], 'String');
      }
    }
    return obj;
  }

  /**
   * The URL of the resource, including API version
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The unique identifier for this resource
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The type of the resource
   * @member {module:model/RestResourceLink.ResourceTypeEnum} resourceType
   */
  exports.prototype['resourceType'] = undefined;


  /**
   * Allowed values for the <code>resourceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResourceTypeEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "group"
     * @const
     */
    "group": "group",
    /**
     * value: "schoollocation"
     * @const
     */
    "schoollocation": "schoollocation"  };


  return exports;
}));


