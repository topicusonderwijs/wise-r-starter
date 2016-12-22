# WiserClient.UsersApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKey**](UsersApi.md#getKey) | **GET** /v1/users/{id}/keys/{clientid} | Get key from keyring
[**getKeys**](UsersApi.md#getKeys) | **GET** /v1/users/{id}/keys | Get keys from keyring
[**getUser**](UsersApi.md#getUser) | **GET** /v1/users/{id} | Get User
[**getUsers**](UsersApi.md#getUsers) | **GET** /v1/users | Get Users
[**putKey**](UsersApi.md#putKey) | **PUT** /v1/users/{id}/keys/{clientid} | Save a key in keyring


<a name="getKey"></a>
# **getKey**
> KeyResource getKey(id, clientid)

Get key from keyring

Get the key from this User and the given REST client ID.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

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

Get the keys from this User.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

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

<a name="getUser"></a>
# **getUser**
> UserResource getUser(id)

Get User

Returns the User with the given id. When receiving a userid through the SSU service, the linked usergroups can be fetched here, after which the groupmembers can be fetched using the Group API. Students details from students with implied authorization (students in groups with groupspermission obtained through SSU service) can also be obtained here.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var id = "id_example"; // String | 

apiInstance.getUser(id).then(function(data) {
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

[**UserResource**](UserResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [UserResource] getUsers(opts)

Get Users

Returns all Users, filtered on schoollocation, group, or usertype.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var opts = { 
  'usertype': "usertype_example", // String | Filter the type of User (optional)
  'schoollocations': ["schoollocations_example"], // [String] | Filter on schoollocations (optional, list of id's)
  'groups': ["groups_example"], // [String] | Filter on groups (optional, list of id's)
  'offset': 0, // Integer | Paging: number of records to skip (optional)
  'limit': 100 // Integer | Paging: number of records to return (optional, maximal value: 100)
};
apiInstance.getUsers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usertype** | **String**| Filter the type of User (optional) | [optional] 
 **schoollocations** | [**[String]**](String.md)| Filter on schoollocations (optional, list of id&#39;s) | [optional] 
 **groups** | [**[String]**](String.md)| Filter on groups (optional, list of id&#39;s) | [optional] 
 **offset** | **Integer**| Paging: number of records to skip (optional) | [optional] [default to 0]
 **limit** | **Integer**| Paging: number of records to return (optional, maximal value: 100) | [optional] [default to 100]

### Return type

[**[UserResource]**](UserResource.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putKey"></a>
# **putKey**
> KeyResource putKey(body, id, clientid)

Save a key in keyring

Save a key in keyring for the given client id

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

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

