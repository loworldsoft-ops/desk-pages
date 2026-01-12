import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import "./chunk-IEXL5CIB.js";
import {
  environment
} from "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import "./chunk-EWZCM5ON.js";
import "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders
} from "./chunk-OYJIDA3L.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  ViewChild,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/dollar-token/services/dollar-token-auth.service.ts
var DollarTokenAuthService = class _DollarTokenAuthService {
  router;
  http;
  STORAGE_KEY = "dollar_token_user";
  TOKEN_KEY = "dollar_token_auth_token";
  constructor(router, http) {
    this.router = router;
    this.http = http;
  }
  /**
   * 로그인
   */
  login(username, password) {
    console.log("[DollarTokenAuth] \uB85C\uADF8\uC778 \uC2DC\uB3C4:", username);
    console.log("[DollarTokenAuth] production:", environment.production);
    console.log("[DollarTokenAuth] \uBAA9\uC5C5 \uB85C\uADF8\uC778 \uC0AC\uC6A9");
    return this.mockLogin(username, password);
  }
  /**
   * 목업 로그인 (개발용)
   */
  mockLogin(username, password) {
    console.log("[DollarTokenAuth] mockLogin \uD638\uCD9C:", username, password);
    const mockUsers = {
      "admin": {
        userId: "dt_admin",
        username: "admin",
        email: "admin@dollartoken.com",
        walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
        balance: 1e4,
        token: "mock_token_admin"
      },
      "user1": {
        userId: "dt_user1",
        username: "user1",
        email: "user1@dollartoken.com",
        walletAddress: "0x123456789abcdef",
        balance: 5e3,
        token: "mock_token_user1"
      }
    };
    console.log("[DollarTokenAuth] mockUsers:", Object.keys(mockUsers));
    console.log("[DollarTokenAuth] username exists?", !!mockUsers[username]);
    console.log("[DollarTokenAuth] password match?", password === "1017");
    if (mockUsers[username] && password === "1017") {
      console.log("[DollarTokenAuth] \uB85C\uADF8\uC778 \uC131\uACF5:", mockUsers[username]);
      const user = mockUsers[username];
      this.setUser(user);
      this.setToken(user.token);
      console.log("[DollarTokenAuth] returning of(true)");
      return of(true);
    }
    console.log("[DollarTokenAuth] \uB85C\uADF8\uC778 \uC2E4\uD328 - \uC798\uBABB\uB41C \uC778\uC99D \uC815\uBCF4");
    console.log("[DollarTokenAuth] username:", username, "password:", password);
    return of(false);
  }
  /**
   * 로그아웃
   */
  logout() {
    console.log("[DollarTokenAuth] \uB85C\uADF8\uC544\uC6C3");
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
    } catch (error) {
      console.error("[DollarTokenAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/dollar-token/login"]).catch((err) => {
        console.error("[DollarTokenAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/dollar-token/login";
      });
    }
  }
  /**
   * 인증 상태 확인
   */
  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token !== null && token.trim() !== "";
  }
  /**
   * 현재 사용자 정보 가져오기
   */
  getCurrentUser() {
    const userStr = localStorage.getItem(this.STORAGE_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }
  /**
   * 사용자 정보 저장
   */
  setUser(user) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }
  /**
   * 토큰 저장
   */
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  /**
   * 토큰 가져오기
   */
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  /**
   * HTTP 헤더에 토큰 추가
   */
  getAuthHeaders() {
    const token = this.getToken();
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    });
  }
  static \u0275fac = function DollarTokenAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DollarTokenAuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DollarTokenAuthService, factory: _DollarTokenAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DollarTokenAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: HttpClient }], null);
})();

