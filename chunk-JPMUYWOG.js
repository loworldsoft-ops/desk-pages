import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/utils/alert-override.util.ts
var originalAlert = window.alert.bind(window);
var originalConfirm = window.confirm.bind(window);
var snackbarServiceInstance = null;
var matDialogInstance = null;
var injectorInstance = null;
var isProcessing = false;
var pendingConfirms = /* @__PURE__ */ new Map();
function setSnackbarServiceInstance(instance) {
  snackbarServiceInstance = instance;
  console.log("\u{1F3AF} Alert Override: SnackbarService \uC778\uC2A4\uD134\uC2A4\uAC00 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
function setMatDialogInstance(instance) {
  matDialogInstance = instance;
  console.log("\u{1F3AF} Alert Override: MatDialog \uC778\uC2A4\uD134\uC2A4\uAC00 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
function setInjectorInstance(instance) {
  injectorInstance = instance;
  console.log("\u{1F3AF} Alert Override: Injector \uC778\uC2A4\uD134\uC2A4\uAC00 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
function isDevelopmentMode() {
  try {
    return localStorage.getItem("useNativeAlert") === "true";
  } catch {
    return false;
  }
}
function initializeAlertOverride() {
  console.log("\u{1F3AF} Alert Override \uCD08\uAE30\uD654 \uC911...");
  window.alert = function(message) {
    if (isProcessing) {
      return;
    }
    if (!snackbarServiceInstance) {
      console.warn("\u26A0\uFE0F SnackbarService\uAC00 \uC544\uC9C1 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
      return;
    }
    isProcessing = true;
    try {
      const messageStr = String(message || "");
      const lowerMessage = messageStr.toLowerCase();
      if (lowerMessage.includes("\uC131\uACF5") || lowerMessage.includes("\uC644\uB8CC") || lowerMessage.includes("\uB418\uC5C8\uC2B5\uB2C8\uB2E4")) {
        snackbarServiceInstance.showSuccess(messageStr, 3e3);
      } else if (lowerMessage.includes("\uC624\uB958") || lowerMessage.includes("\uC2E4\uD328") || lowerMessage.includes("\uC5D0\uB7EC")) {
        snackbarServiceInstance.showError(messageStr, 4e3);
      } else if (lowerMessage.includes("\uACBD\uACE0") || lowerMessage.includes("\uC8FC\uC758")) {
        snackbarServiceInstance.showWarning(messageStr, 3500);
      } else {
        snackbarServiceInstance.showInfo(messageStr, 3e3);
      }
      console.log("\u{1F4E2} Alert \u2192 Snackbar:", messageStr);
    } catch (e) {
      console.warn("\u274C Alert Override \uC624\uB958:", e);
      originalAlert(message);
    } finally {
      isProcessing = false;
    }
  };
  const originalWindowConfirm = window.confirm;
  window.confirm = function(message) {
    if (isProcessing) {
      return false;
    }
    if (!matDialogInstance) {
      console.warn("\u26A0\uFE0F MatDialog\uAC00 \uC544\uC9C1 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
      return false;
    }
    console.log("\u{1F4AC} Confirm \u2192 Dialog:", message);
    const confirmId = Math.random().toString(36);
    let result = false;
    try {
      import("./chunk-OJUIGZOY.js").then((module) => {
        const dialogRef = matDialogInstance.open(module.ConfirmDialogComponent, {
          width: "400px",
          disableClose: false,
          data: {
            message: message || "\uD655\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
            type: detectConfirmType(message || "")
          }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
          result = confirmed || false;
          const pending = pendingConfirms.get(confirmId);
          if (pending) {
            pending.resolve(result);
            pendingConfirms.delete(confirmId);
          }
        });
      });
    } catch (e) {
      console.warn("\u274C Dialog \uC5F4\uAE30 \uC624\uB958:", e);
      return originalConfirm(message);
    }
    return originalConfirm(message);
  };
  console.log("\u2705 Alert Override \uCD08\uAE30\uD654 \uC644\uB8CC");
}
function detectConfirmType(message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("\uC0AD\uC81C") || lowerMessage.includes("\uC81C\uAC70")) {
    return "danger";
  }
  if (lowerMessage.includes("\uACBD\uACE0") || lowerMessage.includes("\uC8FC\uC758")) {
    return "warning";
  }
  return "info";
}
function confirmAsync(message) {
  return __async(this, null, function* () {
    if (!matDialogInstance) {
      console.warn("\u26A0\uFE0F MatDialog\uAC00 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC6D0\uBCF8 confirm \uC0AC\uC6A9");
      return originalConfirm(message);
    }
    try {
      const { ConfirmDialogComponent } = yield import("./chunk-OJUIGZOY.js");
      const dialogRef = matDialogInstance.open(ConfirmDialogComponent, {
        width: "400px",
        disableClose: false,
        data: {
          message,
          type: detectConfirmType(message)
        }
      });
      const result = yield dialogRef.afterClosed().toPromise();
      return result || false;
    } catch (e) {
      console.warn("\u274C confirmAsync \uC624\uB958:", e);
      return originalConfirm(message);
    }
  });
}
function restoreOriginalAlert() {
  window.alert = originalAlert;
  window.confirm = originalConfirm;
  console.log("\u{1F504} \uC6D0\uBCF8 alert, confirm\uC774 \uBCF5\uC6D0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
var AlertOverrideHelper = {
  /**
   * 원본 alert 사용 활성화/비활성화
   */
  setUseNativeAlert(use) {
    localStorage.setItem("useNativeAlert", String(use));
    console.log(`\u{1F527} Native Alert \uC0AC\uC6A9: ${use}`);
  },
  /**
   * 현재 설정 확인
   */
  getStatus() {
    return {
      useNativeAlert: isDevelopmentMode(),
      snackbarReady: snackbarServiceInstance !== null
    };
  },
  /**
   * 테스트용 alert 호출
   */
  testAlert(message = "\uD14C\uC2A4\uD2B8 \uBA54\uC2DC\uC9C0") {
    alert(message);
  },
  /**
   * 테스트용 confirm 호출
   */
  testConfirm(message = "\uD14C\uC2A4\uD2B8 \uD655\uC778 \uBA54\uC2DC\uC9C0") {
    return confirm(message);
  },
  /**
   * 비동기 confirm 테스트 (권장)
   */
  testConfirmAsync(message = "\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?") {
    return __async(this, null, function* () {
      return yield confirmAsync(message);
    });
  },
  /**
   * 다양한 confirm 타입 테스트
   */
  testAllConfirmTypes() {
    return __async(this, null, function* () {
      console.log("=== Confirm \uD0C0\uC785 \uD14C\uC2A4\uD2B8 \uC2DC\uC791 ===");
      const result1 = yield confirmAsync("\uB098\uB294\uAC08\uBE44\uAC00\uC88B\uB2E4 \uC0AC\uC6A9\uC790\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?");
      console.log("\uC0AD\uC81C confirm \uACB0\uACFC:", result1);
      setTimeout(() => __async(null, null, function* () {
        const result2 = yield confirmAsync("\uACBD\uACE0: \uC774 \uC791\uC5C5\uC740 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        console.log("\uACBD\uACE0 confirm \uACB0\uACFC:", result2);
      }), 500);
      setTimeout(() => __async(null, null, function* () {
        const result3 = yield confirmAsync("\uBCC0\uACBD\uC0AC\uD56D\uC744 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?");
        console.log("\uC77C\uBC18 confirm \uACB0\uACFC:", result3);
      }), 1e3);
    });
  }
};
if (typeof window !== "undefined") {
  window.AlertOverride = AlertOverrideHelper;
}

export {
  setSnackbarServiceInstance,
  setMatDialogInstance,
  setInjectorInstance,
  initializeAlertOverride,
  confirmAsync,
  restoreOriginalAlert,
  AlertOverrideHelper
};
//# sourceMappingURL=chunk-JPMUYWOG.js.map
