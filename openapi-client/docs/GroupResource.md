# wise-r-openapi-client.GroupResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organisatieKey** | **String** |  | [optional] 
**id** | **String** | The ID of this resource | 
**name** | **String** |  | [optional] 
**schoolyear** | **String** | schoolyear, for example 2014-2015 | [optional] 
**schoolId** | **String** | Parent school of this location. | [optional] 
**type** | **String** | grouptype | [optional] 
**linkedResources** | [**[RestResourceLink]**](RestResourceLink.md) | List of id&#39;s of Resources (Groups or Users) that belong to this Group | [optional] 
**linkedSchoolLocationIds** | [**[RestResourceLink]**](RestResourceLink.md) | List of linked schoolLocationId&#39;s of the current group.  | [optional] 
**urlToKey** | **String** |  | [optional] 
**organisationId** | **String** | The ID of the Organisation | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `group` (value: `"group"`)

* `class` (value: `"class"`)

* `planner` (value: `"planner"`)




