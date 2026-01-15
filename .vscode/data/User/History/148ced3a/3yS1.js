sap.ui.define([
  "project4/controller/BaseController",
  "sap/ui/model/json/JSONModel"
  ,"sap/m/MessageToast"
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
    onCreate: function () {
  var oModel = this.getView().getModel();
  var uiModel = this.getView().getModel("ui");

  var newProduct = {
    Name: uiModel.getProperty("/ProductName"),
    Description: uiModel.getProperty("/ProductDescription"),
    ReleaseDate: new Date(),
    ID:5,
    DiscontinuedDate: null,
    Rating: 3,
    Price: "22.8"
  };

  oModel.create("/Products", newProduct, {
    success: function () {
      MessageToast.show("Created");
      oModel.refresh();
    },
    error: function (oError) {
      console.error(oError.responseText);
      MessageToast.show("Failed to create");
    }
  });
}
,
    onPrev: function () {
  this.getOwnerComponent().getRouter().navTo("Detail");
}


  });
});
