import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-LJBWKBWF.js";
import "./chunk-QQXXBIKC.js";
import "./chunk-OWKVH3DN.js";
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
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MatDialogModule
} from "./chunk-EWZCM5ON.js";
import "./chunk-5Z7BUDXM.js";
import "./chunk-OYJIDA3L.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WY5M3RVA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/calendar/core/services/calendar.service.ts
var CalendarService = class _CalendarService {
  // 카테고리 목록
  categories = signal([
    { name: "\uC5C5\uBB34", color: "#4f46e5" },
    { name: "\uAC1C\uC778", color: "#10b981" },
    { name: "\uAC00\uC871", color: "#f59e0b" },
    { name: "\uAE30\uD0C0", color: "#6b7280" }
  ], ...ngDevMode ? [{ debugName: "categories" }] : []);
  // 할 일 데이터
  tasks = signal([
    {
      id: "1",
      dateStr: this.formatDate(/* @__PURE__ */ new Date()),
      title: "\uC8FC\uAC04 \uC5C5\uBB34 \uBCF4\uACE0",
      completed: false,
      color: "#4f46e5",
      time: "10:00",
      category: "\uC5C5\uBB34",
      memo: "\uC774\uBC88 \uC8FC \uC8FC\uC694 \uC774\uC288 \uC815\uB9AC"
    },
    {
      id: "2",
      dateStr: this.formatDate(/* @__PURE__ */ new Date()),
      title: "\uC810\uC2EC \uC57D\uC18D",
      completed: false,
      color: "#10b981",
      time: "12:30",
      category: "\uAC1C\uC778",
      memo: "\uAC15\uB0A8\uC5ED 11\uBC88 \uCD9C\uAD6C"
    },
    {
      id: "3",
      dateStr: this.formatDate(new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 2))),
      title: "\uB514\uC790\uC778 \uB9AC\uBDF0",
      completed: false,
      color: "#4f46e5",
      time: "14:00",
      category: "\uC5C5\uBB34"
    }
  ], ...ngDevMode ? [{ debugName: "tasks" }] : []);
  constructor() {
  }
  // 날짜를 YYYY-MM-DD 형식으로 변환
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // 특정 날짜의 할 일 목록 조회
  getTasksByDate(dateStr) {
    return this.tasks().filter((t) => t.dateStr === dateStr);
  }
  // 특정 날짜의 할 일 목록 (시간순 정렬)
  getTasksByDateSorted(dateStr) {
    return this.tasks().filter((t) => t.dateStr === dateStr).sort((a, b) => {
      if (!a.time && !b.time)
        return 0;
      if (!a.time)
        return -1;
      if (!b.time)
        return 1;
      return a.time.localeCompare(b.time);
    });
  }
  // 새로운 할 일 추가 (기본)
  addTask(dateStr, title, color) {
    if (!title.trim())
      return;
    const newTask = {
      id: crypto.randomUUID(),
      dateStr,
      title: title.trim(),
      completed: false,
      color
    };
    this.tasks.update((prev) => [...prev, newTask]);
  }
  // 새로운 할 일 추가 (상세)
  addTaskDetailed(task) {
    const title = task.title;
    if (!title.trim())
      return;
    const newTask = __spreadProps(__spreadValues({}, task), {
      id: crypto.randomUUID(),
      title: title.trim()
    });
    this.tasks.update((prev) => [...prev, newTask]);
  }
  // 할 일 완료/미완료 토글
  toggleTask(id) {
    this.tasks.update((prev) => prev.map((t) => t.id === id ? __spreadProps(__spreadValues({}, t), { completed: !t.completed }) : t));
  }
  // 할 일 삭제
  deleteTask(id) {
    this.tasks.update((prev) => prev.filter((t) => t.id !== id));
  }
  // 카테고리 추가
  addCategory(name, color) {
    if (!name.trim())
      return;
    const newCat = { name: name.trim(), color };
    this.categories.update((cats) => [...cats, newCat]);
  }
  // 검색
  searchTasks(query) {
    const q = query.toLowerCase().trim();
    if (!q)
      return [];
    return this.tasks().filter((t) => t.title.toLowerCase().includes(q)).sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  }
  static \u0275fac = function CalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/calendar/mobile/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.dateStr;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.name;
function CalendarMobileHomeComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 53);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_16_For_2_Template_button_click_0_listener() {
      const mode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setViewMode(mode_r2.value);
      return \u0275\u0275resetView(ctx_r2.isViewMenuOpen.set(false));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", ctx_r2.viewMode() === mode_r2.value)("text-indigo-600", ctx_r2.viewMode() === mode_r2.value)("font-bold", ctx_r2.viewMode() === mode_r2.value)("text-slate-600", ctx_r2.viewMode() !== mode_r2.value)("hover:bg-gray-50", ctx_r2.viewMode() !== mode_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r2.label, " ");
  }
}
function CalendarMobileHomeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Conditional_16_For_2_Template, 2, 11, "button", 52, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.viewOptions);
  }
}
function CalendarMobileHomeComponent_Case_37_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const \u0275$index_86_r7 = ctx.$index;
    \u0275\u0275classProp("text-red-400", \u0275$index_86_r7 === 0)("text-blue-400", \u0275$index_86_r7 === 6)("text-slate-400", \u0275$index_86_r7 !== 0 && \u0275$index_86_r7 !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r6, " ");
  }
}
function CalendarMobileHomeComponent_Case_37_For_2_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext().$implicit;
    const monthIdx_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-600", ctx_r2.isToday(ctx_r2.currentYear(), monthIdx_r5, day_r8))("text-white", ctx_r2.isToday(ctx_r2.currentYear(), monthIdx_r5, day_r8))("text-slate-600", !ctx_r2.isToday(ctx_r2.currentYear(), monthIdx_r5, day_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r8, " ");
  }
}
function CalendarMobileHomeComponent_Case_37_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 60);
    \u0275\u0275conditionalCreate(1, CalendarMobileHomeComponent_Case_37_For_2_For_8_Conditional_1_Template, 2, 7, "span", 62);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r8 ? 1 : -1);
  }
}
function CalendarMobileHomeComponent_Case_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 55);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Case_37_For_2_Template_div_click_0_listener() {
      const monthIdx_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectMonth(monthIdx_r5));
    });
    \u0275\u0275domElementStart(1, "h3", 56);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 57);
    \u0275\u0275repeaterCreate(4, CalendarMobileHomeComponent_Case_37_For_2_For_5_Template, 2, 7, "span", 58, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 59);
    \u0275\u0275repeaterCreate(7, CalendarMobileHomeComponent_Case_37_For_2_For_8_Template, 2, 1, "div", 60, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const monthIdx_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", monthIdx_r5 + 1, "\uC6D4 ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.weekDaysShort);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.getMonthCalendar(ctx_r2.currentYear(), monthIdx_r5));
  }
}
function CalendarMobileHomeComponent_Case_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Case_37_For_2_Template, 9, 1, "div", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.monthIndices);
  }
}
function CalendarMobileHomeComponent_Case_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const day_r9 = ctx.$implicit;
    const \u0275$index_102_r10 = ctx.$index;
    \u0275\u0275classProp("text-red-500", \u0275$index_102_r10 === 0)("text-blue-500", \u0275$index_102_r10 === 6)("text-slate-400", \u0275$index_102_r10 !== 0 && \u0275$index_102_r10 !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r9, " ");
  }
}
function CalendarMobileHomeComponent_Case_38_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const day_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r12.lunarDateStr);
  }
}
function CalendarMobileHomeComponent_Case_38_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 73);
  }
}
function CalendarMobileHomeComponent_Case_38_For_5_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 77);
  }
  if (rf & 2) {
    const task_r13 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", task_r13.color);
    \u0275\u0275classProp("opacity-30", task_r13.completed);
  }
}
function CalendarMobileHomeComponent_Case_38_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 76);
  }
}
function CalendarMobileHomeComponent_Case_38_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 69);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Case_38_For_5_Template_div_click_0_listener() {
      const day_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectDate(day_r12.date));
    });
    \u0275\u0275domElementStart(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 71);
    \u0275\u0275conditionalCreate(4, CalendarMobileHomeComponent_Case_38_For_5_Conditional_4_Template, 2, 1, "span", 72);
    \u0275\u0275conditionalCreate(5, CalendarMobileHomeComponent_Case_38_For_5_Conditional_5_Template, 1, 0, "div", 73);
    \u0275\u0275domElementStart(6, "div", 74);
    \u0275\u0275repeaterCreate(7, CalendarMobileHomeComponent_Case_38_For_5_For_8_Template, 1, 4, "div", 75, _forTrack2);
    \u0275\u0275conditionalCreate(9, CalendarMobileHomeComponent_Case_38_For_5_Conditional_9_Template, 1, 0, "div", 76);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const day_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-40", !day_r12.isCurrentMonth);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-indigo-600", day_r12.isToday)("text-white", day_r12.isToday)("bg-indigo-100", day_r12.isSelected && !day_r12.isToday)("text-indigo-700", day_r12.isSelected && !day_r12.isToday)("text-red-500", !day_r12.isToday && day_r12.dayOfWeek === 0)("text-blue-500", !day_r12.isToday && day_r12.dayOfWeek === 6)("text-slate-700", !day_r12.isToday && day_r12.dayOfWeek !== 0 && day_r12.dayOfWeek !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r12.dayNum, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showLunar() && day_r12.lunarDateStr ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showSonless() && day_r12.isSonlessDay ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(day_r12.tasks.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r12.tasks.length > 3 ? 9 : -1);
  }
}
function CalendarMobileHomeComponent_Case_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 64);
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Case_38_For_2_Template, 2, 7, "div", 65, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 66);
    \u0275\u0275repeaterCreate(4, CalendarMobileHomeComponent_Case_38_For_5_Template, 10, 20, "div", 67, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.weekDays);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.calendarDays());
  }
}
function CalendarMobileHomeComponent_Case_39_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 87);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Case_39_For_5_Template_div_click_0_listener() {
      const day_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectDate(day_r15.date));
    });
    \u0275\u0275domElementStart(1, "div", 88)(2, "span", 89);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const day_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", day_r15.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.weekDays[day_r15.dayOfWeek]);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", day_r15.dayOfWeek === 0)("text-blue-500", day_r15.dayOfWeek === 6)("text-slate-800", day_r15.dayOfWeek !== 0 && day_r15.dayOfWeek !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r15.dayNum, " ");
  }
}
function CalendarMobileHomeComponent_Case_39_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 85)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const hour_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hour_r16);
  }
}
function CalendarMobileHomeComponent_Case_39_For_13_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 94);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Case_39_For_13_For_2_For_2_Template_div_click_0_listener($event) {
      const task_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.openDetailModal(task_r21));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const task_r21 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", task_r21.color);
  }
}
function CalendarMobileHomeComponent_Case_39_For_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 92);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Case_39_For_13_For_2_Template_div_click_0_listener() {
      const hour_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const day_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addTaskAt(day_r19.date, hour_r18));
    });
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Case_39_For_13_For_2_For_2_Template, 1, 2, "div", 93, _forTrack2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const hour_r18 = ctx.$implicit;
    const day_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.getTasksByDayAndTime(day_r19, hour_r18));
  }
}
function CalendarMobileHomeComponent_Case_39_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 86);
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Case_39_For_13_For_2_Template, 3, 0, "div", 91, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.hours);
  }
}
function CalendarMobileHomeComponent_Case_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 35)(1, "div", 78);
    \u0275\u0275domElement(2, "div", 79);
    \u0275\u0275domElementStart(3, "div", 80);
    \u0275\u0275repeaterCreate(4, CalendarMobileHomeComponent_Case_39_For_5_Template, 6, 10, "div", 81, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 82)(7, "div", 83)(8, "div", 84);
    \u0275\u0275repeaterCreate(9, CalendarMobileHomeComponent_Case_39_For_10_Template, 3, 1, "div", 85, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 80);
    \u0275\u0275repeaterCreate(12, CalendarMobileHomeComponent_Case_39_For_13_Template, 3, 0, "div", 86, _forTrack1);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.calendarDays());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.hours);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.calendarDays());
  }
}
function CalendarMobileHomeComponent_Case_40_For_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 106);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Case_40_For_10_For_7_Template_div_click_0_listener() {
      const task_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDetailModal(task_r23));
    });
    \u0275\u0275domElementStart(1, "span", 107);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 108);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const task_r23 = ctx.$implicit;
    \u0275\u0275styleProp("border-left-color", task_r23.color)("border-left-width", 3, "px");
    \u0275\u0275classProp("opacity-50", task_r23.completed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r23.time);
    \u0275\u0275advance();
    \u0275\u0275classProp("line-through", task_r23.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r23.title);
  }
}
function CalendarMobileHomeComponent_Case_40_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 100)(1, "div", 101)(2, "span", 102);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 103)(5, "div", 104);
    \u0275\u0275repeaterCreate(6, CalendarMobileHomeComponent_Case_40_For_10_For_7_Template, 5, 10, "div", 105, _forTrack2);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const hour_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatHour(hour_r24));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.getTasksByHour(hour_r24));
  }
}
function CalendarMobileHomeComponent_Case_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 36)(1, "div", 95)(2, "div")(3, "h3", 96);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 97)(6, "span", 98);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(8, "div", 99);
    \u0275\u0275repeaterCreate(9, CalendarMobileHomeComponent_Case_40_For_10_Template, 8, 1, "div", 100, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedDayNum(), "\uC77C ", ctx_r2.selectedDayName());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\uC77C\uC815 ", ctx_r2.selectedDateTasks().length, "\uAC1C");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.hours);
  }
}
function CalendarMobileHomeComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 47)(1, "input", 109, 0);
    \u0275\u0275domListener("input", function CalendarMobileHomeComponent_Conditional_51_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSearch($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 110);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_51_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(4, "svg", 29);
    \u0275\u0275domElement(5, "line", 111)(6, "line", 112);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("value", ctx_r2.searchQuery());
  }
}
function CalendarMobileHomeComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3", 48);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedDateTitle());
  }
}
function CalendarMobileHomeComponent_Conditional_54_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 113)(1, "p", 115);
    \u0275\u0275text(2, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275domElementEnd()();
  }
}
function CalendarMobileHomeComponent_Conditional_54_Conditional_1_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 120);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const task_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r27.time);
  }
}
function CalendarMobileHomeComponent_Conditional_54_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 117);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_54_Conditional_1_For_2_Template_li_click_0_listener() {
      const task_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.goToTaskDate(task_r27.dateStr);
      return \u0275\u0275resetView(ctx_r2.closeSidebar());
    });
    \u0275\u0275domElementStart(1, "div", 118)(2, "span", 119);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, CalendarMobileHomeComponent_Conditional_54_Conditional_1_For_2_Conditional_4_Template, 2, 1, "span", 120);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 13);
    \u0275\u0275domElement(6, "div", 121);
    \u0275\u0275domElementStart(7, "span", 122);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const task_r27 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r27.dateStr);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r27.time ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", task_r27.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r27.title);
  }
}
function CalendarMobileHomeComponent_Conditional_54_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 114);
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Conditional_54_Conditional_1_For_2_Template, 9, 5, "li", 116, _forTrack2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.searchResults());
  }
}
function CalendarMobileHomeComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarMobileHomeComponent_Conditional_54_Conditional_0_Template, 3, 0, "div", 113)(1, CalendarMobileHomeComponent_Conditional_54_Conditional_1_Template, 3, 0, "ul", 114);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.searchResults().length === 0 ? 0 : 1);
  }
}
function CalendarMobileHomeComponent_Conditional_55_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 128)(1, "p", 115);
    \u0275\u0275text(2, "\uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275domElementEnd()();
  }
}
function CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 131);
    \u0275\u0275domElement(1, "polyline", 136);
    \u0275\u0275domElementEnd();
  }
}
function CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 134);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const task_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r29.time);
  }
}
function CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 129)(1, "button", 130);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Template_button_click_1_listener() {
      const task_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleTask(task_r29.id));
    });
    \u0275\u0275conditionalCreate(2, CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 131);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 132);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Template_div_click_3_listener() {
      const task_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDetailModal(task_r29));
    });
    \u0275\u0275domElementStart(4, "p", 133);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Conditional_6_Template, 2, 1, "p", 134);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 135);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Template_button_click_7_listener() {
      const task_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteTask(task_r29.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(8, "svg", 29);
    \u0275\u0275domElement(9, "line", 111)(10, "line", 112);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const task_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", task_r29.completed ? task_r29.color : "#cbd5e1")("background-color", task_r29.completed ? task_r29.color : "transparent");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r29.completed ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-slate-400", task_r29.completed)("line-through", task_r29.completed)("text-slate-700", !task_r29.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r29.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r29.time ? 6 : -1);
  }
}
function CalendarMobileHomeComponent_Conditional_55_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 114);
    \u0275\u0275repeaterCreate(1, CalendarMobileHomeComponent_Conditional_55_Conditional_8_For_2_Template, 11, 13, "li", 129, _forTrack2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedDateTasks());
  }
}
function CalendarMobileHomeComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 123)(1, "span", 124);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 125);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 126);
    \u0275\u0275domElement(6, "div", 127);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, CalendarMobileHomeComponent_Conditional_55_Conditional_7_Template, 3, 0, "div", 128)(8, CalendarMobileHomeComponent_Conditional_55_Conditional_8_Template, 3, 0, "ul", 114);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedDayName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Tasks Left: ", ctx_r2.remainingCount());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.progressPercentage(), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedDateTasks().length === 0 ? 7 : 8);
  }
}
function CalendarMobileHomeComponent_Conditional_57_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 156);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_For_36_Template_button_click_0_listener() {
      const cat_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r32.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const cat_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-600", ctx_r2.modalSelectedCategory() === cat_r32.name)("text-white", ctx_r2.modalSelectedCategory() === cat_r32.name)("border-transparent", ctx_r2.modalSelectedCategory() === cat_r32.name)("bg-white", ctx_r2.modalSelectedCategory() !== cat_r32.name)("text-slate-600", ctx_r2.modalSelectedCategory() !== cat_r32.name)("border-gray-200", ctx_r2.modalSelectedCategory() !== cat_r32.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r32.name, " ");
  }
}
function CalendarMobileHomeComponent_Conditional_57_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 152);
    \u0275\u0275domElement(1, "input", 157, 7);
    \u0275\u0275domElementStart(3, "button", 158);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_Conditional_39_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r33);
      const newCategoryName_r34 = \u0275\u0275reference(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addCategory(newCategoryName_r34.value));
    });
    \u0275\u0275text(4, "\uC800\uC7A5");
    \u0275\u0275domElementEnd()();
  }
}
function CalendarMobileHomeComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 137);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275domElementStart(1, "div", 138);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 139)(3, "h3", 96);
    \u0275\u0275text(4, "\uC0C8\uB85C\uC6B4 \uC77C\uC815");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 140);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAddModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 44);
    \u0275\u0275domElement(7, "line", 111)(8, "line", 112);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(9, "div", 141)(10, "div", 142)(11, "div")(12, "label", 143);
    \u0275\u0275text(13, "\uC81C\uBAA9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(14, "input", 144, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 145)(17, "div")(18, "label", 143);
    \u0275\u0275text(19, "\uC2DC\uC791");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(20, "input", 146, 2)(22, "input", 147, 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "div")(25, "label", 143);
    \u0275\u0275text(26, "\uC885\uB8CC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(27, "input", 146, 4)(29, "input", 147, 5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "div")(32, "label", 148);
    \u0275\u0275text(33, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "div", 149);
    \u0275\u0275repeaterCreate(35, CalendarMobileHomeComponent_Conditional_57_For_36_Template, 2, 13, "button", 150, _forTrack3);
    \u0275\u0275domElementStart(37, "button", 151);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isAddingCategory.set(true));
    });
    \u0275\u0275text(38, " + \uCD94\uAC00 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(39, CalendarMobileHomeComponent_Conditional_57_Conditional_39_Template, 5, 0, "div", 152);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "div")(41, "label", 143);
    \u0275\u0275text(42, "\uBA54\uBAA8");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(43, "textarea", 153, 6);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(45, "div", 154)(46, "button", 155);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_57_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r30);
      const modalTitleInput_r35 = \u0275\u0275reference(15);
      const modalStartDateInput_r36 = \u0275\u0275reference(21);
      const modalStartTimeInput_r37 = \u0275\u0275reference(23);
      const modalEndDateInput_r38 = \u0275\u0275reference(28);
      const modalEndTimeInput_r39 = \u0275\u0275reference(30);
      const modalMemoInput_r40 = \u0275\u0275reference(44);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTaskFromModal(modalTitleInput_r35.value, modalStartDateInput_r36.value, modalStartTimeInput_r37.value, modalEndDateInput_r38.value, modalEndTimeInput_r39.value, modalMemoInput_r40.value, ctx_r2.modalSelectedCategory()));
    });
    \u0275\u0275text(47, " \uC77C\uC815 \uB4F1\uB85D ");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275domProperty("value", ctx_r2.formatDateForInput(ctx_r2.selectedDate()));
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("value", ctx_r2.formatDateForInput(ctx_r2.selectedDate()));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.categories());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isAddingCategory() ? 39 : -1);
  }
}
function CalendarMobileHomeComponent_Conditional_58_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 177);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_2_0.time);
  }
}
function CalendarMobileHomeComponent_Conditional_58_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 168)(1, "div", 180);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 170);
    \u0275\u0275domElement(3, "line", 181)(4, "line", 182)(5, "line", 183)(6, "line", 184);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(7, "div")(8, "p", 175);
    \u0275\u0275text(9, "\uBA54\uBAA8");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 185);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_2_0.memo);
  }
}
function CalendarMobileHomeComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 137);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailModal());
    });
    \u0275\u0275domElementStart(1, "div", 159);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r41);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 160);
    \u0275\u0275domElement(3, "div", 161);
    \u0275\u0275domElementStart(4, "div", 162)(5, "span", 163);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "div", 164);
    \u0275\u0275domElementStart(8, "button", 165);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_58_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.deleteTask(ctx_r2.selectedTaskDetail().id);
      return \u0275\u0275resetView(ctx_r2.closeDetailModal());
    });
    \u0275\u0275text(9, "\uC0AD\uC81C");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "h3", 166);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 167)(13, "div", 168)(14, "div", 169);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(15, "svg", 170);
    \u0275\u0275domElement(16, "rect", 171)(17, "line", 172)(18, "line", 173)(19, "line", 174);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(20, "div")(21, "p", 175);
    \u0275\u0275text(22, "\uC77C\uC2DC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "p", 176);
    \u0275\u0275text(24);
    \u0275\u0275conditionalCreate(25, CalendarMobileHomeComponent_Conditional_58_Conditional_25_Template, 2, 1, "span", 177);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(26, CalendarMobileHomeComponent_Conditional_58_Conditional_26_Template, 12, 1, "div", 168);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div", 178)(28, "button", 179);
    \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Conditional_58_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailModal());
    });
    \u0275\u0275text(29, "\uB2EB\uAE30");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_1_0.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_2_0.title);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_3_0.dateStr, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_4_0.time) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r2.selectedTaskDetail()) == null ? null : tmp_5_0.memo) ? 26 : -1);
  }
}
var CalendarMobileHomeComponent = class _CalendarMobileHomeComponent {
  calendarService = inject(CalendarService);
  // Constants
  weekDays = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
  weekDaysShort = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
  taskColors = ["#4f46e5", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];
  viewOptions = [
    { label: "\uC6D4\uAC04", value: "month" },
    { label: "\uC8FC\uAC04", value: "week" },
    { label: "\uC77C\uAC04", value: "day" },
    { label: "\uC5F0\uAC04", value: "year" }
  ];
  hours = Array.from({ length: 24 }, (_, i) => i);
  monthIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // State
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : []);
  selectedDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "selectedDate" }] : []);
  selectedColor = signal(this.taskColors[0], ...ngDevMode ? [{ debugName: "selectedColor" }] : []);
  isSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "isSidebarOpen" }] : []);
  viewMode = signal("month", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  isViewMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "isViewMenuOpen" }] : []);
  showLunar = signal(false, ...ngDevMode ? [{ debugName: "showLunar" }] : []);
  showSonless = signal(false, ...ngDevMode ? [{ debugName: "showSonless" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  isAddModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAddModalOpen" }] : []);
  modalSelectedColor = signal(this.taskColors[0], ...ngDevMode ? [{ debugName: "modalSelectedColor" }] : []);
  modalSelectedCategory = signal("\uC5C5\uBB34", ...ngDevMode ? [{ debugName: "modalSelectedCategory" }] : []);
  isAddingCategory = signal(false, ...ngDevMode ? [{ debugName: "isAddingCategory" }] : []);
  newCategoryColor = signal(this.taskColors[0], ...ngDevMode ? [{ debugName: "newCategoryColor" }] : []);
  isDetailModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDetailModalOpen" }] : []);
  selectedTaskDetail = signal(null, ...ngDevMode ? [{ debugName: "selectedTaskDetail" }] : []);
  // Service data
  categories = this.calendarService.categories;
  tasks = this.calendarService.tasks;
  // Computed
  currentYear = computed(() => this.currentDate().getFullYear(), ...ngDevMode ? [{ debugName: "currentYear" }] : []);
  currentMonth = computed(() => this.currentDate().getMonth(), ...ngDevMode ? [{ debugName: "currentMonth" }] : []);
  searchResults = computed(() => {
    return this.calendarService.searchTasks(this.searchQuery());
  }, ...ngDevMode ? [{ debugName: "searchResults" }] : []);
  headerTitle = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth() + 1;
    const date = this.currentDate();
    switch (this.viewMode()) {
      case "year":
        return `${year}\uB144`;
      case "day":
        return `${month}\uC6D4 ${date.getDate()}\uC77C`;
      default:
        return `${year}\uB144 ${month}\uC6D4`;
    }
  }, ...ngDevMode ? [{ debugName: "headerTitle" }] : []);
  viewModeLabel = computed(() => {
    return this.viewOptions.find((o) => o.value === this.viewMode())?.label || "\uC6D4\uAC04";
  }, ...ngDevMode ? [{ debugName: "viewModeLabel" }] : []);
  calendarDays = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth();
    const mode = this.viewMode();
    const days = [];
    if (mode === "week") {
      const curr = new Date(this.currentDate());
      const day = curr.getDay();
      const startDay = new Date(curr);
      startDay.setDate(curr.getDate() - day);
      for (let i = 0; i < 7; i++) {
        const date = new Date(startDay);
        date.setDate(startDay.getDate() + i);
        days.push(this.createCalendarDay(date, true));
      }
    } else {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDayOfWeek = firstDay.getDay();
      for (let i = 0; i < startDayOfWeek; i++) {
        const date = new Date(year, month, -startDayOfWeek + 1 + i);
        days.push(this.createCalendarDay(date, false));
      }
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        days.push(this.createCalendarDay(date, true));
      }
      const remainingCells = 42 - days.length;
      for (let i = 1; i <= remainingCells; i++) {
        const date = new Date(year, month + 1, i);
        days.push(this.createCalendarDay(date, false));
      }
    }
    return days;
  }, ...ngDevMode ? [{ debugName: "calendarDays" }] : []);
  selectedDateTitle = computed(() => {
    const date = this.selectedDate();
    return `${date.getMonth() + 1}\uC6D4 ${date.getDate()}\uC77C`;
  }, ...ngDevMode ? [{ debugName: "selectedDateTitle" }] : []);
  selectedDayName = computed(() => {
    const dayIndex = this.selectedDate().getDay();
    return `${this.weekDays[dayIndex]}\uC694\uC77C`;
  }, ...ngDevMode ? [{ debugName: "selectedDayName" }] : []);
  selectedDayNum = computed(() => this.selectedDate().getDate(), ...ngDevMode ? [{ debugName: "selectedDayNum" }] : []);
  selectedDateTasks = computed(() => {
    const dateStr = this.calendarService.formatDate(this.selectedDate());
    return this.calendarService.getTasksByDateSorted(dateStr);
  }, ...ngDevMode ? [{ debugName: "selectedDateTasks" }] : []);
  remainingCount = computed(() => {
    return this.selectedDateTasks().filter((t) => !t.completed).length;
  }, ...ngDevMode ? [{ debugName: "remainingCount" }] : []);
  progressPercentage = computed(() => {
    const tasks = this.selectedDateTasks();
    if (tasks.length === 0)
      return 0;
    const completed = tasks.filter((t) => t.completed).length;
    return completed / tasks.length * 100;
  }, ...ngDevMode ? [{ debugName: "progressPercentage" }] : []);
  // Methods
  formatDateForInput(date) {
    return this.calendarService.formatDate(date);
  }
  getMonthCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    while (days.length % 7 !== 0) {
      days.push(null);
    }
    return days;
  }
  isToday(year, month, day) {
    if (!day)
      return false;
    const today = /* @__PURE__ */ new Date();
    return year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
  }
  createCalendarDay(date, isCurrentMonth) {
    const dateStr = this.calendarService.formatDate(date);
    const todayStr = this.calendarService.formatDate(/* @__PURE__ */ new Date());
    const selectedStr = this.calendarService.formatDate(this.selectedDate());
    const dayTasks = this.calendarService.getTasksByDate(dateStr);
    return {
      date,
      dateStr,
      dayNum: date.getDate(),
      dayOfWeek: date.getDay(),
      isCurrentMonth,
      isToday: dateStr === todayStr,
      isSelected: dateStr === selectedStr,
      tasks: dayTasks,
      lunarDateStr: "",
      isSonlessDay: false
    };
  }
  formatHour(hour) {
    return `${String(hour).padStart(2, "0")}:00`;
  }
  getTasksByHour(hour) {
    const targetHourStr = String(hour).padStart(2, "0");
    return this.selectedDateTasks().filter((t) => {
      if (!t.time)
        return false;
      const taskHour = t.time.split(":")[0];
      return taskHour === targetHourStr;
    });
  }
  getTasksByDayAndTime(day, hour) {
    const targetHourStr = String(hour).padStart(2, "0");
    return day.tasks.filter((t) => {
      if (!t.time)
        return false;
      const [h] = t.time.split(":").map(Number);
      return h === hour;
    });
  }
  setViewMode(mode) {
    this.viewMode.set(mode);
    this.currentDate.set(new Date(this.selectedDate()));
    this.isViewMenuOpen.set(false);
  }
  toggleViewMenu() {
    this.isViewMenuOpen.update((v) => !v);
  }
  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }
  openSearch() {
    this.searchQuery.set(" ");
    this.isSidebarOpen.set(true);
  }
  closeSidebar() {
    this.isSidebarOpen.set(false);
    this.searchQuery.set("");
  }
  toggleLunar() {
    this.showLunar.update((v) => !v);
  }
  toggleSonless() {
    this.showSonless.update((v) => !v);
  }
  updateSearch(event) {
    const input = event.target;
    this.searchQuery.set(input.value);
  }
  clearSearch() {
    this.searchQuery.set("");
  }
  goToTaskDate(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const newDate = new Date(year, month - 1, day);
    this.currentDate.set(newDate);
    this.selectedDate.set(newDate);
  }
  navigate(delta) {
    const mode = this.viewMode();
    const date = new Date(this.currentDate());
    switch (mode) {
      case "year":
        date.setFullYear(date.getFullYear() + delta);
        break;
      case "month":
        date.setMonth(date.getMonth() + delta);
        break;
      case "week":
        date.setDate(date.getDate() + delta * 7);
        break;
      case "day":
        date.setDate(date.getDate() + delta);
        break;
    }
    this.currentDate.set(date);
    if (mode === "day" || mode === "week") {
      this.selectedDate.set(date);
    }
  }
  goToday() {
    const today = /* @__PURE__ */ new Date();
    this.currentDate.set(today);
    this.selectedDate.set(today);
  }
  selectDate(date) {
    this.selectedDate.set(date);
    if (this.viewMode() === "month" && date.getMonth() !== this.currentMonth()) {
      this.currentDate.set(new Date(date.getFullYear(), date.getMonth(), 1));
    }
    if (!this.isSidebarOpen()) {
      this.isSidebarOpen.set(true);
    }
  }
  selectMonth(monthIndex) {
    const year = this.currentYear();
    const newDate = new Date(year, monthIndex, 1);
    this.currentDate.set(newDate);
    this.setViewMode("month");
  }
  addTaskFromModal(title, startDate, startTime, endDate, endTime, memo, category) {
    if (!title.trim() || !startDate)
      return;
    const cat = this.categories().find((c) => c.name === category);
    this.calendarService.addTaskDetailed({
      dateStr: startDate,
      title: title.trim(),
      completed: false,
      color: cat?.color || this.modalSelectedColor(),
      time: startTime || void 0,
      endDateStr: endDate || void 0,
      endTime: endTime || void 0,
      memo: memo?.trim() || void 0,
      category
    });
    this.closeAddModal();
    const [y, m, d] = startDate.split("-").map(Number);
    const newDate = new Date(y, m - 1, d);
    this.currentDate.set(newDate);
    this.selectDate(newDate);
  }
  addTaskAt(date, hour) {
    this.selectDate(date);
    this.openAddModal();
  }
  toggleTask(id) {
    this.calendarService.toggleTask(id);
  }
  deleteTask(id) {
    this.calendarService.deleteTask(id);
  }
  openAddModal() {
    this.isAddModalOpen.set(true);
    const defaultCategory = this.categories()[0];
    this.modalSelectedCategory.set(defaultCategory.name);
    this.modalSelectedColor.set(defaultCategory.color);
    this.isAddingCategory.set(false);
  }
  closeAddModal() {
    this.isAddModalOpen.set(false);
  }
  selectCategory(name) {
    this.modalSelectedCategory.set(name);
    const cat = this.categories().find((c) => c.name === name);
    if (cat) {
      this.modalSelectedColor.set(cat.color);
    }
  }
  addCategory(name) {
    if (!name.trim())
      return;
    this.calendarService.addCategory(name.trim(), this.newCategoryColor());
    this.selectCategory(name.trim());
    this.isAddingCategory.set(false);
  }
  openDetailModal(task) {
    this.selectedTaskDetail.set(task);
    this.isDetailModalOpen.set(true);
  }
  closeDetailModal() {
    this.isDetailModalOpen.set(false);
    this.selectedTaskDetail.set(null);
  }
  static \u0275fac = function CalendarMobileHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarMobileHomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarMobileHomeComponent, selectors: [["app-calendar-mobile-home"]], decls: 59, vars: 20, consts: [["searchInput", ""], ["modalTitleInput", ""], ["modalStartDateInput", ""], ["modalStartTimeInput", ""], ["modalEndDateInput", ""], ["modalEndTimeInput", ""], ["modalMemoInput", ""], ["newCategoryName", ""], [1, "w-full", "h-full", "flex", "flex-col", "relative", "overflow-hidden", "bg-white", "font-sans", "text-slate-800"], [1, "flex-1", "px-4", "pb-4", "flex", "flex-col", "relative", "transition-all", "duration-500", "overflow-hidden"], [1, "flex", "flex-col", "gap-3", "mb-2", "flex-shrink-0"], [1, "flex", "justify-between", "items-center", "gap-2"], [1, "text-xl", "font-bold", "text-slate-800", "tracking-tight", "flex", "items-center", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "p-2", "text-slate-500", "hover:bg-gray-100", "rounded-full", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "relative"], [1, "flex", "items-center", "gap-1", "text-sm", "font-semibold", "bg-gray-100", "px-3", "py-1.5", "rounded-full", "text-slate-700", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "transition-transform"], ["points", "6 9 12 15 18 9"], [1, "absolute", "right-0", "top-full", "mt-2", "bg-white", "rounded-xl", "shadow-xl", "border", "border-gray-100", "p-1.5", "z-50", "min-w-[100px]", "animate-fade-in", "origin-top-right"], [1, "flex", "justify-between", "items-center"], [1, "flex", "gap-3", "text-xs", "text-slate-500"], [1, "flex", "items-center", "gap-1", "cursor-pointer", "select-none"], ["type", "checkbox", 1, "rounded", "text-indigo-600", "focus:ring-indigo-500", "w-3.5", "h-3.5", "border-gray-300", 3, "change", "checked"], [1, "flex", "bg-gray-100", "rounded-lg", "p-0.5"], [1, "p-1.5", "hover:bg-white", "hover:shadow-sm", "rounded-md", "transition-all", "text-slate-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "m15 18-6-6 6-6"], [1, "px-3", "py-1", "text-xs", "font-bold", "hover:bg-white", "hover:shadow-sm", "rounded-md", "transition-all", "text-slate-600", 3, "click"], ["d", "m9 18 6-6-6-6"], [1, "flex-1", "overflow-hidden", "flex", "flex-col", "relative", "bg-white", "rounded-xl", "shadow-[0_0_15px_rgba(0,0,0,0.03)]", "border", "border-gray-100"], [1, "grid", "grid-cols-2", "gap-3", "h-full", "overflow-y-auto", "p-3", "custom-scrollbar", "pb-20"], [1, "flex", "flex-col", "h-full", "overflow-hidden", "pb-20"], [1, "flex-1", "bg-white", "flex", "flex-col", "h-full", "overflow-hidden"], ["aria-label", "\uC77C\uC815 \uCD94\uAC00", 1, "absolute", "bottom-6", "right-5", "w-14", "h-14", "bg-indigo-600", "hover:bg-indigo-700", "active:scale-95", "text-white", "rounded-full", "shadow-lg", "shadow-indigo-200", "flex", "items-center", "justify-center", "transition-all", "z-20", "focus:outline-none", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "absolute", "inset-0", "bg-white", "z-40", "transition-transform", "duration-300", "ease-in-out", "flex", "flex-col"], [1, "px-4", "py-3", "border-b", "border-gray-100", "flex", "items-center", "gap-3"], [1, "p-2", "-ml-2", "text-slate-600", "hover:bg-gray-100", "rounded-full", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "flex-1", "relative"], [1, "font-bold", "text-lg", "text-slate-800"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar", "p-4", "bg-gray-50"], [1, "hidden", "md:block", "absolute", "bottom-2", "left-1/2", "-translate-x-1/2", "w-32", "h-1", "bg-black", "rounded-full", "z-50"], [1, "absolute", "inset-0", "z-50", "flex", "items-end", "justify-center", "bg-black/50", "backdrop-blur-sm", "transition-opacity"], [1, "w-full", "text-left", "px-3", "py-2", "text-sm", "rounded-lg", "transition-colors", 3, "bg-indigo-50", "text-indigo-600", "font-bold", "text-slate-600", "hover:bg-gray-50"], [1, "w-full", "text-left", "px-3", "py-2", "text-sm", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-gray-100", "p-2", "hover:border-indigo-300", "transition-all", "cursor-pointer", "group", "flex", "flex-col", "h-auto"], [1, "bg-white", "rounded-xl", "border", "border-gray-100", "p-2", "hover:border-indigo-300", "transition-all", "cursor-pointer", "group", "flex", "flex-col", "h-auto", 3, "click"], [1, "text-xs", "font-bold", "text-slate-800", "mb-2", "px-1", "text-center", "group-hover:text-indigo-600"], [1, "grid", "grid-cols-7", "text-center", "mb-1"], [1, "text-[8px]", "font-medium", 3, "text-red-400", "text-blue-400", "text-slate-400"], [1, "grid", "grid-cols-7", "gap-y-0.5", "flex-1", "content-start"], [1, "flex", "justify-center", "items-center", "h-4"], [1, "text-[8px]", "font-medium"], [1, "text-[8px]", "w-3.5", "h-3.5", "flex", "items-center", "justify-center", "rounded-full", 3, "bg-indigo-600", "text-white", "text-slate-600"], [1, "text-[8px]", "w-3.5", "h-3.5", "flex", "items-center", "justify-center", "rounded-full"], [1, "grid", "grid-cols-7", "mb-2", "text-center", "flex-shrink-0", "border-b", "border-gray-100", "py-1"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", 3, "text-red-500", "text-blue-500", "text-slate-400"], [1, "grid", "grid-cols-7", "flex-1", "auto-rows-fr", "gap-px", "h-full", "overflow-y-auto", "custom-scrollbar", "relative", "bg-slate-100", "pb-20"], [1, "relative", "bg-white", "cursor-pointer", "flex", "flex-col", "items-center", "justify-start", "pt-1", "min-h-[50px]", "active:bg-gray-50", "transition-colors", 3, "opacity-40"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider"], [1, "relative", "bg-white", "cursor-pointer", "flex", "flex-col", "items-center", "justify-start", "pt-1", "min-h-[50px]", "active:bg-gray-50", "transition-colors", 3, "click"], [1, "text-xs", "font-medium", "w-6", "h-6", "flex", "items-center", "justify-center", "rounded-full", "transition-colors", "mb-0.5"], [1, "flex", "flex-col", "items-center", "gap-px", "w-full", "px-0.5"], [1, "text-[8px]", "text-slate-300", "leading-none", "scale-90"], [1, "w-1", "h-1", "rounded-full", "bg-indigo-400", "my-0.5"], [1, "flex", "flex-wrap", "justify-center", "gap-0.5", "w-full", "mt-0.5"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "opacity-30", "backgroundColor"], [1, "w-1", "h-1", "rounded-full", "bg-slate-200"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "flex", "border-b", "border-gray-100", "flex-shrink-0", "bg-white", "z-10"], [1, "w-10", "flex-shrink-0", "border-r", "border-gray-100", "bg-gray-50"], [1, "grid", "grid-cols-7", "flex-1"], [1, "text-center", "py-2", "border-r", "border-gray-100", "last:border-0", 3, "bg-indigo-50"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar", "relative"], [1, "flex", "relative", "min-h-[1440px]"], [1, "w-10", "flex-shrink-0", "border-r", "border-gray-100", "bg-gray-50", "sticky", "left-0", "z-10"], [1, "h-16", "border-b", "border-gray-100", "text-[9px]", "text-right", "pr-1", "pt-1", "text-slate-400", "relative"], [1, "border-r", "border-gray-100", "last:border-0", "relative"], [1, "text-center", "py-2", "border-r", "border-gray-100", "last:border-0", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "text-[9px]", "text-slate-400"], [1, "text-xs", "font-bold"], [1, "h-16", "border-b", "border-gray-100", "box-border", "relative"], [1, "h-16", "border-b", "border-gray-100", "box-border", "relative", 3, "click"], [1, "absolute", "inset-x-0.5", "top-0.5", "bottom-auto", "h-[90%]", "rounded", "bg-opacity-90", "px-0.5", "text-[8px]", "text-white", "overflow-hidden", "leading-tight", "cursor-pointer", 3, "backgroundColor"], [1, "absolute", "inset-x-0.5", "top-0.5", "bottom-auto", "h-[90%]", "rounded", "bg-opacity-90", "px-0.5", "text-[8px]", "text-white", "overflow-hidden", "leading-tight", "cursor-pointer", 3, "click"], [1, "p-4", "border-b", "border-gray-100", "bg-gray-50", "flex", "items-center", "justify-between"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "flex", "items-center", "gap-2", "mt-1"], [1, "text-xs", "text-slate-500"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar", "p-2", "relative", "pb-20"], [1, "flex", "min-h-[60px]"], [1, "w-12", "text-right", "pr-3", "pt-0", "text-xs", "font-medium", "text-slate-400", "border-r", "border-gray-100", "relative"], [1, "sticky", "top-0", "-mt-2", "bg-white", "px-1"], [1, "flex-1", "border-t", "border-gray-100", "relative", "p-1", "pb-2", "hover:bg-gray-50", "transition-colors"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "gap-2", "p-2", "rounded-lg", "bg-indigo-50", "border", "border-indigo-100", "text-indigo-900", "text-sm", "shadow-sm", "cursor-pointer", 3, "border-left-color", "border-left-width", "opacity-50"], [1, "flex", "items-center", "gap-2", "p-2", "rounded-lg", "bg-indigo-50", "border", "border-indigo-100", "text-indigo-900", "text-sm", "shadow-sm", "cursor-pointer", 3, "click"], [1, "font-bold", "text-xs", "w-9", "shrink-0"], [1, "truncate"], ["type", "text", "placeholder", "\uAC80\uC0C9\uC5B4 \uC785\uB825", 1, "w-full", "pl-3", "pr-8", "py-1.5", "bg-gray-100", "rounded-lg", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "input", "value"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-slate-400", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "h-full", "flex", "flex-col", "items-center", "justify-center", "text-slate-400"], [1, "space-y-3"], [1, "text-sm"], [1, "bg-white", "p-3", "rounded-xl", "border", "border-gray-100", "shadow-sm"], [1, "bg-white", "p-3", "rounded-xl", "border", "border-gray-100", "shadow-sm", 3, "click"], [1, "flex", "justify-between", "items-start", "mb-1"], [1, "text-xs", "font-bold", "text-slate-500", "bg-gray-50", "px-1.5", "py-0.5", "rounded"], [1, "text-xs", "text-indigo-500", "font-medium"], [1, "w-2", "h-2", "rounded-full", "flex-shrink-0"], [1, "text-sm", "font-medium", "text-slate-700"], [1, "mb-4", "flex", "items-end", "justify-between"], [1, "text-xs", "font-semibold", "text-indigo-600"], [1, "text-xs", "text-slate-400", "font-medium", "uppercase", "tracking-wide"], [1, "w-full", "bg-gray-200", "h-1.5", "rounded-full", "overflow-hidden", "mb-6", "flex-shrink-0"], [1, "bg-indigo-500", "h-full", "transition-all", "duration-500"], [1, "h-60", "flex", "flex-col", "items-center", "justify-center", "text-center", "text-slate-400", "opacity-60"], [1, "group", "flex", "items-center", "gap-3", "bg-white", "p-3", "rounded-xl", "border", "border-gray-100", "shadow-sm"], [1, "relative", "flex-shrink-0", "w-6", "h-6", "rounded-full", "border-2", "transition-all", "duration-200", "flex", "items-center", "justify-center", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "flex-1", "min-w-0", 3, "click"], [1, "text-sm", "font-medium", "transition-all", "duration-200", "truncate"], [1, "text-xs", "text-indigo-500", "font-medium", "mt-0.5"], [1, "text-slate-300", "hover:text-red-500", "p-2", 3, "click"], ["points", "20 6 9 17 4 12"], [1, "absolute", "inset-0", "z-50", "flex", "items-end", "justify-center", "bg-black/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "bg-white", "rounded-t-3xl", "shadow-2xl", "w-full", "h-[90%]", "flex", "flex-col", "animate-slide-up", 3, "click"], [1, "bg-white", "px-6", "py-4", "rounded-t-3xl", "border-b", "border-gray-100", "flex", "justify-between", "items-center"], [1, "p-2", "-mr-2", "text-slate-400", "hover:text-slate-600", 3, "click"], [1, "p-6", "space-y-6", "overflow-y-auto", "custom-scrollbar", "flex-1", "bg-white"], [1, "space-y-4"], [1, "block", "text-xs", "font-bold", "text-slate-500", "mb-1"], ["type", "text", "placeholder", "\uC77C\uC815 \uC81C\uBAA9 \uC785\uB825", 1, "w-full", "text-lg", "font-medium", "border-b", "border-gray-200", "py-2", "focus:border-indigo-600", "focus:outline-none", "rounded-none", "bg-transparent", "placeholder-slate-300"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "date", 1, "w-full", "py-2", "border-b", "border-gray-200", "text-sm", "focus:outline-none", "bg-transparent", 3, "value"], ["type", "time", 1, "w-full", "py-2", "border-b", "border-gray-200", "text-sm", "focus:outline-none", "bg-transparent", "mt-1"], [1, "block", "text-xs", "font-bold", "text-slate-500", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1.5", "rounded-full", "text-xs", "font-medium", "border", "transition-all", 3, "bg-indigo-600", "text-white", "border-transparent", "bg-white", "text-slate-600", "border-gray-200"], [1, "px-3", "py-1.5", "rounded-full", "text-xs", "font-medium", "border", "border-dashed", "border-gray-300", "text-slate-400", 3, "click"], [1, "mt-3", "flex", "gap-2"], ["rows", "3", "placeholder", "\uBA54\uBAA8 \uCD94\uAC00", 1, "w-full", "p-3", "bg-gray-50", "rounded-xl", "border-none", "text-sm", "resize-none", "focus:ring-2", "focus:ring-indigo-100"], [1, "p-4", "bg-white", "border-t", "border-gray-100", "safe-area-pb"], [1, "w-full", "py-3.5", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-bold", "rounded-2xl", "shadow-lg", "shadow-indigo-200", "transition-colors", "text-base", 3, "click"], [1, "px-3", "py-1.5", "rounded-full", "text-xs", "font-medium", "border", "transition-all", 3, "click"], ["type", "text", "placeholder", "\uC0C8 \uCE74\uD14C\uACE0\uB9AC\uBA85", 1, "flex-1", "px-3", "py-1.5", "text-sm", "border", "border-gray-200", "rounded-lg"], [1, "bg-slate-800", "text-white", "px-3", "text-xs", "rounded-lg", 3, "click"], [1, "bg-white", "rounded-t-3xl", "shadow-2xl", "w-full", "flex", "flex-col", "animate-slide-up", "max-h-[85%]", 3, "click"], [1, "p-6"], [1, "w-12", "h-1", "bg-gray-200", "rounded-full", "mx-auto", "mb-6"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "px-2.5", "py-1", "rounded-md", "text-xs", "font-bold", "bg-slate-100", "text-slate-600", "border", "border-slate-200"], [1, "flex-1", "h-px", "bg-gray-100"], [1, "text-red-500", "text-xs", "font-medium", "px-2", "py-1", "bg-red-50", "rounded-md", 3, "click"], [1, "text-2xl", "font-bold", "text-slate-800", "mb-6", "leading-snug"], [1, "space-y-6"], [1, "flex", "gap-4"], [1, "w-10", "h-10", "rounded-full", "bg-indigo-50", "flex", "items-center", "justify-center", "text-indigo-600", "shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "text-sm", "text-slate-600", "mt-0.5"], [1, "text-indigo-600", "font-bold", "ml-1"], [1, "p-4", "border-t", "border-gray-100", "safe-area-pb"], [1, "w-full", "py-3.5", "bg-gray-100", "hover:bg-gray-200", "text-slate-700", "font-bold", "rounded-2xl", "transition-colors", 3, "click"], [1, "w-10", "h-10", "rounded-full", "bg-slate-50", "flex", "items-center", "justify-center", "text-slate-500", "shrink-0"], ["x1", "17", "y1", "10", "x2", "3", "y2", "10"], ["x1", "21", "y1", "6", "x2", "3", "y2", "6"], ["x1", "21", "y1", "14", "x2", "3", "y2", "14"], ["x1", "17", "y1", "18", "x2", "3", "y2", "18"], [1, "text-sm", "text-slate-600", "mt-0.5", "whitespace-pre-wrap", "leading-relaxed"]], template: function CalendarMobileHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "h2", 12);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 13)(7, "button", 14);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_7_listener() {
        return ctx.openSearch();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(8, "svg", 15);
      \u0275\u0275domElement(9, "circle", 16)(10, "line", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(11, "div", 18)(12, "button", 19);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_12_listener() {
        return ctx.toggleViewMenu();
      });
      \u0275\u0275text(13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(14, "svg", 20);
      \u0275\u0275domElement(15, "polyline", 21);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(16, CalendarMobileHomeComponent_Conditional_16_Template, 3, 0, "div", 22);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(17, "div", 23)(18, "div", 24)(19, "label", 25)(20, "input", 26);
      \u0275\u0275domListener("change", function CalendarMobileHomeComponent_Template_input_change_20_listener() {
        return ctx.toggleLunar();
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "span");
      \u0275\u0275text(22, "\uC74C\uB825");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "label", 25)(24, "input", 26);
      \u0275\u0275domListener("change", function CalendarMobileHomeComponent_Template_input_change_24_listener() {
        return ctx.toggleSonless();
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "span");
      \u0275\u0275text(26, "\uC190\uC5C6\uB294\uB0A0");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(27, "div", 27)(28, "button", 28);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_28_listener() {
        return ctx.navigate(-1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(29, "svg", 29);
      \u0275\u0275domElement(30, "path", 30);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(31, "button", 31);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_31_listener() {
        return ctx.goToday();
      });
      \u0275\u0275text(32, " \uC624\uB298 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "button", 28);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_33_listener() {
        return ctx.navigate(1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(34, "svg", 29);
      \u0275\u0275domElement(35, "path", 32);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(36, "div", 33);
      \u0275\u0275conditionalCreate(37, CalendarMobileHomeComponent_Case_37_Template, 3, 0, "div", 34)(38, CalendarMobileHomeComponent_Case_38_Template, 6, 0)(39, CalendarMobileHomeComponent_Case_39_Template, 14, 0, "div", 35)(40, CalendarMobileHomeComponent_Case_40_Template, 11, 3, "div", 36);
      \u0275\u0275domElementStart(41, "button", 37);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_41_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(42, "svg", 38);
      \u0275\u0275domElement(43, "line", 39)(44, "line", 40);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(45, "div", 41)(46, "div", 42)(47, "button", 43);
      \u0275\u0275domListener("click", function CalendarMobileHomeComponent_Template_button_click_47_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(48, "svg", 44);
      \u0275\u0275domElement(49, "line", 45)(50, "polyline", 46);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(51, CalendarMobileHomeComponent_Conditional_51_Template, 7, 1, "div", 47)(52, CalendarMobileHomeComponent_Conditional_52_Template, 2, 1, "h3", 48);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(53, "div", 49);
      \u0275\u0275conditionalCreate(54, CalendarMobileHomeComponent_Conditional_54_Template, 2, 1)(55, CalendarMobileHomeComponent_Conditional_55_Template, 9, 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(56, "div", 50);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(57, CalendarMobileHomeComponent_Conditional_57_Template, 48, 3, "div", 51);
      \u0275\u0275conditionalCreate(58, CalendarMobileHomeComponent_Conditional_58_Template, 30, 5, "div", 51);
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-0", ctx.isSidebarOpen())("pointer-events-none", ctx.isSidebarOpen());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.headerTitle(), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.viewModeLabel(), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.isViewMenuOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isViewMenuOpen() ? 16 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("checked", ctx.showLunar());
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("checked", ctx.showSonless());
      \u0275\u0275advance(13);
      \u0275\u0275conditional((tmp_8_0 = ctx.viewMode()) === "year" ? 37 : tmp_8_0 === "month" ? 38 : tmp_8_0 === "week" ? 39 : tmp_8_0 === "day" ? 40 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("translate-x-0", ctx.isSidebarOpen() || ctx.searchQuery())("translate-x-full", !ctx.isSidebarOpen() && !ctx.searchQuery());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.searchQuery() ? 51 : 52);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.searchQuery() ? 54 : 55);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAddModalOpen() ? 57 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDetailModalOpen() && ctx.selectedTaskDetail() ? 58 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ], styles: ["\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #cbd5e1;\n  border-radius: 10px;\n}\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.animate-slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out forwards;\n}\n.safe-area-pb[_ngcontent-%COMP%] {\n  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMobileHomeComponent, [{
    type: Component,
    args: [{ selector: "app-calendar-mobile-home", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule
    ], template: `
    <!-- App Main Content -->
    <div class="w-full h-full flex flex-col relative overflow-hidden bg-white font-sans text-slate-800">
            
            <!-- \uBA54\uC778 \uB2EC\uB825 \uC601\uC5ED -->
            <div class="flex-1 px-4 pb-4 flex flex-col relative transition-all duration-500 overflow-hidden"
                 [class.opacity-0]="isSidebarOpen()"
                 [class.pointer-events-none]="isSidebarOpen()">
                 
              <!-- Header Area -->
              <div class="flex flex-col gap-3 mb-2 flex-shrink-0">
                <div class="flex justify-between items-center gap-2">
                  <h2 class="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                    {{ headerTitle() }}
                  </h2>

                  <div class="flex items-center gap-2">
                    <button (click)="openSearch()" class="p-2 text-slate-500 hover:bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <!-- View Mode Dropdown Button -->
                    <div class="relative">
                        <button (click)="toggleViewMenu()" class="flex items-center gap-1 text-sm font-semibold bg-gray-100 px-3 py-1.5 rounded-full text-slate-700">
                            {{ viewModeLabel() }}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" [class.rotate-180]="isViewMenuOpen()"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        
                        @if (isViewMenuOpen()) {
                            <div class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-50 min-w-[100px] animate-fade-in origin-top-right">
                                @for (mode of viewOptions; track mode.value) {
                                    <button 
                                        (click)="setViewMode(mode.value); isViewMenuOpen.set(false)"
                                        class="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors"
                                        [class.bg-indigo-50]="viewMode() === mode.value"
                                        [class.text-indigo-600]="viewMode() === mode.value"
                                        [class.font-bold]="viewMode() === mode.value"
                                        [class.text-slate-600]="viewMode() !== mode.value"
                                        [class.hover:bg-gray-50]="viewMode() !== mode.value">
                                        {{ mode.label }}
                                    </button>
                                }
                            </div>
                        }
                    </div>
                  </div>
                </div>

                <!-- Navigation & Options Row -->
                <div class="flex justify-between items-center">
                    <div class="flex gap-3 text-xs text-slate-500">
                        <label class="flex items-center gap-1 cursor-pointer select-none">
                            <input type="checkbox" [checked]="showLunar()" (change)="toggleLunar()" class="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5 border-gray-300">
                            <span>\uC74C\uB825</span>
                        </label>
                        <label class="flex items-center gap-1 cursor-pointer select-none">
                            <input type="checkbox" [checked]="showSonless()" (change)="toggleSonless()" class="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5 border-gray-300">
                            <span>\uC190\uC5C6\uB294\uB0A0</span>
                        </label>
                    </div>

                    <div class="flex bg-gray-100 rounded-lg p-0.5">
                       <button (click)="navigate(-1)" class="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all text-slate-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                       </button>
                       <button (click)="goToday()" class="px-3 py-1 text-xs font-bold hover:bg-white hover:shadow-sm rounded-md transition-all text-slate-600">
                           \uC624\uB298
                       </button>
                       <button (click)="navigate(1)" class="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all text-slate-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                       </button>
                    </div>
                </div>
              </div>

              <!-- Main Calendar View -->
              <div class="flex-1 overflow-hidden flex flex-col relative bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.03)] border border-gray-100">
                @switch (viewMode()) {
                  @case ('year') {
                    <div class="grid grid-cols-2 gap-3 h-full overflow-y-auto p-3 custom-scrollbar pb-20">
                      @for (monthIdx of monthIndices; track monthIdx) {
                        <div 
                          (click)="selectMonth(monthIdx)"
                          class="bg-white rounded-xl border border-gray-100 p-2 hover:border-indigo-300 transition-all cursor-pointer group flex flex-col h-auto">
                          <h3 class="text-xs font-bold text-slate-800 mb-2 px-1 text-center group-hover:text-indigo-600">
                            {{ monthIdx + 1 }}\uC6D4
                          </h3>
                          <div class="grid grid-cols-7 text-center mb-1">
                            @for (day of weekDaysShort; track day; let i = $index) {
                              <span class="text-[8px] font-medium" 
                                [class.text-red-400]="i === 0" 
                                [class.text-blue-400]="i === 6"
                                [class.text-slate-400]="i !== 0 && i !== 6">
                                {{ day }}
                              </span>
                            }
                          </div>
                          <div class="grid grid-cols-7 gap-y-0.5 flex-1 content-start">
                            @for (day of getMonthCalendar(currentYear(), monthIdx); track $index) {
                              <div class="flex justify-center items-center h-4">
                                @if (day) {
                                  <span class="text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full"
                                    [class.bg-indigo-600]="isToday(currentYear(), monthIdx, day)"
                                    [class.text-white]="isToday(currentYear(), monthIdx, day)"
                                    [class.text-slate-600]="!isToday(currentYear(), monthIdx, day)">
                                    {{ day }}
                                  </span>
                                }
                              </div>
                            }
                          </div>
                        </div>
                      }
                    </div>
                  }

                  @case ('month') {
                    <div class="grid grid-cols-7 mb-2 text-center flex-shrink-0 border-b border-gray-100 py-1">
                      @for (day of weekDays; track day; let i = $index) {
                        <div class="text-[10px] font-semibold uppercase tracking-wider"
                              [class.text-red-500]="i === 0"
                              [class.text-blue-500]="i === 6"
                              [class.text-slate-400]="i !== 0 && i !== 6">
                          {{ day }}
                        </div>
                      }
                    </div>
                    <div class="grid grid-cols-7 flex-1 auto-rows-fr gap-px h-full overflow-y-auto custom-scrollbar relative bg-slate-100 pb-20">
                      @for (day of calendarDays(); track day.dateStr) {
                        <div 
                          (click)="selectDate(day.date)"
                          class="relative bg-white cursor-pointer flex flex-col items-center justify-start pt-1 min-h-[50px] active:bg-gray-50 transition-colors"
                          [class.opacity-40]="!day.isCurrentMonth">
                          
                          <span 
                            class="text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full transition-colors mb-0.5"
                            [class.bg-indigo-600]="day.isToday"
                            [class.text-white]="day.isToday"
                            [class.bg-indigo-100]="day.isSelected && !day.isToday"
                            [class.text-indigo-700]="day.isSelected && !day.isToday"
                            [class.text-red-500]="!day.isToday && day.dayOfWeek === 0"
                            [class.text-blue-500]="!day.isToday && day.dayOfWeek === 6"
                            [class.text-slate-700]="!day.isToday && day.dayOfWeek !== 0 && day.dayOfWeek !== 6">
                            {{ day.dayNum }}
                          </span>

                          <div class="flex flex-col items-center gap-px w-full px-0.5">
                            @if (showLunar() && day.lunarDateStr) {
                              <span class="text-[8px] text-slate-300 leading-none scale-90">{{ day.lunarDateStr }}</span>
                            }
                            @if (showSonless() && day.isSonlessDay) {
                                <div class="w-1 h-1 rounded-full bg-indigo-400 my-0.5"></div>
                            }

                            <div class="flex flex-wrap justify-center gap-0.5 w-full mt-0.5">
                                @for (task of day.tasks.slice(0, 3); track task.id) {
                                <div 
                                    class="w-1.5 h-1.5 rounded-full"
                                    [class.opacity-30]="task.completed"
                                    [style.backgroundColor]="task.color">
                                </div>
                                }
                                @if (day.tasks.length > 3) {
                                <div class="w-1 h-1 rounded-full bg-slate-200"></div>
                                }
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  }

                  @case ('week') {
                    <div class="flex flex-col h-full overflow-hidden pb-20">
                        <div class="flex border-b border-gray-100 flex-shrink-0 bg-white z-10">
                            <div class="w-10 flex-shrink-0 border-r border-gray-100 bg-gray-50"></div>
                            <div class="grid grid-cols-7 flex-1">
                                @for (day of calendarDays(); track day.dateStr) {
                                    <div class="text-center py-2 border-r border-gray-100 last:border-0"
                                         (click)="selectDate(day.date)"
                                         [class.bg-indigo-50]="day.isSelected">
                                        <div class="flex flex-col items-center justify-center">
                                             <span class="text-[9px] text-slate-400">{{ weekDays[day.dayOfWeek] }}</span>
                                             <span class="text-xs font-bold"
                                                 [class.text-red-500]="day.dayOfWeek === 0"
                                                 [class.text-blue-500]="day.dayOfWeek === 6"
                                                 [class.text-slate-800]="day.dayOfWeek !== 0 && day.dayOfWeek !== 6">
                                                 {{ day.dayNum }}
                                             </span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto custom-scrollbar relative">
                            <div class="flex relative min-h-[1440px]">
                                <div class="w-10 flex-shrink-0 border-r border-gray-100 bg-gray-50 sticky left-0 z-10">
                                    @for (hour of hours; track hour) {
                                        <div class="h-16 border-b border-gray-100 text-[9px] text-right pr-1 pt-1 text-slate-400 relative">
                                            <span>{{ hour }}</span>
                                        </div>
                                    }
                                </div>
                                <div class="grid grid-cols-7 flex-1">
                                    @for (day of calendarDays(); track day.dateStr) {
                                        <div class="border-r border-gray-100 last:border-0 relative">
                                            @for (hour of hours; track hour) {
                                                <div class="h-16 border-b border-gray-100 box-border relative" (click)="addTaskAt(day.date, hour)">
                                                    @for (task of getTasksByDayAndTime(day, hour); track task.id) {
                                                        <div class="absolute inset-x-0.5 top-0.5 bottom-auto h-[90%] rounded bg-opacity-90 px-0.5 text-[8px] text-white overflow-hidden leading-tight cursor-pointer"
                                                             (click)="$event.stopPropagation(); openDetailModal(task)"
                                                             [style.backgroundColor]="task.color">
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                  }

                  @case ('day') {
                    <div class="flex-1 bg-white flex flex-col h-full overflow-hidden">
                        <div class="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                              <div>
                                <h3 class="text-lg font-bold text-slate-800">{{ selectedDayNum() }}\uC77C {{ selectedDayName() }}</h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span class="text-xs text-slate-500">\uC77C\uC815 {{ selectedDateTasks().length }}\uAC1C</span>
                                </div>
                              </div>
                        </div>
                        
                        <div class="flex-1 overflow-y-auto custom-scrollbar p-2 relative pb-20">
                             @for (hour of hours; track hour) {
                                <div class="flex min-h-[60px]">
                                    <div class="w-12 text-right pr-3 pt-0 text-xs font-medium text-slate-400 border-r border-gray-100 relative">
                                        <span class="sticky top-0 -mt-2 bg-white px-1">{{ formatHour(hour) }}</span>
                                    </div>
                                    <div class="flex-1 border-t border-gray-100 relative p-1 pb-2 hover:bg-gray-50 transition-colors">
                                        <div class="flex flex-col gap-1">
                                            @for (task of getTasksByHour(hour); track task.id) {
                                                <div 
                                                    class="flex items-center gap-2 p-2 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-900 text-sm shadow-sm cursor-pointer"
                                                    [style.border-left-color]="task.color"
                                                    [style.border-left-width.px]="3"
                                                    [class.opacity-50]="task.completed"
                                                    (click)="openDetailModal(task)">
                                                    <span class="font-bold text-xs w-9 shrink-0">{{ task.time }}</span>
                                                    <span [class.line-through]="task.completed" class="truncate">{{ task.title }}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                  }
                }
                
                <!-- Floating Action Button -->
                <button 
                  (click)="openAddModal()"
                  class="absolute bottom-6 right-5 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-full shadow-lg shadow-indigo-200 flex items-center justify-center transition-all z-20 focus:outline-none"
                  aria-label="\uC77C\uC815 \uCD94\uAC00">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>

            <!-- \uC0AC\uC774\uB4DC\uBC14 (Overlay for Mobile) -->
            <div 
                class="absolute inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col"
                [class.translate-x-0]="isSidebarOpen() || searchQuery()"
                [class.translate-x-full]="!isSidebarOpen() && !searchQuery()">
                
                <!-- Sidebar Header -->
                <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                    <button (click)="closeSidebar()" class="p-2 -ml-2 text-slate-600 hover:bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>
                    
                    @if(searchQuery()) {
                        <div class="flex-1 relative">
                            <input 
                                #searchInput
                                type="text" 
                                placeholder="\uAC80\uC0C9\uC5B4 \uC785\uB825" 
                                [value]="searchQuery()"
                                (input)="updateSearch($event)"
                                class="w-full pl-3 pr-8 py-1.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button (click)="clearSearch()" class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    } @else {
                        <h3 class="font-bold text-lg text-slate-800">{{ selectedDateTitle() }}</h3>
                    }
                </div>

                <!-- Sidebar Content -->
                <div class="flex-1 overflow-y-auto custom-scrollbar p-4 bg-gray-50">
                    @if (searchQuery()) {
                        @if (searchResults().length === 0) {
                            <div class="h-full flex flex-col items-center justify-center text-slate-400">
                                <p class="text-sm">\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
                            </div>
                        } @else {
                             <ul class="space-y-3">
                                @for (task of searchResults(); track task.id) {
                                    <li class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm" (click)="goToTaskDate(task.dateStr); closeSidebar()">
                                        <div class="flex justify-between items-start mb-1">
                                            <span class="text-xs font-bold text-slate-500 bg-gray-50 px-1.5 py-0.5 rounded">{{ task.dateStr }}</span>
                                            @if(task.time) { <span class="text-xs text-indigo-500 font-medium">{{ task.time }}</span> }
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="w-2 h-2 rounded-full flex-shrink-0" [style.backgroundColor]="task.color"></div>
                                            <span class="text-sm font-medium text-slate-700">{{ task.title }}</span>
                                        </div>
                                    </li>
                                }
                            </ul>
                        }
                    } @else {
                         <div class="mb-4 flex items-end justify-between">
                            <span class="text-xs font-semibold text-indigo-600">{{ selectedDayName() }}</span>
                            <span class="text-xs text-slate-400 font-medium uppercase tracking-wide">Tasks Left: {{ remainingCount() }}</span>
                        </div>

                        <div class="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-6 flex-shrink-0">
                            <div class="bg-indigo-500 h-full transition-all duration-500" [style.width.%]="progressPercentage()"></div>
                        </div>

                        @if (selectedDateTasks().length === 0) {
                            <div class="h-60 flex flex-col items-center justify-center text-center text-slate-400 opacity-60">
                                <p class="text-sm">\uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
                            </div>
                        } @else {
                            <ul class="space-y-3">
                                @for (task of selectedDateTasks(); track task.id) {
                                <li class="group flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                    <button 
                                    (click)="toggleTask(task.id)"
                                    class="relative flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
                                    [style.borderColor]="task.completed ? task.color : '#cbd5e1'"
                                    [style.backgroundColor]="task.completed ? task.color : 'transparent'">
                                    @if (task.completed) {
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    }
                                    </button>
                                    <div class="flex-1 min-w-0" (click)="openDetailModal(task)">
                                    <p 
                                        class="text-sm font-medium transition-all duration-200 truncate"
                                        [class.text-slate-400]="task.completed"
                                        [class.line-through]="task.completed"
                                        [class.text-slate-700]="!task.completed">
                                        {{ task.title }}
                                    </p>
                                    @if (task.time) {
                                        <p class="text-xs text-indigo-500 font-medium mt-0.5">{{ task.time }}</p>
                                    }
                                    </div>
                                    <button 
                                    (click)="deleteTask(task.id)"
                                    class="text-slate-300 hover:text-red-500 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                </li>
                                }
                            </ul>
                        }
                    }
                </div>
            </div>

            <!-- Home Indicator -->
            <div class="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full z-50"></div>
        </div>

        <!-- Add Modal (Bottom Sheet Style) -->
        @if (isAddModalOpen()) {
            <div class="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm transition-opacity" (click)="closeAddModal()">
                <div class="bg-white rounded-t-3xl shadow-2xl w-full h-[90%] flex flex-col animate-slide-up" (click)="$event.stopPropagation()">
                    <div class="bg-white px-6 py-4 rounded-t-3xl border-b border-gray-100 flex justify-between items-center">
                        <h3 class="text-lg font-bold text-slate-800">\uC0C8\uB85C\uC6B4 \uC77C\uC815</h3>
                        <button (click)="closeAddModal()" class="p-2 -mr-2 text-slate-400 hover:text-slate-600">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    
                    <div class="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
                        <div class="space-y-4">
                             <div>
                                <label class="block text-xs font-bold text-slate-500 mb-1">\uC81C\uBAA9</label>
                                <input #modalTitleInput type="text" class="w-full text-lg font-medium border-b border-gray-200 py-2 focus:border-indigo-600 focus:outline-none rounded-none bg-transparent placeholder-slate-300" placeholder="\uC77C\uC815 \uC81C\uBAA9 \uC785\uB825">
                             </div>
                             
                             <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold text-slate-500 mb-1">\uC2DC\uC791</label>
                                    <input #modalStartDateInput type="date" [value]="formatDateForInput(selectedDate())" class="w-full py-2 border-b border-gray-200 text-sm focus:outline-none bg-transparent">
                                    <input #modalStartTimeInput type="time" class="w-full py-2 border-b border-gray-200 text-sm focus:outline-none bg-transparent mt-1">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-slate-500 mb-1">\uC885\uB8CC</label>
                                    <input #modalEndDateInput type="date" [value]="formatDateForInput(selectedDate())" class="w-full py-2 border-b border-gray-200 text-sm focus:outline-none bg-transparent">
                                    <input #modalEndTimeInput type="time" class="w-full py-2 border-b border-gray-200 text-sm focus:outline-none bg-transparent mt-1">
                                </div>
                             </div>

                             <div>
                                <label class="block text-xs font-bold text-slate-500 mb-2">\uCE74\uD14C\uACE0\uB9AC</label>
                                <div class="flex flex-wrap gap-2">
                                    @for (cat of categories(); track cat.name) {
                                        <button 
                                            (click)="selectCategory(cat.name)"
                                            class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
                                            [class.bg-indigo-600]="modalSelectedCategory() === cat.name"
                                            [class.text-white]="modalSelectedCategory() === cat.name"
                                            [class.border-transparent]="modalSelectedCategory() === cat.name"
                                            [class.bg-white]="modalSelectedCategory() !== cat.name"
                                            [class.text-slate-600]="modalSelectedCategory() !== cat.name"
                                            [class.border-gray-200]="modalSelectedCategory() !== cat.name">
                                            {{ cat.name }}
                                        </button>
                                    }
                                    <button (click)="isAddingCategory.set(true)" class="px-3 py-1.5 rounded-full text-xs font-medium border border-dashed border-gray-300 text-slate-400">
                                        + \uCD94\uAC00
                                    </button>
                                </div>
                                @if(isAddingCategory()) {
                                    <div class="mt-3 flex gap-2">
                                         <input #newCategoryName type="text" placeholder="\uC0C8 \uCE74\uD14C\uACE0\uB9AC\uBA85" class="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg">
                                         <button (click)="addCategory(newCategoryName.value)" class="bg-slate-800 text-white px-3 text-xs rounded-lg">\uC800\uC7A5</button>
                                    </div>
                                }
                             </div>
                             
                             <div>
                                <label class="block text-xs font-bold text-slate-500 mb-1">\uBA54\uBAA8</label>
                                <textarea #modalMemoInput rows="3" class="w-full p-3 bg-gray-50 rounded-xl border-none text-sm resize-none focus:ring-2 focus:ring-indigo-100" placeholder="\uBA54\uBAA8 \uCD94\uAC00"></textarea>
                             </div>
                        </div>
                    </div>

                    <div class="p-4 bg-white border-t border-gray-100 safe-area-pb">
                        <button 
                            (click)="addTaskFromModal(
                                modalTitleInput.value, 
                                modalStartDateInput.value, modalStartTimeInput.value,
                                modalEndDateInput.value, modalEndTimeInput.value,
                                modalMemoInput.value,
                                modalSelectedCategory()
                            )" 
                            class="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-colors text-base">
                            \uC77C\uC815 \uB4F1\uB85D
                        </button>
                    </div>
                </div>
            </div>
        }

        <!-- Detail Modal -->
        @if (isDetailModalOpen() && selectedTaskDetail()) {
            <div class="absolute inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm transition-opacity" (click)="closeDetailModal()">
                 <div class="bg-white rounded-t-3xl shadow-2xl w-full flex flex-col animate-slide-up max-h-[85%]" (click)="$event.stopPropagation()">
                     <div class="p-6">
                        <div class="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
                        
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">{{ selectedTaskDetail()?.category }}</span>
                            <div class="flex-1 h-px bg-gray-100"></div>
                            <button (click)="deleteTask(selectedTaskDetail()!.id); closeDetailModal()" class="text-red-500 text-xs font-medium px-2 py-1 bg-red-50 rounded-md">\uC0AD\uC81C</button>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-slate-800 mb-6 leading-snug">{{ selectedTaskDetail()?.title }}</h3>
                        
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-slate-800">\uC77C\uC2DC</p>
                                    <p class="text-sm text-slate-600 mt-0.5">
                                        {{ selectedTaskDetail()?.dateStr }}
                                        @if(selectedTaskDetail()?.time) { <span class="text-indigo-600 font-bold ml-1">{{ selectedTaskDetail()?.time }}</span> }
                                    </p>
                                </div>
                            </div>
                            
                            @if(selectedTaskDetail()?.memo) {
                            <div class="flex gap-4">
                                <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-slate-800">\uBA54\uBAA8</p>
                                    <p class="text-sm text-slate-600 mt-0.5 whitespace-pre-wrap leading-relaxed">{{ selectedTaskDetail()?.memo }}</p>
                                </div>
                            </div>
                            }
                        </div>
                     </div>
                     <div class="p-4 border-t border-gray-100 safe-area-pb">
                        <button (click)="closeDetailModal()" class="w-full py-3.5 bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold rounded-2xl transition-colors">\uB2EB\uAE30</button>
                     </div>
                 </div>
            </div>
        }

  `, styles: ["/* angular:styles/component:scss;6624ab120b2aa3a7f44a82d7dd5e413c06150a297ecb9a57d3dbb03cbb15d8a3;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/calendar/mobile/pages/home/home.component.ts */\n.custom-scrollbar::-webkit-scrollbar {\n  width: 3px;\n}\n.custom-scrollbar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.custom-scrollbar::-webkit-scrollbar-thumb {\n  background-color: #cbd5e1;\n  border-radius: 10px;\n}\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.animate-slide-up {\n  animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out forwards;\n}\n.safe-area-pb {\n  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarMobileHomeComponent, { className: "CalendarMobileHomeComponent", filePath: "src/app/modules/calendar/mobile/pages/home/home.component.ts", lineNumber: 567 });
})();
export {
  CalendarMobileHomeComponent
};
//# sourceMappingURL=chunk-T6LIFWWS.js.map
