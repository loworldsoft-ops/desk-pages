import {
  ProjectForgotPasswordComponent,
  ProjectGuestGuard,
  ProjectLoginComponent,
  ProjectRegisterComponent
} from "./chunk-4DPYRCGT.js";
import "./chunk-NZXI4AK5.js";
import "./chunk-DZVWUGGM.js";
import "./chunk-XGFL2WJQ.js";
import "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import "./chunk-IEXL5CIB.js";
import "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import "./chunk-ZNLLQ5N3.js";
import "./chunk-TBJT6P6X.js";
import "./chunk-EWZCM5ON.js";
import "./chunk-5Z7BUDXM.js";
import {
  RouterModule
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import "./chunk-X67QRSHQ.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/project/auth/auth-routing.module.ts
var routes = [
  {
    path: "login",
    component: ProjectLoginComponent,
    canActivate: [ProjectGuestGuard]
  },
  {
    path: "register",
    component: ProjectRegisterComponent,
    canActivate: [ProjectGuestGuard]
  },
  {
    path: "forgot-password",
    component: ProjectForgotPasswordComponent,
    canActivate: [ProjectGuestGuard]
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
var ProjectAuthRoutingModule = class _ProjectAuthRoutingModule {
  static \u0275fac = function ProjectAuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectAuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectAuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectAuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  ProjectAuthRoutingModule
};
//# sourceMappingURL=chunk-AZ36VDJB.js.map
