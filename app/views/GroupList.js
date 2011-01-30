/**
 * @class colocrew.views.GroupList
 * @extends Ext.List
 * 
 */
colocrew.views.GroupList = Ext.extend(Ext.List, {
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
            store: "Categories"
        });
        colocrew.views.GroupList.superclass.initComponent.apply(this, arguments);
        this.enableBubble('itemtap');
    }
});

Ext.reg('groupList', colocrew.views.GroupList);