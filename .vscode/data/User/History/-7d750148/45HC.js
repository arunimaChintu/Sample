sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log",
		'sap/ui/integration/Host'
], (Controller, Log, Host) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
            var oHost = new Host({
				resolveDestination: function(sDestinationName, oCard) {
					switch (sDestinationName) {
						case "Northwind":
							return "https://services.odata.org/V3/Northwind/Northwind.svc";
							
						case "NorthwindImages":
							
							return "../../images";
						default:
							Log.error("Unknown destination.");
						break;
					}
				}
			});

			
        }
    });
});