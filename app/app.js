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
        Ext.dispatch({
            controller: 'category',
            action    : 'list'
        });
    }
});