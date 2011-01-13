/**
 * @class colocrew.views.CategoryList
 * @extends Ext.List
 * 
 * This simple Ext.List subclass is used to display the Loans that are returned from Kiva's API. The largest
 * part of this class is the XTemplate used to render each item - all other functionality is already provided
 * by Ext.List
 */
colocrew.views.List = Ext.extend(Ext.List, {
    emptyText   : 'No categories on file',
    // ui: 'kiva',
    
    /**
     * Ext.List can take a tpl configuration, which allows us to customize the look and feel of our list. In this case
     * we've set up a simple template and added a custom function (percentFunded), which allows us to do simple view logic
     * inside the template. See the XTemplate docs for more (http://dev.sencha.com/deploy/touch/docs/?class=Ext.XTemplate)
     */
    itemTpl: new Ext.XTemplate('<div class="category">{name}</div>'),
    
    /**
     * initComponent is called whenever any class is instantiated. It is normal to add some logic here to set up
     * our component - in this case we're defining a Store and adding the filter toolbar at the top.
     */
    initComponent: function() {
        Ext.applyIf(this, {
            store: new Ext.data.Store({
                model: 'Category',
                data : [
                    {id: 1,name: "Crew"},
                    {id: 2,name: "Multimedia"},
                    {id: 3,name: "Post Production"},
                    {id: 4,name: "Production Companies"}
            ]
          })  
        });
            
        colocrew.views.List.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('categoriesList', colocrew.views.List);