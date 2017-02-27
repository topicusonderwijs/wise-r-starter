# WiserClient.UsersApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserKey**](UsersApi.md#deleteUserKey) | **DELETE** /v2/users/{id}/keys/client | Delete a key from keyring
[**getUser**](UsersApi.md#getUser) | **GET** /v2/users/{id} | Get User
[**getUserKey**](UsersApi.md#getUserKey) | **GET** /v2/users/{id}/keys/client | Get key from keyring
[**getUserKeys**](UsersApi.md#getUserKeys) | **GET** /v2/users/{id}/keys | Get keys from keyring
[**getUserUwlrKey**](UsersApi.md#getUserUwlrKey) | **GET** /v2/users/{id}/keys/uwlr | Get &#39;UWLR&#39; key from keyring
[**getUsers**](UsersApi.md#getUsers) | **GET** /v2/users | Get Users
[**putUserKey**](UsersApi.md#putUserKey) | **PUT** /v2/users/{id}/keys/client | Save a key in keyring


<a name="deleteUserKey"></a>
# **deleteUserKey**
> Response deleteUserKey(id)

Delete a key from keyring

Delete a client specific key from the keyring for the given User and the authenticated client

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var id = "id_example"; // String | Encrypted userid

apiInstance.deleteUserKey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted userid | 

### Return type

[**Response**](Response.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> UserResourceV2 getUser(id)

Get User

Returns the User with the given (encrypted) id. When receiving a userid through the SSU service, the linked usergroups can be fetched here, after which the groupmembers can be fetched using the Group API. Student details from a student with implied authorization (students in groups with groups permission obtained through SSU service) can also be obtained here.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var id = "id_example"; // String | Encrypted userid

apiInstance.getUser(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted userid | 

### Return type

[**UserResourceV2**](UserResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserKey"></a>
# **getUserKey**
> KeyringResourceV2 getUserKey(id)

Get key from keyring

Get the client specific key of the given User and the authenticated client.

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var id = "id_example"; // String | Encrypted userid

apiInstance.getUserKey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted userid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserKeys"></a>
# **getUserKeys**
> [KeyringResourceV2] getUserKeys(id)

Get keys from keyring

Get all keys, owned by the authenticated client, of the given User. Usually those keys are the client specific key and the &#39;UWLR&#39; key (provided that the authenticated client has access to the latter).

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var id = "id_example"; // String | Encrypted userid

apiInstance.getUserKeys(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted userid | 

### Return type

[**[KeyringResourceV2]**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserUwlrKey"></a>
# **getUserUwlrKey**
> KeyringResourceV2 getUserUwlrKey(id)

Get &#39;UWLR&#39; key from keyring

Get the &#39;UWLR&#39; key of the given User. This key is not client specific (and hence cannot be deleted).

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var id = "id_example"; // String | Encrypted userid

apiInstance.getUserUwlrKey(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Encrypted userid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [UserResourceV2] getUsers(opts)

Get Users

Returns all Users, filtered on schoollocation, group, or usertype. Calls with both &#39;schoollocation&#39; and &#39;groups&#39; empty are discouraged.

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

[**[UserResourceV2]**](UserResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUserKey"></a>
# **putUserKey**
> KeyringResourceV2 putUserKey(body, id)

Save a key in keyring

Save a client specific key in the keyring for the given User and the authenticated client

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.UsersApi();

var body = new WiserClient.KeyValueResourceV2(); // KeyValueResourceV2 | 

var id = "id_example"; // String | Encrypted userid

apiInstance.putUserKey(body, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KeyValueResourceV2**](KeyValueResourceV2.md)|  | 
 **id** | **String**| Encrypted userid | 

### Return type

[**KeyringResourceV2**](KeyringResourceV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

