sap.ui.define([
  "sap/uxap/BlockBase"
], function (BlockBase) {
  "use strict";

  return BlockBase.extend("project1.Shared.features", {
    metadata: {
      views: {
        Collapsed: {
          viewName: "project1.Shared.features",
          type: "XML"
        },
        Expanded: {
          viewName: "project1.Shared.features",
          type: "XML"
        }
      }
    }
  });
});
