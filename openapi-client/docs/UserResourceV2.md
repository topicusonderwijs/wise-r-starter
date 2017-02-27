# WiserClient.UserResourceV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of this resource | 
**initials** | **String** | Initials | [optional] 
**firstName** | **String** | First name | [optional] 
**surname** | **String** | Surname | [optional] 
**prefix** | **String** | Name prefix. Sometimes the prefix is part of the surname, depending on the conventions of the source system. | [optional] 
**birthDate** | **String** | Birth date | [optional] 
**email** | **String** | Email address | [optional] 
**userType** | **String** | Type of user | [optional] 
**grade** | **String** | Grade (only applicable for students) | [optional] 
**gender** | **String** | Gender | [optional] 
**sector** | **String** | Education sector for this user (Dutch abbreviation) | [optional] 
**linkedSchoolLocations** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of linked schoolLocationId&#39;s of the current user.  | [optional] 
**linkedGroups** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of id&#39;s of groups that this user belongs to. | [optional] 
**urlToKey** | **String** |  | [optional] 


<a name="UserTypeEnum"></a>
## Enum: UserTypeEnum


* `student` (value: `"student"`)

* `teacher` (value: `"teacher"`)




<a name="GenderEnum"></a>
## Enum: GenderEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)

* `unknown` (value: `"unknown"`)




