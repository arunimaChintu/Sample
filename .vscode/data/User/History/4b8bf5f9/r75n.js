sap.ui.define([
  "project3/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("project3.controller.View1", {
    onInit: function() {
      var oViewModel = new JSONModel({
        headerText: this.getResourceBundle().getText("headerText"),
        listTitle: this.getResourceBundle().getText("listTitle")
      });

      this.setModel(oViewModel, "view");
    }
  });
});
