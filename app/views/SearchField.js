/**
 * @class colocrew.views.SearchField
 * @extends Ext.Panel
 *
 */
colocrew.views.SearchField = Ext.extend(Ext.Panel, {
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Search',
            ui: 'dark',
            dock: 'top',
            cls: 'top-bar',
            items:[
                {xtype:'spacer'},
                {
                    id: 'close',
                    text: 'Close',
                    ui: 'action',
                    listeners: {
                        'tap': function () {
                            Ext.dispatch({
                                controller: colocrew.controllers.crew,
                                action: 'listCategory',
                                animation: {type:'slide', direction:'down'}
                            });
                        }
                    }
                }
            ]
        }
    ],
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
        {
            layout: {
                type : 'hbox',
                pack : 'center',
                align: 'stretch',
                items:[
                    {
                        xtype: 'radiofield',
                        label: 'Name / Co',
                        name: 'searchBy'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Description',
                        name: 'searchBy'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'All',
                        name: 'searchBy'
                    },
                    {
                        xtype: 'searchfield',
                        placeHolder: "Search...",
                        name: "query",
                        listeners: {
                            // keyup: this.onFieldChange,
                            scope: this
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Back',
                        ui: 'normal',
                        listeners: {
                            'tap': function () {
                                Ext.dispatch({
                                    controller: colocrew.controllers.crew,
                                    action: 'listCategory',
                                    animation: {type:'slide', direction:'down'}
                                });
                            }
                        }
                    }
                ]
            }
        }
    ]
});