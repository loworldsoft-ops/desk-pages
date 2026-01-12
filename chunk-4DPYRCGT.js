import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-NZXI4AK5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DZVWUGGM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-XGFL2WJQ.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import {
  environment
} from "./chunk-G4JOAHZY.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient
} from "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  Injectable,
  NgIf,
  Observable,
  Subject,
  ViewChild,
  catchError,
  map,
  of,
  setClassMetadata,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/project/services/auth.service.ts
var ProjectAuthService = class _ProjectAuthService {
  http;
  router;
  API_URL = `${environment.baseSyncUrl}/auth`;
  TOKEN_KEY = "project_auth_token";
  REFRESH_TOKEN_KEY = "project_refresh_token";
  USER_KEY = "project_user";
  authStateSubject = new BehaviorSubject({
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  });
  authState$ = this.authStateSubject.asObservable();
  refreshTimer;
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.initializeAuth();
  }
  /**
   * 초기 인증 상태 설정
   */
  initializeAuth() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    const userJson = localStorage.getItem(this.USER_KEY);
    if (token && refreshToken && userJson) {
      try {
        const user = JSON.parse(userJson);
        this.updateAuthState({
          user,
          token,
          refreshToken,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
        this.startTokenRefreshTimer();
      } catch (error) {
        this.clearAuthData();
      }
    }
  }
  /**
   * 로그인
   */
  login(request) {
    this.updateAuthState(__spreadProps(__spreadValues({}, this.authStateSubject.value), { isLoading: true, error: null }));
    if (request.username === "admin" && request.password === "9902") {
      const mockResponse = {
        user: {
          id: "admin-001",
          username: "admin",
          email: "admin@loworld.com",
          fullName: "\uAD00\uB9AC\uC790",
          role: "admin",
          isActive: true,
          createdAt: /* @__PURE__ */ new Date(),
          lastLoginAt: /* @__PURE__ */ new Date()
        },
        token: "mock-jwt-token-" + Date.now(),
        refreshToken: "mock-refresh-token-" + Date.now(),
        expiresIn: 3600
      };
      this.setAuthData(mockResponse);
      this.startTokenRefreshTimer();
      this.updateAuthState(__spreadProps(__spreadValues({}, this.authStateSubject.value), { isLoading: false, error: null }));
      return new Observable((observer) => {
        observer.next(mockResponse);
        observer.complete();
      });
    } else {
      const error = {
        code: "INVALID_CREDENTIALS",
        message: "\uC0AC\uC6A9\uC790\uBA85 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      };
      this.updateAuthState(__spreadProps(__spreadValues({}, this.authStateSubject.value), {
        isLoading: false,
        error: error.message
      }));
      return throwError(error);
    }
  }
  /**
   * 회원가입
   */
  register(request) {
    this.updateAuthState(__spreadProps(__spreadValues({}, this.authStateSubject.value), { isLoading: true, error: null }));
    const mockResponse = {
      user: {
        id: "user-" + Date.now(),
        username: request.username,
        email: request.email,
        fullName: request.fullName,
        role: "member",
        isActive: true,
        createdAt: /* @__PURE__ */ new Date(),
        lastLoginAt: /* @__PURE__ */ new Date()
      },
      token: "mock-jwt-token-" + Date.now(),
      refreshToken: "mock-refresh-token-" + Date.now(),
      expiresIn: 3600
    };
    this.setAuthData(mockResponse);
    this.startTokenRefreshTimer();
    this.updateAuthState(__spreadProps(__spreadValues({}, this.authStateSubject.value), { isLoading: false, error: null }));
    return new Observable((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }
  /**
   * 로그아웃
   */
  logout() {
    this.clearAuthData();
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }
  /**
   * 토큰 갱신
   */
  refreshToken() {
    const refreshToken = this.authStateSubject.value.refreshToken;
    const currentUser = this.authStateSubject.value.user;
    if (!refreshToken || !currentUser) {
      this.clearAuthData();
      return throwError("No refresh token available");
    }
    const mockResponse = {
      user: currentUser,
      token: "mock-jwt-token-" + Date.now(),
      refreshToken: "mock-refresh-token-" + Date.now(),
      expiresIn: 3600
    };
    this.setAuthData(mockResponse);
    this.startTokenRefreshTimer();
    return new Observable((observer) => {
      observer.next(mockResponse);
      observer.complete();
    });
  }
  /**
   * 비밀번호 재설정 요청
   */
  requestPasswordReset(request) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 500);
    });
  }
  /**
   * 비밀번호 재설정 확인
   */
  confirmPasswordReset(request) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 500);
    });
  }
  /**
   * 비밀번호 변경
   */
  changePassword(request) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 500);
    });
  }
  /**
   * 현재 사용자 정보 가져오기
   */
  getCurrentUser() {
    const currentUser = this.authStateSubject.value.user;
    if (!currentUser) {
      return throwError("No user found");
    }
    return new Observable((observer) => {
      observer.next(currentUser);
      observer.complete();
    });
  }
  /**
   * 인증 상태 확인
   */
  isAuthenticated() {
    return this.authStateSubject.value.isAuthenticated;
  }
  /**
   * 현재 사용자 가져오기
   */
  getUser() {
    return this.authStateSubject.value.user;
  }
  /**
   * 토큰 가져오기
   */
  getToken() {
    return this.authStateSubject.value.token;
  }
  /**
   * 인증 데이터 설정
   */
  setAuthData(response) {
    localStorage.setItem(this.TOKEN_KEY, response.token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
    this.updateAuthState({
      user: response.user,
      token: response.token,
      refreshToken: response.refreshToken,
      isAuthenticated: true,
      isLoading: false,
      error: null
    });
  }
  /**
   * 인증 데이터 삭제
   */
  clearAuthData() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    this.updateAuthState({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    this.router.navigate(["/project/auth/login"]);
  }
  /**
   * 인증 상태 업데이트
   */
  updateAuthState(state) {
    this.authStateSubject.next(__spreadValues(__spreadValues({}, this.authStateSubject.value), state));
  }
  /**
   * 토큰 갱신 타이머 시작
   */
  startTokenRefreshTimer() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
    const refreshTime = 45 * 60 * 1e3;
    this.refreshTimer = setTimeout(() => {
      this.refreshToken().subscribe({
        error: () => this.clearAuthData()
      });
    }, refreshTime);
  }
  /**
   * 인증 에러 처리
   */
  handleAuthError(error) {
    let authError;
    if (error.error instanceof ErrorEvent) {
      authError = {
        code: "CLIENT_ERROR",
        message: "\uB124\uD2B8\uC6CC\uD06C \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
        details: error.error.message
      };
    } else {
      authError = {
        code: error.error?.code || "SERVER_ERROR",
        message: error.error?.message || "\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
        details: error.error
      };
    }
    this.updateAuthState(__spreadProps(__spreadValues({}, this.authStateSubject.value), {
      isLoading: false,
      error: authError.message
    }));
    return throwError(authError);
  }
  static \u0275fac = function ProjectAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectAuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectAuthService, factory: _ProjectAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

// src/app/modules/project/guards/auth.guard.ts
var ProjectAuthGuard = class _ProjectAuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.checkAuth(state.url);
  }
  canActivateChild(route, state) {
    return this.checkAuth(state.url);
  }
  checkAuth(url) {
    return this.authService.authState$.pipe(map((authState) => {
      if (authState.isAuthenticated) {
        return true;
      } else {
        this.router.navigate(["/project/auth/login"], {
          queryParams: { returnUrl: url }
        });
        return false;
      }
    }), catchError(() => {
      this.router.navigate(["/project/auth/login"], {
        queryParams: { returnUrl: url }
      });
      return of(false);
    }));
  }
  static \u0275fac = function ProjectAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectAuthGuard)(\u0275\u0275inject(ProjectAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectAuthGuard, factory: _ProjectAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ProjectAuthService }, { type: Router }], null);
})();
var ProjectGuestGuard = class _ProjectGuestGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.authService.authState$.pipe(map((authState) => {
      if (!authState.isAuthenticated) {
        return true;
      } else {
        this.router.navigate(["/project"]);
        return false;
      }
    }));
  }
  static \u0275fac = function ProjectGuestGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectGuestGuard)(\u0275\u0275inject(ProjectAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectGuestGuard, factory: _ProjectGuestGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectGuestGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ProjectAuthService }, { type: Router }], null);
})();
var ProjectRoleGuard = class _ProjectRoleGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    const requiredRoles = route.data["roles"];
    if (!requiredRoles || requiredRoles.length === 0) {
      return of(true);
    }
    return this.authService.authState$.pipe(map((authState) => {
      if (!authState.isAuthenticated || !authState.user) {
        this.router.navigate(["/project/auth/login"]);
        return false;
      }
      const hasRole = requiredRoles.includes(authState.user.role);
      if (!hasRole) {
        this.router.navigate(["/project/access-denied"]);
        return false;
      }
      return true;
    }));
  }
  static \u0275fac = function ProjectRoleGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectRoleGuard)(\u0275\u0275inject(ProjectAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectRoleGuard, factory: _ProjectRoleGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectRoleGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ProjectAuthService }, { type: Router }], null);
})();

