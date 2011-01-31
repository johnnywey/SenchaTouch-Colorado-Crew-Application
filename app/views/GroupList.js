/**
 * @class colocrew.views.GroupList
 * @extends Ext.List
 * 
 */
colocrew.views.GroupList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Select a Group',
        items: [{
            text: 'Back',
            ui: 'back',
            listeners: {
                'tap': function () {
                    Ext.dispatch({
                        controller: colocrew.controllers.crew,
                        action: 'listCategory',
                        animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            }]
    }],

    items: [{
        xtype: 'list',
        cls: "roundList",
        emptyText : 'No categories on file',
        title: 'Select a Group',
        margin: 15,
        itemTpl: '{name}',
        store: "Categories"
    }],
    
    scroll: 'vertical',

    initComponent: function() {
        colocrew.views.GroupList.superclass.initComponent.apply(this, arguments);
    }
});