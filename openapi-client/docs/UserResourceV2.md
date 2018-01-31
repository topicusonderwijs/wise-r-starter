# WiserClient.UserResourceV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schoolId** | **String** | Parent school of the school location. | 
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
**linkedGroups** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of id&#39;s of groups that this user belongs to. | [optional] 
**linkedSchoolLocations** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of id&#39;s of the school locations of this user.  | [optional] 
**urlToKey** | **String** |  | [optional] 


<a name="UserTypeEnum"></a>
## Enum: UserTypeEnum


* `teacher` (value: `"teacher"`)

* `student` (value: `"student"`)




<a name="GenderEnum"></a>
## Enum: GenderEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)

* `unknown` (value: `"unknown"`)




