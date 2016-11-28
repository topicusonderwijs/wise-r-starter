# wise-r-openapi-client.SchoolsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganisation**](SchoolsApi.md#getOrganisation) | **GET** /v1/schools/{id} | Get SchoolLocation
[**getParentOrganisation**](SchoolsApi.md#getParentOrganisation) | **GET** /v1/schools/parent/{id} | Get School
[**organisations**](SchoolsApi.md#organisations) | **GET** /v1/schools | Get Schools


<a name="getOrganisation"></a>
# **getOrganisation**
> SchoolLocationResource getOrganisation(id)

Get SchoolLocation

Returns the SchoolLocation (and schoolId) with the given id.

### Example
```javascript
var wise-r-openapi-client = require('wise-r-openapi-client');
var defaultClient = wise-r-openapi-client.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new wise-r-openapi-client.SchoolsApi();

var id = "id_example"; // String | 

apiInstance.getOrganisation(id).then(function(data) {
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

[**SchoolLocationResource**](SchoolLocationResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getParentOrganisation"></a>
# **getParentOrganisation**
> SchoolResource getParentOrganisation(id)

Get School

Returns the School with the given id.

### Example
```javascript
var wise-r-openapi-client = require('wise-r-openapi-client');
var defaultClient = wise-r-openapi-client.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new wise-r-openapi-client.SchoolsApi();

var id = "id_example"; // String | 

apiInstance.getParentOrganisation(id).then(function(data) {
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

<a name="organisations"></a>
# **organisations**
> SchoolLocationResource organisations(opts)

Get Schools

Returns the Schools and SchoolLocations for which the REST client has (partial) authorization.

### Example
```javascript
var wise-r-openapi-client = require('wise-r-openapi-client');
var defaultClient = wise-r-openapi-client.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new wise-r-openapi-client.SchoolsApi();

var opts = { 
  'naamFilter': "naamFilter_example", // String | Filter on name (optional)
  'brincodeFilter': "brincodeFilter_example", // String | Filter on brincode (optional)
  'dependancecodeFilter': "dependancecodeFilter_example", // String | Filter on dependancecode (optional)
  'schoolkeyFilter': "schoolkeyFilter_example", // String | Filter on schoolkey (optional)
  'schoolId': "schoolId_example", // String | Filter on parent school (optional)
  'offset': 0, // Integer | Paging: number of records to skip (optional)
  'limit': 100 // Integer | Paging: number of records to return (optional, maximal value: 100)
};
apiInstance.organisations(opts).then(function(data) {
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

[**SchoolLocationResource**](SchoolLocationResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