// src/app/modules/project/components/auth/login/login.ts
var _c0 = ["loginComponent"];
var ProjectLoginComponent = class _ProjectLoginComponent {
  authService;
  router;
  route;
  loginComponent;
  loginConfig = {
    title: "\u{1F4CA} \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC",
    subtitle: "\uD6A8\uC728\uC801\uC778 \uD504\uB85C\uC81D\uD2B8 \uD611\uC5C5",
    moduleName: "project",
    showSocialLogin: false,
    showRegisterLink: true,
    themeColors: {
      primary: "#8b5cf6",
      // 보라 (프로젝트/관리)
      secondary: "#7c3aed",
      // 진한 보라
      accent: "#a78bfa"
      // 밝은 보라
    }
  };
  destroy$ = new Subject();
  returnUrl = "/project";
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.returnUrl = params["returnUrl"] || "/project";
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onLogin(credentials) {
    return __async(this, null, function* () {
      if (this.loginComponent) {
        this.loginComponent.setLoading(true);
      }
      try {
        yield this.authService.login({
          username: credentials.username,
          password: credentials.password
        }).toPromise();
        this.router.navigateByUrl(this.returnUrl);
      } catch (error) {
        if (this.loginComponent) {
          const errorMessage = error?.error?.message || "\uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
          this.loginComponent.setError(errorMessage);
          this.loginComponent.setLoading(false);
        }
      }
    });
  }
  onRegisterClick() {
    this.router.navigate(["/project/register"]);
  }
  static \u0275fac = function ProjectLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectLoginComponent)(\u0275\u0275directiveInject(ProjectAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectLoginComponent, selectors: [["app-project-login"]], viewQuery: function ProjectLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "registerClick", "config"]], template: function ProjectLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function ProjectLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogin($event));
      })("registerClick", function ProjectLoginComponent_Template_app_unified_login_registerClick_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRegisterClick());
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("config", ctx.loginConfig);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    SharedModule,
    UnifiedLoginComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-project-login",
      standalone: true,
      imports: [
        CommonModule,
        RouterModule,
        SharedModule
      ],
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)" (registerClick)="onRegisterClick()"></app-unified-login>'
    }]
  }], () => [{ type: ProjectAuthService }, { type: Router }, { type: ActivatedRoute }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectLoginComponent, { className: "ProjectLoginComponent", filePath: "src/app/modules/project/components/auth/login/login.ts", lineNumber: 20 });
})();

