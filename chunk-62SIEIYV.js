import {
  Router
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  IconComponent,
  NoteService
} from "./chunk-GIGBJXFY.js";
import {
  CommonModule,
  Component,
  NgClass,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/note/mobile/pages/settings/settings.component.ts
function MobileSettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 30);
    \u0275\u0275element(4, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6, "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function MobileSettingsComponent_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275text(8, " \uAD6C\uAE00 \uB85C\uADF8\uC778 ");
    \u0275\u0275elementEnd()();
  }
}
function MobileSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12);
    \u0275\u0275element(2, "img", 33);
    \u0275\u0275elementStart(3, "div")(4, "p", 34);
    \u0275\u0275text(5, "\uC0AC\uC6A9\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7, "user@example.com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 36);
    \u0275\u0275listener("click", function MobileSettingsComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isLoggedIn.set(false));
    });
    \u0275\u0275text(9, " \uB85C\uADF8\uC544\uC6C3 ");
    \u0275\u0275elementEnd()();
  }
}
function MobileSettingsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 12)(2, "div", 37);
    \u0275\u0275element(3, "app-icon", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5, "Wi-Fi\uC5D0\uC11C\uB9CC \uB3D9\uAE30\uD654");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 22);
    \u0275\u0275listener("click", function MobileSettingsComponent_Conditional_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.wifiOnly.set(!ctx_r1.wifiOnly()));
    });
    \u0275\u0275element(7, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.wifiOnly() ? "bg-blue-600" : "bg-gray-300");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.wifiOnly() ? "translate-x-5" : "translate-x-0");
  }
}
var MobileSettingsComponent = class _MobileSettingsComponent {
  router = inject(Router);
  noteService = inject(NoteService);
  isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
  autoSync = signal(false, ...ngDevMode ? [{ debugName: "autoSync" }] : []);
  wifiOnly = signal(true, ...ngDevMode ? [{ debugName: "wifiOnly" }] : []);
  lastBackupTime = signal("2025. 11. 03 14:00", ...ngDevMode ? [{ debugName: "lastBackupTime" }] : []);
  goBack() {
    this.router.navigate(["/note/mobile"]);
  }
  login() {
    if (this.isLoggedIn()) {
      this.isLoggedIn.set(false);
      alert("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    } else {
      this.isLoggedIn.set(true);
      alert("\uAD6C\uAE00 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    }
  }
  syncNow() {
    if (!this.isLoggedIn()) {
      alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
      return;
    }
    alert("\uB3D9\uAE30\uD654\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    this.lastBackupTime.set((/* @__PURE__ */ new Date()).toLocaleString());
  }
  static \u0275fac = function MobileSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileSettingsComponent, selectors: [["app-mobile-settings"]], decls: 50, vars: 8, consts: [[1, "flex", "justify-center", "items-center", "min-h-screen", "bg-gray-100", "font-sans"], [1, "w-full", "max-w-md", "h-[100vh]", "sm:h-[90vh]", "bg-white", "sm:rounded-3xl", "shadow-2xl", "flex", "flex-col", "overflow-hidden", "relative", "border-gray-200", "sm:border"], [1, "flex", "flex-col", "h-full", "bg-white"], [1, "flex", "items-center", "p-4", "border-b", "border-gray-100"], [1, "p-2", "-ml-2", "text-gray-600", "rounded-full", "hover:bg-gray-100", 3, "click"], ["name", "arrow-left"], [1, "text-lg", "font-bold", "text-gray-800", "ml-2"], [1, "flex-1", "overflow-y-auto", "bg-gray-50"], [1, "bg-white", "p-4", "mb-4", "shadow-sm"], [1, "text-sm", "font-bold", "text-gray-500", "mb-3"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "justify-between", "py-3", "border-b", "border-gray-100"], [1, "flex", "items-center", "gap-3"], [1, "p-2", "bg-blue-50", "text-blue-600", "rounded-lg"], ["name", "refresh-cw", 3, "size"], [1, "text-gray-700"], [1, "text-blue-600", "font-bold", "text-sm", "hover:bg-blue-50", "px-3", "py-1.5", "rounded-lg", "transition-colors", 3, "click"], [1, "flex", "items-center", "justify-between", "py-3"], [1, "p-2", "bg-green-50", "text-green-600", "rounded-lg"], ["name", "refresh-cw-3", 3, "size"], [1, "text-gray-700", "block"], [1, "text-xs", "text-gray-400"], [1, "w-11", "h-6", "rounded-full", "relative", "transition-colors", "duration-200", "focus:outline-none", 3, "click", "ngClass"], [1, "w-5", "h-5", "bg-white", "rounded-full", "shadow-sm", "absolute", "top-0.5", "left-0.5", "transition-transform", "duration-200", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "py-3", "border-t", "border-gray-100", "mt-1", "pl-2"], [1, "bg-white", "p-4", "shadow-sm"], [1, "flex", "justify-between", "items-center", "text-sm", "py-2"], [1, "text-gray-600"], [1, "text-gray-800", "font-medium"], [1, "w-10", "h-10", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "text-gray-400"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "text-sm", "font-bold", "hover:bg-blue-700", 3, "click"], ["src", "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff", "alt", "User Profile", 1, "w-10", "h-10", "rounded-full"], [1, "font-bold", "text-gray-800"], [1, "text-xs", "text-gray-500"], [1, "text-gray-400", "hover:text-red-500", "text-sm", "font-medium", "px-2", "py-1", 3, "click"], [1, "p-2", "text-gray-400", "rounded-lg"], ["name", "wifi", 3, "size"], [1, "text-gray-600", "text-sm"]], template: function MobileSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function MobileSettingsComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(5, "app-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "\uB3D9\uAE30\uD654 \uBC0F \uBC31\uC5C5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2", 9);
      \u0275\u0275text(11, "\uACC4\uC815 \uC5F0\uACB0");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, MobileSettingsComponent_Conditional_12_Template, 9, 0, "div", 10)(13, MobileSettingsComponent_Conditional_13_Template, 10, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "h2", 9);
      \u0275\u0275text(16, "\uB3D9\uAE30\uD654 \uC124\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13);
      \u0275\u0275element(20, "app-icon", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275text(22, "\uC989\uC2DC \uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275listener("click", function MobileSettingsComponent_Template_button_click_23_listener() {
        return ctx.syncNow();
      });
      \u0275\u0275text(24, " \uC2E4\uD589 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 12)(27, "div", 18);
      \u0275\u0275element(28, "app-icon", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "span", 20);
      \u0275\u0275text(31, "\uC790\uB3D9 \uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 21);
      \u0275\u0275text(33, "\uC571 \uC2E4\uD589 \uC2DC \uC790\uB3D9 \uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "button", 22);
      \u0275\u0275listener("click", function MobileSettingsComponent_Template_button_click_34_listener() {
        return ctx.autoSync.set(!ctx.autoSync());
      });
      \u0275\u0275element(35, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(36, MobileSettingsComponent_Conditional_36_Template, 8, 3, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 25)(38, "h2", 9);
      \u0275\u0275text(39, "\uBC31\uC5C5 \uC815\uBCF4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 26)(41, "span", 27);
      \u0275\u0275text(42, "\uCD5C\uADFC \uBC31\uC5C5 \uC77C\uC2DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 28);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 26)(46, "span", 27);
      \u0275\u0275text(47, "\uC804\uCCB4 \uB178\uD2B8 \uC218");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 28);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(!ctx.isLoggedIn() ? 12 : 13);
      \u0275\u0275advance(8);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(8);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", ctx.autoSync() ? "bg-blue-600" : "bg-gray-300");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.autoSync() ? "translate-x-5" : "translate-x-0");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.autoSync() ? 36 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.lastBackupTime());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.noteService.notes().length, "\uAC1C");
    }
  }, dependencies: [CommonModule, NgClass, IconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileSettingsComponent, [{
    type: Component,
    args: [{
      selector: "app-mobile-settings",
      standalone: true,
      imports: [CommonModule, IconComponent],
      template: `
    <div class="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div class="w-full max-w-md h-[100vh] sm:h-[90vh] bg-white sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden relative border-gray-200 sm:border">
        
        <div class="flex flex-col h-full bg-white">
          <!-- Settings Header -->
          <div class="flex items-center p-4 border-b border-gray-100">
            <button (click)="goBack()" class="p-2 -ml-2 text-gray-600 rounded-full hover:bg-gray-100">
              <app-icon name="arrow-left"></app-icon>
            </button>
            <h1 class="text-lg font-bold text-gray-800 ml-2">\uB3D9\uAE30\uD654 \uBC0F \uBC31\uC5C5</h1>
          </div>

          <!-- Settings Content -->
          <div class="flex-1 overflow-y-auto bg-gray-50">
            
            <!-- Google Account Section -->
            <div class="bg-white p-4 mb-4 shadow-sm">
              <h2 class="text-sm font-bold text-gray-500 mb-3">\uACC4\uC815 \uC5F0\uACB0</h2>
              
              @if (!isLoggedIn()) {
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                    </div>
                    <span class="text-gray-600">\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4</span>
                  </div>
                  <button 
                    (click)="login()"
                    class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700"
                  >
                    \uAD6C\uAE00 \uB85C\uADF8\uC778
                  </button>
                </div>
              } @else {
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" class="w-10 h-10 rounded-full" alt="User Profile">
                    <div>
                      <p class="font-bold text-gray-800">\uC0AC\uC6A9\uC790</p>
                      <p class="text-xs text-gray-500">user&#64;example.com</p>
                    </div>
                  </div>
                  <button 
                    (click)="isLoggedIn.set(false)"
                    class="text-gray-400 hover:text-red-500 text-sm font-medium px-2 py-1"
                  >
                    \uB85C\uADF8\uC544\uC6C3
                  </button>
                </div>
              }
            </div>

            <!-- Sync Settings -->
            <div class="bg-white p-4 mb-4 shadow-sm">
              <h2 class="text-sm font-bold text-gray-500 mb-3">\uB3D9\uAE30\uD654 \uC124\uC815</h2>
              
              <div class="flex items-center justify-between py-3 border-b border-gray-100">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <app-icon name="refresh-cw" [size]="20"></app-icon>
                  </div>
                  <span class="text-gray-700">\uC989\uC2DC \uB3D9\uAE30\uD654</span>
                </div>
                <button 
                  (click)="syncNow()"
                  class="text-blue-600 font-bold text-sm hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  \uC2E4\uD589
                </button>
              </div>

              <div class="flex items-center justify-between py-3">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-green-50 text-green-600 rounded-lg">
                    <app-icon name="refresh-cw-3" [size]="20"></app-icon>
                  </div>
                  <div>
                    <span class="text-gray-700 block">\uC790\uB3D9 \uB3D9\uAE30\uD654</span>
                    <span class="text-xs text-gray-400">\uC571 \uC2E4\uD589 \uC2DC \uC790\uB3D9 \uB3D9\uAE30\uD654</span>
                  </div>
                </div>
                <!-- Toggle Switch -->
                <button 
                  (click)="autoSync.set(!autoSync())"
                  class="w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none"
                  [ngClass]="autoSync() ? 'bg-blue-600' : 'bg-gray-300'"
                >
                  <div 
                    class="w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 left-0.5 transition-transform duration-200"
                    [ngClass]="autoSync() ? 'translate-x-5' : 'translate-x-0'"
                  ></div>
                </button>
              </div>

              @if (autoSync()) {
                <div class="flex items-center justify-between py-3 border-t border-gray-100 mt-1 pl-2">
                  <div class="flex items-center gap-3">
                    <div class="p-2 text-gray-400 rounded-lg">
                       <app-icon name="wifi" [size]="18"></app-icon>
                    </div>
                    <span class="text-gray-600 text-sm">Wi-Fi\uC5D0\uC11C\uB9CC \uB3D9\uAE30\uD654</span>
                  </div>
                  <button 
                    (click)="wifiOnly.set(!wifiOnly())"
                    class="w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none"
                    [ngClass]="wifiOnly() ? 'bg-blue-600' : 'bg-gray-300'"
                  >
                    <div 
                      class="w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 left-0.5 transition-transform duration-200"
                      [ngClass]="wifiOnly() ? 'translate-x-5' : 'translate-x-0'"
                    ></div>
                  </button>
                </div>
              }
            </div>

            <!-- Backup Info -->
            <div class="bg-white p-4 shadow-sm">
              <h2 class="text-sm font-bold text-gray-500 mb-3">\uBC31\uC5C5 \uC815\uBCF4</h2>
              <div class="flex justify-between items-center text-sm py-2">
                <span class="text-gray-600">\uCD5C\uADFC \uBC31\uC5C5 \uC77C\uC2DC</span>
                <span class="text-gray-800 font-medium">{{ lastBackupTime() }}</span>
              </div>
              <div class="flex justify-between items-center text-sm py-2">
                <span class="text-gray-600">\uC804\uCCB4 \uB178\uD2B8 \uC218</span>
                <span class="text-gray-800 font-medium">{{ noteService.notes().length }}\uAC1C</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileSettingsComponent, { className: "MobileSettingsComponent", filePath: "src/app/modules/note/mobile/pages/settings/settings.component.ts", lineNumber: 149 });
})();
export {
  MobileSettingsComponent
};
//# sourceMappingURL=chunk-62SIEIYV.js.map
