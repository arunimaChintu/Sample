sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var projects = BlockBase.extend("sap.uxap.sample.Shared.projects", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "sap.uxap.sample.Shared.projects",
						type: "XML"
					},
					Expanded: {
						viewName: "sap.uxap.sample.Shared.projects",
						type: "XML"
					}
				}
			}
		});

		return projects;

	});
