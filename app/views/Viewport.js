colocrew.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(colocrew.views, {
            categoryList: new colocrew.views.CategoryList(),
            groupList: new colocrew.views.GroupList(),
            personList: new colocrew.views.PersonList(),
            personDetail: new colocrew.views.PersonDetail(),
            searchField: new colocrew.views.SearchField()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                colocrew.views.categoryList,
                colocrew.views.groupList,
                colocrew.views.personList,
                colocrew.views.personDetail,
                colocrew.views.searchField
            ]
        });
        colocrew.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});