/**
 * @class colocrew.views.PersonDetail
 * @extends Ext.Panel
 * 
 */
colocrew.views.PersonDetail = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Contact Details',
        items: [
            {
                text: 'Back',
                ui: 'back',
                listeners: {
                    'tap': function () {
                         Ext.dispatch({
                             controller: colocrew.controllers.crew,
                             action: 'listPeople',
                             animation: {type:'slide', direction:'right'}
                         });
                    }
                }
            }]
    }],
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
        {tpl:[
            '<h1>{primaryName}</h1>',
            '<tpl if="companyName"><h2>{companyName}</h2></tpl>',
            '<h2>{primaryCategoryName}: {secondaryCategoryName}</h2>'
        ]},
        {tpl:[
            '<tpl if="phoneNumber"><div class="roundList"><a href="tel:{phoneNumber}">phone {phoneNumber}</a></div></tpl>'
        ]},
        {tpl:[
            '<div class="roundList"><a href="mailto:{emailAddress}">email {emailAddress}</a></div>',
        ]},
        {tpl:[
            '<div class="roundList">{description}</div>',
        ]}
        
    ],
    updateWithRecord: function(person) {
        var categoryStore = Ext.StoreMgr.lookup('Categories');
        Ext.each(this.items.items, function(item) {
            person.data.primaryCategoryName = categoryStore.getById(person.data.primaryCategoryId).data.name;
            person.data.secondaryCategoryName = categoryStore.getById(person.data.secondaryCategoryId).data.name;
            item.update(person.data);
        });
        // var toolbar = this.getDockedItems()[0];
        // toolbar.setTitle(record.get('givenName') + ' ' + record.get('familyName'));
        // toolbar.getComponent('edit').record = record;
    }
});