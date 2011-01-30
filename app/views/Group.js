/**
 * @class colocrew.views.Group
 * @extends Ext.Panel
 * 
 * Simple wrapper for the List and the Filter panel. At the moment, Ext.List does not support dockedItems, so we need to
 * wrap it in this panel to attach the Filter bar to the top. This class has no other function, and may be removed in the
 * future if List is given the ability to dock items
 */
colocrew.views.Group = Ext.extend(Ext.Panel, {
    layout: 'card',
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            items: {
                xtype: 'groupList'
            },
            
            dockedItems: [
                {
                  dock: 'top',
                  xtype: 'toolbar',
                  title: "Select a Group"  
                },
                {
                    dock : 'bottom',
                    xtype: 'toolbar',
                    title: 'Colorado Production Industry'
                }
            ]
        });
        
        colocrew.views.Group.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('group', colocrew.views.Main);