import {
  environment as environment2
} from "./chunk-J56MEKJT.js";
import {
  ChatBotService
} from "./chunk-PIR34DHO.js";
import {
  MatDividerModule,
  MatSidenavModule
} from "./chunk-COH6PWQA.js";
import {
  ChatTalkApiService,
  MatBadgeModule,
  RoomStatus,
  SenderType
} from "./chunk-576D3S7V.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  MatTabsModule
} from "./chunk-VN4H2GKT.js";
import {
  CryptoUtil
} from "./chunk-G2D7UUZA.js";
import {
  MatMenuModule
} from "./chunk-3USWDC62.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DZVWUGGM.js";
import {
  MatChipsModule
} from "./chunk-SVWY7C6P.js";
import {
  JwtHelperService
} from "./chunk-GTYHAMOR.js";
import {
  MatSnackBarModule
} from "./chunk-XGFL2WJQ.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import {
  ChatConsultationToggleService
} from "./chunk-FFJ4GMB5.js";
import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import {
  ChatTalkSocketService,
  environment
} from "./chunk-G4JOAHZY.js";
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient
} from "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Subject,
  ViewChild,
  catchError,
  filter,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/chat-talk/shared/services/chat-talk-auth.service.ts
var ChatTalkAuthService = class _ChatTalkAuthService {
  router;
  STORAGE_KEY = "chat_talk_auth";
  // environment에서 암호화된 인증 정보를 복호화하여 사용
  CREDENTIALS = {
    username: CryptoUtil.decrypt(environment.auth.username),
    password: CryptoUtil.decrypt(environment.auth.password)
  };
  isAuthenticatedSubject = new BehaviorSubject(this.checkAuthStatus());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  constructor(router) {
    this.router = router;
    this.initAuth();
  }
  initAuth() {
    this.isAuthenticatedSubject.next(this.checkAuthStatus());
  }
  /**
   * 로그인
   */
  login(username, password) {
    if (username === this.CREDENTIALS.username && password === this.CREDENTIALS.password) {
      const token = this.generateToken(username);
      this.saveToken(token);
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }
  /**
   * 로그아웃
   */
  logout() {
    console.log("[ChatTalkAuth] \uB85C\uADF8\uC544\uC6C3");
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      sessionStorage.removeItem(this.STORAGE_KEY);
      this.isAuthenticatedSubject.next(false);
    } catch (error) {
      console.error("[ChatTalkAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/chat-talk/login"]).catch((err) => {
        console.error("[ChatTalkAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/chat-talk/login";
      });
    }
  }
  /**
   * 인증 상태 확인
   */
  isAuthenticated() {
    return this.checkAuthStatus();
  }
  /**
   * 현재 사용자 정보 가져오기
   */
  getCurrentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    try {
      const data = JSON.parse(token);
      const now = (/* @__PURE__ */ new Date()).getTime();
      if (now - data.timestamp > 24 * 60 * 60 * 1e3) {
        this.logout();
        return null;
      }
      return { username: data.username };
    } catch (error) {
      this.logout();
      return null;
    }
  }
  /**
   * 인증 상태 체크
   */
  checkAuthStatus() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const data = JSON.parse(token);
      const now = (/* @__PURE__ */ new Date()).getTime();
      if (now - data.timestamp > 24 * 60 * 60 * 1e3) {
        this.logout();
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
  /**
   * 토큰 생성
   */
  generateToken(username) {
    const data = {
      username,
      timestamp: (/* @__PURE__ */ new Date()).getTime()
    };
    return JSON.stringify(data);
  }
  /**
   * 토큰 저장
   */
  saveToken(token) {
    localStorage.setItem(this.STORAGE_KEY, token);
    sessionStorage.setItem(this.STORAGE_KEY, token);
  }
  /**
   * 토큰 가져오기
   */
  getToken() {
    return localStorage.getItem(this.STORAGE_KEY) || sessionStorage.getItem(this.STORAGE_KEY);
  }
  static \u0275fac = function ChatTalkAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkAuthService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatTalkAuthService, factory: _ChatTalkAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/modules/chat-talk/chat-talk.component.ts
function ChatTalkComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "mat-icon");
    \u0275\u0275text(3, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function ChatTalkComponent_div_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.username);
  }
}
var ChatTalkComponent = class _ChatTalkComponent {
  authService;
  router;
  currentUser = null;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(["/chat-talk/login"]);
  }
  static \u0275fac = function ChatTalkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkComponent)(\u0275\u0275directiveInject(ChatTalkAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatTalkComponent, selectors: [["app-chat-talk"]], standalone: false, decls: 10, vars: 1, consts: [[1, "chat-talk-container"], [1, "chat-talk-header"], [1, "header-left"], [1, "logo-icon"], ["class", "header-right", 4, "ngIf"], [1, "chat-talk-content"], [1, "header-right"], [1, "user-info"], ["mat-icon-button", "", "matTooltip", "\uB85C\uADF8\uC544\uC6C3", 3, "click"]], template: function ChatTalkComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
      \u0275\u0275text(4, "chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\uCC44\uD305\uC0C1\uB2F4 \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ChatTalkComponent_div_7_Template, 9, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275element(9, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.currentUser);
    }
  }, dependencies: [NgIf, RouterOutlet, MatIconButton, MatIcon, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.chat-talk-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  background: #f5f7fa;\n}\n.chat-talk-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  font-size: 14px;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.chat-talk-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .chat-talk-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .chat-talk-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .chat-talk-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 24px;\n    height: 24px;\n  }\n  .chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n  .chat-talk-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=chat-talk.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkComponent, [{
    type: Component,
    args: [{ selector: "app-chat-talk", standalone: false, template: '<!-- Chat Talk Container -->\n<div class="chat-talk-container">\n  <!-- Header -->\n  <div class="chat-talk-header">\n    <div class="header-left">\n      <mat-icon class="logo-icon">chat</mat-icon>\n      <h1>\uCC44\uD305\uC0C1\uB2F4 \uC2DC\uC2A4\uD15C</h1>\n    </div>\n    \n    <div class="header-right" *ngIf="currentUser">\n      <div class="user-info">\n        <mat-icon>account_circle</mat-icon>\n        <span>{{ currentUser.username }}</span>\n      </div>\n      <button mat-icon-button (click)="onLogout()" matTooltip="\uB85C\uADF8\uC544\uC6C3">\n        <mat-icon>logout</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <!-- Content -->\n  <div class="chat-talk-content">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n', styles: ["/* src/app/modules/chat-talk/chat-talk.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.chat-talk-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n  background: #f5f7fa;\n}\n.chat-talk-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.chat-talk-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.chat-talk-header .header-left .logo-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.chat-talk-header .header-left h1 {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.chat-talk-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.chat-talk-header .header-right .user-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  font-size: 14px;\n}\n.chat-talk-header .header-right .user-info mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-talk-header .header-right button {\n  color: white;\n}\n.chat-talk-header .header-right button:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.chat-talk-content {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .chat-talk-header {\n    padding: 12px 16px;\n  }\n  .chat-talk-header .header-left h1 {\n    font-size: 16px;\n  }\n  .chat-talk-header .header-left .logo-icon {\n    font-size: 24px;\n    width: 24px;\n    height: 24px;\n  }\n  .chat-talk-header .header-right {\n    gap: 8px;\n  }\n  .chat-talk-header .header-right .user-info {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n  .chat-talk-header .header-right .user-info span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=chat-talk.component.css.map */\n"] }]
  }], () => [{ type: ChatTalkAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatTalkComponent, { className: "ChatTalkComponent", filePath: "src/app/modules/chat-talk/chat-talk.component.ts", lineNumber: 11 });
})();

// src/app/modules/chat-talk/login/chat-talk-login.component.ts
var _c0 = ["loginComponent"];
var ChatTalkLoginComponent = class _ChatTalkLoginComponent {
  authService;
  router;
  route;
  loginComponent;
  loginConfig = {
    title: "\u{1F4AC} \uCC44\uD305\uD1A1",
    subtitle: "\uC5B8\uC81C \uC5B4\uB514\uC11C\uB098 \uC18C\uD1B5\uD558\uC138\uC694",
    moduleName: "chat-talk",
    showSocialLogin: false,
    showRegisterLink: false,
    themeColors: {
      primary: "#06b6d4",
      // 시안 (채팅/메시지)
      secondary: "#0891b2",
      // 진한 시안
      accent: "#22d3ee"
      // 밝은 시안
    }
  };
  returnUrl = "/chat-talk/client/home";
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
      return;
    }
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/chat-talk/client/home";
  }
  onLogin(credentials) {
    const success = this.authService.login(credentials.username, credentials.password);
    if (success) {
      setTimeout(() => {
        this.router.navigateByUrl(this.returnUrl).catch(() => {
          this.router.navigate(["/chat-talk/client/home"]);
        });
      }, 300);
    } else {
      if (this.loginComponent) {
        this.loginComponent.setError("\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
      }
    }
  }
  static \u0275fac = function ChatTalkLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkLoginComponent)(\u0275\u0275directiveInject(ChatTalkAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatTalkLoginComponent, selectors: [["app-chat-talk-login"]], viewQuery: function ChatTalkLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function ChatTalkLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function ChatTalkLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-chat-talk-login",
      standalone: false,
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>'
    }]
  }], () => [{ type: ChatTalkAuthService }, { type: Router }, { type: ActivatedRoute }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatTalkLoginComponent, { className: "ChatTalkLoginComponent", filePath: "src/app/modules/chat-talk/login/chat-talk-login.component.ts", lineNumber: 12 });
})();

// src/app/modules/chat-talk/guards/chat-talk-auth.guard.ts
var ChatTalkAuthGuard = class _ChatTalkAuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(["/chat-talk/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
  static \u0275fac = function ChatTalkAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkAuthGuard)(\u0275\u0275inject(ChatTalkAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatTalkAuthGuard, factory: _ChatTalkAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ChatTalkAuthService }, { type: Router }], null);
})();

