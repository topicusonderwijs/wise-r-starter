# WiserClient.GroupResourceV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schoolId** | **String** | Parent school of the school location. | 
**id** | **String** | The ID of this resource | 
**name** | **String** | Name of the group | [optional] 
**schoolyear** | **String** | schoolyear | [optional] 
**type** | **String** | grouptype | [optional] 
**linkedSchoolLocations** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of linked schoolLocationId&#39;s of the current group.  | [optional] 
**linkedResources** | [**[RestResourceLinkV2]**](RestResourceLinkV2.md) | List of id&#39;s of Resources (Groups or Users) that belong to this Group | [optional] 
**urlToKey** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `group` (value: `"group"`)

* `class` (value: `"class"`)

* `planner` (value: `"planner"`)




