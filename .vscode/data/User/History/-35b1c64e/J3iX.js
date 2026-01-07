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
    }


    
  });
});
