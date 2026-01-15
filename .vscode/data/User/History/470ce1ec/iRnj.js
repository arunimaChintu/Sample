sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project5.controller.BaseController", {
        getRouter() {
            return this.getOwnerComponent().getRouter();
        },

        getModel(sName) {
            return this.getOwnerComponent().getModel(sName);
        },

        setModel(oModel, sName) {
            return this.getOwnerComponent().setModel(oModel, sName);
        }
    });
});
