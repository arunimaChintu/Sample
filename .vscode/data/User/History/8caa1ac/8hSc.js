sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/odata/v2/ODataModel",
  "project2/model/models"
], function (UIComponent, ODataModel, models) {
  "use strict";

  return UIComponent.extend("project2.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // 🔥 FORCE create default OData model
      const oODataModel = new ODataModel(
        "https://services.odata.org/V2/Northwind/Northwind.svc/",
        {
          useBatch: true
        }
      );

      this.setModel(oODataModel);

      // device model
      this.setModel(models.createDeviceModel(), "device");

      this.getRouter().initialize();
    }
  });
});
