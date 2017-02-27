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
    define(['ApiClient', 'model/EntityTag', 'model/Link', 'model/Locale', 'model/MediaType', 'model/NewCookie', 'model/StatusType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityTag'), require('./Link'), require('./Locale'), require('./MediaType'), require('./NewCookie'), require('./StatusType'));
  } else {
    // Browser globals (root is window)
    if (!root.WiserClient) {
      root.WiserClient = {};
    }
    root.WiserClient.Response = factory(root.WiserClient.ApiClient, root.WiserClient.EntityTag, root.WiserClient.Link, root.WiserClient.Locale, root.WiserClient.MediaType, root.WiserClient.NewCookie, root.WiserClient.StatusType);
  }
}(this, function(ApiClient, EntityTag, Link, Locale, MediaType, NewCookie, StatusType) {
  'use strict';




  /**
   * The Response model module.
   * @module model/Response
   * @version 2.0
   */

  /**
   * Constructs a new <code>Response</code>.
   * @alias module:model/Response
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response} obj Optional instance to populate.
   * @return {module:model/Response} The populated <code>Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], {'String': [Object]});
      }
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = MediaType.constructFromObject(data['mediaType']);
      }
      if (data.hasOwnProperty('statusInfo')) {
        obj['statusInfo'] = StatusType.constructFromObject(data['statusInfo']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [Link]);
      }
      if (data.hasOwnProperty('allowedMethods')) {
        obj['allowedMethods'] = ApiClient.convertToType(data['allowedMethods'], ['String']);
      }
      if (data.hasOwnProperty('entityTag')) {
        obj['entityTag'] = EntityTag.constructFromObject(data['entityTag']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': [Object]});
      }
      if (data.hasOwnProperty('stringHeaders')) {
        obj['stringHeaders'] = ApiClient.convertToType(data['stringHeaders'], {'String': ['String']});
      }
      if (data.hasOwnProperty('entity')) {
        obj['entity'] = ApiClient.convertToType(data['entity'], Object);
      }
      if (data.hasOwnProperty('cookies')) {
        obj['cookies'] = ApiClient.convertToType(data['cookies'], {'String': NewCookie});
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Integer');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = Locale.constructFromObject(data['language']);
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Object.<String, Array.<Object>>} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * @member {module:model/MediaType} mediaType
   */
  exports.prototype['mediaType'] = undefined;
  /**
   * @member {module:model/StatusType} statusInfo
   */
  exports.prototype['statusInfo'] = undefined;
  /**
   * @member {Array.<module:model/Link>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Array.<String>} allowedMethods
   */
  exports.prototype['allowedMethods'] = undefined;
  /**
   * @member {module:model/EntityTag} entityTag
   */
  exports.prototype['entityTag'] = undefined;
  /**
   * @member {Object.<String, Array.<Object>>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Object.<String, Array.<String>>} stringHeaders
   */
  exports.prototype['stringHeaders'] = undefined;
  /**
   * @member {Object} entity
   */
  exports.prototype['entity'] = undefined;
  /**
   * @member {Object.<String, module:model/NewCookie>} cookies
   */
  exports.prototype['cookies'] = undefined;
  /**
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Integer} length
   */
  exports.prototype['length'] = undefined;
  /**
   * @member {module:model/Locale} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;



  return exports;
}));


