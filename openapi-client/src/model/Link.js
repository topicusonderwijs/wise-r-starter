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
    define(['ApiClient', 'model/UriBuilder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UriBuilder'));
  } else {
    // Browser globals (root is window)
    if (!root.WiserClient) {
      root.WiserClient = {};
    }
    root.WiserClient.Link = factory(root.WiserClient.ApiClient, root.WiserClient.UriBuilder);
  }
}(this, function(ApiClient, UriBuilder) {
  'use strict';




  /**
   * The Link model module.
   * @module model/Link
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Link</code>.
   * @alias module:model/Link
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Link} obj Optional instance to populate.
   * @return {module:model/Link} The populated <code>Link</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uriBuilder')) {
        obj['uriBuilder'] = UriBuilder.constructFromObject(data['uriBuilder']);
      }
      if (data.hasOwnProperty('rel')) {
        obj['rel'] = ApiClient.convertToType(data['rel'], 'String');
      }
      if (data.hasOwnProperty('rels')) {
        obj['rels'] = ApiClient.convertToType(data['rels'], ['String']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/UriBuilder} uriBuilder
   */
  exports.prototype['uriBuilder'] = undefined;
  /**
   * @member {String} rel
   */
  exports.prototype['rel'] = undefined;
  /**
   * @member {Array.<String>} rels
   */
  exports.prototype['rels'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * @member {Object.<String, String>} params
   */
  exports.prototype['params'] = undefined;



  return exports;
}));


