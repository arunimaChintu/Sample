sap.ui.define([
  "project4/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("project4.controller.App", {
    onInit: function() {
      var oViewModel = new JSONModel({
        headerText: this.getResourceBundle().getText("headerText"),
        listTitle: this.getResourceBundle().getText("listTitle")
      });

      this.setModel(oViewModel, "view");
    }
  });
});