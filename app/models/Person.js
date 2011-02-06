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
        {name: "phoneNumber", type: "string"},
        {name: "zipCode", type: "string"},
        {name: "primaryCategoryId", type: "int"},
        {name: "secondaryCategoryId", type: "int"},
        {name: "city", type: "string"},
        {name: "primaryName", type: "string"}
    ]
});

// :TODO: Add offline storage for this