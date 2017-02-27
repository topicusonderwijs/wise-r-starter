# WiserClient.DocumentsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putProcessorAgreement**](DocumentsApi.md#putProcessorAgreement) | **PUT** /v2/documents/processoragreement | Upload a processor agreement


<a name="putProcessorAgreement"></a>
# **putProcessorAgreement**
> Response putProcessorAgreement(upload, schoollocation)

Upload a processor agreement

Upload a processor agreement to Wise-r

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');

var apiInstance = new WiserClient.DocumentsApi();

var upload = "/path/to/file.txt"; // File | PDF bestand

var schoollocation = "schoollocation_example"; // String | id of the school location

apiInstance.putProcessorAgreement(upload, schoollocation).then(function(data) {
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

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

