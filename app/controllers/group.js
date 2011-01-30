/**
 * @class group
 * @extends Ext.Controller
 * 
 * Load the group data based on incoming category.
 */
Ext.regController("group", {

    /**
     * Renders the Viewport and sets up listeners to show details when a Category is tapped on. This
     * is only expected to be called once - at application startup. This is initially called inside
     * the app.js launch function.
     */
    list: function(options) {
        this.listView = this.render({
            xtype: 'colocrewGroup',
            listeners: {
                scope: this,
                itemtap: this.tap
            }
        }, Ext.getBody()).down('.groupList');
    },
    
    tap: function(subList, subIdx, el, e, detailCard) {
        console.log("Tapped");
    }
});