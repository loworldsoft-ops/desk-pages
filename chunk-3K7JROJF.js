import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/utils/confirm-override.util.ts
var originalConfirm = window.confirm.bind(window);
function getDebugLogger() {
  return window.debugLogger;
}
function debugLog(category, message) {
  const logger = getDebugLogger();
  if (logger) {
    logger.info(category, message);
  } else {
    console.log(`[${category}] ${message}`);
  }
}
var matDialogInstance = null;
var isProcessingConfirm = false;
var isConfirmOverrideEnabled = true;
function setConfirmDialogInstance(instance) {
  matDialogInstance = instance;
  if (false) {
    debugLog("Confirm Override", "\u{1F3AF} MatDialog \uC778\uC2A4\uD134\uC2A4\uAC00 \uC124\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
}
function setConfirmOverrideEnabled(enabled) {
  isConfirmOverrideEnabled = enabled;
  debugLog("Confirm Override", `\u{1F3AF} ${enabled ? "\uD65C\uC131\uD654" : "\uBE44\uD65C\uC131\uD654"}`);
}
function detectConfirmType(message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("\uC0AD\uC81C") || lowerMessage.includes("\uC81C\uAC70") || lowerMessage.includes("delete")) {
    return "danger";
  } else if (lowerMessage.includes("\uB098\uAC00") || lowerMessage.includes("\uCDE8\uC18C") || lowerMessage.includes("\uC885\uB8CC")) {
    return "warning";
  }
  return "info";
}
function initializeConfirmOverride() {
  if (false) {
    debugLog("Confirm Override", "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501");
    debugLog("Confirm Override", "\u{1F3AF} \uCD08\uAE30\uD654 \uC2DC\uC791...");
    debugLog("Confirm Override", "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501");
  }
  const nativeConfirm2 = originalConfirm;
  if (false) {
    debugLog("Confirm Override", `\u{1F50D} \uC6D0\uBCF8 window.confirm \uD0C0\uC785: ${typeof window.confirm}`);
    debugLog("Confirm Override", `\u{1F50D} \uBC31\uC5C5\uB41C nativeConfirm \uD0C0\uC785: ${typeof nativeConfirm2}`);
  }
  window.confirm = function(message) {
    if (false) {
      debugLog("Confirm Override", "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501");
      debugLog("Confirm Override", "\u{1F6A8} window.confirm() \uD638\uCD9C\uB428!");
      debugLog("Confirm Override", `\uBA54\uC2DC\uC9C0: ${message || ""}`);
      debugLog("Confirm Override", "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501");
    }
    if (!isConfirmOverrideEnabled) {
      if (false)
        debugLog("Confirm Override", "\u26A0\uFE0F \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC5B4 \uC6D0\uBCF8 confirm\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.");
      return nativeConfirm2(message);
    }
    if (isProcessingConfirm) {
      if (false)
        debugLog("Confirm Override", "\u26A0\uFE0F \uC774\uBBF8 \uCC98\uB9AC \uC911\uC785\uB2C8\uB2E4.");
      return false;
    }
    if (!matDialogInstance) {
      if (false)
        debugLog("Confirm Override", "\u26A0\uFE0F MatDialog\uAC00 \uC544\uC9C1 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
      return nativeConfirm2(message);
    }
    if (false) {
      debugLog("Confirm Override", `\u{1F4AC} Dialog \uD45C\uC2DC - ${message || ""}`);
      debugLog("Confirm Override", "\u26A0\uFE0F \uAE30\uC874 confirm()\uC740 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Dialog\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4.");
    }
    isProcessingConfirm = true;
    if (false)
      debugLog("Confirm Override", "\u{1F50D} ConfirmDialogComponent import \uC2DC\uC791...");
    try {
      import("./chunk-OJUIGZOY.js").then((module) => {
        if (false) {
          debugLog("Confirm Override", "\u{1F50D} \u2705 Dialog \uCEF4\uD3EC\uB10C\uD2B8 import \uC131\uACF5!");
          debugLog("Confirm Override", `\u{1F50D} module \uB0B4\uC6A9: ${Object.keys(module).join(", ")}`);
          debugLog("Confirm Override", "\u{1F50D} matDialogInstance.open() \uD638\uCD9C \uC2DC\uC791...");
        }
        try {
          const dialogRef = matDialogInstance.open(module.ConfirmDialogComponent, {
            width: "400px",
            maxWidth: "90vw",
            disableClose: false,
            hasBackdrop: true,
            closeOnNavigation: true,
            autoFocus: "dialog",
            restoreFocus: true,
            panelClass: "confirm-dialog-container",
            data: {
              message: message || "\uD655\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
              type: detectConfirmType(message || ""),
              confirmText: "\uD655\uC778",
              cancelText: "\uCDE8\uC18C"
            }
          });
          if (false) {
            debugLog("Confirm Override", "\u{1F50D} \u2705 matDialogInstance.open() \uD638\uCD9C \uC131\uACF5!");
            debugLog("Confirm Override", `\u{1F50D} dialogRef id: ${dialogRef.id}`);
          }
          dialogRef.backdropClick().subscribe(() => {
            if (false)
              debugLog("Confirm Override", "\u{1F50D} \u2705 backdrop \uD074\uB9AD \uAC10\uC9C0\uB428!");
            dialogRef.close(false);
          });
          dialogRef.keydownEvents().subscribe((event) => {
            if (event.key === "Escape") {
              if (false)
                debugLog("Confirm Override", "\u{1F50D} \u2705 ESC \uD0A4 \uAC10\uC9C0\uB428!");
              dialogRef.close(false);
            }
          });
          dialogRef.afterClosed().subscribe((confirmed) => {
            if (false)
              debugLog("Confirm Override", `\u{1F50D} \u2705 Dialog \uB2EB\uD798! \uACB0\uACFC: ${confirmed ? "\uD655\uC778" : "\uCDE8\uC18C"}`);
            isProcessingConfirm = false;
          });
          if (false)
            debugLog("Confirm Override", "\u{1F50D} \uBAA8\uB4E0 \uC774\uBCA4\uD2B8 \uAD6C\uB3C5 \uC644\uB8CC");
        } catch (openError) {
          debugLog("Confirm Override", `\u274C matDialogInstance.open() \uC2E4\uD328: ${openError}`);
          isProcessingConfirm = false;
        }
      }).catch((err) => {
        debugLog("Confirm Override", `\u274C ConfirmDialog import \uC2E4\uD328: ${err}`);
        isProcessingConfirm = false;
      });
    } catch (e) {
      debugLog("Confirm Override", `\u274C \uB3D9\uAE30 \uC608\uC678 \uBC1C\uC0DD: ${e}`);
      isProcessingConfirm = false;
      return false;
    }
    return false;
  };
  if (false) {
    debugLog("Confirm Override", "\u2705 \uCD08\uAE30\uD654 \uC644\uB8CC");
    debugLog("Confirm Override", "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501");
  }
}
function confirmAsync(message) {
  return __async(this, null, function* () {
    if (!matDialogInstance) {
      console.warn("\u26A0\uFE0F MatDialog\uAC00 \uC900\uBE44\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC6D0\uBCF8 confirm\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.");
      return originalConfirm(message);
    }
    try {
      const module = yield import("./chunk-OJUIGZOY.js");
      const dialogRef = matDialogInstance.open(module.ConfirmDialogComponent, {
        width: "400px",
        maxWidth: "90vw",
        disableClose: false,
        panelClass: "confirm-dialog-container",
        data: {
          message: message || "\uD655\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
          type: detectConfirmType(message || ""),
          confirmText: "\uD655\uC778",
          cancelText: "\uCDE8\uC18C"
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
function nativeConfirm(message) {
  return originalConfirm(message);
}
var ConfirmOverrideHelper = {
  setDialogInstance: setConfirmDialogInstance,
  setEnabled: setConfirmOverrideEnabled,
  confirmAsync,
  nativeConfirm,
  /**
   * 오버라이드 상태 확인
   */
  isEnabled() {
    return isConfirmOverrideEnabled;
  },
  /**
   * MatDialog 준비 상태 확인
   */
  isReady() {
    return matDialogInstance !== null;
  }
};
if (typeof window !== "undefined") {
  window.ConfirmOverride = ConfirmOverrideHelper;
}

export {
  setConfirmDialogInstance,
  initializeConfirmOverride,
  confirmAsync
};
//# sourceMappingURL=chunk-3K7JROJF.js.map
