sap.ui.define([
  "project4/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("project4.controller.View1", {
    onInit: function() {
      var oViewModel = new JSONModel({
        headerText: this.getResourceBundle().getText("headerText"),
        listTitle: this.getResourceBundle().getText("listTitle")
      });

      this.setModel(oViewModel, "view");
    },
    onPrev: function(oEvent) {
           
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            
            oRouter.navTo("Detail", {
                
                objectId: "123" 
            });
        }
  });
});
