import {
  ConfirmationDialogComponent
} from "./chunk-5LDCF6IY.js";
import {
  MatDialog
} from "./chunk-EWZCM5ON.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";

// src/app/shared/services/confirmation-dialog.service.ts
var ConfirmationDialogService = class _ConfirmationDialogService {
  dialog;
  constructor(dialog) {
    this.dialog = dialog;
  }
  /**
   * 확인 다이얼로그를 표시합니다.
   * @param message 표시할 메시지
   * @param title 다이얼로그 제목 (기본값: '확인')
   * @param confirmText 확인 버튼 텍스트 (기본값: '확인')
   * @param cancelText 취소 버튼 텍스트 (기본값: '취소')
   * @param confirmColor 확인 버튼 색상 (기본값: 'primary')
   * @returns Observable<boolean> - 확인(true) 또는 취소(false)
   */
  confirm(message, title, confirmText, cancelText, confirmColor) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "400px",
      maxWidth: "90vw",
      data: {
        title,
        message,
        confirmText,
        cancelText,
        confirmColor
      },
      disableClose: false,
      autoFocus: true,
      panelClass: "confirmation-dialog-panel"
    });
    return dialogRef.afterClosed();
  }
  /**
   * 삭제 확인 다이얼로그를 표시합니다.
   * @param itemName 삭제할 항목 이름
   * @returns Observable<boolean>
   */
  confirmDelete(itemName) {
    const message = itemName ? `${itemName}\uC744(\uB97C) \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?` : "\uC120\uD0DD\uD55C \uD56D\uBAA9\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?";
    return this.confirm(message, "\uC0AD\uC81C \uD655\uC778", "\uC0AD\uC81C", "\uCDE8\uC18C", "warn");
  }
  /**
   * 로그아웃 확인 다이얼로그를 표시합니다.
   * @returns Observable<boolean>
   */
  confirmLogout() {
    return this.confirm("\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", "\uB85C\uADF8\uC544\uC6C3", "\uB85C\uADF8\uC544\uC6C3", "\uCDE8\uC18C", "warn");
  }
  static \u0275fac = function ConfirmationDialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationDialogService)(\u0275\u0275inject(MatDialog));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmationDialogService, factory: _ConfirmationDialogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: MatDialog }], null);
})();

export {
  ConfirmationDialogService
};
//# sourceMappingURL=chunk-NCPPCULJ.js.map
