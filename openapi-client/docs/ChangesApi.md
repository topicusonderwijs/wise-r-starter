# WiserClient.ChangesApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChanges**](ChangesApi.md#getChanges) | **GET** /v2/changes | Get Changes in Users and Groups.


<a name="getChanges"></a>
# **getChanges**
> ChangeSetV2 getChanges(schoollocations, opts)

Get Changes in Users and Groups.

&lt;p&gt;Returns Changes in Users and Groups. &lt;/p&gt;&lt;p&gt; The list of Changes contain one or more links to the relevant REST resources. Some Changes contain one link, others contain two links: &lt;/p&gt;&lt;ul&gt;&lt;li&gt;If a Group or User is changed, one link to that User or Group will be returned in the Change.&lt;/li&gt; &lt;li&gt;If a Groupmembership is changed, two links will be returned, one link to the User and one to the Group.&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;The Changes are paginated, if there are more Changes available the call has to be repeated. The value of &#39;nextId&#39; determines which Change is retrieved last, and has to be used to get more Changes. If the list of Changes is empty, then there are no new Changes. The API does not remember which Changes you already have, the value of &#39;nextId&#39; determines the last retrieved Change of the client, so it is the responsibility of the REST client to remember this.&lt;/p&gt; &lt;p&gt;You have to always explicitly filter the Changes call on a given list of Schoollocations. When an authorization is removed from a Schoollocation, you wil get an error that indicates which authorizations have been removed.&lt;/p&gt;&lt;h2&gt;Initial synchronisation of new schoollocations&lt;/h2&gt;&lt;p&gt;If autorisation is added for a new schoollocation, the new schoollocation should be synchronised fully. This full sync is not necessary when adding an identity autorisation via the Single Sign Up functionality, if the identity is retrieved using the Users and Groups API&#39;s.&lt;/p&gt;&lt;p&gt;Detecting new schoollocations can be done with the Schools API: retrieve a list of schoollocations before every sync. Compare the list of schoollocations (which only contain schoollocations that the REST client is autorised for) to see if there are new schoollocations in the list, or if there are schoollocations that have been removed. If there is a new schoollocation, retrieve the Changes for this schoollocation, starting with nextId&#x3D;0. If the new schoollocation is up to date, it can be retrieved as part of a single call to retrieve changes for all schoollocations. &lt;/p&gt;&lt;p&gt; When combining schoollocations in a single call, always use the lowest &#39;nextId&#39; from these schoollocations.After adding the new schoollocations, retrieve the Changes for all schoollocations, while remembering the &#39;nextId&#39; per schoollocation.&lt;/p&gt; &lt;h2&gt;Permissions on Schoollocations&lt;/h2&gt;&lt;p&gt;If the REST client is not authorized for a schoollocation in the filter, an error message will be returned to indicate for which schoollocations there is no authorization.&lt;/p&gt;&lt;p&gt;When you have a permission for a specific Identity, this identity will also be included in the Changes API. When there is a permission for a Group, the students linked to this group will also be monitored for changes. When using the Single Sign Up service, when a teacher allows access to his identity information, he will automatically give (limited) access to his groups and students belonging to his groups.&lt;/p&gt;

### Example
```javascript
var WiserClient = require('wise-r-openapi-client');
var defaultClient = WiserClient.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth_client_credentials
var oauth_client_credentials = defaultClient.authentications['oauth_client_credentials'];
oauth_client_credentials.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WiserClient.ChangesApi();

var schoollocations = ["schoollocations_example"]; // [String] | Filter on schoollocations (required, list of id's)

var opts = { 
  'nextId': 0 // Integer | ID that was returned the last time when retrieving Changes for this set of schoollocations. When empty, all Changes will be returned from the start.
};
apiInstance.getChanges(schoollocations, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schoollocations** | [**[String]**](String.md)| Filter on schoollocations (required, list of id&#39;s) | 
 **nextId** | **Integer**| ID that was returned the last time when retrieving Changes for this set of schoollocations. When empty, all Changes will be returned from the start. | [optional] [default to 0]

### Return type

[**ChangeSetV2**](ChangeSetV2.md)

### Authorization

[oauth_client_credentials](../README.md#oauth_client_credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

