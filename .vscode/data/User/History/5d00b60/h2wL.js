sap.ui.define([
    
    "project1/controller/BaseController"
 

], (BaseController) => {
    "use strict";

    return BaseController.extend("project1.controller.View1", {
        onInit() {

            
        },
        myScreen:function(){
            
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteSplitApp",{});
            }
    });
});