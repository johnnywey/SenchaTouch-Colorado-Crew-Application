/**
 * @class Person
 * @extends Ext.data.Model
 * 
 * The City model is the City in which a Person resides.
 */
Ext.regModel("City", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"}
    ]
});

// :TODO: Add offline storage for this