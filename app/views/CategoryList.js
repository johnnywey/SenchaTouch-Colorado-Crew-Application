/**
 * @class colocrew.views.CategoryList
 * @extends Ext.List
 * 
 * This simple Ext.List subclass is used to display the Loans that are returned from Kiva's API. The largest
 * part of this class is the XTemplate used to render each item - all other functionality is already provided
 * by Ext.List
 */
colocrew.views.List = Ext.extend(Ext.NestedList, {
    emptyText : 'No categories on file',
    title: 'Select a Category',
    bodyPadding: 10,
    
    getTitleTextTpl: function() {
        return '{name}';
    },
    
    getItemTextTpl: function() {
        return '{name}';
    },
    
    /**
     * initComponent is called whenever any class is instantiated. It is normal to add some logic here to set up
     * our component - in this case we're defining a Store and adding the filter toolbar at the top.
     */
    initComponent: function() {
           var data = {
                categories:[{
                    id: 1,
                    name: "Crew",
                    categories: [{
                        id:10,
                        name: "Next one",
                        leaf: true
                    }]
                },{
                    id: 2,
                    name: "Multimedia"
                },{
                    id: 3,
                    name: "Post Production"
                },{
                    id: 4,
                    name: "Production Companies"
                }
            ]};
        Ext.applyIf(this, {
            store: new Ext.data.TreeStore({
                model: 'Category',
                root: data,
                proxy: {
                    type: 'ajax',
                    reader: {
                        type: 'tree',
                        root: 'categories'
                    }
                }
            })  
        });
            
        colocrew.views.List.superclass.initComponent.apply(this, arguments);
        this.enableBubble('leafitemtap');
    }
});

Ext.reg('categoriesList', colocrew.views.List);