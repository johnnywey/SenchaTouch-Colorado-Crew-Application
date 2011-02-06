/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page.
 * 
 * The global variable colocrew holds a reference to the application, and namespaces are automatically
 * set up for colocrew.views, colocrew.models, colocrew.controllers and colocrew.stores
 */ 
Ext.regApplication({
    name: "colocrew",
    
    icon: 'resources/images/colocrew.png',
    glossOnIcon: false,
    tabletStartupScreen: 'resources/images/tablet_startup.png',
    
    /**
     * This function is automatically called when the document has finished loading. All we do here
     * is launch the application by calling the loans controller's 'list' action (see app/controllers/loans.js)
     */
    launch: function() {
        // pre-register some models we'll be using a lot
        var categories = new Ext.data.Store({
              model: 'Category',
              storeId: 'MainCategoriesStore' 
        });
        var groups = new Ext.data.Store({
           model: 'Category',
           storeId: 'AllGroupsStore' 
        });
        new Ext.data.Store({
            model: 'Group',
            storeId: 'MatchingGroupsStore'
        });
        new Ext.data.Store({
            model: 'Person',
            storeId: 'MatchingPeopleStore'
        });
        var categoryStore = Ext.StoreMgr.lookup('Categories');
        
        // Add all categories
        Ext.each(Ext.StoreMgr.lookup('People').collect('primaryCategoryId', false), function(id, index){
            categories.insert(categories.getCount(), categoryStore.getById(id));
        });
        categories.insert(0, Ext.ModelMgr.create({
            id: 0,
            name: 'All Categories'
        }, 'Category'));
        this.views.viewport = new this.views.Viewport();
    }
});