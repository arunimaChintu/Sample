sap.ui.define([
    
    "project5/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (BaseController, Filter, FilterOperator) => {
    "use strict";

    
    return BaseController.extend("project5.controller.View1", {
        onInit() {
            this._oTable = this.byId("employeeTable");
        },

        onFilterChange() {
            var aFilters = [];
            var sQuery = this.byId("employeeSearch").getValue();
            var sDepartment = this.byId("departmentSelect").getSelectedKey();
            var sStatus = this.byId("statusSelect").getSelectedKey();

            if (sQuery) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("name", FilterOperator.Contains, sQuery),
                        new Filter("id", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }

            if (sDepartment && sDepartment !== "All") {
                aFilters.push(new Filter("department", FilterOperator.EQ, sDepartment));
            }

            if (sStatus && sStatus !== "All") {
                aFilters.push(new Filter("status", FilterOperator.EQ, sStatus));
            }

            this._oTable.getBinding("items").filter(aFilters);
        },

        onEmployeePress(oEvent) {
            var sEmployeeId = oEvent.getSource().getBindingContext("data").getProperty("id");
            this.getRouter().navTo("RouteEmployeeDetail", {
                employeeId: sEmployeeId
            });
        }
    });
});