// src/app/modules/chat-talk/chat-talk-routing.module.ts
var routes = [
  {
    path: "login",
    component: ChatTalkLoginComponent
  },
  {
    path: "",
    component: ChatTalkComponent,
    children: [
      {
        path: "client",
        loadChildren: () => import("./chunk-OVDHRY2G.js").then((m) => m.ChatTalkClientModule),
        canActivate: [ChatTalkAuthGuard]
      },
      {
        path: "agent",
        loadChildren: () => import("./chunk-ZGHHJSM4.js").then((m) => m.ChatTalkAgentModule),
        canActivate: [ChatTalkAuthGuard]
      },
      {
        path: "",
        redirectTo: "agent",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "login"
  }
];
var ChatTalkRoutingModule = class _ChatTalkRoutingModule {
  static \u0275fac = function ChatTalkRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatTalkRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/store/services/base-auth.service.ts
var BaseAuthService = class {
  http;
  jwtHelper;
  router;
  user$ = new BehaviorSubject(null);
  initialized = false;
  // 사용자 정보 저장 키 추가
  get storageUserKey() {
    return `${this.storageTokenKey}_user`;
  }
  constructor(http, jwtHelper, router) {
    this.http = http;
    this.jwtHelper = jwtHelper;
    this.router = router;
  }
  getUser$() {
    return this.user$.asObservable().pipe(filter((user) => user !== null));
  }
  getNullableUser$() {
    return this.user$.asObservable();
  }
  getCurrentUser() {
    return this.user$.getValue();
  }
  setUser(user) {
    this.user$.next(user);
  }
  initUser() {
    if (this.initialized)
      return;
    this.initialized = true;
    const accessToken = localStorage.getItem(this.storageTokenKey);
    const userJson = localStorage.getItem(this.storageUserKey);
    console.log("[BaseAuthService] initUser() - storageKey:", this.storageTokenKey);
    console.log("[BaseAuthService] initUser() - token:", accessToken);
    console.log("[BaseAuthService] initUser() - userJson:", userJson);
    if (!this.isValidToken(accessToken)) {
      console.log("[BaseAuthService] initUser() - \uD1A0\uD070\uC774 \uC720\uD6A8\uD558\uC9C0 \uC54A\uC74C");
      if (accessToken)
        localStorage.removeItem(this.storageTokenKey);
      if (userJson)
        localStorage.removeItem(this.storageUserKey);
      return;
    }
    if (this.jwtHelper.isTokenExpired(accessToken)) {
      console.log("[BaseAuthService] initUser() - \uD1A0\uD070\uC774 \uB9CC\uB8CC\uB428");
      localStorage.removeItem(this.storageTokenKey);
      localStorage.removeItem(this.storageUserKey);
      return;
    }
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        console.log("[BaseAuthService] initUser() - localStorage\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uB85C\uB4DC:", user);
        this.user$.next(user);
        console.log("[BaseAuthService] initUser() - user$ \uC5C5\uB370\uC774\uD2B8 \uC644\uB8CC");
        return;
      } catch (error) {
        console.warn("[BaseAuthService] initUser() - \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD30C\uC2F1 \uC2E4\uD328:", error);
      }
    }
    try {
      const decodedToken = this.jwtHelper.decodeToken(accessToken);
      console.log("[BaseAuthService] initUser() - \uB514\uCF54\uB529\uB41C \uD1A0\uD070:", decodedToken);
      const user = decodedToken.payload || decodedToken;
      console.log("[BaseAuthService] initUser() - JWT\uC5D0\uC11C \uCD94\uCD9C\uD55C \uC0AC\uC6A9\uC790 \uC815\uBCF4:", user);
      this.user$.next(user);
      localStorage.setItem(this.storageUserKey, JSON.stringify(user));
      console.log("[BaseAuthService] initUser() - user$ \uC5C5\uB370\uC774\uD2B8 \uBC0F localStorage \uC800\uC7A5 \uC644\uB8CC");
    } catch (error) {
      console.warn("[BaseAuthService] initUser() - \uD1A0\uD070 \uB514\uCF54\uB529 \uC2E4\uD328:", error);
      localStorage.removeItem(this.storageTokenKey);
      localStorage.removeItem(this.storageUserKey);
    }
  }
  login(loginDto) {
    return this.http.post(this.loginEndpoint, loginDto).pipe(map((response) => {
      console.log("[BaseAuthService] \u{1F50D} RAW \uC751\uB2F5:", JSON.stringify(response, null, 2));
      let user = null;
      let accessToken = "";
      if (response.data?.accessToken && !response.data.user) {
        accessToken = response.data.accessToken;
        console.log("[BaseAuthService] \u2705 \uD328\uD134 1: JWT \uD1A0\uD070 \uBC29\uC2DD (user \uC815\uBCF4\uB294 \uD1A0\uD070\uC5D0 \uD3EC\uD568)");
        try {
          const decodedToken = this.jwtHelper.decodeToken(accessToken);
          if (decodedToken && decodedToken.payload) {
            user = decodedToken.payload;
          } else {
            throw new Error("JWT payload not found");
          }
        } catch (error) {
          throw new Error("Failed to decode JWT token");
        }
      } else if (response.user && response.accessToken) {
        user = response.user;
        accessToken = response.accessToken;
      } else if (response.data?.user && response.data?.accessToken) {
        user = response.data.user;
        accessToken = response.data.accessToken;
      } else if (response.accessToken) {
        accessToken = response.accessToken;
        const _a = response, { accessToken: _ } = _a, userData = __objRest(_a, ["accessToken"]);
        user = userData;
      }
      if (!user) {
        throw new Error("Invalid response structure: user not found");
      }
      if (!accessToken) {
        throw new Error("Invalid response structure: accessToken not found");
      }
      this.setToken(accessToken);
      const mappedUser = this.mapUser(user);
      this.user$.next(mappedUser);
      localStorage.setItem(this.storageUserKey, JSON.stringify(mappedUser));
      return mappedUser;
    }), catchError((error) => {
      throw error;
    }));
  }
  logout() {
    localStorage.removeItem(this.storageTokenKey);
    localStorage.removeItem(this.storageUserKey);
    this.user$.next(null);
    this.router.navigate([this.loginRedirectPath]);
  }
  isAuthenticated() {
    const token = localStorage.getItem(this.storageTokenKey);
    return this.isValidToken(token) && !this.jwtHelper.isTokenExpired(token);
  }
  setToken(token) {
    localStorage.setItem(this.storageTokenKey, token);
  }
  isValidToken(token) {
    if (!token)
      return false;
    const lowerToken = token.toLowerCase().trim();
    if (["undefined", "null", "false", ""].includes(lowerToken))
      return false;
    return /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token);
  }
  mapUser(user) {
    console.log("[BaseAuthService] mapUser() - \uC785\uB825 user:", user);
    if (!user) {
      console.warn("[BaseAuthService] mapUser() - user\uAC00 undefined/null\uC785\uB2C8\uB2E4!");
      throw new Error("User object is undefined or null");
    }
    return __spreadProps(__spreadValues({}, user), {
      createdAt: user.createdAt ? new Date(user.createdAt) : /* @__PURE__ */ new Date(),
      updatedAt: user.updatedAt ? new Date(user.updatedAt) : void 0
    });
  }
};

// src/app/modules/store/services/customer-auth.service.ts
var CustomerAuthService = class _CustomerAuthService extends BaseAuthService {
  http;
  jwtHelper;
  router;
  storageTokenKey = "ez_store_customer_token";
  loginEndpoint = environment2.baseSyncUrl + "/customer/login";
  loginRedirectPath = "/store/login";
  constructor(http, jwtHelper, router) {
    super(http, jwtHelper, router);
    this.http = http;
    this.jwtHelper = jwtHelper;
    this.router = router;
    this.initUser();
  }
  register(signupData) {
    const signupEndpoint = environment2.baseSyncUrl + "/customer/signup";
    return this.http.post(signupEndpoint, signupData).pipe(map(({ user, accessToken }) => {
      this.setToken(accessToken);
      return this.mapUser(user);
    }));
  }
  updateProfile(updateData) {
    const customerId = this.user$.value?.id;
    if (!customerId) {
      throw new Error("\uC0AC\uC6A9\uC790 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778 \uD574\uC8FC\uC138\uC694.");
    }
    const updateEndpoint = environment2.baseSyncUrl + `/customer/profile/${customerId}`;
    return this.http.patch(updateEndpoint, updateData).pipe(map(({ user, accessToken }) => {
      this.setToken(accessToken);
      const mappedUser = this.mapUser(user);
      this.setUser(mappedUser);
      return mappedUser;
    }));
  }
  static \u0275fac = function CustomerAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerAuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(JwtHelperService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerAuthService, factory: _CustomerAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: JwtHelperService }, { type: Router }], null);
})();

// src/app/modules/store/services/admin-auth.service.ts
var AdminAuthService = class _AdminAuthService extends BaseAuthService {
  http;
  jwtHelper;
  router;
  storageTokenKey = "ez_store_admin_token";
  // Admin = User(관리자) - admin/login 엔드포인트 사용 (roleId >= 300 체크)
  loginEndpoint = environment2.baseSyncUrl + "/users/admin/login";
  loginRedirectPath = "/store/admin/login";
  constructor(http, jwtHelper, router) {
    super(http, jwtHelper, router);
    this.http = http;
    this.jwtHelper = jwtHelper;
    this.router = router;
    this.initUser();
  }
  register(signupData) {
    const signupEndpoint = environment2.baseSyncUrl + "/admin/signup";
    return this.http.post(signupEndpoint, signupData).pipe(map(({ user, accessToken }) => {
      this.setToken(accessToken);
      return this.mapUser(user);
    }));
  }
  hasPermission(permission) {
    const user = this.getCurrentUser();
    if (!user)
      return false;
    if (user.role === "SUPER_ADMIN")
      return true;
    return user.permissions?.includes(permission) ?? false;
  }
  isSuperAdmin() {
    const user = this.getCurrentUser();
    return user?.role === "SUPER_ADMIN" || false;
  }
  getAdminList() {
    const endpoint = environment2.baseSyncUrl + "/admin/list";
    return this.http.get(endpoint).pipe(map(({ admins }) => admins));
  }
  updateAdminPermissions(adminId, permissions) {
    const endpoint = environment2.baseSyncUrl + `/admin/${adminId}/permissions`;
    return this.http.put(endpoint, { permissions }).pipe(map(({ user }) => this.mapUser(user)));
  }
  deleteAdmin(adminId) {
    const endpoint = environment2.baseSyncUrl + `/admin/${adminId}`;
    return this.http.delete(endpoint);
  }
  static \u0275fac = function AdminAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(JwtHelperService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthService, factory: _AdminAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: JwtHelperService }, { type: Router }], null);
})();

// src/app/modules/store/services/seller-auth.service.ts
var SellerAuthService = class _SellerAuthService extends BaseAuthService {
  http;
  jwtHelper;
  router;
  storageTokenKey = "ez_store_seller_token";
  loginEndpoint = environment2.baseSyncUrl + "/seller/login";
  loginRedirectPath = "/store/seller/login";
  constructor(http, jwtHelper, router) {
    super(http, jwtHelper, router);
    this.http = http;
    this.jwtHelper = jwtHelper;
    this.router = router;
    this.initUser();
  }
  register(signupData) {
    const signupEndpoint = environment2.baseSyncUrl + "/seller/signup";
    return this.http.post(signupEndpoint, signupData).pipe(map(({ user, accessToken }) => {
      this.setToken(accessToken);
      return this.mapUser(user);
    }));
  }
  updateProfile(updateData) {
    const sellerId = this.user$.value?.userIdx;
    if (!sellerId) {
      throw new Error("\uD310\uB9E4\uC790 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778 \uD574\uC8FC\uC138\uC694.");
    }
    const updateEndpoint = environment2.baseSyncUrl + `/seller/${sellerId}/profile`;
    return this.http.put(updateEndpoint, updateData).pipe(map(({ user }) => {
      const mappedUser = this.mapUser(user);
      this.setUser(mappedUser);
      return mappedUser;
    }));
  }
  updateStore(storeData) {
    const sellerId = this.user$.value?.userIdx;
    if (!sellerId) {
      throw new Error("\uD310\uB9E4\uC790 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB85C\uADF8\uC778 \uD574\uC8FC\uC138\uC694.");
    }
    const storeEndpoint = environment2.baseSyncUrl + `/seller/${sellerId}/store`;
    return this.http.put(storeEndpoint, storeData).pipe(map(({ user }) => {
      const mappedUser = this.mapUser(user);
      this.setUser(mappedUser);
      return mappedUser;
    }));
  }
  static \u0275fac = function SellerAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SellerAuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(JwtHelperService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SellerAuthService, factory: _SellerAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: JwtHelperService }, { type: Router }], null);
})();

