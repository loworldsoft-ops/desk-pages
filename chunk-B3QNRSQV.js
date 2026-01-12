import {
  confirmAsync
} from "./chunk-3K7JROJF.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import "./chunk-IEXL5CIB.js";
import "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import "./chunk-EWZCM5ON.js";
import "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  Injectable,
  NgForOf,
  NgModule,
  ViewChild,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
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
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/modules/community/services/community-auth.service.ts
var CommunityAuthService = class _CommunityAuthService {
  router;
  STORAGE_KEY = "community_user";
  TOKEN_KEY = "community_auth_token";
  // 현재 사용자 상태를 관찰 가능하게 만듦
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(router) {
    this.router = router;
    this.loadUserFromStorage();
  }
  loadUserFromStorage() {
    const user = this.getCurrentUser();
    this.currentUserSubject.next(user);
  }
  login(username, password) {
    console.log("[CommunityAuth] \uB85C\uADF8\uC778 \uC2DC\uB3C4:", username);
    return this.mockLogin(username, password);
  }
  mockLogin(username, password) {
    const mockUsers = {
      "admin": {
        userId: "comm_admin",
        username: "admin",
        email: "admin@community.com",
        nickname: "\uAD00\uB9AC\uC790",
        avatar: "\u{1F451}",
        level: 99,
        points: 99999,
        posts: 500,
        token: "mock_community_admin"
      },
      "user1": {
        userId: "comm_user1",
        username: "user1",
        email: "user1@community.com",
        nickname: "\uD65C\uB3D9\uAC00",
        avatar: "\u{1F31F}",
        level: 15,
        points: 3500,
        posts: 87,
        token: "mock_community_user1"
      }
    };
    if (mockUsers[username] && password === "1017") {
      const user = mockUsers[username];
      this.setUser(user);
      this.setToken(user.token);
      this.currentUserSubject.next(user);
      console.log("[CommunityAuth] \uB85C\uADF8\uC778 \uC131\uACF5:", user.nickname);
      return of(true);
    }
    console.log("[CommunityAuth] \uB85C\uADF8\uC778 \uC2E4\uD328");
    return of(false);
  }
  logout() {
    console.log("[CommunityAuth] \uB85C\uADF8\uC544\uC6C3 \uC2DC\uC791");
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
      this.currentUserSubject.next(null);
      console.log("[CommunityAuth] \uB85C\uADF8\uC544\uC6C3 \uC644\uB8CC, \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9");
    } catch (error) {
      console.error("[CommunityAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/community/login"]).then((success) => {
        if (success) {
          console.log("[CommunityAuth] \uB85C\uADF8\uC778 \uD398\uC774\uC9C0 \uB124\uBE44\uAC8C\uC774\uC158 \uC131\uACF5");
        } else {
          console.error("[CommunityAuth] \uB85C\uADF8\uC778 \uD398\uC774\uC9C0 \uB124\uBE44\uAC8C\uC774\uC158 \uC2E4\uD328, \uAC15\uC81C \uC774\uB3D9 \uC2DC\uB3C4");
          window.location.hash = "#/community/login";
        }
      }).catch((err) => {
        console.error("[CommunityAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/community/login";
      });
    }
  }
  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token !== null && token.trim() !== "";
  }
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
  setUser(user) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  static \u0275fac = function CommunityAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityAuthService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommunityAuthService, factory: _CommunityAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/modules/community/components/community-main/community-main.component.ts
function CommunityMainComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function CommunityMainComponent_div_24_Template_div_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCategoryClick(category_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.count);
  }
}
function CommunityMainComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r4.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r4.time);
  }
}
function CommunityMainComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function CommunityMainComponent_div_39_Template_div_click_0_listener() {
      const post_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPostClick(post_r6));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5, "HOT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 54)(11, "div", 55)(12, "span", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 58)(17, "span", 59);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 59);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 59);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 60);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryName(post_r6.category));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r6.content);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r6.avatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r6.author);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r6.likes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r6.comments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F441}\uFE0F ", post_r6.views);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(post_r6.date));
  }
}
function CommunityMainComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function CommunityMainComponent_div_44_Template_div_click_0_listener() {
      const post_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPostClick(post_r8));
    });
    \u0275\u0275elementStart(1, "div", 62)(2, "span", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "h4", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 66)(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 68);
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 69);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 68);
    \u0275\u0275text(15, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 70);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 71)(19, "span", 72);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 72);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r8.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r8.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r8.author);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(post_r8.date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryName(post_r8.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r8.likes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r8.comments);
  }
}
var CommunityMainComponent = class _CommunityMainComponent {
  authService;
  router;
  currentUser = null;
  userSubscription;
  // 인기 게시글
  hotPosts = [];
  // 최신 게시글
  recentPosts = [];
  // 실시간 채팅
  chatMessages = [];
  newMessage = "";
  // 카테고리
  categories = [
    { id: "all", name: "\uC804\uCCB4", icon: "\u{1F4CB}", count: 256 },
    { id: "free", name: "\uC790\uC720\uAC8C\uC2DC\uD310", icon: "\u{1F4AC}", count: 128 },
    { id: "qna", name: "\uC9C8\uBB38\uB2F5\uBCC0", icon: "\u2753", count: 89 },
    { id: "tips", name: "\uD301&\uB178\uD558\uC6B0", icon: "\u{1F4A1}", count: 45 },
    { id: "event", name: "\uC774\uBCA4\uD2B8", icon: "\u{1F389}", count: 12 }
  ];
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.loadUserData();
    this.loadHotPosts();
    this.loadRecentPosts();
    this.loadChatMessages();
  }
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  loadUserData() {
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      console.log("[CommunityMain] \uC0AC\uC6A9\uC790 \uC0C1\uD0DC \uC5C5\uB370\uC774\uD2B8:", user);
    });
  }
  loadHotPosts() {
    this.hotPosts = [
      {
        id: "1",
        title: "\u{1F525} Angular \uCD5C\uC2E0 \uBC84\uC804 \uC5C5\uB370\uC774\uD2B8 \uCD1D\uC815\uB9AC",
        content: "Angular 18\uC758 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uB4E4\uC744 \uC790\uC138\uD788 \uC54C\uC544\uBD05\uC2DC\uB2E4...",
        author: "\uAC1C\uBC1C\uC655",
        avatar: "\u{1F468}\u200D\u{1F4BB}",
        likes: 245,
        comments: 67,
        views: 1520,
        date: /* @__PURE__ */ new Date("2025-10-22"),
        category: "tips",
        isHot: true
      },
      {
        id: "2",
        title: "\uCD08\uBCF4\uC790\uB97C \uC704\uD55C TypeScript \uC644\uBCBD \uAC00\uC774\uB4DC",
        content: "TypeScript\uC758 \uAE30\uCD08\uBD80\uD130 \uACE0\uAE09 \uD65C\uC6A9\uAE4C\uC9C0...",
        author: "\uD0C0\uC785\uB9C8\uC2A4\uD130",
        avatar: "\u{1F3AF}",
        likes: 189,
        comments: 43,
        views: 980,
        date: /* @__PURE__ */ new Date("2025-10-21"),
        category: "tips",
        isHot: true
      },
      {
        id: "3",
        title: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uBCA4\uD2B8 \uB2F9\uCCA8\uC790 \uBC1C\uD45C!",
        content: "10\uC6D4 \uC774\uBCA4\uD2B8 \uB2F9\uCCA8\uC790\uB97C \uBC1C\uD45C\uD569\uB2C8\uB2E4...",
        author: "\uC6B4\uC601\uC790",
        avatar: "\u{1F451}",
        likes: 156,
        comments: 89,
        views: 2340,
        date: /* @__PURE__ */ new Date("2025-10-20"),
        category: "event",
        isHot: true
      }
    ];
  }
  loadRecentPosts() {
    this.recentPosts = [
      {
        id: "4",
        title: "RxJS Observable \uD328\uD134 \uC9C8\uBB38\uC788\uC2B5\uB2C8\uB2E4",
        content: "Observable\uC744 \uC0AC\uC6A9\uD558\uB2E4\uAC00 \uB9C9\uD614\uB294\uB370...",
        author: "\uCD08\uBCF4\uAC1C\uBC1C\uC790",
        avatar: "\u{1F331}",
        likes: 12,
        comments: 5,
        views: 67,
        date: /* @__PURE__ */ new Date("2025-10-22T11:30:00"),
        category: "qna",
        isHot: false
      },
      {
        id: "5",
        title: "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \uBAA8\uC784 \uC548\uB0B4",
        content: "\uB2E4\uC74C\uC8FC \uD1A0\uC694\uC77C\uC5D0 \uC2A4\uD130\uB514 \uBAA8\uC784\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4...",
        author: "\uBAA8\uC784\uC7A5",
        avatar: "\u{1F465}",
        likes: 34,
        comments: 18,
        views: 234,
        date: /* @__PURE__ */ new Date("2025-10-22T10:15:00"),
        category: "free",
        isHot: false
      },
      {
        id: "6",
        title: "CSS Grid vs Flexbox \uBB50\uAC00 \uB354 \uC88B\uC744\uAE4C\uC694?",
        content: "\uB808\uC774\uC544\uC6C3 \uC791\uC5C5\uD560 \uB54C \uD56D\uC0C1 \uACE0\uBBFC\uC774...",
        author: "\uB514\uC790\uC774\uB108",
        avatar: "\u{1F3A8}",
        likes: 23,
        comments: 12,
        views: 156,
        date: /* @__PURE__ */ new Date("2025-10-22T09:45:00"),
        category: "qna",
        isHot: false
      }
    ];
  }
  loadChatMessages() {
    this.chatMessages = [
      { user: "\uAC1C\uBC1C\uC655", message: "\uC548\uB155\uD558\uC138\uC694~", time: "11:30" },
      { user: "\uD0C0\uC785\uB9C8\uC2A4\uD130", message: "\uC624\uB298\uB3C4 \uC5F4\uC2EC\uD788!", time: "11:31" },
      { user: "\uCD08\uBCF4\uAC1C\uBC1C\uC790", message: "\uC9C8\uBB38 \uC880 \uD574\uB3C4 \uB420\uAE4C\uC694?", time: "11:32" },
      { user: "\uC6B4\uC601\uC790", message: "\uD658\uC601\uD569\uB2C8\uB2E4!", time: "11:33" }
    ];
  }
  onLogout() {
    return __async(this, null, function* () {
      const confirmed = yield confirmAsync("\uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?");
      if (confirmed) {
        console.log("[CommunityMain] \uB85C\uADF8\uC544\uC6C3 \uC694\uCCAD");
        this.authService.logout();
      } else {
        console.log("[CommunityMain] \uB85C\uADF8\uC544\uC6C3 \uCDE8\uC18C");
      }
    });
  }
  onPostClick(post) {
    console.log("\uAC8C\uC2DC\uAE00 \uD074\uB9AD:", post.title);
  }
  onCategoryClick(categoryId) {
    console.log("\uCE74\uD14C\uACE0\uB9AC \uD074\uB9AD:", categoryId);
  }
  sendChatMessage() {
    if (this.newMessage.trim()) {
      const now = /* @__PURE__ */ new Date();
      this.chatMessages.push({
        user: this.currentUser?.nickname || "\uB098",
        message: this.newMessage,
        time: `${now.getHours()}:${now.getMinutes()}`
      });
      this.newMessage = "";
      setTimeout(() => {
        const chatBox = document.querySelector(".chat-messages");
        if (chatBox) {
          chatBox.scrollTop = chatBox.scrollHeight;
        }
      }, 100);
    }
  }
  getCategoryName(categoryId) {
    const category = this.categories.find((c) => c.id === categoryId);
    return category ? category.name : categoryId;
  }
  formatDate(date) {
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1e3 * 60 * 60));
    if (hours < 1) {
      const minutes = Math.floor(diff / (1e3 * 60));
      return `${minutes}\uBD84 \uC804`;
    } else if (hours < 24) {
      return `${hours}\uC2DC\uAC04 \uC804`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days}\uC77C \uC804`;
    }
  }
  static \u0275fac = function CommunityMainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityMainComponent)(\u0275\u0275directiveInject(CommunityAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityMainComponent, selectors: [["app-community-main"]], standalone: false, decls: 77, vars: 13, consts: [[1, "community-container"], [1, "community-header"], [1, "header-left"], [1, "subtitle"], [1, "header-right"], [1, "user-info"], [1, "avatar"], [1, "user-details"], [1, "nickname"], [1, "level"], [1, "btn-logout", 3, "click"], [1, "community-content"], [1, "left-sidebar"], [1, "categories-card"], [1, "category-list"], ["class", "category-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "chat-card"], [1, "chat-messages"], ["class", "chat-msg", 4, "ngFor", "ngForOf"], [1, "chat-input"], ["type", "text", "placeholder", "\uBA54\uC2DC\uC9C0 \uC785\uB825...", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "click"], [1, "main-content"], [1, "hot-posts-section"], [1, "posts-grid"], ["class", "post-card hot", 3, "click", 4, "ngFor", "ngForOf"], [1, "recent-posts-section"], [1, "posts-list"], ["class", "post-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "right-sidebar"], [1, "my-info-card"], [1, "profile-info"], [1, "profile-avatar-large"], [1, "profile-level"], [1, "profile-stats"], [1, "stat-box"], [1, "stat-value"], [1, "stat-label"], [1, "notice-card"], [1, "notice-list"], [1, "category-item", 3, "click"], [1, "cat-icon"], [1, "cat-name"], [1, "cat-count"], [1, "chat-msg"], [1, "msg-user"], [1, "msg-text"], [1, "msg-time"], [1, "post-card", "hot", 3, "click"], [1, "post-header"], [1, "post-category"], [1, "hot-badge"], [1, "post-title"], [1, "post-content"], [1, "post-footer"], [1, "post-author"], [1, "author-avatar"], [1, "author-name"], [1, "post-stats"], [1, "stat"], [1, "post-date"], [1, "post-item", 3, "click"], [1, "post-item-left"], [1, "post-avatar"], [1, "post-info"], [1, "post-item-title"], [1, "post-meta"], [1, "meta-author"], [1, "meta-separator"], [1, "meta-date"], [1, "meta-category"], [1, "post-item-stats"], [1, "stat-item"]], template: function CommunityMainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u{1F465} \uCEE4\uBBA4\uB2C8\uD2F0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "\uD568\uAED8 \uC18C\uD1B5\uD558\uACE0 \uC131\uC7A5\uD558\uB294 \uACF5\uAC04");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function CommunityMainComponent_Template_button_click_16_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275text(17, "\uB85C\uADF8\uC544\uC6C3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 11)(19, "aside", 12)(20, "div", 13)(21, "h3");
      \u0275\u0275text(22, "\u{1F4C2} \uCE74\uD14C\uACE0\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275template(24, CommunityMainComponent_div_24_Template, 7, 3, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "h3");
      \u0275\u0275text(27, "\u{1F4AC} \uC2E4\uC2DC\uAC04 \uCC44\uD305");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275template(29, CommunityMainComponent_div_29_Template, 7, 3, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 19)(31, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function CommunityMainComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newMessage, $event) || (ctx.newMessage = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function CommunityMainComponent_Template_input_keyup_enter_31_listener() {
        return ctx.sendChatMessage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 21);
      \u0275\u0275listener("click", function CommunityMainComponent_Template_button_click_32_listener() {
        return ctx.sendChatMessage();
      });
      \u0275\u0275text(33, "\uC804\uC1A1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "main", 22)(35, "section", 23)(36, "h2");
      \u0275\u0275text(37, "\u{1F525} \uC778\uAE30 \uAC8C\uC2DC\uAE00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 24);
      \u0275\u0275template(39, CommunityMainComponent_div_39_Template, 25, 9, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "section", 26)(41, "h2");
      \u0275\u0275text(42, "\u{1F4DD} \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 27);
      \u0275\u0275template(44, CommunityMainComponent_div_44_Template, 23, 7, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "aside", 29)(46, "div", 30)(47, "h3");
      \u0275\u0275text(48, "\uB0B4 \uD504\uB85C\uD544");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 31)(50, "div", 32);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h4");
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p", 33);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 34)(57, "div", 35)(58, "div", 36);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 37);
      \u0275\u0275text(61, "\uD3EC\uC778\uD2B8");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 35)(63, "div", 36);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 37);
      \u0275\u0275text(66, "\uC791\uC131\uAE00");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 38)(68, "h3");
      \u0275\u0275text(69, "\u{1F4E2} \uACF5\uC9C0\uC0AC\uD56D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 39)(71, "li");
      \u0275\u0275text(72, "\uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uC6A9 \uADDC\uCE59 \uC548\uB0B4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "li");
      \u0275\u0275text(74, "10\uC6D4 \uC774\uBCA4\uD2B8 \uC9C4\uD589 \uC911!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "li");
      \u0275\u0275text(76, "\uC0C8\uB85C\uC6B4 \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.avatar);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.nickname);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Lv.", ctx.currentUser == null ? null : ctx.currentUser.level);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.chatMessages);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.newMessage);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.hotPosts);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.recentPosts);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.avatar);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.nickname);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Level ", ctx.currentUser == null ? null : ctx.currentUser.level);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.points);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.posts);
    }
  }, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.community-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  padding: 20px;\n}\n.community-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 30px;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n.community-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  color: #333;\n}\n.community-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #f5576c;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.community-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]:hover {\n  background: #e84118;\n  transform: translateY(-2px);\n}\n.community-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr 300px;\n  gap: 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n@media (max-width: 1400px) {\n  .community-content[_ngcontent-%COMP%] {\n    grid-template-columns: 250px 1fr;\n  }\n  .community-content[_ngcontent-%COMP%]   .right-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1024px) {\n  .community-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .community-content[_ngcontent-%COMP%]   .left-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.categories-card[_ngcontent-%COMP%], \n.chat-card[_ngcontent-%COMP%], \n.my-info-card[_ngcontent-%COMP%], \n.notice-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.categories-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.chat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.my-info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.notice-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-size: 18px;\n  color: #333;\n}\n.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 8px;\n}\n.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .cat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.category-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .cat-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n  padding: 10px;\n  background: #f8f9fa;\n  border-radius: 10px;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-msg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  padding: 8px;\n  background: white;\n  border-radius: 8px;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-msg[_ngcontent-%COMP%]   .msg-user[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  color: #f5576c;\n  margin-bottom: 4px;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-msg[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-messages[_ngcontent-%COMP%]   .chat-msg[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #999;\n  margin-top: 4px;\n  align-self: flex-end;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #f5576c;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #f5576c;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.chat-card[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e04555;\n}\n.main-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.post-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.post-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.post-card.hot[_ngcontent-%COMP%] {\n  border: 2px solid #ff6b6b;\n}\n.post-card[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.post-card[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .post-category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  background: #f8f9fa;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.post-card[_ngcontent-%COMP%]   .post-header[_ngcontent-%COMP%]   .hot-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b,\n      #ff4757);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-weight: 600;\n}\n.post-card[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 18px;\n  color: #333;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.post-card[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  color: #666;\n  font-size: 14px;\n  line-height: 1.6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.post-card[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 15px;\n  border-top: 1px solid #f0f0f0;\n}\n.post-card[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .post-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.post-card[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .post-author[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.post-card[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .post-author[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n}\n.post-card[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .post-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.post-card[_ngcontent-%COMP%]   .post-footer[_ngcontent-%COMP%]   .post-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n.post-card[_ngcontent-%COMP%]   .post-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  margin-top: 8px;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex: 1;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%]   .post-avatar[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]   .post-item-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 16px;\n  color: #333;\n  font-weight: 500;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 12px;\n  color: #999;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .meta-author[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-left[_ngcontent-%COMP%]   .post-info[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]   .meta-separator[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.posts-list[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]   .post-item-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-avatar-large[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 10px;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 20px;\n  color: #333;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-level[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-size: 14px;\n  color: #f5576c;\n  font-weight: 600;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 15px;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px;\n  border-radius: 10px;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #f5576c;\n}\n.my-info-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%]   .stat-box[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n  margin-top: 5px;\n}\n.notice-card[_ngcontent-%COMP%]   .notice-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.notice-card[_ngcontent-%COMP%]   .notice-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.notice-card[_ngcontent-%COMP%]   .notice-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notice-card[_ngcontent-%COMP%]   .notice-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #f5576c;\n}\n/*# sourceMappingURL=community-main.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityMainComponent, [{
    type: Component,
    args: [{ selector: "app-community-main", standalone: false, template: '<div class="community-container">\n  <!-- \uD5E4\uB354 -->\n  <header class="community-header">\n    <div class="header-left">\n      <h1>\u{1F465} \uCEE4\uBBA4\uB2C8\uD2F0</h1>\n      <p class="subtitle">\uD568\uAED8 \uC18C\uD1B5\uD558\uACE0 \uC131\uC7A5\uD558\uB294 \uACF5\uAC04</p>\n    </div>\n    <div class="header-right">\n      <div class="user-info">\n        <span class="avatar">{{ currentUser?.avatar }}</span>\n        <div class="user-details">\n          <span class="nickname">{{ currentUser?.nickname }}</span>\n          <span class="level">Lv.{{ currentUser?.level }}</span>\n        </div>\n      </div>\n      <button class="btn-logout" (click)="onLogout()">\uB85C\uADF8\uC544\uC6C3</button>\n    </div>\n  </header>\n\n  <!-- \uBA54\uC778 \uCF58\uD150\uCE20 -->\n  <div class="community-content">\n    <!-- \uC67C\uCABD: \uCE74\uD14C\uACE0\uB9AC & \uCC44\uD305 -->\n    <aside class="left-sidebar">\n      <!-- \uCE74\uD14C\uACE0\uB9AC -->\n      <div class="categories-card">\n        <h3>\u{1F4C2} \uCE74\uD14C\uACE0\uB9AC</h3>\n        <div class="category-list">\n          <div *ngFor="let category of categories" \n               class="category-item"\n               (click)="onCategoryClick(category.id)">\n            <span class="cat-icon">{{ category.icon }}</span>\n            <span class="cat-name">{{ category.name }}</span>\n            <span class="cat-count">{{ category.count }}</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- \uC2E4\uC2DC\uAC04 \uCC44\uD305 -->\n      <div class="chat-card">\n        <h3>\u{1F4AC} \uC2E4\uC2DC\uAC04 \uCC44\uD305</h3>\n        <div class="chat-messages">\n          <div *ngFor="let msg of chatMessages" class="chat-msg">\n            <span class="msg-user">{{ msg.user }}</span>\n            <span class="msg-text">{{ msg.message }}</span>\n            <span class="msg-time">{{ msg.time }}</span>\n          </div>\n        </div>\n        <div class="chat-input">\n          <input type="text" \n                 [(ngModel)]="newMessage"\n                 (keyup.enter)="sendChatMessage()"\n                 placeholder="\uBA54\uC2DC\uC9C0 \uC785\uB825...">\n          <button (click)="sendChatMessage()">\uC804\uC1A1</button>\n        </div>\n      </div>\n    </aside>\n\n    <!-- \uC911\uC559: \uAC8C\uC2DC\uAE00 -->\n    <main class="main-content">\n      <!-- \uC778\uAE30 \uAC8C\uC2DC\uAE00 -->\n      <section class="hot-posts-section">\n        <h2>\u{1F525} \uC778\uAE30 \uAC8C\uC2DC\uAE00</h2>\n        <div class="posts-grid">\n          <div *ngFor="let post of hotPosts" \n               class="post-card hot"\n               (click)="onPostClick(post)">\n            <div class="post-header">\n              <span class="post-category">{{ getCategoryName(post.category) }}</span>\n              <span class="hot-badge">HOT</span>\n            </div>\n            <h3 class="post-title">{{ post.title }}</h3>\n            <p class="post-content">{{ post.content }}</p>\n            <div class="post-footer">\n              <div class="post-author">\n                <span class="author-avatar">{{ post.avatar }}</span>\n                <span class="author-name">{{ post.author }}</span>\n              </div>\n              <div class="post-stats">\n                <span class="stat">\u2764\uFE0F {{ post.likes }}</span>\n                <span class="stat">\u{1F4AC} {{ post.comments }}</span>\n                <span class="stat">\u{1F441}\uFE0F {{ post.views }}</span>\n              </div>\n            </div>\n            <div class="post-date">{{ formatDate(post.date) }}</div>\n          </div>\n        </div>\n      </section>\n\n      <!-- \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00 -->\n      <section class="recent-posts-section">\n        <h2>\u{1F4DD} \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00</h2>\n        <div class="posts-list">\n          <div *ngFor="let post of recentPosts" \n               class="post-item"\n               (click)="onPostClick(post)">\n            <div class="post-item-left">\n              <span class="post-avatar">{{ post.avatar }}</span>\n              <div class="post-info">\n                <h4 class="post-item-title">{{ post.title }}</h4>\n                <div class="post-meta">\n                  <span class="meta-author">{{ post.author }}</span>\n                  <span class="meta-separator">\u2022</span>\n                  <span class="meta-date">{{ formatDate(post.date) }}</span>\n                  <span class="meta-separator">\u2022</span>\n                  <span class="meta-category">{{ getCategoryName(post.category) }}</span>\n                </div>\n              </div>\n            </div>\n            <div class="post-item-stats">\n              <span class="stat-item">\u2764\uFE0F {{ post.likes }}</span>\n              <span class="stat-item">\u{1F4AC} {{ post.comments }}</span>\n            </div>\n          </div>\n        </div>\n      </section>\n    </main>\n\n    <!-- \uC624\uB978\uCABD: \uC0AC\uC774\uB4DC\uBC14 -->\n    <aside class="right-sidebar">\n      <!-- \uB0B4 \uC815\uBCF4 -->\n      <div class="my-info-card">\n        <h3>\uB0B4 \uD504\uB85C\uD544</h3>\n        <div class="profile-info">\n          <div class="profile-avatar-large">{{ currentUser?.avatar }}</div>\n          <h4>{{ currentUser?.nickname }}</h4>\n          <p class="profile-level">Level {{ currentUser?.level }}</p>\n          <div class="profile-stats">\n            <div class="stat-box">\n              <div class="stat-value">{{ currentUser?.points }}</div>\n              <div class="stat-label">\uD3EC\uC778\uD2B8</div>\n            </div>\n            <div class="stat-box">\n              <div class="stat-value">{{ currentUser?.posts }}</div>\n              <div class="stat-label">\uC791\uC131\uAE00</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- \uACF5\uC9C0\uC0AC\uD56D -->\n      <div class="notice-card">\n        <h3>\u{1F4E2} \uACF5\uC9C0\uC0AC\uD56D</h3>\n        <ul class="notice-list">\n          <li>\uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uC6A9 \uADDC\uCE59 \uC548\uB0B4</li>\n          <li>10\uC6D4 \uC774\uBCA4\uD2B8 \uC9C4\uD589 \uC911!</li>\n          <li>\uC0C8\uB85C\uC6B4 \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00</li>\n        </ul>\n      </div>\n    </aside>\n  </div>\n</div>\n', styles: ["/* src/app/modules/community/components/community-main/community-main.component.scss */\n.community-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  padding: 20px;\n}\n.community-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 30px;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n}\n.community-header .header-left h1 {\n  margin: 0;\n  font-size: 28px;\n  color: #333;\n}\n.community-header .header-left .subtitle {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n.community-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.community-header .header-right .user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.community-header .header-right .user-info .avatar {\n  font-size: 32px;\n}\n.community-header .header-right .user-info .user-details {\n  display: flex;\n  flex-direction: column;\n}\n.community-header .header-right .user-info .user-details .nickname {\n  font-weight: 600;\n  color: #333;\n}\n.community-header .header-right .user-info .user-details .level {\n  font-size: 12px;\n  color: #f5576c;\n}\n.community-header .header-right .btn-logout {\n  padding: 8px 20px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.community-header .header-right .btn-logout:hover {\n  background: #e84118;\n  transform: translateY(-2px);\n}\n.community-content {\n  display: grid;\n  grid-template-columns: 280px 1fr 300px;\n  gap: 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n@media (max-width: 1400px) {\n  .community-content {\n    grid-template-columns: 250px 1fr;\n  }\n  .community-content .right-sidebar {\n    display: none;\n  }\n}\n@media (max-width: 1024px) {\n  .community-content {\n    grid-template-columns: 1fr;\n  }\n  .community-content .left-sidebar {\n    display: none;\n  }\n}\n.categories-card,\n.chat-card,\n.my-info-card,\n.notice-card {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  padding: 20px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.categories-card h3,\n.chat-card h3,\n.my-info-card h3,\n.notice-card h3 {\n  margin: 0 0 15px;\n  font-size: 18px;\n  color: #333;\n}\n.category-list .category-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 8px;\n}\n.category-list .category-item:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n.category-list .category-item .cat-icon {\n  font-size: 20px;\n}\n.category-list .category-item .cat-name {\n  flex: 1;\n  font-weight: 500;\n}\n.category-list .category-item .cat-count {\n  font-size: 12px;\n  color: #999;\n}\n.chat-card .chat-messages {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n  padding: 10px;\n  background: #f8f9fa;\n  border-radius: 10px;\n}\n.chat-card .chat-messages .chat-msg {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  padding: 8px;\n  background: white;\n  border-radius: 8px;\n}\n.chat-card .chat-messages .chat-msg .msg-user {\n  font-weight: 600;\n  font-size: 12px;\n  color: #f5576c;\n  margin-bottom: 4px;\n}\n.chat-card .chat-messages .chat-msg .msg-text {\n  color: #333;\n  font-size: 14px;\n}\n.chat-card .chat-messages .chat-msg .msg-time {\n  font-size: 10px;\n  color: #999;\n  margin-top: 4px;\n  align-self: flex-end;\n}\n.chat-card .chat-input {\n  display: flex;\n  gap: 10px;\n}\n.chat-card .chat-input input {\n  flex: 1;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chat-card .chat-input input:focus {\n  outline: none;\n  border-color: #f5576c;\n}\n.chat-card .chat-input button {\n  padding: 10px 20px;\n  background: #f5576c;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.chat-card .chat-input button:hover {\n  background: #e04555;\n}\n.main-content h2 {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.posts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.post-card {\n  background: white;\n  border-radius: 15px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.post-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.post-card.hot {\n  border: 2px solid #ff6b6b;\n}\n.post-card .post-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.post-card .post-header .post-category {\n  font-size: 12px;\n  color: #666;\n  background: #f8f9fa;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.post-card .post-header .hot-badge {\n  font-size: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b,\n      #ff4757);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-weight: 600;\n}\n.post-card .post-title {\n  margin: 0 0 10px;\n  font-size: 18px;\n  color: #333;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.post-card .post-content {\n  margin: 0 0 15px;\n  color: #666;\n  font-size: 14px;\n  line-height: 1.6;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.post-card .post-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 15px;\n  border-top: 1px solid #f0f0f0;\n}\n.post-card .post-footer .post-author {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.post-card .post-footer .post-author .author-avatar {\n  font-size: 20px;\n}\n.post-card .post-footer .post-author .author-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n}\n.post-card .post-footer .post-stats {\n  display: flex;\n  gap: 12px;\n}\n.post-card .post-footer .post-stats .stat {\n  font-size: 12px;\n  color: #999;\n}\n.post-card .post-date {\n  font-size: 11px;\n  color: #999;\n  margin-top: 8px;\n}\n.posts-list .post-item {\n  background: white;\n  border-radius: 10px;\n  padding: 15px 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.posts-list .post-item:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n.posts-list .post-item .post-item-left {\n  display: flex;\n  gap: 12px;\n  flex: 1;\n}\n.posts-list .post-item .post-item-left .post-avatar {\n  font-size: 24px;\n}\n.posts-list .post-item .post-item-left .post-info {\n  flex: 1;\n}\n.posts-list .post-item .post-item-left .post-info .post-item-title {\n  margin: 0 0 5px;\n  font-size: 16px;\n  color: #333;\n  font-weight: 500;\n}\n.posts-list .post-item .post-item-left .post-info .post-meta {\n  display: flex;\n  gap: 8px;\n  font-size: 12px;\n  color: #999;\n}\n.posts-list .post-item .post-item-left .post-info .post-meta .meta-author {\n  color: #666;\n  font-weight: 500;\n}\n.posts-list .post-item .post-item-left .post-info .post-meta .meta-separator {\n  color: #ddd;\n}\n.posts-list .post-item .post-item-stats {\n  display: flex;\n  gap: 15px;\n}\n.posts-list .post-item .post-item-stats .stat-item {\n  font-size: 14px;\n  color: #999;\n}\n.my-info-card .profile-info {\n  text-align: center;\n}\n.my-info-card .profile-info .profile-avatar-large {\n  font-size: 64px;\n  margin-bottom: 10px;\n}\n.my-info-card .profile-info h4 {\n  margin: 0 0 5px;\n  font-size: 20px;\n  color: #333;\n}\n.my-info-card .profile-info .profile-level {\n  margin: 0 0 15px;\n  font-size: 14px;\n  color: #f5576c;\n  font-weight: 600;\n}\n.my-info-card .profile-info .profile-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 15px;\n}\n.my-info-card .profile-info .profile-stats .stat-box {\n  background: #f8f9fa;\n  padding: 15px;\n  border-radius: 10px;\n}\n.my-info-card .profile-info .profile-stats .stat-box .stat-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: #f5576c;\n}\n.my-info-card .profile-info .profile-stats .stat-box .stat-label {\n  font-size: 12px;\n  color: #999;\n  margin-top: 5px;\n}\n.notice-card .notice-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.notice-card .notice-list li {\n  padding: 12px;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.notice-card .notice-list li:last-child {\n  border-bottom: none;\n}\n.notice-card .notice-list li:hover {\n  background: #f8f9fa;\n  color: #f5576c;\n}\n/*# sourceMappingURL=community-main.component.css.map */\n"] }]
  }], () => [{ type: CommunityAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityMainComponent, { className: "CommunityMainComponent", filePath: "src/app/modules/community/components/community-main/community-main.component.ts", lineNumber: 33 });
})();

// src/app/modules/community/components/community-login/community-login.component.ts
var _c0 = ["loginComponent"];
var CommunityLoginComponent = class _CommunityLoginComponent {
  authService;
  router;
  route;
  loginComponent;
  loginConfig = {
    title: "\u{1F465} \uCEE4\uBBA4\uB2C8\uD2F0",
    subtitle: "\uC18C\uD1B5\uD558\uACE0 \uACF5\uC720\uD558\uBA70 \uD568\uAED8 \uC131\uC7A5\uD558\uC138\uC694",
    moduleName: "community",
    showSocialLogin: false,
    showRegisterLink: false
  };
  returnUrl = "/community";
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
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/community";
  }
  onLogin(credentials) {
    console.log("[CommunityLogin] \uB85C\uADF8\uC778 \uC694\uCCAD:", credentials.username);
    this.authService.login(credentials.username, credentials.password).subscribe({
      next: (success) => {
        if (success) {
          console.log("[CommunityLogin] \uB85C\uADF8\uC778 \uC131\uACF5, \uC774\uB3D9:", this.returnUrl);
          this.router.navigate([this.returnUrl]).then((navigated) => {
            if (navigated) {
              console.log("[CommunityLogin] \uB124\uBE44\uAC8C\uC774\uC158 \uC131\uACF5");
            } else {
              console.error("[CommunityLogin] \uB124\uBE44\uAC8C\uC774\uC158 \uC2E4\uD328");
            }
          });
        } else {
          console.log("[CommunityLogin] \uB85C\uADF8\uC778 \uC2E4\uD328");
          if (this.loginComponent) {
            this.loginComponent.setError("\uC0AC\uC6A9\uC790 \uC774\uB984 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          }
        }
      },
      error: (error) => {
        console.error("[CommunityLogin] \uB85C\uADF8\uC778 \uC5D0\uB7EC:", error);
        if (this.loginComponent) {
          this.loginComponent.setError("\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
        }
      }
    });
  }
  static \u0275fac = function CommunityLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityLoginComponent)(\u0275\u0275directiveInject(CommunityAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityLoginComponent, selectors: [["app-community-login"]], viewQuery: function CommunityLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function CommunityLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function CommunityLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-community-login",
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>',
      standalone: false
    }]
  }], () => [{ type: CommunityAuthService }, { type: Router }, { type: ActivatedRoute }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityLoginComponent, { className: "CommunityLoginComponent", filePath: "src/app/modules/community/components/community-login/community-login.component.ts", lineNumber: 11 });
})();

// src/app/modules/community/guards/community-auth.guard.ts
var CommunityAuthGuard = class _CommunityAuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    const isAuth = this.authService.isAuthenticated();
    console.log("[CommunityGuard] \uC778\uC99D \uD655\uC778:", isAuth, "| \uC694\uCCAD URL:", state.url);
    if (isAuth) {
      return true;
    }
    console.log("[CommunityGuard] \uBBF8\uC778\uC99D \uC0AC\uC6A9\uC790, \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9");
    this.router.navigate(["/community/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
  static \u0275fac = function CommunityAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityAuthGuard)(\u0275\u0275inject(CommunityAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommunityAuthGuard, factory: _CommunityAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CommunityAuthService }, { type: Router }], null);
})();

// src/app/modules/community/community-routing.module.ts
var routes = [
  {
    path: "login",
    component: CommunityLoginComponent
  },
  {
    path: "",
    component: CommunityMainComponent,
    canActivate: [CommunityAuthGuard]
  }
];
var CommunityRoutingModule = class _CommunityRoutingModule {
  static \u0275fac = function CommunityRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommunityRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/community/community.module.ts
var CommunityModule = class _CommunityModule {
  static \u0275fac = function CommunityModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommunityModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CommunityRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityModule, [{
    type: NgModule,
    args: [{
      declarations: [
        CommunityMainComponent,
        CommunityLoginComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CommunityRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  CommunityModule
};
//# sourceMappingURL=chunk-B3QNRSQV.js.map
