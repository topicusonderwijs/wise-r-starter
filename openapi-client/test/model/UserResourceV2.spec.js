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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WiserClient);
  }
}(this, function(expect, WiserClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WiserClient.UserResourceV2();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserResourceV2', function() {
    it('should create an instance of UserResourceV2', function() {
      // uncomment below and update the code to test UserResourceV2
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be.a(WiserClient.UserResourceV2);
    });

    it('should have the property schoolId (base name: "schoolId")', function() {
      // uncomment below and update the code to test the property schoolId
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property initials (base name: "initials")', function() {
      // uncomment below and update the code to test the property initials
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property surname (base name: "surname")', function() {
      // uncomment below and update the code to test the property surname
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property birthDate (base name: "birthDate")', function() {
      // uncomment below and update the code to test the property birthDate
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property userType (base name: "userType")', function() {
      // uncomment below and update the code to test the property userType
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property grade (base name: "grade")', function() {
      // uncomment below and update the code to test the property grade
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property sector (base name: "sector")', function() {
      // uncomment below and update the code to test the property sector
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property linkedGroups (base name: "linkedGroups")', function() {
      // uncomment below and update the code to test the property linkedGroups
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property linkedSchoolLocations (base name: "linkedSchoolLocations")', function() {
      // uncomment below and update the code to test the property linkedSchoolLocations
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

    it('should have the property urlToKey (base name: "urlToKey")', function() {
      // uncomment below and update the code to test the property urlToKey
      //var instane = new WiserClient.UserResourceV2();
      //expect(instance).to.be();
    });

  });

}));
