/**
 * @class category
 * @extends Ext.Controller
 * 
 * Load the main category data.
 */
Ext.regController("category", {
    
    /**
     * Renders the Viewport and sets up listeners to show details when a Category is tapped on. This
     * is only expected to be called once - at application startup. This is initially called inside
     * the app.js launch function.
     */
    listPrimary: function() {
        this.listView = this.render({
            xtype: 'colocrewMain',
            listeners: {
                scope: this,
                itemtap: this.tap
            }
        }, Ext.getBody()).down('.categoriesList');
    },

    tap: function(view, index, item, e) {
        Ext.dispatch({
            controller: "group",
            action: "list",
            optionTest: "hithere!"
        });
    }
});