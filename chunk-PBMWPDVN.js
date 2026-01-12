import {
  RouterModule
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
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
import "./chunk-N6ESDQJH.js";

// src/app/modules/note/note-routing.module.ts
var routes = [
  {
    path: "pc",
    loadChildren: () => import("./chunk-IO6ZZKPA.js").then((m) => m.pcRoutes)
  },
  {
    path: "mobile",
    loadChildren: () => import("./chunk-4YZT2YB7.js").then((m) => m.mobileRoutes)
  },
  {
    path: "",
    redirectTo: "pc",
    pathMatch: "full"
  }
];
var NoteRoutingModule = class _NoteRoutingModule {
  static \u0275fac = function NoteRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NoteRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/note/note.module.ts
var NoteModule = class _NoteModule {
  static \u0275fac = function NoteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NoteModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoteRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NoteRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  NoteModule
};
//# sourceMappingURL=chunk-PBMWPDVN.js.map
