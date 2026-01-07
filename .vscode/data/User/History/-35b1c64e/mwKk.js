sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
  "use strict";

  return Controller.extend("project1.controller.SplitAppView", {
    onInit: function () {
    const oModel = new sap.ui.model.json.JSONModel({
        items: [
            { id: 1, title: "Customer A", description: "Details of Customer A" },
            { id: 2, title: "Customer B", description: "Details of Customer B" },
            { id: 3, title: "Customer C", description: "Details of Customer C" }
        ],
        selectedItem: {}
    });

    this.getView().setModel(oModel);
},

    onPressNavToDetail: function() {
      this.byId("SplitAppDemo").toDetail(this.byId("detailDetail"));
    },

    onPressDetailBack: function() {
      this.byId("SplitAppDemo").backDetail();
    },

    onPressGoToMaster: function() {
      this.byId("SplitAppDemo").toMaster(this.byId("master2"));
    },

    onPressMasterBack: function() {
      this.byId("SplitAppDemo").backMaster();
    },

    onListItemPress: function(oEvent) {
      const sTo = oEvent.getParameter("listItem").data("to");
      this.byId("SplitAppDemo").toDetail(this.byId(sTo));
    },

    onPressModeBtn: function(oEvent) {
      const oRadio = oEvent.getParameter("selectedButton");
      const sMode = oRadio.data("splitAppMode");
      this.byId("SplitAppDemo").setMode(sMode);
    }

  });
});
