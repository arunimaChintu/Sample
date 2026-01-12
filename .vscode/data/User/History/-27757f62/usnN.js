sap.ui.define([
  "project3/controller/BaseController"
], function(BaseController) {
  "use strict";

  return BaseController.extend("project3.controller.Detail", {
    onNavBack: function() {
      this.getRouter().navTo("RouteMain");
    }
  });
});