// src/app/modules/dollar-token/components/dollar-token-main/dollar-token-main.component.ts
function DollarTokenMainComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "\uAC70\uB798 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function DollarTokenMainComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "p", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "p", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pending", tx_r1.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275classProp("send", tx_r1.type === "send")("receive", tx_r1.type === "receive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r1.type === "send" ? "\u{1F4E4}" : tx_r1.type === "receive" ? "\u{1F4E5}" : "\u{1F504}", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTypeText(tx_r1.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 21, tx_r1.date, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", tx_r1.type === "receive")("negative", tx_r1.type === "send");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", tx_r1.type === "send" ? "-" : "+", "", \u0275\u0275pipeBind2(12, 24, tx_r1.amount, "1.2-2"), " ", tx_r1.currency);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("completed", tx_r1.status === "completed")("pending", tx_r1.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(tx_r1.status), " ");
  }
}
function DollarTokenMainComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_52_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\uC1A1\uAE08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\uC1A1\uAE08 \uAE30\uB2A5\uC740 \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_52_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(7, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()();
  }
}
function DollarTokenMainComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_53_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\uBC1B\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_53_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(7, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\uB0B4 \uC9C0\uAC11 \uC8FC\uC18C: ", ctx_r1.walletAddress);
  }
}
function DollarTokenMainComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_54_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_54_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "\uD658\uC804");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "\uD658\uC804 \uAE30\uB2A5\uC740 \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275listener("click", function DollarTokenMainComponent_div_54_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(7, "\uB2EB\uAE30");
    \u0275\u0275elementEnd()()();
  }
}
var DollarTokenMainComponent = class _DollarTokenMainComponent {
  authService;
  router;
  currentUser = null;
  balance = 0;
  walletAddress = "";
  // 거래 데이터
  transactions = [];
  // UI 상태
  showSendModal = false;
  showReceiveModal = false;
  showExchangeModal = false;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.loadUserData();
    this.loadTransactions();
  }
  /**
   * 사용자 데이터 로드
   */
  loadUserData() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.balance = this.currentUser.balance || 0;
      this.walletAddress = this.currentUser.walletAddress || "N/A";
    }
  }
  /**
   * 거래 내역 로드
   */
  loadTransactions() {
    this.transactions = [
      {
        id: "tx_001",
        type: "receive",
        amount: 1e3,
        currency: "USDT",
        date: /* @__PURE__ */ new Date("2025-10-20"),
        status: "completed",
        sender: "0x123...abc"
      },
      {
        id: "tx_002",
        type: "send",
        amount: 500,
        currency: "USDT",
        date: /* @__PURE__ */ new Date("2025-10-21"),
        status: "completed",
        recipient: "0x456...def"
      },
      {
        id: "tx_003",
        type: "exchange",
        amount: 2e3,
        currency: "USDT",
        date: /* @__PURE__ */ new Date("2025-10-22"),
        status: "pending"
      }
    ];
  }
  /**
   * 로그아웃
   */
  onLogout() {
    if (confirm("\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      this.authService.logout();
    }
  }
  /**
   * 송금 모달 열기
   */
  openSendModal() {
    this.showSendModal = true;
  }
  /**
   * 받기 모달 열기
   */
  openReceiveModal() {
    this.showReceiveModal = true;
  }
  /**
   * 환전 모달 열기
   */
  openExchangeModal() {
    this.showExchangeModal = true;
  }
  /**
   * 모달 닫기
   */
  closeModal() {
    this.showSendModal = false;
    this.showReceiveModal = false;
    this.showExchangeModal = false;
  }
  /**
   * 지갑 주소 복사
   */
  copyWalletAddress() {
    navigator.clipboard.writeText(this.walletAddress).then(() => {
      alert("\uC9C0\uAC11 \uC8FC\uC18C\uAC00 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    });
  }
  /**
   * 거래 상태 텍스트
   */
  getStatusText(status) {
    switch (status) {
      case "completed":
        return "\uC644\uB8CC";
      case "pending":
        return "\uB300\uAE30\uC911";
      case "failed":
        return "\uC2E4\uD328";
      default:
        return status;
    }
  }
  /**
   * 거래 타입 텍스트
   */
  getTypeText(type) {
    switch (type) {
      case "send":
        return "\uC1A1\uAE08";
      case "receive":
        return "\uBC1B\uAE30";
      case "exchange":
        return "\uD658\uC804";
      default:
        return type;
    }
  }
  static \u0275fac = function DollarTokenMainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DollarTokenMainComponent)(\u0275\u0275directiveInject(DollarTokenAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DollarTokenMainComponent, selectors: [["app-dollar-token-main"]], standalone: false, decls: 55, vars: 15, consts: [[1, "dollar-token-container"], [1, "dt-header"], [1, "header-left"], [1, "subtitle"], [1, "header-right"], [1, "user-name"], [1, "btn-logout", 3, "click"], [1, "dt-main-content"], [1, "wallet-card"], [1, "wallet-header"], [1, "wallet-address", 3, "click"], [1, "copy-icon"], [1, "wallet-balance"], [1, "balance-label"], [1, "balance-amount"], [1, "balance-usd"], [1, "wallet-actions"], [1, "btn-action", "btn-send", 3, "click"], [1, "icon"], [1, "btn-action", "btn-receive", 3, "click"], [1, "btn-action", "btn-exchange", 3, "click"], [1, "transactions-card"], [1, "transactions-list"], ["class", "no-transactions", 4, "ngIf"], ["class", "transaction-item", 3, "pending", 4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "no-transactions"], [1, "transaction-item"], [1, "tx-icon"], [1, "tx-info"], [1, "tx-type"], [1, "tx-date"], [1, "tx-amount"], [1, "amount"], [1, "status"], [1, "modal-backdrop", 3, "click"], [1, "modal-content", 3, "click"], [1, "btn-close", 3, "click"]], template: function DollarTokenMainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u{1F4B5} \uB2EC\uB7EC\uD1A0\uD070");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "\uB2EC\uB7EC \uC2A4\uD14C\uC774\uBE14 \uCF54\uC778 \uAC70\uB798 \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "span", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function DollarTokenMainComponent_Template_button_click_10_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275text(11, "\uB85C\uADF8\uC544\uC6C3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "h2");
      \u0275\u0275text(16, "\uB0B4 \uC9C0\uAC11");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 10);
      \u0275\u0275listener("click", function DollarTokenMainComponent_Template_span_click_17_listener() {
        return ctx.copyWalletAddress();
      });
      \u0275\u0275text(18);
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "\u{1F4CB}");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "p", 13);
      \u0275\u0275text(23, "\uD604\uC7AC \uC794\uC561");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h3", 14);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 16)(31, "button", 17);
      \u0275\u0275listener("click", function DollarTokenMainComponent_Template_button_click_31_listener() {
        return ctx.openSendModal();
      });
      \u0275\u0275elementStart(32, "span", 18);
      \u0275\u0275text(33, "\u{1F4E4}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "\uC1A1\uAE08");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 19);
      \u0275\u0275listener("click", function DollarTokenMainComponent_Template_button_click_36_listener() {
        return ctx.openReceiveModal();
      });
      \u0275\u0275elementStart(37, "span", 18);
      \u0275\u0275text(38, "\u{1F4E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "\uBC1B\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "button", 20);
      \u0275\u0275listener("click", function DollarTokenMainComponent_Template_button_click_41_listener() {
        return ctx.openExchangeModal();
      });
      \u0275\u0275elementStart(42, "span", 18);
      \u0275\u0275text(43, "\u{1F504}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "\uD658\uC804");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 21)(47, "h2");
      \u0275\u0275text(48, "\uAC70\uB798 \uB0B4\uC5ED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 22);
      \u0275\u0275template(50, DollarTokenMainComponent_div_50_Template, 3, 0, "div", 23)(51, DollarTokenMainComponent_div_51_Template, 15, 27, "div", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(52, DollarTokenMainComponent_div_52_Template, 8, 0, "div", 25)(53, DollarTokenMainComponent_div_53_Template, 8, 1, "div", 25)(54, DollarTokenMainComponent_div_54_Template, 8, 0, "div", 25);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.username);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.walletAddress, " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 9, ctx.balance, "1.2-2"), " USDT");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\u2248 $", \u0275\u0275pipeBind2(29, 12, ctx.balance, "1.2-2"), " USD");
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.transactions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.transactions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSendModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReceiveModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showExchangeModal);
    }
  }, dependencies: [NgForOf, NgIf, DecimalPipe, DatePipe], styles: ["\n\n.dollar-token-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.dt-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 30px;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n.dt-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  color: #333;\n}\n.dt-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n.dt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.dt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.dt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]:hover {\n  background: #e84118;\n  transform: translateY(-2px);\n}\n.dt-main-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .dt-main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.wallet-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  color: #333;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-header[_ngcontent-%COMP%]   .wallet-address[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  cursor: pointer;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-header[_ngcontent-%COMP%]   .wallet-address[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-header[_ngcontent-%COMP%]   .wallet-address[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 0;\n  border-top: 2px solid #f0f0f0;\n  border-bottom: 2px solid #f0f0f0;\n  margin-bottom: 30px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%]   .balance-label[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #888;\n  font-size: 14px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%]   .balance-amount[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 48px;\n  font-weight: 700;\n  color: #667eea;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%]   .balance-usd[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #999;\n  font-size: 16px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%]   .btn-action.btn-send[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%]   .btn-action.btn-receive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #5f27cd,\n      #341f97);\n  color: white;\n}\n.wallet-card[_ngcontent-%COMP%]   .wallet-actions[_ngcontent-%COMP%]   .btn-action.btn-exchange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d2ff,\n      #3a47d5);\n  color: white;\n}\n.transactions-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.transactions-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: #333;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .no-transactions[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s ease;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item.pending[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  background: #f8f9fa;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon.send[_ngcontent-%COMP%] {\n  background: #ffe0e0;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-icon.receive[_ngcontent-%COMP%] {\n  background: #e0f7e0;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-info[_ngcontent-%COMP%]   .tx-type[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-weight: 600;\n  color: #333;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-info[_ngcontent-%COMP%]   .tx-date[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #999;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]   .amount.positive[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]   .amount.negative[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  padding: 3px 8px;\n  border-radius: 10px;\n  display: inline-block;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]   .status.completed[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.transactions-card[_ngcontent-%COMP%]   .transactions-list[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]   .status.pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 15px;\n  max-width: 500px;\n  width: 90%;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: #333;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #666;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: #5568d3;\n}\n/*# sourceMappingURL=dollar-token-main.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DollarTokenMainComponent, [{
    type: Component,
    args: [{ selector: "app-dollar-token-main", standalone: false, template: `<div class="dollar-token-container">
  <!-- \uD5E4\uB354 -->
  <header class="dt-header">
    <div class="header-left">
      <h1>\u{1F4B5} \uB2EC\uB7EC\uD1A0\uD070</h1>
      <p class="subtitle">\uB2EC\uB7EC \uC2A4\uD14C\uC774\uBE14 \uCF54\uC778 \uAC70\uB798 \uD50C\uB7AB\uD3FC</p>
    </div>
    <div class="header-right">
      <span class="user-name">{{ currentUser?.username }}</span>
      <button class="btn-logout" (click)="onLogout()">\uB85C\uADF8\uC544\uC6C3</button>
    </div>
  </header>

  <!-- \uBA54\uC778 \uCF58\uD150\uCE20 -->
  <div class="dt-main-content">
    <!-- \uC9C0\uAC11 \uC815\uBCF4 \uCE74\uB4DC -->
    <div class="wallet-card">
      <div class="wallet-header">
        <h2>\uB0B4 \uC9C0\uAC11</h2>
        <span class="wallet-address" (click)="copyWalletAddress()">
          {{ walletAddress }}
          <span class="copy-icon">\u{1F4CB}</span>
        </span>
      </div>
      <div class="wallet-balance">
        <p class="balance-label">\uD604\uC7AC \uC794\uC561</p>
        <h3 class="balance-amount">{{ balance | number:'1.2-2' }} USDT</h3>
        <p class="balance-usd">\u2248 \${{ balance | number:'1.2-2' }} USD</p>
      </div>
      <div class="wallet-actions">
        <button class="btn-action btn-send" (click)="openSendModal()">
          <span class="icon">\u{1F4E4}</span>
          <span>\uC1A1\uAE08</span>
        </button>
        <button class="btn-action btn-receive" (click)="openReceiveModal()">
          <span class="icon">\u{1F4E5}</span>
          <span>\uBC1B\uAE30</span>
        </button>
        <button class="btn-action btn-exchange" (click)="openExchangeModal()">
          <span class="icon">\u{1F504}</span>
          <span>\uD658\uC804</span>
        </button>
      </div>
    </div>

    <!-- \uAC70\uB798 \uB0B4\uC5ED -->
    <div class="transactions-card">
      <h2>\uAC70\uB798 \uB0B4\uC5ED</h2>
      <div class="transactions-list">
        <div *ngIf="transactions.length === 0" class="no-transactions">
          <p>\uAC70\uB798 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
        </div>
        <div *ngFor="let tx of transactions" class="transaction-item" [class.pending]="tx.status === 'pending'">
          <div class="tx-icon" [class.send]="tx.type === 'send'" [class.receive]="tx.type === 'receive'">
            {{ tx.type === 'send' ? '\u{1F4E4}' : tx.type === 'receive' ? '\u{1F4E5}' : '\u{1F504}' }}
          </div>
          <div class="tx-info">
            <p class="tx-type">{{ getTypeText(tx.type) }}</p>
            <p class="tx-date">{{ tx.date | date:'yyyy-MM-dd HH:mm' }}</p>
          </div>
          <div class="tx-amount" [class.positive]="tx.type === 'receive'" [class.negative]="tx.type === 'send'">
            <p class="amount">{{ tx.type === 'send' ? '-' : '+' }}{{ tx.amount | number:'1.2-2' }} {{ tx.currency }}</p>
            <p class="status" [class.completed]="tx.status === 'completed'" [class.pending]="tx.status === 'pending'">
              {{ getStatusText(tx.status) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uC1A1\uAE08 \uBAA8\uB2EC (\uAC04\uB2E8\uD55C \uAD6C\uD604) -->
  <div *ngIf="showSendModal" class="modal-backdrop" (click)="closeModal()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <h3>\uC1A1\uAE08</h3>
      <p>\uC1A1\uAE08 \uAE30\uB2A5\uC740 \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.</p>
      <button class="btn-close" (click)="closeModal()">\uB2EB\uAE30</button>
    </div>
  </div>

  <!-- \uBC1B\uAE30 \uBAA8\uB2EC -->
  <div *ngIf="showReceiveModal" class="modal-backdrop" (click)="closeModal()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <h3>\uBC1B\uAE30</h3>
      <p>\uB0B4 \uC9C0\uAC11 \uC8FC\uC18C: {{ walletAddress }}</p>
      <button class="btn-close" (click)="closeModal()">\uB2EB\uAE30</button>
    </div>
  </div>

  <!-- \uD658\uC804 \uBAA8\uB2EC -->
  <div *ngIf="showExchangeModal" class="modal-backdrop" (click)="closeModal()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <h3>\uD658\uC804</h3>
      <p>\uD658\uC804 \uAE30\uB2A5\uC740 \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.</p>
      <button class="btn-close" (click)="closeModal()">\uB2EB\uAE30</button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/dollar-token/components/dollar-token-main/dollar-token-main.component.scss */\n.dollar-token-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.dt-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 30px;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n.dt-header .header-left h1 {\n  margin: 0;\n  font-size: 28px;\n  color: #333;\n}\n.dt-header .header-left .subtitle {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n.dt-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.dt-header .header-right .user-name {\n  font-weight: 600;\n  color: #333;\n}\n.dt-header .header-right .btn-logout {\n  padding: 8px 20px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.dt-header .header-right .btn-logout:hover {\n  background: #e84118;\n  transform: translateY(-2px);\n}\n.dt-main-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .dt-main-content {\n    grid-template-columns: 1fr;\n  }\n}\n.wallet-card {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.wallet-card .wallet-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.wallet-card .wallet-header h2 {\n  margin: 0;\n  font-size: 24px;\n  color: #333;\n}\n.wallet-card .wallet-header .wallet-address {\n  font-size: 12px;\n  color: #666;\n  cursor: pointer;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.wallet-card .wallet-header .wallet-address:hover {\n  background: #e9ecef;\n}\n.wallet-card .wallet-header .wallet-address .copy-icon {\n  margin-left: 5px;\n}\n.wallet-card .wallet-balance {\n  text-align: center;\n  padding: 30px 0;\n  border-top: 2px solid #f0f0f0;\n  border-bottom: 2px solid #f0f0f0;\n  margin-bottom: 30px;\n}\n.wallet-card .wallet-balance .balance-label {\n  margin: 0 0 10px;\n  color: #888;\n  font-size: 14px;\n}\n.wallet-card .wallet-balance .balance-amount {\n  margin: 0;\n  font-size: 48px;\n  font-weight: 700;\n  color: #667eea;\n}\n.wallet-card .wallet-balance .balance-usd {\n  margin: 10px 0 0;\n  color: #999;\n  font-size: 16px;\n}\n.wallet-card .wallet-actions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n}\n.wallet-card .wallet-actions .btn-action {\n  padding: 15px 10px;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.wallet-card .wallet-actions .btn-action .icon {\n  font-size: 24px;\n}\n.wallet-card .wallet-actions .btn-action:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.wallet-card .wallet-actions .btn-action.btn-send {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.wallet-card .wallet-actions .btn-action.btn-receive {\n  background:\n    linear-gradient(\n      135deg,\n      #5f27cd,\n      #341f97);\n  color: white;\n}\n.wallet-card .wallet-actions .btn-action.btn-exchange {\n  background:\n    linear-gradient(\n      135deg,\n      #00d2ff,\n      #3a47d5);\n  color: white;\n}\n.transactions-card {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 20px;\n  padding: 30px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.transactions-card h2 {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: #333;\n}\n.transactions-card .transactions-list {\n  max-height: 500px;\n  overflow-y: auto;\n}\n.transactions-card .transactions-list .no-transactions {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n.transactions-card .transactions-list .transaction-item {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s ease;\n}\n.transactions-card .transactions-list .transaction-item:hover {\n  background: #f8f9fa;\n}\n.transactions-card .transactions-list .transaction-item.pending {\n  opacity: 0.6;\n}\n.transactions-card .transactions-list .transaction-item .tx-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  background: #f8f9fa;\n}\n.transactions-card .transactions-list .transaction-item .tx-icon.send {\n  background: #ffe0e0;\n}\n.transactions-card .transactions-list .transaction-item .tx-icon.receive {\n  background: #e0f7e0;\n}\n.transactions-card .transactions-list .transaction-item .tx-info {\n  flex: 1;\n}\n.transactions-card .transactions-list .transaction-item .tx-info .tx-type {\n  margin: 0 0 5px;\n  font-weight: 600;\n  color: #333;\n}\n.transactions-card .transactions-list .transaction-item .tx-info .tx-date {\n  margin: 0;\n  font-size: 12px;\n  color: #999;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount {\n  text-align: right;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount .amount {\n  margin: 0 0 5px;\n  font-size: 18px;\n  font-weight: 700;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount .amount.positive {\n  color: #27ae60;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount .amount.negative {\n  color: #e74c3c;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount .status {\n  margin: 0;\n  font-size: 12px;\n  padding: 3px 8px;\n  border-radius: 10px;\n  display: inline-block;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount .status.completed {\n  background: #d4edda;\n  color: #155724;\n}\n.transactions-card .transactions-list .transaction-item .tx-amount .status.pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.modal-backdrop .modal-content {\n  background: white;\n  padding: 30px;\n  border-radius: 15px;\n  max-width: 500px;\n  width: 90%;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n}\n.modal-backdrop .modal-content h3 {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: #333;\n}\n.modal-backdrop .modal-content p {\n  margin: 0 0 20px;\n  color: #666;\n}\n.modal-backdrop .modal-content .btn-close {\n  width: 100%;\n  padding: 12px;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.modal-backdrop .modal-content .btn-close:hover {\n  background: #5568d3;\n}\n/*# sourceMappingURL=dollar-token-main.component.css.map */\n"] }]
  }], () => [{ type: DollarTokenAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DollarTokenMainComponent, { className: "DollarTokenMainComponent", filePath: "src/app/modules/dollar-token/components/dollar-token-main/dollar-token-main.component.ts", lineNumber: 22 });
})();

// src/app/modules/dollar-token/components/dollar-token-login/dollar-token-login.component.ts
var _c0 = ["loginComponent"];
var DollarTokenLoginComponent = class _DollarTokenLoginComponent {
  authService;
  router;
  route;
  loginComponent;
  loginConfig = {
    title: "\u{1F4B5} \uB2EC\uB7EC\uD1A0\uD070",
    subtitle: "\uB2EC\uB7EC \uC2A4\uD14C\uC774\uBE14 \uCF54\uC778\uC73C\uB85C \uC548\uC804\uD558\uAC8C \uAC70\uB798\uD558\uC138\uC694",
    moduleName: "dollar-token",
    showSocialLogin: false,
    showRegisterLink: false
  };
  returnUrl = "/dollar-token";
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
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dollar-token";
  }
  onLogin(credentials) {
    alert("\u{1F525} NEW CODE: onLogin \uD638\uCD9C! username=" + credentials.username);
    console.log("[DollarTokenLogin] onLogin \uD638\uCD9C\uB428");
    console.log("[DollarTokenLogin] credentials:", credentials);
    console.log("[DollarTokenLogin] authService:", this.authService);
    this.authService.login(credentials.username, credentials.password).subscribe({
      next: (success) => {
        console.log("[DollarTokenLogin] subscribe next - success:", success);
        if (success) {
          console.log("[DollarTokenLogin] \uB85C\uADF8\uC778 \uC131\uACF5 - \uC774\uB3D9:", this.returnUrl);
          this.router.navigate([this.returnUrl]);
        } else {
          console.warn("[DollarTokenLogin] \uB85C\uADF8\uC778 \uC2E4\uD328 - success is false");
          if (this.loginComponent) {
            this.loginComponent.setError("\uC0AC\uC6A9\uC790 \uC774\uB984 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          }
        }
      },
      error: (error) => {
        console.warn("[DollarTokenLogin] subscribe error:", error);
        if (this.loginComponent) {
          this.loginComponent.setError("\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  static \u0275fac = function DollarTokenLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DollarTokenLoginComponent)(\u0275\u0275directiveInject(DollarTokenAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DollarTokenLoginComponent, selectors: [["app-dollar-token-login"]], viewQuery: function DollarTokenLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function DollarTokenLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function DollarTokenLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DollarTokenLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-dollar-token-login",
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>',
      standalone: false
    }]
  }], () => [{ type: DollarTokenAuthService }, { type: Router }, { type: ActivatedRoute }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DollarTokenLoginComponent, { className: "DollarTokenLoginComponent", filePath: "src/app/modules/dollar-token/components/dollar-token-login/dollar-token-login.component.ts", lineNumber: 11 });
})();

// src/app/modules/dollar-token/guards/dollar-token-auth.guard.ts
var DollarTokenAuthGuard = class _DollarTokenAuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    console.log("[DollarTokenAuthGuard] \uAD8C\uD55C \uD655\uC778 \uC2DC\uC791");
    if (this.authService.isAuthenticated()) {
      console.log("[DollarTokenAuthGuard] \uC778\uC99D \uC131\uACF5");
      return true;
    }
    console.log("[DollarTokenAuthGuard] \uC778\uC99D \uC2E4\uD328 - \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9");
    this.router.navigate(["/dollar-token/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
  static \u0275fac = function DollarTokenAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DollarTokenAuthGuard)(\u0275\u0275inject(DollarTokenAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DollarTokenAuthGuard, factory: _DollarTokenAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DollarTokenAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DollarTokenAuthService }, { type: Router }], null);
})();

// src/app/modules/dollar-token/dollar-token-routing.module.ts
var routes = [
  {
    path: "login",
    component: DollarTokenLoginComponent
  },
  {
    path: "",
    component: DollarTokenMainComponent,
    canActivate: [DollarTokenAuthGuard]
  }
];
var DollarTokenRoutingModule = class _DollarTokenRoutingModule {
  static \u0275fac = function DollarTokenRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DollarTokenRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DollarTokenRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DollarTokenRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/dollar-token/dollar-token.module.ts
var DollarTokenModule = class _DollarTokenModule {
  static \u0275fac = function DollarTokenModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DollarTokenModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DollarTokenModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    DollarTokenAuthService,
    DollarTokenAuthGuard
  ], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    DollarTokenRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DollarTokenModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DollarTokenMainComponent,
        DollarTokenLoginComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        DollarTokenRoutingModule
      ],
      providers: [
        DollarTokenAuthService,
        DollarTokenAuthGuard
      ]
    }]
  }], null, null);
})();
export {
  DollarTokenModule
};
//# sourceMappingURL=chunk-RFGHJTSW.js.map
