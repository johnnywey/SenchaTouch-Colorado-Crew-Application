/**
 * @class person
 * @extends Ext.Controller
 * 
 * Load the main person data for a single selection.
 */
Ext.regController("person", {

    list: function() {
        // this.listView = this.render({
        //     xtype: 'colocrewMain',
        //     listeners: {
        //         scope: this,
        //         leafitemtap: this.tap
        //     }
        // }, Ext.getBody()).down('.personShow');
    },
    
    tap: function(subList, subIdx, el, e, detailCard) {
        console.log("Tapped");
    }
});