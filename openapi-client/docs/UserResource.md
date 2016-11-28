# wise-r-openapi-client.UserResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organisatieKey** | **String** |  | [optional] 
**id** | **String** | The ID of this resource | 
**initials** | **String** |  | [optional] 
**firstname** | **String** |  | [optional] 
**surname** | **String** |  | [optional] 
**prefix** | **String** |  | [optional] 
**birthdate** | **Date** |  | [optional] 
**email** | **String** |  | [optional] 
**userType** | **String** |  | [optional] 
**grade** | **String** | Current grade the student is in | [optional] 
**gender** | **String** |  | [optional] 
**sector** | **String** | Sector of education of this identity. PO/SO/VO/BO/HO/ANDERS/ONBEKEND | [optional] 
**schoolLocations** | [**[SchoolLocationResource]**](SchoolLocationResource.md) | List of SchoolLocations this User belongs to | [optional] 
**linkedGroups** | [**[RestResourceLink]**](RestResourceLink.md) | List of id&#39;s of Groups which this User belongs to | [optional] 
**linkedSchoolLocationIds** | [**[RestResourceLink]**](RestResourceLink.md) | List of id&#39;s of SchoolLocations this User belongs to. Deprecated, use &#39;schoolLocations&#39;. | [optional] 
**urlToKey** | **String** |  | [optional] 
**organisationId** | **String** | The ID of the Organisation | 


<a name="UserTypeEnum"></a>
## Enum: UserTypeEnum


* `student` (value: `"student"`)

* `teacher` (value: `"teacher"`)




<a name="GenderEnum"></a>
## Enum: GenderEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)

* `unknown` (value: `"unknown"`)




