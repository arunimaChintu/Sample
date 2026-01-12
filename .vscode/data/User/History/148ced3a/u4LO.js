sap.ui.define([
  "project4/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("project4.controller.View1", {
    onInit: function() {
      var oViewModel = new JSONModel({
        headerText: this.getResourceBundle().getText("headerText"),
        listTitle: this.getResourceBundle().getText("listTitle")
      });

      this.setModel(oViewModel, "view");
    },
    onCreate: function(){
     var oModel = this.getView().getModel();
     let uiModel = this.getView().getModel("ui")
     var newProduct = {
      Name: uiModel.getProperty("/ProductName"),
      ID :5,
      Description:"16-Ounce Plastic Bottles (Pack of 12)",
      ReleaseDate:"\/Date(1154649600000)\/",
      DiscontinuedDate:null,
      Rating:3,
      Price:"22.8"
     };
     oModel.setUseBatch(false);
     oModel.create("/Products", newProduct,{
      success: function(){
        MessageToast.show("Created");
        oModel.refresh(true);
      },
      error: function(){
        MessageToast.show('failed to create');
      }
     })
    },
    onPrev: function () {
  this.getOwnerComponent().getRouter().navTo("Detail");
}


  });
});
