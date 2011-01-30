colocrew.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(colocrew.views, {
            categoryList: new colocrew.views.Main(),
            groupList: new colocrew.views.Group()
            //contactForm: new app.views.ContactForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                colocrew.views.Main,
                colocrew.views.Group
                //app.views.contactForm,
            ]
        });
        colocrew.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});