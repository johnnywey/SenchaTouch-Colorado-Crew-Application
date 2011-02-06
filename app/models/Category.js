/**
 * @class Category
 * @extends Ext.data.Model
 * 
 * The Category model is the initial list of applicable categories for persons.
 */
Ext.regModel("Category", {
    fields: [
        {name: "id", type: "int"},
        {name: "name",type: "string"}
    ]
});
