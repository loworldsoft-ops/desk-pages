import "./chunk-N6ESDQJH.js";

// src/app/modules/note/mobile/mobile.routes.ts
var mobileRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-QYED3NZ5.js").then((m) => m.MobileHomeComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-MGARDYQK.js").then((m) => m.MobileEditorComponent)
  },
  {
    path: "settings",
    loadComponent: () => import("./chunk-62SIEIYV.js").then((m) => m.MobileSettingsComponent)
  }
];
export {
  mobileRoutes
};
//# sourceMappingURL=chunk-4YZT2YB7.js.map
