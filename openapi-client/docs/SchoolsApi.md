# WiserClient.SchoolsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getParentSchool**](SchoolsApi.md#getParentSchool) | **GET** /v2/schoolLocations/parent/{id} | Get School
[**getSchoolLocation**](SchoolsApi.md#getSchoolLocation) | **GET** /v2/schoolLocations/{id} | Get SchoolLocation
[**getSchoolLocations**](SchoolsApi.md#getSchoolLocations) | **GET** /v2/schoolLocations | Get Schools


<a name="getParentSchool"></a>
# **getParentSchool**
> SchoolResource getParentSchool(id)

Get School

Returns the School with the given id.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.SchoolsApi();

var id = "id_example"; // String | 

apiInstance.getParentSchool(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**SchoolResource**](SchoolResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSchoolLocation"></a>
# **getSchoolLocation**
> SchoolLocationResourceV2 getSchoolLocation(id)

Get SchoolLocation

Returns the SchoolLocation (and schoolId) with the given id.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.SchoolsApi();

var id = "id_example"; // String | 

apiInstance.getSchoolLocation(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**SchoolLocationResourceV2**](SchoolLocationResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSchoolLocations"></a>
# **getSchoolLocations**
> [SchoolLocationResourceV2] getSchoolLocations(opts)

Get Schools

Returns the Schools and SchoolLocations for which the REST client has (partial) authorization.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.SchoolsApi();

var opts = { 
  'naamFilter': "naamFilter_example", // String | Filter on name (optional)
  'brincodeFilter': "brincodeFilter_example", // String | Filter on brincode (optional)
  'dependancecodeFilter': "dependancecodeFilter_example", // String | Filter on dependancecode (optional)
  'schoolkeyFilter': "schoolkeyFilter_example", // String | Filter on schoolkey (optional)
  'schoolId': "schoolId_example", // String | Filter on parent school (optional)
  'offset': 0, // Integer | Paging: number of records to skip (optional)
  'limit': 100 // Integer | Paging: number of records to return (optional, maximal value: 100)
};
apiInstance.getSchoolLocations(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **naamFilter** | **String**| Filter on name (optional) | [optional] 
 **brincodeFilter** | **String**| Filter on brincode (optional) | [optional] 
 **dependancecodeFilter** | **String**| Filter on dependancecode (optional) | [optional] 
 **schoolkeyFilter** | **String**| Filter on schoolkey (optional) | [optional] 
 **schoolId** | **String**| Filter on parent school (optional) | [optional] 
 **offset** | **Integer**| Paging: number of records to skip (optional) | [optional] [default to 0]
 **limit** | **Integer**| Paging: number of records to return (optional, maximal value: 100) | [optional] [default to 100]

### Return type

[**[SchoolLocationResourceV2]**](SchoolLocationResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

