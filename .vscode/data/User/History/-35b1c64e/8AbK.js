sap.ui.define([
  
    "project1/controller/BaseController"
  
], function(BaseController) {
  "use strict";

  return BaseController.extend("project1.controller.SplitAppView", {
     onInit: function () {
      
      
     },
     onItemPress: function(oEvent) {
      

     
      this.byId("SplitAppDemo").toDetail(this.byId("detail"));
    },
    

    onPressDetailBack: function() {
      this.byId("SplitAppDemo").backDetail();
    },

    onPressNavToDetail: function() {
      this.byId("SplitAppDemo").toDetail(this.byId("detailDetail"));
    },

    onPressDetailBack: function() {
      this.byId("SplitAppDemo").backDetail();
    },

    onPressGoToMaster: function() {
      this.byId("SplitAppDemo").toMaster(this.byId("master2"));
    },

    onPressMasterBack: function() {
      this.byId("SplitAppDemo").backMaster();
    },

    onListItemPress: function(oEvent) {
      const sTo = oEvent.getParameter("listItem").data("to");
      this.byId("SplitAppDemo").toDetail(this.byId(sTo));
    },

    onPressModeBtn: function(oEvent) {
      const oRadio = oEvent.getParameter("selectedButton");
      const sMode = oRadio.data("splitAppMode");
      this.byId("SplitAppDemo").setMode(sMode);
    }

  });
});
