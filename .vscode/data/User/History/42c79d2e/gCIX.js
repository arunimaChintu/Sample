sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "project3/controller/BaseController"
], (BaseController) => {
  "use strict";

  return BaseController.extend("project3.controller.App", {
      onInit() {
        this.getRouter();
      }
  });
});