sap.ui.define([
    "sap/ui/core/mvc/Controller"
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
        }
    });
});