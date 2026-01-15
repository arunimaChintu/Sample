diff --git a/project1/webapp/controller/View1.controller.js b/project1/webapp/controller/View1.controller.js
index 491f3309bbac09716755d023c687bae4576a0a61..03370657f86393b3730fff56a61becfb7a86d331 100644
--- a/project1/webapp/controller/View1.controller.js
+++ b/project1/webapp/controller/View1.controller.js
@@ -1,10 +1,47 @@
 sap.ui.define([
-    "sap/ui/core/mvc/Controller"
-], (Controller) => {
+    "project1/controller/BaseController",
+    "sap/ui/model/Filter",
+    "sap/ui/model/FilterOperator"
+], (BaseController, Filter, FilterOperator) => {
     "use strict";
 
-    return Controller.extend("project1.controller.View1", {
+    return BaseController.extend("project1.controller.View1", {
         onInit() {
+            this._oTable = this.byId("employeeTable");
+        },
+
+        onFilterChange() {
+            var aFilters = [];
+            var sQuery = this.byId("employeeSearch").getValue();
+            var sDepartment = this.byId("departmentSelect").getSelectedKey();
+            var sStatus = this.byId("statusSelect").getSelectedKey();
+
+            if (sQuery) {
+                aFilters.push(new Filter({
+                    filters: [
+                        new Filter("name", FilterOperator.Contains, sQuery),
+                        new Filter("id", FilterOperator.Contains, sQuery)
+                    ],
+                    and: false
+                }));
+            }
+
+            if (sDepartment && sDepartment !== "All") {
+                aFilters.push(new Filter("department", FilterOperator.EQ, sDepartment));
+            }
+
+            if (sStatus && sStatus !== "All") {
+                aFilters.push(new Filter("status", FilterOperator.EQ, sStatus));
+            }
+
+            this._oTable.getBinding("items").filter(aFilters);
+        },
+
+        onEmployeePress(oEvent) {
+            var sEmployeeId = oEvent.getSource().getBindingContext("data").getProperty("id");
+            this.getRouter().navTo("RouteEmployeeDetail", {
+                employeeId: sEmployeeId
+            });
         }
     });
-});
\ No newline at end of file
+});
