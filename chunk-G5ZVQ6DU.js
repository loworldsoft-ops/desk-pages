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
  FormsModule
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  ViewChild,
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
  ɵɵproperty,
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
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/modules/content/services/content-auth.service.ts
var ContentAuthService = class _ContentAuthService {
  router;
  currentUserSubject;
  currentUser;
  STORAGE_KEY = "content_user";
  TOKEN_KEY = "content_token";
  constructor(router) {
    this.router = router;
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    this.currentUserSubject = new BehaviorSubject(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  mockLogin(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockUsers = {
          "admin": {
            username: "admin",
            nickname: "ContentAdmin",
            avatar: "\u{1F3AC}",
            level: 99,
            subscribers: 5e4,
            uploadedVideos: 250
          },
          "user1": {
            username: "user1",
            nickname: "Creator1",
            avatar: "\u{1F4F9}",
            level: 25,
            subscribers: 5e3,
            uploadedVideos: 45
          }
        };
        if (mockUsers[username] && password === "1017") {
          const user = mockUsers[username];
          const token = "mock_content_token_" + username;
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
          localStorage.setItem(this.TOKEN_KEY, token);
          this.currentUserSubject.next(user);
          resolve({ user, token });
        } else {
          reject({ message: "\uC0AC\uC6A9\uC790 \uC774\uB984 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" });
        }
      }, 500);
    });
  }
  logout() {
    console.log("[ContentAuth] \uB85C\uADF8\uC544\uC6C3");
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
      this.currentUserSubject.next(null);
    } catch (error) {
      console.error("[ContentAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/content/login"]).catch((err) => {
        console.error("[ContentAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/content/login";
      });
    }
  }
  isLoggedIn() {
    return !!this.currentUserValue && !!localStorage.getItem(this.TOKEN_KEY);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  static \u0275fac = function ContentAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentAuthService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContentAuthService, factory: _ContentAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/modules/content/components/content-main/content-main.component.ts
function ContentMainComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function ContentMainComponent_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275text(10, "\uB85C\uADF8\uC544\uC6C3");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uAD6C\uB3C5\uC790 ", ctx_r1.currentUser.subscribers, "\uBA85");
  }
}
function ContentMainComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ContentMainComponent_button_9_Template_button_click_0_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategorySelect(cat_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.selectedCategory === cat_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r4, " ");
  }
}
function ContentMainComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function ContentMainComponent_div_15_Template_div_click_0_listener() {
      const video_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVideoClick(video_r6));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "h3", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32)(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 35)(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const video_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r6.thumbnail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r6.duration);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r6.creatorAvatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r6.creator);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F441}\uFE0F ", ctx_r1.formatViews(video_r6.views));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", ctx_r1.formatViews(video_r6.likes));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F0 ", ctx_r1.formatDate(video_r6.uploadedAt));
  }
}
function ContentMainComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function ContentMainComponent_div_21_Template_div_click_0_listener() {
      const video_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVideoClick(video_r8));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "h3", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 32)(12, "span", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 35)(17, "span", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const video_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r8.thumbnail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r8.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r8.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r8.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r8.creatorAvatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r8.creator);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F441}\uFE0F ", ctx_r1.formatViews(video_r8.views));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", ctx_r1.formatViews(video_r8.likes));
  }
}
function ContentMainComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ContentMainComponent_div_26_Template_div_click_0_listener() {
      const video_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVideoClick(video_r10));
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "h4", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 44)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const video_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r10.thumbnail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r10.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r10.creator);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uC870\uD68C\uC218 ", ctx_r1.formatViews(video_r10.views));
  }
}
function ContentMainComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "h3");
    \u0275\u0275text(2, "\uB0B4 \uCC44\uB110");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "div", 48)(5, "div", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 50);
    \u0275\u0275text(8, "\uAD6C\uB3C5\uC790");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 50);
    \u0275\u0275text(13, "\uC601\uC0C1");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 51);
    \u0275\u0275text(15, "\uC601\uC0C1 \uC5C5\uB85C\uB4DC");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.subscribers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.uploadedVideos);
  }
}
var ContentMainComponent = class _ContentMainComponent {
  contentAuthService;
  router;
  currentUser = null;
  featuredVideos = [];
  recentVideos = [];
  trendingVideos = [];
  categories = ["\uC804\uCCB4", "\uAC8C\uC784", "\uBA39\uBC29", "\uC74C\uC545", "VLOG", "\uAD50\uC721"];
  selectedCategory = "\uC804\uCCB4";
  constructor(contentAuthService, router) {
    this.contentAuthService = contentAuthService;
    this.router = router;
  }
  ngOnInit() {
    this.loadUserData();
    this.loadFeaturedVideos();
    this.loadRecentVideos();
    this.loadTrendingVideos();
  }
  loadUserData() {
    this.currentUser = this.contentAuthService.currentUserValue;
  }
  loadFeaturedVideos() {
    this.featuredVideos = [
      {
        id: 1,
        title: "2024\uB144 \uCD5C\uACE0\uC758 \uAC8C\uC784 \uD50C\uB808\uC774 \uBAA8\uC74C",
        thumbnail: "\u{1F3AE}",
        creator: "GameMaster",
        creatorAvatar: "\u{1F47E}",
        views: 125e3,
        likes: 8500,
        duration: "15:32",
        uploadedAt: new Date(2024, 0, 15),
        category: "\uAC8C\uC784"
      },
      {
        id: 2,
        title: "\uC9D1\uC5D0\uC11C \uB9CC\uB4DC\uB294 \uBBF8\uC250\uB9B0 \uC694\uB9AC",
        thumbnail: "\u{1F371}",
        creator: "ChefKim",
        creatorAvatar: "\u{1F468}\u200D\u{1F373}",
        views: 98e3,
        likes: 7200,
        duration: "22:15",
        uploadedAt: new Date(2024, 0, 14),
        category: "\uBA39\uBC29"
      },
      {
        id: 3,
        title: "\uC77C\uB809\uD2B8\uB85C\uB2C9 \uBBA4\uC9C1 \uB77C\uC774\uBE0C \uACF5\uC5F0",
        thumbnail: "\u{1F3B5}",
        creator: "DJ_Alex",
        creatorAvatar: "\u{1F3A7}",
        views: 21e4,
        likes: 15e3,
        duration: "45:20",
        uploadedAt: new Date(2024, 0, 13),
        category: "\uC74C\uC545"
      }
    ];
  }
  loadRecentVideos() {
    this.recentVideos = [
      {
        id: 4,
        title: "\uD558\uB8E8 \uC77C\uACFC \uBE0C\uC774\uB85C\uADF8 | \uAC1C\uBC1C\uC790\uC758 \uD558\uB8E8",
        thumbnail: "\u{1F4F1}",
        creator: "DevDaily",
        creatorAvatar: "\u{1F4BB}",
        views: 45e3,
        likes: 3200,
        duration: "12:45",
        uploadedAt: /* @__PURE__ */ new Date(),
        category: "VLOG"
      },
      {
        id: 5,
        title: "\uD30C\uC774\uC36C \uAE30\uCD08 \uAC15\uC88C 1\uAC15",
        thumbnail: "\u{1F4DA}",
        creator: "CodeTeacher",
        creatorAvatar: "\u{1F393}",
        views: 62e3,
        likes: 4800,
        duration: "28:30",
        uploadedAt: new Date(2024, 0, 15, 10),
        category: "\uAD50\uC721"
      },
      {
        id: 6,
        title: "\uC2E0\uC791 \uAC8C\uC784 \uB9AC\uBDF0 & \uD301",
        thumbnail: "\u{1F3AF}",
        creator: "GameReviewer",
        creatorAvatar: "\u{1F579}\uFE0F",
        views: 38e3,
        likes: 2900,
        duration: "18:22",
        uploadedAt: new Date(2024, 0, 15, 8),
        category: "\uAC8C\uC784"
      }
    ];
  }
  loadTrendingVideos() {
    this.trendingVideos = [
      {
        id: 7,
        title: "\u{1F525} \uC2E4\uC2DC\uAC04 \uD2B8\uB80C\uB4DC 1\uC704",
        thumbnail: "\u{1F31F}",
        creator: "TrendSetter",
        creatorAvatar: "\u2B50",
        views: 45e4,
        likes: 32e3,
        duration: "10:15",
        uploadedAt: new Date(2024, 0, 15, 14),
        category: "\uC804\uCCB4"
      },
      {
        id: 8,
        title: "\uC9C0\uAE08 \uAC00\uC7A5 \uD56B\uD55C \uCC4C\uB9B0\uC9C0",
        thumbnail: "\u{1F483}",
        creator: "ChallengePro",
        creatorAvatar: "\u{1F3AA}",
        views: 32e4,
        likes: 28e3,
        duration: "5:42",
        uploadedAt: new Date(2024, 0, 15, 13),
        category: "\uC804\uCCB4"
      }
    ];
  }
  onLogout() {
    this.contentAuthService.logout();
    this.router.navigate(["/content/login"]);
  }
  onVideoClick(video) {
    console.log("\uBE44\uB514\uC624 \uD074\uB9AD:", video);
  }
  onCategorySelect(category) {
    this.selectedCategory = category;
    console.log("\uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD:", category);
  }
  formatViews(views) {
    if (views >= 1e6) {
      return (views / 1e6).toFixed(1) + "M";
    } else if (views >= 1e3) {
      return (views / 1e3).toFixed(1) + "K";
    }
    return views.toString();
  }
  formatDate(date) {
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    if (diffHours < 1) {
      return "\uBC29\uAE08 \uC804";
    } else if (diffHours < 24) {
      return `${diffHours}\uC2DC\uAC04 \uC804`;
    } else if (diffDays < 7) {
      return `${diffDays}\uC77C \uC804`;
    } else {
      return date.toLocaleDateString("ko-KR");
    }
  }
  static \u0275fac = function ContentMainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentMainComponent)(\u0275\u0275directiveInject(ContentAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentMainComponent, selectors: [["app-content-main"]], standalone: false, decls: 28, vars: 6, consts: [[1, "content-container"], [1, "content-header"], [1, "header-left"], [1, "subtitle"], ["class", "header-right", 4, "ngIf"], [1, "category-filter"], ["class", "category-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "main-content"], [1, "video-section"], [1, "videos-grid", "featured"], ["class", "video-card large", 3, "click", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "videos-grid"], ["class", "video-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "trending-section"], [1, "trending-list"], ["class", "trending-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "my-channel-card", 4, "ngIf"], [1, "header-right"], [1, "user-info"], [1, "avatar"], [1, "user-details"], [1, "nickname"], [1, "level"], [1, "btn-logout", 3, "click"], [1, "category-btn", 3, "click"], [1, "video-card", "large", 3, "click"], [1, "video-thumbnail"], [1, "thumbnail-icon"], [1, "duration"], [1, "video-info"], [1, "video-title"], [1, "creator-info"], [1, "creator-avatar"], [1, "creator-name"], [1, "video-stats"], [1, "stat"], [1, "video-card", 3, "click"], [1, "category-badge"], [1, "trending-item", 3, "click"], [1, "rank"], [1, "trending-thumbnail"], [1, "trending-info"], [1, "trending-title"], [1, "trending-meta"], [1, "views"], [1, "my-channel-card"], [1, "channel-stats"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "btn-upload"]], template: function ContentMainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u{1F3AC} \uCF58\uD150\uCE20 \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "\uD06C\uB9AC\uC5D0\uC774\uD130\uC640 \uD568\uAED8\uD558\uB294 \uC601\uC0C1 \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ContentMainComponent_div_7_Template, 11, 3, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, ContentMainComponent_button_9_Template, 2, 3, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "section", 8)(12, "h2");
      \u0275\u0275text(13, "\u{1F31F} \uCD94\uCC9C \uC601\uC0C1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275template(15, ContentMainComponent_div_15_Template, 21, 8, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "section", 8)(18, "h2");
      \u0275\u0275text(19, "\u{1F195} \uCD5C\uC2E0 \uC601\uC0C1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12);
      \u0275\u0275template(21, ContentMainComponent_div_21_Template, 21, 8, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "aside", 14)(23, "h2");
      \u0275\u0275text(24, "\u{1F525} \uC778\uAE30 \uAE09\uC0C1\uC2B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275template(26, ContentMainComponent_div_26_Template, 13, 5, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, ContentMainComponent_div_27_Template, 16, 2, "div", 17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.currentUser);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.featuredVideos);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.recentVideos);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.trendingVideos);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentUser);
    }
  }, dependencies: [NgForOf, NgIf], styles: ["\n\n.content-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.content-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 30px;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.content-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  color: #333;\n}\n.content-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .nickname[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #764ba2;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.content-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]:hover {\n  background: #e84118;\n  transform: translateY(-2px);\n}\n.category-filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 15px 0;\n  overflow-x: auto;\n}\n.category-filter[_ngcontent-%COMP%]   .category-btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: rgba(255, 255, 255, 0.9);\n  border: 2px solid transparent;\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.category-filter[_ngcontent-%COMP%]   .category-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.category-filter[_ngcontent-%COMP%]   .category-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: white;\n}\n.main-content[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.video-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.video-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.videos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.videos-grid.featured[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n.video-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.video-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.video-card[_ngcontent-%COMP%]   .video-thumbnail[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-card[_ngcontent-%COMP%]   .video-thumbnail[_ngcontent-%COMP%]   .thumbnail-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n.video-card[_ngcontent-%COMP%]   .video-thumbnail[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.video-card[_ngcontent-%COMP%]   .video-thumbnail[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(255, 255, 255, 0.95);\n  color: #764ba2;\n  padding: 4px 12px;\n  border-radius: 15px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .creator-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .creator-info[_ngcontent-%COMP%]   .creator-avatar[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .creator-info[_ngcontent-%COMP%]   .creator-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  font-weight: 500;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.video-card[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n.video-card.large[_ngcontent-%COMP%]   .video-thumbnail[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.video-card.large[_ngcontent-%COMP%]   .video-thumbnail[_ngcontent-%COMP%]   .thumbnail-icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n}\n.video-card.large[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  -webkit-line-clamp: 3;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 20px;\n}\n@media (max-width: 1200px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.trending-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.trending-list[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 10px;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #764ba2;\n  min-width: 30px;\n  text-align: center;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-thumbnail[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 10px;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%]   .trending-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%]   .trending-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 12px;\n  color: #999;\n}\n.trending-list[_ngcontent-%COMP%]   .trending-item[_ngcontent-%COMP%]   .trending-info[_ngcontent-%COMP%]   .trending-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #666;\n}\n.my-channel-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  padding: 20px;\n  text-align: center;\n}\n.my-channel-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  font-size: 18px;\n  color: #333;\n}\n.my-channel-card[_ngcontent-%COMP%]   .channel-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 15px;\n}\n.my-channel-card[_ngcontent-%COMP%]   .channel-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 15px;\n  border-radius: 10px;\n}\n.my-channel-card[_ngcontent-%COMP%]   .channel-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #764ba2;\n}\n.my-channel-card[_ngcontent-%COMP%]   .channel-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n  margin-top: 5px;\n}\n.my-channel-card[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.my-channel-card[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n/*# sourceMappingURL=content-main.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentMainComponent, [{
    type: Component,
    args: [{ selector: "app-content-main", standalone: false, template: '<div class="content-container">\n  <!-- \uD5E4\uB354 -->\n  <div class="content-header">\n    <div class="header-left">\n      <h1>\u{1F3AC} \uCF58\uD150\uCE20 \uD50C\uB7AB\uD3FC</h1>\n      <p class="subtitle">\uD06C\uB9AC\uC5D0\uC774\uD130\uC640 \uD568\uAED8\uD558\uB294 \uC601\uC0C1 \uD50C\uB7AB\uD3FC</p>\n    </div>\n    <div class="header-right" *ngIf="currentUser">\n      <div class="user-info">\n        <div class="avatar">{{ currentUser.avatar }}</div>\n        <div class="user-details">\n          <div class="nickname">{{ currentUser.nickname }}</div>\n          <div class="level">\uAD6C\uB3C5\uC790 {{ currentUser.subscribers }}\uBA85</div>\n        </div>\n      </div>\n      <button class="btn-logout" (click)="onLogout()">\uB85C\uADF8\uC544\uC6C3</button>\n    </div>\n  </div>\n\n  <!-- \uCE74\uD14C\uACE0\uB9AC \uD544\uD130 -->\n  <div class="category-filter">\n    <button \n      *ngFor="let cat of categories"\n      class="category-btn"\n      [class.active]="selectedCategory === cat"\n      (click)="onCategorySelect(cat)">\n      {{ cat }}\n    </button>\n  </div>\n\n  <!-- \uBA54\uC778 \uCF58\uD150\uCE20 -->\n  <div class="main-content">\n    <!-- \uCD94\uCC9C \uC601\uC0C1 -->\n    <section class="video-section">\n      <h2>\u{1F31F} \uCD94\uCC9C \uC601\uC0C1</h2>\n      <div class="videos-grid featured">\n        <div \n          *ngFor="let video of featuredVideos" \n          class="video-card large"\n          (click)="onVideoClick(video)">\n          <div class="video-thumbnail">\n            <span class="thumbnail-icon">{{ video.thumbnail }}</span>\n            <span class="duration">{{ video.duration }}</span>\n          </div>\n          <div class="video-info">\n            <h3 class="video-title">{{ video.title }}</h3>\n            <div class="creator-info">\n              <span class="creator-avatar">{{ video.creatorAvatar }}</span>\n              <span class="creator-name">{{ video.creator }}</span>\n            </div>\n            <div class="video-stats">\n              <span class="stat">\u{1F441}\uFE0F {{ formatViews(video.views) }}</span>\n              <span class="stat">\u2764\uFE0F {{ formatViews(video.likes) }}</span>\n              <span class="stat">\u23F0 {{ formatDate(video.uploadedAt) }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <div class="content-grid">\n      <!-- \uCD5C\uC2E0 \uC601\uC0C1 -->\n      <section class="video-section">\n        <h2>\u{1F195} \uCD5C\uC2E0 \uC601\uC0C1</h2>\n        <div class="videos-grid">\n          <div \n            *ngFor="let video of recentVideos" \n            class="video-card"\n            (click)="onVideoClick(video)">\n            <div class="video-thumbnail">\n              <span class="thumbnail-icon">{{ video.thumbnail }}</span>\n              <span class="duration">{{ video.duration }}</span>\n              <span class="category-badge">{{ video.category }}</span>\n            </div>\n            <div class="video-info">\n              <h3 class="video-title">{{ video.title }}</h3>\n              <div class="creator-info">\n                <span class="creator-avatar">{{ video.creatorAvatar }}</span>\n                <span class="creator-name">{{ video.creator }}</span>\n              </div>\n              <div class="video-stats">\n                <span class="stat">\u{1F441}\uFE0F {{ formatViews(video.views) }}</span>\n                <span class="stat">\u2764\uFE0F {{ formatViews(video.likes) }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- \uC778\uAE30 \uAE09\uC0C1\uC2B9 -->\n      <aside class="trending-section">\n        <h2>\u{1F525} \uC778\uAE30 \uAE09\uC0C1\uC2B9</h2>\n        <div class="trending-list">\n          <div \n            *ngFor="let video of trendingVideos; let i = index" \n            class="trending-item"\n            (click)="onVideoClick(video)">\n            <div class="rank">{{ i + 1 }}</div>\n            <div class="trending-thumbnail">{{ video.thumbnail }}</div>\n            <div class="trending-info">\n              <h4 class="trending-title">{{ video.title }}</h4>\n              <div class="trending-meta">\n                <span>{{ video.creator }}</span>\n                <span class="views">\uC870\uD68C\uC218 {{ formatViews(video.views) }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- \uB0B4 \uCC44\uB110 \uC815\uBCF4 -->\n        <div class="my-channel-card" *ngIf="currentUser">\n          <h3>\uB0B4 \uCC44\uB110</h3>\n          <div class="channel-stats">\n            <div class="stat-item">\n              <div class="stat-value">{{ currentUser.subscribers }}</div>\n              <div class="stat-label">\uAD6C\uB3C5\uC790</div>\n            </div>\n            <div class="stat-item">\n              <div class="stat-value">{{ currentUser.uploadedVideos }}</div>\n              <div class="stat-label">\uC601\uC0C1</div>\n            </div>\n          </div>\n          <button class="btn-upload">\uC601\uC0C1 \uC5C5\uB85C\uB4DC</button>\n        </div>\n      </aside>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/content/components/content-main/content-main.component.scss */\n.content-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.content-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 20px 30px;\n  border-radius: 15px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.content-header .header-left h1 {\n  margin: 0;\n  font-size: 28px;\n  color: #333;\n}\n.content-header .header-left .subtitle {\n  margin: 5px 0 0;\n  color: #666;\n  font-size: 14px;\n}\n.content-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.content-header .header-right .user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.content-header .header-right .user-info .avatar {\n  font-size: 32px;\n}\n.content-header .header-right .user-info .user-details .nickname {\n  font-weight: 600;\n  color: #333;\n}\n.content-header .header-right .user-info .user-details .level {\n  font-size: 12px;\n  color: #764ba2;\n}\n.content-header .header-right .btn-logout {\n  padding: 8px 20px;\n  background: #ff4757;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.content-header .header-right .btn-logout:hover {\n  background: #e84118;\n  transform: translateY(-2px);\n}\n.category-filter {\n  display: flex;\n  gap: 10px;\n  padding: 15px 0;\n  overflow-x: auto;\n}\n.category-filter .category-btn {\n  padding: 10px 24px;\n  background: rgba(255, 255, 255, 0.9);\n  border: 2px solid transparent;\n  border-radius: 25px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.category-filter .category-btn:hover {\n  background: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.category-filter .category-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: white;\n}\n.main-content {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.video-section {\n  margin-bottom: 40px;\n}\n.video-section h2 {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.videos-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.videos-grid.featured {\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n}\n.video-card {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.video-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.video-card .video-thumbnail {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-card .video-thumbnail .thumbnail-icon {\n  font-size: 80px;\n}\n.video-card .video-thumbnail .duration {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.video-card .video-thumbnail .category-badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(255, 255, 255, 0.95);\n  color: #764ba2;\n  padding: 4px 12px;\n  border-radius: 15px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.video-card .video-info {\n  padding: 15px;\n}\n.video-card .video-info .video-title {\n  margin: 0 0 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.video-card .video-info .creator-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.video-card .video-info .creator-info .creator-avatar {\n  font-size: 20px;\n}\n.video-card .video-info .creator-info .creator-name {\n  font-size: 14px;\n  color: #666;\n  font-weight: 500;\n}\n.video-card .video-info .video-stats {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.video-card .video-info .video-stats .stat {\n  font-size: 12px;\n  color: #999;\n}\n.video-card.large .video-thumbnail {\n  height: 250px;\n}\n.video-card.large .video-thumbnail .thumbnail-icon {\n  font-size: 120px;\n}\n.video-card.large .video-info .video-title {\n  font-size: 18px;\n  -webkit-line-clamp: 3;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 20px;\n}\n@media (max-width: 1200px) {\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.trending-section h2 {\n  margin: 0 0 20px;\n  font-size: 24px;\n  color: white;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.trending-list {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.trending-list .trending-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 10px;\n}\n.trending-list .trending-item:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n.trending-list .trending-item .rank {\n  font-size: 24px;\n  font-weight: 700;\n  color: #764ba2;\n  min-width: 30px;\n  text-align: center;\n}\n.trending-list .trending-item .trending-thumbnail {\n  font-size: 48px;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 10px;\n}\n.trending-list .trending-item .trending-info {\n  flex: 1;\n}\n.trending-list .trending-item .trending-info .trending-title {\n  margin: 0 0 5px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.trending-list .trending-item .trending-info .trending-meta {\n  display: flex;\n  gap: 8px;\n  font-size: 12px;\n  color: #999;\n}\n.trending-list .trending-item .trending-info .trending-meta span:first-child {\n  color: #666;\n}\n.my-channel-card {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 15px;\n  padding: 20px;\n  text-align: center;\n}\n.my-channel-card h3 {\n  margin: 0 0 15px;\n  font-size: 18px;\n  color: #333;\n}\n.my-channel-card .channel-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 15px;\n}\n.my-channel-card .channel-stats .stat-item {\n  background: #f8f9fa;\n  padding: 15px;\n  border-radius: 10px;\n}\n.my-channel-card .channel-stats .stat-item .stat-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: #764ba2;\n}\n.my-channel-card .channel-stats .stat-item .stat-label {\n  font-size: 12px;\n  color: #999;\n  margin-top: 5px;\n}\n.my-channel-card .btn-upload {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.my-channel-card .btn-upload:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n/*# sourceMappingURL=content-main.component.css.map */\n"] }]
  }], () => [{ type: ContentAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentMainComponent, { className: "ContentMainComponent", filePath: "src/app/modules/content/components/content-main/content-main.component.ts", lineNumber: 24 });
})();

// src/app/modules/content/components/content-login/content-login.component.ts
var _c0 = ["loginComponent"];
var ContentLoginComponent = class _ContentLoginComponent {
  authService;
  router;
  route;
  loginComponent;
  loginConfig = {
    title: "\u{1F3AC} \uCF58\uD150\uCE20",
    subtitle: "\uD06C\uB9AC\uC5D0\uC774\uD130\uC640 \uD568\uAED8\uD558\uB294 \uC601\uC0C1 \uD50C\uB7AB\uD3FC",
    moduleName: "content",
    showSocialLogin: false,
    showRegisterLink: false
  };
  returnUrl = "/content";
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([this.returnUrl]);
      return;
    }
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/content";
  }
  onLogin(credentials) {
    return __async(this, null, function* () {
      try {
        yield this.authService.mockLogin(credentials.username, credentials.password);
        this.router.navigate([this.returnUrl]);
      } catch (error) {
        if (this.loginComponent) {
          this.loginComponent.setError(error.message || "\uB85C\uADF8\uC778 \uC2E4\uD328");
        }
      }
    });
  }
  static \u0275fac = function ContentLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentLoginComponent)(\u0275\u0275directiveInject(ContentAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentLoginComponent, selectors: [["app-content-login"]], viewQuery: function ContentLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function ContentLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function ContentLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-content-login",
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>',
      standalone: false
    }]
  }], () => [{ type: ContentAuthService }, { type: Router }, { type: ActivatedRoute }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentLoginComponent, { className: "ContentLoginComponent", filePath: "src/app/modules/content/components/content-login/content-login.component.ts", lineNumber: 11 });
})();

// src/app/modules/content/guards/content-auth.guard.ts
var ContentAuthGuard = class _ContentAuthGuard {
  contentAuthService;
  router;
  constructor(contentAuthService, router) {
    this.contentAuthService = contentAuthService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.contentAuthService.isLoggedIn()) {
      return true;
    }
    return this.router.createUrlTree(["/content/login"], {
      queryParams: { returnUrl: state.url }
    });
  }
  static \u0275fac = function ContentAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentAuthGuard)(\u0275\u0275inject(ContentAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContentAuthGuard, factory: _ContentAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ContentAuthService }, { type: Router }], null);
})();

// src/app/modules/content/content-routing.module.ts
var routes = [
  {
    path: "login",
    component: ContentLoginComponent
  },
  {
    path: "",
    component: ContentMainComponent,
    canActivate: [ContentAuthGuard]
  }
];
var ContentRoutingModule = class _ContentRoutingModule {
  static \u0275fac = function ContentRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContentRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/content/content.module.ts
var ContentModule = class _ContentModule {
  static \u0275fac = function ContentModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContentModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ContentRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ContentMainComponent,
        ContentLoginComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ContentRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ContentModule
};
//# sourceMappingURL=chunk-G5ZVQ6DU.js.map
