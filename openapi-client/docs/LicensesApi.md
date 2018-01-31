# WiserClient.LicensesApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLicense**](LicensesApi.md#createLicense) | **POST** /v2/licenses | Create a new license
[**getLicense**](LicensesApi.md#getLicense) | **GET** /v2/licenses/{id} | Get License
[**getLicenses**](LicensesApi.md#getLicenses) | **GET** /v2/licenses | Get Licenses
[**updateLicense**](LicensesApi.md#updateLicense) | **PUT** /v2/licenses | Update an existing license


<a name="createLicense"></a>
# **createLicense**
> [License] createLicense(opts)

Create a new license

Create a new license for the given teacher or school location. The time is stripped from the date fields.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.LicensesApi();

var opts = { 
  'body': new WiserClient.License() // License | 
};
apiInstance.createLicense(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**License**](License.md)|  | [optional] 

### Return type

[**[License]**](License.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLicense"></a>
# **getLicense**
> [License] getLicense(id)

Get License

Return the License with the given id

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.LicensesApi();

var id = "id_example"; // String | Id of the license

apiInstance.getLicense(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the license | 

### Return type

[**[License]**](License.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLicenses"></a>
# **getLicenses**
> [License] getLicenses(opts)

Get Licenses

Returns all active Licenses for your applications

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.LicensesApi();

var opts = { 
  'schoollocations': ["schoollocations_example"], // [String] | Filter on schoollocations (optional, list of id's)
  'applications': ["applications_example"], // [String] | Filter on applications (optional, list of id's)
  'users': ["users_example"] // [String] | Filter on specific users
};
apiInstance.getLicenses(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schoollocations** | [**[String]**](String.md)| Filter on schoollocations (optional, list of id&#39;s) | [optional] 
 **applications** | [**[String]**](String.md)| Filter on applications (optional, list of id&#39;s) | [optional] 
 **users** | [**[String]**](String.md)| Filter on specific users | [optional] 

### Return type

[**[License]**](License.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLicense"></a>
# **updateLicense**
> [License] updateLicense(opts)

Update an existing license

Updates fields of the license with the given id. The id is immutable and the time is stripped from the date fields.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.LicensesApi();

var opts = { 
  'body': new WiserClient.License() // License | 
};
apiInstance.updateLicense(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**License**](License.md)|  | [optional] 

### Return type

[**[License]**](License.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

