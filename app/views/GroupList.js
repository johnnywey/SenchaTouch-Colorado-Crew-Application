/**
 * @class colocrew.views.GroupList
 * @extends Ext.Panel
 *
 */
colocrew.views.GroupList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [
        {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Crew',
            ui: 'dark',
            cls: 'top-bar'
        },
        {
            dock: 'top',
            xtype: 'toolbar',
            ui: 'light',
            cls: 'top-bar',
            title: 'Chose a Group',
            items: [
                {
                    text: 'Categories',
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
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'list',
            cls: "roundList",
            emptyText : 'No categories on file',
            title: 'Select a Group',
            margin: 15,
            itemTpl: '<tpl if="secondaryCategoryId == 0"><strong>{secondaryCategoryName}</strong></tpl><tpl if="secondaryCategoryId &gt; 0">{secondaryCategoryName}</tpl>',
            store: "MatchingGroupsStore",
            onItemDisclosure: function (record) {
                Ext.dispatch({
                    controller: colocrew.controllers.crew,
                    action: 'listPeople',
                    record: record
                });
            }
        }
    ],

    scroll: 'vertical',

    initComponent: function() {
        colocrew.views.GroupList.superclass.initComponent.apply(this, arguments);
    }
});