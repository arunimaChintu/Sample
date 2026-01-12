sap.ui.define([
    "sap/ui/core/UIComponent",
    "project2/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("project2.Component", {
        metadata: {
			manifest: "json"
		},
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            
            UIComponent.prototype.init.apply(this, arguments);

            
            this.setModel(models.createDeviceModel(), "device");

            
            this.getRouter().initialize();
        }
    });
});