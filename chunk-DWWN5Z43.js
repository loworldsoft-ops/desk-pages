import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-CAM35WIM.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-NZXI4AK5.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  CryptoUtil
} from "./chunk-G2D7UUZA.js";
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
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
import {
  MatSelectModule
} from "./chunk-66OK2TSW.js";
import "./chunk-F5RTWLKS.js";
import "./chunk-NQ2UJILS.js";
import {
  MatFormFieldModule,
  MatInputModule
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
  RouterLink,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient
} from "./chunk-OYJIDA3L.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Output,
  Subject,
  ViewChild,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  takeUntil,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/dashboard/viewmodels/dashboard.viewmodel.ts
var DashboardViewModel = class _DashboardViewModel {
  // 오늘 일정
  todaySchedule$ = new BehaviorSubject([]);
  // 다이어리 진행률
  diaryProgress$ = new BehaviorSubject(null);
  // 소설 통계
  novelStats$ = new BehaviorSubject(null);
  constructor() {
    this.initializeDashboard();
  }
  initializeDashboard() {
    this.getTodaySchedule();
    this.getDiaryProgress();
    this.getNovelStats();
  }
  getTodaySchedule() {
    const mockSchedules = [
      {
        id: 1,
        name: "\uB300\uC2DC\uBCF4\uB4DC \uBAA8\uB4C8 \uAC1C\uBC1C",
        status: "progress",
        startDate: (/* @__PURE__ */ new Date()).toISOString(),
        endDate: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: 2,
        name: "\uC18C\uC124 \uC791\uC131",
        status: "receive",
        startDate: (/* @__PURE__ */ new Date()).toISOString(),
        endDate: (/* @__PURE__ */ new Date()).toISOString()
      }
    ];
    this.todaySchedule$.next(mockSchedules);
  }
  getDiaryProgress() {
    const mockProgress = {
      total: 10,
      receive: 3,
      progress: 4,
      complete: 3,
      ratios: {
        receive: 0.3,
        progress: 0.4,
        complete: 0.3
      }
    };
    this.diaryProgress$.next(mockProgress);
  }
  getNovelStats() {
    const mockStats = {
      totalNovels: 5,
      totalCharacters: 15e4,
      recentNovels: [
        { id: 1, title: "\uC18C\uC124 \uC81C\uBAA9 1", characters: 5e4 },
        { id: 2, title: "\uC18C\uC124 \uC81C\uBAA9 2", characters: 3e4 },
        { id: 3, title: "\uC18C\uC124 \uC81C\uBAA9 3", characters: 2e4 }
      ]
    };
    this.novelStats$.next(mockStats);
  }
  refreshDashboard() {
    this.getTodaySchedule();
    this.getDiaryProgress();
    this.getNovelStats();
  }
  static \u0275fac = function DashboardViewModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardViewModel)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardViewModel, factory: _DashboardViewModel.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardViewModel, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/dashboard/services/dashboard-auth.service.ts
