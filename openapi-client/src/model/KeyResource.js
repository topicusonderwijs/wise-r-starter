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
    root.WiserClient.KeyResource = factory(root.WiserClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The KeyResource model module.
   * @module model/KeyResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KeyResource</code>.
   * Key
   * @alias module:model/KeyResource
   * @class
   * @param keyValue {String} The value of the key
   */
  var exports = function(keyValue) {
    var _this = this;

    _this['keyValue'] = keyValue;
  };

  /**
   * Constructs a <code>KeyResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeyResource} obj Optional instance to populate.
   * @return {module:model/KeyResource} The populated <code>KeyResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keyValue')) {
        obj['keyValue'] = ApiClient.convertToType(data['keyValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * The value of the key
   * @member {String} keyValue
   */
  exports.prototype['keyValue'] = undefined;



  return exports;
}));


