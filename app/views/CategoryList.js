/**
 * @class colocrew.views.CategoryList
 * @extends Ext.List
 * 
 * This simple Ext.List subclass is used to display the Loans that are returned from Kiva's API. The largest
 * part of this class is the XTemplate used to render each item - all other functionality is already provided
 * by Ext.List
 */
colocrew.views.CategoryList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Select a Category'
    }
    // , {
    //         xtype: 'toolbar',
    //         title: 'Colorado Production Industry',
    //         dock: 'bottom'
    //     }
    ],

    items: [{
            xtype: 'list',
            cls: "roundList",
            margin: 15,
            // itemTpl: '<tpl if="id == 0"><strong>{name}</strong></tpl><tpl if="id &gt; 0">{name}</tpl>',
            itemTpl: '{name}',
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