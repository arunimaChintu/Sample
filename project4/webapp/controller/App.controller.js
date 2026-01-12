sap.ui.define([
  "project4/controller/BaseController"
], function(BaseController) {
  "use strict";

  return BaseController.extend("project4.controller.App", {
    onInit: function() {
      this.getModel("");
    }
  });
});
