colocrew.controllers.crew = new Ext.Controller({

    listCategory: function(options) {
        colocrew.views.viewport.setActiveItem(colocrew.views.categoryList, options.animation);
    },
    
    listGroup: function(options) {
        if(options.id==0 || options.id) {
            var categoryId = parseInt(options.id);
            var categoryStore = Ext.StoreMgr.lookup('Categories');
            var groupsStore = Ext.StoreMgr.lookup('MatchingGroupsStore');
            groupsStore.removeAll();
            groupsStore.removed = [];
            var personGroups = Ext.StoreMgr.lookup('People').queryBy(function(rec) {
                var match = false;
                if(categoryId==0) {
                    match = true;
                } else {
                    match = rec.data.primaryCategoryId == categoryId; 
                }
                return match;
            });
            personGroups.each(function(item, index, length) {
                if(groupsStore.find('secondaryCategoryId', item.data.secondaryCategoryId) < 0) {
                    var newGroupItem = Ext.ModelMgr.create({
                        primaryCategoryId: categoryId,
                        primaryCategoryName: categoryStore.getById(item.data.primaryCategoryId).data.name,
                        secondaryCategoryId: item.data.secondaryCategoryId,
                        secondaryCategoryName: categoryStore.getById(item.data.secondaryCategoryId).data.name
                    }, 'Group');
                    groupsStore.insert(groupsStore.getCount(), newGroupItem);
                }
            });
            var allGroupsItem = Ext.ModelMgr.create({
                primaryCategoryId: categoryId,
                primaryCategoryName: Ext.StoreMgr.lookup('MainCategoriesStore').getById(categoryId).data.name,
                secondaryCategoryId: 0,
                secondaryCategoryName: "All Groups"
            }, 'Group');
            groupsStore.insert(0, allGroupsItem);
            colocrew.views.groupList.getDockedItems()[0].setTitle(Ext.StoreMgr.lookup('MainCategoriesStore').getById(categoryId).data.name);
            if(colocrew.views.groupList.items.items[0].scroller) {
               colocrew.views.groupList.items.items[0].scroller.scrollTo({x:0, y:0}); 
            }
        }
        colocrew.views.viewport.setActiveItem(colocrew.views.groupList, options.animation);
    },
    
    listPeople: function(options) {
        if(options.record && options.record.data) {
            var record = options.record.data;
            var peopleStore = Ext.StoreMgr.lookup('MatchingPeopleStore');
            peopleStore.removeAll();
            peopleStore.removed = [];
            peopleStore.insert(0, Ext.StoreMgr.lookup('People').queryBy(function(rec) {
                var resultPrimary = resultSecondary = false;
                if(record.primaryCategoryId==0) {
                    resultPrimary = true;
                } else {
                    resultPrimary = rec.data.primaryCategoryId == record.primaryCategoryId;
                }
                if(record.secondaryCategoryId==0) {
                    resultSecondary = true;
                } else {
                    resultSecondary = rec.data.secondaryCategoryId == record.secondaryCategoryId;
                }
                return resultPrimary && resultSecondary;
            }).items);
            var categoryStore = Ext.StoreMgr.lookup('Categories');
            var titleText = record.primaryCategoryName + ": " + record.secondaryCategoryName;
            colocrew.views.personList.getDockedItems()[0].setTitle(titleText);
            // scroll back to top of the list in the event of a data change
            if(colocrew.views.personList.items.items[0].scroller) {
                colocrew.views.personList.items.items[0].scroller.scrollTo({x:0, y:0});    
            }
            this.changePersonSort();
        }
        colocrew.views.viewport.setActiveItem(colocrew.views.personList, options.animation);
    },
    
    changePersonSort: function(options) {
        var peopleStore = Ext.StoreMgr.lookup('MatchingPeopleStore');
        if(options && options.sort=="name") {
            peopleStore.getGroupString = function(record) {
                return record.get('lastName')[0];
            }
            peopleStore.sort('lastName', 'ASC');
        } else {
            peopleStore.getGroupString = function(record) {
                return record.get('city');
            }
            peopleStore.sort('city', 'ASC');
        }
    },
    
    showPerson: function(options) {
        var id = parseInt(options.id), person = Ext.StoreMgr.lookup('People').getById(id);
        if (person) {
            colocrew.views.personDetail.updateWithRecord(person);
            colocrew.views.viewport.setActiveItem(colocrew.views.personDetail, options.animation);
        }
    },
    
    search: function(options) {
        colocrew.views.viewport.setActiveItem(colocrew.views.searchField, options.animation);
    }
 });