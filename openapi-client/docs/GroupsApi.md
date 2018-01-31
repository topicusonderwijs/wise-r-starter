# WiserClient.GroupsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteGroupKey**](GroupsApi.md#deleteGroupKey) | **DELETE** /v2/groups/{id}/keys | Delete a key from keyring
[**getGroup**](GroupsApi.md#getGroup) | **GET** /v2/groups/{id} | Get Group
[**getGroupKey**](GroupsApi.md#getGroupKey) | **GET** /v2/groups/{id}/keys/client | Get key from keyring
[**getGroupKeys**](GroupsApi.md#getGroupKeys) | **GET** /v2/groups/{id}/keys | Get keys from keyring
[**getGroupUwlrKey**](GroupsApi.md#getGroupUwlrKey) | **GET** /v2/groups/{id}/keys/uwlr | Get &#39;UWLR&#39; key from keyring
[**getGroups**](GroupsApi.md#getGroups) | **GET** /v2/groups | Get Groups
[**putGroupKey**](GroupsApi.md#putGroupKey) | **PUT** /v2/groups/{id}/keys | Save a key in keyring


<a name="deleteGroupKey"></a>
# **deleteGroupKey**
> KeyringResourceV2 deleteGroupKey(id)

Delete a key from keyring

Delete a client specific key from the keyring for the given Group and the authenticated client

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | Encrypted groupid

apiInstance.deleteGroupKey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted groupid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroup"></a>
# **getGroup**
> GroupResourceV2 getGroup(id)

Get Group

Returns the Group with the given id. Permission on Schoollocation or Group level is needed.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | Encrypted groupid

apiInstance.getGroup(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted groupid | 

### Return type

[**GroupResourceV2**](GroupResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupKey"></a>
# **getGroupKey**
> KeyringResourceV2 getGroupKey(id)

Get key from keyring

Get the key from the given Group and the authenticated client

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | Encrypted groupid

apiInstance.getGroupKey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted groupid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupKeys"></a>
# **getGroupKeys**
> [KeyringResourceV2] getGroupKeys(id)

Get keys from keyring

Get all keys, owned by the authenticated client, of the given Group. Usually those keys are the client specific key and the &#39;UWLR&#39; key (provided that the authenticated client has access to the latter).

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | Encrypted groupid

apiInstance.getGroupKeys(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted groupid | 

### Return type

[**[KeyringResourceV2]**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroupUwlrKey"></a>
# **getGroupUwlrKey**
> KeyringResourceV2 getGroupUwlrKey(id)

Get &#39;UWLR&#39; key from keyring

Get the &#39;UWLR&#39; key of the given Group. This key is not client specific (and hence cannot be deleted).

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var id = "id_example"; // String | Encrypted groupid

apiInstance.getGroupUwlrKey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted groupid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGroups"></a>
# **getGroups**
> [GroupResourceV2] getGroups(opts)

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
  'schoolyear': "schoolyear_example", // String | Filter on schoolyear (optional, filters default on <b>current school year</b>. Example value: 2015-2016)
  'user': "user_example", // String | Filter on groups for one specific user. This filter overrules any schoollocation filter.
  'offset': 0, // Integer | Paging: number of records to skip (optional)
  'limit': 100 // Integer | Paging: number of records to return (optional, maximal value: 1000)
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
 **schoolyear** | **String**| Filter on schoolyear (optional, filters default on &lt;b&gt;current school year&lt;/b&gt;. Example value: 2015-2016) | [optional] 
 **user** | **String**| Filter on groups for one specific user. This filter overrules any schoollocation filter. | [optional] 
 **offset** | **Integer**| Paging: number of records to skip (optional) | [optional] [default to 0]
 **limit** | **Integer**| Paging: number of records to return (optional, maximal value: 1000) | [optional] [default to 100]

### Return type

[**[GroupResourceV2]**](GroupResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putGroupKey"></a>
# **putGroupKey**
> KeyringResourceV2 putGroupKey(body, id)

Save a key in keyring

Save a key in keyring for the given Group and the authenticated client

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.GroupsApi();

var body = new WiserClient.KeyValueResourceV2(); // KeyValueResourceV2 | 

var id = "id_example"; // String | Encrypted groupid

apiInstance.putGroupKey(body, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KeyValueResourceV2**](KeyValueResourceV2.md)|  | 
 **id** | **String**| Encrypted groupid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

