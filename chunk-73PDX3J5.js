import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-5Z7BUDXM.js";
import {
  CommonModule,
  Component,
  Inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WY5M3RVA.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
function debugLog(category, message) {
  const logger = window.debugLogger;
  if (logger) {
    logger.info(category, message);
  } else {
    console.warn(`[${category}] ${message}`);
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    debugLog("ConfirmDialog", "\u{1F50D} \uC0DD\uC131\uC790 \uD638\uCD9C\uB428");
    debugLog("ConfirmDialog", `\u{1F50D} data: ${JSON.stringify(this.data)}`);
    this.data.type = this.data.type || this.detectType(this.data.message);
    debugLog("ConfirmDialog", `\u{1F50D} \uD0C0\uC785 \uC124\uC815 \uC644\uB8CC: ${this.data.type}`);
    debugLog("ConfirmDialog", `\u{1F50D} dialogRef \uC0C1\uD0DC: id=${this.dialogRef.id}, disableClose=${this.dialogRef.disableClose}`);
  }
  getIcon() {
    switch (this.data.type) {
      case "danger":
        return "warning";
      case "warning":
        return "info";
      case "info":
        return "help_outline";
      default:
        return "help_outline";
    }
  }
  getButtonColor() {
    return this.data.type === "danger" ? "warn" : "primary";
  }
  detectType(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("\uC0AD\uC81C") || lowerMessage.includes("\uC81C\uAC70")) {
      return "danger";
    }
    if (lowerMessage.includes("\uACBD\uACE0") || lowerMessage.includes("\uC8FC\uC758") || lowerMessage.includes("\uB098\uAC00")) {
      return "warning";
    }
    return "info";
  }
  onConfirm() {
    debugLog("ConfirmDialog", "\u2705 onConfirm() \uD638\uCD9C\uB428");
    debugLog("ConfirmDialog", "dialogRef.close(true) \uD638\uCD9C...");
    this.dialogRef.close(true);
    debugLog("ConfirmDialog", "dialogRef.close(true) \uC644\uB8CC");
  }
  onCancel() {
    debugLog("ConfirmDialog", "\u274C onCancel() \uD638\uCD9C\uB428");
    debugLog("ConfirmDialog", "dialogRef.close(false) \uD638\uCD9C...");
    this.dialogRef.close(false);
    debugLog("ConfirmDialog", "dialogRef.close(false) \uC644\uB8CC");
  }
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 14, vars: 8, consts: [[1, "confirm-dialog"], [1, "dialog-header"], [1, "dialog-icon"], ["mat-dialog-title", ""], [1, "dialog-message"], ["align", "end"], ["mat-stroked-button", "", 1, "cancel-btn", 3, "click"], ["mat-flat-button", "", "cdkFocusInitial", "", 1, "confirm-btn", 3, "click", "color"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-dialog-content")(7, "p", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-dialog-actions", 5)(10, "button", 6);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_10_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_12_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap("type-" + ctx.data.type);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getIcon(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.title || "\uD655\uC778");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.message);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.data.cancelText || "\uCDE8\uC18C", " ");
      \u0275\u0275advance();
      \u0275\u0275property("color", ctx.getButtonColor());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.confirmText || "\uD655\uC778", " ");
    }
  }, dependencies: [
    CommonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon
  ], styles: ["\n\n.confirm-dialog[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-width: 500px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.dialog-header.type-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffffff 100%);\n}\n.dialog-header.type-warning[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%] {\n  color: #f57c00;\n}\n.dialog-header.type-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffffff 100%);\n}\n.dialog-header.type-danger[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.dialog-header.type-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #ffffff 100%);\n}\n.dialog-header.type-info[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.dialog-header[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nmat-dialog-content[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  line-height: 1.6;\n  color: #424242;\n  white-space: pre-wrap;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  gap: 12px;\n}\nmat-dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border-width: 2px;\n}\nmat-dialog-actions[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%] {\n  min-width: 80px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule
    ], template: `
    <div class="confirm-dialog">
      <div class="dialog-header" [class]="'type-' + data.type">
        <mat-icon class="dialog-icon">
          {{ getIcon() }}
        </mat-icon>
        <h2 mat-dialog-title>{{ data.title || '\uD655\uC778' }}</h2>
      </div>
      
      <mat-dialog-content>
        <p class="dialog-message">{{ data.message }}</p>
      </mat-dialog-content>
      
      <mat-dialog-actions align="end">
        <button 
          mat-stroked-button 
          (click)="onCancel()"
          class="cancel-btn">
          {{ data.cancelText || '\uCDE8\uC18C' }}
        </button>
        <button 
          mat-flat-button 
          [color]="getButtonColor()"
          (click)="onConfirm()"
          class="confirm-btn"
          cdkFocusInitial>
          {{ data.confirmText || '\uD655\uC778' }}
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;af8a7cef5a3cc82c98b279bbca6d54c318364ebc471d80fa32bd78fe50c7a7d1;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/shared/components/confirm-dialog/confirm-dialog.component.ts */\n.confirm-dialog {\n  min-width: 320px;\n  max-width: 500px;\n}\n.dialog-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.dialog-header.type-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffffff 100%);\n}\n.dialog-header.type-warning .dialog-icon {\n  color: #f57c00;\n}\n.dialog-header.type-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffffff 100%);\n}\n.dialog-header.type-danger .dialog-icon {\n  color: #d32f2f;\n}\n.dialog-header.type-info {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #ffffff 100%);\n}\n.dialog-header.type-info .dialog-icon {\n  color: #1976d2;\n}\n.dialog-header .dialog-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.dialog-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n}\nmat-dialog-content {\n  padding: 24px;\n}\nmat-dialog-content .dialog-message {\n  margin: 0;\n  font-size: 15px;\n  line-height: 1.6;\n  color: #424242;\n  white-space: pre-wrap;\n}\nmat-dialog-actions {\n  padding: 16px 24px;\n  gap: 12px;\n}\nmat-dialog-actions .cancel-btn {\n  min-width: 80px;\n  border-width: 2px;\n}\nmat-dialog-actions .confirm-btn {\n  min-width: 80px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog/confirm-dialog.component.ts", lineNumber: 146 });
})();

export {
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-73PDX3J5.js.map
