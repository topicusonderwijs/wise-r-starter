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
    define(['ApiClient', 'model/RestResourceLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RestResourceLink'));
  } else {
    // Browser globals (root is window)
    if (!root.wise-r-openapi-client) {
      root.wise-r-openapi-client = {};
    }
    root.wise-r-openapi-client.ChangeResource = factory(root.wise-r-openapi-client.ApiClient, root.wise-r-openapi-client.RestResourceLink);
  }
}(this, function(ApiClient, RestResourceLink) {
  'use strict';




  /**
   * The ChangeResource model module.
   * @module model/ChangeResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ChangeResource</code>.
   * Bij wijzigingen kunnen verschillende aantallen links worden meegegeven. Als een Group of User gewijzigd is dan zal er Ã©Ã©n link worden meegestuurd naar die User of Group. Als het changedResourceType een groupmembership is, dan worden in de links zowel de betreffende User als Group meegestuurd.
   * @alias module:model/ChangeResource
   * @class
   * @param id {Integer} The ID of this resource
   * @param timestamp {Date} The timestamp of the change
   * @param changeType {module:model/ChangeResource.ChangeTypeEnum} The type of change
   * @param changedResourceType {module:model/ChangeResource.ChangedResourceTypeEnum} The type of the changed resource
   * @param links {Array.<module:model/RestResourceLink>} The links to the changed resources (one or more)
   * @param organisationId {String} The ID of the Organisation
   */
  var exports = function(id, timestamp, changeType, changedResourceType, links, organisationId) {
    var _this = this;


    _this['id'] = id;
    _this['timestamp'] = timestamp;
    _this['changeType'] = changeType;
    _this['changedResourceType'] = changedResourceType;
    _this['links'] = links;
    _this['organisationId'] = organisationId;
  };

  /**
   * Constructs a <code>ChangeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeResource} obj Optional instance to populate.
   * @return {module:model/ChangeResource} The populated <code>ChangeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organisatieKey')) {
        obj['organisatieKey'] = ApiClient.convertToType(data['organisatieKey'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('changeType')) {
        obj['changeType'] = ApiClient.convertToType(data['changeType'], 'String');
      }
      if (data.hasOwnProperty('changedResourceType')) {
        obj['changedResourceType'] = ApiClient.convertToType(data['changedResourceType'], 'String');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], [RestResourceLink]);
      }
      if (data.hasOwnProperty('organisationId')) {
        obj['organisationId'] = ApiClient.convertToType(data['organisationId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} organisatieKey
   */
  exports.prototype['organisatieKey'] = undefined;
  /**
   * The ID of this resource
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The timestamp of the change
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The type of change
   * @member {module:model/ChangeResource.ChangeTypeEnum} changeType
   */
  exports.prototype['changeType'] = undefined;
  /**
   * The type of the changed resource
   * @member {module:model/ChangeResource.ChangedResourceTypeEnum} changedResourceType
   */
  exports.prototype['changedResourceType'] = undefined;
  /**
   * The links to the changed resources (one or more)
   * @member {Array.<module:model/RestResourceLink>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * The ID of the Organisation
   * @member {String} organisationId
   */
  exports.prototype['organisationId'] = undefined;


  /**
   * Allowed values for the <code>changeType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChangeTypeEnum = {
    /**
     * value: "CREATE"
     * @const
     */
    "CREATE": "CREATE",
    /**
     * value: "UPDATE"
     * @const
     */
    "UPDATE": "UPDATE",
    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE"  };

  /**
   * Allowed values for the <code>changedResourceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChangedResourceTypeEnum = {
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
     * value: "groupmembership"
     * @const
     */
    "groupmembership": "groupmembership"  };


  return exports;
}));

