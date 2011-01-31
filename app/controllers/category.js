colocrew.controllers.crew = new Ext.Controller({

    listCategory: function(options) {
        colocrew.views.viewport.setActiveItem(colocrew.views.categoryList, options.animation);
    },
    
    listGroup: function(options) {
        var id = parseInt(options.id);
        var category = Ext.StoreMgr.lookup("Categories").getById(id);
        if (category) {
            colocrew.views.viewport.setActiveItem(colocrew.views.groupList, options.animation);
        }
    },
    
    listPeople: function(options) {
    },
     
    showPerson: function(options) {
    }
 });