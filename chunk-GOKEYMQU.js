import {
  ButtonLogic,
  ChatbotActionService,
  ChatbotAnswer,
  ChatbotButton,
  ChatbotQuestion,
  ChatflowLogicContext,
  ChatflowLogicContextManagerService,
  EndLogic,
  ListenLogic,
  QuestionLogic,
  SpeakLogic,
  SplitLogic,
  StartLogic
} from "./chunk-UWP5KICM.js";
import {
  MatToolbarModule
} from "./chunk-CAM35WIM.js";
import {
  MatProgressBarModule
} from "./chunk-2I7KWCCU.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-NZXI4AK5.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-ER3JRRHZ.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-VN4H2GKT.js";
import {
  CryptoUtil
} from "./chunk-G2D7UUZA.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-3USWDC62.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DZVWUGGM.js";
import {
  confirmAsync
} from "./chunk-3K7JROJF.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-XGFL2WJQ.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import {
  environment
} from "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
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
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule,
  MatFabButton,
  MatIconButton,
  Overlay
} from "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-BE5X2S7S.js";
import {
  DomSanitizer,
  HttpClient
} from "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  Directive,
  ElementRef,
  ErrorHandler,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Observable,
  Output,
  Pipe,
  Subject,
  Subscription,
  ViewChild,
  ViewContainerRef,
  debounceTime,
  from,
  fromEvent,
  inject,
  input,
  model,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵsetComponentScope,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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

// src/app/modules/expedition/services/expedition-auth.service.ts
var ExpeditionAuthService = class _ExpeditionAuthService {
  router;
  debugLogger;
  STORAGE_KEY = "expedition_auth_user";
  // environment에서 암호화된 인증 정보를 복호화하여 사용
  ADMIN_USERNAME = CryptoUtil.decrypt(environment.auth.username);
  ADMIN_PASSWORD = CryptoUtil.decrypt(environment.auth.password);
  currentUserSubject;
  currentUser$;
  constructor(router, debugLogger) {
    this.router = router;
    this.debugLogger = debugLogger;
    const savedUser = this.loadUserFromStorage();
    this.currentUserSubject = new BehaviorSubject(savedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  /**
   * 로컬 스토리지에서 사용자 정보 로드
   */
  loadUserFromStorage() {
    try {
      const userJson = localStorage.getItem(this.STORAGE_KEY);
      if (userJson) {
        const user = JSON.parse(userJson);
        user.loginTime = new Date(user.loginTime);
        return user;
      }
    } catch (error) {
      console.warn("Failed to load user from storage", error);
    }
    return null;
  }
  /**
   * 로컬 스토리지에 사용자 정보 저장
   */
  saveUserToStorage(user) {
    try {
      if (user) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    } catch (error) {
      console.warn("Failed to save user to storage", error);
    }
  }
  /**
   * 로그인 - environment에서 중앙 관리되는 계정 사용
   */
  login(username, password) {
    this.debugLogger.info("ExpeditionAuth", "login \uD638\uCD9C\uB428");
    this.debugLogger.info("ExpeditionAuth", `\uC785\uB825 username: ${username}`);
    if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
      this.debugLogger.success("ExpeditionAuth", "\u2705 \uC778\uC99D \uC131\uACF5!");
      const expeditionUser = {
        username: this.ADMIN_USERNAME,
        loginTime: /* @__PURE__ */ new Date()
      };
      this.currentUserSubject.next(expeditionUser);
      this.saveUserToStorage(expeditionUser);
      this.debugLogger.info("ExpeditionAuth", `\uC800\uC7A5 \uC644\uB8CC - isLoggedIn: ${this.isLoggedIn()}`);
      return true;
    }
    this.debugLogger.error("ExpeditionAuth", "\u274C \uC778\uC99D \uC2E4\uD328");
    return false;
  }
  /**
   * 로그아웃
   */
  logout() {
    console.log("[ExpeditionAuth] \uB85C\uADF8\uC544\uC6C3");
    try {
      this.currentUserSubject.next(null);
      this.saveUserToStorage(null);
    } catch (error) {
      console.error("[ExpeditionAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/expedition/login"]).catch((err) => {
        console.error("[ExpeditionAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/expedition/login";
      });
    }
  }
  /**
   * 현재 로그인 여부 확인
   */
  isLoggedIn() {
    return this.currentUserSubject.value !== null;
  }
  /**
   * 현재 사용자 정보 가져오기
   */
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  /**
   * 사용자 이름 가져오기
   */
  getUsername() {
    const user = this.getCurrentUser();
    return user?.username || "";
  }
  static \u0275fac = function ExpeditionAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionAuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(DebugLoggerService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpeditionAuthService, factory: _ExpeditionAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: DebugLoggerService }], null);
})();

// src/app/modules/expedition/pages/expedition/expedition.component.ts
var ExpeditionComponent = class _ExpeditionComponent {
  authService;
  router;
  username = "";
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.username = this.authService.getUsername();
  }
  /**
   * 로그아웃 처리 (비동기)
   */
  onLogout() {
    return __async(this, null, function* () {
      console.warn("[ExpeditionComponent] \uB85C\uADF8\uC544\uC6C3 \uC2DC\uB3C4");
      const confirmed = yield confirmAsync("\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?");
      console.warn("[ExpeditionComponent] confirmAsync \uACB0\uACFC:", confirmed);
      if (confirmed) {
        console.warn("[ExpeditionComponent] \uB85C\uADF8\uC544\uC6C3 \uD655\uC778\uB428");
        this.authService.logout();
        console.warn("[ExpeditionComponent] authService.logout() \uC644\uB8CC");
        console.warn("[ExpeditionComponent] /expedition/login\uC73C\uB85C \uC774\uB3D9");
        this.router.navigate(["/expedition/login"]);
      } else {
        console.warn("[ExpeditionComponent] \uB85C\uADF8\uC544\uC6C3 \uCDE8\uC18C\uB428");
      }
    });
  }
  static \u0275fac = function ExpeditionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionComponent)(\u0275\u0275directiveInject(ExpeditionAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpeditionComponent, selectors: [["app-expedition"]], standalone: false, decls: 2, vars: 0, consts: [[1, "expedition-container"]], template: function ExpeditionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n.expedition-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .expedition-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n  }\n  .expedition-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .expedition-header[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .expedition-header[_ngcontent-%COMP%]   .user-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .expedition-main[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=expedition.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionComponent, [{
    type: Component,
    args: [{ selector: "app-expedition", standalone: false, template: '<div class="expedition-container">\n  <router-outlet></router-outlet>\n</div>\n', styles: ["/* src/app/modules/expedition/pages/expedition/expedition.component.scss */\n.expedition-container {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .expedition-header .header-content {\n    flex-direction: column;\n    gap: 20px;\n  }\n  .expedition-header .title-section {\n    text-align: center;\n  }\n  .expedition-header .title-section h1 {\n    font-size: 2rem;\n  }\n  .expedition-header .user-section {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .expedition-main {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=expedition.component.css.map */\n"] }]
  }], () => [{ type: ExpeditionAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpeditionComponent, { className: "ExpeditionComponent", filePath: "src/app/modules/expedition/pages/expedition/expedition.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/pages/apps-launcher/apps-launcher.component.ts
function AppsLauncherComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function AppsLauncherComponent_div_7_Template_div_click_0_listener() {
      const app_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.launchApp(app_r2));
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", !app_r2.available);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("available", app_r2.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAppStatusText(app_r2), " ");
  }
}
var AppsLauncherComponent = class _AppsLauncherComponent {
  router;
  apps = [
    {
      id: "chatflow",
      name: "\u{1F4AC} \uCC57\uD50C\uB85C\uC6B0",
      description: "\uB300\uD654\uD615 \uC2A4\uD1A0\uB9AC\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694",
      icon: "\u{1F4AC}",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      route: "/expedition/chatflow",
      available: true
    },
    {
      id: "journal",
      name: "\u{1F4DD} \uC800\uB110",
      description: "\uC7A5\uAE30 \uD504\uB85C\uC81D\uD2B8\uB97C \uCD94\uC801\uD558\uACE0 \uAD00\uB9AC\uD558\uC138\uC694",
      icon: "\u{1F4DD}",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      route: "/expedition/journal",
      available: false
    },
    {
      id: "gallery",
      name: "\u{1F5BC}\uFE0F \uAC24\uB7EC\uB9AC",
      description: "\uC5EC\uC815\uC758 \uC0AC\uC9C4\uACFC \uC601\uC0C1\uC744 \uBAA8\uC544\uBCF4\uC138\uC694",
      icon: "\u{1F5BC}\uFE0F",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      route: "/expedition/gallery",
      available: false
    },
    {
      id: "timeline",
      name: "\u23F0 \uD0C0\uC784\uB77C\uC778",
      description: "\uC2DC\uAC04\uC21C\uC73C\uB85C \uC5EC\uC815\uC744 \uB418\uB3CC\uC544\uBCF4\uC138\uC694",
      icon: "\u23F0",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      route: "/expedition/timeline",
      available: false
    },
    {
      id: "map",
      name: "\u{1F5FA}\uFE0F \uC9C0\uB3C4",
      description: "\uC5EC\uD589\uD55C \uC7A5\uC18C\uB97C \uC9C0\uB3C4\uC5D0 \uD45C\uC2DC\uD558\uC138\uC694",
      icon: "\u{1F5FA}\uFE0F",
      color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      route: "/expedition/map",
      available: false
    }
  ];
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    console.warn("[AppsLauncher] \uC571 \uB7F0\uCC98 \uCD08\uAE30\uD654");
  }
  /**
   * 앱 실행
   */
  launchApp(app) {
    if (!app.available) {
      console.warn("[AppsLauncher] \uC544\uC9C1 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uC571:", app.name);
      alert(`${app.name}\uC740(\uB294) \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.`);
      return;
    }
    console.warn("[AppsLauncher] \uC571 \uC2E4\uD589:", app.name, "\u2192", app.route);
    this.router.navigate([app.route]);
  }
  /**
   * 앱 상태 확인
   */
  getAppStatusText(app) {
    return app.available ? "\uC2E4\uD589" : "\uC900\uBE44 \uC911";
  }
  static \u0275fac = function AppsLauncherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppsLauncherComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppsLauncherComponent, selectors: [["app-apps-launcher"]], standalone: false, decls: 8, vars: 1, consts: [[1, "apps-launcher-container"], [1, "launcher-header"], [1, "subtitle"], [1, "apps-grid"], ["class", "app-card", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "app-card", 3, "click"], [1, "app-icon"], [1, "app-name"], [1, "app-description"], [1, "app-status"], [1, "status-badge"]], template: function AppsLauncherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "\u{1F5FA}\uFE0F \uC6D0\uC815\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "\uB2F9\uC2E0\uC758 \uC5EC\uC815\uC744 \uB2E4\uC591\uD55C \uBC29\uC2DD\uC73C\uB85C \uAE30\uB85D\uD558\uC138\uC694");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "main", 3);
      \u0275\u0275template(7, AppsLauncherComponent_div_7_Template, 10, 8, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.apps);
    }
  }, dependencies: [NgForOf], styles: ['\n\n.apps-launcher-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n}\n.launcher-header[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin-bottom: 50px;\n}\n.launcher-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0;\n  font-weight: 700;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.launcher-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin: 15px 0 0 0;\n  opacity: 0.95;\n}\n.apps-grid[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  padding: 20px;\n}\n.app-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 16px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.app-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--app-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.app-card[_ngcontent-%COMP%]:hover:not(.disabled) {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.app-card[_ngcontent-%COMP%]:hover:not(.disabled)::before {\n  opacity: 1;\n}\n.app-card[_ngcontent-%COMP%]:hover:not(.disabled)   .app-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotate(5deg);\n}\n.app-card[_ngcontent-%COMP%]:hover:not(.disabled)   .status-badge.available[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transform: scale(1.05);\n}\n.app-card.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.app-card.disabled[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.app-card[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n  display: block;\n}\n.app-card[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: #1f2937;\n}\n.app-card[_ngcontent-%COMP%]   .app-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #6b7280;\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n  min-height: 44px;\n}\n.app-card[_ngcontent-%COMP%]   .app-status[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n.app-card[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 16px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.app-card[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]:not(.available) {\n  background: rgba(156, 163, 175, 0.15);\n  color: #9ca3af;\n  border: 1px solid rgba(156, 163, 175, 0.2);\n}\n.app-card[_ngcontent-%COMP%]   .status-badge.available[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n  border: 1px solid rgba(102, 126, 234, 0.3);\n  font-weight: 700;\n}\n.app-card[_ngcontent-%COMP%]:nth-child(1) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.app-card[_ngcontent-%COMP%]:nth-child(2) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.app-card[_ngcontent-%COMP%]:nth-child(3) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n}\n.app-card[_ngcontent-%COMP%]:nth-child(4) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n}\n.app-card[_ngcontent-%COMP%]:nth-child(5) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n}\n.app-card[_ngcontent-%COMP%]:nth-child(6) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #30cfd0 0%,\n      #330867 100%);\n}\n@media (max-width: 768px) {\n  .launcher-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .launcher-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .apps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    padding: 10px;\n  }\n  .app-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .app-card[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .app-card[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .app-card[_ngcontent-%COMP%]   .app-description[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=apps-launcher.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppsLauncherComponent, [{
    type: Component,
    args: [{ selector: "app-apps-launcher", standalone: false, template: '<div class="apps-launcher-container">\n  <header class="launcher-header">\n    <h1>\u{1F5FA}\uFE0F \uC6D0\uC815\uB300</h1>\n    <p class="subtitle">\uB2F9\uC2E0\uC758 \uC5EC\uC815\uC744 \uB2E4\uC591\uD55C \uBC29\uC2DD\uC73C\uB85C \uAE30\uB85D\uD558\uC138\uC694</p>\n  </header>\n\n  <main class="apps-grid">\n    <div \n      *ngFor="let app of apps" \n      class="app-card"\n      [class.disabled]="!app.available"\n      (click)="launchApp(app)"\n    >\n      <div class="app-icon">{{ app.icon }}</div>\n      <h4 class="app-name">{{ app.name }}</h4>\n      <p class="app-description">{{ app.description }}</p>\n      <div class="app-status">\n        <span class="status-badge" [class.available]="app.available">\n          {{ getAppStatusText(app) }}\n        </span>\n      </div>\n    </div>\n  </main>\n</div>\n', styles: ['/* src/app/modules/expedition/pages/apps-launcher/apps-launcher.component.scss */\n.apps-launcher-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n}\n.launcher-header {\n  text-align: center;\n  color: white;\n  margin-bottom: 50px;\n}\n.launcher-header h1 {\n  font-size: 3rem;\n  margin: 0;\n  font-weight: 700;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.launcher-header .subtitle {\n  font-size: 1.3rem;\n  margin: 15px 0 0 0;\n  opacity: 0.95;\n}\n.apps-grid {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  padding: 20px;\n}\n.app-card {\n  background: rgba(255, 255, 255, 0.95);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 16px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.app-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--app-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.app-card:hover:not(.disabled) {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.app-card:hover:not(.disabled)::before {\n  opacity: 1;\n}\n.app-card:hover:not(.disabled) .app-icon {\n  transform: scale(1.15) rotate(5deg);\n}\n.app-card:hover:not(.disabled) .status-badge.available {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transform: scale(1.05);\n}\n.app-card.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.app-card.disabled::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.app-card .app-icon {\n  font-size: 3rem;\n  margin-bottom: 16px;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n  display: block;\n}\n.app-card .app-name {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: #1f2937;\n}\n.app-card .app-description {\n  font-size: 0.95rem;\n  color: #6b7280;\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n  min-height: 44px;\n}\n.app-card .app-status {\n  padding-top: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n.app-card .status-badge {\n  display: inline-block;\n  padding: 6px 16px;\n  border-radius: 16px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  transition: all 0.3s ease;\n  letter-spacing: 0.5px;\n}\n.app-card .status-badge:not(.available) {\n  background: rgba(156, 163, 175, 0.15);\n  color: #9ca3af;\n  border: 1px solid rgba(156, 163, 175, 0.2);\n}\n.app-card .status-badge.available {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n  border: 1px solid rgba(102, 126, 234, 0.3);\n  font-weight: 700;\n}\n.app-card:nth-child(1) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.app-card:nth-child(2) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.app-card:nth-child(3) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n}\n.app-card:nth-child(4) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n}\n.app-card:nth-child(5) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n}\n.app-card:nth-child(6) {\n  --app-gradient:\n    linear-gradient(\n      135deg,\n      #30cfd0 0%,\n      #330867 100%);\n}\n@media (max-width: 768px) {\n  .launcher-header h1 {\n    font-size: 2rem;\n  }\n  .launcher-header .subtitle {\n    font-size: 1rem;\n  }\n  .apps-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    padding: 10px;\n  }\n  .app-card {\n    padding: 20px;\n  }\n  .app-card .app-icon {\n    font-size: 2.5rem;\n  }\n  .app-card .app-name {\n    font-size: 1.2rem;\n  }\n  .app-card .app-description {\n    font-size: 0.9rem;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=apps-launcher.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppsLauncherComponent, { className: "AppsLauncherComponent", filePath: "src/app/modules/expedition/pages/apps-launcher/apps-launcher.component.ts", lineNumber: 20 });
})();

// src/app/modules/expedition/modules/chatbot/components/chat-question/chat-question.component.ts
var ChatQuestionComponent = class _ChatQuestionComponent extends ChatbotQuestion {
  constructor(chatbotActionService) {
    super(chatbotActionService);
  }
  static \u0275fac = function ChatQuestionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatQuestionComponent)(\u0275\u0275directiveInject(ChatbotActionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatQuestionComponent, selectors: [["app-chat-question"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 1, consts: [[1, "message-container", "user-message"], [1, "message-bubble"], [1, "message-text"], [1, "message-avatar"]], template: function ChatQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "mat-icon");
      \u0275\u0275text(6, "person");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.text);
    }
  }, dependencies: [MatIcon], styles: ["\n\n.message-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin: 16px 0;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.message-container.user-message[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.message-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #48c6ef 0%,\n      #6f86d6 100%);\n  color: white;\n  flex-shrink: 0;\n  margin-left: 12px;\n  box-shadow: 0 2px 8px rgba(72, 198, 239, 0.3);\n}\n.message-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: 12px 12px 4px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #48c6ef 0%,\n      #6f86d6 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(72, 198, 239, 0.2);\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.5;\n}\n.message-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=chat-question.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatQuestionComponent, [{
    type: Component,
    args: [{ selector: "app-chat-question", standalone: false, template: '<div class="message-container user-message">\n  <div class="message-bubble">\n    <div class="message-text">{{data.text}}</div>\n  </div>\n  <div class="message-avatar">\n    <mat-icon>person</mat-icon>\n  </div>\n</div>', styles: ["/* src/app/modules/expedition/modules/chatbot/components/chat-question/chat-question.component.scss */\n.message-container {\n  display: flex;\n  align-items: flex-start;\n  margin: 16px 0;\n  animation: slideIn 0.3s ease-out;\n}\n.message-container.user-message {\n  flex-direction: row-reverse;\n}\n.message-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #48c6ef 0%,\n      #6f86d6 100%);\n  color: white;\n  flex-shrink: 0;\n  margin-left: 12px;\n  box-shadow: 0 2px 8px rgba(72, 198, 239, 0.3);\n}\n.message-avatar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.message-bubble {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: 12px 12px 4px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #48c6ef 0%,\n      #6f86d6 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(72, 198, 239, 0.2);\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.5;\n}\n.message-text {\n  font-size: 14px;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=chat-question.component.css.map */\n"] }]
  }], () => [{ type: ChatbotActionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatQuestionComponent, { className: "ChatQuestionComponent", filePath: "src/app/modules/expedition/modules/chatbot/components/chat-question/chat-question.component.ts", lineNumber: 15 });
})();

// src/app/modules/expedition/modules/chatbot/components/chat-answer/chat-answer.component.ts
function ChatAnswerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
function ChatAnswerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.text);
  }
}
var ChatAnswerComponent = class _ChatAnswerComponent extends ChatbotAnswer {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChatAnswerComponent_BaseFactory;
    return function ChatAnswerComponent_Factory(__ngFactoryType__) {
      return (\u0275ChatAnswerComponent_BaseFactory || (\u0275ChatAnswerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatAnswerComponent)))(__ngFactoryType__ || _ChatAnswerComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatAnswerComponent, selectors: [["app-chat-answer"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 1, consts: [[1, "message-container", "bot-message"], [1, "message-avatar"], [1, "message-bubble"], [1, "loading-dots"], [1, "message-text"]], template: function ChatAnswerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon");
      \u0275\u0275text(3, "smart_toy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275conditionalCreate(5, ChatAnswerComponent_Conditional_5_Template, 4, 0, "div", 3)(6, ChatAnswerComponent_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.data.isLoading ? 5 : 6);
    }
  }, dependencies: [MatIcon], styles: ["\n\n.message-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin: 16px 0;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.message-container.bot-message[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.message-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  flex-shrink: 0;\n  margin-right: 12px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n.message-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: 12px 12px 12px 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.5;\n}\n.message-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding: 4px 0;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.8);\n  animation: _ngcontent-%COMP%_bounce 1.4s infinite ease-in-out;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=chat-answer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatAnswerComponent, [{
    type: Component,
    args: [{ selector: "app-chat-answer", standalone: false, template: '<div class="message-container bot-message">\n  <div class="message-avatar">\n    <mat-icon>smart_toy</mat-icon>\n  </div>\n  <div class="message-bubble">\n    @if(data.isLoading){\n      <div class="loading-dots">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    }@else{\n      <div class="message-text">{{data.text}}</div>\n    }\n  </div>\n</div>', styles: ["/* src/app/modules/expedition/modules/chatbot/components/chat-answer/chat-answer.component.scss */\n.message-container {\n  display: flex;\n  align-items: flex-start;\n  margin: 16px 0;\n  animation: slideIn 0.3s ease-out;\n}\n.message-container.bot-message {\n  flex-direction: row;\n}\n.message-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  flex-shrink: 0;\n  margin-right: 12px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n.message-avatar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.message-bubble {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: 12px 12px 12px 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.5;\n}\n.message-text {\n  font-size: 14px;\n}\n.loading-dots {\n  display: flex;\n  gap: 6px;\n  padding: 4px 0;\n}\n.loading-dots span {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.8);\n  animation: bounce 1.4s infinite ease-in-out;\n}\n.loading-dots span:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.loading-dots span:nth-child(2) {\n  animation-delay: -0.16s;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes bounce {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=chat-answer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatAnswerComponent, { className: "ChatAnswerComponent", filePath: "src/app/modules/expedition/modules/chatbot/components/chat-answer/chat-answer.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/modules/chatbot/components/chat-buttons-answer/chat-buttons-answer.component.ts
function ChatButtonsAnswerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ChatButtonsAnswerComponent_For_2_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onClick(item_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.buttonName);
  }
}
var ChatButtonsAnswerComponent = class _ChatButtonsAnswerComponent extends ChatbotButton {
  // constructor(chatbotActionService: ChatbotActionService){
  //   super(chatbotActionService);
  // }
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChatButtonsAnswerComponent_BaseFactory;
    return function ChatButtonsAnswerComponent_Factory(__ngFactoryType__) {
      return (\u0275ChatButtonsAnswerComponent_BaseFactory || (\u0275ChatButtonsAnswerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatButtonsAnswerComponent)))(__ngFactoryType__ || _ChatButtonsAnswerComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatButtonsAnswerComponent, selectors: [["app-chat-buttons-answer"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[2, "display", "flex", "gap", "5px"], ["mat-flat-button", ""], ["mat-flat-button", "", 3, "click"]], template: function ChatButtonsAnswerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ChatButtonsAnswerComponent_For_2_Template, 2, 1, "button", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.data.conditions);
    }
  }, dependencies: [MatButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatButtonsAnswerComponent, [{
    type: Component,
    args: [{ selector: "app-chat-buttons-answer", standalone: false, template: '<div style="display: flex; gap: 5px;">\n    @for (item of data.conditions; track $index) {\n        <button mat-flat-button (click)="onClick(item)">{{item.buttonName}}</button>\n    }\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatButtonsAnswerComponent, { className: "ChatButtonsAnswerComponent", filePath: "src/app/modules/expedition/modules/chatbot/components/chat-buttons-answer/chat-buttons-answer.component.ts", lineNumber: 18 });
})();

// src/app/modules/expedition/modules/chatbot/components/chatbot/chatbot.component.ts
var _c0 = ["content"];
var _c1 = ["textarea"];
var ChatbotComponent = class _ChatbotComponent {
  chatbotContent;
  chatbotTextareaElement;
  width = input(0, ...ngDevMode ? [{ debugName: "width" }] : []);
  height = input(0, ...ngDevMode ? [{ debugName: "height" }] : []);
  chatbotActionService = inject(ChatbotActionService);
  subscription = new Subscription();
  isEmpty = true;
  ngOnInit() {
    this.chatbotActionService.chatbotContent = this.chatbotContent;
    this.chatbotActionService.chatStyleSetting = {
      answer: ChatAnswerComponent,
      question: ChatQuestionComponent,
      button: ChatButtonsAnswerComponent
    };
    this.subscription.add(this.chatbotActionService.messageCreated$.subscribe(() => {
      this.isEmpty = false;
    }));
    setTimeout(() => {
      this.showWelcomeMessage();
    }, 500);
  }
  showWelcomeMessage() {
    const welcomeMessages = [
      { text: "\uC548\uB155\uD558\uC138\uC694! \u{1F44B}", isLoading: false, loadingSec: 0 },
      { text: "\uCC57\uD50C\uB85C\uC6B0 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!", isLoading: true, loadingSec: 1 },
      { text: "\uC67C\uCABD \uC5D0\uB514\uD130\uC5D0\uC11C \uB178\uB4DC\uB97C \uC5F0\uACB0\uD558\uACE0\n\u25B6 \uC2E4\uD589 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uC2DC\uC791\uD574\uBCF4\uC138\uC694! \u{1F680}", isLoading: true, loadingSec: 1.5 }
    ];
    let delay = 0;
    welcomeMessages.forEach((message, index) => {
      setTimeout(() => {
        this.chatbotActionService.createChatComponent(ChatAnswerComponent, message);
      }, delay);
      delay += (message.loadingSec || 0) * 1e3 + 500;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClearClick() {
    this.chatbotContent.clear();
    this.isEmpty = true;
  }
  onKeyDown(input2, event) {
    event.stopPropagation();
    if (event.isComposing)
      return;
    if (event.key !== "Enter")
      return;
    if (event.shiftKey)
      return;
    event.preventDefault();
    const inputText = input2.value.trim();
    if (!inputText)
      return;
    this.chatbotActionService.createChatComponent(ChatQuestionComponent, { text: inputText });
    if (this.chatbotActionService.questionCreated$) {
      this.chatbotActionService.questionCreated$.next(inputText);
    }
    input2.value = "";
  }
  static \u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
      \u0275\u0275viewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatbotContent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatbotTextareaElement = _t.first);
    }
  }, inputs: { width: [1, "width"], height: [1, "height"] }, standalone: false, decls: 21, vars: 0, consts: [["content", ""], ["textarea", ""], [1, "chatbot-container"], [1, "chatbot-header"], [1, "header-title"], ["mat-icon-button", "", "title", "\uB300\uD654 \uCD08\uAE30\uD654", 3, "click"], [1, "chat-messages"], [1, "chat-input-area"], ["appearance", "outline", 1, "chat-input-field"], ["matInput", "", "rows", "2", "placeholder", "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694...", "autocomplete", "off", 3, "keydown"], ["align", "end"]], template: function ChatbotComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "mat-icon");
      \u0275\u0275text(4, "chat_bubble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "\uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClearClick());
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "refresh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275elementContainer(11, null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "mat-form-field", 8)(15, "mat-label");
      \u0275\u0275text(16, "\uBA54\uC2DC\uC9C0 \uC785\uB825");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "textarea", 9, 1);
      \u0275\u0275listener("keydown", function ChatbotComponent_Template_textarea_keydown_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        const textarea_r2 = \u0275\u0275reference(18);
        return \u0275\u0275resetView(ctx.onKeyDown(textarea_r2, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-hint", 10);
      \u0275\u0275text(20, "Enter: \uC804\uC1A1 | Shift+Enter: \uC904\uBC14\uAFC8");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [MatFormField, MatLabel, MatHint, MatInput, MatIconButton, MatIcon], styles: ["\n\n.chatbot-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.chatbot-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-bottom: 2px solid rgba(102, 126, 234, 0.3);\n}\n.chatbot-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n  color: #667eea;\n  font-size: 16px;\n}\n.chatbot-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.chatbot-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.chatbot-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  padding: 20px;\n  overflow-y: auto;\n  background: rgba(255, 255, 255, 0.95);\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(102, 126, 234, 0.3);\n  border-radius: 3px;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(102, 126, 234, 0.5);\n}\n.welcome-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #666;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in;\n}\n.welcome-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #667eea;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_bounce 2s ease-in-out infinite;\n}\n.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0;\n}\n.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 700;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.chat-input-area[_ngcontent-%COMP%] {\n  flex-shrink: 0 !important;\n  flex-basis: auto;\n  padding: 16px 20px;\n  background: #ffffff !important;\n  border-top: 2px solid #667eea;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.chat-input-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 !important;\n  display: block !important;\n}\n.chat-input-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  background: white;\n  border-radius: 8px;\n  padding: 0;\n}\n.chat-input-field[_ngcontent-%COMP%]     .mat-mdc-form-field-focus-overlay {\n  background: rgba(102, 126, 234, 0.05);\n}\n.chat-input-field[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__leading, \n.chat-input-field[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__notch, \n.chat-input-field[_ngcontent-%COMP%]     .mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n  border-width: 2px !important;\n}\n.chat-input-field[_ngcontent-%COMP%]     textarea {\n  resize: none;\n  line-height: 1.4;\n  padding: 8px 0;\n}\n.chat-input-field[_ngcontent-%COMP%]     .mat-mdc-form-field-hint-wrapper {\n  padding: 0;\n  margin-top: 2px;\n  font-size: 11px;\n}\n.chat-input-field[_ngcontent-%COMP%]     .mat-mdc-form-field-error-wrapper {\n  padding: 0;\n}\n.chat-input-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  margin-top: 0;\n  min-height: 16px;\n}\n.chat-input-field[_ngcontent-%COMP%]     .mat-mdc-form-field-bottom-align::before {\n  display: none;\n}\n.mat-mdc-form-field-bottom-align[_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=chatbot.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotComponent, [{
    type: Component,
    args: [{ selector: "app-chatbot", standalone: false, template: '<div class="chatbot-container">    \n  <div class="chatbot-header">\n    <div class="header-title">\n      <mat-icon>chat_bubble</mat-icon>\n      <span>\uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130</span>\n    </div>\n    <button mat-icon-button (click)="onClearClick()" title="\uB300\uD654 \uCD08\uAE30\uD654">\n      <mat-icon>refresh</mat-icon>\n    </button>\n  </div>\n  \n  <div class="chat-messages">\n    <ng-container #content></ng-container>\n  </div>\n  \n  <div class="chat-input-area">\n    <mat-form-field appearance="outline" class="chat-input-field">\n      <mat-label>\uBA54\uC2DC\uC9C0 \uC785\uB825</mat-label>\n      <textarea \n        matInput \n        (keydown)="onKeyDown(textarea, $event)" \n        #textarea \n        rows="2"\n        placeholder="\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694..."\n        autocomplete="off"></textarea>\n      <mat-hint align="end">Enter: \uC804\uC1A1 | Shift+Enter: \uC904\uBC14\uAFC8</mat-hint>\n    </mat-form-field>\n  </div>\n</div>', styles: ["/* src/app/modules/expedition/modules/chatbot/components/chatbot/chatbot.component.scss */\n.chatbot-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.chatbot-header {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-bottom: 2px solid rgba(102, 126, 234, 0.3);\n}\n.chatbot-header .header-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n  color: #667eea;\n  font-size: 16px;\n}\n.chatbot-header .header-title mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.chatbot-header button {\n  color: #667eea;\n}\n.chatbot-header button:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n.chat-messages {\n  flex: 1;\n  min-height: 0;\n  padding: 20px;\n  overflow-y: auto;\n  background: rgba(255, 255, 255, 0.95);\n}\n.chat-messages::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-messages::-webkit-scrollbar-thumb {\n  background: rgba(102, 126, 234, 0.3);\n  border-radius: 3px;\n}\n.chat-messages::-webkit-scrollbar-thumb:hover {\n  background: rgba(102, 126, 234, 0.5);\n}\n.welcome-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #666;\n  animation: fadeIn 0.5s ease-in;\n}\n.welcome-message mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #667eea;\n  margin-bottom: 20px;\n  animation: bounce 2s ease-in-out infinite;\n}\n.welcome-message p {\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0;\n}\n.welcome-message p strong {\n  color: #667eea;\n  font-weight: 700;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.chat-input-area {\n  flex-shrink: 0 !important;\n  flex-basis: auto;\n  padding: 16px 20px;\n  background: #ffffff !important;\n  border-top: 2px solid #667eea;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.chat-input-field {\n  width: 100%;\n  margin: 0 !important;\n  display: block !important;\n}\n.chat-input-field ::ng-deep .mat-mdc-text-field-wrapper {\n  background: white;\n  border-radius: 8px;\n  padding: 0;\n}\n.chat-input-field ::ng-deep .mat-mdc-form-field-focus-overlay {\n  background: rgba(102, 126, 234, 0.05);\n}\n.chat-input-field ::ng-deep .mdc-text-field--focused .mdc-notched-outline__leading,\n.chat-input-field ::ng-deep .mdc-text-field--focused .mdc-notched-outline__notch,\n.chat-input-field ::ng-deep .mdc-text-field--focused .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n  border-width: 2px !important;\n}\n.chat-input-field ::ng-deep textarea {\n  resize: none;\n  line-height: 1.4;\n  padding: 8px 0;\n}\n.chat-input-field ::ng-deep .mat-mdc-form-field-hint-wrapper {\n  padding: 0;\n  margin-top: 2px;\n  font-size: 11px;\n}\n.chat-input-field ::ng-deep .mat-mdc-form-field-error-wrapper {\n  padding: 0;\n}\n.chat-input-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  margin-top: 0;\n  min-height: 16px;\n}\n.chat-input-field ::ng-deep .mat-mdc-form-field-bottom-align::before {\n  display: none;\n}\n.mat-mdc-form-field-bottom-align::before {\n  display: none;\n}\n/*# sourceMappingURL=chatbot.component.css.map */\n"] }]
  }], null, { chatbotContent: [{
    type: ViewChild,
    args: ["content", { static: true, read: ViewContainerRef }]
  }], chatbotTextareaElement: [{
    type: ViewChild,
    args: ["textarea", { static: true }]
  }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src/app/modules/expedition/modules/chatbot/components/chatbot/chatbot.component.ts", lineNumber: 15 });
})();

// src/app/modules/expedition/modules/chatflow-edit/abstracts/dialog.abstract.ts
var EditDialogAbstract = class {
  dialogRef = inject(MatDialogRef);
  node = inject(MAT_DIALOG_DATA);
  onCancelClick() {
    this.dialogRef.close();
  }
};

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/button-node-edit-dialog/button-node-edit-dialog.component.ts
function ButtonNodeEditDialogComponent_For_15_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function ButtonNodeEditDialogComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div")(2, "mat-form-field")(3, "mat-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 2);
    \u0275\u0275twoWayListener("ngModelChange", function ButtonNodeEditDialogComponent_For_15_Template_input_ngModelChange_5_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.buttonName, $event) || (item_r2.buttonName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div")(7, "mat-form-field")(8, "mat-label");
    \u0275\u0275text(9, "\uAC12(\uBCC0\uC218\uC5D0 \uB2F4\uC744)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 2);
    \u0275\u0275twoWayListener("ngModelChange", function ButtonNodeEditDialogComponent_For_15_Template_input_ngModelChange_10_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.routingKey, $event) || (item_r2.routingKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "mat-form-field")(13, "mat-label");
    \u0275\u0275text(14, "\uC5F0\uACB0\uD560 \uB178\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-select", 7);
    \u0275\u0275twoWayListener("valueChange", function ButtonNodeEditDialogComponent_For_15_Template_mat_select_valueChange_15_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.targetNodeId, $event) || (item_r2.targetNodeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(16, ButtonNodeEditDialogComponent_For_15_For_17_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 9)(19, "button", 3);
    \u0275\u0275listener("click", function ButtonNodeEditDialogComponent_For_15_Template_button_click_19_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDeleteClick($index_r4));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\uBC84\uD2BC ", $index_r4 + 1, " \uC774\uB984");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r2.buttonName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", item_r2.routingKey);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("value", item_r2.targetNodeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.connectables);
  }
}
var ButtonNodeEditDialogComponent = class _ButtonNodeEditDialogComponent extends EditDialogAbstract {
  name = this.node.name;
  //수정하면 바로 원본 데이터에 반영되는걸 막기 위해 따로 변수로 만들어놓는다.
  variableName = this.node.data.variableName;
  conditions = structuredClone(this.node.data.conditions) ?? [];
  connectables = [];
  ngOnInit() {
    this.connectables = Object.values(this.node.rightConnectedList).map((d) => ({ id: d.node.id, name: d.node.name }));
  }
  onSaveClick() {
    this.node.data.variableName = this.variableName;
    this.node.data.conditions = this.conditions;
    this.node.name = this.name;
    console.log("split node data", this.node.data);
    this.dialogRef.close();
  }
  onAddClick() {
    this.conditions.push({ buttonName: "", routingKey: "", targetNodeId: "" });
  }
  onDeleteClick(index) {
    this.conditions.splice(index, 1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonNodeEditDialogComponent_BaseFactory;
    return function ButtonNodeEditDialogComponent_Factory(__ngFactoryType__) {
      return (\u0275ButtonNodeEditDialogComponent_BaseFactory || (\u0275ButtonNodeEditDialogComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonNodeEditDialogComponent)))(__ngFactoryType__ || _ButtonNodeEditDialogComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonNodeEditDialogComponent, selectors: [["app-button-node-edit-dialog"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 3, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column"], ["matInput", "", 3, "ngModelChange", "ngModel"], [3, "click"], [2, "border-radius", "10px", "background-color", "rgb(247, 225, 247)", "margin-bottom", "10px", "padding", "10px"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "valueChange", "value"], [3, "value"], [2, "text-align", "center"]], template: function ButtonNodeEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "mat-label");
      \u0275\u0275text(5, "node \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ButtonNodeEditDialogComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
      \u0275\u0275text(9, "\uAC12\uC744 \uB2F4\uC744 \uBCC0\uC218 \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ButtonNodeEditDialogComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.variableName, $event) || (ctx.variableName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 3);
      \u0275\u0275listener("click", function ButtonNodeEditDialogComponent_Template_button_click_11_listener() {
        return ctx.onAddClick();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(14, ButtonNodeEditDialogComponent_For_15_Template, 22, 4, "div", 4, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-dialog-actions")(17, "button", 5);
      \u0275\u0275listener("click", function ButtonNodeEditDialogComponent_Template_button_click_17_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(18, "\uCDE8\uC18C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 6);
      \u0275\u0275listener("click", function ButtonNodeEditDialogComponent_Template_button_click_19_listener() {
        return ctx.onSaveClick();
      });
      \u0275\u0275text(20, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.node.type, " \uB178\uB4DC \uC218\uC815");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.variableName);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.conditions);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatButton, MatIcon, MatDialogTitle, MatDialogActions, MatDialogContent, MatSelect, MatOption, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonNodeEditDialogComponent, [{
    type: Component,
    args: [{ selector: "app-button-node-edit-dialog", standalone: false, template: '<h2 mat-dialog-title>{{node.type}} \uB178\uB4DC \uC218\uC815</h2>\n<mat-dialog-content style="display: flex; flex-direction: column;">\n    <mat-form-field>\n        <mat-label>node \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="name" />\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>\uAC12\uC744 \uB2F4\uC744 \uBCC0\uC218 \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="variableName"/>\n    </mat-form-field>\n\n    <button (click)="onAddClick()"><mat-icon>add</mat-icon></button>\n    @for (item of conditions; track $index) {\n        <div style="border-radius: 10px; background-color: rgb(247, 225, 247); margin-bottom: 10px; padding: 10px;">\n            <div>\n                <mat-form-field>\n                    <mat-label>\uBC84\uD2BC {{ $index + 1 }} \uC774\uB984</mat-label>\n                    <input matInput [(ngModel)]="item.buttonName" />\n                </mat-form-field>\n            </div>\n            <div>\n                <mat-form-field>\n                    <mat-label>\uAC12(\uBCC0\uC218\uC5D0 \uB2F4\uC744)</mat-label>\n                    <input matInput [(ngModel)]="item.routingKey" />\n                </mat-form-field>\n            </div>\n            <div>\n                <mat-form-field>\n                    <mat-label>\uC5F0\uACB0\uD560 \uB178\uB4DC</mat-label>\n                    <mat-select [(value)]="item.targetNodeId">\n                        @for (item of connectables; track $index) {\n                            <mat-option [value]="item.id">{{item.name}}</mat-option>\n                        }\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div style="text-align: center;">\n                <button (click)="onDeleteClick($index)"><mat-icon>delete</mat-icon></button>\n            </div>\n        </div>\n    }\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button (click)="onCancelClick()">\uCDE8\uC18C</button>\n    <button mat-raised-button color="primary" (click)="onSaveClick()">\uC800\uC7A5</button>\n</mat-dialog-actions>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonNodeEditDialogComponent, { className: "ButtonNodeEditDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/button-node-edit-dialog/button-node-edit-dialog.component.ts", lineNumber: 14 });
})();

// src/app/modules/expedition/modules/chatflow-edit/classes/node-line.class.ts
var NodeLine = class {
  svg;
  leftNode;
  rightNode;
  invisibleRef;
  visibleRef;
  constructor(svg, leftNode, rightNode) {
    this.svg = svg;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
  init() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-SVG", `\u{1F3A8} SVG \uB77C\uC778 \uC0DD\uC131: ${this.leftNode.id} \u2192 ${this.rightNode.id}`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-SVG", `   \uC2DC\uC791\uC810: (${this.leftNode.rightDotPosition.left}, ${this.leftNode.rightDotPosition.top})`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-SVG", `   \uB05D\uC810: (${this.rightNode.leftDotPosition.left}, ${this.rightNode.leftDotPosition.top})`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-SVG", `   SVG \uC694\uC18C: ${!!this.svg?.nativeElement}`);
    }
    this.visibleRef = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.setVisibleAttribute(this.visibleRef);
    this.svg.nativeElement.appendChild(this.visibleRef);
    if (debugLogger) {
      debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-SVG", `\u2705 Visible line \uCD94\uAC00\uB428`);
    }
    this.invisibleRef = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.setInvisibleAttribute(this.invisibleRef);
    this.svg.nativeElement.appendChild(this.invisibleRef);
    this.invisibleRef.addEventListener("click", this.onClick.bind(this));
    this.invisibleRef.addEventListener("hover", this.onHover.bind(this));
    if (debugLogger) {
      debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-SVG", `\u2705 Invisible line (\uD074\uB9AD \uC601\uC5ED) \uCD94\uAC00\uB428`);
    }
  }
  onHover() {
    console.log("hover");
  }
  onClick() {
    console.log("ref", this);
    this.invisibleRef.setAttribute("stroke", "red");
    this.delete();
  }
  setInvisibleAttribute(pathRef) {
    const x1 = this.leftNode.rightDotPosition.left;
    const y1 = this.leftNode.rightDotPosition.top;
    const x2 = this.rightNode.leftDotPosition.left;
    const y2 = this.rightNode.leftDotPosition.top;
    const dx = Math.abs(x2 - x1) * 0.5;
    const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
    pathRef.setAttribute("d", d);
    pathRef.setAttribute("stroke", "transparent");
    pathRef.setAttribute("stroke-width", "10");
    pathRef.setAttribute("fill", "none");
    pathRef.classList.add("pointer");
  }
  setVisibleAttribute(pathRef) {
    const x1 = this.leftNode.rightDotPosition.left;
    const y1 = this.leftNode.rightDotPosition.top;
    const x2 = this.rightNode.leftDotPosition.left;
    const y2 = this.rightNode.leftDotPosition.top;
    const dx = Math.abs(x2 - x1) * 0.5;
    const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-SVG", `\u{1F58A}\uFE0F \uCEE4\uBE0C \uB77C\uC778 \uC18D\uC131 \uC124\uC815: (${x1},${y1}) \u2192 (${x2},${y2})`);
    }
    pathRef.setAttribute("d", d);
    pathRef.setAttribute("stroke", "#4CAF50");
    pathRef.setAttribute("stroke-width", "2");
    pathRef.setAttribute("fill", "none");
  }
  delete() {
    this.invisibleRef.removeEventListener("click", this.onClick);
    this.invisibleRef.remove();
    this.visibleRef.remove();
    this.rightNode.addToUnconnected();
    delete this.leftNode.rightConnectedList[this.rightNode.id];
    delete this.rightNode.leftConnectedList[this.leftNode.id];
  }
  move() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-SVG", `\u2194\uFE0F \uB77C\uC778 \uC774\uB3D9: ${this.leftNode.id} \u2192 ${this.rightNode.id}`);
    }
    this.setInvisibleAttribute(this.invisibleRef);
    this.setVisibleAttribute(this.visibleRef);
  }
};

// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// src/app/modules/expedition/modules/chatflow-edit/services/chatflow-action.service.ts
var ChatflowActionService = class _ChatflowActionService {
  movingNode = null;
  // public lineStartComponentRef: NodeAbstract<any> | null = null;
  // public lineEndComponentRef: NodeAbstract<any> | null = null;
  svg;
  static \u0275fac = function ChatflowActionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowActionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatflowActionService, factory: _ChatflowActionService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowActionService, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/expedition/modules/chatflow-edit/services/chatflow-setting.service.ts
var ChatflowSettingService = class _ChatflowSettingService {
  nodeWidth = 280;
  // CSS min-width와 동일하게
  nodeHeight = 120;
  // 실제 높이에 맞춤
  zoomLevel = 70;
  // 현재 줌 레벨 (%)
  static \u0275fac = function ChatflowSettingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowSettingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatflowSettingService, factory: _ChatflowSettingService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowSettingService, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/expedition/modules/chatflow-edit/services/chatflow-data.service.ts
var ChatflowDataService = class _ChatflowDataService {
  intentName = "";
  //선이 시작되는 노드를 담아놓는다.
  _lineStartedNode = null;
  get lineStartedNode() {
    return this._lineStartedNode;
  }
  set lineStartedNode(value) {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      if (value === null) {
        debugLogger.warn("\uCC57\uD50C\uB85C\uC6B0-\uC0C1\uD0DC", "\u274C lineStartedNode\uAC00 null\uB85C \uC124\uC815\uB428");
        console.trace("lineStartedNode null \uC124\uC815 \uC704\uCE58");
      } else {
        debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uC0C1\uD0DC", `\u2705 lineStartedNode \uC124\uC815: ${value.id} (${value.type})`);
      }
    }
    this._lineStartedNode = value;
  }
  //chatflow의 시작점 노드를 담아놓는다. 데이터 추출할 때 사용된다.
  startNode = null;
  // public jsonData: any = {
  //     start: {},
  //     unconnected: {}
  // };
  unconnectedNode = {};
  createJsonData() {
    return {
      intentName: this.intentName,
      connected: this.createConnectedData(),
      unconnected: this.createUnconnectedData()
    };
  }
  variables = {};
  //option으로 보여줄 때 변수이름(노드 이름)
  createConnectedData() {
    console.log("play \uD655\uC778", this.startNode);
    if (!this.startNode)
      return {};
    const jsonData = {};
    jsonData["start"] = this.startNode.extractData();
    this.extractRightNode(this.startNode, jsonData);
    return jsonData;
  }
  createUnconnectedData() {
    const jsonData = {};
    Object.values(this.unconnectedNode).forEach((node) => {
      jsonData[node.id] = node.extractData();
      this.extractRightNode(node, jsonData);
    });
    return jsonData;
  }
  extractRightNode(node, jsonData) {
    if (Object.keys(node.rightConnectedList).length === 0)
      return;
    Object.values(node.rightConnectedList).forEach((right) => {
      if (jsonData[right.node.id])
        return;
      jsonData[right.node.id] = right.node.extractData();
      this.extractRightNode(right.node, jsonData);
    });
  }
  static \u0275fac = function ChatflowDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatflowDataService, factory: _ChatflowDataService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowDataService, [{
    type: Injectable
  }], null, null);
})();

// src/app/modules/expedition/modules/chatflow-edit/abstracts/node.abstract.ts
var NodeAbstract = class _NodeAbstract {
  elementRef;
  chatflowActionService;
  chatflowSettingService;
  chatflowDataService;
  isItExcecuting = false;
  id = nanoid();
  top = 200;
  left = 0;
  data = {};
  name = "";
  leftConnectedList = {};
  rightConnectedList = {};
  // public rightNode: NodeAbstract<any> | null = null;
  // public leftNode: NodeAbstract<any> | null = null;
  _myRef = null;
  get myRef() {
    return this._myRef;
  }
  set myRef(value) {
    this._myRef = value;
    if (value) {
      setTimeout(() => this.cacheNodeSize(), 100);
    }
  }
  // public rightNodeId: string | null = null;
  // public leftNodeId: string | null = null;
  matDialog = inject(MatDialog);
  snackbar = inject(MatSnackBar);
  debugLogger = inject(DebugLoggerService);
  mouseDownPosition = {
    x: 0,
    y: 0
  };
  beforePosition = {
    top: 0,
    left: 0
  };
  // 드래그 앤 드롭 연결 상태
  isDraggingConnection = false;
  tempLine = null;
  // 노드 크기 캐싱 (offsetHeight가 변경되지 않도록)
  cachedHeight = 0;
  cachedWidth = 0;
  constructor(elementRef, chatflowActionService, chatflowSettingService, chatflowDataService) {
    this.elementRef = elementRef;
    this.chatflowActionService = chatflowActionService;
    this.chatflowSettingService = chatflowSettingService;
    this.chatflowDataService = chatflowDataService;
  }
  ngOnDestroy() {
    Object.values(this.rightConnectedList).forEach((right) => {
      right.line.delete();
    });
    Object.values(this.leftConnectedList).forEach((left) => {
      left.line.delete();
    });
    if (this.chatflowDataService.unconnectedNode[this.id]) {
      delete this.chatflowDataService.unconnectedNode[this.id];
    }
    this.myRef = null;
  }
  init(nodeData, myRef) {
    this.id = nodeData.id;
    this.top = nodeData.top;
    this.left = nodeData.left;
    this.category = nodeData.category;
    this.type = nodeData.type;
    this.name = nodeData.name;
    this.data = nodeData.data;
    this.myRef = myRef;
  }
  /**
   * 노드 크기를 캐싱 (한 번만 측정)
   */
  cacheNodeSize() {
    const element = this.elementRef.nativeElement;
    const nodeCard = element.querySelector(".node-card");
    if (nodeCard && nodeCard.offsetHeight > 0) {
      this.cachedHeight = nodeCard.offsetHeight;
      this.cachedWidth = nodeCard.offsetWidth;
    } else {
      this.cachedHeight = this.chatflowSettingService.nodeHeight;
      this.cachedWidth = this.chatflowSettingService.nodeWidth;
    }
  }
  get rightDotPosition() {
    if (this.cachedHeight === 0) {
      this.cacheNodeSize();
    }
    const position = {
      top: this.top + this.cachedHeight / 2,
      left: this.left + this.cachedWidth
    };
    return position;
  }
  get leftDotPosition() {
    if (this.cachedHeight === 0) {
      this.cacheNodeSize();
    }
    const position = {
      top: this.top + this.cachedHeight / 2,
      left: this.left
    };
    return position;
  }
  /**
   *
   * 0. 노드 움직이고
   * 1. 선 긋고
   * 2. 선까지 같이 움직여지고
   * 3. 데이터 추출하고
   */
  onMouseDown(event) {
    if (event.button === 2)
      return;
    this.mouseDownPosition.x = event.clientX;
    this.mouseDownPosition.y = event.clientY;
    this.chatflowActionService.movingNode = this;
    this.beforePosition.top = this.top;
    this.beforePosition.left = this.left;
  }
  onMouseMove(event) {
    this.left = this.beforePosition.left + event.clientX - this.mouseDownPosition.x;
    this.top = this.beforePosition.top + event.clientY - this.mouseDownPosition.y;
    Object.values(this.leftConnectedList).forEach((left) => {
      left.line.move();
    });
    Object.values(this.rightConnectedList).forEach((right) => {
      right.line.move();
    });
    this.triggerDebugUpdate();
  }
  triggerDebugUpdate() {
    const event = new CustomEvent("nodePositionChanged");
    window.dispatchEvent(event);
  }
  //TODO 템플릿 빼기?
  onLineStartClick() {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `\u{1F517} \uC5F0\uACB0 \uC2DC\uC791: ${this.type} \uB178\uB4DC (${this.id})`);
    this.chatflowDataService.lineStartedNode = this;
    this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `\u2705 \uC2DC\uC791 \uB178\uB4DC \uC124\uC815\uB428: ${this.id}`);
  }
  /**
   * 출력 도트에서 드래그 시작
   */
  onOutputDotMouseDown(event) {
    event.stopPropagation();
    this.isDraggingConnection = true;
    this.chatflowDataService.lineStartedNode = this;
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB4DC\uB798\uADF8\uC5F0\uACB0", `\u{1F5B1}\uFE0F \uB4DC\uB798\uADF8 \uC5F0\uACB0 \uC2DC\uC791: ${this.type} \uB178\uB4DC (${this.id})`);
    if (this.chatflowActionService.svg) {
      this.tempLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.tempLine.setAttribute("stroke", "#64B5F6");
      this.tempLine.setAttribute("stroke-width", "2");
      this.tempLine.setAttribute("fill", "none");
      this.tempLine.setAttribute("stroke-dasharray", "5,5");
      this.tempLine.setAttribute("pointer-events", "none");
      this.chatflowActionService.svg.nativeElement.appendChild(this.tempLine);
      this.updateTempLine(event.clientX, event.clientY);
    }
    const onMouseMove = (e) => {
      if (this.isDraggingConnection) {
        this.updateTempLine(e.clientX, e.clientY);
      }
    };
    const onMouseUp = (e) => {
      setTimeout(() => {
        this.isDraggingConnection = false;
        if (this.tempLine) {
          this.tempLine.remove();
          this.tempLine = null;
        }
        this.chatflowDataService.lineStartedNode = null;
        this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB4DC\uB798\uADF8\uC5F0\uACB0", `\u{1F51A} \uB4DC\uB798\uADF8 \uC885\uB8CC (\uC5F0\uACB0 \uC548\uB428)`);
      }, 50);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
  /**
   * 임시 선 업데이트
   */
  updateTempLine(clientX, clientY) {
    if (!this.tempLine)
      return;
    const startPos = this.rightDotPosition;
    const svgRect = this.chatflowActionService.svg.nativeElement.getBoundingClientRect();
    const zoom = this.chatflowSettingService.zoomLevel / 100;
    const endX = (clientX - svgRect.left) / zoom;
    const endY = (clientY - svgRect.top) / zoom;
    const dx = Math.abs(endX - startPos.left) * 0.5;
    const pathData = `M ${startPos.left} ${startPos.top} C ${startPos.left + dx} ${startPos.top}, ${endX - dx} ${endY}, ${endX} ${endY}`;
    this.tempLine.setAttribute("d", pathData);
  }
  /**
   * 입력 도트에 드롭
   */
  onInputDotMouseUp(event) {
    event.stopPropagation();
    if (!this.chatflowDataService.lineStartedNode || !this.chatflowDataService.lineStartedNode.isDraggingConnection) {
      return;
    }
    const startNode = this.chatflowDataService.lineStartedNode;
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB4DC\uB798\uADF8\uC5F0\uACB0", `\u{1F3AF} \uC5F0\uACB0 \uC644\uB8CC \uC2DC\uB3C4: ${startNode.id} \u2192 ${this.id}`);
    if (startNode === this) {
      this.debugLogger.warn("\uCC57\uD50C\uB85C\uC6B0-\uB4DC\uB798\uADF8\uC5F0\uACB0", "\u26A0\uFE0F \uC790\uAE30 \uC790\uC2E0\uACFC\uB294 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      this.snackbar.open("\uAC19\uC740 \uB178\uB4DC\uB294 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", "", { duration: 900, verticalPosition: "top" });
      startNode.cleanupDragConnection();
      return;
    }
    if (this.leftConnectedList[startNode.id]) {
      this.debugLogger.warn("\uCC57\uD50C\uB85C\uC6B0-\uB4DC\uB798\uADF8\uC5F0\uACB0", "\u26A0\uFE0F \uC774\uBBF8 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.");
      this.snackbar.open("\uC774\uBBF8 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.", "", { duration: 900, verticalPosition: "top" });
      startNode.cleanupDragConnection();
      return;
    }
    if (Object.keys(this.leftConnectedList).length === 0) {
      delete this.chatflowDataService.unconnectedNode[this.id];
    }
    const lineRef = this.drawLeftLine(startNode);
    startNode.rightConnectedList[this.id] = { node: this, line: lineRef };
    this.leftConnectedList[startNode.id] = { node: startNode, line: lineRef };
    startNode.cleanupDragConnection();
    this.triggerDebugUpdate();
    this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uB4DC\uB798\uADF8\uC5F0\uACB0", `\u2705 \uC5F0\uACB0 \uC644\uB8CC!`);
    this.snackbar.open("\uB178\uB4DC\uAC00 \uC5F0\uACB0\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", { duration: 900, verticalPosition: "top" });
  }
  /**
   * 드래그 연결 정리
   */
  cleanupDragConnection() {
    this.isDraggingConnection = false;
    if (this.tempLine) {
      this.tempLine.remove();
      this.tempLine = null;
    }
    this.chatflowDataService.lineStartedNode = null;
  }
  /**
   * 입력 도트 호버 감지 (시각적 피드백용)
   */
  onInputDotMouseEnter(event) {
    if (this.chatflowDataService.lineStartedNode && this.chatflowDataService.lineStartedNode.isDraggingConnection) {
      const connector = event.currentTarget;
      const dot = connector.querySelector(".connector-dot");
      if (dot) {
        dot.style.transform = "scale(1.5)";
        dot.style.background = "rgba(76, 175, 80, 0.95)";
        dot.style.borderColor = "#4CAF50";
        dot.style.boxShadow = "0 0 24px rgba(76, 175, 80, 0.8), 0 0 0 6px rgba(76, 175, 80, 0.3)";
      }
    }
  }
  onInputDotMouseLeave(event) {
    const connector = event.currentTarget;
    const dot = connector.querySelector(".connector-dot");
    if (dot) {
      dot.style.transform = "";
      dot.style.background = "";
      dot.style.borderColor = "";
      dot.style.boxShadow = "";
    }
  }
  onLineEndClick() {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `\u{1F517} \uC5F0\uACB0 \uC885\uB8CC \uC2DC\uB3C4: ${this.type} \uB178\uB4DC (${this.id})`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `   \uC2DC\uC791 \uB178\uB4DC: ${this.chatflowDataService.lineStartedNode?.id || "\uC5C6\uC74C"}`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `   \uAE30\uC874 \uC67C\uCABD \uC5F0\uACB0: [${Object.keys(this.leftConnectedList).join(", ")}]`);
    if (!this.chatflowDataService.lineStartedNode) {
      this.debugLogger.warn("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", "\u26A0\uFE0F \uC2DC\uC791 \uB178\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uBA3C\uC800 OUT \uCEE4\uB125\uD130\uB97C \uD074\uB9AD\uD558\uC138\uC694.");
      this.snackbar.open("\uC2DC\uC791 \uBC84\uD2BC\uC744 \uBA3C\uC800 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.", "", { duration: 900, verticalPosition: "top" });
      return;
    }
    if (Object.keys(this.leftConnectedList).length === 0) {
      this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `   \u{1F5D1}\uFE0F \uBBF8\uC5F0\uACB0 \uB178\uB4DC \uBAA9\uB85D\uC5D0\uC11C \uC81C\uAC70: ${this.id}`);
      delete this.chatflowDataService.unconnectedNode[this.id];
    }
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `\u{1F4D0} \uC120 \uADF8\uB9AC\uAE30: ${this.chatflowDataService.lineStartedNode.id} \u2192 ${this.id}`);
    const leftLineRef = this.drawLeftLine(this.chatflowDataService.lineStartedNode);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `\u{1F504} \uC5F0\uACB0 \uBAA9\uB85D \uC5C5\uB370\uC774\uD2B8 \uC911...`);
    this.chatflowDataService.lineStartedNode.rightConnectedList[this.id] = { node: this, line: leftLineRef };
    this.leftConnectedList[this.chatflowDataService.lineStartedNode.id] = { node: this.chatflowDataService.lineStartedNode, line: leftLineRef };
    this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `\u2705 \uC5F0\uACB0 \uC644\uB8CC!`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `   ${this.chatflowDataService.lineStartedNode.id}\uC758 \uC624\uB978\uCABD \uC5F0\uACB0: [${Object.keys(this.chatflowDataService.lineStartedNode.rightConnectedList).join(", ")}]`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0", `   ${this.id}\uC758 \uC67C\uCABD \uC5F0\uACB0: [${Object.keys(this.leftConnectedList).join(", ")}]`);
    this.chatflowDataService.lineStartedNode = null;
  }
  drawLeftLine(startComponentRef) {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC120\uADF8\uB9AC\uAE30", `\u{1F4CF} \uC120 \uC0DD\uC131 \uC2DC\uC791: ${startComponentRef.id} \u2192 ${this.id}`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC120\uADF8\uB9AC\uAE30", `   \uC2DC\uC791 \uC704\uCE58: (${startComponentRef.rightDotPosition.left}, ${startComponentRef.rightDotPosition.top})`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC120\uADF8\uB9AC\uAE30", `   \uC885\uB8CC \uC704\uCE58: (${this.leftDotPosition.left}, ${this.leftDotPosition.top})`);
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC120\uADF8\uB9AC\uAE30", `   SVG \uC874\uC7AC: ${!!this.chatflowActionService.svg}`);
    const lineClass = new NodeLine(this.chatflowActionService.svg, startComponentRef, this);
    lineClass.init();
    this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uC120\uADF8\uB9AC\uAE30", `\u2705 \uC120 \uC0DD\uC131 \uC644\uB8CC!`);
    return lineClass;
  }
  onEditClick() {
    const edit = nodes[this.type].edit;
    if (!edit)
      return;
    this.matDialog.open(edit, {
      data: this
    });
  }
  extractData() {
    return {
      id: this.id,
      top: this.top,
      left: this.left,
      category: this.category,
      type: this.type,
      name: this.name,
      data: this.data,
      rightNodeIds: Object.keys(this.rightConnectedList),
      leftNodeIds: Object.keys(this.leftConnectedList)
    };
  }
  addToUnconnected() {
    this.chatflowDataService.unconnectedNode[this.id] = this;
  }
  static \u0275fac = function NodeAbstract_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NodeAbstract)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChatflowActionService), \u0275\u0275directiveInject(ChatflowSettingService), \u0275\u0275directiveInject(ChatflowDataService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NodeAbstract });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeAbstract, [{
    type: Directive
  }], () => [{ type: ElementRef }, { type: ChatflowActionService }, { type: ChatflowSettingService }, { type: ChatflowDataService }], null);
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/button-node/button-node.component.ts
var ButtonNodeComponent = class _ButtonNodeComponent extends NodeAbstract {
  category = "chatbot";
  type = "button";
  data = {
    variableName: "",
    conditions: []
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonNodeComponent_BaseFactory;
    return function ButtonNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275ButtonNodeComponent_BaseFactory || (\u0275ButtonNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonNodeComponent)))(__ngFactoryType__ || _ButtonNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonNodeComponent, selectors: [["app-button-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "nodeAbstract"]], template: function ButtonNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-node-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonNodeComponent, [{
    type: Component,
    args: [{ selector: "app-button-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\n</app-node-template>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonNodeComponent, { className: "ButtonNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/button-node/button-node.component.ts", lineNumber: 13 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/listen-node/listen-node.component.ts
function ListenNodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uBCC0\uC218: ", ctx_r0.data.variableName, " ");
  }
}
function ListenNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " \uBCC0\uC218\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
var ListenNodeComponent = class _ListenNodeComponent extends NodeAbstract {
  category = "chatbot";
  type = "listen";
  data = {
    variableName: ""
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ListenNodeComponent_BaseFactory;
    return function ListenNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275ListenNodeComponent_BaseFactory || (\u0275ListenNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ListenNodeComponent)))(__ngFactoryType__ || _ListenNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListenNodeComponent, selectors: [["app-listen-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "nodeAbstract"], [1, "listen-content"], [1, "listen-content", "empty"]], template: function ListenNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-node-template", 0);
      \u0275\u0275conditionalCreate(1, ListenNodeComponent_Conditional_1_Template, 2, 1, "div", 1)(2, ListenNodeComponent_Conditional_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.variableName ? 1 : 2);
    }
  }, styles: ["\n\n.listen-content[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #333;\n  background-color: rgba(156, 39, 176, 0.05);\n  border-radius: 4px;\n  max-height: 80px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.listen-content.empty[_ngcontent-%COMP%] {\n  color: #999;\n  font-style: italic;\n}\n/*# sourceMappingURL=listen-node.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListenNodeComponent, [{
    type: Component,
    args: [{ selector: "app-listen-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\n  @if (data.variableName) {\n    <div class="listen-content">\n      \uBCC0\uC218: {{ data.variableName }}\n    </div>\n  } @else {\n    <div class="listen-content empty">\n      \uBCC0\uC218\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694\n    </div>\n  }\n</app-node-template>', styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/listen-node/listen-node.component.scss */\n.listen-content {\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #333;\n  background-color: rgba(156, 39, 176, 0.05);\n  border-radius: 4px;\n  max-height: 80px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.listen-content.empty {\n  color: #999;\n  font-style: italic;\n}\n/*# sourceMappingURL=listen-node.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListenNodeComponent, { className: "ListenNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/listen-node/listen-node.component.ts", lineNumber: 13 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/question-node/question-node.component.ts
var QuestionNodeComponent = class _QuestionNodeComponent extends NodeAbstract {
  category = "chatbot";
  type = "question";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275QuestionNodeComponent_BaseFactory;
    return function QuestionNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275QuestionNodeComponent_BaseFactory || (\u0275QuestionNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionNodeComponent)))(__ngFactoryType__ || _QuestionNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionNodeComponent, selectors: [["app-question-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "nodeAbstract"]], template: function QuestionNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-node-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionNodeComponent, [{
    type: Component,
    args: [{ selector: "app-question-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\n</app-node-template>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionNodeComponent, { className: "QuestionNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/question-node/question-node.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/speak-node/speak-node.component.ts
function SpeakNodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.text);
  }
}
function SpeakNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "\uBC1C\uD654 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694");
    \u0275\u0275elementEnd();
  }
}
var SpeakNodeComponent = class _SpeakNodeComponent extends NodeAbstract {
  category = "chatbot";
  type = "speak";
  data = {
    text: "",
    isLoading: false,
    loadingSec: 0.8
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SpeakNodeComponent_BaseFactory;
    return function SpeakNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275SpeakNodeComponent_BaseFactory || (\u0275SpeakNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SpeakNodeComponent)))(__ngFactoryType__ || _SpeakNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpeakNodeComponent, selectors: [["app-speak-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "nodeAbstract"], [1, "speak-content"], [1, "speak-content", "empty"]], template: function SpeakNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-node-template", 0);
      \u0275\u0275conditionalCreate(1, SpeakNodeComponent_Conditional_1_Template, 2, 1, "div", 1)(2, SpeakNodeComponent_Conditional_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.text ? 1 : 2);
    }
  }, styles: ["\n\n.speak-content[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #333;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.speak-content.empty[_ngcontent-%COMP%] {\n  color: #999;\n  font-style: italic;\n}\n/*# sourceMappingURL=speak-node.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeakNodeComponent, [{
    type: Component,
    args: [{ selector: "app-speak-node", standalone: false, template: `<!-- <div style="border: 1px solid black; border-radius: 5px; background-color: white; position: absolute; padding: 5px;"
[ngStyle]="{'top.px': top, 'left.px': left, 'width.px': chatflowSettingService.nodeWidth, 'height.px': chatflowSettingService.nodeHeight}"
    (mousedown)="onMouseDown($event)"
    (contextmenu)="onContextMenuClick($event)">
    <div> \uC885\uB958: {{nodeType}}</div>
    <div> \uC774\uB984: {{data.name}}</div>
    <button mat-stroked-button (click)="onEditClick()">\uC218\uC815</button>

    <mat-menu #menu="matMenu" [ngStyle]="{'top.px': top, 'left.px': left}">
        <button mat-menu-item (click)="onLineStartClick()">\uC2DC\uC791</button>
        <button mat-menu-item (click)="onLineEndClick()">\uC885\uB8CC</button>
    </mat-menu>
</div>

<div [matMenuTriggerFor]="menu"></div> -->


<app-node-template [nodeAbstract]="this">
    @if (data.text) {
        <div class="speak-content">{{ data.text }}</div>
    } @else {
        <div class="speak-content empty">\uBC1C\uD654 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694</div>
    }
</app-node-template>`, styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/speak-node/speak-node.component.scss */\n.speak-content {\n  padding: 8px 12px;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #333;\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.speak-content.empty {\n  color: #999;\n  font-style: italic;\n}\n/*# sourceMappingURL=speak-node.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpeakNodeComponent, { className: "SpeakNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/speak-node/speak-node.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/split-node/split-node.component.ts
var SplitNodeComponent = class _SplitNodeComponent extends NodeAbstract {
  category = "chatbot";
  type = "split";
  data = {
    variableName: "",
    conditions: []
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SplitNodeComponent_BaseFactory;
    return function SplitNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275SplitNodeComponent_BaseFactory || (\u0275SplitNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SplitNodeComponent)))(__ngFactoryType__ || _SplitNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplitNodeComponent, selectors: [["app-split-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "nodeAbstract"]], template: function SplitNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-node-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitNodeComponent, [{
    type: Component,
    args: [{ selector: "app-split-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\n</app-node-template>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplitNodeComponent, { className: "SplitNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/split-node/split-node.component.ts", lineNumber: 13 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/listen-node-edit-dialog/listen-node-edit-dialog.component.ts
var ListenNodeEditDialogComponent = class _ListenNodeEditDialogComponent extends EditDialogAbstract {
  name = this.node.name;
  //수정하면 바로 원본 데이터에 반영되는걸 막기 위해 따로 변수로 만들어놓는다.
  variableName = this.node.data.variableName;
  onSaveClick() {
    this.node.data.variableName = this.variableName;
    this.node.name = this.name;
    this.dialogRef.close();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ListenNodeEditDialogComponent_BaseFactory;
    return function ListenNodeEditDialogComponent_Factory(__ngFactoryType__) {
      return (\u0275ListenNodeEditDialogComponent_BaseFactory || (\u0275ListenNodeEditDialogComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ListenNodeEditDialogComponent)))(__ngFactoryType__ || _ListenNodeEditDialogComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListenNodeEditDialogComponent, selectors: [["app-listen-node-edit-dialog"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 3, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ListenNodeEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "mat-label");
      \u0275\u0275text(5, "node \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ListenNodeEditDialogComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
      \u0275\u0275text(9, "\uBCC0\uC218 \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ListenNodeEditDialogComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.variableName, $event) || (ctx.variableName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "mat-dialog-actions")(12, "button", 3);
      \u0275\u0275listener("click", function ListenNodeEditDialogComponent_Template_button_click_12_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(13, "\uCDE8\uC18C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 4);
      \u0275\u0275listener("click", function ListenNodeEditDialogComponent_Template_button_click_14_listener() {
        return ctx.onSaveClick();
      });
      \u0275\u0275text(15, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.node.type, " \uB178\uB4DC \uC218\uC815");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.variableName);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatButton, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListenNodeEditDialogComponent, [{
    type: Component,
    args: [{ selector: "app-listen-node-edit-dialog", standalone: false, template: '<h2 mat-dialog-title>{{node.type}} \uB178\uB4DC \uC218\uC815</h2>\n<mat-dialog-content style="display: flex; flex-direction: column;">\n    <mat-form-field>\n        <mat-label>node \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="name" />\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>\uBCC0\uC218 \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="variableName"/>\n    </mat-form-field>\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button (click)="onCancelClick()">\uCDE8\uC18C</button>\n    <button mat-raised-button color="primary" (click)="onSaveClick()">\uC800\uC7A5</button>\n</mat-dialog-actions>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListenNodeEditDialogComponent, { className: "ListenNodeEditDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/listen-node-edit-dialog/listen-node-edit-dialog.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/question-node-edit-dialog/question-node-edit-dialog.component.ts
var QuestionNodeEditDialogComponent = class _QuestionNodeEditDialogComponent extends EditDialogAbstract {
  text = this.node.data.text;
  name = this.node.name;
  //수정하면 바로 원본 데이터에 반영되는걸 막기 위해 따로 변수로 만들어놓는다.
  loadingSec = this.node.data.loadingSec;
  isLoading = this.node.data.isLoading;
  ngOnInit() {
  }
  onSaveClick() {
    this.node.data.text = this.text;
    this.node.name = this.name;
    this.node.data.loadingSec = this.loadingSec;
    this.node.data.isLoading = this.isLoading;
    this.dialogRef.close();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275QuestionNodeEditDialogComponent_BaseFactory;
    return function QuestionNodeEditDialogComponent_Factory(__ngFactoryType__) {
      return (\u0275QuestionNodeEditDialogComponent_BaseFactory || (\u0275QuestionNodeEditDialogComponent_BaseFactory = \u0275\u0275getInheritedFactory(_QuestionNodeEditDialogComponent)))(__ngFactoryType__ || _QuestionNodeEditDialogComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionNodeEditDialogComponent, selectors: [["app-question-node-edit-dialog"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 23, vars: 6, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "example-margin"], [3, "ngModelChange", "ngModel"], [1, "example-margin", 3, "value"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function QuestionNodeEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "mat-label");
      \u0275\u0275text(5, "node \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function QuestionNodeEditDialogComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
      \u0275\u0275text(9, "\uBC1C\uD654 \uB0B4\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "textarea", 2);
      \u0275\u0275twoWayListener("ngModelChange", function QuestionNodeEditDialogComponent_Template_textarea_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "label", 3);
      \u0275\u0275text(12, "\uB85C\uB529 \uC0AC\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-radio-group", 4);
      \u0275\u0275twoWayListener("ngModelChange", function QuestionNodeEditDialogComponent_Template_mat_radio_group_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.isLoading, $event) || (ctx.isLoading = $event);
        return $event;
      });
      \u0275\u0275elementStart(14, "mat-radio-button", 5);
      \u0275\u0275text(15, "\uC0AC\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-radio-button", 5);
      \u0275\u0275text(17, "\uBE44\uC0AC\uC6A9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "mat-dialog-actions")(19, "button", 6);
      \u0275\u0275listener("click", function QuestionNodeEditDialogComponent_Template_button_click_19_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(20, "\uCDE8\uC18C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 7);
      \u0275\u0275listener("click", function QuestionNodeEditDialogComponent_Template_button_click_21_listener() {
        return ctx.onSaveClick();
      });
      \u0275\u0275text(22, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.node.type, " \uB178\uB4DC \uC218\uC815");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.text);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("value", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", false);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatButton, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NgControlStatus, NgModel, MatRadioGroup, MatRadioButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionNodeEditDialogComponent, [{
    type: Component,
    args: [{ selector: "app-question-node-edit-dialog", standalone: false, template: '<h2 mat-dialog-title>{{node.type}} \uB178\uB4DC \uC218\uC815</h2>\n<mat-dialog-content style="display: flex; flex-direction: column;">\n    <mat-form-field>\n        <mat-label>node \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="name" />\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>\uBC1C\uD654 \uB0B4\uC6A9</mat-label>\n        <textarea matInput [(ngModel)]="text"></textarea>\n    </mat-form-field>\n\n    <label class="example-margin">\uB85C\uB529 \uC0AC\uC6A9</label>\n    <mat-radio-group [(ngModel)]="isLoading">\n        <mat-radio-button class="example-margin" [value]="true">\uC0AC\uC6A9</mat-radio-button>\n        <mat-radio-button class="example-margin" [value]="false">\uBE44\uC0AC\uC6A9</mat-radio-button>\n    </mat-radio-group>\n\n    <!-- @if(isLoading){\n        <mat-form-field style="margin-top: 15px;">\n            <mat-label>\uB85C\uB529 \uC2DC\uAC04(\uCD08)</mat-label>\n            <input matInput [(ngModel)]="loadingSec" type="number"/>\n        </mat-form-field>\n    } -->\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button (click)="onCancelClick()">\uCDE8\uC18C</button>\n    <button mat-raised-button color="primary" (click)="onSaveClick()">\uC800\uC7A5</button>\n</mat-dialog-actions>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionNodeEditDialogComponent, { className: "QuestionNodeEditDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/question-node-edit-dialog/question-node-edit-dialog.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/speak-node-edit-dialog/speak-node-edit-dialog.component.ts
function SpeakNodeEditDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 6)(1, "mat-label");
    \u0275\u0275text(2, "\uB85C\uB529 \uC2DC\uAC04(\uCD08)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function SpeakNodeEditDialogComponent_Conditional_18_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loadingSec, $event) || (ctx_r1.loadingSec = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loadingSec);
  }
}
var SpeakNodeEditDialogComponent = class _SpeakNodeEditDialogComponent extends EditDialogAbstract {
  text = this.node.data.text;
  name = this.node.name;
  //수정하면 바로 원본 데이터에 반영되는걸 막기 위해 따로 변수로 만들어놓는다.
  loadingSec = this.node.data.loadingSec;
  isLoading = this.node.data.isLoading;
  ngOnInit() {
  }
  onSaveClick() {
    this.node.data.text = this.text;
    this.node.name = this.name;
    this.node.data.loadingSec = this.loadingSec;
    this.node.data.isLoading = this.isLoading;
    this.dialogRef.close();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SpeakNodeEditDialogComponent_BaseFactory;
    return function SpeakNodeEditDialogComponent_Factory(__ngFactoryType__) {
      return (\u0275SpeakNodeEditDialogComponent_BaseFactory || (\u0275SpeakNodeEditDialogComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SpeakNodeEditDialogComponent)))(__ngFactoryType__ || _SpeakNodeEditDialogComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpeakNodeEditDialogComponent, selectors: [["app-speak-node-edit-dialog"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 7, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "example-margin"], [3, "ngModelChange", "ngModel"], [1, "example-margin", 3, "value"], [2, "margin-top", "15px"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"]], template: function SpeakNodeEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "mat-label");
      \u0275\u0275text(5, "node \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function SpeakNodeEditDialogComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
      \u0275\u0275text(9, "\uBC1C\uD654 \uB0B4\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "textarea", 2);
      \u0275\u0275twoWayListener("ngModelChange", function SpeakNodeEditDialogComponent_Template_textarea_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.text, $event) || (ctx.text = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "label", 3);
      \u0275\u0275text(12, "\uB85C\uB529 \uC0AC\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-radio-group", 4);
      \u0275\u0275twoWayListener("ngModelChange", function SpeakNodeEditDialogComponent_Template_mat_radio_group_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.isLoading, $event) || (ctx.isLoading = $event);
        return $event;
      });
      \u0275\u0275elementStart(14, "mat-radio-button", 5);
      \u0275\u0275text(15, "\uC0AC\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-radio-button", 5);
      \u0275\u0275text(17, "\uBE44\uC0AC\uC6A9");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, SpeakNodeEditDialogComponent_Conditional_18_Template, 4, 1, "mat-form-field", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-dialog-actions")(20, "button", 7);
      \u0275\u0275listener("click", function SpeakNodeEditDialogComponent_Template_button_click_20_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(21, "\uCDE8\uC18C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 8);
      \u0275\u0275listener("click", function SpeakNodeEditDialogComponent_Template_button_click_22_listener() {
        return ctx.onSaveClick();
      });
      \u0275\u0275text(23, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.node.type, " \uB178\uB4DC \uC218\uC815");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.text);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("value", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading ? 18 : -1);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatButton, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatRadioGroup, MatRadioButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeakNodeEditDialogComponent, [{
    type: Component,
    args: [{ selector: "app-speak-node-edit-dialog", standalone: false, template: '<h2 mat-dialog-title>{{node.type}} \uB178\uB4DC \uC218\uC815</h2>\n<mat-dialog-content style="display: flex; flex-direction: column;">\n    <mat-form-field>\n        <mat-label>node \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="name" />\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>\uBC1C\uD654 \uB0B4\uC6A9</mat-label>\n        <textarea matInput [(ngModel)]="text"></textarea>\n    </mat-form-field>\n\n    <label class="example-margin">\uB85C\uB529 \uC0AC\uC6A9</label>\n    <mat-radio-group [(ngModel)]="isLoading">\n        <mat-radio-button class="example-margin" [value]="true">\uC0AC\uC6A9</mat-radio-button>\n        <mat-radio-button class="example-margin" [value]="false">\uBE44\uC0AC\uC6A9</mat-radio-button>\n    </mat-radio-group>\n\n    @if(isLoading){\n        <mat-form-field style="margin-top: 15px;">\n            <mat-label>\uB85C\uB529 \uC2DC\uAC04(\uCD08)</mat-label>\n            <input matInput [(ngModel)]="loadingSec" type="number"/>\n        </mat-form-field>\n    }\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button (click)="onCancelClick()">\uCDE8\uC18C</button>\n    <button mat-raised-button color="primary" (click)="onSaveClick()">\uC800\uC7A5</button>\n</mat-dialog-actions>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpeakNodeEditDialogComponent, { className: "SpeakNodeEditDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/speak-node-edit-dialog/speak-node-edit-dialog.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/split-node-edit-dialog/split-node-edit-dialog.component.ts
function SplitNodeEditDialogComponent_For_15_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function SplitNodeEditDialogComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div")(2, "mat-form-field")(3, "mat-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 2);
    \u0275\u0275twoWayListener("ngModelChange", function SplitNodeEditDialogComponent_For_15_Template_input_ngModelChange_5_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.routingKey, $event) || (item_r2.routingKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div")(7, "mat-form-field")(8, "mat-label");
    \u0275\u0275text(9, "\uC5F0\uACB0\uD560 \uB178\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-select", 7);
    \u0275\u0275twoWayListener("valueChange", function SplitNodeEditDialogComponent_For_15_Template_mat_select_valueChange_10_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(item_r2.targetNodeId, $event) || (item_r2.targetNodeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(11, SplitNodeEditDialogComponent_For_15_For_12_Template, 2, 2, "mat-option", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 9)(14, "button", 3);
    \u0275\u0275listener("click", function SplitNodeEditDialogComponent_For_15_Template_button_click_14_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDeleteClick($index_r4));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\uC870\uAC74 ", $index_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r2.routingKey);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("value", item_r2.targetNodeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.connectables);
  }
}
var SplitNodeEditDialogComponent = class _SplitNodeEditDialogComponent extends EditDialogAbstract {
  name = this.node.name;
  //수정하면 바로 원본 데이터에 반영되는걸 막기 위해 따로 변수로 만들어놓는다.
  variableName = this.node.data.variableName;
  conditions = structuredClone(this.node.data.conditions) ?? [];
  connectables = [];
  ngOnInit() {
    this.connectables = Object.values(this.node.rightConnectedList).map((d) => ({ id: d.node.id, name: d.node.name }));
  }
  onSaveClick() {
    this.node.data.variableName = this.variableName;
    this.node.data.conditions = this.conditions;
    this.node.name = this.name;
    console.log("split node data", this.node.data);
    this.dialogRef.close();
  }
  onAddClick() {
    this.conditions.push({ routingKey: "", targetNodeId: "" });
  }
  onDeleteClick(index) {
    this.conditions.splice(index, 1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SplitNodeEditDialogComponent_BaseFactory;
    return function SplitNodeEditDialogComponent_Factory(__ngFactoryType__) {
      return (\u0275SplitNodeEditDialogComponent_BaseFactory || (\u0275SplitNodeEditDialogComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SplitNodeEditDialogComponent)))(__ngFactoryType__ || _SplitNodeEditDialogComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplitNodeEditDialogComponent, selectors: [["app-split-node-edit-dialog"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 3, consts: [["mat-dialog-title", ""], [2, "display", "flex", "flex-direction", "column"], ["matInput", "", 3, "ngModelChange", "ngModel"], [3, "click"], [2, "border-radius", "10px", "background-color", "rgb(247, 225, 247)", "margin-bottom", "10px", "padding", "10px"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "valueChange", "value"], [3, "value"], [2, "text-align", "center"]], template: function SplitNodeEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "mat-label");
      \u0275\u0275text(5, "node \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function SplitNodeEditDialogComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "mat-form-field")(8, "mat-label");
      \u0275\u0275text(9, "\uBCC0\uC218 \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function SplitNodeEditDialogComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.variableName, $event) || (ctx.variableName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 3);
      \u0275\u0275listener("click", function SplitNodeEditDialogComponent_Template_button_click_11_listener() {
        return ctx.onAddClick();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(14, SplitNodeEditDialogComponent_For_15_Template, 17, 3, "div", 4, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-dialog-actions")(17, "button", 5);
      \u0275\u0275listener("click", function SplitNodeEditDialogComponent_Template_button_click_17_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(18, "\uCDE8\uC18C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 6);
      \u0275\u0275listener("click", function SplitNodeEditDialogComponent_Template_button_click_19_listener() {
        return ctx.onSaveClick();
      });
      \u0275\u0275text(20, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.node.type, " \uB178\uB4DC \uC218\uC815");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.variableName);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.conditions);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatButton, MatIcon, MatDialogTitle, MatDialogActions, MatDialogContent, MatSelect, MatOption, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitNodeEditDialogComponent, [{
    type: Component,
    args: [{ selector: "app-split-node-edit-dialog", standalone: false, template: '<h2 mat-dialog-title>{{node.type}} \uB178\uB4DC \uC218\uC815</h2>\n<mat-dialog-content style="display: flex; flex-direction: column;">\n    <mat-form-field>\n        <mat-label>node \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="name" />\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>\uBCC0\uC218 \uC774\uB984</mat-label>\n        <input matInput [(ngModel)]="variableName"/>\n    </mat-form-field>\n\n    <button (click)="onAddClick()"><mat-icon>add</mat-icon></button>\n    @for (item of conditions; track $index) {\n        <div style="border-radius: 10px; background-color: rgb(247, 225, 247); margin-bottom: 10px; padding: 10px;">\n            <div>\n                <mat-form-field>\n                    <mat-label>\uC870\uAC74 {{ $index + 1 }}</mat-label>\n                    <input matInput [(ngModel)]="item.routingKey" />\n                </mat-form-field>\n            </div>\n            <div>\n                <mat-form-field>\n                    <mat-label>\uC5F0\uACB0\uD560 \uB178\uB4DC</mat-label>\n                    <mat-select [(value)]="item.targetNodeId">\n                        @for (item of connectables; track $index) {\n                            <mat-option [value]="item.id">{{item.name}}</mat-option>\n                        }\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div style="text-align: center;">\n                <button (click)="onDeleteClick($index)"><mat-icon>delete</mat-icon></button>\n            </div>\n        </div>\n    }\n\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button (click)="onCancelClick()">\uCDE8\uC18C</button>\n    <button mat-raised-button color="primary" (click)="onSaveClick()">\uC800\uC7A5</button>\n</mat-dialog-actions>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplitNodeEditDialogComponent, { className: "SplitNodeEditDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/split-node-edit-dialog/split-node-edit-dialog.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/modules/chatflow-edit/registries/chatbot.registry.ts
var chatbotNodesMap = {
  speak: { type: "speak", node: SpeakNodeComponent, edit: SpeakNodeEditDialogComponent },
  listen: { type: "listen", node: ListenNodeComponent, edit: ListenNodeEditDialogComponent },
  split: { type: "split", node: SplitNodeComponent, edit: SplitNodeEditDialogComponent },
  button: { type: "button", node: ButtonNodeComponent, edit: ButtonNodeEditDialogComponent },
  question: { type: "question", node: QuestionNodeComponent, edit: QuestionNodeEditDialogComponent }
};

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/end-node/end-node.component.ts
var EndNodeComponent = class _EndNodeComponent extends NodeAbstract {
  category = "chatflow";
  type = "end";
  id = "end";
  top = 0;
  left = 400;
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EndNodeComponent_BaseFactory;
    return function EndNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275EndNodeComponent_BaseFactory || (\u0275EndNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EndNodeComponent)))(__ngFactoryType__ || _EndNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EndNodeComponent, selectors: [["app-end-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[3, "nodeAbstract"]], template: function EndNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-node-template", 0);
      \u0275\u0275text(1, "\uC885\uB8CC \uB178\uB4DC");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EndNodeComponent, [{
    type: Component,
    args: [{ selector: "app-end-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\uC885\uB8CC \uB178\uB4DC</app-node-template>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EndNodeComponent, { className: "EndNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/end-node/end-node.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/start-node/start-node.component.ts
var StartNodeComponent = class _StartNodeComponent extends NodeAbstract {
  category = "chatflow";
  type = "start";
  id = "start";
  top = 0;
  ngOnInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StartNodeComponent_BaseFactory;
    return function StartNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275StartNodeComponent_BaseFactory || (\u0275StartNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_StartNodeComponent)))(__ngFactoryType__ || _StartNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StartNodeComponent, selectors: [["app-start-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[3, "nodeAbstract"]], template: function StartNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-node-template", 0);
      \u0275\u0275text(1, "\uC2DC\uC791 \uB178\uB4DC");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StartNodeComponent, [{
    type: Component,
    args: [{ selector: "app-start-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\uC2DC\uC791 \uB178\uB4DC</app-node-template>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StartNodeComponent, { className: "StartNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/start-node/start-node.component.ts", lineNumber: 14 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/context-changer-node/context-changer-node.component.ts
function ContextChangerNodeComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4C1} ", ctx_r0.data.path);
  }
}
function ContextChangerNodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "mat-icon");
    \u0275\u0275text(3, "insert_drive_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ContextChangerNodeComponent_Conditional_1_Conditional_6_Template, 2, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.data.fileName, ".json");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.path ? 6 : -1);
  }
}
function ContextChangerNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " \uCEE8\uD14D\uC2A4\uD2B8 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
var ContextChangerNodeComponent = class _ContextChangerNodeComponent extends NodeAbstract {
  category = "chatflow";
  type = "contextChanger";
  data = {
    path: "",
    fileName: "",
    returnContextName: ""
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ContextChangerNodeComponent_BaseFactory;
    return function ContextChangerNodeComponent_Factory(__ngFactoryType__) {
      return (\u0275ContextChangerNodeComponent_BaseFactory || (\u0275ContextChangerNodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ContextChangerNodeComponent)))(__ngFactoryType__ || _ContextChangerNodeComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextChangerNodeComponent, selectors: [["app-context-changer-node"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "nodeAbstract"], [1, "context-changer-content"], [1, "context-changer-content", "empty"], [1, "file-info"], [1, "path-info"]], template: function ContextChangerNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-node-template", 0);
      \u0275\u0275conditionalCreate(1, ContextChangerNodeComponent_Conditional_1_Template, 7, 2, "div", 1)(2, ContextChangerNodeComponent_Conditional_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nodeAbstract", ctx);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.fileName ? 1 : 2);
    }
  }, styles: ["\n\n.context-changer-content[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #333;\n  background-color: rgba(255, 152, 0, 0.08);\n  border-radius: 4px;\n  max-height: 100px;\n  overflow-y: auto;\n}\n.context-changer-content.empty[_ngcontent-%COMP%] {\n  color: #999;\n  font-style: italic;\n}\n.context-changer-content[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: #ff9800;\n  margin-bottom: 4px;\n}\n.context-changer-content[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.context-changer-content[_ngcontent-%COMP%]   .path-info[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #666;\n  padding-left: 24px;\n}\n/*# sourceMappingURL=context-changer-node.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextChangerNodeComponent, [{
    type: Component,
    args: [{ selector: "app-context-changer-node", standalone: false, template: '<app-node-template [nodeAbstract]="this">\n  @if (data.fileName) {\n    <div class="context-changer-content">\n      <div class="file-info">\n        <mat-icon>insert_drive_file</mat-icon>\n        <span>{{ data.fileName }}.json</span>\n      </div>\n      @if (data.path) {\n        <div class="path-info">\u{1F4C1} {{ data.path }}</div>\n      }\n    </div>\n  } @else {\n    <div class="context-changer-content empty">\n      \uCEE8\uD14D\uC2A4\uD2B8 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694\n    </div>\n  }\n</app-node-template>\n', styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/context-changer-node/context-changer-node.component.scss */\n.context-changer-content {\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #333;\n  background-color: rgba(255, 152, 0, 0.08);\n  border-radius: 4px;\n  max-height: 100px;\n  overflow-y: auto;\n}\n.context-changer-content.empty {\n  color: #999;\n  font-style: italic;\n}\n.context-changer-content .file-info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: #ff9800;\n  margin-bottom: 4px;\n}\n.context-changer-content .file-info mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.context-changer-content .path-info {\n  font-size: 11px;\n  color: #666;\n  padding-left: 24px;\n}\n/*# sourceMappingURL=context-changer-node.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextChangerNodeComponent, { className: "ContextChangerNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/context-changer-node/context-changer-node.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/context-changer-node-edit-dialog/context-changer-node-edit-dialog.component.ts
var ContextChangerNodeEditDialogComponent = class _ContextChangerNodeEditDialogComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onSave() {
    this.dialogRef.close(this.data);
  }
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function ContextChangerNodeEditDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextChangerNodeEditDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextChangerNodeEditDialogComponent, selectors: [["app-context-changer-node-edit-dialog"]], standalone: false, decls: 42, vars: 3, consts: [["mat-dialog-title", ""], [1, "dialog-section"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "\uC608: json/chatflows", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC608: welcome", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "\uC608: main", 3, "ngModelChange", "ngModel"], [1, "info-box"], [1, "info-content"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ContextChangerNodeEditDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "\uCEE8\uD14D\uC2A4\uD2B8 \uBCC0\uACBD \uB178\uB4DC \uC124\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content")(3, "div", 1)(4, "mat-form-field", 2)(5, "mat-label");
      \u0275\u0275text(6, "JSON \uD30C\uC77C \uACBD\uB85C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ContextChangerNodeEditDialogComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.data.path, $event) || (ctx.data.path = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-hint");
      \u0275\u0275text(9, "public \uD3F4\uB354 \uAE30\uC900 \uC0C1\uB300 \uACBD\uB85C (\uC608: json/chatflows)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-form-field", 2)(11, "mat-label");
      \u0275\u0275text(12, "\uD30C\uC77C \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ContextChangerNodeEditDialogComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.data.fileName, $event) || (ctx.data.fileName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-hint");
      \u0275\u0275text(15, ".json \uD655\uC7A5\uC790\uB294 \uC81C\uC678 (\uC608: welcome)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "mat-form-field", 2)(17, "mat-label");
      \u0275\u0275text(18, "\uBCF5\uADC0\uD560 \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ContextChangerNodeEditDialogComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.data.returnContextName, $event) || (ctx.data.returnContextName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-hint");
      \u0275\u0275text(21, "\uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0 \uC885\uB8CC \uD6C4 \uB3CC\uC544\uC62C \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "mat-icon");
      \u0275\u0275text(24, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 7)(26, "strong");
      \u0275\u0275text(27, "\uC0AC\uC6A9 \uBC29\uBC95:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ol")(29, "li");
      \u0275\u0275text(30, "\uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0 JSON \uD30C\uC77C\uC744 public \uD3F4\uB354\uC5D0 \uBC30\uCE58");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li");
      \u0275\u0275text(32, "\uACBD\uB85C\uC640 \uD30C\uC77C\uBA85\uC744 \uC785\uB825 (\uC608: json/sub-flow, filename)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34, '\uD604\uC7AC \uCC57\uD50C\uB85C\uC6B0\uC758 \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984\uC744 "\uBCF5\uADC0\uD560 \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984"\uC5D0 \uC785\uB825');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li");
      \u0275\u0275text(36, "\uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC885\uB8CC\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uD604\uC7AC \uCC57\uD50C\uB85C\uC6B0\uB85C \uBCF5\uADC0");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "mat-dialog-actions", 8)(38, "button", 9);
      \u0275\u0275listener("click", function ContextChangerNodeEditDialogComponent_Template_button_click_38_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(39, "\uCDE8\uC18C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 10);
      \u0275\u0275listener("click", function ContextChangerNodeEditDialogComponent_Template_button_click_40_listener() {
        return ctx.onSave();
      });
      \u0275\u0275text(41, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.data.path);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.data.fileName);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.data.returnContextName);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatHint, MatButton, MatIcon, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.dialog-section[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.info-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.08),\n      rgba(255, 193, 7, 0.08));\n  border-radius: 8px;\n  border: 1px dashed rgba(255, 152, 0, 0.3);\n  margin-top: 16px;\n}\n.info-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.info-box[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #555;\n}\n.info-box[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n}\n.info-box[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  padding-left: 20px;\n}\n.info-box[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  color: #666;\n}\n.info-box[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 500px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=context-changer-node-edit-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextChangerNodeEditDialogComponent, [{
    type: Component,
    args: [{ selector: "app-context-changer-node-edit-dialog", standalone: false, template: '<h2 mat-dialog-title>\uCEE8\uD14D\uC2A4\uD2B8 \uBCC0\uACBD \uB178\uB4DC \uC124\uC815</h2>\n\n<mat-dialog-content>\n  <div class="dialog-section">\n    <mat-form-field appearance="outline" class="full-width">\n      <mat-label>JSON \uD30C\uC77C \uACBD\uB85C</mat-label>\n      <input matInput [(ngModel)]="data.path" placeholder="\uC608: json/chatflows">\n      <mat-hint>public \uD3F4\uB354 \uAE30\uC900 \uC0C1\uB300 \uACBD\uB85C (\uC608: json/chatflows)</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field appearance="outline" class="full-width">\n      <mat-label>\uD30C\uC77C \uC774\uB984</mat-label>\n      <input matInput [(ngModel)]="data.fileName" placeholder="\uC608: welcome">\n      <mat-hint>.json \uD655\uC7A5\uC790\uB294 \uC81C\uC678 (\uC608: welcome)</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field appearance="outline" class="full-width">\n      <mat-label>\uBCF5\uADC0\uD560 \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984</mat-label>\n      <input matInput [(ngModel)]="data.returnContextName" placeholder="\uC608: main">\n      <mat-hint>\uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0 \uC885\uB8CC \uD6C4 \uB3CC\uC544\uC62C \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984</mat-hint>\n    </mat-form-field>\n  </div>\n\n  <div class="info-box">\n    <mat-icon>info</mat-icon>\n    <div class="info-content">\n      <strong>\uC0AC\uC6A9 \uBC29\uBC95:</strong>\n      <ol>\n        <li>\uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0 JSON \uD30C\uC77C\uC744 public \uD3F4\uB354\uC5D0 \uBC30\uCE58</li>\n        <li>\uACBD\uB85C\uC640 \uD30C\uC77C\uBA85\uC744 \uC785\uB825 (\uC608: json/sub-flow, filename)</li>\n        <li>\uD604\uC7AC \uCC57\uD50C\uB85C\uC6B0\uC758 \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984\uC744 "\uBCF5\uADC0\uD560 \uCEE8\uD14D\uC2A4\uD2B8 \uC774\uB984"\uC5D0 \uC785\uB825</li>\n        <li>\uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC885\uB8CC\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uD604\uC7AC \uCC57\uD50C\uB85C\uC6B0\uB85C \uBCF5\uADC0</li>\n      </ol>\n    </div>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions align="end">\n  <button mat-button (click)="onCancel()">\uCDE8\uC18C</button>\n  <button mat-raised-button color="primary" (click)="onSave()">\uC800\uC7A5</button>\n</mat-dialog-actions>\n', styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/context-changer-node-edit-dialog/context-changer-node-edit-dialog.component.scss */\n.dialog-section {\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.full-width {\n  width: 100%;\n}\n.info-box {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.08),\n      rgba(255, 193, 7, 0.08));\n  border-radius: 8px;\n  border: 1px dashed rgba(255, 152, 0, 0.3);\n  margin-top: 16px;\n}\n.info-box mat-icon {\n  color: #ff9800;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.info-box .info-content {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #555;\n}\n.info-box .info-content strong {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n}\n.info-box .info-content ol {\n  margin: 8px 0 0 0;\n  padding-left: 20px;\n}\n.info-box .info-content ol li {\n  margin-bottom: 6px;\n  color: #666;\n}\n.info-box .info-content ol li:last-child {\n  margin-bottom: 0;\n}\nmat-dialog-content {\n  min-width: 500px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=context-changer-node-edit-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextChangerNodeEditDialogComponent, { className: "ContextChangerNodeEditDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatflow/context-changer-node-edit-dialog/context-changer-node-edit-dialog.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/modules/chatflow-edit/registries/chatflow.registry.ts
var chatflowNodeMap = {
  start: { type: "start", node: StartNodeComponent, edit: null },
  end: { type: "end", node: EndNodeComponent, edit: null },
  contextChanger: { type: "contextChanger", node: ContextChangerNodeComponent, edit: ContextChangerNodeEditDialogComponent }
};

// src/app/modules/expedition/modules/chatflow-edit/registries/node.registry.ts
var nodesCategoriesMap = {
  "chatbot": {
    name: "\uCC57\uBD07",
    type: "chatbot",
    nodes: Object.values(chatbotNodesMap)
  },
  "chatflow": {
    name: "\uCC57\uD50C\uB85C\uC6B0",
    type: "chatflow",
    nodes: Object.values(chatflowNodeMap).filter((node) => node.type !== "start" && node.type !== "end")
  }
};
var nodes = __spreadValues(__spreadValues({}, chatflowNodeMap), chatbotNodesMap);

// src/app/modules/expedition/modules/chatflow-reader/classes/chatflow-logic.reader.ts
var ChatflowLogicReader = class {
  chatbotActionService;
  // logicManager: ChatflowLogicManager;
  // currentNode: INodeJsonData<any> | null = null;
  nodeLogics = {};
  chatflowData = {};
  //읽어온 챗플로우 데이터
  variables = {};
  //챗플로우 변수들
  $chatflowEnded = new Subject();
  currentNode$ = new Subject();
  start() {
    this.execute("start");
  }
  constructor(chatbotActionService) {
    this.chatbotActionService = chatbotActionService;
    this.nodeLogics["speak"] = new SpeakLogic(this);
    this.nodeLogics["start"] = new StartLogic(this);
    this.nodeLogics["listen"] = new ListenLogic(this);
    this.nodeLogics["split"] = new SplitLogic(this);
    this.nodeLogics["end"] = new EndLogic(this);
    this.nodeLogics["button"] = new ButtonLogic(this);
    this.nodeLogics["question"] = new QuestionLogic(this);
  }
  execute(nodeId) {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u{1F504} execute() \uD638\uCD9C\uB428 - nodeId: ${nodeId}`);
    }
    const readData = this.chatflowData[nodeId];
    if (!readData) {
      console.warn("id\uC5D0 \uD574\uB2F9\uD558\uB294 \uB178\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      if (debugLogger) {
        debugLogger.error("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u274C \uB178\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C: ${nodeId}`);
        debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB178\uB4DC: [${Object.keys(this.chatflowData).join(", ")}]`);
      }
      return;
    }
    if (!this.nodeLogics[readData.type]) {
      console.warn("\uD574\uB2F9 \uB178\uB4DC \uD0C0\uC785\uC5D0 \uB300\uD55C \uB85C\uC9C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4:", readData.type);
      if (debugLogger) {
        debugLogger.error("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u274C \uB178\uB4DC \uD0C0\uC785 \uB85C\uC9C1 \uC5C6\uC74C: ${readData.type}`);
      }
    }
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u{1F4E4} currentNode$ \uBC1C\uD589: ${readData.type} (${nodeId})`);
    }
    this.currentNode$.next(readData);
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u{1F4DD} readData \uC124\uC815 \uBC0F \uB85C\uC9C1 \uC2DC\uC791: ${readData.type}`);
    }
    this.nodeLogics[readData.type].readData = readData;
    this.nodeLogics[readData.type].start();
  }
  init() {
    this.variables = {};
    this.chatflowData = {};
  }
};

// src/app/modules/expedition/modules/chatflow-edit/classes/chatflow-edit.reader.ts
var ChatflowEditReader = class {
  container;
  // nodeMapper = new NodeMapper();
  nodes = nodes;
  constructor(container) {
    this.container = container;
  }
  tmpNode = {};
  locateChatflowNodes(chatflow) {
    const startRef = this.locateConnectedNode("start", chatflow.connected);
    this.locateUnconnectedNode(chatflow.unconnected);
    this.tmpNode = {};
    return startRef;
  }
  renderRightNodes(myNodeData, myNodeRef, chatflowData) {
    myNodeData.rightNodeIds.forEach((id) => {
      if (this.tmpNode[id]) {
        const rightNode2 = this.tmpNode[id];
        const myRightLine2 = rightNode2.drawLeftLine(myNodeRef.instance);
        myNodeRef.instance.rightConnectedList[id] = { node: rightNode2, line: myRightLine2 };
        rightNode2.leftConnectedList[myNodeRef.instance.id] = { node: myNodeRef.instance, line: myRightLine2 };
        return;
      }
      const rightNode = this.locateConnectedNode(id, chatflowData);
      if (!rightNode)
        return;
      const myRightLine = rightNode.drawLeftLine(myNodeRef.instance);
      myNodeRef.instance.rightConnectedList[id] = { node: rightNode, line: myRightLine };
      rightNode.leftConnectedList[myNodeRef.instance.id] = { node: myNodeRef.instance, line: myRightLine };
      console.log("my instance", myNodeRef.instance);
    });
  }
  locateConnectedNode(nodeId, chatflowData) {
    console.log("locateNodes", nodeId);
    const myNodeData = chatflowData[nodeId];
    if (!chatflowData[nodeId]) {
      console.warn("\uB178\uB4DC \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
      return null;
    }
    if (!this.nodes[myNodeData.type]) {
      console.warn("\uB9E4\uD551\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD655\uC778\uD574\uC8FC\uC138\uC694.");
      return null;
    }
    const myNodeRef = this.container.createComponent(this.nodes[myNodeData.type].node);
    myNodeRef.instance.init(myNodeData, myNodeRef);
    if (myNodeData.leftNodeIds.length > 1 && !this.tmpNode[myNodeData.id]) {
      this.tmpNode[myNodeData.id] = myNodeRef.instance;
    }
    console.log("nodeId: ", nodeId, "rightNodeIds ", myNodeData.rightNodeIds);
    this.renderRightNodes(myNodeData, myNodeRef, chatflowData);
    return myNodeRef.instance;
  }
  locateUnconnectedNode(chatflowData) {
    Object.values(chatflowData).forEach((myNodeData) => {
      if (myNodeData.leftNodeIds.length > 0)
        return;
      if (!this.nodes[myNodeData.type]) {
        console.warn("\uB9E4\uD551\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uD655\uC778\uD574\uC8FC\uC138\uC694.", myNodeData);
        return;
      }
      const myNodeRef = this.container.createComponent(this.nodes[myNodeData.type].node);
      myNodeRef.instance.init(myNodeData, myNodeRef);
      this.renderRightNodes(myNodeData, myNodeRef, chatflowData);
      myNodeRef.instance.addToUnconnected();
    });
  }
};

// src/app/modules/expedition/modules/chatflow-edit/components/dialogs/chatflow-json-dialog/chatflow-json-dialog.component.ts
var ChatflowJsonDialogComponent = class _ChatflowJsonDialogComponent {
  chatflowDataService = inject(ChatflowDataService);
  snackbarService = inject(MatSnackBar);
  jsonData = "";
  ngOnInit() {
    this.jsonData = JSON.stringify(this.chatflowDataService.createJsonData(), null, 4);
  }
  onCopyClick() {
    this.snackbarService.open("\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", { verticalPosition: "top", duration: 1e3 });
    navigator.clipboard.writeText(this.jsonData).then(() => {
      console.log("\uBCF5\uC0AC \uC131\uACF5");
    }).catch((err) => console.warn("\uBCF5\uC0AC \uC2E4\uD328:", err));
  }
  static \u0275fac = function ChatflowJsonDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowJsonDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowJsonDialogComponent, selectors: [["app-chatflow-json-dialog"]], standalone: false, decls: 5, vars: 1, consts: [[2, "padding", "10px"], ["mat-raised-button", "", 3, "click"], [2, "height", "500px", "overflow-y", "auto", "border", "1px solid grey", "border-radius", "10px", "padding", "10px"]], template: function ChatflowJsonDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ChatflowJsonDialogComponent_Template_button_click_1_listener() {
        return ctx.onCopyClick();
      });
      \u0275\u0275text(2, "\uBCF5\uC0AC\uD558\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "pre", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.jsonData);
    }
  }, dependencies: [MatButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowJsonDialogComponent, [{
    type: Component,
    args: [{ selector: "app-chatflow-json-dialog", standalone: false, template: '<div style="padding: 10px;">\n    <button mat-raised-button (click)="onCopyClick()">\uBCF5\uC0AC\uD558\uAE30</button>\n    <pre style="height: 500px; overflow-y: auto; border: 1px solid grey; border-radius: 10px; padding: 10px;">{{jsonData}}</pre>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowJsonDialogComponent, { className: "ChatflowJsonDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/dialogs/chatflow-json-dialog/chatflow-json-dialog.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/modules/chatflow-edit/services/chatflow-storage.service.ts
var ChatflowStorageService = class _ChatflowStorageService {
  dbName = "ChatflowDB";
  storeName = "chatflows";
  version = 1;
  db;
  dbReady = new BehaviorSubject(false);
  constructor() {
    this.initDB();
  }
  /**
   * IndexedDB 초기화
   */
  initDB() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, this.version);
        request.onerror = () => {
          console.error("IndexedDB \uC5F4\uAE30 \uC2E4\uD328:", request.error);
          reject(request.error);
        };
        request.onsuccess = () => {
          this.db = request.result;
          this.dbReady.next(true);
          console.log("\u2705 ChatflowDB \uCD08\uAE30\uD654 \uC644\uB8CC");
          resolve();
        };
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            const objectStore = db.createObjectStore(this.storeName, { keyPath: "id" });
            objectStore.createIndex("intentName", "intentName", { unique: false });
            objectStore.createIndex("updatedAt", "updatedAt", { unique: false });
            objectStore.createIndex("createdAt", "createdAt", { unique: false });
            console.log("\u2705 ChatflowDB Object Store \uC0DD\uC131 \uC644\uB8CC");
          }
        };
      });
    });
  }
  /**
   * DB가 준비될 때까지 대기
   */
  waitForDB() {
    return __async(this, null, function* () {
      if (this.dbReady.value)
        return;
      return new Promise((resolve) => {
        const subscription = this.dbReady.subscribe((ready) => {
          if (ready) {
            subscription.unsubscribe();
            resolve();
          }
        });
      });
    });
  }
  /**
   * 챗플로우 저장
   */
  saveChatflow(chatflow, id, thumbnail) {
    return __async(this, null, function* () {
      yield this.waitForDB();
      const chatflowId = id || nanoid();
      const now = (/* @__PURE__ */ new Date()).toISOString();
      const existing = yield this.loadChatflow(chatflowId);
      const data = __spreadProps(__spreadValues({
        id: chatflowId
      }, chatflow), {
        createdAt: existing?.createdAt || now,
        updatedAt: now,
        thumbnail: thumbnail || existing?.thumbnail
      });
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.storeName], "readwrite");
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.put(data);
        request.onsuccess = () => {
          console.log("\u2705 \uCC57\uD50C\uB85C\uC6B0 \uC800\uC7A5 \uC644\uB8CC:", chatflowId);
          resolve(chatflowId);
        };
        request.onerror = () => {
          console.error("\u274C \uCC57\uD50C\uB85C\uC6B0 \uC800\uC7A5 \uC2E4\uD328:", request.error);
          reject(request.error);
        };
      });
    });
  }
  /**
   * 챗플로우 불러오기
   */
  loadChatflow(id) {
    return __async(this, null, function* () {
      yield this.waitForDB();
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.storeName], "readonly");
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.get(id);
        request.onsuccess = () => {
          resolve(request.result || null);
        };
        request.onerror = () => {
          console.error("\u274C \uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328:", request.error);
          reject(request.error);
        };
      });
    });
  }
  /**
   * 전체 챗플로우 목록 조회 (최신순)
   */
  getChatflowList() {
    return __async(this, null, function* () {
      yield this.waitForDB();
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.storeName], "readonly");
        const objectStore = transaction.objectStore(this.storeName);
        const index = objectStore.index("updatedAt");
        const request = index.openCursor(null, "prev");
        const results = [];
        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            results.push(cursor.value);
            cursor.continue();
          } else {
            console.log(`\u2705 \uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D \uC870\uD68C \uC644\uB8CC: ${results.length}\uAC1C`);
            resolve(results);
          }
        };
        request.onerror = () => {
          console.error("\u274C \uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D \uC870\uD68C \uC2E4\uD328:", request.error);
          reject(request.error);
        };
      });
    });
  }
  /**
   * 챗플로우 삭제
   */
  deleteChatflow(id) {
    return __async(this, null, function* () {
      yield this.waitForDB();
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.storeName], "readwrite");
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.delete(id);
        request.onsuccess = () => {
          console.log("\u2705 \uCC57\uD50C\uB85C\uC6B0 \uC0AD\uC81C \uC644\uB8CC:", id);
          resolve(true);
        };
        request.onerror = () => {
          console.error("\u274C \uCC57\uD50C\uB85C\uC6B0 \uC0AD\uC81C \uC2E4\uD328:", request.error);
          reject(request.error);
        };
      });
    });
  }
  /**
   * 챗플로우 검색
   */
  searchChatflows(query) {
    return __async(this, null, function* () {
      const allChatflows = yield this.getChatflowList();
      if (!query.trim()) {
        return allChatflows;
      }
      const lowerQuery = query.toLowerCase();
      return allChatflows.filter((cf) => cf.intentName.toLowerCase().includes(lowerQuery));
    });
  }
  /**
   * 전체 챗플로우 개수
   */
  getCount() {
    return __async(this, null, function* () {
      yield this.waitForDB();
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.storeName], "readonly");
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.count();
        request.onsuccess = () => {
          resolve(request.result);
        };
        request.onerror = () => {
          reject(request.error);
        };
      });
    });
  }
  /**
   * 챗플로우 복제
   */
  duplicateChatflow(id) {
    return __async(this, null, function* () {
      const original = yield this.loadChatflow(id);
      if (!original) {
        throw new Error("\uC6D0\uBCF8 \uCC57\uD50C\uB85C\uC6B0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      }
      const newChatflow = {
        intentName: `${original.intentName} (\uBCF5\uC0AC\uBCF8)`,
        connected: original.connected,
        unconnected: original.unconnected
      };
      return this.saveChatflow(newChatflow, void 0, original.thumbnail);
    });
  }
  /**
   * DB 완전 초기화 (개발용)
   */
  clearAll() {
    return __async(this, null, function* () {
      yield this.waitForDB();
      return new Promise((resolve, reject) => {
        const transaction = this.db.transaction([this.storeName], "readwrite");
        const objectStore = transaction.objectStore(this.storeName);
        const request = objectStore.clear();
        request.onsuccess = () => {
          console.log("\u2705 \uBAA8\uB4E0 \uCC57\uD50C\uB85C\uC6B0 \uC0AD\uC81C \uC644\uB8CC");
          resolve();
        };
        request.onerror = () => {
          console.error("\u274C \uCC57\uD50C\uB85C\uC6B0 \uC0AD\uC81C \uC2E4\uD328:", request.error);
          reject(request.error);
        };
      });
    });
  }
  /**
   * Observable 래퍼 (RxJS 호환)
   */
  saveChatflow$(chatflow, id, thumbnail) {
    return from(this.saveChatflow(chatflow, id, thumbnail));
  }
  loadChatflow$(id) {
    return from(this.loadChatflow(id));
  }
  getChatflowList$() {
    return from(this.getChatflowList());
  }
  deleteChatflow$(id) {
    return from(this.deleteChatflow(id));
  }
  static \u0275fac = function ChatflowStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatflowStorageService, factory: _ChatflowStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/expedition/modules/chatflow-edit/components/chatflow-list-dialog/chatflow-list-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChatflowListDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
function ChatflowListDialogComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('"', ctx_r0.searchQuery, '"\uC640(\uACFC) \uC77C\uCE58\uD558\uB294 \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.');
  }
}
function ChatflowListDialogComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\uC800\uC7A5\uB41C \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\uC0C8\uB85C\uC6B4 \uCC57\uD50C\uB85C\uC6B0\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!");
    \u0275\u0275elementEnd();
  }
}
function ChatflowListDialogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, ChatflowListDialogComponent_Conditional_15_Conditional_1_Template, 6, 1)(2, ChatflowListDialogComponent_Conditional_15_Conditional_2_Template, 6, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.searchQuery ? 1 : 2);
  }
}
function ChatflowListDialogComponent_Conditional_16_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const chatflow_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", chatflow_r3.thumbnail, \u0275\u0275sanitizeUrl);
  }
}
function ChatflowListDialogComponent_Conditional_16_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "account_tree");
    \u0275\u0275elementEnd();
  }
}
function ChatflowListDialogComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function ChatflowListDialogComponent_Conditional_16_For_2_Template_div_click_0_listener() {
      const chatflow_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectChatflow(chatflow_r3));
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275conditionalCreate(2, ChatflowListDialogComponent_Conditional_16_For_2_Conditional_2_Template, 1, 1, "img", 17)(3, ChatflowListDialogComponent_Conditional_16_For_2_Conditional_3_Template, 2, 0, "mat-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "h3", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20)(8, "span", 21)(9, "mat-icon");
    \u0275\u0275text(10, "widgets");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 22)(13, "mat-icon");
    \u0275\u0275text(14, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 23)(17, "button", 24);
    \u0275\u0275listener("click", function ChatflowListDialogComponent_Conditional_16_For_2_Template_button_click_17_listener($event) {
      const chatflow_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDuplicateClick(chatflow_r3, $event));
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function ChatflowListDialogComponent_Conditional_16_For_2_Template_button_click_20_listener($event) {
      const chatflow_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDeleteClick(chatflow_r3, $event));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chatflow_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r0.selectedChatflow == null ? null : ctx_r0.selectedChatflow.id) === chatflow_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(chatflow_r3.thumbnail ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(chatflow_r3.intentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getNodeCount(chatflow_r3), "\uAC1C \uB178\uB4DC ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormattedDate(chatflow_r3.updatedAt), " ");
  }
}
function ChatflowListDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ChatflowListDialogComponent_Conditional_16_For_2_Template, 23, 6, "div", 14, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredChatflows);
  }
}
function ChatflowListDialogComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("| \uAC80\uC0C9 \uACB0\uACFC ", ctx_r0.filteredChatflows.length, "\uAC1C");
  }
}
function ChatflowListDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ChatflowListDialogComponent_Conditional_17_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uC804\uCCB4 ", ctx_r0.chatflows.length, "\uAC1C");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.searchQuery && ctx_r0.filteredChatflows.length !== ctx_r0.chatflows.length ? 3 : -1);
  }
}
var ChatflowListDialogComponent = class _ChatflowListDialogComponent {
  dialogRef = inject(MatDialogRef);
  storageService = inject(ChatflowStorageService);
  snackbar = inject(MatSnackBar);
  chatflows = [];
  filteredChatflows = [];
  searchQuery = "";
  loading = false;
  selectedChatflow = null;
  ngOnInit() {
    this.loadChatflows();
  }
  loadChatflows() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        this.chatflows = yield this.storageService.getChatflowList();
        this.filteredChatflows = [...this.chatflows];
        console.log("\uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D \uB85C\uB4DC:", this.chatflows.length);
      } catch (error) {
        console.error("\uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D \uB85C\uB4DC \uC2E4\uD328:", error);
        this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", "", {
          duration: 2e3,
          verticalPosition: "top"
        });
      } finally {
        this.loading = false;
      }
    });
  }
  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) {
      this.filteredChatflows = [...this.chatflows];
      return;
    }
    this.filteredChatflows = this.chatflows.filter((cf) => cf.intentName.toLowerCase().includes(query));
  }
  onSelectChatflow(chatflow) {
    this.selectedChatflow = chatflow;
  }
  onLoadClick() {
    if (!this.selectedChatflow) {
      this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.", "", {
        duration: 1500,
        verticalPosition: "top"
      });
      return;
    }
    this.dialogRef.close({
      action: "load",
      chatflow: this.selectedChatflow
    });
  }
  onDeleteClick(chatflow, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const confirmed = confirm(`"${chatflow.intentName}"\uC744(\uB97C) \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`);
      if (!confirmed)
        return;
      try {
        yield this.storageService.deleteChatflow(chatflow.id);
        this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", {
          duration: 1500,
          verticalPosition: "top"
        });
        yield this.loadChatflows();
      } catch (error) {
        console.error("\uCC57\uD50C\uB85C\uC6B0 \uC0AD\uC81C \uC2E4\uD328:", error);
        this.snackbar.open("\uC0AD\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.", "", {
          duration: 2e3,
          verticalPosition: "top"
        });
      }
    });
  }
  onDuplicateClick(chatflow, event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      try {
        const newId = yield this.storageService.duplicateChatflow(chatflow.id);
        this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0\uAC00 \uBCF5\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", {
          duration: 1500,
          verticalPosition: "top"
        });
        yield this.loadChatflows();
      } catch (error) {
        console.error("\uCC57\uD50C\uB85C\uC6B0 \uBCF5\uC81C \uC2E4\uD328:", error);
        this.snackbar.open("\uBCF5\uC81C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.", "", {
          duration: 2e3,
          verticalPosition: "top"
        });
      }
    });
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  getFormattedDate(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    if (days === 0) {
      const hours = Math.floor(diff / (1e3 * 60 * 60));
      if (hours === 0) {
        const minutes = Math.floor(diff / (1e3 * 60));
        return `${minutes}\uBD84 \uC804`;
      }
      return `${hours}\uC2DC\uAC04 \uC804`;
    } else if (days === 1) {
      return "\uC5B4\uC81C";
    } else if (days < 7) {
      return `${days}\uC77C \uC804`;
    } else {
      return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }
  getNodeCount(chatflow) {
    const connectedCount = Object.keys(chatflow.connected || {}).length;
    const unconnectedCount = Object.keys(chatflow.unconnected || {}).length;
    return connectedCount + unconnectedCount;
  }
  static \u0275fac = function ChatflowListDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowListDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowListDialogComponent, selectors: [["app-chatflow-list-dialog"]], standalone: false, decls: 25, vars: 6, consts: [[1, "chatflow-list-dialog"], ["mat-dialog-title", ""], [1, "search-bar"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "\uCC57\uD50C\uB85C\uC6B0 \uC774\uB984 \uAC80\uC0C9...", 3, "ngModelChange", "input", "ngModel"], ["matPrefix", ""], [1, "loading-container"], [1, "empty-state"], [1, "chatflow-list"], [1, "stats-info"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "40"], [1, "chatflow-item", 3, "selected"], [1, "chatflow-item", 3, "click"], [1, "chatflow-thumbnail"], ["alt", "Thumbnail", 3, "src"], [1, "chatflow-info"], [1, "chatflow-name"], [1, "chatflow-meta"], [1, "node-count"], [1, "update-time"], [1, "chatflow-actions"], ["mat-icon-button", "", "matTooltip", "\uBCF5\uC81C", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "\uC0AD\uC81C", 3, "click"]], template: function ChatflowListDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1)(2, "mat-icon");
      \u0275\u0275text(3, "folder_open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "\uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-dialog-content")(7, "div", 2)(8, "mat-form-field", 3)(9, "mat-label");
      \u0275\u0275text(10, "\uAC80\uC0C9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ChatflowListDialogComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function ChatflowListDialogComponent_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-icon", 5);
      \u0275\u0275text(13, "search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, ChatflowListDialogComponent_Conditional_14_Template, 4, 0, "div", 6);
      \u0275\u0275conditionalCreate(15, ChatflowListDialogComponent_Conditional_15_Template, 3, 1, "div", 7);
      \u0275\u0275conditionalCreate(16, ChatflowListDialogComponent_Conditional_16_Template, 3, 0, "div", 8);
      \u0275\u0275conditionalCreate(17, ChatflowListDialogComponent_Conditional_17_Template, 4, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-dialog-actions", 10)(19, "button", 11);
      \u0275\u0275listener("click", function ChatflowListDialogComponent_Template_button_click_19_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(20, " \uCDE8\uC18C ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function ChatflowListDialogComponent_Template_button_click_21_listener() {
        return ctx.onLoadClick();
      });
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "open_in_new");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " \uBD88\uB7EC\uC624\uAE30 ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredChatflows.length === 0 ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredChatflows.length > 0 ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.chatflows.length > 0 ? 17 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.selectedChatflow);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatPrefix, MatButton, MatIconButton, MatIcon, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NgControlStatus, NgModel, MatProgressSpinner, MatTooltip], styles: ["\n\n.chatflow-list-dialog[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n}\n.chatflow-list-dialog[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.chatflow-list-dialog[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.chatflow-list-dialog[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.chatflow-list-dialog[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-y: auto;\n  flex: 1;\n  min-height: 400px;\n  max-height: calc(80vh - 140px);\n}\n.chatflow-list-dialog[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin: 0;\n  gap: 12px;\n}\n.chatflow-list-dialog[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.02);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.search-bar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n.search-bar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-flex {\n  background: rgba(255, 255, 255, 0.05);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  gap: 16px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.7);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 14px;\n}\n.chatflow-list[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.chatflow-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chatflow-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(100, 181, 246, 0.3);\n}\n.chatflow-item.selected[_ngcontent-%COMP%] {\n  background: rgba(100, 181, 246, 0.15);\n  border-color: #64B5F6;\n}\n.chatflow-item.selected[_ngcontent-%COMP%]   .chatflow-name[_ngcontent-%COMP%] {\n  color: #64B5F6;\n}\n.chatflow-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.chatflow-thumbnail[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.chatflow-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.chatflow-thumbnail[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.chatflow-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.chatflow-name[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: color 0.2s ease;\n}\n.chatflow-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.chatflow-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.chatflow-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.chatflow-meta[_ngcontent-%COMP%]   .node-count[_ngcontent-%COMP%] {\n  color: rgba(100, 181, 246, 0.8);\n}\n.chatflow-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.chatflow-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.chatflow-item[_ngcontent-%COMP%]:hover   .chatflow-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.chatflow-item.selected[_ngcontent-%COMP%]   .chatflow-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.stats-info[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: rgba(255, 255, 255, 0.02);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n  text-align: center;\n}\n.stats-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n@media (max-width: 768px) {\n  .chatflow-list-dialog[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100vw;\n  }\n  .chatflow-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .chatflow-item[_ngcontent-%COMP%]   .chatflow-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 8px;\n  }\n  .chatflow-item[_ngcontent-%COMP%]   .chatflow-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=chatflow-list-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowListDialogComponent, [{
    type: Component,
    args: [{ selector: "app-chatflow-list-dialog", standalone: false, template: '<div class="chatflow-list-dialog">\n  <h2 mat-dialog-title>\n    <mat-icon>folder_open</mat-icon>\n    <span>\uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30</span>\n  </h2>\n\n  <mat-dialog-content>\n    <!-- \uAC80\uC0C9 \uBC14 -->\n    <div class="search-bar">\n      <mat-form-field appearance="outline" class="search-field">\n        <mat-label>\uAC80\uC0C9</mat-label>\n        <input \n          matInput \n          [(ngModel)]="searchQuery" \n          (input)="onSearch()"\n          placeholder="\uCC57\uD50C\uB85C\uC6B0 \uC774\uB984 \uAC80\uC0C9...">\n        <mat-icon matPrefix>search</mat-icon>\n      </mat-form-field>\n    </div>\n\n    <!-- \uB85C\uB529 \uC0C1\uD0DC -->\n    @if (loading) {\n      <div class="loading-container">\n        <mat-spinner diameter="40"></mat-spinner>\n        <p>\uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uB294 \uC911...</p>\n      </div>\n    }\n\n    <!-- \uBE48 \uC0C1\uD0DC -->\n    @if (!loading && filteredChatflows.length === 0) {\n      <div class="empty-state">\n        @if (searchQuery) {\n          <mat-icon>search_off</mat-icon>\n          <h3>\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</h3>\n          <p>"{{ searchQuery }}"\uC640(\uACFC) \uC77C\uCE58\uD558\uB294 \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>\n        } @else {\n          <mat-icon>description</mat-icon>\n          <h3>\uC800\uC7A5\uB41C \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</h3>\n          <p>\uC0C8\uB85C\uC6B4 \uCC57\uD50C\uB85C\uC6B0\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694!</p>\n        }\n      </div>\n    }\n\n    <!-- \uCC57\uD50C\uB85C\uC6B0 \uBAA9\uB85D -->\n    @if (!loading && filteredChatflows.length > 0) {\n      <div class="chatflow-list">\n        @for (chatflow of filteredChatflows; track chatflow.id) {\n          <div \n            class="chatflow-item"\n            [class.selected]="selectedChatflow?.id === chatflow.id"\n            (click)="onSelectChatflow(chatflow)">\n            \n            <!-- \uC378\uB124\uC77C \uB610\uB294 \uC544\uC774\uCF58 -->\n            <div class="chatflow-thumbnail">\n              @if (chatflow.thumbnail) {\n                <img [src]="chatflow.thumbnail" alt="Thumbnail">\n              } @else {\n                <mat-icon>account_tree</mat-icon>\n              }\n            </div>\n\n            <!-- \uCC57\uD50C\uB85C\uC6B0 \uC815\uBCF4 -->\n            <div class="chatflow-info">\n              <h3 class="chatflow-name">{{ chatflow.intentName }}</h3>\n              <div class="chatflow-meta">\n                <span class="node-count">\n                  <mat-icon>widgets</mat-icon>\n                  {{ getNodeCount(chatflow) }}\uAC1C \uB178\uB4DC\n                </span>\n                <span class="update-time">\n                  <mat-icon>schedule</mat-icon>\n                  {{ getFormattedDate(chatflow.updatedAt) }}\n                </span>\n              </div>\n            </div>\n\n            <!-- \uC561\uC158 \uBC84\uD2BC -->\n            <div class="chatflow-actions">\n              <button \n                mat-icon-button \n                (click)="onDuplicateClick(chatflow, $event)"\n                matTooltip="\uBCF5\uC81C">\n                <mat-icon>content_copy</mat-icon>\n              </button>\n              <button \n                mat-icon-button \n                color="warn"\n                (click)="onDeleteClick(chatflow, $event)"\n                matTooltip="\uC0AD\uC81C">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          </div>\n        }\n      </div>\n    }\n\n    <!-- \uD1B5\uACC4 \uC815\uBCF4 -->\n    @if (!loading && chatflows.length > 0) {\n      <div class="stats-info">\n        <span>\uC804\uCCB4 {{ chatflows.length }}\uAC1C</span>\n        @if (searchQuery && filteredChatflows.length !== chatflows.length) {\n          <span>| \uAC80\uC0C9 \uACB0\uACFC {{ filteredChatflows.length }}\uAC1C</span>\n        }\n      </div>\n    }\n  </mat-dialog-content>\n\n  <mat-dialog-actions align="end">\n    <button mat-button (click)="onCancelClick()">\n      \uCDE8\uC18C\n    </button>\n    <button \n      mat-raised-button \n      color="primary" \n      (click)="onLoadClick()"\n      [disabled]="!selectedChatflow">\n      <mat-icon>open_in_new</mat-icon>\n      \uBD88\uB7EC\uC624\uAE30\n    </button>\n  </mat-dialog-actions>\n</div>\n', styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/chatflow-list-dialog/chatflow-list-dialog.component.scss */\n.chatflow-list-dialog {\n  width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n}\n.chatflow-list-dialog h2[mat-dialog-title] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.chatflow-list-dialog h2[mat-dialog-title] mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.chatflow-list-dialog h2[mat-dialog-title] span {\n  font-size: 20px;\n  font-weight: 500;\n}\n.chatflow-list-dialog mat-dialog-content {\n  padding: 0;\n  overflow-y: auto;\n  flex: 1;\n  min-height: 400px;\n  max-height: calc(80vh - 140px);\n}\n.chatflow-list-dialog mat-dialog-actions {\n  padding: 16px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin: 0;\n  gap: 12px;\n}\n.chatflow-list-dialog mat-dialog-actions button mat-icon {\n  margin-right: 4px;\n}\n.search-bar {\n  padding: 16px 24px;\n  background: rgba(255, 255, 255, 0.02);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.search-bar .search-field {\n  width: 100%;\n  margin: 0;\n}\n.search-bar .search-field ::ng-deep .mat-mdc-form-field-flex {\n  background: rgba(255, 255, 255, 0.05);\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  gap: 16px;\n}\n.loading-container p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.7);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n}\n.empty-state mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.empty-state p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 14px;\n}\n.chatflow-list {\n  padding: 8px;\n}\n.chatflow-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.chatflow-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(100, 181, 246, 0.3);\n}\n.chatflow-item.selected {\n  background: rgba(100, 181, 246, 0.15);\n  border-color: #64B5F6;\n}\n.chatflow-item.selected .chatflow-name {\n  color: #64B5F6;\n}\n.chatflow-item:last-child {\n  margin-bottom: 0;\n}\n.chatflow-thumbnail {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.chatflow-thumbnail img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.chatflow-thumbnail mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.chatflow-info {\n  flex: 1;\n  min-width: 0;\n}\n.chatflow-name {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: color 0.2s ease;\n}\n.chatflow-meta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.chatflow-meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.chatflow-meta span mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.chatflow-meta .node-count {\n  color: rgba(100, 181, 246, 0.8);\n}\n.chatflow-actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.chatflow-actions button {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.chatflow-item:hover .chatflow-actions button,\n.chatflow-item.selected .chatflow-actions button {\n  opacity: 1;\n}\n.stats-info {\n  padding: 12px 24px;\n  background: rgba(255, 255, 255, 0.02);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n  text-align: center;\n}\n.stats-info span + span {\n  margin-left: 8px;\n}\n@media (max-width: 768px) {\n  .chatflow-list-dialog {\n    width: 100%;\n    max-width: 100vw;\n  }\n  .chatflow-item {\n    flex-wrap: wrap;\n  }\n  .chatflow-item .chatflow-actions {\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 8px;\n  }\n  .chatflow-item .chatflow-actions button {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=chatflow-list-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowListDialogComponent, { className: "ChatflowListDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/chatflow-list-dialog/chatflow-list-dialog.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/chatflow-save-dialog/chatflow-save-dialog.component.ts
function ChatflowSaveDialogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\uAE30\uC874 DB \uB370\uC774\uD130\uB97C \uB36E\uC5B4\uC501\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function ChatflowSaveDialogComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 12);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\uC800\uC7A5 \uC911...");
    \u0275\u0275elementEnd();
  }
}
function ChatflowSaveDialogComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isUpdate ? "save" : "save_as");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isUpdate ? "\uC218\uC815" : "\uC800\uC7A5");
  }
}
var ChatflowSaveDialogComponent = class _ChatflowSaveDialogComponent {
  data;
  dialogRef = inject(MatDialogRef);
  storageService = inject(ChatflowStorageService);
  snackbar = inject(MatSnackBar);
  chatflowName = "";
  saving = false;
  isUpdate = false;
  // Template helper
  Object = Object;
  constructor(data) {
    this.data = data;
  }
  ngOnInit() {
    this.chatflowName = this.data.chatflow.intentName || "";
    this.isUpdate = !!this.data.currentId;
  }
  onSaveClick() {
    return __async(this, null, function* () {
      if (!this.chatflowName.trim()) {
        this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", "", {
          duration: 1500,
          verticalPosition: "top"
        });
        return;
      }
      this.saving = true;
      try {
        const chatflowToSave = __spreadProps(__spreadValues({}, this.data.chatflow), {
          intentName: this.chatflowName.trim()
        });
        const id = yield this.storageService.saveChatflow(chatflowToSave, this.data.currentId);
        this.snackbar.open(this.isUpdate ? "\uCC57\uD50C\uB85C\uC6B0\uAC00 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4." : "\uCC57\uD50C\uB85C\uC6B0\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", {
          duration: 1500,
          verticalPosition: "top"
        });
        this.dialogRef.close({
          success: true,
          id,
          chatflow: chatflowToSave
        });
      } catch (error) {
        console.error("\uCC57\uD50C\uB85C\uC6B0 \uC800\uC7A5 \uC2E4\uD328:", error);
        this.snackbar.open("\uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.", "", {
          duration: 2e3,
          verticalPosition: "top"
        });
        this.saving = false;
      }
    });
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onKeyPress(event) {
    if (event.key === "Enter" && !this.saving) {
      this.onSaveClick();
    }
  }
  static \u0275fac = function ChatflowSaveDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowSaveDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowSaveDialogComponent, selectors: [["app-chatflow-save-dialog"]], standalone: false, decls: 35, vars: 11, consts: [[1, "chatflow-save-dialog"], ["mat-dialog-title", ""], [1, "description"], ["appearance", "outline", 1, "name-field"], ["matInput", "", "placeholder", "\uC608: \uACE0\uAC1D \uC0C1\uB2F4 \uCC57\uBD07", "autofocus", "", 3, "ngModelChange", "keypress", "ngModel", "disabled"], ["matPrefix", ""], [1, "save-info"], [1, "info-item"], [1, "update-notice"], ["align", "end"], ["mat-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "20"]], template: function ChatflowSaveDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1)(2, "mat-icon");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-dialog-content")(7, "p", 2);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
      \u0275\u0275text(11, "\uCC57\uD50C\uB85C\uC6B0 \uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ChatflowSaveDialogComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.chatflowName, $event) || (ctx.chatflowName = $event);
        return $event;
      });
      \u0275\u0275listener("keypress", function ChatflowSaveDialogComponent_Template_input_keypress_12_listener($event) {
        return ctx.onKeyPress($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-icon", 5);
      \u0275\u0275text(14, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-hint");
      \u0275\u0275text(16, "DB\uC5D0 \uC800\uC7A5\uD560 \uCC57\uD50C\uB85C\uC6B0\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 6)(18, "div", 7)(19, "mat-icon");
      \u0275\u0275text(20, "widgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 7)(24, "mat-icon");
      \u0275\u0275text(25, "extension");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(28, ChatflowSaveDialogComponent_Conditional_28_Template, 5, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-dialog-actions", 9)(30, "button", 10);
      \u0275\u0275listener("click", function ChatflowSaveDialogComponent_Template_button_click_30_listener() {
        return ctx.onCancelClick();
      });
      \u0275\u0275text(31, " \uCDE8\uC18C ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 11);
      \u0275\u0275listener("click", function ChatflowSaveDialogComponent_Template_button_click_32_listener() {
        return ctx.onSaveClick();
      });
      \u0275\u0275conditionalCreate(33, ChatflowSaveDialogComponent_Conditional_33_Template, 3, 0)(34, ChatflowSaveDialogComponent_Conditional_34_Template, 5, 2, "ng-container");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isUpdate ? "save" : "save_as");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isUpdate ? "\uCC57\uD50C\uB85C\uC6B0 \uC218\uC815" : "\uCC57\uD50C\uB85C\uC6B0 DB \uC800\uC7A5");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isUpdate ? "\uCC57\uD50C\uB85C\uC6B0\uB97C \uC218\uC815\uD558\uC5EC DB\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4." : "\uD604\uC7AC \uCC57\uD50C\uB85C\uC6B0\uB97C DB\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.chatflowName);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("\uC5F0\uACB0\uB41C \uB178\uB4DC: ", ctx.data.chatflow.connected ? ctx.Object.keys(ctx.data.chatflow.connected).length : 0, "\uAC1C");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\uB3C5\uB9BD \uB178\uB4DC: ", ctx.data.chatflow.unconnected ? ctx.Object.keys(ctx.data.chatflow.unconnected).length : 0, "\uAC1C");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUpdate ? 28 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.chatflowName.trim() || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 33 : 34);
    }
  }, dependencies: [MatInput, MatFormField, MatLabel, MatHint, MatPrefix, MatButton, MatIcon, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NgControlStatus, NgModel, MatProgressSpinner], styles: ["\n\n.chatflow-save-dialog[_ngcontent-%COMP%] {\n  width: 450px;\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   h2[mat-dialog-title][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin: 0;\n  gap: 12px;\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chatflow-save-dialog[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.name-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.name-field[_ngcontent-%COMP%]     .mat-mdc-form-field-flex {\n  background: rgba(255, 255, 255, 0.05);\n}\n.save-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.info-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: rgba(100, 181, 246, 0.8);\n}\n.update-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: rgba(255, 152, 0, 0.1);\n  border-radius: 6px;\n  border: 1px solid rgba(255, 152, 0, 0.3);\n}\n.update-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #FF9800;\n}\n.update-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n/*# sourceMappingURL=chatflow-save-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowSaveDialogComponent, [{
    type: Component,
    args: [{ selector: "app-chatflow-save-dialog", standalone: false, template: `<div class="chatflow-save-dialog">
  <h2 mat-dialog-title>
    <mat-icon>{{ isUpdate ? 'save' : 'save_as' }}</mat-icon>
    <span>{{ isUpdate ? '\uCC57\uD50C\uB85C\uC6B0 \uC218\uC815' : '\uCC57\uD50C\uB85C\uC6B0 DB \uC800\uC7A5' }}</span>
  </h2>

  <mat-dialog-content>
    <p class="description">
      {{ isUpdate ? '\uCC57\uD50C\uB85C\uC6B0\uB97C \uC218\uC815\uD558\uC5EC DB\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.' : '\uD604\uC7AC \uCC57\uD50C\uB85C\uC6B0\uB97C DB\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.' }}
    </p>

    <mat-form-field appearance="outline" class="name-field">
      <mat-label>\uCC57\uD50C\uB85C\uC6B0 \uC774\uB984</mat-label>
      <input 
        matInput 
        [(ngModel)]="chatflowName"
        (keypress)="onKeyPress($event)"
        placeholder="\uC608: \uACE0\uAC1D \uC0C1\uB2F4 \uCC57\uBD07"
        [disabled]="saving"
        autofocus>
      <mat-icon matPrefix>edit</mat-icon>
      <mat-hint>DB\uC5D0 \uC800\uC7A5\uD560 \uCC57\uD50C\uB85C\uC6B0\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694</mat-hint>
    </mat-form-field>

    <!-- \uC800\uC7A5 \uC815\uBCF4 -->
    <div class="save-info">
      <div class="info-item">
        <mat-icon>widgets</mat-icon>
        <span>\uC5F0\uACB0\uB41C \uB178\uB4DC: {{ data.chatflow.connected ? Object.keys(data.chatflow.connected).length : 0 }}\uAC1C</span>
      </div>
      <div class="info-item">
        <mat-icon>extension</mat-icon>
        <span>\uB3C5\uB9BD \uB178\uB4DC: {{ data.chatflow.unconnected ? Object.keys(data.chatflow.unconnected).length : 0 }}\uAC1C</span>
      </div>
    </div>

    @if (isUpdate) {
      <div class="update-notice">
        <mat-icon>info</mat-icon>
        <span>\uAE30\uC874 DB \uB370\uC774\uD130\uB97C \uB36E\uC5B4\uC501\uB2C8\uB2E4.</span>
      </div>
    }
  </mat-dialog-content>

  <mat-dialog-actions align="end">
    <button 
      mat-button 
      (click)="onCancelClick()"
      [disabled]="saving">
      \uCDE8\uC18C
    </button>
    <button 
      mat-raised-button 
      color="primary" 
      (click)="onSaveClick()"
      [disabled]="!chatflowName.trim() || saving">
      @if (saving) {
        <mat-spinner diameter="20"></mat-spinner>
        <span>\uC800\uC7A5 \uC911...</span>
      } @else {
        <ng-container>
          <mat-icon>{{ isUpdate ? 'save' : 'save_as' }}</mat-icon>
          <span>{{ isUpdate ? '\uC218\uC815' : '\uC800\uC7A5' }}</span>
        </ng-container>
      }
    </button>
  </mat-dialog-actions>
</div>
`, styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/chatflow-save-dialog/chatflow-save-dialog.component.scss */\n.chatflow-save-dialog {\n  width: 450px;\n}\n.chatflow-save-dialog h2[mat-dialog-title] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.chatflow-save-dialog h2[mat-dialog-title] mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.chatflow-save-dialog h2[mat-dialog-title] span {\n  font-size: 20px;\n  font-weight: 500;\n}\n.chatflow-save-dialog mat-dialog-content {\n  padding: 24px;\n}\n.chatflow-save-dialog mat-dialog-actions {\n  padding: 16px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin: 0;\n  gap: 12px;\n}\n.chatflow-save-dialog mat-dialog-actions button {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chatflow-save-dialog mat-dialog-actions button mat-spinner {\n  margin-right: 4px;\n}\n.description {\n  margin: 0 0 20px 0;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.name-field {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.name-field ::ng-deep .mat-mdc-form-field-flex {\n  background: rgba(255, 255, 255, 0.05);\n}\n.save-info {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.info-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: rgba(100, 181, 246, 0.8);\n}\n.update-notice {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: rgba(255, 152, 0, 0.1);\n  border-radius: 6px;\n  border: 1px solid rgba(255, 152, 0, 0.3);\n}\n.update-notice mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #FF9800;\n}\n.update-notice span {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n/*# sourceMappingURL=chatflow-save-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowSaveDialogComponent, { className: "ChatflowSaveDialogComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/chatflow-save-dialog/chatflow-save-dialog.component.ts", lineNumber: 18 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/chatflow-edit/chatflow-edit.component.ts
var _c02 = ["container"];
var _c12 = ["svg"];
var _c2 = ["intentName"];
var _c3 = ["fileInput"];
var _c4 = (a0) => ({ "height.px": a0 });
var _c5 = (a0, a1, a2) => ({ "width.px": a0, "height.px": a1, "transform": a2, "transform-origin": "0 0" });
var _c6 = (a0, a1) => ({ "top.px": a0, "left.px": a1 });
var _forTrack02 = ($index, $item) => $item.type;
function ChatflowEditComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 23);
    \u0275\u0275text(1, "cloud_done");
    \u0275\u0275elementEnd();
  }
}
function ChatflowEditComponent_For_99_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ChatflowEditComponent_For_99_For_10_Template_button_click_0_listener() {
      const n_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onAddingNodeClick(n_r3.node));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add_box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r3.type);
  }
}
function ChatflowEditComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 38)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 39);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-menu", null, 7);
    \u0275\u0275repeaterCreate(9, ChatflowEditComponent_For_99_For_10_Template, 5, 1, "button", 40, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const catMenu_r6 = \u0275\u0275reference(8);
    \u0275\u0275property("matMenuTriggerFor", catMenu_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.type === "chatbot" ? "chat" : cat_r5.type === "ai" ? "smart_toy" : cat_r5.type === "chatflow" ? "account_tree" : "stars");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.name);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(cat_r5.nodes);
  }
}
function ChatflowEditComponent_Conditional_112_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 63);
    \u0275\u0275text(3, "\u2705 \uCC57\uBD07\uC5D0\uC11C \uC774 \uC774\uB984\uC73C\uB85C \uBC1C\uD654\uD558\uBA74 \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const intentName_r8 = \u0275\u0275reference(57);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(intentName_r8);
  }
}
function ChatflowEditComponent_Conditional_112_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "\uBBF8\uC124\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 63);
    \u0275\u0275text(3, "\u26A0\uFE0F \uC778\uD150\uD2B8 \uC774\uB984\uC744 \uBA3C\uC800 \uC124\uC815\uD574\uC8FC\uC138\uC694");
    \u0275\u0275elementEnd();
  }
}
function ChatflowEditComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-group", 37)(1, "mat-tab", 42)(2, "div", 43)(3, "div", 44)(4, "h4");
    \u0275\u0275text(5, "\u{1F4D0} \uCE94\uBC84\uC2A4 \uC815\uBCF4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45)(7, "h5");
    \u0275\u0275text(8, "\u{1F4E6} \uB178\uB4DC \uCEE8\uD14C\uC774\uB108");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 46)(10, "span", 47);
    \u0275\u0275text(11, "\uC704\uCE58 (top, left):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 46)(15, "span", 47);
    \u0275\u0275text(16, "\uD06C\uAE30 (w \xD7 h):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 48);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 45)(20, "h5");
    \u0275\u0275text(21, "\u{1F5BC}\uFE0F SVG \uCE94\uBC84\uC2A4 (\uB77C\uC778)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 46)(23, "span", 47);
    \u0275\u0275text(24, "\uC704\uCE58 (top, left):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 48);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 46)(28, "span", 47);
    \u0275\u0275text(29, "\uD06C\uAE30 (w \xD7 h):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 48);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 49)(33, "h4");
    \u0275\u0275text(34, "\u{1F535} \uC2DC\uC791 \uB178\uB4DC (Start)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 46)(36, "span", 47);
    \u0275\u0275text(37, "\uC704\uCE58 (top, left):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 48);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 46)(41, "span", 47);
    \u0275\u0275text(42, "\uD06C\uAE30 (w \xD7 h):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 48);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 50)(46, "span", 47);
    \u0275\u0275text(47, "OUT \uC5F0\uACB0\uC810:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 48);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 49)(51, "h4");
    \u0275\u0275text(52, "\u{1F534} \uC885\uB8CC \uB178\uB4DC (End)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 46)(54, "span", 47);
    \u0275\u0275text(55, "\uC704\uCE58 (top, left):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 48);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 46)(59, "span", 47);
    \u0275\u0275text(60, "\uD06C\uAE30 (w \xD7 h):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 48);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 50)(64, "span", 47);
    \u0275\u0275text(65, "IN \uC5F0\uACB0\uC810:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 48);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 49)(69, "h4");
    \u0275\u0275text(70, "\u27A1\uFE0F \uC5F0\uACB0 \uB77C\uC778");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 50)(72, "span", 47);
    \u0275\u0275text(73, "\uC2DC\uC791\uC810 (x1, y1):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 48);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 50)(77, "span", 47);
    \u0275\u0275text(78, "\uB05D\uC810 (x2, y2):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 48);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "button", 51);
    \u0275\u0275listener("click", function ChatflowEditComponent_Conditional_112_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateDebugInfo());
    });
    \u0275\u0275elementStart(82, "mat-icon");
    \u0275\u0275text(83, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, " \uC0C8\uB85C\uACE0\uCE68 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "mat-tab", 52)(86, "div", 43)(87, "div", 53)(88, "h4");
    \u0275\u0275text(89, "\u{1F3AF} \uC778\uD150\uD2B8 \uD14C\uC2A4\uD130");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "p", 54);
    \u0275\u0275text(91, "\uCC57\uBD07\uC5D0\uC11C \uBC1C\uD654\uD558\uBA74 \uD574\uB2F9 \uC778\uD150\uD2B8\uB97C \uC790\uB3D9\uC73C\uB85C \uCC3E\uC544 \uC2E4\uD589\uD569\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 55)(93, "mat-icon");
    \u0275\u0275text(94, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 56)(96, "strong");
    \u0275\u0275text(97, "\uC0AC\uC6A9 \uBC29\uBC95:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "ol")(99, "li");
    \u0275\u0275text(100, "\uC67C\uCABD \uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "li");
    \u0275\u0275text(102, "\uD604\uC7AC \uD3B8\uC9D1 \uC911\uC778 \uC778\uD150\uD2B8 \uC774\uB984\uACFC \uC77C\uCE58\uD558\uBA74 \uC790\uB3D9 \uC2E4\uD589\uB429\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "li");
    \u0275\u0275text(104, "\uC778\uD150\uD2B8 \uC774\uB984\uC740 \uC0C1\uB2E8 \uD544\uB4DC\uC5D0\uC11C \uD655\uC778/\uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(105, "div", 57)(106, "div", 58)(107, "mat-icon");
    \u0275\u0275text(108, "bookmark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span");
    \u0275\u0275text(110, "\uD604\uC7AC \uC778\uD150\uD2B8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 59);
    \u0275\u0275conditionalCreate(112, ChatflowEditComponent_Conditional_112_Conditional_112_Template, 4, 1)(113, ChatflowEditComponent_Conditional_112_Conditional_113_Template, 4, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 60)(115, "h5");
    \u0275\u0275text(116, "\u{1F4A1} \uD14C\uC2A4\uD2B8 \uC608\uC2DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 61)(118, "strong");
    \u0275\u0275text(119, "\uC778\uD150\uD2B8 \uC774\uB984:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, ' "\uC778\uC0AC\uD558\uAE30"');
    \u0275\u0275element(121, "br");
    \u0275\u0275elementStart(122, "strong");
    \u0275\u0275text(123, "\uCC57\uBD07 \uBC1C\uD654:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, ' "\uC778\uC0AC\uD558\uAE30" \uB610\uB294 "\uC548\uB155" \uB4F1 ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 61)(126, "strong");
    \u0275\u0275text(127, "\uC778\uD150\uD2B8 \uC774\uB984:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, ' "\uC8FC\uBB38\uBC1B\uAE30"');
    \u0275\u0275element(129, "br");
    \u0275\u0275elementStart(130, "strong");
    \u0275\u0275text(131, "\uCC57\uBD07 \uBC1C\uD654:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, ' "\uC8FC\uBB38\uBC1B\uAE30" \uB610\uB294 "\uC8FC\uBB38" \uB4F1 ');
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const intentName_r8 = \u0275\u0275reference(57);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.canvas.nodes.top, ", ", ctx_r3.debugInfo.canvas.nodes.left, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.debugInfo.canvas.nodes.width, " \xD7 ", ctx_r3.debugInfo.canvas.nodes.height);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.canvas.svg.top, ", ", ctx_r3.debugInfo.canvas.svg.left, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.debugInfo.canvas.svg.width, " \xD7 ", ctx_r3.debugInfo.canvas.svg.height);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.startNode.top, ", ", ctx_r3.debugInfo.startNode.left, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.debugInfo.startNode.width, " \xD7 ", ctx_r3.debugInfo.startNode.height);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.startNode.rightDot.left, ", ", ctx_r3.debugInfo.startNode.rightDot.top, ")");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.endNode.top, ", ", ctx_r3.debugInfo.endNode.left, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r3.debugInfo.endNode.width, " \xD7 ", ctx_r3.debugInfo.endNode.height);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.endNode.leftDot.left, ", ", ctx_r3.debugInfo.endNode.leftDot.top, ")");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.line.x1, ", ", ctx_r3.debugInfo.line.y1, ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("(", ctx_r3.debugInfo.line.x2, ", ", ctx_r3.debugInfo.line.y2, ")");
    \u0275\u0275advance(32);
    \u0275\u0275conditional(intentName_r8 ? 112 : 113);
  }
}
var ChatflowEditComponent = class _ChatflowEditComponent {
  container;
  svg;
  intentNameInput;
  fileInput;
  playSimulator = new EventEmitter();
  // 시뮬레이터 시작 이벤트
  width = input(1200, ...ngDevMode ? [{ debugName: "width" }] : []);
  height = input(0, ...ngDevMode ? [{ debugName: "height" }] : []);
  // 줌 레벨 (getter/setter로 서비스와 동기화)
  get zoomLevel() {
    return this.chatflowSettingService.zoomLevel;
  }
  set zoomLevel(value) {
    this.chatflowSettingService.zoomLevel = value;
  }
  // 인텐트 이름 getter
  get intentName() {
    return this.chatflowDataService.intentName;
  }
  // 디버그 정보
  debugInfo = {
    showPanel: false,
    canvas: {
      nodes: { top: 0, left: 0, width: 0, height: 0 },
      svg: { top: 0, left: 0, width: 0, height: 0 }
    },
    startNode: { top: 0, left: 0, rightDot: { top: 0, left: 0 }, width: 0, height: 0 },
    endNode: { top: 0, left: 0, leftDot: { top: 0, left: 0 }, width: 0, height: 0 },
    line: { x1: 0, y1: 0, x2: 0, y2: 0 },
    panelPosition: { top: 20, left: window.innerWidth - 420 },
    isDragging: false,
    dragOffset: { x: 0, y: 0 }
  };
  // private nodes = nodes;
  nodesCategories = Object.values(nodesCategoriesMap);
  chatflowActionService = inject(ChatflowActionService);
  chatflowSettingService = inject(ChatflowSettingService);
  chatflowStorageService = inject(ChatflowStorageService);
  dialog = inject(MatDialog);
  chatbotActionService = inject(ChatbotActionService);
  chatflowDataService = inject(ChatflowDataService);
  httpClient = inject(HttpClient);
  snackbar = inject(MatSnackBar);
  debugLogger = inject(DebugLoggerService);
  router = inject(Router);
  chatflowLogicReader = new ChatflowLogicReader(this.chatbotActionService);
  chatflowEditReader;
  subscription = new Subscription();
  startNode = null;
  beforeNode = null;
  // 현재 작업 중인 챗플로우 ID (저장된 경우)
  currentChatflowId;
  ngOnInit() {
    this.chatflowEditReader = new ChatflowEditReader(this.container);
    this.chatflowActionService.svg = this.svg;
    const startRef = this.container.createComponent(StartNodeComponent);
    this.startNode = startRef.instance;
    this.startNode.myRef = startRef;
    const endRef = this.container.createComponent(EndNodeComponent);
    endRef.instance.myRef = endRef;
    setTimeout(() => this.updateDebugInfo(), 100);
    window.addEventListener("nodePositionChanged", () => {
      this.updateDebugInfo();
    });
    this.chatflowDataService.startNode = this.startNode;
    this.detectIntentInputEvent();
    this.chatflowLogicReader.$chatflowEnded.pipe(take(1)).subscribe((d) => {
      this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", { duration: 900, verticalPosition: "top" });
    });
    this.subscription.add(this.chatflowLogicReader.currentNode$.subscribe((d) => {
      if (!this.startNode) {
        console.warn("startRef\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        return;
      }
      if (!d) {
        console.log("\uD604\uC7AC \uC9C4\uD589\uC911\uC778 \uB178\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC544\uB9C8\uB3C4 \uB05D\uB0AC\uC74C?");
        return;
      }
      if (d.type === "start") {
        this.beforeNode = this.startNode;
        this.startNode.isItExcecuting = true;
        return;
      }
      if (!this.beforeNode) {
        console.warn("beforeNode\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        return;
      }
      const myNodeData = this.beforeNode.rightConnectedList[d.id];
      if (!myNodeData) {
        console.warn("id\uB97C \uCC3E\uC744 \uC218\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", this.beforeNode);
        return;
      }
      myNodeData.node.isItExcecuting = true;
      this.beforeNode.isItExcecuting = false;
      this.beforeNode = myNodeData.node;
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  detectIntentInputEvent() {
    this.subscription.add(fromEvent(this.intentNameInput.nativeElement, "keyup").pipe(debounceTime(2e3)).subscribe((d) => {
      this.chatflowDataService.intentName = d.target.value;
    }));
  }
  // protected onAddClick(){
  //   const dialogRef = this.dialog.open(NodeSelectDialogComponent);
  //   dialogRef.afterClosed().pipe(take(1)).subscribe((d: TNodeType)=>{
  //     if(!d) return;
  //     console.log(this.nodes[d])
  //     const ref = this.container.createComponent(this.nodes[d].node);
  //     ref.instance.myRef = ref;
  //     ref.instance.addToUnconnected();
  //   });
  // }
  onAddingNodeClick(node) {
    const ref = this.container.createComponent(node);
    ref.instance.myRef = ref;
    ref.instance.addToUnconnected();
  }
  onShareClick() {
    this.dialog.open(ChatflowJsonDialogComponent, {});
  }
  onPlayClick() {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC2DC\uBBAC\uB808\uC774\uC158", "\u{1F3AE} \uC2DC\uBBAC\uB808\uC774\uC158 \uC2DC\uC791 \uBC84\uD2BC \uD074\uB9AD\uB428");
    this.playSimulator.emit();
  }
  onUploadJsonClick() {
    this.fileInput.nativeElement.click();
  }
  /**
   * DB에서 챗플로우 불러오기
   */
  onLoadFromStorageClick() {
    const dialogRef = this.dialog.open(ChatflowListDialogComponent, {
      width: "600px",
      maxHeight: "80vh"
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if (result && result.action === "load" && result.chatflow) {
        this.loadChatflowFromStorage(result.chatflow);
      }
    });
  }
  /**
   * 현재 챗플로우를 DB에 저장
   */
  onSaveToStorageClick() {
    const chatflowData = this.chatflowDataService.createJsonData();
    const dialogRef = this.dialog.open(ChatflowSaveDialogComponent, {
      width: "450px",
      data: {
        chatflow: chatflowData,
        currentId: this.currentChatflowId
      }
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe((result) => {
      if (result && result.success) {
        this.currentChatflowId = result.id;
        this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uC800\uC7A5", `\u2705 \uCC57\uD50C\uB85C\uC6B0 \uC800\uC7A5 \uC644\uB8CC: ${result.id}`);
      }
    });
  }
  /**
   * DB에서 불러온 챗플로우 렌더링
   */
  loadChatflowFromStorage(chatflow) {
    try {
      this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uBD88\uB7EC\uC624\uAE30", `\u{1F4C2} \uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30 \uC2DC\uC791: ${chatflow.intentName}`);
      this.container.clear();
      this.chatflowDataService.intentName = chatflow.intentName;
      const startRef = this.chatflowEditReader.locateChatflowNodes(chatflow);
      this.chatflowDataService.startNode = startRef;
      this.startNode = startRef;
      this.currentChatflowId = chatflow.id;
      setTimeout(() => this.updateDebugInfo(), 100);
      this.snackbar.open(`"${chatflow.intentName}" \uCC57\uD50C\uB85C\uC6B0\uB97C \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`, "", {
        duration: 2e3,
        verticalPosition: "top"
      });
      this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uBD88\uB7EC\uC624\uAE30", `\u2705 \uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30 \uC644\uB8CC`);
    } catch (error) {
      this.debugLogger.error("\uCC57\uD50C\uB85C\uC6B0-\uBD88\uB7EC\uC624\uAE30", `\u274C \uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328: ${error}`);
      console.error("\uCC57\uD50C\uB85C\uC6B0 \uBD88\uB7EC\uC624\uAE30 \uC624\uB958:", error);
      this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0\uB97C \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.", "", {
        duration: 2e3,
        verticalPosition: "top"
      });
    }
  }
  onFileSelected(event) {
    const input2 = event.target;
    if (input2.files && input2.files.length > 0) {
      const file = input2.files[0];
      if (file.name.endsWith(".json")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (!reader.result) {
            this.snackbar.open("\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", "", { duration: 900, verticalPosition: "top" });
            return;
          }
          const fileContent = JSON.parse(reader.result);
          this.chatflowDataService.intentName = fileContent.intentName;
          this.container.clear();
          const startRef = this.chatflowEditReader.locateChatflowNodes(fileContent);
          this.chatflowDataService.startNode = startRef;
          this.startNode = startRef;
        };
        reader.readAsText(file);
      } else {
        alert("JSON \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
      }
    }
  }
  onMouseMove(event) {
    if (!this.chatflowActionService.movingNode)
      return;
    this.chatflowActionService.movingNode.onMouseMove(event);
    this.updateDebugInfo();
  }
  onMouseUp(event) {
    if (!this.chatflowActionService.movingNode)
      return;
    this.chatflowActionService.movingNode = null;
    this.updateDebugInfo();
  }
  // 줌 기능
  zoomIn() {
    if (this.zoomLevel < 200) {
      this.zoomLevel = Math.min(200, this.zoomLevel + 10);
    }
  }
  zoomOut() {
    if (this.zoomLevel > 50) {
      this.zoomLevel = Math.max(50, this.zoomLevel - 10);
    }
  }
  resetZoom() {
    this.zoomLevel = 100;
  }
  // 마우스 휠로 줌
  onWheel(event) {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      if (event.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    }
  }
  // 키보드 단축키
  handleKeyboard(event) {
    if (event.ctrlKey || event.metaKey) {
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        this.zoomIn();
      } else if (event.key === "-") {
        event.preventDefault();
        this.zoomOut();
      } else if (event.key === "0") {
        event.preventDefault();
        this.resetZoom();
      }
    }
  }
  updateDebugInfo() {
    if (!this.startNode)
      return;
    const endNode = Object.values(this.startNode.rightConnectedList)[0]?.node;
    const startElement = this.startNode.elementRef?.nativeElement;
    const getNodeCard = (element) => {
      if (!element)
        return null;
      let nodeCard = element.querySelector(".node-card");
      if (!nodeCard && element.children.length > 0) {
        const firstChild = element.children[0];
        if (firstChild.classList.contains("node-card")) {
          nodeCard = firstChild;
        }
      }
      if (!nodeCard && element.classList.contains("node-card")) {
        nodeCard = element;
      }
      return nodeCard || element;
    };
    const startCard = getNodeCard(startElement);
    const nodesContainer = this.container.element.nativeElement.parentElement;
    const svgElement = this.svg.nativeElement;
    const svgParent = svgElement.parentElement;
    this.debugInfo.canvas = {
      nodes: {
        top: nodesContainer?.offsetTop || 0,
        left: nodesContainer?.offsetLeft || 0,
        width: nodesContainer?.offsetWidth || 0,
        height: nodesContainer?.offsetHeight || 0
      },
      svg: {
        top: svgParent?.offsetTop || 0,
        left: svgParent?.offsetLeft || 0,
        width: svgElement?.clientWidth || 0,
        height: svgElement?.clientHeight || 0
      }
    };
    this.debugInfo.startNode = {
      top: this.startNode.top,
      left: this.startNode.left,
      width: startCard?.offsetWidth || 0,
      height: startCard?.offsetHeight || 0,
      rightDot: {
        top: this.startNode.rightDotPosition.top,
        left: this.startNode.rightDotPosition.left
      }
    };
    if (endNode) {
      const endElement = endNode.elementRef?.nativeElement;
      const endCard = getNodeCard(endElement);
      this.debugInfo.endNode = {
        top: endNode.top,
        left: endNode.left,
        width: endCard?.offsetWidth || 0,
        height: endCard?.offsetHeight || 0,
        leftDot: {
          top: endNode.leftDotPosition.top,
          left: endNode.leftDotPosition.left
        }
      };
      this.debugInfo.line = {
        x1: this.startNode.rightDotPosition.left,
        y1: this.startNode.rightDotPosition.top,
        x2: endNode.leftDotPosition.left,
        y2: endNode.leftDotPosition.top
      };
    } else {
      this.debugInfo.endNode = {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        leftDot: { top: 0, left: 0 }
      };
      this.debugInfo.line = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      };
    }
  }
  toggleDebugPanel() {
    this.debugInfo.showPanel = !this.debugInfo.showPanel;
  }
  copyAllDebugInfo() {
    const info = `
\uFFFD \uCE94\uBC84\uC2A4 \uC815\uBCF4

\u{1F4E6} \uB178\uB4DC \uCEE8\uD14C\uC774\uB108
\uC704\uCE58: (${this.debugInfo.canvas.nodes.top}, ${this.debugInfo.canvas.nodes.left})
\uD06C\uAE30: ${this.debugInfo.canvas.nodes.width} \xD7 ${this.debugInfo.canvas.nodes.height}

\u{1F5BC}\uFE0F SVG \uCE94\uBC84\uC2A4 (\uB77C\uC778)
\uC704\uCE58: (${this.debugInfo.canvas.svg.top}, ${this.debugInfo.canvas.svg.left})
\uD06C\uAE30: ${this.debugInfo.canvas.svg.width} \xD7 ${this.debugInfo.canvas.svg.height}

---

\uFFFD\u{1F535} \uC2DC\uC791 \uB178\uB4DC (Start)
\uC704\uCE58: (${this.debugInfo.startNode.top}, ${this.debugInfo.startNode.left})
\uD06C\uAE30: ${this.debugInfo.startNode.width} \xD7 ${this.debugInfo.startNode.height}
OUT \uC5F0\uACB0\uC810: (${this.debugInfo.startNode.rightDot.left}, ${this.debugInfo.startNode.rightDot.top})

\u{1F534} \uC885\uB8CC \uB178\uB4DC (End)
\uC704\uCE58: (${this.debugInfo.endNode.top}, ${this.debugInfo.endNode.left})
\uD06C\uAE30: ${this.debugInfo.endNode.width} \xD7 ${this.debugInfo.endNode.height}
IN \uC5F0\uACB0\uC810: (${this.debugInfo.endNode.leftDot.left}, ${this.debugInfo.endNode.leftDot.top})

\u27A1\uFE0F \uC5F0\uACB0 \uB77C\uC778
\uC2DC\uC791\uC810: (${this.debugInfo.line.x1}, ${this.debugInfo.line.y1})
\uB05D\uC810: (${this.debugInfo.line.x2}, ${this.debugInfo.line.y2})
    `.trim();
    navigator.clipboard.writeText(info).then(() => {
      this.snackbar.open("\uC804\uCCB4 \uC88C\uD45C \uC815\uBCF4 \uBCF5\uC0AC\uB428", "", { duration: 1500, verticalPosition: "top" });
    }).catch((err) => {
      console.error("\uBCF5\uC0AC \uC2E4\uD328:", err);
      this.snackbar.open("\uBCF5\uC0AC \uC2E4\uD328", "", { duration: 1500, verticalPosition: "top" });
    });
  }
  copyToClipboard(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackbar.open(`${label} \uBCF5\uC0AC\uB428: ${text}`, "", { duration: 1500, verticalPosition: "top" });
    }).catch((err) => {
      console.error("\uBCF5\uC0AC \uC2E4\uD328:", err);
      this.snackbar.open("\uBCF5\uC0AC \uC2E4\uD328", "", { duration: 1500, verticalPosition: "top" });
    });
  }
  onDebugPanelMouseDown(event) {
    if (event.target.closest(".debug-header")) {
      this.debugInfo.isDragging = true;
      this.debugInfo.dragOffset = {
        x: event.clientX - this.debugInfo.panelPosition.left,
        y: event.clientY - this.debugInfo.panelPosition.top
      };
      event.preventDefault();
    }
  }
  onDebugPanelMouseMove(event) {
    if (this.debugInfo.isDragging) {
      this.debugInfo.panelPosition = {
        left: event.clientX - this.debugInfo.dragOffset.x,
        top: event.clientY - this.debugInfo.dragOffset.y
      };
    }
  }
  onDebugPanelMouseUp() {
    this.debugInfo.isDragging = false;
  }
  onLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    this.debugLogger.info("\uC2DC\uC2A4\uD15C", "\uB85C\uADF8\uC544\uC6C3 \uC644\uB8CC");
    this.snackbar.open("\uB85C\uADF8\uC544\uC6C3\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", { duration: 1500, verticalPosition: "top" });
    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 500);
  }
  static \u0275fac = function ChatflowEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowEditComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowEditComponent, selectors: [["app-chatflow-edit"]], viewQuery: function ChatflowEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 7, ViewContainerRef);
      \u0275\u0275viewQuery(_c12, 7);
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.svg = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.intentNameInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, hostBindings: function ChatflowEditComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousemove", function ChatflowEditComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      })("mouseup", function ChatflowEditComponent_mouseup_HostBindingHandler($event) {
        return ctx.onMouseUp($event);
      })("keydown", function ChatflowEditComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboard($event);
      }, \u0275\u0275resolveWindow)("mousemove", function ChatflowEditComponent_mousemove_HostBindingHandler($event) {
        return ctx.onDebugPanelMouseMove($event);
      }, \u0275\u0275resolveDocument)("mouseup", function ChatflowEditComponent_mouseup_HostBindingHandler() {
        return ctx.onDebugPanelMouseUp();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { width: [1, "width"], height: [1, "height"] }, outputs: { playSimulator: "playSimulator" }, standalone: false, decls: 113, vars: 31, consts: [["saveMenu", "matMenu"], ["loadMenu", "matMenu"], ["intentName", ""], ["svg", ""], ["container", ""], ["mainMenu", "matMenu"], ["fileInput", ""], ["catMenu", "matMenu"], [1, "chatflow-edit-container", 3, "ngStyle"], [1, "toolbar"], ["mat-raised-button", "", "color", "primary", 1, "add-node-btn", 3, "matMenuTriggerFor"], [1, "toolbar-actions"], ["mat-icon-button", "", "title", "\uC2DC\uBBAC\uB808\uC774\uC158 \uC2E4\uD589", 1, "action-btn", 3, "click"], ["mat-icon-button", "", "title", "\uC800\uC7A5", 1, "action-btn", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "title", "\uBD88\uB7EC\uC624\uAE30", 1, "action-btn", 3, "matMenuTriggerFor"], [1, "zoom-controls"], ["mat-icon-button", "", "title", "\uCD95\uC18C (Ctrl + -)", 3, "click", "disabled"], [1, "zoom-level"], ["mat-icon-button", "", "title", "\uD655\uB300 (Ctrl + +)", 3, "click", "disabled"], ["mat-icon-button", "", "title", "\uC6D0\uB798 \uD06C\uAE30 (Ctrl + 0)", 3, "click"], ["appearance", "outline", 1, "intent-name-field"], ["matInput", "", "placeholder", "\uC608: \uC778\uC0AC\uD558\uAE30, \uC8FC\uBB38\uBC1B\uAE30, \uC0C1\uB2F4\uD558\uAE30", "matTooltip", "\uC774 \uCC57\uD50C\uB85C\uC6B0\uB97C \uAD6C\uBD84\uD558\uB294 \uACE0\uC720\uD55C \uC774\uB984\uC785\uB2C8\uB2E4. \uC800\uC7A5/\uBD88\uB7EC\uC624\uAE30 \uC2DC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.", 3, "value"], ["matSuffix", "", "matTooltip", "DB\uC5D0 \uC800\uC7A5\uB428", 1, "saved-indicator"], [1, "connection-guide"], [1, "guide-item", "info-item"], [1, "info-icon"], [1, "guide-item"], [1, "chatflow-canvas", 3, "wheel"], [3, "ngStyle"], [1, "node-menu"], ["type", "file", "accept", ".json", 2, "display", "none", 3, "change"], [1, "debug-panel", 3, "ngStyle"], [1, "debug-header", 3, "mousedown"], [3, "click"], [1, "header-buttons"], ["mat-icon-button", "", "title", "\uC804\uCCB4 \uBCF5\uC0AC", 1, "copy-all-btn", 3, "click"], ["animationDuration", "0ms", 1, "debug-tabs"], ["mat-menu-item", "", 1, "category-menu-item", 3, "matMenuTriggerFor"], [1, "arrow"], ["mat-menu-item", "", 1, "node-menu-item"], ["mat-menu-item", "", 1, "node-menu-item", 3, "click"], ["label", "\uC88C\uD45C \uC815\uBCF4"], [1, "debug-content", "tab-content"], [1, "debug-section", "canvas-section"], [1, "subsection"], [1, "debug-row"], [1, "label"], [1, "value"], [1, "debug-section"], [1, "debug-row", "highlight"], ["mat-stroked-button", "", 1, "refresh-btn", 3, "click"], ["label", "\uC778\uD150\uD2B8 \uC2E4\uD589"], [1, "intent-runner-section"], [1, "description"], [1, "intent-info"], [1, "info-text"], [1, "current-intent-box"], [1, "box-header"], [1, "box-content"], [1, "test-examples"], [1, "example-item"], [1, "intent-badge", "active"], [1, "status-text"], [1, "intent-badge", "inactive"]], template: function ChatflowEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "button", 10)(3, "mat-icon");
      \u0275\u0275text(4, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "\uB178\uB4DC \uC0DD\uC131");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 11)(8, "button", 12);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPlayClick());
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "play_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 13)(12, "mat-icon");
      \u0275\u0275text(13, "save");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "mat-menu", null, 0)(16, "button", 14);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSaveToStorageClick());
      });
      \u0275\u0275elementStart(17, "mat-icon");
      \u0275\u0275text(18, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "DB\uC5D0 \uC800\uC7A5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onShareClick());
      });
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "ios_share");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "JSON \uB0B4\uBCF4\uB0B4\uAE30");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "button", 15)(27, "mat-icon");
      \u0275\u0275text(28, "folder_open");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "mat-menu", null, 1)(31, "button", 14);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_31_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoadFromStorageClick());
      });
      \u0275\u0275elementStart(32, "mat-icon");
      \u0275\u0275text(33, "storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "DB\uC5D0\uC11C \uBD88\uB7EC\uC624\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 14);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUploadJsonClick());
      });
      \u0275\u0275elementStart(37, "mat-icon");
      \u0275\u0275text(38, "upload_file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "JSON \uD30C\uC77C \uBD88\uB7EC\uC624\uAE30");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 16)(42, "button", 17);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(43, "mat-icon");
      \u0275\u0275text(44, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "span", 18);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 19);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(48, "mat-icon");
      \u0275\u0275text(49, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "button", 20);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetZoom());
      });
      \u0275\u0275elementStart(51, "mat-icon");
      \u0275\u0275text(52, "refresh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "mat-form-field", 21)(54, "mat-label");
      \u0275\u0275text(55, "\uC778\uD150\uD2B8 \uC774\uB984 (\uCC57\uD50C\uB85C\uC6B0 \uC2DD\uBCC4\uC790)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 22, 2);
      \u0275\u0275elementStart(58, "mat-hint");
      \u0275\u0275text(59, "\uCC57\uD50C\uB85C\uC6B0\uB97C \uAD6C\uBD84\uD558\uB294 \uC774\uB984 (\uC608: \uC778\uC0AC, \uC0C1\uB2F4, \uC8FC\uBB38)");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(60, ChatflowEditComponent_Conditional_60_Template, 2, 0, "mat-icon", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 24)(62, "div", 25)(63, "mat-icon", 26);
      \u0275\u0275text(64, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span")(66, "strong");
      \u0275\u0275text(67, "\uC778\uD150\uD2B8\uB780?");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, ' \uCC57\uD50C\uB85C\uC6B0\uB97C \uAD6C\uBD84\uD558\uB294 \uC774\uB984\uC785\uB2C8\uB2E4 (\uC608: "\uC0C1\uB2F4\uD558\uAE30", "\uC8FC\uBB38\uBC1B\uAE30")');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 27)(70, "mat-icon");
      \u0275\u0275text(71, "touch_app");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span")(73, "strong");
      \u0275\u0275text(74, "\uC5F0\uACB0:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " \uB178\uB4DC\uC758 OUT \uC810 \u2192 \uB2E4\uC74C \uB178\uB4DC\uC758 IN \uC810 \uD074\uB9AD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 27)(77, "mat-icon");
      \u0275\u0275text(78, "open_with");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span")(80, "strong");
      \u0275\u0275text(81, "\uC774\uB3D9:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, " \uB178\uB4DC\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uC704\uCE58 \uBCC0\uACBD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 27)(84, "mat-icon");
      \u0275\u0275text(85, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span")(87, "strong");
      \u0275\u0275text(88, "\uD3B8\uC9D1:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, " \uB178\uB4DC \uD5E4\uB354\uC758 \uC5F0\uD544 \uC544\uC774\uCF58 \uD074\uB9AD");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 28);
      \u0275\u0275listener("wheel", function ChatflowEditComponent_Template_div_wheel_90_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWheel($event));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275element(91, "svg", 29, 3);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(93, "div", 29);
      \u0275\u0275elementContainer(94, null, 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "mat-menu", 30, 5);
      \u0275\u0275repeaterCreate(98, ChatflowEditComponent_For_99_Template, 11, 3, null, null, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "input", 31, 6);
      \u0275\u0275listener("change", function ChatflowEditComponent_Template_input_change_100_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 32)(103, "div", 33);
      \u0275\u0275listener("mousedown", function ChatflowEditComponent_Template_div_mousedown_103_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDebugPanelMouseDown($event));
      });
      \u0275\u0275elementStart(104, "mat-icon");
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 34);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_span_click_106_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDebugPanel());
      });
      \u0275\u0275text(107, "\uCC57\uD50C\uB85C\uC6B0 \uC815\uBCF4 \uD328\uB110");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 35)(109, "button", 36);
      \u0275\u0275listener("click", function ChatflowEditComponent_Template_button_click_109_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.copyAllDebugInfo();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275elementStart(110, "mat-icon");
      \u0275\u0275text(111, "content_copy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(112, ChatflowEditComponent_Conditional_112_Template, 133, 25, "mat-tab-group", 37);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const saveMenu_r9 = \u0275\u0275reference(15);
      const loadMenu_r10 = \u0275\u0275reference(30);
      const mainMenu_r11 = \u0275\u0275reference(97);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(18, _c4, ctx.height() ? ctx.height() : ""));
      \u0275\u0275advance(2);
      \u0275\u0275property("matMenuTriggerFor", mainMenu_r11);
      \u0275\u0275advance(9);
      \u0275\u0275property("matMenuTriggerFor", saveMenu_r9);
      \u0275\u0275advance(15);
      \u0275\u0275property("matMenuTriggerFor", loadMenu_r10);
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", ctx.zoomLevel <= 50);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.zoomLevel, "%");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.zoomLevel >= 200);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.chatflowDataService.intentName);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.currentChatflowId ? 60 : -1);
      \u0275\u0275advance(31);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(20, _c5, ctx.width(), ctx.height(), "scale(" + ctx.zoomLevel / 100 + ")"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(24, _c5, ctx.width(), ctx.height(), "scale(" + ctx.zoomLevel / 100 + ")"));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.nodesCategories);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("collapsed", !ctx.debugInfo.showPanel);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(28, _c6, ctx.debugInfo.panelPosition.top, ctx.debugInfo.panelPosition.left));
      \u0275\u0275advance();
      \u0275\u0275styleProp("cursor", ctx.debugInfo.isDragging ? "grabbing" : "grab");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.debugInfo.showPanel ? "drag_indicator" : "expand_less");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.debugInfo.showPanel ? 112 : -1);
    }
  }, dependencies: [NgStyle, MatInput, MatFormField, MatLabel, MatHint, MatSuffix, MatButton, MatIconButton, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatTab, MatTabGroup], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}\n.chatflow-edit-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: transparent;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border-radius: 14px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.12);\n}\n.toolbar[_ngcontent-%COMP%]   .add-node-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 10px;\n  padding: 0 20px;\n  height: 40px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  flex-shrink: 0;\n}\n.toolbar[_ngcontent-%COMP%]   .add-node-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      #7c8ef5 0%,\n      #8a5bb8 100%);\n}\n.toolbar[_ngcontent-%COMP%]   .add-node-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);\n}\n.toolbar[_ngcontent-%COMP%]   .add-node-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  background: rgba(102, 126, 234, 0.04);\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: white;\n  color: #667eea;\n  border-radius: 8px;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.15);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.1),\n      rgba(118, 75, 162, 0.1));\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: rgba(102, 126, 234, 0.3);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);\n  transform: translateY(-1px);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 4px rgba(102, 126, 234, 0.2);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  transition: transform 0.2s;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:nth-child(1):hover {\n  color: #4caf50;\n  border-color: rgba(76, 175, 80, 0.3);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:nth-child(2):hover {\n  color: #ff9800;\n  border-color: rgba(255, 152, 0, 0.3);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:nth-child(3):hover {\n  color: #2196f3;\n  border-color: rgba(33, 150, 243, 0.3);\n}\n.toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: rgba(102, 126, 234, 0.06);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  border: 1px solid rgba(102, 126, 234, 0.15);\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  color: #667eea;\n  transition: all 0.2s;\n}\n.toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(102, 126, 234, 0.1);\n  transform: scale(1.05);\n}\n.toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   .zoom-level[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #667eea;\n  min-width: 48px;\n  text-align: center;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  flex-shrink: 0;\n  width: 280px;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]   .saved-indicator[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 20px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field {\n  font-size: 14px;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  background: white;\n  padding: 0;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  min-height: auto;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mdc-text-field {\n  padding-left: 14px;\n  padding-right: 14px;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     input {\n  font-size: 14px;\n  line-height: 1.4;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field-focus-overlay {\n  background: rgba(102, 126, 234, 0.03);\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mdc-notched-outline__leading, \n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mdc-notched-outline__notch, \n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-color: rgba(102, 126, 234, 0.2) !important;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading, \n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch, \n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n  border-width: 2px !important;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mdc-floating-label {\n  font-size: 13px;\n}\n.toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%]     .mat-mdc-form-field.mat-form-field-should-float .mdc-floating-label--float-above {\n  font-size: 11px;\n}\n@media (max-width: 1200px) {\n  .toolbar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .toolbar[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .toolbar[_ngcontent-%COMP%]   .intent-name-field[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    max-width: 280px;\n  }\n}\n.connection-guide[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  flex-wrap: wrap;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #555;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #667eea;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item.info-item[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px dashed rgba(102, 126, 234, 0.3);\n  margin-bottom: 4px;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item.info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555;\n}\n.canvas[_ngcontent-%COMP%], \n.chatflow-canvas[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(200, 200, 200, 0.1) 1px,\n      transparent 1px),\n    linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px),\n    #ffffff;\n  background-size: 20px 20px;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  overflow: auto;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  cursor: grab;\n}\n.canvas[_ngcontent-%COMP%]:active, \n.chatflow-canvas[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.canvas[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.chatflow-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.chatflow-canvas[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.chatflow-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 100;\n  transform-origin: 0 0;\n  overflow: visible;\n}\n.canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   line[_ngcontent-%COMP%], \n.chatflow-canvas[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #667eea;\n  stroke-width: 4;\n  opacity: 0.8;\n  filter: drop-shadow(0 2px 6px rgba(102, 126, 234, 0.4));\n  stroke-linecap: round;\n}\n.canvas[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.chatflow-canvas[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-origin: 0 0;\n}\n  .node-menu .mat-mdc-menu-panel {\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  min-width: 200px;\n}\n  .category-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n}\n  .category-menu-item mat-icon:first-child {\n  color: #667eea;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n  .category-menu-item .arrow {\n  margin-left: auto;\n  color: #999;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n  .category-menu-item:hover {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(102, 126, 234, 0.1) 0%,\n      transparent 100%);\n}\n  .node-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  font-size: 14px;\n  color: #555;\n}\n  .node-menu-item mat-icon {\n  color: #764ba2;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n  .node-menu-item:hover {\n  background: rgba(118, 75, 162, 0.08);\n  color: #764ba2;\n  font-weight: 500;\n}\n.debug-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 400px;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 2px solid rgba(102, 126, 234, 0.2);\n  overflow: hidden;\n  z-index: 1000;\n  transition: width 0.3s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-panel.collapsed[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.debug-panel.collapsed[_ngcontent-%COMP%]   .debug-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(102, 126, 234, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  color: white;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 69, 58, 0.3);\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .copy-all-btn[_ngcontent-%COMP%] {\n  color: white;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .copy-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]   .copy-all-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-header[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.95);\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-tabs[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  background: rgba(102, 126, 234, 0.05);\n  border-radius: 8px 8px 0 0;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-label {\n  color: #666;\n  font-weight: 600;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-label.mdc-tab--active {\n  color: #667eea;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.6;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border-radius: 12px;\n  border: 1px dashed rgba(102, 126, 234, 0.3);\n  margin-bottom: 24px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #555;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  padding-left: 20px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  color: #666;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .intent-info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid rgba(102, 126, 234, 0.2);\n  overflow: hidden;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.08);\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .intent-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .intent-badge.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.15),\n      rgba(118, 75, 162, 0.15));\n  color: #667eea;\n  border: 2px solid #667eea;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .intent-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  color: #999;\n  border: 2px dashed #ccc;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .current-intent-box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #666;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .test-examples[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid rgba(255, 193, 7, 0.3);\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .test-examples[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #f57c00;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .test-examples[_ngcontent-%COMP%]   .example-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: white;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #555;\n  border-left: 3px solid #ffa726;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .test-examples[_ngcontent-%COMP%]   .example-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.debug-panel[_ngcontent-%COMP%]   .intent-runner-section[_ngcontent-%COMP%]   .test-examples[_ngcontent-%COMP%]   .example-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #333;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section.canvas-section[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.05);\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(102, 126, 234, 0.2);\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section.canvas-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #667eea;\n  margin-bottom: 16px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section.canvas-section[_ngcontent-%COMP%]   .subsection[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding-left: 8px;\n  border-left: 2px solid rgba(102, 126, 234, 0.3);\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section.canvas-section[_ngcontent-%COMP%]   .subsection[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-section.canvas-section[_ngcontent-%COMP%]   .subsection[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  margin-bottom: 4px;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-row.highlight[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.1);\n  border-left: 3px solid #667eea;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #666;\n}\n.debug-panel[_ngcontent-%COMP%]   .debug-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: #333;\n  background: rgba(255, 255, 255, 0.8);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.debug-panel[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n  border-color: #667eea;\n  color: #667eea;\n  font-weight: 600;\n}\n.debug-panel[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=chatflow-edit.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowEditComponent, [{
    type: Component,
    args: [{ selector: "app-chatflow-edit", standalone: false, template: `<div class="chatflow-edit-container" [ngStyle]="{'height.px': height() ? height() : ''}">

    <div class="toolbar">
      <!-- \uB178\uB4DC \uCD94\uAC00 \uBC84\uD2BC (\uC67C\uCABD) -->
      <button mat-raised-button color="primary" [matMenuTriggerFor]="mainMenu" class="add-node-btn">
        <mat-icon>add_circle</mat-icon>
        <span>\uB178\uB4DC \uC0DD\uC131</span>
      </button>

      <!-- \uC561\uC158 \uBC84\uD2BC\uB4E4 -->
      <div class="toolbar-actions">
        <button mat-icon-button (click)="onPlayClick()" title="\uC2DC\uBBAC\uB808\uC774\uC158 \uC2E4\uD589" class="action-btn">
          <mat-icon>play_circle</mat-icon>
        </button>
        
        <!-- \uC800\uC7A5 \uBA54\uB274 -->
        <button mat-icon-button [matMenuTriggerFor]="saveMenu" title="\uC800\uC7A5" class="action-btn">
          <mat-icon>save</mat-icon>
        </button>
        <mat-menu #saveMenu="matMenu">
          <button mat-menu-item (click)="onSaveToStorageClick()">
            <mat-icon>save</mat-icon>
            <span>DB\uC5D0 \uC800\uC7A5</span>
          </button>
          <button mat-menu-item (click)="onShareClick()">
            <mat-icon>ios_share</mat-icon>
            <span>JSON \uB0B4\uBCF4\uB0B4\uAE30</span>
          </button>
        </mat-menu>

        <!-- \uBD88\uB7EC\uC624\uAE30 \uBA54\uB274 -->
        <button mat-icon-button [matMenuTriggerFor]="loadMenu" title="\uBD88\uB7EC\uC624\uAE30" class="action-btn">
          <mat-icon>folder_open</mat-icon>
        </button>
        <mat-menu #loadMenu="matMenu">
          <button mat-menu-item (click)="onLoadFromStorageClick()">
            <mat-icon>storage</mat-icon>
            <span>DB\uC5D0\uC11C \uBD88\uB7EC\uC624\uAE30</span>
          </button>
          <button mat-menu-item (click)="onUploadJsonClick()">
            <mat-icon>upload_file</mat-icon>
            <span>JSON \uD30C\uC77C \uBD88\uB7EC\uC624\uAE30</span>
          </button>
        </mat-menu>
      </div>

      <!-- \uC90C \uCEE8\uD2B8\uB864 (\uC911\uC559) -->
      <div class="zoom-controls">
        <button mat-icon-button (click)="zoomOut()" [disabled]="zoomLevel <= 50" title="\uCD95\uC18C (Ctrl + -)">
          <mat-icon>zoom_out</mat-icon>
        </button>
        <span class="zoom-level">{{ zoomLevel }}%</span>
        <button mat-icon-button (click)="zoomIn()" [disabled]="zoomLevel >= 200" title="\uD655\uB300 (Ctrl + +)">
          <mat-icon>zoom_in</mat-icon>
        </button>
        <button mat-icon-button (click)="resetZoom()" title="\uC6D0\uB798 \uD06C\uAE30 (Ctrl + 0)">
          <mat-icon>refresh</mat-icon>
        </button>
      </div>

      <!-- \uC778\uD150\uD2B8 \uC774\uB984 \uC785\uB825 (\uC624\uB978\uCABD) -->
      <mat-form-field appearance="outline" class="intent-name-field">
        <mat-label>\uC778\uD150\uD2B8 \uC774\uB984 (\uCC57\uD50C\uB85C\uC6B0 \uC2DD\uBCC4\uC790)</mat-label>
        <input matInput 
               #intentName 
               [value]="chatflowDataService.intentName"
               placeholder="\uC608: \uC778\uC0AC\uD558\uAE30, \uC8FC\uBB38\uBC1B\uAE30, \uC0C1\uB2F4\uD558\uAE30"
               matTooltip="\uC774 \uCC57\uD50C\uB85C\uC6B0\uB97C \uAD6C\uBD84\uD558\uB294 \uACE0\uC720\uD55C \uC774\uB984\uC785\uB2C8\uB2E4. \uC800\uC7A5/\uBD88\uB7EC\uC624\uAE30 \uC2DC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.">
        <mat-hint>\uCC57\uD50C\uB85C\uC6B0\uB97C \uAD6C\uBD84\uD558\uB294 \uC774\uB984 (\uC608: \uC778\uC0AC, \uC0C1\uB2F4, \uC8FC\uBB38)</mat-hint>
        @if (currentChatflowId) {
          <mat-icon matSuffix class="saved-indicator" matTooltip="DB\uC5D0 \uC800\uC7A5\uB428">cloud_done</mat-icon>
        }
      </mat-form-field>
    </div>

    <div class="connection-guide">
        <div class="guide-item info-item">
            <mat-icon class="info-icon">info</mat-icon>
            <span><strong>\uC778\uD150\uD2B8\uB780?</strong> \uCC57\uD50C\uB85C\uC6B0\uB97C \uAD6C\uBD84\uD558\uB294 \uC774\uB984\uC785\uB2C8\uB2E4 (\uC608: "\uC0C1\uB2F4\uD558\uAE30", "\uC8FC\uBB38\uBC1B\uAE30")</span>
        </div>
        <div class="guide-item">
            <mat-icon>touch_app</mat-icon>
            <span><strong>\uC5F0\uACB0:</strong> \uB178\uB4DC\uC758 OUT \uC810 \u2192 \uB2E4\uC74C \uB178\uB4DC\uC758 IN \uC810 \uD074\uB9AD</span>
        </div>
        <div class="guide-item">
            <mat-icon>open_with</mat-icon>
            <span><strong>\uC774\uB3D9:</strong> \uB178\uB4DC\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uC704\uCE58 \uBCC0\uACBD</span>
        </div>
        <div class="guide-item">
            <mat-icon>edit</mat-icon>
            <span><strong>\uD3B8\uC9D1:</strong> \uB178\uB4DC \uD5E4\uB354\uC758 \uC5F0\uD544 \uC544\uC774\uCF58 \uD074\uB9AD</span>
        </div>
    </div>

    <div class="chatflow-canvas" (wheel)="onWheel($event)">
        <svg [ngStyle]="{'width.px': width(), 'height.px': height(), 'transform': 'scale(' + zoomLevel / 100 + ')', 'transform-origin': '0 0'}" #svg></svg>
        <div [ngStyle]="{'width.px': width(), 'height.px': height(), 'transform': 'scale(' + zoomLevel / 100 + ')', 'transform-origin': '0 0'}">
            <ng-container #container></ng-container>
        </div>
    </div>
</div>

<mat-menu #mainMenu="matMenu" class="node-menu">
    @for (cat of nodesCategories; track cat.type) {
      <button mat-menu-item [matMenuTriggerFor]="catMenu" class="category-menu-item">
        <mat-icon>{{ cat.type === 'chatbot' ? 'chat' : cat.type === 'ai' ? 'smart_toy' : cat.type === 'chatflow' ? 'account_tree' : 'stars' }}</mat-icon>
        <span>{{ cat.name }}</span>
        <mat-icon class="arrow">chevron_right</mat-icon>
      </button>
  
      <mat-menu #catMenu="matMenu">
        @for (n of cat.nodes; track n.type) {
          <button mat-menu-item (click)="onAddingNodeClick(n.node)" class="node-menu-item">
            <mat-icon>add_box</mat-icon>
            <span>{{ n.type }}</span>
          </button>
        }
      </mat-menu>
    }
</mat-menu>

<input 
  type="file" 
  #fileInput 
  style="display: none;" 
  accept=".json" 
  (change)="onFileSelected($event)">
<!-- \uCC57\uD50C\uB85C\uC6B0 \uC815\uBCF4 \uD328\uB110 -->
<div class="debug-panel" 
     [class.collapsed]="!debugInfo.showPanel"
     [ngStyle]="{'top.px': debugInfo.panelPosition.top, 'left.px': debugInfo.panelPosition.left}">
  <div class="debug-header" 
       (mousedown)="onDebugPanelMouseDown($event)"
       [style.cursor]="debugInfo.isDragging ? 'grabbing' : 'grab'">
    <mat-icon>{{ debugInfo.showPanel ? 'drag_indicator' : 'expand_less' }}</mat-icon>
    <span (click)="toggleDebugPanel()">\uCC57\uD50C\uB85C\uC6B0 \uC815\uBCF4 \uD328\uB110</span>
    <div class="header-buttons">
      <button mat-icon-button 
              class="copy-all-btn" 
              (click)="copyAllDebugInfo(); $event.stopPropagation()"
              title="\uC804\uCCB4 \uBCF5\uC0AC">
        <mat-icon>content_copy</mat-icon>
      </button>
    </div>
  </div>
  
  @if (debugInfo.showPanel) {
    <mat-tab-group class="debug-tabs" animationDuration="0ms">
      <!-- \uC88C\uD45C \uC815\uBCF4 \uD0ED -->
      <mat-tab label="\uC88C\uD45C \uC815\uBCF4">
        <div class="debug-content tab-content">
      <!-- Canvas Info -->
      <div class="debug-section canvas-section">
        <h4>\u{1F4D0} \uCE94\uBC84\uC2A4 \uC815\uBCF4</h4>
        
        <div class="subsection">
          <h5>\u{1F4E6} \uB178\uB4DC \uCEE8\uD14C\uC774\uB108</h5>
          <div class="debug-row">
            <span class="label">\uC704\uCE58 (top, left):</span>
            <span class="value">({{ debugInfo.canvas.nodes.top }}, {{ debugInfo.canvas.nodes.left }})</span>
          </div>
          <div class="debug-row">
            <span class="label">\uD06C\uAE30 (w \xD7 h):</span>
            <span class="value">{{ debugInfo.canvas.nodes.width }} \xD7 {{ debugInfo.canvas.nodes.height }}</span>
          </div>
        </div>

        <div class="subsection">
          <h5>\u{1F5BC}\uFE0F SVG \uCE94\uBC84\uC2A4 (\uB77C\uC778)</h5>
          <div class="debug-row">
            <span class="label">\uC704\uCE58 (top, left):</span>
            <span class="value">({{ debugInfo.canvas.svg.top }}, {{ debugInfo.canvas.svg.left }})</span>
          </div>
          <div class="debug-row">
            <span class="label">\uD06C\uAE30 (w \xD7 h):</span>
            <span class="value">{{ debugInfo.canvas.svg.width }} \xD7 {{ debugInfo.canvas.svg.height }}</span>
          </div>
        </div>
      </div>

      <!-- Start Node -->
      <div class="debug-section">
        <h4>\u{1F535} \uC2DC\uC791 \uB178\uB4DC (Start)</h4>
        <div class="debug-row">
          <span class="label">\uC704\uCE58 (top, left):</span>
          <span class="value">({{ debugInfo.startNode.top }}, {{ debugInfo.startNode.left }})</span>
        </div>
        <div class="debug-row">
          <span class="label">\uD06C\uAE30 (w \xD7 h):</span>
          <span class="value">{{ debugInfo.startNode.width }} \xD7 {{ debugInfo.startNode.height }}</span>
        </div>
        <div class="debug-row highlight">
          <span class="label">OUT \uC5F0\uACB0\uC810:</span>
          <span class="value">({{ debugInfo.startNode.rightDot.left }}, {{ debugInfo.startNode.rightDot.top }})</span>
        </div>
      </div>

      <!-- End Node -->
      <div class="debug-section">
        <h4>\u{1F534} \uC885\uB8CC \uB178\uB4DC (End)</h4>
        <div class="debug-row">
          <span class="label">\uC704\uCE58 (top, left):</span>
          <span class="value">({{ debugInfo.endNode.top }}, {{ debugInfo.endNode.left }})</span>
        </div>
        <div class="debug-row">
          <span class="label">\uD06C\uAE30 (w \xD7 h):</span>
          <span class="value">{{ debugInfo.endNode.width }} \xD7 {{ debugInfo.endNode.height }}</span>
        </div>
        <div class="debug-row highlight">
          <span class="label">IN \uC5F0\uACB0\uC810:</span>
          <span class="value">({{ debugInfo.endNode.leftDot.left }}, {{ debugInfo.endNode.leftDot.top }})</span>
        </div>
      </div>

      <!-- Line -->
      <div class="debug-section">
        <h4>\u27A1\uFE0F \uC5F0\uACB0 \uB77C\uC778</h4>
        <div class="debug-row highlight">
          <span class="label">\uC2DC\uC791\uC810 (x1, y1):</span>
          <span class="value">({{ debugInfo.line.x1 }}, {{ debugInfo.line.y1 }})</span>
        </div>
        <div class="debug-row highlight">
          <span class="label">\uB05D\uC810 (x2, y2):</span>
          <span class="value">({{ debugInfo.line.x2 }}, {{ debugInfo.line.y2 }})</span>
        </div>
      </div>

      <button mat-stroked-button (click)="updateDebugInfo()" class="refresh-btn">
        <mat-icon>refresh</mat-icon>
        \uC0C8\uB85C\uACE0\uCE68
      </button>
        </div>
      </mat-tab>

      <!-- \uC778\uD150\uD2B8 \uC2E4\uD589 \uD0ED -->
      <mat-tab label="\uC778\uD150\uD2B8 \uC2E4\uD589">
        <div class="debug-content tab-content">
          <div class="intent-runner-section">
            <h4>\u{1F3AF} \uC778\uD150\uD2B8 \uD14C\uC2A4\uD130</h4>
            <p class="description">\uCC57\uBD07\uC5D0\uC11C \uBC1C\uD654\uD558\uBA74 \uD574\uB2F9 \uC778\uD150\uD2B8\uB97C \uC790\uB3D9\uC73C\uB85C \uCC3E\uC544 \uC2E4\uD589\uD569\uB2C8\uB2E4.</p>
            
            <div class="intent-info">
              <mat-icon>info</mat-icon>
              <div class="info-text">
                <strong>\uC0AC\uC6A9 \uBC29\uBC95:</strong>
                <ol>
                  <li>\uC67C\uCABD \uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130\uC5D0\uC11C \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694</li>
                  <li>\uD604\uC7AC \uD3B8\uC9D1 \uC911\uC778 \uC778\uD150\uD2B8 \uC774\uB984\uACFC \uC77C\uCE58\uD558\uBA74 \uC790\uB3D9 \uC2E4\uD589\uB429\uB2C8\uB2E4</li>
                  <li>\uC778\uD150\uD2B8 \uC774\uB984\uC740 \uC0C1\uB2E8 \uD544\uB4DC\uC5D0\uC11C \uD655\uC778/\uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4</li>
                </ol>
              </div>
            </div>

            <div class="current-intent-box">
              <div class="box-header">
                <mat-icon>bookmark</mat-icon>
                <span>\uD604\uC7AC \uC778\uD150\uD2B8</span>
              </div>
              <div class="box-content">
                @if (intentName) {
                  <div class="intent-badge active">{{ intentName }}</div>
                  <p class="status-text">\u2705 \uCC57\uBD07\uC5D0\uC11C \uC774 \uC774\uB984\uC73C\uB85C \uBC1C\uD654\uD558\uBA74 \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4</p>
                } @else {
                  <div class="intent-badge inactive">\uBBF8\uC124\uC815</div>
                  <p class="status-text">\u26A0\uFE0F \uC778\uD150\uD2B8 \uC774\uB984\uC744 \uBA3C\uC800 \uC124\uC815\uD574\uC8FC\uC138\uC694</p>
                }
              </div>
            </div>

            <div class="test-examples">
              <h5>\u{1F4A1} \uD14C\uC2A4\uD2B8 \uC608\uC2DC</h5>
              <div class="example-item">
                <strong>\uC778\uD150\uD2B8 \uC774\uB984:</strong> "\uC778\uC0AC\uD558\uAE30"<br>
                <strong>\uCC57\uBD07 \uBC1C\uD654:</strong> "\uC778\uC0AC\uD558\uAE30" \uB610\uB294 "\uC548\uB155" \uB4F1
              </div>
              <div class="example-item">
                <strong>\uC778\uD150\uD2B8 \uC774\uB984:</strong> "\uC8FC\uBB38\uBC1B\uAE30"<br>
                <strong>\uCC57\uBD07 \uBC1C\uD654:</strong> "\uC8FC\uBB38\uBC1B\uAE30" \uB610\uB294 "\uC8FC\uBB38" \uB4F1
              </div>
            </div>
          </div>
        </div>
      </mat-tab>
    </mat-tab-group>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/expedition/modules/chatflow-edit/components/chatflow-edit/chatflow-edit.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}\n.chatflow-edit-container {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: transparent;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border-radius: 14px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.12);\n}\n.toolbar .add-node-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 10px;\n  padding: 0 20px;\n  height: 40px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  flex-shrink: 0;\n}\n.toolbar .add-node-btn:hover {\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n  transform: translateY(-2px);\n  background:\n    linear-gradient(\n      135deg,\n      #7c8ef5 0%,\n      #8a5bb8 100%);\n}\n.toolbar .add-node-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);\n}\n.toolbar .add-node-btn mat-icon {\n  margin-right: 6px;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.toolbar .toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  background: rgba(102, 126, 234, 0.04);\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.toolbar .toolbar-actions .action-btn {\n  width: 40px;\n  height: 40px;\n  background: white;\n  color: #667eea;\n  border-radius: 8px;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.15);\n}\n.toolbar .toolbar-actions .action-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.1),\n      rgba(118, 75, 162, 0.1));\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.toolbar .toolbar-actions .action-btn:hover {\n  background: white;\n  border-color: rgba(102, 126, 234, 0.3);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);\n  transform: translateY(-1px);\n}\n.toolbar .toolbar-actions .action-btn:hover::before {\n  opacity: 1;\n}\n.toolbar .toolbar-actions .action-btn:hover mat-icon {\n  transform: scale(1.1);\n}\n.toolbar .toolbar-actions .action-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 4px rgba(102, 126, 234, 0.2);\n}\n.toolbar .toolbar-actions .action-btn mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  transition: transform 0.2s;\n}\n.toolbar .toolbar-actions .action-btn:nth-child(1):hover {\n  color: #4caf50;\n  border-color: rgba(76, 175, 80, 0.3);\n}\n.toolbar .toolbar-actions .action-btn:nth-child(2):hover {\n  color: #ff9800;\n  border-color: rgba(255, 152, 0, 0.3);\n}\n.toolbar .toolbar-actions .action-btn:nth-child(3):hover {\n  color: #2196f3;\n  border-color: rgba(33, 150, 243, 0.3);\n}\n.toolbar .zoom-controls {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: rgba(102, 126, 234, 0.06);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  border: 1px solid rgba(102, 126, 234, 0.15);\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.toolbar .zoom-controls button {\n  width: 36px;\n  height: 36px;\n  color: #667eea;\n  transition: all 0.2s;\n}\n.toolbar .zoom-controls button:hover:not(:disabled) {\n  background: rgba(102, 126, 234, 0.1);\n  transform: scale(1.05);\n}\n.toolbar .zoom-controls button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.toolbar .zoom-controls button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.toolbar .zoom-controls .zoom-level {\n  font-size: 13px;\n  font-weight: 600;\n  color: #667eea;\n  min-width: 48px;\n  text-align: center;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.toolbar .intent-name-field {\n  margin-left: 12px;\n  flex-shrink: 0;\n  width: 280px;\n}\n.toolbar .intent-name-field .saved-indicator {\n  color: #4caf50;\n  font-size: 20px;\n  animation: pulse 2s infinite;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field {\n  font-size: 14px;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-text-field-wrapper {\n  background: white;\n  padding: 0;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field-infix {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  min-height: auto;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.toolbar .intent-name-field ::ng-deep .mdc-text-field {\n  padding-left: 14px;\n  padding-right: 14px;\n}\n.toolbar .intent-name-field ::ng-deep input {\n  font-size: 14px;\n  line-height: 1.4;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field-focus-overlay {\n  background: rgba(102, 126, 234, 0.03);\n}\n.toolbar .intent-name-field ::ng-deep .mdc-notched-outline__leading,\n.toolbar .intent-name-field ::ng-deep .mdc-notched-outline__notch,\n.toolbar .intent-name-field ::ng-deep .mdc-notched-outline__trailing {\n  border-color: rgba(102, 126, 234, 0.2) !important;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n  border-color: #667eea !important;\n  border-width: 2px !important;\n}\n.toolbar .intent-name-field ::ng-deep .mdc-floating-label {\n  font-size: 13px;\n}\n.toolbar .intent-name-field ::ng-deep .mat-mdc-form-field.mat-form-field-should-float .mdc-floating-label--float-above {\n  font-size: 11px;\n}\n@media (max-width: 1200px) {\n  .toolbar {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .toolbar .zoom-controls {\n    margin-left: 0;\n  }\n  .toolbar .intent-name-field {\n    margin-left: 0;\n    width: 100%;\n    max-width: 280px;\n  }\n}\n.connection-guide {\n  display: flex;\n  gap: 20px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  flex-wrap: wrap;\n}\n.connection-guide .guide-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #555;\n}\n.connection-guide .guide-item mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #667eea;\n}\n.connection-guide .guide-item strong {\n  color: #667eea;\n  font-weight: 600;\n}\n.connection-guide .guide-item.info-item {\n  flex: 0 0 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px dashed rgba(102, 126, 234, 0.3);\n  margin-bottom: 4px;\n}\n.connection-guide .guide-item.info-item .info-icon {\n  color: #667eea;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.connection-guide .guide-item.info-item strong {\n  color: #667eea;\n}\n.connection-guide .guide-item.info-item span {\n  color: #555;\n}\n.canvas,\n.chatflow-canvas {\n  position: relative;\n  flex: 1;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(200, 200, 200, 0.1) 1px,\n      transparent 1px),\n    linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px),\n    #ffffff;\n  background-size: 20px 20px;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  overflow: auto;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  cursor: grab;\n}\n.canvas:active,\n.chatflow-canvas:active {\n  cursor: grabbing;\n}\n.canvas svg,\n.canvas > div,\n.chatflow-canvas svg,\n.chatflow-canvas > div {\n  transition: transform 0.2s ease;\n}\n.canvas svg,\n.chatflow-canvas svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 100;\n  transform-origin: 0 0;\n  overflow: visible;\n}\n.canvas svg line,\n.chatflow-canvas svg line {\n  stroke: #667eea;\n  stroke-width: 4;\n  opacity: 0.8;\n  filter: drop-shadow(0 2px 6px rgba(102, 126, 234, 0.4));\n  stroke-linecap: round;\n}\n.canvas > div,\n.chatflow-canvas > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-origin: 0 0;\n}\n::ng-deep .node-menu .mat-mdc-menu-panel {\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  min-width: 200px;\n}\n::ng-deep .category-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n}\n::ng-deep .category-menu-item mat-icon:first-child {\n  color: #667eea;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n::ng-deep .category-menu-item .arrow {\n  margin-left: auto;\n  color: #999;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n::ng-deep .category-menu-item:hover {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(102, 126, 234, 0.1) 0%,\n      transparent 100%);\n}\n::ng-deep .node-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  font-size: 14px;\n  color: #555;\n}\n::ng-deep .node-menu-item mat-icon {\n  color: #764ba2;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n::ng-deep .node-menu-item:hover {\n  background: rgba(118, 75, 162, 0.08);\n  color: #764ba2;\n  font-weight: 500;\n}\n.debug-panel {\n  position: fixed;\n  width: 400px;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 2px solid rgba(102, 126, 234, 0.2);\n  overflow: hidden;\n  z-index: 1000;\n  transition: width 0.3s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-panel.collapsed {\n  width: 180px;\n}\n.debug-panel.collapsed .debug-content {\n  display: none;\n}\n.debug-panel .debug-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: rgba(102, 126, 234, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-panel .debug-header mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.debug-panel .debug-header span {\n  flex: 1;\n  cursor: pointer;\n}\n.debug-panel .debug-header .header-buttons {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.debug-panel .debug-header .logout-btn {\n  color: white;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.debug-panel .debug-header .logout-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.debug-panel .debug-header .logout-btn:hover {\n  background: rgba(255, 69, 58, 0.3);\n}\n.debug-panel .debug-header .copy-all-btn {\n  color: white;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.debug-panel .debug-header .copy-all-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.debug-panel .debug-header .copy-all-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.debug-panel .debug-header:hover {\n  background: rgba(102, 126, 234, 0.95);\n}\n.debug-panel .debug-tabs {\n  height: 100%;\n}\n.debug-panel .debug-tabs ::ng-deep .mat-mdc-tab-labels {\n  background: rgba(102, 126, 234, 0.05);\n  border-radius: 8px 8px 0 0;\n}\n.debug-panel .debug-tabs ::ng-deep .mat-mdc-tab-label {\n  color: #666;\n  font-weight: 600;\n}\n.debug-panel .debug-tabs ::ng-deep .mat-mdc-tab-label.mdc-tab--active {\n  color: #667eea;\n}\n.debug-panel .debug-tabs .tab-content {\n  padding: 20px;\n}\n.debug-panel .debug-content {\n  padding: 16px;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.debug-panel .intent-runner-section h4 {\n  margin: 0 0 12px 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #333;\n}\n.debug-panel .intent-runner-section .description {\n  margin: 0 0 20px 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.6;\n}\n.debug-panel .intent-runner-section .intent-info {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border-radius: 12px;\n  border: 1px dashed rgba(102, 126, 234, 0.3);\n  margin-bottom: 24px;\n}\n.debug-panel .intent-runner-section .intent-info mat-icon {\n  color: #667eea;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.debug-panel .intent-runner-section .intent-info .info-text {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #555;\n}\n.debug-panel .intent-runner-section .intent-info .info-text strong {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n}\n.debug-panel .intent-runner-section .intent-info .info-text ol {\n  margin: 8px 0 0 0;\n  padding-left: 20px;\n}\n.debug-panel .intent-runner-section .intent-info .info-text ol li {\n  margin-bottom: 6px;\n  color: #666;\n}\n.debug-panel .intent-runner-section .intent-info .info-text ol li:last-child {\n  margin-bottom: 0;\n}\n.debug-panel .intent-runner-section .current-intent-box {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid rgba(102, 126, 234, 0.2);\n  overflow: hidden;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.08);\n}\n.debug-panel .intent-runner-section .current-intent-box .box-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.debug-panel .intent-runner-section .current-intent-box .box-header mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.debug-panel .intent-runner-section .current-intent-box .box-content {\n  padding: 20px;\n}\n.debug-panel .intent-runner-section .current-intent-box .box-content .intent-badge {\n  display: inline-block;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n.debug-panel .intent-runner-section .current-intent-box .box-content .intent-badge.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.15),\n      rgba(118, 75, 162, 0.15));\n  color: #667eea;\n  border: 2px solid #667eea;\n}\n.debug-panel .intent-runner-section .current-intent-box .box-content .intent-badge.inactive {\n  background: rgba(0, 0, 0, 0.05);\n  color: #999;\n  border: 2px dashed #ccc;\n}\n.debug-panel .intent-runner-section .current-intent-box .box-content .status-text {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #666;\n}\n.debug-panel .intent-runner-section .test-examples {\n  background: rgba(255, 193, 7, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid rgba(255, 193, 7, 0.3);\n}\n.debug-panel .intent-runner-section .test-examples h5 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #f57c00;\n}\n.debug-panel .intent-runner-section .test-examples .example-item {\n  padding: 12px;\n  background: white;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  font-size: 13px;\n  line-height: 1.8;\n  color: #555;\n  border-left: 3px solid #ffa726;\n}\n.debug-panel .intent-runner-section .test-examples .example-item:last-child {\n  margin-bottom: 0;\n}\n.debug-panel .intent-runner-section .test-examples .example-item strong {\n  color: #333;\n  font-weight: 600;\n}\n.debug-panel .debug-section {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.debug-panel .debug-section:last-of-type {\n  border-bottom: none;\n}\n.debug-panel .debug-section h4 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #333;\n}\n.debug-panel .debug-section.canvas-section {\n  background: rgba(102, 126, 234, 0.05);\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(102, 126, 234, 0.2);\n}\n.debug-panel .debug-section.canvas-section h4 {\n  color: #667eea;\n  margin-bottom: 16px;\n}\n.debug-panel .debug-section.canvas-section .subsection {\n  margin-bottom: 12px;\n  padding-left: 8px;\n  border-left: 2px solid rgba(102, 126, 234, 0.3);\n}\n.debug-panel .debug-section.canvas-section .subsection:last-child {\n  margin-bottom: 0;\n}\n.debug-panel .debug-section.canvas-section .subsection h5 {\n  margin: 0 0 8px 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.debug-panel .debug-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  margin-bottom: 4px;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.debug-panel .debug-row.highlight {\n  background: rgba(102, 126, 234, 0.1);\n  border-left: 3px solid #667eea;\n}\n.debug-panel .debug-row .label {\n  font-weight: 600;\n  color: #666;\n}\n.debug-panel .debug-row .value {\n  font-family: "Courier New", monospace;\n  color: #333;\n  background: rgba(255, 255, 255, 0.8);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.debug-panel .refresh-btn {\n  width: 100%;\n  margin-top: 12px;\n  border-color: #667eea;\n  color: #667eea;\n  font-weight: 600;\n}\n.debug-panel .refresh-btn:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=chatflow-edit.component.css.map */\n'] }]
  }], null, { container: [{
    type: ViewChild,
    args: ["container", { static: true, read: ViewContainerRef }]
  }], svg: [{
    type: ViewChild,
    args: ["svg", { static: true }]
  }], intentNameInput: [{
    type: ViewChild,
    args: ["intentName", { static: true }]
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], playSimulator: [{
    type: Output
  }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }], onMouseMove: [{
    type: HostListener,
    args: ["mousemove", ["$event"]]
  }], onMouseUp: [{
    type: HostListener,
    args: ["mouseup", ["$event"]]
  }], handleKeyboard: [{
    type: HostListener,
    args: ["window:keydown", ["$event"]]
  }], onDebugPanelMouseMove: [{
    type: HostListener,
    args: ["document:mousemove", ["$event"]]
  }], onDebugPanelMouseUp: [{
    type: HostListener,
    args: ["document:mouseup"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowEditComponent, { className: "ChatflowEditComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/chatflow-edit/chatflow-edit.component.ts", lineNumber: 29 });
})();

// src/app/modules/expedition/pages/chatflow/chatflow.component.ts
var ChatflowComponent = class _ChatflowComponent {
  contextManager = inject(ChatflowLogicContextManagerService);
  chatbotActionService = inject(ChatbotActionService);
  snackbar = inject(MatSnackBar);
  subscription = new Subscription();
  ngOnInit() {
    this.initializeMainContext();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.contextManager.clearAllContexts();
  }
  /**
   * 메인 컨텍스트 초기화
   */
  initializeMainContext() {
    const mainContext = new ChatflowLogicContext("main", this.contextManager, this.chatbotActionService);
    this.contextManager.registerContext("main", mainContext);
    this.contextManager.changeContext(mainContext);
    this.subscription.add(mainContext.$chatflowEnded.subscribe(() => {
      this.snackbar.open("\uCC57\uD50C\uB85C\uC6B0\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", {
        duration: 900,
        verticalPosition: "top"
      });
    }));
    console.log("\uBA54\uC778 \uCEE8\uD14D\uC2A4\uD2B8 \uCD08\uAE30\uD654 \uC644\uB8CC");
  }
  static \u0275fac = function ChatflowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowComponent, selectors: [["app-chatflow"]], standalone: false, decls: 6, vars: 3, consts: [[1, "chatflow-wrapper"], [2, "display", "flex", "width", "100%", "height", "100vh", "background", "#1a1a2e"], [2, "width", "400px", "height", "100%", "border-right", "1px solid #2a2a3e"], [3, "width"], [2, "width", "calc(100% - 400px)", "height", "100%"], [3, "width", "height"]], template: function ChatflowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-chatbot", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "app-chatflow-edit", 5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("width", 400);
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 1800)("height", 1200);
    }
  }, dependencies: [ChatbotComponent, ChatflowEditComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=chatflow.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowComponent, [{
    type: Component,
    args: [{ selector: "app-chatflow", standalone: false, template: '<div class="chatflow-wrapper">\n  <div style="display: flex; width: 100%; height: 100vh; background: #1a1a2e;">\n    <div style="width: 400px; height: 100%; border-right: 1px solid #2a2a3e;">\n        <app-chatbot [width]="400"></app-chatbot>\n    </div>\n    <div style="width: calc(100% - 400px); height: 100%;">\n        <app-chatflow-edit [width]="1800" [height]="1200"></app-chatflow-edit>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/expedition/pages/chatflow/chatflow.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=chatflow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowComponent, { className: "ChatflowComponent", filePath: "src/app/modules/expedition/pages/chatflow/chatflow.component.ts", lineNumber: 14 });
})();

// src/app/modules/expedition/services/expedition-api.service.ts
var ExpeditionApiService = class _ExpeditionApiService {
  diaryEntries = [
    {
      entryDate: "2025-10-20",
      generationInfo: "10\uC6D4 20\uC77C\uC758 \uC6D0\uC815 \uAE30\uB85D",
      content: "\uCCAB \uC6D0\uC815\uC744 \uB5A0\uB0AC\uB2E4. \uB0AF\uC120 \uAE38\uC744 \uAC77\uB294 \uAC83\uC740 \uB450\uB835\uAE30\uB3C4 \uD558\uACE0 \uC124\uB808\uAE30\uB3C4 \uD588\uB2E4. \uC624\uB298 \uB9CC\uB09C \uC0AC\uB78C\uB4E4\uACFC\uC758 \uB300\uD654\uAC00 \uB0B4\uAC8C \uC0C8\uB85C\uC6B4 \uC601\uAC10\uC744 \uC8FC\uC5C8\uACE0, \uC55E\uC73C\uB85C\uC758 \uC5EC\uC815\uC774 \uAE30\uB300\uB41C\uB2E4.",
      emotion: "\uC124\uB818",
      event: "\uCCAB \uC6D0\uC815 \uC2DC\uC791"
    },
    {
      entryDate: "2025-10-21",
      generationInfo: "10\uC6D4 21\uC77C\uC758 \uC6D0\uC815 \uAE30\uB85D",
      content: "\uC0B0\uC744 \uB118\uACE0 \uAC15\uC744 \uAC74\uB11C\uB2E4. \uD798\uB4E0 \uC5EC\uC815\uC774\uC5C8\uC9C0\uB9CC \uB3D9\uB8CC\uB4E4\uACFC \uD568\uAED8\uC5EC\uC11C \uADF9\uBCF5\uD560 \uC218 \uC788\uC5C8\uB2E4. \uC800\uB141 \uCEA0\uD504\uD30C\uC774\uC5B4 \uC55E\uC5D0\uC11C \uB098\uB208 \uC774\uC57C\uAE30\uB4E4\uC774 \uB9C8\uC74C\uC744 \uB530\uB73B\uD558\uAC8C \uD588\uB2E4.",
      emotion: "\uAC10\uC0AC",
      event: "\uB3D9\uB8CC\uB4E4\uACFC\uC758 \uD611\uB825"
    },
    {
      entryDate: "2025-10-22",
      generationInfo: "10\uC6D4 22\uC77C\uC758 \uC6D0\uC815 \uAE30\uB85D",
      content: "\uC608\uC0C1\uCE58 \uBABB\uD55C \uD3ED\uD48D\uC744 \uB9CC\uB0AC\uB2E4. \uBAA8\uB4E0 \uAC83\uC774 \uACC4\uD68D\uB300\uB85C \uB418\uC9C0 \uC54A\uC744 \uB54C, \uC6B0\uB9AC\uB294 \uC9C4\uC815\uD55C \uC790\uC2E0\uC744 \uBC1C\uACAC\uD55C\uB2E4. \uC624\uB298\uC740 \uB098\uC758 \uD55C\uACC4\uB97C \uC2DC\uD5D8\uD558\uACE0 \uADF8\uAC83\uC744 \uC870\uAE08 \uB354 \uB113\uD78C \uB0A0\uC774\uB2E4.",
      emotion: "\uB3C4\uC804",
      event: "\uD3ED\uD48D \uADF9\uBCF5"
    },
    {
      entryDate: "2025-10-23",
      generationInfo: "10\uC6D4 23\uC77C\uC758 \uC6D0\uC815 \uAE30\uB85D",
      content: "\uBAA9\uC801\uC9C0\uAC00 \uC810\uC810 \uAC00\uAE4C\uC6CC\uC9C4\uB2E4. \uC5EC\uC815\uC758 \uB05D\uC774 \uBCF4\uC774\uC9C0\uB9CC, \uC774\uC81C\uB294 \uB3C4\uCC29\uBCF4\uB2E4 \uACFC\uC815\uC774 \uB354 \uC18C\uC911\uD558\uB2E4\uB294 \uAC83\uC744 \uAE68\uB2EC\uC558\uB2E4. \uB9E4\uC77C\uB9E4\uC77C\uC774 \uC0C8\uB85C\uC6B4 \uBC30\uC6C0\uC774\uACE0 \uC131\uC7A5\uC774\uB2E4.",
      emotion: "\uAE68\uB2EC\uC74C",
      event: "\uBAA9\uC801\uC9C0 \uC811\uADFC"
    }
  ];
  entries$ = new BehaviorSubject(this.diaryEntries);
  constructor() {
  }
  /**
   * 모든 일기 항목 조회
   */
  getEntries() {
    return this.entries$.asObservable();
  }
  /**
   * 특정 날짜의 일기 조회
   */
  getEntryByDate(date) {
    return this.diaryEntries.find((entry) => entry.entryDate === date);
  }
  /**
   * 새로운 일기 생성
   */
  createEntry(entry) {
    return new Observable((observer) => {
      const exists = this.diaryEntries.find((e) => e.entryDate === entry.entryDate);
      if (exists) {
        observer.error({ message: "\uD574\uB2F9 \uB0A0\uC9DC\uC758 \uC77C\uAE30\uAC00 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4." });
        return;
      }
      entry.createdAt = /* @__PURE__ */ new Date();
      entry.updatedAt = /* @__PURE__ */ new Date();
      this.diaryEntries.push(entry);
      this.entries$.next([...this.diaryEntries]);
      observer.next(entry);
      observer.complete();
    });
  }
  /**
   * 일기 수정
   */
  updateEntry(date, entry) {
    return new Observable((observer) => {
      const index = this.diaryEntries.findIndex((e) => e.entryDate === date);
      if (index === -1) {
        observer.error({ message: "\uC77C\uAE30\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." });
        return;
      }
      this.diaryEntries[index] = __spreadProps(__spreadValues(__spreadValues({}, this.diaryEntries[index]), entry), {
        updatedAt: /* @__PURE__ */ new Date()
      });
      this.entries$.next([...this.diaryEntries]);
      observer.next(this.diaryEntries[index]);
      observer.complete();
    });
  }
  /**
   * 일기 삭제
   */
  deleteEntry(date) {
    return new Observable((observer) => {
      const index = this.diaryEntries.findIndex((e) => e.entryDate === date);
      if (index === -1) {
        observer.error({ message: "\uC77C\uAE30\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." });
        return;
      }
      this.diaryEntries.splice(index, 1);
      this.entries$.next([...this.diaryEntries]);
      observer.next(true);
      observer.complete();
    });
  }
  /**
   * 날짜 범위로 일기 조회
   */
  getEntriesByDateRange(startDate, endDate) {
    return this.diaryEntries.filter((entry) => {
      return entry.entryDate >= startDate && entry.entryDate <= endDate;
    });
  }
  static \u0275fac = function ExpeditionApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpeditionApiService, factory: _ExpeditionApiService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionApiService, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/expedition/services/expedition-membership.service.ts
var ExpeditionMembershipService = class _ExpeditionMembershipService {
  membershipData = {
    isPremium: false,
    entryCount: 4,
    maxEntries: 10,
    // 무료 사용자는 10개까지
    joinedAt: /* @__PURE__ */ new Date("2025-10-20")
  };
  membership$ = new BehaviorSubject(this.membershipData);
  constructor() {
  }
  /**
   * 멤버십 정보 조회
   */
  getMembership() {
    return this.membership$.asObservable();
  }
  /**
   * 멤버십 정보 동기 조회
   */
  getMembershipSync() {
    return this.membership$.value;
  }
  /**
   * 프리미엄 여부 확인
   */
  isPremium() {
    return this.membershipData.isPremium;
  }
  /**
   * 일기 작성 가능 여부 확인
   */
  canCreateEntry() {
    if (this.membershipData.isPremium) {
      return true;
    }
    return this.membershipData.entryCount < this.membershipData.maxEntries;
  }
  /**
   * 남은 일기 개수 조회
   */
  getRemainingEntries() {
    if (this.membershipData.isPremium) {
      return -1;
    }
    return Math.max(0, this.membershipData.maxEntries - this.membershipData.entryCount);
  }
  /**
   * 일기 작성 카운트 증가
   */
  incrementEntryCount() {
    this.membershipData.entryCount++;
    this.membership$.next(__spreadValues({}, this.membershipData));
  }
  /**
   * 프리미엄 업그레이드
   */
  upgradeToPremium() {
    this.membershipData.isPremium = true;
    this.membership$.next(__spreadValues({}, this.membershipData));
  }
  /**
   * 멤버십 초기화 (테스트용)
   */
  resetMembership() {
    this.membershipData = {
      isPremium: false,
      entryCount: 0,
      maxEntries: 10,
      joinedAt: /* @__PURE__ */ new Date()
    };
    this.membership$.next(__spreadValues({}, this.membershipData));
  }
  static \u0275fac = function ExpeditionMembershipService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionMembershipService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpeditionMembershipService, factory: _ExpeditionMembershipService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionMembershipService, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/expedition/components/membership/membership.component.ts
function MembershipComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "\uB0A8\uC740 \uC77C\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("warning", ctx_r0.remainingEntries < 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.remainingEntries, " ");
  }
}
function MembershipComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "\uB0A8\uC740 \uC77C\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4, "\u221E");
    \u0275\u0275elementEnd()();
  }
}
function MembershipComponent_div_0_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function MembershipComponent_div_0_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.upgradeToPremium());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "upgrade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \uD504\uB9AC\uBBF8\uC5C4 \uC5C5\uADF8\uB808\uC774\uB4DC ");
    \u0275\u0275elementEnd();
  }
}
function MembershipComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
    \u0275\u0275text(10, "\uC791\uC131\uD55C \uC77C\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, MembershipComponent_div_0_div_13_Template, 5, 3, "div", 8)(14, MembershipComponent_div_0_div_14_Template, 5, 0, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, MembershipComponent_div_0_button_15_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("premium", ctx_r0.membership.isPremium);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.membership.isPremium ? "workspace_premium" : "person");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.membership.isPremium ? "\uD504\uB9AC\uBBF8\uC5C4" : "\uBB34\uB8CC");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.membership.entryCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.membership.isPremium);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.membership.isPremium);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.membership.isPremium);
  }
}
var MembershipComponent = class _MembershipComponent {
  membershipService;
  membership = null;
  remainingEntries = 0;
  constructor(membershipService) {
    this.membershipService = membershipService;
  }
  ngOnInit() {
    this.membershipService.getMembership().subscribe((membership) => {
      this.membership = membership;
      this.remainingEntries = this.membershipService.getRemainingEntries();
    });
  }
  upgradeToPremium() {
    if (confirm("\uD504\uB9AC\uBBF8\uC5C4\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      this.membershipService.upgradeToPremium();
      alert("\uD504\uB9AC\uBBF8\uC5C4 \uBA64\uBC84\uC2ED\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!");
    }
  }
  static \u0275fac = function MembershipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MembershipComponent)(\u0275\u0275directiveInject(ExpeditionMembershipService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembershipComponent, selectors: [["app-membership"]], standalone: false, decls: 1, vars: 1, consts: [["class", "membership-card", 4, "ngIf"], [1, "membership-card"], [1, "membership-info"], [1, "status-badge"], [1, "stats"], [1, "stat-item"], [1, "label"], [1, "value"], ["class", "stat-item", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "class", "upgrade-button", 3, "click", 4, "ngIf"], [1, "value", "unlimited"], ["mat-raised-button", "", "color", "accent", 1, "upgrade-button", 3, "click"]], template: function MembershipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MembershipComponent_div_0_Template, 16, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.membership);
    }
  }, dependencies: [NgIf, MatButton, MatIcon], styles: ["\n\n.membership-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 30px;\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.membership-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n}\n.status-badge.premium[_ngcontent-%COMP%] {\n  background: rgba(255, 215, 0, 0.3);\n}\n.status-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n}\n.stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.9;\n  margin-bottom: 4px;\n}\n.stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .value.warning[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .value.unlimited[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.upgrade-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-weight: 600;\n}\n.upgrade-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n@media (max-width: 768px) {\n  .membership-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=membership.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MembershipComponent, [{
    type: Component,
    args: [{ selector: "app-membership", standalone: false, template: `<div class="membership-card" *ngIf="membership">
  <div class="membership-info">
    <div class="status-badge" [class.premium]="membership.isPremium">
      <mat-icon>{{ membership.isPremium ? 'workspace_premium' : 'person' }}</mat-icon>
      <span>{{ membership.isPremium ? '\uD504\uB9AC\uBBF8\uC5C4' : '\uBB34\uB8CC' }}</span>
    </div>

    <div class="stats">
      <div class="stat-item">
        <span class="label">\uC791\uC131\uD55C \uC77C\uAE30</span>
        <span class="value">{{ membership.entryCount }}</span>
      </div>

      <div class="stat-item" *ngIf="!membership.isPremium">
        <span class="label">\uB0A8\uC740 \uC77C\uAE30</span>
        <span class="value" [class.warning]="remainingEntries < 3">
          {{ remainingEntries }}
        </span>
      </div>

      <div class="stat-item" *ngIf="membership.isPremium">
        <span class="label">\uB0A8\uC740 \uC77C\uAE30</span>
        <span class="value unlimited">\u221E</span>
      </div>
    </div>
  </div>

  <button 
    *ngIf="!membership.isPremium"
    mat-raised-button 
    color="accent"
    class="upgrade-button"
    (click)="upgradeToPremium()">
    <mat-icon>upgrade</mat-icon>
    \uD504\uB9AC\uBBF8\uC5C4 \uC5C5\uADF8\uB808\uC774\uB4DC
  </button>
</div>
`, styles: ["/* src/app/modules/expedition/components/membership/membership.component.scss */\n.membership-card {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 30px;\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.membership-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.status-badge {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: 600;\n}\n.status-badge.premium {\n  background: rgba(255, 215, 0, 0.3);\n}\n.status-badge mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.stats {\n  display: flex;\n  gap: 30px;\n}\n.stats .stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.stats .stat-item .label {\n  font-size: 0.85rem;\n  opacity: 0.9;\n  margin-bottom: 4px;\n}\n.stats .stat-item .value {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.stats .stat-item .value.warning {\n  color: #ffd700;\n}\n.stats .stat-item .value.unlimited {\n  font-size: 2rem;\n}\n.upgrade-button {\n  width: 100%;\n  height: 48px;\n  font-weight: 600;\n}\n.upgrade-button mat-icon {\n  margin-right: 8px;\n}\n@media (max-width: 768px) {\n  .membership-info {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .stats {\n    width: 100%;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=membership.component.css.map */\n"] }]
  }], () => [{ type: ExpeditionMembershipService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembershipComponent, { className: "MembershipComponent", filePath: "src/app/modules/expedition/components/membership/membership.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/components/calendar/calendar.component.ts
function CalendarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r1, " ");
  }
}
function CalendarComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", day_r3.entry.emotion || "\u{1F4DD}", " ");
  }
}
function CalendarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function CalendarComponent_div_14_Template_div_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDayClick(day_r3));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarComponent_div_14_div_3_Template, 3, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("other-month", !day_r3.isCurrentMonth)("has-entry", day_r3.hasEntry)("today", ctx_r3.isToday(day_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r3.date.getDate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r3.hasEntry && day_r3.entry);
  }
}
var CalendarComponent = class _CalendarComponent {
  router;
  apiService;
  membershipService;
  currentDate = /* @__PURE__ */ new Date();
  currentYear = this.currentDate.getFullYear();
  currentMonth = this.currentDate.getMonth();
  calendarDays = [];
  weekDays = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
  entries = [];
  remainingEntries = 0;
  constructor(router, apiService, membershipService) {
    this.router = router;
    this.apiService = apiService;
    this.membershipService = membershipService;
  }
  ngOnInit() {
    this.loadEntries();
    this.loadMembership();
    this.generateCalendar();
  }
  loadEntries() {
    this.apiService.getEntries().subscribe((entries) => {
      this.entries = entries;
      this.generateCalendar();
    });
  }
  loadMembership() {
    this.membershipService.getMembership().subscribe((membership) => {
      this.remainingEntries = this.membershipService.getRemainingEntries();
    });
  }
  generateCalendar() {
    this.calendarDays = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDay = firstDay.getDay();
    const prevLastDay = new Date(this.currentYear, this.currentMonth, 0);
    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(this.currentYear, this.currentMonth - 1, prevLastDay.getDate() - i);
      this.calendarDays.push({
        date,
        dateStr: this.formatDate(date),
        isCurrentMonth: false,
        hasEntry: this.hasEntryForDate(this.formatDate(date))
      });
    }
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      const dateStr = this.formatDate(date);
      const entry = this.entries.find((e) => e.entryDate === dateStr);
      this.calendarDays.push({
        date,
        dateStr,
        isCurrentMonth: true,
        hasEntry: !!entry,
        entry
      });
    }
    const remainingDays = 42 - this.calendarDays.length;
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(this.currentYear, this.currentMonth + 1, day);
      this.calendarDays.push({
        date,
        dateStr: this.formatDate(date),
        isCurrentMonth: false,
        hasEntry: this.hasEntryForDate(this.formatDate(date))
      });
    }
  }
  hasEntryForDate(dateStr) {
    return this.entries.some((entry) => entry.entryDate === dateStr);
  }
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }
  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }
  onDayClick(day) {
    if (!day.isCurrentMonth)
      return;
    if (day.hasEntry) {
      this.router.navigate(["/expedition/diary/story", day.dateStr]);
    } else {
      if (!this.membershipService.canCreateEntry()) {
        alert("\uC77C\uAE30 \uC791\uC131 \uAC00\uB2A5 \uD69F\uC218\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4. \uD504\uB9AC\uBBF8\uC5C4\uC73C\uB85C \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uC138\uC694.");
        return;
      }
      this.router.navigate(["/expedition/diary/maker", day.dateStr]);
    }
  }
  getMonthName() {
    return `${this.currentYear}\uB144 ${this.currentMonth + 1}\uC6D4`;
  }
  isToday(day) {
    const today = /* @__PURE__ */ new Date();
    return day.date.getDate() === today.getDate() && day.date.getMonth() === today.getMonth() && day.date.getFullYear() === today.getFullYear();
  }
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ExpeditionApiService), \u0275\u0275directiveInject(ExpeditionMembershipService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], standalone: false, decls: 24, vars: 3, consts: [[1, "calendar-container"], [1, "calendar-header"], ["mat-icon-button", "", 3, "click"], [1, "weekdays"], ["class", "weekday", 4, "ngFor", "ngForOf"], [1, "calendar-grid"], ["class", "calendar-day", 3, "other-month", "has-entry", "today", "click", 4, "ngFor", "ngForOf"], [1, "legend"], [1, "legend-item"], [1, "legend-color", "has-entry-color"], [1, "legend-color", "today-color"], [1, "weekday"], [1, "calendar-day", 3, "click"], [1, "day-number"], ["class", "entry-preview", 4, "ngIf"], [1, "entry-preview"], [1, "emotion-badge"]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-membership");
      \u0275\u0275elementStart(2, "div", 1)(3, "button", 2);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_3_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_8_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 3);
      \u0275\u0275template(12, CalendarComponent_div_12_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 5);
      \u0275\u0275template(14, CalendarComponent_div_14_Template, 4, 8, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8);
      \u0275\u0275element(17, "div", 9);
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "\uAE30\uB85D \uC788\uC74C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8);
      \u0275\u0275element(21, "div", 10);
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "\uC624\uB298");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.getMonthName());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.weekDays);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.calendarDays);
    }
  }, dependencies: [NgForOf, NgIf, MatIconButton, MatIcon, MembershipComponent], styles: ["\n\n.calendar-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  padding: 0 10px;\n}\n.calendar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #333;\n}\n.calendar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.weekdays[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 10px;\n  margin-bottom: 10px;\n  padding: 0 5px;\n}\n.weekdays[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #666;\n  padding: 10px 0;\n}\n.weekdays[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%]:first-child {\n  color: #e74c3c;\n}\n.weekdays[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%]:last-child {\n  color: #3498db;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  padding: 10px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #667eea;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day.other-month[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  cursor: default;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day.other-month[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n  border-color: #e0e0e0;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day.has-entry[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412) 0%,\n      rgba(118, 75, 162, 0.0823529412) 100%);\n  border-color: #667eea;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day.today[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  border-width: 3px;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day.today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-weight: 700;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 5px;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]   .entry-preview[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]   .entry-preview[_ngcontent-%COMP%]   .emotion-badge[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-align: center;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.has-entry-color[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.today-color[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .calendar-grid[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n  .calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  .calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .calendar-grid[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%]   .emotion-badge[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .weekdays[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n  .weekdays[_ngcontent-%COMP%]   .weekday[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{ selector: "app-calendar", standalone: false, template: `<div class="calendar-container">
  <!-- \uBA64\uBC84\uC2ED \uC815\uBCF4 -->
  <app-membership></app-membership>

  <!-- \uCE98\uB9B0\uB354 \uD5E4\uB354 -->
  <div class="calendar-header">
    <button mat-icon-button (click)="previousMonth()">
      <mat-icon>chevron_left</mat-icon>
    </button>
    
    <h2>{{ getMonthName() }}</h2>
    
    <button mat-icon-button (click)="nextMonth()">
      <mat-icon>chevron_right</mat-icon>
    </button>
  </div>

  <!-- \uC694\uC77C \uD5E4\uB354 -->
  <div class="weekdays">
    <div *ngFor="let day of weekDays" class="weekday">
      {{ day }}
    </div>
  </div>

  <!-- \uCE98\uB9B0\uB354 \uADF8\uB9AC\uB4DC -->
  <div class="calendar-grid">
    <div 
      *ngFor="let day of calendarDays"
      class="calendar-day"
      [class.other-month]="!day.isCurrentMonth"
      [class.has-entry]="day.hasEntry"
      [class.today]="isToday(day)"
      (click)="onDayClick(day)">
      
      <div class="day-number">{{ day.date.getDate() }}</div>
      
      <div *ngIf="day.hasEntry && day.entry" class="entry-preview">
        <div class="emotion-badge">
          {{ day.entry.emotion || '\u{1F4DD}' }}
        </div>
      </div>
    </div>
  </div>

  <!-- \uBC94\uB840 -->
  <div class="legend">
    <div class="legend-item">
      <div class="legend-color has-entry-color"></div>
      <span>\uAE30\uB85D \uC788\uC74C</span>
    </div>
    <div class="legend-item">
      <div class="legend-color today-color"></div>
      <span>\uC624\uB298</span>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/expedition/components/calendar/calendar.component.scss */\n.calendar-container {\n  padding: 20px;\n}\n.calendar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  padding: 0 10px;\n}\n.calendar-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #333;\n}\n.calendar-header button {\n  color: #667eea;\n}\n.weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 10px;\n  margin-bottom: 10px;\n  padding: 0 5px;\n}\n.weekdays .weekday {\n  text-align: center;\n  font-weight: 600;\n  color: #666;\n  padding: 10px 0;\n}\n.weekdays .weekday:first-child {\n  color: #e74c3c;\n}\n.weekdays .weekday:last-child {\n  color: #3498db;\n}\n.calendar-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 10px;\n  margin-bottom: 30px;\n}\n.calendar-grid .calendar-day {\n  aspect-ratio: 1;\n  padding: 10px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.calendar-grid .calendar-day:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #667eea;\n}\n.calendar-grid .calendar-day.other-month {\n  opacity: 0.3;\n  cursor: default;\n}\n.calendar-grid .calendar-day.other-month:hover {\n  transform: none;\n  box-shadow: none;\n  border-color: #e0e0e0;\n}\n.calendar-grid .calendar-day.has-entry {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412) 0%,\n      rgba(118, 75, 162, 0.0823529412) 100%);\n  border-color: #667eea;\n}\n.calendar-grid .calendar-day.today {\n  border-color: #e74c3c;\n  border-width: 3px;\n}\n.calendar-grid .calendar-day.today .day-number {\n  color: #e74c3c;\n  font-weight: 700;\n}\n.calendar-grid .calendar-day .day-number {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 5px;\n}\n.calendar-grid .calendar-day .entry-preview {\n  margin-top: auto;\n}\n.calendar-grid .calendar-day .entry-preview .emotion-badge {\n  font-size: 1.5rem;\n  text-align: center;\n}\n.legend {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.legend .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.legend .legend-item .legend-color {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n}\n.legend .legend-item .legend-color.has-entry-color {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.legend .legend-item .legend-color.today-color {\n  background: #e74c3c;\n}\n.legend .legend-item span {\n  font-size: 0.9rem;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .calendar-grid {\n    gap: 5px;\n  }\n  .calendar-grid .calendar-day {\n    padding: 5px;\n  }\n  .calendar-grid .calendar-day .day-number {\n    font-size: 0.9rem;\n  }\n  .calendar-grid .calendar-day .emotion-badge {\n    font-size: 1rem;\n  }\n  .weekdays {\n    gap: 5px;\n  }\n  .weekdays .weekday {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ExpeditionApiService }, { type: ExpeditionMembershipService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/modules/expedition/components/calendar/calendar.component.ts", lineNumber: 21 });
})();

// src/app/modules/expedition/pages/init/init.component.ts
function InitComponent_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "rocket_launch");
    \u0275\u0275elementEnd();
  }
}
function InitComponent_mat_spinner_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 11);
  }
}
var InitComponent = class _InitComponent {
  router;
  membershipService;
  userName = "";
  isLoading = false;
  constructor(router, membershipService) {
    this.router = router;
    this.membershipService = membershipService;
  }
  ngOnInit() {
    const membership = this.membershipService.getMembershipSync();
    if (membership.userName) {
      this.router.navigate(["/expedition/calendar"]);
    }
  }
  onStart() {
    if (!this.userName.trim()) {
      alert("\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(["/expedition/calendar"]);
    }, 1e3);
  }
  static \u0275fac = function InitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InitComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ExpeditionMembershipService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InitComponent, selectors: [["app-init"]], standalone: false, decls: 38, vars: 6, consts: [[1, "init-container"], [1, "init-content"], [1, "welcome-section"], [1, "input-section"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "\uC774\uB984 \uC785\uB825", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], ["mat-raised-button", "", "color", "primary", 1, "start-button", 3, "click", "disabled"], [4, "ngIf"], ["diameter", "20", 4, "ngIf"], [1, "features-section"], [1, "feature"], ["diameter", "20"]], template: function InitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "\u{1F31F} \uC6D0\uC815\uB300\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "\uB2F9\uC2E0\uB9CC\uC758 \uC5EC\uC815\uC744 \uC2DC\uC791\uD574\uBCF4\uC138\uC694. \uB9E4\uC77C\uC758 \uAE30\uB85D\uC774 \uD2B9\uBCC4\uD55C \uC774\uC57C\uAE30\uAC00 \uB429\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10, "\uB2F9\uC2E0\uC758 \uC774\uB984\uC744 \uC54C\uB824\uC8FC\uC138\uC694");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function InitComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.userName, $event) || (ctx.userName = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function InitComponent_Template_input_keyup_enter_11_listener() {
        return ctx.onStart();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function InitComponent_Template_button_click_12_listener() {
        return ctx.onStart();
      });
      \u0275\u0275template(13, InitComponent_mat_icon_13_Template, 2, 0, "mat-icon", 7)(14, InitComponent_mat_spinner_14_Template, 1, 0, "mat-spinner", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "mat-icon");
      \u0275\u0275text(19, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h3");
      \u0275\u0275text(21, "\uB0A0\uC9DC\uBCC4 \uAE30\uB85D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "\uB9E4\uC77C\uC758 \uC21C\uAC04\uC744 \uCE98\uB9B0\uB354\uC5D0 \uAE30\uB85D\uD558\uC138\uC694");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 10)(25, "mat-icon");
      \u0275\u0275text(26, "chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h3");
      \u0275\u0275text(28, "\uB300\uD654\uD615 \uC791\uC131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "\uCC57\uBD07\uACFC \uB300\uD654\uD558\uBA70 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC791\uC131");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 10)(32, "mat-icon");
      \u0275\u0275text(33, "auto_stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h3");
      \u0275\u0275text(35, "\uC2A4\uD1A0\uB9AC \uC0DD\uC131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "AI\uAC00 \uB2F9\uC2E0\uC758 \uAE30\uB85D\uC744 \uC774\uC57C\uAE30\uB85C");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.userName);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || !ctx.userName.trim());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "\uC900\uBE44 \uC911..." : "\uC5EC\uC815 \uC2DC\uC791\uD558\uAE30", " ");
    }
  }, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatIcon, MatFormField, MatLabel, MatInput, MatProgressSpinner], styles: ["\n\n.init-container[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.init-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n}\n.welcome-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.welcome-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #333;\n  margin-bottom: 15px;\n}\n.welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  line-height: 1.6;\n}\n.input-section[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.input-section[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.input-section[_ngcontent-%COMP%]   .start-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.input-section[_ngcontent-%COMP%]   .start-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.input-section[_ngcontent-%COMP%]   .start-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n}\n.features-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n  margin-top: 30px;\n}\n.features-section[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  transition: transform 0.2s;\n}\n.features-section[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.features-section[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #667eea;\n  margin-bottom: 10px;\n}\n.features-section[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 10px 0 5px 0;\n  color: #333;\n}\n.features-section[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #666;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .welcome-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .features-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=init.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitComponent, [{
    type: Component,
    args: [{ selector: "app-init", standalone: false, template: `<div class="init-container">
  <div class="init-content">
    <div class="welcome-section">
      <h2>\u{1F31F} \uC6D0\uC815\uB300\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!</h2>
      <p>\uB2F9\uC2E0\uB9CC\uC758 \uC5EC\uC815\uC744 \uC2DC\uC791\uD574\uBCF4\uC138\uC694. \uB9E4\uC77C\uC758 \uAE30\uB85D\uC774 \uD2B9\uBCC4\uD55C \uC774\uC57C\uAE30\uAC00 \uB429\uB2C8\uB2E4.</p>
    </div>

    <div class="input-section">
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>\uB2F9\uC2E0\uC758 \uC774\uB984\uC744 \uC54C\uB824\uC8FC\uC138\uC694</mat-label>
        <input 
          matInput 
          [(ngModel)]="userName" 
          placeholder="\uC774\uB984 \uC785\uB825"
          (keyup.enter)="onStart()"
          [disabled]="isLoading">
      </mat-form-field>

      <button 
        mat-raised-button 
        color="primary" 
        class="start-button"
        (click)="onStart()"
        [disabled]="isLoading || !userName.trim()">
        <mat-icon *ngIf="!isLoading">rocket_launch</mat-icon>
        <mat-spinner *ngIf="isLoading" diameter="20"></mat-spinner>
        {{ isLoading ? '\uC900\uBE44 \uC911...' : '\uC5EC\uC815 \uC2DC\uC791\uD558\uAE30' }}
      </button>
    </div>

    <div class="features-section">
      <div class="feature">
        <mat-icon>calendar_today</mat-icon>
        <h3>\uB0A0\uC9DC\uBCC4 \uAE30\uB85D</h3>
        <p>\uB9E4\uC77C\uC758 \uC21C\uAC04\uC744 \uCE98\uB9B0\uB354\uC5D0 \uAE30\uB85D\uD558\uC138\uC694</p>
      </div>
      <div class="feature">
        <mat-icon>chat</mat-icon>
        <h3>\uB300\uD654\uD615 \uC791\uC131</h3>
        <p>\uCC57\uBD07\uACFC \uB300\uD654\uD558\uBA70 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC791\uC131</p>
      </div>
      <div class="feature">
        <mat-icon>auto_stories</mat-icon>
        <h3>\uC2A4\uD1A0\uB9AC \uC0DD\uC131</h3>
        <p>AI\uAC00 \uB2F9\uC2E0\uC758 \uAE30\uB85D\uC744 \uC774\uC57C\uAE30\uB85C</p>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/expedition/pages/init/init.component.scss */\n.init-container {\n  min-height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.init-content {\n  max-width: 600px;\n  width: 100%;\n}\n.welcome-section {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.welcome-section h2 {\n  font-size: 2rem;\n  color: #333;\n  margin-bottom: 15px;\n}\n.welcome-section p {\n  font-size: 1.1rem;\n  color: #666;\n  line-height: 1.6;\n}\n.input-section {\n  margin-bottom: 50px;\n}\n.input-section .full-width {\n  width: 100%;\n}\n.input-section .start-button {\n  width: 100%;\n  height: 56px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.input-section .start-button mat-icon {\n  margin-right: 8px;\n}\n.input-section .start-button mat-spinner {\n  display: inline-block;\n  margin-right: 8px;\n}\n.features-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n  margin-top: 30px;\n}\n.features-section .feature {\n  text-align: center;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  transition: transform 0.2s;\n}\n.features-section .feature:hover {\n  transform: translateY(-5px);\n}\n.features-section .feature mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #667eea;\n  margin-bottom: 10px;\n}\n.features-section .feature h3 {\n  font-size: 1rem;\n  margin: 10px 0 5px 0;\n  color: #333;\n}\n.features-section .feature p {\n  font-size: 0.875rem;\n  color: #666;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .welcome-section h2 {\n    font-size: 1.5rem;\n  }\n  .features-section {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=init.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ExpeditionMembershipService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InitComponent, { className: "InitComponent", filePath: "src/app/modules/expedition/pages/init/init.component.ts", lineNumber: 11 });
})();

// src/app/modules/expedition/pages/story-viewer/story-viewer.component.ts
function StoryViewerComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function StoryViewerComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editEntry());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function StoryViewerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function StoryViewerComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteEntry());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function StoryViewerComponent_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon");
    \u0275\u0275text(2, "sentiment_satisfied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.entry.emotion);
  }
}
function StoryViewerComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon");
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.entry.event);
  }
}
function StoryViewerComponent_div_10_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "\u{1F4A1} \uACB0\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.entry.decision);
  }
}
function StoryViewerComponent_div_10_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "\u{1F914} \uC131\uCC30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.entry.reflection);
  }
}
function StoryViewerComponent_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, StoryViewerComponent_div_10_div_13_div_1_Template, 5, 1, "div", 16)(2, StoryViewerComponent_div_10_div_13_div_2_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entry.decision);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entry.reflection);
  }
}
function StoryViewerComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275template(4, StoryViewerComponent_div_10_div_4_Template, 5, 1, "div", 10)(5, StoryViewerComponent_div_10_div_5_Template, 5, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-card", 11)(7, "mat-card-header")(8, "mat-card-title");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-card-content")(11, "p", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, StoryViewerComponent_div_10_div_13_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4C5} ", ctx_r1.formatDate(ctx_r1.entry.entryDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.entry.emotion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entry.event);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.entry.generationInfo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.entry.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entry.decision || ctx_r1.entry.reflection);
  }
}
function StoryViewerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\uC77C\uAE30\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
var StoryViewerComponent = class _StoryViewerComponent {
  route;
  router;
  apiService;
  snackBar;
  entry = null;
  isLoading = true;
  dateStr = "";
  constructor(route, router, apiService, snackBar) {
    this.route = route;
    this.router = router;
    this.apiService = apiService;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    try {
      this.route.params.subscribe((params) => {
        this.dateStr = params["date"];
        if (!this.dateStr) {
          throw new Error("\uB0A0\uC9DC \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
        }
        this.loadEntry();
      });
    } catch (error) {
      console.warn("[StoryViewer] ngOnInit \uC5D0\uB7EC:", error);
      this.showErrorAndRedirect("\uD398\uC774\uC9C0\uB97C \uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
  }
  loadEntry() {
    this.isLoading = true;
    try {
      setTimeout(() => {
        const foundEntry = this.apiService.getEntryByDate(this.dateStr);
        this.entry = foundEntry || null;
        this.isLoading = false;
        if (!this.entry) {
          this.showErrorAndRedirect("\uC77C\uAE30\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        }
      }, 500);
    } catch (error) {
      console.warn("[StoryViewer] loadEntry \uC5D0\uB7EC:", error);
      this.showErrorAndRedirect("\uC77C\uAE30\uB97C \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
    }
  }
  goBack() {
    this.router.navigate(["/expedition/diary/calendar"]);
  }
  editEntry() {
    this.router.navigate(["/expedition/diary/maker", this.dateStr]);
  }
  deleteEntry() {
    if (!confirm("\uC815\uB9D0 \uC774 \uC77C\uAE30\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      return;
    }
    this.apiService.deleteEntry(this.dateStr).subscribe({
      next: () => {
        this.snackBar.open("\uC77C\uAE30\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\uB2EB\uAE30", { duration: 3e3 });
        this.router.navigate(["/expedition/diary/calendar"]);
      },
      error: (err) => {
        this.showErrorAndRedirect(err.message || "\uC0AD\uC81C\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
      }
    });
  }
  formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"][date.getDay()];
    return `${year}\uB144 ${month}\uC6D4 ${day}\uC77C (${dayOfWeek})`;
  }
  showErrorAndRedirect(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 4e3,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["error-snackbar"]
    });
    setTimeout(() => {
      this.router.navigate(["/expedition/apps"]);
    }, 500);
  }
  static \u0275fac = function StoryViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoryViewerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ExpeditionApiService), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoryViewerComponent, selectors: [["app-story-viewer"]], standalone: false, decls: 12, vars: 4, consts: [[1, "story-viewer-container"], [1, "viewer-header"], ["mat-icon-button", "", 3, "click"], [1, "actions"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["class", "viewer-content", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "viewer-content"], [1, "date-badge"], [1, "story-meta"], ["class", "meta-item", 4, "ngIf"], [1, "story-card"], [1, "story-content"], ["class", "additional-info", 4, "ngIf"], [1, "meta-item"], [1, "additional-info"], ["class", "info-section", 4, "ngIf"], [1, "info-section"], [1, "loading-container"]], template: function StoryViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function StoryViewerComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "\uC6D0\uC815 \uAE30\uB85D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275template(8, StoryViewerComponent_button_8_Template, 3, 0, "button", 4)(9, StoryViewerComponent_button_9_Template, 3, 0, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, StoryViewerComponent_div_10_Template, 14, 6, "div", 5)(11, StoryViewerComponent_div_11_Template, 4, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.entry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.entry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.entry);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [NgIf, MatIconButton, MatIcon, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatProgressSpinner], styles: ["\n\n.story-viewer-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #e0e0e0;\n}\n.viewer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.viewer-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.viewer-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.date-badge[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #667eea;\n  margin-bottom: 20px;\n  padding: 15px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  text-align: center;\n}\n.story-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 25px;\n  flex-wrap: wrap;\n}\n.story-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n  background: white;\n  border: 2px solid #667eea;\n  border-radius: 20px;\n  color: #667eea;\n  font-weight: 500;\n}\n.story-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.story-card[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  border-radius: 16px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.story-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 20px;\n  border-radius: 16px 16px 0 0;\n  margin: -16px -16px 20px -16px;\n}\n.story-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]     mat-card-title {\n  color: white;\n  margin: 0;\n  font-size: 1.3rem;\n}\n.story-card[_ngcontent-%COMP%]   .story-content[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: #333;\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n.additional-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.additional-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.additional-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.additional-info[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.6;\n  color: #555;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 100px 20px;\n  gap: 20px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .story-viewer-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .viewer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .story-card[_ngcontent-%COMP%]   .story-content[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=story-viewer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoryViewerComponent, [{
    type: Component,
    args: [{ selector: "app-story-viewer", standalone: false, template: '<div class="story-viewer-container">\n  <div class="viewer-header">\n    <button mat-icon-button (click)="goBack()">\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    <h2>\uC6D0\uC815 \uAE30\uB85D</h2>\n    <div class="actions">\n      <button mat-icon-button (click)="editEntry()" *ngIf="entry">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)="deleteEntry()" *ngIf="entry">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class="viewer-content" *ngIf="!isLoading && entry">\n    <div class="date-badge">\n      \u{1F4C5} {{ formatDate(entry.entryDate) }}\n    </div>\n\n    <div class="story-meta">\n      <div class="meta-item" *ngIf="entry.emotion">\n        <mat-icon>sentiment_satisfied</mat-icon>\n        <span>{{ entry.emotion }}</span>\n      </div>\n      <div class="meta-item" *ngIf="entry.event">\n        <mat-icon>event</mat-icon>\n        <span>{{ entry.event }}</span>\n      </div>\n    </div>\n\n    <mat-card class="story-card">\n      <mat-card-header>\n        <mat-card-title>{{ entry.generationInfo }}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <p class="story-content">{{ entry.content }}</p>\n      </mat-card-content>\n    </mat-card>\n\n    <div class="additional-info" *ngIf="entry.decision || entry.reflection">\n      <div class="info-section" *ngIf="entry.decision">\n        <h3>\u{1F4A1} \uACB0\uC815</h3>\n        <p>{{ entry.decision }}</p>\n      </div>\n      <div class="info-section" *ngIf="entry.reflection">\n        <h3>\u{1F914} \uC131\uCC30</h3>\n        <p>{{ entry.reflection }}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class="loading-container" *ngIf="isLoading">\n    <mat-spinner></mat-spinner>\n    <p>\uC77C\uAE30\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...</p>\n  </div>\n</div>\n', styles: ["/* src/app/modules/expedition/pages/story-viewer/story-viewer.component.scss */\n.story-viewer-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n.viewer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #e0e0e0;\n}\n.viewer-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.viewer-header .actions {\n  display: flex;\n  gap: 5px;\n}\n.viewer-content {\n  animation: fadeIn 0.5s ease-in;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.date-badge {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #667eea;\n  margin-bottom: 20px;\n  padding: 15px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  text-align: center;\n}\n.story-meta {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 25px;\n  flex-wrap: wrap;\n}\n.story-meta .meta-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n  background: white;\n  border: 2px solid #667eea;\n  border-radius: 20px;\n  color: #667eea;\n  font-weight: 500;\n}\n.story-meta .meta-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.story-card {\n  margin-bottom: 30px;\n  border-radius: 16px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.story-card mat-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 20px;\n  border-radius: 16px 16px 0 0;\n  margin: -16px -16px 20px -16px;\n}\n.story-card mat-card-header ::ng-deep mat-card-title {\n  color: white;\n  margin: 0;\n  font-size: 1.3rem;\n}\n.story-card .story-content {\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: #333;\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n.additional-info {\n  display: grid;\n  gap: 20px;\n}\n.additional-info .info-section {\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.additional-info .info-section h3 {\n  margin: 0 0 10px 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.additional-info .info-section p {\n  margin: 0;\n  line-height: 1.6;\n  color: #555;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 100px 20px;\n  gap: 20px;\n}\n.loading-container p {\n  color: #666;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .story-viewer-container {\n    padding: 15px;\n  }\n  .viewer-header h2 {\n    font-size: 1.2rem;\n  }\n  .story-card .story-content {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=story-viewer.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ExpeditionApiService }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoryViewerComponent, { className: "StoryViewerComponent", filePath: "src/app/modules/expedition/pages/story-viewer/story-viewer.component.ts", lineNumber: 13 });
})();

// src/app/modules/expedition/pages/story-maker/story-maker.component.ts
var _c03 = ["chatContainer"];
var _c13 = ["chatInput"];
function StoryMakerComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " \u{1F916} ");
    \u0275\u0275elementEnd();
  }
}
function StoryMakerComponent_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " \u{1F464} ");
    \u0275\u0275elementEnd();
  }
}
function StoryMakerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275template(2, StoryMakerComponent_div_11_div_2_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StoryMakerComponent_div_11_div_5_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    \u0275\u0275classProp("question", message_r1.type === "question")("answer", message_r1.type === "answer");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", message_r1.type === "question");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", message_r1.content, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r1.type === "answer");
  }
}
function StoryMakerComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-form-field", 16)(2, "input", 17, 0);
    \u0275\u0275twoWayListener("ngModelChange", function StoryMakerComponent_div_12_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.userInput, $event) || (ctx_r2.userInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function StoryMakerComponent_div_12_Template_input_keyup_enter_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function StoryMakerComponent_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.userInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.userInput.trim());
  }
}
function StoryMakerComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\uC774\uC57C\uAE30\uB97C \uB9CC\uB4E4\uACE0 \uC788\uC2B5\uB2C8\uB2E4...");
    \u0275\u0275elementEnd()();
  }
}
var StoryMakerComponent = class _StoryMakerComponent {
  route;
  router;
  apiService;
  membershipService;
  chatContainer;
  chatInput;
  dateStr = "";
  userInput = "";
  isProcessing = false;
  // 챗봇 대화 변수
  variables = {};
  currentStep = 0;
  chatMessages = [];
  questions = [
    { key: "emotion", text: "\uC624\uB298\uC758 \uD558\uB8E8\uB294 \uC5B4\uB5A0\uC168\uB098\uC694? \uAC00\uC7A5 \uBA3C\uC800 \uB5A0\uC624\uB974\uB294 \uAC10\uC815\uC744 \uC54C\uB824\uC8FC\uC138\uC694." },
    { key: "event", text: "\uC624\uB298 \uAC00\uC7A5 \uAE30\uC5B5\uC5D0 \uB0A8\uB294 \uC77C\uC740 \uBB34\uC5C7\uC774\uC5C8\uB098\uC694?" },
    { key: "decision", text: "\uC624\uB298 \uB0B4\uB9B0 \uC911\uC694\uD55C \uACB0\uC815\uC774\uB098 \uC120\uD0DD\uC774 \uC788\uB2E4\uBA74 \uC54C\uB824\uC8FC\uC138\uC694." },
    { key: "reflection", text: "\uC624\uB298\uC744 \uB3CC\uC544\uBCF4\uBA70 \uC5B4\uB5A4 \uC0DD\uAC01\uC774 \uB4DC\uC2DC\uB098\uC694?" }
  ];
  constructor(route, router, apiService, membershipService) {
    this.route = route;
    this.router = router;
    this.apiService = apiService;
    this.membershipService = membershipService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dateStr = params["dateStr"];
    });
    if (!this.membershipService.canCreateEntry()) {
      alert("\uC77C\uAE30 \uC791\uC131 \uAC00\uB2A5 \uD69F\uC218\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4.");
      this.router.navigate(["/expedition/calendar"]);
      return;
    }
    this.showQuestion();
  }
  showQuestion() {
    if (this.currentStep >= this.questions.length) {
      this.generateStory();
      return;
    }
    const question = this.questions[this.currentStep];
    setTimeout(() => {
      this.chatMessages.push({
        type: "question",
        content: question.text
      });
      this.scrollToBottom();
    }, 500);
  }
  onSubmit() {
    if (!this.userInput.trim() || this.isProcessing)
      return;
    const answer = this.userInput.trim();
    this.chatMessages.push({
      type: "answer",
      content: answer
    });
    const currentQuestion = this.questions[this.currentStep];
    this.variables[currentQuestion.key] = answer;
    this.userInput = "";
    this.currentStep++;
    this.scrollToBottom();
    setTimeout(() => {
      this.showQuestion();
    }, 800);
  }
  generateStory() {
    this.isProcessing = true;
    this.chatMessages.push({
      type: "question",
      content: "\uBA4B\uC9C4 \uC774\uC57C\uAE30\uB97C \uB9CC\uB4E4\uACE0 \uC788\uC5B4\uC694... \u2728"
    });
    this.scrollToBottom();
    setTimeout(() => {
      const newEntry = {
        entryDate: this.dateStr,
        generationInfo: `${this.formatDate(this.dateStr)}\uC758 \uC6D0\uC815 \uAE30\uB85D`,
        content: this.createStoryContent(),
        emotion: this.variables["emotion"],
        event: this.variables["event"],
        decision: this.variables["decision"],
        reflection: this.variables["reflection"],
        createdAt: /* @__PURE__ */ new Date()
      };
      this.apiService.createEntry(newEntry).subscribe({
        next: () => {
          this.membershipService.incrementEntryCount();
          this.chatMessages.push({
            type: "question",
            content: "\u2705 \uC77C\uAE30\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uCE98\uB9B0\uB354\uC5D0\uC11C \uD655\uC778\uD574\uBCF4\uC138\uC694."
          });
          setTimeout(() => {
            this.router.navigate(["/expedition/story", this.dateStr]);
          }, 2e3);
        },
        error: (err) => {
          alert(err.message || "\uC77C\uAE30 \uC800\uC7A5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
          this.isProcessing = false;
        }
      });
    }, 2e3);
  }
  createStoryContent() {
    const { emotion, event, decision, reflection } = this.variables;
    return `\uC624\uB298\uC740 ${emotion}\uC758 \uAC10\uC815\uC73C\uB85C \uAC00\uB4DD\uD55C \uD558\uB8E8\uC600\uB2E4. ${event}\uB77C\uB294 \uC77C\uC774 \uC788\uC5C8\uACE0, \uADF8 \uACFC\uC815\uC5D0\uC11C ${decision}\uB77C\uB294 \uACB0\uC815\uC744 \uB0B4\uB838\uB2E4. \uD558\uB8E8\uB97C \uB9C8\uBB34\uB9AC\uD558\uBA70 ${reflection}\uB77C\uB294 \uC0DD\uAC01\uC774 \uB4E4\uC5C8\uB2E4. \uC774 \uBAA8\uB4E0 \uC21C\uAC04\uB4E4\uC774 \uBAA8\uC5EC \uC624\uB298\uC774\uB77C\uB294 \uD2B9\uBCC4\uD55C \uD558\uB8E8\uB97C \uB9CC\uB4E4\uC5C8\uB2E4.`;
  }
  formatDate(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}\uC6D4 ${day}\uC77C`;
  }
  scrollToBottom() {
    setTimeout(() => {
      const chatArea = document.querySelector(".chat-messages");
      if (chatArea) {
        chatArea.scrollTop = chatArea.scrollHeight;
      }
    }, 100);
  }
  goBack() {
    return __async(this, null, function* () {
      const confirmed = yield confirmAsync("\uC791\uC131 \uC911\uC778 \uB0B4\uC6A9\uC774 \uC0AC\uB77C\uC9D1\uB2C8\uB2E4. \uC815\uB9D0 \uB098\uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?");
      if (confirmed) {
        this.router.navigate(["/expedition/diary/calendar"]);
      }
    });
  }
  static \u0275fac = function StoryMakerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoryMakerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ExpeditionApiService), \u0275\u0275directiveInject(ExpeditionMembershipService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoryMakerComponent, selectors: [["app-story-maker"]], viewQuery: function StoryMakerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5, ViewContainerRef);
      \u0275\u0275viewQuery(_c13, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatInput = _t.first);
    }
  }, standalone: false, decls: 14, vars: 4, consts: [["chatInput", ""], [1, "story-maker-container"], [1, "maker-header"], ["mat-icon-button", "", 3, "click"], [1, "date-info"], [1, "chat-area"], [1, "chat-messages"], ["class", "message-wrapper", 3, "question", "answer", 4, "ngFor", "ngForOf"], ["class", "chat-input-area", 4, "ngIf"], ["class", "processing-indicator", 4, "ngIf"], [1, "message-wrapper"], [1, "message-bubble"], ["class", "message-icon", 4, "ngIf"], [1, "message-content"], [1, "message-icon"], [1, "chat-input-area"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "placeholder", "\uB2F5\uBCC0\uC744 \uC785\uB825\uD558\uC138\uC694...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-fab", "", "color", "primary", 3, "click", "disabled"], [1, "processing-indicator"], ["diameter", "40"]], template: function StoryMakerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function StoryMakerComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "\uC0C8\uB85C\uC6B4 \uC6D0\uC815 \uAE30\uB85D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275template(11, StoryMakerComponent_div_11_Template, 6, 7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, StoryMakerComponent_div_12_Template, 7, 2, "div", 8)(13, StoryMakerComponent_div_13_Template, 4, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formatDate(ctx.dateStr));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.chatMessages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isProcessing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProcessing);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatIconButton, MatFabButton, MatIcon, MatFormField, MatInput, MatProgressSpinner], styles: ["\n\n.story-maker-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 180px);\n  max-width: 800px;\n  margin: 0 auto;\n}\n.maker-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 2px solid #e0e0e0;\n  background: white;\n}\n.maker-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #333;\n  flex: 1;\n  text-align: center;\n}\n.maker-header[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #667eea;\n  font-weight: 600;\n  min-width: 80px;\n  text-align: right;\n}\n.chat-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8f9fa;\n  overflow: hidden;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 4px;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.message-wrapper.question[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message-wrapper.question[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #667eea;\n}\n.message-wrapper.answer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.message-wrapper.answer[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.message-bubble[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  max-width: 70%;\n  padding: 15px 20px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.message-bubble[_ngcontent-%COMP%]   .message-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.6;\n  word-break: keep-all;\n}\n.chat-input-area[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 20px;\n  background: white;\n  border-top: 2px solid #e0e0e0;\n  align-items: flex-end;\n}\n.chat-input-area[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.chat-input-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.processing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px;\n  gap: 15px;\n  background: white;\n  border-top: 2px solid #e0e0e0;\n}\n.processing-indicator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #667eea;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .story-maker-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 120px);\n  }\n  .maker-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .maker-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .message-bubble[_ngcontent-%COMP%] {\n    max-width: 85%;\n    padding: 12px 15px;\n  }\n  .chat-input-area[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=story-maker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoryMakerComponent, [{
    type: Component,
    args: [{ selector: "app-story-maker", standalone: false, template: `<div class="story-maker-container">
  <div class="maker-header">
    <button mat-icon-button (click)="goBack()">
      <mat-icon>arrow_back</mat-icon>
    </button>
    <h2>\uC0C8\uB85C\uC6B4 \uC6D0\uC815 \uAE30\uB85D</h2>
    <div class="date-info">{{ formatDate(dateStr) }}</div>
  </div>

  <div class="chat-area">
    <div class="chat-messages">
      <div 
        *ngFor="let message of chatMessages; let i = index"
        class="message-wrapper"
        [class.question]="message.type === 'question'"
        [class.answer]="message.type === 'answer'">
        
        <div class="message-bubble">
          <div class="message-icon" *ngIf="message.type === 'question'">
            \u{1F916}
          </div>
          <div class="message-content">
            {{ message.content }}
          </div>
          <div class="message-icon" *ngIf="message.type === 'answer'">
            \u{1F464}
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input-area" *ngIf="!isProcessing">
      <mat-form-field appearance="outline" class="full-width">
        <input 
          matInput 
          [(ngModel)]="userInput"
          placeholder="\uB2F5\uBCC0\uC744 \uC785\uB825\uD558\uC138\uC694..."
          (keyup.enter)="onSubmit()"
          #chatInput>
      </mat-form-field>
      <button 
        mat-fab 
        color="primary"
        (click)="onSubmit()"
        [disabled]="!userInput.trim()">
        <mat-icon>send</mat-icon>
      </button>
    </div>

    <div class="processing-indicator" *ngIf="isProcessing">
      <mat-spinner diameter="40"></mat-spinner>
      <p>\uC774\uC57C\uAE30\uB97C \uB9CC\uB4E4\uACE0 \uC788\uC2B5\uB2C8\uB2E4...</p>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/expedition/pages/story-maker/story-maker.component.scss */\n.story-maker-container {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 180px);\n  max-width: 800px;\n  margin: 0 auto;\n}\n.maker-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 2px solid #e0e0e0;\n  background: white;\n}\n.maker-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #333;\n  flex: 1;\n  text-align: center;\n}\n.maker-header .date-info {\n  font-size: 0.9rem;\n  color: #667eea;\n  font-weight: 600;\n  min-width: 80px;\n  text-align: right;\n}\n.chat-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #f8f9fa;\n  overflow: hidden;\n}\n.chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.chat-messages::-webkit-scrollbar {\n  width: 8px;\n}\n.chat-messages::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 4px;\n}\n.message-wrapper {\n  display: flex;\n  animation: slideIn 0.3s ease-out;\n}\n.message-wrapper.question {\n  justify-content: flex-start;\n}\n.message-wrapper.question .message-bubble {\n  background: white;\n  border: 2px solid #667eea;\n}\n.message-wrapper.answer {\n  justify-content: flex-end;\n}\n.message-wrapper.answer .message-bubble {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.message-bubble {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  max-width: 70%;\n  padding: 15px 20px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.message-bubble .message-icon {\n  font-size: 24px;\n  line-height: 1;\n}\n.message-bubble .message-content {\n  flex: 1;\n  line-height: 1.6;\n  word-break: keep-all;\n}\n.chat-input-area {\n  display: flex;\n  gap: 10px;\n  padding: 20px;\n  background: white;\n  border-top: 2px solid #e0e0e0;\n  align-items: flex-end;\n}\n.chat-input-area .full-width {\n  flex: 1;\n}\n.chat-input-area button {\n  margin-bottom: 8px;\n}\n.processing-indicator {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px;\n  gap: 15px;\n  background: white;\n  border-top: 2px solid #e0e0e0;\n}\n.processing-indicator p {\n  margin: 0;\n  color: #667eea;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .story-maker-container {\n    height: calc(100vh - 120px);\n  }\n  .maker-header {\n    padding: 15px;\n  }\n  .maker-header h2 {\n    font-size: 1.1rem;\n  }\n  .message-bubble {\n    max-width: 85%;\n    padding: 12px 15px;\n  }\n  .chat-input-area {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=story-maker.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ExpeditionApiService }, { type: ExpeditionMembershipService }], { chatContainer: [{
    type: ViewChild,
    args: ["chatContainer", { read: ViewContainerRef }]
  }], chatInput: [{
    type: ViewChild,
    args: ["chatInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoryMakerComponent, { className: "StoryMakerComponent", filePath: "src/app/modules/expedition/pages/story-maker/story-maker.component.ts", lineNumber: 14 });
})();

// src/app/modules/expedition/components/expedition-login/expedition-login.component.ts
var _c04 = ["loginComponent"];
var ExpeditionLoginComponent = class _ExpeditionLoginComponent {
  authService;
  router;
  debugLogger;
  loginComponent;
  loginConfig = {
    title: "\u{1F5FA}\uFE0F \uC6D0\uC815\uB300",
    subtitle: "\uB2F9\uC2E0\uC758 \uC5EC\uC815\uC744 \uAE30\uB85D\uD558\uACE0 \uACF5\uC720\uD558\uC138\uC694",
    moduleName: "expedition",
    showSocialLogin: false,
    showRegisterLink: false,
    backgroundAnimation: ["\u{1F5FA}\uFE0F", "\u26FA", "\u{1F9ED}", "\u{1F392}", "\u{1F3D4}\uFE0F", "\u{1F304}", "\u26F0\uFE0F", "\u{1F30D}"],
    themeColors: {
      primary: "#667eea",
      // 보라-파랑 그라데이션
      secondary: "#764ba2",
      // 진한 보라
      accent: "#8b5cf6"
      // 밝은 보라
    }
  };
  constructor(authService, router, debugLogger) {
    this.authService = authService;
    this.router = router;
    this.debugLogger = debugLogger;
  }
  ngOnInit() {
    this.debugLogger.info("ExpeditionLogin", "ngOnInit \uD638\uCD9C\uB428");
    this.debugLogger.info("ExpeditionLogin", `isLoggedIn: ${this.authService.isLoggedIn()}`);
    if (this.authService.isLoggedIn()) {
      this.debugLogger.info("ExpeditionLogin", "\uC774\uBBF8 \uB85C\uADF8\uC778\uB428 - /expedition/apps\uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8");
      this.router.navigate(["/expedition/apps"]);
    }
  }
  /**
   * 로그인 처리 - 통합 로그인 컴포넌트에서 호출
   */
  onLogin(credentials) {
    this.debugLogger.info("ExpeditionLogin", `\uB85C\uADF8\uC778 \uC2DC\uB3C4: ${credentials.username}`);
    const success = this.authService.login(credentials.username, credentials.password);
    this.debugLogger.info("ExpeditionLogin", `\uB85C\uADF8\uC778 \uACB0\uACFC: ${success}`);
    if (success) {
      this.debugLogger.success("ExpeditionLogin", "\uB85C\uADF8\uC778 \uC131\uACF5! /expedition/apps\uB85C \uC774\uB3D9");
      setTimeout(() => {
        this.router.navigate(["/expedition/apps"]).then((result) => {
          this.debugLogger.info("ExpeditionLogin", `navigate \uACB0\uACFC: ${result}`);
        }).catch((err) => {
          this.debugLogger.error("ExpeditionLogin", `navigate \uC2E4\uD328: ${err}`);
        });
      }, 100);
    } else {
      this.debugLogger.error("ExpeditionLogin", "\uB85C\uADF8\uC778 \uC2E4\uD328 - \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 \uD45C\uC2DC");
      if (this.loginComponent) {
        this.loginComponent.setError("\uC0AC\uC6A9\uC790 \uC774\uB984 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
      }
    }
  }
  static \u0275fac = function ExpeditionLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionLoginComponent)(\u0275\u0275directiveInject(ExpeditionAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DebugLoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpeditionLoginComponent, selectors: [["app-expedition-login"]], viewQuery: function ExpeditionLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function ExpeditionLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function ExpeditionLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-expedition-login",
      standalone: false,
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>'
    }]
  }], () => [{ type: ExpeditionAuthService }, { type: Router }, { type: DebugLoggerService }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpeditionLoginComponent, { className: "ExpeditionLoginComponent", filePath: "src/app/modules/expedition/components/expedition-login/expedition-login.component.ts", lineNumber: 12 });
})();

// src/app/modules/expedition/guards/expedition-auth.guard.ts
var ExpeditionAuthGuard = class _ExpeditionAuthGuard {
  authService;
  router;
  debugLogger;
  constructor(authService, router, debugLogger) {
    this.authService = authService;
    this.router = router;
    this.debugLogger = debugLogger;
  }
  canActivate(route, state) {
    this.debugLogger.info("ExpeditionAuthGuard", `canActivate \uD638\uCD9C\uB428 - \uACBD\uB85C: ${state.url}`);
    const isLoggedIn = this.authService.isLoggedIn();
    this.debugLogger.info("ExpeditionAuthGuard", `isLoggedIn: ${isLoggedIn}`);
    if (isLoggedIn) {
      this.debugLogger.success("ExpeditionAuthGuard", "\u2705 \uC778\uC99D \uC131\uACF5 - \uC811\uADFC \uD5C8\uC6A9");
      return true;
    }
    this.debugLogger.error("ExpeditionAuthGuard", "\u274C \uC778\uC99D \uC2E4\uD328 - /expedition/login\uC73C\uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8");
    this.router.navigate(["/expedition/login"]);
    return false;
  }
  static \u0275fac = function ExpeditionAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionAuthGuard)(\u0275\u0275inject(ExpeditionAuthService), \u0275\u0275inject(Router), \u0275\u0275inject(DebugLoggerService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpeditionAuthGuard, factory: _ExpeditionAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ExpeditionAuthService }, { type: Router }, { type: DebugLoggerService }], null);
})();

// src/app/modules/expedition/guards/expedition-route-error.guard.ts
var ExpeditionRouteErrorGuard = class _ExpeditionRouteErrorGuard {
  router;
  snackBar;
  constructor(router, snackBar) {
    this.router = router;
    this.snackBar = snackBar;
  }
  canActivate(route, state) {
    try {
      const requiredParams = route.data?.["requiredParams"];
      if (requiredParams) {
        for (const param of requiredParams) {
          if (!route.params[param]) {
            console.warn("[ExpeditionRouteErrorGuard] \uD544\uC218 \uD30C\uB77C\uBBF8\uD130 \uB204\uB77D:", param);
            this.showErrorAndRedirect(`\uD544\uC218 \uC815\uBCF4\uAC00 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4: ${param}`);
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      console.warn("[ExpeditionRouteErrorGuard] \uB77C\uC6B0\uD2B8 \uD65C\uC131\uD654 \uC5D0\uB7EC:", error);
      this.showErrorAndRedirect("\uD398\uC774\uC9C0\uB97C \uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      return false;
    }
  }
  showErrorAndRedirect(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 4e3,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["error-snackbar"]
    });
    setTimeout(() => {
      this.router.navigate(["/expedition/apps"]);
    }, 500);
  }
  static \u0275fac = function ExpeditionRouteErrorGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionRouteErrorGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(MatSnackBar));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpeditionRouteErrorGuard, factory: _ExpeditionRouteErrorGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionRouteErrorGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: MatSnackBar }], null);
})();

// src/app/modules/expedition/expedition-routing.module.ts
var routes = [
  {
    path: "login",
    component: ExpeditionLoginComponent
  },
  {
    path: "",
    component: ExpeditionComponent,
    canActivate: [ExpeditionAuthGuard],
    children: [
      {
        path: "apps",
        component: AppsLauncherComponent
      },
      {
        path: "diary",
        canActivate: [ExpeditionRouteErrorGuard],
        children: [
          {
            path: "calendar",
            component: CalendarComponent
          },
          {
            path: "init",
            component: InitComponent
          },
          {
            path: "story/:date",
            component: StoryViewerComponent,
            canActivate: [ExpeditionRouteErrorGuard],
            data: { requiredParams: ["date"] }
          },
          {
            path: "maker/:dateStr",
            component: StoryMakerComponent,
            canActivate: [ExpeditionRouteErrorGuard],
            data: { requiredParams: ["dateStr"] }
          },
          {
            path: "",
            redirectTo: "calendar",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "chatflow",
        component: ChatflowComponent
      },
      {
        path: "",
        redirectTo: "apps",
        pathMatch: "full"
      }
    ]
  }
];
var ExpeditionRoutingModule = class _ExpeditionRoutingModule {
  static \u0275fac = function ExpeditionRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExpeditionRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/expedition/modules/global/pipes/safe-html.pipe.ts
var SafeHtmlPipe = class _SafeHtmlPipe {
  sanitizer = inject(DomSanitizer);
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeHtml", type: _SafeHtmlPipe, pure: true, standalone: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: false
    }]
  }], null, null);
})();

// src/app/modules/expedition/modules/global/components/basic-dialog/basic-dialog.component.ts
function BasicDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function BasicDialogComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYesClick());
    });
    \u0275\u0275text(1, "\uB124");
    \u0275\u0275elementEnd();
  }
}
var BasicDialogComponent = class _BasicDialogComponent {
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  onYesClick() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function BasicDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasicDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicDialogComponent, selectors: [["app-basic-dialog"]], standalone: false, decls: 8, vars: 3, consts: [["mat-dialog-title", ""], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", ""], ["mat-button", "", 3, "click"]], template: function BasicDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-dialog-actions")(5, "button", 1);
      \u0275\u0275text(6, "\uB2EB\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, BasicDialogComponent_Conditional_7_Template, 2, 0, "button", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.content, "\n");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.data.isActive ? 7 : -1);
    }
  }, dependencies: [MatButton, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicDialogComponent, [{
    type: Component,
    args: [{ selector: "app-basic-dialog", standalone: false, template: '<h1 mat-dialog-title>{{ data.title }}</h1>\n<mat-dialog-content>\n  {{ data.content }}\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>\uB2EB\uAE30</button>\n  @if (data.isActive) {\n    <button mat-button (click)="onYesClick()">\uB124</button>\n  }\n</mat-dialog-actions>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicDialogComponent, { className: "BasicDialogComponent", filePath: "src/app/modules/expedition/modules/global/components/basic-dialog/basic-dialog.component.ts", lineNumber: 16 });
})();

// src/app/modules/expedition/modules/global/components/input-dialog/input-dialog.component.ts
var InputDialogComponent = class _InputDialogComponent {
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  input = model(this.data.input, ...ngDevMode ? [{ debugName: "input" }] : []);
  onYesClick() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function InputDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputDialogComponent, selectors: [["app-input-dialog"]], inputs: { input: [1, "input"] }, outputs: { input: "inputChange" }, standalone: false, decls: 11, vars: 4, consts: [["mat-dialog-title", ""], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function InputDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content");
      \u0275\u0275text(3);
      \u0275\u0275elementStart(4, "mat-form-field", 1)(5, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function InputDialogComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.input, $event) || (ctx.input = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "mat-dialog-actions")(7, "button", 3);
      \u0275\u0275text(8, "\uB2EB\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275text(10, "\uC800\uC7A5");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.content, " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.input);
      \u0275\u0275advance(4);
      \u0275\u0275property("mat-dialog-close", ctx.input());
    }
  }, dependencies: [MatButton, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputDialogComponent, [{
    type: Component,
    args: [{ selector: "app-input-dialog", standalone: false, template: '<h1 mat-dialog-title>{{ data.title }}</h1>\n<mat-dialog-content>\n  {{ data.content }}\n\n  <mat-form-field appearance="outline">\n    <input matInput [(ngModel)]="input" />\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>\uB2EB\uAE30</button>\n  <button mat-button [mat-dialog-close]="input()" cdkFocusInitial>\uC800\uC7A5</button>\n</mat-dialog-actions>\n' }]
  }], null, { input: [{ type: Input, args: [{ isSignal: true, alias: "input", required: false }] }, { type: Output, args: ["inputChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputDialogComponent, { className: "InputDialogComponent", filePath: "src/app/modules/expedition/modules/global/components/input-dialog/input-dialog.component.ts", lineNumber: 16 });
})();

// src/app/modules/expedition/modules/global/global.module.ts
var GlobalModule = class _GlobalModule {
  static \u0275fac = function GlobalModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GlobalModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalModule, [{
    type: NgModule,
    args: [{
      declarations: [
        SafeHtmlPipe,
        BasicDialogComponent,
        InputDialogComponent
      ],
      imports: [
        CommonModule,
        MatSnackBarModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
      ],
      exports: [
        SafeHtmlPipe,
        BasicDialogComponent,
        InputDialogComponent
      ]
    }]
  }], null, null);
})();

// src/app/modules/expedition/modules/chatbot/chatbot.module.ts
var ChatbotModule = class _ChatbotModule {
  static \u0275fac = function ChatbotModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatbotModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    GlobalModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ChatbotComponent,
        ChatQuestionComponent,
        ChatAnswerComponent,
        ChatButtonsAnswerComponent
      ],
      imports: [
        CommonModule,
        GlobalModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule
      ],
      exports: [
        ChatbotComponent
      ]
    }]
  }], null, null);
})();

// src/app/modules/expedition/modules/chatflow-edit/components/node-template/node-template.component.ts
var _c05 = ["*"];
var _c14 = (a0, a1) => ({ "top.px": a0, "left.px": a1 });
function NodeTemplateComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mouseup", function NodeTemplateComponent_Conditional_1_Template_div_mouseup_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nodeAbstract.onInputDotMouseUp($event));
    })("mouseenter", function NodeTemplateComponent_Conditional_1_Template_div_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nodeAbstract.onInputDotMouseEnter($event));
    })("mouseleave", function NodeTemplateComponent_Conditional_1_Template_div_mouseleave_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nodeAbstract.onInputDotMouseLeave($event));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3, "IN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5, "\uB4DC\uB86D\uC73C\uB85C \uC5F0\uACB0");
    \u0275\u0275elementEnd()();
  }
}
function NodeTemplateComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("mousedown", function NodeTemplateComponent_Conditional_2_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nodeAbstract.onOutputDotMouseDown($event));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3, "OUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5, "\uB4DC\uB798\uADF8\uB85C \uC5F0\uACB0");
    \u0275\u0275elementEnd()();
  }
}
function NodeTemplateComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "play_circle");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "stop_circle");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "chat");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "mic");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "help");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "smart_button");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "call_split");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "swap_horiz");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "widgets");
    \u0275\u0275elementEnd();
  }
}
function NodeTemplateComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.nodeAbstract.name);
  }
}
function NodeTemplateComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function NodeTemplateComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nodeAbstract.onEditClick());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function NodeTemplateComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "touch_app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "OUT \uB3C4\uD2B8\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uB2E4\uC74C \uB178\uB4DC\uC640 \uC5F0\uACB0");
    \u0275\u0275elementEnd()();
  }
}
function NodeTemplateComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function NodeTemplateComponent_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNodeDeleteClick());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\uC0AD\uC81C");
    \u0275\u0275elementEnd()();
  }
}
var NodeTemplateComponent = class _NodeTemplateComponent {
  trigger;
  nodeAbstract;
  overlay = inject(Overlay);
  debugLogger = inject(DebugLoggerService);
  onNodeDeleteClick() {
    if (!this.nodeAbstract.myRef) {
      console.warn("ref does not exist");
      return;
    }
    this.nodeAbstract.myRef.destroy();
  }
  onDisconnectClick() {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0\uB04A\uAE30", `\u2702\uFE0F \uC5F0\uACB0 \uB04A\uAE30 \uC694\uCCAD: ${this.nodeAbstract.type} \uB178\uB4DC (${this.nodeAbstract.id})`);
    const leftConnections = Object.keys(this.nodeAbstract.leftConnectedList);
    if (leftConnections.length > 0) {
      leftConnections.forEach((nodeId) => {
        const connection = this.nodeAbstract.leftConnectedList[nodeId];
        this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0\uB04A\uAE30", `  \u2190 \uC67C\uCABD \uC5F0\uACB0 \uC81C\uAC70: ${nodeId}`);
        connection.line.delete();
      });
    }
    const rightConnections = Object.keys(this.nodeAbstract.rightConnectedList);
    if (rightConnections.length > 0) {
      rightConnections.forEach((nodeId) => {
        const connection = this.nodeAbstract.rightConnectedList[nodeId];
        this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0\uB04A\uAE30", `  \u2192 \uC624\uB978\uCABD \uC5F0\uACB0 \uC81C\uAC70: ${nodeId}`);
        connection.line.delete();
      });
    }
    const totalDisconnected = leftConnections.length + rightConnections.length;
    if (totalDisconnected > 0) {
      this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0\uB04A\uAE30", `\u2705 ${totalDisconnected}\uAC1C \uC5F0\uACB0 \uB04A\uAE40`);
    } else {
      this.debugLogger.warn("\uCC57\uD50C\uB85C\uC6B0-\uC5F0\uACB0\uB04A\uAE30", `\u26A0\uFE0F \uB04A\uC744 \uC5F0\uACB0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4`);
    }
  }
  onConnectorClick(event, type) {
    event.stopPropagation();
    event.preventDefault();
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-UI", `\u{1F5B1}\uFE0F \uCEE4\uB125\uD130 \uD074\uB9AD: ${type === "right" ? "OUT" : "IN"} (${this.nodeAbstract.type} \uB178\uB4DC)`);
    if (type === "right") {
      this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-UI", `\u{1F7E2} OUT \uCEE4\uB125\uD130 \uD074\uB9AD \u2192 \uC5F0\uACB0 \uC2DC\uC791 \uD638\uCD9C`);
      this.nodeAbstract.onLineStartClick();
    } else {
      this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-UI", `\u{1F534} IN \uCEE4\uB125\uD130 \uD074\uB9AD \u2192 \uC5F0\uACB0 \uC885\uB8CC \uD638\uCD9C`);
      this.nodeAbstract.onLineEndClick();
    }
  }
  onContextMenuClick(event) {
    console.log("onContextMenuClick", event);
    event.preventDefault();
    this.trigger.menu.xPosition = "after";
    this.trigger.menu.yPosition = "below";
    const x = event.clientX;
    const y = event.clientY;
    const sub = this.trigger.menuOpened.subscribe(() => {
      const overlayRef = this.trigger._overlayRef;
      if (overlayRef) {
        overlayRef.updatePositionStrategy(this.overlay.position().flexibleConnectedTo({ x, y }).withPositions([
          {
            originX: "start",
            originY: "top",
            overlayX: "start",
            overlayY: "top"
          }
        ]));
      }
      sub.unsubscribe();
    });
    this.trigger.openMenu();
  }
  static \u0275fac = function NodeTemplateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NodeTemplateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NodeTemplateComponent, selectors: [["app-node-template"]], viewQuery: function NodeTemplateComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatMenuTrigger, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
    }
  }, inputs: { nodeAbstract: "nodeAbstract" }, standalone: false, ngContentSelectors: _c05, decls: 31, vars: 19, consts: [["menu", "matMenu"], [1, "node-card", 3, "mousedown", "contextmenu", "ngStyle"], ["title", "\uB4DC\uB86D\uD558\uC5EC \uC5F0\uACB0 \uC644\uB8CC", 1, "connector", "left"], ["title", "\uB4DC\uB798\uADF8\uD558\uC5EC \uC5F0\uACB0 \uC2DC\uC791", 1, "connector", "right"], [1, "node-header"], [1, "node-icon"], [1, "node-title"], [1, "type-badge"], [1, "node-name"], ["mat-icon-button", "", "title", "\uB178\uB4DC \uD3B8\uC9D1", 1, "edit-btn"], [1, "node-body"], [1, "node-hint"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [3, "matMenuTriggerFor"], ["title", "\uB4DC\uB86D\uD558\uC5EC \uC5F0\uACB0 \uC644\uB8CC", 1, "connector", "left", 3, "mouseup", "mouseenter", "mouseleave"], [1, "connector-dot"], [1, "connector-label"], [1, "connector-hint"], ["title", "\uB4DC\uB798\uADF8\uD558\uC5EC \uC5F0\uACB0 \uC2DC\uC791", 1, "connector", "right", 3, "mousedown"], ["mat-icon-button", "", "title", "\uB178\uB4DC \uD3B8\uC9D1", 1, "edit-btn", 3, "click"]], template: function NodeTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("mousedown", function NodeTemplateComponent_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nodeAbstract.onMouseDown($event));
      })("contextmenu", function NodeTemplateComponent_Template_div_contextmenu_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContextMenuClick($event));
      });
      \u0275\u0275conditionalCreate(1, NodeTemplateComponent_Conditional_1_Template, 6, 0, "div", 2);
      \u0275\u0275conditionalCreate(2, NodeTemplateComponent_Conditional_2_Template, 6, 0, "div", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
      \u0275\u0275conditionalCreate(5, NodeTemplateComponent_Conditional_5_Template, 2, 0, "mat-icon")(6, NodeTemplateComponent_Conditional_6_Template, 2, 0, "mat-icon")(7, NodeTemplateComponent_Conditional_7_Template, 2, 0, "mat-icon")(8, NodeTemplateComponent_Conditional_8_Template, 2, 0, "mat-icon")(9, NodeTemplateComponent_Conditional_9_Template, 2, 0, "mat-icon")(10, NodeTemplateComponent_Conditional_10_Template, 2, 0, "mat-icon")(11, NodeTemplateComponent_Conditional_11_Template, 2, 0, "mat-icon")(12, NodeTemplateComponent_Conditional_12_Template, 2, 0, "mat-icon")(13, NodeTemplateComponent_Conditional_13_Template, 2, 0, "mat-icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6)(15, "span", 7);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, NodeTemplateComponent_Conditional_17_Template, 2, 1, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, NodeTemplateComponent_Conditional_18_Template, 3, 0, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10);
      \u0275\u0275projection(20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, NodeTemplateComponent_Conditional_21_Template, 5, 0, "div", 11);
      \u0275\u0275elementStart(22, "mat-menu", null, 0)(24, "button", 12);
      \u0275\u0275listener("click", function NodeTemplateComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDisconnectClick());
      });
      \u0275\u0275elementStart(25, "mat-icon");
      \u0275\u0275text(26, "link_off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "\uC5F0\uACB0 \uB04A\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, NodeTemplateComponent_Conditional_29_Template, 5, 0, "button", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "div", 14);
    }
    if (rf & 2) {
      const menu_r7 = \u0275\u0275reference(23);
      \u0275\u0275classProp("executing", ctx.nodeAbstract.isItExcecuting)("start-node", ctx.nodeAbstract.type === "start")("end-node", ctx.nodeAbstract.type === "end");
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(16, _c14, ctx.nodeAbstract.top, ctx.nodeAbstract.left));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.nodeAbstract.type !== "start" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.nodeAbstract.type !== "end" ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.nodeAbstract.type === "start" ? 5 : ctx.nodeAbstract.type === "end" ? 6 : ctx.nodeAbstract.type === "speak" ? 7 : ctx.nodeAbstract.type === "listen" ? 8 : ctx.nodeAbstract.type === "question" ? 9 : ctx.nodeAbstract.type === "button" ? 10 : ctx.nodeAbstract.type === "split" ? 11 : ctx.nodeAbstract.type === "contextChanger" ? 12 : 13);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.nodeAbstract.type);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.nodeAbstract.name && ctx.nodeAbstract.type !== "start" && ctx.nodeAbstract.type !== "end" ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.nodeAbstract.type !== "start" && ctx.nodeAbstract.type !== "end" ? 18 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.nodeAbstract.type === "start" ? 21 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.nodeAbstract.type !== "start" ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", menu_r7);
    }
  }, dependencies: [NgStyle, MatIconButton, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger], styles: ["\n\n.node-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  min-height: 120px;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);\n  overflow: visible;\n  cursor: move;\n}\n.node-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);\n  border-color: rgba(102, 126, 234, 0.5);\n}\n.node-card.executing[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.2);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(76, 175, 80, 0.5);\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n.node-card.start-node[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.15);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(102, 126, 234, 0.5);\n}\n.node-card.start-node[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #667eea;\n}\n.node-card.start-node[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.3);\n  color: #667eea;\n}\n.node-card.end-node[_ngcontent-%COMP%] {\n  background: rgba(245, 87, 108, 0.15);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(245, 87, 108, 0.5);\n}\n.node-card.end-node[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%] {\n  background: rgba(245, 87, 108, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #f5576c;\n}\n.node-card.end-node[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: rgba(245, 87, 108, 0.3);\n  color: #f5576c;\n}\n.connector[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 200;\n  transition: all 0.2s ease;\n}\n.connector.left[_ngcontent-%COMP%] {\n  left: -30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: crosshair;\n}\n.connector.right[_ngcontent-%COMP%] {\n  right: -30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: grab;\n}\n.connector.right[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.connector[_ngcontent-%COMP%]:hover   .connector-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(118, 75, 162, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 0 24px rgba(118, 75, 162, 0.8), 0 0 0 6px rgba(118, 75, 162, 0.3);\n  border-width: 5px;\n}\n.connector[_ngcontent-%COMP%]:hover   .connector-label[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.connector[_ngcontent-%COMP%]:hover   .connector-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.connector-dot[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: rgba(102, 126, 234, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border: 4px solid rgba(255, 255, 255, 0.95);\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.5), 0 0 0 4px rgba(102, 126, 234, 0.2);\n}\n.connector-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -28px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #667eea;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 4px 10px;\n  border-radius: 6px;\n  opacity: 0;\n  transform: translateY(-5px);\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.connector-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -38px;\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(102, 126, 234, 0.95);\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  padding: 8px 14px;\n  border-radius: 8px;\n  opacity: 0;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);\n  border: 1px solid rgba(102, 126, 234, 0.2);\n  pointer-events: none;\n}\n.start-hint[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  color: white;\n  background: rgba(102, 126, 234, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 4px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.node-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  background: rgba(102, 126, 234, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #667eea;\n  border-radius: 16px 16px 0 0;\n  overflow: visible;\n}\n.node-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.node-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.node-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(102, 126, 234, 0.2);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 5px 12px;\n  border-radius: 6px;\n  width: fit-content;\n  border: 1px solid rgba(102, 126, 234, 0.2);\n}\n.node-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  opacity: 0.9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  min-width: 40px;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  color: #667eea;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n.edit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.node-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #333;\n  font-size: 15px;\n  line-height: 1.7;\n  min-height: 70px;\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-radius: 0 0 16px 16px;\n  overflow: visible;\n}\n.start-node[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%], \n.end-node[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n.node-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px 18px;\n  background: rgba(102, 126, 234, 0.08);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-top: 1px solid rgba(102, 126, 234, 0.1);\n  font-size: 13px;\n  color: #667eea;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease;\n}\n.node-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.start-node[_ngcontent-%COMP%]   .node-hint[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.15);\n  border-top-color: rgba(102, 126, 234, 0.2);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 8px 32px 0 rgba(76, 175, 80, 0.3);\n  }\n  50% {\n    box-shadow: 0 8px 32px 0 rgba(76, 175, 80, 0.5);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n  .mat-mdc-menu-panel {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n  .mat-mdc-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  font-size: 14px;\n}\n  .mat-mdc-menu-item mat-icon {\n  color: #667eea;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n  .mat-mdc-menu-item:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n/*# sourceMappingURL=node-template.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeTemplateComponent, [{
    type: Component,
    args: [{ selector: "app-node-template", standalone: false, template: `<div class="node-card" 
    [class.executing]="nodeAbstract.isItExcecuting"
    [class.start-node]="nodeAbstract.type === 'start'"
    [class.end-node]="nodeAbstract.type === 'end'"
    [ngStyle]="{'top.px': nodeAbstract.top, 'left.px': nodeAbstract.left}"
    (mousedown)="nodeAbstract.onMouseDown($event)" 
    (contextmenu)="onContextMenuClick($event)">
    
    <!-- \uC67C\uCABD \uC785\uB825 \uC5F0\uACB0\uC810 -->
    @if (nodeAbstract.type !== 'start') {
        <div class="connector left" 
             (mouseup)="nodeAbstract.onInputDotMouseUp($event)"
             (mouseenter)="nodeAbstract.onInputDotMouseEnter($event)"
             (mouseleave)="nodeAbstract.onInputDotMouseLeave($event)"
             title="\uB4DC\uB86D\uD558\uC5EC \uC5F0\uACB0 \uC644\uB8CC">
            <div class="connector-dot"></div>
            <div class="connector-label">IN</div>
            <div class="connector-hint">\uB4DC\uB86D\uC73C\uB85C \uC5F0\uACB0</div>
        </div>
    }
    
    <!-- \uC624\uB978\uCABD \uCD9C\uB825 \uC5F0\uACB0\uC810 -->
    @if (nodeAbstract.type !== 'end') {
        <div class="connector right" 
             (mousedown)="nodeAbstract.onOutputDotMouseDown($event)"
             title="\uB4DC\uB798\uADF8\uD558\uC5EC \uC5F0\uACB0 \uC2DC\uC791">
            <div class="connector-dot"></div>
            <div class="connector-label">OUT</div>
            <div class="connector-hint">\uB4DC\uB798\uADF8\uB85C \uC5F0\uACB0</div>
        </div>
    }
    
    <!-- \uB178\uB4DC \uD5E4\uB354 -->
    <div class="node-header">
        <div class="node-icon">
            @if (nodeAbstract.type === 'start') {
                <mat-icon>play_circle</mat-icon>
            } @else if (nodeAbstract.type === 'end') {
                <mat-icon>stop_circle</mat-icon>
            } @else if (nodeAbstract.type === 'speak') {
                <mat-icon>chat</mat-icon>
            } @else if (nodeAbstract.type === 'listen') {
                <mat-icon>mic</mat-icon>
            } @else if (nodeAbstract.type === 'question') {
                <mat-icon>help</mat-icon>
            } @else if (nodeAbstract.type === 'button') {
                <mat-icon>smart_button</mat-icon>
            } @else if (nodeAbstract.type === 'split') {
                <mat-icon>call_split</mat-icon>
            } @else if (nodeAbstract.type === 'contextChanger') {
                <mat-icon>swap_horiz</mat-icon>
            } @else {
                <mat-icon>widgets</mat-icon>
            }
        </div>
        <div class="node-title">
            <span class="type-badge">{{ nodeAbstract.type }}</span>
            @if (nodeAbstract.name && nodeAbstract.type !== 'start' && nodeAbstract.type !== 'end') {
                <span class="node-name">{{ nodeAbstract.name }}</span>
            }
        </div>
        @if (nodeAbstract.type !== 'start' && nodeAbstract.type !== 'end') {
            <button mat-icon-button class="edit-btn" (click)="nodeAbstract.onEditClick()" title="\uB178\uB4DC \uD3B8\uC9D1">
                <mat-icon>edit</mat-icon>
            </button>
        }
    </div>
    
    <!-- \uB178\uB4DC \uB0B4\uC6A9 -->
    <div class="node-body">
        <ng-content></ng-content>
    </div>
    
    <!-- \uC5F0\uACB0 \uC548\uB0B4 -->
    @if (nodeAbstract.type === 'start') {
        <div class="node-hint">
            <mat-icon>touch_app</mat-icon>
            <span>OUT \uB3C4\uD2B8\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uB2E4\uC74C \uB178\uB4DC\uC640 \uC5F0\uACB0</span>
        </div>
    }

    <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="onDisconnectClick()">
            <mat-icon>link_off</mat-icon>
            <span>\uC5F0\uACB0 \uB04A\uAE30</span>
        </button>
        @if (nodeAbstract.type !== 'start') {
            <button mat-menu-item (click)="onNodeDeleteClick()">
                <mat-icon>delete</mat-icon>
                <span>\uC0AD\uC81C</span>
            </button>
        }
    </mat-menu>
</div>

<div [matMenuTriggerFor]="menu"></div>`, styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/node-template/node-template.component.scss */\n.node-card {\n  position: absolute;\n  width: 280px;\n  min-height: 120px;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);\n  overflow: visible;\n  cursor: move;\n}\n.node-card:hover {\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);\n  border-color: rgba(102, 126, 234, 0.5);\n}\n.node-card.executing {\n  background: rgba(76, 175, 80, 0.2);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(76, 175, 80, 0.5);\n  animation: pulse 1.5s ease-in-out infinite;\n}\n.node-card.start-node {\n  background: rgba(102, 126, 234, 0.15);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(102, 126, 234, 0.5);\n}\n.node-card.start-node .node-header {\n  background: rgba(102, 126, 234, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #667eea;\n}\n.node-card.start-node .type-badge {\n  background: rgba(102, 126, 234, 0.3);\n  color: #667eea;\n}\n.node-card.end-node {\n  background: rgba(245, 87, 108, 0.15);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 2px solid rgba(245, 87, 108, 0.5);\n}\n.node-card.end-node .node-header {\n  background: rgba(245, 87, 108, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #f5576c;\n}\n.node-card.end-node .type-badge {\n  background: rgba(245, 87, 108, 0.3);\n  color: #f5576c;\n}\n.connector {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 200;\n  transition: all 0.2s ease;\n}\n.connector.left {\n  left: -30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: crosshair;\n}\n.connector.right {\n  right: -30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: grab;\n}\n.connector.right:active {\n  cursor: grabbing;\n}\n.connector:hover .connector-dot {\n  width: 32px;\n  height: 32px;\n  background: rgba(118, 75, 162, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 0 24px rgba(118, 75, 162, 0.8), 0 0 0 6px rgba(118, 75, 162, 0.3);\n  border-width: 5px;\n}\n.connector:hover .connector-label {\n  opacity: 1;\n  transform: translateY(0);\n}\n.connector:hover .connector-hint {\n  opacity: 1;\n}\n.connector-dot {\n  width: 24px;\n  height: 24px;\n  background: rgba(102, 126, 234, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border: 4px solid rgba(255, 255, 255, 0.95);\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.5), 0 0 0 4px rgba(102, 126, 234, 0.2);\n}\n.connector-label {\n  position: absolute;\n  bottom: -28px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #667eea;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 4px 10px;\n  border-radius: 6px;\n  opacity: 0;\n  transform: translateY(-5px);\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.connector-hint {\n  position: absolute;\n  top: -38px;\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(102, 126, 234, 0.95);\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  padding: 8px 14px;\n  border-radius: 8px;\n  opacity: 0;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);\n  border: 1px solid rgba(102, 126, 234, 0.2);\n  pointer-events: none;\n}\n.start-hint {\n  font-size: 9px;\n  font-weight: 600;\n  color: white;\n  background: rgba(102, 126, 234, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 4px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.node-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  background: rgba(102, 126, 234, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #667eea;\n  border-radius: 16px 16px 0 0;\n  overflow: visible;\n}\n.node-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.node-icon mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.node-title {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.type-badge {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: rgba(102, 126, 234, 0.2);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 5px 12px;\n  border-radius: 6px;\n  width: fit-content;\n  border: 1px solid rgba(102, 126, 234, 0.2);\n}\n.node-name {\n  font-size: 16px;\n  font-weight: 600;\n  opacity: 0.9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.edit-btn {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  min-width: 40px;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  color: #667eea;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.edit-btn:hover {\n  background: rgba(255, 255, 255, 0.6);\n}\n.edit-btn mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.node-body {\n  padding: 20px;\n  color: #333;\n  font-size: 15px;\n  line-height: 1.7;\n  min-height: 70px;\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-radius: 0 0 16px 16px;\n  overflow: visible;\n}\n.start-node .node-body,\n.end-node .node-body {\n  text-align: center;\n  font-weight: 500;\n}\n.node-hint {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px 18px;\n  background: rgba(102, 126, 234, 0.08);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  border-top: 1px solid rgba(102, 126, 234, 0.1);\n  font-size: 13px;\n  color: #667eea;\n  font-weight: 600;\n  animation: fadeInUp 0.5s ease;\n}\n.node-hint mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.start-node .node-hint {\n  background: rgba(102, 126, 234, 0.15);\n  border-top-color: rgba(102, 126, 234, 0.2);\n}\n@keyframes pulse {\n  0%, 100% {\n    box-shadow: 0 8px 32px 0 rgba(76, 175, 80, 0.3);\n  }\n  50% {\n    box-shadow: 0 8px 32px 0 rgba(76, 175, 80, 0.5);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n::ng-deep .mat-mdc-menu-panel {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n::ng-deep .mat-mdc-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  font-size: 14px;\n}\n::ng-deep .mat-mdc-menu-item mat-icon {\n  color: #667eea;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n::ng-deep .mat-mdc-menu-item:hover {\n  background: rgba(102, 126, 234, 0.1);\n}\n/*# sourceMappingURL=node-template.component.css.map */\n"] }]
  }], null, { trigger: [{
    type: ViewChild,
    args: [MatMenuTrigger]
  }], nodeAbstract: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NodeTemplateComponent, { className: "NodeTemplateComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/node-template/node-template.component.ts", lineNumber: 13 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/carousel-node/carousel-node.component.ts
var CarouselNodeComponent = class _CarouselNodeComponent {
  static \u0275fac = function CarouselNodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselNodeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarouselNodeComponent, selectors: [["app-carousel-node"]], standalone: false, decls: 2, vars: 0, template: function CarouselNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "carousel-node works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselNodeComponent, [{
    type: Component,
    args: [{ selector: "app-carousel-node", standalone: false, template: "<p>carousel-node works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarouselNodeComponent, { className: "CarouselNodeComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/nodes/chatbot/carousel-node/carousel-node.component.ts", lineNumber: 9 });
})();

// src/app/modules/expedition/modules/chatflow-edit/components/pages/chatflow/chatflow.component.ts
function ChatflowComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "mat-icon");
    \u0275\u0275text(2, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \uC2E4\uD589 \uC911 ");
    \u0275\u0275elementEnd();
  }
}
function ChatflowComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5)(1, "mat-icon");
    \u0275\u0275text(2, "stop_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \uC911\uC9C0\uB428 ");
    \u0275\u0275elementEnd();
  }
}
var ChatflowComponent2 = class _ChatflowComponent {
  chatflowEditComponent;
  chatbotActionService = inject(ChatbotActionService);
  chatflowDataService = inject(ChatflowDataService);
  snackbar = inject(MatSnackBar);
  chatflowLogicReader = new ChatflowLogicReader(this.chatbotActionService);
  subscription = new Subscription();
  // 시뮬레이터 상태
  isSimulatorRunning = false;
  ngOnInit() {
    this.chatbotActionService.chatStyleSetting = {
      answer: ChatAnswerComponent,
      question: ChatQuestionComponent,
      button: ChatButtonsAnswerComponent
    };
    this.subscription.add(this.chatflowLogicReader.$chatflowEnded.pipe(take(1)).subscribe(() => {
      this.snackbar.open("\u2705 \uCC57\uD50C\uB85C\uC6B0\uAC00 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "", {
        duration: 2e3,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
      this.isSimulatorRunning = false;
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * 시뮬레이터 시작
   * ChatflowEditComponent의 Play 버튼 클릭 시 호출됨
   */
  startSimulator() {
    if (this.isSimulatorRunning) {
      this.snackbar.open("\u26A0\uFE0F \uC2DC\uBBAC\uB808\uC774\uD130\uAC00 \uC774\uBBF8 \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4.", "", {
        duration: 2e3,
        verticalPosition: "top"
      });
      return;
    }
    const chatflowData = this.chatflowDataService.createConnectedData();
    if (!chatflowData || Object.keys(chatflowData).length === 0) {
      this.snackbar.open("\u274C \uCC57\uD50C\uB85C\uC6B0 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB178\uB4DC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694.", "", {
        duration: 3e3,
        verticalPosition: "top"
      });
      return;
    }
    this.chatflowLogicReader.chatflowData = chatflowData;
    this.chatflowLogicReader.start();
    this.isSimulatorRunning = true;
    this.snackbar.open("\u{1F680} \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4!", "", {
      duration: 2e3,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
  /**
   * 시뮬레이터 초기화
   */
  resetSimulator() {
    this.chatflowLogicReader.init();
    this.isSimulatorRunning = false;
    this.snackbar.open("\u{1F504} \uC2DC\uBBAC\uB808\uC774\uD130\uB97C \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.", "", {
      duration: 2e3,
      verticalPosition: "top"
    });
  }
  static \u0275fac = function ChatflowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowComponent, selectors: [["app-chatflow"]], viewQuery: function ChatflowComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ChatflowEditComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatflowEditComponent = _t.first);
    }
  }, standalone: false, decls: 14, vars: 1, consts: [[2, "display", "flex", "width", "100%", "height", "100vh"], [1, "simulator-panel"], [1, "simulator-header"], [1, "simulator-controls"], [1, "status-badge", "running"], [1, "status-badge", "stopped"], ["mat-icon-button", "", "matTooltip", "\uC2DC\uBBAC\uB808\uC774\uD130 \uCD08\uAE30\uD654", 3, "click"], [1, "editor-panel"], [3, "playSimulator"]], template: function ChatflowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "\u{1F4AC} \uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275conditionalCreate(6, ChatflowComponent_Conditional_6_Template, 4, 0, "span", 4)(7, ChatflowComponent_Conditional_7_Template, 4, 0, "span", 5);
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function ChatflowComponent_Template_button_click_8_listener() {
        return ctx.resetSimulator();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "refresh");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(11, "app-chatbot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "app-chatflow-edit", 8);
      \u0275\u0275listener("playSimulator", function ChatflowComponent_Template_app_chatflow_edit_playSimulator_13_listener() {
        return ctx.startSimulator();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isSimulatorRunning ? 6 : 7);
    }
  }, dependencies: [ChatbotComponent, MatIconButton, MatIcon, MatTooltip, ChatflowEditComponent], styles: ["\n\n.simulator-panel[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 100%;\n  border-right: 2px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  background-color: #f5f5f5;\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   .simulator-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   .simulator-controls[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   .simulator-controls[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   .simulator-controls[_ngcontent-%COMP%]   .status-badge.running[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.2);\n  color: #4caf50;\n  border: 1px solid rgba(76, 175, 80, 0.5);\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   .simulator-controls[_ngcontent-%COMP%]   .status-badge.stopped[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.simulator-panel[_ngcontent-%COMP%]   .simulator-header[_ngcontent-%COMP%]   .simulator-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.simulator-panel[_ngcontent-%COMP%]   app-chatbot[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.editor-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=chatflow.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowComponent2, [{
    type: Component,
    args: [{ selector: "app-chatflow", standalone: false, template: '<div style="display: flex; width: 100%; height: 100vh;">\n    <!-- \uC67C\uCABD: \uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130 -->\n    <div class="simulator-panel">\n        <div class="simulator-header">\n            <h3>\u{1F4AC} \uCC57\uBD07 \uC2DC\uBBAC\uB808\uC774\uD130</h3>\n            <div class="simulator-controls">\n                @if (isSimulatorRunning) {\n                    <span class="status-badge running">\n                        <mat-icon>play_circle</mat-icon>\n                        \uC2E4\uD589 \uC911\n                    </span>\n                } @else {\n                    <span class="status-badge stopped">\n                        <mat-icon>stop_circle</mat-icon>\n                        \uC911\uC9C0\uB428\n                    </span>\n                }\n                <button mat-icon-button (click)="resetSimulator()" matTooltip="\uC2DC\uBBAC\uB808\uC774\uD130 \uCD08\uAE30\uD654">\n                    <mat-icon>refresh</mat-icon>\n                </button>\n            </div>\n        </div>\n        <app-chatbot></app-chatbot>\n    </div>\n    \n    <!-- \uC624\uB978\uCABD: \uCC57\uD50C\uB85C\uC6B0 \uD3B8\uC9D1\uAE30 -->\n    <div class="editor-panel">\n        <app-chatflow-edit (playSimulator)="startSimulator()"></app-chatflow-edit>\n    </div>\n</div>', styles: ["/* src/app/modules/expedition/modules/chatflow-edit/components/pages/chatflow/chatflow.component.scss */\n.simulator-panel {\n  width: 400px;\n  height: 100%;\n  border-right: 2px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  background-color: #f5f5f5;\n}\n.simulator-panel .simulator-header {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.simulator-panel .simulator-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.simulator-panel .simulator-header .simulator-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.simulator-panel .simulator-header .simulator-controls .status-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.simulator-panel .simulator-header .simulator-controls .status-badge mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.simulator-panel .simulator-header .simulator-controls .status-badge.running {\n  background-color: rgba(76, 175, 80, 0.2);\n  color: #4caf50;\n  border: 1px solid rgba(76, 175, 80, 0.5);\n}\n.simulator-panel .simulator-header .simulator-controls .status-badge.stopped {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.simulator-panel .simulator-header .simulator-controls button {\n  color: white;\n}\n.simulator-panel app-chatbot {\n  flex: 1;\n  overflow: hidden;\n}\n.editor-panel {\n  flex: 1;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=chatflow.component.css.map */\n"] }]
  }], null, { chatflowEditComponent: [{
    type: ViewChild,
    args: [ChatflowEditComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowComponent2, { className: "ChatflowComponent", filePath: "src/app/modules/expedition/modules/chatflow-edit/components/pages/chatflow/chatflow.component.ts", lineNumber: 18 });
})();

// src/app/modules/expedition/modules/chatflow-edit/chatflow-edit-module.module.ts
var ChatflowEditModule = class _ChatflowEditModule {
  static \u0275fac = function ChatflowEditModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowEditModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatflowEditModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    ChatflowActionService,
    ChatflowSettingService,
    ChatflowDataService,
    ChatflowStorageService
  ], imports: [
    CommonModule,
    ChatbotModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowEditModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ChatflowComponent2,
        ChatflowEditComponent,
        NodeTemplateComponent,
        ButtonNodeComponent,
        CarouselNodeComponent,
        EndNodeComponent,
        ListenNodeComponent,
        SpeakNodeComponent,
        SplitNodeComponent,
        StartNodeComponent,
        ButtonNodeEditDialogComponent,
        ChatflowJsonDialogComponent,
        ListenNodeEditDialogComponent,
        SpeakNodeEditDialogComponent,
        SplitNodeEditDialogComponent,
        QuestionNodeComponent,
        QuestionNodeEditDialogComponent,
        ChatflowListDialogComponent,
        ChatflowSaveDialogComponent,
        ContextChangerNodeComponent,
        ContextChangerNodeEditDialogComponent
      ],
      imports: [
        CommonModule,
        ChatbotModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatTabsModule
      ],
      providers: [
        ChatflowActionService,
        ChatflowSettingService,
        ChatflowDataService,
        ChatflowStorageService
      ],
      exports: [
        ChatflowEditComponent
      ]
    }]
  }], null, null);
})();
\u0275\u0275setComponentScope(ButtonNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(EndNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(ListenNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(SpeakNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(SplitNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(StartNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(QuestionNodeComponent, [NodeTemplateComponent], []);
\u0275\u0275setComponentScope(ContextChangerNodeComponent, [MatIcon, NodeTemplateComponent], []);

// src/app/modules/expedition/components/chatbot/story-chatbot/story-chatbot.component.ts
var StoryChatbotComponent = class _StoryChatbotComponent {
  static \u0275fac = function StoryChatbotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoryChatbotComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoryChatbotComponent, selectors: [["app-story-chatbot"]], standalone: false, decls: 2, vars: 0, template: function StoryChatbotComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275text(1, "Story Chatbot");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoryChatbotComponent, [{
    type: Component,
    args: [{
      selector: "app-story-chatbot",
      template: "<div>Story Chatbot</div>",
      standalone: false
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoryChatbotComponent, { className: "StoryChatbotComponent", filePath: "src/app/modules/expedition/components/chatbot/story-chatbot/story-chatbot.component.ts", lineNumber: 8 });
})();

// src/app/modules/expedition/components/chatbot/question/question.component.ts
var QuestionComponent = class _QuestionComponent {
  data;
  static \u0275fac = function QuestionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionComponent, selectors: [["app-question"]], inputs: { data: "data" }, standalone: false, decls: 2, vars: 1, consts: [[1, "question-bubble"]], template: function QuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.text, " ");
    }
  }, styles: ["\n\n.question-bubble[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px 20px;\n  border-radius: 20px;\n  margin: 10px 0;\n  border: 2px solid #667eea;\n  max-width: 70%;\n}\n/*# sourceMappingURL=question.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionComponent, [{
    type: Component,
    args: [{ selector: "app-question", template: `
    <div class="question-bubble">
      {{ data?.text }}
    </div>
  `, standalone: false, styles: ["/* angular:styles/component:scss;a970efbc92286e3e7c25e973609fd4570a07891b83a6524aee6f805abbb57860;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/expedition/components/chatbot/question/question.component.ts */\n.question-bubble {\n  background: white;\n  padding: 15px 20px;\n  border-radius: 20px;\n  margin: 10px 0;\n  border: 2px solid #667eea;\n  max-width: 70%;\n}\n/*# sourceMappingURL=question.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionComponent, { className: "QuestionComponent", filePath: "src/app/modules/expedition/components/chatbot/question/question.component.ts", lineNumber: 22 });
})();

// src/app/modules/expedition/components/chatbot/answer/answer.component.ts
var AnswerComponent = class _AnswerComponent {
  data;
  static \u0275fac = function AnswerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnswerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnswerComponent, selectors: [["app-answer"]], inputs: { data: "data" }, standalone: false, decls: 2, vars: 1, consts: [[1, "answer-bubble"]], template: function AnswerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.text, " ");
    }
  }, styles: ["\n\n.answer-bubble[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 15px 20px;\n  border-radius: 20px;\n  margin: 10px 0;\n  max-width: 70%;\n  margin-left: auto;\n}\n/*# sourceMappingURL=answer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnswerComponent, [{
    type: Component,
    args: [{ selector: "app-answer", template: `
    <div class="answer-bubble">
      {{ data?.text }}
    </div>
  `, standalone: false, styles: ["/* angular:styles/component:scss;ae309642f931682e46e6689f1d390eed30b1fdd8832613e01f29d0093d0e118a;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/expedition/components/chatbot/answer/answer.component.ts */\n.answer-bubble {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 15px 20px;\n  border-radius: 20px;\n  margin: 10px 0;\n  max-width: 70%;\n  margin-left: auto;\n}\n/*# sourceMappingURL=answer.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnswerComponent, { className: "AnswerComponent", filePath: "src/app/modules/expedition/components/chatbot/answer/answer.component.ts", lineNumber: 23 });
})();

// src/app/modules/expedition/components/chatbot/button/button.component.ts
var ButtonComponent = class _ButtonComponent {
  data;
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { data: "data" }, standalone: false, decls: 2, vars: 1, consts: [[1, "chat-button"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.text, " ");
    }
  }, styles: ["\n\n.chat-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  margin: 5px;\n}\n/*# sourceMappingURL=button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", template: `
    <button class="chat-button">
      {{ data?.text }}
    </button>
  `, standalone: false, styles: ["/* angular:styles/component:scss;ce719612064233e4992b11800ac7820f61ff585dcb5c24fa5f3bea790299d037;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/expedition/components/chatbot/button/button.component.ts */\n.chat-button {\n  padding: 10px 20px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  margin: 5px;\n}\n/*# sourceMappingURL=button.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/modules/expedition/components/chatbot/button/button.component.ts", lineNumber: 23 });
})();

// src/app/modules/expedition/components/chatbot/card-button/card-button.component.ts
var CardButtonComponent = class _CardButtonComponent {
  data;
  static \u0275fac = function CardButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardButtonComponent, selectors: [["app-card-button"]], inputs: { data: "data" }, standalone: false, decls: 2, vars: 1, consts: [[1, "card-button"]], template: function CardButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.text, " ");
    }
  }, styles: ["\n\n.card-button[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: white;\n  border: 2px solid #667eea;\n  border-radius: 12px;\n  margin: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=card-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardButtonComponent, [{
    type: Component,
    args: [{ selector: "app-card-button", template: `
    <div class="card-button">
      {{ data?.text }}
    </div>
  `, standalone: false, styles: ["/* angular:styles/component:scss;f7b98fee1aae2f9b09de8a216d6bcf1aaa48c7654cd7ac18de69a986fefaf750;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/expedition/components/chatbot/card-button/card-button.component.ts */\n.card-button {\n  padding: 15px;\n  background: white;\n  border: 2px solid #667eea;\n  border-radius: 12px;\n  margin: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=card-button.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardButtonComponent, { className: "CardButtonComponent", filePath: "src/app/modules/expedition/components/chatbot/card-button/card-button.component.ts", lineNumber: 22 });
})();

// src/app/modules/expedition/services/expedition-error-handler.service.ts
var ExpeditionErrorHandler = class _ExpeditionErrorHandler {
  injector;
  router;
  snackBar;
  constructor(injector) {
    this.injector = injector;
  }
  handleError(error) {
    if (!this.router) {
      this.router = this.injector.get(Router);
    }
    if (!this.snackBar) {
      this.snackBar = this.injector.get(MatSnackBar);
    }
    console.warn("[ExpeditionErrorHandler] \uC5D0\uB7EC \uBC1C\uC0DD:", error);
    const currentUrl = this.router.url;
    const isExpeditionModule = currentUrl.includes("/expedition");
    if (isExpeditionModule) {
      let errorMessage = "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
      if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      this.snackBar.open(errorMessage, "\uB2EB\uAE30", {
        duration: 5e3,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: ["error-snackbar"]
      });
      if (!currentUrl.includes("/expedition/login")) {
        console.warn("[ExpeditionErrorHandler] \uC6D0\uC815\uB300 \uC571 \uB7F0\uCC98\uB85C \uC774\uB3D9");
        this.router.navigate(["/expedition/apps"]).catch((navError) => {
          console.warn("[ExpeditionErrorHandler] \uB124\uBE44\uAC8C\uC774\uC158 \uC2E4\uD328:", navError);
        });
      }
    } else {
      console.warn("[ExpeditionErrorHandler] \uBAA8\uB4C8 \uC678\uBD80 \uC5D0\uB7EC, \uAE30\uBCF8 \uCC98\uB9AC:", error);
    }
    throw error;
  }
  static \u0275fac = function ExpeditionErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionErrorHandler)(\u0275\u0275inject(Injector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpeditionErrorHandler, factory: _ExpeditionErrorHandler.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionErrorHandler, [{
    type: Injectable
  }], () => [{ type: Injector }], null);
})();

// src/app/modules/expedition/expedition.module.ts
var ExpeditionModule = class _ExpeditionModule {
  static \u0275fac = function ExpeditionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpeditionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExpeditionModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    ExpeditionApiService,
    ExpeditionMembershipService,
    ExpeditionAuthService,
    {
      provide: ErrorHandler,
      useClass: ExpeditionErrorHandler
    }
  ], imports: [
    CommonModule,
    ExpeditionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ChatbotModule,
    ChatflowEditModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpeditionModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ExpeditionComponent,
        AppsLauncherComponent,
        ChatflowComponent,
        CalendarComponent,
        MembershipComponent,
        InitComponent,
        StoryViewerComponent,
        StoryMakerComponent,
        StoryChatbotComponent,
        QuestionComponent,
        AnswerComponent,
        ButtonComponent,
        CardButtonComponent,
        ExpeditionLoginComponent
      ],
      imports: [
        CommonModule,
        ExpeditionRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        ChatbotModule,
        ChatflowEditModule
      ],
      providers: [
        ExpeditionApiService,
        ExpeditionMembershipService,
        ExpeditionAuthService,
        {
          provide: ErrorHandler,
          useClass: ExpeditionErrorHandler
        }
      ]
    }]
  }], null, null);
})();
export {
  ExpeditionModule
};
//# sourceMappingURL=chunk-GOKEYMQU.js.map
