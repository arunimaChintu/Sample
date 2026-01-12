sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project3.controller.View1", {
       
            onInit: function () {
  const oModel = this.getView().getModel();
  oModel.read("/Products", {
    success: function (oData) {
      console.log("DATA:", oData);
    },
    error: function (oError) {
      console.error("ERROR:", oError);
    }
  });
}

        
    });
});