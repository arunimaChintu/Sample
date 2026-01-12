sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("project3.controller.BaseController", {
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
    }
  });
});