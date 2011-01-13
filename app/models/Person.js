/**
 * @class Person
 * @extends Ext.data.Model
 * 
 * The Person model is the actual person / contact.
 */
Ext.regModel("Person", {
    fields: [
        {name: "id", type: "int"},
        {name: "externalId", type: "int"},
        {name: "primaryName", type: "string"},
        {name: "lastName", type: "string"},
        {name: "companyName", type: "string"},
        {name: "emailAddress", type: "string"},
        {name: "primaryPhoneNumber", type: "string"},
        {name: "zipCodeId", type: "int"},
        {name: "primaryCategoryId", type: "int"},
        {name: "secondaryCategoryId", type: "int"},
        {name: "cityId", type: "int"},
        {name: "primaryName", type: "string"}
    ]
});

// :TODO: Add offline storage for this