// src/app/modules/store/services/auth-mode.service.ts
var AuthModeService = class _AuthModeService {
  router;
  customerAuth;
  sellerAuth;
  adminAuth;
  currentMode$ = new BehaviorSubject("CUSTOMER");
  STORAGE_KEY = "ez_store_auth_mode";
  constructor(router, customerAuth, sellerAuth, adminAuth) {
    this.router = router;
    this.customerAuth = customerAuth;
    this.sellerAuth = sellerAuth;
    this.adminAuth = adminAuth;
    this.initializeMode();
  }
  getCurrentMode$() {
    return this.currentMode$.asObservable();
  }
  getCurrentMode() {
    return this.currentMode$.value;
  }
  switchMode(mode) {
    this.logoutAll();
    this.setMode(mode);
    return of(true);
  }
  logout() {
    this.logoutAll();
    return of(true);
  }
  setMode(mode) {
    this.currentMode$.next(mode);
    localStorage.setItem(this.STORAGE_KEY, mode);
  }
  initializeMode() {
    const savedMode = localStorage.getItem(this.STORAGE_KEY);
    if (savedMode && ["CUSTOMER", "SELLER", "ADMIN"].includes(savedMode)) {
      this.currentMode$.next(savedMode);
    }
  }
  logoutAll() {
    const customerUser = this.customerAuth.getCurrentUser();
    const sellerUser = this.sellerAuth.getCurrentUser();
    const adminUser = this.adminAuth.getCurrentUser();
    if (customerUser) {
      localStorage.removeItem("ez_store_customer_token");
      this.customerAuth.setUser(null);
    }
    if (sellerUser) {
      localStorage.removeItem("ez_store_seller_token");
      this.sellerAuth.setUser(null);
    }
    if (adminUser) {
      localStorage.removeItem("ez_store_admin_token");
      this.adminAuth.setUser(null);
    }
  }
  navigateToLogin(mode) {
    switch (mode) {
      case "CUSTOMER":
        this.router.navigate(["/store/login"]);
        break;
      case "SELLER":
        this.router.navigate(["/store/seller/login"]);
        break;
      case "ADMIN":
        this.router.navigate(["/store/admin/login"]);
        break;
    }
  }
  // 현재 활성 사용자 정보 가져오기 (Observable) - 모드 변경에 반응
  getCurrentUser() {
    console.log("[AuthModeService] getCurrentUser() \uD638\uCD9C\uB428");
    return this.currentMode$.pipe(switchMap((mode) => {
      switch (mode) {
        case "CUSTOMER":
          const customerUser = this.customerAuth.getCurrentUser();
          return this.customerAuth.getNullableUser$();
        case "SELLER":
          const sellerUser = this.sellerAuth.getCurrentUser();
          return this.sellerAuth.getNullableUser$();
        case "ADMIN":
          const adminUser = this.adminAuth.getCurrentUser();
          return this.adminAuth.getNullableUser$();
        default:
          return of(null);
      }
    }));
  }
  // 현재 활성 사용자 정보 가져오기 (동기)
  getCurrentUserSync() {
    const mode = this.getCurrentMode();
    switch (mode) {
      case "CUSTOMER":
        return this.customerAuth.getCurrentUser();
      case "SELLER":
        return this.sellerAuth.getCurrentUser();
      case "ADMIN":
        return this.adminAuth.getCurrentUser();
      default:
        return null;
    }
  }
  // 현재 모드가 인증되었는지 확인 - 모드 변경에 반응
  isAuthenticated() {
    return this.currentMode$.pipe(switchMap((mode) => {
      switch (mode) {
        case "CUSTOMER":
          return of(this.customerAuth.isAuthenticated());
        case "SELLER":
          return of(this.sellerAuth.isAuthenticated());
        case "ADMIN":
          return of(this.adminAuth.isAuthenticated());
        default:
          return of(false);
      }
    }));
  }
  // 모드별 홈 경로 가져오기
  getHomeRoute() {
    const mode = this.getCurrentMode();
    switch (mode) {
      case "CUSTOMER":
        return "/store";
      case "SELLER":
        return "/store/seller/dashboard";
      case "ADMIN":
        return "/store/admin/dashboard";
      default:
        return "/store";
    }
  }
  static \u0275fac = function AuthModeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModeService)(\u0275\u0275inject(Router), \u0275\u0275inject(CustomerAuthService), \u0275\u0275inject(SellerAuthService), \u0275\u0275inject(AdminAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthModeService, factory: _AuthModeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: CustomerAuthService }, { type: SellerAuthService }, { type: AdminAuthService }], null);
})();

