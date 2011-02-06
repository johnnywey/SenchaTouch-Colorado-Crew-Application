/**
 * @class colocrew.views.PersonList
 * @extends Ext.Panel
 * 
 */
colocrew.views.PersonList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Select a Person',
        items: [{
            text: 'Groups',
            ui: 'back',
            listeners: {
                'tap': function () {
                    Ext.dispatch({
                        controller: colocrew.controllers.crew,
                        action: 'listGroup',
                        animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            },
            {xtype:'spacer'},
            {
                id: 'byCity',
                text: 'By City',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: colocrew.controllers.crew,
                            action: 'changePersonSort',
                            sort: "city"
                        });
                    }
                }
            },
            {
                id: 'byName',
                text: 'By Name',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: colocrew.controllers.crew,
                            action: 'changePersonSort',
                            sort: "name"
                        });
                    }
                }
            }]
    }],

    items: [{
        xtype: 'list',
        cls: "roundList",
        emptyText : 'No people on file',
        title: 'Select a Person',
        margin: 15,
        indexBar: true,
        grouped: true,
        itemTpl: '<strong>{primaryName}</strong><br />{primaryCategoryName}: {secondaryCategoryName}',
        store: "MatchingPeopleStore",
        groupBy: 'city',
        onItemDisclosure: function (person) {
            Ext.dispatch({
                controller: colocrew.controllers.crew,
                action: 'showPerson',
                id: person.getId()
            });
        }
    }],
    
    scroll: 'vertical',
    initComponent: function() {
        colocrew.views.PersonList.superclass.initComponent.apply(this, arguments);
    }
});