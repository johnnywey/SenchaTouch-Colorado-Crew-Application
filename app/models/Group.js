/**
 * @class Group
 * @extends Ext.data.Model
 * 
 * The Group model basically contains two category IDs.
 */
Ext.regModel("Group", {
    fields: [
        {name: "primaryCategoryId", type: "int"},
        {name: "primaryCategoryName", type: "string"},
        {name: "secondaryCategoryId", type: "int"},
        {name: "secondaryCategoryName", type: "string"}
    ]
});