// src/app/modules/chat-talk/client/components/chat-widget/chat-widget.component.ts
var _c02 = ["messagesContainer"];
var _c1 = (a0, a1, a2, a3) => ({ "message-client": a0, "message-agent": a1, "message-bot": a2, "message-system": a3 });
function ChatWidgetComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "mat-icon", 18);
    \u0275\u0275text(3, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "\uCC44\uD305\uC0C1\uB2F4\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "\uCC44\uD305\uC0C1\uB2F4 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, "\uAE00\uB85C\uBC8C \uB124\uBE44\uAC8C\uC774\uD130\uC5D0\uC11C \uD65C\uC131\uD654\uD574\uC8FC\uC138\uC694.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 19);
    \u0275\u0275text(11, "\u2699\uFE0F \u2192 \uAE00\uB85C\uBC8C \uAE30\uB2A5 \u2192 \uCC44\uD305\uC0C1\uB2F4 \uD65C\uC131\uD654");
    \u0275\u0275elementEnd()()();
  }
}
function ChatWidgetComponent_div_0_div_16_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_16_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(1, " \uB85C\uADF8\uC778 ");
    \u0275\u0275elementEnd();
  }
}
function ChatWidgetComponent_div_0_div_16_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_16_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeError());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ChatWidgetComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ChatWidgetComponent_div_0_div_16_button_5_Template, 2, 0, "button", 21)(6, ChatWidgetComponent_div_0_div_16_button_6_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage.includes("\uB85C\uADF8\uC778") ? "login" : "error_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage.includes("\uB85C\uADF8\uC778"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.errorMessage.includes("\uB85C\uADF8\uC778"));
  }
}
function ChatWidgetComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "mat-icon", 18);
    \u0275\u0275text(3, "lock_person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "\uCC44\uD305 \uC0C1\uB2F4\uC740 \uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9, "\uB85C\uADF8\uC778\uD558\uC2DC\uBA74 \uC0C1\uB2F4 \uB0B4\uC5ED\uC744 \uC800\uC7A5\uD558\uACE0,");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, "\uB354 \uB098\uC740 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 25)(13, "button", 23);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\uB85C\uADF8\uC778\uD558\uB7EC \uAC00\uAE30");
    \u0275\u0275elementEnd()()()()();
  }
}
function ChatWidgetComponent_div_0_div_18_div_2_div_2_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "smart_toy");
    \u0275\u0275elementEnd();
  }
}
function ChatWidgetComponent_div_0_div_18_div_2_div_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function ChatWidgetComponent_div_0_div_18_div_2_div_2_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
}
function ChatWidgetComponent_div_0_div_18_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, ChatWidgetComponent_div_0_div_18_div_2_div_2_mat_icon_1_Template, 2, 0, "mat-icon", 35)(2, ChatWidgetComponent_div_0_div_18_div_2_div_2_mat_icon_2_Template, 2, 0, "mat-icon", 35)(3, ChatWidgetComponent_div_0_div_18_div_2_div_2_mat_icon_3_Template, 2, 0, "mat-icon", 35);
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r6.senderType === ctx_r1.SenderType.BOT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r6.senderType === ctx_r1.SenderType.AGENT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r6.senderType === ctx_r1.SenderType.SYSTEM);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", message_r6.senderType === ctx_r1.SenderType.BOT ? "\uCC57\uBD07" : message_r6.senderType === ctx_r1.SenderType.AGENT ? "\uC0C1\uB2F4\uC6D0" : "\uC2DC\uC2A4\uD15C", " ");
  }
}
function ChatWidgetComponent_div_0_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275template(2, ChatWidgetComponent_div_0_div_18_div_2_div_2_Template, 6, 4, "div", 31);
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c1, message_r6.senderType === ctx_r1.SenderType.CLIENT, message_r6.senderType === ctx_r1.SenderType.AGENT, message_r6.senderType === ctx_r1.SenderType.BOT, message_r6.senderType === ctx_r1.SenderType.SYSTEM));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", message_r6.senderType !== ctx_r1.SenderType.CLIENT);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r6.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, message_r6.createdAt, "HH:mm"), " ");
  }
}
function ChatWidgetComponent_div_0_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "span")(3, "span")(4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6, "\uC0C1\uB2F4\uC6D0\uC774 \uC785\uB825 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
function ChatWidgetComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26, 0);
    \u0275\u0275template(2, ChatWidgetComponent_div_0_div_18_div_2_Template, 8, 12, "div", 27)(3, ChatWidgetComponent_div_0_div_18_div_3_Template, 7, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.messages)("ngForTrackBy", ctx_r1.trackByMessageId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.agentTyping);
  }
}
function ChatWidgetComponent_div_0_div_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_19_button_1_Template_button_click_0_listener() {
      const reply_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectQuickReply(reply_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reply_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reply_r8, " ");
  }
}
function ChatWidgetComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, ChatWidgetComponent_div_0_div_19_button_1_Template, 2, 1, "button", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.quickReplies);
  }
}
function ChatWidgetComponent_div_0_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "mat-spinner", 49);
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0 \uC911...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 51);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_20_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelSupportRequest());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "\uC5F0\uACB0 \uCDE8\uC18C");
    \u0275\u0275elementEnd()()();
  }
}
function ChatWidgetComponent_div_0_div_20_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_20_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestSupport());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function ChatWidgetComponent_div_0_div_20_div_3_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function ChatWidgetComponent_div_0_div_20_div_3_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 57);
  }
}
function ChatWidgetComponent_div_0_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ChatWidgetComponent_div_0_div_20_div_3_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ChatWidgetComponent_div_0_div_20_div_3_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    })("input", function ChatWidgetComponent_div_0_div_20_div_3_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onInputTyping());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 55);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_div_20_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275template(3, ChatWidgetComponent_div_0_div_20_div_3_mat_icon_3_Template, 2, 0, "mat-icon", 35)(4, ChatWidgetComponent_div_0_div_20_div_3_mat_spinner_4_Template, 1, 0, "mat-spinner", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMessage);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newMessage.trim() || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ChatWidgetComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, ChatWidgetComponent_div_0_div_20_div_1_Template, 10, 0, "div", 44)(2, ChatWidgetComponent_div_0_div_20_button_2_Template, 5, 1, "button", 45)(3, ChatWidgetComponent_div_0_div_20_div_3_Template, 5, 5, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentRoom && ctx_r1.currentRoom.status === ctx_r1.RoomStatus.WAITING_AGENT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentRoom && ctx_r1.currentRoom.status === ctx_r1.RoomStatus.BOT_ACTIVE);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentRoom && ctx_r1.currentRoom.status !== ctx_r1.RoomStatus.WAITING_AGENT);
  }
}
function ChatWidgetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "mat-icon", 5);
    \u0275\u0275text(4, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "h3");
    \u0275\u0275text(7, "\uACE0\uAC1D \uC0C1\uB2F4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275element(9, "span", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
    \u0275\u0275listener("click", function ChatWidgetComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChat());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, ChatWidgetComponent_div_0_div_15_Template, 12, 0, "div", 11)(16, ChatWidgetComponent_div_0_div_16_Template, 7, 4, "div", 12)(17, ChatWidgetComponent_div_0_div_17_Template, 18, 0, "div", 11)(18, ChatWidgetComponent_div_0_div_18_Template, 4, 3, "div", 13)(19, ChatWidgetComponent_div_0_div_19_Template, 2, 1, "div", 14)(20, ChatWidgetComponent_div_0_div_20_Template, 4, 3, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("connected", ctx_r1.isConnected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isConnected ? "\uC5F0\uACB0\uB428" : "\uC5F0\uACB0 \uC911...", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.chatConsultationToggle.isEnabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage && ctx_r1.chatConsultationToggle.isEnabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsLogin && ctx_r1.chatConsultationToggle.isEnabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.needsLogin && ctx_r1.chatConsultationToggle.isEnabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showQuickReplies && ctx_r1.quickReplies.length > 0 && !ctx_r1.needsLogin && ctx_r1.chatConsultationToggle.isEnabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.needsLogin && ctx_r1.chatConsultationToggle.isEnabled());
  }
}
var ChatWidgetComponent = class _ChatWidgetComponent {
  apiService;
  socketService;
  chatBotService;
  customerAuthService;
  adminAuthService;
  sellerAuthService;
  authModeService;
  router;
  dialog;
  organizationId;
  // 스토어 ID
  unreadCountChange = new EventEmitter();
  // 읽지 않은 메시지 수 변경 이벤트
  messagesContainer;
  destroy$ = new Subject();
  typingTimeout;
  // === 상태 ===
  isOpen = false;
  isMinimized = false;
  isConnected = false;
  isLoading = false;
  isLoggedIn = false;
  // 로그인 상태
  needsLogin = false;
  // 로그인 필요 메시지 표시 여부
  // === 채팅 데이터 ===
  currentClient;
  currentRoom;
  messages = [];
  newMessage = "";
  // === UI 상태 ===
  unreadCount = 0;
  isTyping = false;
  agentTyping = false;
  errorMessage = "";
  // === 챗봇 데이터 ===
  quickReplies = [];
  showQuickReplies = false;
  // Enum exports for template
  SenderType = SenderType;
  RoomStatus = RoomStatus;
  // 🐛 디버그 로거
  debugLogger = inject(DebugLoggerService);
  chatConsultationToggle = inject(ChatConsultationToggleService);
  constructor(apiService, socketService, chatBotService, customerAuthService, adminAuthService, sellerAuthService, authModeService, router, dialog) {
    this.apiService = apiService;
    this.socketService = socketService;
    this.chatBotService = chatBotService;
    this.customerAuthService = customerAuthService;
    this.adminAuthService = adminAuthService;
    this.sellerAuthService = sellerAuthService;
    this.authModeService = authModeService;
    this.router = router;
    this.dialog = dialog;
  }
  ngOnInit() {
    this.chatConsultationToggle.enabled$.pipe(takeUntil(this.destroy$)).subscribe((enabled) => {
      this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\u{1F4DE} \uCC44\uD305\uC0C1\uB2F4 \uC0C1\uD0DC \uBCC0\uACBD: ${enabled ? "\uD65C\uC131\uD654" : "\uBE44\uD65C\uC131\uD654"}`);
      if (enabled) {
        if (!this.currentClient) {
          this.initialize();
        }
      } else {
        if (this.socketService.isConnected()) {
          this.socketService.disconnect();
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u{1F50C} Socket \uC5F0\uACB0 \uD574\uC81C\uB428");
        }
      }
    });
    if (this.chatConsultationToggle.isEnabled()) {
      this.initialize();
    } else {
      this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u26A0\uFE0F \uCC44\uD305\uC0C1\uB2F4\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4");
    }
  }
  ngOnDestroy() {
    this.socketService.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }
  /**
   * 초기화
   */
  initialize() {
    return __async(this, null, function* () {
      try {
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u{1F680} \uCC44\uD305 \uC704\uC82F \uCD08\uAE30\uD654 \uC2DC\uC791");
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `organizationId: ${this.organizationId}`);
        const currentMode = this.authModeService.getCurrentMode();
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uD604\uC7AC \uC778\uC99D \uBAA8\uB4DC: ${currentMode || "\uC5C6\uC74C"}`);
        let currentUser = null;
        if (currentMode === "CUSTOMER") {
          currentUser = this.customerAuthService.getCurrentUser();
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uACE0\uAC1D \uBAA8\uB4DC - \uC0AC\uC6A9\uC790: ${currentUser?.name || "\uC5C6\uC74C"}`);
        } else if (currentMode === "ADMIN" || currentMode === "SUPER_ADMIN") {
          currentUser = this.adminAuthService.getCurrentUser();
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uAD00\uB9AC\uC790 \uBAA8\uB4DC - \uC0AC\uC6A9\uC790: ${currentUser?.name || "\uC5C6\uC74C"}`);
        } else if (currentMode === "SELLER") {
          currentUser = this.sellerAuthService.getCurrentUser();
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uD310\uB9E4\uC790 \uBAA8\uB4DC - \uC0AC\uC6A9\uC790: ${currentUser?.name || "\uC5C6\uC74C"}`);
        }
        if (!currentUser) {
          this.debugLogger.warn("\uCC44\uD305\uC704\uC82F", "\u26A0\uFE0F \uB85C\uADF8\uC778\uD558\uC9C0 \uC54A\uC740 \uC0AC\uC6A9\uC790");
          this.isLoggedIn = false;
          this.needsLogin = true;
          return;
        }
        this.isLoggedIn = true;
        this.needsLogin = false;
        this.debugLogger.success("\uCC44\uD305\uC704\uC82F", `\u2705 \uB85C\uADF8\uC778 \uD655\uC778 - ${currentUser.name} (${currentUser.email})`);
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uC0AC\uC6A9\uC790 \uC5ED\uD560: ${JSON.stringify(currentUser.role)}`);
        const fingerprintData = this.generateFingerprintData();
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u{1F511} \uD551\uAC70\uD504\uB9B0\uD2B8 \uC0DD\uC131 \uC644\uB8CC");
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uD551\uAC70\uD504\uB9B0\uD2B8 \uC815\uBCF4: ${fingerprintData.platform} | ${fingerprintData.screen}`);
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u{1F4DE} \uBC31\uC5D4\uB4DC API \uD638\uCD9C - \uACE0\uAC1D \uC2DD\uBCC4");
        const response = yield this.apiService.identifyCustomerWithObject({
          fingerprintData,
          pluginKey: this.organizationId,
          userName: currentUser?.name,
          // 사용자 이름 추가
          userEmail: currentUser?.email
          // 사용자 이메일 추가
        }).toPromise();
        this.debugLogger.success("\uCC44\uD305\uC704\uC82F", `\u2705 \uACE0\uAC1D \uC2DD\uBCC4 \uC644\uB8CC - clientId: ${response?.client?.id}`);
        this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uC804\uB2EC - ${currentUser?.name} (${currentUser?.email})`);
        if (response?.client) {
          this.currentClient = response.client;
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uD074\uB77C\uC774\uC5B8\uD2B8 \uC815\uBCF4 \uC800\uC7A5 - ${response.client.name || response.client.id}`);
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u{1F504} \uCC44\uD305\uBC29 \uC124\uC815 \uC2DC\uC791");
          yield this.setupChatRoom();
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", "\u{1F50C} WebSocket \uC5F0\uACB0 \uC2DC\uC791");
          yield this.connectWebSocket();
          this.quickReplies = this.chatBotService.getQuickReplies();
          this.debugLogger.info("\uCC44\uD305\uC704\uC82F", `\uBE60\uB978 \uB2F5\uC7A5 \uB85C\uB4DC: ${this.quickReplies.length}\uAC1C`);
          this.debugLogger.success("\uCC44\uD305\uC704\uC82F", "\u{1F389} \uCC44\uD305 \uC704\uC82F \uCD08\uAE30\uD654 \uC644\uB8CC!");
        }
      } catch (error) {
        this.debugLogger.error("\uCC44\uD305\uC704\uC82F", `\u274C \uCD08\uAE30\uD654 \uC2E4\uD328: ${error.message || error}`);
        this.debugLogger.error("\uCC44\uD305\uC704\uC82F", `\uC5D0\uB7EC \uC0C1\uC138: status=${error.status}, ${JSON.stringify(error.error || {})}`);
        this.errorMessage = "\uCC44\uD305\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.";
      }
    });
  }
  /**
   * 채팅방 설정
   */
  setupChatRoom() {
    return __async(this, null, function* () {
      if (!this.currentClient) {
        this.debugLogger.error("\uCC44\uD305\uBC29\uC124\uC815", "\u274C \uD074\uB77C\uC774\uC5B8\uD2B8 \uC815\uBCF4 \uC5C6\uC74C");
        return;
      }
      try {
        this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\u{1F4CB} \uCC44\uD305\uBC29 \uC870\uD68C \uC2DC\uC791 - clientId: ${this.currentClient.id}`);
        const rooms = yield this.apiService.getClientRooms(this.currentClient.id).toPromise();
        this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\uC870\uD68C \uACB0\uACFC: ${rooms?.length || 0}\uAC1C \uCC44\uD305\uBC29 \uBC1C\uACAC`);
        const activeRooms = rooms?.filter((room) => room.status !== RoomStatus.RESOLVED && room.status !== RoomStatus.CLOSED) || [];
        this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\u{1F3AF}\u{1F3AF}\u{1F3AF} \uD65C\uC131 \uCC44\uD305\uBC29 \uD544\uD130\uB9C1 \uACB0\uACFC: ${activeRooms.length}\uAC1C (\uC804\uCCB4: ${rooms?.length || 0}\uAC1C)`);
        if (rooms && rooms.length > 0) {
          this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\u{1F4CB} \uC804\uCCB4 \uCC44\uD305\uBC29 \uC0C1\uD0DC: ${rooms.map((r) => r.status).join(", ")}`);
        }
        if (activeRooms.length > 0) {
          this.currentRoom = activeRooms[0];
          this.debugLogger.success("\uCC44\uD305\uBC29\uC124\uC815", `\u2705\u2705\u2705 \uAE30\uC874 \uD65C\uC131 \uCC44\uD305\uBC29 \uC7AC\uC0AC\uC6A9 - roomId: ${this.currentRoom.id}`);
          this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\uCC44\uD305\uBC29 \uC0C1\uD0DC: ${this.currentRoom.status}`);
          this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", "\u{1F4E8} \uBA54\uC2DC\uC9C0 \uB85C\uB4DC \uC2DC\uC791");
          yield this.loadMessages();
        } else {
          this.debugLogger.warn("\uCC44\uD305\uBC29\uC124\uC815", "\u26A0\uFE0F\u26A0\uFE0F\u26A0\uFE0F \uD65C\uC131 \uCC44\uD305\uBC29 \uC5C6\uC74C - \uC0C8 \uCC44\uD305\uBC29 \uC0DD\uC131 \uC2DC\uC791");
          try {
            const response = yield this.apiService.createRoomWithOrganization({
              clientId: this.currentClient.id,
              organizationId: this.organizationId
            }).toPromise();
            this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `API \uC751\uB2F5: ${JSON.stringify(response)}`);
            const newRoom = response?.room || response;
            if (!newRoom || !newRoom.id) {
              this.debugLogger.error("\uCC44\uD305\uBC29\uC124\uC815", "\u274C \uCC44\uD305\uBC29 \uC0DD\uC131 \uC2E4\uD328 - \uC751\uB2F5 \uB370\uC774\uD130 \uC5C6\uC74C");
              this.debugLogger.warn("\uCC44\uD305\uBC29\uC124\uC815", "\u26A0\uFE0F \uBC31\uC5D4\uB4DC API \uBBF8\uAD6C\uD604 - \uC784\uC2DC \uCC44\uD305\uBC29 \uC0DD\uC131");
              const tempRoomId = "temp-room-" + Date.now();
              this.currentRoom = {
                id: tempRoomId,
                clientId: this.currentClient.id,
                organizationId: this.organizationId,
                status: RoomStatus.BOT_ACTIVE,
                createdAt: /* @__PURE__ */ new Date()
              };
              this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\u{1F4A1} \uC784\uC2DC \uCC44\uD305\uBC29 \uC0DD\uC131 - roomId: ${tempRoomId}`);
            } else {
              this.currentRoom = newRoom;
              this.debugLogger.success("\uCC44\uD305\uBC29\uC124\uC815", `\u2705 \uC0C8 \uCC44\uD305\uBC29 \uC0DD\uC131 \uC644\uB8CC - roomId: ${newRoom.id}`);
            }
            const welcomeMessage = {
              id: "welcome-" + Date.now(),
              roomId: this.currentRoom.id,
              senderType: SenderType.BOT,
              content: "\uC548\uB155\uD558\uC138\uC694! \uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?",
              createdAt: /* @__PURE__ */ new Date()
            };
            this.messages.push(welcomeMessage);
            this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", "\u{1F4AC} \uD658\uC601 \uBA54\uC2DC\uC9C0 \uCD94\uAC00");
          } catch (createError) {
            this.debugLogger.error("\uCC44\uD305\uBC29\uC124\uC815", `\u274C \uCC44\uD305\uBC29 \uC0DD\uC131 API \uC624\uB958: ${createError?.message}`);
            this.debugLogger.warn("\uCC44\uD305\uBC29\uC124\uC815", "\u26A0\uFE0F \uC784\uC2DC \uCC44\uD305\uBC29\uC73C\uB85C \uACC4\uC18D \uC9C4\uD589");
            const tempRoomId = "temp-room-" + Date.now();
            this.currentRoom = {
              id: tempRoomId,
              clientId: this.currentClient.id,
              organizationId: this.organizationId,
              status: RoomStatus.BOT_ACTIVE,
              createdAt: /* @__PURE__ */ new Date()
            };
            this.debugLogger.info("\uCC44\uD305\uBC29\uC124\uC815", `\u{1F4A1} \uC784\uC2DC \uCC44\uD305\uBC29 \uC0DD\uC131 - roomId: ${tempRoomId}`);
            const welcomeMessage = {
              id: "welcome-" + Date.now(),
              roomId: tempRoomId,
              senderType: SenderType.BOT,
              content: "\uC548\uB155\uD558\uC138\uC694! \uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694? (\uC624\uD504\uB77C\uC778 \uBAA8\uB4DC)",
              createdAt: /* @__PURE__ */ new Date()
            };
            this.messages.push(welcomeMessage);
          }
        }
      } catch (error) {
        this.debugLogger.error("\uCC44\uD305\uBC29\uC124\uC815", `\u274C \uCC44\uD305\uBC29 \uC124\uC815 \uC2E4\uD328: ${error.message || error}`);
      }
    });
  }
  /**
  * 메시지 로드
  */
  loadMessages() {
    return __async(this, null, function* () {
      if (!this.currentRoom) {
        this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uB85C\uB4DC", "\u26A0\uFE0F \uCC44\uD305\uBC29 \uC815\uBCF4 \uC5C6\uC74C");
        return;
      }
      try {
        this.debugLogger.info("\uBA54\uC2DC\uC9C0\uB85C\uB4DC", `\u{1F4E8} \uBA54\uC2DC\uC9C0 \uC870\uD68C - roomId: ${this.currentRoom.id}`);
        const messages = yield this.apiService.getRoomMessages(this.currentRoom.id).toPromise();
        if (messages) {
          this.messages = messages;
          this.debugLogger.success("\uBA54\uC2DC\uC9C0\uB85C\uB4DC", `\u2705 \uBA54\uC2DC\uC9C0 \uB85C\uB4DC \uC644\uB8CC: ${messages.length}\uAC1C`);
          this.scrollToBottom();
        } else {
          this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uB85C\uB4DC", "\u26A0\uFE0F \uBA54\uC2DC\uC9C0 \uC5C6\uC74C");
        }
      } catch (error) {
        this.debugLogger.error("\uBA54\uC2DC\uC9C0\uB85C\uB4DC", `\u274C \uBA54\uC2DC\uC9C0 \uB85C\uB4DC \uC2E4\uD328: ${error.message || error}`);
      }
    });
  }
  /**
   * WebSocket 연결
   */
  connectWebSocket() {
    return __async(this, null, function* () {
      if (!this.currentClient || !this.currentRoom) {
        this.debugLogger.warn("WebSocket", "\u26A0\uFE0F \uD074\uB77C\uC774\uC5B8\uD2B8 \uB610\uB294 \uCC44\uD305\uBC29 \uC815\uBCF4 \uC5C6\uC74C");
        return;
      }
      this.debugLogger.info("WebSocket", "\u{1F50C} WebSocket \uC5F0\uACB0 \uC2DC\uC791");
      try {
        yield this.socketService.connect();
        this.debugLogger.success("WebSocket", "\u2705 WebSocket \uC5F0\uACB0 \uC131\uACF5");
        const isConnected = this.socketService.isConnected();
        this.debugLogger.info("WebSocket", `\u{1F4CA} \uC5F0\uACB0 \uC0C1\uD0DC: ${isConnected ? "\uC5F0\uACB0\uB428" : "\uC5F0\uACB0 \uC548\uB428"}`);
        if (!isConnected) {
          this.debugLogger.error("WebSocket", "\u274C \uC5F0\uACB0 \uC2E4\uD328 - isConnected() = false");
          this.isConnected = false;
          return;
        }
        this.debugLogger.info("WebSocket", `\u{1F4E4} \uD074\uB77C\uC774\uC5B8\uD2B8 \uB4F1\uB85D - clientId: ${this.currentClient.id}, roomId: ${this.currentRoom.id}`);
        this.socketService.registerClient(this.currentClient.id, this.currentRoom.id);
        this.debugLogger.info("WebSocket", `\u{1F4E4} \uCC44\uD305\uBC29 \uCC38\uC5EC \uC694\uCCAD - roomId: ${this.currentRoom.id}, clientId: ${this.currentClient.id}`);
        this.socketService.joinRoom(this.currentRoom.id, this.currentClient.id);
        this.isConnected = true;
        this.debugLogger.success("WebSocket", `\u2705 \uCC44\uD305\uBC29 \uCC38\uC5EC \uC644\uB8CC - roomId: ${this.currentRoom.id}`);
        this.socketService.onAnyEvent((eventName, data) => {
          this.debugLogger.info("\uC18C\uCF13\uC774\uBCA4\uD2B8", `\u{1F3AF} ${eventName}`);
        });
      } catch (error) {
        this.debugLogger.error("WebSocket", `\u274C WebSocket \uC5F0\uACB0 \uC2E4\uD328: ${error}`);
        this.isConnected = false;
        return;
      }
      this.socketService.onEvent("createChat").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC218\uC2E0", `\u{1F3AF}\u{1F3AF}\u{1F3AF} createChat \uC774\uBCA4\uD2B8 \uC218\uC2E0: ${JSON.stringify(event)}`);
        if (event && event.chat && event.chat.roomId === this.currentRoom?.id) {
          this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC218\uC2E0", `\u{1F4E5} \uC0C8 \uBA54\uC2DC\uC9C0 \uB3C4\uCC29 - ${event.chat.senderType}: ${event.chat.content?.substring(0, 20)}...`);
          const exists = this.messages.find((m) => m.id === event.chat.id);
          if (exists) {
            this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uC218\uC2E0", "\u26A0\uFE0F \uC911\uBCF5 \uBA54\uC2DC\uC9C0 \uBB34\uC2DC");
            return;
          }
          this.messages.push(event.chat);
          this.scrollToBottom();
          if (!this.isOpen) {
            this.unreadCount++;
            this.unreadCountChange.emit(this.unreadCount);
            this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC218\uC2E0", `\uC77D\uC9C0 \uC54A\uC740 \uBA54\uC2DC\uC9C0: ${this.unreadCount}\uAC1C`);
          }
        } else {
          this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uC218\uC2E0", `\u26A0\uFE0F \uB2E4\uB978 \uCC44\uD305\uBC29\uC758 \uBA54\uC2DC\uC9C0 (\uD604\uC7AC: ${this.currentRoom?.id}, \uC218\uC2E0: ${event?.chat?.roomId})`);
        }
      });
      this.socketService.onEvent("assignAgent").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.debugLogger.success("\uC0C1\uB2F4\uC6D0\uBC30\uC815", `\u2705 \uC0C1\uB2F4\uC6D0 \uBC30\uC815\uB428 - agentId: ${event.agentId}`);
        if (event && this.currentRoom) {
          this.currentRoom.status = RoomStatus.AGENT_ACTIVE;
          this.currentRoom.agentId = event.agentId;
          this.showQuickReplies = false;
          const systemMsg = {
            id: "system-" + Date.now(),
            roomId: this.currentRoom.id,
            senderType: SenderType.SYSTEM,
            content: "\uC0C1\uB2F4\uC6D0\uC774 \uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
            createdAt: /* @__PURE__ */ new Date()
          };
          this.messages.push(systemMsg);
          this.scrollToBottom();
          this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uBC30\uC815", "\u{1F4AC} \uC0C1\uB2F4 \uC2DC\uC791 \uAC00\uB2A5");
        }
      });
      this.socketService.onEvent("agentTyping").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event && event.roomId === this.currentRoom?.id) {
          this.agentTyping = event.isTyping;
        }
      });
      this.socketService.onEvent("roomClosed").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.debugLogger.info("\uC0C1\uB2F4\uC885\uB8CC", `\u{1F6AA} \uC0C1\uB2F4\uC6D0\uC774 \uC0C1\uB2F4\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4 - roomId: ${event.roomId}`);
        if (event && event.roomId === this.currentRoom?.id) {
          const systemMsg = {
            id: "system-" + Date.now(),
            roomId: this.currentRoom.id,
            senderType: SenderType.SYSTEM,
            content: "\uC0C1\uB2F4\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.",
            createdAt: /* @__PURE__ */ new Date()
          };
          this.messages.push(systemMsg);
          this.scrollToBottom();
          if (this.currentRoom) {
            this.currentRoom.status = RoomStatus.RESOLVED;
            this.currentRoom.agentId = void 0;
          }
          this.debugLogger.info("\uC0C1\uB2F4\uC885\uB8CC", "\u2705 \uC0C1\uB2F4 \uC885\uB8CC \uCC98\uB9AC \uC644\uB8CC");
          setTimeout(() => {
            this.debugLogger.info("\uC0C1\uB2F4\uC885\uB8CC", "\u{1F504} \uCC44\uD305 \uC704\uC82F \uCD08\uAE30\uD654");
          }, 3e3);
        } else {
        }
      });
      this.socketService.onEvent("error").pipe(takeUntil(this.destroy$)).subscribe((error) => {
        if (error) {
          this.errorMessage = "\uC5F0\uACB0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
        }
      });
    });
  }
  /**
   * 채팅 토글
   */
  toggleChat() {
    this.isOpen = !this.isOpen;
    this.debugLogger.info("\uCC44\uD305\uD1A0\uAE00", `\u{1F4AC} \uCC44\uD305\uCC3D ${this.isOpen ? "\uC5F4\uB9BC" : "\uB2EB\uD798"}`);
    if (this.isOpen) {
      this.unreadCount = 0;
      this.unreadCountChange.emit(0);
      this.debugLogger.info("\uCC44\uD305\uD1A0\uAE00", "\u{1F4ED} \uC77D\uC9C0 \uC54A\uC740 \uBA54\uC2DC\uC9C0 \uCD08\uAE30\uD654");
      const currentMode = this.authModeService.getCurrentMode();
      let currentUser = null;
      if (currentMode === "CUSTOMER") {
        currentUser = this.customerAuthService.getCurrentUser();
      } else if (currentMode === "ADMIN" || currentMode === "SUPER_ADMIN") {
        currentUser = this.adminAuthService.getCurrentUser();
      } else if (currentMode === "SELLER") {
        currentUser = this.sellerAuthService.getCurrentUser();
      }
      if (!currentUser) {
        this.isLoggedIn = false;
        this.needsLogin = true;
        this.debugLogger.warn("\uCC44\uD305\uD1A0\uAE00", "\u26A0\uFE0F \uB85C\uADF8\uC778 \uD544\uC694 - \uB85C\uADF8\uC778 \uC548\uB0B4 \uD45C\uC2DC");
      } else if (!this.isLoggedIn && currentUser) {
        this.isLoggedIn = true;
        this.needsLogin = false;
        this.debugLogger.info("\uCC44\uD305\uD1A0\uAE00", "\u{1F504} \uB85C\uADF8\uC778 \uD655\uC778 \uC644\uB8CC - \uCC44\uD305 \uC7AC\uCD08\uAE30\uD654");
        this.initialize();
      }
      this.scrollToBottom();
    }
  }
  /**
   * 로그인 페이지로 이동
   */
  goToLogin() {
    this.router.navigate(["/store/login"], {
      queryParams: { returnUrl: this.router.url }
    });
  }
  /**
   * 메시지 전송
   */
  sendMessage() {
    return __async(this, null, function* () {
      if (!this.newMessage.trim() || !this.currentRoom || !this.currentClient) {
        this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u26A0\uFE0F \uBA54\uC2DC\uC9C0 \uB0B4\uC6A9 \uB610\uB294 \uCC44\uD305\uBC29 \uC815\uBCF4 \uC5C6\uC74C");
        return;
      }
      if (this.isLoading) {
        this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u26A0\uFE0F \uC774\uBBF8 \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uC911...");
        return;
      }
      this.isLoading = true;
      const messageContent = this.newMessage.trim();
      this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC804\uC1A1", `\u{1F4E4} \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uC2DC\uC791: "${messageContent.substring(0, 30)}..."`);
      this.newMessage = "";
      this.showQuickReplies = false;
      const tempMessage = {
        id: "temp-" + Date.now(),
        roomId: this.currentRoom.id,
        senderId: this.currentClient.id,
        senderType: SenderType.CLIENT,
        content: messageContent,
        createdAt: /* @__PURE__ */ new Date()
      };
      this.messages.push(tempMessage);
      this.scrollToBottom();
      this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u{1F4AC} UI\uC5D0 \uC784\uC2DC \uBA54\uC2DC\uC9C0 \uCD94\uAC00 \uC644\uB8CC");
      try {
        if (this.currentRoom.status === RoomStatus.BOT_ACTIVE) {
          this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u{1F916} \uCC57\uBD07 \uBAA8\uB4DC - \uC790\uB3D9 \uC751\uB2F5 \uC0DD\uC131 \uC911");
          const botResponse = yield this.chatBotService.processMessage(messageContent);
          this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u{1F50C} WebSocket\uC73C\uB85C \uBA54\uC2DC\uC9C0 \uC804\uC1A1 (createChat)");
          this.socketService.emitEvent("createChat", {
            dto: {
              roomId: this.currentRoom.id,
              senderId: this.currentClient.id,
              senderType: SenderType.CLIENT,
              content: messageContent
            },
            localId: tempMessage.id
          });
          this.debugLogger.success("\uBA54\uC2DC\uC9C0\uC804\uC1A1", `\u2705 \uCC57\uBD07 \uC751\uB2F5 \uC218\uC2E0: "${botResponse.message.substring(0, 30)}..."`);
          setTimeout(() => {
            const botMessage = {
              id: "bot-" + Date.now(),
              roomId: this.currentRoom.id,
              senderType: SenderType.BOT,
              content: botResponse.message,
              createdAt: /* @__PURE__ */ new Date()
            };
            this.messages.push(botMessage);
            this.scrollToBottom();
            if (botResponse.quickReplies && botResponse.quickReplies.length > 0) {
              this.quickReplies = botResponse.quickReplies;
              this.showQuickReplies = true;
              this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC804\uC1A1", `\u{1F4A1} \uBE60\uB978 \uB2F5\uC7A5 \uD45C\uC2DC: ${botResponse.quickReplies.length}\uAC1C`);
            }
          }, 500);
        } else {
          this.debugLogger.info("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u{1F464} \uC0C1\uB2F4\uC6D0 \uBAA8\uB4DC - \uC2E4\uC2DC\uAC04 \uC804\uC1A1");
          try {
            const savedMessage = yield this.apiService.sendMessage({
              roomId: this.currentRoom.id,
              senderId: this.currentClient.id,
              senderType: SenderType.CLIENT,
              content: messageContent
            }).toPromise();
            this.debugLogger.success("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u2705 \uBA54\uC2DC\uC9C0 DB \uC800\uC7A5 \uC644\uB8CC");
            if (savedMessage) {
              const tempIndex = this.messages.findIndex((m) => m.id === tempMessage.id);
              if (tempIndex !== -1) {
                this.messages[tempIndex] = savedMessage;
              }
            }
          } catch (apiError) {
            this.debugLogger.warn("\uBA54\uC2DC\uC9C0\uC804\uC1A1", `\u26A0\uFE0F API \uC800\uC7A5 \uC2E4\uD328 (Socket\uC73C\uB85C\uB9CC \uC804\uC1A1): ${apiError}`);
          }
          this.socketService.emitEvent("createChat", {
            dto: {
              roomId: this.currentRoom.id,
              senderId: this.currentClient.id,
              senderType: SenderType.CLIENT,
              content: messageContent
            },
            localId: tempMessage.id
          });
          this.debugLogger.success("\uBA54\uC2DC\uC9C0\uC804\uC1A1", "\u2705 \uC0C1\uB2F4\uC6D0\uC5D0\uAC8C \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uC644\uB8CC (createChat)");
        }
      } catch (error) {
        this.debugLogger.error("\uBA54\uC2DC\uC9C0\uC804\uC1A1", `\u274C \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uC2E4\uD328: ${error}`);
        this.errorMessage = "\uBA54\uC2DC\uC9C0 \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      } finally {
        this.isLoading = false;
      }
    });
  }
  /**
   * 빠른 답장 선택
   */
  selectQuickReply(reply) {
    this.newMessage = reply;
    this.sendMessage();
  }
  /**
   * 상담원 요청
   */
  requestSupport() {
    return __async(this, null, function* () {
      if (!this.currentRoom || !this.currentClient) {
        this.debugLogger.warn("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u26A0\uFE0F \uCC44\uD305\uBC29 \uB610\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8 \uC815\uBCF4 \uC5C6\uC74C");
        return;
      }
      this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u{1F64B} \uC0C1\uB2F4\uC6D0 \uC5F0\uACB0 \uC694\uCCAD \uC2DC\uC791");
      const isTempRoom = this.currentRoom.id.toString().startsWith("temp-room");
      if (isTempRoom) {
        this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u{1F4DD} \uC784\uC2DC \uCC44\uD305\uBC29 - WebSocket\uC73C\uB85C \uC9C1\uC811 \uC5F0\uACB0");
      }
      try {
        this.isLoading = true;
        if (!isTempRoom) {
          this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u{1F4E1} \uC11C\uBC84\uC5D0 \uC0C1\uB2F4\uC6D0 \uC804\uD658 \uC694\uCCAD (REST API)");
          try {
            yield this.apiService.transferToAgent(this.currentRoom.id).toPromise();
            this.debugLogger.success("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u2705 REST API \uD638\uCD9C \uC131\uACF5");
          } catch (apiError) {
            this.debugLogger.warn("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u26A0\uFE0F REST API \uC2E4\uD328 - WebSocket\uC73C\uB85C \uACC4\uC18D \uC9C4\uD589");
          }
        } else {
          this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u23ED\uFE0F \uC784\uC2DC \uCC44\uD305\uBC29 - REST API \uC2A4\uD0B5");
        }
        this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u{1F50C} WebSocket requestSupport \uC774\uBCA4\uD2B8 \uC804\uC1A1");
        this.socketService.requestSupport(this.currentRoom.id);
        this.currentRoom.status = RoomStatus.WAITING_AGENT;
        this.showQuickReplies = false;
        this.debugLogger.info("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", `\u{1F4CA} \uCC44\uD305\uBC29 \uC0C1\uD0DC \uBCC0\uACBD: ${RoomStatus.WAITING_AGENT}`);
        const systemMsg = {
          id: "system-" + Date.now(),
          roomId: this.currentRoom.id,
          senderType: SenderType.SYSTEM,
          content: "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0\uC744 \uC694\uCCAD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694.",
          createdAt: /* @__PURE__ */ new Date()
        };
        this.messages.push(systemMsg);
        this.scrollToBottom();
        this.debugLogger.success("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", "\u2705 \uC0C1\uB2F4\uC6D0 \uC5F0\uACB0 \uC694\uCCAD \uC644\uB8CC");
      } catch (error) {
        this.debugLogger.error("\uC0C1\uB2F4\uC6D0\uC694\uCCAD", `\u274C \uC0C1\uB2F4\uC6D0 \uC694\uCCAD \uC2E4\uD328: ${error}`);
        this.errorMessage = "\uC0C1\uB2F4 \uC694\uCCAD\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
      } finally {
        this.isLoading = false;
      }
    });
  }
  /**
   * 상담원 연결 요청 취소
   */
  cancelSupportRequest() {
    if (!this.currentRoom)
      return;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "360px",
      data: {
        title: "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0 \uCDE8\uC18C",
        message: "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?\n\uCC57\uBD07 \uC0C1\uB2F4\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4.",
        confirmText: "\uCDE8\uC18C\uD558\uAE30",
        cancelText: "\uACC4\uC18D \uB300\uAE30"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.currentRoom.status = RoomStatus.BOT_ACTIVE;
        this.showQuickReplies = true;
        const cancelMsg = {
          id: "system-" + Date.now(),
          roomId: this.currentRoom.id,
          senderType: SenderType.SYSTEM,
          content: "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uCC57\uBD07 \uC0C1\uB2F4\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4.",
          createdAt: /* @__PURE__ */ new Date()
        };
        this.messages.push(cancelMsg);
        this.scrollToBottom();
        this.socketService.emitEvent("cancelSupportRequest", {
          roomId: this.currentRoom.id
        });
      }
    });
  }
  /**
   * 타이핑 감지
   */
  onInputTyping() {
    if (!this.currentRoom)
      return;
    if (!this.isTyping) {
      this.isTyping = true;
      this.socketService.emitEvent("userStartedTyping", { roomId: this.currentRoom.id });
    }
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    this.typingTimeout = setTimeout(() => {
      this.isTyping = false;
      this.socketService.emitEvent("userStoppedTyping", { roomId: this.currentRoom.id });
    }, 1e3);
  }
  /**
   * 자동 스크롤
   */
  scrollToBottom() {
    setTimeout(() => {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
  /**
   * 브라우저 핑거프린트 데이터 생성 (백엔드 DTO 형식)
   */
  generateFingerprintData() {
    const nav = window.navigator;
    const screen2 = window.screen;
    return {
      userAgent: nav.userAgent,
      language: nav.language,
      platform: nav.platform,
      screen: `${screen2.width}x${screen2.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      canvas: this.generateCanvasFingerprint(),
      memory: nav.deviceMemory || "unknown",
      cores: nav.hardwareConcurrency || "unknown",
      cookieEnabled: nav.cookieEnabled,
      doNotTrack: nav.doNotTrack || "unspecified",
      timestamp: Date.now()
    };
  }
  /**
   * Canvas 핑거프린트 생성
   */
  generateCanvasFingerprint() {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return "no-canvas";
      canvas.width = 200;
      canvas.height = 50;
      ctx.textBaseline = "top";
      ctx.font = "14px Arial";
      ctx.fillText("Browser Fingerprint", 10, 10);
      return canvas.toDataURL().substring(0, 100);
    } catch (e) {
      return "canvas-error";
    }
  }
  /**
   * 브라우저 핑거프린트 생성 (기존 방식 - deprecated)
   */
  generateFingerprint() {
    const data = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      platform: navigator.platform
    };
    return btoa(JSON.stringify(data));
  }
  /**
   * 메시지 트래킹 함수
   */
  trackByMessageId(index, message) {
    return message.id;
  }
  /**
   * 에러 닫기
   */
  closeError() {
    this.errorMessage = "";
  }
  static \u0275fac = function ChatWidgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatWidgetComponent)(\u0275\u0275directiveInject(ChatTalkApiService), \u0275\u0275directiveInject(ChatTalkSocketService), \u0275\u0275directiveInject(ChatBotService), \u0275\u0275directiveInject(CustomerAuthService), \u0275\u0275directiveInject(AdminAuthService), \u0275\u0275directiveInject(SellerAuthService), \u0275\u0275directiveInject(AuthModeService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatWidgetComponent, selectors: [["app-chat-widget"]], viewQuery: function ChatWidgetComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, inputs: { organizationId: "organizationId" }, outputs: { unreadCountChange: "unreadCountChange" }, standalone: false, decls: 1, vars: 1, consts: [["messagesContainer", ""], ["class", "chat-window", 4, "ngIf"], [1, "chat-window"], [1, "chat-header"], [1, "header-info"], [1, "store-icon"], [1, "header-text"], [1, "status"], [1, "status-dot"], [1, "header-actions"], ["mat-icon-button", "", 1, "close-button", 3, "click"], ["class", "login-required-container", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], ["class", "messages-container", 4, "ngIf"], ["class", "quick-replies", 4, "ngIf"], ["class", "chat-input-container", 4, "ngIf"], [1, "login-required-container"], [1, "login-required-content"], [1, "login-icon"], [1, "login-benefit"], [1, "error-banner"], ["mat-raised-button", "", "color", "primary", "class", "login-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "login-button", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "login-actions"], [1, "messages-container"], ["class", "message-wrapper", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "typing-indicator", 4, "ngIf"], [1, "message-wrapper", 3, "ngClass"], [1, "message-bubble"], ["class", "message-sender", 4, "ngIf"], [1, "message-content"], [1, "message-time"], [1, "message-sender"], [4, "ngIf"], [1, "sender-name"], [1, "typing-indicator"], [1, "typing-bubble"], [1, "typing-text"], [1, "quick-replies"], ["class", "quick-reply-button", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-reply-button", 3, "click"], [1, "chat-input-container"], ["class", "waiting-agent-status", 4, "ngIf"], ["class", "request-support-button", 3, "disabled", "click", 4, "ngIf"], ["class", "input-wrapper", 4, "ngIf"], [1, "waiting-agent-status"], [1, "waiting-content"], ["diameter", "24"], [1, "waiting-text"], ["mat-stroked-button", "", "color", "warn", 1, "cancel-support-button", 3, "click"], [1, "request-support-button", 3, "click", "disabled"], [1, "input-wrapper"], ["type", "text", "placeholder", "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694...", 1, "chat-input", 3, "ngModelChange", "keyup.enter", "input", "ngModel", "disabled"], [1, "send-button", 3, "click", "disabled"], ["diameter", "20", 4, "ngIf"], ["diameter", "20"]], template: function ChatWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ChatWidgetComponent_div_0_Template, 21, 9, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatIconButton, MatIcon, MatProgressSpinner, DatePipe], styles: ["\n\n.chat-window[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 380px;\n  height: 600px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.chat-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .store-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.9;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ffa726;\n  animation: _ngcontent-%COMP%_blink 2s infinite;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .status.connected[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #66bb6a;\n  animation: none;\n}\n.chat-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n  25%, 75% {\n    opacity: 0.4;\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #ffcdd2;\n}\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.error-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.error-banner[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  background: #667eea !important;\n  color: white !important;\n  font-size: 12px;\n  padding: 8px 16px;\n  height: 32px;\n  line-height: 16px;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n  transition: all 0.2s;\n}\n.error-banner[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover {\n  background: #5568d3 !important;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n  transform: translateY(-1px);\n}\n.error-banner[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.error-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.login-required-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  padding: 32px 24px;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 280px;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   .login-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #667eea;\n  margin: 0 auto 16px;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   .login-benefit[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  font-size: 13px;\n  color: #999;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   .login-actions[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 15px;\n  font-weight: 500;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   .login-actions[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.login-required-container[_ngcontent-%COMP%]   .login-required-content[_ngcontent-%COMP%]   .login-actions[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  background: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  animation: _ngcontent-%COMP%_messageSlideIn 0.3s ease;\n}\n.message-wrapper.message-client[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.message-wrapper.message-client[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 18px 18px 4px 18px;\n}\n.message-wrapper.message-agent[_ngcontent-%COMP%], \n.message-wrapper.message-bot[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message-wrapper.message-agent[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%], \n.message-wrapper.message-bot[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: white;\n  color: #333;\n  border-radius: 18px 18px 18px 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n}\n.message-wrapper.message-system[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.message-wrapper.message-system[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 12px;\n  font-size: 13px;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_messageSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 10px 14px;\n  word-wrap: break-word;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n  font-size: 12px;\n  opacity: 0.8;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%]   .sender-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.4;\n  white-space: pre-wrap;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n  margin-top: 4px;\n  text-align: right;\n}\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.typing-indicator[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px 16px;\n  border-radius: 18px;\n  display: flex;\n  gap: 4px;\n}\n.typing-indicator[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #999;\n  animation: _ngcontent-%COMP%_typing 1.4s infinite;\n}\n.typing-indicator[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.typing-indicator[_ngcontent-%COMP%]   .typing-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.7;\n  }\n  30% {\n    transform: translateY(-10px);\n    opacity: 1;\n  }\n}\n.quick-replies[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quick-replies[_ngcontent-%COMP%]   .quick-reply-button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #f5f5f5;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  font-size: 13px;\n  color: #667eea;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.quick-replies[_ngcontent-%COMP%]   .quick-reply-button[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n  border-color: #667eea;\n}\n.chat-input-container[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.chat-input-container[_ngcontent-%COMP%]   .request-support-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.chat-input-container[_ngcontent-%COMP%]   .request-support-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.chat-input-container[_ngcontent-%COMP%]   .request-support-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.chat-input-container[_ngcontent-%COMP%]   .request-support-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 24px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chat-input-container[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n@media (max-width: 768px) {\n  .chat-window[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    bottom: 0;\n    right: 0;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=chat-widget.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatWidgetComponent, [{
    type: Component,
    args: [{ selector: "app-chat-widget", standalone: false, template: `<!-- \uCC44\uD305 \uCC3D -->
<div *ngIf="isOpen" class="chat-window">
  <!-- \uD5E4\uB354 -->
  <div class="chat-header">
    <div class="header-info">
      <mat-icon class="store-icon">store</mat-icon>
      <div class="header-text">
        <h3>\uACE0\uAC1D \uC0C1\uB2F4</h3>
        <span class="status" [class.connected]="isConnected">
          <span class="status-dot"></span>
          {{ isConnected ? '\uC5F0\uACB0\uB428' : '\uC5F0\uACB0 \uC911...' }}
        </span>
      </div>
    </div>
    <div class="header-actions">
      <button mat-icon-button (click)="toggleChat()" class="close-button">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  </div>

  <!-- \uCC44\uD305\uC0C1\uB2F4 \uBE44\uD65C\uC131\uD654 \uBA54\uC2DC\uC9C0 -->
  <div class="login-required-container" *ngIf="!chatConsultationToggle.isEnabled()">
    <div class="login-required-content">
      <mat-icon class="login-icon">chat_bubble_outline</mat-icon>
      <h3>\uCC44\uD305\uC0C1\uB2F4\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4</h3>
      <p>\uCC44\uD305\uC0C1\uB2F4 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74<br>\uAE00\uB85C\uBC8C \uB124\uBE44\uAC8C\uC774\uD130\uC5D0\uC11C \uD65C\uC131\uD654\uD574\uC8FC\uC138\uC694.</p>
      <p class="login-benefit">\u2699\uFE0F \u2192 \uAE00\uB85C\uBC8C \uAE30\uB2A5 \u2192 \uCC44\uD305\uC0C1\uB2F4 \uD65C\uC131\uD654</p>
    </div>
  </div>

  <!-- \uC5D0\uB7EC \uBC30\uB108 -->
  <div class="error-banner" *ngIf="errorMessage && chatConsultationToggle.isEnabled()">
    <mat-icon>{{ errorMessage.includes('\uB85C\uADF8\uC778') ? 'login' : 'error_outline' }}</mat-icon>
    <span>{{ errorMessage }}</span>
    <button 
      mat-raised-button 
      color="primary" 
      class="login-button"
      *ngIf="errorMessage.includes('\uB85C\uADF8\uC778')"
      (click)="goToLogin()">
      \uB85C\uADF8\uC778
    </button>
    <button mat-icon-button (click)="closeError()" *ngIf="!errorMessage.includes('\uB85C\uADF8\uC778')">
      <mat-icon>close</mat-icon>
    </button>
  </div>

  <!-- \uB85C\uADF8\uC778 \uD544\uC694 \uBA54\uC2DC\uC9C0 -->
  <div class="login-required-container" *ngIf="needsLogin && chatConsultationToggle.isEnabled()">
    <div class="login-required-content">
      <mat-icon class="login-icon">lock_person</mat-icon>
      <h3>\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4</h3>
      <p>\uCC44\uD305 \uC0C1\uB2F4\uC740 \uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <p class="login-benefit">\uB85C\uADF8\uC778\uD558\uC2DC\uBA74 \uC0C1\uB2F4 \uB0B4\uC5ED\uC744 \uC800\uC7A5\uD558\uACE0,<br>\uB354 \uB098\uC740 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="login-actions">
        <button 
          mat-raised-button 
          color="primary" 
          class="login-button"
          (click)="goToLogin()">
          <mat-icon>login</mat-icon>
          <span>\uB85C\uADF8\uC778\uD558\uB7EC \uAC00\uAE30</span>
        </button>
      </div>
    </div>
  </div>

  <!-- \uBA54\uC2DC\uC9C0 \uBAA9\uB85D -->
  <div class="messages-container" #messagesContainer *ngIf="!needsLogin && chatConsultationToggle.isEnabled()">
    <div class="message-wrapper" 
         *ngFor="let message of messages; trackBy: trackByMessageId"
         [ngClass]="{
           'message-client': message.senderType === SenderType.CLIENT,
           'message-agent': message.senderType === SenderType.AGENT,
           'message-bot': message.senderType === SenderType.BOT,
           'message-system': message.senderType === SenderType.SYSTEM
         }">
      
      <!-- \uBA54\uC2DC\uC9C0 \uBC84\uBE14 -->
      <div class="message-bubble">
        <!-- \uBC1C\uC2E0\uC790 \uC815\uBCF4 (\uC0C1\uB2F4\uC6D0/\uBD07) -->
        <div class="message-sender" *ngIf="message.senderType !== SenderType.CLIENT">
          <mat-icon *ngIf="message.senderType === SenderType.BOT">smart_toy</mat-icon>
          <mat-icon *ngIf="message.senderType === SenderType.AGENT">person</mat-icon>
          <mat-icon *ngIf="message.senderType === SenderType.SYSTEM">info</mat-icon>
          <span class="sender-name">
            {{ message.senderType === SenderType.BOT ? '\uCC57\uBD07' : 
               message.senderType === SenderType.AGENT ? '\uC0C1\uB2F4\uC6D0' : '\uC2DC\uC2A4\uD15C' }}
          </span>
        </div>

        <!-- \uBA54\uC2DC\uC9C0 \uB0B4\uC6A9 -->
        <div class="message-content">{{ message.content }}</div>

        <!-- \uC2DC\uAC04 -->
        <div class="message-time">
          {{ message.createdAt | date:'HH:mm' }}
        </div>
      </div>
    </div>

    <!-- \uD0C0\uC774\uD551 \uC778\uB514\uCF00\uC774\uD130 -->
    <div class="typing-indicator" *ngIf="agentTyping">
      <div class="typing-bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="typing-text">\uC0C1\uB2F4\uC6D0\uC774 \uC785\uB825 \uC911...</span>
    </div>
  </div>

  <!-- \uBE60\uB978 \uB2F5\uC7A5 -->
  <div class="quick-replies" *ngIf="showQuickReplies && quickReplies.length > 0 && !needsLogin && chatConsultationToggle.isEnabled()">
    <button 
      *ngFor="let reply of quickReplies" 
      class="quick-reply-button"
      (click)="selectQuickReply(reply)">
      {{ reply }}
    </button>
  </div>

  <!-- \uC785\uB825 \uC601\uC5ED -->
  <div class="chat-input-container" *ngIf="!needsLogin && chatConsultationToggle.isEnabled()">
    <!-- \uC0C1\uB2F4\uC6D0 \uB300\uAE30 \uC911 \uC0C1\uD0DC -->
    <div 
      *ngIf="currentRoom && currentRoom.status === RoomStatus.WAITING_AGENT"
      class="waiting-agent-status">
      <div class="waiting-content">
        <mat-spinner diameter="24"></mat-spinner>
        <span class="waiting-text">\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0 \uC911...</span>
      </div>
      <button 
        mat-stroked-button
        color="warn"
        class="cancel-support-button"
        (click)="cancelSupportRequest()">
        <mat-icon>close</mat-icon>
        <span>\uC5F0\uACB0 \uCDE8\uC18C</span>
      </button>
    </div>

    <!-- \uC0C1\uB2F4\uC6D0 \uC694\uCCAD \uBC84\uD2BC (BOT \uBAA8\uB4DC\uC77C \uB54C\uB9CC) -->
    <button 
      *ngIf="currentRoom && currentRoom.status === RoomStatus.BOT_ACTIVE"
      class="request-support-button"
      (click)="requestSupport()"
      [disabled]="isLoading">
      <mat-icon>support_agent</mat-icon>
      <span>\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0</span>
    </button>

    <!-- \uC785\uB825 \uD3FC -->
    <div class="input-wrapper" *ngIf="currentRoom && currentRoom.status !== RoomStatus.WAITING_AGENT">
      <input 
        type="text"
        class="chat-input"
        [(ngModel)]="newMessage"
        (keyup.enter)="sendMessage()"
        (input)="onInputTyping()"
        placeholder="\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694..."
        [disabled]="isLoading" />
      
      <button 
        class="send-button"
        (click)="sendMessage()"
        [disabled]="!newMessage.trim() || isLoading">
        <mat-icon *ngIf="!isLoading">send</mat-icon>
        <mat-spinner *ngIf="isLoading" diameter="20"></mat-spinner>
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/chat-talk/client/components/chat-widget/chat-widget.component.scss */\n.chat-window {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 380px;\n  height: 600px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n  overflow: hidden;\n  animation: slideIn 0.3s ease;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.chat-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.chat-header .header-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.chat-header .header-info .store-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.chat-header .header-info .header-text h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.chat-header .header-info .header-text .status {\n  font-size: 12px;\n  opacity: 0.9;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chat-header .header-info .header-text .status .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ffa726;\n  animation: blink 2s infinite;\n}\n.chat-header .header-info .header-text .status.connected .status-dot {\n  background: #66bb6a;\n  animation: none;\n}\n.chat-header .header-actions .close-button {\n  color: white;\n}\n@keyframes blink {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n  25%, 75% {\n    opacity: 0.4;\n  }\n}\n.error-banner {\n  background: #ffebee;\n  color: #c62828;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #ffcdd2;\n}\n.error-banner mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.error-banner span {\n  flex: 1;\n  line-height: 1.4;\n}\n.error-banner .login-button {\n  background: #667eea !important;\n  color: white !important;\n  font-size: 12px;\n  padding: 8px 16px;\n  height: 32px;\n  line-height: 16px;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n  transition: all 0.2s;\n}\n.error-banner .login-button:hover {\n  background: #5568d3 !important;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n  transform: translateY(-1px);\n}\n.error-banner .login-button:active {\n  transform: translateY(0);\n}\n.error-banner button {\n  color: #c62828;\n}\n.login-required-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  padding: 32px 24px;\n}\n.login-required-container .login-required-content {\n  text-align: center;\n  max-width: 280px;\n}\n.login-required-container .login-required-content .login-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #667eea;\n  margin: 0 auto 16px;\n}\n.login-required-container .login-required-content h3 {\n  margin: 0 0 12px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n}\n.login-required-container .login-required-content p {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n.login-required-container .login-required-content .login-benefit {\n  margin-bottom: 24px;\n  font-size: 13px;\n  color: #999;\n}\n.login-required-container .login-required-content .login-actions .login-button {\n  width: 100%;\n  height: 48px;\n  font-size: 15px;\n  font-weight: 500;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n}\n.login-required-container .login-required-content .login-actions .login-button mat-icon {\n  margin-right: 8px;\n}\n.login-required-container .login-required-content .login-actions .login-button:hover {\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.messages-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  background: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.messages-container::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n.messages-container::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.messages-container::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n.message-wrapper {\n  display: flex;\n  animation: messageSlideIn 0.3s ease;\n}\n.message-wrapper.message-client {\n  justify-content: flex-end;\n}\n.message-wrapper.message-client .message-bubble {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 18px 18px 4px 18px;\n}\n.message-wrapper.message-agent,\n.message-wrapper.message-bot {\n  justify-content: flex-start;\n}\n.message-wrapper.message-agent .message-bubble,\n.message-wrapper.message-bot .message-bubble {\n  background: white;\n  color: #333;\n  border-radius: 18px 18px 18px 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n}\n.message-wrapper.message-system {\n  justify-content: center;\n}\n.message-wrapper.message-system .message-bubble {\n  background: #fff3e0;\n  color: #e65100;\n  border-radius: 12px;\n  font-size: 13px;\n  text-align: center;\n}\n@keyframes messageSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.message-bubble {\n  max-width: 75%;\n  padding: 10px 14px;\n  word-wrap: break-word;\n}\n.message-bubble .message-sender {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n  font-size: 12px;\n  opacity: 0.8;\n}\n.message-bubble .message-sender mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.message-bubble .message-sender .sender-name {\n  font-weight: 600;\n}\n.message-bubble .message-content {\n  font-size: 14px;\n  line-height: 1.4;\n  white-space: pre-wrap;\n}\n.message-bubble .message-time {\n  font-size: 11px;\n  opacity: 0.7;\n  margin-top: 4px;\n  text-align: right;\n}\n.typing-indicator {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.typing-indicator .typing-bubble {\n  background: white;\n  padding: 12px 16px;\n  border-radius: 18px;\n  display: flex;\n  gap: 4px;\n}\n.typing-indicator .typing-bubble span {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #999;\n  animation: typing 1.4s infinite;\n}\n.typing-indicator .typing-bubble span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator .typing-bubble span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.typing-indicator .typing-text {\n  font-size: 12px;\n  color: #666;\n}\n@keyframes typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.7;\n  }\n  30% {\n    transform: translateY(-10px);\n    opacity: 1;\n  }\n}\n.quick-replies {\n  padding: 12px 16px;\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.quick-replies .quick-reply-button {\n  padding: 8px 16px;\n  background: #f5f5f5;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  font-size: 13px;\n  color: #667eea;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.quick-replies .quick-reply-button:hover {\n  background: #667eea;\n  color: white;\n  border-color: #667eea;\n}\n.chat-input-container {\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.chat-input-container .request-support-button {\n  width: 100%;\n  padding: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.chat-input-container .request-support-button:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.chat-input-container .request-support-button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.chat-input-container .request-support-button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.chat-input-container .input-wrapper {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.chat-input-container .input-wrapper .chat-input {\n  flex: 1;\n  padding: 10px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 24px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.chat-input-container .input-wrapper .chat-input:focus {\n  border-color: #667eea;\n}\n.chat-input-container .input-wrapper .chat-input::placeholder {\n  color: #999;\n}\n.chat-input-container .input-wrapper .chat-input:disabled {\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.chat-input-container .input-wrapper .send-button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.chat-input-container .input-wrapper .send-button:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n.chat-input-container .input-wrapper .send-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chat-input-container .input-wrapper .send-button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n@media (max-width: 768px) {\n  .chat-window {\n    width: 100%;\n    height: 100%;\n    bottom: 0;\n    right: 0;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=chat-widget.component.css.map */\n"] }]
  }], () => [{ type: ChatTalkApiService }, { type: ChatTalkSocketService }, { type: ChatBotService }, { type: CustomerAuthService }, { type: AdminAuthService }, { type: SellerAuthService }, { type: AuthModeService }, { type: Router }, { type: MatDialog }], { organizationId: [{
    type: Input
  }], unreadCountChange: [{
    type: Output
  }], messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatWidgetComponent, { className: "ChatWidgetComponent", filePath: "src/app/modules/chat-talk/client/components/chat-widget/chat-widget.component.ts", lineNumber: 32 });
})();
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  data;
  constructor(data) {
    this.data = data;
  }
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], standalone: false, decls: 11, vars: 6, consts: [[1, "confirm-dialog"], ["mat-dialog-title", ""], [2, "white-space", "pre-line"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-dialog-actions", 3)(7, "button", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.message);
      \u0275\u0275advance(2);
      \u0275\u0275property("mat-dialog-close", false);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.cancelText || "\uCDE8\uC18C", " ");
      \u0275\u0275advance();
      \u0275\u0275property("mat-dialog-close", true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.confirmText || "\uD655\uC778", " ");
    }
  }, dependencies: [MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButton], styles: ["\n\n.confirm-dialog[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\nmat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.6;\n  color: rgba(0, 0, 0, 0.87);\n}\n/*# sourceMappingURL=chat-widget.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: false, template: `
    <div class="confirm-dialog">
      <h2 mat-dialog-title>{{ data.title }}</h2>
      <mat-dialog-content>
        <p style="white-space: pre-line;">{{ data.message }}</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button [mat-dialog-close]="false">
          {{ data.cancelText || '\uCDE8\uC18C' }}
        </button>
        <button mat-raised-button color="warn" [mat-dialog-close]="true">
          {{ data.confirmText || '\uD655\uC778' }}
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;3a455503429e77042e7ab1317202406a5dc3f99e7c3fddedbf7f5a9d51d5eaff;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/chat-talk/client/components/chat-widget/chat-widget.component.ts */\n.confirm-dialog {\n  min-width: 300px;\n}\nmat-dialog-content {\n  padding: 20px 0;\n}\nmat-dialog-content p {\n  margin: 0;\n  line-height: 1.6;\n  color: rgba(0, 0, 0, 0.87);\n}\n/*# sourceMappingURL=chat-widget.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/modules/chat-talk/client/components/chat-widget/chat-widget.component.ts", lineNumber: 929 });
})();

// src/app/modules/chat-talk/chat-talk.module.ts
var ChatTalkModule = class _ChatTalkModule {
  static \u0275fac = function ChatTalkModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatTalkModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    ChatTalkRoutingModule,
    SharedModule,
    // Forms
    ReactiveFormsModule,
    FormsModule,
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatChipsModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ChatTalkComponent,
        ChatTalkLoginComponent,
        ChatWidgetComponent,
        ConfirmDialogComponent
      ],
      imports: [
        CommonModule,
        RouterModule,
        ChatTalkRoutingModule,
        SharedModule,
        // Forms
        ReactiveFormsModule,
        FormsModule,
        // Material
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatChipsModule,
        MatTooltipModule,
        MatMenuModule,
        MatDividerModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      exports: [
        ChatTalkComponent,
        ChatWidgetComponent
      ]
    }]
  }], null, null);
})();

export {
  CustomerAuthService,
  SellerAuthService,
  AdminAuthService,
  AuthModeService,
  ChatWidgetComponent,
  ChatTalkModule
};
//# sourceMappingURL=chunk-YIHTJDNE.js.map