var DashboardAuthService = class _DashboardAuthService {
  router;
  STORAGE_KEY = "dashboard_auth_user";
  // environment에서 암호화된 인증 정보를 복호화하여 사용 (Novel과 동일한 계정)
  ADMIN_USERNAME = CryptoUtil.decrypt(environment.auth.username);
  ADMIN_PASSWORD = CryptoUtil.decrypt(environment.auth.password);
  currentUserSubject;
  currentUser$;
  constructor(router) {
    this.router = router;
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
      console.warn("Failed to load dashboard user from storage:", error);
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
      console.warn("Failed to save dashboard user to storage:", error);
    }
  }
  /**
   * 로그인 - environment에서 중앙 관리되는 계정 사용 (Novel과 동일)
   */
  login(username, password) {
    if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
      const dashboardUser = {
        username: this.ADMIN_USERNAME,
        loginTime: /* @__PURE__ */ new Date()
      };
      this.currentUserSubject.next(dashboardUser);
      this.saveUserToStorage(dashboardUser);
      return true;
    }
    return false;
  }
  /**
   * 로그아웃
   */
  logout() {
    console.log("[DashboardAuth] \uB85C\uADF8\uC544\uC6C3");
    try {
      this.currentUserSubject.next(null);
      this.saveUserToStorage(null);
    } catch (error) {
      console.error("[DashboardAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/dashboard/login"]).catch((err) => {
        console.error("[DashboardAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/dashboard/login";
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
   * 현재 사용자 이름 가져오기
   */
  getCurrentUsername() {
    const user = this.getCurrentUser();
    return user ? user.username : null;
  }
  static \u0275fac = function DashboardAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardAuthService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardAuthService, factory: _DashboardAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/modules/dashboard/abstracts/data.abstract.ts
var DataAbstract = class _DataAbstract {
  data;
  output = new EventEmitter();
  destroy$ = new Subject();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function DataAbstract_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataAbstract)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DataAbstract, inputs: { data: "data" }, outputs: { output: "output" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataAbstract, [{
    type: Directive
  }], null, { data: [{
    type: Input
  }], output: [{
    type: Output
  }] });
})();

// src/app/modules/dashboard/components/widgets/today-schedule/today-schedule.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TodayScheduleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uC624\uB298 \uC608\uC815\uB41C \uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd()();
  }
}
function TodayScheduleComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function TodayScheduleComponent_Conditional_8_For_2_Template_div_click_0_listener() {
      const schedule_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onScheduleClick(schedule_r2));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const schedule_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getStatusColor(schedule_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusIcon(schedule_r2.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(schedule_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 6, schedule_r2.startDate, "HH:mm"), " - ", \u0275\u0275pipeBind2(9, 9, schedule_r2.endDate, "HH:mm"), " ");
  }
}
function TodayScheduleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, TodayScheduleComponent_Conditional_8_For_2_Template, 10, 12, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.schedules);
  }
}
var TodayScheduleComponent = class _TodayScheduleComponent extends DataAbstract {
  dashboardVM = inject(DashboardViewModel);
  schedules = [];
  ngOnInit() {
    console.log("\uC624\uB298 \uC77C\uC815 \uC704\uC82F - \uB4E4\uC5B4\uC628 \uB370\uC774\uD130:", this.data);
    this.dashboardVM.todaySchedule$.pipe(takeUntil(this.destroy$)).subscribe((schedules) => {
      this.schedules = schedules || [];
    });
  }
  getStatusIcon(status) {
    const icons = {
      "receive": "inbox",
      "progress": "pending",
      "complete": "check_circle"
    };
    return icons[status] || "circle";
  }
  getStatusColor(status) {
    const colors = {
      "receive": "#90CAF9",
      "progress": "#FFF59D",
      "complete": "#A5D6A7"
    };
    return colors[status] || "#BDBDBD";
  }
  onScheduleClick(schedule) {
    this.output.emit({ type: "schedule-click", data: schedule });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TodayScheduleComponent_BaseFactory;
    return function TodayScheduleComponent_Factory(__ngFactoryType__) {
      return (\u0275TodayScheduleComponent_BaseFactory || (\u0275TodayScheduleComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TodayScheduleComponent)))(__ngFactoryType__ || _TodayScheduleComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodayScheduleComponent, selectors: [["app-today-schedule"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 2, consts: [[1, "widget-card"], [1, "widget-toolbar"], [1, "widget-content"], [1, "empty-state"], [1, "schedule-list"], [1, "schedule-item"], [1, "schedule-item", 3, "click"], [1, "schedule-info"], [1, "schedule-name"], [1, "schedule-time"]], template: function TodayScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-toolbar", 1)(2, "mat-icon");
      \u0275\u0275text(3, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275conditionalCreate(7, TodayScheduleComponent_Conditional_7_Template, 5, 0, "div", 3)(8, TodayScheduleComponent_Conditional_8_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.data == null ? null : ctx.data.title) || "\uC624\uB298 \uC77C\uC815");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.schedules.length === 0 ? 7 : 8);
    }
  }, dependencies: [MatToolbar, MatIcon, MatCard, DatePipe], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.schedule-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.schedule-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(102, 126, 234, 0.05);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.schedule-item[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n  transform: translateX(4px);\n}\n.schedule-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.schedule-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.schedule-info[_ngcontent-%COMP%]   .schedule-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.schedule-info[_ngcontent-%COMP%]   .schedule-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=today-schedule.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodayScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-today-schedule", standalone: false, template: `<mat-card class="widget-card">
  <mat-toolbar class="widget-toolbar">
    <mat-icon>calendar_today</mat-icon>
    <span>{{ data?.title || '\uC624\uB298 \uC77C\uC815' }}</span>
  </mat-toolbar>

  <div class="widget-content">
    @if (schedules.length === 0) {
      <div class="empty-state">
        <mat-icon>event_busy</mat-icon>
        <p>\uC624\uB298 \uC608\uC815\uB41C \uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</p>
      </div>
    } @else {
      <div class="schedule-list">
        @for (schedule of schedules; track schedule.id) {
          <div class="schedule-item" (click)="onScheduleClick(schedule)">
            <mat-icon [style.color]="getStatusColor(schedule.status)">
              {{ getStatusIcon(schedule.status) }}
            </mat-icon>
            <div class="schedule-info">
              <div class="schedule-name">{{ schedule.name }}</div>
              <div class="schedule-time">
                {{ schedule.startDate | date: 'HH:mm' }} - {{ schedule.endDate | date: 'HH:mm' }}
              </div>
            </div>
          </div>
        }
      </div>
    }
  </div>
</mat-card>
`, styles: ["/* src/app/modules/dashboard/components/widgets/today-schedule/today-schedule.component.scss */\n.widget-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.schedule-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.schedule-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(102, 126, 234, 0.05);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.schedule-item:hover {\n  background: rgba(102, 126, 234, 0.1);\n  transform: translateX(4px);\n}\n.schedule-item mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.schedule-info {\n  flex: 1;\n  min-width: 0;\n}\n.schedule-info .schedule-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.schedule-info .schedule-time {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=today-schedule.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodayScheduleComponent, { className: "TodayScheduleComponent", filePath: "src/app/modules/dashboard/components/widgets/today-schedule/today-schedule.component.ts", lineNumber: 12 });
})();

// src/app/modules/dashboard/components/widgets/diary-progress/diary-progress.component.ts
function DiaryProgressComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
function DiaryProgressComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "\uC804\uCCB4 \uC77C\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275element(14, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 15)(16, "div", 10)(17, "span", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275element(22, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 10)(25, "span", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 12);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 13);
    \u0275\u0275element(30, "div", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.progress.total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel("receive"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.progress.receive, " (", ctx_r0.getProgressPercentage(ctx_r0.progress.ratios.receive), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercentage(ctx_r0.progress.ratios.receive), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel("progress"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.progress.progress, " (", ctx_r0.getProgressPercentage(ctx_r0.progress.ratios.progress), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercentage(ctx_r0.progress.ratios.progress), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getStatusLabel("complete"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.progress.complete, " (", ctx_r0.getProgressPercentage(ctx_r0.progress.ratios.complete), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercentage(ctx_r0.progress.ratios.complete), "%");
  }
}
var DiaryProgressComponent = class _DiaryProgressComponent extends DataAbstract {
  dashboardVM = inject(DashboardViewModel);
  progress = null;
  ngOnInit() {
    console.log("\uC77C\uC815 \uC9C4\uD589\uB960 \uC704\uC82F - \uB4E4\uC5B4\uC628 \uB370\uC774\uD130:", this.data);
    this.dashboardVM.diaryProgress$.pipe(takeUntil(this.destroy$)).subscribe((progress) => {
      this.progress = progress;
    });
  }
  getProgressPercentage(ratio) {
    return Math.round(ratio * 100);
  }
  getStatusLabel(status) {
    const labels = {
      "receive": "\uB300\uAE30",
      "progress": "\uC9C4\uD589\uC911",
      "complete": "\uC644\uB8CC"
    };
    return labels[status] || status;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DiaryProgressComponent_BaseFactory;
    return function DiaryProgressComponent_Factory(__ngFactoryType__) {
      return (\u0275DiaryProgressComponent_BaseFactory || (\u0275DiaryProgressComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DiaryProgressComponent)))(__ngFactoryType__ || _DiaryProgressComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiaryProgressComponent, selectors: [["app-diary-progress"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 2, consts: [[1, "widget-card"], [1, "widget-toolbar"], [1, "widget-content"], [1, "empty-state"], [1, "progress-summary"], [1, "total-count"], [1, "label"], [1, "value"], [1, "progress-bars"], [1, "progress-item", "receive"], [1, "progress-header"], [1, "status-label"], [1, "status-value"], [1, "progress-bar-container"], [1, "progress-bar"], [1, "progress-item", "progress"], [1, "progress-item", "complete"]], template: function DiaryProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-toolbar", 1)(2, "mat-icon");
      \u0275\u0275text(3, "bar_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275conditionalCreate(7, DiaryProgressComponent_Conditional_7_Template, 5, 0, "div", 3)(8, DiaryProgressComponent_Conditional_8_Template, 31, 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.data == null ? null : ctx.data.title) || "\uC77C\uC815 \uC9C4\uD589\uB960");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.progress ? 7 : 8);
    }
  }, dependencies: [MatToolbar, MatIcon, MatCard], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.progress-summary[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.progress-summary[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 147, 251, 0.1) 0%,\n      rgba(245, 87, 108, 0.1) 100%);\n  border-radius: 8px;\n}\n.progress-summary[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.progress-summary[_ngcontent-%COMP%]   .total-count[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.progress-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.progress-item[_ngcontent-%COMP%]   .progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.progress-item[_ngcontent-%COMP%]   .progress-header[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.progress-item[_ngcontent-%COMP%]   .progress-header[_ngcontent-%COMP%]   .status-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.progress-item[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-item[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.progress-item.receive[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #90CAF9 0%,\n      #64B5F6 100%);\n}\n.progress-item.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #FFF59D 0%,\n      #FDD835 100%);\n}\n.progress-item.complete[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #A5D6A7 0%,\n      #66BB6A 100%);\n}\n.dark-theme[_nghost-%COMP%]   .progress-bar-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=diary-progress.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiaryProgressComponent, [{
    type: Component,
    args: [{ selector: "app-diary-progress", standalone: false, template: `<mat-card class="widget-card">
  <mat-toolbar class="widget-toolbar">
    <mat-icon>bar_chart</mat-icon>
    <span>{{ data?.title || '\uC77C\uC815 \uC9C4\uD589\uB960' }}</span>
  </mat-toolbar>

  <div class="widget-content">
    @if (!progress) {
      <div class="empty-state">
        <mat-icon>hourglass_empty</mat-icon>
        <p>\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...</p>
      </div>
    } @else {
      <div class="progress-summary">
        <div class="total-count">
          <span class="label">\uC804\uCCB4 \uC77C\uC815</span>
          <span class="value">{{ progress.total }}</span>
        </div>
      </div>

      <div class="progress-bars">
        <div class="progress-item receive">
          <div class="progress-header">
            <span class="status-label">{{ getStatusLabel('receive') }}</span>
            <span class="status-value">{{ progress.receive }} ({{ getProgressPercentage(progress.ratios.receive) }}%)</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" [style.width.%]="getProgressPercentage(progress.ratios.receive)"></div>
          </div>
        </div>

        <div class="progress-item progress">
          <div class="progress-header">
            <span class="status-label">{{ getStatusLabel('progress') }}</span>
            <span class="status-value">{{ progress.progress }} ({{ getProgressPercentage(progress.ratios.progress) }}%)</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" [style.width.%]="getProgressPercentage(progress.ratios.progress)"></div>
          </div>
        </div>

        <div class="progress-item complete">
          <div class="progress-header">
            <span class="status-label">{{ getStatusLabel('complete') }}</span>
            <span class="status-value">{{ progress.complete }} ({{ getProgressPercentage(progress.ratios.complete) }}%)</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" [style.width.%]="getProgressPercentage(progress.ratios.complete)"></div>
          </div>
        </div>
      </div>
    }
  </div>
</mat-card>
`, styles: ["/* src/app/modules/dashboard/components/widgets/diary-progress/diary-progress.component.scss */\n.widget-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.progress-summary {\n  margin-bottom: 24px;\n}\n.progress-summary .total-count {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 147, 251, 0.1) 0%,\n      rgba(245, 87, 108, 0.1) 100%);\n  border-radius: 8px;\n}\n.progress-summary .total-count .label {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.progress-summary .total-count .value {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.progress-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.progress-item .progress-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.progress-item .progress-header .status-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.progress-item .progress-header .status-value {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.progress-item .progress-bar-container {\n  width: 100%;\n  height: 8px;\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-item .progress-bar-container .progress-bar {\n  height: 100%;\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.progress-item.receive .progress-bar {\n  background:\n    linear-gradient(\n      90deg,\n      #90CAF9 0%,\n      #64B5F6 100%);\n}\n.progress-item.progress .progress-bar {\n  background:\n    linear-gradient(\n      90deg,\n      #FFF59D 0%,\n      #FDD835 100%);\n}\n.progress-item.complete .progress-bar {\n  background:\n    linear-gradient(\n      90deg,\n      #A5D6A7 0%,\n      #66BB6A 100%);\n}\n:host-context(.dark-theme) .progress-bar-container {\n  background: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=diary-progress.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiaryProgressComponent, { className: "DiaryProgressComponent", filePath: "src/app/modules/dashboard/components/widgets/diary-progress/diary-progress.component.ts", lineNumber: 12 });
})();

// src/app/modules/dashboard/components/widgets/novel-stats/novel-stats.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function NovelStatsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
function NovelStatsComponent_Conditional_8_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function NovelStatsComponent_Conditional_8_For_22_Template_div_click_0_listener() {
      const novel_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onNovelClick(novel_r2));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-icon", 16);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const novel_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(novel_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.formatNumber(novel_r2.characters), " \uC790");
  }
}
function NovelStatsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "mat-icon");
    \u0275\u0275text(3, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "span", 7);
    \u0275\u0275text(6, "\uC804\uCCB4 \uC18C\uC124");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "mat-icon");
    \u0275\u0275text(11, "text_fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6)(13, "span", 7);
    \u0275\u0275text(14, "\uCD1D \uAE00\uC790\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 9)(18, "h3");
    \u0275\u0275text(19, "\uCD5C\uADFC \uC791\uC5C5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275repeaterCreate(21, NovelStatsComponent_Conditional_8_For_22_Template, 10, 2, "div", 11, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.totalNovels);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(ctx_r2.stats.totalCharacters));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.stats.recentNovels);
  }
}
var NovelStatsComponent = class _NovelStatsComponent extends DataAbstract {
  dashboardVM = inject(DashboardViewModel);
  stats = null;
  ngOnInit() {
    console.log("\uC18C\uC124 \uD1B5\uACC4 \uC704\uC82F - \uB4E4\uC5B4\uC628 \uB370\uC774\uD130:", this.data);
    this.dashboardVM.novelStats$.pipe(takeUntil(this.destroy$)).subscribe((stats) => {
      this.stats = stats;
    });
  }
  formatNumber(num) {
    return num.toLocaleString("ko-KR");
  }
  onNovelClick(novel) {
    this.output.emit({ type: "novel-click", data: novel });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NovelStatsComponent_BaseFactory;
    return function NovelStatsComponent_Factory(__ngFactoryType__) {
      return (\u0275NovelStatsComponent_BaseFactory || (\u0275NovelStatsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NovelStatsComponent)))(__ngFactoryType__ || _NovelStatsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NovelStatsComponent, selectors: [["app-novel-stats"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 2, consts: [[1, "widget-card"], [1, "widget-toolbar"], [1, "widget-content"], [1, "empty-state"], [1, "stats-summary"], [1, "stat-item"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "recent-novels"], [1, "novel-list"], [1, "novel-item"], [1, "novel-item", 3, "click"], [1, "novel-info"], [1, "novel-title"], [1, "novel-characters"], [1, "arrow-icon"]], template: function NovelStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-toolbar", 1)(2, "mat-icon");
      \u0275\u0275text(3, "menu_book");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275conditionalCreate(7, NovelStatsComponent_Conditional_7_Template, 5, 0, "div", 3)(8, NovelStatsComponent_Conditional_8_Template, 23, 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.data == null ? null : ctx.data.title) || "\uC18C\uC124 \uD1B5\uACC4");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.stats ? 7 : 8);
    }
  }, dependencies: [MatToolbar, MatIcon, MatCard], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.stats-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-summary[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 172, 254, 0.1) 0%,\n      rgba(0, 242, 254, 0.1) 100%);\n  border-radius: 8px;\n}\n.stats-summary[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #4facfe;\n}\n.stats-summary[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stats-summary[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.stats-summary[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.recent-novels[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin: 0 0 12px 0;\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(79, 172, 254, 0.05);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 172, 254, 0.1);\n  transform: translateX(4px);\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%]:first-child {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #4facfe;\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%]   .novel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%]   .novel-info[_ngcontent-%COMP%]   .novel-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%]   .novel-info[_ngcontent-%COMP%]   .novel-characters[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.recent-novels[_ngcontent-%COMP%]   .novel-item[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .stats-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=novel-stats.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NovelStatsComponent, [{
    type: Component,
    args: [{ selector: "app-novel-stats", standalone: false, template: `<mat-card class="widget-card">
  <mat-toolbar class="widget-toolbar">
    <mat-icon>menu_book</mat-icon>
    <span>{{ data?.title || '\uC18C\uC124 \uD1B5\uACC4' }}</span>
  </mat-toolbar>

  <div class="widget-content">
    @if (!stats) {
      <div class="empty-state">
        <mat-icon>hourglass_empty</mat-icon>
        <p>\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...</p>
      </div>
    } @else {
      <div class="stats-summary">
        <div class="stat-item">
          <mat-icon>folder</mat-icon>
          <div class="stat-info">
            <span class="stat-label">\uC804\uCCB4 \uC18C\uC124</span>
            <span class="stat-value">{{ stats.totalNovels }}</span>
          </div>
        </div>
        <div class="stat-item">
          <mat-icon>text_fields</mat-icon>
          <div class="stat-info">
            <span class="stat-label">\uCD1D \uAE00\uC790\uC218</span>
            <span class="stat-value">{{ formatNumber(stats.totalCharacters) }}</span>
          </div>
        </div>
      </div>

      <div class="recent-novels">
        <h3>\uCD5C\uADFC \uC791\uC5C5</h3>
        <div class="novel-list">
          @for (novel of stats.recentNovels; track novel.id) {
            <div class="novel-item" (click)="onNovelClick(novel)">
              <mat-icon>description</mat-icon>
              <div class="novel-info">
                <div class="novel-title">{{ novel.title }}</div>
                <div class="novel-characters">{{ formatNumber(novel.characters) }} \uC790</div>
              </div>
              <mat-icon class="arrow-icon">chevron_right</mat-icon>
            </div>
          }
        </div>
      </div>
    }
  </div>
</mat-card>
`, styles: ["/* src/app/modules/dashboard/components/widgets/novel-stats/novel-stats.component.scss */\n.widget-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content {\n  flex: 1;\n  padding: 16px;\n  overflow-y: auto;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: #9e9e9e;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.stats-summary {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-summary .stat-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 172, 254, 0.1) 0%,\n      rgba(0, 242, 254, 0.1) 100%);\n  border-radius: 8px;\n}\n.stats-summary .stat-item mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #4facfe;\n}\n.stats-summary .stat-item .stat-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stats-summary .stat-item .stat-info .stat-label {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.stats-summary .stat-item .stat-info .stat-value {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.recent-novels h3 {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin: 0 0 12px 0;\n}\n.recent-novels .novel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.recent-novels .novel-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(79, 172, 254, 0.05);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.recent-novels .novel-item:hover {\n  background: rgba(79, 172, 254, 0.1);\n  transform: translateX(4px);\n}\n.recent-novels .novel-item > mat-icon:first-child {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #4facfe;\n}\n.recent-novels .novel-item .novel-info {\n  flex: 1;\n  min-width: 0;\n}\n.recent-novels .novel-item .novel-info .novel-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.recent-novels .novel-item .novel-info .novel-characters {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.recent-novels .novel-item .arrow-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .stats-summary {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=novel-stats.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NovelStatsComponent, { className: "NovelStatsComponent", filePath: "src/app/modules/dashboard/components/widgets/novel-stats/novel-stats.component.ts", lineNumber: 12 });
})();

// node_modules/d3-array/src/ascending.js
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left2(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a, x2, lo = 0, hi = a.length) {
    const i = left2(a, x2, lo, hi - 1);
    return i > lo && delta(a[i - 1], x2) > -delta(a[i], x2) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/extent.js
function extent(values, valueof) {
  let min3;
  let max4;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min3 === void 0) {
          if (value >= value) min3 = max4 = value;
        } else {
          if (min3 > value) min3 = value;
          if (max4 < value) max4 = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min3 === void 0) {
          if (value >= value) min3 = max4 = value;
        } else {
          if (min3 > value) min3 = value;
          if (max4 < value) max4 = value;
        }
      }
    }
  }
  return [min3, max4];
}

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop, count) {
  const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start2, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  if (!(count > 0)) return [];
  if (start2 === stop) return [start2];
  const reverse = stop < start2, [i1, i2, inc] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  return tickSpec(start2, stop, count)[2];
}
function tickStep(start2, stop, count) {
  stop = +stop, start2 = +start2, count = +count;
  const reverse = stop < start2, inc = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max4;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max4 < value || max4 === void 0 && value >= value)) {
        max4 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max4 < value || max4 === void 0 && value >= value)) {
        max4 = value;
      }
    }
  }
  return max4;
}

// node_modules/d3-axis/src/identity.js
function identity_default(x2) {
  return x2;
}

// node_modules/d3-axis/src/axis.js
var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
function translateX(x2) {
  return "translate(" + x2 + ",0)";
}
function translateY(y2) {
  return "translate(0," + y2 + ")";
}
function number2(scale) {
  return (d) => +scale(d);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return (d) => +scale(d) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x2 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number2)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x2 + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x2, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position(d)) ? transform2(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2((p && isFinite(p = p(d)) ? p : position(d)) + offset);
      });
    }
    tickExit.remove();
    path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position(d) + offset);
    });
    line.attr(x2 + "2", k * tickSizeInner);
    text.attr(x2, k * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _ = this._;
    for (var t in _) copy2[t] = _[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name) {
      return c.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null) type2.push({ name, value: callback });
  return type2;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x2) {
  return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending2;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending2(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min3 = Math.min(r, g, b), max4 = Math.max(r, g, b), h = NaN, s = max4 - min3, l = (max4 + min3) / 2;
  if (s) {
    if (r === max4) h = (g - b) / s + (g < b) * 6;
    else if (g === max4) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max4 + min3 : 2 - max4 - min3;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default2 = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant_default2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = (function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
})(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x2[i](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t02, t12 = taskHead, t2, time2 = Infinity;
  while (t12) {
    if (t12._call) {
      if (time2 > t12._time) time2 = t12._time;
      t02 = t12, t12 = t12._next;
    } else {
      t2 = t12._next, t12._next = null;
      t12 = t02 ? t02._next = t2 : taskHead = t2;
    }
  }
  taskTail = t02;
  sleep(time2);
}
function sleep(time2) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity) timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t02 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t02 = (i0 = i) && attrInterpolate(name, i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t02, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t02 = (i0 = i) && textInterpolate(i);
    return t02;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-brush/src/brush.js
var { abs, max: max2, min } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number22(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x2, e) {
    return x2 == null ? null : [[+x2[0], e[0][1]], [+x2[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y2, e) {
    return y2 == null ? null : [[e[0][0], +y2[0]], [e[1][0], +y2[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number22(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon2 = 1e-6;
var tauEpsilon = tau - epsilon2;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon2)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon2) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon2) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon2 || Math.abs(this._y1 - y0) > epsilon2) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon2) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default2(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map2 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map2.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map2.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n") comma = true, type2 = "g";
    else if (!formatTypes_default[type2]) precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max4) {
  step = Math.abs(step), max4 = Math.abs(max4) - step;
  return Math.max(0, exponent_default(max4) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-scale/src/number.js
function number3(x2) {
  return +x2;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity2(x2) {
  return x2;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x2) {
    return (x2 - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x2) {
    return Math.max(a, Math.min(b, x2));
  };
}
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity2, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity2) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain.map(transform2), range, interpolate)))(transform2(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform2), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number3), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity2, rescale()) : clamp !== identity2;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform2 = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity2, identity2);
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop, count, specifier) {
  var step = tickStep(start2, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count);
      if (step === prestep) {
        d[i0] = start2;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval2.floor(x0);
  domain[i1] = interval2.ceil(x1);
  return domain;
}

// node_modules/d3-time/src/interval.js
var t0 = /* @__PURE__ */ new Date();
var t1 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval2.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval2.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = (date2) => {
    const d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = (start2, stop, step) => {
    const range = [];
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0)) return range;
    let previous;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range;
  };
  interval2.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count) {
    interval2.count = (start2, end) => {
      t0.setTime(+start2), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval2.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? (d) => field(d) % step === 0 : (d) => interval2.count(0, d) % step === 0);
    };
  }
  return interval2;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start2, end) => {
  return end - start2;
});
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k) * k);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k);
  }, (start2, end) => {
    return (end - start2) / k;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start2, end) => {
  return (end - start2) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start2, end) => {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start2, end) => {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start2, end) => {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start2, end) => {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start2, end) => {
  return end.getFullYear() - start2.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k) * k);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start2, end) => {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k) * k);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start2, stop, count) {
    const reverse = stop < start2;
    if (reverse) [start2, stop] = [stop, start2];
    const interval2 = count && typeof count.range === "function" ? count : tickInterval(start2, stop, count);
    const ticks3 = interval2 ? interval2.range(start2, +stop + 1) : [];
    return reverse ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop, count) {
    const target = Math.abs(stop - start2) / count;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start2 / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start2, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c]) c = format2(date2, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number4(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number4)) : domain().map(date);
  };
  scale.ticks = function(interval2) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval2) {
    var d = domain();
    if (!interval2 || typeof interval2.range !== "function") interval2 = tickInterval(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
    return interval2 ? domain(nice(d, interval2)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-shape/src/constant.js
function constant_default4(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-shape/src/math.js
var abs2 = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max3 = Math.max;
var min2 = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;
var epsilon3 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi2 : Math.acos(x2);
}
function asin(x2) {
  return x2 >= 1 ? halfPi : x2 <= -1 ? -halfPi : Math.asin(x2);
}

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/arc.js
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon3) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max3(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default4(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path2 = withPath(arc);
  function arc() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs2(a1 - a0), cw = a1 > a0;
    if (!context) context = buffer = path2();
    if (r1 < r0) r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon3)) context.moveTo(0, 0);
    else if (da > tau2 - epsilon3) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon3) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon3 && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min2(abs2(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t02, t12;
      if (rp > epsilon3) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon3) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon3) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon3) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
        if (da < pi2) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min2(rc, (r0 - lc) / (kc - 1));
            rc1 = min2(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }
      if (!(da1 > epsilon3)) context.moveTo(x01, y01);
      else if (rc1 > epsilon3) {
        t02 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t12 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t02.cx + t02.x01, t02.cy + t02.y01);
        if (rc1 < rc) context.arc(t02.cx, t02.cy, rc1, atan2(t02.y01, t02.x01), atan2(t12.y01, t12.x01), !cw);
        else {
          context.arc(t02.cx, t02.cy, rc1, atan2(t02.y01, t02.x01), atan2(t02.y11, t02.x11), !cw);
          context.arc(0, 0, r1, atan2(t02.cy + t02.y11, t02.cx + t02.x11), atan2(t12.cy + t12.y11, t12.cx + t12.x11), !cw);
          context.arc(t12.cx, t12.cy, rc1, atan2(t12.y11, t12.x11), atan2(t12.y01, t12.x01), !cw);
        }
      } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon3) || !(da0 > epsilon3)) context.lineTo(x10, y10);
      else if (rc0 > epsilon3) {
        t02 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t12 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t02.cx + t02.x01, t02.cy + t02.y01);
        if (rc0 < rc) context.arc(t02.cx, t02.cy, rc0, atan2(t02.y01, t02.x01), atan2(t12.y01, t12.x01), !cw);
        else {
          context.arc(t02.cx, t02.cy, rc0, atan2(t02.y01, t02.x01), atan2(t02.y11, t02.x11), !cw);
          context.arc(0, 0, r0, atan2(t02.cy + t02.y11, t02.cx + t02.x11), atan2(t12.cy + t12.y11, t12.cx + t12.x11), cw);
          context.arc(t12.cx, t12.cy, rc0, atan2(t12.y11, t12.x11), atan2(t12.y01, t12.x01), !cw);
        }
      } else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi2 / 2;
    return [cos(a) * r, sin(a) * r];
  };
  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default4(+_), arc) : innerRadius;
  };
  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default4(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default4(+_), arc) : cornerRadius;
  };
  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default4(+_), arc) : padRadius;
  };
  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default4(+_), arc) : startAngle;
  };
  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default4(+_), arc) : endAngle;
  };
  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default4(+_), arc) : padAngle;
  };
  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default4(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default4(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default4(y2);
  function line(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default4(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default4(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default4(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default4(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default4(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default4(0) : constant_default4(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default4(+y1);
  function area(data) {
    var i, j, k, n = (data = array_default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default4(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default4(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default4(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default4(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default4(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default4(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default4(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/descending.js
function descending_default(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

// node_modules/d3-shape/src/identity.js
function identity_default3(d) {
  return d;
}

// node_modules/d3-shape/src/pie.js
function pie_default() {
  var value = identity_default3, sortValues = descending_default, sort = null, startAngle = constant_default4(0), endAngle = constant_default4(tau2), padAngle = constant_default4(0);
  function pie(data) {
    var i, n = (data = array_default(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau2, Math.max(-tau2, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }
    if (sortValues != null) index.sort(function(i2, j2) {
      return sortValues(arcs[i2], arcs[j2]);
    });
    else if (sort != null) index.sort(function(i2, j2) {
      return sort(data[i2], data[j2]);
    });
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default4(+_), pie) : value;
  };
  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };
  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };
  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default4(+_), pie) : startAngle;
  };
  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default4(+_), pie) : endAngle;
  };
  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default4(+_), pie) : padAngle;
  };
  return pie;
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x2, y2) {
  this.k = k;
  this.x = x2;
  this.y = y2;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x2, y2) {
    return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
  },
  apply: function(point2) {
    return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y2) {
    return y2 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y2) {
    return (y2 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y2) {
    return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity3 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity3;
  return node.__zoom;
}

// src/app/modules/dashboard/components/widgets/diary-donut-chart/diary-donut-chart.component.ts
var _c0 = ["chartContainer"];
function DiaryDonutChartComponent_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.color[item_r1.status]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (item_r1.ratio * 100).toFixed(0), "%");
  }
}
function DiaryDonutChartComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DiaryDonutChartComponent_For_11_Conditional_0_Template, 8, 5, "div", 6);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(item_r1.status !== "all" ? 0 : -1);
  }
}
var DiaryDonutChartComponent = class _DiaryDonutChartComponent extends DataAbstract {
  chartContainer;
  dashboardVM = inject(DashboardViewModel);
  svg;
  scheduleRatio = [
    { count: 0, status: "all", label: "\uC804\uCCB4", ratio: 0 },
    { count: 0, status: "receive", label: "\uB300\uAE30", ratio: 0 },
    { count: 0, status: "progress", label: "\uC9C4\uD589\uC911", ratio: 0 },
    { count: 0, status: "complete", label: "\uC644\uB8CC", ratio: 0 }
  ];
  color = {
    all: "#2196F3",
    // 파란색 (전체)
    receive: "#90CAF9",
    // 밝은 파란색 (대기)
    progress: "#FFB74D",
    // 밝은 주황색 (진행중)
    complete: "#66BB6A"
    // 선명한 녹색 (완료)
  };
  ngOnInit() {
    console.log("\uB3C4\uB11B \uCC28\uD2B8 \uC704\uC82F - \uB4E4\uC5B4\uC628 \uB370\uC774\uD130:", this.data);
    this.dashboardVM.diaryProgress$.pipe(takeUntil(this.destroy$)).subscribe((progress) => {
      if (!progress)
        return;
      this.scheduleRatio = [
        {
          count: progress.receive,
          status: "receive",
          label: "\uB300\uAE30",
          ratio: progress.ratios.receive
        },
        {
          count: progress.progress,
          status: "progress",
          label: "\uC9C4\uD589\uC911",
          ratio: progress.ratios.progress
        },
        {
          count: progress.complete,
          status: "complete",
          label: "\uC644\uB8CC",
          ratio: progress.ratios.complete
        }
      ];
      const chartData = this.scheduleRatio.filter((d) => d.count > 0);
      if (this.svg) {
        this.renderChart(chartData);
      }
    });
  }
  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.createDonutChart();
    });
  }
  createDonutChart() {
    select_default2(this.chartContainer.nativeElement).select("svg").remove();
    const rect = this.chartContainer.nativeElement.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) / 2;
    this.svg = select_default2(this.chartContainer.nativeElement).append("svg").attr("width", radius * 2).attr("height", radius * 2).style("overflow", "visible").append("g").attr("transform", `translate(${radius}, ${radius})`);
    const chartData = this.scheduleRatio.filter((d) => d.count > 0);
    this.renderChart(chartData);
  }
  renderChart(data) {
    if (!data || data.length === 0) {
      data = [{ count: 1, status: "all", label: "\uB370\uC774\uD130 \uC5C6\uC74C" }];
    }
    const total = data.reduce((sum, d) => sum + d.count, 0);
    const rect = this.chartContainer.nativeElement.getBoundingClientRect();
    const min3 = Math.min(rect.width, rect.height);
    const radius = min3 / 2;
    const pie = pie_default().value((d) => d.count).sort(null);
    const arc = arc_default().innerRadius(radius * 0.5).outerRadius(radius);
    const paths = this.svg.selectAll("path").data(pie(data));
    paths.transition().duration(1e3).attrTween("d", function(d) {
      const element = this;
      const interpolate = value_default(element._current || d, d);
      element._current = interpolate(1);
      return function(t) {
        return arc(interpolate(t));
      };
    }).attr("fill", (d) => this.color[d.data.status]);
    paths.enter().append("path").attr("d", arc).attr("fill", (d) => this.color[d.data.status]).attr("stroke", "#fff").attr("stroke-width", 2).each(function(d) {
      this._current = d;
    }).transition().duration(1e3).attrTween("d", function(d) {
      const interpolate = value_default({ startAngle: 0, endAngle: 0 }, d);
      this._current = interpolate(1);
      return function(t) {
        return arc(interpolate(t));
      };
    });
    const labels = this.svg.selectAll("text").data(pie(data));
    const textSize = "1.1em";
    labels.attr("transform", (d) => {
      const [x2, y2] = arc.centroid(d);
      return `translate(${x2}, ${y2})`;
    }).attr("text-anchor", "middle").text("").each(function(d) {
      if (d.data.count === 0)
        return;
      const text = select_default2(this);
      text.selectAll("tspan").remove();
      text.append("tspan").attr("x", 0).attr("dy", "0em").style("font-size", textSize).style("fill", "#fff").style("font-weight", "600").text(d.data.label);
      text.append("tspan").attr("x", 0).attr("dy", textSize).style("font-size", textSize).style("fill", "#fff").style("font-weight", "600").text(`${Math.round(d.data.count / total * 100)}%`);
    });
    labels.enter().append("text").attr("transform", (d) => {
      const [x2, y2] = arc.centroid(d);
      return `translate(${x2}, ${y2})`;
    }).attr("text-anchor", "middle").style("font-size", textSize).style("fill", "#fff").each(function(d) {
      if (d.data.count === 0)
        return;
      const text = select_default2(this);
      text.selectAll("tspan").remove();
      text.append("tspan").attr("x", 0).attr("dy", "0em").style("font-weight", "600").text(d.data.label);
      text.append("tspan").attr("x", 0).attr("dy", textSize).style("font-size", textSize).style("font-weight", "600").text(`${Math.round(d.data.count / total * 100)}%`);
    });
    paths.exit().remove();
    labels.exit().remove();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DiaryDonutChartComponent_BaseFactory;
    return function DiaryDonutChartComponent_Factory(__ngFactoryType__) {
      return (\u0275DiaryDonutChartComponent_BaseFactory || (\u0275DiaryDonutChartComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DiaryDonutChartComponent)))(__ngFactoryType__ || _DiaryDonutChartComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiaryDonutChartComponent, selectors: [["app-diary-donut-chart"]], viewQuery: function DiaryDonutChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartContainer = _t.first);
    }
  }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 1, consts: [["chartContainer", ""], [1, "widget-card"], [1, "widget-toolbar"], [1, "widget-content"], [1, "chart-container"], [1, "legend-container"], [1, "legend-item"], [1, "legend-color"], [1, "legend-label"], [1, "legend-count"], [1, "legend-ratio"]], template: function DiaryDonutChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-toolbar", 2)(2, "mat-icon");
      \u0275\u0275text(3, "donut_large");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275element(7, "div", 4, 0);
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275repeaterCreate(10, DiaryDonutChartComponent_For_11_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.data == null ? null : ctx.data.title) || "\uC77C\uC815 \uBD84\uC11D");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.scheduleRatio);
    }
  }, dependencies: [MatToolbar, MatIcon, MatCard], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  overflow-y: auto;\n}\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.legend-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: rgba(102, 126, 234, 0.05);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.legend-item[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n  transform: translateX(4px);\n}\n.legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.legend-item[_ngcontent-%COMP%]   .legend-count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  min-width: 30px;\n  text-align: right;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-ratio[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  min-width: 45px;\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .chart-container[_ngcontent-%COMP%] {\n    max-width: 250px;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=diary-donut-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiaryDonutChartComponent, [{
    type: Component,
    args: [{ selector: "app-diary-donut-chart", standalone: false, template: `<mat-card class="widget-card">
  <mat-toolbar class="widget-toolbar">
    <mat-icon>donut_large</mat-icon>
    <span>{{ data?.title || '\uC77C\uC815 \uBD84\uC11D' }}</span>
  </mat-toolbar>

  <div class="widget-content">
    <div class="chart-container" #chartContainer></div>
    
    <div class="legend-container">
      @for (item of scheduleRatio; track $index) {
        @if (item.status !== 'all') {
          <div class="legend-item">
            <div class="legend-color" [style.background-color]="color[item.status]"></div>
            <span class="legend-label">{{ item.label }}</span>
            <span class="legend-count">{{ item.count }}</span>
            <span class="legend-ratio">{{ (item.ratio * 100).toFixed(0) }}%</span>
          </div>
        }
      }
    </div>
  </div>
</mat-card>
`, styles: ["/* src/app/modules/dashboard/components/widgets/diary-donut-chart/diary-donut-chart.component.scss */\n.widget-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content {\n  flex: 1;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  overflow-y: auto;\n}\n.chart-container {\n  width: 100%;\n  max-width: 300px;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.legend-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: rgba(102, 126, 234, 0.05);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.legend-item:hover {\n  background: rgba(102, 126, 234, 0.1);\n  transform: translateX(4px);\n}\n.legend-item .legend-color {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.legend-item .legend-label {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.legend-item .legend-count {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  min-width: 30px;\n  text-align: right;\n}\n.legend-item .legend-ratio {\n  font-size: 13px;\n  color: var(--text-secondary);\n  min-width: 45px;\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .chart-container {\n    max-width: 250px;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=diary-donut-chart.component.css.map */\n"] }]
  }], null, { chartContainer: [{
    type: ViewChild,
    args: ["chartContainer", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiaryDonutChartComponent, { className: "DiaryDonutChartComponent", filePath: "src/app/modules/dashboard/components/widgets/diary-donut-chart/diary-donut-chart.component.ts", lineNumber: 13 });
})();

// src/app/modules/dashboard/components/widgets/schedule-line-chart/schedule-line-chart.component.ts
var _c02 = ["chartContainer"];
var ScheduleLineChartComponent = class _ScheduleLineChartComponent extends DataAbstract {
  chartContainer;
  dashboardVM = inject(DashboardViewModel);
  svg;
  x;
  y;
  margin = { top: 20, right: 20, bottom: 40, left: 40 };
  dummyData = this.generateDummyData();
  ngOnInit() {
    console.log("\uB77C\uC778 \uCC28\uD2B8 \uC704\uC82F - \uB4E4\uC5B4\uC628 \uB370\uC774\uD130:", this.data);
    setTimeout(() => {
      const mockData = this.generateMockData();
      this.updateChart(mockData);
    }, 500);
  }
  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.initializeChart();
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  generateDummyData() {
    const now2 = /* @__PURE__ */ new Date();
    return Array.from({ length: 30 }, (_, i) => {
      const date2 = /* @__PURE__ */ new Date();
      date2.setDate(now2.getDate() - (29 - i));
      return { date: date2, count: 0 };
    });
  }
  generateMockData() {
    const now2 = /* @__PURE__ */ new Date();
    return Array.from({ length: 30 }, (_, i) => {
      const date2 = /* @__PURE__ */ new Date();
      date2.setDate(now2.getDate() - (29 - i));
      return {
        date: date2,
        count: Math.floor(Math.random() * 10) + 1
        // 1-10 사이 랜덤 값
      };
    });
  }
  initializeChart() {
    const rect = this.chartContainer.nativeElement.getBoundingClientRect();
    const width = Math.max(rect.width, 400);
    const height = Math.max(rect.height, 250);
    this.svg = select_default2(this.chartContainer.nativeElement).append("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    this.x = time().range([0, width - this.margin.left - this.margin.right]);
    this.y = linear2().range([height - this.margin.top - this.margin.bottom, 0]);
    this.svg.append("g").attr("class", "x-axis").attr("transform", `translate(0,${height - this.margin.top - this.margin.bottom})`);
    this.svg.append("g").attr("class", "y-axis");
    this.updateChart(this.dummyData);
  }
  updateChart(data) {
    this.x.domain(extent(data, (d) => d.date));
    this.y.domain([0, max(data, (d) => d.count) || 10]);
    this.svg.select(".x-axis").transition().duration(1e3).call(axisBottom(this.x).tickFormat(timeFormat("%m/%d"))).selectAll("text").attr("transform", "rotate(-45)").style("text-anchor", "end").style("font-size", "11px");
    this.svg.select(".y-axis").transition().duration(1e3).call(axisLeft(this.y).ticks(5)).selectAll("text").style("font-size", "11px");
    const line = line_default().x((d) => this.x(d.date)).y((d) => this.y(d.count)).curve(monotoneX);
    const area = area_default().x((d) => this.x(d.date)).y0(this.y(0)).y1((d) => this.y(d.count)).curve(monotoneX);
    this.svg.selectAll(".area").data([data]).join((enter) => enter.append("path").attr("class", "area").attr("fill", "url(#gradient)").attr("d", area), (update) => update.transition().duration(1e3).attr("d", area), (exit) => exit.remove());
    const defs = this.svg.select("defs").size() > 0 ? this.svg.select("defs") : this.svg.append("defs");
    const gradient = defs.selectAll("#gradient").data([null]).join("linearGradient").attr("id", "gradient").attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
    gradient.selectAll("stop").remove();
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#4facfe").attr("stop-opacity", 0.6);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#00f2fe").attr("stop-opacity", 0.1);
    this.svg.selectAll(".line").data([data]).join((enter) => enter.append("path").attr("class", "line").attr("fill", "none").attr("stroke", "#4facfe").attr("stroke-width", 3).attr("d", line), (update) => update.transition().duration(1e3).attr("d", line), (exit) => exit.remove());
    this.svg.selectAll(".point").data(data).join((enter) => enter.append("circle").attr("class", "point").attr("r", 4).attr("fill", "#4facfe").attr("stroke", "#fff").attr("stroke-width", 2).attr("cx", (d) => this.x(d.date)).attr("cy", (d) => this.y(d.count)).style("cursor", "pointer").on("mouseover", function(event, d) {
      select_default2(this).transition().duration(200).attr("r", 6);
    }).on("mouseout", function() {
      select_default2(this).transition().duration(200).attr("r", 4);
    }), (update) => update.transition().duration(1e3).attr("cx", (d) => this.x(d.date)).attr("cy", (d) => this.y(d.count)), (exit) => exit.remove());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScheduleLineChartComponent_BaseFactory;
    return function ScheduleLineChartComponent_Factory(__ngFactoryType__) {
      return (\u0275ScheduleLineChartComponent_BaseFactory || (\u0275ScheduleLineChartComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ScheduleLineChartComponent)))(__ngFactoryType__ || _ScheduleLineChartComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleLineChartComponent, selectors: [["app-schedule-line-chart"]], viewQuery: function ScheduleLineChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartContainer = _t.first);
    }
  }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 1, consts: [["chartContainer", ""], [1, "widget-card"], [1, "widget-toolbar"], [1, "widget-content"], [1, "chart-container"], [1, "chart-info"], [1, "info-text"]], template: function ScheduleLineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-toolbar", 2)(2, "mat-icon");
      \u0275\u0275text(3, "show_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275element(7, "div", 4, 0);
      \u0275\u0275elementStart(9, "div", 5)(10, "span", 6);
      \u0275\u0275text(11, "\uCD5C\uADFC 30\uC77C\uAC04 \uC644\uB8CC\uB41C \uC77C\uC815");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.data == null ? null : ctx.data.title) || "\uC644\uB8CC \uCD94\uC774");
    }
  }, dependencies: [MatToolbar, MatIcon, MatCard], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow: hidden;\n}\n.chart-container[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  min-height: 250px;\n  position: relative;\n}\n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(svg) {\n  width: 100%;\n  height: 100%;\n}\n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.x-axis)   path[_ngcontent-%COMP%], \n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.x-axis)   line[_ngcontent-%COMP%], \n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.y-axis)   path[_ngcontent-%COMP%], \n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.y-axis)   line[_ngcontent-%COMP%] {\n  stroke: var(--text-secondary);\n  opacity: 0.3;\n}\n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.x-axis)   text[_ngcontent-%COMP%], \n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.y-axis)   text[_ngcontent-%COMP%] {\n  fill: var(--text-secondary);\n}\n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.line) {\n  filter: drop-shadow(0 2px 4px rgba(79, 172, 254, 0.3));\n}\n.chart-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.point) {\n  filter: drop-shadow(0 2px 4px rgba(79, 172, 254, 0.4));\n}\n.chart-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n.chart-info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.dark-theme[_nghost-%COMP%]   .chart-info[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .chart-info[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=schedule-line-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleLineChartComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-line-chart", standalone: false, template: `<mat-card class="widget-card">
  <mat-toolbar class="widget-toolbar">
    <mat-icon>show_chart</mat-icon>
    <span>{{ data?.title || '\uC644\uB8CC \uCD94\uC774' }}</span>
  </mat-toolbar>

  <div class="widget-content">
    <div class="chart-container" #chartContainer></div>
    <div class="chart-info">
      <span class="info-text">\uCD5C\uADFC 30\uC77C\uAC04 \uC644\uB8CC\uB41C \uC77C\uC815</span>
    </div>
  </div>
</mat-card>
`, styles: ["/* src/app/modules/dashboard/components/widgets/schedule-line-chart/schedule-line-chart.component.scss */\n.widget-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.widget-toolbar {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.widget-toolbar mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-content {\n  flex: 1;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow: hidden;\n}\n.chart-container {\n  flex: 1;\n  width: 100%;\n  min-height: 250px;\n  position: relative;\n}\n.chart-container :deep(svg) {\n  width: 100%;\n  height: 100%;\n}\n.chart-container :deep(.x-axis) path,\n.chart-container :deep(.x-axis) line,\n.chart-container :deep(.y-axis) path,\n.chart-container :deep(.y-axis) line {\n  stroke: var(--text-secondary);\n  opacity: 0.3;\n}\n.chart-container :deep(.x-axis) text,\n.chart-container :deep(.y-axis) text {\n  fill: var(--text-secondary);\n}\n.chart-container :deep(.line) {\n  filter: drop-shadow(0 2px 4px rgba(79, 172, 254, 0.3));\n}\n.chart-container :deep(.point) {\n  filter: drop-shadow(0 2px 4px rgba(79, 172, 254, 0.4));\n}\n.chart-info {\n  text-align: center;\n  padding: 8px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n.chart-info .info-text {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n:host-context(.dark-theme) .chart-info {\n  border-top-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=schedule-line-chart.component.css.map */\n"] }]
  }], null, { chartContainer: [{
    type: ViewChild,
    args: ["chartContainer", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleLineChartComponent, { className: "ScheduleLineChartComponent", filePath: "src/app/modules/dashboard/components/widgets/schedule-line-chart/schedule-line-chart.component.ts", lineNumber: 13 });
})();

// src/app/modules/dashboard/components/dashboard/dashboard.component.ts
var _c03 = (a0) => ({ data: a0 });
function DashboardComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getCurrentUsername());
  }
}
function DashboardComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\uC0AC\uC6A9\uC790");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_30_For_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DashboardComponent_For_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275template(2, DashboardComponent_For_30_For_2_ng_container_2_Template, 1, 0, "ng-container", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    \u0275\u0275property("ngStyle", column_r2.style);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngComponentOutlet", column_r2.component)("ngComponentOutletInputs", \u0275\u0275pureFunction1(3, _c03, column_r2.data));
  }
}
function DashboardComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, DashboardComponent_For_30_For_2_Template, 3, 5, "div", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275property("ngStyle", row_r3.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.columns);
  }
}
var DashboardComponent = class _DashboardComponent {
  dashboardVM = inject(DashboardViewModel);
  authService = inject(DashboardAuthService);
  router = inject(Router);
  configs = [];
  ngOnInit() {
    this.initializeGridLayout();
    this.dashboardVM.refreshDashboard();
  }
  initializeGridLayout() {
    this.configs = [
      {
        style: {
          display: "flex",
          gap: "16px",
          width: "100%",
          marginBottom: "16px"
        },
        columns: [
          {
            component: TodayScheduleComponent,
            style: { flex: "1" },
            data: { title: "\uC624\uB298 \uC77C\uC815" }
          },
          {
            component: DiaryDonutChartComponent,
            style: { flex: "1" },
            data: { title: "\uC77C\uC815 \uBD84\uC11D" }
          }
        ]
      },
      {
        style: {
          display: "flex",
          gap: "16px",
          width: "100%",
          marginBottom: "16px"
        },
        columns: [
          {
            component: DiaryProgressComponent,
            style: { flex: "1" },
            data: { title: "\uC77C\uC815 \uC9C4\uD589\uB960" }
          },
          {
            component: NovelStatsComponent,
            style: { flex: "1" },
            data: { title: "\uC18C\uC124 \uD1B5\uACC4" }
          }
        ]
      },
      {
        style: {
          display: "flex",
          gap: "16px",
          width: "100%"
        },
        columns: [
          {
            component: ScheduleLineChartComponent,
            style: { flex: "1" },
            data: { title: "\uC644\uB8CC \uCD94\uC774 (\uCD5C\uADFC 30\uC77C)" }
          }
        ]
      }
    ];
  }
  setGridColumns(columns) {
    this.configs = this.configs.map((row) => __spreadProps(__spreadValues({}, row), {
      style: __spreadProps(__spreadValues({}, row.style), {
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      })
    }));
  }
  onWidgetOutput(event) {
    console.log("Widget output:", event);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/dashboard/login"]);
  }
  getCurrentUsername() {
    return this.authService.getCurrentUsername();
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: false, decls: 31, vars: 2, consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "header-left"], [1, "welcome-section"], [1, "greeting"], ["class", "username-highlight", 4, "ngIf"], [1, "subtitle"], [1, "header-actions"], ["mat-raised-button", "", "color", "primary", "routerLink", "/dashboard/viral-marketing", 1, "action-btn", "viral-btn"], ["mat-raised-button", "", "matTooltip", "\uC0C8\uB85C\uACE0\uCE68", 1, "action-btn", "refresh-btn", 3, "click"], ["mat-raised-button", "", "matTooltip", "\uB85C\uADF8\uC544\uC6C3", 1, "action-btn", "logout-btn", 3, "click"], [1, "dashboard-grid"], [1, "dashboard-row", 3, "ngStyle"], [1, "username-highlight"], [1, "dashboard-column", 3, "ngStyle"], [1, "widget-wrapper"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1")(5, "span", 4);
      \u0275\u0275text(6, "\uC548\uB155\uD558\uC138\uC694,");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DashboardComponent_span_7_Template, 2, 1, "span", 5)(8, DashboardComponent_span_8_Template, 2, 0, "span", 5);
      \u0275\u0275text(9, "\uB2D8 \u{1F44B} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11, "\uC624\uB298\uB3C4 \uC88B\uC740 \uD558\uB8E8 \uB418\uC138\uC694!");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8)(14, "mat-icon");
      \u0275\u0275text(15, "analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "\uBC14\uC774\uB7F4 \uB9C8\uCF00\uD305");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 9);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_18_listener() {
        return ctx.dashboardVM.refreshDashboard();
      });
      \u0275\u0275elementStart(19, "mat-icon");
      \u0275\u0275text(20, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "\uC0C8\uB85C\uACE0\uCE68");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_23_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(24, "mat-icon");
      \u0275\u0275text(25, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "\uB85C\uADF8\uC544\uC6C3");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 11);
      \u0275\u0275repeaterCreate(29, DashboardComponent_For_30_Template, 3, 1, "div", 12, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.getCurrentUsername());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.getCurrentUsername());
      \u0275\u0275advance(21);
      \u0275\u0275repeater(ctx.configs);
    }
  }, dependencies: [NgComponentOutlet, NgIf, NgStyle, RouterLink, MatButton, MatIcon, MatTooltip], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 32px 40px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 32px;\n  font-weight: 700;\n  color: #2d3748;\n  line-height: 1.3;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  color: #718096;\n  font-weight: 400;\n  font-size: 28px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .username-highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 800;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #718096;\n  font-weight: 400;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn.viral-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn.viral-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5568d3 0%,\n      #6a3f8f 100%);\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn.refresh-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n  border: none;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn.refresh-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #3d8fd1 0%,\n      #00d4e0 100%);\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn.logout-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: #e53e3e;\n  border: 2px solid #e53e3e;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #e53e3e;\n  color: white;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  width: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.dashboard-row[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.dashboard-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.dashboard-column[_ngcontent-%COMP%] {\n  min-height: 200px;\n  position: relative;\n}\n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  overflow: visible;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);\n  border-color: #667eea;\n}\n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]:active {\n  transform: translateY(-4px);\n}\n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]     > * {\n  position: relative;\n  z-index: 1;\n}\n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]     .widget-icon, \n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]     mat-icon, \n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]     svg {\n  transition: all 0.3s ease;\n}\n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]:hover     .widget-icon, \n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]:hover     mat-icon:not(.header-actions mat-icon), \n.dashboard-column[_ngcontent-%COMP%]   .widget-wrapper[_ngcontent-%COMP%]:hover     svg:not(.header-actions svg) {\n  transform: scale(1.15) rotate(5deg);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1200px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #667eea 0%,\n        #764ba2 100%);\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 20px;\n    gap: 16px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    min-width: auto;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .dashboard-row[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    gap: 16px !important;\n    margin-bottom: 16px;\n  }\n  .dashboard-column[_ngcontent-%COMP%] {\n    width: 100% !important;\n    flex: none !important;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: false, template: '<div class="dashboard-container">\n  <!-- \uD5E4\uB354 -->\n  <div class="dashboard-header">\n    <div class="header-left">\n      <div class="welcome-section">\n        <h1>\n          <span class="greeting">\uC548\uB155\uD558\uC138\uC694,</span>\n          <span class="username-highlight" *ngIf="getCurrentUsername()">{{ getCurrentUsername() }}</span>\n          <span class="username-highlight" *ngIf="!getCurrentUsername()">\uC0AC\uC6A9\uC790</span>\uB2D8 \u{1F44B}\n        </h1>\n        <p class="subtitle">\uC624\uB298\uB3C4 \uC88B\uC740 \uD558\uB8E8 \uB418\uC138\uC694!</p>\n      </div>\n    </div>\n    <div class="header-actions">\n      <button mat-raised-button color="primary" routerLink="/dashboard/viral-marketing" class="action-btn viral-btn">\n        <mat-icon>analytics</mat-icon>\n        <span>\uBC14\uC774\uB7F4 \uB9C8\uCF00\uD305</span>\n      </button>\n      <button mat-raised-button (click)="dashboardVM.refreshDashboard()" class="action-btn refresh-btn" matTooltip="\uC0C8\uB85C\uACE0\uCE68">\n        <mat-icon>refresh</mat-icon>\n        <span>\uC0C8\uB85C\uACE0\uCE68</span>\n      </button>\n      <button mat-raised-button (click)="logout()" class="action-btn logout-btn" matTooltip="\uB85C\uADF8\uC544\uC6C3">\n        <mat-icon>logout</mat-icon>\n        <span>\uB85C\uADF8\uC544\uC6C3</span>\n      </button>\n    </div>\n  </div>\n\n  <!-- \uB300\uC2DC\uBCF4\uB4DC \uADF8\uB9AC\uB4DC -->\n  <div class="dashboard-grid">\n    @for (row of configs; track $index) {\n      <div class="dashboard-row" [ngStyle]="row.style">\n        @for (column of row.columns; track $index) {\n          <div class="dashboard-column" [ngStyle]="column.style">\n            <div class="widget-wrapper">\n              <ng-container \n                *ngComponentOutlet="column.component; inputs: {data: column.data}">\n              </ng-container>\n            </div>\n          </div>\n        }\n      </div>\n    }\n  </div>\n</div>\n', styles: ["/* src/app/modules/dashboard/components/dashboard/dashboard.component.scss */\n.dashboard-container {\n  padding: 0;\n  width: 100%;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.dashboard-header {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  padding: 32px 40px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n.dashboard-header .header-left {\n  flex: 1;\n}\n.dashboard-header .header-left .welcome-section h1 {\n  margin: 0 0 8px 0;\n  font-size: 32px;\n  font-weight: 700;\n  color: #2d3748;\n  line-height: 1.3;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.dashboard-header .header-left .welcome-section h1 .greeting {\n  color: #718096;\n  font-weight: 400;\n  font-size: 28px;\n}\n.dashboard-header .header-left .welcome-section h1 .username-highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 800;\n}\n.dashboard-header .header-left .welcome-section .subtitle {\n  margin: 0;\n  font-size: 16px;\n  color: #718096;\n  font-weight: 400;\n}\n.dashboard-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.dashboard-header .header-actions .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.dashboard-header .header-actions .action-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.dashboard-header .header-actions .action-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.dashboard-header .header-actions .action-btn:active {\n  transform: translateY(0);\n}\n.dashboard-header .header-actions .action-btn.viral-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.dashboard-header .header-actions .action-btn.viral-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5568d3 0%,\n      #6a3f8f 100%);\n}\n.dashboard-header .header-actions .action-btn.refresh-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n  border: none;\n}\n.dashboard-header .header-actions .action-btn.refresh-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #3d8fd1 0%,\n      #00d4e0 100%);\n}\n.dashboard-header .header-actions .action-btn.logout-btn {\n  background: white;\n  color: #e53e3e;\n  border: 2px solid #e53e3e;\n}\n.dashboard-header .header-actions .action-btn.logout-btn:hover {\n  background: #e53e3e;\n  color: white;\n}\n.dashboard-grid {\n  padding: 32px 40px;\n  width: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.dashboard-row {\n  width: 100%;\n  margin-bottom: 24px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.dashboard-row:last-child {\n  margin-bottom: 0;\n}\n.dashboard-column {\n  min-height: 200px;\n  position: relative;\n}\n.dashboard-column .widget-wrapper {\n  height: 100%;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  overflow: visible;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.dashboard-column .widget-wrapper:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);\n  border-color: #667eea;\n}\n.dashboard-column .widget-wrapper:active {\n  transform: translateY(-4px);\n}\n.dashboard-column .widget-wrapper ::ng-deep > * {\n  position: relative;\n  z-index: 1;\n}\n.dashboard-column .widget-wrapper ::ng-deep .widget-icon,\n.dashboard-column .widget-wrapper ::ng-deep mat-icon,\n.dashboard-column .widget-wrapper ::ng-deep svg {\n  transition: all 0.3s ease;\n}\n.dashboard-column .widget-wrapper:hover ::ng-deep .widget-icon,\n.dashboard-column .widget-wrapper:hover ::ng-deep mat-icon:not(.header-actions mat-icon),\n.dashboard-column .widget-wrapper:hover ::ng-deep svg:not(.header-actions svg) {\n  transform: scale(1.15) rotate(5deg);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1200px) {\n  .dashboard-grid {\n    padding: 24px;\n  }\n  .dashboard-header {\n    padding: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-container {\n    background:\n      linear-gradient(\n        135deg,\n        #667eea 0%,\n        #764ba2 100%);\n  }\n  .dashboard-header {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 20px;\n    gap: 16px;\n  }\n  .dashboard-header .header-left {\n    width: 100%;\n  }\n  .dashboard-header .header-left .welcome-section h1 {\n    font-size: 24px;\n  }\n  .dashboard-header .header-left .welcome-section h1 .greeting {\n    font-size: 20px;\n  }\n  .dashboard-header .header-left .subtitle {\n    font-size: 14px;\n  }\n  .dashboard-header .header-actions {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .dashboard-header .header-actions .action-btn {\n    flex: 1;\n    justify-content: center;\n    min-width: auto;\n  }\n  .dashboard-header .header-actions .action-btn span {\n    display: none;\n  }\n  .dashboard-header .header-actions .action-btn mat-icon {\n    margin: 0;\n  }\n  .dashboard-grid {\n    padding: 16px;\n  }\n  .dashboard-row {\n    flex-direction: column !important;\n    gap: 16px !important;\n    margin-bottom: 16px;\n  }\n  .dashboard-column {\n    width: 100% !important;\n    flex: none !important;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-header {\n    padding: 16px;\n  }\n  .dashboard-header .header-left .welcome-section h1 {\n    font-size: 20px;\n  }\n  .dashboard-header .header-left .welcome-section h1 .greeting {\n    font-size: 18px;\n  }\n  .dashboard-header .header-actions {\n    gap: 8px;\n  }\n  .dashboard-header .header-actions .action-btn {\n    padding: 10px 16px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/modules/dashboard/components/dashboard/dashboard.component.ts", lineNumber: 28 });
})();

// src/app/modules/dashboard/components/dashboard-login/dashboard-login.component.ts
var _c04 = ["loginComponent"];
var DashboardLoginComponent = class _DashboardLoginComponent {
  authService;
  router;
  loginComponent;
  loginConfig = {
    title: "\u{1F4CA} \uB300\uC2DC\uBCF4\uB4DC",
    subtitle: "\uD1B5\uD569 \uB370\uC774\uD130 \uBD84\uC11D \uC13C\uD130\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4",
    moduleName: "dashboard",
    showSocialLogin: false,
    showRegisterLink: false,
    backgroundAnimation: ["\u{1F4CA}", "\u{1F4C8}", "\u{1F4C9}", "\u{1F4B9}", "\u{1F4CB}", "\u{1F3AF}", "\u{1F4BC}", "\u{1F4CC}"],
    themeColors: {
      primary: "#4facfe",
      // 청록색 (데이터/분석)
      secondary: "#00f2fe",
      // 밝은 청록
      accent: "#06b6d4"
      // 시안
    }
  };
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  /**
   * 로그인 처리 - 통합 로그인 컴포넌트에서 호출
   */
  onLogin(credentials) {
    const success = this.authService.login(credentials.username, credentials.password);
    if (success) {
      this.router.navigate(["/dashboard"]);
    } else {
      if (this.loginComponent) {
        this.loginComponent.setError("\uC0AC\uC6A9\uC790 \uC774\uB984 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
      }
    }
  }
  static \u0275fac = function DashboardLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardLoginComponent)(\u0275\u0275directiveInject(DashboardAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardLoginComponent, selectors: [["app-dashboard-login"]], viewQuery: function DashboardLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function DashboardLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function DashboardLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-dashboard-login",
      standalone: false,
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>'
    }]
  }], () => [{ type: DashboardAuthService }, { type: Router }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardLoginComponent, { className: "DashboardLoginComponent", filePath: "src/app/modules/dashboard/components/dashboard-login/dashboard-login.component.ts", lineNumber: 11 });
})();

// src/app/modules/dashboard/services/viral-marketing.service.ts
var ViralMarketingService = class _ViralMarketingService {
  http;
  currentReport$ = new BehaviorSubject(null);
  availableMonths$ = new BehaviorSubject([]);
  constructor(http) {
    this.http = http;
    this.loadAvailableMonths();
  }
  /**
   * 사용 가능한 월 목록 로드
   */
  loadAvailableMonths() {
    const months = ["2025-10"];
    this.availableMonths$.next(months);
  }
  /**
   * 특정 월의 바이럴 마케팅 리포트 로드
   */
  loadMonthlyReport(month) {
    const url = `/data/viral-marketing/${month}.json`;
    return this.http.get(url).pipe(map((report) => {
      this.currentReport$.next(report);
      return report;
    }), catchError((error) => {
      console.error(`Failed to load report for ${month}:`, error);
      return of({
        month,
        client: "",
        summary: {
          totalPosts: 0,
          totalViews: 0,
          totalLikes: 0,
          totalComments: 0,
          totalShares: 0,
          platformBreakdown: { youtube: 0, instagram: 0, threads: 0, naverBlog: 0 }
        },
        contents: [],
        topPerformers: [],
        insights: {
          bestPerformingPlatform: "",
          avgEngagementRate: 0,
          growthFromLastMonth: 0,
          recommendations: []
        }
      });
    }));
  }
  /**
   * 현재 로드된 리포트 가져오기
   */
  getCurrentReport() {
    return this.currentReport$.asObservable();
  }
  /**
   * 사용 가능한 월 목록 가져오기
   */
  getAvailableMonths() {
    return this.availableMonths$.asObservable();
  }
  /**
   * 플랫폼별 콘텐츠 필터링
   */
  getContentsByPlatform(platform, report) {
    const currentReport = report || this.currentReport$.value;
    if (!currentReport)
      return [];
    return currentReport.contents.filter((c) => c.platform === platform);
  }
  /**
   * 캠페인별 콘텐츠 필터링
   */
  getContentsByCampaign(campaign, report) {
    const currentReport = report || this.currentReport$.value;
    if (!currentReport)
      return [];
    return currentReport.contents.filter((c) => c.campaign === campaign);
  }
  /**
   * 플랫폼 이름 한글 변환
   */
  getPlatformDisplayName(platform) {
    const names = {
      "youtube": "\uC720\uD29C\uBE0C",
      "instagram": "\uC778\uC2A4\uD0C0\uADF8\uB7A8",
      "threads": "\uC2A4\uB808\uB4DC",
      "naverBlog": "\uB124\uC774\uBC84 \uBE14\uB85C\uADF8"
    };
    return names[platform] || platform;
  }
  /**
   * 플랫폼 아이콘 가져오기
   */
  getPlatformIcon(platform) {
    const icons = {
      "youtube": "\u{1F3A5}",
      "instagram": "\u{1F4F7}",
      "threads": "\u{1F9F5}",
      "naverBlog": "\u{1F4DD}"
    };
    return icons[platform] || "\u{1F4CA}";
  }
  /**
   * 플랫폼 색상 가져오기
   */
  getPlatformColor(platform) {
    const colors = {
      "youtube": "#FF0000",
      "instagram": "#E4405F",
      "threads": "#000000",
      "naverBlog": "#03C75A"
    };
    return colors[platform] || "#666666";
  }
  /**
   * 참여율 계산 (좋아요 + 댓글 + 공유) / 조회수 * 100
   */
  calculateEngagementRate(content) {
    if (!content.metrics.views || content.metrics.views === 0)
      return 0;
    const engagement = (content.metrics.likes || 0) + (content.metrics.comments || 0) + (content.metrics.shares || 0);
    return engagement / content.metrics.views * 100;
  }
  /**
   * 숫자 포맷팅 (천 단위 콤마)
   */
  formatNumber(num) {
    return num.toLocaleString("ko-KR");
  }
  /**
   * 날짜 포맷팅
   */
  formatDate(dateString) {
    const date2 = new Date(dateString);
    return date2.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  /**
   * 월 포맷팅 (YYYY-MM -> YYYY년 MM월)
   */
  formatMonth(month) {
    const [year, monthNum] = month.split("-");
    return `${year}\uB144 ${parseInt(monthNum)}\uC6D4`;
  }
  /**
   * Top 퍼포머 콘텐츠 상세 정보 가져오기
   */
  getTopPerformerDetails(topPerformer, report) {
    const currentReport = report || this.currentReport$.value;
    if (!currentReport)
      return void 0;
    return currentReport.contents.find((c) => c.id === topPerformer.id);
  }
  /**
   * 플랫폼별 총 조회수 계산
   */
  getPlatformTotalViews(platform, report) {
    const contents = this.getContentsByPlatform(platform, report);
    return contents.reduce((sum, content) => sum + (content.metrics.views || 0), 0);
  }
  /**
   * 플랫폼별 평균 참여율 계산
   */
  getPlatformAvgEngagement(platform, report) {
    const contents = this.getContentsByPlatform(platform, report);
    if (contents.length === 0)
      return 0;
    const totalEngagement = contents.reduce((sum, content) => sum + this.calculateEngagementRate(content), 0);
    return totalEngagement / contents.length;
  }
  static \u0275fac = function ViralMarketingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViralMarketingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViralMarketingService, factory: _ViralMarketingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViralMarketingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/dashboard/components/widgets/viral-marketing-report/viral-marketing-report.component.ts
function ViralMarketingReportComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.report.client);
  }
}
function ViralMarketingReportComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", month_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.viralService.formatMonth(month_r2), " ");
  }
}
function ViralMarketingReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\uB9AC\uD3EC\uD2B8\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
function ViralMarketingReportComponent_div_14_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5, "\uC804\uC6D4 \uB300\uBE44");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getGrowthIcon(ctx_r0.report.insights.growthFromLastMonth));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r0.getGrowthColor(ctx_r0.report.insights.growthFromLastMonth));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.report.insights.growthFromLastMonth > 0 ? "+" : "", "", ctx_r0.report.insights.growthFromLastMonth.toFixed(1), "% ");
  }
}
function ViralMarketingReportComponent_div_14_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ViralMarketingReportComponent_div_14_div_47_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePlatformFilter(item_r4.platform));
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "div", 43)(8, "span", 44);
    \u0275\u0275text(9, "\uAC8C\uC2DC\uBB3C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 43)(13, "span", 44);
    \u0275\u0275text(14, "\uC870\uD68C\uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 46);
    \u0275\u0275element(18, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.selectedPlatform === item_r4.platform);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", item_r4.count, "\uAC1C");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(item_r4.views));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getPlatformPercentage(item_r4.count), "%")("background-color", item_r4.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPlatformPercentage(item_r4.count).toFixed(1), "% ");
  }
}
function ViralMarketingReportComponent_div_14_div_48_div_4_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "img", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("src", content_r6.thumbnail, \u0275\u0275sanitizeUrl)("alt", content_r6.title);
  }
}
function ViralMarketingReportComponent_div_14_div_48_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, ViralMarketingReportComponent_div_14_div_48_div_4_div_3_div_1_Template, 2, 2, "div", 56);
    \u0275\u0275elementStart(2, "div", 57)(3, "div", 58)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h5", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 60)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 61);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 62);
    \u0275\u0275listener("click", function ViralMarketingReportComponent_div_14_div_48_div_4_div_3_Template_button_click_19_listener() {
      const content_r6 = \u0275\u0275restoreView(_r5).ngIf;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openUrl(content_r6.url));
    });
    \u0275\u0275text(20, "\uBCF4\uAE30");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r6 = ctx.ngIf;
    const performer_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", content_r6.thumbnail);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.viralService.getPlatformIcon(content_r6.platform));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.viralService.getPlatformDisplayName(content_r6.platform));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(content_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F441}\uFE0F ", ctx_r0.viralService.formatNumber(content_r6.metrics.views || 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", ctx_r0.viralService.formatNumber(content_r6.metrics.likes || 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4AC} ", ctx_r0.viralService.formatNumber(content_r6.metrics.comments || 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(performer_r7.reason);
  }
}
function ViralMarketingReportComponent_div_14_div_48_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ViralMarketingReportComponent_div_14_div_48_div_4_div_3_Template, 21, 8, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const performer_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(performer_r7.rank);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getTopPerformerContent(performer_r7.id));
  }
}
function ViralMarketingReportComponent_div_14_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275template(4, ViralMarketingReportComponent_div_14_div_48_div_4_Template, 4, 2, "div", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F3C6} \uC778\uAE30 \uCF58\uD150\uCE20 TOP ", ctx_r0.report.topPerformers.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.report.topPerformers);
  }
}
function ViralMarketingReportComponent_div_14_div_49_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "strong");
    \u0275\u0275text(2, "\uCD5C\uACE0 \uC131\uACFC \uC694\uC77C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.report.insights.bestPerformingDay);
  }
}
function ViralMarketingReportComponent_div_14_div_49_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rec_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(rec_r8);
  }
}
function ViralMarketingReportComponent_div_14_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "h4");
    \u0275\u0275text(2, "\u{1F4A1} \uC778\uC0AC\uC774\uD2B8 \uBC0F \uCD94\uCC9C\uC0AC\uD56D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66)(4, "div", 67)(5, "strong");
    \u0275\u0275text(6, "\uCD5C\uACE0 \uC131\uACFC \uD50C\uB7AB\uD3FC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ViralMarketingReportComponent_div_14_div_49_div_9_Template, 5, 1, "div", 68);
    \u0275\u0275elementStart(10, "div", 69)(11, "strong");
    \u0275\u0275text(12, "\uD3C9\uADE0 \uCC38\uC5EC\uC728:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 70);
    \u0275\u0275template(16, ViralMarketingReportComponent_div_14_div_49_div_16_Template, 5, 1, "div", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", ctx_r0.viralService.getPlatformIcon(ctx_r0.report.insights.bestPerformingPlatform), " ", ctx_r0.viralService.getPlatformDisplayName(ctx_r0.report.insights.bestPerformingPlatform), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.report.insights.bestPerformingDay);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.report.insights.avgEngagementRate.toFixed(1), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.report.insights.recommendations);
  }
}
function ViralMarketingReportComponent_div_14_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 76);
    \u0275\u0275listener("click", function ViralMarketingReportComponent_div_14_div_54_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedPlatform = null);
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uD544\uD130: ", ctx_r0.viralService.getPlatformDisplayName(ctx_r0.selectedPlatform));
  }
}
function ViralMarketingReportComponent_div_14_div_56_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3AF} ", content_r11.campaign);
  }
}
function ViralMarketingReportComponent_div_14_div_56_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r12);
  }
}
function ViralMarketingReportComponent_div_14_div_56_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, ViralMarketingReportComponent_div_14_div_56_div_11_span_1_Template, 2, 1, "span", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", content_r11.tags);
  }
}
function ViralMarketingReportComponent_div_14_div_56_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const content_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(content_r11.metrics.shares));
  }
}
function ViralMarketingReportComponent_div_14_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80)(5, "h5", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 81)(8, "span", 82);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ViralMarketingReportComponent_div_14_div_56_span_10_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ViralMarketingReportComponent_div_14_div_56_div_11_Template, 2, 1, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 85)(13, "div", 86)(14, "div", 87)(15, "span", 88);
    \u0275\u0275text(16, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 89);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 87)(20, "span", 88);
    \u0275\u0275text(21, "\u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 89);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 87)(25, "span", 88);
    \u0275\u0275text(26, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 89);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ViralMarketingReportComponent_div_14_div_56_div_29_Template, 5, 1, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 91);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 92);
    \u0275\u0275listener("click", function ViralMarketingReportComponent_div_14_div_56_Template_button_click_32_listener() {
      const content_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openUrl(content_r11.url));
    });
    \u0275\u0275text(33, " \u{1F517} \uB9C1\uD06C ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const content_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.viralService.getPlatformColor(content_r11.platform));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.viralService.getPlatformIcon(content_r11.platform), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(content_r11.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatDate(content_r11.publishedDate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", content_r11.campaign);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", content_r11.tags.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(content_r11.metrics.views || 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(content_r11.metrics.likes || 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(content_r11.metrics.comments || 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", content_r11.metrics.shares);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \uCC38\uC5EC\uC728: ", ctx_r0.viralService.calculateEngagementRate(content_r11).toFixed(2), "% ");
  }
}
function ViralMarketingReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9, "\uCD1D \uAC8C\uC2DC\uBB3C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 17)(11, "div", 18);
    \u0275\u0275text(12, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19)(14, "div", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275text(17, "\uCD1D \uC870\uD68C\uC218");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 17)(19, "div", 18);
    \u0275\u0275text(20, "\u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 21);
    \u0275\u0275text(25, "\uCD1D \uC88B\uC544\uC694");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 17)(27, "div", 18);
    \u0275\u0275text(28, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 21);
    \u0275\u0275text(33, "\uCD1D \uB313\uAE00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 17)(35, "div", 18);
    \u0275\u0275text(36, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19)(38, "div", 20);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 21);
    \u0275\u0275text(41, "\uCD1D \uACF5\uC720");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, ViralMarketingReportComponent_div_14_div_42_Template, 8, 5, "div", 22);
    \u0275\u0275elementStart(43, "div", 23)(44, "h4");
    \u0275\u0275text(45, "\u{1F4F1} \uD50C\uB7AB\uD3FC\uBCC4 \uC131\uACFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 24);
    \u0275\u0275template(47, ViralMarketingReportComponent_div_14_div_47_Template, 21, 11, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, ViralMarketingReportComponent_div_14_div_48_Template, 5, 2, "div", 26)(49, ViralMarketingReportComponent_div_14_div_49_Template, 17, 5, "div", 27);
    \u0275\u0275elementStart(50, "div", 28)(51, "div", 29)(52, "h4");
    \u0275\u0275text(53, "\u{1F4CB} \uCF58\uD150\uCE20 \uBAA9\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, ViralMarketingReportComponent_div_14_div_54_Template, 5, 1, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 31);
    \u0275\u0275template(56, ViralMarketingReportComponent_div_14_div_56_Template, 34, 12, "div", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(ctx_r0.report.summary.totalPosts));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(ctx_r0.report.summary.totalViews));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(ctx_r0.report.summary.totalLikes));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(ctx_r0.report.summary.totalComments));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.viralService.formatNumber(ctx_r0.report.summary.totalShares));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.report.insights.growthFromLastMonth !== 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.platformChartData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.report.topPerformers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.report.insights.recommendations.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.selectedPlatform);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getFilteredContents());
  }
}
function ViralMarketingReportComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "p");
    \u0275\u0275text(2, "\u{1F4ED} \uB9AC\uD3EC\uD2B8 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
var ViralMarketingReportComponent = class _ViralMarketingReportComponent {
  viralService;
  destroy$ = new Subject();
  report = null;
  selectedMonth = "2025-10";
  availableMonths = [];
  // 표시 상태
  isLoading = true;
  selectedPlatform = null;
  selectedCampaign = null;
  // 차트용 데이터
  platformChartData = [];
  constructor(viralService) {
    this.viralService = viralService;
  }
  ngOnInit() {
    this.viralService.getAvailableMonths().pipe(takeUntil(this.destroy$)).subscribe((months) => {
      this.availableMonths = months;
      if (months.length > 0) {
        this.selectedMonth = months[months.length - 1];
        this.loadReport();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * 리포트 로드
   */
  loadReport() {
    this.isLoading = true;
    this.viralService.loadMonthlyReport(this.selectedMonth).pipe(takeUntil(this.destroy$)).subscribe((report) => {
      this.report = report;
      this.isLoading = false;
      this.preparePlatformChartData();
    });
  }
  /**
   * 월 선택 변경
   */
  onMonthChange() {
    this.loadReport();
  }
  /**
   * 플랫폼 차트 데이터 준비
   */
  preparePlatformChartData() {
    if (!this.report)
      return;
    const platforms = ["youtube", "instagram", "threads", "naverBlog"];
    this.platformChartData = platforms.map((platform) => ({
      platform,
      name: this.viralService.getPlatformDisplayName(platform),
      icon: this.viralService.getPlatformIcon(platform),
      count: this.report?.summary.platformBreakdown[platform] || 0,
      views: this.viralService.getPlatformTotalViews(platform, this.report || void 0),
      color: this.viralService.getPlatformColor(platform)
    }));
  }
  /**
   * 플랫폼 필터 토글
   */
  togglePlatformFilter(platform) {
    if (this.selectedPlatform === platform) {
      this.selectedPlatform = null;
    } else {
      this.selectedPlatform = platform;
    }
  }
  /**
   * 필터링된 콘텐츠 목록
   */
  getFilteredContents() {
    if (!this.report)
      return [];
    let contents = this.report.contents;
    if (this.selectedPlatform) {
      contents = contents.filter((c) => c.platform === this.selectedPlatform);
    }
    if (this.selectedCampaign) {
      contents = contents.filter((c) => c.campaign === this.selectedCampaign);
    }
    return contents.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  }
  /**
   * Top 퍼포머 상세 정보
   */
  getTopPerformerContent(performerId) {
    if (!this.report)
      return void 0;
    return this.report.contents.find((c) => c.id === performerId);
  }
  /**
   * 전체 참여도 계산
   */
  getTotalEngagement() {
    if (!this.report)
      return 0;
    return (this.report.summary.totalLikes || 0) + (this.report.summary.totalComments || 0) + (this.report.summary.totalShares || 0);
  }
  /**
   * 플랫폼 성과 퍼센트 계산
   */
  getPlatformPercentage(count) {
    if (!this.report || this.report.summary.totalPosts === 0)
      return 0;
    return count / this.report.summary.totalPosts * 100;
  }
  /**
   * 고유 캠페인 목록
   */
  getUniqueCampaigns() {
    if (!this.report)
      return [];
    const campaigns = this.report.contents.map((c) => c.campaign).filter((c) => !!c);
    return Array.from(new Set(campaigns));
  }
  /**
   * URL 클릭
   */
  openUrl(url) {
    window.open(url, "_blank");
  }
  /**
   * 성장률 색상
   */
  getGrowthColor(growth) {
    if (growth > 0)
      return "#4CAF50";
    if (growth < 0)
      return "#F44336";
    return "#757575";
  }
  /**
   * 성장률 아이콘
   */
  getGrowthIcon(growth) {
    if (growth > 0)
      return "\u{1F4C8}";
    if (growth < 0)
      return "\u{1F4C9}";
    return "\u27A1\uFE0F";
  }
  static \u0275fac = function ViralMarketingReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViralMarketingReportComponent)(\u0275\u0275directiveInject(ViralMarketingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViralMarketingReportComponent, selectors: [["app-viral-marketing-report"]], standalone: false, decls: 16, vars: 6, consts: [[1, "viral-report-widget"], [1, "widget-header"], [1, "header-left"], ["routerLink", "/dashboard", 1, "back-btn"], ["class", "client-name", 4, "ngIf"], [1, "header-right"], [1, "month-selector", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading-container", 4, "ngIf"], ["class", "report-content", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "client-name"], [3, "value"], [1, "loading-container"], [1, "spinner"], [1, "report-content"], [1, "summary-section"], [1, "summary-card"], [1, "card-icon"], [1, "card-content"], [1, "card-value"], [1, "card-label"], ["class", "growth-section", 4, "ngIf"], [1, "platform-section"], [1, "platform-grid"], ["class", "platform-card", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "top-performers-section", 4, "ngIf"], ["class", "insights-section", 4, "ngIf"], [1, "contents-section"], [1, "contents-header"], ["class", "filter-info", 4, "ngIf"], [1, "contents-list"], ["class", "content-item", 4, "ngFor", "ngForOf"], [1, "growth-section"], [1, "growth-card"], [1, "growth-icon"], [1, "growth-text"], [1, "growth-value"], [1, "platform-card", 3, "click"], [1, "platform-header"], [1, "platform-icon"], [1, "platform-name"], [1, "platform-stats"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "platform-bar"], [1, "bar-fill"], [1, "platform-percentage"], [1, "top-performers-section"], [1, "top-performers-list"], ["class", "performer-item", 4, "ngFor", "ngForOf"], [1, "performer-item"], [1, "performer-rank"], ["class", "performer-content", 4, "ngIf"], [1, "performer-content"], ["class", "content-thumbnail", 4, "ngIf"], [1, "content-info"], [1, "content-platform"], [1, "content-title"], [1, "content-metrics"], [1, "performer-reason"], [1, "view-btn", 3, "click"], [1, "content-thumbnail"], [3, "src", "alt"], [1, "insights-section"], [1, "insights-content"], [1, "insight-item", "best-platform"], ["class", "insight-item", 4, "ngIf"], [1, "insight-item"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "recommendation-item"], [1, "rec-icon"], [1, "rec-text"], [1, "filter-info"], [1, "clear-filter", 3, "click"], [1, "content-item"], [1, "content-left"], [1, "content-platform-badge"], [1, "content-details"], [1, "content-meta"], [1, "content-date"], ["class", "content-campaign", 4, "ngIf"], ["class", "content-tags", 4, "ngIf"], [1, "content-right"], [1, "content-metrics-grid"], [1, "metric"], [1, "metric-icon"], [1, "metric-value"], ["class", "metric", 4, "ngIf"], [1, "content-engagement"], [1, "content-link-btn", 3, "click"], [1, "content-campaign"], [1, "content-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "no-data"]], template: function ViralMarketingReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3)(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " \uB300\uC2DC\uBCF4\uB4DC\uB85C \uB3CC\uC544\uAC00\uAE30 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h3");
      \u0275\u0275text(8, "\u{1F4CA} \uBC14\uC774\uB7F4 \uB9C8\uCF00\uD305 \uC6D4\uAC04 \uB9AC\uD3EC\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ViralMarketingReportComponent_p_9_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ViralMarketingReportComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ViralMarketingReportComponent_Template_select_change_11_listener() {
        return ctx.onMonthChange();
      });
      \u0275\u0275template(12, ViralMarketingReportComponent_option_12_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, ViralMarketingReportComponent_div_13_Template, 4, 0, "div", 8)(14, ViralMarketingReportComponent_div_14_Template, 57, 11, "div", 9)(15, ViralMarketingReportComponent_div_15_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.report);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.availableMonths);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.report);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.report);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, MatIcon], styles: ["\n\n.viral-report-widget[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px;\n  background: #f8f9fa;\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.widget-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  margin-bottom: 15px;\n  background: transparent;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #666;\n  font-size: 0.95rem;\n  transition: all 0.3s;\n}\n.widget-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #2196F3;\n  color: #2196F3;\n}\n.widget-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.widget-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #666;\n  font-weight: 500;\n}\n.widget-header[_ngcontent-%COMP%]   .month-selector[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  font-size: 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.3s;\n}\n.widget-header[_ngcontent-%COMP%]   .month-selector[_ngcontent-%COMP%]:hover {\n  border-color: #2196F3;\n}\n.widget-header[_ngcontent-%COMP%]   .month-selector[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2196F3;\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 15px;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #2196F3;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.summary-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 15px;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.summary-card[_ngcontent-%COMP%]:nth-child(2) {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.summary-card[_ngcontent-%COMP%]:nth-child(3) {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n}\n.summary-card[_ngcontent-%COMP%]:nth-child(4) {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n}\n.summary-card[_ngcontent-%COMP%]:nth-child(5) {\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n}\n.summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.growth-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.growth-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50px;\n  font-size: 1.1rem;\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.growth-card[_ngcontent-%COMP%]   .growth-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.growth-card[_ngcontent-%COMP%]   .growth-text[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.growth-card[_ngcontent-%COMP%]   .growth-value[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n.platform-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.platform-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.platform-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 15px;\n}\n.platform-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #fff;\n  border: 2px solid #e0e0e0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.platform-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n.platform-card.active[_ngcontent-%COMP%] {\n  border-color: #2196F3;\n  background: #e3f2fd;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-header[_ngcontent-%COMP%]   .platform-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-header[_ngcontent-%COMP%]   .platform-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #333;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-bar[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.5s ease;\n}\n.platform-card[_ngcontent-%COMP%]   .platform-percentage[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.9rem;\n  color: #666;\n  font-weight: 500;\n}\n.top-performers-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.top-performers-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.top-performers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.performer-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  transition: box-shadow 0.3s;\n}\n.performer-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.performer-item[_ngcontent-%COMP%]   .performer-rank[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  height: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-radius: 50%;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-thumbnail[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%]   .content-platform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 1.1rem;\n  color: #333;\n  line-height: 1.4;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%]   .content-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 8px;\n  font-size: 0.95rem;\n  color: #555;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%]   .performer-reason[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #2196F3;\n  font-weight: 500;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background 0.3s;\n}\n.performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]:hover {\n  background: #1976D2;\n}\n.insights-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.insights-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.insights-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.insights-content[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.insights-content[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.9rem;\n}\n.insights-content[_ngcontent-%COMP%]   .insight-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.insights-content[_ngcontent-%COMP%]   .insight-item.best-platform[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 12px;\n  background: white;\n  border-radius: 6px;\n}\n.recommendation-item[_ngcontent-%COMP%]   .rec-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  background: #4CAF50;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.9rem;\n}\n.recommendation-item[_ngcontent-%COMP%]   .rec-text[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #333;\n  line-height: 1.5;\n}\n.contents-section[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.contents-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.contents-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.contents-header[_ngcontent-%COMP%]   .filter-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 15px;\n  background: #e3f2fd;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  color: #1976D2;\n}\n.contents-header[_ngcontent-%COMP%]   .filter-info[_ngcontent-%COMP%]   .clear-filter[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: #1976D2;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.contents-header[_ngcontent-%COMP%]   .filter-info[_ngcontent-%COMP%]   .clear-filter[_ngcontent-%COMP%]:hover {\n  background: #1565C0;\n}\n.contents-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.content-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  transition: box-shadow 0.3s;\n}\n.content-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-platform-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  color: #333;\n  line-height: 1.4;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%]   .content-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%]   .content-meta[_ngcontent-%COMP%]   .content-campaign[_ngcontent-%COMP%] {\n  color: #FF9800;\n  font-weight: 500;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%]   .content-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.content-item[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   .content-details[_ngcontent-%COMP%]   .content-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: #e3f2fd;\n  color: #1976D2;\n  border-radius: 12px;\n  font-size: 0.85rem;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-metrics-grid[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.9rem;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-metrics-grid[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-metrics-grid[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 500;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-engagement[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4CAF50;\n  font-weight: 600;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-link-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: background 0.3s;\n}\n.content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   .content-link-btn[_ngcontent-%COMP%]:hover {\n  background: #1976D2;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #999;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .widget-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .summary-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .platform-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .performer-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .performer-item[_ngcontent-%COMP%]   .performer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .content-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .content-item[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=viral-marketing-report.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViralMarketingReportComponent, [{
    type: Component,
    args: [{ selector: "app-viral-marketing-report", standalone: false, template: `<div class="viral-report-widget">
  <!-- \uD5E4\uB354 -->
  <div class="widget-header">
    <div class="header-left">
      <button class="back-btn" routerLink="/dashboard">
        <mat-icon>arrow_back</mat-icon>
        \uB300\uC2DC\uBCF4\uB4DC\uB85C \uB3CC\uC544\uAC00\uAE30
      </button>
      <h3>\u{1F4CA} \uBC14\uC774\uB7F4 \uB9C8\uCF00\uD305 \uC6D4\uAC04 \uB9AC\uD3EC\uD2B8</h3>
      <p class="client-name" *ngIf="report">{{ report.client }}</p>
    </div>
    <div class="header-right">
      <select [(ngModel)]="selectedMonth" (change)="onMonthChange()" class="month-selector">
        <option *ngFor="let month of availableMonths" [value]="month">
          {{ viralService.formatMonth(month) }}
        </option>
      </select>
    </div>
  </div>

  <!-- \uB85C\uB529 -->
  <div *ngIf="isLoading" class="loading-container">
    <div class="spinner"></div>
    <p>\uB9AC\uD3EC\uD2B8\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...</p>
  </div>

  <!-- \uB9AC\uD3EC\uD2B8 \uB0B4\uC6A9 -->
  <div *ngIf="!isLoading && report" class="report-content">
    
    <!-- \uC694\uC57D \uD1B5\uACC4 -->
    <div class="summary-section">
      <div class="summary-card">
        <div class="card-icon">\u{1F4DD}</div>
        <div class="card-content">
          <div class="card-value">{{ viralService.formatNumber(report.summary.totalPosts) }}</div>
          <div class="card-label">\uCD1D \uAC8C\uC2DC\uBB3C</div>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="card-icon">\u{1F441}\uFE0F</div>
        <div class="card-content">
          <div class="card-value">{{ viralService.formatNumber(report.summary.totalViews) }}</div>
          <div class="card-label">\uCD1D \uC870\uD68C\uC218</div>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="card-icon">\u2764\uFE0F</div>
        <div class="card-content">
          <div class="card-value">{{ viralService.formatNumber(report.summary.totalLikes) }}</div>
          <div class="card-label">\uCD1D \uC88B\uC544\uC694</div>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="card-icon">\u{1F4AC}</div>
        <div class="card-content">
          <div class="card-value">{{ viralService.formatNumber(report.summary.totalComments) }}</div>
          <div class="card-label">\uCD1D \uB313\uAE00</div>
        </div>
      </div>
      
      <div class="summary-card">
        <div class="card-icon">\u{1F504}</div>
        <div class="card-content">
          <div class="card-value">{{ viralService.formatNumber(report.summary.totalShares) }}</div>
          <div class="card-label">\uCD1D \uACF5\uC720</div>
        </div>
      </div>
    </div>

    <!-- \uC131\uC7A5\uB960 -->
    <div class="growth-section" *ngIf="report.insights.growthFromLastMonth !== 0">
      <div class="growth-card">
        <span class="growth-icon">{{ getGrowthIcon(report.insights.growthFromLastMonth) }}</span>
        <span class="growth-text">\uC804\uC6D4 \uB300\uBE44</span>
        <span class="growth-value" [style.color]="getGrowthColor(report.insights.growthFromLastMonth)">
          {{ report.insights.growthFromLastMonth > 0 ? '+' : '' }}{{ report.insights.growthFromLastMonth.toFixed(1) }}%
        </span>
      </div>
    </div>

    <!-- \uD50C\uB7AB\uD3FC\uBCC4 \uBD84\uC11D -->
    <div class="platform-section">
      <h4>\u{1F4F1} \uD50C\uB7AB\uD3FC\uBCC4 \uC131\uACFC</h4>
      <div class="platform-grid">
        <div *ngFor="let item of platformChartData" 
             class="platform-card"
             [class.active]="selectedPlatform === item.platform"
             (click)="togglePlatformFilter(item.platform)">
          <div class="platform-header">
            <span class="platform-icon">{{ item.icon }}</span>
            <span class="platform-name">{{ item.name }}</span>
          </div>
          <div class="platform-stats">
            <div class="stat-item">
              <span class="stat-label">\uAC8C\uC2DC\uBB3C</span>
              <span class="stat-value">{{ item.count }}\uAC1C</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">\uC870\uD68C\uC218</span>
              <span class="stat-value">{{ viralService.formatNumber(item.views) }}</span>
            </div>
          </div>
          <div class="platform-bar">
            <div class="bar-fill" 
                 [style.width.%]="getPlatformPercentage(item.count)"
                 [style.background-color]="item.color">
            </div>
          </div>
          <div class="platform-percentage">
            {{ getPlatformPercentage(item.count).toFixed(1) }}%
          </div>
        </div>
      </div>
    </div>

    <!-- Top \uD37C\uD3EC\uBA38 -->
    <div class="top-performers-section" *ngIf="report.topPerformers.length > 0">
      <h4>\u{1F3C6} \uC778\uAE30 \uCF58\uD150\uCE20 TOP {{ report.topPerformers.length }}</h4>
      <div class="top-performers-list">
        <div *ngFor="let performer of report.topPerformers" class="performer-item">
          <div class="performer-rank">{{ performer.rank }}</div>
          <div class="performer-content" *ngIf="getTopPerformerContent(performer.id) as content">
            <div class="content-thumbnail" *ngIf="content.thumbnail">
              <img [src]="content.thumbnail" [alt]="content.title" />
            </div>
            <div class="content-info">
              <div class="content-platform">
                <span>{{ viralService.getPlatformIcon(content.platform) }}</span>
                <span>{{ viralService.getPlatformDisplayName(content.platform) }}</span>
              </div>
              <h5 class="content-title">{{ content.title }}</h5>
              <div class="content-metrics">
                <span>\u{1F441}\uFE0F {{ viralService.formatNumber(content.metrics.views || 0) }}</span>
                <span>\u2764\uFE0F {{ viralService.formatNumber(content.metrics.likes || 0) }}</span>
                <span>\u{1F4AC} {{ viralService.formatNumber(content.metrics.comments || 0) }}</span>
              </div>
              <p class="performer-reason">{{ performer.reason }}</p>
            </div>
            <button class="view-btn" (click)="openUrl(content.url)">\uBCF4\uAE30</button>
          </div>
        </div>
      </div>
    </div>

    <!-- \uC778\uC0AC\uC774\uD2B8 \uBC0F \uCD94\uCC9C -->
    <div class="insights-section" *ngIf="report.insights.recommendations.length > 0">
      <h4>\u{1F4A1} \uC778\uC0AC\uC774\uD2B8 \uBC0F \uCD94\uCC9C\uC0AC\uD56D</h4>
      <div class="insights-content">
        <div class="insight-item best-platform">
          <strong>\uCD5C\uACE0 \uC131\uACFC \uD50C\uB7AB\uD3FC:</strong>
          <span>
            {{ viralService.getPlatformIcon(report.insights.bestPerformingPlatform) }}
            {{ viralService.getPlatformDisplayName(report.insights.bestPerformingPlatform) }}
          </span>
        </div>
        <div class="insight-item" *ngIf="report.insights.bestPerformingDay">
          <strong>\uCD5C\uACE0 \uC131\uACFC \uC694\uC77C:</strong>
          <span>{{ report.insights.bestPerformingDay }}</span>
        </div>
        <div class="insight-item">
          <strong>\uD3C9\uADE0 \uCC38\uC5EC\uC728:</strong>
          <span>{{ report.insights.avgEngagementRate.toFixed(1) }}%</span>
        </div>
      </div>
      
      <div class="recommendations-list">
        <div *ngFor="let rec of report.insights.recommendations" class="recommendation-item">
          <span class="rec-icon">\u2713</span>
          <span class="rec-text">{{ rec }}</span>
        </div>
      </div>
    </div>

    <!-- \uCF58\uD150\uCE20 \uBAA9\uB85D -->
    <div class="contents-section">
      <div class="contents-header">
        <h4>\u{1F4CB} \uCF58\uD150\uCE20 \uBAA9\uB85D</h4>
        <div class="filter-info" *ngIf="selectedPlatform">
          <span>\uD544\uD130: {{ viralService.getPlatformDisplayName(selectedPlatform) }}</span>
          <button class="clear-filter" (click)="selectedPlatform = null">\u2715</button>
        </div>
      </div>
      
      <div class="contents-list">
        <div *ngFor="let content of getFilteredContents()" class="content-item">
          <div class="content-left">
            <div class="content-platform-badge" [style.background-color]="viralService.getPlatformColor(content.platform)">
              {{ viralService.getPlatformIcon(content.platform) }}
            </div>
            <div class="content-details">
              <h5 class="content-title">{{ content.title }}</h5>
              <div class="content-meta">
                <span class="content-date">{{ viralService.formatDate(content.publishedDate) }}</span>
                <span class="content-campaign" *ngIf="content.campaign">\u{1F3AF} {{ content.campaign }}</span>
              </div>
              <div class="content-tags" *ngIf="content.tags.length > 0">
                <span *ngFor="let tag of content.tags" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="content-right">
            <div class="content-metrics-grid">
              <div class="metric">
                <span class="metric-icon">\u{1F441}\uFE0F</span>
                <span class="metric-value">{{ viralService.formatNumber(content.metrics.views || 0) }}</span>
              </div>
              <div class="metric">
                <span class="metric-icon">\u2764\uFE0F</span>
                <span class="metric-value">{{ viralService.formatNumber(content.metrics.likes || 0) }}</span>
              </div>
              <div class="metric">
                <span class="metric-icon">\u{1F4AC}</span>
                <span class="metric-value">{{ viralService.formatNumber(content.metrics.comments || 0) }}</span>
              </div>
              <div class="metric" *ngIf="content.metrics.shares">
                <span class="metric-icon">\u{1F504}</span>
                <span class="metric-value">{{ viralService.formatNumber(content.metrics.shares) }}</span>
              </div>
            </div>
            <div class="content-engagement">
              \uCC38\uC5EC\uC728: {{ viralService.calculateEngagementRate(content).toFixed(2) }}%
            </div>
            <button class="content-link-btn" (click)="openUrl(content.url)">
              \u{1F517} \uB9C1\uD06C
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- \uB370\uC774\uD130 \uC5C6\uC74C -->
  <div *ngIf="!isLoading && !report" class="no-data">
    <p>\u{1F4ED} \uB9AC\uD3EC\uD2B8 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
  </div>
</div>
`, styles: ["/* src/app/modules/dashboard/components/widgets/viral-marketing-report/viral-marketing-report.component.scss */\n.viral-report-widget {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px;\n  background: #f8f9fa;\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: visible;\n  overflow-x: hidden;\n}\n.widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.widget-header .header-left .back-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  margin-bottom: 15px;\n  background: transparent;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #666;\n  font-size: 0.95rem;\n  transition: all 0.3s;\n}\n.widget-header .header-left .back-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.widget-header .header-left .back-btn:hover {\n  background: #f5f5f5;\n  border-color: #2196F3;\n  color: #2196F3;\n}\n.widget-header .header-left h3 {\n  margin: 0 0 5px 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.widget-header .header-left .client-name {\n  margin: 0;\n  font-size: 1rem;\n  color: #666;\n  font-weight: 500;\n}\n.widget-header .month-selector {\n  padding: 8px 15px;\n  font-size: 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.3s;\n}\n.widget-header .month-selector:hover {\n  border-color: #2196F3;\n}\n.widget-header .month-selector:focus {\n  outline: none;\n  border-color: #2196F3;\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 15px;\n}\n.loading-container .spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #2196F3;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.loading-container p {\n  color: #666;\n  font-size: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.summary-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 15px;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.summary-card {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 10px;\n  color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.summary-card:nth-child(2) {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.summary-card:nth-child(3) {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n}\n.summary-card:nth-child(4) {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b 0%,\n      #38f9d7 100%);\n}\n.summary-card:nth-child(5) {\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n}\n.summary-card .card-icon {\n  font-size: 2.5rem;\n}\n.summary-card .card-content .card-value {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.summary-card .card-content .card-label {\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.growth-section {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.growth-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50px;\n  font-size: 1.1rem;\n  color: white;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.growth-card .growth-icon {\n  font-size: 1.5rem;\n}\n.growth-card .growth-text {\n  opacity: 0.9;\n}\n.growth-card .growth-value {\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n.platform-section {\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.platform-section h4 {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.platform-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 15px;\n}\n.platform-card {\n  padding: 20px;\n  background: #fff;\n  border: 2px solid #e0e0e0;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.platform-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n.platform-card.active {\n  border-color: #2196F3;\n  background: #e3f2fd;\n}\n.platform-card .platform-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n.platform-card .platform-header .platform-icon {\n  font-size: 1.8rem;\n}\n.platform-card .platform-header .platform-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n}\n.platform-card .platform-stats {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.platform-card .platform-stats .stat-item {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.platform-card .platform-stats .stat-item .stat-label {\n  font-size: 0.85rem;\n  color: #666;\n}\n.platform-card .platform-stats .stat-item .stat-value {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #333;\n}\n.platform-card .platform-bar {\n  height: 8px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.platform-card .platform-bar .bar-fill {\n  height: 100%;\n  transition: width 0.5s ease;\n}\n.platform-card .platform-percentage {\n  text-align: right;\n  font-size: 0.9rem;\n  color: #666;\n  font-weight: 500;\n}\n.top-performers-section {\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.top-performers-section h4 {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.top-performers-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.performer-item {\n  display: flex;\n  gap: 15px;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  transition: box-shadow 0.3s;\n}\n.performer-item:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.performer-item .performer-rank {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  height: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-radius: 50%;\n}\n.performer-item .performer-content {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.performer-item .performer-content .content-thumbnail {\n  width: 120px;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.performer-item .performer-content .content-thumbnail img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.performer-item .performer-content .content-info {\n  flex: 1;\n}\n.performer-item .performer-content .content-info .content-platform {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.performer-item .performer-content .content-info .content-title {\n  margin: 0 0 10px 0;\n  font-size: 1.1rem;\n  color: #333;\n  line-height: 1.4;\n}\n.performer-item .performer-content .content-info .content-metrics {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 8px;\n  font-size: 0.95rem;\n  color: #555;\n}\n.performer-item .performer-content .content-info .performer-reason {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #2196F3;\n  font-weight: 500;\n}\n.performer-item .performer-content .view-btn {\n  padding: 10px 20px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background 0.3s;\n}\n.performer-item .performer-content .view-btn:hover {\n  background: #1976D2;\n}\n.insights-section {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.insights-section h4 {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.insights-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  margin-bottom: 20px;\n}\n.insights-content .insight-item {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.insights-content .insight-item strong {\n  color: #555;\n  font-size: 0.9rem;\n}\n.insights-content .insight-item span {\n  color: #333;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.insights-content .insight-item.best-platform span {\n  color: #2196F3;\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.recommendation-item {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 12px;\n  background: white;\n  border-radius: 6px;\n}\n.recommendation-item .rec-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  background: #4CAF50;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.9rem;\n}\n.recommendation-item .rec-text {\n  flex: 1;\n  color: #333;\n  line-height: 1.5;\n}\n.contents-section {\n  padding: 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.contents-section h4 {\n  margin: 0 0 15px 0;\n  font-size: 1.3rem;\n  color: #333;\n}\n.contents-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.contents-header .filter-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 15px;\n  background: #e3f2fd;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  color: #1976D2;\n}\n.contents-header .filter-info .clear-filter {\n  padding: 2px 8px;\n  background: #1976D2;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.contents-header .filter-info .clear-filter:hover {\n  background: #1565C0;\n}\n.contents-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.content-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  transition: box-shadow 0.3s;\n}\n.content-item:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.content-item .content-left {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.content-item .content-left .content-platform-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n}\n.content-item .content-left .content-details {\n  flex: 1;\n}\n.content-item .content-left .content-details .content-title {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  color: #333;\n  line-height: 1.4;\n}\n.content-item .content-left .content-details .content-meta {\n  display: flex;\n  gap: 15px;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.content-item .content-left .content-details .content-meta .content-campaign {\n  color: #FF9800;\n  font-weight: 500;\n}\n.content-item .content-left .content-details .content-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.content-item .content-left .content-details .content-tags .tag {\n  padding: 4px 10px;\n  background: #e3f2fd;\n  color: #1976D2;\n  border-radius: 12px;\n  font-size: 0.85rem;\n}\n.content-item .content-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n.content-item .content-right .content-metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.content-item .content-right .content-metrics-grid .metric {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.9rem;\n}\n.content-item .content-right .content-metrics-grid .metric .metric-icon {\n  font-size: 1rem;\n}\n.content-item .content-right .content-metrics-grid .metric .metric-value {\n  color: #333;\n  font-weight: 500;\n}\n.content-item .content-right .content-engagement {\n  font-size: 0.9rem;\n  color: #4CAF50;\n  font-weight: 600;\n}\n.content-item .content-right .content-link-btn {\n  padding: 8px 16px;\n  background: #2196F3;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: background 0.3s;\n}\n.content-item .content-right .content-link-btn:hover {\n  background: #1976D2;\n}\n.no-data {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #999;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .widget-header {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .summary-section {\n    grid-template-columns: 1fr;\n  }\n  .platform-grid {\n    grid-template-columns: 1fr;\n  }\n  .performer-item {\n    flex-direction: column;\n  }\n  .performer-item .performer-content {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .content-item {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .content-item .content-right {\n    align-items: flex-start;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=viral-marketing-report.component.css.map */\n"] }]
  }], () => [{ type: ViralMarketingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViralMarketingReportComponent, { className: "ViralMarketingReportComponent", filePath: "src/app/modules/dashboard/components/widgets/viral-marketing-report/viral-marketing-report.component.ts", lineNumber: 12 });
})();

// src/app/modules/dashboard/guards/dashboard-auth.guard.ts
var DashboardAuthGuard = class _DashboardAuthGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["/dashboard/login"]);
    return false;
  }
  static \u0275fac = function DashboardAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardAuthGuard)(\u0275\u0275inject(DashboardAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardAuthGuard, factory: _DashboardAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DashboardAuthService }, { type: Router }], null);
})();

// src/app/modules/dashboard/dashboard-routing.module.ts
var routes = [
  {
    path: "login",
    component: DashboardLoginComponent
  },
  {
    path: "",
    component: DashboardComponent,
    canActivate: [DashboardAuthGuard]
  },
  {
    path: "viral-marketing",
    component: ViralMarketingReportComponent,
    canActivate: [DashboardAuthGuard]
  }
];
var DashboardRoutingModule = class _DashboardRoutingModule {
  static \u0275fac = function DashboardRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/dashboard/dashboard.module.ts
var DashboardModule = class _DashboardModule {
  static \u0275fac = function DashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    DashboardViewModel,
    DashboardAuthService,
    DashboardAuthGuard
  ], imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule,
    // Material Modules
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DashboardComponent,
        DashboardLoginComponent,
        TodayScheduleComponent,
        DiaryProgressComponent,
        NovelStatsComponent,
        DiaryDonutChartComponent,
        ScheduleLineChartComponent,
        ViralMarketingReportComponent
      ],
      imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        SharedModule,
        // Material Modules
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule
      ],
      providers: [
        DashboardViewModel,
        DashboardAuthService,
        DashboardAuthGuard
      ]
    }]
  }], null, null);
})();
export {
  DashboardModule
};
//# sourceMappingURL=chunk-DWWN5Z43.js.map
