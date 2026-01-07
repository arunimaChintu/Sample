sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("project1.controller.SplitAppView", {

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
