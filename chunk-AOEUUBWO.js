import {
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-WY5M3RVA.js";

// src/app/modules/calendar/calendar-routing.module.ts
var routes = [
  {
    path: "pc",
    loadChildren: () => import("./chunk-5XHK4MYC.js").then((m) => m.pcRoutes)
  },
  {
    path: "mobile",
    loadChildren: () => import("./chunk-7IMSX2SA.js").then((m) => m.mobileRoutes)
  },
  {
    path: "",
    redirectTo: "pc",
    pathMatch: "full"
  }
];
var CalendarRoutingModule = class _CalendarRoutingModule {
  static \u0275fac = function CalendarRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CalendarRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/calendar/calendar.module.ts
var CalendarModule = class _CalendarModule {
  static \u0275fac = function CalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CalendarModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarRoutingModule
      ]
    }]
  }], null, null);
})();

export {
  CalendarModule
};
//# sourceMappingURL=chunk-AOEUUBWO.js.map
