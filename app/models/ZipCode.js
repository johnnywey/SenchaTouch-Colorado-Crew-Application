/**
 * @class Person
 * @extends Ext.data.Model
 * 
 * The ZipCode model is the ZipCode in which a Person resides.
 */
Ext.regModel("ZipCode", {
    fields: [
        {name: "id", type: "int"},
        {name: "code", type: "string"}
    ]
});

// :TODO: Add offline storage for this