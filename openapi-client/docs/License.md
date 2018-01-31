# WiserClient.License

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schoolId** | **String** | Parent school of the school location. | 
**id** | **String** | The ID of license. For creation this value should be left empty, for updating it is a required field | [optional] 
**startDate** | **Date** | format: yyyy-MM-dd | [optional] 
**endDate** | **Date** | format: yyyy-MM-dd | [optional] 
**application** | **String** |  | [optional] 
**teacherId** | **String** |  | [optional] 
**schoolLocationId** | **String** |  | [optional] 
**group** | **String** |  | [optional] 
**licenseType** | **String** |  | [optional] 
**licenseStatus** | **String** |  | [optional] 


<a name="LicenseTypeEnum"></a>
## Enum: LicenseTypeEnum


* `TRIAL` (value: `"TRIAL"`)

* `FULL` (value: `"FULL"`)

* `FREE` (value: `"FREE"`)

* `PENDING` (value: `"PENDING"`)

* `LIMITED` (value: `"LIMITED"`)




<a name="LicenseStatusEnum"></a>
## Enum: LicenseStatusEnum


* `LATEST` (value: `"LATEST"`)

* `DEPRECATED` (value: `"DEPRECATED"`)




