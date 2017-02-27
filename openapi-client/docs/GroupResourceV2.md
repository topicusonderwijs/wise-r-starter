# WiserClient.GroupResourceV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of this resource | 
**name** | **String** |  | [optional] 
**schoolyear** | **String** | schoolyear, for example 2016-2017 | [optional] 
**schoolId** | **String** | Parent school of this location. | [optional] 
**type** | **String** | grouptype | [optional] 
**linkedResources** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of id&#39;s of Resources (Groups or Users) that belong to this Group | [optional] 
**linkedSchoolLocations** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of linked schoolLocationId&#39;s of the current group.  | [optional] 
**urlToKey** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `group` (value: `"group"`)

* `class` (value: `"class"`)

* `planner` (value: `"planner"`)




