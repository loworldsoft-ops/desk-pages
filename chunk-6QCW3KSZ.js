import {
  MatSnackBar
} from "./chunk-XGFL2WJQ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/services/notification.service.ts
var NotificationService = class _NotificationService {
  snackBar;
  defaultConfig = {
    duration: 3e3,
    horizontalPosition: "center",
    verticalPosition: "bottom"
  };
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  /**
   * 일반 정보 메시지 표시
   */
  show(message, duration) {
    this.snackBar.open(message, "\uD655\uC778", __spreadProps(__spreadValues({}, this.defaultConfig), {
      duration: duration || this.defaultConfig.duration,
      panelClass: ["snackbar-info"]
    }));
  }
  /**
   * 성공 메시지 표시
   */
  success(message, duration) {
    this.snackBar.open(message, "\uD655\uC778", __spreadProps(__spreadValues({}, this.defaultConfig), {
      duration: duration || this.defaultConfig.duration,
      panelClass: ["snackbar-success"]
    }));
  }
  /**
   * 경고 메시지 표시
   */
  warning(message, duration) {
    this.snackBar.open(message, "\uD655\uC778", __spreadProps(__spreadValues({}, this.defaultConfig), {
      duration: duration || this.defaultConfig.duration,
      panelClass: ["snackbar-warning"]
    }));
  }
  /**
   * 에러 메시지 표시
   */
  error(message, duration) {
    this.snackBar.open(message, "\uD655\uC778", __spreadProps(__spreadValues({}, this.defaultConfig), {
      duration: duration || this.defaultConfig.duration,
      panelClass: ["snackbar-error"]
    }));
  }
  /**
   * 긴 메시지 표시 (여러 줄 지원)
   */
  showLong(message, duration) {
    this.snackBar.open(message, "\uD655\uC778", __spreadProps(__spreadValues({}, this.defaultConfig), {
      duration: duration || 5e3,
      panelClass: ["snackbar-long"]
    }));
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(MatSnackBar));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: MatSnackBar }], null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-6QCW3KSZ.js.map
