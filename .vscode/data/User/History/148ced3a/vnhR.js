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
     const productName = uiModel.getProperty("/ProductName");
     const productDescription = uiModel.getProperty("/ProductDescription")
     oModel.setUseBatch(false)
     let oPayload={
      "Name":productName,
      "Description":productDescription
     }
     oModel.create("/Products", oPayload,{
      success
     })
    },
    onPrev: function(oEvent) {
           
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            
            oRouter.navTo("detail", {
                
                objectId: "123" 
            });
        }
  });
});
