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
      let oModel = this.getView().getModel();
      let uiModel = this.getView().getModel("ui");
      const ProductName = uiModel.getProperty("/ProductName");
      const ProductDescription = uiModel.getProperty("/ProductDescription");
      const ProductID = uiModel.getProperty("/ProductID");
      const ProductReleaseDate = uiModel.getProperty("/ProductReleaseDate");
      const ProductDiscontinuedDate = uiModel.getProperty("/ProductDiscontinuedDate");
      const ProductRating = uiModel.getProperty("/ProductRating");
      const ProductPrice = uiModel.getProperty("/ProductPrice");
      
      let oPayload = {
        "Name": ProductName,
        "Description": ProductDescription,
        "ID": ProductID,
      
      "ReleaseDate": ProductReleaseDate,
      "DiscontinuedDate": ProductDiscontinuedDate,
      "Rating": ProductRating,
      "Price": ProductPrice
      }
      oModel.create("/Products", oPayload,{
        success: function(){

        }
      })

    }
  });
});
