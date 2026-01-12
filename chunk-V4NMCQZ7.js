import {
  MatAutocompleteModule
} from "./chunk-W2FRNP63.js";
import {
  ConfirmationDialogService
} from "./chunk-NCPPCULJ.js";
import {
  MatSlideToggleModule
} from "./chunk-5KTGLBYG.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-ER3JRRHZ.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  NotificationService
} from "./chunk-6QCW3KSZ.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-J3HFPNBL.js";
import {
  MatChipListbox,
  MatChipOption,
  MatChipsModule
} from "./chunk-SVWY7C6P.js";
import "./chunk-XGFL2WJQ.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import "./chunk-IEXL5CIB.js";
import "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-LJBWKBWF.js";
import "./chunk-QQXXBIKC.js";
import "./chunk-OWKVH3DN.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-66OK2TSW.js";
import "./chunk-F5RTWLKS.js";
import "./chunk-NQ2UJILS.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-5Z7BUDXM.js";
import {
  Router,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient,
  HttpClientModule,
  HttpParams
} from "./chunk-OYJIDA3L.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Injectable,
  Input,
  JsonPipe,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  ViewChild,
  catchError,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/erp/services/erp-auth.service.ts
var ErpAuthService = class _ErpAuthService {
  currentUserSubject = new BehaviorSubject(null);
  isErpLoggedInSubject = new BehaviorSubject(false);
  currentUser$ = this.currentUserSubject.asObservable();
  isErpLoggedIn$ = this.isErpLoggedInSubject.asObservable();
  constructor() {
    const savedUser = localStorage.getItem("erpUser");
    const savedToken = localStorage.getItem("erpToken");
    if (savedUser && savedToken) {
      try {
        this.currentUserSubject.next(JSON.parse(savedUser));
        this.isErpLoggedInSubject.next(true);
      } catch (error) {
        this.clearErpAuth();
      }
    }
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get isErpLoggedIn() {
    return this.isErpLoggedInSubject.value;
  }
  /**
   * ERP 시스템 로그인
   */
  erpLogin(username, password) {
    return __async(this, null, function* () {
      try {
        yield new Promise((resolve) => setTimeout(resolve, 800));
        const user = {
          id: "1",
          username,
          employeeId: "EMP001",
          department: "\uAD00\uB9AC\uD300",
          role: "admin",
          permissions: ["read", "write", "delete", "approve"]
        };
        const token = "erp_token_" + Date.now();
        this.currentUserSubject.next(user);
        this.isErpLoggedInSubject.next(true);
        localStorage.setItem("erpUser", JSON.stringify(user));
        localStorage.setItem("erpToken", token);
        return true;
      } catch (error) {
        return false;
      }
    });
  }
  /**
   * 특정 권한 확인
   */
  hasPermission(permission) {
    const user = this.currentUser;
    return user ? user.permissions.includes(permission) : false;
  }
  /**
   * 역할 확인
   */
  hasRole(role) {
    const user = this.currentUser;
    return user ? user.role === role : false;
  }
  /**
   * ERP 로그아웃
   */
  erpLogout() {
    this.currentUserSubject.next(null);
    this.isErpLoggedInSubject.next(false);
    this.clearErpAuth();
  }
  /**
   * ERP 토큰 가져오기
   */
  getErpToken() {
    return localStorage.getItem("erpToken");
  }
  /**
   * ERP 인증 정보 초기화
   */
  clearErpAuth() {
    localStorage.removeItem("erpUser");
    localStorage.removeItem("erpToken");
  }
  static \u0275fac = function ErpAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpAuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErpAuthService, factory: _ErpAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/erp/components/erp-top-menu/erp-top-menu.component.ts
function ErpTopMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function ErpTopMenuComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("- ", ctx_r0.activeMenu);
  }
}
function ErpTopMenuComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
    \u0275\u0275text(2, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r2.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.department);
  }
}
function ErpTopMenuComponent_div_17_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.erpTitle);
  }
}
function ErpTopMenuComponent_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getRecordCountText());
  }
}
function ErpTopMenuComponent_div_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\uCC98\uB9AC \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpTopMenuComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, ErpTopMenuComponent_div_17_span_1_Template, 2, 1, "span", 23)(2, ErpTopMenuComponent_div_17_span_2_Template, 2, 1, "span", 24)(3, ErpTopMenuComponent_div_17_span_3_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.erpTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recordCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isProcessing);
  }
}
function ErpTopMenuComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\uAC74 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.searchResultCount);
  }
}
var ErpTopMenuComponent = class _ErpTopMenuComponent {
  router;
  erpAuthService;
  confirmationDialog;
  constructor(router, erpAuthService, confirmationDialog) {
    this.router = router;
    this.erpAuthService = erpAuthService;
    this.confirmationDialog = confirmationDialog;
  }
  activeMenu = "\uD648";
  currentActiveMenu = "\uD648";
  erpTitle = "";
  isProcessing = false;
  recordCount = 0;
  isSearchMode = false;
  searchResults = { current: 0, total: 0 };
  menuAction = new EventEmitter();
  menuChange = new EventEmitter();
  toolbarAction = new EventEmitter();
  search = new EventEmitter();
  rightPanelToggle = new EventEmitter();
  leftPanelToggle = new EventEmitter();
  searchQuery = "";
  searchResultCount = null;
  isSearching = false;
  isMobileMenuOpen = false;
  // ERP 전용 메뉴 아이템들
  menuItems = [
    { name: "\uD648", active: true, icon: "\u{1F3E0}" },
    { name: "\uBC1C\uC8FC\uAD00\uB9AC", active: false, icon: "\u{1F4CB}" },
    { name: "\uC7AC\uACE0\uAD00\uB9AC", active: false, icon: "\u{1F4E6}" },
    { name: "\uAC70\uB798\uCC98", active: false, icon: "\u{1F3E2}" },
    { name: "\uC815\uC0B0", active: false, icon: "\u{1F4B0}" },
    { name: "\uBCF4\uACE0\uC11C", active: false, icon: "\u{1F4CA}" }
  ];
  // ERP 전용 툴바 액션들
  toolbarActions = [
    {
      action: "new-order",
      icon: "/images/btn-gnb-doc@3x.png",
      tooltip: "\uC0C8 \uBC1C\uC8FC"
    },
    {
      action: "save",
      icon: "/images/ico-save@3x.png",
      tooltip: "\uC800\uC7A5"
    },
    {
      action: "export",
      icon: "/images/btn-gnb-download@3x.png",
      tooltip: "\uB0B4\uBCF4\uB0B4\uAE30"
    },
    {
      action: "print",
      icon: "/images/ico-print@3x.png",
      tooltip: "\uC778\uC1C4"
    }
  ];
  onMenuItemClick(item) {
    if (item.disabled)
      return;
    this.menuItems.forEach((menuItem) => menuItem.active = false);
    item.active = true;
    this.menuChange.emit(item.name);
    switch (item.name) {
      case "\uD648":
        this.toolbarAction.emit("home");
        break;
      case "\uBC1C\uC8FC\uAD00\uB9AC":
        this.toolbarAction.emit("order-management");
        break;
      case "\uC7AC\uACE0\uAD00\uB9AC":
        this.toolbarAction.emit("inventory-management");
        break;
      case "\uAC70\uB798\uCC98":
        this.toolbarAction.emit("client-management");
        break;
      case "\uC815\uC0B0":
        this.toolbarAction.emit("settlement");
        break;
      case "\uBCF4\uACE0\uC11C":
        this.toolbarAction.emit("reports");
        break;
    }
  }
  isMenuDisabled(menuName) {
    return false;
  }
  getRecordCountText() {
    if (this.recordCount === 0)
      return "";
    return `${this.recordCount}\uAC74`;
  }
  onSearchChange(query) {
    this.search.emit(query);
  }
  onSearchEnter() {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery);
    }
  }
  logout() {
    this.confirmationDialog.confirmLogout().subscribe((result) => {
      if (result) {
        this.erpAuthService.erpLogout();
        this.router.navigate(["/erp/login"]);
      }
    });
  }
  // 모바일 메뉴 토글
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  // 현재 활성화된 메뉴 아이템 가져오기
  getCurrentMenuItem() {
    return this.menuItems.find((item) => item.active);
  }
  // 모바일 메뉴 아이템 클릭
  onMobileMenuItemClick(item) {
    this.onMenuItemClick(item);
    this.isMobileMenuOpen = false;
  }
  static \u0275fac = function ErpTopMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpTopMenuComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ErpAuthService), \u0275\u0275directiveInject(ConfirmationDialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpTopMenuComponent, selectors: [["app-erp-top-menu"]], inputs: { activeMenu: "activeMenu", currentActiveMenu: "currentActiveMenu", erpTitle: "erpTitle", isProcessing: "isProcessing", recordCount: "recordCount", isSearchMode: "isSearchMode", searchResults: "searchResults" }, outputs: { menuAction: "menuAction", menuChange: "menuChange", toolbarAction: "toolbarAction", search: "search", rightPanelToggle: "rightPanelToggle", leftPanelToggle: "leftPanelToggle" }, standalone: false, decls: 28, vars: 6, consts: [["class", "search-progress-bar", 4, "ngIf"], [1, "top-menu-bar"], [1, "brand"], ["title", "\uBA54\uB274 \uD328\uB110", 1, "panel-toggle-btn", "left", 3, "click"], [1, "hamburger-icon"], [1, "home-title"], ["class", "current-menu", 4, "ngIf"], [1, "menu-right"], ["class", "user-info", 4, "ngIf"], ["title", "\uB85C\uADF8\uC544\uC6C3", 1, "logout-btn", 3, "click"], ["class", "erp-status desktop-only", 4, "ngIf"], ["class", "search-result-count-inline desktop-only", 4, "ngIf"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "search-box-field", "desktop-only"], ["matInput", "", "placeholder", "\uAC80\uC0C9", 3, "ngModelChange", "input", "keydown.enter", "ngModel"], ["matPrefix", ""], ["title", "\uBA54\uB274 \uD328\uB110", 1, "panel-toggle-btn", 3, "click"], [1, "search-progress-bar"], [1, "search-progress"], [1, "current-menu"], [1, "user-info"], [1, "user-name"], [1, "user-dept"], [1, "erp-status", "desktop-only"], ["class", "erp-title", 4, "ngIf"], ["class", "record-count", 4, "ngIf"], ["class", "processing-status", 4, "ngIf"], [1, "erp-title"], [1, "record-count"], [1, "processing-status"], [1, "search-result-count-inline", "desktop-only"]], template: function ErpTopMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ErpTopMenuComponent_div_0_Template, 2, 0, "div", 0);
      \u0275\u0275elementStart(1, "nav", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function ErpTopMenuComponent_Template_button_click_3_listener() {
        return ctx.leftPanelToggle.emit();
      });
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "span")(6, "span")(7, "span");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "h1");
      \u0275\u0275text(10, "\uC758\uC57D\uB3C4\uB9E4 ERP");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, ErpTopMenuComponent_span_11_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275template(13, ErpTopMenuComponent_div_13_Template, 7, 2, "div", 8);
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function ErpTopMenuComponent_Template_button_click_14_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "logout");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, ErpTopMenuComponent_div_17_Template, 4, 3, "div", 10)(18, ErpTopMenuComponent_span_18_Template, 4, 1, "span", 11);
      \u0275\u0275elementStart(19, "mat-form-field", 12)(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ErpTopMenuComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ErpTopMenuComponent_Template_input_input_20_listener() {
        return ctx.onSearchChange(ctx.searchQuery);
      })("keydown.enter", function ErpTopMenuComponent_Template_input_keydown_enter_20_listener() {
        return ctx.onSearchEnter();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-icon", 14);
      \u0275\u0275text(22, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 15);
      \u0275\u0275listener("click", function ErpTopMenuComponent_Template_button_click_23_listener() {
        return ctx.rightPanelToggle.emit();
      });
      \u0275\u0275elementStart(24, "div", 4);
      \u0275\u0275element(25, "span")(26, "span")(27, "span");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isSearching);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.activeMenu !== "\uD648");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.erpAuthService.currentUser);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.erpTitle || ctx.recordCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchResultCount !== null && !ctx.isSearching);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    }
  }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatPrefix, MatInput, MatIcon], styles: ["\n\n.search-progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  overflow: hidden;\n}\n.search-progress-bar[_ngcontent-%COMP%]   .search-progress[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color),\n      var(--secondary-color));\n  animation: _ngcontent-%COMP%_progress-slide 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_progress-slide {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(400%);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.top-menu-bar[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  position: relative;\n  z-index: 1000;\n  height: 48px;\n  flex-shrink: 0;\n  margin: 0;\n  transition: all 0.3s ease;\n  border-bottom: 1px solid var(--border-color);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 60px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 40px;\n  position: relative;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]:hover   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]:hover   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(-1px);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]:hover   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(1px);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 20px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: var(--text-primary);\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 70%;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 4px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(.disabled)   .menu-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: white;\n  font-weight: 600;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 0.5s ease;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n  width: 100%;\n  max-width: 200px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n  font-size: 14px;\n  font-weight: 500;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   .current-menu-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   .current-menu-text[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.3s ease;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: white;\n  border-color: var(--accent-primary);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--accent-primary);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0 4px 12px var(--shadow);\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown.show[_ngcontent-%COMP%] {\n  max-height: 400px;\n  opacity: 1;\n  transform: translateY(0);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-primary);\n  transition: all 0.2s ease;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: var(--bg-secondary);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--accent-primary);\n  color: white;\n  font-weight: 600;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 12px;\n  gap: 12px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   .current-menu[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  padding-left: 12px;\n  border-left: 2px solid var(--border-color);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 40px;\n  position: relative;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]:hover   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]:hover   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(-1px);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]:hover   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(1px);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 20px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: var(--text-primary);\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 70%;\n  margin-left: auto;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .erp-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #666;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .erp-status[_ngcontent-%COMP%]   .erp-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .erp-status[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 10px;\n  font-size: 12px;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .erp-status[_ngcontent-%COMP%]   .processing-status[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 500;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .search-result-count-inline[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .search-result-count-inline[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 12px;\n  font-size: 13px;\n  width: 200px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: rgba(255, 255, 255, 0.6);\n}\n  body.dark-mode .search-progress-bar {\n  background: rgba(255, 255, 255, 0.1);\n}\n  body.dark-mode .top-menu-bar {\n  background: rgba(30, 30, 30, 0.6);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n  body.dark-mode .top-menu-bar .menu-center ul li {\n  color: #ccc;\n  background: rgba(44, 44, 44, 0.5);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n  body.dark-mode .top-menu-bar .menu-center ul li:hover:not(.disabled) {\n  background: rgba(51, 51, 51, 0.7);\n  color: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n  body.dark-mode .top-menu-bar .menu-center ul li.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.9) 0%,\n      rgba(118, 75, 162, 0.9) 100%);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);\n}\n  body.dark-mode .top-menu-bar .menu-center ul li.disabled {\n  opacity: 0.3;\n}\n  body.dark-mode .top-menu-bar .menu-right .erp-status {\n  color: #ccc;\n}\n  body.dark-mode .top-menu-bar .menu-right .erp-status .erp-title {\n  color: #fff;\n}\n  body.dark-mode .top-menu-bar .menu-right .erp-status .record-count {\n  background: rgba(44, 44, 44, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n  body.dark-mode .top-menu-bar .menu-right .erp-status .processing-status {\n  color: #667eea;\n}\n  body.dark-mode .top-menu-bar .menu-right .search-result-count-inline {\n  color: #ccc;\n}\n  body.dark-mode .top-menu-bar .menu-right .search-result-count-inline b {\n  color: #667eea;\n}\n  body.dark-mode .top-menu-bar .menu-right .search-box {\n  background: rgba(44, 44, 44, 0.5);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n  body.dark-mode .top-menu-bar .menu-right .search-box::placeholder {\n  color: #999;\n}\n  body.dark-mode .top-menu-bar .menu-right .search-box:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);\n}\n  .top-menu-bar .search-box-field {\n  width: 200px;\n}\n  .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper {\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 0;\n}\n  .top-menu-bar .search-box-field .mat-mdc-form-field-flex {\n  padding: 4px 12px;\n}\n  .top-menu-bar .search-box-field .mat-mdc-form-field-infix {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: auto;\n}\n  .top-menu-bar .search-box-field input.mat-mdc-input-element {\n  font-size: 13px;\n  color: var(--text-primary);\n}\n  .top-menu-bar .search-box-field input.mat-mdc-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.4);\n}\n  .top-menu-bar .search-box-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n  .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, \n  .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch, \n  .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgba(255, 255, 255, 0.18);\n  border-width: 1px;\n}\n  .top-menu-bar .search-box-field.mat-focused .mat-mdc-text-field-wrapper {\n  background: rgba(255, 255, 255, 0.6);\n}\n  .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__leading, \n  .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__notch, \n  .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n  border-width: 2px !important;\n}\n  .top-menu-bar .search-box-field .mat-mdc-form-field-icon-suffix {\n  padding-left: 8px;\n}\n  .top-menu-bar .search-box-field .mat-mdc-form-field-icon-suffix mat-icon {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n  body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper {\n  background: rgba(44, 44, 44, 0.5);\n}\n  body.dark-mode .top-menu-bar .search-box-field input.mat-mdc-input-element {\n  color: #fff;\n}\n  body.dark-mode .top-menu-bar .search-box-field input.mat-mdc-input-element::placeholder {\n  color: #999;\n}\n  body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, \n  body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch, \n  body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgba(255, 255, 255, 0.1);\n}\n  body.dark-mode .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__leading, \n  body.dark-mode .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__notch, \n  body.dark-mode .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n}\n  body.dark-mode .top-menu-bar .search-box-field .mat-mdc-form-field-icon-suffix mat-icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n  margin-right: 8px;\n}\n.user-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--accent-primary);\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.user-info[_ngcontent-%COMP%]   .user-dept[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  padding-left: 8px;\n  border-left: 1px solid var(--border-color);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n}\n.logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 77, 79, 0.1);\n  color: #ff4d4f;\n  transform: scale(1.05);\n}\n.logout-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n  body.dark-mode .top-menu-bar .user-info {\n  background: rgba(102, 126, 234, 0.2);\n}\n  body.dark-mode .top-menu-bar .logout-btn:hover {\n  background: rgba(255, 77, 79, 0.2);\n}\n@media (max-width: 992px) {\n  .top-menu-bar[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   .current-menu[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding-left: 10px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .desktop-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-dept[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .top-menu-bar[_ngcontent-%COMP%] {\n    padding: 0 8px;\n    height: 48px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   .current-menu[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding-left: 8px;\n    border-left-width: 1px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    gap: 8px;\n    min-width: 40px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    width: 36px;\n    height: 32px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .panel-toggle-btn.left[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%] {\n    width: 18px;\n    gap: 3px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%] {\n    flex: 1;\n    max-width: 180px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 13px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   .current-menu-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    font-size: 13px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    width: 36px;\n    height: 32px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    gap: 6px;\n    font-size: 11px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n    padding: 6px;\n    width: 32px;\n    height: 32px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]   .current-menu[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding-left: 6px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%] {\n    max-width: 140px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 12px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   .current-menu-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 12px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-center[_ngcontent-%COMP%]   .mobile-menu-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    min-width: auto;\n    padding: 4px 6px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 14px;\n    height: 14px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    padding: 4px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 28px;\n    padding: 4px 6px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%] {\n    width: 16px;\n    gap: 2px;\n  }\n  .top-menu-bar[_ngcontent-%COMP%]   .menu-right[_ngcontent-%COMP%]   .panel-toggle-btn[_ngcontent-%COMP%]   .hamburger-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    height: 2px;\n  }\n}\n/*# sourceMappingURL=erp-top-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpTopMenuComponent, [{
    type: Component,
    args: [{ selector: "app-erp-top-menu", standalone: false, template: `<div *ngIf="isSearching" class="search-progress-bar">
  <div class="search-progress"></div>
</div>

<!-- ERP \uC804\uC6A9 \uC0C1\uB2E8 \uBA54\uB274\uBC14 -->
<nav class="top-menu-bar">
  <div class="brand">
    <!-- \uC88C\uCE21 \uD328\uB110 \uD1A0\uAE00 \uBC84\uD2BC (\uC81C\uC77C \uC88C\uCE21) -->
    <button 
      class="panel-toggle-btn left" 
      (click)="leftPanelToggle.emit()" 
      title="\uBA54\uB274 \uD328\uB110">
      <div class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>

  <!-- \uBA54\uB274\uB294 \uD56D\uC0C1 \uC228\uAE40 -->
  <!-- 
  <div class="menu-center" *ngIf="activeMenu !== '\uD648'">
    <ul class="desktop-menu">
      <li *ngFor="let item of menuItems"
          [class.active]="item.active"
          [class.disabled]="isMenuDisabled(item.name)"
          [title]="item.name + ' \uBA54\uB274'"
          (click)="onMenuItemClick(item)">
        <span class="menu-icon" *ngIf="item.icon">{{ item.icon }}</span>
        <span class="menu-text">{{ item.name }}</span>
      </li>
    </ul>

    <div class="mobile-menu-wrapper">
      <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" [class.active]="isMobileMenuOpen">
        <span class="current-menu-icon">{{ getCurrentMenuItem()?.icon }}</span>
        <span class="current-menu-text">{{ getCurrentMenuItem()?.name }}</span>
        <span class="dropdown-arrow">{{ isMobileMenuOpen ? '\u25B2' : '\u25BC' }}</span>
      </button>
      
      <ul class="mobile-menu-dropdown" [class.show]="isMobileMenuOpen">
        <li *ngFor="let item of menuItems"
            [class.active]="item.active"
            [class.disabled]="isMenuDisabled(item.name)"
            (click)="onMobileMenuItemClick(item)">
          <span class="menu-icon" *ngIf="item.icon">{{ item.icon }}</span>
          <span class="menu-text">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
  -->

  <!-- \uD0C0\uC774\uD2C0 \uD45C\uC2DC -->
  <div class="home-title">
    <h1>\uC758\uC57D\uB3C4\uB9E4 ERP</h1>
    <span class="current-menu" *ngIf="activeMenu !== '\uD648'">- {{ activeMenu }}</span>
  </div>

  <div class="menu-right">
    <!-- \uC0AC\uC6A9\uC790 \uC815\uBCF4 -->
    <div class="user-info" *ngIf="erpAuthService.currentUser as user">
      <mat-icon>account_circle</mat-icon>
      <span class="user-name">{{ user.username }}</span>
      <span class="user-dept">{{ user.department }}</span>
    </div>

    <!-- \uB85C\uADF8\uC544\uC6C3 \uBC84\uD2BC -->
    <button 
      class="logout-btn" 
      (click)="logout()" 
      title="\uB85C\uADF8\uC544\uC6C3">
      <mat-icon>logout</mat-icon>
    </button>
    
    <!-- ERP \uC0C1\uD0DC \uC815\uBCF4 (\uB370\uC2A4\uD06C\uD1B1\uB9CC) -->
    <div class="erp-status desktop-only" *ngIf="erpTitle || recordCount > 0">
      <span class="erp-title" *ngIf="erpTitle">{{ erpTitle }}</span>
      <span class="record-count" *ngIf="recordCount > 0">{{ getRecordCountText() }}</span>
      <span class="processing-status" *ngIf="isProcessing">\uCC98\uB9AC \uC911...</span>
    </div>
    
    <!-- \uAC80\uC0C9 \uACB0\uACFC \uD45C\uC2DC (\uB370\uC2A4\uD06C\uD1B1\uB9CC) -->
    <span *ngIf="searchResultCount !== null && !isSearching" class="search-result-count-inline desktop-only">
      <b>{{searchResultCount}}</b>\uAC74
    </span>
    
    <!-- \uAC80\uC0C9 \uC785\uB825\uCC3D (\uB370\uC2A4\uD06C\uD1B1\uB9CC) -->
    <mat-form-field appearance="outline" class="search-box-field desktop-only" subscriptSizing="dynamic">
      <input matInput
             placeholder="\uAC80\uC0C9"
             [(ngModel)]="searchQuery"
             (input)="onSearchChange(searchQuery)"
             (keydown.enter)="onSearchEnter()">
      <mat-icon matPrefix>search</mat-icon>
    </mat-form-field>
    
    <!-- \uC6B0\uCE21 \uD328\uB110 \uD1A0\uAE00 \uBC84\uD2BC (\uC81C\uC77C \uC6B0\uCE21) -->
    <button 
      class="panel-toggle-btn" 
      (click)="rightPanelToggle.emit()" 
      title="\uBA54\uB274 \uD328\uB110">
      <div class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>
</nav>
`, styles: ["/* src/app/modules/erp/components/erp-top-menu/erp-top-menu.component.scss */\n.search-progress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  overflow: hidden;\n}\n.search-progress-bar .search-progress {\n  width: 30%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-color),\n      var(--secondary-color));\n  animation: progress-slide 1.5s ease-in-out infinite;\n}\n@keyframes progress-slide {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(400%);\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.top-menu-bar {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  position: relative;\n  z-index: 1000;\n  height: 48px;\n  flex-shrink: 0;\n  margin: 0;\n  transition: all 0.3s ease;\n  border-bottom: 1px solid var(--border-color);\n}\n.top-menu-bar .brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 60px;\n}\n.top-menu-bar .brand .panel-toggle-btn.left {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 40px;\n  position: relative;\n}\n.top-menu-bar .brand .panel-toggle-btn.left:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.top-menu-bar .brand .panel-toggle-btn.left:hover .hamburger-icon span {\n  background: var(--primary-color);\n}\n.top-menu-bar .brand .panel-toggle-btn.left:hover .hamburger-icon span:nth-child(1) {\n  transform: translateY(-1px);\n}\n.top-menu-bar .brand .panel-toggle-btn.left:hover .hamburger-icon span:nth-child(3) {\n  transform: translateY(1px);\n}\n.top-menu-bar .brand .panel-toggle-btn.left:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.top-menu-bar .brand .panel-toggle-btn.left .hamburger-icon {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 20px;\n}\n.top-menu-bar .brand .panel-toggle-btn.left .hamburger-icon span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: var(--text-primary);\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n.top-menu-bar .brand .panel-toggle-btn.left .hamburger-icon span:nth-child(2) {\n  width: 70%;\n}\n.top-menu-bar .menu-center {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.top-menu-bar .menu-center ul {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 4px;\n}\n.top-menu-bar .menu-center ul li {\n  padding: 6px 16px;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.top-menu-bar .menu-center ul li .menu-icon {\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease;\n}\n.top-menu-bar .menu-center ul li .menu-text {\n  line-height: 1;\n}\n.top-menu-bar .menu-center ul li:hover:not(.disabled) {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.top-menu-bar .menu-center ul li:hover:not(.disabled) .menu-icon {\n  transform: scale(1.1);\n}\n.top-menu-bar .menu-center ul li.active {\n  background: var(--accent-primary);\n  color: white;\n  font-weight: 600;\n}\n.top-menu-bar .menu-center ul li.active .menu-icon {\n  animation: bounce 0.5s ease;\n}\n.top-menu-bar .menu-center ul li.disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.top-menu-bar .menu-center .mobile-menu-wrapper {\n  display: none;\n  position: relative;\n  width: 100%;\n  max-width: 200px;\n}\n.top-menu-bar .menu-center .mobile-menu-toggle {\n  width: 100%;\n  padding: 8px 12px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n  font-size: 14px;\n  font-weight: 500;\n}\n.top-menu-bar .menu-center .mobile-menu-toggle .current-menu-icon {\n  font-size: 18px;\n  line-height: 1;\n}\n.top-menu-bar .menu-center .mobile-menu-toggle .current-menu-text {\n  flex: 1;\n  text-align: left;\n}\n.top-menu-bar .menu-center .mobile-menu-toggle .dropdown-arrow {\n  font-size: 12px;\n  transition: transform 0.3s ease;\n}\n.top-menu-bar .menu-center .mobile-menu-toggle.active {\n  background: var(--accent-primary);\n  color: white;\n  border-color: var(--accent-primary);\n}\n.top-menu-bar .menu-center .mobile-menu-toggle.active .dropdown-arrow {\n  transform: rotate(180deg);\n}\n.top-menu-bar .menu-center .mobile-menu-toggle:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--accent-primary);\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0 4px 12px var(--shadow);\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown.show {\n  max-height: 400px;\n  opacity: 1;\n  transform: translateY(0);\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown li {\n  padding: 12px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-primary);\n  transition: all 0.2s ease;\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown li .menu-icon {\n  font-size: 18px;\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown li:hover:not(.disabled) {\n  background: var(--bg-secondary);\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown li.active {\n  background: var(--accent-primary);\n  color: white;\n  font-weight: 600;\n}\n.top-menu-bar .menu-center .mobile-menu-dropdown li.disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.top-menu-bar .home-title {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 12px;\n  gap: 12px;\n}\n.top-menu-bar .home-title h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.top-menu-bar .home-title .current-menu {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  padding-left: 12px;\n  border-left: 2px solid var(--border-color);\n}\n.top-menu-bar .menu-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.top-menu-bar .menu-right .panel-toggle-btn {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 8px 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 36px;\n  width: 40px;\n  position: relative;\n}\n.top-menu-bar .menu-right .panel-toggle-btn:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.top-menu-bar .menu-right .panel-toggle-btn:hover .hamburger-icon span {\n  background: var(--primary-color);\n}\n.top-menu-bar .menu-right .panel-toggle-btn:hover .hamburger-icon span:nth-child(1) {\n  transform: translateY(-1px);\n}\n.top-menu-bar .menu-right .panel-toggle-btn:hover .hamburger-icon span:nth-child(3) {\n  transform: translateY(1px);\n}\n.top-menu-bar .menu-right .panel-toggle-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.top-menu-bar .menu-right .panel-toggle-btn .hamburger-icon {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 20px;\n}\n.top-menu-bar .menu-right .panel-toggle-btn .hamburger-icon span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: var(--text-primary);\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n.top-menu-bar .menu-right .panel-toggle-btn .hamburger-icon span:nth-child(2) {\n  width: 70%;\n  margin-left: auto;\n}\n.top-menu-bar .menu-right .erp-status {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #666;\n}\n.top-menu-bar .menu-right .erp-status .erp-title {\n  font-weight: 600;\n  color: #333;\n}\n.top-menu-bar .menu-right .erp-status .record-count {\n  padding: 2px 8px;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 10px;\n  font-size: 12px;\n}\n.top-menu-bar .menu-right .erp-status .processing-status {\n  color: #667eea;\n  font-weight: 500;\n}\n.top-menu-bar .menu-right .search-result-count-inline {\n  font-size: 13px;\n  color: #666;\n}\n.top-menu-bar .menu-right .search-result-count-inline b {\n  color: #667eea;\n  font-weight: 600;\n}\n.top-menu-bar .menu-right .search-box {\n  padding: 8px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 12px;\n  font-size: 13px;\n  width: 200px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.top-menu-bar .menu-right .search-box:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n  background: rgba(255, 255, 255, 0.6);\n}\n::ng-deep body.dark-mode .search-progress-bar {\n  background: rgba(255, 255, 255, 0.1);\n}\n::ng-deep body.dark-mode .top-menu-bar {\n  background: rgba(30, 30, 30, 0.6);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-center ul li {\n  color: #ccc;\n  background: rgba(44, 44, 44, 0.5);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-center ul li:hover:not(.disabled) {\n  background: rgba(51, 51, 51, 0.7);\n  color: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-center ul li.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.9) 0%,\n      rgba(118, 75, 162, 0.9) 100%);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-center ul li.disabled {\n  opacity: 0.3;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .erp-status {\n  color: #ccc;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .erp-status .erp-title {\n  color: #fff;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .erp-status .record-count {\n  background: rgba(44, 44, 44, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .erp-status .processing-status {\n  color: #667eea;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .search-result-count-inline {\n  color: #ccc;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .search-result-count-inline b {\n  color: #667eea;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .search-box {\n  background: rgba(44, 44, 44, 0.5);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .search-box::placeholder {\n  color: #999;\n}\n::ng-deep body.dark-mode .top-menu-bar .menu-right .search-box:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);\n}\n::ng-deep .top-menu-bar .search-box-field {\n  width: 200px;\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper {\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 0;\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-form-field-flex {\n  padding: 4px 12px;\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-form-field-infix {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: auto;\n}\n::ng-deep .top-menu-bar .search-box-field input.mat-mdc-input-element {\n  font-size: 13px;\n  color: var(--text-primary);\n}\n::ng-deep .top-menu-bar .search-box-field input.mat-mdc-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.4);\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch,\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgba(255, 255, 255, 0.18);\n  border-width: 1px;\n}\n::ng-deep .top-menu-bar .search-box-field.mat-focused .mat-mdc-text-field-wrapper {\n  background: rgba(255, 255, 255, 0.6);\n}\n::ng-deep .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n::ng-deep .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n::ng-deep .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n  border-width: 2px !important;\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-form-field-icon-suffix {\n  padding-left: 8px;\n}\n::ng-deep .top-menu-bar .search-box-field .mat-mdc-form-field-icon-suffix mat-icon {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n::ng-deep body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper {\n  background: rgba(44, 44, 44, 0.5);\n}\n::ng-deep body.dark-mode .top-menu-bar .search-box-field input.mat-mdc-input-element {\n  color: #fff;\n}\n::ng-deep body.dark-mode .top-menu-bar .search-box-field input.mat-mdc-input-element::placeholder {\n  color: #999;\n}\n::ng-deep body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,\n::ng-deep body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch,\n::ng-deep body.dark-mode .top-menu-bar .search-box-field .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgba(255, 255, 255, 0.1);\n}\n::ng-deep body.dark-mode .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n::ng-deep body.dark-mode .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n::ng-deep body.dark-mode .top-menu-bar .search-box-field.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n}\n::ng-deep body.dark-mode .top-menu-bar .search-box-field .mat-mdc-form-field-icon-suffix mat-icon {\n  color: rgba(255, 255, 255, 0.5);\n}\n.user-info {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n  margin-right: 8px;\n}\n.user-info mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--accent-primary);\n}\n.user-info .user-name {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.user-info .user-dept {\n  font-size: 12px;\n  color: var(--text-secondary);\n  padding-left: 8px;\n  border-left: 1px solid var(--border-color);\n}\n.logout-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  color: var(--text-primary);\n}\n.logout-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.logout-btn:hover {\n  background: rgba(255, 77, 79, 0.1);\n  color: #ff4d4f;\n  transform: scale(1.05);\n}\n.logout-btn:active {\n  transform: scale(0.95);\n}\n::ng-deep body.dark-mode .top-menu-bar .user-info {\n  background: rgba(102, 126, 234, 0.2);\n}\n::ng-deep body.dark-mode .top-menu-bar .logout-btn:hover {\n  background: rgba(255, 77, 79, 0.2);\n}\n@media (max-width: 992px) {\n  .top-menu-bar {\n    padding: 0 12px;\n  }\n  .top-menu-bar .home-title h1 {\n    font-size: 18px;\n  }\n  .top-menu-bar .home-title .current-menu {\n    font-size: 14px;\n    padding-left: 10px;\n  }\n  .top-menu-bar .menu-center .desktop-menu {\n    display: none !important;\n  }\n  .top-menu-bar .menu-center .mobile-menu-wrapper {\n    display: block;\n  }\n  .top-menu-bar .menu-right {\n    gap: 8px;\n  }\n  .top-menu-bar .menu-right .desktop-only {\n    display: none !important;\n  }\n  .top-menu-bar .menu-right .user-info .user-dept {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .top-menu-bar {\n    padding: 0 8px;\n    height: 48px;\n  }\n  .top-menu-bar .home-title {\n    gap: 8px;\n  }\n  .top-menu-bar .home-title h1 {\n    font-size: 16px;\n  }\n  .top-menu-bar .home-title .current-menu {\n    font-size: 13px;\n    padding-left: 8px;\n    border-left-width: 1px;\n  }\n  .top-menu-bar .brand {\n    gap: 8px;\n    min-width: 40px;\n  }\n  .top-menu-bar .brand .panel-toggle-btn.left {\n    padding: 6px 8px;\n    width: 36px;\n    height: 32px;\n  }\n  .top-menu-bar .brand .panel-toggle-btn.left .hamburger-icon {\n    width: 18px;\n    gap: 3px;\n  }\n  .top-menu-bar .menu-center {\n    flex: 1;\n    max-width: 180px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-wrapper {\n    max-width: 100%;\n  }\n  .top-menu-bar .menu-center .mobile-menu-toggle {\n    padding: 6px 10px;\n    font-size: 13px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-toggle .current-menu-icon {\n    font-size: 16px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-dropdown li {\n    padding: 10px 12px;\n    font-size: 13px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-dropdown li .menu-icon {\n    font-size: 16px;\n  }\n  .top-menu-bar .menu-right {\n    gap: 8px;\n  }\n  .top-menu-bar .menu-right .panel-toggle-btn {\n    padding: 6px 8px;\n    width: 36px;\n    height: 32px;\n  }\n  .top-menu-bar .menu-right .panel-toggle-btn mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .top-menu-bar .menu-right .user-info {\n    padding: 6px 10px;\n    gap: 6px;\n    font-size: 11px;\n  }\n  .top-menu-bar .menu-right .user-info mat-icon {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n  .top-menu-bar .menu-right .user-info .user-name {\n    display: none;\n  }\n  .top-menu-bar .menu-right .logout-btn {\n    padding: 6px;\n    width: 32px;\n    height: 32px;\n  }\n  .top-menu-bar .menu-right .logout-btn mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .top-menu-bar .home-title {\n    gap: 6px;\n  }\n  .top-menu-bar .home-title h1 {\n    font-size: 14px;\n  }\n  .top-menu-bar .home-title .current-menu {\n    font-size: 12px;\n    padding-left: 6px;\n  }\n  .top-menu-bar .menu-center {\n    max-width: 140px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-toggle {\n    padding: 4px 8px;\n    font-size: 12px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-toggle .current-menu-icon {\n    font-size: 14px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-dropdown li {\n    padding: 8px 10px;\n    font-size: 12px;\n  }\n  .top-menu-bar .menu-center .mobile-menu-dropdown li .menu-icon {\n    font-size: 14px;\n  }\n  .top-menu-bar .menu-right {\n    gap: 4px;\n  }\n  .top-menu-bar .menu-right .user-info {\n    min-width: auto;\n    padding: 4px 6px;\n  }\n  .top-menu-bar .menu-right .user-info mat-icon {\n    font-size: 14px;\n    width: 14px;\n    height: 14px;\n  }\n  .top-menu-bar .menu-right .logout-btn {\n    width: 28px;\n    height: 28px;\n    padding: 4px;\n  }\n  .top-menu-bar .menu-right .logout-btn mat-icon {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n  .top-menu-bar .menu-right .panel-toggle-btn {\n    width: 32px;\n    height: 28px;\n    padding: 4px 6px;\n  }\n  .top-menu-bar .menu-right .panel-toggle-btn .hamburger-icon {\n    width: 16px;\n    gap: 2px;\n  }\n  .top-menu-bar .menu-right .panel-toggle-btn .hamburger-icon span {\n    height: 2px;\n  }\n}\n/*# sourceMappingURL=erp-top-menu.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ErpAuthService }, { type: ConfirmationDialogService }], { activeMenu: [{
    type: Input
  }], currentActiveMenu: [{
    type: Input
  }], erpTitle: [{
    type: Input
  }], isProcessing: [{
    type: Input
  }], recordCount: [{
    type: Input
  }], isSearchMode: [{
    type: Input
  }], searchResults: [{
    type: Input
  }], menuAction: [{
    type: Output
  }], menuChange: [{
    type: Output
  }], toolbarAction: [{
    type: Output
  }], search: [{
    type: Output
  }], rightPanelToggle: [{
    type: Output
  }], leftPanelToggle: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpTopMenuComponent, { className: "ErpTopMenuComponent", filePath: "src/app/modules/erp/components/erp-top-menu/erp-top-menu.component.ts", lineNumber: 31 });
})();

// src/app/modules/erp/components/erp-header/erp-header.component.ts
var ErpHeaderComponent = class _ErpHeaderComponent {
  router;
  erpAuthService;
  confirmationDialog;
  erpTitle = "";
  activeMenu = "\uD648";
  recordCount = 0;
  isSearchMode = false;
  searchResults = { current: 0, total: 0 };
  isProcessing = false;
  menuChange = new EventEmitter();
  toolbarAction = new EventEmitter();
  search = new EventEmitter();
  rightPanelToggle = new EventEmitter();
  leftPanelToggle = new EventEmitter();
  constructor(router, erpAuthService, confirmationDialog) {
    this.router = router;
    this.erpAuthService = erpAuthService;
    this.confirmationDialog = confirmationDialog;
  }
  onMenuChange(menu) {
    this.menuChange.emit(menu);
  }
  onToolbarAction(action) {
    this.toolbarAction.emit(action);
  }
  onSearch(searchTerm) {
    this.search.emit(searchTerm);
  }
  onRightPanelToggle() {
    this.rightPanelToggle.emit();
  }
  onLeftPanelToggle() {
    this.leftPanelToggle.emit();
  }
  goToHome() {
  }
  logout() {
    this.confirmationDialog.confirmLogout().subscribe((result) => {
      if (result) {
        this.erpAuthService.erpLogout();
        this.router.navigate(["/erp/login"]);
      }
    });
  }
  static \u0275fac = function ErpHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpHeaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ErpAuthService), \u0275\u0275directiveInject(ConfirmationDialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpHeaderComponent, selectors: [["app-erp-header"]], inputs: { erpTitle: "erpTitle", activeMenu: "activeMenu", recordCount: "recordCount", isSearchMode: "isSearchMode", searchResults: "searchResults", isProcessing: "isProcessing" }, outputs: { menuChange: "menuChange", toolbarAction: "toolbarAction", search: "search", rightPanelToggle: "rightPanelToggle", leftPanelToggle: "leftPanelToggle" }, standalone: false, decls: 2, vars: 6, consts: [[1, "erp-header"], [3, "menuChange", "toolbarAction", "search", "rightPanelToggle", "leftPanelToggle", "activeMenu", "erpTitle", "recordCount", "isSearchMode", "searchResults", "isProcessing"]], template: function ErpHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-erp-top-menu", 1);
      \u0275\u0275listener("menuChange", function ErpHeaderComponent_Template_app_erp_top_menu_menuChange_1_listener($event) {
        return ctx.onMenuChange($event);
      })("toolbarAction", function ErpHeaderComponent_Template_app_erp_top_menu_toolbarAction_1_listener($event) {
        return ctx.onToolbarAction($event);
      })("search", function ErpHeaderComponent_Template_app_erp_top_menu_search_1_listener($event) {
        return ctx.onSearch($event);
      })("rightPanelToggle", function ErpHeaderComponent_Template_app_erp_top_menu_rightPanelToggle_1_listener() {
        return ctx.onRightPanelToggle();
      })("leftPanelToggle", function ErpHeaderComponent_Template_app_erp_top_menu_leftPanelToggle_1_listener() {
        return ctx.onLeftPanelToggle();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("activeMenu", ctx.activeMenu)("erpTitle", ctx.erpTitle)("recordCount", ctx.recordCount)("isSearchMode", ctx.isSearchMode)("searchResults", ctx.searchResults)("isProcessing", ctx.isProcessing);
    }
  }, dependencies: [ErpTopMenuComponent], styles: ["\n\n.erp-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-primary);\n  border-bottom: 1px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 4px var(--shadow);\n  width: 100%;\n  min-height: 48px;\n  transition: all 0.3s ease;\n}\n@media (max-width: 992px) {\n  .erp-header[_ngcontent-%COMP%] {\n    position: sticky;\n    min-height: 48px;\n    box-shadow: 0 2px 8px var(--shadow);\n  }\n}\n@media (max-width: 768px) {\n  .erp-header[_ngcontent-%COMP%] {\n    position: sticky;\n    min-height: 48px;\n  }\n  .erp-header[_ngcontent-%COMP%]   app-erp-top-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n}\n@media (max-width: 480px) {\n  .erp-header[_ngcontent-%COMP%] {\n    min-height: 48px;\n    box-shadow: 0 1px 4px var(--shadow);\n  }\n}\n/*# sourceMappingURL=erp-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-erp-header", standalone: false, template: '<!-- ERP \uBAA8\uB4DC \uC804\uC6A9 \uD5E4\uB354 -->\n<div class="erp-header">\n  <!-- ERP \uC804\uC6A9 \uC0C1\uB2E8 \uBA54\uB274 \uBC14 -->\n  <app-erp-top-menu\n    [activeMenu]="activeMenu"\n    [erpTitle]="erpTitle"\n    [recordCount]="recordCount"\n    [isSearchMode]="isSearchMode"\n    [searchResults]="searchResults"\n    [isProcessing]="isProcessing"\n    (menuChange)="onMenuChange($event)"\n    (toolbarAction)="onToolbarAction($event)"\n    (search)="onSearch($event)"\n    (rightPanelToggle)="onRightPanelToggle()"\n    (leftPanelToggle)="onLeftPanelToggle()">\n  </app-erp-top-menu>\n</div>\n', styles: ["/* src/app/modules/erp/components/erp-header/erp-header.component.scss */\n.erp-header {\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-primary);\n  border-bottom: 1px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 2px 4px var(--shadow);\n  width: 100%;\n  min-height: 48px;\n  transition: all 0.3s ease;\n}\n@media (max-width: 992px) {\n  .erp-header {\n    position: sticky;\n    min-height: 48px;\n    box-shadow: 0 2px 8px var(--shadow);\n  }\n}\n@media (max-width: 768px) {\n  .erp-header {\n    position: sticky;\n    min-height: 48px;\n  }\n  .erp-header app-erp-top-menu {\n    width: 100%;\n    display: block;\n  }\n}\n@media (max-width: 480px) {\n  .erp-header {\n    min-height: 48px;\n    box-shadow: 0 1px 4px var(--shadow);\n  }\n}\n/*# sourceMappingURL=erp-header.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ErpAuthService }, { type: ConfirmationDialogService }], { erpTitle: [{
    type: Input
  }], activeMenu: [{
    type: Input
  }], recordCount: [{
    type: Input
  }], isSearchMode: [{
    type: Input
  }], searchResults: [{
    type: Input
  }], isProcessing: [{
    type: Input
  }], menuChange: [{
    type: Output
  }], toolbarAction: [{
    type: Output
  }], search: [{
    type: Output
  }], rightPanelToggle: [{
    type: Output
  }], leftPanelToggle: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpHeaderComponent, { className: "ErpHeaderComponent", filePath: "src/app/modules/erp/components/erp-header/erp-header.component.ts", lineNumber: 12 });
})();

// src/app/modules/erp/components/erp-left-menu/erp-left-menu.component.ts
function ErpLeftMenuComponent_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function ErpLeftMenuComponent_div_1_div_7_Template_div_click_0_listener() {
      const menu_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMenuClick(menu_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menu_r4.items.length, "\uAC1C \uD56D\uBAA9");
  }
}
function ErpLeftMenuComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3");
    \u0275\u0275text(3, "\uBA54\uB274");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function ErpLeftMenuComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275template(7, ErpLeftMenuComponent_div_1_div_7_Template, 10, 3, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.menuGroups);
  }
}
function ErpLeftMenuComponent_div_2_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.description);
  }
}
function ErpLeftMenuComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ErpLeftMenuComponent_div_2_div_10_Template_div_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubItemClick(item_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ErpLeftMenuComponent_div_2_div_10_div_4_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.description);
  }
}
function ErpLeftMenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 4)(3, "button", 16);
    \u0275\u0275listener("click", function ErpLeftMenuComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275text(4, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function ErpLeftMenuComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275template(10, ErpLeftMenuComponent_div_2_div_10_Template, 7, 2, "div", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getMenuTitle());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getMenuItems());
  }
}
var ErpLeftMenuComponent = class _ErpLeftMenuComponent {
  expandedMenuId = null;
  menuAction = new EventEmitter();
  close = new EventEmitter();
  menuGroups = [
    {
      id: "pharmacy",
      title: "\uC758\uC57D\uD488 \uAD00\uB9AC",
      icon: "\u{1F48A}",
      items: [
        { id: "expiry", label: "\uC720\uD6A8\uAE30\uAC04 \uAD00\uB9AC", description: "FEFO \uC21C\uC11C \uAD00\uB9AC" },
        { id: "inspection", label: "\uC785\uACE0\uAC80\uC218", description: "KGSP \uD45C\uC900 \uAC80\uC218" },
        { id: "temperature", label: "\uC628\uC2B5\uB3C4 \uAD00\uB9AC", description: "\uBCF4\uAD00\uD658\uACBD \uBAA8\uB2C8\uD130\uB9C1" }
      ]
    },
    {
      id: "compliance",
      title: "\uADDC\uC81C/\uBCF4\uACE0",
      icon: "\u{1F4CB}",
      items: [
        { id: "hira", label: "\uC2EC\uD3C9\uC6D0 \uBCF4\uACE0", description: "\uACF5\uAE09\uB0B4\uC5ED \uC81C\uCD9C" },
        { id: "return", label: "\uBC18\uD488/\uD68C\uC218", description: "\uBD88\uB7C9 \uBC0F \uD68C\uC218 \uCC98\uB9AC" },
        { id: "serial", label: "\uC77C\uB828\uBC88\uD638 \uCD94\uC801", description: "RFID/\uBC14\uCF54\uB4DC \uCD94\uC801" }
      ]
    },
    {
      id: "operation",
      title: "\uC6B4\uC601 \uAD00\uB9AC",
      icon: "\u{1F4E6}",
      items: [
        { id: "order", label: "\uBC1C\uC8FC \uAD00\uB9AC", description: "\uAD6C\uB9E4 \uBC1C\uC8FC \uBC0F \uC218\uC8FC" },
        { id: "inventory", label: "\uC7AC\uACE0 \uAD00\uB9AC", description: "\uC7AC\uACE0 \uD604\uD669 \uBC0F \uC870\uC815" },
        { id: "client", label: "\uAC70\uB798\uCC98 \uAD00\uB9AC", description: "\uACE0\uAC1D/\uACF5\uAE09\uC0AC \uAD00\uB9AC" }
      ]
    },
    {
      id: "analysis",
      title: "\uBD84\uC11D/\uC815\uC0B0",
      icon: "\u{1F4CA}",
      items: [
        { id: "settlement", label: "\uC815\uC0B0 \uAD00\uB9AC", description: "\uB9E4\uCD9C/\uB9E4\uC785 \uC815\uC0B0" },
        { id: "reports", label: "\uBCF4\uACE0\uC11C", description: "\uD1B5\uACC4 \uBC0F \uBD84\uC11D" }
      ]
    }
  ];
  onMenuClick(menuId) {
    this.expandedMenuId = this.expandedMenuId === menuId ? null : menuId;
  }
  onSubItemClick(subItemId) {
    this.menuAction.emit({ type: "menu-click", menuId: subItemId });
    this.expandedMenuId = null;
  }
  onBack() {
    this.expandedMenuId = null;
  }
  onClose() {
    this.expandedMenuId = null;
    this.close.emit();
  }
  getMenuTitle() {
    const menu = this.menuGroups.find((m) => m.id === this.expandedMenuId);
    return menu ? menu.title : "";
  }
  getMenuItems() {
    const menu = this.menuGroups.find((m) => m.id === this.expandedMenuId);
    return menu ? menu.items : [];
  }
  static \u0275fac = function ErpLeftMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpLeftMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpLeftMenuComponent, selectors: [["app-erp-left-menu"]], outputs: { menuAction: "menuAction", close: "close" }, standalone: false, decls: 3, vars: 2, consts: [[1, "erp-left-menu"], ["class", "main-menu", 4, "ngIf"], ["class", "expanded-panel", 4, "ngIf"], [1, "main-menu"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "category-list"], ["class", "category-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "click"], [1, "category-icon"], [1, "category-content"], [1, "category-title"], [1, "category-count"], [1, "category-arrow"], [1, "expanded-panel"], [1, "panel-content"], [1, "back-btn", 3, "click"], [1, "panel-items"], ["class", "menu-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "menu-item", 3, "click"], [1, "item-content"], [1, "item-label"], ["class", "item-description", 4, "ngIf"], [1, "item-arrow"], [1, "item-description"]], template: function ErpLeftMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ErpLeftMenuComponent_div_1_Template, 8, 1, "div", 1)(2, ErpLeftMenuComponent_div_2_Template, 11, 2, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.expandedMenuId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedMenuId);
    }
  }, dependencies: [NgForOf, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.erp-left-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 280px;\n  z-index: 1002;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: var(--bg-primary);\n  border-right: 1px solid var(--border-color);\n  box-shadow: 2px 0 8px var(--shadow);\n  animation: _ngcontent-%COMP%_slideInFromLeft 0.3s ease-out;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%], \n.erp-left-menu[_ngcontent-%COMP%]   .expanded-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-secondary);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%], \n.erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent-primary);\n  transform: translateX(2px);\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent-danger);\n  transform: rotate(90deg);\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(4px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover   .category-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(4px);\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.8;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-arrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   .item-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(4px);\n}\n@keyframes _ngcontent-%COMP%_slideInFromLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 992px) {\n  .erp-left-menu[_ngcontent-%COMP%] {\n    width: 280px;\n    box-shadow: 4px 0 12px var(--shadow);\n  }\n}\n@media (max-width: 768px) {\n  .erp-left-menu[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 280px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%], \n   .erp-left-menu[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 24px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 40px;\n    height: 40px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-arrow[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-arrow[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .erp-left-menu[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 10px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 36px;\n    height: 36px;\n  }\n  .erp-left-menu[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=erp-left-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpLeftMenuComponent, [{
    type: Component,
    args: [{ selector: "app-erp-left-menu", standalone: false, template: '<div class="erp-left-menu">\n  <!-- \uBA54\uC778 \uCE74\uD14C\uACE0\uB9AC \uBA54\uB274 (expandedMenuId\uAC00 null\uC77C \uB54C) -->\n  <div class="main-menu" *ngIf="!expandedMenuId">\n    <div class="panel-header">\n      <h3>\uBA54\uB274</h3>\n      <button class="close-btn" (click)="onClose()">\xD7</button>\n    </div>\n    <div class="category-list">\n      <div class="category-item" \n           *ngFor="let menu of menuGroups" \n           (click)="onMenuClick(menu.id)">\n        <div class="category-icon">{{ menu.icon }}</div>\n        <div class="category-content">\n          <div class="category-title">{{ menu.title }}</div>\n          <div class="category-count">{{ menu.items.length }}\uAC1C \uD56D\uBAA9</div>\n        </div>\n        <div class="category-arrow">\u203A</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \uC11C\uBE0C \uBA54\uB274 \uD328\uB110 (expandedMenuId\uAC00 \uC788\uC744 \uB54C) -->\n  <div class="expanded-panel" *ngIf="expandedMenuId">\n    <div class="panel-content">\n      <div class="panel-header">\n        <button class="back-btn" (click)="onBack()">\u2039</button>\n        <h3>{{ getMenuTitle() }}</h3>\n        <button class="close-btn" (click)="onClose()">\xD7</button>\n      </div>\n      <div class="panel-items">\n        <div class="menu-item" *ngFor="let item of getMenuItems()" (click)="onSubItemClick(item.id)">\n          <div class="item-content">\n            <div class="item-label">{{ item.label }}</div>\n            <div class="item-description" *ngIf="item.description">{{ item.description }}</div>\n          </div>\n          <div class="item-arrow">\u203A</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/erp/components/erp-left-menu/erp-left-menu.component.scss */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.erp-left-menu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 280px;\n  z-index: 1002;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: var(--bg-primary);\n  border-right: 1px solid var(--border-color);\n  box-shadow: 2px 0 8px var(--shadow);\n  animation: slideInFromLeft 0.3s ease-out;\n}\n.erp-left-menu .main-menu,\n.erp-left-menu .expanded-panel {\n  height: 100%;\n  overflow-y: auto;\n}\n.erp-left-menu .panel-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-secondary);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.erp-left-menu .panel-header h3 {\n  flex: 1;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.erp-left-menu .panel-header .back-btn,\n.erp-left-menu .panel-header .close-btn {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.erp-left-menu .panel-header .back-btn:hover {\n  color: var(--accent-primary);\n  transform: translateX(2px);\n}\n.erp-left-menu .panel-header .close-btn:hover {\n  color: var(--accent-danger);\n  transform: rotate(90deg);\n}\n.erp-left-menu .category-list {\n  padding: 12px;\n}\n.erp-left-menu .category-list .category-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-left-menu .category-list .category-item:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(4px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.erp-left-menu .category-list .category-item .category-icon {\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n}\n.erp-left-menu .category-list .category-item .category-content {\n  flex: 1;\n}\n.erp-left-menu .category-list .category-item .category-content .category-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-left-menu .category-list .category-item .category-content .category-count {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.erp-left-menu .category-list .category-item .category-arrow {\n  font-size: 24px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-left-menu .category-list .category-item:hover .category-arrow {\n  opacity: 1;\n  transform: translateX(4px);\n}\n.erp-left-menu .panel-items {\n  padding: 12px;\n}\n.erp-left-menu .panel-items .menu-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-left-menu .panel-items .menu-item:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.erp-left-menu .panel-items .menu-item .item-content {\n  flex: 1;\n}\n.erp-left-menu .panel-items .menu-item .item-content .item-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-left-menu .panel-items .menu-item .item-content .item-description {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.8;\n}\n.erp-left-menu .panel-items .menu-item .item-arrow {\n  font-size: 20px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-left-menu .panel-items .menu-item:hover .item-arrow {\n  opacity: 1;\n  transform: translateX(4px);\n}\n@keyframes slideInFromLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 992px) {\n  .erp-left-menu {\n    width: 280px;\n    box-shadow: 4px 0 12px var(--shadow);\n  }\n}\n@media (max-width: 768px) {\n  .erp-left-menu {\n    width: 80%;\n    max-width: 280px;\n  }\n  .erp-left-menu .panel-header {\n    padding: 12px 16px;\n  }\n  .erp-left-menu .panel-header h3 {\n    font-size: 16px;\n  }\n  .erp-left-menu .panel-header .back-btn,\n  .erp-left-menu .panel-header .close-btn {\n    width: 28px;\n    height: 28px;\n    font-size: 24px;\n  }\n  .erp-left-menu .category-list {\n    padding: 8px;\n  }\n  .erp-left-menu .category-list .category-item {\n    padding: 12px;\n    gap: 12px;\n  }\n  .erp-left-menu .category-list .category-item .category-icon {\n    font-size: 28px;\n    width: 40px;\n    height: 40px;\n  }\n  .erp-left-menu .category-list .category-item .category-content .category-title {\n    font-size: 14px;\n  }\n  .erp-left-menu .category-list .category-item .category-content .category-count {\n    font-size: 11px;\n  }\n  .erp-left-menu .category-list .category-item .category-arrow {\n    font-size: 20px;\n  }\n  .erp-left-menu .panel-items {\n    padding: 8px;\n  }\n  .erp-left-menu .panel-items .menu-item {\n    padding: 12px;\n  }\n  .erp-left-menu .panel-items .menu-item .item-content .item-label {\n    font-size: 13px;\n  }\n  .erp-left-menu .panel-items .menu-item .item-content .item-description {\n    font-size: 11px;\n  }\n  .erp-left-menu .panel-items .menu-item .item-arrow {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .erp-left-menu {\n    width: 85%;\n  }\n  .erp-left-menu .category-list .category-item {\n    padding: 10px;\n    gap: 10px;\n  }\n  .erp-left-menu .category-list .category-item .category-icon {\n    font-size: 24px;\n    width: 36px;\n    height: 36px;\n  }\n  .erp-left-menu .category-list .category-item .category-content .category-title {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=erp-left-menu.component.css.map */\n"] }]
  }], null, { menuAction: [{
    type: Output
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpLeftMenuComponent, { className: "ErpLeftMenuComponent", filePath: "src/app/modules/erp/components/erp-left-menu/erp-left-menu.component.ts", lineNumber: 22 });
})();

// src/app/services/hira-api.service.ts
var HiraApiService = class _HiraApiService {
  http;
  // 실제 환경에서는 환경변수에서 가져와야 합니다
  baseUrl = "http://apis.data.go.kr/B551182";
  serviceKey = "YOUR_SERVICE_KEY_HERE";
  // 실제 발급받은 키로 교체 필요
  // API 사용 모드: 'mock' | 'real'
  apiMode = "mock";
  // 'real'로 변경하면 실제 API 호출
  constructor(http) {
    this.http = http;
  }
  /**
   * 의약품 기본정보 조회
   * API 명세: 건강보험심사평가원_의약품정보서비스
   * 엔드포인트: /eddiService/getDrugProductList
   */
  searchDrugInfo(drugCd) {
    if (this.apiMode === "mock") {
      return this.getMockDrugInfo(drugCd);
    }
    const params = new HttpParams().set("serviceKey", this.serviceKey).set("item_name", drugCd).set("numOfRows", "10").set("pageNo", "1").set("type", "json");
    return this.http.get(`${this.baseUrl}/eddiService/getDrugProductList`, { params }).pipe(map((response) => {
      if (response.body?.items) {
        const item = response.body.items[0];
        const drugInfo = {
          drugCd: item.itemSeq || drugCd,
          drugName: item.itemName || "",
          company: item.entpName || "",
          ingredient: item.itemIngredient || "",
          dosageForm: item.etcOtcName || "",
          unitPrice: parseFloat(item.listPrice) || 0,
          insurancePrice: parseFloat(item.nHIfPrice) || 0,
          limitPrice: parseFloat(item.upperLimitPrice) || 0,
          standardCode: item.standardCode || "",
          atcCode: item.atcCode || "",
          efficacy: item.efcyQesitm || ""
        };
        return {
          success: true,
          data: drugInfo,
          message: "\uC870\uD68C \uC131\uACF5"
        };
      }
      return {
        success: false,
        data: null,
        message: "\uB370\uC774\uD130\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      };
    }), catchError((error) => of({
      success: false,
      data: null,
      message: `API \uD638\uCD9C \uC2E4\uD328: ${error.message}`
    })));
  }
  /**
   * Mock 데이터 반환 (개발/테스트용)
   */
  getMockDrugInfo(drugCd) {
    const mockData = {
      drugCd,
      drugName: "\uC544\uC2A4\uD53C\uB9B0\uC815 100mg",
      company: "\uBC14\uC774\uC5D8\uCF54\uB9AC\uC544(\uC8FC)",
      ingredient: "Aspirin",
      dosageForm: "\uC815\uC81C",
      unitPrice: 50,
      insurancePrice: 45,
      limitPrice: 60,
      standardCode: "644900540",
      atcCode: "B01AC06",
      efficacy: "\uD608\uC804\uC608\uBC29, \uD574\uC5F4\uC9C4\uD1B5"
    };
    return of({
      success: true,
      data: mockData,
      message: "\uC870\uD68C \uC131\uACF5 (Mock Data)"
    });
  }
  /**
   * EDI 약가 정보 조회
   */
  getDrugPrice(medicineCd) {
    const mockData = {
      drugCd: medicineCd,
      drugName: "\uD0C0\uC774\uB808\uB180\uC815 500mg",
      company: "\uD55C\uAD6D\uC580\uC13C(\uC720)",
      ingredient: "Acetaminophen",
      dosageForm: "\uC815\uC81C",
      unitPrice: 35,
      insurancePrice: 30,
      limitPrice: 40,
      standardCode: "196700041",
      efficacy: "\uD574\uC5F4, \uC9C4\uD1B5"
    };
    return of({
      success: true,
      data: mockData,
      message: "\uC57D\uAC00 \uC870\uD68C \uC131\uACF5 (Demo)",
      totalCount: 1
    });
  }
  /**
   * 요양기관 정보 조회
   */
  searchHospitalInfo(ykiho) {
    const mockData = {
      ykiho,
      institutionName: "\uC11C\uC6B8\uB300\uD559\uAD50\uBCD1\uC6D0",
      address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC885\uB85C\uAD6C \uB300\uD559\uB85C 101",
      telephone: "02-2072-2114",
      type: "\uC0C1\uAE09\uC885\uD569",
      businessNumber: "110-82-00013",
      representative: "\uAE40\uC5F0\uC218",
      openDate: "1978-12-23"
    };
    return of({
      success: true,
      data: mockData,
      message: "\uC694\uC591\uAE30\uAD00 \uC870\uD68C \uC131\uACF5 (Demo)"
    });
  }
  /**
   * 약국 정보 조회
   */
  searchPharmacyInfo(name) {
    const mockData = [
      {
        ykiho: "11234567",
        institutionName: "\uC628\uB204\uB9AC\uC57D\uAD6D",
        address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123",
        telephone: "02-1234-5678",
        type: "\uC57D\uAD6D",
        businessNumber: "123-45-67890",
        representative: "\uAE40\uC57D\uC0AC",
        openDate: "2015-03-15"
      },
      {
        ykiho: "11234568",
        institutionName: "\uD589\uBCF5\uC57D\uAD6D",
        address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uC5ED\uC0BC\uB85C 456",
        telephone: "02-2345-6789",
        type: "\uC57D\uAD6D",
        businessNumber: "234-56-78901",
        representative: "\uC774\uC57D\uC0AC",
        openDate: "2018-07-20"
      }
    ];
    return of({
      success: true,
      data: mockData,
      message: "\uC57D\uAD6D \uC815\uBCF4 \uC870\uD68C \uC131\uACF5 (Demo)",
      totalCount: 2
    });
  }
  /**
   * 의료기기 정보 조회
   */
  searchMedicalDevice(deviceName) {
    const mockData = {
      deviceCode: "MD001234",
      deviceName: "\uB514\uC9C0\uD138 \uD608\uC555\uACC4",
      manufacturer: "\uC624\uBBC0\uB860\uD5EC\uC2A4\uCF00\uC5B4\uCF54\uB9AC\uC544(\uC8FC)",
      modelNumber: "HEM-7156",
      approvalNumber: "\uC218\uD5C8 18-1234",
      insuranceCovered: true,
      price: 85e3,
      classification: "\uAC00\uC815\uC6A9 \uC804\uC790\uD608\uC555\uACC4"
    };
    return of({
      success: true,
      data: mockData,
      message: "\uC758\uB8CC\uAE30\uAE30 \uC870\uD68C \uC131\uACF5 (Demo)"
    });
  }
  /**
   * API 상태 확인
   */
  checkApiStatus() {
    return of({
      success: true,
      data: {
        status: "operational",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        services: {
          drugInfo: "available",
          hospitalInfo: "available",
          medicalDevice: "available"
        }
      },
      message: "API \uC11C\uBE44\uC2A4 \uC815\uC0C1 \uC791\uB3D9 \uC911"
    });
  }
  /**
   * 약가 일괄 업데이트 (배치)
   */
  batchUpdateDrugPrices(drugCodes) {
    return of({
      success: true,
      data: {
        updatedCount: drugCodes.length,
        failedCount: 0,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      },
      message: `${drugCodes.length}\uAC74\uC758 \uC57D\uAC00 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8 \uC644\uB8CC (Demo)`
    });
  }
  /**
   * 제네릭 의약품 조회
   */
  searchGenericDrug(ingredient) {
    const mockData = [
      {
        drugCd: "GEN001",
        drugName: "\uC544\uC2A4\uD53C\uB9B0\uC815 100mg (\uC81C\uB124\uB9AD)",
        company: "\uD55C\uBBF8\uC57D\uD488(\uC8FC)",
        ingredient: "Aspirin",
        dosageForm: "\uC815\uC81C",
        unitPrice: 30,
        insurancePrice: 25,
        limitPrice: 35,
        standardCode: "644900541",
        atcCode: "B01AC06"
      },
      {
        drugCd: "GEN002",
        drugName: "\uC544\uC2A4\uD53C\uB9B0\uC815 100mg (\uBCF5\uC81C\uC57D)",
        company: "\uB3D9\uC544\uC81C\uC57D(\uC8FC)",
        ingredient: "Aspirin",
        dosageForm: "\uC815\uC81C",
        unitPrice: 28,
        insurancePrice: 23,
        limitPrice: 33,
        standardCode: "644900542",
        atcCode: "B01AC06"
      }
    ];
    return of({
      success: true,
      data: mockData,
      message: "\uC81C\uB124\uB9AD \uC758\uC57D\uD488 \uC870\uD68C \uC131\uACF5 (Demo)",
      totalCount: 2
    });
  }
  /**
   * 요양기관기호 유효성 검증
   */
  validateInstitutionCode(ykiho) {
    const isValid = /^[0-9]{8}$/.test(ykiho);
    return of({
      success: true,
      data: isValid,
      message: isValid ? "\uC720\uD6A8\uD55C \uC694\uC591\uAE30\uAD00\uAE30\uD638\uC785\uB2C8\uB2E4." : "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD615\uC2DD\uC785\uB2C8\uB2E4."
    });
  }
  static \u0275fac = function HiraApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HiraApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HiraApiService, factory: _HiraApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HiraApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/erp/components/erp-right-sidebar/erp-right-sidebar.component.ts
function ErpRightSidebarComponent_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_1_div_18_Template_div_click_0_listener() {
      const menu_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMenuClick(menu_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", menu_r4.items.length, "\uAC1C API");
  }
}
function ErpRightSidebarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span", 7);
    \u0275\u0275text(4, "\u{1F3E5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "\uC2EC\uD3C9\uC6D0 API \uD14C\uC2A4\uD2B8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10);
    \u0275\u0275text(11, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "p", 12);
    \u0275\u0275text(14, "\uAC74\uAC15\uBCF4\uD5D8\uC2EC\uC0AC\uD3C9\uAC00\uC6D0 Open API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 13);
    \u0275\u0275text(16, "\uC758\uC57D\uD488, \uC694\uC591\uAE30\uAD00, \uC758\uB8CC\uAE30\uAE30 \uC815\uBCF4\uB97C \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275template(18, ErpRightSidebarComponent_div_1_div_18_Template, 10, 3, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.menuGroups);
  }
}
function ErpRightSidebarComponent_div_2_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.description);
  }
}
function ErpRightSidebarComponent_div_2_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.apiEndpoint);
  }
}
function ErpRightSidebarComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_2_div_10_Template_div_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubItemClick(item_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ErpRightSidebarComponent_div_2_div_10_div_4_Template, 2, 1, "div", 30)(5, ErpRightSidebarComponent_div_2_div_10_div_5_Template, 3, 1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275text(7, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.apiEndpoint);
  }
}
function ErpRightSidebarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 5)(3, "button", 24);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275text(4, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275template(10, ErpRightSidebarComponent_div_2_div_10_Template, 8, 3, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getMenuTitle());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getMenuItems());
  }
}
function ErpRightSidebarComponent_div_3_div_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F50D} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_12_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC57D\uD488\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_12_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.drugCd, $event) || (ctx_r1.searchParams.drugCd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testDrugSearch());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_12_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_12_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.drugCd);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4B0} \uC57D\uAC00 \uC870\uD68C");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC758\uC57D\uD488\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_13_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.medicineCd, $event) || (ctx_r1.searchParams.medicineCd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testDrugPrice());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_13_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_13_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.medicineCd);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F50D} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC131\uBD84\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_14_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.ingredient, $event) || (ctx_r1.searchParams.ingredient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testGenericDrug());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_14_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_14_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.ingredient);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F3E5} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC694\uC591\uAE30\uAD00\uAE30\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_15_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.ykiho, $event) || (ctx_r1.searchParams.ykiho = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testHospitalSearch());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_15_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_15_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.ykiho);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F48A} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC57D\uAD6D\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_16_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.pharmacyName, $event) || (ctx_r1.searchParams.pharmacyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testPharmacySearch());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_16_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_16_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.pharmacyName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F52C} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_17_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uAE30\uAE30\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_17_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.deviceName, $event) || (ctx_r1.searchParams.deviceName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testDeviceSearch());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_17_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_17_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.deviceName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 \uAC80\uC99D\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uAC80\uC99D \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC694\uC591\uAE30\uAD00\uAE30\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_18_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.institutionCode, $event) || (ctx_r1.searchParams.institutionCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testInstitutionCode());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_18_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_18_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.institutionCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F3ED} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_19_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC5C5\uCCB4\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.manufacturerName, $event) || (ctx_r1.searchParams.manufacturerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testDeviceManufacturer());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_19_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_19_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.manufacturerName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4B3} \uC870\uD68C\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uC870\uD68C \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uD488\uBAA9\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_20_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.insuranceDevice, $event) || (ctx_r1.searchParams.insuranceDevice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testDeviceInsurance());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_20_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_20_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.insuranceDevice);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_21_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4CA} \uC77C\uAD04 \uC870\uD68C");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uCC98\uB9AC \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "label");
    \u0275\u0275text(2, "\uC57D\uD488\uCF54\uB4DC (\uC27C\uD45C\uB85C \uAD6C\uBD84)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_21_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchParams.batchDrugCodes, $event) || (ctx_r1.searchParams.batchDrugCodes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testBatchDrugUpdate());
    });
    \u0275\u0275template(5, ErpRightSidebarComponent_div_3_div_21_span_5_Template, 2, 0, "span", 44)(6, ErpRightSidebarComponent_div_3_div_21_span_6_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchParams.batchDrugCodes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_22_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F504} \uB3D9\uAE30\uD654");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_22_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uB3D9\uAE30\uD654 \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 53);
    \u0275\u0275text(2, "ERP \uC7AC\uACE0 \uB370\uC774\uD130\uC640 \uC2EC\uD3C9\uC6D0 \uB370\uC774\uD130\uB97C \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "label", 55)(5, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_22_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.syncOptions.updatePrices, $event) || (ctx_r1.syncOptions.updatePrices = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\uC57D\uAC00 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 55)(9, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_22_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.syncOptions.updateProducts, $event) || (ctx_r1.syncOptions.updateProducts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\uC81C\uD488 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 55)(13, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ErpRightSidebarComponent_div_3_div_22_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.syncOptions.validateStock, $event) || (ctx_r1.syncOptions.validateStock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "\uC7AC\uACE0 \uC720\uD6A8\uC131 \uAC80\uC99D");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_22_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testInventorySync());
    });
    \u0275\u0275template(17, ErpRightSidebarComponent_div_3_div_22_span_17_Template, 2, 0, "span", 44)(18, ErpRightSidebarComponent_div_3_div_22_span_18_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncOptions.updatePrices);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncOptions.updateProducts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncOptions.validateStock);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 \uC0C1\uD0DC \uD655\uC778");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_23_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 \uD655\uC778 \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 53);
    \u0275\u0275text(2, "API \uC11C\uBE44\uC2A4\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uD655\uC778\uD569\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 43);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_div_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testApiStatus());
    });
    \u0275\u0275template(4, ErpRightSidebarComponent_div_3_div_23_span_4_Template, 2, 0, "span", 44)(5, ErpRightSidebarComponent_div_3_div_23_span_5_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ErpRightSidebarComponent_div_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "p", 53);
    \u0275\u0275text(2, "\uC774 API\uB294 \uD604\uC7AC \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 57);
    \u0275\u0275text(4, "\u{1F6A7} \uC900\uBE44 \uC911");
    \u0275\u0275elementEnd()();
  }
}
function ErpRightSidebarComponent_div_3_div_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 \uC751\uB2F5 \uACB0\uACFC");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u274C \uC624\uB958");
    \u0275\u0275elementEnd();
  }
}
function ErpRightSidebarComponent_div_3_div_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "pre");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "json");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r1.apiResult.data));
  }
}
function ErpRightSidebarComponent_div_3_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, " \uCD1D ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\uAC74 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.apiResult.totalCount);
  }
}
function ErpRightSidebarComponent_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 38);
    \u0275\u0275template(2, ErpRightSidebarComponent_div_3_div_25_span_2_Template, 2, 0, "span", 44)(3, ErpRightSidebarComponent_div_3_div_25_span_3_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ErpRightSidebarComponent_div_3_div_25_div_6_Template, 5, 3, "div", 60)(7, ErpRightSidebarComponent_div_3_div_25_div_7_Template, 5, 1, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.apiResult.success);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.apiResult.success);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", !ctx_r1.apiResult.success);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.apiResult.message, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.apiResult.success && ctx_r1.apiResult.data);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.apiResult == null ? null : ctx_r1.apiResult.totalCount);
  }
}
function ErpRightSidebarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 5)(2, "button", 24);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToApiList());
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function ErpRightSidebarComponent_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 36)(9, "div", 37)(10, "div", 38);
    \u0275\u0275text(11, "\u{1F4DD} \uC694\uCCAD \uD30C\uB77C\uBBF8\uD130");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ErpRightSidebarComponent_div_3_div_12_Template, 7, 4, "div", 39)(13, ErpRightSidebarComponent_div_3_div_13_Template, 7, 4, "div", 39)(14, ErpRightSidebarComponent_div_3_div_14_Template, 7, 4, "div", 39)(15, ErpRightSidebarComponent_div_3_div_15_Template, 7, 4, "div", 39)(16, ErpRightSidebarComponent_div_3_div_16_Template, 7, 4, "div", 39)(17, ErpRightSidebarComponent_div_3_div_17_Template, 7, 4, "div", 39)(18, ErpRightSidebarComponent_div_3_div_18_Template, 7, 4, "div", 39)(19, ErpRightSidebarComponent_div_3_div_19_Template, 7, 4, "div", 39)(20, ErpRightSidebarComponent_div_3_div_20_Template, 7, 4, "div", 39)(21, ErpRightSidebarComponent_div_3_div_21_Template, 7, 4, "div", 39)(22, ErpRightSidebarComponent_div_3_div_22_Template, 19, 6, "div", 39)(23, ErpRightSidebarComponent_div_3_div_23_Template, 6, 3, "div", 39)(24, ErpRightSidebarComponent_div_3_div_24_Template, 5, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ErpRightSidebarComponent_div_3_div_25_Template, 8, 7, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getSelectedApiTitle());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "drug-search");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "drug-price");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "generic-drug");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "hospital-search");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "pharmacy-search");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "device-search");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "institution-code");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "device-manufacturer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "device-insurance");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "batch-drug-update");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "inventory-sync");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedApiId === "api-status");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImplementedApi());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.apiResult);
  }
}
var ErpRightSidebarComponent = class _ErpRightSidebarComponent {
  hiraApiService;
  expandedMenuId = null;
  selectedApiId = null;
  isLoading = false;
  apiResult = null;
  action = new EventEmitter();
  close = new EventEmitter();
  // 검색 파라미터
  searchParams = {
    drugCd: "196700041",
    // 샘플: 타이레놀정500밀리그램
    medicineCd: "644900540",
    // 샘플: 아스피린정100밀리그램
    ingredient: "Aspirin",
    // 샘플: 성분명
    ykiho: "11234567",
    // 샘플: 요양기관기호
    pharmacyName: "\uC628\uB204\uB9AC",
    // 샘플: 약국명
    deviceName: "\uD608\uC555\uACC4",
    // 샘플: 기기명
    institutionCode: "11234567",
    // 샘플: 기관코드
    manufacturerName: "\uC624\uBBC0\uB860",
    // 샘플: 제조사명
    insuranceDevice: "\uD608\uB2F9\uCE21\uC815\uAE30",
    // 샘플: 보험기기명
    batchDrugCodes: "196700041,644900540,200003324"
    // 샘플: 콤마로 구분된 약품코드
  };
  // 동기화 옵션
  syncOptions = {
    updatePrices: true,
    updateProducts: true,
    validateStock: false
  };
  constructor(hiraApiService) {
    this.hiraApiService = hiraApiService;
  }
  menuGroups = [
    {
      id: "drug-api",
      title: "\uC758\uC57D\uD488 \uC815\uBCF4 API",
      icon: "\u{1F48A}",
      items: [
        {
          id: "drug-search",
          label: "\uC758\uC57D\uD488 \uAE30\uBCF8\uC815\uBCF4 \uC870\uD68C",
          description: "\uC57D\uD488\uCF54\uB4DC\uB85C \uC0C1\uC138\uC815\uBCF4 \uAC80\uC0C9",
          apiEndpoint: "/drugInfoService"
        },
        {
          id: "drug-price",
          label: "EDI \uC57D\uAC00 \uC815\uBCF4",
          description: "\uBCF4\uD5D8\uC57D\uAC00 \uBC0F \uC0C1\uD55C\uAC00 \uC870\uD68C",
          apiEndpoint: "/ediDrugPriceInfo"
        },
        {
          id: "generic-drug",
          label: "\uC81C\uB124\uB9AD \uC758\uC57D\uD488 \uC870\uD68C",
          description: "\uC131\uBD84\uBA85/ATC\uCF54\uB4DC \uAC80\uC0C9",
          apiEndpoint: "/genericDrugInfo"
        }
      ]
    },
    {
      id: "hospital-api",
      title: "\uC694\uC591\uAE30\uAD00 \uC815\uBCF4 API",
      icon: "\u{1F3E5}",
      items: [
        {
          id: "hospital-search",
          label: "\uBCD1\uC6D0 \uC815\uBCF4 \uC870\uD68C",
          description: "\uBCD1\uC6D0/\uC57D\uAD6D \uAE30\uBCF8\uC815\uBCF4",
          apiEndpoint: "/hospInfoService"
        },
        {
          id: "pharmacy-search",
          label: "\uC57D\uAD6D \uC815\uBCF4 \uC870\uD68C",
          description: "\uC57D\uAD6D \uC0C1\uC138\uC815\uBCF4",
          apiEndpoint: "/pharmacyInfo"
        },
        {
          id: "institution-code",
          label: "\uC694\uC591\uAE30\uAD00\uAE30\uD638 \uAC80\uC99D",
          description: "\uAE30\uAD00\uCF54\uB4DC \uC720\uD6A8\uC131 \uD655\uC778",
          apiEndpoint: "/validateInstitution"
        }
      ]
    },
    {
      id: "medical-device-api",
      title: "\uC758\uB8CC\uAE30\uAE30 \uC815\uBCF4 API",
      icon: "\u{1F52C}",
      items: [
        {
          id: "device-search",
          label: "\uC758\uB8CC\uAE30\uAE30 \uD488\uBAA9 \uC870\uD68C",
          description: "\uD488\uBAA9\uD5C8\uAC00\uBC88\uD638\uB85C \uAC80\uC0C9",
          apiEndpoint: "/medicalDeviceInfo"
        },
        {
          id: "device-manufacturer",
          label: "\uC81C\uC870/\uC218\uC785\uC5C5\uCCB4 \uC870\uD68C",
          description: "\uC5C5\uCCB4\uC815\uBCF4 \uBC0F \uC778\uD5C8\uAC00",
          apiEndpoint: "/manufacturerInfo"
        },
        {
          id: "device-insurance",
          label: "\uBCF4\uD5D8\uC801\uC6A9 \uC758\uB8CC\uAE30\uAE30",
          description: "\uAE09\uC5EC/\uBE44\uAE09\uC5EC \uAD6C\uBD84",
          apiEndpoint: "/insuranceDeviceInfo"
        }
      ]
    },
    {
      id: "batch-api",
      title: "\uBC30\uCE58/\uD1B5\uD569 API",
      icon: "\u{1F4CA}",
      items: [
        {
          id: "batch-drug-update",
          label: "\uC57D\uAC00 \uC77C\uAD04 \uC5C5\uB370\uC774\uD2B8",
          description: "\uC57D\uAC00 \uB370\uC774\uD130 \uB300\uB7C9 \uC870\uD68C",
          apiEndpoint: "/batchDrugPriceUpdate"
        },
        {
          id: "inventory-sync",
          label: "\uC7AC\uACE0 \uB370\uC774\uD130 \uB3D9\uAE30\uD654",
          description: "ERP \uC7AC\uACE0\uC640 \uC5F0\uB3D9",
          apiEndpoint: "/inventorySync"
        },
        {
          id: "api-status",
          label: "API \uC0C1\uD0DC \uD655\uC778",
          description: "\uC11C\uBE44\uC2A4 \uAC00\uC6A9\uC131 \uCCB4\uD06C",
          apiEndpoint: "/apiHealthCheck"
        }
      ]
    }
  ];
  onMenuClick(menuId) {
    this.expandedMenuId = this.expandedMenuId === menuId ? null : menuId;
    this.selectedApiId = null;
    this.apiResult = null;
  }
  onSubItemClick(subItemId) {
    this.selectedApiId = subItemId;
    this.apiResult = null;
    this.searchParams = {
      drugCd: "",
      medicineCd: "",
      ingredient: "",
      ykiho: "",
      pharmacyName: "",
      deviceName: "",
      institutionCode: "",
      manufacturerName: "",
      insuranceDevice: "",
      batchDrugCodes: ""
    };
  }
  onBack() {
    this.expandedMenuId = null;
    this.selectedApiId = null;
    this.apiResult = null;
  }
  backToApiList() {
    this.selectedApiId = null;
    this.apiResult = null;
  }
  onClose() {
    this.expandedMenuId = null;
    this.selectedApiId = null;
    this.apiResult = null;
    this.close.emit();
  }
  getMenuTitle() {
    const menu = this.menuGroups.find((m) => m.id === this.expandedMenuId);
    return menu ? menu.title : "";
  }
  getMenuItems() {
    const menu = this.menuGroups.find((m) => m.id === this.expandedMenuId);
    return menu ? menu.items : [];
  }
  getSelectedApiTitle() {
    for (const menu of this.menuGroups) {
      const item = menu.items.find((i) => i.id === this.selectedApiId);
      if (item)
        return item.label;
    }
    return "";
  }
  testDrugSearch() {
    if (!this.searchParams.drugCd) {
      this.apiResult = { success: false, data: null, message: "\uC57D\uD488\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.searchDrugInfo(this.searchParams.drugCd).subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testDrugPrice() {
    if (!this.searchParams.medicineCd) {
      this.apiResult = { success: false, data: null, message: "\uC758\uC57D\uD488\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.getDrugPrice(this.searchParams.medicineCd).subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testGenericDrug() {
    if (!this.searchParams.ingredient) {
      this.apiResult = { success: false, data: null, message: "\uC131\uBD84\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.searchGenericDrug(this.searchParams.ingredient).subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testHospitalSearch() {
    if (!this.searchParams.ykiho) {
      this.apiResult = { success: false, data: null, message: "\uC694\uC591\uAE30\uAD00\uAE30\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.searchHospitalInfo(this.searchParams.ykiho).subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testPharmacySearch() {
    if (!this.searchParams.pharmacyName) {
      this.apiResult = { success: false, data: null, message: "\uC57D\uAD6D\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.searchPharmacyInfo(this.searchParams.pharmacyName).subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testDeviceSearch() {
    if (!this.searchParams.deviceName) {
      this.apiResult = { success: false, data: null, message: "\uAE30\uAE30\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.searchMedicalDevice(this.searchParams.deviceName).subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testApiStatus() {
    this.isLoading = true;
    this.hiraApiService.checkApiStatus().subscribe({
      next: (result) => {
        this.apiResult = result;
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testInstitutionCode() {
    if (!this.searchParams.institutionCode) {
      this.apiResult = { success: false, data: null, message: "\uC694\uC591\uAE30\uAD00\uAE30\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.validateInstitutionCode(this.searchParams.institutionCode).subscribe({
      next: (result) => {
        this.apiResult = __spreadProps(__spreadValues({}, result), {
          message: result.data ? "\u2705 \uC720\uD6A8\uD55C \uC694\uC591\uAE30\uAD00\uAE30\uD638\uC785\uB2C8\uB2E4." : "\u274C \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC694\uC591\uAE30\uAD00\uAE30\uD638\uC785\uB2C8\uB2E4."
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testDeviceManufacturer() {
    if (!this.searchParams.manufacturerName) {
      this.apiResult = { success: false, data: null, message: "\uC5C5\uCCB4\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.apiResult = {
        success: true,
        data: {
          manufacturerName: this.searchParams.manufacturerName,
          businessNumber: "123-45-67890",
          address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C",
          products: ["\uD608\uC555\uACC4", "\uCCB4\uC628\uACC4", "\uD608\uB2F9\uCE21\uC815\uAE30"],
          licenseDate: "2020-01-01",
          status: "\uC815\uC0C1"
        },
        message: "\uC81C\uC870/\uC218\uC785\uC5C5\uCCB4 \uC815\uBCF4\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC870\uD68C\uD588\uC2B5\uB2C8\uB2E4.",
        totalCount: 1
      };
      this.isLoading = false;
    }, 1e3);
  }
  testDeviceInsurance() {
    if (!this.searchParams.insuranceDevice) {
      this.apiResult = { success: false, data: null, message: "\uD488\uBAA9\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.apiResult = {
        success: true,
        data: [
          {
            productName: this.searchParams.insuranceDevice,
            insuranceCode: "A001234",
            insuranceType: "\uAE09\uC5EC",
            price: 5e4,
            applyDate: "2023-01-01",
            category: "\uC9C4\uB2E8\uAE30\uAE30"
          }
        ],
        message: "\uBCF4\uD5D8\uC801\uC6A9 \uC758\uB8CC\uAE30\uAE30 \uC815\uBCF4\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC870\uD68C\uD588\uC2B5\uB2C8\uB2E4.",
        totalCount: 1
      };
      this.isLoading = false;
    }, 1e3);
  }
  testBatchDrugUpdate() {
    if (!this.searchParams.batchDrugCodes) {
      this.apiResult = { success: false, data: null, message: "\uC57D\uD488\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    const codes = this.searchParams.batchDrugCodes.split(",").map((c) => c.trim()).filter((c) => c);
    if (codes.length === 0) {
      this.apiResult = { success: false, data: null, message: "\uC720\uD6A8\uD55C \uC57D\uD488\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694." };
      return;
    }
    this.isLoading = true;
    this.hiraApiService.batchUpdateDrugPrices(codes).subscribe({
      next: (result) => {
        this.apiResult = __spreadProps(__spreadValues({}, result), {
          message: `${codes.length}\uAC1C \uC57D\uD488\uC758 \uAC00\uACA9 \uC815\uBCF4\uB97C \uC870\uD68C\uD588\uC2B5\uB2C8\uB2E4.`,
          totalCount: codes.length
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.apiResult = { success: false, data: null, message: `\uC624\uB958: ${error.message}` };
        this.isLoading = false;
      }
    });
  }
  testInventorySync() {
    this.isLoading = true;
    const selectedOptions = [];
    if (this.syncOptions.updatePrices)
      selectedOptions.push("\uC57D\uAC00 \uC815\uBCF4");
    if (this.syncOptions.updateProducts)
      selectedOptions.push("\uC81C\uD488 \uC815\uBCF4");
    if (this.syncOptions.validateStock)
      selectedOptions.push("\uC7AC\uACE0 \uAC80\uC99D");
    setTimeout(() => {
      this.apiResult = {
        success: true,
        data: {
          syncedAt: (/* @__PURE__ */ new Date()).toISOString(),
          options: selectedOptions,
          updatedDrugs: 150,
          updatedProducts: 85,
          validatedStock: 230,
          errors: 0
        },
        message: `\uC7AC\uACE0 \uB370\uC774\uD130 \uB3D9\uAE30\uD654\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uB3D9\uAE30\uD654 \uD56D\uBAA9: ${selectedOptions.join(", ")}`,
        totalCount: 465
      };
      this.isLoading = false;
    }, 2e3);
  }
  isImplementedApi() {
    const implementedApis = [
      "drug-search",
      "drug-price",
      "generic-drug",
      "hospital-search",
      "pharmacy-search",
      "device-search",
      "institution-code",
      "device-manufacturer",
      "device-insurance",
      "batch-drug-update",
      "inventory-sync",
      "api-status"
    ];
    return implementedApis.includes(this.selectedApiId || "");
  }
  static \u0275fac = function ErpRightSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpRightSidebarComponent)(\u0275\u0275directiveInject(HiraApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpRightSidebarComponent, selectors: [["app-erp-right-sidebar"]], outputs: { action: "action", close: "close" }, standalone: false, decls: 4, vars: 3, consts: [[1, "erp-right-sidebar", "hira-api-test"], ["class", "main-menu", 4, "ngIf"], ["class", "expanded-panel", 4, "ngIf"], ["class", "api-test-panel", 4, "ngIf"], [1, "main-menu"], [1, "panel-header"], [1, "header-title"], [1, "header-icon"], ["title", "\uB2EB\uAE30", 1, "close-btn", 3, "click"], [1, "api-info-card"], [1, "info-icon"], [1, "info-content"], [1, "info-title"], [1, "info-desc"], [1, "category-list"], ["class", "category-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "click"], [1, "category-icon"], [1, "category-content"], [1, "category-title"], [1, "category-count"], [1, "category-arrow"], [1, "expanded-panel"], [1, "panel-content"], ["title", "\uB4A4\uB85C\uAC00\uAE30", 1, "back-btn", 3, "click"], [1, "panel-items"], ["class", "menu-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "menu-item", 3, "click"], [1, "item-content"], [1, "item-label"], ["class", "item-description", 4, "ngIf"], ["class", "item-endpoint", 4, "ngIf"], [1, "item-arrow"], [1, "item-description"], [1, "item-endpoint"], [1, "api-test-panel"], [1, "api-test-content"], [1, "input-section"], [1, "section-title"], ["class", "input-group", 4, "ngIf"], ["class", "result-section", 4, "ngIf"], [1, "input-group"], ["type", "text", "placeholder", "\uC608: 644900540", 1, "api-input", 3, "ngModelChange", "ngModel"], [1, "test-btn", 3, "click", "disabled"], [4, "ngIf"], ["type", "text", "placeholder", "\uC608: 196700041", 1, "api-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\uC608: Aspirin", 1, "api-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\uC608: 11234567", 1, "api-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\uC608: \uC628\uB204\uB9AC\uC57D\uAD6D", 1, "api-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\uC608: \uD608\uC555\uACC4", 1, "api-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\uC608: \uC0BC\uC131\uC804\uC790", 1, "api-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\uC608: \uC2EC\uC804\uB3C4", 1, "api-input", 3, "ngModelChange", "ngModel"], ["placeholder", "\uC608: 644900540,196700041,654900231", "rows", "3", 1, "api-textarea", 3, "ngModelChange", "ngModel"], [1, "info-text"], [1, "sync-options"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["disabled", "", 1, "test-btn", "disabled"], [1, "result-section"], [1, "result-message"], ["class", "result-data", 4, "ngIf"], ["class", "total-count", 4, "ngIf"], [1, "result-data"], [1, "data-card"], [1, "total-count"]], template: function ErpRightSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ErpRightSidebarComponent_div_1_Template, 19, 1, "div", 1)(2, ErpRightSidebarComponent_div_2_Template, 11, 2, "div", 2)(3, ErpRightSidebarComponent_div_3_Template, 26, 15, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.expandedMenuId && !ctx.selectedApiId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedMenuId && !ctx.selectedApiId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedApiId);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, JsonPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.erp-right-sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 350px;\n  z-index: 1002;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: var(--bg-primary);\n  border-left: 1px solid var(--border-color);\n  box-shadow: -2px 0 8px var(--shadow);\n  animation: _ngcontent-%COMP%_slideInFromRight 0.3s ease-out;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%], \n.erp-right-sidebar[_ngcontent-%COMP%]   .expanded-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-secondary);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%], \n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent-primary);\n  transform: translateX(-2px);\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent-danger);\n  transform: rotate(90deg);\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%] {\n  margin: 16px 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  color: white;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: white;\n  letter-spacing: -0.3px;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.5;\n  font-weight: 400;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(-4px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover   .category-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(4px);\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(-4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.8;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-arrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover   .item-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(4px);\n}\n@keyframes _ngcontent-%COMP%_slideInFromRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1200px) {\n  .erp-right-sidebar[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 992px) {\n  .erp-right-sidebar[_ngcontent-%COMP%] {\n    width: 320px;\n    box-shadow: -4px 0 12px var(--shadow);\n  }\n}\n@media (max-width: 768px) {\n  .erp-right-sidebar[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 350px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%], \n   .erp-right-sidebar[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 24px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%] {\n    margin: 12px 8px;\n    padding: 12px;\n    gap: 10px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 6px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-desc[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 40px;\n    height: 40px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-arrow[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .panel-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-arrow[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .erp-right-sidebar[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 8px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .api-info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 10px;\n  }\n  .erp-right-sidebar[_ngcontent-%COMP%]   .category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 36px;\n    height: 36px;\n  }\n}\n.api-test-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n.api-test-panel[_ngcontent-%COMP%]   .api-test-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.api-test-panel[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .api-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all 0.3s ease;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .api-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-primary);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .api-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .api-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-family: "Courier New", monospace;\n  resize: vertical;\n  transition: all 0.3s ease;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .api-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-primary);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .test-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-top: 12px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .test-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .test-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .test-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .test-btn.disabled[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  padding: 10px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border-left: 3px solid var(--accent-primary);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .sync-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 12px;\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .sync-options[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-primary);\n  transition: all 0.2s ease;\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .sync-options[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  color: var(--accent-primary);\n}\n.api-test-panel[_ngcontent-%COMP%]   .input-section[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .sync-options[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--accent-primary);\n}\n.api-test-panel[_ngcontent-%COMP%]   .result-section[_ngcontent-%COMP%]   .result-message[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  border-left: 3px solid var(--accent-primary);\n}\n.api-test-panel[_ngcontent-%COMP%]   .result-section[_ngcontent-%COMP%]   .result-message.error[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.1);\n  border-left-color: #dc3545;\n  color: #dc3545;\n}\n.api-test-panel[_ngcontent-%COMP%]   .result-section[_ngcontent-%COMP%]   .result-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 12px;\n}\n.api-test-panel[_ngcontent-%COMP%]   .result-section[_ngcontent-%COMP%]   .result-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: "Courier New", monospace;\n}\n.api-test-panel[_ngcontent-%COMP%]   .result-section[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  text-align: right;\n}\n.api-test-panel[_ngcontent-%COMP%]   .result-section[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-size: 16px;\n}\n/*# sourceMappingURL=erp-right-sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpRightSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-erp-right-sidebar", standalone: false, template: `<div class="erp-right-sidebar hira-api-test">
  <!-- \uBA54\uC778 \uCE74\uD14C\uACE0\uB9AC \uBA54\uB274 -->
  <div class="main-menu" *ngIf="!expandedMenuId && !selectedApiId">
    <div class="panel-header">
      <div class="header-title">
        <span class="header-icon">\u{1F3E5}</span>
        <h3>\uC2EC\uD3C9\uC6D0 API \uD14C\uC2A4\uD2B8</h3>
      </div>
      <button class="close-btn" (click)="onClose()" title="\uB2EB\uAE30">\xD7</button>
    </div>
    
    <div class="api-info-card">
      <div class="info-icon">\u2139\uFE0F</div>
      <div class="info-content">
        <p class="info-title">\uAC74\uAC15\uBCF4\uD5D8\uC2EC\uC0AC\uD3C9\uAC00\uC6D0 Open API</p>
        <p class="info-desc">\uC758\uC57D\uD488, \uC694\uC591\uAE30\uAD00, \uC758\uB8CC\uAE30\uAE30 \uC815\uBCF4\uB97C \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      </div>
    </div>

    <div class="category-list">
      <div class="category-item" 
           *ngFor="let menu of menuGroups" 
           (click)="onMenuClick(menu.id)">
        <div class="category-icon">{{ menu.icon }}</div>
        <div class="category-content">
          <div class="category-title">{{ menu.title }}</div>
          <div class="category-count">{{ menu.items.length}}\uAC1C API</div>
        </div>
        <div class="category-arrow">\u203A</div>
      </div>
    </div>
  </div>

  <!-- \uC11C\uBE0C \uBA54\uB274 \uD328\uB110 (API \uBAA9\uB85D) -->
  <div class="expanded-panel" *ngIf="expandedMenuId && !selectedApiId">
    <div class="panel-content">
      <div class="panel-header">
        <button class="back-btn" (click)="onBack()" title="\uB4A4\uB85C\uAC00\uAE30">\u2039</button>
        <h3>{{ getMenuTitle() }}</h3>
        <button class="close-btn" (click)="onClose()" title="\uB2EB\uAE30">\xD7</button>
      </div>
      <div class="panel-items">
        <div class="menu-item" 
             *ngFor="let item of getMenuItems()" 
             (click)="onSubItemClick(item.id)">
          <div class="item-content">
            <div class="item-label">{{ item.label }}</div>
            <div class="item-description" *ngIf="item.description">{{ item.description }}</div>
            <div class="item-endpoint" *ngIf="item.apiEndpoint">
              <code>{{ item.apiEndpoint }}</code>
            </div>
          </div>
          <div class="item-arrow">\u203A</div>
        </div>
      </div>
    </div>
  </div>

  <!-- API \uD14C\uC2A4\uD2B8 \uD328\uB110 -->
  <div class="api-test-panel" *ngIf="selectedApiId">
    <div class="panel-header">
      <button class="back-btn" (click)="backToApiList()" title="\uB4A4\uB85C\uAC00\uAE30">\u2039</button>
      <h3>{{ getSelectedApiTitle() }}</h3>
      <button class="close-btn" (click)="onClose()" title="\uB2EB\uAE30">\xD7</button>
    </div>

    <div class="api-test-content">
      <!-- \uC785\uB825 \uD3FC -->
      <div class="input-section">
        <div class="section-title">\u{1F4DD} \uC694\uCCAD \uD30C\uB77C\uBBF8\uD130</div>
        
        <!-- \uC758\uC57D\uD488 \uC815\uBCF4 \uC870\uD68C -->
        <div *ngIf="selectedApiId === 'drug-search'" class="input-group">
          <label>\uC57D\uD488\uCF54\uB4DC</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.drugCd" 
            placeholder="\uC608: 644900540"
            class="api-input">
          <button class="test-btn" (click)="testDrugSearch()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F50D} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- EDI \uC57D\uAC00 \uC815\uBCF4 -->
        <div *ngIf="selectedApiId === 'drug-price'" class="input-group">
          <label>\uC758\uC57D\uD488\uCF54\uB4DC</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.medicineCd" 
            placeholder="\uC608: 196700041"
            class="api-input">
          <button class="test-btn" (click)="testDrugPrice()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F4B0} \uC57D\uAC00 \uC870\uD68C</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uC81C\uB124\uB9AD \uC758\uC57D\uD488 \uC870\uD68C -->
        <div *ngIf="selectedApiId === 'generic-drug'" class="input-group">
          <label>\uC131\uBD84\uBA85</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.ingredient" 
            placeholder="\uC608: Aspirin"
            class="api-input">
          <button class="test-btn" (click)="testGenericDrug()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F50D} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uBCD1\uC6D0 \uC815\uBCF4 \uC870\uD68C -->
        <div *ngIf="selectedApiId === 'hospital-search'" class="input-group">
          <label>\uC694\uC591\uAE30\uAD00\uAE30\uD638</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.ykiho" 
            placeholder="\uC608: 11234567"
            class="api-input">
          <button class="test-btn" (click)="testHospitalSearch()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F3E5} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uC57D\uAD6D \uC815\uBCF4 \uC870\uD68C -->
        <div *ngIf="selectedApiId === 'pharmacy-search'" class="input-group">
          <label>\uC57D\uAD6D\uBA85</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.pharmacyName" 
            placeholder="\uC608: \uC628\uB204\uB9AC\uC57D\uAD6D"
            class="api-input">
          <button class="test-btn" (click)="testPharmacySearch()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F48A} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uC758\uB8CC\uAE30\uAE30 \uC870\uD68C -->
        <div *ngIf="selectedApiId === 'device-search'" class="input-group">
          <label>\uAE30\uAE30\uBA85</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.deviceName" 
            placeholder="\uC608: \uD608\uC555\uACC4"
            class="api-input">
          <button class="test-btn" (click)="testDeviceSearch()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F52C} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uC694\uC591\uAE30\uAD00\uAE30\uD638 \uAC80\uC99D -->
        <div *ngIf="selectedApiId === 'institution-code'" class="input-group">
          <label>\uC694\uC591\uAE30\uAD00\uAE30\uD638</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.institutionCode" 
            placeholder="\uC608: 11234567"
            class="api-input">
          <button class="test-btn" (click)="testInstitutionCode()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u2705 \uAC80\uC99D\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uAC80\uC99D \uC911...</span>
          </button>
        </div>

        <!-- \uC758\uB8CC\uAE30\uAE30 \uC81C\uC870/\uC218\uC785\uC5C5\uCCB4 \uC870\uD68C -->
        <div *ngIf="selectedApiId === 'device-manufacturer'" class="input-group">
          <label>\uC5C5\uCCB4\uBA85</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.manufacturerName" 
            placeholder="\uC608: \uC0BC\uC131\uC804\uC790"
            class="api-input">
          <button class="test-btn" (click)="testDeviceManufacturer()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F3ED} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uBCF4\uD5D8\uC801\uC6A9 \uC758\uB8CC\uAE30\uAE30 -->
        <div *ngIf="selectedApiId === 'device-insurance'" class="input-group">
          <label>\uD488\uBAA9\uBA85</label>
          <input 
            type="text" 
            [(ngModel)]="searchParams.insuranceDevice" 
            placeholder="\uC608: \uC2EC\uC804\uB3C4"
            class="api-input">
          <button class="test-btn" (click)="testDeviceInsurance()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F4B3} \uC870\uD68C\uD558\uAE30</span>
            <span *ngIf="isLoading">\u23F3 \uC870\uD68C \uC911...</span>
          </button>
        </div>

        <!-- \uC57D\uAC00 \uC77C\uAD04 \uC5C5\uB370\uC774\uD2B8 -->
        <div *ngIf="selectedApiId === 'batch-drug-update'" class="input-group">
          <label>\uC57D\uD488\uCF54\uB4DC (\uC27C\uD45C\uB85C \uAD6C\uBD84)</label>
          <textarea 
            [(ngModel)]="searchParams.batchDrugCodes" 
            placeholder="\uC608: 644900540,196700041,654900231"
            class="api-textarea"
            rows="3"></textarea>
          <button class="test-btn" (click)="testBatchDrugUpdate()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F4CA} \uC77C\uAD04 \uC870\uD68C</span>
            <span *ngIf="isLoading">\u23F3 \uCC98\uB9AC \uC911...</span>
          </button>
        </div>

        <!-- \uC7AC\uACE0 \uB370\uC774\uD130 \uB3D9\uAE30\uD654 -->
        <div *ngIf="selectedApiId === 'inventory-sync'" class="input-group">
          <p class="info-text">ERP \uC7AC\uACE0 \uB370\uC774\uD130\uC640 \uC2EC\uD3C9\uC6D0 \uB370\uC774\uD130\uB97C \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4.</p>
          <div class="sync-options">
            <label class="checkbox-label">
              <input type="checkbox" [(ngModel)]="syncOptions.updatePrices">
              <span>\uC57D\uAC00 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" [(ngModel)]="syncOptions.updateProducts">
              <span>\uC81C\uD488 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" [(ngModel)]="syncOptions.validateStock">
              <span>\uC7AC\uACE0 \uC720\uD6A8\uC131 \uAC80\uC99D</span>
            </label>
          </div>
          <button class="test-btn" (click)="testInventorySync()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u{1F504} \uB3D9\uAE30\uD654</span>
            <span *ngIf="isLoading">\u23F3 \uB3D9\uAE30\uD654 \uC911...</span>
          </button>
        </div>

        <!-- API \uC0C1\uD0DC \uD655\uC778 -->
        <div *ngIf="selectedApiId === 'api-status'" class="input-group">
          <p class="info-text">API \uC11C\uBE44\uC2A4\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uD655\uC778\uD569\uB2C8\uB2E4.</p>
          <button class="test-btn" (click)="testApiStatus()" [disabled]="isLoading">
            <span *ngIf="!isLoading">\u2705 \uC0C1\uD0DC \uD655\uC778</span>
            <span *ngIf="isLoading">\u23F3 \uD655\uC778 \uC911...</span>
          </button>
        </div>

        <!-- \uAE30\uD0C0 API\uB4E4 -->
        <div *ngIf="!isImplementedApi()" class="input-group">
          <p class="info-text">\uC774 API\uB294 \uD604\uC7AC \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.</p>
          <button class="test-btn disabled" disabled>\u{1F6A7} \uC900\uBE44 \uC911</button>
        </div>
      </div>

      <!-- \uACB0\uACFC \uD45C\uC2DC -->
      <div class="result-section" *ngIf="apiResult">
        <div class="section-title">
          <span *ngIf="apiResult.success">\u2705 \uC751\uB2F5 \uACB0\uACFC</span>
          <span *ngIf="!apiResult.success">\u274C \uC624\uB958</span>
        </div>
        
        <div class="result-message" [class.error]="!apiResult.success">
          {{ apiResult.message }}
        </div>

        <!-- \uC131\uACF5 \uC2DC \uB370\uC774\uD130 \uD45C\uC2DC -->
        <div *ngIf="apiResult.success && apiResult.data" class="result-data">
          <div class="data-card">
            <pre>{{ apiResult.data | json }}</pre>
          </div>
        </div>

        <!-- \uCD1D \uAC1C\uC218 \uD45C\uC2DC -->
        <div *ngIf="apiResult?.totalCount" class="total-count">
          \uCD1D <strong>{{ apiResult.totalCount }}</strong>\uAC74
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/modules/erp/components/erp-right-sidebar/erp-right-sidebar.component.scss */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.erp-right-sidebar {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 350px;\n  z-index: 1002;\n  margin: 0 !important;\n  padding: 0 !important;\n  background: var(--bg-primary);\n  border-left: 1px solid var(--border-color);\n  box-shadow: -2px 0 8px var(--shadow);\n  animation: slideInFromRight 0.3s ease-out;\n}\n.erp-right-sidebar .main-menu,\n.erp-right-sidebar .expanded-panel {\n  height: 100%;\n  overflow-y: auto;\n}\n.erp-right-sidebar .panel-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-secondary);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.erp-right-sidebar .panel-header .header-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.erp-right-sidebar .panel-header .header-title .header-icon {\n  font-size: 24px;\n  line-height: 1;\n}\n.erp-right-sidebar .panel-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.erp-right-sidebar .panel-header .back-btn,\n.erp-right-sidebar .panel-header .close-btn {\n  background: none;\n  border: none;\n  font-size: 28px;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.erp-right-sidebar .panel-header .back-btn:hover {\n  color: var(--accent-primary);\n  transform: translateX(-2px);\n}\n.erp-right-sidebar .panel-header .close-btn:hover {\n  color: var(--accent-danger);\n  transform: rotate(90deg);\n}\n.erp-right-sidebar .api-info-card {\n  margin: 16px 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  color: white;\n}\n.erp-right-sidebar .api-info-card .info-icon {\n  font-size: 28px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.erp-right-sidebar .api-info-card .info-content {\n  flex: 1;\n}\n.erp-right-sidebar .api-info-card .info-content .info-title {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: white;\n  letter-spacing: -0.3px;\n}\n.erp-right-sidebar .api-info-card .info-content .info-desc {\n  font-size: 13px;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.5;\n  font-weight: 400;\n}\n.erp-right-sidebar .category-list {\n  padding: 12px;\n}\n.erp-right-sidebar .category-list .category-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-right-sidebar .category-list .category-item:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(-4px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.erp-right-sidebar .category-list .category-item .category-icon {\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n}\n.erp-right-sidebar .category-list .category-item .category-content {\n  flex: 1;\n}\n.erp-right-sidebar .category-list .category-item .category-content .category-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-right-sidebar .category-list .category-item .category-content .category-count {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.7;\n}\n.erp-right-sidebar .category-list .category-item .category-arrow {\n  font-size: 24px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-right-sidebar .category-list .category-item:hover .category-arrow {\n  opacity: 1;\n  transform: translateX(4px);\n}\n.erp-right-sidebar .panel-items {\n  padding: 12px;\n}\n.erp-right-sidebar .panel-items .menu-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n.erp-right-sidebar .panel-items .menu-item:hover {\n  background: var(--bg-tertiary);\n  border-color: var(--primary-color);\n  transform: translateX(-4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.erp-right-sidebar .panel-items .menu-item .item-content {\n  flex: 1;\n}\n.erp-right-sidebar .panel-items .menu-item .item-content .item-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.erp-right-sidebar .panel-items .menu-item .item-content .item-description {\n  font-size: 12px;\n  color: var(--text-secondary);\n  opacity: 0.8;\n}\n.erp-right-sidebar .panel-items .menu-item .item-arrow {\n  font-size: 20px;\n  color: var(--text-secondary);\n  opacity: 0.5;\n  transition: all 0.2s ease;\n}\n.erp-right-sidebar .panel-items .menu-item:hover .item-arrow {\n  opacity: 1;\n  transform: translateX(4px);\n}\n@keyframes slideInFromRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1200px) {\n  .erp-right-sidebar {\n    width: 300px;\n  }\n}\n@media (max-width: 992px) {\n  .erp-right-sidebar {\n    width: 320px;\n    box-shadow: -4px 0 12px var(--shadow);\n  }\n}\n@media (max-width: 768px) {\n  .erp-right-sidebar {\n    width: 90%;\n    max-width: 350px;\n  }\n  .erp-right-sidebar .panel-header {\n    padding: 12px 16px;\n  }\n  .erp-right-sidebar .panel-header .header-title {\n    gap: 10px;\n  }\n  .erp-right-sidebar .panel-header .header-title .header-icon {\n    font-size: 20px;\n  }\n  .erp-right-sidebar .panel-header h3 {\n    font-size: 16px;\n  }\n  .erp-right-sidebar .panel-header .back-btn,\n  .erp-right-sidebar .panel-header .close-btn {\n    width: 28px;\n    height: 28px;\n    font-size: 24px;\n  }\n  .erp-right-sidebar .api-info-card {\n    margin: 12px 8px;\n    padding: 12px;\n    gap: 10px;\n  }\n  .erp-right-sidebar .api-info-card .info-icon {\n    font-size: 24px;\n  }\n  .erp-right-sidebar .api-info-card .info-content .info-title {\n    font-size: 14px;\n    margin-bottom: 6px;\n  }\n  .erp-right-sidebar .api-info-card .info-content .info-desc {\n    font-size: 12px;\n  }\n  .erp-right-sidebar .category-list {\n    padding: 8px;\n  }\n  .erp-right-sidebar .category-list .category-item {\n    padding: 12px;\n    gap: 12px;\n  }\n  .erp-right-sidebar .category-list .category-item .category-icon {\n    font-size: 28px;\n    width: 40px;\n    height: 40px;\n  }\n  .erp-right-sidebar .category-list .category-item .category-content .category-title {\n    font-size: 14px;\n  }\n  .erp-right-sidebar .category-list .category-item .category-content .category-count {\n    font-size: 11px;\n  }\n  .erp-right-sidebar .category-list .category-item .category-arrow {\n    font-size: 20px;\n  }\n  .erp-right-sidebar .panel-items {\n    padding: 8px;\n  }\n  .erp-right-sidebar .panel-items .menu-item {\n    padding: 12px;\n  }\n  .erp-right-sidebar .panel-items .menu-item .item-content .item-label {\n    font-size: 13px;\n  }\n  .erp-right-sidebar .panel-items .menu-item .item-content .item-description {\n    font-size: 11px;\n  }\n  .erp-right-sidebar .panel-items .menu-item .item-arrow {\n    font-size: 18px;\n  }\n}\n@media (max-width: 480px) {\n  .erp-right-sidebar {\n    width: 95%;\n  }\n  .erp-right-sidebar .api-info-card {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 8px;\n  }\n  .erp-right-sidebar .api-info-card .info-icon {\n    font-size: 32px;\n  }\n  .erp-right-sidebar .category-list .category-item {\n    padding: 10px;\n    gap: 10px;\n  }\n  .erp-right-sidebar .category-list .category-item .category-icon {\n    font-size: 24px;\n    width: 36px;\n    height: 36px;\n  }\n}\n.api-test-panel {\n  height: 100%;\n  overflow-y: auto;\n}\n.api-test-panel .api-test-content {\n  padding: 16px;\n}\n.api-test-panel .section-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.api-test-panel .input-section {\n  margin-bottom: 24px;\n}\n.api-test-panel .input-section .input-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.api-test-panel .input-section .input-group .api-input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all 0.3s ease;\n}\n.api-test-panel .input-section .input-group .api-input:focus {\n  outline: none;\n  border-color: var(--accent-primary);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.api-test-panel .input-section .input-group .api-input::placeholder {\n  color: var(--text-muted);\n}\n.api-test-panel .input-section .input-group .api-textarea {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-family: "Courier New", monospace;\n  resize: vertical;\n  transition: all 0.3s ease;\n}\n.api-test-panel .input-section .input-group .api-textarea:focus {\n  outline: none;\n  border-color: var(--accent-primary);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.api-test-panel .input-section .input-group .test-btn {\n  width: 100%;\n  padding: 12px;\n  margin-top: 12px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.api-test-panel .input-section .input-group .test-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.api-test-panel .input-section .input-group .test-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n.api-test-panel .input-section .input-group .test-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.api-test-panel .input-section .input-group .test-btn.disabled {\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.api-test-panel .input-section .input-group .info-text {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  padding: 10px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border-left: 3px solid var(--accent-primary);\n}\n.api-test-panel .input-section .input-group .sync-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 12px;\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n}\n.api-test-panel .input-section .input-group .sync-options .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-primary);\n  transition: all 0.2s ease;\n}\n.api-test-panel .input-section .input-group .sync-options .checkbox-label:hover {\n  color: var(--accent-primary);\n}\n.api-test-panel .input-section .input-group .sync-options .checkbox-label input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--accent-primary);\n}\n.api-test-panel .result-section .result-message {\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  border-left: 3px solid var(--accent-primary);\n}\n.api-test-panel .result-section .result-message.error {\n  background: rgba(220, 53, 69, 0.1);\n  border-left-color: #dc3545;\n  color: #dc3545;\n}\n.api-test-panel .result-section .result-data .data-card {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 12px;\n}\n.api-test-panel .result-section .result-data .data-card pre {\n  margin: 0;\n  font-size: 12px;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  font-family: "Courier New", monospace;\n}\n.api-test-panel .result-section .total-count {\n  font-size: 13px;\n  color: var(--text-secondary);\n  text-align: right;\n}\n.api-test-panel .result-section .total-count strong {\n  color: var(--accent-primary);\n  font-size: 16px;\n}\n/*# sourceMappingURL=erp-right-sidebar.component.css.map */\n'] }]
  }], () => [{ type: HiraApiService }], { action: [{
    type: Output
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpRightSidebarComponent, { className: "ErpRightSidebarComponent", filePath: "src/app/modules/erp/components/erp-right-sidebar/erp-right-sidebar.component.ts", lineNumber: 24 });
})();

// src/app/modules/erp/components/erp-generator/erp-generator.component.ts
var _c0 = () => ({ current: 0, total: 0 });
function ErpGeneratorComponent_app_erp_left_menu_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-erp-left-menu", 7);
    \u0275\u0275listener("menuAction", function ErpGeneratorComponent_app_erp_left_menu_2_Template_app_erp_left_menu_menuAction_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onErpLeftAction($event));
    })("close", function ErpGeneratorComponent_app_erp_left_menu_2_Template_app_erp_left_menu_close_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLeftPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3, "\uC758\uC57D\uB3C4\uB9E4 ERP\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "\uD1B5\uD569 \uAD00\uB9AC \uC2DC\uC2A4\uD15C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_4_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onErpMenuChange("\uBC1C\uC8FC\uAD00\uB9AC"));
    });
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11, "\uBC1C\uC8FC\uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "\uBC1C\uC8FC \uB4F1\uB85D \uBC0F \uAD00\uB9AC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_4_Template_div_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onErpMenuChange("\uC7AC\uACE0\uAD00\uB9AC"));
    });
    \u0275\u0275elementStart(15, "div", 13);
    \u0275\u0275text(16, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18, "\uC7AC\uACE0\uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "\uC7AC\uACE0 \uD604\uD669 \uC870\uD68C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_4_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onErpMenuChange("\uAC70\uB798\uCC98"));
    });
    \u0275\u0275elementStart(22, "div", 13);
    \u0275\u0275text(23, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h3");
    \u0275\u0275text(25, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27, "\uAC70\uB798\uCC98 \uC815\uBCF4 \uAD00\uB9AC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 12);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_4_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onErpMenuChange("\uC815\uC0B0"));
    });
    \u0275\u0275elementStart(29, "div", 13);
    \u0275\u0275text(30, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h3");
    \u0275\u0275text(32, "\uC815\uC0B0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34, "\uC815\uC0B0 \uB0B4\uC5ED \uD655\uC778");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 14)(36, "h3");
    \u0275\u0275text(37, "\uCD5C\uADFC \uD65C\uB3D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 15)(39, "div", 16)(40, "span", 17);
    \u0275\u0275text(41, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 18);
    \u0275\u0275text(43, "\uC0C8\uB85C\uC6B4 \uBC1C\uC8FC\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 19);
    \u0275\u0275text(45, "2\uBD84 \uC804");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 16)(47, "span", 17);
    \u0275\u0275text(48, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 18);
    \u0275\u0275text(50, "\uC7AC\uACE0\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 19);
    \u0275\u0275text(52, "10\uBD84 \uC804");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 16)(54, "span", 17);
    \u0275\u0275text(55, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 18);
    \u0275\u0275text(57, "\uC815\uC0B0\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 19);
    \u0275\u0275text(59, "1\uC2DC\uAC04 \uC804");
    \u0275\u0275elementEnd()()()()()();
  }
}
function ErpGeneratorComponent_div_5_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_tr_50_Template_tr_click_0_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewOrderDetail(order_r6));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 41);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_tr_50_Template_td_click_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "button", 42);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_tr_50_Template_button_click_18_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewOrderDetail(order_r6));
    });
    \u0275\u0275text(19, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 43);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_tr_50_Template_button_click_20_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteOrder(order_r6));
    });
    \u0275\u0275text(21, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r6.orderDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", order_r6.items.length, "\uAC1C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(order_r6.totalAmount));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-badge " + ctx_r1.getStatusClass(order_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(order_r6.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.createdBy);
  }
}
function ErpGeneratorComponent_div_5_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2, "\uBC1C\uC8FC \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_5_div_52_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_div_52_button_5_Template_button_click_0_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r9 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r9, " ");
  }
}
function ErpGeneratorComponent_div_5_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_div_52_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(1));
    });
    \u0275\u0275text(2, " \xAB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_div_52_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275text(4, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ErpGeneratorComponent_div_5_div_52_button_5_Template, 2, 3, "button", 47);
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_div_52_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(7, " \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_div_52_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.totalPages));
    });
    \u0275\u0275text(9, " \xBB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.currentPage, " / ", ctx_r1.totalPages, " \uD398\uC774\uC9C0 (\uCD1D ", ctx_r1.filteredOrders.length, "\uAC74) ");
  }
}
function ErpGeneratorComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\uBC1C\uC8FC\uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openOrderModal());
    });
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \uC0C8 \uBC1C\uC8FC \uB4F1\uB85D ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "mat-form-field", 24)(10, "mat-label");
    \u0275\u0275text(11, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_5_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_5_Template_mat_select_selectionChange_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusFilterChange());
    });
    \u0275\u0275elementStart(13, "mat-option", 26);
    \u0275\u0275text(14, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 27);
    \u0275\u0275text(16, "\uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 28);
    \u0275\u0275text(18, "\uC2B9\uC778");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 29);
    \u0275\u0275text(20, "\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 30);
    \u0275\u0275text(22, "\uCDE8\uC18C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "mat-form-field", 31)(24, "mat-label");
    \u0275\u0275text(25, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_5_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_5_Template_input_input_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-icon", 33);
    \u0275\u0275text(28, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 34)(30, "table", 35)(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "\uBC1C\uC8FC\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "\uBC1C\uC8FC\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "\uD488\uBAA9\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "\uCD1D\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "\uB2F4\uB2F9\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, ErpGeneratorComponent_div_5_tr_50_Template, 22, 9, "tr", 36)(51, ErpGeneratorComponent_div_5_tr_51_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, ErpGeneratorComponent_div_5_div_52_Template, 12, 8, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedOrders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatedOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function ErpGeneratorComponent_div_6_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_tr_68_Template_tr_click_0_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewInventoryDetail(item_r12));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 60)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 41);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_tr_68_Template_td_click_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "button", 61);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_tr_68_Template_button_click_21_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openStockAdjustModal(item_r12));
    });
    \u0275\u0275text(22, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 43);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_tr_68_Template_button_click_23_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteInventory(item_r12));
    });
    \u0275\u0275text(24, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.category);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low-stock", item_r12.status === "low" || item_r12.status === "out")("excess-stock", item_r12.status === "excess");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r12.currentStock, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r12.minStock, " / ", item_r12.maxStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r12.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.location);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-badge " + ctx_r1.getStockStatusClass(item_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatusLabel(item_r12.status), " ");
  }
}
function ErpGeneratorComponent_div_6_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "\uC7AC\uACE0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_6_div_70_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_div_70_button_5_Template_button_click_0_listener() {
      const page_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToInventoryPage(page_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r15 === ctx_r1.inventoryCurrentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r15, " ");
  }
}
function ErpGeneratorComponent_div_6_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_div_70_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToInventoryPage(1));
    });
    \u0275\u0275text(2, " \xAB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_div_70_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousInventoryPage());
    });
    \u0275\u0275text(4, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ErpGeneratorComponent_div_6_div_70_button_5_Template, 2, 3, "button", 47);
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_div_70_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextInventoryPage());
    });
    \u0275\u0275text(7, " \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_div_70_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToInventoryPage(ctx_r1.inventoryTotalPages));
    });
    \u0275\u0275text(9, " \xBB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.inventoryCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.inventoryCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.inventoryPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.inventoryCurrentPage === ctx_r1.inventoryTotalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.inventoryCurrentPage === ctx_r1.inventoryTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.inventoryCurrentPage, " / ", ctx_r1.inventoryTotalPages, " \uD398\uC774\uC9C0 (\uCD1D ", ctx_r1.filteredInventory.length, "\uAC74) ");
  }
}
function ErpGeneratorComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\uC7AC\uACE0\uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openInventoryModal());
    });
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \uC7AC\uACE0 \uB4F1\uB85D ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "mat-form-field", 24)(10, "mat-label");
    \u0275\u0275text(11, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_6_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.categoryFilter, $event) || (ctx_r1.categoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_6_Template_mat_select_selectionChange_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryFilterChange());
    });
    \u0275\u0275elementStart(13, "mat-option", 26);
    \u0275\u0275text(14, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 50);
    \u0275\u0275text(16, "\uC758\uC57D\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 51);
    \u0275\u0275text(18, "\uC758\uB8CC\uAE30\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 52);
    \u0275\u0275text(20, "\uC18C\uBAA8\uD558");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 53);
    \u0275\u0275text(22, "\uC704\uC0DD\uC6A9\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 54);
    \u0275\u0275text(24, "\uC0AC\uBB34\uC6A9\uD488");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "mat-form-field", 24)(26, "mat-label");
    \u0275\u0275text(27, "\uC7AC\uACE0\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_6_Template_mat_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.stockStatusFilter, $event) || (ctx_r1.stockStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_6_Template_mat_select_selectionChange_28_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStockStatusFilterChange());
    });
    \u0275\u0275elementStart(29, "mat-option", 26);
    \u0275\u0275text(30, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 55);
    \u0275\u0275text(32, "\uC815\uC0C1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 56);
    \u0275\u0275text(34, "\uBD80\uC871");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 57);
    \u0275\u0275text(36, "\uD488\uC808");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 58);
    \u0275\u0275text(38, "\uACFC\uB2E4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "mat-form-field", 31)(40, "mat-label");
    \u0275\u0275text(41, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_6_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inventorySearchQuery, $event) || (ctx_r1.inventorySearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_6_Template_input_input_42_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInventorySearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-icon", 33);
    \u0275\u0275text(44, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 34)(46, "table", 35)(47, "thead")(48, "tr")(49, "th");
    \u0275\u0275text(50, "\uC81C\uD488\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "\uD604\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "\uCD5C\uC18C/\uCD5C\uB300");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "\uB2E8\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "\uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "tbody");
    \u0275\u0275template(68, ErpGeneratorComponent_div_6_tr_68_Template, 25, 15, "tr", 36)(69, ErpGeneratorComponent_div_6_tr_69_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(70, ErpGeneratorComponent_div_6_div_70_Template, 12, 8, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categoryFilter);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.stockStatusFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inventorySearchQuery);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedInventory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatedInventory.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inventoryTotalPages > 1);
  }
}
function ErpGeneratorComponent_div_7_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_tr_66_Template_tr_click_0_listener() {
      const supplier_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewSupplierDetail(supplier_r18));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 41);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_tr_66_Template_td_click_20_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "button", 67);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_tr_66_Template_button_click_21_listener() {
      const supplier_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSupplierStatus(supplier_r18));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 43);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_tr_66_Template_button_click_23_listener() {
      const supplier_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSupplier(supplier_r18));
    });
    \u0275\u0275text(24, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const supplier_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(supplier_r18.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(supplier_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(supplier_r18.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(supplier_r18.representative);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(supplier_r18.contact);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("credit-badge " + ctx_r1.getCreditRatingClass(supplier_r18.creditRating));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCreditRatingLabel(supplier_r18.creditRating), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-badge " + ctx_r1.getSupplierStatusClass(supplier_r18.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSupplierStatusLabel(supplier_r18.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(supplier_r18.lastTransactionDate ? ctx_r1.formatDate(supplier_r18.lastTransactionDate) : "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", supplier_r18.status === "active" ? "\uBE44\uD65C\uC131\uD654" : "\uD65C\uC131\uD654");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", supplier_r18.status === "active" ? "\u23F8\uFE0F" : "\u25B6\uFE0F", " ");
  }
}
function ErpGeneratorComponent_div_7_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "\uAC70\uB798\uCC98 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_7_div_68_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_div_68_button_5_Template_button_click_0_listener() {
      const page_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToSupplierPage(page_r21));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r21 === ctx_r1.supplierCurrentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r21, " ");
  }
}
function ErpGeneratorComponent_div_7_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_div_68_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSupplierPage(1));
    });
    \u0275\u0275text(2, " \xAB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_div_68_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousSupplierPage());
    });
    \u0275\u0275text(4, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ErpGeneratorComponent_div_7_div_68_button_5_Template, 2, 3, "button", 47);
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_div_68_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextSupplierPage());
    });
    \u0275\u0275text(7, " \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_div_68_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSupplierPage(ctx_r1.supplierTotalPages));
    });
    \u0275\u0275text(9, " \xBB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.supplierCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.supplierCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.supplierPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.supplierCurrentPage === ctx_r1.supplierTotalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.supplierCurrentPage === ctx_r1.supplierTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.supplierCurrentPage, " / ", ctx_r1.supplierTotalPages, " \uD398\uC774\uC9C0 (\uCD1D ", ctx_r1.filteredSuppliers.length, "\uAC74) ");
  }
}
function ErpGeneratorComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\uAC70\uB798\uCC98 \uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSupplierModal());
    });
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \uAC70\uB798\uCC98 \uB4F1\uB85D ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "mat-form-field", 24)(10, "mat-label");
    \u0275\u0275text(11, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_7_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierCategoryFilter, $event) || (ctx_r1.supplierCategoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_7_Template_mat_select_selectionChange_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSupplierCategoryFilterChange());
    });
    \u0275\u0275elementStart(13, "mat-option", 26);
    \u0275\u0275text(14, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 50);
    \u0275\u0275text(16, "\uC758\uC57D\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 51);
    \u0275\u0275text(18, "\uC758\uB8CC\uAE30\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 52);
    \u0275\u0275text(20, "\uC18C\uBAA8\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 53);
    \u0275\u0275text(22, "\uC704\uC0DD\uC6A9\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 54);
    \u0275\u0275text(24, "\uC0AC\uBB34\uC6A9\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 63);
    \u0275\u0275text(26, "\uAC74\uAC15\uC2DD\uD488");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "mat-form-field", 24)(28, "mat-label");
    \u0275\u0275text(29, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_7_Template_mat_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierStatusFilter, $event) || (ctx_r1.supplierStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_7_Template_mat_select_selectionChange_30_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSupplierStatusFilterChange());
    });
    \u0275\u0275elementStart(31, "mat-option", 26);
    \u0275\u0275text(32, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 64);
    \u0275\u0275text(34, "\uD65C\uC131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 65);
    \u0275\u0275text(36, "\uBE44\uD65C\uC131");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "mat-form-field", 31)(38, "mat-label");
    \u0275\u0275text(39, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_7_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.supplierSearchQuery, $event) || (ctx_r1.supplierSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_7_Template_input_input_40_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSupplierSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-icon", 33);
    \u0275\u0275text(42, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 34)(44, "table", 35)(45, "thead")(46, "tr")(47, "th");
    \u0275\u0275text(48, "\uAC70\uB798\uCC98\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "\uC0C1\uD638\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "\uB300\uD45C\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "\uC5F0\uB77D\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "\uC2E0\uC6A9\uB4F1\uAE09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "\uCD5C\uADFC\uAC70\uB798");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "tbody");
    \u0275\u0275template(66, ErpGeneratorComponent_div_7_tr_66_Template, 25, 14, "tr", 36)(67, ErpGeneratorComponent_div_7_tr_67_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(68, ErpGeneratorComponent_div_7_div_68_Template, 12, 8, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierCategoryFilter);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierStatusFilter);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.supplierSearchQuery);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedSuppliers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatedSuppliers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.supplierTotalPages > 1);
  }
}
function ErpGeneratorComponent_div_8_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", period_r23);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPeriod(period_r23), " ");
  }
}
function ErpGeneratorComponent_div_8_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_tr_90_Template_tr_click_0_listener() {
      const settlement_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewSettlementDetail(settlement_r25));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 85);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 86);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 87)(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 41);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_tr_90_Template_td_click_22_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(23, "button", 42);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_tr_90_Template_button_click_23_listener() {
      const settlement_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewSettlementDetail(settlement_r25));
    });
    \u0275\u0275text(24, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 88);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_tr_90_Template_button_click_25_listener() {
      const settlement_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportSettlement(settlement_r25));
    });
    \u0275\u0275text(26, "\u{1F4C4}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const settlement_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(settlement_r25.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPeriod(settlement_r25.period));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(settlement_r25.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(settlement_r25.orderAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(settlement_r25.paymentAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(settlement_r25.returnAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(settlement_r25.balance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(settlement_r25.dueDate));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-badge " + ctx_r1.getSettlementStatusClass(settlement_r25.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSettlementStatusLabel(settlement_r25.status), " ");
  }
}
function ErpGeneratorComponent_div_8_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, "\uC815\uC0B0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_8_div_92_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_div_92_button_5_Template_button_click_0_listener() {
      const page_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToSettlementPage(page_r28));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r28 === ctx_r1.settlementCurrentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r28, " ");
  }
}
function ErpGeneratorComponent_div_8_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_div_92_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSettlementPage(1));
    });
    \u0275\u0275text(2, " \xAB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_div_92_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousSettlementPage());
    });
    \u0275\u0275text(4, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ErpGeneratorComponent_div_8_div_92_button_5_Template, 2, 3, "button", 47);
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_div_92_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextSettlementPage());
    });
    \u0275\u0275text(7, " \u203A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 46);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_8_div_92_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSettlementPage(ctx_r1.settlementTotalPages));
    });
    \u0275\u0275text(9, " \xBB ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.settlementCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.settlementCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.settlementPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.settlementCurrentPage === ctx_r1.settlementTotalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.settlementCurrentPage === ctx_r1.settlementTotalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r1.settlementCurrentPage, " / ", ctx_r1.settlementTotalPages, " \uD398\uC774\uC9C0 (\uCD1D ", ctx_r1.filteredSettlements.length, "\uAC74) ");
  }
}
function ErpGeneratorComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\uC815\uC0B0 \uAD00\uB9AC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 68)(5, "div", 69)(6, "div", 70);
    \u0275\u0275text(7, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 71)(9, "div", 72);
    \u0275\u0275text(10, "\uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 73);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 69)(14, "div", 74);
    \u0275\u0275text(15, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 71)(17, "div", 72);
    \u0275\u0275text(18, "\uC9C0\uC5F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 73);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 69)(22, "div", 75);
    \u0275\u0275text(23, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 71)(25, "div", 72);
    \u0275\u0275text(26, "\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 73);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 76)(30, "div", 77);
    \u0275\u0275text(31, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 71)(33, "div", 72);
    \u0275\u0275text(34, "\uCD1D \uBBF8\uACB0\uC81C\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 78);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 23)(38, "mat-form-field", 24)(39, "mat-label");
    \u0275\u0275text(40, "\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_8_Template_mat_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settlementPeriodFilter, $event) || (ctx_r1.settlementPeriodFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_8_Template_mat_select_selectionChange_41_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSettlementPeriodFilterChange());
    });
    \u0275\u0275elementStart(42, "mat-option", 26);
    \u0275\u0275text(43, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, ErpGeneratorComponent_div_8_mat_option_44_Template, 2, 2, "mat-option", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-form-field", 24)(46, "mat-label");
    \u0275\u0275text(47, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_8_Template_mat_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settlementStatusFilter, $event) || (ctx_r1.settlementStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_8_Template_mat_select_selectionChange_48_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSettlementStatusFilterChange());
    });
    \u0275\u0275elementStart(49, "mat-option", 26);
    \u0275\u0275text(50, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-option", 27);
    \u0275\u0275text(52, "\uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-option", 80);
    \u0275\u0275text(54, "\uD655\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-option", 81);
    \u0275\u0275text(56, "\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-option", 82);
    \u0275\u0275text(58, "\uC9C0\uC5F0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "mat-form-field", 31)(60, "mat-label");
    \u0275\u0275text(61, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_8_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settlementSearchQuery, $event) || (ctx_r1.settlementSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_8_Template_input_input_62_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSettlementSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-icon", 33);
    \u0275\u0275text(64, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 34)(66, "table", 35)(67, "thead")(68, "tr")(69, "th");
    \u0275\u0275text(70, "\uC815\uC0B0\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "\uC815\uC0B0\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "\uBC1C\uC8FC\uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "\uACB0\uC81C\uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "\uBC18\uD488\uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th");
    \u0275\u0275text(82, "\uBBF8\uACB0\uC81C\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th");
    \u0275\u0275text(84, "\uB9C8\uAC10\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th");
    \u0275\u0275text(86, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th");
    \u0275\u0275text(88, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "tbody");
    \u0275\u0275template(90, ErpGeneratorComponent_div_8_tr_90_Template, 27, 11, "tr", 36)(91, ErpGeneratorComponent_div_8_tr_91_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(92, ErpGeneratorComponent_div_8_div_92_Template, 12, 8, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.settlementStats.pendingCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.settlementStats.overdueCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.settlementStats.paidCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.settlementStats.totalBalance));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settlementPeriodFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getAvailablePeriods());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settlementStatusFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settlementSearchQuery);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedSettlements);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatedSettlements.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settlementTotalPages > 1);
  }
}
function ErpGeneratorComponent_div_9_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", month_r30);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPeriod(month_r30), " ");
  }
}
function ErpGeneratorComponent_div_9_div_27_mat_option_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r32 = ctx.$implicit;
    \u0275\u0275property("value", cat_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r32);
  }
}
function ErpGeneratorComponent_div_9_div_27_tr_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 115);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 116);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 117);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 118);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_div_27_tr_109_Template_button_click_17_listener() {
      const order_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewReportOrderDetail(order_r34));
    });
    \u0275\u0275text(18, "\uC0C1\uC138");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r34.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r34.orderDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r34.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", order_r34.items.length, "\uAC1C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(order_r34.totalAmount));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-badge " + ctx_r1.getStatusClass(order_r34.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(order_r34.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r34.createdBy);
  }
}
function ErpGeneratorComponent_div_9_div_27_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1, " \uD574\uB2F9 \uC870\uAC74\uC758 \uBC1C\uC8FC \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_9_div_27_div_111_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_div_27_div_111_button_3_Template_button_click_0_listener() {
      const page_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToReportPage(page_r37));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r37 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", page_r37 === ctx_r1.reportCurrentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r37, " ");
  }
}
function ErpGeneratorComponent_div_9_div_27_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 120);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_div_27_div_111_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previousReportPage());
    });
    \u0275\u0275text(2, " \uC774\uC804 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ErpGeneratorComponent_div_9_div_27_div_111_button_3_Template, 2, 3, "button", 121);
    \u0275\u0275elementStart(4, "button", 120);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_div_27_div_111_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextReportPage());
    });
    \u0275\u0275text(5, " \uB2E4\uC74C ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.reportCurrentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.reportPageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.reportCurrentPage === ctx_r1.reportTotalPages);
  }
}
function ErpGeneratorComponent_div_9_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 102)(5, "div", 103)(6, "div", 13);
    \u0275\u0275text(7, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 104)(9, "div", 105);
    \u0275\u0275text(10, "\uCD1D \uBC1C\uC8FC \uAC74\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 106);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 107);
    \u0275\u0275text(14, "\uAC74");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 103)(16, "div", 13);
    \u0275\u0275text(17, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 104)(19, "div", 105);
    \u0275\u0275text(20, "\uCD1D \uBC1C\uC8FC \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 106);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 103)(24, "div", 13);
    \u0275\u0275text(25, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 104)(27, "div", 105);
    \u0275\u0275text(28, "\uC7AC\uACE0 \uC790\uC0B0 \uAC00\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 106);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 103)(32, "div", 13);
    \u0275\u0275text(33, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 104)(35, "div", 105);
    \u0275\u0275text(36, "\uD65C\uC131 \uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 106);
    \u0275\u0275text(38);
    \u0275\u0275elementStart(39, "span", 107);
    \u0275\u0275text(40, "\uAC1C");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 103)(42, "div", 13);
    \u0275\u0275text(43, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 104)(45, "div", 105);
    \u0275\u0275text(46, "\uC815\uC0B0 \uC608\uC815 \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 106);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 103)(50, "div", 13);
    \u0275\u0275text(51, "\u{1F4C8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 104)(53, "div", 105);
    \u0275\u0275text(54, "\uD3C9\uADE0 \uBC1C\uC8FC \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 106);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 108)(58, "h4");
    \u0275\u0275text(59, "\u{1F4CB} \uBC1C\uC8FC \uC0C1\uC138 \uB0B4\uC5ED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 23)(61, "mat-form-field", 31)(62, "mat-label");
    \u0275\u0275text(63, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_9_div_27_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reportSearchQuery, $event) || (ctx_r1.reportSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_9_div_27_Template_input_input_64_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReportSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-icon", 33);
    \u0275\u0275text(66, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "mat-form-field", 24)(68, "mat-label");
    \u0275\u0275text(69, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_9_div_27_Template_mat_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reportStatusFilter, $event) || (ctx_r1.reportStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_9_div_27_Template_mat_select_selectionChange_70_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReportStatusFilterChange());
    });
    \u0275\u0275elementStart(71, "mat-option", 26);
    \u0275\u0275text(72, "\uC804\uCCB4 \uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-option", 27);
    \u0275\u0275text(74, "\uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "mat-option", 28);
    \u0275\u0275text(76, "\uC2B9\uC778");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "mat-option", 29);
    \u0275\u0275text(78, "\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "mat-option", 30);
    \u0275\u0275text(80, "\uCDE8\uC18C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "mat-form-field", 24)(82, "mat-label");
    \u0275\u0275text(83, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_9_div_27_Template_mat_select_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.reportCategoryFilter, $event) || (ctx_r1.reportCategoryFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_9_div_27_Template_mat_select_selectionChange_84_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReportCategoryFilterChange());
    });
    \u0275\u0275elementStart(85, "mat-option", 26);
    \u0275\u0275text(86, "\uC804\uCCB4 \uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275template(87, ErpGeneratorComponent_div_9_div_27_mat_option_87_Template, 2, 2, "mat-option", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 110)(89, "table")(90, "thead")(91, "tr")(92, "th");
    \u0275\u0275text(93, "\uBC1C\uC8FC\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "th");
    \u0275\u0275text(95, "\uBC1C\uC8FC\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "th");
    \u0275\u0275text(97, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "th");
    \u0275\u0275text(99, "\uD488\uBAA9\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th");
    \u0275\u0275text(101, "\uCD1D \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "th");
    \u0275\u0275text(103, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "th");
    \u0275\u0275text(105, "\uB2F4\uB2F9\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "th");
    \u0275\u0275text(107, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "tbody");
    \u0275\u0275template(109, ErpGeneratorComponent_div_9_div_27_tr_109_Template, 19, 9, "tr", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(110, ErpGeneratorComponent_div_9_div_27_div_110_Template, 2, 0, "div", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(111, ErpGeneratorComponent_div_9_div_27_div_111_Template, 6, 3, "div", 38);
    \u0275\u0275elementStart(112, "div", 113);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatPeriod(ctx_r1.summaryReport.period), " \uC885\uD569 \uBCF4\uACE0\uC11C");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summaryReport.orderCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.summaryReport.orderAmount));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.summaryReport.inventoryValue));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.summaryReport.supplierCount);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.summaryReport.settlementAmount));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.summaryReport.orderCount > 0 ? ctx_r1.formatCurrency(ctx_r1.summaryReport.orderAmount / ctx_r1.summaryReport.orderCount) : "0\uC6D0", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reportSearchQuery);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reportStatusFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reportCategoryFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getReportCategories());
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedReportOrders);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatedReportOrders.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportTotalPages > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" \uC804\uCCB4 ", ctx_r1.filteredReportOrders.length, "\uAC74 \uC911 ", (ctx_r1.reportCurrentPage - 1) * ctx_r1.reportItemsPerPage + 1, "~", ctx_r1.getReportEndIndex(), "\uAC74 \uD45C\uC2DC ");
  }
}
function ErpGeneratorComponent_div_9_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 126);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 127)(5, "span", 128);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 129);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 130);
    \u0275\u0275element(10, "div", 131);
    \u0275\u0275elementStart(11, "div", 132);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r38 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r38.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cat_r38.orderCount, "\uAC74");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(cat_r38.orderAmount));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getPercentageBarWidth(cat_r38.percentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r38.percentage.toFixed(1), "%");
  }
}
function ErpGeneratorComponent_div_9_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1, " \uD574\uB2F9 \uAE30\uAC04\uC758 \uCE74\uD14C\uACE0\uB9AC \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_9_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 122);
    \u0275\u0275template(5, ErpGeneratorComponent_div_9_div_28_div_5_Template, 13, 6, "div", 123)(6, ErpGeneratorComponent_div_9_div_28_div_6_Template, 2, 0, "div", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatPeriod(ctx_r1.selectedMonth), " \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uBD84\uC11D");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categoryReports);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categoryReports.length === 0);
  }
}
function ErpGeneratorComponent_div_9_div_29_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 134)(2, "span", 135);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 136);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 136);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sup_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("top3", i_r40 < 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r40 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sup_r39.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", sup_r39.orderCount, "\uAC74");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(sup_r39.orderAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(sup_r39.averageAmount));
  }
}
function ErpGeneratorComponent_div_9_div_29_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1, " \uD574\uB2F9 \uAE30\uAC04\uC758 \uAC70\uB798\uCC98 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_9_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 133)(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "\uC21C\uC704");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\uAC70\uB798\uCC98\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\uBC1C\uC8FC \uAC74\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\uCD1D \uBC1C\uC8FC \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\uD3C9\uADE0 \uBC1C\uC8FC \uAE08\uC561");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ErpGeneratorComponent_div_9_div_29_tr_19_Template, 12, 7, "tr", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ErpGeneratorComponent_div_9_div_29_div_20_Template, 2, 0, "div", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatPeriod(ctx_r1.selectedMonth), " \uAC70\uB798\uCC98\uBCC4 \uBD84\uC11D (\uC0C1\uC704 10\uAC1C)");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.supplierReports);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.supplierReports.length === 0);
  }
}
function ErpGeneratorComponent_div_9_div_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "div", 144)(2, "div", 145);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 146);
    \u0275\u0275element(5, "div", 147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 148);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 149);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r41 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCompactCurrency(trend_r41.amount));
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.getTrendBarHeight(trend_r41.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatShortMonth(trend_r41.month));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", trend_r41.orders, "\uAC74");
  }
}
function ErpGeneratorComponent_div_9_div_30_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1, " \uCD94\uC774 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_9_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "h3");
    \u0275\u0275text(3, "\uCD5C\uADFC 6\uAC1C\uC6D4 \uBC1C\uC8FC \uCD94\uC774");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 137)(5, "div", 138)(6, "div", 139);
    \u0275\u0275template(7, ErpGeneratorComponent_div_9_div_30_div_7_Template, 10, 5, "div", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 141)(9, "div", 142)(10, "div", 72);
    \u0275\u0275text(11, "\uCD1D \uBC1C\uC8FC \uAC74\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 73);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 142)(15, "div", 72);
    \u0275\u0275text(16, "\uCD1D \uBC1C\uC8FC \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 73);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 142)(20, "div", 72);
    \u0275\u0275text(21, "\uC6D4\uD3C9\uADE0 \uBC1C\uC8FC\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 73);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, ErpGeneratorComponent_div_9_div_30_div_24_Template, 2, 0, "div", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.monthlyTrends);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTotalTrendOrders(), "\uAC74 ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.getTotalTrendAmount()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.getAverageTrendAmount()), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.monthlyTrends.length === 0);
  }
}
function ErpGeneratorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u{1F4CA} \uBCF4\uACE0\uC11C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printReport());
    });
    \u0275\u0275text(6, "\u{1F5A8}\uFE0F \uC778\uC1C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportReport());
    });
    \u0275\u0275text(8, "\u{1F4E5} Excel \uB0B4\uBCF4\uB0B4\uAE30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 93)(10, "button", 94);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.reportType = "summary";
      return \u0275\u0275resetView(ctx_r1.onReportTypeChange());
    });
    \u0275\u0275text(11, " \u{1F4CB} \uC885\uD569 \uBCF4\uACE0\uC11C ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 94);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.reportType = "category";
      return \u0275\u0275resetView(ctx_r1.onReportTypeChange());
    });
    \u0275\u0275text(13, " \u{1F4CA} \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uBD84\uC11D ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 94);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.reportType = "supplier";
      return \u0275\u0275resetView(ctx_r1.onReportTypeChange());
    });
    \u0275\u0275text(15, " \u{1F3E2} \uAC70\uB798\uCC98\uBCC4 \uBD84\uC11D ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 94);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.reportType = "trend";
      return \u0275\u0275resetView(ctx_r1.onReportTypeChange());
    });
    \u0275\u0275text(17, " \u{1F4C8} \uC6D4\uBCC4 \uCD94\uC774 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 95)(19, "mat-radio-group", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_9_Template_mat_radio_group_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reportPeriod, $event) || (ctx_r1.reportPeriod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ErpGeneratorComponent_div_9_Template_mat_radio_group_change_19_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReportPeriodChange());
    });
    \u0275\u0275elementStart(20, "mat-radio-button", 97);
    \u0275\u0275text(21, "\uC6D4\uBCC4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 98)(23, "mat-label");
    \u0275\u0275text(24, "\uAE30\uAC04 \uC120\uD0DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_9_Template_mat_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMonth, $event) || (ctx_r1.selectedMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_9_Template_mat_select_selectionChange_25_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectedMonthChange());
    });
    \u0275\u0275template(26, ErpGeneratorComponent_div_9_mat_option_26_Template, 2, 2, "mat-option", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ErpGeneratorComponent_div_9_div_27_Template, 114, 17, "div", 99)(28, ErpGeneratorComponent_div_9_div_28_Template, 7, 3, "div", 99)(29, ErpGeneratorComponent_div_9_div_29_Template, 21, 3, "div", 99)(30, ErpGeneratorComponent_div_9_div_30_Template, 25, 5, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275classProp("active", ctx_r1.reportType === "summary");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.reportType === "category");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.reportType === "supplier");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.reportType === "trend");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reportPeriod);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMonth);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getAvailableMonths());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportType === "summary" && ctx_r1.summaryReport);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportType === "category");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportType === "supplier");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportType === "trend");
  }
}
function ErpGeneratorComponent_div_10_div_40_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 162)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 163);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 164);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 136);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 165);
    \u0275\u0275text(18, "\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 166)(20, "button", 167);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_div_40_tr_24_Template_button_click_20_listener() {
      const lot_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleExpiredProduct(lot_r44));
    });
    \u0275\u0275text(21, "\u{1F6AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 42);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_div_40_tr_24_Template_button_click_22_listener() {
      const lot_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewLotDetail(lot_r44));
    });
    \u0275\u0275text(23, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lot_r44 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lot_r44.lotNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r44.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(lot_r44.manufacturingDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(lot_r44.expiryDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getDaysExpired(lot_r44.expiryDate), "\uC77C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r44.currentStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r44.storageLocation);
  }
}
function ErpGeneratorComponent_div_10_div_40_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_10_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 34)(2, "table", 35)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "\uC81C\uC870\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\uC81C\uC870\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\uC720\uD6A8\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\uACBD\uACFC\uC77C\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\uD604\uC7AC\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\uBCF4\uAD00\uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, ErpGeneratorComponent_div_10_div_40_tr_24_Template, 24, 7, "tr", 161)(25, ErpGeneratorComponent_div_10_div_40_tr_25_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.expiredLots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expiredLots.length === 0);
  }
}
function ErpGeneratorComponent_div_10_div_41_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 169)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 170);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 171);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 136);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 172);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 166)(20, "button", 173);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_div_41_tr_24_Template_button_click_20_listener() {
      const lot_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.promoteSale(lot_r46));
    });
    \u0275\u0275text(21, "\u{1F4E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 42);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_div_41_tr_24_Template_button_click_22_listener() {
      const lot_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewLotDetail(lot_r46));
    });
    \u0275\u0275text(23, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lot_r46 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lot_r46.lotNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r46.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(lot_r46.manufacturingDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(lot_r46.expiryDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getDaysUntilExpiry(lot_r46.expiryDate), "\uC77C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r46.currentStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r46.storageLocation);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("high", ctx_r1.getDaysUntilExpiry(lot_r46.expiryDate) < 30);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDaysUntilExpiry(lot_r46.expiryDate) < 30 ? "\uB192\uC74C" : "\uC911\uAC04", " ");
  }
}
function ErpGeneratorComponent_div_10_div_41_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "\uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_10_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 34)(2, "table", 35)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "\uC81C\uC870\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\uC81C\uC870\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\uC720\uD6A8\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\uB0A8\uC740\uC77C\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\uD604\uC7AC\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\uBCF4\uAD00\uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "\uC6B0\uC120\uC21C\uC704");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, ErpGeneratorComponent_div_10_div_41_tr_24_Template, 24, 10, "tr", 168)(25, ErpGeneratorComponent_div_10_div_41_tr_25_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.expiringLots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expiringLots.length === 0);
  }
}
function ErpGeneratorComponent_div_10_div_42_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 176);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 136);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 177);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lot_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expired-row", ctx_r1.isExpired(lot_r47.expiryDate))("expiring-row", ctx_r1.isExpiring(lot_r47.expiryDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r48 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lot_r47.lotNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r47.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r47.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(lot_r47.manufacturingDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(lot_r47.expiryDate));
    \u0275\u0275advance();
    \u0275\u0275classProp("expired-days", ctx_r1.isExpired(lot_r47.expiryDate))("expiring-days", ctx_r1.isExpiring(lot_r47.expiryDate));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getExpiryDaysDisplay(lot_r47.expiryDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r47.currentStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lot_r47.storageLocation);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("expired", ctx_r1.isExpired(lot_r47.expiryDate))("expiring", ctx_r1.isExpiring(lot_r47.expiryDate))("normal", !ctx_r1.isExpired(lot_r47.expiryDate) && !ctx_r1.isExpiring(lot_r47.expiryDate));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getExpiryStatus(lot_r47.expiryDate), " ");
  }
}
function ErpGeneratorComponent_div_10_div_42_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, "\uBC30\uCE58 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_10_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "div", 174)(2, "span", 22);
    \u0275\u0275text(3, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "FEFO (First Expired First Out) \uC21C\uC11C\uB85C \uC815\uB82C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "table", 35)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "\uC21C\uC704");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\uC81C\uC870\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\uACF5\uAE09\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "\uC81C\uC870\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "\uC720\uD6A8\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "\uB0A8\uC740\uC77C\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "\uD604\uC7AC\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "\uBCF4\uAD00\uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, ErpGeneratorComponent_div_10_div_42_tr_31_Template, 23, 24, "tr", 175)(32, ErpGeneratorComponent_div_10_div_42_tr_32_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(31);
    \u0275\u0275property("ngForOf", ctx_r1.getLotsSortedByExpiry());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lotBatches.length === 0);
  }
}
function ErpGeneratorComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u23F0 \uC720\uD6A8\uAE30\uAC04 \uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkExpiringProducts());
    });
    \u0275\u0275text(6, "\u{1F504} \uAC31\uC2E0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 150)(8, "div", 151)(9, "div", 152);
    \u0275\u0275text(10, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 71)(12, "div", 72);
    \u0275\u0275text(13, "\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 153)(17, "div", 154);
    \u0275\u0275text(18, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 71)(20, "div", 72);
    \u0275\u0275text(21, "\uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 (3\uAC1C\uC6D4 \uC774\uB0B4)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 73);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 69)(25, "div", 155);
    \u0275\u0275text(26, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 71)(28, "div", 72);
    \u0275\u0275text(29, "\uC815\uC0C1 \uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 73);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 156)(33, "div", 157)(34, "button", 158);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expiryTab = "expired");
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 158);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expiryTab = "expiring");
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 158);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_10_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expiryTab = "all");
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(40, ErpGeneratorComponent_div_10_div_40_Template, 26, 2, "div", 159)(41, ErpGeneratorComponent_div_10_div_41_Template, 26, 2, "div", 159)(42, ErpGeneratorComponent_div_10_div_42_Template, 33, 2, "div", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.expiredLots.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.expiringLots.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.lotBatches.length - ctx_r1.expiredLots.length - ctx_r1.expiringLots.length);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.expiryTab === "expired");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC (", ctx_r1.expiredLots.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.expiryTab === "expiring");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 (", ctx_r1.expiringLots.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.expiryTab === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uC804\uCCB4 \uBC30\uCE58 (", ctx_r1.lotBatches.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expiryTab === "expired");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expiryTab === "expiring");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expiryTab === "all");
  }
}
function ErpGeneratorComponent_div_11_tr_88_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_11_tr_88_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r52);
      const inspection_r51 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveInspection(inspection_r51));
    });
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_11_tr_88_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 191);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_11_tr_88_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r53);
      const inspection_r51 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectInspection(inspection_r51));
    });
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_11_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 136);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 116);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "div", 184)(20, "span", 185);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 186);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 187);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td")(27, "span", 177);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 166)(30, "button", 42);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_11_tr_88_Template_button_click_30_listener() {
      const inspection_r51 = \u0275\u0275restoreView(_r50).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewInspectionDetail(inspection_r51));
    });
    \u0275\u0275text(31, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ErpGeneratorComponent_div_11_tr_88_button_32_Template, 2, 0, "button", 188)(33, ErpGeneratorComponent_div_11_tr_88_button_33_Template, 2, 0, "button", 189);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inspection_r51 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inspection_r51.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(inspection_r51.receiptDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inspection_r51.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inspection_r51.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inspection_r51.lotNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inspection_r51.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inspection_r51.inspector);
    \u0275\u0275advance();
    \u0275\u0275classProp("temp-ok", ctx_r1.isTempOk(inspection_r51.temperatureCheck))("temp-alert", !ctx_r1.isTempOk(inspection_r51.temperatureCheck));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", inspection_r51.temperatureCheck.toFixed(1), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pass", inspection_r51.packagingIntact)("fail", !inspection_r51.packagingIntact);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4E6}", inspection_r51.packagingIntact ? "\u2713" : "\u2717", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", inspection_r51.quantityVerified)("fail", !inspection_r51.quantityVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F522}", inspection_r51.quantityVerified ? "\u2713" : "\u2717", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", inspection_r51.qualityAcceptable)("fail", !inspection_r51.qualityAcceptable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2B50", inspection_r51.qualityAcceptable ? "\u2713" : "\u2717", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getInspectionStatusClass(inspection_r51.approvalStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInspectionStatusLabel(inspection_r51.approvalStatus), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", inspection_r51.approvalStatus === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inspection_r51.approvalStatus === "pending");
  }
}
function ErpGeneratorComponent_div_11_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 192);
    \u0275\u0275text(2, "\uAC80\uC218 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u2705 \uC785\uACE0\uAC80\uC218 \uAD00\uB9AC (KGSP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewInspectionModal());
    });
    \u0275\u0275text(6, "\u2795 \uC0C8 \uAC80\uC218");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 68)(8, "div", 69)(9, "div", 70);
    \u0275\u0275text(10, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 71)(12, "div", 72);
    \u0275\u0275text(13, "\uAC80\uC218 \uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 69)(17, "div", 178);
    \u0275\u0275text(18, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 71)(20, "div", 72);
    \u0275\u0275text(21, "\uC2B9\uC778");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 73);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 69)(25, "div", 179);
    \u0275\u0275text(26, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 71)(28, "div", 72);
    \u0275\u0275text(29, "\uBC18\uB824");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 73);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 69)(33, "div", 180);
    \u0275\u0275text(34, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 71)(36, "div", 72);
    \u0275\u0275text(37, "\uCD1D \uAC80\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 73);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 23)(41, "mat-form-field", 24)(42, "mat-label");
    \u0275\u0275text(43, "\uAC80\uC218 \uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_11_Template_mat_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inspectionStatusFilter, $event) || (ctx_r1.inspectionStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_11_Template_mat_select_selectionChange_44_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInspectionFilterChange());
    });
    \u0275\u0275elementStart(45, "mat-option", 26);
    \u0275\u0275text(46, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-option", 27);
    \u0275\u0275text(48, "\uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-option", 28);
    \u0275\u0275text(50, "\uC2B9\uC778");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-option", 181);
    \u0275\u0275text(52, "\uBC18\uB824");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-option", 182);
    \u0275\u0275text(54, "\uC870\uAC74\uBD80");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "mat-form-field", 31)(56, "mat-label");
    \u0275\u0275text(57, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_11_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inspectionSearchQuery, $event) || (ctx_r1.inspectionSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_11_Template_input_input_58_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInspectionFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-icon", 33);
    \u0275\u0275text(60, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 34)(62, "table", 35)(63, "thead")(64, "tr")(65, "th");
    \u0275\u0275text(66, "\uAC80\uC218ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th");
    \u0275\u0275text(68, "\uC785\uACE0\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th");
    \u0275\u0275text(70, "\uACF5\uAE09\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "\uC81C\uC870\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "\uC218\uB7C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "\uAC80\uC218\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "\uC628\uB3C4(\u2103)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th");
    \u0275\u0275text(82, "\uAC80\uC218\uACB0\uACFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th");
    \u0275\u0275text(84, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th");
    \u0275\u0275text(86, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "tbody");
    \u0275\u0275template(88, ErpGeneratorComponent_div_11_tr_88_Template, 34, 32, "tr", 111)(89, ErpGeneratorComponent_div_11_tr_89_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.getInspectionCountByStatus("pending"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getInspectionCountByStatus("approved"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getInspectionCountByStatus("rejected"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.receiptInspections.length);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inspectionStatusFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inspectionSearchQuery);
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r1.filteredInspections);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredInspections.length === 0);
  }
}
function ErpGeneratorComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 200)(1, "div", 201)(2, "span", 202);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 203);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 204)(10, "div", 205)(11, "span", 206);
    \u0275\u0275text(12, "\uC628\uB3C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 207);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 208);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 205)(18, "span", 206);
    \u0275\u0275text(19, "\uC2B5\uB3C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 207);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 208);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 209);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r55 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("alert", ctx_r1.isZoneAbnormal(zone_r55));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getZoneIcon(zone_r55.zoneType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(zone_r55.zoneName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\uBCF4\uAD00 \uC6A9\uB7C9: ", zone_r55.currentOccupancy, "/", zone_r55.capacity);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("abnormal", !ctx_r1.isTempInRange(ctx_r1.getCurrentReading(zone_r55.zoneId).temperature, zone_r55));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCurrentReading(zone_r55.zoneId).temperature, "\xB0C ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", zone_r55.temperatureRange.min, "~", zone_r55.temperatureRange.max, "\xB0C)");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("abnormal", !ctx_r1.isHumidityInRange(ctx_r1.getCurrentReading(zone_r55.zoneId).humidity, zone_r55));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCurrentReading(zone_r55.zoneId).humidity, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", zone_r55.humidityRange.min, "~", zone_r55.humidityRange.max, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \uCD5C\uC885 \uCE21\uC815: ", \u0275\u0275pipeBind2(26, 17, ctx_r1.getCurrentReading(zone_r55.zoneId).recordDate, "yyyy-MM-dd HH:mm"), " ");
  }
}
function ErpGeneratorComponent_div_12_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 214)(1, "span", 215);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 216);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 217);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 218);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_12_div_8_div_5_Template_button_click_8_listener() {
      const alert_r57 = \u0275\u0275restoreView(_r56).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.acknowledgeAlert(alert_r57));
    });
    \u0275\u0275text(9, "\uD655\uC778");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r57 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("critical", alert_r57.status === "critical");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, alert_r57.recordDate, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getZoneName(alert_r57.zoneId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r57.notes || "\uC628\uC2B5\uB3C4 \uC774\uC0C1");
  }
}
function ErpGeneratorComponent_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "div", 211)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 212);
    \u0275\u0275template(5, ErpGeneratorComponent_div_12_div_8_div_5_Template, 10, 8, "div", 213);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F \uC774\uC0C1 \uAC10\uC9C0 \uC54C\uB9BC (", ctx_r1.getTemperatureAlerts().length, "\uAC74)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getTemperatureAlerts());
  }
}
function ErpGeneratorComponent_div_12_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r58 = ctx.$implicit;
    \u0275\u0275property("value", zone_r58.zoneId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(zone_r58.zoneName);
  }
}
function ErpGeneratorComponent_div_12_tr_50_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const record_r60 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(record_r60.notes);
  }
}
function ErpGeneratorComponent_div_12_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 219);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 219);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 177);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, ErpGeneratorComponent_div_12_tr_50_span_22_Template, 2, 1, "span", 37);
    \u0275\u0275elementStart(23, "button", 220);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_12_tr_50_Template_button_click_23_listener() {
      const record_r60 = \u0275\u0275restoreView(_r59).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewTemperatureDetail(record_r60));
    });
    \u0275\u0275text(24, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const record_r60 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("abnormal-row", record_r60.alertTriggered);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r60.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 22, record_r60.recordDate, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getZoneName(record_r60.zoneId));
    \u0275\u0275advance();
    \u0275\u0275classProp("temp-abnormal", !ctx_r1.isTempInRange(record_r60.temperature, ctx_r1.getZone(record_r60.zoneId)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r60.temperature, "\xB0C ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", ctx_r1.getZone(record_r60.zoneId).temperatureRange.min, "~", ctx_r1.getZone(record_r60.zoneId).temperatureRange.max, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("humidity-abnormal", !ctx_r1.isHumidityInRange(record_r60.humidity, ctx_r1.getZone(record_r60.zoneId)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r60.humidity, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", ctx_r1.getZone(record_r60.zoneId).humidityRange.min, "~", ctx_r1.getZone(record_r60.zoneId).humidityRange.max, ")");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("normal", !record_r60.alertTriggered)("abnormal", record_r60.alertTriggered);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", record_r60.alertTriggered ? "\uC774\uC0C1" : "\uC815\uC0C1", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r60.recordedBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", record_r60.notes);
  }
}
function ErpGeneratorComponent_div_12_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2, "\uC628\uC2B5\uB3C4 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u{1F321}\uFE0F \uC628\uC2B5\uB3C4 \uAD00\uB9AC (Temperature & Humidity Monitoring)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemperatureReport());
    });
    \u0275\u0275text(5, "\u{1F4CA} \uBCF4\uACE0\uC11C \uB2E4\uC6B4\uB85C\uB4DC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 193);
    \u0275\u0275template(7, ErpGeneratorComponent_div_12_div_7_Template, 27, 20, "div", 194);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ErpGeneratorComponent_div_12_div_8_Template, 6, 2, "div", 195);
    \u0275\u0275elementStart(9, "div", 23)(10, "mat-form-field", 24)(11, "mat-label");
    \u0275\u0275text(12, "\uBCF4\uAD00\uAD6C\uC5ED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_12_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tempZoneFilter, $event) || (ctx_r1.tempZoneFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_12_Template_mat_select_selectionChange_13_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTempFilterChange());
    });
    \u0275\u0275elementStart(14, "mat-option", 26);
    \u0275\u0275text(15, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ErpGeneratorComponent_div_12_mat_option_16_Template, 2, 2, "mat-option", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 24)(18, "mat-label");
    \u0275\u0275text(19, "\uB0A0\uC9DC \uBC94\uC704");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_12_Template_mat_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tempDateRange, $event) || (ctx_r1.tempDateRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_12_Template_mat_select_selectionChange_20_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTempFilterChange());
    });
    \u0275\u0275elementStart(21, "mat-option", 196);
    \u0275\u0275text(22, "\uC624\uB298");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 197);
    \u0275\u0275text(24, "\uCD5C\uADFC 7\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 97);
    \u0275\u0275text(26, "\uCD5C\uADFC 30\uC77C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "mat-checkbox", 198);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_12_Template_mat_checkbox_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tempShowAbnormalOnly, $event) || (ctx_r1.tempShowAbnormalOnly = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ErpGeneratorComponent_div_12_Template_mat_checkbox_change_27_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTempFilterChange());
    });
    \u0275\u0275text(28, " \uC774\uC0C1\uCE58\uB9CC \uBCF4\uAE30 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 34)(30, "table")(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "\uAE30\uB85DID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "\uCE21\uC815\uC77C\uC2DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "\uBCF4\uAD00\uAD6C\uC5ED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "\uC628\uB3C4 (\xB0C)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "\uC2B5\uB3C4 (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "\uCE21\uC815\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "\uBE44\uACE0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, ErpGeneratorComponent_div_12_tr_50_Template, 25, 25, "tr", 199)(51, ErpGeneratorComponent_div_12_tr_51_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.storageZones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTemperatureAlerts().length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tempZoneFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.storageZones);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tempDateRange);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tempShowAbnormalOnly);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.filteredTemperatureRecords);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredTemperatureRecords.length === 0);
  }
}
function ErpGeneratorComponent_div_13_tr_91_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 236);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r63 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("urgent", item_r63.recallLevel === "urgent")("high", item_r63.recallLevel === "high")("medium", item_r63.recallLevel === "medium")("low", item_r63.recallLevel === "low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRecallLevelLabel(item_r63.recallLevel), " ");
  }
}
function ErpGeneratorComponent_div_13_tr_91_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 237);
    \u0275\u0275text(1, "\u2713 \uC644\uB8CC");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_13_tr_91_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 238);
    \u0275\u0275text(1, "\u26A0\uFE0F \uBBF8\uBCF4\uACE0");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_13_tr_91_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 239);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_13_tr_91_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r64);
      const item_r63 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveReturn(item_r63));
    });
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_13_tr_91_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 240);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_13_tr_91_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r65);
      const item_r63 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.completeReturn(item_r63));
    });
    \u0275\u0275text(1, "\u{1F4CB}");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_13_tr_91_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 241);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_13_tr_91_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r66);
      const item_r63 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reportToAuthority(item_r63));
    });
    \u0275\u0275text(1, "\u{1F4E4}");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_13_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 228);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 229);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, ErpGeneratorComponent_div_13_tr_91_span_18_Template, 2, 9, "span", 230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 177);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, ErpGeneratorComponent_div_13_tr_91_span_23_Template, 2, 0, "span", 231)(24, ErpGeneratorComponent_div_13_tr_91_span_24_Template, 2, 0, "span", 232);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "button", 220);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_13_tr_91_Template_button_click_26_listener() {
      const item_r63 = \u0275\u0275restoreView(_r62).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewReturnDetail(item_r63));
    });
    \u0275\u0275text(27, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ErpGeneratorComponent_div_13_tr_91_button_28_Template, 2, 0, "button", 233)(29, ErpGeneratorComponent_div_13_tr_91_button_29_Template, 2, 0, "button", 234)(30, ErpGeneratorComponent_div_13_tr_91_button_30_Template, 2, 0, "button", 235);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("urgent-row", item_r63.type === "recall" && item_r63.recallLevel === "urgent")("completed-row", item_r63.status === "completed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r63.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("return", item_r63.type === "return")("recall", item_r63.type === "recall");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r63.type === "return" ? "\u21A9\uFE0F \uBC18\uD488" : "\u26A0\uFE0F \uD68C\uC218", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 28, item_r63.date, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r63.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r63.lotNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r63.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r63.reason);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r63.type === "recall" && item_r63.recallLevel);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pending", item_r63.status === "pending")("approved", item_r63.status === "approved")("completed", item_r63.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getReturnStatusLabel(item_r63.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r63.authorityReported);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r63.authorityReported && item_r63.type === "recall");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", item_r63.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r63.status === "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r63.authorityReported && item_r63.type === "recall");
  }
}
function ErpGeneratorComponent_div_13_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 192);
    \u0275\u0275text(2, "\uBC18\uD488/\uD68C\uC218 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u21A9\uFE0F \uBC18\uD488/\uD68C\uC218 \uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewReturnModal());
    });
    \u0275\u0275text(6, "+ \uBC18\uD488 \uB4F1\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 221);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewRecallModal());
    });
    \u0275\u0275text(8, "\u26A0\uFE0F \uD68C\uC218 \uB4F1\uB85D");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 222)(10, "div", 69)(11, "div", 72);
    \u0275\u0275text(12, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 73);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 153)(16, "div", 72);
    \u0275\u0275text(17, "\uBC18\uD488 (\uB300\uAE30)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 73);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 151)(21, "div", 72);
    \u0275\u0275text(22, "\uD68C\uC218 (\uAE34\uAE09)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 73);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 223)(26, "div", 72);
    \u0275\u0275text(27, "\uCC98\uB9AC \uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 73);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 69)(31, "div", 72);
    \u0275\u0275text(32, "\uB2F9\uAD6D \uBCF4\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 73);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 23)(36, "mat-form-field", 24)(37, "mat-label");
    \u0275\u0275text(38, "\uC720\uD615");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_13_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.returnTypeFilter, $event) || (ctx_r1.returnTypeFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_13_Template_mat_select_selectionChange_39_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReturnFilterChange());
    });
    \u0275\u0275elementStart(40, "mat-option", 26);
    \u0275\u0275text(41, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 224);
    \u0275\u0275text(43, "\uBC18\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-option", 225);
    \u0275\u0275text(45, "\uD68C\uC218");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "mat-form-field", 24)(47, "mat-label");
    \u0275\u0275text(48, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_13_Template_mat_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.returnStatusFilter, $event) || (ctx_r1.returnStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_13_Template_mat_select_selectionChange_49_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReturnFilterChange());
    });
    \u0275\u0275elementStart(50, "mat-option", 26);
    \u0275\u0275text(51, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-option", 27);
    \u0275\u0275text(53, "\uB300\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-option", 28);
    \u0275\u0275text(55, "\uC2B9\uC778");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-option", 29);
    \u0275\u0275text(57, "\uC644\uB8CC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "mat-form-field", 31)(59, "mat-label");
    \u0275\u0275text(60, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 226);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_13_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.returnSearchQuery, $event) || (ctx_r1.returnSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_13_Template_input_input_61_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReturnFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-icon", 33);
    \u0275\u0275text(63, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 34)(65, "table")(66, "thead")(67, "tr")(68, "th");
    \u0275\u0275text(69, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "\uC720\uD615");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "\uC77C\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "\uC81C\uC870\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "\uC218\uB7C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "\uC0AC\uC720");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "\uAE34\uAE09\uB3C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "\uB2F9\uAD6D\uBCF4\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tbody");
    \u0275\u0275template(91, ErpGeneratorComponent_div_13_tr_91_Template, 31, 31, "tr", 227)(92, ErpGeneratorComponent_div_13_tr_92_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.returnRecalls.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getReturnRecallCount("return", "pending"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getUrgentRecallCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getReturnRecallCount("all", "completed"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getAuthorityReportedCount());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.returnTypeFilter);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.returnStatusFilter);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.returnSearchQuery);
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r1.filteredReturnRecalls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredReturnRecalls.length === 0);
  }
}
function ErpGeneratorComponent_div_14_tr_91_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 256);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const report_r69 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(report_r69.confirmationNumber);
  }
}
function ErpGeneratorComponent_div_14_tr_91_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 257);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_14_tr_91_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const report_r69 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, report_r69.submittedAt, "yyyy-MM-dd HH:mm"));
  }
}
function ErpGeneratorComponent_div_14_tr_91_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 257);
    \u0275\u0275text(1, "\uBBF8\uC81C\uCD9C");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_14_tr_91_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 258);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_14_tr_91_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r70);
      const report_r69 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editHIRAReport(report_r69));
    });
    \u0275\u0275text(1, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_14_tr_91_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 259);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_14_tr_91_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r71);
      const report_r69 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitHIRAReport(report_r69));
    });
    \u0275\u0275text(1, "\u{1F4E4}");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_14_tr_91_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 260);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_14_tr_91_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r72);
      const report_r69 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewHIRAErrors(report_r69));
    });
    \u0275\u0275text(1, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_14_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 250);
    \u0275\u0275text(5, "\uACF5\uAE09\uB0B4\uC5ED");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 177);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, ErpGeneratorComponent_div_14_tr_91_span_19_Template, 2, 1, "span", 251)(20, ErpGeneratorComponent_div_14_tr_91_span_20_Template, 2, 0, "span", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, ErpGeneratorComponent_div_14_tr_91_span_22_Template, 3, 4, "span", 37)(23, ErpGeneratorComponent_div_14_tr_91_span_23_Template, 2, 0, "span", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "button", 220);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_14_tr_91_Template_button_click_25_listener() {
      const report_r69 = \u0275\u0275restoreView(_r68).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewHIRADetail(report_r69));
    });
    \u0275\u0275text(26, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ErpGeneratorComponent_div_14_tr_91_button_27_Template, 2, 0, "button", 253)(28, ErpGeneratorComponent_div_14_tr_91_button_28_Template, 2, 0, "button", 254)(29, ErpGeneratorComponent_div_14_tr_91_button_29_Template, 2, 0, "button", 255);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const report_r69 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("draft-row", report_r69.reportStatus === "draft")("error-row", report_r69.reportStatus === "rejected");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r69.reportId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(report_r69.items.length > 0 ? report_r69.items[0].productName : "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r69.items.length > 0 ? report_r69.items[0].quantity : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 25, report_r69.reportDate, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(report_r69.submittedBy || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("draft", report_r69.reportStatus === "draft")("submitted", report_r69.reportStatus === "submitted")("accepted", report_r69.reportStatus === "accepted")("rejected", report_r69.reportStatus === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getHIRAStatusLabel(report_r69.reportStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", report_r69.confirmationNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !report_r69.confirmationNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", report_r69.submittedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !report_r69.submittedAt);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", report_r69.reportStatus === "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", report_r69.reportStatus === "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", report_r69.reportStatus === "rejected");
  }
}
function ErpGeneratorComponent_div_14_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, "\uC2EC\uD3C9\uC6D0 \uBCF4\uACE0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u{1F4C4} \uC2EC\uD3C9\uC6D0 \uACF5\uAE09\uB0B4\uC5ED \uBCF4\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewHIRAReportModal());
    });
    \u0275\u0275text(6, "+ \uC2E0\uADDC \uBCF4\uACE0\uC11C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.syncHIRAReports());
    });
    \u0275\u0275text(8, "\u{1F504} \uB3D9\uAE30\uD654");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 222)(10, "div", 69)(11, "div", 72);
    \u0275\u0275text(12, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 73);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 153)(16, "div", 72);
    \u0275\u0275text(17, "\uC791\uC131\uC911");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 73);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 242)(21, "div", 72);
    \u0275\u0275text(22, "\uC81C\uCD9C\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 73);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 223)(26, "div", 72);
    \u0275\u0275text(27, "\uC811\uC218\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 73);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 151)(31, "div", 72);
    \u0275\u0275text(32, "\uC624\uB958");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 73);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 23)(36, "mat-form-field", 24)(37, "mat-label");
    \u0275\u0275text(38, "\uBCF4\uACE0 \uC720\uD615");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_14_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hiraReportTypeFilter, $event) || (ctx_r1.hiraReportTypeFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_14_Template_mat_select_selectionChange_39_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHIRAFilterChange());
    });
    \u0275\u0275elementStart(40, "mat-option", 26);
    \u0275\u0275text(41, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 243);
    \u0275\u0275text(43, "\uACF5\uAE09\uB0B4\uC5ED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-option", 244);
    \u0275\u0275text(45, "\uC758\uB8CC\uAE30\uAE30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "mat-form-field", 24)(47, "mat-label");
    \u0275\u0275text(48, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_14_Template_mat_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hiraStatusFilter, $event) || (ctx_r1.hiraStatusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ErpGeneratorComponent_div_14_Template_mat_select_selectionChange_49_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHIRAFilterChange());
    });
    \u0275\u0275elementStart(50, "mat-option", 26);
    \u0275\u0275text(51, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-option", 245);
    \u0275\u0275text(53, "\uC791\uC131\uC911");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-option", 246);
    \u0275\u0275text(55, "\uC81C\uCD9C\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-option", 247);
    \u0275\u0275text(57, "\uC811\uC218\uC644\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-option", 181);
    \u0275\u0275text(59, "\uC624\uB958");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "mat-form-field", 31)(61, "mat-label");
    \u0275\u0275text(62, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 248);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_14_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hiraSearchQuery, $event) || (ctx_r1.hiraSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_14_Template_input_input_63_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHIRAFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "mat-icon", 33);
    \u0275\u0275text(65, "search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 34)(67, "table")(68, "thead")(69, "tr")(70, "th");
    \u0275\u0275text(71, "\uBCF4\uACE0\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "\uBCF4\uACE0 \uC720\uD615");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "\uC218\uB7C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "\uBCF4\uACE0 \uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "\uC791\uC131\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "\uD655\uC778\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th");
    \u0275\u0275text(87, "\uC81C\uCD9C\uC77C\uC2DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th");
    \u0275\u0275text(89, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tbody");
    \u0275\u0275template(91, ErpGeneratorComponent_div_14_tr_91_Template, 30, 28, "tr", 249)(92, ErpGeneratorComponent_div_14_tr_92_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.hiraReports.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getHIRAReportCount("draft"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getHIRAReportCount("submitted"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getHIRAReportCount("accepted"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getHIRAReportCount("rejected"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hiraReportTypeFilter);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hiraStatusFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hiraSearchQuery);
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.filteredHIRAReports);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredHIRAReports.length === 0);
  }
}
function ErpGeneratorComponent_div_15_tr_68_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 273);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const serial_r75 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4E1} ", serial_r75.rfidTag);
  }
}
function ErpGeneratorComponent_div_15_tr_68_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 257);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_15_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, ErpGeneratorComponent_div_15_tr_68_span_5_Template, 2, 1, "span", 269)(6, ErpGeneratorComponent_div_15_tr_68_span_6_Template, 2, 0, "span", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 177);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 270);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "button", 271);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_tr_68_Template_button_click_23_listener() {
      const serial_r75 = \u0275\u0275restoreView(_r74).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewSerialTimeline(serial_r75));
    });
    \u0275\u0275text(24, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 272);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_tr_68_Template_button_click_25_listener() {
      const serial_r75 = \u0275\u0275restoreView(_r74).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printSerialLabel(serial_r75));
    });
    \u0275\u0275text(26, "\u{1F5A8}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const serial_r75 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("recalled-row", serial_r75.status === "recalled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(serial_r75.serialNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", serial_r75.rfidTag);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !serial_r75.rfidTag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serial_r75.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serial_r75.lotNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("available", serial_r75.status === "available")("distributed", serial_r75.status === "distributed")("recalled", serial_r75.status === "recalled")("expired", serial_r75.status === "expired");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSerialStatusLabel(serial_r75.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serial_r75.trackingHistory.length > 0 ? serial_r75.trackingHistory[serial_r75.trackingHistory.length - 1].location : "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serial_r75.trackingHistory.length > 0 ? \u0275\u0275pipeBind2(18, 19, serial_r75.trackingHistory[serial_r75.trackingHistory.length - 1].timestamp, "yyyy-MM-dd HH:mm") : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", serial_r75.trackingHistory.length, "\uAC74");
  }
}
function ErpGeneratorComponent_div_15_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "\uC77C\uB828\uBC88\uD638 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 20)(2, "h2");
    \u0275\u0275text(3, "\u{1F522} \uC77C\uB828\uBC88\uD638 \uCD94\uC801 \uC2DC\uC2A4\uD15C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportSerialNumbers());
    });
    \u0275\u0275text(6, "\u{1F4CA} \uB0B4\uBCF4\uB0B4\uAE30");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 261)(8, "mat-form-field", 262)(9, "mat-label");
    \u0275\u0275text(10, "\uAC80\uC0C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 263);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.serialSearchQuery, $event) || (ctx_r1.serialSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ErpGeneratorComponent_div_15_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSerialSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 33);
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 264)(15, "mat-chip-listbox", 265)(16, "mat-chip-option", 266);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_Template_mat_chip_option_click_16_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSerialStatusFilter("all"));
    });
    \u0275\u0275text(17, "\uC804\uCCB4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-chip-option", 266);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_Template_mat_chip_option_click_18_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSerialStatusFilter("available"));
    });
    \u0275\u0275text(19, "\uC0AC\uC6A9\uAC00\uB2A5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-chip-option", 266);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_Template_mat_chip_option_click_20_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSerialStatusFilter("distributed"));
    });
    \u0275\u0275text(21, "\uCD9C\uD558\uB428");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-chip-option", 266);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_15_Template_mat_chip_option_click_22_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSerialStatusFilter("recalled"));
    });
    \u0275\u0275text(23, "\uD68C\uC218\uB428");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 267)(25, "div", 69)(26, "div", 72);
    \u0275\u0275text(27, "\uC804\uCCB4 \uC77C\uB828\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 73);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 223)(31, "div", 72);
    \u0275\u0275text(32, "\uC0AC\uC6A9\uAC00\uB2A5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 73);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 242)(36, "div", 72);
    \u0275\u0275text(37, "\uCD9C\uD558\uB428");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 73);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 153)(41, "div", 72);
    \u0275\u0275text(42, "\uD68C\uC218\uB428");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 73);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 34)(46, "table")(47, "thead")(48, "tr")(49, "th");
    \u0275\u0275text(50, "\uC77C\uB828\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "RFID \uD0DC\uADF8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "\uC81C\uC870\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "\uD604\uC7AC \uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "\uD604\uC7AC \uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "\uCD5C\uC885 \uC774\uB3D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "\uCD94\uC801 \uC774\uBCA4\uD2B8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "\uC791\uC5C5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "tbody");
    \u0275\u0275template(68, ErpGeneratorComponent_div_15_tr_68_Template, 27, 22, "tr", 268)(69, ErpGeneratorComponent_div_15_tr_69_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.serialSearchQuery);
    \u0275\u0275advance(5);
    \u0275\u0275property("selected", ctx_r1.serialStatusFilter === "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", ctx_r1.serialStatusFilter === "available");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", ctx_r1.serialStatusFilter === "distributed");
    \u0275\u0275advance(2);
    \u0275\u0275property("selected", ctx_r1.serialStatusFilter === "recalled");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.serialNumbers.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getSerialNumberCount("available"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getSerialNumberCount("distributed"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getSerialNumberCount("recalled"));
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.filteredSerialNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredSerialNumbers.length === 0);
  }
}
function ErpGeneratorComponent_app_erp_right_sidebar_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-erp-right-sidebar", 274);
    \u0275\u0275listener("action", function ErpGeneratorComponent_app_erp_right_sidebar_16_Template_app_erp_right_sidebar_action_0_listener($event) {
      \u0275\u0275restoreView(_r76);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onErpRightAction($event));
    })("close", function ErpGeneratorComponent_app_erp_right_sidebar_16_Template_app_erp_right_sidebar_close_0_listener() {
      \u0275\u0275restoreView(_r76);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRightPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_17_div_43_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 136);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 136);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 136)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 116)(13, "button", 299);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_div_43_tr_20_Template_button_click_13_listener() {
      const i_r79 = \u0275\u0275restoreView(_r78).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOrderItem(i_r79));
    });
    \u0275\u0275text(14, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r80 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r80.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r80.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r80.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r80.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r80.totalPrice));
  }
}
function ErpGeneratorComponent_div_17_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280)(1, "h3");
    \u0275\u0275text(2, "\uBC1C\uC8FC \uD488\uBAA9 \uBAA9\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 295)(4, "table", 296)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "\uD488\uBAA9\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\uD488\uBAA9\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\uC218\uB7C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\uB2E8\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "\uC0AD\uC81C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ErpGeneratorComponent_div_17_div_43_tr_20_Template, 15, 5, "tr", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr")(23, "td", 297)(24, "strong");
    \u0275\u0275text(25, "\uD569\uACC4:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 136)(27, "strong", 298);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "td");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.newOrder.items);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.calculateNewOrderTotal()));
  }
}
function ErpGeneratorComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderModal());
    });
    \u0275\u0275elementStart(1, "div", 276);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r77);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h2");
    \u0275\u0275text(4, "\uC0C8 \uBC1C\uC8FC \uB4F1\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 280)(9, "h3");
    \u0275\u0275text(10, "\uAC70\uB798\uCC98 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 281)(12, "mat-label");
    \u0275\u0275text(13, "\uAC70\uB798\uCC98\uBA85 ");
    \u0275\u0275elementStart(14, "span", 282);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 283);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_17_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newOrder.supplier, $event) || (ctx_r1.newOrder.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 281)(18, "mat-label");
    \u0275\u0275text(19, "\uBE44\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 284);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_17_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newOrder.notes, $event) || (ctx_r1.newOrder.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 280)(22, "h3");
    \u0275\u0275text(23, "\uD488\uBAA9 \uCD94\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 285)(25, "mat-form-field", 286)(26, "mat-label");
    \u0275\u0275text(27, "\uD488\uBAA9\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 287);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_17_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newOrderItem.productCode, $event) || (ctx_r1.newOrderItem.productCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-form-field", 288)(30, "mat-label");
    \u0275\u0275text(31, "\uD488\uBAA9\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 289);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_17_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newOrderItem.productName, $event) || (ctx_r1.newOrderItem.productName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 286)(34, "mat-label");
    \u0275\u0275text(35, "\uC218\uB7C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 290);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_17_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newOrderItem.quantity, $event) || (ctx_r1.newOrderItem.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-form-field", 286)(38, "mat-label");
    \u0275\u0275text(39, "\uB2E8\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 291);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_17_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newOrderItem.unitPrice, $event) || (ctx_r1.newOrderItem.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 292);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addOrderItem());
    });
    \u0275\u0275text(42, "\uCD94\uAC00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, ErpGeneratorComponent_div_17_div_43_Template, 30, 2, "div", 293);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 294)(45, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderModal());
    });
    \u0275\u0275text(46, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_17_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveOrder());
    });
    \u0275\u0275text(48, "\uBC1C\uC8FC \uB4F1\uB85D");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOrder.supplier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOrder.notes);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOrderItem.productCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOrderItem.productName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOrderItem.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOrderItem.unitPrice);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.newOrder.items && ctx_r1.newOrder.items.length > 0);
  }
}
function ErpGeneratorComponent_div_18_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 303)(1, "span", 304);
    \u0275\u0275text(2, "\uBE44\uACE0:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 305);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedOrder.notes);
  }
}
function ErpGeneratorComponent_div_18_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 136);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 136);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 136)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r82 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r82.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r82.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r82.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r82.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r82.totalPrice));
  }
}
function ErpGeneratorComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderDetailModal());
    });
    \u0275\u0275elementStart(1, "div", 300);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r81);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h2");
    \u0275\u0275text(4, "\uBC1C\uC8FC \uC0C1\uC138\uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderDetailModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 301)(9, "h3");
    \u0275\u0275text(10, "\uBC1C\uC8FC \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 302)(12, "div", 303)(13, "span", 304);
    \u0275\u0275text(14, "\uBC1C\uC8FC\uBC88\uD638:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 305)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 303)(19, "span", 304);
    \u0275\u0275text(20, "\uBC1C\uC8FC\uC77C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 305);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 303)(24, "span", 304);
    \u0275\u0275text(25, "\uAC70\uB798\uCC98:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 305);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 303)(29, "span", 304);
    \u0275\u0275text(30, "\uB2F4\uB2F9\uC790:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 305);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 303)(34, "span", 304);
    \u0275\u0275text(35, "\uC0C1\uD0DC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 305)(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(39, ErpGeneratorComponent_div_18_div_39_Template, 5, 1, "div", 306);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 301)(41, "h3");
    \u0275\u0275text(42, "\uBC1C\uC8FC \uD488\uBAA9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "table", 307)(44, "thead")(45, "tr")(46, "th");
    \u0275\u0275text(47, "\uD488\uBAA9\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "\uD488\uBAA9\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "\uC218\uB7C9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "\uB2E8\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "\uAE08\uC561");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "tbody");
    \u0275\u0275template(57, ErpGeneratorComponent_div_18_tr_57_Template, 12, 5, "tr", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "tfoot")(59, "tr")(60, "td", 297)(61, "strong");
    \u0275\u0275text(62, "\uCD1D \uBC1C\uC8FC\uAE08\uC561:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "td", 136)(64, "strong", 298);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(66, "div", 301)(67, "h3");
    \u0275\u0275text(68, "\uC0C1\uD0DC \uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 308)(70, "button", 309);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeOrderStatus(ctx_r1.selectedOrder, "pending"));
    });
    \u0275\u0275text(71, " \uB300\uAE30 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 310);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeOrderStatus(ctx_r1.selectedOrder, "approved"));
    });
    \u0275\u0275text(73, " \uC2B9\uC778 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 311);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeOrderStatus(ctx_r1.selectedOrder, "completed"));
    });
    \u0275\u0275text(75, " \uC644\uB8CC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 312);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeOrderStatus(ctx_r1.selectedOrder, "cancelled"));
    });
    \u0275\u0275text(77, " \uCDE8\uC18C ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 294)(79, "button", 221);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.deleteOrder(ctx_r1.selectedOrder);
      return \u0275\u0275resetView(ctx_r1.closeOrderDetailModal());
    });
    \u0275\u0275text(80, "\uBC1C\uC8FC \uC0AD\uC81C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_18_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeOrderDetailModal());
    });
    \u0275\u0275text(82, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.selectedOrder.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedOrder.orderDate));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedOrder.supplier);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedOrder.createdBy);
    \u0275\u0275advance(5);
    \u0275\u0275classMap("status-badge " + ctx_r1.getStatusClass(ctx_r1.selectedOrder.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.selectedOrder.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedOrder.notes);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.selectedOrder.items);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedOrder.totalAmount));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.selectedOrder.status === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.selectedOrder.status === "approved");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.selectedOrder.status === "completed");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.selectedOrder.status === "cancelled");
  }
}
function ErpGeneratorComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInventoryModal());
    });
    \u0275\u0275elementStart(1, "div", 313);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r83);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h3");
    \u0275\u0275text(4, "\uC7AC\uACE0 \uB4F1\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInventoryModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 314)(9, "mat-form-field", 315)(10, "mat-label");
    \u0275\u0275text(11, "\uC81C\uD488\uCF54\uB4DC *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 316);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.productCode, $event) || (ctx_r1.newInventory.productCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 315)(14, "mat-label");
    \u0275\u0275text(15, "\uC81C\uD488\uBA85 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 317);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.productName, $event) || (ctx_r1.newInventory.productName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 315)(18, "mat-label");
    \u0275\u0275text(19, "\uCE74\uD14C\uACE0\uB9AC *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 318);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_mat_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.category, $event) || (ctx_r1.newInventory.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "mat-option", 319);
    \u0275\u0275text(22, "\uC120\uD0DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 50);
    \u0275\u0275text(24, "\uC758\uC57D\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-option", 51);
    \u0275\u0275text(26, "\uC758\uB8CC\uAE30\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-option", 52);
    \u0275\u0275text(28, "\uC18C\uBAA8\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 53);
    \u0275\u0275text(30, "\uC704\uC0DD\uC6A9\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 54);
    \u0275\u0275text(32, "\uC0AC\uBB34\uC6A9\uD488");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "mat-form-field", 315)(34, "mat-label");
    \u0275\u0275text(35, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 320);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.supplier, $event) || (ctx_r1.newInventory.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-form-field", 315)(38, "mat-label");
    \u0275\u0275text(39, "\uD604\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 321);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.currentStock, $event) || (ctx_r1.newInventory.currentStock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 315)(42, "mat-label");
    \u0275\u0275text(43, "\uCD5C\uC18C\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 321);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.minStock, $event) || (ctx_r1.newInventory.minStock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-form-field", 315)(46, "mat-label");
    \u0275\u0275text(47, "\uCD5C\uB300\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 321);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.maxStock, $event) || (ctx_r1.newInventory.maxStock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "mat-form-field", 315)(50, "mat-label");
    \u0275\u0275text(51, "\uB2E8\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 321);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.unitPrice, $event) || (ctx_r1.newInventory.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-form-field", 315)(54, "mat-label");
    \u0275\u0275text(55, "\uBCF4\uAD00\uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 322);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_19_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInventory.location, $event) || (ctx_r1.newInventory.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 294)(58, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_19_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInventoryModal());
    });
    \u0275\u0275text(59, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_19_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r83);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveInventory());
    });
    \u0275\u0275text(61, "\uB4F1\uB85D");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.productCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.productName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.category);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.supplier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.currentStock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.minStock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.maxStock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.unitPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInventory.location);
  }
}
function ErpGeneratorComponent_div_20_div_70_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 336)(1, "div", 337);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 338)(4, "div", 339);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 340);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 341);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 342);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const history_r85 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + history_r85.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(history_r85.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", history_r85.type === "out" ? "-" : "+", "", history_r85.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", history_r85.beforeStock, " \u2192 ", history_r85.afterStock, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(history_r85.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", history_r85.createdBy, " \xB7 ", ctx_r1.formatDate(history_r85.createdAt));
  }
}
function ErpGeneratorComponent_div_20_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 334);
    \u0275\u0275template(1, ErpGeneratorComponent_div_20_div_70_div_1_Template, 12, 10, "div", 335);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getStockHistories(ctx_r1.selectedInventory.productCode));
  }
}
function ErpGeneratorComponent_div_20_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "p");
    \u0275\u0275text(2, "\uC785\uCD9C\uACE0 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInventoryDetailModal());
    });
    \u0275\u0275elementStart(1, "div", 323);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r84);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h3");
    \u0275\u0275text(4, "\uC7AC\uACE0 \uC0C1\uC138 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInventoryDetailModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 301)(9, "h4");
    \u0275\u0275text(10, "\uAE30\uBCF8 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 302)(12, "div", 303)(13, "label");
    \u0275\u0275text(14, "\uC81C\uD488\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 207);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 303)(18, "label");
    \u0275\u0275text(19, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 207);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 303)(23, "label");
    \u0275\u0275text(24, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 207);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 303)(28, "label");
    \u0275\u0275text(29, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 207);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 303)(33, "label");
    \u0275\u0275text(34, "\uBCF4\uAD00\uC704\uCE58");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 207);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 303)(38, "label");
    \u0275\u0275text(39, "\uB2E8\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 207);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 301)(43, "h4");
    \u0275\u0275text(44, "\uC7AC\uACE0 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 324)(46, "div", 325)(47, "div", 326);
    \u0275\u0275text(48, "\uD604\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 327);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 325)(52, "div", 326);
    \u0275\u0275text(53, "\uCD5C\uC18C\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 328);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 325)(57, "div", 326);
    \u0275\u0275text(58, "\uCD5C\uB300\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 329);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 325)(62, "div", 326);
    \u0275\u0275text(63, "\uC7AC\uACE0\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 330)(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 301)(68, "h4");
    \u0275\u0275text(69, "\uCD5C\uADFC \uC785\uCD9C\uACE0 \uC774\uB825");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, ErpGeneratorComponent_div_20_div_70_Template, 2, 1, "div", 331)(71, ErpGeneratorComponent_div_20_div_71_Template, 3, 0, "div", 332);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 333)(73, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_20_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openStockAdjustModal(ctx_r1.selectedInventory));
    });
    \u0275\u0275text(74, " \u{1F4DD} \uC7AC\uACE0 \uC870\uC815 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 294)(76, "button", 221);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_20_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.deleteInventory(ctx_r1.selectedInventory);
      return \u0275\u0275resetView(ctx_r1.closeInventoryDetailModal());
    });
    \u0275\u0275text(77, "\uC7AC\uACE0 \uC0AD\uC81C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_20_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInventoryDetailModal());
    });
    \u0275\u0275text(79, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.productCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.productName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.supplier);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedInventory.unitPrice));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("low", ctx_r1.selectedInventory.status === "low" || ctx_r1.selectedInventory.status === "out");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedInventory.currentStock, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.minStock);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.maxStock);
    \u0275\u0275advance(5);
    \u0275\u0275classMap("status-badge " + ctx_r1.getStockStatusClass(ctx_r1.selectedInventory.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStockStatusLabel(ctx_r1.selectedInventory.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.getStockHistories(ctx_r1.selectedInventory.productCode).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getStockHistories(ctx_r1.selectedInventory.productCode).length === 0);
  }
}
function ErpGeneratorComponent_div_21_mat_hint_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uC870\uC815 \uD6C4: ", ctx_r1.selectedInventory.currentStock + (ctx_r1.stockAdjustment.quantity || 0), " ");
  }
}
function ErpGeneratorComponent_div_21_mat_hint_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uC870\uC815 \uD6C4: ", ctx_r1.selectedInventory.currentStock - (ctx_r1.stockAdjustment.quantity || 0) >= 0 ? ctx_r1.selectedInventory.currentStock - (ctx_r1.stockAdjustment.quantity || 0) : 0, " ");
  }
}
function ErpGeneratorComponent_div_21_mat_hint_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1, " \uC785\uB825\uD55C \uC218\uB7C9\uC73C\uB85C \uC7AC\uACE0\uAC00 \uC870\uC815\uB429\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStockAdjustModal());
    });
    \u0275\u0275elementStart(1, "div", 344);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r86);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h3");
    \u0275\u0275text(4, "\uC7AC\uACE0 \uC870\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStockAdjustModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 345)(9, "div", 346);
    \u0275\u0275text(10, "\uD604\uC7AC\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 347);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 281)(14, "mat-label");
    \u0275\u0275text(15, "\uC870\uC815 \uC720\uD615 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 318);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_21_Template_mat_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.stockAdjustment.type, $event) || (ctx_r1.stockAdjustment.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "mat-option", 348);
    \u0275\u0275text(18, "\uC785\uACE0 (+)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 57);
    \u0275\u0275text(20, "\uCD9C\uACE0 (-)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 349);
    \u0275\u0275text(22, "\uC7AC\uACE0\uC870\uC815 (=)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "mat-form-field", 281)(24, "mat-label");
    \u0275\u0275text(25, "\uC218\uB7C9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 350);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_21_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.stockAdjustment.quantity, $event) || (ctx_r1.stockAdjustment.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ErpGeneratorComponent_div_21_mat_hint_27_Template, 2, 1, "mat-hint", 37)(28, ErpGeneratorComponent_div_21_mat_hint_28_Template, 2, 1, "mat-hint", 37)(29, ErpGeneratorComponent_div_21_mat_hint_29_Template, 2, 0, "mat-hint", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 281)(31, "mat-label");
    \u0275\u0275text(32, "\uC0AC\uC720 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "textarea", 351);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_21_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.stockAdjustment.reason, $event) || (ctx_r1.stockAdjustment.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 294)(35, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_21_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStockAdjustModal());
    });
    \u0275\u0275text(36, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_21_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r86);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.adjustStock());
    });
    \u0275\u0275text(38, "\uC870\uC815");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.selectedInventory.currentStock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.stockAdjustment.type);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.stockAdjustment.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stockAdjustment.type === "in");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stockAdjustment.type === "out");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stockAdjustment.type === "adjust");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.stockAdjustment.reason);
  }
}
function ErpGeneratorComponent_div_22_div_104_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 378);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 379);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_div_104_span_1_Template_button_click_2_listener() {
      const i_r89 = \u0275\u0275restoreView(_r88).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSupplierProduct(i_r89));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r90 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r90, " ");
  }
}
function ErpGeneratorComponent_div_22_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 376);
    \u0275\u0275template(1, ErpGeneratorComponent_div_22_div_104_span_1_Template, 4, 1, "span", 377);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.newSupplier.products);
  }
}
function ErpGeneratorComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierModal());
    });
    \u0275\u0275elementStart(1, "div", 323);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r87);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h3");
    \u0275\u0275text(4, "\uAC70\uB798\uCC98 \uB4F1\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 314)(9, "mat-form-field", 315)(10, "mat-label");
    \u0275\u0275text(11, "\uAC70\uB798\uCC98\uCF54\uB4DC *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 352);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.code, $event) || (ctx_r1.newSupplier.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 315)(14, "mat-label");
    \u0275\u0275text(15, "\uC0C1\uD638\uBA85 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 353);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.name, $event) || (ctx_r1.newSupplier.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 315)(18, "mat-label");
    \u0275\u0275text(19, "\uC0AC\uC5C5\uC790\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 354);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.businessNumber, $event) || (ctx_r1.newSupplier.businessNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 315)(22, "mat-label");
    \u0275\u0275text(23, "\uB300\uD45C\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 355);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.representative, $event) || (ctx_r1.newSupplier.representative = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-form-field", 315)(26, "mat-label");
    \u0275\u0275text(27, "\uCE74\uD14C\uACE0\uB9AC *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 318);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_mat_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.category, $event) || (ctx_r1.newSupplier.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "mat-option", 319);
    \u0275\u0275text(30, "\uC120\uD0DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 50);
    \u0275\u0275text(32, "\uC758\uC57D\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 51);
    \u0275\u0275text(34, "\uC758\uB8CC\uAE30\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 52);
    \u0275\u0275text(36, "\uC18C\uBAA8\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 53);
    \u0275\u0275text(38, "\uC704\uC0DD\uC6A9\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 54);
    \u0275\u0275text(40, "\uC0AC\uBB34\uC6A9\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-option", 63);
    \u0275\u0275text(42, "\uAC74\uAC15\uC2DD\uD488");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "mat-form-field", 315)(44, "mat-label");
    \u0275\u0275text(45, "\uC5F0\uB77D\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 356);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.contact, $event) || (ctx_r1.newSupplier.contact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-icon", 357);
    \u0275\u0275text(48, "phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "mat-form-field", 315)(50, "mat-label");
    \u0275\u0275text(51, "\uC774\uBA54\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 358);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.email, $event) || (ctx_r1.newSupplier.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-icon", 357);
    \u0275\u0275text(54, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "mat-form-field", 315)(56, "mat-label");
    \u0275\u0275text(57, "\uC2E0\uC6A9\uB4F1\uAE09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-select", 359);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_mat_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.creditRating, $event) || (ctx_r1.newSupplier.creditRating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(59, "mat-option", 360);
    \u0275\u0275text(60, "\uC6B0\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "mat-option", 361);
    \u0275\u0275text(62, "\uC591\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-option", 362);
    \u0275\u0275text(64, "\uBCF4\uD1B5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-option", 363);
    \u0275\u0275text(66, "\uBD88\uB7C9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "mat-form-field", 315)(68, "mat-label");
    \u0275\u0275text(69, "\uACB0\uC81C\uC870\uAC74");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-select", 359);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_mat_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.paymentTerms, $event) || (ctx_r1.newSupplier.paymentTerms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(71, "mat-option", 364);
    \u0275\u0275text(72, "\uD604\uAE08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-option", 365);
    \u0275\u0275text(74, "30\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "mat-option", 366);
    \u0275\u0275text(76, "60\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "mat-option", 367);
    \u0275\u0275text(78, "90\uC77C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "mat-form-field", 315)(80, "mat-label");
    \u0275\u0275text(81, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-select", 359);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_mat_select_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.status, $event) || (ctx_r1.newSupplier.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(83, "mat-option", 64);
    \u0275\u0275text(84, "\uD65C\uC131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-option", 65);
    \u0275\u0275text(86, "\uBE44\uD65C\uC131");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(87, "mat-form-field", 281)(88, "mat-label");
    \u0275\u0275text(89, "\uC8FC\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 368);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.address, $event) || (ctx_r1.newSupplier.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "mat-icon", 357);
    \u0275\u0275text(92, "location_on");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 369)(94, "label");
    \u0275\u0275text(95, "\uCDE8\uAE09 \uC81C\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 370)(97, "div", 371)(98, "mat-form-field", 288)(99, "mat-label");
    \u0275\u0275text(100, "\uC81C\uD488\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "input", 372);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_input_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplierProduct, $event) || (ctx_r1.newSupplierProduct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ErpGeneratorComponent_div_22_Template_input_keyup_enter_101_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSupplierProduct());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "button", 373);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSupplierProduct());
    });
    \u0275\u0275text(103, "\uCD94\uAC00");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(104, ErpGeneratorComponent_div_22_div_104_Template, 2, 1, "div", 374);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 369)(106, "label");
    \u0275\u0275text(107, "\uBE44\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "textarea", 375);
    \u0275\u0275twoWayListener("ngModelChange", function ErpGeneratorComponent_div_22_Template_textarea_ngModelChange_108_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.notes, $event) || (ctx_r1.newSupplier.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 294)(110, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierModal());
    });
    \u0275\u0275text(111, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "button", 92);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_22_Template_button_click_112_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSupplier());
    });
    \u0275\u0275text(113, "\uB4F1\uB85D");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.businessNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.representative);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.category);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.contact);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.creditRating);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.paymentTerms);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.status);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.address);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplierProduct);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.newSupplier.products && ctx_r1.newSupplier.products.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.notes);
  }
}
function ErpGeneratorComponent_div_23_div_83_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 387);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r92 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r92, " ");
  }
}
function ErpGeneratorComponent_div_23_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 301)(1, "h4");
    \u0275\u0275text(2, "\uCDE8\uAE09 \uC81C\uD488");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 385);
    \u0275\u0275template(4, ErpGeneratorComponent_div_23_div_83_span_4_Template, 2, 1, "span", 386);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedSupplier.products);
  }
}
function ErpGeneratorComponent_div_23_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 301)(1, "h4");
    \u0275\u0275text(2, "\uBE44\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 388);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSupplier.notes, " ");
  }
}
function ErpGeneratorComponent_div_23_div_88_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 398);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r93 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r93.reference);
  }
}
function ErpGeneratorComponent_div_23_div_88_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 391)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 392)(4, "div", 393);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 394)(7, "span", 395);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ErpGeneratorComponent_div_23_div_88_div_1_span_9_Template, 2, 1, "span", 396);
    \u0275\u0275elementStart(10, "span", 397);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const txn_r93 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("txn-type " + ctx_r1.getTransactionTypeClass(txn_r93.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTransactionTypeLabel(txn_r93.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(txn_r93.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r93.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", txn_r93.reference !== "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(txn_r93.date));
  }
}
function ErpGeneratorComponent_div_23_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 389);
    \u0275\u0275template(1, ErpGeneratorComponent_div_23_div_88_div_1_Template, 12, 7, "div", 390);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSupplierTransactions(ctx_r1.selectedSupplier.code));
  }
}
function ErpGeneratorComponent_div_23_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "p");
    \u0275\u0275text(2, "\uAC70\uB798 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r91);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierDetailModal());
    });
    \u0275\u0275elementStart(1, "div", 323);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r91);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h3");
    \u0275\u0275text(4, "\uAC70\uB798\uCC98 \uC0C1\uC138 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r91);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierDetailModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 301)(9, "h4");
    \u0275\u0275text(10, "\uAE30\uBCF8 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 302)(12, "div", 303)(13, "label");
    \u0275\u0275text(14, "\uAC70\uB798\uCC98\uCF54\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 207);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 303)(18, "label");
    \u0275\u0275text(19, "\uC0C1\uD638\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 207);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 303)(23, "label");
    \u0275\u0275text(24, "\uC0AC\uC5C5\uC790\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 207);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 303)(28, "label");
    \u0275\u0275text(29, "\uB300\uD45C\uC790");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 207);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 303)(33, "label");
    \u0275\u0275text(34, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 207);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 303)(38, "label");
    \u0275\u0275text(39, "\uC5F0\uB77D\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 207);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 303)(43, "label");
    \u0275\u0275text(44, "\uC774\uBA54\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 207);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 303)(48, "label");
    \u0275\u0275text(49, "\uB4F1\uB85D\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 207);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 301)(53, "h4");
    \u0275\u0275text(54, "\uC8FC\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 380);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 301)(58, "h4");
    \u0275\u0275text(59, "\uAC70\uB798 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 381)(61, "div", 382)(62, "div", 346);
    \u0275\u0275text(63, "\uC2E0\uC6A9\uB4F1\uAE09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 347)(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 382)(68, "div", 346);
    \u0275\u0275text(69, "\uACB0\uC81C\uC870\uAC74");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 347);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 382)(73, "div", 346);
    \u0275\u0275text(74, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 347)(76, "span");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 382)(79, "div", 346);
    \u0275\u0275text(80, "\uCD5C\uADFC\uAC70\uB798\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 347);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(83, ErpGeneratorComponent_div_23_div_83_Template, 5, 1, "div", 383)(84, ErpGeneratorComponent_div_23_div_84_Template, 5, 1, "div", 383);
    \u0275\u0275elementStart(85, "div", 301)(86, "h4");
    \u0275\u0275text(87, "\uCD5C\uADFC \uAC70\uB798 \uB0B4\uC5ED");
    \u0275\u0275elementEnd();
    \u0275\u0275template(88, ErpGeneratorComponent_div_23_div_88_Template, 2, 1, "div", 384)(89, ErpGeneratorComponent_div_23_div_89_Template, 3, 0, "div", 332);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 294)(91, "button", 221);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_23_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r91);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.deleteSupplier(ctx_r1.selectedSupplier);
      return \u0275\u0275resetView(ctx_r1.closeSupplierDetailModal());
    });
    \u0275\u0275text(92, "\uAC70\uB798\uCC98 \uC0AD\uC81C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_23_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r91);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSupplierDetailModal());
    });
    \u0275\u0275text(94, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.code);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.businessNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.representative || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.contact || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSupplier.createdAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSupplier.address || "-", " ");
    \u0275\u0275advance(9);
    \u0275\u0275classMap("credit-badge " + ctx_r1.getCreditRatingClass(ctx_r1.selectedSupplier.creditRating));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCreditRatingLabel(ctx_r1.selectedSupplier.creditRating), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.paymentTerms || "-");
    \u0275\u0275advance(5);
    \u0275\u0275classMap("status-badge " + ctx_r1.getSupplierStatusClass(ctx_r1.selectedSupplier.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSupplierStatusLabel(ctx_r1.selectedSupplier.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier.lastTransactionDate ? ctx_r1.formatDate(ctx_r1.selectedSupplier.lastTransactionDate) : "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSupplier.products && ctx_r1.selectedSupplier.products.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSupplier.notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.getSupplierTransactions(ctx_r1.selectedSupplier.code).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSupplierTransactions(ctx_r1.selectedSupplier.code).length === 0);
  }
}
function ErpGeneratorComponent_div_24_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 404)(1, "label");
    \u0275\u0275text(2, "\uACB0\uC81C\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 207);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSettlement.paidDate));
  }
}
function ErpGeneratorComponent_div_24_div_63_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detail_r95 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(detail_r95.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(detail_r95.orderDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(detail_r95.amount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detail_r95.status);
  }
}
function ErpGeneratorComponent_div_24_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 419)(1, "table", 307)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\uBC1C\uC8FC\uBC88\uD638");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\uBC1C\uC8FC\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, ErpGeneratorComponent_div_24_div_63_tr_13_Template, 10, 4, "tr", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "tfoot")(15, "tr")(16, "td", 420)(17, "strong");
    \u0275\u0275text(18, "\uD569\uACC4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 40)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.settlementDetails);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.getSettlementDetailsTotal()));
  }
}
function ErpGeneratorComponent_div_24_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "p");
    \u0275\u0275text(2, "\uD574\uB2F9 \uAE30\uAC04\uC758 \uBC1C\uC8FC \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ErpGeneratorComponent_div_24_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 301)(1, "h4");
    \u0275\u0275text(2, "\uBE44\uACE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 388);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSettlement.notes, " ");
  }
}
function ErpGeneratorComponent_div_24_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 421);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_button_67_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r96);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmSettlement(ctx_r1.selectedSettlement));
    });
    \u0275\u0275text(1, " \u2713 \uC815\uC0B0 \uD655\uC815 ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_24_button_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 422);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_button_68_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r97);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.completePayment(ctx_r1.selectedSettlement));
    });
    \u0275\u0275text(1, " \u{1F4B3} \uACB0\uC81C \uC644\uB8CC ");
    \u0275\u0275elementEnd();
  }
}
function ErpGeneratorComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r94);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSettlementDetailModal());
    });
    \u0275\u0275elementStart(1, "div", 323);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r94);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 277)(3, "h3");
    \u0275\u0275text(4, "\uC815\uC0B0 \uC0C1\uC138 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 278);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r94);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSettlementDetailModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 279)(8, "div", 399)(9, "div", 400)(10, "div", 401)(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 402);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 403)(18, "div", 404)(19, "label");
    \u0275\u0275text(20, "\uAC70\uB798\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 207);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 404)(24, "label");
    \u0275\u0275text(25, "\uC815\uC0B0\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 207);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 404)(29, "label");
    \u0275\u0275text(30, "\uB9C8\uAC10\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 207);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, ErpGeneratorComponent_div_24_div_33_Template, 5, 1, "div", 405);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 301)(35, "h4");
    \u0275\u0275text(36, "\uC815\uC0B0 \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 406)(38, "div", 407)(39, "div", 408);
    \u0275\u0275text(40, "\uBC1C\uC8FC \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 409);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 407)(44, "div", 408);
    \u0275\u0275text(45, "\uACB0\uC81C \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 410);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 407)(49, "div", 408);
    \u0275\u0275text(50, "\uBC18\uD488 \uAE08\uC561");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 411);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 412)(54, "div", 408)(55, "strong");
    \u0275\u0275text(56, "\uBBF8\uACB0\uC81C\uC561");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 413)(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 301)(61, "h4");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, ErpGeneratorComponent_div_24_div_63_Template, 23, 2, "div", 414)(64, ErpGeneratorComponent_div_24_div_64_Template, 3, 0, "div", 332);
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, ErpGeneratorComponent_div_24_div_65_Template, 5, 1, "div", 383);
    \u0275\u0275elementStart(66, "div", 415);
    \u0275\u0275template(67, ErpGeneratorComponent_div_24_button_67_Template, 2, 0, "button", 416)(68, ErpGeneratorComponent_div_24_button_68_Template, 2, 0, "button", 417);
    \u0275\u0275elementStart(69, "button", 418);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r94);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportSettlement(ctx_r1.selectedSettlement));
    });
    \u0275\u0275text(70, " \u{1F4C4} \uC815\uC0B0\uC11C \uCD9C\uB825 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 294)(72, "button", 91);
    \u0275\u0275listener("click", function ErpGeneratorComponent_div_24_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r94);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSettlementDetailModal());
    });
    \u0275\u0275text(73, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.formatPeriod(ctx_r1.selectedSettlement.period), " \uC815\uC0B0\uC11C");
    \u0275\u0275advance();
    \u0275\u0275classMap("status-badge large " + ctx_r1.getSettlementStatusClass(ctx_r1.selectedSettlement.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSettlementStatusLabel(ctx_r1.selectedSettlement.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedSettlement.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedSettlement.supplierName, " (", ctx_r1.selectedSettlement.supplierCode, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatPeriod(ctx_r1.selectedSettlement.period));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSettlement.dueDate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSettlement.paidDate);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedSettlement.orderAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("- ", ctx_r1.formatCurrency(ctx_r1.selectedSettlement.paymentAmount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("- ", ctx_r1.formatCurrency(ctx_r1.selectedSettlement.returnAmount));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.selectedSettlement.balance));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\uAD00\uB828 \uBC1C\uC8FC \uB0B4\uC5ED (", ctx_r1.settlementDetails.length, "\uAC74)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settlementDetails.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settlementDetails.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSettlement.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedSettlement.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSettlement.status === "confirmed" || ctx_r1.selectedSettlement.status === "overdue");
  }
}
var ErpGeneratorComponent = class _ErpGeneratorComponent {
  router;
  notification;
  confirmationDialog;
  currentActiveMenu = "\uD648";
  isSearchMode = false;
  searchResults = [];
  totalRecordCount = 0;
  isProcessing = false;
  erpTitle = "";
  leftMenuExpanded = null;
  rightMenuExpanded = null;
  showRightPanel = false;
  showLeftPanel = false;
  // 발주 관련 데이터
  orders = [];
  filteredOrders = [];
  paginatedOrders = [];
  selectedOrder = null;
  showOrderModal = false;
  showOrderDetailModal = false;
  searchQuery = "";
  statusFilter = "all";
  // 재고 관련 데이터
  inventoryItems = [];
  filteredInventory = [];
  paginatedInventory = [];
  selectedInventory = null;
  showInventoryModal = false;
  showInventoryDetailModal = false;
  showStockAdjustModal = false;
  inventorySearchQuery = "";
  categoryFilter = "all";
  stockStatusFilter = "all";
  stockHistories = [];
  // 재고 페이징
  inventoryCurrentPage = 1;
  inventoryItemsPerPage = 10;
  inventoryTotalPages = 1;
  inventoryPageNumbers = [];
  // 거래처 관련 데이터
  suppliers = [];
  filteredSuppliers = [];
  paginatedSuppliers = [];
  selectedSupplier = null;
  showSupplierModal = false;
  showSupplierDetailModal = false;
  supplierSearchQuery = "";
  supplierCategoryFilter = "all";
  supplierStatusFilter = "all";
  transactions = [];
  // 거래처 페이징
  supplierCurrentPage = 1;
  supplierItemsPerPage = 10;
  supplierTotalPages = 1;
  supplierPageNumbers = [];
  // 정산 관련 데이터
  settlements = [];
  filteredSettlements = [];
  paginatedSettlements = [];
  selectedSettlement = null;
  showSettlementDetailModal = false;
  settlementSearchQuery = "";
  settlementStatusFilter = "all";
  settlementPeriodFilter = "all";
  settlementDetails = [];
  // 정산 페이징
  settlementCurrentPage = 1;
  settlementItemsPerPage = 10;
  settlementTotalPages = 1;
  settlementPageNumbers = [];
  // 정산 통계
  settlementStats = {
    totalBalance: 0,
    pendingCount: 0,
    overdueCount: 0,
    paidCount: 0
  };
  // ===== 의약품/의료기기 관리 데이터 =====
  // 의약품 마스터 데이터
  pharmaceuticals = [];
  medicalDevices = [];
  // 일련번호 추적
  serialNumbers = [];
  selectedSerialNumber = null;
  showSerialTrackingModal = false;
  // 배치/Lot 관리
  lotBatches = [];
  selectedLot = null;
  showLotDetailModal = false;
  expiringLots = [];
  // 유효기간 임박
  expiredLots = [];
  // 유효기간 경과
  // 바코드 스캔
  scannedBarcodes = [];
  showBarcodeScanModal = false;
  lastScannedBarcode = null;
  // KGSP 관리
  receiptInspections = [];
  filteredInspections = [];
  selectedInspection = null;
  showInspectionModal = false;
  showInspectionDetailModal = false;
  // 온습도 관리
  temperatureRecords = [];
  storageZones = [];
  selectedZone = null;
  temperatureAlerts = [];
  // 반품/회수 관리
  returnRecalls = [];
  filteredReturnRecalls = [];
  selectedReturnRecall = null;
  showReturnRecallModal = false;
  showReturnRecallDetailModal = false;
  // 심평원 보고
  hiraReports = [];
  filteredHIRAReports = [];
  selectedHIRAReport = null;
  showHIRAReportModal = false;
  hiraDeviceReports = [];
  // 보고서 관련 데이터
  reportType = "summary";
  reportPeriod = "month";
  selectedMonth = "";
  // 보고서 데이터
  summaryReport = null;
  categoryReports = [];
  supplierReports = [];
  monthlyTrends = [];
  // 보고서 리스트 데이터
  reportOrderList = [];
  filteredReportOrders = [];
  paginatedReportOrders = [];
  reportSearchQuery = "";
  reportStatusFilter = "all";
  reportCategoryFilter = "all";
  // 보고서 페이징
  reportCurrentPage = 1;
  reportItemsPerPage = 10;
  reportTotalPages = 1;
  reportPageNumbers = [];
  // 페이징 관련
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  pageNumbers = [];
  // 새 발주 데이터
  newOrder = {
    supplier: "",
    items: [],
    notes: "",
    status: "pending"
  };
  newOrderItem = {
    productCode: "",
    productName: "",
    quantity: 1,
    unitPrice: 0
  };
  // 새 재고 데이터
  newInventory = {
    productCode: "",
    productName: "",
    category: "",
    currentStock: 0,
    minStock: 0,
    maxStock: 0,
    unitPrice: 0,
    location: "",
    supplier: ""
  };
  // 재고 조정 데이터
  stockAdjustment = {
    type: "in",
    quantity: 0,
    reason: ""
  };
  // 새 거래처 데이터
  newSupplier = {
    code: "",
    name: "",
    businessNumber: "",
    representative: "",
    category: "",
    contact: "",
    email: "",
    address: "",
    products: [],
    status: "active",
    creditRating: "good",
    paymentTerms: "",
    notes: ""
  };
  newSupplierProduct = "";
  constructor(router, notification, confirmationDialog) {
    this.router = router;
    this.notification = notification;
    this.confirmationDialog = confirmationDialog;
  }
  ngOnInit() {
    this.initializeDarkMode();
    this.loadMockOrders();
    this.loadMockInventory();
    this.loadMockSuppliers();
    this.loadMockSettlements();
    this.initializeReports();
    this.initializePharmaceuticals();
    this.initializeMedicalDevices();
    this.initializeLotBatches();
    this.initializeSerialNumbers();
    this.initializeStorageZones();
    this.initializeTemperatureRecords();
    this.initializeReceiptInspections();
    this.initializeReturnRecalls();
    this.initializeHIRAReports();
    this.checkExpiringProducts();
    this.onInspectionFilterChange();
    this.onTempFilterChange();
    this.onReturnFilterChange();
    this.onHIRAFilterChange();
    this.onSerialSearch();
  }
  initializeDarkMode() {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      document.body.classList.add("dark-mode");
    }
  }
  loadMockOrders() {
    const suppliers = ["\uD55C\uAD6D\uC81C\uC57D", "\uB300\uD55C\uC57D\uD488", "\uAE00\uB85C\uBC8C\uC81C\uC57D", "\uBA54\uB514\uD31C", "\uBC14\uC774\uC624\uD14D", "\uD5EC\uC2A4\uCF00\uC5B4", "\uB77C\uC774\uD504\uC0AC\uC774\uC5B8\uC2A4", "\uBA54\uB514\uCEEC\uCF54\uB9AC\uC544"];
    const products = [
      { code: "MED-001", name: "\uD0C0\uC774\uB808\uB180", price: 5e3 },
      { code: "MED-002", name: "\uAC8C\uBCF4\uB9B0", price: 3e3 },
      { code: "MED-003", name: "\uC544\uC2A4\uD53C\uB9B0", price: 2e3 },
      { code: "MED-004", name: "\uC885\uD569\uBE44\uD0C0\uBBFC", price: 8e3 },
      { code: "MED-005", name: "\uC18C\uD654\uC81C", price: 4e3 },
      { code: "MED-006", name: "\uAC10\uAE30\uC57D", price: 6e3 },
      { code: "MED-007", name: "\uC9C4\uD1B5\uC81C", price: 7e3 },
      { code: "MED-008", name: "\uD56D\uC0DD\uC81C", price: 12e3 },
      { code: "MED-009", name: "\uC5F0\uACE0", price: 5500 },
      { code: "MED-010", name: "\uD30C\uC2A4", price: 3500 }
    ];
    const statuses = ["pending", "approved", "completed", "cancelled"];
    const users = ["\uD64D\uAE38\uB3D9", "\uAE40\uCCA0\uC218", "\uC774\uC601\uD76C", "\uBC15\uBBFC\uC218", "\uC815\uC218\uC9C4", "\uCD5C\uB3D9\uC6B1", "\uAC15\uBBF8\uB77C", "\uC724\uC131\uD638"];
    this.orders = [];
    for (let i = 1; i <= 100; i++) {
      const itemCount = Math.floor(Math.random() * 3) + 1;
      const items = [];
      for (let j = 0; j < itemCount; j++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const quantity = (Math.floor(Math.random() * 10) + 1) * 10;
        items.push({
          productCode: product.code,
          productName: product.name,
          quantity,
          unitPrice: product.price,
          totalPrice: quantity * product.price
        });
      }
      const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);
      const daysAgo = Math.floor(Math.random() * 90);
      const orderDate = /* @__PURE__ */ new Date();
      orderDate.setDate(orderDate.getDate() - daysAgo);
      this.orders.push({
        id: `PO-2025-${String(i).padStart(3, "0")}`,
        orderDate,
        supplier: suppliers[Math.floor(Math.random() * suppliers.length)],
        items,
        totalAmount,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        createdBy: users[Math.floor(Math.random() * users.length)],
        notes: i % 5 === 0 ? "\uAE34\uAE09 \uBC1C\uC8FC" : ""
      });
    }
    this.filteredOrders = [...this.orders];
    this.totalRecordCount = this.orders.length;
    this.updatePagination();
  }
  toggleLeftMenu(menuId) {
    this.leftMenuExpanded = this.leftMenuExpanded === menuId ? null : menuId;
  }
  toggleRightMenu(menuId) {
    this.rightMenuExpanded = this.rightMenuExpanded === menuId ? null : menuId;
  }
  onErpMenuChange(menu) {
    this.currentActiveMenu = menu;
  }
  onErpToolbarAction(action) {
    switch (action) {
      case "home":
        this.currentActiveMenu = "\uD648";
        break;
      case "toggle-left-menu":
        this.toggleLeftMenu("main");
        break;
      case "toggle-right-menu":
        this.toggleRightMenu("tools");
        break;
    }
  }
  onErpSearch(query) {
    this.isSearchMode = !!query;
  }
  onErpLeftAction(action) {
    if (action.type === "menu-click") {
      const menuMap = {
        "order": "\uBC1C\uC8FC\uAD00\uB9AC",
        "inventory": "\uC7AC\uACE0\uAD00\uB9AC",
        "client": "\uAC70\uB798\uCC98",
        "settlement": "\uC815\uC0B0",
        "reports": "\uBCF4\uACE0\uC11C",
        "inspection": "\uC785\uACE0\uAC80\uC218",
        "expiry": "\uC720\uD6A8\uAE30\uAC04",
        "temperature": "\uC628\uC2B5\uB3C4",
        "return": "\uBC18\uD488\uD68C\uC218",
        "serial": "\uC77C\uB828\uBC88\uD638",
        "hira": "\uC2EC\uD3C9\uC6D0"
      };
      const menuId = action.menuId;
      if (menuMap[menuId]) {
        this.currentActiveMenu = menuMap[menuId];
        if (menuId === "hira") {
          this.showRightPanel = true;
        }
        this.closeLeftPanel();
      }
    }
  }
  onErpRightAction(action) {
    if (action.type === "menu-click") {
      const menuMap = {
        "order": "\uBC1C\uC8FC\uAD00\uB9AC",
        "inventory": "\uC7AC\uACE0\uAD00\uB9AC",
        "client": "\uAC70\uB798\uCC98",
        "settlement": "\uC815\uC0B0",
        "reports": "\uBCF4\uACE0\uC11C",
        "inspection": "\uC785\uACE0\uAC80\uC218",
        "expiry": "\uC720\uD6A8\uAE30\uAC04",
        "temperature": "\uC628\uC2B5\uB3C4",
        "return": "\uBC18\uD488\uD68C\uC218",
        "serial": "\uC77C\uB828\uBC88\uD638",
        "hira": "\uC2EC\uD3C9\uC6D0"
      };
      const menuId = action.menuId;
      if (menuMap[menuId]) {
        this.currentActiveMenu = menuMap[menuId];
        this.closeRightPanel();
      }
    }
  }
  onCloseSidebar() {
    this.leftMenuExpanded = null;
  }
  onCloseRightSidebar() {
    this.rightMenuExpanded = null;
  }
  toggleRightPanel() {
    this.showRightPanel = !this.showRightPanel;
  }
  closeRightPanel() {
    this.showRightPanel = false;
  }
  toggleLeftPanel() {
    this.showLeftPanel = !this.showLeftPanel;
  }
  closeLeftPanel() {
    this.showLeftPanel = false;
  }
  // 발주 관련 메서드
  openOrderModal() {
    this.newOrder = {
      supplier: "",
      items: [],
      notes: "",
      status: "pending"
    };
    this.showOrderModal = true;
  }
  closeOrderModal() {
    this.showOrderModal = false;
  }
  addOrderItem() {
    if (this.newOrderItem.productCode && this.newOrderItem.productName && this.newOrderItem.quantity && this.newOrderItem.unitPrice) {
      const item = {
        productCode: this.newOrderItem.productCode,
        productName: this.newOrderItem.productName,
        quantity: this.newOrderItem.quantity,
        unitPrice: this.newOrderItem.unitPrice,
        totalPrice: this.newOrderItem.quantity * this.newOrderItem.unitPrice
      };
      this.newOrder.items.push(item);
      this.newOrderItem = {
        productCode: "",
        productName: "",
        quantity: 1,
        unitPrice: 0
      };
    }
  }
  removeOrderItem(index) {
    this.newOrder.items.splice(index, 1);
  }
  calculateNewOrderTotal() {
    return this.newOrder.items?.reduce((sum, item) => sum + item.totalPrice, 0) || 0;
  }
  saveOrder() {
    if (!this.newOrder.supplier || !this.newOrder.items || this.newOrder.items.length === 0) {
      this.notification.show("\uAC70\uB798\uCC98\uC640 \uD488\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    const order = {
      id: `PO-2025-${String(this.orders.length + 1).padStart(3, "0")}`,
      orderDate: /* @__PURE__ */ new Date(),
      supplier: this.newOrder.supplier,
      items: this.newOrder.items,
      totalAmount: this.calculateNewOrderTotal(),
      status: "pending",
      createdBy: "\uD604\uC7AC\uC0AC\uC6A9\uC790",
      notes: this.newOrder.notes || ""
    };
    this.orders.unshift(order);
    this.filterOrders();
    this.totalRecordCount = this.orders.length;
    this.closeOrderModal();
    this.notification.show("\uBC1C\uC8FC\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  viewOrderDetail(order) {
    this.selectedOrder = order;
    this.showOrderDetailModal = true;
  }
  closeOrderDetailModal() {
    this.showOrderDetailModal = false;
    this.selectedOrder = null;
  }
  filterOrders() {
    let filtered = [...this.orders];
    if (this.statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === this.statusFilter);
    }
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((order) => order.id.toLowerCase().includes(query) || order.supplier.toLowerCase().includes(query) || order.createdBy.toLowerCase().includes(query));
    }
    this.filteredOrders = filtered;
    this.currentPage = 1;
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredOrders.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedOrders = this.filteredOrders.slice(startIndex, endIndex);
    this.updatePageNumbers();
  }
  updatePageNumbers() {
    this.pageNumbers = [];
    const maxPages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxPages - 1);
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      this.pageNumbers.push(i);
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
  onSearchChange() {
    this.filterOrders();
  }
  onStatusFilterChange() {
    this.filterOrders();
  }
  getStatusLabel(status) {
    const labels = {
      "pending": "\uB300\uAE30",
      "approved": "\uC2B9\uC778",
      "completed": "\uC644\uB8CC",
      "cancelled": "\uCDE8\uC18C"
    };
    return labels[status] || status;
  }
  getStatusClass(status) {
    return `status-${status}`;
  }
  deleteOrder(order) {
    this.confirmationDialog.confirmDelete(`\uBC1C\uC8FC ${order.id}`).subscribe((result) => {
      if (result) {
        const index = this.orders.findIndex((o) => o.id === order.id);
        if (index > -1) {
          this.orders.splice(index, 1);
          this.filterOrders();
          this.totalRecordCount = this.orders.length;
          this.notification.show("\uBC1C\uC8FC\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  changeOrderStatus(order, newStatus) {
    const originalOrder = this.orders.find((o) => o.id === order.id);
    if (originalOrder) {
      originalOrder.status = newStatus;
    }
    order.status = newStatus;
    this.updatePagination();
    this.notification.showLong(`\uBC1C\uC8FC \uC0C1\uD0DC\uAC00 ${this.getStatusLabel(newStatus)}(\uC73C)\uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  formatCurrency(amount) {
    return amount.toLocaleString("ko-KR") + "\uC6D0";
  }
  // ========== 재고 관리 메서드 ==========
  loadMockInventory() {
    const categories = ["\uC758\uC57D\uD488", "\uC758\uB8CC\uAE30\uAE30", "\uC18C\uBAA8\uD488", "\uC704\uC0DD\uC6A9\uD488", "\uC0AC\uBB34\uC6A9\uD488"];
    const locations = ["A\uAD6C\uC5ED", "B\uAD6C\uC5ED", "C\uAD6C\uC5ED", "D\uAD6C\uC5ED", "E\uAD6C\uC5ED"];
    const suppliers = ["\uD55C\uAD6D\uC81C\uC57D", "\uB300\uD55C\uC57D\uD488", "\uAE00\uB85C\uBC8C\uC81C\uC57D", "\uBA54\uB514\uD31C", "\uBC14\uC774\uC624\uD14D"];
    const products = [
      { code: "MED-001", name: "\uD0C0\uC774\uB808\uB180", category: "\uC758\uC57D\uD488", price: 5e3 },
      { code: "MED-002", name: "\uAC8C\uBCF4\uB9B0", category: "\uC758\uC57D\uD488", price: 3e3 },
      { code: "MED-003", name: "\uC544\uC2A4\uD53C\uB9B0", category: "\uC758\uC57D\uD488", price: 2e3 },
      { code: "MED-004", name: "\uC885\uD569\uBE44\uD0C0\uBBFC", category: "\uC758\uC57D\uD488", price: 8e3 },
      { code: "MED-005", name: "\uC18C\uD654\uC81C", category: "\uC758\uC57D\uD488", price: 4e3 },
      { code: "DEV-001", name: "\uD608\uC555\uACC4", category: "\uC758\uB8CC\uAE30\uAE30", price: 5e4 },
      { code: "DEV-002", name: "\uCCB4\uC628\uACC4", category: "\uC758\uB8CC\uAE30\uAE30", price: 15e3 },
      { code: "DEV-003", name: "\uCCAD\uC9C4\uAE30", category: "\uC758\uB8CC\uAE30\uAE30", price: 8e4 },
      { code: "SUP-001", name: "\uC8FC\uC0AC\uAE30", category: "\uC18C\uBAA8\uD488", price: 500 },
      { code: "SUP-002", name: "\uBD95\uB300", category: "\uC18C\uBAA8\uD488", price: 1e3 },
      { code: "SUP-003", name: "\uAC70\uC988", category: "\uC18C\uBAA8\uD488", price: 800 },
      { code: "HYG-001", name: "\uB9C8\uC2A4\uD06C", category: "\uC704\uC0DD\uC6A9\uD488", price: 1500 },
      { code: "HYG-002", name: "\uC190\uC18C\uB3C5\uC81C", category: "\uC704\uC0DD\uC6A9\uD488", price: 3e3 },
      { code: "HYG-003", name: "\uC7A5\uAC11", category: "\uC704\uC0DD\uC6A9\uD488", price: 2e3 },
      { code: "OFF-001", name: "A4\uC6A9\uC9C0", category: "\uC0AC\uBB34\uC6A9\uD488", price: 5e3 },
      { code: "OFF-002", name: "\uBCFC\uD39C", category: "\uC0AC\uBB34\uC6A9\uD488", price: 500 }
    ];
    this.inventoryItems = [];
    for (let i = 0; i < 100; i++) {
      const product = products[i % products.length];
      const minStock = Math.floor(Math.random() * 20) + 10;
      const maxStock = minStock + Math.floor(Math.random() * 100) + 50;
      const currentStock = Math.floor(Math.random() * (maxStock + 20));
      let status = "normal";
      if (currentStock === 0)
        status = "out";
      else if (currentStock < minStock)
        status = "low";
      else if (currentStock > maxStock)
        status = "excess";
      const daysAgo = Math.floor(Math.random() * 30);
      const lastUpdated = /* @__PURE__ */ new Date();
      lastUpdated.setDate(lastUpdated.getDate() - daysAgo);
      this.inventoryItems.push({
        id: `INV-${String(i + 1).padStart(3, "0")}`,
        productCode: `${product.code}-${String(Math.floor(i / products.length) + 1).padStart(2, "0")}`,
        productName: product.name,
        category: product.category,
        currentStock,
        minStock,
        maxStock,
        unitPrice: product.price,
        location: locations[Math.floor(Math.random() * locations.length)],
        supplier: suppliers[Math.floor(Math.random() * suppliers.length)],
        lastUpdated,
        status
      });
    }
    this.filteredInventory = [...this.inventoryItems];
    this.updateInventoryPagination();
  }
  filterInventory() {
    let filtered = [...this.inventoryItems];
    if (this.categoryFilter !== "all") {
      filtered = filtered.filter((item) => item.category === this.categoryFilter);
    }
    if (this.stockStatusFilter !== "all") {
      filtered = filtered.filter((item) => item.status === this.stockStatusFilter);
    }
    if (this.inventorySearchQuery) {
      const query = this.inventorySearchQuery.toLowerCase();
      filtered = filtered.filter((item) => item.productCode.toLowerCase().includes(query) || item.productName.toLowerCase().includes(query) || item.supplier.toLowerCase().includes(query));
    }
    this.filteredInventory = filtered;
    this.inventoryCurrentPage = 1;
    this.updateInventoryPagination();
  }
  updateInventoryPagination() {
    this.inventoryTotalPages = Math.ceil(this.filteredInventory.length / this.inventoryItemsPerPage);
    const startIndex = (this.inventoryCurrentPage - 1) * this.inventoryItemsPerPage;
    const endIndex = startIndex + this.inventoryItemsPerPage;
    this.paginatedInventory = this.filteredInventory.slice(startIndex, endIndex);
    this.updateInventoryPageNumbers();
  }
  updateInventoryPageNumbers() {
    this.inventoryPageNumbers = [];
    const maxPages = 5;
    let startPage = Math.max(1, this.inventoryCurrentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.inventoryTotalPages, startPage + maxPages - 1);
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      this.inventoryPageNumbers.push(i);
    }
  }
  goToInventoryPage(page) {
    if (page >= 1 && page <= this.inventoryTotalPages) {
      this.inventoryCurrentPage = page;
      this.updateInventoryPagination();
    }
  }
  previousInventoryPage() {
    if (this.inventoryCurrentPage > 1) {
      this.inventoryCurrentPage--;
      this.updateInventoryPagination();
    }
  }
  nextInventoryPage() {
    if (this.inventoryCurrentPage < this.inventoryTotalPages) {
      this.inventoryCurrentPage++;
      this.updateInventoryPagination();
    }
  }
  onInventorySearchChange() {
    this.filterInventory();
  }
  onCategoryFilterChange() {
    this.filterInventory();
  }
  onStockStatusFilterChange() {
    this.filterInventory();
  }
  openInventoryModal() {
    this.newInventory = {
      productCode: "",
      productName: "",
      category: "",
      currentStock: 0,
      minStock: 0,
      maxStock: 0,
      unitPrice: 0,
      location: "",
      supplier: ""
    };
    this.showInventoryModal = true;
  }
  closeInventoryModal() {
    this.showInventoryModal = false;
  }
  saveInventory() {
    if (!this.newInventory.productCode || !this.newInventory.productName || !this.newInventory.category) {
      this.notification.show("\uD544\uC218 \uD56D\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    let status = "normal";
    const stock = this.newInventory.currentStock || 0;
    if (stock === 0)
      status = "out";
    else if (stock < (this.newInventory.minStock || 0))
      status = "low";
    else if (stock > (this.newInventory.maxStock || 0))
      status = "excess";
    const newItem = {
      id: `INV-${String(this.inventoryItems.length + 1).padStart(3, "0")}`,
      productCode: this.newInventory.productCode,
      productName: this.newInventory.productName,
      category: this.newInventory.category,
      currentStock: stock,
      minStock: this.newInventory.minStock || 0,
      maxStock: this.newInventory.maxStock || 0,
      unitPrice: this.newInventory.unitPrice || 0,
      location: this.newInventory.location || "",
      supplier: this.newInventory.supplier || "",
      lastUpdated: /* @__PURE__ */ new Date(),
      status
    };
    this.inventoryItems.unshift(newItem);
    this.filterInventory();
    this.closeInventoryModal();
    this.notification.show("\uC7AC\uACE0\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  viewInventoryDetail(item) {
    this.selectedInventory = item;
    this.showInventoryDetailModal = true;
  }
  closeInventoryDetailModal() {
    this.showInventoryDetailModal = false;
    this.selectedInventory = null;
  }
  openStockAdjustModal(item) {
    this.selectedInventory = item;
    this.stockAdjustment = {
      type: "in",
      quantity: 0,
      reason: ""
    };
    this.showStockAdjustModal = true;
  }
  closeStockAdjustModal() {
    this.showStockAdjustModal = false;
    this.selectedInventory = null;
  }
  adjustStock() {
    if (!this.selectedInventory || !this.stockAdjustment.quantity || !this.stockAdjustment.reason) {
      this.notification.show("\uC218\uB7C9\uACFC \uC0AC\uC720\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    const beforeStock = this.selectedInventory.currentStock;
    let afterStock = beforeStock;
    if (this.stockAdjustment.type === "in") {
      afterStock = beforeStock + this.stockAdjustment.quantity;
    } else if (this.stockAdjustment.type === "out") {
      afterStock = Math.max(0, beforeStock - this.stockAdjustment.quantity);
    } else {
      afterStock = this.stockAdjustment.quantity;
    }
    const originalItem = this.inventoryItems.find((i) => i.id === this.selectedInventory.id);
    if (originalItem) {
      originalItem.currentStock = afterStock;
      originalItem.lastUpdated = /* @__PURE__ */ new Date();
      if (afterStock === 0)
        originalItem.status = "out";
      else if (afterStock < originalItem.minStock)
        originalItem.status = "low";
      else if (afterStock > originalItem.maxStock)
        originalItem.status = "excess";
      else
        originalItem.status = "normal";
    }
    const history = {
      id: `HIST-${String(this.stockHistories.length + 1).padStart(4, "0")}`,
      productCode: this.selectedInventory.productCode,
      productName: this.selectedInventory.productName,
      type: this.stockAdjustment.type,
      quantity: this.stockAdjustment.quantity,
      beforeStock,
      afterStock,
      reason: this.stockAdjustment.reason,
      createdBy: "\uD604\uC7AC\uC0AC\uC6A9\uC790",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.stockHistories.unshift(history);
    this.updateInventoryPagination();
    this.closeStockAdjustModal();
    this.closeInventoryDetailModal();
    this.notification.show("\uC7AC\uACE0\uAC00 \uC870\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  deleteInventory(item) {
    this.confirmationDialog.confirmDelete(item.productName).subscribe((result) => {
      if (result) {
        const index = this.inventoryItems.findIndex((i) => i.id === item.id);
        if (index > -1) {
          this.inventoryItems.splice(index, 1);
          this.filterInventory();
          this.notification.show("\uC7AC\uACE0\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  getStockStatusLabel(status) {
    const labels = {
      "normal": "\uC815\uC0C1",
      "low": "\uBD80\uC871",
      "out": "\uD488\uC808",
      "excess": "\uACFC\uB2E4"
    };
    return labels[status] || status;
  }
  getStockStatusClass(status) {
    return `status-${status}`;
  }
  getStockHistories(productCode) {
    return this.stockHistories.filter((h) => h.productCode === productCode).slice(0, 10);
  }
  getTypeLabel(type) {
    const labels = {
      "in": "\uC785\uACE0",
      "out": "\uCD9C\uACE0",
      "adjust": "\uC870\uC815"
    };
    return labels[type] || type;
  }
  // ========== 거래처 관리 메서드 ==========
  loadMockSuppliers() {
    const categories = ["\uC758\uC57D\uD488", "\uC758\uB8CC\uAE30\uAE30", "\uC18C\uBAA8\uD488", "\uC704\uC0DD\uC6A9\uD488", "\uC0AC\uBB34\uC6A9\uD488", "\uAC74\uAC15\uC2DD\uD488"];
    const creditRatings = ["excellent", "good", "fair", "poor"];
    const statuses = ["active", "active", "active", "inactive"];
    const supplierNames = [
      "\uD55C\uAD6D\uC81C\uC57D",
      "\uB300\uD55C\uC57D\uD488",
      "\uAE00\uB85C\uBC8C\uC81C\uC57D",
      "\uBA54\uB514\uD31C",
      "\uBC14\uC774\uC624\uD14D",
      "\uD5EC\uC2A4\uCF00\uC5B4",
      "\uB77C\uC774\uD504\uC0AC\uC774\uC5B8\uC2A4",
      "\uBA54\uB514\uCEEC\uCF54\uB9AC\uC544",
      "\uCF00\uC5B4\uD50C\uB7EC\uC2A4",
      "\uC6F0\uB2C8\uC2A4",
      "\uADF8\uB9B0\uBA54\uB514",
      "\uD4E8\uC5B4\uD31C",
      "\uC2A4\uB9C8\uD2B8\uD5EC\uC2A4",
      "\uD504\uB9AC\uBBF8\uC5C4\uBA54\uB514",
      "\uC5D0\uC774\uC2A4\uC81C\uC57D",
      "\uC120\uC9C4\uC758\uB8CC",
      "\uC720\uB2C8\uBA54\uB4DC",
      "\uD0D1\uBA54\uB514\uCEEC",
      "\uBCA0\uC2A4\uD2B8\uD31C",
      "\uBAA8\uB358\uCF00\uC5B4",
      "\uD558\uC774\uD14D\uBA54\uB514",
      "\uC635\uD2F0\uD31C",
      "\uBC14\uC774\uD0C8\uCF00\uC5B4",
      "\uD504\uB85C\uBA54\uB514",
      "\uB125\uC2A4\uD2B8\uD31C"
    ];
    this.suppliers = [];
    for (let i = 0; i < 100; i++) {
      const name = supplierNames[i % supplierNames.length];
      const suffix = Math.floor(i / supplierNames.length) > 0 ? ` ${Math.floor(i / supplierNames.length) + 1}` : "";
      const category = categories[i % categories.length];
      const numProducts = Math.floor(Math.random() * 5) + 1;
      const products = [];
      for (let j = 0; j < numProducts; j++) {
        products.push(`${category} \uC81C\uD488 ${j + 1}`);
      }
      const daysAgo = Math.floor(Math.random() * 365);
      const createdAt = /* @__PURE__ */ new Date();
      createdAt.setDate(createdAt.getDate() - daysAgo);
      const hasTransaction = Math.random() > 0.3;
      const lastTransactionDays = hasTransaction ? Math.floor(Math.random() * 90) : null;
      const lastTransactionDate = lastTransactionDays !== null ? /* @__PURE__ */ new Date() : void 0;
      if (lastTransactionDate && lastTransactionDays !== null) {
        lastTransactionDate.setDate(lastTransactionDate.getDate() - lastTransactionDays);
      }
      this.suppliers.push({
        id: `SUP-${String(i + 1).padStart(3, "0")}`,
        code: `S${String(i + 1).padStart(4, "0")}`,
        name: name + suffix,
        businessNumber: `${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 90 + 10)}-${String(Math.floor(Math.random() * 9e4 + 1e4))}`,
        representative: `\uB300\uD45C\uC774\uC0AC ${["\uAE40", "\uC774", "\uBC15", "\uCD5C", "\uC815"][Math.floor(Math.random() * 5)]}${"\uCCA0\uC218,\uC601\uD76C,\uBBFC\uC218,\uC218\uC9C4,\uB3D9\uC6B1".split(",")[Math.floor(Math.random() * 5)]}`,
        category,
        contact: `02-${Math.floor(Math.random() * 9e3 + 1e3)}-${Math.floor(Math.random() * 9e3 + 1e3)}`,
        email: `contact@${name.toLowerCase().replace(/\s/g, "")}.com`,
        address: `\uC11C\uC6B8\uD2B9\uBCC4\uC2DC ${["\uAC15\uB0A8\uAD6C", "\uC11C\uCD08\uAD6C", "\uC1A1\uD30C\uAD6C", "\uC601\uB4F1\uD3EC\uAD6C", "\uB9C8\uD3EC\uAD6C"][Math.floor(Math.random() * 5)]} ${["\uD14C\uD5E4\uB780\uB85C", "\uAC15\uB0A8\uB300\uB85C", "\uB17C\uD604\uB85C", "\uC62C\uB9BC\uD53D\uB85C", "\uC5EC\uC758\uB300\uB85C"][Math.floor(Math.random() * 5)]} ${Math.floor(Math.random() * 500 + 1)}`,
        products,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        creditRating: creditRatings[Math.floor(Math.random() * creditRatings.length)],
        paymentTerms: ["\uD604\uAE08", "30\uC77C", "60\uC77C", "90\uC77C"][Math.floor(Math.random() * 4)],
        notes: i % 10 === 0 ? "\uC8FC\uC694 \uAC70\uB798\uCC98" : "",
        createdAt,
        lastTransactionDate
      });
    }
    this.transactions = [];
    for (let i = 0; i < 50; i++) {
      const supplier = this.suppliers[Math.floor(Math.random() * Math.min(20, this.suppliers.length))];
      const types = ["order", "payment", "return"];
      const type = types[Math.floor(Math.random() * types.length)];
      const daysAgo = Math.floor(Math.random() * 180);
      const date = /* @__PURE__ */ new Date();
      date.setDate(date.getDate() - daysAgo);
      let status = "";
      if (type === "order")
        status = ["\uC644\uB8CC", "\uC9C4\uD589\uC911", "\uCDE8\uC18C"][Math.floor(Math.random() * 3)];
      else if (type === "payment")
        status = ["\uC644\uB0A9", "\uBD80\uBD84\uB0A9", "\uBBF8\uB0A9"][Math.floor(Math.random() * 3)];
      else
        status = ["\uCC98\uB9AC\uC644\uB8CC", "\uCC98\uB9AC\uC911"][Math.floor(Math.random() * 2)];
      this.transactions.push({
        id: `TXN-${String(i + 1).padStart(4, "0")}`,
        supplierCode: supplier.code,
        supplierName: supplier.name,
        type,
        amount: Math.floor(Math.random() * 1e7) + 1e5,
        date,
        status,
        reference: type === "order" ? `PO-2025-${String(Math.floor(Math.random() * 100) + 1).padStart(3, "0")}` : "-"
      });
    }
    this.filteredSuppliers = [...this.suppliers];
    this.updateSupplierPagination();
  }
  filterSuppliers() {
    let filtered = [...this.suppliers];
    if (this.supplierCategoryFilter !== "all") {
      filtered = filtered.filter((s) => s.category === this.supplierCategoryFilter);
    }
    if (this.supplierStatusFilter !== "all") {
      filtered = filtered.filter((s) => s.status === this.supplierStatusFilter);
    }
    if (this.supplierSearchQuery) {
      const query = this.supplierSearchQuery.toLowerCase();
      filtered = filtered.filter((s) => s.code.toLowerCase().includes(query) || s.name.toLowerCase().includes(query) || s.representative.toLowerCase().includes(query) || s.contact.includes(query));
    }
    this.filteredSuppliers = filtered;
    this.supplierCurrentPage = 1;
    this.updateSupplierPagination();
  }
  updateSupplierPagination() {
    this.supplierTotalPages = Math.ceil(this.filteredSuppliers.length / this.supplierItemsPerPage);
    const startIndex = (this.supplierCurrentPage - 1) * this.supplierItemsPerPage;
    const endIndex = startIndex + this.supplierItemsPerPage;
    this.paginatedSuppliers = this.filteredSuppliers.slice(startIndex, endIndex);
    this.updateSupplierPageNumbers();
  }
  updateSupplierPageNumbers() {
    this.supplierPageNumbers = [];
    const maxPages = 5;
    let startPage = Math.max(1, this.supplierCurrentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.supplierTotalPages, startPage + maxPages - 1);
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      this.supplierPageNumbers.push(i);
    }
  }
  goToSupplierPage(page) {
    if (page >= 1 && page <= this.supplierTotalPages) {
      this.supplierCurrentPage = page;
      this.updateSupplierPagination();
    }
  }
  previousSupplierPage() {
    if (this.supplierCurrentPage > 1) {
      this.supplierCurrentPage--;
      this.updateSupplierPagination();
    }
  }
  nextSupplierPage() {
    if (this.supplierCurrentPage < this.supplierTotalPages) {
      this.supplierCurrentPage++;
      this.updateSupplierPagination();
    }
  }
  onSupplierSearchChange() {
    this.filterSuppliers();
  }
  onSupplierCategoryFilterChange() {
    this.filterSuppliers();
  }
  onSupplierStatusFilterChange() {
    this.filterSuppliers();
  }
  openSupplierModal() {
    this.newSupplier = {
      code: "",
      name: "",
      businessNumber: "",
      representative: "",
      category: "",
      contact: "",
      email: "",
      address: "",
      products: [],
      status: "active",
      creditRating: "good",
      paymentTerms: "",
      notes: ""
    };
    this.newSupplierProduct = "";
    this.showSupplierModal = true;
  }
  closeSupplierModal() {
    this.showSupplierModal = false;
  }
  addSupplierProduct() {
    if (this.newSupplierProduct && !this.newSupplier.products?.includes(this.newSupplierProduct)) {
      if (!this.newSupplier.products) {
        this.newSupplier.products = [];
      }
      this.newSupplier.products.push(this.newSupplierProduct);
      this.newSupplierProduct = "";
    }
  }
  removeSupplierProduct(index) {
    this.newSupplier.products?.splice(index, 1);
  }
  saveSupplier() {
    if (!this.newSupplier.code || !this.newSupplier.name || !this.newSupplier.category) {
      this.notification.show("\uD544\uC218 \uD56D\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    const newSupplier = {
      id: `SUP-${String(this.suppliers.length + 1).padStart(3, "0")}`,
      code: this.newSupplier.code,
      name: this.newSupplier.name,
      businessNumber: this.newSupplier.businessNumber || "",
      representative: this.newSupplier.representative || "",
      category: this.newSupplier.category,
      contact: this.newSupplier.contact || "",
      email: this.newSupplier.email || "",
      address: this.newSupplier.address || "",
      products: this.newSupplier.products || [],
      status: this.newSupplier.status || "active",
      creditRating: this.newSupplier.creditRating || "good",
      paymentTerms: this.newSupplier.paymentTerms || "",
      notes: this.newSupplier.notes || "",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.suppliers.unshift(newSupplier);
    this.filterSuppliers();
    this.closeSupplierModal();
    this.notification.show("\uAC70\uB798\uCC98\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  viewSupplierDetail(supplier) {
    this.selectedSupplier = supplier;
    this.showSupplierDetailModal = true;
  }
  closeSupplierDetailModal() {
    this.showSupplierDetailModal = false;
    this.selectedSupplier = null;
  }
  deleteSupplier(supplier) {
    this.confirmationDialog.confirmDelete(supplier.name).subscribe((result) => {
      if (result) {
        const index = this.suppliers.findIndex((s) => s.id === supplier.id);
        if (index > -1) {
          this.suppliers.splice(index, 1);
          this.filterSuppliers();
          this.notification.show("\uAC70\uB798\uCC98\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  toggleSupplierStatus(supplier) {
    const originalSupplier = this.suppliers.find((s) => s.id === supplier.id);
    if (originalSupplier) {
      originalSupplier.status = originalSupplier.status === "active" ? "inactive" : "active";
      supplier.status = originalSupplier.status;
      this.updateSupplierPagination();
      this.notification.showLong(`\uAC70\uB798\uCC98 \uC0C1\uD0DC\uAC00 ${supplier.status === "active" ? "\uD65C\uC131" : "\uBE44\uD65C\uC131"}\uC73C\uB85C \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
    }
  }
  getSupplierStatusLabel(status) {
    return status === "active" ? "\uD65C\uC131" : "\uBE44\uD65C\uC131";
  }
  getSupplierStatusClass(status) {
    return status === "active" ? "status-active" : "status-inactive";
  }
  getCreditRatingLabel(rating) {
    const labels = {
      "excellent": "\uC6B0\uC218",
      "good": "\uC591\uD638",
      "fair": "\uBCF4\uD1B5",
      "poor": "\uBD88\uB7C9"
    };
    return labels[rating] || rating;
  }
  getCreditRatingClass(rating) {
    return `credit-${rating}`;
  }
  getSupplierTransactions(supplierCode) {
    return this.transactions.filter((t) => t.supplierCode === supplierCode).sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 10);
  }
  getTransactionTypeLabel(type) {
    const labels = {
      "order": "\uBC1C\uC8FC",
      "payment": "\uACB0\uC81C",
      "return": "\uBC18\uD488"
    };
    return labels[type] || type;
  }
  getTransactionTypeClass(type) {
    return `txn-${type}`;
  }
  // ========== 정산 관리 메서드 ==========
  loadMockSettlements() {
    const periods = ["2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06"];
    const statuses = ["pending", "confirmed", "paid", "overdue"];
    this.settlements = [];
    for (let i = 0; i < 100; i++) {
      const supplier = this.suppliers[i % Math.min(30, this.suppliers.length)];
      if (!supplier)
        continue;
      const period = periods[Math.floor(i / 17) % periods.length];
      const orderAmount = Math.floor(Math.random() * 5e7) + 1e6;
      const paymentAmount = Math.floor(orderAmount * (0.7 + Math.random() * 0.3));
      const returnAmount = Math.floor(Math.random() * 1e6);
      const balance = orderAmount - paymentAmount - returnAmount;
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const [year, month] = period.split("-").map(Number);
      const dueDate = new Date(year, month, 0);
      let paidDate;
      if (status === "paid") {
        paidDate = new Date(dueDate);
        paidDate.setDate(paidDate.getDate() - Math.floor(Math.random() * 10));
      }
      const createdAt = new Date(year, month - 1, 1);
      this.settlements.push({
        id: `SET-${String(i + 1).padStart(3, "0")}`,
        period,
        supplierCode: supplier.code,
        supplierName: supplier.name,
        orderAmount,
        paymentAmount,
        returnAmount,
        balance,
        status,
        dueDate,
        paidDate,
        notes: i % 10 === 0 ? "\uC870\uAE30 \uACB0\uC81C \uD560\uC778 \uC801\uC6A9" : "",
        createdAt
      });
    }
    this.settlementDetails = [];
    const sampleSettlement = this.settlements[0];
    if (sampleSettlement) {
      const relatedOrders = this.orders.filter((o) => o.supplier === sampleSettlement.supplierName).slice(0, 5);
      relatedOrders.forEach((order, index) => {
        this.settlementDetails.push({
          orderId: order.id,
          orderDate: order.orderDate,
          amount: order.totalAmount,
          status: this.getStatusLabel(order.status)
        });
      });
    }
    this.filteredSettlements = [...this.settlements];
    this.updateSettlementPagination();
    this.calculateSettlementStats();
  }
  filterSettlements() {
    let filtered = [...this.settlements];
    if (this.settlementStatusFilter !== "all") {
      filtered = filtered.filter((s) => s.status === this.settlementStatusFilter);
    }
    if (this.settlementPeriodFilter !== "all") {
      filtered = filtered.filter((s) => s.period === this.settlementPeriodFilter);
    }
    if (this.settlementSearchQuery) {
      const query = this.settlementSearchQuery.toLowerCase();
      filtered = filtered.filter((s) => s.id.toLowerCase().includes(query) || s.supplierCode.toLowerCase().includes(query) || s.supplierName.toLowerCase().includes(query));
    }
    this.filteredSettlements = filtered;
    this.settlementCurrentPage = 1;
    this.updateSettlementPagination();
  }
  updateSettlementPagination() {
    this.settlementTotalPages = Math.ceil(this.filteredSettlements.length / this.settlementItemsPerPage);
    const startIndex = (this.settlementCurrentPage - 1) * this.settlementItemsPerPage;
    const endIndex = startIndex + this.settlementItemsPerPage;
    this.paginatedSettlements = this.filteredSettlements.slice(startIndex, endIndex);
    this.updateSettlementPageNumbers();
  }
  updateSettlementPageNumbers() {
    this.settlementPageNumbers = [];
    const maxPages = 5;
    let startPage = Math.max(1, this.settlementCurrentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.settlementTotalPages, startPage + maxPages - 1);
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      this.settlementPageNumbers.push(i);
    }
  }
  goToSettlementPage(page) {
    if (page >= 1 && page <= this.settlementTotalPages) {
      this.settlementCurrentPage = page;
      this.updateSettlementPagination();
    }
  }
  previousSettlementPage() {
    if (this.settlementCurrentPage > 1) {
      this.settlementCurrentPage--;
      this.updateSettlementPagination();
    }
  }
  nextSettlementPage() {
    if (this.settlementCurrentPage < this.settlementTotalPages) {
      this.settlementCurrentPage++;
      this.updateSettlementPagination();
    }
  }
  onSettlementSearchChange() {
    this.filterSettlements();
  }
  onSettlementStatusFilterChange() {
    this.filterSettlements();
  }
  onSettlementPeriodFilterChange() {
    this.filterSettlements();
  }
  viewSettlementDetail(settlement) {
    this.selectedSettlement = settlement;
    this.settlementDetails = [];
    const [year, month] = settlement.period.split("-").map(Number);
    const relatedOrders = this.orders.filter((o) => {
      const orderDate = new Date(o.orderDate);
      return o.supplier === settlement.supplierName && orderDate.getFullYear() === year && orderDate.getMonth() === month - 1;
    });
    relatedOrders.forEach((order) => {
      this.settlementDetails.push({
        orderId: order.id,
        orderDate: order.orderDate,
        amount: order.totalAmount,
        status: this.getStatusLabel(order.status)
      });
    });
    this.showSettlementDetailModal = true;
  }
  closeSettlementDetailModal() {
    this.showSettlementDetailModal = false;
    this.selectedSettlement = null;
    this.settlementDetails = [];
  }
  confirmSettlement(settlement) {
    this.confirmationDialog.confirm("\uC815\uC0B0\uC744 \uD655\uC815\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", "\uC815\uC0B0 \uD655\uC815", "\uD655\uC815", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        const original = this.settlements.find((s) => s.id === settlement.id);
        if (original) {
          original.status = "confirmed";
          settlement.status = "confirmed";
          this.updateSettlementPagination();
          this.calculateSettlementStats();
          this.notification.show("\uC815\uC0B0\uC774 \uD655\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  completePayment(settlement) {
    this.confirmationDialog.confirm("\uACB0\uC81C\uB97C \uC644\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", "\uACB0\uC81C \uC644\uB8CC", "\uC644\uB8CC", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        const original = this.settlements.find((s) => s.id === settlement.id);
        if (original) {
          original.status = "paid";
          original.paidDate = /* @__PURE__ */ new Date();
          settlement.status = "paid";
          settlement.paidDate = /* @__PURE__ */ new Date();
          this.updateSettlementPagination();
          this.calculateSettlementStats();
          this.notification.show("\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  getSettlementStatusLabel(status) {
    const labels = {
      "pending": "\uB300\uAE30",
      "confirmed": "\uD655\uC815",
      "paid": "\uC644\uB8CC",
      "overdue": "\uC9C0\uC5F0"
    };
    return labels[status] || status;
  }
  getSettlementStatusClass(status) {
    return `settlement-${status}`;
  }
  calculateSettlementStats() {
    this.settlementStats = {
      totalBalance: this.settlements.reduce((sum, s) => sum + s.balance, 0),
      pendingCount: this.settlements.filter((s) => s.status === "pending").length,
      overdueCount: this.settlements.filter((s) => s.status === "overdue").length,
      paidCount: this.settlements.filter((s) => s.status === "paid").length
    };
  }
  getAvailablePeriods() {
    const periods = /* @__PURE__ */ new Set();
    this.settlements.forEach((s) => periods.add(s.period));
    return Array.from(periods).sort().reverse();
  }
  formatPeriod(period) {
    const [year, month] = period.split("-");
    return `${year}\uB144 ${month}\uC6D4`;
  }
  exportSettlement(settlement) {
    this.notification.showLong(`${settlement.supplierName}\uC758 ${this.formatPeriod(settlement.period)} \uC815\uC0B0\uC11C\uB97C \uB0B4\uBCF4\uB0C5\uB2C8\uB2E4.`);
  }
  getSettlementDetailsTotal() {
    return this.settlementDetails.reduce((sum, d) => sum + d.amount, 0);
  }
  // ========== 보고서 관리 메서드 ==========
  initializeReports() {
    const now = /* @__PURE__ */ new Date();
    this.selectedMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    this.generateReports();
  }
  generateReports() {
    this.generateSummaryReport();
    this.generateCategoryReport();
    this.generateSupplierReport();
    this.generateMonthlyTrend();
    this.generateReportOrderList();
  }
  generateSummaryReport() {
    let filteredOrders = [...this.orders];
    let filteredInventory = [...this.inventoryItems];
    let filteredSuppliers = [...this.suppliers];
    let filteredSettlements = [...this.settlements];
    if (this.reportPeriod === "month" && this.selectedMonth) {
      const [year, month] = this.selectedMonth.split("-").map(Number);
      filteredOrders = filteredOrders.filter((o) => {
        const orderDate = new Date(o.orderDate);
        return orderDate.getFullYear() === year && orderDate.getMonth() === month - 1;
      });
      filteredSettlements = filteredSettlements.filter((s) => s.period === this.selectedMonth);
    }
    this.summaryReport = {
      period: this.selectedMonth,
      orderCount: filteredOrders.length,
      orderAmount: filteredOrders.reduce((sum, o) => sum + o.totalAmount, 0),
      inventoryValue: filteredInventory.reduce((sum, i) => sum + i.currentStock * i.unitPrice, 0),
      supplierCount: filteredSuppliers.filter((s) => s.status === "active").length,
      settlementAmount: filteredSettlements.reduce((sum, s) => sum + s.balance, 0)
    };
  }
  generateCategoryReport() {
    let filteredOrders = [...this.orders];
    if (this.reportPeriod === "month" && this.selectedMonth) {
      const [year, month] = this.selectedMonth.split("-").map(Number);
      filteredOrders = filteredOrders.filter((o) => {
        const orderDate = new Date(o.orderDate);
        return orderDate.getFullYear() === year && orderDate.getMonth() === month - 1;
      });
    }
    const categoryMap = /* @__PURE__ */ new Map();
    filteredOrders.forEach((order) => {
      const supplier = this.suppliers.find((s) => s.name === order.supplier);
      const category = supplier?.category || "\uAE30\uD0C0";
      const current = categoryMap.get(category) || { count: 0, amount: 0 };
      current.count++;
      current.amount += order.totalAmount;
      categoryMap.set(category, current);
    });
    const totalAmount = Array.from(categoryMap.values()).reduce((sum, v) => sum + v.amount, 0);
    this.categoryReports = Array.from(categoryMap.entries()).map(([category, data]) => ({
      category,
      orderCount: data.count,
      orderAmount: data.amount,
      percentage: totalAmount > 0 ? data.amount / totalAmount * 100 : 0
    })).sort((a, b) => b.orderAmount - a.orderAmount);
  }
  generateSupplierReport() {
    let filteredOrders = [...this.orders];
    if (this.reportPeriod === "month" && this.selectedMonth) {
      const [year, month] = this.selectedMonth.split("-").map(Number);
      filteredOrders = filteredOrders.filter((o) => {
        const orderDate = new Date(o.orderDate);
        return orderDate.getFullYear() === year && orderDate.getMonth() === month - 1;
      });
    }
    const supplierMap = /* @__PURE__ */ new Map();
    filteredOrders.forEach((order) => {
      const current = supplierMap.get(order.supplier) || { count: 0, amount: 0 };
      current.count++;
      current.amount += order.totalAmount;
      supplierMap.set(order.supplier, current);
    });
    this.supplierReports = Array.from(supplierMap.entries()).map(([supplier, data]) => ({
      supplierName: supplier,
      orderCount: data.count,
      orderAmount: data.amount,
      averageAmount: data.amount / data.count
    })).sort((a, b) => b.orderAmount - a.orderAmount).slice(0, 10);
  }
  generateMonthlyTrend() {
    const months = [];
    const now = /* @__PURE__ */ new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const monthKey = `${year}-${String(month).padStart(2, "0")}`;
      const monthOrders = this.orders.filter((o) => {
        const orderDate = new Date(o.orderDate);
        return orderDate.getFullYear() === year && orderDate.getMonth() === month - 1;
      });
      months.push({
        month: monthKey,
        orders: monthOrders.length,
        amount: monthOrders.reduce((sum, o) => sum + o.totalAmount, 0)
      });
    }
    this.monthlyTrends = months;
  }
  onReportTypeChange() {
    this.generateReports();
  }
  onReportPeriodChange() {
    this.generateReports();
  }
  onSelectedMonthChange() {
    this.generateReports();
  }
  getAvailableMonths() {
    const months = /* @__PURE__ */ new Set();
    this.orders.forEach((o) => {
      const date = new Date(o.orderDate);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      months.add(monthKey);
    });
    return Array.from(months).sort().reverse();
  }
  exportReport() {
    const reportName = this.getReportName();
    this.notification.showLong(`${reportName}\uC744(\uB97C) Excel\uB85C \uB0B4\uBCF4\uB0C5\uB2C8\uB2E4.`);
  }
  printReport() {
    const reportName = this.getReportName();
    this.notification.showLong(`${reportName}\uC744(\uB97C) \uC778\uC1C4\uD569\uB2C8\uB2E4.`);
  }
  getReportName() {
    const names = {
      "summary": "\uC885\uD569 \uBCF4\uACE0\uC11C",
      "category": "\uCE74\uD14C\uACE0\uB9AC\uBCC4 \uBCF4\uACE0\uC11C",
      "supplier": "\uAC70\uB798\uCC98\uBCC4 \uBCF4\uACE0\uC11C",
      "trend": "\uC6D4\uBCC4 \uCD94\uC774 \uBCF4\uACE0\uC11C"
    };
    return `${this.formatPeriod(this.selectedMonth)} ${names[this.reportType]}`;
  }
  getPercentageBarWidth(percentage) {
    return `${Math.min(100, percentage)}%`;
  }
  getMaxAmount() {
    if (this.monthlyTrends.length === 0)
      return 1;
    return Math.max(...this.monthlyTrends.map((t) => t.amount));
  }
  getTrendBarHeight(amount) {
    const maxAmount = this.getMaxAmount();
    const height = maxAmount > 0 ? amount / maxAmount * 100 : 0;
    return `${Math.max(10, height)}%`;
  }
  formatShortMonth(month) {
    const [year, m] = month.split("-");
    return `${m}\uC6D4`;
  }
  formatCompactCurrency(amount) {
    if (amount >= 1e8) {
      return `${(amount / 1e8).toFixed(1)}\uC5B5`;
    } else if (amount >= 1e4) {
      return `${(amount / 1e4).toFixed(0)}\uB9CC`;
    }
    return amount.toLocaleString("ko-KR");
  }
  getTotalTrendOrders() {
    return this.monthlyTrends.reduce((sum, t) => sum + t.orders, 0);
  }
  getTotalTrendAmount() {
    return this.monthlyTrends.reduce((sum, t) => sum + t.amount, 0);
  }
  getAverageTrendAmount() {
    if (this.monthlyTrends.length === 0)
      return 0;
    return this.getTotalTrendAmount() / this.monthlyTrends.length;
  }
  // 보고서 발주 리스트 생성
  generateReportOrderList() {
    let filteredOrders = [...this.orders];
    if (this.reportPeriod === "month" && this.selectedMonth) {
      const [year, month] = this.selectedMonth.split("-").map(Number);
      filteredOrders = filteredOrders.filter((o) => {
        const orderDate = new Date(o.orderDate);
        return orderDate.getFullYear() === year && orderDate.getMonth() === month - 1;
      });
    }
    this.reportOrderList = filteredOrders;
    this.filterReportOrders();
  }
  filterReportOrders() {
    let filtered = [...this.reportOrderList];
    if (this.reportSearchQuery) {
      const query = this.reportSearchQuery.toLowerCase();
      filtered = filtered.filter((o) => o.id.toLowerCase().includes(query) || o.supplier.toLowerCase().includes(query));
    }
    if (this.reportStatusFilter !== "all") {
      filtered = filtered.filter((o) => o.status === this.reportStatusFilter);
    }
    if (this.reportCategoryFilter !== "all") {
      filtered = filtered.filter((o) => {
        const supplier = this.suppliers.find((s) => s.name === o.supplier);
        return supplier?.category === this.reportCategoryFilter;
      });
    }
    this.filteredReportOrders = filtered;
    this.updateReportPagination();
  }
  updateReportPagination() {
    this.reportTotalPages = Math.ceil(this.filteredReportOrders.length / this.reportItemsPerPage);
    this.reportCurrentPage = Math.max(1, Math.min(this.reportCurrentPage, this.reportTotalPages));
    const startIndex = (this.reportCurrentPage - 1) * this.reportItemsPerPage;
    const endIndex = startIndex + this.reportItemsPerPage;
    this.paginatedReportOrders = this.filteredReportOrders.slice(startIndex, endIndex);
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, this.reportCurrentPage - halfVisible);
    let endPage = Math.min(this.reportTotalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    this.reportPageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
  goToReportPage(page) {
    if (page >= 1 && page <= this.reportTotalPages) {
      this.reportCurrentPage = page;
      this.updateReportPagination();
    }
  }
  previousReportPage() {
    if (this.reportCurrentPage > 1) {
      this.reportCurrentPage--;
      this.updateReportPagination();
    }
  }
  nextReportPage() {
    if (this.reportCurrentPage < this.reportTotalPages) {
      this.reportCurrentPage++;
      this.updateReportPagination();
    }
  }
  onReportSearchChange() {
    this.reportCurrentPage = 1;
    this.filterReportOrders();
  }
  onReportStatusFilterChange() {
    this.reportCurrentPage = 1;
    this.filterReportOrders();
  }
  onReportCategoryFilterChange() {
    this.reportCurrentPage = 1;
    this.filterReportOrders();
  }
  getReportCategories() {
    const categories = /* @__PURE__ */ new Set();
    this.suppliers.forEach((s) => {
      if (s.category)
        categories.add(s.category);
    });
    return Array.from(categories).sort();
  }
  viewReportOrderDetail(order) {
    this.selectedOrder = order;
    this.showOrderDetailModal = true;
  }
  getReportEndIndex() {
    return Math.min(this.reportCurrentPage * this.reportItemsPerPage, this.filteredReportOrders.length);
  }
  getSupplierCategory(supplierName) {
    const supplier = this.suppliers.find((s) => s.name === supplierName);
    return supplier?.category || "-";
  }
  // ===== 의약품/의료기기 초기화 함수 =====
  initializePharmaceuticals() {
    const drugNames = [
      { code: "DRUG-001", name: "\uC544\uBAA9\uC2DC\uC2E4\uB9B0\uC815", generic: "Amoxicillin", atc: "J01CA04", type: "ethical" },
      { code: "DRUG-002", name: "\uD0C0\uC774\uB808\uB180\uC815", generic: "Acetaminophen", atc: "N02BE01", type: "otc" },
      { code: "DRUG-003", name: "\uC624\uBA54\uAC00-3", generic: "Omega-3 fatty acids", atc: "C10AX06", type: "otc" },
      { code: "DRUG-004", name: "\uC544\uC2A4\uD53C\uB9B0\uC7A5\uC6A9\uC815", generic: "Aspirin", atc: "B01AC06", type: "otc" },
      { code: "DRUG-005", name: "\uBAA8\uB974\uD540\uC8FC\uC0AC", generic: "Morphine", atc: "N02AA01", type: "ethical" },
      { code: "DRUG-006", name: "\uC778\uC290\uB9B0\uC8FC", generic: "Insulin", atc: "A10AB01", type: "ethical" },
      { code: "DRUG-007", name: "\uAC8C\uBCF4\uB9B0\uC815", generic: "Ibuprofen", atc: "M01AE01", type: "otc" },
      { code: "DRUG-008", name: "\uC544\uC9C0\uD2B8\uB85C\uB9C8\uC774\uC2E0\uC815", generic: "Azithromycin", atc: "J01FA10", type: "ethical" },
      { code: "DRUG-009", name: "\uC885\uD569\uBE44\uD0C0\uBBFC\uCEA1\uC290", generic: "Multivitamins", atc: "A11AA04", type: "otc" },
      { code: "DRUG-010", name: "\uD504\uB85C\uBC14\uC774\uC624\uD2F1\uC2A4", generic: "Probiotics", atc: "A07FA51", type: "otc" }
    ];
    const manufacturers = ["\uD55C\uAD6D\uC81C\uC57D", "\uB300\uD55C\uC57D\uD488", "\uAE00\uB85C\uBC8C\uC81C\uC57D", "\uBA54\uB514\uD31C", "\uBC14\uC774\uC624\uD14D"];
    const dosageForms = ["\uC815\uC81C", "\uCEA1\uC290", "\uC8FC\uC0AC\uC81C", "\uC2DC\uB7FD", "\uC5F0\uACE0"];
    this.pharmaceuticals = drugNames.map((drug, index) => ({
      productCode: drug.code,
      barcode: `880${String(index + 1).padStart(10, "0")}`,
      approvalNumber: `20230${String(index + 1).padStart(5, "0")}`,
      productName: drug.name,
      genericName: drug.generic,
      atcCode: drug.atc,
      manufacturer: manufacturers[index % manufacturers.length],
      importer: index % 3 === 0 ? "\uD55C\uAD6D\uC218\uC785" : void 0,
      ingredients: drug.generic,
      dosageForm: dosageForms[index % dosageForms.length],
      drugType: drug.type,
      narcotic: drug.code === "DRUG-005",
      // 모르핀만 마약
      psychotropic: false,
      storageCondition: index % 4 === 0 ? "\uB0C9\uC7A5\uBCF4\uAD00(2-8\u2103)" : "\uC2E4\uC628\uBCF4\uAD00",
      temperatureControl: index % 4 === 0 ? "refrigerated" : "room",
      packaging: "100\uC815/\uBCD1",
      insuranceCode: `65${String(index + 1).padStart(8, "0")}`,
      insurancePrice: 1e3 + index * 500,
      discontinued: false
    }));
  }
  initializeMedicalDevices() {
    const devices = [
      { code: "DEV-001", name: "\uC77C\uD68C\uC6A9\uC8FC\uC0AC\uAE30", model: "SYR-10ML", class: "2", sterilization: true, implantable: false },
      { code: "DEV-002", name: "\uD608\uC555\uACC4", model: "BP-AUTO-2000", class: "2", sterilization: false, implantable: false },
      { code: "DEV-003", name: "\uCCB4\uC628\uACC4", model: "THERMO-DIGIT", class: "2", sterilization: false, implantable: false },
      { code: "DEV-004", name: "\uC778\uACF5\uC2EC\uBC15\uC870\uC728\uAE30", model: "PACE-3000", class: "4", sterilization: true, implantable: true },
      { code: "DEV-005", name: "\uC218\uC220\uC6A9\uBA54\uC2A4", model: "SCALPEL-11", class: "2", sterilization: true, implantable: false },
      { code: "DEV-006", name: "\uCCAD\uC9C4\uAE30", model: "STETH-PRO", class: "1", sterilization: false, implantable: false },
      { code: "DEV-007", name: "\uC778\uACF5\uAD00\uC808", model: "JOINT-KNEE", class: "4", sterilization: true, implantable: true },
      { code: "DEV-008", name: "X\uC120\uCD2C\uC601\uC7A5\uCE58", model: "XRAY-5000", class: "3", sterilization: false, implantable: false },
      { code: "DEV-009", name: "\uC0B0\uC18C\uD3EC\uD654\uB3C4\uCE21\uC815\uAE30", model: "PULSE-OX", class: "2", sterilization: false, implantable: false },
      { code: "DEV-010", name: "\uC218\uC561\uC138\uD2B8", model: "IV-SET-STD", class: "2", sterilization: true, implantable: false }
    ];
    const manufacturers = ["\uBA54\uB514\uD14D", "\uD5EC\uC2A4\uCF00\uC5B4\uC0B0\uC5C5", "\uBA54\uB514\uCEEC\uB514\uBC14\uC774\uC2A4", "\uBC14\uC774\uC624\uBA54\uB4DC", "\uAE00\uB85C\uBC8C\uC758\uB8CC\uAE30\uAE30"];
    this.medicalDevices = devices.map((dev, index) => ({
      deviceCode: dev.code,
      modelNumber: dev.model,
      deviceName: dev.name,
      udiDI: `(01)08${String(index + 1).padStart(12, "0")}`,
      deviceClass: dev.class,
      permitNumber: `\uC758\uAE30${String(2023 + index).slice(-2)}-${String(index + 1).padStart(4, "0")}`,
      manufacturer: manufacturers[index % manufacturers.length],
      sterilization: dev.sterilization,
      implantable: dev.implantable,
      maintenanceRequired: index % 5 === 0,
      category: dev.class === "4" ? "\uC774\uC2DD\uD615" : dev.class === "3" ? "\uACE0\uC704\uD5D8" : "\uC77C\uBC18",
      packaging: "1\uAC1C/box"
    }));
  }
  initializeLotBatches() {
    const today = /* @__PURE__ */ new Date();
    const products = [...this.pharmaceuticals.slice(0, 5), ...this.medicalDevices.slice(0, 3)];
    this.lotBatches = products.map((product, index) => {
      const manufactureDate = new Date(today.getFullYear(), today.getMonth() - Math.floor(Math.random() * 6), 1);
      const expiryMonths = product.hasOwnProperty("drugType") ? 24 : 36;
      const expiryDate = new Date(manufactureDate);
      expiryDate.setMonth(expiryDate.getMonth() + expiryMonths);
      const receivedQty = 100 + Math.floor(Math.random() * 900);
      const currentStock = Math.floor(receivedQty * (0.3 + Math.random() * 0.7));
      return {
        lotNumber: `LOT${today.getFullYear()}${String(index + 1).padStart(4, "0")}`,
        productCode: "productCode" in product ? product.productCode : "deviceCode" in product ? product.deviceCode : "",
        productName: "productName" in product ? product.productName : "deviceName" in product ? product.deviceName : "",
        manufacturingDate: manufactureDate,
        expiryDate,
        quantity: receivedQty,
        receivedQuantity: receivedQty,
        currentStock,
        supplierCode: `SUP-${String(index % 5 + 1).padStart(3, "0")}`,
        supplierName: ["\uD55C\uAD6D\uC81C\uC57D", "\uB300\uD55C\uC57D\uD488", "\uAE00\uB85C\uBC8C\uC81C\uC57D", "\uBA54\uB514\uD31C", "\uBC14\uC774\uC624\uD14D"][index % 5],
        receiveDate: new Date(manufactureDate.getTime() + 7 * 24 * 60 * 60 * 1e3),
        storageLocation: index % 4 === 0 ? "COLD-A01" : `ROOM-${String.fromCharCode(65 + index % 3)}${String(index % 10 + 1).padStart(2, "0")}`,
        status: currentStock > 0 ? "active" : "expired",
        qualityTestResult: "pass",
        serialNumbers: index < 2 ? this.generateSerialNumbersForLot(3) : void 0
      };
    });
  }
  generateSerialNumbersForLot(count) {
    const serials = [];
    for (let i = 0; i < count; i++) {
      serials.push(`SN${Date.now()}${String(i).padStart(4, "0")}`);
    }
    return serials;
  }
  initializeSerialNumbers() {
    const narcoticDrugs = this.pharmaceuticals.filter((p) => p.narcotic);
    const implantableDevices = this.medicalDevices.filter((d) => d.implantable);
    const today = /* @__PURE__ */ new Date();
    this.serialNumbers = [];
    let serialIndex = 0;
    narcoticDrugs.forEach((drug) => {
      for (let i = 0; i < 5; i++) {
        const manufactureDate = new Date(today.getFullYear(), today.getMonth() - 3, 1);
        const expiryDate = new Date(manufactureDate);
        expiryDate.setMonth(expiryDate.getMonth() + 24);
        const serial = {
          serialNumber: `SN-NAR-${today.getFullYear()}-${String(serialIndex++).padStart(6, "0")}`,
          productCode: drug.productCode,
          productName: drug.productName,
          lotNumber: `LOT${today.getFullYear()}${String(serialIndex).padStart(4, "0")}`,
          manufacturingDate: manufactureDate,
          expiryDate,
          status: i < 3 ? "distributed" : "available",
          rfidTag: `RFID${Date.now()}${serialIndex}`,
          receiveDate: new Date(today.getTime() - (60 - i * 10) * 24 * 60 * 60 * 1e3),
          shipDate: i < 3 ? new Date(today.getTime() - (30 - i * 10) * 24 * 60 * 60 * 1e3) : void 0,
          destinationCode: i < 3 ? `HOSP-${String(i + 1).padStart(3, "0")}` : void 0,
          trackingHistory: this.generateTrackingHistory(i < 3)
        };
        this.serialNumbers.push(serial);
      }
    });
    implantableDevices.forEach((device) => {
      for (let i = 0; i < 3; i++) {
        const manufactureDate = new Date(today.getFullYear(), today.getMonth() - 6, 15);
        const expiryDate = new Date(manufactureDate);
        expiryDate.setMonth(expiryDate.getMonth() + 36);
        const serial = {
          serialNumber: `SN-DEV-${today.getFullYear()}-${String(serialIndex++).padStart(6, "0")}`,
          productCode: device.deviceCode,
          productName: device.deviceName,
          lotNumber: `LOT${today.getFullYear()}${String(serialIndex).padStart(4, "0")}`,
          manufacturingDate: manufactureDate,
          expiryDate,
          status: i === 0 ? "distributed" : "available",
          rfidTag: `RFID${Date.now()}${serialIndex}`,
          receiveDate: new Date(today.getTime() - (90 - i * 20) * 24 * 60 * 60 * 1e3),
          shipDate: i === 0 ? new Date(today.getTime() - 15 * 24 * 60 * 60 * 1e3) : void 0,
          destinationCode: i === 0 ? "HOSP-001" : void 0,
          trackingHistory: this.generateTrackingHistory(i === 0)
        };
        this.serialNumbers.push(serial);
      }
    });
  }
  generateTrackingHistory(distributed) {
    const today = /* @__PURE__ */ new Date();
    const history = [
      {
        event: "receive",
        location: "RECEIVING-DOCK",
        timestamp: new Date(today.getTime() - 60 * 24 * 60 * 60 * 1e3),
        user: "\uC785\uACE0\uB2F4\uB2F9\uC790",
        notes: "\uC785\uACE0 \uAC80\uC218 \uC644\uB8CC"
      },
      {
        event: "store",
        location: "STORAGE-A01",
        timestamp: new Date(today.getTime() - 59 * 24 * 60 * 60 * 1e3),
        user: "\uCC3D\uACE0\uAD00\uB9AC\uC790",
        notes: "\uBCF4\uAD00\uC704\uCE58 \uBC30\uC815"
      }
    ];
    if (distributed) {
      history.push({
        event: "pick",
        location: "STORAGE-A01",
        timestamp: new Date(today.getTime() - 31 * 24 * 60 * 60 * 1e3),
        user: "\uD53C\uD0B9\uB2F4\uB2F9\uC790",
        notes: "\uCD9C\uACE0 \uD53C\uD0B9"
      }, {
        event: "ship",
        location: "SHIPPING-DOCK",
        timestamp: new Date(today.getTime() - 30 * 24 * 60 * 60 * 1e3),
        user: "\uCD9C\uACE0\uB2F4\uB2F9\uC790",
        notes: "\uCD9C\uACE0 \uC644\uB8CC"
      });
    }
    return history;
  }
  initializeStorageZones() {
    this.storageZones = [
      {
        zoneId: "ZONE-001",
        zoneName: "\uC77C\uBC18 \uC0C1\uC628 \uCC3D\uACE0 A",
        zoneType: "room",
        temperatureRange: { min: 15, max: 25 },
        humidityRange: { min: 40, max: 60 },
        capacity: 1e4,
        currentOccupancy: 7500,
        products: this.pharmaceuticals.filter((p) => p.temperatureControl === "room").slice(0, 5).map((p) => p.productCode),
        lastInspection: /* @__PURE__ */ new Date()
      },
      {
        zoneId: "ZONE-002",
        zoneName: "\uB0C9\uC7A5 \uCC3D\uACE0 B",
        zoneType: "refrigerated",
        temperatureRange: { min: 2, max: 8 },
        humidityRange: { min: 40, max: 60 },
        capacity: 5e3,
        currentOccupancy: 3200,
        products: this.pharmaceuticals.filter((p) => p.temperatureControl === "refrigerated").map((p) => p.productCode),
        lastInspection: /* @__PURE__ */ new Date()
      },
      {
        zoneId: "ZONE-003",
        zoneName: "\uB0C9\uB3D9 \uCC3D\uACE0 C",
        zoneType: "frozen",
        temperatureRange: { min: -25, max: -15 },
        humidityRange: { min: 30, max: 50 },
        capacity: 3e3,
        currentOccupancy: 1500,
        products: [],
        lastInspection: /* @__PURE__ */ new Date()
      },
      {
        zoneId: "ZONE-004",
        zoneName: "\uACA9\uB9AC \uCC3D\uACE0 (\uBD88\uD569\uACA9/\uBC18\uD488)",
        zoneType: "quarantine",
        temperatureRange: { min: 15, max: 25 },
        humidityRange: { min: 40, max: 60 },
        capacity: 1e3,
        currentOccupancy: 200,
        products: [],
        lastInspection: /* @__PURE__ */ new Date()
      }
    ];
  }
  initializeTemperatureRecords() {
    const today = /* @__PURE__ */ new Date();
    this.temperatureRecords = [];
    this.storageZones.forEach((zone) => {
      for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour += 6) {
          const recordDate = new Date(today);
          recordDate.setDate(recordDate.getDate() - day);
          recordDate.setHours(hour, 0, 0, 0);
          const baseTemp = zone.temperatureRange.min + (zone.temperatureRange.max - zone.temperatureRange.min) / 2;
          const tempVariation = (Math.random() - 0.5) * 2;
          const temperature = baseTemp + tempVariation;
          const baseHumidity = zone.humidityRange.min + (zone.humidityRange.max - zone.humidityRange.min) / 2;
          const humidityVariation = (Math.random() - 0.5) * 10;
          const humidity = baseHumidity + humidityVariation;
          const isAlert = temperature < zone.temperatureRange.min || temperature > zone.temperatureRange.max || humidity < zone.humidityRange.min || humidity > zone.humidityRange.max;
          this.temperatureRecords.push({
            id: `TEMP-${zone.zoneId}-${recordDate.getTime()}`,
            zoneId: zone.zoneId,
            recordDate,
            location: zone.zoneName,
            temperature: Math.round(temperature * 10) / 10,
            humidity: Math.round(humidity * 10) / 10,
            recordedBy: hour === 6 ? "\uC544\uCE68\uB2F4\uB2F9\uC790" : hour === 12 ? "\uC810\uC2EC\uB2F4\uB2F9\uC790" : hour === 18 ? "\uC800\uB141\uB2F4\uB2F9\uC790" : "\uC57C\uAC04\uB2F4\uB2F9\uC790",
            deviceId: `SENSOR-${zone.zoneId}`,
            status: isAlert ? "alert" : "normal",
            alertTriggered: isAlert,
            notes: isAlert ? "\uC628\uC2B5\uB3C4 \uBC94\uC704 \uC774\uD0C8" : void 0
          });
        }
      }
    });
    this.temperatureAlerts = this.temperatureRecords.filter((r) => r.alertTriggered);
  }
  initializeReceiptInspections() {
    const today = /* @__PURE__ */ new Date();
    this.receiptInspections = [];
    const recentOrders = this.orders.filter((o) => o.status === "completed").slice(0, 10);
    recentOrders.forEach((order, index) => {
      order.items.forEach((item) => {
        const receiptDate = new Date(order.orderDate);
        receiptDate.setDate(receiptDate.getDate() + 3);
        const inspection = {
          id: `INSP-${today.getFullYear()}${String(index + 1).padStart(5, "0")}`,
          receiptDate,
          supplierCode: `SUP-${String(index % 5 + 1).padStart(3, "0")}`,
          supplierName: order.supplier,
          productCode: item.productCode,
          productName: item.productName,
          lotNumber: `LOT${today.getFullYear()}${String(index + 1).padStart(4, "0")}`,
          quantity: item.quantity,
          inspector: ["\uAE40\uAC80\uC218", "\uC774\uD655\uC778", "\uBC15\uAC80\uC0AC"][index % 3],
          inspectionDate: receiptDate,
          temperatureCheck: 5 + Math.random() * 3,
          // 2-8도 목표
          packagingIntact: true,
          labelCorrect: true,
          quantityVerified: true,
          qualityAcceptable: true,
          documentComplete: true,
          expiryDateCheck: true,
          damageFound: false,
          approvalStatus: index % 15 === 0 ? "rejected" : "approved",
          rejectionReason: index % 15 === 0 ? "\uD3EC\uC7A5 \uD30C\uC190" : void 0,
          notes: index % 15 === 0 ? "\uBC18\uD488 \uCC98\uB9AC \uD544\uC694" : "\uC815\uC0C1 \uC785\uACE0"
        };
        this.receiptInspections.push(inspection);
      });
    });
    this.filteredInspections = [...this.receiptInspections];
  }
  initializeReturnRecalls() {
    const today = /* @__PURE__ */ new Date();
    this.returnRecalls = [];
    const returns = [
      {
        id: "RTN-001",
        type: "return",
        date: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1e3),
        productCode: "DRUG-001",
        productName: "\uC544\uBAA9\uC2DC\uC2E4\uB9B0\uC815",
        lotNumber: "LOT20230001",
        quantity: 10,
        reason: "\uC720\uD6A8\uAE30\uAC04 \uC784\uBC15",
        requestedBy: "\uC11C\uC6B8\uC57D\uAD6D",
        approvedBy: "\uBC18\uD488\uB2F4\uB2F9\uC790",
        status: "completed",
        customerNotified: true,
        authorityReported: false,
        inspectionResult: "dispose",
        disposalMethod: "\uC18C\uAC01",
        disposalDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1e3),
        notes: "\uC815\uC0C1 \uBC18\uD488 \uCC98\uB9AC \uC644\uB8CC"
      },
      {
        id: "RTN-002",
        type: "return",
        date: new Date(today.getTime() - 10 * 24 * 60 * 60 * 1e3),
        productCode: "DEV-001",
        productName: "\uC77C\uD68C\uC6A9\uC8FC\uC0AC\uAE30",
        lotNumber: "LOT20230005",
        quantity: 50,
        reason: "\uD3EC\uC7A5 \uBD88\uB7C9",
        requestedBy: "\uB300\uD55C\uBCD1\uC6D0",
        status: "pending",
        customerNotified: true,
        authorityReported: false,
        notes: "\uAC80\uC0AC \uB300\uAE30 \uC911"
      }
    ];
    const recalls = [
      {
        id: "RCL-001",
        type: "recall",
        date: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1e3),
        productCode: "DRUG-005",
        productName: "\uBAA8\uB974\uD540\uC8FC\uC0AC",
        lotNumber: "LOT20230002",
        quantity: 100,
        reason: "\uD488\uC9C8 \uACB0\uD568 \uBC1C\uACAC",
        requestedBy: "\uC2DD\uC57D\uCC98",
        approvedBy: "\uD488\uC9C8\uBCF4\uC99D\uD300\uC7A5",
        status: "approved",
        recallLevel: "urgent",
        affectedBatches: ["LOT20230002", "LOT20230003"],
        customerNotified: true,
        authorityReported: true,
        notes: "\uAE34\uAE09 \uD68C\uC218 \uC9C4\uD589 \uC911"
      }
    ];
    this.returnRecalls = [...returns, ...recalls];
    this.filteredReturnRecalls = [...this.returnRecalls];
  }
  initializeHIRAReports() {
    const today = /* @__PURE__ */ new Date();
    this.hiraReports = [];
    const completedOrders = this.orders.filter((o) => o.status === "completed").slice(0, 5);
    completedOrders.forEach((order, index) => {
      const report = {
        reportId: `HIRA-${today.getFullYear()}${String(index + 1).padStart(6, "0")}`,
        reportDate: new Date(order.orderDate),
        reportStatus: index === 0 ? "draft" : index === 1 ? "submitted" : "accepted",
        confirmationNumber: index > 1 ? `CONF-${Date.now()}-${index}` : void 0,
        supplierInfo: {
          businessNumber: "123-45-67890",
          supplierCode: "SUP-001",
          supplierName: order.supplier,
          reporterName: "\uBCF4\uACE0\uB2F4\uB2F9\uC790",
          reporterContact: "02-1234-5678"
        },
        supplyInfo: {
          supplyDate: this.formatDateYYYYMMDD(order.orderDate),
          supplyType: "\uC9C1\uC811\uACF5\uAE09",
          destinationType: "\uBCD1\uC6D0",
          destinationCode: `HOSP-${String(index + 1).padStart(3, "0")}`,
          destinationName: `${["\uC11C\uC6B8", "\uBD80\uC0B0", "\uB300\uAD6C", "\uC778\uCC9C", "\uAD11\uC8FC"][index % 5]}\uBCD1\uC6D0`
        },
        items: order.items.map((item, itemIndex) => ({
          itemCode: item.productCode,
          approvalNumber: `20230${String(itemIndex + 1).padStart(5, "0")}`,
          productName: item.productName,
          manufacturer: ["\uD55C\uAD6D\uC81C\uC57D", "\uB300\uD55C\uC57D\uD488"][itemIndex % 2],
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          totalAmount: item.totalPrice,
          lotNumber: `LOT${today.getFullYear()}${String(itemIndex + 1).padStart(4, "0")}`,
          expiryDate: this.formatDateYYYYMMDD(new Date(today.getTime() + 730 * 24 * 60 * 60 * 1e3)),
          serialNumbers: void 0
        })),
        errorMessages: index === 1 ? ["\uD488\uBAA9\uCF54\uB4DC \uD655\uC778 \uD544\uC694"] : [],
        submittedBy: index > 0 ? "\uC81C\uCD9C\uB2F4\uB2F9\uC790" : void 0,
        submittedAt: index > 0 ? new Date(order.orderDate.getTime() + 24 * 60 * 60 * 1e3) : void 0
      };
      this.hiraReports.push(report);
    });
    this.filteredHIRAReports = [...this.hiraReports];
  }
  formatDateYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  }
  checkExpiringProducts() {
    const today = /* @__PURE__ */ new Date();
    const threeMonthsLater = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1e3);
    this.expiringLots = this.lotBatches.filter((lot) => {
      return lot.expiryDate <= threeMonthsLater && lot.expiryDate > today && lot.currentStock > 0;
    });
    this.expiredLots = this.lotBatches.filter((lot) => {
      return lot.expiryDate <= today && lot.currentStock > 0;
    });
  }
  // ===== 유효기간 관리 함수 =====
  expiryTab = "expiring";
  getDaysExpired(expiryDate) {
    const today = /* @__PURE__ */ new Date();
    const diffTime = today.getTime() - expiryDate.getTime();
    return Math.floor(diffTime / (1e3 * 60 * 60 * 24));
  }
  getDaysUntilExpiry(expiryDate) {
    const today = /* @__PURE__ */ new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    return Math.floor(diffTime / (1e3 * 60 * 60 * 24));
  }
  getExpiryDaysDisplay(expiryDate) {
    const days = this.getDaysUntilExpiry(expiryDate);
    if (days < 0) {
      return `${Math.abs(days)}\uC77C \uACBD\uACFC`;
    }
    return `${days}\uC77C \uB0A8\uC74C`;
  }
  isExpired(expiryDate) {
    return expiryDate <= /* @__PURE__ */ new Date();
  }
  isExpiring(expiryDate) {
    const today = /* @__PURE__ */ new Date();
    const threeMonthsLater = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1e3);
    return expiryDate > today && expiryDate <= threeMonthsLater;
  }
  getExpiryStatus(expiryDate) {
    if (this.isExpired(expiryDate))
      return "\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC";
    if (this.isExpiring(expiryDate))
      return "\uC720\uD6A8\uAE30\uAC04 \uC784\uBC15";
    return "\uC815\uC0C1";
  }
  getLotsSortedByExpiry() {
    return [...this.lotBatches].sort((a, b) => a.expiryDate.getTime() - b.expiryDate.getTime());
  }
  handleExpiredProduct(lot) {
    this.confirmationDialog.confirm(`${lot.productName} (${lot.lotNumber})\uC744(\uB97C) \uACA9\uB9AC \uCC98\uB9AC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`, "\uACA9\uB9AC \uCC98\uB9AC", "\uACA9\uB9AC", "\uCDE8\uC18C", "warn").subscribe((result) => {
      if (result) {
        lot.status = "quarantine";
        this.notification.show("\uACA9\uB9AC \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD3D0\uAE30 \uC808\uCC28\uB97C \uC9C4\uD589\uD574\uC8FC\uC138\uC694.");
        this.checkExpiringProducts();
      }
    });
  }
  promoteSale(lot) {
    this.notification.showLong(`${lot.productName} (${lot.lotNumber}) \uD310\uB9E4 \uCD09\uC9C4 \uC54C\uB9BC\uC774 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  }
  viewLotDetail(lot) {
    this.selectedLot = lot;
    this.showLotDetailModal = true;
  }
  closeLotDetailModal() {
    this.showLotDetailModal = false;
    this.selectedLot = null;
  }
  // ===== 입고검수 관리 함수 =====
  inspectionStatusFilter = "all";
  inspectionSearchQuery = "";
  openNewInspectionModal() {
    this.showInspectionModal = true;
  }
  closeInspectionModal() {
    this.showInspectionModal = false;
  }
  getInspectionCountByStatus(status) {
    return this.receiptInspections.filter((i) => i.approvalStatus === status).length;
  }
  onInspectionFilterChange() {
    let filtered = [...this.receiptInspections];
    if (this.inspectionStatusFilter !== "all") {
      filtered = filtered.filter((i) => i.approvalStatus === this.inspectionStatusFilter);
    }
    if (this.inspectionSearchQuery.trim()) {
      const query = this.inspectionSearchQuery.toLowerCase();
      filtered = filtered.filter((i) => i.productName.toLowerCase().includes(query) || i.lotNumber.toLowerCase().includes(query) || i.supplierName.toLowerCase().includes(query));
    }
    this.filteredInspections = filtered;
  }
  isTempOk(temp) {
    return temp >= 2 && temp <= 8;
  }
  getInspectionStatusClass(status) {
    const statusMap = {
      "pending": "pending",
      "approved": "approved",
      "rejected": "rejected",
      "conditional": "conditional"
    };
    return statusMap[status] || "";
  }
  getInspectionStatusLabel(status) {
    const labelMap = {
      "pending": "\uB300\uAE30",
      "approved": "\uC2B9\uC778",
      "rejected": "\uBC18\uB824",
      "conditional": "\uC870\uAC74\uBD80"
    };
    return labelMap[status] || status;
  }
  viewInspectionDetail(inspection) {
    this.selectedInspection = inspection;
    this.showInspectionDetailModal = true;
  }
  closeInspectionDetailModal() {
    this.showInspectionDetailModal = false;
    this.selectedInspection = null;
  }
  approveInspection(inspection) {
    this.confirmationDialog.confirm(`${inspection.productName}\uC758 \uC785\uACE0\uB97C \uC2B9\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`, "\uC785\uACE0 \uC2B9\uC778", "\uC2B9\uC778", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        inspection.approvalStatus = "approved";
        this.notification.show("\uC785\uACE0\uAC00 \uC2B9\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        this.onInspectionFilterChange();
      }
    });
  }
  rejectInspection(inspection) {
    const reason = prompt("\uBC18\uB824 \uC0AC\uC720\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694:");
    if (reason) {
      inspection.approvalStatus = "rejected";
      inspection.rejectionReason = reason;
      this.notification.show("\uC785\uACE0\uAC00 \uBC18\uB824\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
      this.onInspectionFilterChange();
    }
  }
  // ===== 온습도 관리 함수 =====
  tempZoneFilter = "all";
  tempDateRange = "week";
  tempShowAbnormalOnly = false;
  filteredTemperatureRecords = [];
  getZoneIcon(zoneType) {
    switch (zoneType) {
      case "room":
        return "\u{1F3E0}";
      case "refrigerated":
        return "\u2744\uFE0F";
      case "frozen":
        return "\u{1F9CA}";
      case "quarantine":
        return "\u26A0\uFE0F";
      default:
        return "\u{1F4E6}";
    }
  }
  getCurrentReading(zoneId) {
    const zoneRecords = this.temperatureRecords.filter((r) => r.zoneId === zoneId);
    return zoneRecords.sort((a, b) => b.recordDate.getTime() - a.recordDate.getTime())[0] || {
      id: "",
      zoneId,
      temperature: 0,
      humidity: 0,
      recordDate: /* @__PURE__ */ new Date(),
      recordedBy: "",
      deviceId: "",
      status: "normal",
      alertTriggered: false
    };
  }
  getZone(zoneId) {
    return this.storageZones.find((z) => z.zoneId === zoneId) || this.storageZones[0];
  }
  getZoneName(zoneId) {
    return this.getZone(zoneId).zoneName;
  }
  isTempInRange(temp, zone) {
    return temp >= zone.temperatureRange.min && temp <= zone.temperatureRange.max;
  }
  isHumidityInRange(humidity, zone) {
    return humidity >= zone.humidityRange.min && humidity <= zone.humidityRange.max;
  }
  isZoneAbnormal(zone) {
    const currentReading = this.getCurrentReading(zone.zoneId);
    return !this.isTempInRange(currentReading.temperature, zone) || !this.isHumidityInRange(currentReading.humidity, zone);
  }
  getTemperatureAlerts() {
    return this.temperatureAlerts.slice(0, 10);
  }
  onTempFilterChange() {
    let filtered = [...this.temperatureRecords];
    if (this.tempZoneFilter !== "all") {
      filtered = filtered.filter((r) => r.zoneId === this.tempZoneFilter);
    }
    const today = /* @__PURE__ */ new Date();
    if (this.tempDateRange === "today") {
      filtered = filtered.filter((r) => {
        const recordDate = new Date(r.recordDate);
        return recordDate.toDateString() === today.toDateString();
      });
    } else if (this.tempDateRange === "week") {
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      filtered = filtered.filter((r) => r.recordDate >= weekAgo);
    } else if (this.tempDateRange === "month") {
      const monthAgo = new Date(today);
      monthAgo.setDate(monthAgo.getDate() - 30);
      filtered = filtered.filter((r) => r.recordDate >= monthAgo);
    }
    if (this.tempShowAbnormalOnly) {
      filtered = filtered.filter((r) => r.alertTriggered);
    }
    this.filteredTemperatureRecords = filtered.sort((a, b) => b.recordDate.getTime() - a.recordDate.getTime());
  }
  viewTemperatureDetail(record) {
    const zone = this.getZone(record.zoneId);
    this.notification.showLong(`\uC628\uC2B5\uB3C4 \uC0C1\uC138 \uC815\uBCF4

\uBCF4\uAD00\uAD6C\uC5ED: ${zone.zoneName}
\uCE21\uC815\uC77C\uC2DC: ${record.recordDate.toLocaleString()}
\uC628\uB3C4: ${record.temperature}\xB0C (\uC815\uC0C1\uBC94\uC704: ${zone.temperatureRange.min}~${zone.temperatureRange.max}\xB0C)
\uC2B5\uB3C4: ${record.humidity}% (\uC815\uC0C1\uBC94\uC704: ${zone.humidityRange.min}~${zone.humidityRange.max}%)
\uCE21\uC815\uC790: ${record.recordedBy}
\uC0C1\uD0DC: ${record.alertTriggered ? "\uC774\uC0C1" : "\uC815\uC0C1"}
\uBE44\uACE0: ${record.notes || "\uC5C6\uC74C"}`);
  }
  acknowledgeAlert(record) {
    this.confirmationDialog.confirm("\uC774 \uC54C\uB9BC\uC744 \uD655\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", "\uC54C\uB9BC \uD655\uC778", "\uD655\uC778", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        this.temperatureAlerts = this.temperatureAlerts.filter((a) => a.id !== record.id);
        this.notification.show("\uC54C\uB9BC\uC774 \uD655\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
      }
    });
  }
  downloadTemperatureReport() {
    this.notification.show("\uC628\uC2B5\uB3C4 \uAD00\uB9AC \uBCF4\uACE0\uC11C\uAC00 \uB2E4\uC6B4\uB85C\uB4DC\uB429\uB2C8\uB2E4.\n(CSV \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5)");
  }
  // ===== 반품/회수 관리 함수 =====
  returnTypeFilter = "all";
  returnStatusFilter = "all";
  returnSearchQuery = "";
  openNewReturnModal() {
    this.notification.show("\uBC18\uD488 \uB4F1\uB85D \uBAA8\uB2EC\uC744 \uC5FD\uB2C8\uB2E4.\n(\uBC18\uD488 \uC0AC\uC720, \uC81C\uD488, \uC218\uB7C9 \uB4F1\uC744 \uC785\uB825)");
  }
  openNewRecallModal() {
    this.notification.show("\uD68C\uC218 \uB4F1\uB85D \uBAA8\uB2EC\uC744 \uC5FD\uB2C8\uB2E4.\n(\uD68C\uC218 \uB4F1\uAE09, \uC601\uD5A5 \uBC30\uCE58, \uACE0\uAC1D \uD1B5\uC9C0 \uB4F1)");
  }
  getReturnRecallCount(type, status) {
    let filtered = this.returnRecalls;
    if (type !== "all") {
      filtered = filtered.filter((r) => r.type === type);
    }
    if (status !== "all") {
      filtered = filtered.filter((r) => r.status === status);
    }
    return filtered.length;
  }
  getUrgentRecallCount() {
    return this.returnRecalls.filter((r) => r.type === "recall" && r.recallLevel === "urgent").length;
  }
  getAuthorityReportedCount() {
    return this.returnRecalls.filter((r) => r.authorityReported).length;
  }
  onReturnFilterChange() {
    let filtered = [...this.returnRecalls];
    if (this.returnTypeFilter !== "all") {
      filtered = filtered.filter((r) => r.type === this.returnTypeFilter);
    }
    if (this.returnStatusFilter !== "all") {
      filtered = filtered.filter((r) => r.status === this.returnStatusFilter);
    }
    if (this.returnSearchQuery.trim()) {
      const query = this.returnSearchQuery.toLowerCase();
      filtered = filtered.filter((r) => r.productName.toLowerCase().includes(query) || r.lotNumber.toLowerCase().includes(query) || r.reason.toLowerCase().includes(query));
    }
    this.filteredReturnRecalls = filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  getRecallLevelLabel(level) {
    switch (level) {
      case "urgent":
        return "\uAE34\uAE09";
      case "high":
        return "\uB192\uC74C";
      case "medium":
        return "\uBCF4\uD1B5";
      case "low":
        return "\uB0AE\uC74C";
      default:
        return level;
    }
  }
  getReturnStatusLabel(status) {
    switch (status) {
      case "pending":
        return "\uB300\uAE30";
      case "approved":
        return "\uC2B9\uC778";
      case "rejected":
        return "\uBC18\uB824";
      case "completed":
        return "\uC644\uB8CC";
      default:
        return status;
    }
  }
  viewReturnDetail(item) {
    let message = `${item.type === "return" ? "\uBC18\uD488" : "\uD68C\uC218"} \uC0C1\uC138 \uC815\uBCF4

`;
    message += `ID: ${item.id}
`;
    message += `\uC81C\uD488\uBA85: ${item.productName}
`;
    message += `\uC81C\uC870\uBC88\uD638: ${item.lotNumber}
`;
    message += `\uC218\uB7C9: ${item.quantity}
`;
    message += `\uC0AC\uC720: ${item.reason}
`;
    message += `\uC2E0\uCCAD\uC790: ${item.requestedBy}
`;
    message += `\uC0C1\uD0DC: ${this.getReturnStatusLabel(item.status)}
`;
    if (item.type === "recall") {
      message += `
[\uD68C\uC218 \uC815\uBCF4]
`;
      message += `\uAE34\uAE09\uB3C4: ${this.getRecallLevelLabel(item.recallLevel)}
`;
      message += `\uC601\uD5A5 \uBC30\uCE58: ${item.affectedBatches?.join(", ") || "\uC5C6\uC74C"}
`;
      message += `\uACE0\uAC1D \uD1B5\uC9C0: ${item.customerNotified ? "\uC644\uB8CC" : "\uBBF8\uC644\uB8CC"}
`;
      message += `\uB2F9\uAD6D \uBCF4\uACE0: ${item.authorityReported ? "\uC644\uB8CC" : "\uBBF8\uC644\uB8CC"}
`;
    }
    alert(message);
  }
  approveReturn(item) {
    this.confirmationDialog.confirm(`${item.productName}\uC758 ${item.type === "return" ? "\uBC18\uD488" : "\uD68C\uC218"}\uC744 \uC2B9\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`, `${item.type === "return" ? "\uBC18\uD488" : "\uD68C\uC218"} \uC2B9\uC778`, "\uC2B9\uC778", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        item.status = "approved";
        item.approvedBy = "\uD604\uC7AC\uC0AC\uC6A9\uC790";
        this.notification.show("\uC2B9\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        this.onReturnFilterChange();
      }
    });
  }
  completeReturn(item) {
    this.confirmationDialog.confirm(`${item.productName}\uC758 \uCC98\uB9AC\uB97C \uC644\uB8CC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`, "\uCC98\uB9AC \uC644\uB8CC", "\uC644\uB8CC", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        item.status = "completed";
        this.notification.show("\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        this.onReturnFilterChange();
      }
    });
  }
  reportToAuthority(item) {
    this.confirmationDialog.confirm(`${item.productName}\uC758 \uD68C\uC218\uB97C \uB2F9\uAD6D\uC5D0 \uBCF4\uACE0\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`, "\uB2F9\uAD6D \uBCF4\uACE0", "\uBCF4\uACE0", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        item.authorityReported = true;
        this.notification.show("\uB2F9\uAD6D \uBCF4\uACE0\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        this.onReturnFilterChange();
      }
    });
  }
  // ===== 심평원 보고 관리 함수 =====
  hiraReportTypeFilter = "all";
  hiraStatusFilter = "all";
  hiraSearchQuery = "";
  openNewHIRAReportModal() {
    this.notification.show("\uC2EC\uD3C9\uC6D0 \uBCF4\uACE0\uC11C \uC791\uC131 \uBAA8\uB2EC\uC744 \uC5FD\uB2C8\uB2E4.\n(\uACF5\uAE09\uB0B4\uC5ED \uC815\uBCF4 \uC785\uB825)");
  }
  syncHIRAReports() {
    this.notification.show("\uC2EC\uD3C9\uC6D0 \uC11C\uBC84\uC640 \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4...");
  }
  getHIRAReportCount(status) {
    return this.hiraReports.filter((r) => r.reportStatus === status).length;
  }
  onHIRAFilterChange() {
    let filtered = [...this.hiraReports];
    if (this.hiraReportTypeFilter !== "all") {
      if (this.hiraReportTypeFilter === "device") {
        filtered = [];
      }
    }
    if (this.hiraStatusFilter !== "all") {
      filtered = filtered.filter((r) => r.reportStatus === this.hiraStatusFilter);
    }
    if (this.hiraSearchQuery.trim()) {
      const query = this.hiraSearchQuery.toLowerCase();
      filtered = filtered.filter((r) => r.reportId.toLowerCase().includes(query) || r.items.some((item) => item.productName.toLowerCase().includes(query)));
    }
    this.filteredHIRAReports = filtered.sort((a, b) => b.reportDate.getTime() - a.reportDate.getTime());
  }
  getHIRAStatusLabel(status) {
    switch (status) {
      case "draft":
        return "\uC791\uC131\uC911";
      case "submitted":
        return "\uC81C\uCD9C\uC644\uB8CC";
      case "accepted":
        return "\uC811\uC218\uC644\uB8CC";
      case "rejected":
        return "\uC624\uB958";
      default:
        return status;
    }
  }
  viewHIRADetail(report) {
    let message = `\uC2EC\uD3C9\uC6D0 \uBCF4\uACE0\uC11C \uC0C1\uC138 \uC815\uBCF4

`;
    message += `\uBCF4\uACE0ID: ${report.reportId}
`;
    message += `\uACF5\uAE09\uC790: ${report.supplierInfo.supplierName}
`;
    message += `\uD488\uBAA9 \uC218: ${report.items.length}\uAC1C
`;
    message += `\uBCF4\uACE0\uC77C\uC790: ${report.reportDate.toLocaleDateString()}
`;
    message += `\uC0C1\uD0DC: ${this.getHIRAStatusLabel(report.reportStatus)}
`;
    if (report.confirmationNumber) {
      message += `\uD655\uC778\uBC88\uD638: ${report.confirmationNumber}
`;
    }
    if (report.errorMessages && report.errorMessages.length > 0) {
      message += `
\uC624\uB958 \uBA54\uC2DC\uC9C0:
${report.errorMessages.join("\n")}
`;
    }
    alert(message);
  }
  editHIRAReport(report) {
    this.notification.showLong(`${report.reportId} \uBCF4\uACE0\uC11C\uB97C \uC218\uC815\uD569\uB2C8\uB2E4.`);
  }
  submitHIRAReport(report) {
    this.confirmationDialog.confirm(`${report.reportId} \uBCF4\uACE0\uC11C\uB97C \uC2EC\uD3C9\uC6D0\uC5D0 \uC81C\uCD9C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`, "\uC2EC\uD3C9\uC6D0 \uC81C\uCD9C", "\uC81C\uCD9C", "\uCDE8\uC18C").subscribe((result) => {
      if (result) {
        report.reportStatus = "submitted";
        report.submittedAt = /* @__PURE__ */ new Date();
        this.notification.show("\uC2EC\uD3C9\uC6D0\uC5D0 \uC81C\uCD9C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        this.onHIRAFilterChange();
      }
    });
  }
  viewHIRAErrors(report) {
    const errors = report.errorMessages && report.errorMessages.length > 0 ? report.errorMessages.join("\n") : "\uC624\uB958 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.";
    this.notification.showLong(`\uC624\uB958 \uB0B4\uC6A9:

${errors}`);
  }
  // ===== 일련번호 추적 관리 함수 =====
  serialSearchQuery = "";
  serialStatusFilter = "all";
  filteredSerialNumbers = [];
  onSerialSearch() {
    let filtered = [...this.serialNumbers];
    if (this.serialStatusFilter !== "all") {
      filtered = filtered.filter((s) => s.status === this.serialStatusFilter);
    }
    if (this.serialSearchQuery.trim()) {
      const query = this.serialSearchQuery.toLowerCase();
      filtered = filtered.filter((s) => s.serialNumber.toLowerCase().includes(query) || s.rfidTag && s.rfidTag.toLowerCase().includes(query) || s.productName.toLowerCase().includes(query) || s.lotNumber.toLowerCase().includes(query));
    }
    this.filteredSerialNumbers = filtered.sort((a, b) => {
      const aLastEvent = a.trackingHistory.length > 0 ? a.trackingHistory[a.trackingHistory.length - 1].timestamp : /* @__PURE__ */ new Date(0);
      const bLastEvent = b.trackingHistory.length > 0 ? b.trackingHistory[b.trackingHistory.length - 1].timestamp : /* @__PURE__ */ new Date(0);
      return bLastEvent.getTime() - aLastEvent.getTime();
    });
  }
  setSerialStatusFilter(status) {
    this.serialStatusFilter = status;
    this.onSerialSearch();
  }
  getSerialNumberCount(status) {
    return this.serialNumbers.filter((s) => s.status === status).length;
  }
  getSerialStatusLabel(status) {
    switch (status) {
      case "available":
        return "\uC0AC\uC6A9\uAC00\uB2A5";
      case "distributed":
        return "\uCD9C\uD558\uB428";
      case "recalled":
        return "\uD68C\uC218\uB428";
      case "expired":
        return "\uB9CC\uB8CC\uB428";
      default:
        return status;
    }
  }
  viewSerialTimeline(serial) {
    let message = `\uC77C\uB828\uBC88\uD638 \uCD94\uC801 \uC774\uB825

`;
    message += `\uC77C\uB828\uBC88\uD638: ${serial.serialNumber}
`;
    message += `\uC81C\uD488\uBA85: ${serial.productName}
`;
    message += `\uD604\uC7AC \uC0C1\uD0DC: ${this.getSerialStatusLabel(serial.status)}
`;
    const lastEvent = serial.trackingHistory.length > 0 ? serial.trackingHistory[serial.trackingHistory.length - 1] : null;
    message += `\uD604\uC7AC \uC704\uCE58: ${lastEvent?.location || "\uBBF8\uC9C0\uC815"}

`;
    message += `\uCD94\uC801 \uC774\uBCA4\uD2B8 (\uCD1D ${serial.trackingHistory.length}\uAC74):

`;
    serial.trackingHistory.forEach((event, index) => {
      message += `${index + 1}. [${event.event}] ${event.timestamp.toLocaleString()}
`;
      message += `   \uC704\uCE58: ${event.location}
`;
      message += `   \uB2F4\uB2F9\uC790: ${event.user}
`;
      if (event.notes) {
        message += `   \uBE44\uACE0: ${event.notes}
`;
      }
      message += `
`;
    });
    alert(message);
  }
  printSerialLabel(serial) {
    this.notification.showLong(`${serial.serialNumber} \uB77C\uBCA8\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4.
(\uBC14\uCF54\uB4DC/RFID \uD0DC\uADF8 \uD3EC\uD568)`);
  }
  exportSerialNumbers() {
    this.notification.show("\uC77C\uB828\uBC88\uD638 \uBAA9\uB85D\uC744 \uB0B4\uBCF4\uB0C5\uB2C8\uB2E4.\n(Excel \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5)");
  }
  static \u0275fac = function ErpGeneratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpGeneratorComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ConfirmationDialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpGeneratorComponent, selectors: [["app-erp-generator"]], standalone: false, decls: 25, vars: 29, consts: [[3, "menuChange", "toolbarAction", "search", "rightPanelToggle", "leftPanelToggle", "erpTitle", "activeMenu", "recordCount", "isSearchMode", "searchResults", "isProcessing"], [1, "main-container"], [3, "menuAction", "close", 4, "ngIf"], [1, "erp-main-content"], ["class", "content-section", 4, "ngIf"], [3, "action", "close", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "menuAction", "close"], [1, "content-section"], [1, "welcome-section"], [1, "subtitle"], [1, "quick-actions"], [1, "action-card", 3, "click"], [1, "card-icon"], [1, "recent-section"], [1, "recent-list"], [1, "recent-item"], [1, "recent-icon"], [1, "recent-text"], [1, "recent-time"], [1, "section-header"], [1, "primary-btn", 3, "click"], [1, "icon"], [1, "filter-section"], ["appearance", "outline", 1, "filter-field"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "all"], ["value", "pending"], ["value", "approved"], ["value", "completed"], ["value", "cancelled"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "\uBC1C\uC8FC\uBC88\uD638, \uAC70\uB798\uCC98, \uB2F4\uB2F9\uC790 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], ["matSuffix", ""], [1, "table-container"], [1, "order-table"], ["class", "table-row", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "table-row", 3, "click"], [1, "amount"], [1, "action-cell", 3, "click"], ["title", "\uC0C1\uC138\uBCF4\uAE30", 1, "icon-btn", 3, "click"], ["title", "\uC0AD\uC81C", 1, "icon-btn", 3, "click"], ["colspan", "8", 1, "no-data"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-info"], [1, "page-btn", 3, "click"], ["value", "\uC758\uC57D\uD488"], ["value", "\uC758\uB8CC\uAE30\uAE30"], ["value", "\uC18C\uBAA8\uD488"], ["value", "\uC704\uC0DD\uC6A9\uD488"], ["value", "\uC0AC\uBB34\uC6A9\uD488"], ["value", "normal"], ["value", "low"], ["value", "out"], ["value", "excess"], ["matInput", "", "placeholder", "\uC81C\uD488\uCF54\uB4DC, \uC81C\uD488\uBA85, \uAC70\uB798\uCC98 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [1, "stock-cell"], ["title", "\uC7AC\uACE0\uC870\uC815", 1, "icon-btn", 3, "click"], ["colspan", "9", 1, "no-data"], ["value", "\uAC74\uAC15\uC2DD\uD488"], ["value", "active"], ["value", "inactive"], ["matInput", "", "placeholder", "\uAC70\uB798\uCC98\uCF54\uB4DC, \uC0C1\uD638\uBA85, \uB300\uD45C\uC790, \uC5F0\uB77D\uCC98 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [1, "icon-btn", 3, "click", "title"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "pending"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "overdue"], [1, "stat-icon", "paid"], [1, "stat-card", "highlight"], [1, "stat-icon", "balance"], [1, "stat-value", "large"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "confirmed"], ["value", "paid"], ["value", "overdue"], ["matInput", "", "placeholder", "\uC815\uC0B0\uBC88\uD638, \uAC70\uB798\uCC98\uCF54\uB4DC, \uAC70\uB798\uCC98\uBA85 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [3, "value"], [1, "amount", "paid"], [1, "amount", "return"], [1, "amount", "balance"], ["title", "\uB0B4\uBCF4\uB0B4\uAE30", 1, "icon-btn", 3, "click"], ["colspan", "10", 1, "no-data"], [1, "header-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "report-tabs"], [3, "click"], [1, "report-period-selector"], [1, "period-type", 3, "ngModelChange", "change", "ngModel"], ["value", "month"], ["appearance", "outline", 1, "month-select"], ["class", "report-content", 4, "ngIf"], [1, "report-content"], [1, "report-title"], [1, "report-summary-grid"], [1, "summary-card"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "unit"], [1, "report-detail-section"], ["matInput", "", "placeholder", "\uBC1C\uC8FC\uBC88\uD638, \uAC70\uB798\uCC98 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [1, "report-list-table"], [4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "list-summary"], [1, "order-id"], [1, "supplier-name"], [1, "text-center"], [1, "text-right", "amount"], [1, "btn-view", 3, "click"], [1, "no-data"], [3, "click", "disabled"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "category-report-list"], ["class", "category-item", 4, "ngFor", "ngForOf"], [1, "category-item"], [1, "category-header"], [1, "category-name"], [1, "category-stats"], [1, "order-count"], [1, "order-amount"], [1, "category-bar-container"], [1, "category-bar"], [1, "category-percentage"], [1, "supplier-report-table"], [1, "rank"], [1, "rank-badge"], [1, "text-right"], [1, "trend-chart"], [1, "chart-container"], [1, "chart-bars"], ["class", "chart-bar-item", 4, "ngFor", "ngForOf"], [1, "trend-summary"], [1, "trend-stat"], [1, "chart-bar-item"], [1, "bar-wrapper"], [1, "bar-value"], [1, "bar"], [1, "bar-fill"], [1, "bar-label"], [1, "bar-count"], [1, "stats-grid", 2, "grid-template-columns", "repeat(3, 1fr)"], [1, "stat-card", "alert"], [1, "stat-icon", "expired"], [1, "stat-card", "warning"], [1, "stat-icon", "expiring"], [1, "stat-icon", "normal"], [1, "tabs-container", 2, "margin-top", "24px"], [1, "tabs"], [1, "tab", 3, "click"], ["class", "expiry-content", 4, "ngIf"], [1, "expiry-content"], ["class", "expired-row", 4, "ngFor", "ngForOf"], [1, "expired-row"], [1, "expired-date"], [1, "expired-days"], [1, "status-badge", "expired"], [1, "action-cell"], ["title", "\uACA9\uB9AC\uCC98\uB9AC", 1, "icon-btn", "danger", 3, "click"], ["class", "expiring-row", 4, "ngFor", "ngForOf"], [1, "expiring-row"], [1, "expiring-date"], [1, "expiring-days"], [1, "priority-badge"], ["title", "\uD310\uB9E4\uCD09\uC9C4", 1, "icon-btn", "warning", 3, "click"], [1, "info-banner"], [3, "expired-row", "expiring-row", 4, "ngFor", "ngForOf"], [1, "fefo-rank"], [1, "status-badge"], [1, "stat-icon", "approved"], [1, "stat-icon", "rejected"], [1, "stat-icon"], ["value", "rejected"], ["value", "conditional"], ["matInput", "", "placeholder", "\uC81C\uD488\uBA85, \uC81C\uC870\uBC88\uD638 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [1, "inspection-checklist-mini"], ["title", "\uD3EC\uC7A5\uC0C1\uD0DC", 1, "check-item"], ["title", "\uC218\uB7C9\uD655\uC778", 1, "check-item"], ["title", "\uD488\uC9C8", 1, "check-item"], ["class", "icon-btn", "title", "\uC2B9\uC778", 3, "click", 4, "ngIf"], ["class", "icon-btn danger", "title", "\uBC18\uB824", 3, "click", 4, "ngIf"], ["title", "\uC2B9\uC778", 1, "icon-btn", 3, "click"], ["title", "\uBC18\uB824", 1, "icon-btn", "danger", 3, "click"], ["colspan", "11", 1, "no-data"], [1, "zone-cards-grid"], ["class", "zone-card", 3, "alert", 4, "ngFor", "ngForOf"], ["class", "alerts-section", 4, "ngIf"], ["value", "today"], ["value", "week"], [1, "filter-checkbox", 3, "ngModelChange", "change", "ngModel"], [3, "abnormal-row", 4, "ngFor", "ngForOf"], [1, "zone-card"], [1, "zone-header"], [1, "zone-icon"], [1, "zone-type"], [1, "zone-readings"], [1, "reading"], [1, "label"], [1, "value"], [1, "range"], [1, "zone-last-update"], [1, "alerts-section"], [1, "alert-header"], [1, "alert-list"], ["class", "alert-item", 3, "critical", 4, "ngFor", "ngForOf"], [1, "alert-item"], [1, "alert-time"], [1, "alert-zone"], [1, "alert-message"], [1, "btn-small", 3, "click"], [1, "range-indicator"], ["title", "\uC0C1\uC138\uBCF4\uAE30", 1, "btn-icon", 3, "click"], [1, "btn-danger", 3, "click"], [1, "stats-grid", 2, "grid-template-columns", "repeat(5, 1fr)"], [1, "stat-card", "success"], ["value", "return"], ["value", "recall"], ["matInput", "", "placeholder", "\uC81C\uD488\uBA85, LOT\uBC88\uD638 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [3, "urgent-row", "completed-row", 4, "ngFor", "ngForOf"], [1, "type-badge"], [1, "reason-cell"], ["class", "level-badge", 3, "urgent", "high", "medium", "low", 4, "ngIf"], ["class", "badge-check", 4, "ngIf"], ["class", "badge-warning", 4, "ngIf"], ["class", "btn-icon", "title", "\uC2B9\uC778", 3, "click", 4, "ngIf"], ["class", "btn-icon", "title", "\uCC98\uB9AC\uC644\uB8CC", 3, "click", 4, "ngIf"], ["class", "btn-icon", "title", "\uB2F9\uAD6D\uBCF4\uACE0", 3, "click", 4, "ngIf"], [1, "level-badge"], [1, "badge-check"], [1, "badge-warning"], ["title", "\uC2B9\uC778", 1, "btn-icon", 3, "click"], ["title", "\uCC98\uB9AC\uC644\uB8CC", 1, "btn-icon", 3, "click"], ["title", "\uB2F9\uAD6D\uBCF4\uACE0", 1, "btn-icon", 3, "click"], [1, "stat-card", "info"], ["value", "supply"], ["value", "device"], ["value", "draft"], ["value", "submitted"], ["value", "accepted"], ["matInput", "", "placeholder", "\uC81C\uD488\uBA85, \uBCF4\uACE0\uBC88\uD638 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [3, "draft-row", "error-row", 4, "ngFor", "ngForOf"], [1, "type-badge", "supply"], ["class", "confirmation-number", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "btn-icon", "title", "\uC218\uC815", 3, "click", 4, "ngIf"], ["class", "btn-icon", "title", "\uC81C\uCD9C", 3, "click", 4, "ngIf"], ["class", "btn-icon", "title", "\uC624\uB958\uD655\uC778", 3, "click", 4, "ngIf"], [1, "confirmation-number"], [1, "text-muted"], ["title", "\uC218\uC815", 1, "btn-icon", 3, "click"], ["title", "\uC81C\uCD9C", 1, "btn-icon", 3, "click"], ["title", "\uC624\uB958\uD655\uC778", 1, "btn-icon", 3, "click"], [1, "serial-search-section"], ["appearance", "outline", 1, "search-box-large"], ["matInput", "", "placeholder", "\uC77C\uB828\uBC88\uD638, RFID, \uC81C\uD488\uBA85\uC73C\uB85C \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], [1, "quick-filters"], ["aria-label", "Serial status filter"], [3, "click", "selected"], [1, "stats-grid", 2, "grid-template-columns", "repeat(4, 1fr)"], [3, "recalled-row", 4, "ngFor", "ngForOf"], ["class", "rfid-tag", 4, "ngIf"], [1, "event-count"], ["title", "\uCD94\uC801\uC774\uB825", 1, "btn-icon", 3, "click"], ["title", "\uB77C\uBCA8\uCD9C\uB825", 1, "btn-icon", 3, "click"], [1, "rfid-tag"], [3, "action", "close"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "order-modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-section"], ["appearance", "outline", 1, "full-width"], [1, "required"], ["matInput", "", "placeholder", "\uAC70\uB798\uCC98\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uBE44\uACE0\uC0AC\uD56D\uC744 \uC785\uB825\uD558\uC138\uC694", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "item-input-row"], ["appearance", "outline", 1, "small-field"], ["matInput", "", "placeholder", "\uD488\uBAA9\uCF54\uB4DC", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "flex-field"], ["matInput", "", "placeholder", "\uD488\uBAA9\uBA85", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "placeholder", "\uC218\uB7C9", "min", "1", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "placeholder", "\uB2E8\uAC00", "min", "0", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "form-section", 4, "ngIf"], [1, "modal-footer"], [1, "items-list"], [1, "items-table"], ["colspan", "4", 1, "text-right"], [1, "total-amount"], [1, "remove-btn", 3, "click"], [1, "modal-container", "detail-modal", 3, "click"], [1, "detail-section"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "detail-table"], [1, "status-buttons"], [1, "status-btn", "pending", 3, "click", "disabled"], [1, "status-btn", "approved", 3, "click", "disabled"], [1, "status-btn", "completed", 3, "click", "disabled"], [1, "status-btn", "cancelled", 3, "click", "disabled"], [1, "modal-container", 3, "click"], [1, "form-grid-2col"], ["appearance", "outline"], ["matInput", "", "placeholder", "\uC608: MED-001", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC81C\uD488\uBA85 \uC785\uB825", "required", "", 3, "ngModelChange", "ngModel"], ["required", "", 3, "ngModelChange", "ngModel"], ["value", ""], ["matInput", "", "placeholder", "\uAC70\uB798\uCC98\uBA85", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "placeholder", "0", "min", "0", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC608: A\uAD6C\uC5ED", 3, "ngModelChange", "ngModel"], [1, "modal-container", "modal-large", 3, "click"], [1, "stock-info-grid"], [1, "stock-info-card"], [1, "stock-label"], [1, "stock-value", "current"], [1, "stock-value", "min"], [1, "stock-value", "max"], [1, "stock-value"], ["class", "history-list", 4, "ngIf"], ["class", "no-history", 4, "ngIf"], [1, "detail-actions"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-type"], [1, "history-info"], [1, "history-quantity"], [1, "history-stock"], [1, "history-reason"], [1, "history-meta"], [1, "no-history"], [1, "modal-container", "modal-small", 3, "click"], [1, "current-stock-info"], [1, "info-label"], [1, "info-value"], ["value", "in"], ["value", "adjust"], ["matInput", "", "type", "number", "placeholder", "\uC218\uB7C9 \uC785\uB825", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC870\uC815 \uC0AC\uC720\uB97C \uC785\uB825\uD558\uC138\uC694", "rows", "3", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC608: S0001", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC0C1\uD638\uBA85 \uC785\uB825", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "000-00-00000", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uB300\uD45C\uC774\uC0AC \uD64D\uAE38\uB3D9", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "02-0000-0000", 3, "ngModelChange", "ngModel"], ["matPrefix", ""], ["matInput", "", "type", "email", "placeholder", "contact@company.com", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "excellent"], ["value", "good"], ["value", "fair"], ["value", "poor"], ["value", "\uD604\uAE08"], ["value", "30\uC77C"], ["value", "60\uC77C"], ["value", "90\uC77C"], ["matInput", "", "placeholder", "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], [1, "product-add-section"], [1, "product-input-group"], ["matInput", "", "placeholder", "\uC81C\uD488\uBA85 \uC785\uB825", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["class", "product-list", 4, "ngIf"], ["placeholder", "\uD2B9\uC774\uC0AC\uD56D \uC785\uB825", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "product-list"], ["class", "product-tag", 4, "ngFor", "ngForOf"], [1, "product-tag"], ["type", "button", 1, "remove-tag-btn", 3, "click"], [1, "address-box"], [1, "info-grid"], [1, "info-card"], ["class", "detail-section", 4, "ngIf"], ["class", "transaction-list", 4, "ngIf"], [1, "product-list-view"], ["class", "product-chip", 4, "ngFor", "ngForOf"], [1, "product-chip"], [1, "notes-box"], [1, "transaction-list"], ["class", "transaction-item", 4, "ngFor", "ngForOf"], [1, "transaction-item"], [1, "txn-info"], [1, "txn-amount"], [1, "txn-details"], [1, "txn-status"], ["class", "txn-ref", 4, "ngIf"], [1, "txn-date"], [1, "txn-ref"], [1, "settlement-summary"], [1, "summary-header"], [1, "summary-title"], [1, "summary-id"], [1, "summary-info"], [1, "info-row"], ["class", "info-row", 4, "ngIf"], [1, "settlement-amounts"], [1, "amount-row"], [1, "amount-label"], [1, "amount-value", "order"], [1, "amount-value", "payment"], [1, "amount-value", "return"], [1, "amount-row", "total"], [1, "amount-value", "balance"], ["class", "settlement-details-table", 4, "ngIf"], [1, "settlement-actions"], ["class", "btn-action confirm", 3, "click", 4, "ngIf"], ["class", "btn-action payment", 3, "click", 4, "ngIf"], [1, "btn-action", "export", 3, "click"], [1, "settlement-details-table"], ["colspan", "2"], [1, "btn-action", "confirm", 3, "click"], [1, "btn-action", "payment", 3, "click"]], template: function ErpGeneratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-erp-header", 0);
      \u0275\u0275listener("menuChange", function ErpGeneratorComponent_Template_app_erp_header_menuChange_0_listener($event) {
        return ctx.onErpMenuChange($event);
      })("toolbarAction", function ErpGeneratorComponent_Template_app_erp_header_toolbarAction_0_listener($event) {
        return ctx.onErpToolbarAction($event);
      })("search", function ErpGeneratorComponent_Template_app_erp_header_search_0_listener($event) {
        return ctx.onErpSearch($event);
      })("rightPanelToggle", function ErpGeneratorComponent_Template_app_erp_header_rightPanelToggle_0_listener() {
        return ctx.toggleRightPanel();
      })("leftPanelToggle", function ErpGeneratorComponent_Template_app_erp_header_leftPanelToggle_0_listener() {
        return ctx.toggleLeftPanel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, ErpGeneratorComponent_app_erp_left_menu_2_Template, 1, 0, "app-erp-left-menu", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275template(4, ErpGeneratorComponent_div_4_Template, 60, 0, "div", 4)(5, ErpGeneratorComponent_div_5_Template, 53, 5, "div", 4)(6, ErpGeneratorComponent_div_6_Template, 71, 6, "div", 4)(7, ErpGeneratorComponent_div_7_Template, 69, 6, "div", 4)(8, ErpGeneratorComponent_div_8_Template, 93, 11, "div", 4)(9, ErpGeneratorComponent_div_9_Template, 31, 15, "div", 4)(10, ErpGeneratorComponent_div_10_Template, 43, 15, "div", 4)(11, ErpGeneratorComponent_div_11_Template, 90, 8, "div", 4)(12, ErpGeneratorComponent_div_12_Template, 52, 8, "div", 4)(13, ErpGeneratorComponent_div_13_Template, 93, 10, "div", 4)(14, ErpGeneratorComponent_div_14_Template, 93, 10, "div", 4)(15, ErpGeneratorComponent_div_15_Template, 70, 11, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ErpGeneratorComponent_app_erp_right_sidebar_16_Template, 1, 0, "app-erp-right-sidebar", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, ErpGeneratorComponent_div_17_Template, 49, 7, "div", 6)(18, ErpGeneratorComponent_div_18_Template, 83, 14, "div", 6)(19, ErpGeneratorComponent_div_19_Template, 62, 9, "div", 6)(20, ErpGeneratorComponent_div_20_Template, 80, 16, "div", 6)(21, ErpGeneratorComponent_div_21_Template, 39, 7, "div", 6)(22, ErpGeneratorComponent_div_22_Template, 114, 14, "div", 6)(23, ErpGeneratorComponent_div_23_Template, 95, 21, "div", 6)(24, ErpGeneratorComponent_div_24_Template, 74, 20, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275property("erpTitle", ctx.erpTitle)("activeMenu", ctx.currentActiveMenu)("recordCount", ctx.totalRecordCount)("isSearchMode", ctx.isSearchMode)("searchResults", \u0275\u0275pureFunction0(28, _c0))("isProcessing", ctx.isProcessing);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showLeftPanel);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uD648");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uBC1C\uC8FC\uAD00\uB9AC");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC7AC\uACE0\uAD00\uB9AC");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uAC70\uB798\uCC98");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC815\uC0B0");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uBCF4\uACE0\uC11C");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC720\uD6A8\uAE30\uAC04");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC785\uACE0\uAC80\uC218");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC628\uC2B5\uB3C4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uBC18\uD488\uD68C\uC218");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC2EC\uD3C9\uC6D0");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uC77C\uB828\uBC88\uD638");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRightPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOrderModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOrderDetailModal && ctx.selectedOrder);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showInventoryModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showInventoryDetailModal && ctx.selectedInventory);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStockAdjustModal && ctx.selectedInventory);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSupplierModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSupplierDetailModal && ctx.selectedSupplier);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSettlementDetailModal && ctx.selectedSettlement);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, RequiredValidator, MinValidator, NgModel, MatButton, MatFormField, MatLabel, MatHint, MatPrefix, MatSuffix, MatInput, MatSelect, MatOption, MatIcon, MatCheckbox, MatRadioGroup, MatRadioButton, MatChipListbox, MatChipOption, ErpHeaderComponent, ErpLeftMenuComponent, ErpRightSidebarComponent, DatePipe], styles: [`

.main-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 48px);
  background: var(--bg-secondary);
  transition: background-color 0.3s ease;
  position: relative;
}
.main-container[_ngcontent-%COMP%]   app-erp-left-menu[_ngcontent-%COMP%] {
  position: fixed;
  left: 0;
  top: 48px;
  width: 180px;
  height: calc(100vh - 48px);
  z-index: 1000;
}
.main-container[_ngcontent-%COMP%]   .erp-main-content[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 180px;
  margin-right: 180px;
  z-index: 1;
  padding: 24px;
}
.main-container[_ngcontent-%COMP%]   .erp-main-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;
  width: 100%;
  max-width: 100%;
}
.main-container[_ngcontent-%COMP%]   app-erp-right-sidebar[_ngcontent-%COMP%] {
  position: fixed;
  top: 48px;
  right: 0;
  height: calc(100vh - 48px);
  width: 350px;
  z-index: 1500;
  pointer-events: none;
}
.main-container[_ngcontent-%COMP%]   app-erp-right-sidebar[_ngcontent-%COMP%]     .erp-right-sidebar {
  pointer-events: auto;
}
@media (max-width: 1200px) {
  .main-container[_ngcontent-%COMP%]   app-erp-right-sidebar[_ngcontent-%COMP%] {
    width: 300px;
  }
  .main-container[_ngcontent-%COMP%]   .erp-main-content[_ngcontent-%COMP%] {
    margin-right: 0;
    padding: 16px;
  }
}
@media (max-width: 992px) {
  .main-container[_ngcontent-%COMP%]   app-erp-left-menu[_ngcontent-%COMP%] {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: 2px 0 8px var(--shadow);
    background: var(--bg-primary);
  }
  .main-container[_ngcontent-%COMP%]   app-erp-left-menu.show[_ngcontent-%COMP%] {
    transform: translateX(0);
  }
  .main-container[_ngcontent-%COMP%]   app-erp-right-sidebar[_ngcontent-%COMP%] {
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  .main-container[_ngcontent-%COMP%]   app-erp-right-sidebar.show[_ngcontent-%COMP%] {
    transform: translateX(0);
  }
  .main-container[_ngcontent-%COMP%]   .erp-main-content[_ngcontent-%COMP%] {
    margin-left: 0;
    margin-right: 0;
    padding: 12px;
  }
}
@media (max-width: 768px) {
  .main-container[_ngcontent-%COMP%] {
    height: calc(100vh - 48px);
  }
  .main-container[_ngcontent-%COMP%]   app-erp-left-menu[_ngcontent-%COMP%] {
    width: 80%;
    max-width: 280px;
  }
  .main-container[_ngcontent-%COMP%]   app-erp-right-sidebar[_ngcontent-%COMP%] {
    width: 90%;
    max-width: 350px;
  }
  .main-container[_ngcontent-%COMP%]   .erp-main-content[_ngcontent-%COMP%] {
    padding: 8px;
  }
}
.welcome-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text-primary);
}
.welcome-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}
.welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%] {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 16px var(--shadow);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}
.welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  font-size: 48px;
  margin-bottom: 16px;
}
.welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}
.welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}
.welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow);
  background: var(--bg-secondary);
}
@media (max-width: 768px) {
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%] {
    padding: 20px;
    border-radius: 12px;
  }
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
    font-size: 36px;
    margin-bottom: 12px;
  }
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%] {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 4px 16px var(--shadow);
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]   .recent-icon[_ngcontent-%COMP%] {
  font-size: 24px;
  margin-right: 12px;
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]   .recent-text[_ngcontent-%COMP%] {
  flex: 1;
  font-size: 14px;
  color: var(--text-primary);
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]   .recent-time[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--text-secondary);
}
.welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
  transform: translateX(4px);
  box-shadow: 0 2px 8px var(--shadow);
}
.section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}
.section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {
  padding: 12px 24px;
  border: none;
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 16px;
}
.section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
.section-content[_ngcontent-%COMP%] {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 16px var(--shadow);
  min-height: 400px;
}
.section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .main-container[_ngcontent-%COMP%] {
    flex-direction: column;
    height: auto;
  }
  .welcome-section[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .section-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
}
.filter-section[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}
.filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
}
.filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 8px 32px 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {
  border-color: var(--accent-primary);
}
.filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.filter-section[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}
.filter-section[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.2s;
}
.filter-section[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: var(--text-secondary);
}
.filter-section[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {
  border-color: var(--accent-primary);
}
.filter-section[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.order-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--shadow);
}
.order-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
}
.order-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 16px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
}
.order-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {
  padding-left: 20px;
}
.order-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {
  padding-right: 20px;
  text-align: center;
}
.order-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s;
}
.order-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: var(--bg-secondary);
  cursor: pointer;
}
.order-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.order-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 16px 12px;
  font-size: 14px;
  color: var(--text-primary);
}
.order-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  padding-left: 20px;
  font-weight: 500;
}
.order-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {
  padding-right: 20px;
  text-align: center;
}
.status-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.status-badge.pending[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-badge.approved[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-badge.completed[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.status-badge.cancelled[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;
}
.modal-container[_ngcontent-%COMP%] {
  background: var(--bg-primary);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid var(--border-color);
}
.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;
}
.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
.modal-body[_ngcontent-%COMP%] {
  padding: 32px;
  overflow-y: auto;
  flex: 1;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 8px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 4px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.2s;
  box-sizing: border-box;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {
  color: var(--text-secondary);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover, 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {
  border-color: var(--accent-primary);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, 
.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  min-height: 80px;
  resize: vertical;
  font-family: inherit;
}
.item-add-section[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}
.item-add-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 16px 0;
}
.item-add-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 12px;
  align-items: end;
}
.item-add-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.item-add-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .add-item-btn[_ngcontent-%COMP%] {
  padding: 10px 20px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.item-add-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .add-item-btn[_ngcontent-%COMP%]:hover {
  background: #0051d5;
  transform: translateY(-1px);
}
.item-add-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .add-item-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
.items-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}
.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
}
.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 12px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}
.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {
  text-align: center;
  width: 80px;
}
.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--border-color);
}
.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 12px;
  font-size: 13px;
  color: var(--text-primary);
}
.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {
  text-align: right;
}
.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {
  text-align: center;
}
.items-table[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {
  padding: 4px 12px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.items-table[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 59, 48, 0.2);
}
.total-section[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
  border-top: 2px solid var(--border-color);
}
.total-section[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 20px;
}
.total-section[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-primary);
}
.modal-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 24px 32px;
  border-top: 1px solid var(--border-color);
}
.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.modal-footer[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
.modal-footer[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
}
.modal-footer[_ngcontent-%COMP%]   button.primary-btn[_ngcontent-%COMP%] {
  background: var(--accent-primary);
  color: white;
}
.modal-footer[_ngcontent-%COMP%]   button.primary-btn[_ngcontent-%COMP%]:hover {
  background: #0051d5;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}
.modal-footer[_ngcontent-%COMP%]   button.primary-btn[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
.detail-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 500;
}
.status-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.status-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.status-buttons[_ngcontent-%COMP%]   button.pending-btn[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-buttons[_ngcontent-%COMP%]   button.pending-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 149, 0, 0.2);
}
.status-buttons[_ngcontent-%COMP%]   button.approved-btn[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-buttons[_ngcontent-%COMP%]   button.approved-btn[_ngcontent-%COMP%]:hover {
  background: rgba(52, 199, 89, 0.2);
}
.status-buttons[_ngcontent-%COMP%]   button.completed-btn[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.status-buttons[_ngcontent-%COMP%]   button.completed-btn[_ngcontent-%COMP%]:hover {
  background: rgba(0, 122, 255, 0.2);
}
.status-buttons[_ngcontent-%COMP%]   button.cancelled-btn[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-buttons[_ngcontent-%COMP%]   button.cancelled-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 59, 48, 0.2);
}
.delete-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 12px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.3);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 16px;
}
.delete-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 59, 48, 0.2);
  border-color: #ff3b30;
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  margin-bottom: 20px;
}
.pagination[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  padding: 20px 0;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {
  min-width: 36px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
  color: var(--text-primary);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {
  background: var(--bg-secondary);
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}
.pagination[_ngcontent-%COMP%]   .page-btn.active[_ngcontent-%COMP%] {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
  font-weight: 600;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  transform: translateY(0);
}
.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);
  white-space: nowrap;
}
.table-container[_ngcontent-%COMP%] {
  overflow-x: auto;
  border-radius: 12px;
}
.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {
  height: 8px;
}
.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 4px;
}
.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}
.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}
.action-cell[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.action-cell[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {
  padding: 4px 8px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.action-cell[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
  transform: scale(1.1);
}
.amount[_ngcontent-%COMP%] {
  font-weight: 600;
  color: var(--accent-primary);
}
.no-data[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-secondary);
  font-size: 14px;
}
.stock-cell[_ngcontent-%COMP%] {
  font-size: 16px;
}
.stock-cell[_ngcontent-%COMP%]   .low-stock[_ngcontent-%COMP%] {
  color: #ff3b30;
}
.stock-cell[_ngcontent-%COMP%]   .excess-stock[_ngcontent-%COMP%] {
  color: #ff9500;
}
.status-badge.status-normal[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-badge.status-low[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-badge.status-out[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-badge.status-excess[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.form-grid-2col[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 768px) {
  .form-grid-2col[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.modal-large[_ngcontent-%COMP%] {
  max-width: 1000px;
}
.modal-small[_ngcontent-%COMP%] {
  max-width: 500px;
}
.detail-section[_ngcontent-%COMP%] {
  margin-bottom: 32px;
}
.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border-color);
}
.stock-info-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .stock-info-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
.stock-info-card[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
}
.stock-info-card[_ngcontent-%COMP%]   .stock-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.stock-info-card[_ngcontent-%COMP%]   .stock-value[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.stock-info-card[_ngcontent-%COMP%]   .stock-value.current[_ngcontent-%COMP%] {
  color: var(--accent-primary);
}
.stock-info-card[_ngcontent-%COMP%]   .stock-value.current.low[_ngcontent-%COMP%] {
  color: #ff3b30;
}
.stock-info-card[_ngcontent-%COMP%]   .stock-value.min[_ngcontent-%COMP%] {
  color: #ff9500;
}
.stock-info-card[_ngcontent-%COMP%]   .stock-value.max[_ngcontent-%COMP%] {
  color: #34c759;
}
.history-list[_ngcontent-%COMP%] {
  max-height: 300px;
  overflow-y: auto;
}
.history-list[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.history-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}
.history-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}
.history-item[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}
.history-item[_ngcontent-%COMP%]   .history-type[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}
.history-item[_ngcontent-%COMP%]   .history-type.type-in[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.history-item[_ngcontent-%COMP%]   .history-type.type-out[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.history-item[_ngcontent-%COMP%]   .history-type.type-adjust[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.history-item[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%] {
  flex: 1;
}
.history-item[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-quantity[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}
.history-item[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-quantity[_ngcontent-%COMP%]   .history-stock[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-left: 8px;
}
.history-item[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-reason[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--text-primary);
  margin-bottom: 6px;
}
.history-item[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--text-secondary);
}
.no-history[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-secondary);
}
.no-history[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 14px;
}
.detail-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}
.current-stock-info[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  border: 2px solid var(--accent-primary);
}
.current-stock-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--text-secondary);
}
.current-stock-info[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-primary);
}
.help-text[_ngcontent-%COMP%] {
  margin-top: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}
.help-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: var(--accent-primary);
  font-weight: 600;
}
.btn-secondary[_ngcontent-%COMP%] {
  padding: 10px 24px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
  border-color: var(--text-secondary);
}
.btn-primary[_ngcontent-%COMP%] {
  padding: 10px 24px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #0051d5;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}
.btn-primary[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
.btn-danger[_ngcontent-%COMP%] {
  padding: 10px 24px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.3);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-danger[_ngcontent-%COMP%]:hover {
  background: rgba(255, 59, 48, 0.2);
  border-color: #ff3b30;
}
.status-btn[_ngcontent-%COMP%] {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.status-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.status-btn.pending[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-btn.pending[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(255, 149, 0, 0.2);
}
.status-btn.approved[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-btn.approved[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(52, 199, 89, 0.2);
}
.status-btn.completed[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.status-btn.completed[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(0, 122, 255, 0.2);
}
.status-btn.cancelled[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-btn.cancelled[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.2);
}
.credit-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.credit-badge.credit-excellent[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.credit-badge.credit-good[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.credit-badge.credit-fair[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.credit-badge.credit-poor[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-active[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-inactive[_ngcontent-%COMP%] {
  background: rgba(142, 142, 147, 0.1);
  color: #8e8e93;
}
.full-width[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  flex: 1;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {
  padding: 10px 20px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {
  background: #0051d5;
}
.product-add-section[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.product-add-section[_ngcontent-%COMP%]   .product-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  font-size: 13px;
  color: var(--text-primary);
}
.product-add-section[_ngcontent-%COMP%]   .product-tag[_ngcontent-%COMP%]   .remove-tag-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}
.product-add-section[_ngcontent-%COMP%]   .product-tag[_ngcontent-%COMP%]   .remove-tag-btn[_ngcontent-%COMP%]:hover {
  color: #ff3b30;
}
.address-box[_ngcontent-%COMP%] {
  padding: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.6;
}
.info-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 768px) {
  .info-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
.info-card[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
}
.info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.product-list-view[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.product-list-view[_ngcontent-%COMP%]   .product-chip[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 8px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-primary);
}
.notes-box[_ngcontent-%COMP%] {
  padding: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
}
.transaction-list[_ngcontent-%COMP%] {
  max-height: 400px;
  overflow-y: auto;
}
.transaction-list[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.transaction-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}
.transaction-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}
.transaction-item[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}
.transaction-item[_ngcontent-%COMP%]   .txn-type[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}
.transaction-item[_ngcontent-%COMP%]   .txn-type.txn-order[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.transaction-item[_ngcontent-%COMP%]   .txn-type.txn-payment[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.transaction-item[_ngcontent-%COMP%]   .txn-type.txn-return[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.transaction-item[_ngcontent-%COMP%]   .txn-info[_ngcontent-%COMP%] {
  flex: 1;
}
.transaction-item[_ngcontent-%COMP%]   .txn-info[_ngcontent-%COMP%]   .txn-amount[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.transaction-item[_ngcontent-%COMP%]   .txn-info[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: var(--text-secondary);
  flex-wrap: wrap;
}
.transaction-item[_ngcontent-%COMP%]   .txn-info[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%]   .txn-status[_ngcontent-%COMP%] {
  padding: 2px 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  font-weight: 500;
}
.transaction-item[_ngcontent-%COMP%]   .txn-info[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%]   .txn-ref[_ngcontent-%COMP%] {
  color: var(--accent-primary);
  font-weight: 500;
}
.transaction-item[_ngcontent-%COMP%]   .txn-info[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%]   .txn-date[_ngcontent-%COMP%] {
  color: var(--text-secondary);
}
.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
@media (max-width: 1200px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.stat-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 2px 8px var(--shadow);
  transition: all 0.3s;
}
.stat-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--shadow);
}
.stat-card.highlight[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      rgba(0, 122, 255, 0.1) 0%,
      rgba(0, 122, 255, 0.05) 100%);
  border-color: var(--accent-primary);
}
.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border-radius: 12px;
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.pending[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.overdue[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.paid[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.balance[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {
  flex: 1;
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-value.large[_ngcontent-%COMP%] {
  font-size: 28px;
  color: var(--accent-primary);
}
.settlement-pending[_ngcontent-%COMP%] {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.settlement-confirmed[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.settlement-paid[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.settlement-overdue[_ngcontent-%COMP%] {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.amount.paid[_ngcontent-%COMP%] {
  color: #34c759;
}
.amount.return[_ngcontent-%COMP%] {
  color: #ff9500;
}
.amount.balance[_ngcontent-%COMP%] {
  color: var(--accent-primary);
  font-size: 16px;
}
.settlement-summary[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--border-color);
}
.settlement-summary[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-title[_ngcontent-%COMP%]   .status-badge.large[_ngcontent-%COMP%] {
  padding: 8px 16px;
  font-size: 14px;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-header[_ngcontent-%COMP%]   .summary-id[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 768px) {
  .settlement-summary[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.settlement-summary[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}
.settlement-summary[_ngcontent-%COMP%]   .summary-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 600;
}
.settlement-amounts[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row.total[_ngcontent-%COMP%] {
  margin-top: 12px;
  padding-top: 24px;
  border-top: 2px solid var(--border-color);
  border-bottom: none;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row.total[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {
  font-size: 24px;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]   .amount-label[_ngcontent-%COMP%] {
  font-size: 15px;
  color: var(--text-primary);
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]   .amount-value.order[_ngcontent-%COMP%] {
  color: var(--text-primary);
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]   .amount-value.payment[_ngcontent-%COMP%] {
  color: #34c759;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]   .amount-value.return[_ngcontent-%COMP%] {
  color: #ff9500;
}
.settlement-amounts[_ngcontent-%COMP%]   .amount-row[_ngcontent-%COMP%]   .amount-value.balance[_ngcontent-%COMP%] {
  color: var(--accent-primary);
}
.settlement-details-table[_ngcontent-%COMP%] {
  overflow-x: auto;
  border-radius: 12px;
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--border-color);
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: var(--bg-secondary);
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 14px 16px;
  font-size: 14px;
  color: var(--text-primary);
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  border-top: 2px solid var(--border-color);
}
.settlement-details-table[_ngcontent-%COMP%]   .detail-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}
.settlement-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  flex-wrap: wrap;
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 140px;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action.confirm[_ngcontent-%COMP%] {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
  border: 1px solid rgba(0, 122, 255, 0.3);
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action.confirm[_ngcontent-%COMP%]:hover {
  background: rgba(0, 122, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action.payment[_ngcontent-%COMP%] {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.3);
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action.payment[_ngcontent-%COMP%]:hover {
  background: rgba(52, 199, 89, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 199, 89, 0.2);
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action.export[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
.settlement-actions[_ngcontent-%COMP%]   .btn-action.export[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
  transform: translateY(-2px);
}
.section-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}
.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.section-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
}
.report-tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0;
}
.report-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}
.report-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}
.report-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {
  color: var(--accent-primary);
  font-weight: 600;
}
.report-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
}
.report-period-selector[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  flex-wrap: wrap;
}
.report-period-selector[_ngcontent-%COMP%]   .period-type[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
}
.report-period-selector[_ngcontent-%COMP%]   .period-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-primary);
}
.report-period-selector[_ngcontent-%COMP%]   .period-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {
  cursor: pointer;
}
.report-period-selector[_ngcontent-%COMP%]   .month-select[_ngcontent-%COMP%] {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  min-width: 150px;
}
.report-period-selector[_ngcontent-%COMP%]   .month-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.report-content[_ngcontent-%COMP%]   .report-title[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.report-content[_ngcontent-%COMP%]   .report-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.report-content[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
  font-size: 14px;
}
.report-summary-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {
  font-size: 32px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border-radius: 12px;
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {
  flex: 1;
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-left: 4px;
}
.category-report-list[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .category-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  font-size: 14px;
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .category-stats[_ngcontent-%COMP%]   .order-count[_ngcontent-%COMP%] {
  color: var(--text-secondary);
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   .category-stats[_ngcontent-%COMP%]   .order-amount[_ngcontent-%COMP%] {
  font-weight: 600;
  color: var(--accent-primary);
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-bar-container[_ngcontent-%COMP%] {
  position: relative;
  height: 32px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-bar-container[_ngcontent-%COMP%]   .category-bar[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      var(--accent-primary),
      var(--accent-secondary));
  transition: width 0.3s ease;
  border-radius: 6px;
}
.category-report-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-bar-container[_ngcontent-%COMP%]   .category-percentage[_ngcontent-%COMP%] {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}
.supplier-report-table[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: visible;
  border: 1px solid var(--border-color);
  width: 100%;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: var(--bg-tertiary);
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {
  width: 80px;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s ease;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 14px 16px;
  font-size: 14px;
  color: var(--text-primary);
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.rank[_ngcontent-%COMP%] {
  text-align: center;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.rank[_ngcontent-%COMP%]   .rank-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  font-weight: 600;
  font-size: 13px;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.rank[_ngcontent-%COMP%]   .rank-badge.top3[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #ffd700,
      #ffed4e);
  color: #8b4513;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.supplier-name[_ngcontent-%COMP%] {
  font-weight: 500;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%] {
  text-align: center;
}
.supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {
  text-align: right;
  font-weight: 500;
}
.trend-chart[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid var(--border-color);
  margin-bottom: 24px;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 20px;
  height: 300px;
  padding: 20px 0;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-wrapper[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 80px;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-wrapper[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  white-space: nowrap;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-wrapper[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {
  width: 100%;
  background: var(--bg-tertiary);
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: all 0.3s ease;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-wrapper[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      180deg,
      var(--accent-primary),
      var(--accent-secondary));
  border-radius: 8px 8px 0 0;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-wrapper[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:hover   .bar-fill[_ngcontent-%COMP%] {
  opacity: 0.8;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-label[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 8px;
}
.trend-chart[_ngcontent-%COMP%]   .chart-bars[_ngcontent-%COMP%]   .chart-bar-item[_ngcontent-%COMP%]   .bar-count[_ngcontent-%COMP%] {
  font-size: 12px;
  color: var(--text-secondary);
}
.trend-chart[_ngcontent-%COMP%]   .trend-summary[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.trend-chart[_ngcontent-%COMP%]   .trend-summary[_ngcontent-%COMP%]   .trend-stat[_ngcontent-%COMP%] {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  text-align: center;
}
.trend-chart[_ngcontent-%COMP%]   .trend-summary[_ngcontent-%COMP%]   .trend-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.trend-chart[_ngcontent-%COMP%]   .trend-summary[_ngcontent-%COMP%]   .trend-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-primary);
}
body.dark-mode[_ngcontent-%COMP%]   .report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover, 
body.dark-theme[_ngcontent-%COMP%]   .report-summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
}
body.dark-mode[_ngcontent-%COMP%]   .supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, 
body.dark-theme[_ngcontent-%COMP%]   .supplier-report-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.02);
}
body.dark-mode[_ngcontent-%COMP%]   .category-bar-container[_ngcontent-%COMP%]   .category-bar[_ngcontent-%COMP%], 
body.dark-theme[_ngcontent-%COMP%]   .category-bar-container[_ngcontent-%COMP%]   .category-bar[_ngcontent-%COMP%] {
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
}
.report-detail-section[_ngcontent-%COMP%] {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px solid var(--border-color);
  width: 100%;
  max-width: 100%;
}
.report-detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  flex-wrap: wrap;
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  flex: 1;
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]:first-child {
  flex: 1.5;
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {
  color: var(--text-secondary);
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
}
.report-detail-section[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: visible;
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
  width: 100%;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: var(--bg-tertiary);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s ease;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--text-primary);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.order-id[_ngcontent-%COMP%] {
  font-family: "Courier New", monospace;
  font-weight: 600;
  color: var(--accent-primary);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.supplier-name[_ngcontent-%COMP%] {
  font-weight: 500;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.text-center[_ngcontent-%COMP%] {
  text-align: center;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {
  text-align: right;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.amount[_ngcontent-%COMP%] {
  font-weight: 600;
  color: var(--accent-primary);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {
  padding: 6px 12px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
}
.report-detail-section[_ngcontent-%COMP%]   .report-list-table[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {
  padding: 60px 20px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}
.report-detail-section[_ngcontent-%COMP%]   .list-summary[_ngcontent-%COMP%] {
  text-align: center;
  padding: 12px;
  color: var(--text-secondary);
  font-size: 13px;
  background: var(--bg-secondary);
  border-radius: 6px;
}
.report-detail-section[_ngcontent-%COMP%]   .category-tag[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 10px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}
.expiry-content[_ngcontent-%COMP%] {
  margin-top: 20px;
}
.tabs-container[_ngcontent-%COMP%] {
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 24px;
}
.tabs[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.tab[_ngcontent-%COMP%] {
  padding: 12px 20px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tab[_ngcontent-%COMP%]:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}
.tab.active[_ngcontent-%COMP%] {
  color: var(--accent-primary);
  border-bottom-color: var(--accent-primary);
  font-weight: 600;
}
.expired-row[_ngcontent-%COMP%] {
  background: rgba(255, 77, 77, 0.05) !important;
}
.expired-row[_ngcontent-%COMP%]:hover {
  background: rgba(255, 77, 77, 0.1) !important;
}
.expiring-row[_ngcontent-%COMP%] {
  background: rgba(255, 159, 64, 0.05) !important;
}
.expiring-row[_ngcontent-%COMP%]:hover {
  background: rgba(255, 159, 64, 0.1) !important;
}
.expired-date[_ngcontent-%COMP%] {
  color: #ff4d4d;
  font-weight: 600;
}
.expiring-date[_ngcontent-%COMP%] {
  color: #ff9f40;
  font-weight: 600;
}
.expired-days[_ngcontent-%COMP%] {
  color: #ff4d4d;
  font-weight: 700;
  font-size: 14px;
}
.expiring-days[_ngcontent-%COMP%] {
  color: #ff9f40;
  font-weight: 700;
  font-size: 14px;
}
.fefo-rank[_ngcontent-%COMP%] {
  font-weight: 700;
  color: var(--accent-primary);
  font-size: 16px;
}
.priority-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 10px;
  background: #ffa726;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.priority-badge.high[_ngcontent-%COMP%] {
  background: #ff5252;
  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
.info-banner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent-primary);
  border-radius: 6px;
  margin-bottom: 16px;
  color: var(--text-primary);
  font-size: 14px;
}
.info-banner[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 18px;
}
.status-badge.expired[_ngcontent-%COMP%] {
  background: #ff4d4d;
  color: white;
}
.status-badge.expiring[_ngcontent-%COMP%] {
  background: #ff9f40;
  color: white;
}
.status-badge.normal[_ngcontent-%COMP%] {
  background: #4caf50;
  color: white;
}
.stat-card.alert[_ngcontent-%COMP%] {
  border-left: 4px solid #ff4d4d;
}
.stat-card.warning[_ngcontent-%COMP%] {
  border-left: 4px solid #ff9f40;
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.expired[_ngcontent-%COMP%] {
  color: #ff4d4d;
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.expiring[_ngcontent-%COMP%] {
  color: #ff9f40;
}
.stat-card[_ngcontent-%COMP%]   .stat-icon.normal[_ngcontent-%COMP%] {
  color: #4caf50;
}
.inspection-checklist-mini[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
  align-items: center;
}
.check-item[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}
.check-item.pass[_ngcontent-%COMP%] {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
}
.check-item.fail[_ngcontent-%COMP%] {
  background: rgba(255, 77, 77, 0.1);
  color: #ff4d4d;
}
.temp-ok[_ngcontent-%COMP%] {
  color: #4caf50;
  font-weight: 600;
}
.temp-alert[_ngcontent-%COMP%] {
  color: #ff4d4d;
  font-weight: 700;
  animation: _ngcontent-%COMP%_blink 1.5s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.status-badge.approved[_ngcontent-%COMP%] {
  background: #4caf50;
  color: white;
}
.status-badge.rejected[_ngcontent-%COMP%] {
  background: #ff4d4d;
  color: white;
}
.status-badge.conditional[_ngcontent-%COMP%] {
  background: #ff9f40;
  color: white;
}
.zone-cards-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}
.zone-card[_ngcontent-%COMP%] {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}
.zone-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.zone-card.alert[_ngcontent-%COMP%] {
  border-color: #ff4d4d;
  background: rgba(255, 77, 77, 0.05);
  animation: _ngcontent-%COMP%_pulse-alert 2s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_pulse-alert {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 77, 77, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 77, 77, 0);
  }
}
.zone-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}
.zone-header[_ngcontent-%COMP%]   .zone-icon[_ngcontent-%COMP%] {
  font-size: 32px;
}
.zone-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}
.zone-header[_ngcontent-%COMP%]   .zone-type[_ngcontent-%COMP%] {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #666;
}
.zone-readings[_ngcontent-%COMP%] {
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
}
.zone-readings[_ngcontent-%COMP%]   .reading[_ngcontent-%COMP%] {
  flex: 1;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}
.zone-readings[_ngcontent-%COMP%]   .reading[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  display: block;
  font-size: 11px;
  color: #666;
  margin-bottom: 4px;
}
.zone-readings[_ngcontent-%COMP%]   .reading[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2px;
}
.zone-readings[_ngcontent-%COMP%]   .reading[_ngcontent-%COMP%]   .value.abnormal[_ngcontent-%COMP%] {
  color: #ff4d4d;
  animation: _ngcontent-%COMP%_blink 1.5s ease-in-out infinite;
}
.zone-readings[_ngcontent-%COMP%]   .reading[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {
  display: block;
  font-size: 10px;
  color: #999;
}
.zone-last-update[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #999;
  text-align: right;
}
.alerts-section[_ngcontent-%COMP%] {
  background: rgba(255, 152, 0, 0.1);
  border-left: 4px solid #ff9800;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
}
.alerts-section[_ngcontent-%COMP%]   .alert-header[_ngcontent-%COMP%] {
  font-weight: 600;
  margin-bottom: 10px;
  color: #ff6f00;
}
.alerts-section[_ngcontent-%COMP%]   .alert-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 13px;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item.critical[_ngcontent-%COMP%] {
  background: rgba(255, 77, 77, 0.1);
  border-left: 3px solid #ff4d4d;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-time[_ngcontent-%COMP%] {
  font-weight: 600;
  min-width: 50px;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-zone[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1976d2;
  min-width: 100px;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%] {
  flex: 1;
  color: #333;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {
  padding: 4px 12px;
  font-size: 12px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.alerts-section[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:hover {
  background: #45a049;
}
.abnormal-row[_ngcontent-%COMP%] {
  background: rgba(255, 77, 77, 0.05);
}
.temp-abnormal[_ngcontent-%COMP%], 
.humidity-abnormal[_ngcontent-%COMP%] {
  color: #ff4d4d;
  font-weight: 700;
}
.range-indicator[_ngcontent-%COMP%] {
  display: inline-block;
  margin-left: 4px;
  font-size: 11px;
  color: #999;
}
.urgent-row[_ngcontent-%COMP%] {
  background: rgba(255, 77, 77, 0.08);
  border-left: 4px solid #ff4d4d;
  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;
}
.completed-row[_ngcontent-%COMP%] {
  background: rgba(76, 175, 80, 0.05);
  opacity: 0.8;
}
.type-badge[_ngcontent-%COMP%] {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.type-badge.return[_ngcontent-%COMP%] {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}
.type-badge.recall[_ngcontent-%COMP%] {
  background: rgba(255, 152, 0, 0.1);
  color: #ff9800;
}
.level-badge[_ngcontent-%COMP%] {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}
.level-badge.urgent[_ngcontent-%COMP%] {
  background: #ff4d4d;
  color: white;
  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;
}
.level-badge.high[_ngcontent-%COMP%] {
  background: #ff9800;
  color: white;
}
.level-badge.medium[_ngcontent-%COMP%] {
  background: #ffc107;
  color: #333;
}
.level-badge.low[_ngcontent-%COMP%] {
  background: #4caf50;
  color: white;
}
.reason-cell[_ngcontent-%COMP%] {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.badge-check[_ngcontent-%COMP%] {
  color: #4caf50;
  font-weight: 600;
  font-size: 12px;
}
.badge-warning[_ngcontent-%COMP%] {
  color: #ff9800;
  font-weight: 600;
  font-size: 12px;
}
.btn-danger[_ngcontent-%COMP%] {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-danger[_ngcontent-%COMP%]:hover {
  background: #ff3333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 77, 77, 0.3);
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--shadow);
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
  background: var(--bg-secondary);
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 16px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {
  padding-left: 20px;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {
  padding-right: 20px;
  text-align: center;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: var(--bg-secondary);
  cursor: pointer;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 16px 12px;
  font-size: 14px;
  color: var(--text-primary);
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  padding-left: 20px;
  font-weight: 500;
}
.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {
  padding-right: 20px;
  text-align: center;
}
.draft-row[_ngcontent-%COMP%] {
  background: rgba(255, 193, 7, 0.05);
}
.error-row[_ngcontent-%COMP%] {
  background: rgba(255, 77, 77, 0.08);
  border-left: 4px solid #ff4d4d;
}
.type-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.type-badge.supply[_ngcontent-%COMP%] {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}
.type-badge.device[_ngcontent-%COMP%] {
  background: rgba(156, 39, 176, 0.1);
  color: #9c27b0;
}
.confirmation-number[_ngcontent-%COMP%] {
  font-family: "Courier New", monospace;
  font-weight: 600;
  color: #4caf50;
  font-size: 12px;
}
.text-muted[_ngcontent-%COMP%] {
  color: #999;
  font-size: 12px;
}
.btn-icon[_ngcontent-%COMP%] {
  padding: 6px 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 2px;
}
.btn-icon[_ngcontent-%COMP%]:hover {
  background: var(--bg-tertiary);
  transform: scale(1.1);
}
.status-badge.draft[_ngcontent-%COMP%] {
  background: #ffc107;
  color: #333;
}
.status-badge.submitted[_ngcontent-%COMP%] {
  background: #2196f3;
  color: white;
}
.status-badge.accepted[_ngcontent-%COMP%] {
  background: #4caf50;
  color: white;
}
.status-badge.rejected[_ngcontent-%COMP%] {
  background: #f44336;
  color: white;
}
.serial-search-section[_ngcontent-%COMP%] {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}
.search-box-large[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.search-box-large[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  flex: 1;
  padding: 12px 20px;
  font-size: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.search-box-large[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
}
.search-box-large[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {
  padding: 12px 30px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.search-box-large[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]:hover {
  background: #1565c0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3);
}
.quick-filters[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
}
.filter-chip[_ngcontent-%COMP%] {
  padding: 8px 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}
.filter-chip[_ngcontent-%COMP%]:hover {
  border-color: #1976d2;
  color: #1976d2;
}
.filter-chip.active[_ngcontent-%COMP%] {
  background: #1976d2;
  border-color: #1976d2;
  color: white;
}
.recalled-row[_ngcontent-%COMP%] {
  background: rgba(255, 152, 0, 0.05);
}
.rfid-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(33, 150, 243, 0.1);
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 11px;
  font-weight: 600;
  color: #2196f3;
}
.event-count[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #4caf50;
}
.status-badge.available[_ngcontent-%COMP%] {
  background: #4caf50;
  color: white;
}
.status-badge.distributed[_ngcontent-%COMP%] {
  background: #2196f3;
  color: white;
}
.status-badge.recalled[_ngcontent-%COMP%] {
  background: #ff9800;
  color: white;
}
.status-badge.expired[_ngcontent-%COMP%] {
  background: #f44336;
  color: white;
}
.btn-secondary[_ngcontent-%COMP%] {
  background: #9e9e9e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #757575;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(158, 158, 158, 0.3);
}
  .mat-mdc-form-field {
  font-size: 14px;
}
  .mat-mdc-form-field.filter-field {
  width: 200px;
  margin-right: 12px;
}
  .mat-mdc-form-field.filter-field .mat-mdc-text-field-wrapper {
  padding-bottom: 0;
}
  .mat-mdc-form-field.search-field {
  flex: 1;
  min-width: 200px;
}
  .mat-mdc-form-field.search-field .mat-mdc-text-field-wrapper {
  padding-bottom: 0;
}
  .mat-mdc-form-field.full-width {
  width: 100%;
}
  .mat-mdc-form-field.small-field {
  width: 120px;
  margin-right: 8px;
}
  .mat-mdc-form-field.flex-field {
  flex: 1;
  margin-right: 8px;
}
  .mat-mdc-select-panel {
  max-height: 300px;
}
  .mat-mdc-input-element {
  color: var(--text-primary);
}
  .mat-mdc-input-element::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}
  .mat-mdc-checkbox.filter-checkbox {
  margin: 8px 0;
}
  .mat-mdc-checkbox.filter-checkbox .mdc-label {
  color: var(--text-primary);
}
  .mat-mdc-radio-group.period-type {
  margin-right: 16px;
}
  .mat-mdc-radio-button {
  margin-right: 16px;
}
  .mat-mdc-radio-button .mdc-label {
  color: var(--text-primary);
}
  .mat-mdc-chip-listbox .mat-mdc-chip-option.mat-mdc-chip-selected {
  background: var(--accent-primary);
  color: white;
}
  .mat-mdc-raised-button.mat-primary {
  background: var(--accent-primary);
  color: white;
}
  .mat-mdc-raised-button.mat-primary:hover {
  background: #0051d5;
}
  .mat-icon {
  color: var(--text-secondary);
}
  .mat-icon.mat-mdc-form-field-icon-suffix {
  cursor: pointer;
}
.filter-section[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.filter-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
  margin-bottom: 0 !important;
}
.filter-section[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {
  margin-left: auto;
}
.serial-search-section[_ngcontent-%COMP%]   mat-form-field.search-box-large[_ngcontent-%COMP%] {
  width: 100%;
  margin-bottom: 15px;
}
.serial-search-section[_ngcontent-%COMP%]   .quick-filters[_ngcontent-%COMP%]   mat-chip-listbox[_ngcontent-%COMP%] {
  width: 100%;
}
.serial-search-section[_ngcontent-%COMP%]   .quick-filters[_ngcontent-%COMP%]   mat-chip-listbox[_ngcontent-%COMP%]   mat-chip-option[_ngcontent-%COMP%] {
  margin: 4px;
}
.modal-body[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.modal-body[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.modal-body[_ngcontent-%COMP%]   mat-form-field.full-width[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.item-input-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 16px;
}
.item-input-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.item-input-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.form-section[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}
.form-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
  width: 100%;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
  margin-bottom: 0;
}
.product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.report-period-selector[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.report-period-selector[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%] {
  margin-right: 16px;
}
.report-period-selector[_ngcontent-%COMP%]   mat-form-field.month-select[_ngcontent-%COMP%] {
  min-width: 200px;
  margin-bottom: 0;
}
@media (max-width: 992px) {
  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 13px;
  }
  .filter-section[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 12px;
  }
  .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {
    flex: 1 1 calc(50% - 12px);
    min-width: 200px;
  }
  .filter-section[_ngcontent-%COMP%]   .search-group[_ngcontent-%COMP%] {
    flex: 1 1 100%;
  }
  .modal-body[_ngcontent-%COMP%]   .form-grid-2col[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .report-period-selector[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
@media (max-width: 768px) {
  .welcome-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .welcome-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {
    font-size: 14px;
    margin-bottom: 24px;
  }
  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 20px;
  }
  .section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {
    padding: 8px 16px;
    font-size: 12px;
    width: 100%;
    justify-content: center;
  }
  .section-content[_ngcontent-%COMP%] {
    padding: 20px;
    border-radius: 12px;
    min-height: auto;
  }
  .section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {
    flex: 1 1 100%;
  }
  .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
    font-size: 13px;
  }
  .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
    font-size: 13px;
    padding: 6px 28px 6px 10px;
  }
  .filter-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
    width: 100%;
  }
  .filter-section[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {
    margin-left: 0;
    margin-top: 8px;
  }
  .item-input-row[_ngcontent-%COMP%], 
   .product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 12px;
  }
  .item-input-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], 
   .product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {
    width: 100%;
  }
  .item-input-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], 
   .product-add-section[_ngcontent-%COMP%]   .product-input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 100%;
    margin-top: 0;
  }
  .report-period-selector[_ngcontent-%COMP%] {
    padding: 12px;
  }
  .report-period-selector[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%] {
    margin-right: 0;
    margin-bottom: 8px;
  }
  .report-period-selector[_ngcontent-%COMP%]   mat-form-field.month-select[_ngcontent-%COMP%] {
    min-width: 100%;
    width: 100%;
  }
}
@media (max-width: 480px) {
  .welcome-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 20px;
  }
  .welcome-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {
    font-size: 13px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%] {
    padding: 16px;
    border-radius: 12px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 16px;
    margin-bottom: 12px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%] {
    gap: 8px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%] {
    padding: 8px;
    border-radius: 8px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]   .recent-icon[_ngcontent-%COMP%] {
    font-size: 20px;
    margin-right: 8px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]   .recent-text[_ngcontent-%COMP%] {
    font-size: 12px;
  }
  .welcome-section[_ngcontent-%COMP%]   .recent-section[_ngcontent-%COMP%]   .recent-list[_ngcontent-%COMP%]   .recent-item[_ngcontent-%COMP%]   .recent-time[_ngcontent-%COMP%] {
    font-size: 10px;
  }
  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {
    padding: 8px 12px;
    font-size: 11px;
  }
  .section-header[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  .section-content[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 13px;
  }
  .filter-section[_ngcontent-%COMP%] {
    gap: 8px;
  }
  .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
    font-size: 12px;
  }
  .filter-section[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
    font-size: 12px;
    padding: 6px 24px 6px 8px;
  }
  .form-section[_ngcontent-%COMP%] {
    margin-bottom: 16px;
  }
  .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: 14px;
    margin-bottom: 12px;
  }
}
/*# sourceMappingURL=erp-generator.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpGeneratorComponent, [{
    type: Component,
    args: [{ selector: "app-erp-generator", standalone: false, template: `<!-- ERP \uC804\uC6A9 \uD5E4\uB354 -->
<app-erp-header
  [erpTitle]="erpTitle"
  [activeMenu]="currentActiveMenu"
  [recordCount]="totalRecordCount"
  [isSearchMode]="isSearchMode"
  [searchResults]="{ current: 0, total: 0 }"
  [isProcessing]="isProcessing"
  (menuChange)="onErpMenuChange($event)"
  (toolbarAction)="onErpToolbarAction($event)"
  (search)="onErpSearch($event)"
  (rightPanelToggle)="toggleRightPanel()"
  (leftPanelToggle)="toggleLeftPanel()">
</app-erp-header>

<!-- \uBA54\uC778 \uCEE8\uD14C\uC774\uB108 -->
<div class="main-container">
  <!-- \uC88C\uCE21 \uBA54\uB274 (\uD1A0\uAE00 \uBC84\uD2BC\uC73C\uB85C \uC81C\uC5B4) -->
  <app-erp-left-menu
    *ngIf="showLeftPanel"
    (menuAction)="onErpLeftAction($event)"
    (close)="closeLeftPanel()">
  </app-erp-left-menu>

  <!-- \uBA54\uC778 \uCEE8\uD150\uCE20 \uC601\uC5ED -->
  <div class="erp-main-content">
    <!-- \uD648 \uD654\uBA74 -->
    <div class="content-section" *ngIf="currentActiveMenu === '\uD648'">
      <div class="welcome-section">
        <h2>\uC758\uC57D\uB3C4\uB9E4 ERP\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4</h2>
        <p class="subtitle">\uD1B5\uD569 \uAD00\uB9AC \uC2DC\uC2A4\uD15C</p>
        
        <div class="quick-actions">
          <div class="action-card" (click)="onErpMenuChange('\uBC1C\uC8FC\uAD00\uB9AC')">
            <div class="card-icon">\u{1F4CB}</div>
            <h3>\uBC1C\uC8FC\uAD00\uB9AC</h3>
            <p>\uBC1C\uC8FC \uB4F1\uB85D \uBC0F \uAD00\uB9AC</p>
          </div>
          
          <div class="action-card" (click)="onErpMenuChange('\uC7AC\uACE0\uAD00\uB9AC')">
            <div class="card-icon">\u{1F4E6}</div>
            <h3>\uC7AC\uACE0\uAD00\uB9AC</h3>
            <p>\uC7AC\uACE0 \uD604\uD669 \uC870\uD68C</p>
          </div>
          
          <div class="action-card" (click)="onErpMenuChange('\uAC70\uB798\uCC98')">
            <div class="card-icon">\u{1F3E2}</div>
            <h3>\uAC70\uB798\uCC98</h3>
            <p>\uAC70\uB798\uCC98 \uC815\uBCF4 \uAD00\uB9AC</p>
          </div>
          
          <div class="action-card" (click)="onErpMenuChange('\uC815\uC0B0')">
            <div class="card-icon">\u{1F4B0}</div>
            <h3>\uC815\uC0B0</h3>
            <p>\uC815\uC0B0 \uB0B4\uC5ED \uD655\uC778</p>
          </div>
        </div>

        <div class="recent-section">
          <h3>\uCD5C\uADFC \uD65C\uB3D9</h3>
          <div class="recent-list">
            <div class="recent-item">
              <span class="recent-icon">\u{1F4CB}</span>
              <span class="recent-text">\uC0C8\uB85C\uC6B4 \uBC1C\uC8FC\uAC00 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4</span>
              <span class="recent-time">2\uBD84 \uC804</span>
            </div>
            <div class="recent-item">
              <span class="recent-icon">\u{1F4E6}</span>
              <span class="recent-text">\uC7AC\uACE0\uAC00 \uC5C5\uB370\uC774\uD2B8\uB418\uC5C8\uC2B5\uB2C8\uB2E4</span>
              <span class="recent-time">10\uBD84 \uC804</span>
            </div>
            <div class="recent-item">
              <span class="recent-icon">\u{1F4B0}</span>
              <span class="recent-text">\uC815\uC0B0\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4</span>
              <span class="recent-time">1\uC2DC\uAC04 \uC804</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- \uBC1C\uC8FC\uAD00\uB9AC \uD654\uBA74 -->
    <div class="content-section" *ngIf="currentActiveMenu === '\uBC1C\uC8FC\uAD00\uB9AC'">
      <div class="section-header">
        <h2>\uBC1C\uC8FC\uAD00\uB9AC</h2>
        <button class="primary-btn" (click)="openOrderModal()">
          <span class="icon">\u2795</span>
          \uC0C8 \uBC1C\uC8FC \uB4F1\uB85D
        </button>
      </div>
      
      <!-- \uD544\uD130 \uBC0F \uAC80\uC0C9 -->
      <div class="filter-section">
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uC0C1\uD0DC</mat-label>
          <mat-select [(ngModel)]="statusFilter" (selectionChange)="onStatusFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option value="pending">\uB300\uAE30</mat-option>
            <mat-option value="approved">\uC2B9\uC778</mat-option>
            <mat-option value="completed">\uC644\uB8CC</mat-option>
            <mat-option value="cancelled">\uCDE8\uC18C</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>\uAC80\uC0C9</mat-label>
          <input 
            matInput
            [(ngModel)]="searchQuery" 
            (input)="onSearchChange()" 
            placeholder="\uBC1C\uC8FC\uBC88\uD638, \uAC70\uB798\uCC98, \uB2F4\uB2F9\uC790 \uAC80\uC0C9...">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>

      <!-- \uBC1C\uC8FC \uBAA9\uB85D \uD14C\uC774\uBE14 -->
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uBC1C\uC8FC\uBC88\uD638</th>
              <th>\uBC1C\uC8FC\uC77C</th>
              <th>\uAC70\uB798\uCC98</th>
              <th>\uD488\uBAA9\uC218</th>
              <th>\uCD1D\uC561</th>
              <th>\uC0C1\uD0DC</th>
              <th>\uB2F4\uB2F9\uC790</th>
              <th>\uC791\uC5C5</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let order of paginatedOrders" (click)="viewOrderDetail(order)" class="table-row">
              <td><strong>{{ order.id }}</strong></td>
              <td>{{ formatDate(order.orderDate) }}</td>
              <td>{{ order.supplier }}</td>
              <td>{{ order.items.length }}\uAC1C</td>
              <td class="amount">{{ formatCurrency(order.totalAmount) }}</td>
              <td>
                <span [class]="'status-badge ' + getStatusClass(order.status)">
                  {{ getStatusLabel(order.status) }}
                </span>
              </td>
              <td>{{ order.createdBy }}</td>
              <td class="action-cell" (click)="$event.stopPropagation()">
                <button class="icon-btn" (click)="viewOrderDetail(order)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
                <button class="icon-btn" (click)="deleteOrder(order)" title="\uC0AD\uC81C">\u{1F5D1}\uFE0F</button>
              </td>
            </tr>
            <tr *ngIf="paginatedOrders.length === 0">
              <td colspan="8" class="no-data">\uBC1C\uC8FC \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \uD398\uC774\uC9D5 -->
      <div class="pagination" *ngIf="totalPages > 1">
        <button class="page-btn" (click)="goToPage(1)" [disabled]="currentPage === 1">
          \xAB
        </button>
        <button class="page-btn" (click)="previousPage()" [disabled]="currentPage === 1">
          \u2039
        </button>
        <button 
          *ngFor="let page of pageNumbers" 
          class="page-btn" 
          [class.active]="page === currentPage"
          (click)="goToPage(page)">
          {{ page }}
        </button>
        <button class="page-btn" (click)="nextPage()" [disabled]="currentPage === totalPages">
          \u203A
        </button>
        <button class="page-btn" (click)="goToPage(totalPages)" [disabled]="currentPage === totalPages">
          \xBB
        </button>
        <div class="page-info">
          {{ currentPage }} / {{ totalPages }} \uD398\uC774\uC9C0 (\uCD1D {{ filteredOrders.length }}\uAC74)
        </div>
      </div>
    </div>

    <!-- \uC7AC\uACE0\uAD00\uB9AC \uD654\uBA74 -->
    <div class="content-section" *ngIf="currentActiveMenu === '\uC7AC\uACE0\uAD00\uB9AC'">
      <div class="section-header">
        <h2>\uC7AC\uACE0\uAD00\uB9AC</h2>
        <button class="primary-btn" (click)="openInventoryModal()">
          <span class="icon">\u2795</span>
          \uC7AC\uACE0 \uB4F1\uB85D
        </button>
      </div>

      <!-- \uD544\uD130 \uC139\uC158 -->
      <div class="filter-section">
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uCE74\uD14C\uACE0\uB9AC</mat-label>
          <mat-select [(ngModel)]="categoryFilter" (selectionChange)="onCategoryFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option value="\uC758\uC57D\uD488">\uC758\uC57D\uD488</mat-option>
            <mat-option value="\uC758\uB8CC\uAE30\uAE30">\uC758\uB8CC\uAE30\uAE30</mat-option>
            <mat-option value="\uC18C\uBAA8\uD488">\uC18C\uBAA8\uD558</mat-option>
            <mat-option value="\uC704\uC0DD\uC6A9\uD488">\uC704\uC0DD\uC6A9\uD488</mat-option>
            <mat-option value="\uC0AC\uBB34\uC6A9\uD488">\uC0AC\uBB34\uC6A9\uD488</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uC7AC\uACE0\uC0C1\uD0DC</mat-label>
          <mat-select [(ngModel)]="stockStatusFilter" (selectionChange)="onStockStatusFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option value="normal">\uC815\uC0C1</mat-option>
            <mat-option value="low">\uBD80\uC871</mat-option>
            <mat-option value="out">\uD488\uC808</mat-option>
            <mat-option value="excess">\uACFC\uB2E4</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>\uAC80\uC0C9</mat-label>
          <input 
            matInput
            [(ngModel)]="inventorySearchQuery" 
            (input)="onInventorySearchChange()" 
            placeholder="\uC81C\uD488\uCF54\uB4DC, \uC81C\uD488\uBA85, \uAC70\uB798\uCC98 \uAC80\uC0C9...">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>

      <!-- \uC7AC\uACE0 \uBAA9\uB85D \uD14C\uC774\uBE14 -->
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uC81C\uD488\uCF54\uB4DC</th>
              <th>\uC81C\uD488\uBA85</th>
              <th>\uCE74\uD14C\uACE0\uB9AC</th>
              <th>\uD604\uC7AC\uACE0</th>
              <th>\uCD5C\uC18C/\uCD5C\uB300</th>
              <th>\uB2E8\uAC00</th>
              <th>\uC704\uCE58</th>
              <th>\uC0C1\uD0DC</th>
              <th>\uC791\uC5C5</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of paginatedInventory" (click)="viewInventoryDetail(item)" class="table-row">
              <td><strong>{{ item.productCode }}</strong></td>
              <td>{{ item.productName }}</td>
              <td>{{ item.category }}</td>
              <td class="stock-cell">
                <strong [class.low-stock]="item.status === 'low' || item.status === 'out'"
                        [class.excess-stock]="item.status === 'excess'">
                  {{ item.currentStock }}
                </strong>
              </td>
              <td>{{ item.minStock }} / {{ item.maxStock }}</td>
              <td class="amount">{{ formatCurrency(item.unitPrice) }}</td>
              <td>{{ item.location }}</td>
              <td>
                <span [class]="'status-badge ' + getStockStatusClass(item.status)">
                  {{ getStockStatusLabel(item.status) }}
                </span>
              </td>
              <td class="action-cell" (click)="$event.stopPropagation()">
                <button class="icon-btn" (click)="openStockAdjustModal(item)" title="\uC7AC\uACE0\uC870\uC815">\u{1F4DD}</button>
                <button class="icon-btn" (click)="deleteInventory(item)" title="\uC0AD\uC81C">\u{1F5D1}\uFE0F</button>
              </td>
            </tr>
            <tr *ngIf="paginatedInventory.length === 0">
              <td colspan="9" class="no-data">\uC7AC\uACE0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \uD398\uC774\uC9D5 -->
      <div class="pagination" *ngIf="inventoryTotalPages > 1">
        <button class="page-btn" (click)="goToInventoryPage(1)" [disabled]="inventoryCurrentPage === 1">
          \xAB
        </button>
        <button class="page-btn" (click)="previousInventoryPage()" [disabled]="inventoryCurrentPage === 1">
          \u2039
        </button>
        <button 
          *ngFor="let page of inventoryPageNumbers" 
          class="page-btn" 
          [class.active]="page === inventoryCurrentPage"
          (click)="goToInventoryPage(page)">
          {{ page }}
        </button>
        <button class="page-btn" (click)="nextInventoryPage()" [disabled]="inventoryCurrentPage === inventoryTotalPages">
          \u203A
        </button>
        <button class="page-btn" (click)="goToInventoryPage(inventoryTotalPages)" [disabled]="inventoryCurrentPage === inventoryTotalPages">
          \xBB
        </button>
        <div class="page-info">
          {{ inventoryCurrentPage }} / {{ inventoryTotalPages }} \uD398\uC774\uC9C0 (\uCD1D {{ filteredInventory.length }}\uAC74)
        </div>
      </div>
    </div>

    <!-- \uAC70\uB798\uCC98 \uD654\uBA74 -->
    <div class="content-section" *ngIf="currentActiveMenu === '\uAC70\uB798\uCC98'">
      <div class="section-header">
        <h2>\uAC70\uB798\uCC98 \uAD00\uB9AC</h2>
        <button class="primary-btn" (click)="openSupplierModal()">
          <span class="icon">\u2795</span>
          \uAC70\uB798\uCC98 \uB4F1\uB85D
        </button>
      </div>

      <!-- \uD544\uD130 \uC139\uC158 -->
      <div class="filter-section">
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uCE74\uD14C\uACE0\uB9AC</mat-label>
          <mat-select [(ngModel)]="supplierCategoryFilter" (selectionChange)="onSupplierCategoryFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option value="\uC758\uC57D\uD488">\uC758\uC57D\uD488</mat-option>
            <mat-option value="\uC758\uB8CC\uAE30\uAE30">\uC758\uB8CC\uAE30\uAE30</mat-option>
            <mat-option value="\uC18C\uBAA8\uD488">\uC18C\uBAA8\uD488</mat-option>
            <mat-option value="\uC704\uC0DD\uC6A9\uD488">\uC704\uC0DD\uC6A9\uD488</mat-option>
            <mat-option value="\uC0AC\uBB34\uC6A9\uD488">\uC0AC\uBB34\uC6A9\uD488</mat-option>
            <mat-option value="\uAC74\uAC15\uC2DD\uD488">\uAC74\uAC15\uC2DD\uD488</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uC0C1\uD0DC</mat-label>
          <mat-select [(ngModel)]="supplierStatusFilter" (selectionChange)="onSupplierStatusFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option value="active">\uD65C\uC131</mat-option>
            <mat-option value="inactive">\uBE44\uD65C\uC131</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>\uAC80\uC0C9</mat-label>
          <input 
            matInput
            [(ngModel)]="supplierSearchQuery" 
            (input)="onSupplierSearchChange()" 
            placeholder="\uAC70\uB798\uCC98\uCF54\uB4DC, \uC0C1\uD638\uBA85, \uB300\uD45C\uC790, \uC5F0\uB77D\uCC98 \uAC80\uC0C9...">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>

      <!-- \uAC70\uB798\uCC98 \uBAA9\uB85D \uD14C\uC774\uBE14 -->
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uAC70\uB798\uCC98\uCF54\uB4DC</th>
              <th>\uC0C1\uD638\uBA85</th>
              <th>\uCE74\uD14C\uACE0\uB9AC</th>
              <th>\uB300\uD45C\uC790</th>
              <th>\uC5F0\uB77D\uCC98</th>
              <th>\uC2E0\uC6A9\uB4F1\uAE09</th>
              <th>\uC0C1\uD0DC</th>
              <th>\uCD5C\uADFC\uAC70\uB798</th>
              <th>\uC791\uC5C5</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let supplier of paginatedSuppliers" (click)="viewSupplierDetail(supplier)" class="table-row">
              <td><strong>{{ supplier.code }}</strong></td>
              <td>{{ supplier.name }}</td>
              <td>{{ supplier.category }}</td>
              <td>{{ supplier.representative }}</td>
              <td>{{ supplier.contact }}</td>
              <td>
                <span [class]="'credit-badge ' + getCreditRatingClass(supplier.creditRating)">
                  {{ getCreditRatingLabel(supplier.creditRating) }}
                </span>
              </td>
              <td>
                <span [class]="'status-badge ' + getSupplierStatusClass(supplier.status)">
                  {{ getSupplierStatusLabel(supplier.status) }}
                </span>
              </td>
              <td>{{ supplier.lastTransactionDate ? formatDate(supplier.lastTransactionDate) : '-' }}</td>
              <td class="action-cell" (click)="$event.stopPropagation()">
                <button class="icon-btn" (click)="toggleSupplierStatus(supplier)" [title]="supplier.status === 'active' ? '\uBE44\uD65C\uC131\uD654' : '\uD65C\uC131\uD654'">
                  {{ supplier.status === 'active' ? '\u23F8\uFE0F' : '\u25B6\uFE0F' }}
                </button>
                <button class="icon-btn" (click)="deleteSupplier(supplier)" title="\uC0AD\uC81C">\u{1F5D1}\uFE0F</button>
              </td>
            </tr>
            <tr *ngIf="paginatedSuppliers.length === 0">
              <td colspan="9" class="no-data">\uAC70\uB798\uCC98 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \uD398\uC774\uC9D5 -->
      <div class="pagination" *ngIf="supplierTotalPages > 1">
        <button class="page-btn" (click)="goToSupplierPage(1)" [disabled]="supplierCurrentPage === 1">
          \xAB
        </button>
        <button class="page-btn" (click)="previousSupplierPage()" [disabled]="supplierCurrentPage === 1">
          \u2039
        </button>
        <button 
          *ngFor="let page of supplierPageNumbers" 
          class="page-btn" 
          [class.active]="page === supplierCurrentPage"
          (click)="goToSupplierPage(page)">
          {{ page }}
        </button>
        <button class="page-btn" (click)="nextSupplierPage()" [disabled]="supplierCurrentPage === supplierTotalPages">
          \u203A
        </button>
        <button class="page-btn" (click)="goToSupplierPage(supplierTotalPages)" [disabled]="supplierCurrentPage === supplierTotalPages">
          \xBB
        </button>
        <div class="page-info">
          {{ supplierCurrentPage }} / {{ supplierTotalPages }} \uD398\uC774\uC9C0 (\uCD1D {{ filteredSuppliers.length }}\uAC74)
        </div>
      </div>
    </div>

    <!-- \uC815\uC0B0 \uD654\uBA74 -->
    <div class="content-section" *ngIf="currentActiveMenu === '\uC815\uC0B0'">
      <div class="section-header">
        <h2>\uC815\uC0B0 \uAD00\uB9AC</h2>
      </div>

      <!-- \uC815\uC0B0 \uD1B5\uACC4 -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon pending">\u{1F4CB}</div>
          <div class="stat-info">
            <div class="stat-label">\uB300\uAE30</div>
            <div class="stat-value">{{ settlementStats.pendingCount }}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon overdue">\u23F0</div>
          <div class="stat-info">
            <div class="stat-label">\uC9C0\uC5F0</div>
            <div class="stat-value">{{ settlementStats.overdueCount }}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon paid">\u2705</div>
          <div class="stat-info">
            <div class="stat-label">\uC644\uB8CC</div>
            <div class="stat-value">{{ settlementStats.paidCount }}</div>
          </div>
        </div>
        <div class="stat-card highlight">
          <div class="stat-icon balance">\u{1F4B0}</div>
          <div class="stat-info">
            <div class="stat-label">\uCD1D \uBBF8\uACB0\uC81C\uC561</div>
            <div class="stat-value large">{{ formatCurrency(settlementStats.totalBalance) }}</div>
          </div>
        </div>
      </div>

      <!-- \uD544\uD130 \uC139\uC158 -->
      <div class="filter-section">
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uAE30\uAC04</mat-label>
          <mat-select [(ngModel)]="settlementPeriodFilter" (selectionChange)="onSettlementPeriodFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option *ngFor="let period of getAvailablePeriods()" [value]="period">
              {{ formatPeriod(period) }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>\uC0C1\uD0DC</mat-label>
          <mat-select [(ngModel)]="settlementStatusFilter" (selectionChange)="onSettlementStatusFilterChange()">
            <mat-option value="all">\uC804\uCCB4</mat-option>
            <mat-option value="pending">\uB300\uAE30</mat-option>
            <mat-option value="confirmed">\uD655\uC815</mat-option>
            <mat-option value="paid">\uC644\uB8CC</mat-option>
            <mat-option value="overdue">\uC9C0\uC5F0</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="search-field">
          <mat-label>\uAC80\uC0C9</mat-label>
          <input 
            matInput
            [(ngModel)]="settlementSearchQuery" 
            (input)="onSettlementSearchChange()" 
            placeholder="\uC815\uC0B0\uBC88\uD638, \uAC70\uB798\uCC98\uCF54\uB4DC, \uAC70\uB798\uCC98\uBA85 \uAC80\uC0C9...">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>

      <!-- \uC815\uC0B0 \uBAA9\uB85D \uD14C\uC774\uBE14 -->
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uC815\uC0B0\uBC88\uD638</th>
              <th>\uC815\uC0B0\uAE30\uAC04</th>
              <th>\uAC70\uB798\uCC98</th>
              <th>\uBC1C\uC8FC\uAE08\uC561</th>
              <th>\uACB0\uC81C\uAE08\uC561</th>
              <th>\uBC18\uD488\uAE08\uC561</th>
              <th>\uBBF8\uACB0\uC81C\uC561</th>
              <th>\uB9C8\uAC10\uC77C</th>
              <th>\uC0C1\uD0DC</th>
              <th>\uC791\uC5C5</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let settlement of paginatedSettlements" (click)="viewSettlementDetail(settlement)" class="table-row">
              <td><strong>{{ settlement.id }}</strong></td>
              <td>{{ formatPeriod(settlement.period) }}</td>
              <td>{{ settlement.supplierName }}</td>
              <td class="amount">{{ formatCurrency(settlement.orderAmount) }}</td>
              <td class="amount paid">{{ formatCurrency(settlement.paymentAmount) }}</td>
              <td class="amount return">{{ formatCurrency(settlement.returnAmount) }}</td>
              <td class="amount balance">
                <strong>{{ formatCurrency(settlement.balance) }}</strong>
              </td>
              <td>{{ formatDate(settlement.dueDate) }}</td>
              <td>
                <span [class]="'status-badge ' + getSettlementStatusClass(settlement.status)">
                  {{ getSettlementStatusLabel(settlement.status) }}
                </span>
              </td>
              <td class="action-cell" (click)="$event.stopPropagation()">
                <button class="icon-btn" (click)="viewSettlementDetail(settlement)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
                <button class="icon-btn" (click)="exportSettlement(settlement)" title="\uB0B4\uBCF4\uB0B4\uAE30">\u{1F4C4}</button>
              </td>
            </tr>
            <tr *ngIf="paginatedSettlements.length === 0">
              <td colspan="10" class="no-data">\uC815\uC0B0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \uD398\uC774\uC9D5 -->
      <div class="pagination" *ngIf="settlementTotalPages > 1">
        <button class="page-btn" (click)="goToSettlementPage(1)" [disabled]="settlementCurrentPage === 1">
          \xAB
        </button>
        <button class="page-btn" (click)="previousSettlementPage()" [disabled]="settlementCurrentPage === 1">
          \u2039
        </button>
        <button 
          *ngFor="let page of settlementPageNumbers" 
          class="page-btn" 
          [class.active]="page === settlementCurrentPage"
          (click)="goToSettlementPage(page)">
          {{ page }}
        </button>
        <button class="page-btn" (click)="nextSettlementPage()" [disabled]="settlementCurrentPage === settlementTotalPages">
          \u203A
        </button>
        <button class="page-btn" (click)="goToSettlementPage(settlementTotalPages)" [disabled]="settlementCurrentPage === settlementTotalPages">
          \xBB
        </button>
        <div class="page-info">
          {{ settlementCurrentPage }} / {{ settlementTotalPages }} \uD398\uC774\uC9C0 (\uCD1D {{ filteredSettlements.length }}\uAC74)
        </div>
      </div>
    </div>

  <!-- \uBCF4\uACE0\uC11C \uC139\uC158 -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uBCF4\uACE0\uC11C'">
    <div class="section-header">
      <h2>\u{1F4CA} \uBCF4\uACE0\uC11C</h2>
      <div class="header-actions">
        <button class="btn-secondary" (click)="printReport()">\u{1F5A8}\uFE0F \uC778\uC1C4</button>
        <button class="btn-primary" (click)="exportReport()">\u{1F4E5} Excel \uB0B4\uBCF4\uB0B4\uAE30</button>
      </div>
    </div>

    <!-- \uBCF4\uACE0\uC11C \uD0C0\uC785 \uD0ED -->
    <div class="report-tabs">
      <button 
        [class.active]="reportType === 'summary'" 
        (click)="reportType = 'summary'; onReportTypeChange()">
        \u{1F4CB} \uC885\uD569 \uBCF4\uACE0\uC11C
      </button>
      <button 
        [class.active]="reportType === 'category'" 
        (click)="reportType = 'category'; onReportTypeChange()">
        \u{1F4CA} \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uBD84\uC11D
      </button>
      <button 
        [class.active]="reportType === 'supplier'" 
        (click)="reportType = 'supplier'; onReportTypeChange()">
        \u{1F3E2} \uAC70\uB798\uCC98\uBCC4 \uBD84\uC11D
      </button>
      <button 
        [class.active]="reportType === 'trend'" 
        (click)="reportType = 'trend'; onReportTypeChange()">
        \u{1F4C8} \uC6D4\uBCC4 \uCD94\uC774
      </button>
    </div>

    <!-- \uAE30\uAC04 \uC120\uD0DD -->
    <div class="report-period-selector">
      <mat-radio-group [(ngModel)]="reportPeriod" (change)="onReportPeriodChange()" class="period-type">
        <mat-radio-button value="month">\uC6D4\uBCC4</mat-radio-button>
      </mat-radio-group>
      <mat-form-field appearance="outline" class="month-select">
        <mat-label>\uAE30\uAC04 \uC120\uD0DD</mat-label>
        <mat-select [(ngModel)]="selectedMonth" (selectionChange)="onSelectedMonthChange()">
          <mat-option *ngFor="let month of getAvailableMonths()" [value]="month">
            {{ formatPeriod(month) }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <!-- \uC885\uD569 \uBCF4\uACE0\uC11C \uB0B4\uC6A9\uC740 \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uACC4\uC18D... -->
    <div class="report-content" *ngIf="reportType === 'summary' && summaryReport">
      <div class="report-title">
        <h3>{{ formatPeriod(summaryReport.period) }} \uC885\uD569 \uBCF4\uACE0\uC11C</h3>
      </div>

      <div class="report-summary-grid">
        <div class="summary-card">
          <div class="card-icon">\u{1F4E6}</div>
          <div class="card-content">
            <div class="card-label">\uCD1D \uBC1C\uC8FC \uAC74\uC218</div>
            <div class="card-value">{{ summaryReport.orderCount }}<span class="unit">\uAC74</span></div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">\u{1F4B0}</div>
          <div class="card-content">
            <div class="card-label">\uCD1D \uBC1C\uC8FC \uAE08\uC561</div>
            <div class="card-value">{{ formatCurrency(summaryReport.orderAmount) }}</div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">\u{1F4CA}</div>
          <div class="card-content">
            <div class="card-label">\uC7AC\uACE0 \uC790\uC0B0 \uAC00\uCE58</div>
            <div class="card-value">{{ formatCurrency(summaryReport.inventoryValue) }}</div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">\u{1F3E2}</div>
          <div class="card-content">
            <div class="card-label">\uD65C\uC131 \uAC70\uB798\uCC98</div>
            <div class="card-value">{{ summaryReport.supplierCount }}<span class="unit">\uAC1C</span></div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">\u{1F4B3}</div>
          <div class="card-content">
            <div class="card-label">\uC815\uC0B0 \uC608\uC815 \uAE08\uC561</div>
            <div class="card-value">{{ formatCurrency(summaryReport.settlementAmount) }}</div>
          </div>
        </div>

        <div class="summary-card">
          <div class="card-icon">\u{1F4C8}</div>
          <div class="card-content">
            <div class="card-label">\uD3C9\uADE0 \uBC1C\uC8FC \uAE08\uC561</div>
            <div class="card-value">
              {{ summaryReport.orderCount > 0 ? formatCurrency(summaryReport.orderAmount / summaryReport.orderCount) : '0\uC6D0' }}
            </div>
          </div>
        </div>
      </div>

      <!-- \uBC1C\uC8FC \uC0C1\uC138 \uB9AC\uC2A4\uD2B8 -->
      <div class="report-detail-section">
        <h4>\u{1F4CB} \uBC1C\uC8FC \uC0C1\uC138 \uB0B4\uC5ED</h4>
        
        <!-- \uD544\uD130 \uC139\uC158 -->
        <div class="filter-section">
          <mat-form-field appearance="outline" class="search-field">
            <mat-label>\uAC80\uC0C9</mat-label>
            <input 
              matInput
              [(ngModel)]="reportSearchQuery" 
              (input)="onReportSearchChange()"
              placeholder="\uBC1C\uC8FC\uBC88\uD638, \uAC70\uB798\uCC98 \uAC80\uC0C9...">
            <mat-icon matSuffix>search</mat-icon>
          </mat-form-field>
          
          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>\uC0C1\uD0DC</mat-label>
            <mat-select [(ngModel)]="reportStatusFilter" (selectionChange)="onReportStatusFilterChange()">
              <mat-option value="all">\uC804\uCCB4 \uC0C1\uD0DC</mat-option>
              <mat-option value="pending">\uB300\uAE30</mat-option>
              <mat-option value="approved">\uC2B9\uC778</mat-option>
              <mat-option value="completed">\uC644\uB8CC</mat-option>
              <mat-option value="cancelled">\uCDE8\uC18C</mat-option>
            </mat-select>
          </mat-form-field>
            
          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>\uCE74\uD14C\uACE0\uB9AC</mat-label>
            <mat-select [(ngModel)]="reportCategoryFilter" (selectionChange)="onReportCategoryFilterChange()">
              <mat-option value="all">\uC804\uCCB4 \uCE74\uD14C\uACE0\uB9AC</mat-option>
              <mat-option *ngFor="let cat of getReportCategories()" [value]="cat">{{ cat }}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <!-- \uB9AC\uC2A4\uD2B8 \uD14C\uC774\uBE14 -->
        <div class="report-list-table">
          <table>
            <thead>
              <tr>
                <th>\uBC1C\uC8FC\uBC88\uD638</th>
                <th>\uBC1C\uC8FC\uC77C</th>
                <th>\uAC70\uB798\uCC98</th>
                <th>\uD488\uBAA9\uC218</th>
                <th>\uCD1D \uAE08\uC561</th>
                <th>\uC0C1\uD0DC</th>
                <th>\uB2F4\uB2F9\uC790</th>
                <th>\uC791\uC5C5</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let order of paginatedReportOrders">
                <td class="order-id">{{ order.id }}</td>
                <td>{{ formatDate(order.orderDate) }}</td>
                <td class="supplier-name">{{ order.supplier }}</td>
                <td class="text-center">{{ order.items.length }}\uAC1C</td>
                <td class="text-right amount">{{ formatCurrency(order.totalAmount) }}</td>
                <td>
                  <span [class]="'status-badge ' + getStatusClass(order.status)">
                    {{ getStatusLabel(order.status) }}
                  </span>
                </td>
                <td>{{ order.createdBy }}</td>
                <td>
                  <button class="btn-view" (click)="viewReportOrderDetail(order)">\uC0C1\uC138</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="no-data" *ngIf="paginatedReportOrders.length === 0">
            \uD574\uB2F9 \uC870\uAC74\uC758 \uBC1C\uC8FC \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.
          </div>
        </div>

        <!-- \uD398\uC774\uC9D5 -->
        <div class="pagination" *ngIf="reportTotalPages > 1">
          <button (click)="previousReportPage()" [disabled]="reportCurrentPage === 1">
            \uC774\uC804
          </button>
          <button 
            *ngFor="let page of reportPageNumbers" 
            [class.active]="page === reportCurrentPage"
            (click)="goToReportPage(page)">
            {{ page }}
          </button>
          <button (click)="nextReportPage()" [disabled]="reportCurrentPage === reportTotalPages">
            \uB2E4\uC74C
          </button>
        </div>

        <div class="list-summary">
          \uC804\uCCB4 {{ filteredReportOrders.length }}\uAC74 \uC911 
          {{ (reportCurrentPage - 1) * reportItemsPerPage + 1 }}~{{ getReportEndIndex() }}\uAC74 \uD45C\uC2DC
        </div>
      </div>
    </div>

    <!-- \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uBCF4\uACE0\uC11C -->
    <div class="report-content" *ngIf="reportType === 'category'">
      <div class="report-title">
        <h3>{{ formatPeriod(selectedMonth) }} \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uBD84\uC11D</h3>
      </div>

      <div class="category-report-list">
        <div class="category-item" *ngFor="let cat of categoryReports">
          <div class="category-header">
            <div class="category-name">{{ cat.category }}</div>
            <div class="category-stats">
              <span class="order-count">{{ cat.orderCount }}\uAC74</span>
              <span class="order-amount">{{ formatCurrency(cat.orderAmount) }}</span>
            </div>
          </div>
          <div class="category-bar-container">
            <div class="category-bar" [style.width]="getPercentageBarWidth(cat.percentage)"></div>
            <div class="category-percentage">{{ cat.percentage.toFixed(1) }}%</div>
          </div>
        </div>

        <div class="no-data" *ngIf="categoryReports.length === 0">
          \uD574\uB2F9 \uAE30\uAC04\uC758 \uCE74\uD14C\uACE0\uB9AC \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
    </div>

    <!-- \uAC70\uB798\uCC98\uBCC4 \uBCF4\uACE0\uC11C -->
    <div class="report-content" *ngIf="reportType === 'supplier'">
      <div class="report-title">
        <h3>{{ formatPeriod(selectedMonth) }} \uAC70\uB798\uCC98\uBCC4 \uBD84\uC11D (\uC0C1\uC704 10\uAC1C)</h3>
      </div>

      <div class="supplier-report-table">
        <table>
          <thead>
            <tr>
              <th>\uC21C\uC704</th>
              <th>\uAC70\uB798\uCC98\uBA85</th>
              <th>\uBC1C\uC8FC \uAC74\uC218</th>
              <th>\uCD1D \uBC1C\uC8FC \uAE08\uC561</th>
              <th>\uD3C9\uADE0 \uBC1C\uC8FC \uAE08\uC561</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let sup of supplierReports; let i = index">
              <td class="rank">
                <span class="rank-badge" [class.top3]="i < 3">{{ i + 1 }}</span>
              </td>
              <td class="supplier-name">{{ sup.supplierName }}</td>
              <td class="text-center">{{ sup.orderCount }}\uAC74</td>
              <td class="text-right">{{ formatCurrency(sup.orderAmount) }}</td>
              <td class="text-right">{{ formatCurrency(sup.averageAmount) }}</td>
            </tr>
          </tbody>
        </table>

        <div class="no-data" *ngIf="supplierReports.length === 0">
          \uD574\uB2F9 \uAE30\uAC04\uC758 \uAC70\uB798\uCC98 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
    </div>

    <!-- \uC6D4\uBCC4 \uCD94\uC774 \uBCF4\uACE0\uC11C -->
    <div class="report-content" *ngIf="reportType === 'trend'">
      <div class="report-title">
        <h3>\uCD5C\uADFC 6\uAC1C\uC6D4 \uBC1C\uC8FC \uCD94\uC774</h3>
      </div>

      <div class="trend-chart">
        <div class="chart-container">
          <div class="chart-bars">
            <div class="chart-bar-item" *ngFor="let trend of monthlyTrends">
              <div class="bar-wrapper">
                <div class="bar-value">{{ formatCompactCurrency(trend.amount) }}</div>
                <div class="bar" [style.height]="getTrendBarHeight(trend.amount)">
                  <div class="bar-fill"></div>
                </div>
              </div>
              <div class="bar-label">{{ formatShortMonth(trend.month) }}</div>
              <div class="bar-count">{{ trend.orders }}\uAC74</div>
            </div>
          </div>
        </div>

        <div class="trend-summary">
          <div class="trend-stat">
            <div class="stat-label">\uCD1D \uBC1C\uC8FC \uAC74\uC218</div>
            <div class="stat-value">
              {{ getTotalTrendOrders() }}\uAC74
            </div>
          </div>
          <div class="trend-stat">
            <div class="stat-label">\uCD1D \uBC1C\uC8FC \uAE08\uC561</div>
            <div class="stat-value">
              {{ formatCurrency(getTotalTrendAmount()) }}
            </div>
          </div>
          <div class="trend-stat">
            <div class="stat-label">\uC6D4\uD3C9\uADE0 \uBC1C\uC8FC\uC561</div>
            <div class="stat-value">
              {{ formatCurrency(getAverageTrendAmount()) }}
            </div>
          </div>
        </div>

        <div class="no-data" *ngIf="monthlyTrends.length === 0">
          \uCD94\uC774 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
        </div>
      </div>
    </div>
  </div>

  <!-- \uC720\uD6A8\uAE30\uAC04 \uAD00\uB9AC \uC139\uC158 -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uC720\uD6A8\uAE30\uAC04'">
    <div class="section-header">
      <h2>\u23F0 \uC720\uD6A8\uAE30\uAC04 \uAD00\uB9AC</h2>
      <div class="header-actions">
        <button class="btn-primary" (click)="checkExpiringProducts()">\u{1F504} \uAC31\uC2E0</button>
      </div>
    </div>

    <!-- \uC54C\uB9BC \uD1B5\uACC4 -->
    <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
      <div class="stat-card alert">
        <div class="stat-icon expired">\u26A0\uFE0F</div>
        <div class="stat-info">
          <div class="stat-label">\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC</div>
          <div class="stat-value">{{ expiredLots.length }}</div>
        </div>
      </div>
      <div class="stat-card warning">
        <div class="stat-icon expiring">\u23F0</div>
        <div class="stat-info">
          <div class="stat-label">\uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 (3\uAC1C\uC6D4 \uC774\uB0B4)</div>
          <div class="stat-value">{{ expiringLots.length }}</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon normal">\u2705</div>
        <div class="stat-info">
          <div class="stat-label">\uC815\uC0C1 \uC7AC\uACE0</div>
          <div class="stat-value">{{ lotBatches.length - expiredLots.length - expiringLots.length }}</div>
        </div>
      </div>
    </div>

    <!-- \uD0ED \uBA54\uB274 -->
    <div class="tabs-container" style="margin-top: 24px;">
      <div class="tabs">
        <button class="tab" [class.active]="expiryTab === 'expired'" (click)="expiryTab = 'expired'">
          \uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC ({{ expiredLots.length }})
        </button>
        <button class="tab" [class.active]="expiryTab === 'expiring'" (click)="expiryTab = 'expiring'">
          \uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 ({{ expiringLots.length }})
        </button>
        <button class="tab" [class.active]="expiryTab === 'all'" (click)="expiryTab = 'all'">
          \uC804\uCCB4 \uBC30\uCE58 ({{ lotBatches.length }})
        </button>
      </div>
    </div>

    <!-- \uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC \uC81C\uD488 -->
    <div *ngIf="expiryTab === 'expired'" class="expiry-content">
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uC81C\uC870\uBC88\uD638</th>
              <th>\uC81C\uD488\uBA85</th>
              <th>\uC81C\uC870\uC77C</th>
              <th>\uC720\uD6A8\uAE30\uAC04</th>
              <th>\uACBD\uACFC\uC77C\uC218</th>
              <th>\uD604\uC7AC\uC7AC\uACE0</th>
              <th>\uBCF4\uAD00\uC704\uCE58</th>
              <th>\uC0C1\uD0DC</th>
              <th>\uC791\uC5C5</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let lot of expiredLots" class="expired-row">
              <td><strong>{{ lot.lotNumber }}</strong></td>
              <td>{{ lot.productName }}</td>
              <td>{{ formatDate(lot.manufacturingDate) }}</td>
              <td class="expired-date">{{ formatDate(lot.expiryDate) }}</td>
              <td class="expired-days">{{ getDaysExpired(lot.expiryDate) }}\uC77C</td>
              <td class="text-right">{{ lot.currentStock }}</td>
              <td>{{ lot.storageLocation }}</td>
              <td><span class="status-badge expired">\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC</span></td>
              <td class="action-cell">
                <button class="icon-btn danger" (click)="handleExpiredProduct(lot)" title="\uACA9\uB9AC\uCC98\uB9AC">\u{1F6AB}</button>
                <button class="icon-btn" (click)="viewLotDetail(lot)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
              </td>
            </tr>
            <tr *ngIf="expiredLots.length === 0">
              <td colspan="9" class="no-data">\uC720\uD6A8\uAE30\uAC04 \uACBD\uACFC \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- \uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 \uC81C\uD488 -->
    <div *ngIf="expiryTab === 'expiring'" class="expiry-content">
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uC81C\uC870\uBC88\uD638</th>
              <th>\uC81C\uD488\uBA85</th>
              <th>\uC81C\uC870\uC77C</th>
              <th>\uC720\uD6A8\uAE30\uAC04</th>
              <th>\uB0A8\uC740\uC77C\uC218</th>
              <th>\uD604\uC7AC\uC7AC\uACE0</th>
              <th>\uBCF4\uAD00\uC704\uCE58</th>
              <th>\uC6B0\uC120\uC21C\uC704</th>
              <th>\uC791\uC5C5</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let lot of expiringLots" class="expiring-row">
              <td><strong>{{ lot.lotNumber }}</strong></td>
              <td>{{ lot.productName }}</td>
              <td>{{ formatDate(lot.manufacturingDate) }}</td>
              <td class="expiring-date">{{ formatDate(lot.expiryDate) }}</td>
              <td class="expiring-days">{{ getDaysUntilExpiry(lot.expiryDate) }}\uC77C</td>
              <td class="text-right">{{ lot.currentStock }}</td>
              <td>{{ lot.storageLocation }}</td>
              <td>
                <span class="priority-badge" [class.high]="getDaysUntilExpiry(lot.expiryDate) < 30">
                  {{ getDaysUntilExpiry(lot.expiryDate) < 30 ? '\uB192\uC74C' : '\uC911\uAC04' }}
                </span>
              </td>
              <td class="action-cell">
                <button class="icon-btn warning" (click)="promoteSale(lot)" title="\uD310\uB9E4\uCD09\uC9C4">\u{1F4E2}</button>
                <button class="icon-btn" (click)="viewLotDetail(lot)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
              </td>
            </tr>
            <tr *ngIf="expiringLots.length === 0">
              <td colspan="9" class="no-data">\uC720\uD6A8\uAE30\uAC04 \uC784\uBC15 \uC81C\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- \uC804\uCCB4 \uBC30\uCE58 \uBAA9\uB85D (FEFO \uC21C\uC11C) -->
    <div *ngIf="expiryTab === 'all'" class="expiry-content">
      <div class="info-banner">
        <span class="icon">\u2139\uFE0F</span>
        <span>FEFO (First Expired First Out) \uC21C\uC11C\uB85C \uC815\uB82C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</span>
      </div>
      <div class="table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>\uC21C\uC704</th>
              <th>\uC81C\uC870\uBC88\uD638</th>
              <th>\uC81C\uD488\uBA85</th>
              <th>\uACF5\uAE09\uC790</th>
              <th>\uC81C\uC870\uC77C</th>
              <th>\uC720\uD6A8\uAE30\uAC04</th>
              <th>\uB0A8\uC740\uC77C\uC218</th>
              <th>\uD604\uC7AC\uC7AC\uACE0</th>
              <th>\uBCF4\uAD00\uC704\uCE58</th>
              <th>\uC0C1\uD0DC</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let lot of getLotsSortedByExpiry(); let i = index" 
                [class.expired-row]="isExpired(lot.expiryDate)"
                [class.expiring-row]="isExpiring(lot.expiryDate)">
              <td class="fefo-rank">{{ i + 1 }}</td>
              <td><strong>{{ lot.lotNumber }}</strong></td>
              <td>{{ lot.productName }}</td>
              <td>{{ lot.supplierName }}</td>
              <td>{{ formatDate(lot.manufacturingDate) }}</td>
              <td>{{ formatDate(lot.expiryDate) }}</td>
              <td [class.expired-days]="isExpired(lot.expiryDate)" 
                  [class.expiring-days]="isExpiring(lot.expiryDate)">
                {{ getExpiryDaysDisplay(lot.expiryDate) }}
              </td>
              <td class="text-right">{{ lot.currentStock }}</td>
              <td>{{ lot.storageLocation }}</td>
              <td>
                <span class="status-badge" 
                      [class.expired]="isExpired(lot.expiryDate)"
                      [class.expiring]="isExpiring(lot.expiryDate)"
                      [class.normal]="!isExpired(lot.expiryDate) && !isExpiring(lot.expiryDate)">
                  {{ getExpiryStatus(lot.expiryDate) }}
                </span>
              </td>
            </tr>
            <tr *ngIf="lotBatches.length === 0">
              <td colspan="10" class="no-data">\uBC30\uCE58 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- \uC785\uACE0\uAC80\uC218 \uC2DC\uC2A4\uD15C \uC139\uC158 -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uC785\uACE0\uAC80\uC218'">
    <div class="section-header">
      <h2>\u2705 \uC785\uACE0\uAC80\uC218 \uAD00\uB9AC (KGSP)</h2>
      <div class="header-actions">
        <button class="btn-primary" (click)="openNewInspectionModal()">\u2795 \uC0C8 \uAC80\uC218</button>
      </div>
    </div>

    <!-- \uAC80\uC218 \uD1B5\uACC4 -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon pending">\u23F3</div>
        <div class="stat-info">
          <div class="stat-label">\uAC80\uC218 \uB300\uAE30</div>
          <div class="stat-value">{{ getInspectionCountByStatus('pending') }}</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon approved">\u2705</div>
        <div class="stat-info">
          <div class="stat-label">\uC2B9\uC778</div>
          <div class="stat-value">{{ getInspectionCountByStatus('approved') }}</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon rejected">\u274C</div>
        <div class="stat-info">
          <div class="stat-label">\uBC18\uB824</div>
          <div class="stat-value">{{ getInspectionCountByStatus('rejected') }}</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">\u{1F4CA}</div>
        <div class="stat-info">
          <div class="stat-label">\uCD1D \uAC80\uC218</div>
          <div class="stat-value">{{ receiptInspections.length }}</div>
        </div>
      </div>
    </div>

    <!-- \uD544\uD130 -->
    <div class="filter-section">
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uAC80\uC218 \uC0C1\uD0DC</mat-label>
        <mat-select [(ngModel)]="inspectionStatusFilter" (selectionChange)="onInspectionFilterChange()">
          <mat-option value="all">\uC804\uCCB4</mat-option>
          <mat-option value="pending">\uB300\uAE30</mat-option>
          <mat-option value="approved">\uC2B9\uC778</mat-option>
          <mat-option value="rejected">\uBC18\uB824</mat-option>
          <mat-option value="conditional">\uC870\uAC74\uBD80</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>\uAC80\uC0C9</mat-label>
        <input 
          matInput
          [(ngModel)]="inspectionSearchQuery" 
          (input)="onInspectionFilterChange()" 
          placeholder="\uC81C\uD488\uBA85, \uC81C\uC870\uBC88\uD638 \uAC80\uC0C9...">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </div>

    <!-- \uAC80\uC218 \uBAA9\uB85D -->
    <div class="table-container">
      <table class="order-table">
        <thead>
          <tr>
            <th>\uAC80\uC218ID</th>
            <th>\uC785\uACE0\uC77C</th>
            <th>\uACF5\uAE09\uC790</th>
            <th>\uC81C\uD488\uBA85</th>
            <th>\uC81C\uC870\uBC88\uD638</th>
            <th>\uC218\uB7C9</th>
            <th>\uAC80\uC218\uC790</th>
            <th>\uC628\uB3C4(\u2103)</th>
            <th>\uAC80\uC218\uACB0\uACFC</th>
            <th>\uC0C1\uD0DC</th>
            <th>\uC791\uC5C5</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let inspection of filteredInspections">
            <td><strong>{{ inspection.id }}</strong></td>
            <td>{{ formatDate(inspection.receiptDate) }}</td>
            <td>{{ inspection.supplierName }}</td>
            <td>{{ inspection.productName }}</td>
            <td>{{ inspection.lotNumber }}</td>
            <td class="text-right">{{ inspection.quantity }}</td>
            <td>{{ inspection.inspector }}</td>
            <td class="text-center" [class.temp-ok]="isTempOk(inspection.temperatureCheck)" 
                [class.temp-alert]="!isTempOk(inspection.temperatureCheck)">
              {{ inspection.temperatureCheck.toFixed(1) }}
            </td>
            <td>
              <div class="inspection-checklist-mini">
                <span class="check-item" [class.pass]="inspection.packagingIntact" 
                      [class.fail]="!inspection.packagingIntact" title="\uD3EC\uC7A5\uC0C1\uD0DC">
                  \u{1F4E6}{{ inspection.packagingIntact ? '\u2713' : '\u2717' }}
                </span>
                <span class="check-item" [class.pass]="inspection.quantityVerified" 
                      [class.fail]="!inspection.quantityVerified" title="\uC218\uB7C9\uD655\uC778">
                  \u{1F522}{{ inspection.quantityVerified ? '\u2713' : '\u2717' }}
                </span>
                <span class="check-item" [class.pass]="inspection.qualityAcceptable" 
                      [class.fail]="!inspection.qualityAcceptable" title="\uD488\uC9C8">
                  \u2B50{{ inspection.qualityAcceptable ? '\u2713' : '\u2717' }}
                </span>
              </div>
            </td>
            <td>
              <span class="status-badge" [class]="getInspectionStatusClass(inspection.approvalStatus)">
                {{ getInspectionStatusLabel(inspection.approvalStatus) }}
              </span>
            </td>
            <td class="action-cell">
              <button class="icon-btn" (click)="viewInspectionDetail(inspection)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
              <button class="icon-btn" *ngIf="inspection.approvalStatus === 'pending'" 
                      (click)="approveInspection(inspection)" title="\uC2B9\uC778">\u2705</button>
              <button class="icon-btn danger" *ngIf="inspection.approvalStatus === 'pending'" 
                      (click)="rejectInspection(inspection)" title="\uBC18\uB824">\u274C</button>
            </td>
          </tr>
          <tr *ngIf="filteredInspections.length === 0">
            <td colspan="11" class="no-data">\uAC80\uC218 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- ===== \uC628\uC2B5\uB3C4 \uAD00\uB9AC \uC139\uC158 ===== -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uC628\uC2B5\uB3C4'">
    <div class="section-header">
      <h2>\u{1F321}\uFE0F \uC628\uC2B5\uB3C4 \uAD00\uB9AC (Temperature & Humidity Monitoring)</h2>
      <button class="btn-primary" (click)="downloadTemperatureReport()">\u{1F4CA} \uBCF4\uACE0\uC11C \uB2E4\uC6B4\uB85C\uB4DC</button>
    </div>
    
    <!-- \uBCF4\uAD00\uAD6C\uC5ED \uD604\uD669 \uCE74\uB4DC -->
    <div class="zone-cards-grid">
      <div class="zone-card" *ngFor="let zone of storageZones" [class.alert]="isZoneAbnormal(zone)">
        <div class="zone-header">
          <span class="zone-icon">{{ getZoneIcon(zone.zoneType) }}</span>
          <div>
            <h3>{{ zone.zoneName }}</h3>
            <p class="zone-type">\uBCF4\uAD00 \uC6A9\uB7C9: {{ zone.currentOccupancy }}/{{ zone.capacity }}</p>
          </div>
        </div>
        <div class="zone-readings">
          <div class="reading">
            <span class="label">\uC628\uB3C4</span>
            <span class="value" [class.abnormal]="!isTempInRange(getCurrentReading(zone.zoneId).temperature, zone)">
              {{ getCurrentReading(zone.zoneId).temperature }}\xB0C
            </span>
            <span class="range">({{ zone.temperatureRange.min }}~{{ zone.temperatureRange.max }}\xB0C)</span>
          </div>
          <div class="reading">
            <span class="label">\uC2B5\uB3C4</span>
            <span class="value" [class.abnormal]="!isHumidityInRange(getCurrentReading(zone.zoneId).humidity, zone)">
              {{ getCurrentReading(zone.zoneId).humidity }}%
            </span>
            <span class="range">({{ zone.humidityRange.min }}~{{ zone.humidityRange.max }}%)</span>
          </div>
        </div>
        <div class="zone-last-update">
          \uCD5C\uC885 \uCE21\uC815: {{ getCurrentReading(zone.zoneId).recordDate | date:'yyyy-MM-dd HH:mm' }}
        </div>
      </div>
    </div>
    
    <!-- \uC54C\uB9BC \uBC0F \uD544\uD130 -->
    <div class="alerts-section" *ngIf="getTemperatureAlerts().length > 0">
      <div class="alert-header">
        <span>\u26A0\uFE0F \uC774\uC0C1 \uAC10\uC9C0 \uC54C\uB9BC ({{ getTemperatureAlerts().length }}\uAC74)</span>
      </div>
      <div class="alert-list">
        <div class="alert-item" *ngFor="let alert of getTemperatureAlerts()" [class.critical]="alert.status === 'critical'">
          <span class="alert-time">{{ alert.recordDate | date:'HH:mm' }}</span>
          <span class="alert-zone">{{ getZoneName(alert.zoneId) }}</span>
          <span class="alert-message">{{ alert.notes || '\uC628\uC2B5\uB3C4 \uC774\uC0C1' }}</span>
          <button class="btn-small" (click)="acknowledgeAlert(alert)">\uD655\uC778</button>
        </div>
      </div>
    </div>
    
    <!-- \uAE30\uB85D \uD544\uD130 -->
    <div class="filter-section">
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uBCF4\uAD00\uAD6C\uC5ED</mat-label>
        <mat-select [(ngModel)]="tempZoneFilter" (selectionChange)="onTempFilterChange()">
          <mat-option value="all">\uC804\uCCB4</mat-option>
          <mat-option *ngFor="let zone of storageZones" [value]="zone.zoneId">{{ zone.zoneName }}</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uB0A0\uC9DC \uBC94\uC704</mat-label>
        <mat-select [(ngModel)]="tempDateRange" (selectionChange)="onTempFilterChange()">
          <mat-option value="today">\uC624\uB298</mat-option>
          <mat-option value="week">\uCD5C\uADFC 7\uC77C</mat-option>
          <mat-option value="month">\uCD5C\uADFC 30\uC77C</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-checkbox [(ngModel)]="tempShowAbnormalOnly" (change)="onTempFilterChange()" class="filter-checkbox">
        \uC774\uC0C1\uCE58\uB9CC \uBCF4\uAE30
      </mat-checkbox>
    </div>
    
    <!-- \uC628\uC2B5\uB3C4 \uAE30\uB85D \uD14C\uC774\uBE14 -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>\uAE30\uB85DID</th>
            <th>\uCE21\uC815\uC77C\uC2DC</th>
            <th>\uBCF4\uAD00\uAD6C\uC5ED</th>
            <th>\uC628\uB3C4 (\xB0C)</th>
            <th>\uC2B5\uB3C4 (%)</th>
            <th>\uC0C1\uD0DC</th>
            <th>\uCE21\uC815\uC790</th>
            <th>\uBE44\uACE0</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let record of filteredTemperatureRecords" [class.abnormal-row]="record.alertTriggered">
            <td>{{ record.id }}</td>
            <td>{{ record.recordDate | date:'yyyy-MM-dd HH:mm' }}</td>
            <td>{{ getZoneName(record.zoneId) }}</td>
            <td [class.temp-abnormal]="!isTempInRange(record.temperature, getZone(record.zoneId))">
              {{ record.temperature }}\xB0C
              <span class="range-indicator">({{ getZone(record.zoneId).temperatureRange.min }}~{{ getZone(record.zoneId).temperatureRange.max }})</span>
            </td>
            <td [class.humidity-abnormal]="!isHumidityInRange(record.humidity, getZone(record.zoneId))">
              {{ record.humidity }}%
              <span class="range-indicator">({{ getZone(record.zoneId).humidityRange.min }}~{{ getZone(record.zoneId).humidityRange.max }})</span>
            </td>
            <td>
              <span class="status-badge" [class.normal]="!record.alertTriggered" [class.abnormal]="record.alertTriggered">
                {{ record.alertTriggered ? '\uC774\uC0C1' : '\uC815\uC0C1' }}
              </span>
            </td>
            <td>{{ record.recordedBy }}</td>
            <td>
              <span *ngIf="record.notes">{{ record.notes }}</span>
              <button class="btn-icon" (click)="viewTemperatureDetail(record)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
            </td>
          </tr>
          <tr *ngIf="filteredTemperatureRecords.length === 0">
            <td colspan="8" class="no-data">\uC628\uC2B5\uB3C4 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- ===== \uBC18\uD488/\uD68C\uC218 \uAD00\uB9AC \uC139\uC158 ===== -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uBC18\uD488\uD68C\uC218'">
    <div class="section-header">
      <h2>\u21A9\uFE0F \uBC18\uD488/\uD68C\uC218 \uAD00\uB9AC</h2>
      <div class="header-actions">
        <button class="btn-primary" (click)="openNewReturnModal()">+ \uBC18\uD488 \uB4F1\uB85D</button>
        <button class="btn-danger" (click)="openNewRecallModal()">\u26A0\uFE0F \uD68C\uC218 \uB4F1\uB85D</button>
      </div>
    </div>
    
    <!-- \uD1B5\uACC4 \uCE74\uB4DC -->
    <div class="stats-grid" style="grid-template-columns: repeat(5, 1fr);">
      <div class="stat-card">
        <div class="stat-label">\uC804\uCCB4</div>
        <div class="stat-value">{{ returnRecalls.length }}</div>
      </div>
      <div class="stat-card warning">
        <div class="stat-label">\uBC18\uD488 (\uB300\uAE30)</div>
        <div class="stat-value">{{ getReturnRecallCount('return', 'pending') }}</div>
      </div>
      <div class="stat-card alert">
        <div class="stat-label">\uD68C\uC218 (\uAE34\uAE09)</div>
        <div class="stat-value">{{ getUrgentRecallCount() }}</div>
      </div>
      <div class="stat-card success">
        <div class="stat-label">\uCC98\uB9AC \uC644\uB8CC</div>
        <div class="stat-value">{{ getReturnRecallCount('all', 'completed') }}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">\uB2F9\uAD6D \uBCF4\uACE0</div>
        <div class="stat-value">{{ getAuthorityReportedCount() }}</div>
      </div>
    </div>
    
    <!-- \uD544\uD130 \uC139\uC158 -->
    <div class="filter-section">
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uC720\uD615</mat-label>
        <mat-select [(ngModel)]="returnTypeFilter" (selectionChange)="onReturnFilterChange()">
          <mat-option value="all">\uC804\uCCB4</mat-option>
          <mat-option value="return">\uBC18\uD488</mat-option>
          <mat-option value="recall">\uD68C\uC218</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uC0C1\uD0DC</mat-label>
        <mat-select [(ngModel)]="returnStatusFilter" (selectionChange)="onReturnFilterChange()">
          <mat-option value="all">\uC804\uCCB4</mat-option>
          <mat-option value="pending">\uB300\uAE30</mat-option>
          <mat-option value="approved">\uC2B9\uC778</mat-option>
          <mat-option value="completed">\uC644\uB8CC</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>\uAC80\uC0C9</mat-label>
        <input matInput [(ngModel)]="returnSearchQuery" (input)="onReturnFilterChange()" placeholder="\uC81C\uD488\uBA85, LOT\uBC88\uD638 \uAC80\uC0C9...">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </div>
    
    <!-- \uBC18\uD488/\uD68C\uC218 \uBAA9\uB85D \uD14C\uC774\uBE14 -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>\uC720\uD615</th>
            <th>\uC77C\uC790</th>
            <th>\uC81C\uD488\uBA85</th>
            <th>\uC81C\uC870\uBC88\uD638</th>
            <th>\uC218\uB7C9</th>
            <th>\uC0AC\uC720</th>
            <th>\uAE34\uAE09\uB3C4</th>
            <th>\uC0C1\uD0DC</th>
            <th>\uB2F9\uAD6D\uBCF4\uACE0</th>
            <th>\uC791\uC5C5</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of filteredReturnRecalls" 
              [class.urgent-row]="item.type === 'recall' && item.recallLevel === 'urgent'"
              [class.completed-row]="item.status === 'completed'">
            <td>{{ item.id }}</td>
            <td>
              <span class="type-badge" [class.return]="item.type === 'return'" [class.recall]="item.type === 'recall'">
                {{ item.type === 'return' ? '\u21A9\uFE0F \uBC18\uD488' : '\u26A0\uFE0F \uD68C\uC218' }}
              </span>
            </td>
            <td>{{ item.date | date:'yyyy-MM-dd' }}</td>
            <td>{{ item.productName }}</td>
            <td>{{ item.lotNumber }}</td>
            <td>{{ item.quantity }}</td>
            <td class="reason-cell">{{ item.reason }}</td>
            <td>
              <span *ngIf="item.type === 'recall' && item.recallLevel" 
                    class="level-badge" 
                    [class.urgent]="item.recallLevel === 'urgent'"
                    [class.high]="item.recallLevel === 'high'"
                    [class.medium]="item.recallLevel === 'medium'"
                    [class.low]="item.recallLevel === 'low'">
                {{ getRecallLevelLabel(item.recallLevel) }}
              </span>
            </td>
            <td>
              <span class="status-badge" 
                    [class.pending]="item.status === 'pending'"
                    [class.approved]="item.status === 'approved'"
                    [class.completed]="item.status === 'completed'">
                {{ getReturnStatusLabel(item.status) }}
              </span>
            </td>
            <td>
              <span *ngIf="item.authorityReported" class="badge-check">\u2713 \uC644\uB8CC</span>
              <span *ngIf="!item.authorityReported && item.type === 'recall'" class="badge-warning">\u26A0\uFE0F \uBBF8\uBCF4\uACE0</span>
            </td>
            <td>
              <button class="btn-icon" (click)="viewReturnDetail(item)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
              <button *ngIf="item.status === 'pending'" class="btn-icon" (click)="approveReturn(item)" title="\uC2B9\uC778">\u2705</button>
              <button *ngIf="item.status === 'approved'" class="btn-icon" (click)="completeReturn(item)" title="\uCC98\uB9AC\uC644\uB8CC">\u{1F4CB}</button>
              <button *ngIf="!item.authorityReported && item.type === 'recall'" class="btn-icon" (click)="reportToAuthority(item)" title="\uB2F9\uAD6D\uBCF4\uACE0">\u{1F4E4}</button>
            </td>
          </tr>
          <tr *ngIf="filteredReturnRecalls.length === 0">
            <td colspan="11" class="no-data">\uBC18\uD488/\uD68C\uC218 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- ===== \uC2EC\uD3C9\uC6D0 \uBCF4\uACE0 \uC139\uC158 ===== -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uC2EC\uD3C9\uC6D0'">
    <div class="section-header">
      <h2>\u{1F4C4} \uC2EC\uD3C9\uC6D0 \uACF5\uAE09\uB0B4\uC5ED \uBCF4\uACE0</h2>
      <div class="header-actions">
        <button class="btn-primary" (click)="openNewHIRAReportModal()">+ \uC2E0\uADDC \uBCF4\uACE0\uC11C</button>
        <button class="btn-secondary" (click)="syncHIRAReports()">\u{1F504} \uB3D9\uAE30\uD654</button>
      </div>
    </div>
    
    <!-- \uD1B5\uACC4 \uCE74\uB4DC -->
    <div class="stats-grid" style="grid-template-columns: repeat(5, 1fr);">
      <div class="stat-card">
        <div class="stat-label">\uC804\uCCB4</div>
        <div class="stat-value">{{ hiraReports.length }}</div>
      </div>
      <div class="stat-card warning">
        <div class="stat-label">\uC791\uC131\uC911</div>
        <div class="stat-value">{{ getHIRAReportCount('draft') }}</div>
      </div>
      <div class="stat-card info">
        <div class="stat-label">\uC81C\uCD9C\uC644\uB8CC</div>
        <div class="stat-value">{{ getHIRAReportCount('submitted') }}</div>
      </div>
      <div class="stat-card success">
        <div class="stat-label">\uC811\uC218\uC644\uB8CC</div>
        <div class="stat-value">{{ getHIRAReportCount('accepted') }}</div>
      </div>
      <div class="stat-card alert">
        <div class="stat-label">\uC624\uB958</div>
        <div class="stat-value">{{ getHIRAReportCount('rejected') }}</div>
      </div>
    </div>
    
    <!-- \uD544\uD130 \uC139\uC158 -->
    <div class="filter-section">
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uBCF4\uACE0 \uC720\uD615</mat-label>
        <mat-select [(ngModel)]="hiraReportTypeFilter" (selectionChange)="onHIRAFilterChange()">
          <mat-option value="all">\uC804\uCCB4</mat-option>
          <mat-option value="supply">\uACF5\uAE09\uB0B4\uC5ED</mat-option>
          <mat-option value="device">\uC758\uB8CC\uAE30\uAE30</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>\uC0C1\uD0DC</mat-label>
        <mat-select [(ngModel)]="hiraStatusFilter" (selectionChange)="onHIRAFilterChange()">
          <mat-option value="all">\uC804\uCCB4</mat-option>
          <mat-option value="draft">\uC791\uC131\uC911</mat-option>
          <mat-option value="submitted">\uC81C\uCD9C\uC644\uB8CC</mat-option>
          <mat-option value="accepted">\uC811\uC218\uC644\uB8CC</mat-option>
          <mat-option value="rejected">\uC624\uB958</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="search-field">
        <mat-label>\uAC80\uC0C9</mat-label>
        <input matInput [(ngModel)]="hiraSearchQuery" (input)="onHIRAFilterChange()" placeholder="\uC81C\uD488\uBA85, \uBCF4\uACE0\uBC88\uD638 \uAC80\uC0C9...">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </div>
    
    <!-- \uBCF4\uACE0\uC11C \uBAA9\uB85D \uD14C\uC774\uBE14 -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>\uBCF4\uACE0\uBC88\uD638</th>
            <th>\uBCF4\uACE0 \uC720\uD615</th>
            <th>\uC81C\uD488\uBA85</th>
            <th>\uC218\uB7C9</th>
            <th>\uBCF4\uACE0 \uAE30\uAC04</th>
            <th>\uC791\uC131\uC790</th>
            <th>\uC0C1\uD0DC</th>
            <th>\uD655\uC778\uBC88\uD638</th>
            <th>\uC81C\uCD9C\uC77C\uC2DC</th>
            <th>\uC791\uC5C5</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let report of filteredHIRAReports" 
              [class.draft-row]="report.reportStatus === 'draft'"
              [class.error-row]="report.reportStatus === 'rejected'">
            <td>{{ report.reportId }}</td>
            <td>
              <span class="type-badge supply">\uACF5\uAE09\uB0B4\uC5ED</span>
            </td>
            <td>{{ report.items.length > 0 ? report.items[0].productName : '-' }}</td>
            <td>{{ report.items.length > 0 ? report.items[0].quantity : 0 }}</td>
            <td>{{ report.reportDate | date:'yyyy-MM-dd' }}</td>
            <td>{{ report.submittedBy || '-' }}</td>
            <td>
              <span class="status-badge" 
                    [class.draft]="report.reportStatus === 'draft'"
                    [class.submitted]="report.reportStatus === 'submitted'"
                    [class.accepted]="report.reportStatus === 'accepted'"
                    [class.rejected]="report.reportStatus === 'rejected'">
                {{ getHIRAStatusLabel(report.reportStatus) }}
              </span>
            </td>
            <td>
              <span *ngIf="report.confirmationNumber" class="confirmation-number">{{ report.confirmationNumber }}</span>
              <span *ngIf="!report.confirmationNumber" class="text-muted">-</span>
            </td>
            <td>
              <span *ngIf="report.submittedAt">{{ report.submittedAt | date:'yyyy-MM-dd HH:mm' }}</span>
              <span *ngIf="!report.submittedAt" class="text-muted">\uBBF8\uC81C\uCD9C</span>
            </td>
            <td>
              <button class="btn-icon" (click)="viewHIRADetail(report)" title="\uC0C1\uC138\uBCF4\uAE30">\u{1F441}\uFE0F</button>
              <button *ngIf="report.reportStatus === 'draft'" class="btn-icon" (click)="editHIRAReport(report)" title="\uC218\uC815">\u270F\uFE0F</button>
              <button *ngIf="report.reportStatus === 'draft'" class="btn-icon" (click)="submitHIRAReport(report)" title="\uC81C\uCD9C">\u{1F4E4}</button>
              <button *ngIf="report.reportStatus === 'rejected'" class="btn-icon" (click)="viewHIRAErrors(report)" title="\uC624\uB958\uD655\uC778">\u26A0\uFE0F</button>
            </td>
          </tr>
          <tr *ngIf="filteredHIRAReports.length === 0">
            <td colspan="10" class="no-data">\uC2EC\uD3C9\uC6D0 \uBCF4\uACE0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- ===== \uC77C\uB828\uBC88\uD638 \uCD94\uC801 \uC139\uC158 ===== -->
  <div class="content-section" *ngIf="currentActiveMenu === '\uC77C\uB828\uBC88\uD638'">
    <div class="section-header">
      <h2>\u{1F522} \uC77C\uB828\uBC88\uD638 \uCD94\uC801 \uC2DC\uC2A4\uD15C</h2>
      <div class="header-actions">
        <button class="btn-primary" (click)="exportSerialNumbers()">\u{1F4CA} \uB0B4\uBCF4\uB0B4\uAE30</button>
      </div>
    </div>
    
    <!-- \uAC80\uC0C9 \uC139\uC158 -->
    <div class="serial-search-section">
      <mat-form-field appearance="outline" class="search-box-large">
        <mat-label>\uAC80\uC0C9</mat-label>
        <input matInput [(ngModel)]="serialSearchQuery" (input)="onSerialSearch()" placeholder="\uC77C\uB828\uBC88\uD638, RFID, \uC81C\uD488\uBA85\uC73C\uB85C \uAC80\uC0C9...">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <div class="quick-filters">
        <mat-chip-listbox aria-label="Serial status filter">
          <mat-chip-option [selected]="serialStatusFilter === 'all'" (click)="setSerialStatusFilter('all')">\uC804\uCCB4</mat-chip-option>
          <mat-chip-option [selected]="serialStatusFilter === 'available'" (click)="setSerialStatusFilter('available')">\uC0AC\uC6A9\uAC00\uB2A5</mat-chip-option>
          <mat-chip-option [selected]="serialStatusFilter === 'distributed'" (click)="setSerialStatusFilter('distributed')">\uCD9C\uD558\uB428</mat-chip-option>
          <mat-chip-option [selected]="serialStatusFilter === 'recalled'" (click)="setSerialStatusFilter('recalled')">\uD68C\uC218\uB428</mat-chip-option>
        </mat-chip-listbox>
      </div>
    </div>
    
    <!-- \uD1B5\uACC4 \uCE74\uB4DC -->
    <div class="stats-grid" style="grid-template-columns: repeat(4, 1fr);">
      <div class="stat-card">
        <div class="stat-label">\uC804\uCCB4 \uC77C\uB828\uBC88\uD638</div>
        <div class="stat-value">{{ serialNumbers.length }}</div>
      </div>
      <div class="stat-card success">
        <div class="stat-label">\uC0AC\uC6A9\uAC00\uB2A5</div>
        <div class="stat-value">{{ getSerialNumberCount('available') }}</div>
      </div>
      <div class="stat-card info">
        <div class="stat-label">\uCD9C\uD558\uB428</div>
        <div class="stat-value">{{ getSerialNumberCount('distributed') }}</div>
      </div>
      <div class="stat-card warning">
        <div class="stat-label">\uD68C\uC218\uB428</div>
        <div class="stat-value">{{ getSerialNumberCount('recalled') }}</div>
      </div>
    </div>
    
    <!-- \uC77C\uB828\uBC88\uD638 \uBAA9\uB85D \uD14C\uC774\uBE14 -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>\uC77C\uB828\uBC88\uD638</th>
            <th>RFID \uD0DC\uADF8</th>
            <th>\uC81C\uD488\uBA85</th>
            <th>\uC81C\uC870\uBC88\uD638</th>
            <th>\uD604\uC7AC \uC0C1\uD0DC</th>
            <th>\uD604\uC7AC \uC704\uCE58</th>
            <th>\uCD5C\uC885 \uC774\uB3D9</th>
            <th>\uCD94\uC801 \uC774\uBCA4\uD2B8</th>
            <th>\uC791\uC5C5</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let serial of filteredSerialNumbers" [class.recalled-row]="serial.status === 'recalled'">
            <td><strong>{{ serial.serialNumber }}</strong></td>
            <td>
              <span class="rfid-tag" *ngIf="serial.rfidTag">\u{1F4E1} {{ serial.rfidTag }}</span>
              <span *ngIf="!serial.rfidTag" class="text-muted">-</span>
            </td>
            <td>{{ serial.productName }}</td>
            <td>{{ serial.lotNumber }}</td>
            <td>
              <span class="status-badge" 
                    [class.available]="serial.status === 'available'"
                    [class.distributed]="serial.status === 'distributed'"
                    [class.recalled]="serial.status === 'recalled'"
                    [class.expired]="serial.status === 'expired'">
                {{ getSerialStatusLabel(serial.status) }}
              </span>
            </td>
            <td>{{ serial.trackingHistory.length > 0 ? serial.trackingHistory[serial.trackingHistory.length - 1].location : '-' }}</td>
            <td>{{ serial.trackingHistory.length > 0 ? (serial.trackingHistory[serial.trackingHistory.length - 1].timestamp | date:'yyyy-MM-dd HH:mm') : '-' }}</td>
            <td>
              <span class="event-count">{{ serial.trackingHistory.length }}\uAC74</span>
            </td>
            <td>
              <button class="btn-icon" (click)="viewSerialTimeline(serial)" title="\uCD94\uC801\uC774\uB825">\u{1F550}</button>
              <button class="btn-icon" (click)="printSerialLabel(serial)" title="\uB77C\uBCA8\uCD9C\uB825">\u{1F5A8}\uFE0F</button>
            </td>
          </tr>
          <tr *ngIf="filteredSerialNumbers.length === 0">
            <td colspan="9" class="no-data">\uC77C\uB828\uBC88\uD638 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  </div><!-- .erp-main-content \uB05D -->

  <!-- \uC6B0\uCE21 \uC0AC\uC774\uB4DC\uBC14 (\uD1A0\uAE00 \uBC84\uD2BC\uC73C\uB85C \uC81C\uC5B4) -->
  <app-erp-right-sidebar
    *ngIf="showRightPanel"
    (action)="onErpRightAction($event)"
    (close)="closeRightPanel()">
  </app-erp-right-sidebar>
</div><!-- .main-container \uB05D -->

<!-- \uBC1C\uC8FC \uB4F1\uB85D \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showOrderModal" (click)="closeOrderModal()">
  <div class="modal-container order-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h2>\uC0C8 \uBC1C\uC8FC \uB4F1\uB85D</h2>
      <button class="close-btn" (click)="closeOrderModal()">\u2715</button>
    </div>
    
    <div class="modal-body">
      <!-- \uAC70\uB798\uCC98 \uC815\uBCF4 -->
      <div class="form-section">
        <h3>\uAC70\uB798\uCC98 \uC815\uBCF4</h3>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>\uAC70\uB798\uCC98\uBA85 <span class="required">*</span></mat-label>
          <input matInput [(ngModel)]="newOrder.supplier" placeholder="\uAC70\uB798\uCC98\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694" required>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>\uBE44\uACE0</mat-label>
          <textarea matInput [(ngModel)]="newOrder.notes" placeholder="\uBE44\uACE0\uC0AC\uD56D\uC744 \uC785\uB825\uD558\uC138\uC694" rows="2"></textarea>
        </mat-form-field>
      </div>

      <!-- \uD488\uBAA9 \uCD94\uAC00 -->
      <div class="form-section">
        <h3>\uD488\uBAA9 \uCD94\uAC00</h3>
        <div class="item-input-row">
          <mat-form-field appearance="outline" class="small-field">
            <mat-label>\uD488\uBAA9\uCF54\uB4DC</mat-label>
            <input matInput [(ngModel)]="newOrderItem.productCode" placeholder="\uD488\uBAA9\uCF54\uB4DC">
          </mat-form-field>
          <mat-form-field appearance="outline" class="flex-field">
            <mat-label>\uD488\uBAA9\uBA85</mat-label>
            <input matInput [(ngModel)]="newOrderItem.productName" placeholder="\uD488\uBAA9\uBA85">
          </mat-form-field>
          <mat-form-field appearance="outline" class="small-field">
            <mat-label>\uC218\uB7C9</mat-label>
            <input matInput type="number" [(ngModel)]="newOrderItem.quantity" placeholder="\uC218\uB7C9" min="1">
          </mat-form-field>
          <mat-form-field appearance="outline" class="small-field">
            <mat-label>\uB2E8\uAC00</mat-label>
            <input matInput type="number" [(ngModel)]="newOrderItem.unitPrice" placeholder="\uB2E8\uAC00" min="0">
          </mat-form-field>
          <button mat-raised-button color="primary" (click)="addOrderItem()">\uCD94\uAC00</button>
        </div>
      </div>

      <!-- \uD488\uBAA9 \uBAA9\uB85D -->
      <div class="form-section" *ngIf="newOrder.items && newOrder.items.length > 0">
        <h3>\uBC1C\uC8FC \uD488\uBAA9 \uBAA9\uB85D</h3>
        <div class="items-list">
          <table class="items-table">
            <thead>
              <tr>
                <th>\uD488\uBAA9\uCF54\uB4DC</th>
                <th>\uD488\uBAA9\uBA85</th>
                <th>\uC218\uB7C9</th>
                <th>\uB2E8\uAC00</th>
                <th>\uAE08\uC561</th>
                <th>\uC0AD\uC81C</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of newOrder.items; let i = index">
                <td>{{ item.productCode }}</td>
                <td>{{ item.productName }}</td>
                <td class="text-right">{{ item.quantity }}</td>
                <td class="text-right">{{ formatCurrency(item.unitPrice) }}</td>
                <td class="text-right"><strong>{{ formatCurrency(item.totalPrice) }}</strong></td>
                <td class="text-center">
                  <button class="remove-btn" (click)="removeOrderItem(i)">\u{1F5D1}\uFE0F</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-right"><strong>\uD569\uACC4:</strong></td>
                <td class="text-right"><strong class="total-amount">{{ formatCurrency(calculateNewOrderTotal()) }}</strong></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-secondary" (click)="closeOrderModal()">\uCDE8\uC18C</button>
      <button class="btn-primary" (click)="saveOrder()">\uBC1C\uC8FC \uB4F1\uB85D</button>
    </div>
  </div>
</div>

<!-- \uBC1C\uC8FC \uC0C1\uC138\uBCF4\uAE30 \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showOrderDetailModal && selectedOrder" (click)="closeOrderDetailModal()">
  <div class="modal-container detail-modal" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h2>\uBC1C\uC8FC \uC0C1\uC138\uC815\uBCF4</h2>
      <button class="close-btn" (click)="closeOrderDetailModal()">\u2715</button>
    </div>
    
    <div class="modal-body">
      <!-- \uBC1C\uC8FC \uAE30\uBCF8 \uC815\uBCF4 -->
      <div class="detail-section">
        <h3>\uBC1C\uC8FC \uC815\uBCF4</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="detail-label">\uBC1C\uC8FC\uBC88\uD638:</span>
            <span class="detail-value"><strong>{{ selectedOrder.id }}</strong></span>
          </div>
          <div class="detail-item">
            <span class="detail-label">\uBC1C\uC8FC\uC77C:</span>
            <span class="detail-value">{{ formatDate(selectedOrder.orderDate) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">\uAC70\uB798\uCC98:</span>
            <span class="detail-value">{{ selectedOrder.supplier }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">\uB2F4\uB2F9\uC790:</span>
            <span class="detail-value">{{ selectedOrder.createdBy }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">\uC0C1\uD0DC:</span>
            <span class="detail-value">
              <span [class]="'status-badge ' + getStatusClass(selectedOrder.status)">
                {{ getStatusLabel(selectedOrder.status) }}
              </span>
            </span>
          </div>
          <div class="detail-item" *ngIf="selectedOrder.notes">
            <span class="detail-label">\uBE44\uACE0:</span>
            <span class="detail-value">{{ selectedOrder.notes }}</span>
          </div>
        </div>
      </div>

      <!-- \uD488\uBAA9 \uBAA9\uB85D -->
      <div class="detail-section">
        <h3>\uBC1C\uC8FC \uD488\uBAA9</h3>
        <table class="detail-table">
          <thead>
            <tr>
              <th>\uD488\uBAA9\uCF54\uB4DC</th>
              <th>\uD488\uBAA9\uBA85</th>
              <th>\uC218\uB7C9</th>
              <th>\uB2E8\uAC00</th>
              <th>\uAE08\uC561</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of selectedOrder.items">
              <td>{{ item.productCode }}</td>
              <td>{{ item.productName }}</td>
              <td class="text-right">{{ item.quantity }}</td>
              <td class="text-right">{{ formatCurrency(item.unitPrice) }}</td>
              <td class="text-right"><strong>{{ formatCurrency(item.totalPrice) }}</strong></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-right"><strong>\uCD1D \uBC1C\uC8FC\uAE08\uC561:</strong></td>
              <td class="text-right"><strong class="total-amount">{{ formatCurrency(selectedOrder.totalAmount) }}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- \uC0C1\uD0DC \uBCC0\uACBD -->
      <div class="detail-section">
        <h3>\uC0C1\uD0DC \uAD00\uB9AC</h3>
        <div class="status-buttons">
          <button class="status-btn pending" (click)="changeOrderStatus(selectedOrder, 'pending')" [disabled]="selectedOrder.status === 'pending'">
            \uB300\uAE30
          </button>
          <button class="status-btn approved" (click)="changeOrderStatus(selectedOrder, 'approved')" [disabled]="selectedOrder.status === 'approved'">
            \uC2B9\uC778
          </button>
          <button class="status-btn completed" (click)="changeOrderStatus(selectedOrder, 'completed')" [disabled]="selectedOrder.status === 'completed'">
            \uC644\uB8CC
          </button>
          <button class="status-btn cancelled" (click)="changeOrderStatus(selectedOrder, 'cancelled')" [disabled]="selectedOrder.status === 'cancelled'">
            \uCDE8\uC18C
          </button>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-danger" (click)="deleteOrder(selectedOrder); closeOrderDetailModal()">\uBC1C\uC8FC \uC0AD\uC81C</button>
      <button class="btn-secondary" (click)="closeOrderDetailModal()">\uB2EB\uAE30</button>
    </div>
  </div>
</div>

<!-- \uC7AC\uACE0 \uB4F1\uB85D \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showInventoryModal" (click)="closeInventoryModal()">
  <div class="modal-container" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>\uC7AC\uACE0 \uB4F1\uB85D</h3>
      <button class="close-btn" (click)="closeInventoryModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <div class="form-grid-2col">
        <mat-form-field appearance="outline">
          <mat-label>\uC81C\uD488\uCF54\uB4DC *</mat-label>
          <input matInput [(ngModel)]="newInventory.productCode" placeholder="\uC608: MED-001" required>
        </mat-form-field>
        
        <mat-form-field appearance="outline">
          <mat-label>\uC81C\uD488\uBA85 *</mat-label>
          <input matInput [(ngModel)]="newInventory.productName" placeholder="\uC81C\uD488\uBA85 \uC785\uB825" required>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uCE74\uD14C\uACE0\uB9AC *</mat-label>
          <mat-select [(ngModel)]="newInventory.category" required>
            <mat-option value="">\uC120\uD0DD</mat-option>
            <mat-option value="\uC758\uC57D\uD488">\uC758\uC57D\uD488</mat-option>
            <mat-option value="\uC758\uB8CC\uAE30\uAE30">\uC758\uB8CC\uAE30\uAE30</mat-option>
            <mat-option value="\uC18C\uBAA8\uD488">\uC18C\uBAA8\uD488</mat-option>
            <mat-option value="\uC704\uC0DD\uC6A9\uD488">\uC704\uC0DD\uC6A9\uD488</mat-option>
            <mat-option value="\uC0AC\uBB34\uC6A9\uD488">\uC0AC\uBB34\uC6A9\uD488</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uAC70\uB798\uCC98</mat-label>
          <input matInput [(ngModel)]="newInventory.supplier" placeholder="\uAC70\uB798\uCC98\uBA85">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uD604\uC7AC\uACE0</mat-label>
          <input matInput type="number" [(ngModel)]="newInventory.currentStock" placeholder="0" min="0">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uCD5C\uC18C\uC7AC\uACE0</mat-label>
          <input matInput type="number" [(ngModel)]="newInventory.minStock" placeholder="0" min="0">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uCD5C\uB300\uC7AC\uACE0</mat-label>
          <input matInput type="number" [(ngModel)]="newInventory.maxStock" placeholder="0" min="0">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uB2E8\uAC00</mat-label>
          <input matInput type="number" [(ngModel)]="newInventory.unitPrice" placeholder="0" min="0">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uBCF4\uAD00\uC704\uCE58</mat-label>
          <input matInput [(ngModel)]="newInventory.location" placeholder="\uC608: A\uAD6C\uC5ED">
        </mat-form-field>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-secondary" (click)="closeInventoryModal()">\uCDE8\uC18C</button>
      <button class="btn-primary" (click)="saveInventory()">\uB4F1\uB85D</button>
    </div>
  </div>
</div>

<!-- \uC7AC\uACE0 \uC0C1\uC138 \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showInventoryDetailModal && selectedInventory" (click)="closeInventoryDetailModal()">
  <div class="modal-container modal-large" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>\uC7AC\uACE0 \uC0C1\uC138 \uC815\uBCF4</h3>
      <button class="close-btn" (click)="closeInventoryDetailModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <div class="detail-section">
        <h4>\uAE30\uBCF8 \uC815\uBCF4</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <label>\uC81C\uD488\uCF54\uB4DC</label>
            <div class="value">{{ selectedInventory.productCode }}</div>
          </div>
          <div class="detail-item">
            <label>\uC81C\uD488\uBA85</label>
            <div class="value">{{ selectedInventory.productName }}</div>
          </div>
          <div class="detail-item">
            <label>\uCE74\uD14C\uACE0\uB9AC</label>
            <div class="value">{{ selectedInventory.category }}</div>
          </div>
          <div class="detail-item">
            <label>\uAC70\uB798\uCC98</label>
            <div class="value">{{ selectedInventory.supplier }}</div>
          </div>
          <div class="detail-item">
            <label>\uBCF4\uAD00\uC704\uCE58</label>
            <div class="value">{{ selectedInventory.location }}</div>
          </div>
          <div class="detail-item">
            <label>\uB2E8\uAC00</label>
            <div class="value">{{ formatCurrency(selectedInventory.unitPrice) }}</div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h4>\uC7AC\uACE0 \uC815\uBCF4</h4>
        <div class="stock-info-grid">
          <div class="stock-info-card">
            <div class="stock-label">\uD604\uC7AC\uACE0</div>
            <div class="stock-value current" [class.low]="selectedInventory.status === 'low' || selectedInventory.status === 'out'">
              {{ selectedInventory.currentStock }}
            </div>
          </div>
          <div class="stock-info-card">
            <div class="stock-label">\uCD5C\uC18C\uC7AC\uACE0</div>
            <div class="stock-value min">{{ selectedInventory.minStock }}</div>
          </div>
          <div class="stock-info-card">
            <div class="stock-label">\uCD5C\uB300\uC7AC\uACE0</div>
            <div class="stock-value max">{{ selectedInventory.maxStock }}</div>
          </div>
          <div class="stock-info-card">
            <div class="stock-label">\uC7AC\uACE0\uC0C1\uD0DC</div>
            <div class="stock-value">
              <span [class]="'status-badge ' + getStockStatusClass(selectedInventory.status)">
                {{ getStockStatusLabel(selectedInventory.status) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h4>\uCD5C\uADFC \uC785\uCD9C\uACE0 \uC774\uB825</h4>
        <div class="history-list" *ngIf="getStockHistories(selectedInventory.productCode).length > 0">
          <div class="history-item" *ngFor="let history of getStockHistories(selectedInventory.productCode)">
            <div class="history-type" [class]="'type-' + history.type">
              {{ getTypeLabel(history.type) }}
            </div>
            <div class="history-info">
              <div class="history-quantity">
                {{ history.type === 'out' ? '-' : '+' }}{{ history.quantity }}
                <span class="history-stock">({{ history.beforeStock }} \u2192 {{ history.afterStock }})</span>
              </div>
              <div class="history-reason">{{ history.reason }}</div>
              <div class="history-meta">{{ history.createdBy }} \xB7 {{ formatDate(history.createdAt) }}</div>
            </div>
          </div>
        </div>
        <div class="no-history" *ngIf="getStockHistories(selectedInventory.productCode).length === 0">
          <p>\uC785\uCD9C\uACE0 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
        </div>
      </div>

      <div class="detail-actions">
        <button class="btn-primary" (click)="openStockAdjustModal(selectedInventory)">
          \u{1F4DD} \uC7AC\uACE0 \uC870\uC815
        </button>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-danger" (click)="deleteInventory(selectedInventory); closeInventoryDetailModal()">\uC7AC\uACE0 \uC0AD\uC81C</button>
      <button class="btn-secondary" (click)="closeInventoryDetailModal()">\uB2EB\uAE30</button>
    </div>
  </div>
</div>

<!-- \uC7AC\uACE0 \uC870\uC815 \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showStockAdjustModal && selectedInventory" (click)="closeStockAdjustModal()">
  <div class="modal-container modal-small" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>\uC7AC\uACE0 \uC870\uC815</h3>
      <button class="close-btn" (click)="closeStockAdjustModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <div class="current-stock-info">
        <div class="info-label">\uD604\uC7AC\uACE0</div>
        <div class="info-value">{{ selectedInventory.currentStock }}</div>
      </div>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>\uC870\uC815 \uC720\uD615 *</mat-label>
        <mat-select [(ngModel)]="stockAdjustment.type" required>
          <mat-option value="in">\uC785\uACE0 (+)</mat-option>
          <mat-option value="out">\uCD9C\uACE0 (-)</mat-option>
          <mat-option value="adjust">\uC7AC\uACE0\uC870\uC815 (=)</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>\uC218\uB7C9 *</mat-label>
        <input matInput type="number" [(ngModel)]="stockAdjustment.quantity" placeholder="\uC218\uB7C9 \uC785\uB825" min="0" required>
        <mat-hint *ngIf="stockAdjustment.type === 'in'">
          \uC870\uC815 \uD6C4: {{ selectedInventory.currentStock + (stockAdjustment.quantity || 0) }}
        </mat-hint>
        <mat-hint *ngIf="stockAdjustment.type === 'out'">
          \uC870\uC815 \uD6C4: {{ selectedInventory.currentStock - (stockAdjustment.quantity || 0) >= 0 ? selectedInventory.currentStock - (stockAdjustment.quantity || 0) : 0 }}
        </mat-hint>
        <mat-hint *ngIf="stockAdjustment.type === 'adjust'">
          \uC785\uB825\uD55C \uC218\uB7C9\uC73C\uB85C \uC7AC\uACE0\uAC00 \uC870\uC815\uB429\uB2C8\uB2E4.
        </mat-hint>
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>\uC0AC\uC720 *</mat-label>
        <textarea matInput [(ngModel)]="stockAdjustment.reason" placeholder="\uC870\uC815 \uC0AC\uC720\uB97C \uC785\uB825\uD558\uC138\uC694" rows="3" required></textarea>
      </mat-form-field>
    </div>
    
    <div class="modal-footer">
      <button class="btn-secondary" (click)="closeStockAdjustModal()">\uCDE8\uC18C</button>
      <button class="btn-primary" (click)="adjustStock()">\uC870\uC815</button>
    </div>
  </div>
</div>

<!-- \uAC70\uB798\uCC98 \uB4F1\uB85D \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showSupplierModal" (click)="closeSupplierModal()">
  <div class="modal-container modal-large" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>\uAC70\uB798\uCC98 \uB4F1\uB85D</h3>
      <button class="close-btn" (click)="closeSupplierModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <div class="form-grid-2col">
        <mat-form-field appearance="outline">
          <mat-label>\uAC70\uB798\uCC98\uCF54\uB4DC *</mat-label>
          <input matInput [(ngModel)]="newSupplier.code" placeholder="\uC608: S0001" required>
        </mat-form-field>
        
        <mat-form-field appearance="outline">
          <mat-label>\uC0C1\uD638\uBA85 *</mat-label>
          <input matInput [(ngModel)]="newSupplier.name" placeholder="\uC0C1\uD638\uBA85 \uC785\uB825" required>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uC0AC\uC5C5\uC790\uBC88\uD638</mat-label>
          <input matInput [(ngModel)]="newSupplier.businessNumber" placeholder="000-00-00000">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uB300\uD45C\uC790</mat-label>
          <input matInput [(ngModel)]="newSupplier.representative" placeholder="\uB300\uD45C\uC774\uC0AC \uD64D\uAE38\uB3D9">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uCE74\uD14C\uACE0\uB9AC *</mat-label>
          <mat-select [(ngModel)]="newSupplier.category" required>
            <mat-option value="">\uC120\uD0DD</mat-option>
            <mat-option value="\uC758\uC57D\uD488">\uC758\uC57D\uD488</mat-option>
            <mat-option value="\uC758\uB8CC\uAE30\uAE30">\uC758\uB8CC\uAE30\uAE30</mat-option>
            <mat-option value="\uC18C\uBAA8\uD488">\uC18C\uBAA8\uD488</mat-option>
            <mat-option value="\uC704\uC0DD\uC6A9\uD488">\uC704\uC0DD\uC6A9\uD488</mat-option>
            <mat-option value="\uC0AC\uBB34\uC6A9\uD488">\uC0AC\uBB34\uC6A9\uD488</mat-option>
            <mat-option value="\uAC74\uAC15\uC2DD\uD488">\uAC74\uAC15\uC2DD\uD488</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uC5F0\uB77D\uCC98</mat-label>
          <input matInput [(ngModel)]="newSupplier.contact" placeholder="02-0000-0000">
          <mat-icon matPrefix>phone</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uC774\uBA54\uC77C</mat-label>
          <input matInput type="email" [(ngModel)]="newSupplier.email" placeholder="contact@company.com">
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uC2E0\uC6A9\uB4F1\uAE09</mat-label>
          <mat-select [(ngModel)]="newSupplier.creditRating">
            <mat-option value="excellent">\uC6B0\uC218</mat-option>
            <mat-option value="good">\uC591\uD638</mat-option>
            <mat-option value="fair">\uBCF4\uD1B5</mat-option>
            <mat-option value="poor">\uBD88\uB7C9</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uACB0\uC81C\uC870\uAC74</mat-label>
          <mat-select [(ngModel)]="newSupplier.paymentTerms">
            <mat-option value="\uD604\uAE08">\uD604\uAE08</mat-option>
            <mat-option value="30\uC77C">30\uC77C</mat-option>
            <mat-option value="60\uC77C">60\uC77C</mat-option>
            <mat-option value="90\uC77C">90\uC77C</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>\uC0C1\uD0DC</mat-label>
          <mat-select [(ngModel)]="newSupplier.status">
            <mat-option value="active">\uD65C\uC131</mat-option>
            <mat-option value="inactive">\uBE44\uD65C\uC131</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>\uC8FC\uC18C</mat-label>
        <input matInput [(ngModel)]="newSupplier.address" placeholder="\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uD14C\uD5E4\uB780\uB85C 123">
        <mat-icon matPrefix>location_on</mat-icon>
      </mat-form-field>

      <div class="form-group full-width">
        <label>\uCDE8\uAE09 \uC81C\uD488</label>
        <div class="product-add-section">
          <div class="product-input-group">
            <mat-form-field appearance="outline" class="flex-field">
              <mat-label>\uC81C\uD488\uBA85</mat-label>
              <input matInput [(ngModel)]="newSupplierProduct" placeholder="\uC81C\uD488\uBA85 \uC785\uB825" (keyup.enter)="addSupplierProduct()">
            </mat-form-field>
            <button mat-raised-button color="primary" type="button" (click)="addSupplierProduct()">\uCD94\uAC00</button>
          </div>
          <div class="product-list" *ngIf="newSupplier.products && newSupplier.products.length > 0">
            <span class="product-tag" *ngFor="let product of newSupplier.products; let i = index">
              {{ product }}
              <button type="button" class="remove-tag-btn" (click)="removeSupplierProduct(i)">&times;</button>
            </span>
          </div>
        </div>
      </div>

      <div class="form-group full-width">
        <label>\uBE44\uACE0</label>
        <textarea [(ngModel)]="newSupplier.notes" placeholder="\uD2B9\uC774\uC0AC\uD56D \uC785\uB825" rows="3"></textarea>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-secondary" (click)="closeSupplierModal()">\uCDE8\uC18C</button>
      <button class="btn-primary" (click)="saveSupplier()">\uB4F1\uB85D</button>
    </div>
  </div>
</div>

<!-- \uAC70\uB798\uCC98 \uC0C1\uC138 \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showSupplierDetailModal && selectedSupplier" (click)="closeSupplierDetailModal()">
  <div class="modal-container modal-large" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>\uAC70\uB798\uCC98 \uC0C1\uC138 \uC815\uBCF4</h3>
      <button class="close-btn" (click)="closeSupplierDetailModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <div class="detail-section">
        <h4>\uAE30\uBCF8 \uC815\uBCF4</h4>
        <div class="detail-grid">
          <div class="detail-item">
            <label>\uAC70\uB798\uCC98\uCF54\uB4DC</label>
            <div class="value">{{ selectedSupplier.code }}</div>
          </div>
          <div class="detail-item">
            <label>\uC0C1\uD638\uBA85</label>
            <div class="value">{{ selectedSupplier.name }}</div>
          </div>
          <div class="detail-item">
            <label>\uC0AC\uC5C5\uC790\uBC88\uD638</label>
            <div class="value">{{ selectedSupplier.businessNumber || '-' }}</div>
          </div>
          <div class="detail-item">
            <label>\uB300\uD45C\uC790</label>
            <div class="value">{{ selectedSupplier.representative || '-' }}</div>
          </div>
          <div class="detail-item">
            <label>\uCE74\uD14C\uACE0\uB9AC</label>
            <div class="value">{{ selectedSupplier.category }}</div>
          </div>
          <div class="detail-item">
            <label>\uC5F0\uB77D\uCC98</label>
            <div class="value">{{ selectedSupplier.contact || '-' }}</div>
          </div>
          <div class="detail-item">
            <label>\uC774\uBA54\uC77C</label>
            <div class="value">{{ selectedSupplier.email || '-' }}</div>
          </div>
          <div class="detail-item">
            <label>\uB4F1\uB85D\uC77C</label>
            <div class="value">{{ formatDate(selectedSupplier.createdAt) }}</div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h4>\uC8FC\uC18C</h4>
        <div class="address-box">
          {{ selectedSupplier.address || '-' }}
        </div>
      </div>

      <div class="detail-section">
        <h4>\uAC70\uB798 \uC815\uBCF4</h4>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-label">\uC2E0\uC6A9\uB4F1\uAE09</div>
            <div class="info-value">
              <span [class]="'credit-badge ' + getCreditRatingClass(selectedSupplier.creditRating)">
                {{ getCreditRatingLabel(selectedSupplier.creditRating) }}
              </span>
            </div>
          </div>
          <div class="info-card">
            <div class="info-label">\uACB0\uC81C\uC870\uAC74</div>
            <div class="info-value">{{ selectedSupplier.paymentTerms || '-' }}</div>
          </div>
          <div class="info-card">
            <div class="info-label">\uC0C1\uD0DC</div>
            <div class="info-value">
              <span [class]="'status-badge ' + getSupplierStatusClass(selectedSupplier.status)">
                {{ getSupplierStatusLabel(selectedSupplier.status) }}
              </span>
            </div>
          </div>
          <div class="info-card">
            <div class="info-label">\uCD5C\uADFC\uAC70\uB798\uC77C</div>
            <div class="info-value">{{ selectedSupplier.lastTransactionDate ? formatDate(selectedSupplier.lastTransactionDate) : '-' }}</div>
          </div>
        </div>
      </div>

      <div class="detail-section" *ngIf="selectedSupplier.products && selectedSupplier.products.length > 0">
        <h4>\uCDE8\uAE09 \uC81C\uD488</h4>
        <div class="product-list-view">
          <span class="product-chip" *ngFor="let product of selectedSupplier.products">
            {{ product }}
          </span>
        </div>
      </div>

      <div class="detail-section" *ngIf="selectedSupplier.notes">
        <h4>\uBE44\uACE0</h4>
        <div class="notes-box">
          {{ selectedSupplier.notes }}
        </div>
      </div>

      <div class="detail-section">
        <h4>\uCD5C\uADFC \uAC70\uB798 \uB0B4\uC5ED</h4>
        <div class="transaction-list" *ngIf="getSupplierTransactions(selectedSupplier.code).length > 0">
          <div class="transaction-item" *ngFor="let txn of getSupplierTransactions(selectedSupplier.code)">
            <div [class]="'txn-type ' + getTransactionTypeClass(txn.type)">
              {{ getTransactionTypeLabel(txn.type) }}
            </div>
            <div class="txn-info">
              <div class="txn-amount">{{ formatCurrency(txn.amount) }}</div>
              <div class="txn-details">
                <span class="txn-status">{{ txn.status }}</span>
                <span class="txn-ref" *ngIf="txn.reference !== '-'">{{ txn.reference }}</span>
                <span class="txn-date">{{ formatDate(txn.date) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="no-history" *ngIf="getSupplierTransactions(selectedSupplier.code).length === 0">
          <p>\uAC70\uB798 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-danger" (click)="deleteSupplier(selectedSupplier); closeSupplierDetailModal()">\uAC70\uB798\uCC98 \uC0AD\uC81C</button>
      <button class="btn-secondary" (click)="closeSupplierDetailModal()">\uB2EB\uAE30</button>
    </div>
  </div>
</div>

<!-- \uC815\uC0B0 \uC0C1\uC138 \uBAA8\uB2EC -->
<div class="modal-overlay" *ngIf="showSettlementDetailModal && selectedSettlement" (click)="closeSettlementDetailModal()">
  <div class="modal-container modal-large" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h3>\uC815\uC0B0 \uC0C1\uC138 \uC815\uBCF4</h3>
      <button class="close-btn" (click)="closeSettlementDetailModal()">&times;</button>
    </div>
    
    <div class="modal-body">
      <!-- \uC815\uC0B0 \uC694\uC57D -->
      <div class="settlement-summary">
        <div class="summary-header">
          <div class="summary-title">
            <h4>{{ formatPeriod(selectedSettlement.period) }} \uC815\uC0B0\uC11C</h4>
            <span [class]="'status-badge large ' + getSettlementStatusClass(selectedSettlement.status)">
              {{ getSettlementStatusLabel(selectedSettlement.status) }}
            </span>
          </div>
          <div class="summary-id">{{ selectedSettlement.id }}</div>
        </div>

        <div class="summary-info">
          <div class="info-row">
            <label>\uAC70\uB798\uCC98</label>
            <div class="value">{{ selectedSettlement.supplierName }} ({{ selectedSettlement.supplierCode }})</div>
          </div>
          <div class="info-row">
            <label>\uC815\uC0B0\uAE30\uAC04</label>
            <div class="value">{{ formatPeriod(selectedSettlement.period) }}</div>
          </div>
          <div class="info-row">
            <label>\uB9C8\uAC10\uC77C</label>
            <div class="value">{{ formatDate(selectedSettlement.dueDate) }}</div>
          </div>
          <div class="info-row" *ngIf="selectedSettlement.paidDate">
            <label>\uACB0\uC81C\uC77C</label>
            <div class="value">{{ formatDate(selectedSettlement.paidDate) }}</div>
          </div>
        </div>
      </div>

      <!-- \uC815\uC0B0 \uAE08\uC561 -->
      <div class="detail-section">
        <h4>\uC815\uC0B0 \uAE08\uC561</h4>
        <div class="settlement-amounts">
          <div class="amount-row">
            <div class="amount-label">\uBC1C\uC8FC \uAE08\uC561</div>
            <div class="amount-value order">{{ formatCurrency(selectedSettlement.orderAmount) }}</div>
          </div>
          <div class="amount-row">
            <div class="amount-label">\uACB0\uC81C \uAE08\uC561</div>
            <div class="amount-value payment">- {{ formatCurrency(selectedSettlement.paymentAmount) }}</div>
          </div>
          <div class="amount-row">
            <div class="amount-label">\uBC18\uD488 \uAE08\uC561</div>
            <div class="amount-value return">- {{ formatCurrency(selectedSettlement.returnAmount) }}</div>
          </div>
          <div class="amount-row total">
            <div class="amount-label"><strong>\uBBF8\uACB0\uC81C\uC561</strong></div>
            <div class="amount-value balance"><strong>{{ formatCurrency(selectedSettlement.balance) }}</strong></div>
          </div>
        </div>
      </div>

      <!-- \uBC1C\uC8FC \uB0B4\uC5ED -->
      <div class="detail-section">
        <h4>\uAD00\uB828 \uBC1C\uC8FC \uB0B4\uC5ED ({{ settlementDetails.length }}\uAC74)</h4>
        <div class="settlement-details-table" *ngIf="settlementDetails.length > 0">
          <table class="detail-table">
            <thead>
              <tr>
                <th>\uBC1C\uC8FC\uBC88\uD638</th>
                <th>\uBC1C\uC8FC\uC77C</th>
                <th>\uAE08\uC561</th>
                <th>\uC0C1\uD0DC</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let detail of settlementDetails">
                <td><strong>{{ detail.orderId }}</strong></td>
                <td>{{ formatDate(detail.orderDate) }}</td>
                <td class="amount">{{ formatCurrency(detail.amount) }}</td>
                <td>{{ detail.status }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"><strong>\uD569\uACC4</strong></td>
                <td class="amount"><strong>{{ formatCurrency(getSettlementDetailsTotal()) }}</strong></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="no-history" *ngIf="settlementDetails.length === 0">
          <p>\uD574\uB2F9 \uAE30\uAC04\uC758 \uBC1C\uC8FC \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
        </div>
      </div>

      <!-- \uBE44\uACE0 -->
      <div class="detail-section" *ngIf="selectedSettlement.notes">
        <h4>\uBE44\uACE0</h4>
        <div class="notes-box">
          {{ selectedSettlement.notes }}
        </div>
      </div>

      <!-- \uC561\uC158 \uBC84\uD2BC -->
      <div class="settlement-actions">
        <button 
          class="btn-action confirm" 
          *ngIf="selectedSettlement.status === 'pending'"
          (click)="confirmSettlement(selectedSettlement)">
          \u2713 \uC815\uC0B0 \uD655\uC815
        </button>
        <button 
          class="btn-action payment" 
          *ngIf="selectedSettlement.status === 'confirmed' || selectedSettlement.status === 'overdue'"
          (click)="completePayment(selectedSettlement)">
          \u{1F4B3} \uACB0\uC81C \uC644\uB8CC
        </button>
        <button 
          class="btn-action export" 
          (click)="exportSettlement(selectedSettlement)">
          \u{1F4C4} \uC815\uC0B0\uC11C \uCD9C\uB825
        </button>
      </div>
    </div>
    
    <div class="modal-footer">
      <button class="btn-secondary" (click)="closeSettlementDetailModal()">\uB2EB\uAE30</button>
    </div>
  </div>
</div> 
`, styles: [`/* src/app/modules/erp/components/erp-generator/erp-generator.component.scss */
.main-container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 48px);
  background: var(--bg-secondary);
  transition: background-color 0.3s ease;
  position: relative;
}
.main-container app-erp-left-menu {
  position: fixed;
  left: 0;
  top: 48px;
  width: 180px;
  height: calc(100vh - 48px);
  z-index: 1000;
}
.main-container .erp-main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 180px;
  margin-right: 180px;
  z-index: 1;
  padding: 24px;
}
.main-container .erp-main-content .content-section {
  flex: 1;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
  width: 100%;
  max-width: 100%;
}
.main-container app-erp-right-sidebar {
  position: fixed;
  top: 48px;
  right: 0;
  height: calc(100vh - 48px);
  width: 350px;
  z-index: 1500;
  pointer-events: none;
}
.main-container app-erp-right-sidebar ::ng-deep .erp-right-sidebar {
  pointer-events: auto;
}
@media (max-width: 1200px) {
  .main-container app-erp-right-sidebar {
    width: 300px;
  }
  .main-container .erp-main-content {
    margin-right: 0;
    padding: 16px;
  }
}
@media (max-width: 992px) {
  .main-container app-erp-left-menu {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: 2px 0 8px var(--shadow);
    background: var(--bg-primary);
  }
  .main-container app-erp-left-menu.show {
    transform: translateX(0);
  }
  .main-container app-erp-right-sidebar {
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  .main-container app-erp-right-sidebar.show {
    transform: translateX(0);
  }
  .main-container .erp-main-content {
    margin-left: 0;
    margin-right: 0;
    padding: 12px;
  }
}
@media (max-width: 768px) {
  .main-container {
    height: calc(100vh - 48px);
  }
  .main-container app-erp-left-menu {
    width: 80%;
    max-width: 280px;
  }
  .main-container app-erp-right-sidebar {
    width: 90%;
    max-width: 350px;
  }
  .main-container .erp-main-content {
    padding: 8px;
  }
}
.welcome-section h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text-primary);
}
.welcome-section .subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}
.welcome-section .quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.welcome-section .quick-actions .action-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 16px var(--shadow);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}
.welcome-section .quick-actions .action-card .card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
.welcome-section .quick-actions .action-card h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}
.welcome-section .quick-actions .action-card p {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}
.welcome-section .quick-actions .action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow);
  background: var(--bg-secondary);
}
@media (max-width: 768px) {
  .welcome-section .quick-actions {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  .welcome-section .quick-actions .action-card {
    padding: 20px;
    border-radius: 12px;
  }
  .welcome-section .quick-actions .action-card .card-icon {
    font-size: 36px;
    margin-bottom: 12px;
  }
  .welcome-section .quick-actions .action-card h3 {
    font-size: 16px;
  }
  .welcome-section .quick-actions .action-card p {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .welcome-section .quick-actions {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
.welcome-section .recent-section {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 4px 16px var(--shadow);
}
.welcome-section .recent-section h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}
.welcome-section .recent-section .recent-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.welcome-section .recent-section .recent-list .recent-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}
.welcome-section .recent-section .recent-list .recent-item .recent-icon {
  font-size: 24px;
  margin-right: 12px;
}
.welcome-section .recent-section .recent-list .recent-item .recent-text {
  flex: 1;
  font-size: 14px;
  color: var(--text-primary);
}
.welcome-section .recent-section .recent-list .recent-item .recent-time {
  font-size: 12px;
  color: var(--text-secondary);
}
.welcome-section .recent-section .recent-list .recent-item:hover {
  background: var(--bg-tertiary);
  transform: translateX(4px);
  box-shadow: 0 2px 8px var(--shadow);
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.section-header h2 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}
.section-header .primary-btn {
  padding: 12px 24px;
  border: none;
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-header .primary-btn .icon {
  font-size: 16px;
}
.section-header .primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
.section-content {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 16px var(--shadow);
  min-height: 400px;
}
.section-content p {
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    height: auto;
  }
  .welcome-section .quick-actions {
    grid-template-columns: 1fr;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .section-header .primary-btn {
    width: 100%;
    justify-content: center;
  }
}
.filter-section {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}
.filter-section .filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.filter-section .filter-group label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
}
.filter-section .filter-group select {
  padding: 8px 32px 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L2 4h8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.filter-section .filter-group select:hover {
  border-color: var(--accent-primary);
}
.filter-section .filter-group select:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.filter-section .search-group {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}
.filter-section .search-group input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.2s;
}
.filter-section .search-group input::placeholder {
  color: var(--text-secondary);
}
.filter-section .search-group input:hover {
  border-color: var(--accent-primary);
}
.filter-section .search-group input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.order-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--shadow);
}
.order-table thead {
  background: var(--bg-secondary);
}
.order-table thead th {
  padding: 16px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
}
.order-table thead th:first-child {
  padding-left: 20px;
}
.order-table thead th:last-child {
  padding-right: 20px;
  text-align: center;
}
.order-table tbody tr {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s;
}
.order-table tbody tr:hover {
  background: var(--bg-secondary);
  cursor: pointer;
}
.order-table tbody tr:last-child {
  border-bottom: none;
}
.order-table tbody td {
  padding: 16px 12px;
  font-size: 14px;
  color: var(--text-primary);
}
.order-table tbody td:first-child {
  padding-left: 20px;
  font-weight: 500;
}
.order-table tbody td:last-child {
  padding-right: 20px;
  text-align: center;
}
.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.status-badge.pending {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-badge.approved {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-badge.completed {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.status-badge.cancelled {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}
.modal-container {
  background: var(--bg-primary);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid var(--border-color);
}
.modal-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.modal-header .close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;
}
.modal-header .close-btn:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
.modal-body {
  padding: 32px;
  overflow-y: auto;
  flex: 1;
}
.modal-body::-webkit-scrollbar {
  width: 8px;
}
.modal-body::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 4px;
}
.modal-body::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}
.form-group {
  margin-bottom: 24px;
}
.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.2s;
  box-sizing: border-box;
}
.form-group input::placeholder,
.form-group textarea::placeholder,
.form-group select::placeholder {
  color: var(--text-secondary);
}
.form-group input:hover,
.form-group textarea:hover,
.form-group select:hover {
  border-color: var(--accent-primary);
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.form-group textarea {
  min-height: 80px;
  resize: vertical;
  font-family: inherit;
}
.item-add-section {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}
.item-add-section h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 16px 0;
}
.item-add-section .form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 12px;
  align-items: end;
}
.item-add-section .form-grid .form-group {
  margin-bottom: 0;
}
.item-add-section .form-grid .add-item-btn {
  padding: 10px 20px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.item-add-section .form-grid .add-item-btn:hover {
  background: #0051d5;
  transform: translateY(-1px);
}
.item-add-section .form-grid .add-item-btn:active {
  transform: translateY(0);
}
.items-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}
.items-table thead {
  background: var(--bg-secondary);
}
.items-table thead th {
  padding: 12px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}
.items-table thead th:last-child {
  text-align: center;
  width: 80px;
}
.items-table tbody tr {
  border-bottom: 1px solid var(--border-color);
}
.items-table tbody tr:last-child {
  border-bottom: none;
}
.items-table tbody td {
  padding: 12px;
  font-size: 13px;
  color: var(--text-primary);
}
.items-table tbody td.text-right {
  text-align: right;
}
.items-table tbody td:last-child {
  text-align: center;
}
.items-table .remove-btn {
  padding: 4px 12px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.items-table .remove-btn:hover {
  background: rgba(255, 59, 48, 0.2);
}
.total-section {
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
  border-top: 2px solid var(--border-color);
}
.total-section .total-label {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 20px;
}
.total-section .total-amount {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-primary);
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 24px 32px;
  border-top: 1px solid var(--border-color);
}
.modal-footer button {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.modal-footer button.cancel-btn {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
.modal-footer button.cancel-btn:hover {
  background: var(--bg-tertiary);
}
.modal-footer button.primary-btn {
  background: var(--accent-primary);
  color: white;
}
.modal-footer button.primary-btn:hover {
  background: #0051d5;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}
.modal-footer button.primary-btn:active {
  transform: translateY(0);
}
.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.detail-grid .detail-item label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.detail-grid .detail-item .value {
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 500;
}
.status-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.status-buttons button {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.status-buttons button.pending-btn {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-buttons button.pending-btn:hover {
  background: rgba(255, 149, 0, 0.2);
}
.status-buttons button.approved-btn {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-buttons button.approved-btn:hover {
  background: rgba(52, 199, 89, 0.2);
}
.status-buttons button.completed-btn {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.status-buttons button.completed-btn:hover {
  background: rgba(0, 122, 255, 0.2);
}
.status-buttons button.cancelled-btn {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-buttons button.cancelled-btn:hover {
  background: rgba(255, 59, 48, 0.2);
}
.delete-btn {
  width: 100%;
  padding: 12px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.3);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 16px;
}
.delete-btn:hover {
  background: rgba(255, 59, 48, 0.2);
  border-color: #ff3b30;
}
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}
.empty-state p {
  font-size: 15px;
  margin-bottom: 20px;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  padding: 20px 0;
}
.pagination .page-btn {
  min-width: 36px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
  color: var(--text-primary);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination .page-btn:hover:not(:disabled):not(.active) {
  background: var(--bg-secondary);
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}
.pagination .page-btn.active {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
  font-weight: 600;
}
.pagination .page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.pagination .page-btn:active:not(:disabled) {
  transform: translateY(0);
}
.pagination .page-info {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-secondary);
  white-space: nowrap;
}
.table-container {
  overflow-x: auto;
  border-radius: 12px;
}
.table-container::-webkit-scrollbar {
  height: 8px;
}
.table-container::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 4px;
}
.table-container::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}
.table-container::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}
.action-cell {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.action-cell .icon-btn {
  padding: 4px 8px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.action-cell .icon-btn:hover {
  background: var(--bg-tertiary);
  transform: scale(1.1);
}
.amount {
  font-weight: 600;
  color: var(--accent-primary);
}
.no-data {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-secondary);
  font-size: 14px;
}
.stock-cell {
  font-size: 16px;
}
.stock-cell .low-stock {
  color: #ff3b30;
}
.stock-cell .excess-stock {
  color: #ff9500;
}
.status-badge.status-normal {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-badge.status-low {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-badge.status-out {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-badge.status-excess {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.form-grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 768px) {
  .form-grid-2col {
    grid-template-columns: 1fr;
  }
}
.modal-large {
  max-width: 1000px;
}
.modal-small {
  max-width: 500px;
}
.detail-section {
  margin-bottom: 32px;
}
.detail-section h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border-color);
}
.stock-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .stock-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.stock-info-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
}
.stock-info-card .stock-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.stock-info-card .stock-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.stock-info-card .stock-value.current {
  color: var(--accent-primary);
}
.stock-info-card .stock-value.current.low {
  color: #ff3b30;
}
.stock-info-card .stock-value.min {
  color: #ff9500;
}
.stock-info-card .stock-value.max {
  color: #34c759;
}
.history-list {
  max-height: 300px;
  overflow-y: auto;
}
.history-list::-webkit-scrollbar {
  width: 6px;
}
.history-list::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}
.history-list::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}
.history-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}
.history-item .history-type {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}
.history-item .history-type.type-in {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.history-item .history-type.type-out {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.history-item .history-type.type-adjust {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.history-item .history-info {
  flex: 1;
}
.history-item .history-info .history-quantity {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}
.history-item .history-info .history-quantity .history-stock {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-left: 8px;
}
.history-item .history-info .history-reason {
  font-size: 14px;
  color: var(--text-primary);
  margin-bottom: 6px;
}
.history-item .history-info .history-meta {
  font-size: 12px;
  color: var(--text-secondary);
}
.no-history {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-secondary);
}
.no-history p {
  font-size: 14px;
}
.detail-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}
.current-stock-info {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  border: 2px solid var(--accent-primary);
}
.current-stock-info .info-label {
  font-size: 14px;
  color: var(--text-secondary);
}
.current-stock-info .info-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-primary);
}
.help-text {
  margin-top: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}
.help-text strong {
  color: var(--accent-primary);
  font-weight: 600;
}
.btn-secondary {
  padding: 10px 24px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary:hover {
  background: var(--bg-tertiary);
  border-color: var(--text-secondary);
}
.btn-primary {
  padding: 10px 24px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-primary:hover {
  background: #0051d5;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}
.btn-primary:active {
  transform: translateY(0);
}
.btn-danger {
  padding: 10px 24px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.3);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-danger:hover {
  background: rgba(255, 59, 48, 0.2);
  border-color: #ff3b30;
}
.status-btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.status-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.status-btn.pending {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.status-btn.pending:hover:not(:disabled) {
  background: rgba(255, 149, 0, 0.2);
}
.status-btn.approved {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-btn.approved:hover:not(:disabled) {
  background: rgba(52, 199, 89, 0.2);
}
.status-btn.completed {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.status-btn.completed:hover:not(:disabled) {
  background: rgba(0, 122, 255, 0.2);
}
.status-btn.cancelled {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-btn.cancelled:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.2);
}
.credit-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.credit-badge.credit-excellent {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.credit-badge.credit-good {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.credit-badge.credit-fair {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.credit-badge.credit-poor {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.status-active {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.status-inactive {
  background: rgba(142, 142, 147, 0.1);
  color: #8e8e93;
}
.full-width {
  grid-column: 1/-1;
}
.product-add-section .product-input-group {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}
.product-add-section .product-input-group input {
  flex: 1;
}
.product-add-section .product-input-group .add-btn {
  padding: 10px 20px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.product-add-section .product-input-group .add-btn:hover {
  background: #0051d5;
}
.product-add-section .product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.product-add-section .product-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  font-size: 13px;
  color: var(--text-primary);
}
.product-add-section .product-tag .remove-tag-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}
.product-add-section .product-tag .remove-tag-btn:hover {
  color: #ff3b30;
}
.address-box {
  padding: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.6;
}
.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.info-card {
  background: var(--bg-secondary);
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
}
.info-card .info-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.info-card .info-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.product-list-view {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.product-list-view .product-chip {
  display: inline-block;
  padding: 8px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 13px;
  color: var(--text-primary);
}
.notes-box {
  padding: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
}
.transaction-list {
  max-height: 400px;
  overflow-y: auto;
}
.transaction-list::-webkit-scrollbar {
  width: 6px;
}
.transaction-list::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}
.transaction-list::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}
.transaction-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}
.transaction-item .txn-type {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}
.transaction-item .txn-type.txn-order {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.transaction-item .txn-type.txn-payment {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.transaction-item .txn-type.txn-return {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.transaction-item .txn-info {
  flex: 1;
}
.transaction-item .txn-info .txn-amount {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.transaction-item .txn-info .txn-details {
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: var(--text-secondary);
  flex-wrap: wrap;
}
.transaction-item .txn-info .txn-details .txn-status {
  padding: 2px 8px;
  background: var(--bg-tertiary);
  border-radius: 4px;
  font-weight: 500;
}
.transaction-item .txn-info .txn-details .txn-ref {
  color: var(--accent-primary);
  font-weight: 500;
}
.transaction-item .txn-info .txn-details .txn-date {
  color: var(--text-secondary);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
.stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 2px 8px var(--shadow);
  transition: all 0.3s;
}
.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--shadow);
}
.stat-card.highlight {
  background:
    linear-gradient(
      135deg,
      rgba(0, 122, 255, 0.1) 0%,
      rgba(0, 122, 255, 0.05) 100%);
  border-color: var(--accent-primary);
}
.stat-card .stat-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  border-radius: 12px;
}
.stat-card .stat-icon.pending {
  background: rgba(255, 149, 0, 0.1);
}
.stat-card .stat-icon.overdue {
  background: rgba(255, 59, 48, 0.1);
}
.stat-card .stat-icon.paid {
  background: rgba(52, 199, 89, 0.1);
}
.stat-card .stat-icon.balance {
  background: rgba(0, 122, 255, 0.1);
}
.stat-card .stat-info {
  flex: 1;
}
.stat-card .stat-info .stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.stat-card .stat-info .stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.stat-card .stat-info .stat-value.large {
  font-size: 28px;
  color: var(--accent-primary);
}
.settlement-pending {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}
.settlement-confirmed {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}
.settlement-paid {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
}
.settlement-overdue {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
}
.amount.paid {
  color: #34c759;
}
.amount.return {
  color: #ff9500;
}
.amount.balance {
  color: var(--accent-primary);
  font-size: 16px;
}
.settlement-summary {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}
.settlement-summary .summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--border-color);
}
.settlement-summary .summary-header .summary-title {
  display: flex;
  align-items: center;
  gap: 16px;
}
.settlement-summary .summary-header .summary-title h4 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.settlement-summary .summary-header .summary-title .status-badge.large {
  padding: 8px 16px;
  font-size: 14px;
}
.settlement-summary .summary-header .summary-id {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}
.settlement-summary .summary-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 768px) {
  .settlement-summary .summary-info {
    grid-template-columns: 1fr;
  }
}
.settlement-summary .summary-info .info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settlement-summary .summary-info .info-row label {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}
.settlement-summary .summary-info .info-row .value {
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 600;
}
.settlement-amounts {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}
.settlement-amounts .amount-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}
.settlement-amounts .amount-row:last-child {
  border-bottom: none;
}
.settlement-amounts .amount-row.total {
  margin-top: 12px;
  padding-top: 24px;
  border-top: 2px solid var(--border-color);
  border-bottom: none;
}
.settlement-amounts .amount-row.total .amount-value {
  font-size: 24px;
}
.settlement-amounts .amount-row .amount-label {
  font-size: 15px;
  color: var(--text-primary);
}
.settlement-amounts .amount-row .amount-value {
  font-size: 18px;
  font-weight: 700;
}
.settlement-amounts .amount-row .amount-value.order {
  color: var(--text-primary);
}
.settlement-amounts .amount-row .amount-value.payment {
  color: #34c759;
}
.settlement-amounts .amount-row .amount-value.return {
  color: #ff9500;
}
.settlement-amounts .amount-row .amount-value.balance {
  color: var(--accent-primary);
}
.settlement-details-table {
  overflow-x: auto;
  border-radius: 12px;
}
.settlement-details-table .detail-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}
.settlement-details-table .detail-table thead {
  background: var(--bg-secondary);
}
.settlement-details-table .detail-table thead th {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}
.settlement-details-table .detail-table tbody tr {
  border-bottom: 1px solid var(--border-color);
}
.settlement-details-table .detail-table tbody tr:last-child {
  border-bottom: none;
}
.settlement-details-table .detail-table tbody tr:hover {
  background: var(--bg-secondary);
}
.settlement-details-table .detail-table tbody td {
  padding: 14px 16px;
  font-size: 14px;
  color: var(--text-primary);
}
.settlement-details-table .detail-table tfoot {
  background: var(--bg-secondary);
  border-top: 2px solid var(--border-color);
}
.settlement-details-table .detail-table tfoot td {
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}
.settlement-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  flex-wrap: wrap;
}
.settlement-actions .btn-action {
  flex: 1;
  min-width: 140px;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.settlement-actions .btn-action.confirm {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
  border: 1px solid rgba(0, 122, 255, 0.3);
}
.settlement-actions .btn-action.confirm:hover {
  background: rgba(0, 122, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);
}
.settlement-actions .btn-action.payment {
  background: rgba(52, 199, 89, 0.1);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.3);
}
.settlement-actions .btn-action.payment:hover {
  background: rgba(52, 199, 89, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 199, 89, 0.2);
}
.settlement-actions .btn-action.export {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
.settlement-actions .btn-action.export:hover {
  background: var(--bg-tertiary);
  transform: translateY(-2px);
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}
.section-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.section-header .header-actions {
  display: flex;
  gap: 12px;
}
.report-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0;
}
.report-tabs button {
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}
.report-tabs button:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}
.report-tabs button.active {
  color: var(--accent-primary);
  font-weight: 600;
}
.report-tabs button.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
}
.report-period-selector {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  flex-wrap: wrap;
}
.report-period-selector .period-type {
  display: flex;
  gap: 16px;
}
.report-period-selector .period-type label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-primary);
}
.report-period-selector .period-type label input[type=radio] {
  cursor: pointer;
}
.report-period-selector .month-select {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
  min-width: 150px;
}
.report-period-selector .month-select:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.report-content .report-title {
  margin-bottom: 24px;
}
.report-content .report-title h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}
.report-content .no-data {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
  font-size: 14px;
}
.report-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.report-summary-grid .summary-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}
.report-summary-grid .summary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.report-summary-grid .summary-card .card-icon {
  font-size: 32px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border-radius: 12px;
}
.report-summary-grid .summary-card .card-content {
  flex: 1;
}
.report-summary-grid .summary-card .card-content .card-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
.report-summary-grid .summary-card .card-content .card-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}
.report-summary-grid .summary-card .card-content .card-value .unit {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-left: 4px;
}
.category-report-list {
  width: 100%;
  max-width: 100%;
}
.category-report-list .category-item {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}
.category-report-list .category-item .category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.category-report-list .category-item .category-header .category-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.category-report-list .category-item .category-header .category-stats {
  display: flex;
  gap: 16px;
  font-size: 14px;
}
.category-report-list .category-item .category-header .category-stats .order-count {
  color: var(--text-secondary);
}
.category-report-list .category-item .category-header .category-stats .order-amount {
  font-weight: 600;
  color: var(--accent-primary);
}
.category-report-list .category-item .category-bar-container {
  position: relative;
  height: 32px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
}
.category-report-list .category-item .category-bar-container .category-bar {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      var(--accent-primary),
      var(--accent-secondary));
  transition: width 0.3s ease;
  border-radius: 6px;
}
.category-report-list .category-item .category-bar-container .category-percentage {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}
.supplier-report-table {
  background: var(--bg-secondary);
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: visible;
  border: 1px solid var(--border-color);
  width: 100%;
}
.supplier-report-table table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
}
.supplier-report-table table thead {
  background: var(--bg-tertiary);
}
.supplier-report-table table thead th {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}
.supplier-report-table table thead th:first-child {
  width: 80px;
}
.supplier-report-table table tbody tr {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s ease;
}
.supplier-report-table table tbody tr:hover {
  background: var(--bg-tertiary);
}
.supplier-report-table table tbody tr:last-child {
  border-bottom: none;
}
.supplier-report-table table tbody tr td {
  padding: 14px 16px;
  font-size: 14px;
  color: var(--text-primary);
}
.supplier-report-table table tbody tr td.rank {
  text-align: center;
}
.supplier-report-table table tbody tr td.rank .rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  font-weight: 600;
  font-size: 13px;
}
.supplier-report-table table tbody tr td.rank .rank-badge.top3 {
  background:
    linear-gradient(
      135deg,
      #ffd700,
      #ffed4e);
  color: #8b4513;
}
.supplier-report-table table tbody tr td.supplier-name {
  font-weight: 500;
}
.supplier-report-table table tbody tr td.text-center {
  text-align: center;
}
.supplier-report-table table tbody tr td.text-right {
  text-align: right;
  font-weight: 500;
}
.trend-chart .chart-container {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid var(--border-color);
  margin-bottom: 24px;
}
.trend-chart .chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 20px;
  height: 300px;
  padding: 20px 0;
}
.trend-chart .chart-bars .chart-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.trend-chart .chart-bars .chart-bar-item .bar-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 80px;
}
.trend-chart .chart-bars .chart-bar-item .bar-wrapper .bar-value {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  white-space: nowrap;
}
.trend-chart .chart-bars .chart-bar-item .bar-wrapper .bar {
  width: 100%;
  background: var(--bg-tertiary);
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: all 0.3s ease;
}
.trend-chart .chart-bars .chart-bar-item .bar-wrapper .bar .bar-fill {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      180deg,
      var(--accent-primary),
      var(--accent-secondary));
  border-radius: 8px 8px 0 0;
}
.trend-chart .chart-bars .chart-bar-item .bar-wrapper .bar:hover .bar-fill {
  opacity: 0.8;
}
.trend-chart .chart-bars .chart-bar-item .bar-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 8px;
}
.trend-chart .chart-bars .chart-bar-item .bar-count {
  font-size: 12px;
  color: var(--text-secondary);
}
.trend-chart .trend-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.trend-chart .trend-summary .trend-stat {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  text-align: center;
}
.trend-chart .trend-summary .trend-stat .stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.trend-chart .trend-summary .trend-stat .stat-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-primary);
}
body.dark-mode .report-summary-grid .summary-card:hover,
body.dark-theme .report-summary-grid .summary-card:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
}
body.dark-mode .supplier-report-table table tbody tr:hover,
body.dark-theme .supplier-report-table table tbody tr:hover {
  background: rgba(255, 255, 255, 0.02);
}
body.dark-mode .category-bar-container .category-bar,
body.dark-theme .category-bar-container .category-bar {
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
}
.report-detail-section {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 2px solid var(--border-color);
  width: 100%;
  max-width: 100%;
}
.report-detail-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}
.report-detail-section .filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
  flex-wrap: wrap;
}
.report-detail-section .filter-section .filter-group {
  display: flex;
  gap: 12px;
  flex: 1;
}
.report-detail-section .filter-section .filter-group:first-child {
  flex: 1.5;
}
.report-detail-section .filter-section .filter-group .search-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
}
.report-detail-section .filter-section .filter-group .search-input::placeholder {
  color: var(--text-secondary);
}
.report-detail-section .filter-section .filter-group .search-input:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.report-detail-section .filter-section .filter-group select {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 14px;
  cursor: pointer;
}
.report-detail-section .filter-section .filter-group select:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.report-detail-section .report-list-table {
  background: var(--bg-secondary);
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: visible;
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
  width: 100%;
}
.report-detail-section .report-list-table table {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
}
.report-detail-section .report-list-table table thead {
  background: var(--bg-tertiary);
}
.report-detail-section .report-list-table table thead th {
  padding: 14px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
}
.report-detail-section .report-list-table table tbody tr {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s ease;
}
.report-detail-section .report-list-table table tbody tr:hover {
  background: var(--bg-tertiary);
}
.report-detail-section .report-list-table table tbody tr:last-child {
  border-bottom: none;
}
.report-detail-section .report-list-table table tbody tr td {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--text-primary);
}
.report-detail-section .report-list-table table tbody tr td.order-id {
  font-family: "Courier New", monospace;
  font-weight: 600;
  color: var(--accent-primary);
}
.report-detail-section .report-list-table table tbody tr td.supplier-name {
  font-weight: 500;
}
.report-detail-section .report-list-table table tbody tr td.text-center {
  text-align: center;
}
.report-detail-section .report-list-table table tbody tr td.text-right {
  text-align: right;
}
.report-detail-section .report-list-table table tbody tr td.amount {
  font-weight: 600;
  color: var(--accent-primary);
}
.report-detail-section .report-list-table table tbody tr td .btn-view {
  padding: 6px 12px;
  background: var(--accent-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.report-detail-section .report-list-table table tbody tr td .btn-view:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
}
.report-detail-section .report-list-table .no-data {
  padding: 60px 20px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}
.report-detail-section .list-summary {
  text-align: center;
  padding: 12px;
  color: var(--text-secondary);
  font-size: 13px;
  background: var(--bg-secondary);
  border-radius: 6px;
}
.report-detail-section .category-tag {
  display: inline-block;
  padding: 4px 10px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}
.expiry-content {
  margin-top: 20px;
}
.tabs-container {
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 24px;
}
.tabs {
  display: flex;
  gap: 8px;
}
.tab {
  padding: 12px 20px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.tab:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}
.tab.active {
  color: var(--accent-primary);
  border-bottom-color: var(--accent-primary);
  font-weight: 600;
}
.expired-row {
  background: rgba(255, 77, 77, 0.05) !important;
}
.expired-row:hover {
  background: rgba(255, 77, 77, 0.1) !important;
}
.expiring-row {
  background: rgba(255, 159, 64, 0.05) !important;
}
.expiring-row:hover {
  background: rgba(255, 159, 64, 0.1) !important;
}
.expired-date {
  color: #ff4d4d;
  font-weight: 600;
}
.expiring-date {
  color: #ff9f40;
  font-weight: 600;
}
.expired-days {
  color: #ff4d4d;
  font-weight: 700;
  font-size: 14px;
}
.expiring-days {
  color: #ff9f40;
  font-weight: 700;
  font-size: 14px;
}
.fefo-rank {
  font-weight: 700;
  color: var(--accent-primary);
  font-size: 16px;
}
.priority-badge {
  display: inline-block;
  padding: 4px 10px;
  background: #ffa726;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.priority-badge.high {
  background: #ff5252;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
.info-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border-left: 4px solid var(--accent-primary);
  border-radius: 6px;
  margin-bottom: 16px;
  color: var(--text-primary);
  font-size: 14px;
}
.info-banner .icon {
  font-size: 18px;
}
.status-badge.expired {
  background: #ff4d4d;
  color: white;
}
.status-badge.expiring {
  background: #ff9f40;
  color: white;
}
.status-badge.normal {
  background: #4caf50;
  color: white;
}
.stat-card.alert {
  border-left: 4px solid #ff4d4d;
}
.stat-card.warning {
  border-left: 4px solid #ff9f40;
}
.stat-card .stat-icon.expired {
  color: #ff4d4d;
}
.stat-card .stat-icon.expiring {
  color: #ff9f40;
}
.stat-card .stat-icon.normal {
  color: #4caf50;
}
.inspection-checklist-mini {
  display: flex;
  gap: 6px;
  align-items: center;
}
.check-item {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}
.check-item.pass {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
}
.check-item.fail {
  background: rgba(255, 77, 77, 0.1);
  color: #ff4d4d;
}
.temp-ok {
  color: #4caf50;
  font-weight: 600;
}
.temp-alert {
  color: #ff4d4d;
  font-weight: 700;
  animation: blink 1.5s ease-in-out infinite;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.status-badge.approved {
  background: #4caf50;
  color: white;
}
.status-badge.rejected {
  background: #ff4d4d;
  color: white;
}
.status-badge.conditional {
  background: #ff9f40;
  color: white;
}
.zone-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}
.zone-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}
.zone-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.zone-card.alert {
  border-color: #ff4d4d;
  background: rgba(255, 77, 77, 0.05);
  animation: pulse-alert 2s ease-in-out infinite;
}
@keyframes pulse-alert {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 77, 77, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 77, 77, 0);
  }
}
.zone-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}
.zone-header .zone-icon {
  font-size: 32px;
}
.zone-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}
.zone-header .zone-type {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #666;
}
.zone-readings {
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
}
.zone-readings .reading {
  flex: 1;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}
.zone-readings .reading .label {
  display: block;
  font-size: 11px;
  color: #666;
  margin-bottom: 4px;
}
.zone-readings .reading .value {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2px;
}
.zone-readings .reading .value.abnormal {
  color: #ff4d4d;
  animation: blink 1.5s ease-in-out infinite;
}
.zone-readings .reading .range {
  display: block;
  font-size: 10px;
  color: #999;
}
.zone-last-update {
  font-size: 11px;
  color: #999;
  text-align: right;
}
.alerts-section {
  background: rgba(255, 152, 0, 0.1);
  border-left: 4px solid #ff9800;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
}
.alerts-section .alert-header {
  font-weight: 600;
  margin-bottom: 10px;
  color: #ff6f00;
}
.alerts-section .alert-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.alerts-section .alert-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 13px;
}
.alerts-section .alert-item.critical {
  background: rgba(255, 77, 77, 0.1);
  border-left: 3px solid #ff4d4d;
}
.alerts-section .alert-item .alert-time {
  font-weight: 600;
  min-width: 50px;
}
.alerts-section .alert-item .alert-zone {
  font-weight: 600;
  color: #1976d2;
  min-width: 100px;
}
.alerts-section .alert-item .alert-message {
  flex: 1;
  color: #333;
}
.alerts-section .alert-item .btn-small {
  padding: 4px 12px;
  font-size: 12px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.alerts-section .alert-item .btn-small:hover {
  background: #45a049;
}
.abnormal-row {
  background: rgba(255, 77, 77, 0.05);
}
.temp-abnormal,
.humidity-abnormal {
  color: #ff4d4d;
  font-weight: 700;
}
.range-indicator {
  display: inline-block;
  margin-left: 4px;
  font-size: 11px;
  color: #999;
}
.urgent-row {
  background: rgba(255, 77, 77, 0.08);
  border-left: 4px solid #ff4d4d;
  animation: pulse 2s ease-in-out infinite;
}
.completed-row {
  background: rgba(76, 175, 80, 0.05);
  opacity: 0.8;
}
.type-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.type-badge.return {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}
.type-badge.recall {
  background: rgba(255, 152, 0, 0.1);
  color: #ff9800;
}
.level-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}
.level-badge.urgent {
  background: #ff4d4d;
  color: white;
  animation: pulse 1.5s ease-in-out infinite;
}
.level-badge.high {
  background: #ff9800;
  color: white;
}
.level-badge.medium {
  background: #ffc107;
  color: #333;
}
.level-badge.low {
  background: #4caf50;
  color: white;
}
.reason-cell {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.badge-check {
  color: #4caf50;
  font-weight: 600;
  font-size: 12px;
}
.badge-warning {
  color: #ff9800;
  font-weight: 600;
  font-size: 12px;
}
.btn-danger {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-danger:hover {
  background: #ff3333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 77, 77, 0.3);
}
.table-container table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--shadow);
}
.table-container table thead {
  background: var(--bg-secondary);
}
.table-container table thead th {
  padding: 16px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  white-space: nowrap;
}
.table-container table thead th:first-child {
  padding-left: 20px;
}
.table-container table thead th:last-child {
  padding-right: 20px;
  text-align: center;
}
.table-container table tbody tr {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s;
}
.table-container table tbody tr:hover {
  background: var(--bg-secondary);
  cursor: pointer;
}
.table-container table tbody tr:last-child {
  border-bottom: none;
}
.table-container table tbody td {
  padding: 16px 12px;
  font-size: 14px;
  color: var(--text-primary);
}
.table-container table tbody td:first-child {
  padding-left: 20px;
  font-weight: 500;
}
.table-container table tbody td:last-child {
  padding-right: 20px;
  text-align: center;
}
.draft-row {
  background: rgba(255, 193, 7, 0.05);
}
.error-row {
  background: rgba(255, 77, 77, 0.08);
  border-left: 4px solid #ff4d4d;
}
.type-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.type-badge.supply {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
}
.type-badge.device {
  background: rgba(156, 39, 176, 0.1);
  color: #9c27b0;
}
.confirmation-number {
  font-family: "Courier New", monospace;
  font-weight: 600;
  color: #4caf50;
  font-size: 12px;
}
.text-muted {
  color: #999;
  font-size: 12px;
}
.btn-icon {
  padding: 6px 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 2px;
}
.btn-icon:hover {
  background: var(--bg-tertiary);
  transform: scale(1.1);
}
.status-badge.draft {
  background: #ffc107;
  color: #333;
}
.status-badge.submitted {
  background: #2196f3;
  color: white;
}
.status-badge.accepted {
  background: #4caf50;
  color: white;
}
.status-badge.rejected {
  background: #f44336;
  color: white;
}
.serial-search-section {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}
.search-box-large {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.search-box-large input {
  flex: 1;
  padding: 12px 20px;
  font-size: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.search-box-large input:focus {
  outline: none;
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
}
.search-box-large .btn-search {
  padding: 12px 30px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.search-box-large .btn-search:hover {
  background: #1565c0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3);
}
.quick-filters {
  display: flex;
  gap: 10px;
}
.filter-chip {
  padding: 8px 16px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}
.filter-chip:hover {
  border-color: #1976d2;
  color: #1976d2;
}
.filter-chip.active {
  background: #1976d2;
  border-color: #1976d2;
  color: white;
}
.recalled-row {
  background: rgba(255, 152, 0, 0.05);
}
.rfid-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(33, 150, 243, 0.1);
  border-radius: 4px;
  font-family: "Courier New", monospace;
  font-size: 11px;
  font-weight: 600;
  color: #2196f3;
}
.event-count {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #4caf50;
}
.status-badge.available {
  background: #4caf50;
  color: white;
}
.status-badge.distributed {
  background: #2196f3;
  color: white;
}
.status-badge.recalled {
  background: #ff9800;
  color: white;
}
.status-badge.expired {
  background: #f44336;
  color: white;
}
.btn-secondary {
  background: #9e9e9e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  background: #757575;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(158, 158, 158, 0.3);
}
::ng-deep .mat-mdc-form-field {
  font-size: 14px;
}
::ng-deep .mat-mdc-form-field.filter-field {
  width: 200px;
  margin-right: 12px;
}
::ng-deep .mat-mdc-form-field.filter-field .mat-mdc-text-field-wrapper {
  padding-bottom: 0;
}
::ng-deep .mat-mdc-form-field.search-field {
  flex: 1;
  min-width: 200px;
}
::ng-deep .mat-mdc-form-field.search-field .mat-mdc-text-field-wrapper {
  padding-bottom: 0;
}
::ng-deep .mat-mdc-form-field.full-width {
  width: 100%;
}
::ng-deep .mat-mdc-form-field.small-field {
  width: 120px;
  margin-right: 8px;
}
::ng-deep .mat-mdc-form-field.flex-field {
  flex: 1;
  margin-right: 8px;
}
::ng-deep .mat-mdc-select-panel {
  max-height: 300px;
}
::ng-deep .mat-mdc-input-element {
  color: var(--text-primary);
}
::ng-deep .mat-mdc-input-element::placeholder {
  color: var(--text-secondary);
  opacity: 0.6;
}
::ng-deep .mat-mdc-checkbox.filter-checkbox {
  margin: 8px 0;
}
::ng-deep .mat-mdc-checkbox.filter-checkbox .mdc-label {
  color: var(--text-primary);
}
::ng-deep .mat-mdc-radio-group.period-type {
  margin-right: 16px;
}
::ng-deep .mat-mdc-radio-button {
  margin-right: 16px;
}
::ng-deep .mat-mdc-radio-button .mdc-label {
  color: var(--text-primary);
}
::ng-deep .mat-mdc-chip-listbox .mat-mdc-chip-option.mat-mdc-chip-selected {
  background: var(--accent-primary);
  color: white;
}
::ng-deep .mat-mdc-raised-button.mat-primary {
  background: var(--accent-primary);
  color: white;
}
::ng-deep .mat-mdc-raised-button.mat-primary:hover {
  background: #0051d5;
}
::ng-deep .mat-icon {
  color: var(--text-secondary);
}
::ng-deep .mat-icon.mat-mdc-form-field-icon-suffix {
  cursor: pointer;
}
.filter-section {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.filter-section mat-form-field {
  margin-bottom: 0 !important;
}
.filter-section mat-checkbox {
  margin-left: auto;
}
.serial-search-section mat-form-field.search-box-large {
  width: 100%;
  margin-bottom: 15px;
}
.serial-search-section .quick-filters mat-chip-listbox {
  width: 100%;
}
.serial-search-section .quick-filters mat-chip-listbox mat-chip-option {
  margin: 4px;
}
.modal-body .form-grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.modal-body .form-grid-2col mat-form-field {
  margin-bottom: 0;
}
.modal-body mat-form-field.full-width {
  grid-column: 1/-1;
}
.item-input-row {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 16px;
}
.item-input-row mat-form-field {
  margin-bottom: 0;
}
.item-input-row button {
  margin-top: 8px;
}
.form-section {
  margin-bottom: 24px;
}
.form-section h3 {
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}
.form-section mat-form-field {
  width: 100%;
}
.product-add-section .product-input-group {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
}
.product-add-section .product-input-group mat-form-field {
  margin-bottom: 0;
}
.product-add-section .product-input-group button {
  margin-top: 8px;
}
.report-period-selector {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}
.report-period-selector mat-radio-group {
  margin-right: 16px;
}
.report-period-selector mat-form-field.month-select {
  min-width: 200px;
  margin-bottom: 0;
}
@media (max-width: 992px) {
  .section-header h2 {
    font-size: 24px;
  }
  .section-header .primary-btn {
    padding: 10px 20px;
    font-size: 13px;
  }
  .filter-section {
    flex-wrap: wrap;
    gap: 12px;
  }
  .filter-section .filter-group {
    flex: 1 1 calc(50% - 12px);
    min-width: 200px;
  }
  .filter-section .search-group {
    flex: 1 1 100%;
  }
  .modal-body .form-grid-2col {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .report-period-selector {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
@media (max-width: 768px) {
  .welcome-section h2 {
    font-size: 24px;
  }
  .welcome-section .subtitle {
    font-size: 14px;
    margin-bottom: 24px;
  }
  .section-header h2 {
    font-size: 20px;
  }
  .section-header .primary-btn {
    padding: 8px 16px;
    font-size: 12px;
    width: 100%;
    justify-content: center;
  }
  .section-content {
    padding: 20px;
    border-radius: 12px;
    min-height: auto;
  }
  .section-content p {
    font-size: 14px;
  }
  .filter-section .filter-group {
    flex: 1 1 100%;
  }
  .filter-section .filter-group label {
    font-size: 13px;
  }
  .filter-section .filter-group select {
    font-size: 13px;
    padding: 6px 28px 6px 10px;
  }
  .filter-section mat-form-field {
    width: 100%;
  }
  .filter-section mat-checkbox {
    margin-left: 0;
    margin-top: 8px;
  }
  .item-input-row,
  .product-add-section .product-input-group {
    flex-direction: column;
    gap: 12px;
  }
  .item-input-row mat-form-field,
  .product-add-section .product-input-group mat-form-field {
    width: 100%;
  }
  .item-input-row button,
  .product-add-section .product-input-group button {
    width: 100%;
    margin-top: 0;
  }
  .report-period-selector {
    padding: 12px;
  }
  .report-period-selector mat-radio-group {
    margin-right: 0;
    margin-bottom: 8px;
  }
  .report-period-selector mat-form-field.month-select {
    min-width: 100%;
    width: 100%;
  }
}
@media (max-width: 480px) {
  .welcome-section h2 {
    font-size: 20px;
  }
  .welcome-section .subtitle {
    font-size: 13px;
  }
  .welcome-section .recent-section {
    padding: 16px;
    border-radius: 12px;
  }
  .welcome-section .recent-section h3 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  .welcome-section .recent-section .recent-list {
    gap: 8px;
  }
  .welcome-section .recent-section .recent-list .recent-item {
    padding: 8px;
    border-radius: 8px;
  }
  .welcome-section .recent-section .recent-list .recent-item .recent-icon {
    font-size: 20px;
    margin-right: 8px;
  }
  .welcome-section .recent-section .recent-list .recent-item .recent-text {
    font-size: 12px;
  }
  .welcome-section .recent-section .recent-list .recent-item .recent-time {
    font-size: 10px;
  }
  .section-header h2 {
    font-size: 18px;
  }
  .section-header .primary-btn {
    padding: 8px 12px;
    font-size: 11px;
  }
  .section-header .primary-btn .icon {
    font-size: 14px;
  }
  .section-content {
    padding: 16px;
  }
  .section-content p {
    font-size: 13px;
  }
  .filter-section {
    gap: 8px;
  }
  .filter-section .filter-group label {
    font-size: 12px;
  }
  .filter-section .filter-group select {
    font-size: 12px;
    padding: 6px 24px 6px 8px;
  }
  .form-section {
    margin-bottom: 16px;
  }
  .form-section h3 {
    font-size: 14px;
    margin-bottom: 12px;
  }
}
/*# sourceMappingURL=erp-generator.component.css.map */
`] }]
  }], () => [{ type: Router }, { type: NotificationService }, { type: ConfirmationDialogService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpGeneratorComponent, { className: "ErpGeneratorComponent", filePath: "src/app/modules/erp/components/erp-generator/erp-generator.component.ts", lineNumber: 404 });
})();

// src/app/modules/erp/components/erp-login/erp-login.component.ts
var _c02 = ["loginComponent"];
var ErpLoginComponent = class _ErpLoginComponent {
  erpAuthService;
  router;
  loginComponent;
  loginConfig = {
    title: "\u{1F4BC} ERP \uC2DC\uC2A4\uD15C",
    subtitle: "\uC5C5\uBB34\uB97C \uB354 \uC2A4\uB9C8\uD2B8\uD558\uAC8C",
    moduleName: "erp",
    showSocialLogin: false,
    showRegisterLink: false,
    themeColors: {
      primary: "#10b981",
      // 그린 (업무/생산성)
      secondary: "#059669",
      // 진한 그린
      accent: "#34d399"
      // 밝은 그린
    }
  };
  constructor(erpAuthService, router) {
    this.erpAuthService = erpAuthService;
    this.router = router;
    if (this.erpAuthService.isErpLoggedIn) {
      this.router.navigate(["/erp"]);
    }
  }
  onLogin(credentials) {
    return __async(this, null, function* () {
      if (credentials.username !== "admin" || credentials.password !== "1234") {
        if (this.loginComponent) {
          this.loginComponent.setError("\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
        }
        return;
      }
      if (this.loginComponent) {
        this.loginComponent.setLoading(true);
      }
      try {
        const success = yield this.erpAuthService.erpLogin(credentials.username, credentials.password);
        if (success) {
          this.router.navigate(["/erp"]);
        } else {
          if (this.loginComponent) {
            this.loginComponent.setError("\uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC815\uBCF4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.");
          }
        }
      } catch (error) {
        if (this.loginComponent) {
          this.loginComponent.setError("\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
        }
      } finally {
        if (this.loginComponent) {
          this.loginComponent.setLoading(false);
        }
      }
    });
  }
  static \u0275fac = function ErpLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpLoginComponent)(\u0275\u0275directiveInject(ErpAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpLoginComponent, selectors: [["app-erp-login"]], viewQuery: function ErpLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function ErpLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function ErpLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogin($event));
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("config", ctx.loginConfig);
    }
  }, dependencies: [UnifiedLoginComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-erp-login",
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>',
      standalone: false
    }]
  }], () => [{ type: ErpAuthService }, { type: Router }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpLoginComponent, { className: "ErpLoginComponent", filePath: "src/app/modules/erp/components/erp-login/erp-login.component.ts", lineNumber: 11 });
})();

// src/app/modules/erp/components/erp-vertical-menu/erp-vertical-menu.component.ts
var ErpVerticalMenuComponent = class _ErpVerticalMenuComponent {
  menuAction = new EventEmitter();
  onMenuClick(action) {
    this.menuAction.emit(action);
  }
  static \u0275fac = function ErpVerticalMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpVerticalMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErpVerticalMenuComponent, selectors: [["app-erp-vertical-menu"]], outputs: { menuAction: "menuAction" }, standalone: false, decls: 7, vars: 0, consts: [[1, "erp-vertical-menu"], ["title", "\uC0AC\uC774\uB4DC\uBC14", 1, "menu-item", 3, "click"], [1, "icon"], ["title", "\uC124\uC815", 1, "menu-item", 3, "click"]], template: function ErpVerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ErpVerticalMenuComponent_Template_button_click_1_listener() {
        return ctx.onMenuClick("toggle-sidebar");
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "\u2630");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function ErpVerticalMenuComponent_Template_button_click_4_listener() {
        return ctx.onMenuClick("settings");
      });
      \u0275\u0275elementStart(5, "span", 2);
      \u0275\u0275text(6, "\u2699\uFE0F");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\n.erp-vertical-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 8px;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n}\n.erp-vertical-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.erp-vertical-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.erp-vertical-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.erp-vertical-menu[_ngcontent-%COMP%]   .menu-item.active[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #667eea;\n}\n/*# sourceMappingURL=erp-vertical-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpVerticalMenuComponent, [{
    type: Component,
    args: [{ selector: "app-erp-vertical-menu", standalone: false, template: `<div class="erp-vertical-menu">
  <button class="menu-item" (click)="onMenuClick('toggle-sidebar')" title="\uC0AC\uC774\uB4DC\uBC14">
    <span class="icon">\u2630</span>
  </button>
  <button class="menu-item" (click)="onMenuClick('settings')" title="\uC124\uC815">
    <span class="icon">\u2699\uFE0F</span>
  </button>
</div>
`, styles: ["/* src/app/modules/erp/components/erp-vertical-menu/erp-vertical-menu.component.scss */\n.erp-vertical-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 8px;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n}\n.erp-vertical-menu .menu-item {\n  width: 48px;\n  height: 48px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.erp-vertical-menu .menu-item .icon {\n  font-size: 20px;\n}\n.erp-vertical-menu .menu-item:hover {\n  background: #f5f5f5;\n}\n.erp-vertical-menu .menu-item.active {\n  background: #e3f2fd;\n  color: #667eea;\n}\n/*# sourceMappingURL=erp-vertical-menu.component.css.map */\n"] }]
  }], null, { menuAction: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErpVerticalMenuComponent, { className: "ErpVerticalMenuComponent", filePath: "src/app/modules/erp/components/erp-vertical-menu/erp-vertical-menu.component.ts", lineNumber: 11 });
})();

// src/app/guards/erp-auth.guard.ts
var ErpAuthGuard = class _ErpAuthGuard {
  erpAuthService;
  router;
  constructor(erpAuthService, router) {
    this.erpAuthService = erpAuthService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.erpAuthService.isErpLoggedIn) {
      const requiredPermission = route.data["permission"];
      if (requiredPermission && !this.erpAuthService.hasPermission(requiredPermission)) {
        this.router.navigate(["/erp/access-denied"]);
        return false;
      }
      const requiredRole = route.data["role"];
      if (requiredRole && !this.erpAuthService.hasRole(requiredRole)) {
        this.router.navigate(["/erp/access-denied"]);
        return false;
      }
      return true;
    }
    return this.router.createUrlTree(["/erp/login"], {
      queryParams: { returnUrl: state.url }
    });
  }
  static \u0275fac = function ErpAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpAuthGuard)(\u0275\u0275inject(ErpAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErpAuthGuard, factory: _ErpAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ErpAuthService }, { type: Router }], null);
})();

// src/app/modules/erp/erp-routing.module.ts
var routes = [
  {
    path: "login",
    component: ErpLoginComponent
  },
  {
    path: "",
    component: ErpGeneratorComponent,
    canActivate: [ErpAuthGuard]
    // ERP 전용 인증 가드 활성화
  }
];
var ErpRoutingModule = class _ErpRoutingModule {
  static \u0275fac = function ErpRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ErpRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/erp/erp.module.ts
var ErpModule = class _ErpModule {
  static \u0275fac = function ErpModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErpModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ErpModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ErpRoutingModule,
    // Angular Material Modules
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTooltipModule,
    MatSlideToggleModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErpModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ErpGeneratorComponent,
        ErpLoginComponent,
        ErpHeaderComponent,
        ErpTopMenuComponent,
        ErpLeftMenuComponent,
        ErpRightSidebarComponent,
        ErpVerticalMenuComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        ErpRoutingModule,
        // Angular Material Modules
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatTooltipModule,
        MatSlideToggleModule
      ],
      exports: []
    }]
  }], null, null);
})();
export {
  ErpModule
};
//# sourceMappingURL=chunk-V4NMCQZ7.js.map
