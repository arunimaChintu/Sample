sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ,"project3/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], (BaseController) => {
    "use strict";

    return BaseController.extend("project3.controller.View1", {
        onInit() {
            var omodel = this.getOwnerComponent().getModel();
            omodel.read("/Products",{
                success: function(odata, response){
                    console.log(odata);
                }
            })
            var oViewModel = new JSONModel({
        welcomeText: this.getResourceBundle().getText("welcomeMessage")
      });

      this.setModel(oViewModel, "view");
    },

    onNavToDetail: function() {
      this.getRouter().navTo("RouteDetail");
        }
    });
});