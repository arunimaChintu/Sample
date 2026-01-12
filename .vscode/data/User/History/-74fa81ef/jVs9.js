sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
    "use strict";

    return Controller.extend("project1.controller.BaseController", {
        getRouter() {
            return this.getOwnerComponent().getRouter();
        },

        getModel(sName) {
            return this.getView().getModel(sName);
        },

        setModel(oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },

        onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
                return;
            }

            this.getRouter().navTo("RouteView1", {}, true);
        }
    });
});