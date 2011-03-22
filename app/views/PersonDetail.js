/**
 * @class colocrew.views.PersonDetail
 * @extends Ext.Panel
 *
 */
colocrew.views.PersonDetail = Ext.extend(Ext.Panel, {
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Contact Details',
            items: [
                {
                    text: 'Back',
                    cls: 'top-bar',
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
                }
            ]
        }
    ],
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
        {
            xtype: 'fieldset',
            title: 'Personal Info',
            data: description,
            defaults: {
                labelAlign: 'center',
                labelWidth: '40%',
                disabled: true
            },
            items: [
                {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email'
                },
                {
                    xtype: 'emailfield',
                    name : 'phone',
                    label: 'Phone',
                    placeHolder: '3039951212',
                    useClearIcon: true
                },
                {
                    xtype : 'textareafield',
                    name  : 'bio',
                    label : 'Bio',
                    maxLength : 60,
                    maxRows : 10
                }
            ]}
    ],
//    items: [
//        {cls:'contact-info',
//            tpl:[
//            '<h2>{primaryName}</h2>',
//            '<tpl if="companyName"><h3>{companyName}</h3></tpl>',
//            '<h3>{primaryCategoryName}: {secondaryCategoryName}</h3><br />',
//            '<h3>{city}, {zipCode}</h3><br />'
//        ]},
//        {tpl:[
//            '<div class="roundList" <tpl if="phoneNumber">phone<a href="tel:{phoneNumber}"> {phoneNumber}</a></tpl>',
//            'email <a href="mailto:{emailAddress}">{emailAddress}</a><br /></div>'
//        ]},
//        {tpl:[
//            '<div class="roundList">{description}</div>'
//        ]}
//
//    ],
    updateWithRecord:function(person) {
        var categoryStore = Ext.StoreMgr.lookup('Categories');
        Ext.each(this.items.items, function(item) {
            item.update(person.data);
        });
    }
});
