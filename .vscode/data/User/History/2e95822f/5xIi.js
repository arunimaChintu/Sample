sap.ui.define([
    "sap/ui/core/UIComponent",
    "project5/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("project5.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            this.setModel(models.createEmployeeModel(), "data");

            // enable routing
            this.getRouter().initialize();
        }
    });
});
