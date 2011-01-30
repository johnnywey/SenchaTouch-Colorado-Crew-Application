/**
 * @class colocrew.views.CategoryList
 * @extends Ext.List
 * 
 * This simple Ext.List subclass is used to display the Loans that are returned from Kiva's API. The largest
 * part of this class is the XTemplate used to render each item - all other functionality is already provided
 * by Ext.List
 */
colocrew.views.CategoryList = Ext.extend(Ext.List, {
    cls: "roundList",
    emptyText : 'No categories on file',
    title: 'Select a Category',
    margin: 15,
    itemTpl: '<tpl if="id == 0"><strong>{name}</strong></tpl><tpl if="id &gt; 0">{name}</tpl>',
    
    /**
     * initComponent is called whenever any class is instantiated. It is normal to add some logic here to set up
     * our component - in this case we're defining a Store and adding the filter toolbar at the top.
     */
    initComponent: function() {
        Ext.applyIf(this, {
            store: "MainCategoriesStore"
        });
        colocrew.views.CategoryList.superclass.initComponent.apply(this, arguments);
        this.enableBubble('itemtap');
    }
});

Ext.reg('categoryList', colocrew.views.CategoryList);