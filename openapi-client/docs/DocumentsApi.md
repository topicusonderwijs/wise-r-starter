# WiserClient.DocumentsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putProcessingAgreement**](DocumentsApi.md#putProcessingAgreement) | **PUT** /v2/documents/processingagreement | Upload a processing agreement


<a name="putProcessingAgreement"></a>
# **putProcessingAgreement**
> Response putProcessingAgreement(upload, schoollocation)

Upload a processing agreement

Upload a processing agreement to Wise-r

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.DocumentsApi();

var upload = "/path/to/file.txt"; // File | PDF bestand

var schoollocation = "schoollocation_example"; // String | id of the school location

apiInstance.putProcessingAgreement(upload, schoollocation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload** | **File**| PDF bestand | 
 **schoollocation** | **String**| id of the school location | 

### Return type

[**Response**](Response.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

