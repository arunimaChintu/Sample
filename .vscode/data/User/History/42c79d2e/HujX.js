sap.ui.define([
  "project3/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("project3.controller.App", {
    onInit: function() {
      var oViewModel = new JSONModel({
        detailText: this.getResourceBundle().getText("detailText")
      });

      this.setModel(oViewModel, "view");
    }
  });
});