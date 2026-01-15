sap.ui.define([
    "project1/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/SelectDialog",
    "sap/m/StandardListItem"
], (BaseController, JSONModel, MessageToast, SelectDialog, StandardListItem) => {
    "use strict";

    return BaseController.extend("project5.controller.EmployeeDetail", {
        onInit() {
            this.getRouter().getRoute("RouteEmployeeDetail").attachPatternMatched(this._onRouteMatched, this);
            this.setModel(new JSONModel({
                employee: {},
                personalData: [],
                editable: false
            }), "detail");
        },

        _onRouteMatched(oEvent) {
            var sEmployeeId = oEvent.getParameter("arguments").employeeId;
            var oDataModel = this.getModel("data");
            var aEmployees = oDataModel.getProperty("/employees") || [];
            var oEmployee = aEmployees.find(function (oItem) {
                return oItem.id === sEmployeeId;
            }) || {};
            var aPersonalData = oDataModel.getProperty("/personalData/" + sEmployeeId) || [];

            this.getModel("detail").setData({
                employee: oEmployee,
                personalData: aPersonalData.map(function (oEntry) {
                    return Object.assign({}, oEntry);
                }),
                editable: false
            });
            this._sEmployeeId = sEmployeeId;
        },

        onNavBack() {
            this.getRouter().navTo("RouteView1", {}, true);
        },

        onToggleEdit() {
            var oDetailModel = this.getModel("detail");
            oDetailModel.setProperty("/editable", !oDetailModel.getProperty("/editable"));
        },

        onAddRow() {
            var oDetailModel = this.getModel("detail");
            var aPersonalData = oDetailModel.getProperty("/personalData") || [];
            aPersonalData.push({
                lineId: this._sEmployeeId + "-" + Date.now(),
                type: "",
                value: "",
                startDate: "",
                active: false
            });
            oDetailModel.setProperty("/personalData", aPersonalData);
        },

        onDeleteRows() {
            var oTable = this.byId("personalDataTable");
            var aSelectedItems = oTable.getSelectedItems();
            if (!aSelectedItems.length) {
                MessageToast.show("Select at least one row to delete.");
                return;
            }

            var aPersonalData = this.getModel("detail").getProperty("/personalData") || [];
            var aIndexes = aSelectedItems.map(function (oItem) {
                return oTable.indexOfItem(oItem);
            }).sort(function (a, b) {
                return b - a;
            });

            aIndexes.forEach(function (iIndex) {
                aPersonalData.splice(iIndex, 1);
            });

            this.getModel("detail").setProperty("/personalData", aPersonalData);
            oTable.removeSelections(true);
        },

        onSave() {
            var oDetailModel = this.getModel("detail");
            var aPersonalData = oDetailModel.getProperty("/personalData") || [];
            var oDataModel = this.getModel("data");

            oDataModel.setProperty("/personalData/" + this._sEmployeeId, aPersonalData);
            oDetailModel.setProperty("/editable", false);
            MessageToast.show("Personal data saved.");
        },

        onValueHelp(oEvent) {
            if (!this._oValueHelp) {
                this._oValueHelp = new SelectDialog({
                    title: "Select Type",
                    items: {
                        path: "data>/personalTypes",
                        template: new StandardListItem({
                            title: "{data>}"
                        })
                    },
                    confirm: this._onValueHelpConfirm.bind(this),
                    cancel: this._onValueHelpCancel.bind(this)
                });
                this.getView().addDependent(this._oValueHelp);
            }
            this._oValueHelpInput = oEvent.getSource();
            this._oValueHelp.open();
        },

        _onValueHelpConfirm(oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            if (oSelectedItem && this._oValueHelpInput) {
                this._oValueHelpInput.setValue(oSelectedItem.getTitle());
            }
            this._oValueHelpInput = null;
        },

        _onValueHelpCancel() {
            this._oValueHelpInput = null;
        }
    });
});
