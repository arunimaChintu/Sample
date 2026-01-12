sap.ui.define([
  "sap/ui/core/mvc/Controller"
  
], function(Controller) {
  "use strict";

  return Controller.extend("project1.controller.SplitAppView", {
     onInit: function () {
      
      var oModel = this.getOwnerComponent().getModel("masterDetail");
      oModel.loadData("model/data.json"); 
     },
     onItemPress: function(oEvent) {
      var oItem = oEvent.getParameter("listItem");
      var oData = oItem.getBindingContext("masterDetail").getObject();
      this.getView().getModel("masterDetail").setProperty("/selectedItem", oData);

     
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
