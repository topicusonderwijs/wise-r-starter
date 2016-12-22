# WiserClient.GroupsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroup**](GroupsApi.md#getGroup) | **GET** /v1/groups/{id} | Get Group
[**getGroups**](GroupsApi.md#getGroups) | **GET** /v1/groups | Get Groups
[**getKey**](GroupsApi.md#getKey) | **GET** /v1/groups/{id}/keys/{clientid} | Get key from keyring
[**getKeys**](GroupsApi.md#getKeys) | **GET** /v1/groups/{id}/keys | Get keys from keyring
[**putKey**](GroupsApi.md#putKey) | **PUT** /v1/groups/{id}/keys/{clientid} | Save a key in keyring


<a name="getGroup"></a>
# **getGroup**
> GroupResource getGroup(id)

Get Group

Returns the Group with the given id. Schoollocation permission or a Group permission is needed.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | 

apiInstance.getGroup(id).then(function(data) {
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

[**GroupResource**](GroupResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroups"></a>
# **getGroups**
> [GroupResource] getGroups(opts)

Get Groups

Returns all Groups, filtered on schoollocation.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var opts = { 
  'schoollocations': ["schoollocations_example"], // [String] | Filter on schoollocations (optional, list of id's)
  'schoolyear': "schoolyear_example", // String | Filter on schoolyear (optional, filters default on current school year. Example value: 2015-2016)
  'offset': 0, // Integer | Paging: number of records to skip (optional)
  'limit': 100 // Integer | Paging: number of records to return (optional, maximal value: 100)
};
apiInstance.getGroups(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schoollocations** | [**[String]**](String.md)| Filter on schoollocations (optional, list of id&#39;s) | [optional] 
 **schoolyear** | **String**| Filter on schoolyear (optional, filters default on current school year. Example value: 2015-2016) | [optional] 
 **offset** | **Integer**| Paging: number of records to skip (optional) | [optional] [default to 0]
 **limit** | **Integer**| Paging: number of records to return (optional, maximal value: 100) | [optional] [default to 100]

### Return type

[**[GroupResource]**](GroupResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getKey"></a>
# **getKey**
> KeyResource getKey(id, clientid)

Get key from keyring

Get the key from this Group and the given REST client ID.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | 

var clientid = "clientid_example"; // String | 

apiInstance.getKey(id, clientid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **clientid** | **String**|  | 

### Return type

[**KeyResource**](KeyResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getKeys"></a>
# **getKeys**
> KeyringResource getKeys(id)

Get keys from keyring

Get the keys from this Group.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | 

apiInstance.getKeys(id).then(function(data) {
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

[**KeyringResource**](KeyringResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putKey"></a>
# **putKey**
> KeyResource putKey(body, id, clientid)

Save a key in keyring

Save a key in keyring

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var body = new WiserClient.KeyResource(); // KeyResource | 

var id = "id_example"; // String | 

var clientid = "clientid_example"; // String | 

apiInstance.putKey(body, id, clientid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KeyResource**](KeyResource.md)|  | 
 **id** | **String**|  | 
 **clientid** | **String**|  | 

### Return type

[**KeyResource**](KeyResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

