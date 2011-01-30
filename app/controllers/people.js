/**
 * @class people
 * @extends Ext.Controller
 * 
 * Load the list of people matching a particular category/group.
 */
Ext.regController("people", {

    list: function() {
        this.listView = this.render({
            xtype: 'colocrewMain',
            listeners: {
                scope: this,
                leafitemtap: this.tap
            }
        }, Ext.getBody()).down('.peopleList');
    },
    
    tap: function(subList, subIdx, el, e, detailCard) {
        console.log("Tapped");
    }
});