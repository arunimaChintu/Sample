sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("project4.controller.BaseController", {
    getRouter: function() {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    getModel: function(sName) {
      return this.getView().getModel(sName);
    },

    setModel: function(oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },

    getResourceBundle: function() {
      var oModel = this.getOwnerComponent().getModel("i18n");
      return oModel.getResourceBundle();
    },
    onCreate: function(){
      let oModel = this.getView().getModel();
      let uiModel = this.getView().getModel("ui");
      const productName = uiModel.getProperty("/ProductName");
      const productDescription = uiModel.getProperty("/ProductDescription");
      let oPayload = {
        "Name": productName,
        "Description": productDescription
      }
      oModel.create("/Products", oPayload,{
        success: function(){

        }
      })

    }
  });
});
