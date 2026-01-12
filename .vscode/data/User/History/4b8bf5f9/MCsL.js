sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ,var oViewModel = new JSONModel({
        welcomeText: this.getResourceBundle().getText("welcomeMessage")
      });

      this.setModel(oViewModel, "view");
    },

    onNavToDetail: function() {
      this.getRouter().navTo("RouteDetail");
], (Controller) => {
    "use strict";

    return Controller.extend("project3.controller.View1", {
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