import {
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTooltip,
  TooltipComponent
} from "./chunk-QQXXBIKC.js";
import {
  A11yModule,
  CdkScrollableModule,
  MatCommonModule,
  OverlayModule
} from "./chunk-5Z7BUDXM.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-WY5M3RVA.js";

// node_modules/@angular/material/fesm2022/tooltip-module.mjs
var MatTooltipModule = class _MatTooltipModule {
  static \u0275fac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [A11yModule, OverlayModule, MatCommonModule, MatCommonModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatCommonModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, MatCommonModule, CdkScrollableModule],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

export {
  MatTooltipModule
};
//# sourceMappingURL=chunk-HOZIBAFQ.js.map
