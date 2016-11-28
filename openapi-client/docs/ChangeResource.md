# wise-r-openapi-client.ChangeResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organisatieKey** | **String** |  | [optional] 
**id** | **Integer** | The ID of this resource | 
**timestamp** | **Date** | The timestamp of the change | 
**changeType** | **String** | The type of change | 
**changedResourceType** | **String** | The type of the changed resource | 
**links** | [**[RestResourceLink]**](RestResourceLink.md) | The links to the changed resources (one or more) | 
**organisationId** | **String** | The ID of the Organisation | 


<a name="ChangeTypeEnum"></a>
## Enum: ChangeTypeEnum


* `CREATE` (value: `"CREATE"`)

* `UPDATE` (value: `"UPDATE"`)

* `DELETE` (value: `"DELETE"`)




<a name="ChangedResourceTypeEnum"></a>
## Enum: ChangedResourceTypeEnum


* `user` (value: `"user"`)

* `group` (value: `"group"`)

* `groupmembership` (value: `"groupmembership"`)




