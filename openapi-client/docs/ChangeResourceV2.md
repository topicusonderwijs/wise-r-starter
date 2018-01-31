# WiserClient.ChangeResourceV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schoolId** | **String** | Parent school of the school location. | 
**id** | **String** | The identifier of the resource | [optional] 
**timestamp** | **Date** | The timestamp of the change | 
**changeType** | **String** | The type of change | 
**changedResourceType** | **String** | The type of the changed resource | 
**links** | [**[AanbiederIdRestResourceLink]**](AanbiederIdRestResourceLink.md) | The links to the changed resources (one or more) | 
**linkedSchoolLocation** | [**RestResourceLinkV2**](RestResourceLinkV2.md) | Linked schoolLocationId of the entity. | [optional] 


<a name="ChangeTypeEnum"></a>
## Enum: ChangeTypeEnum


* `CREATE` (value: `"CREATE"`)

* `UPDATE` (value: `"UPDATE"`)

* `DELETE` (value: `"DELETE"`)




<a name="ChangedResourceTypeEnum"></a>
## Enum: ChangedResourceTypeEnum


* `schoollocation` (value: `"schoollocation"`)

* `user` (value: `"user"`)

* `group` (value: `"group"`)

* `groupmembership` (value: `"groupmembership"`)