// src/app/modules/project/components/auth/register/register.ts
var _c02 = () => ["/project/auth/login"];
function ProjectRegisterComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC774\uB984\uC740 \uCD5C\uC18C 2\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC0AC\uC6A9\uC790\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC0AC\uC6A9\uC790\uBA85\uC740 \uCD5C\uC18C 3\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC0AC\uC6A9\uC790\uBA85\uC740 \uC601\uBB38, \uC22B\uC790, \uC5B8\uB354\uC2A4\uCF54\uC5B4\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uBE44\uBC00\uBC88\uD638\uB294 \uCD5C\uC18C 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uBE44\uBC00\uBC88\uD638 \uD655\uC778\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_error_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectRegisterComponent_mat_spinner_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function ProjectRegisterComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uD68C\uC6D0\uAC00\uC785");
    \u0275\u0275elementEnd();
  }
}
var ProjectRegisterComponent = class _ProjectRegisterComponent {
  fb;
  authService;
  router;
  snackBar;
  registerForm;
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;
  destroy$ = new Subject();
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.registerForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9_]+$/)
      ]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
      ]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.authService.authState$.pipe(takeUntil(this.destroy$)).subscribe((authState) => {
      this.isLoading = authState.isLoading;
      if (authState.isAuthenticated) {
        this.router.navigate(["/project"]);
      }
      if (authState.error) {
        this.showError(authState.error);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const registerRequest = {
        fullName: this.registerForm.value.fullName,
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        confirmPassword: this.registerForm.value.confirmPassword
      };
      this.authService.register(registerRequest).subscribe({
        next: () => {
          this.showSuccess("\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        },
        error: (error) => {
          this.showError(error.message || "\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
        }
      });
    }
  }
  passwordMatchValidator(control) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (!password || !confirmPassword) {
      return null;
    }
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      const errors = confirmPassword.errors;
      if (errors) {
        delete errors["mismatch"];
        if (Object.keys(errors).length === 0) {
          confirmPassword.setErrors(null);
        }
      }
      return null;
    }
  }
  showSuccess(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 3e3,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  showError(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 5e3,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  static \u0275fac = function ProjectRegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectRegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProjectAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectRegisterComponent, selectors: [["app-project-register"]], decls: 68, vars: 22, consts: [[1, "register-container"], [1, "register-card-wrapper"], [1, "register-card"], [1, "header-content"], [1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "fullName", "placeholder", "\uC804\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694", "autocomplete", "name"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "username", "placeholder", "\uC0AC\uC6A9\uC790\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694", "autocomplete", "username"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "placeholder", "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694", "autocomplete", "new-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694", "autocomplete", "new-password", 3, "type"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "register-button", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [1, "card-actions"], [1, "login-section"], [1, "login-link", 3, "routerLink"], ["diameter", "20"]], template: function ProjectRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "div", 3)(5, "div", 4)(6, "mat-icon");
      \u0275\u0275text(7, "business");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "mat-card-title");
      \u0275\u0275text(9, "\uACC4\uC815 \uC0DD\uC131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-card-subtitle");
      \u0275\u0275text(11, "\uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC5D0 \uAC00\uC785\uD558\uC138\uC694");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "mat-card-content")(13, "form", 5);
      \u0275\u0275listener("ngSubmit", function ProjectRegisterComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(14, "mat-form-field", 6)(15, "mat-label");
      \u0275\u0275text(16, "\uC774\uB984");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 7);
      \u0275\u0275elementStart(18, "mat-icon", 8);
      \u0275\u0275text(19, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, ProjectRegisterComponent_mat_error_20_Template, 2, 0, "mat-error", 9)(21, ProjectRegisterComponent_mat_error_21_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-form-field", 6)(23, "mat-label");
      \u0275\u0275text(24, "\uC0AC\uC6A9\uC790\uBA85");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 10);
      \u0275\u0275elementStart(26, "mat-icon", 8);
      \u0275\u0275text(27, "account_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, ProjectRegisterComponent_mat_error_28_Template, 2, 0, "mat-error", 9)(29, ProjectRegisterComponent_mat_error_29_Template, 2, 0, "mat-error", 9)(30, ProjectRegisterComponent_mat_error_30_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-form-field", 6)(32, "mat-label");
      \u0275\u0275text(33, "\uC774\uBA54\uC77C");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 11);
      \u0275\u0275elementStart(35, "mat-icon", 8);
      \u0275\u0275text(36, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, ProjectRegisterComponent_mat_error_37_Template, 2, 0, "mat-error", 9)(38, ProjectRegisterComponent_mat_error_38_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-form-field", 6)(40, "mat-label");
      \u0275\u0275text(41, "\uBE44\uBC00\uBC88\uD638");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 12);
      \u0275\u0275elementStart(43, "button", 13);
      \u0275\u0275listener("click", function ProjectRegisterComponent_Template_button_click_43_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementStart(44, "mat-icon");
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(46, ProjectRegisterComponent_mat_error_46_Template, 2, 0, "mat-error", 9)(47, ProjectRegisterComponent_mat_error_47_Template, 2, 0, "mat-error", 9)(48, ProjectRegisterComponent_mat_error_48_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-form-field", 6)(50, "mat-label");
      \u0275\u0275text(51, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 14);
      \u0275\u0275elementStart(53, "button", 13);
      \u0275\u0275listener("click", function ProjectRegisterComponent_Template_button_click_53_listener() {
        return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
      });
      \u0275\u0275elementStart(54, "mat-icon");
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(56, ProjectRegisterComponent_mat_error_56_Template, 2, 0, "mat-error", 9)(57, ProjectRegisterComponent_mat_error_57_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 15)(59, "button", 16);
      \u0275\u0275template(60, ProjectRegisterComponent_mat_spinner_60_Template, 1, 0, "mat-spinner", 17)(61, ProjectRegisterComponent_span_61_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "mat-card-actions", 18)(63, "div", 19)(64, "span");
      \u0275\u0275text(65, "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 20);
      \u0275\u0275text(67, " \uB85C\uADF8\uC778 ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_15_0;
      let tmp_16_0;
      \u0275\u0275advance(13);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.registerForm.get("fullName")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_2_0 = ctx.registerForm.get("fullName")) == null ? null : tmp_2_0.hasError("minlength"));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.registerForm.get("username")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.registerForm.get("username")) == null ? null : tmp_4_0.hasError("minlength"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.registerForm.get("username")) == null ? null : tmp_5_0.hasError("pattern"));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.registerForm.get("email")) == null ? null : tmp_7_0.hasError("email"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_10_0 = ctx.registerForm.get("password")) == null ? null : tmp_10_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_11_0 = ctx.registerForm.get("password")) == null ? null : tmp_11_0.hasError("minlength"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.hasError("pattern"));
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hideConfirmPassword ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hideConfirmPassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_15_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_15_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_16_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_16_0.hasError("mismatch"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c02));
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ["\n\n.register-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-primary),\n      var(--project-accent));\n  padding: 2rem;\n}\n.register-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n}\n.register-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  background: var(--project-bg-primary);\n}\n.header-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-primary),\n      var(--project-accent));\n  margin-bottom: 1rem;\n}\n.logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  color: var(--project-text-primary);\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  color: var(--project-text-secondary);\n  font-size: 14px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.register-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: center;\n}\n.login-section[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: var(--project-text-secondary);\n}\n.login-link[_ngcontent-%COMP%] {\n  color: var(--project-primary);\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 0.5rem;\n  transition: color 0.3s ease;\n}\n.login-link[_ngcontent-%COMP%]:hover {\n  color: var(--project-accent);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=register.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectRegisterComponent, [{
    type: Component,
    args: [{ selector: "app-project-register", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], template: `
    <div class="register-container">
      <div class="register-card-wrapper">
        <mat-card class="register-card">
          <mat-card-header>
            <div class="header-content">
              <div class="logo">
                <mat-icon>business</mat-icon>
              </div>
              <mat-card-title>\uACC4\uC815 \uC0DD\uC131</mat-card-title>
              <mat-card-subtitle>\uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC5D0 \uAC00\uC785\uD558\uC138\uC694</mat-card-subtitle>
            </div>
          </mat-card-header>

          <mat-card-content>
            <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>\uC774\uB984</mat-label>
                <input 
                  matInput 
                  formControlName="fullName"
                  placeholder="\uC804\uCCB4 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694"
                  autocomplete="name">
                <mat-icon matSuffix>person</mat-icon>
                <mat-error *ngIf="registerForm.get('fullName')?.hasError('required')">
                  \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
                <mat-error *ngIf="registerForm.get('fullName')?.hasError('minlength')">
                  \uC774\uB984\uC740 \uCD5C\uC18C 2\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>\uC0AC\uC6A9\uC790\uBA85</mat-label>
                <input 
                  matInput 
                  formControlName="username"
                  placeholder="\uC0AC\uC6A9\uC790\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694"
                  autocomplete="username">
                <mat-icon matSuffix>account_circle</mat-icon>
                <mat-error *ngIf="registerForm.get('username')?.hasError('required')">
                  \uC0AC\uC6A9\uC790\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
                <mat-error *ngIf="registerForm.get('username')?.hasError('minlength')">
                  \uC0AC\uC6A9\uC790\uBA85\uC740 \uCD5C\uC18C 3\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4
                </mat-error>
                <mat-error *ngIf="registerForm.get('username')?.hasError('pattern')">
                  \uC0AC\uC6A9\uC790\uBA85\uC740 \uC601\uBB38, \uC22B\uC790, \uC5B8\uB354\uC2A4\uCF54\uC5B4\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>\uC774\uBA54\uC77C</mat-label>
                <input 
                  matInput 
                  type="email"
                  formControlName="email"
                  placeholder="\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"
                  autocomplete="email">
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                  \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
                <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                  \uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>\uBE44\uBC00\uBC88\uD638</mat-label>
                <input 
                  matInput 
                  [type]="hidePassword ? 'password' : 'text'"
                  formControlName="password"
                  placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
                  autocomplete="new-password">
                <button mat-icon-button matSuffix 
                        type="button"
                        (click)="hidePassword = !hidePassword">
                  <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
                <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                  \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
                <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                  \uBE44\uBC00\uBC88\uD638\uB294 \uCD5C\uC18C 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4
                </mat-error>
                <mat-error *ngIf="registerForm.get('password')?.hasError('pattern')">
                  \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</mat-label>
                <input 
                  matInput 
                  [type]="hideConfirmPassword ? 'password' : 'text'"
                  formControlName="confirmPassword"
                  placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694"
                  autocomplete="new-password">
                <button mat-icon-button matSuffix 
                        type="button"
                        (click)="hideConfirmPassword = !hideConfirmPassword">
                  <mat-icon>{{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
                <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('required')">
                  \uBE44\uBC00\uBC88\uD638 \uD655\uC778\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
                <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('mismatch')">
                  \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4
                </mat-error>
              </mat-form-field>

              <div class="form-actions">
                <button 
                  mat-raised-button 
                  color="primary" 
                  type="submit"
                  class="register-button"
                  [disabled]="registerForm.invalid || isLoading">
                  <mat-spinner diameter="20" *ngIf="isLoading"></mat-spinner>
                  <span *ngIf="!isLoading">\uD68C\uC6D0\uAC00\uC785</span>
                </button>
              </div>
            </form>
          </mat-card-content>

          <mat-card-actions class="card-actions">
            <div class="login-section">
              <span>\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?</span>
              <a [routerLink]="['/project/auth/login']" class="login-link">
                \uB85C\uADF8\uC778
              </a>
            </div>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;7bdcf9923e32a1ba5d5100fb6762cae7f5b2eb3320271b0a13036d4c12651e2e;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/project/components/auth/register/register.ts */\n.register-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-primary),\n      var(--project-accent));\n  padding: 2rem;\n}\n.register-card-wrapper {\n  width: 100%;\n  max-width: 450px;\n}\n.register-card {\n  padding: 2rem;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  background: var(--project-bg-primary);\n}\n.header-content {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-primary),\n      var(--project-accent));\n  margin-bottom: 1rem;\n}\n.logo mat-icon {\n  font-size: 32px;\n  color: white;\n}\nmat-card-title {\n  color: var(--project-text-primary);\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\nmat-card-subtitle {\n  color: var(--project-text-secondary);\n  font-size: 14px;\n}\n.full-width {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.form-actions {\n  margin-bottom: 1rem;\n}\n.register-button {\n  width: 100%;\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.card-actions {\n  padding: 0;\n  justify-content: center;\n}\n.login-section {\n  text-align: center;\n  font-size: 14px;\n  color: var(--project-text-secondary);\n}\n.login-link {\n  color: var(--project-primary);\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 0.5rem;\n  transition: color 0.3s ease;\n}\n.login-link:hover {\n  color: var(--project-accent);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .register-container {\n    padding: 1rem;\n  }\n  .register-card {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ProjectAuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectRegisterComponent, { className: "ProjectRegisterComponent", filePath: "src/app/modules/project/components/auth/register/register.ts", lineNumber: 276 });
})();

// src/app/modules/project/components/auth/forgot-password/forgot-password.ts
var _c03 = () => ["/project/auth/login"];
function ProjectForgotPasswordComponent_form_13_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectForgotPasswordComponent_form_13_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " \uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 ");
    \u0275\u0275elementEnd();
  }
}
function ProjectForgotPasswordComponent_form_13_mat_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 18);
  }
}
function ProjectForgotPasswordComponent_form_13_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uC7AC\uC124\uC815 \uB9C1\uD06C \uC804\uC1A1");
    \u0275\u0275elementEnd();
  }
}
function ProjectForgotPasswordComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function ProjectForgotPasswordComponent_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 11)(2, "mat-label");
    \u0275\u0275text(3, "\uC774\uBA54\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 12);
    \u0275\u0275elementStart(5, "mat-icon", 13);
    \u0275\u0275text(6, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectForgotPasswordComponent_form_13_mat_error_7_Template, 2, 0, "mat-error", 14)(8, ProjectForgotPasswordComponent_form_13_mat_error_8_Template, 2, 0, "mat-error", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "button", 16);
    \u0275\u0275template(11, ProjectForgotPasswordComponent_form_13_mat_spinner_11_Template, 1, 0, "mat-spinner", 17)(12, ProjectForgotPasswordComponent_form_13_span_12_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.forgotPasswordForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.forgotPasswordForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.forgotPasswordForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.forgotPasswordForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
  }
}
function ProjectForgotPasswordComponent_div_14_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uB2E4\uC2DC \uC804\uC1A1");
    \u0275\u0275elementEnd();
  }
}
function ProjectForgotPasswordComponent_div_14_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.resendCooldown, "\uCD08 \uD6C4 \uC7AC\uC804\uC1A1 \uAC00\uB2A5");
  }
}
function ProjectForgotPasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 20);
    \u0275\u0275text(2, "mark_email_read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\uB85C \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB838\uC2B5\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC744 \uD655\uC778\uD558\uC2DC\uACE0 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD574\uC8FC\uC138\uC694. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10, " \uC774\uBA54\uC77C\uC774 \uB3C4\uCC29\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC2A4\uD338 \uD3F4\uB354\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 22);
    \u0275\u0275listener("click", function ProjectForgotPasswordComponent_div_14_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendEmail());
    });
    \u0275\u0275template(12, ProjectForgotPasswordComponent_div_14_span_12_Template, 2, 0, "span", 14)(13, ProjectForgotPasswordComponent_div_14_span_13_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.sentEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.resendCooldown > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendCooldown === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resendCooldown > 0);
  }
}
var ProjectForgotPasswordComponent = class _ProjectForgotPasswordComponent {
  fb;
  authService;
  router;
  snackBar;
  forgotPasswordForm;
  isLoading = false;
  emailSent = false;
  sentEmail = "";
  resendCooldown = 0;
  destroy$ = new Subject();
  cooldownTimer;
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {
    this.authService.authState$.pipe(takeUntil(this.destroy$)).subscribe((authState) => {
      this.isLoading = authState.isLoading;
      if (authState.error) {
        this.showError(authState.error);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.cooldownTimer) {
      clearInterval(this.cooldownTimer);
    }
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      const request = { email };
      this.authService.requestPasswordReset(request).subscribe({
        next: () => {
          this.sentEmail = email;
          this.emailSent = true;
          this.showSuccess("\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uC774\uBA54\uC77C\uC744 \uC804\uC1A1\uD588\uC2B5\uB2C8\uB2E4.");
          this.startResendCooldown();
        },
        error: (error) => {
          this.showError(error.message || "\uC774\uBA54\uC77C \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
        }
      });
    }
  }
  resendEmail() {
    if (this.resendCooldown === 0) {
      this.onSubmit();
    }
  }
  startResendCooldown() {
    this.resendCooldown = 60;
    this.cooldownTimer = setInterval(() => {
      this.resendCooldown--;
      if (this.resendCooldown <= 0) {
        clearInterval(this.cooldownTimer);
      }
    }, 1e3);
  }
  showSuccess(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 3e3,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  showError(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 5e3,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  static \u0275fac = function ProjectForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProjectAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectForgotPasswordComponent, selectors: [["app-project-forgot-password"]], decls: 21, vars: 4, consts: [[1, "forgot-password-container"], [1, "forgot-password-card-wrapper"], [1, "forgot-password-card"], [1, "header-content"], [1, "logo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "card-actions"], [1, "back-section"], [1, "back-link", 3, "routerLink"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "\uB4F1\uB85D\uD558\uC2E0 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694", "autocomplete", "email"], ["matSuffix", ""], [4, "ngIf"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "reset-button", 3, "disabled"], ["diameter", "20", 4, "ngIf"], ["diameter", "20"], [1, "success-message"], [1, "success-icon"], [1, "note"], ["mat-raised-button", "", "color", "primary", 1, "resend-button", 3, "click", "disabled"]], template: function ProjectForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "div", 3)(5, "div", 4)(6, "mat-icon");
      \u0275\u0275text(7, "lock_reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "mat-card-title");
      \u0275\u0275text(9, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-card-subtitle");
      \u0275\u0275text(11, " \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC2DC\uBA74 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "mat-card-content");
      \u0275\u0275template(13, ProjectForgotPasswordComponent_form_13_Template, 13, 6, "form", 5)(14, ProjectForgotPasswordComponent_div_14_Template, 14, 4, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-card-actions", 7)(16, "div", 8)(17, "a", 9)(18, "mat-icon");
      \u0275\u0275text(19, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " \uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30 ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", !ctx.emailSent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.emailSent);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c03));
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ["\n\n.forgot-password-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-primary),\n      var(--project-accent));\n  padding: 2rem;\n}\n.forgot-password-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n}\n.forgot-password-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  background: var(--project-bg-primary);\n}\n.header-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-accent),\n      var(--project-primary));\n  margin-bottom: 1rem;\n}\n.logo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  color: var(--project-text-primary);\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  color: var(--project-text-secondary);\n  font-size: 14px;\n  line-height: 1.4;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.reset-button[_ngcontent-%COMP%], \n.resend-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--project-accent);\n  margin-bottom: 1rem;\n}\n.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--project-text-primary);\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--project-text-secondary);\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n.success-message[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--project-text-hint);\n  margin-bottom: 1.5rem;\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: center;\n}\n.back-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: var(--project-primary);\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: color 0.3s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--project-accent);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .forgot-password-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .forgot-password-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=forgot-password.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-project-forgot-password", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], template: `
    <div class="forgot-password-container">
      <div class="forgot-password-card-wrapper">
        <mat-card class="forgot-password-card">
          <mat-card-header>
            <div class="header-content">
              <div class="logo">
                <mat-icon>lock_reset</mat-icon>
              </div>
              <mat-card-title>\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30</mat-card-title>
              <mat-card-subtitle>
                \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC2DC\uBA74 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4
              </mat-card-subtitle>
            </div>
          </mat-card-header>

          <mat-card-content>
            <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" *ngIf="!emailSent">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>\uC774\uBA54\uC77C</mat-label>
                <input 
                  matInput 
                  type="email"
                  formControlName="email"
                  placeholder="\uB4F1\uB85D\uD558\uC2E0 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"
                  autocomplete="email">
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="forgotPasswordForm.get('email')?.hasError('required')">
                  \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
                <mat-error *ngIf="forgotPasswordForm.get('email')?.hasError('email')">
                  \uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694
                </mat-error>
              </mat-form-field>

              <div class="form-actions">
                <button 
                  mat-raised-button 
                  color="primary" 
                  type="submit"
                  class="reset-button"
                  [disabled]="forgotPasswordForm.invalid || isLoading">
                  <mat-spinner diameter="20" *ngIf="isLoading"></mat-spinner>
                  <span *ngIf="!isLoading">\uC7AC\uC124\uC815 \uB9C1\uD06C \uC804\uC1A1</span>
                </button>
              </div>
            </form>

            <div *ngIf="emailSent" class="success-message">
              <mat-icon class="success-icon">mark_email_read</mat-icon>
              <h3>\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694</h3>
              <p>
                <strong>{{sentEmail}}</strong>\uB85C \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB838\uC2B5\uB2C8\uB2E4.
                \uC774\uBA54\uC77C\uC744 \uD655\uC778\uD558\uC2DC\uACE0 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD574\uC8FC\uC138\uC694.
              </p>
              <p class="note">
                \uC774\uBA54\uC77C\uC774 \uB3C4\uCC29\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC2A4\uD338 \uD3F4\uB354\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.
              </p>
              <button 
                mat-raised-button 
                color="primary" 
                (click)="resendEmail()"
                [disabled]="resendCooldown > 0"
                class="resend-button">
                <span *ngIf="resendCooldown === 0">\uB2E4\uC2DC \uC804\uC1A1</span>
                <span *ngIf="resendCooldown > 0">{{resendCooldown}}\uCD08 \uD6C4 \uC7AC\uC804\uC1A1 \uAC00\uB2A5</span>
              </button>
            </div>
          </mat-card-content>

          <mat-card-actions class="card-actions">
            <div class="back-section">
              <a [routerLink]="['/project/auth/login']" class="back-link">
                <mat-icon>arrow_back</mat-icon>
                \uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30
              </a>
            </div>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;b7338ad35123ae53491b7d48870be7f73271d08cd70d2411bf4e0c5983ebf80d;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/project/components/auth/forgot-password/forgot-password.ts */\n.forgot-password-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-primary),\n      var(--project-accent));\n  padding: 2rem;\n}\n.forgot-password-card-wrapper {\n  width: 100%;\n  max-width: 450px;\n}\n.forgot-password-card {\n  padding: 2rem;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  background: var(--project-bg-primary);\n}\n.header-content {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--project-accent),\n      var(--project-primary));\n  margin-bottom: 1rem;\n}\n.logo mat-icon {\n  font-size: 32px;\n  color: white;\n}\nmat-card-title {\n  color: var(--project-text-primary);\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\nmat-card-subtitle {\n  color: var(--project-text-secondary);\n  font-size: 14px;\n  line-height: 1.4;\n}\n.full-width {\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n.form-actions {\n  margin-bottom: 1rem;\n}\n.reset-button,\n.resend-button {\n  width: 100%;\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.success-message {\n  text-align: center;\n  padding: 1rem 0;\n}\n.success-icon {\n  font-size: 48px;\n  color: var(--project-accent);\n  margin-bottom: 1rem;\n}\n.success-message h3 {\n  color: var(--project-text-primary);\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n.success-message p {\n  color: var(--project-text-secondary);\n  line-height: 1.5;\n  margin-bottom: 1rem;\n}\n.success-message .note {\n  font-size: 14px;\n  color: var(--project-text-hint);\n  margin-bottom: 1.5rem;\n}\n.card-actions {\n  padding: 0;\n  justify-content: center;\n}\n.back-section {\n  text-align: center;\n}\n.back-link {\n  color: var(--project-primary);\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: color 0.3s ease;\n}\n.back-link:hover {\n  color: var(--project-accent);\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .forgot-password-container {\n    padding: 1rem;\n  }\n  .forgot-password-card {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=forgot-password.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ProjectAuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectForgotPasswordComponent, { className: "ProjectForgotPasswordComponent", filePath: "src/app/modules/project/components/auth/forgot-password/forgot-password.ts", lineNumber: 250 });
})();

export {
  ProjectAuthService,
  ProjectAuthGuard,
  ProjectGuestGuard,
  ProjectRoleGuard,
  ProjectLoginComponent,
  ProjectRegisterComponent,
  ProjectForgotPasswordComponent
};
//# sourceMappingURL=chunk-4DPYRCGT.js.map
