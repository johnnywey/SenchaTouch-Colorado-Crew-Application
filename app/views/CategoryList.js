/**
 * @class colocrew.views.CategoryList
 * @extends Ext.Panel
 * 
 */
colocrew.views.CategoryList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        title: 'Choose a Category',
        ui: 'dark',
        items:[
            {xtype:'spacer'},
            {
                id: 'search',
                text: 'Search',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: colocrew.controllers.crew,
                            action: 'search',
                            animation: {type:'slide', direction:'up'}
                        });
                    }
                }
            }]
    }, {
        xtype: 'toolbar',
        title: 'Colorado Production Industry',
        dock: 'bottom'
    }],

    items: [{
        xtype: 'list',
        cls: "roundList",
        margin: 15,
        itemTpl: '<tpl if="id == 0"><strong>{name}</strong></tpl><tpl if="id &gt; 0">{name}</tpl>',
        store: "MainCategoriesStore",
        onItemDisclosure: function (record) {
            Ext.dispatch({
                controller: colocrew.controllers.crew,
                action: 'listGroup',
                id: record.getId()
            });
        }
    }],

    initComponent: function() {
        colocrew.views.CategoryList.superclass.initComponent.apply(this, arguments);
    }
});