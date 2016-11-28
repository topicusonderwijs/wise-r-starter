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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.wise-r-openapi-client);
  }
}(this, function(expect, wise-r-openapi-client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new wise-r-openapi-client.UserResource();
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

  describe('UserResource', function() {
    it('should create an instance of UserResource', function() {
      // uncomment below and update the code to test UserResource
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be.a(wise-r-openapi-client.UserResource);
    });

    it('should have the property organisatieKey (base name: "organisatieKey")', function() {
      // uncomment below and update the code to test the property organisatieKey
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property initials (base name: "initials")', function() {
      // uncomment below and update the code to test the property initials
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property surname (base name: "surname")', function() {
      // uncomment below and update the code to test the property surname
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property birthdate (base name: "birthdate")', function() {
      // uncomment below and update the code to test the property birthdate
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property userType (base name: "userType")', function() {
      // uncomment below and update the code to test the property userType
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property grade (base name: "grade")', function() {
      // uncomment below and update the code to test the property grade
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property sector (base name: "sector")', function() {
      // uncomment below and update the code to test the property sector
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property schoolLocations (base name: "schoolLocations")', function() {
      // uncomment below and update the code to test the property schoolLocations
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property linkedGroups (base name: "linkedGroups")', function() {
      // uncomment below and update the code to test the property linkedGroups
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property linkedSchoolLocationIds (base name: "linkedSchoolLocationIds")', function() {
      // uncomment below and update the code to test the property linkedSchoolLocationIds
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property urlToKey (base name: "urlToKey")', function() {
      // uncomment below and update the code to test the property urlToKey
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "organisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new wise-r-openapi-client.UserResource();
      //expect(instance).to.be();
    });

  });

}));
