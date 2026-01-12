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
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/modules/calendar/pc/pages/workspace/workspace.component.ts
var _c0 = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var _c1 = () => ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.dateStr;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.name;
function CalendarPcWorkspaceComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 55);
    \u0275\u0275elementEnd()();
  }
}
function CalendarPcWorkspaceComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_For_16_Template_button_click_0_listener() {
      const mode_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode(mode_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white", ctx_r1.viewMode() === mode_r4.value)("text-indigo-600", ctx_r1.viewMode() === mode_r4.value)("shadow-sm", ctx_r1.viewMode() === mode_r4.value)("text-slate-500", ctx_r1.viewMode() !== mode_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r4.label, " ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "rect", 58)(3, "line", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-indigo-50", ctx_r1.isSidebarOpen())("border-indigo-100", ctx_r1.isSidebarOpen())("text-indigo-600", ctx_r1.isSidebarOpen())("bg-white", !ctx_r1.isSidebarOpen())("border-gray-200", !ctx_r1.isSidebarOpen())("text-slate-600", !ctx_r1.isSidebarOpen())("hover:bg-gray-50", !ctx_r1.isSidebarOpen());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isSidebarOpen() ? "\uD328\uB110 \uB2EB\uAE30" : "\uC77C\uC815 \uAD00\uB9AC");
  }
}
function CalendarPcWorkspaceComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_For_32_Template_button_click_0_listener() {
      const mode_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode(mode_r7.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white", ctx_r1.viewMode() === mode_r7.value)("text-indigo-600", ctx_r1.viewMode() === mode_r7.value)("shadow-sm", ctx_r1.viewMode() === mode_r7.value)("text-slate-500", ctx_r1.viewMode() !== mode_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mode_r7.label, " ");
  }
}
function CalendarPcWorkspaceComponent_Case_43_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const \u0275$index_111_r11 = ctx.$index;
    \u0275\u0275classProp("text-red-400", \u0275$index_111_r11 === 0)("text-blue-400", \u0275$index_111_r11 === 6)("text-slate-400", \u0275$index_111_r11 !== 0 && \u0275$index_111_r11 !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r10, " ");
  }
}
function CalendarPcWorkspaceComponent_Case_43_For_2_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r12 = \u0275\u0275nextContext().$implicit;
    const monthIdx_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-600", ctx_r1.isToday(ctx_r1.currentYear(), monthIdx_r9, day_r12))("text-white", ctx_r1.isToday(ctx_r1.currentYear(), monthIdx_r9, day_r12))("text-slate-600", !ctx_r1.isToday(ctx_r1.currentYear(), monthIdx_r9, day_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r12, " ");
  }
}
function CalendarPcWorkspaceComponent_Case_43_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275conditionalCreate(1, CalendarPcWorkspaceComponent_Case_43_For_2_For_9_Conditional_1_Template, 2, 7, "span", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r12 ? 1 : -1);
  }
}
function CalendarPcWorkspaceComponent_Case_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_43_For_2_Template_div_click_0_listener() {
      const monthIdx_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMonth(monthIdx_r9));
    });
    \u0275\u0275elementStart(1, "h3", 63)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275repeaterCreate(5, CalendarPcWorkspaceComponent_Case_43_For_2_For_6_Template, 2, 7, "span", 65, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 66);
    \u0275\u0275repeaterCreate(8, CalendarPcWorkspaceComponent_Case_43_For_2_For_9_Template, 2, 1, "div", 67, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const monthIdx_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", monthIdx_r9 + 1, "\uC6D4");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getMonthCalendar(ctx_r1.currentYear(), monthIdx_r9));
  }
}
function CalendarPcWorkspaceComponent_Case_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275repeaterCreate(1, CalendarPcWorkspaceComponent_Case_43_For_2_Template, 10, 2, "div", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CalendarPcWorkspaceComponent_Case_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    const \u0275$index_127_r15 = ctx.$index;
    \u0275\u0275classProp("text-red-500", \u0275$index_127_r15 === 0)("text-blue-500", \u0275$index_127_r15 === 6)("text-slate-400", \u0275$index_127_r15 !== 0 && \u0275$index_127_r15 !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r14, " ");
  }
}
function CalendarPcWorkspaceComponent_Case_44_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r17.lunarDateStr);
  }
}
function CalendarPcWorkspaceComponent_Case_44_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "\uC190\uC5C6\uB294\uB0A0");
    \u0275\u0275elementEnd();
  }
}
function CalendarPcWorkspaceComponent_Case_44_For_5_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_44_For_5_For_8_Template_div_click_0_listener($event) {
      const task_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r19 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", task_r19.color);
    \u0275\u0275classProp("opacity-30", task_r19.completed);
    \u0275\u0275property("title", \u0275\u0275interpolate(task_r19.title));
  }
}
function CalendarPcWorkspaceComponent_Case_44_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 87);
  }
}
function CalendarPcWorkspaceComponent_Case_44_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_44_For_5_Template_div_click_0_listener() {
      const day_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDate(day_r17.date));
    });
    \u0275\u0275elementStart(1, "span", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 82);
    \u0275\u0275conditionalCreate(4, CalendarPcWorkspaceComponent_Case_44_For_5_Conditional_4_Template, 2, 1, "span", 83);
    \u0275\u0275conditionalCreate(5, CalendarPcWorkspaceComponent_Case_44_For_5_Conditional_5_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85);
    \u0275\u0275repeaterCreate(7, CalendarPcWorkspaceComponent_Case_44_For_5_For_8_Template, 1, 6, "div", 86, _forTrack2);
    \u0275\u0275conditionalCreate(9, CalendarPcWorkspaceComponent_Case_44_For_5_Conditional_9_Template, 1, 0, "div", 87);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-indigo-500", day_r17.isSelected && ctx_r1.isSidebarOpen() && !ctx_r1.searchQuery())("bg-indigo-50", day_r17.isSelected && ctx_r1.isSidebarOpen() && !ctx_r1.searchQuery())("border-transparent", !day_r17.isSelected || !ctx_r1.isSidebarOpen() || ctx_r1.searchQuery())("hover:bg-gray-50", !day_r17.isSelected)("opacity-40", !day_r17.isCurrentMonth);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-indigo-600", day_r17.isToday)("text-white", day_r17.isToday)("text-red-500", !day_r17.isToday && day_r17.dayOfWeek === 0)("text-blue-500", !day_r17.isToday && day_r17.dayOfWeek === 6)("text-slate-700", !day_r17.isToday && day_r17.dayOfWeek !== 0 && day_r17.dayOfWeek !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r17.dayNum, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showLunar() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showSonless() && day_r17.isSonlessDay ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(day_r17.tasks.slice(0, 4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r17.tasks.length > 4 ? 9 : -1);
  }
}
function CalendarPcWorkspaceComponent_Case_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275repeaterCreate(1, CalendarPcWorkspaceComponent_Case_44_For_2_Template, 2, 7, "div", 72, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73);
    \u0275\u0275repeaterCreate(4, CalendarPcWorkspaceComponent_Case_44_For_5_Template, 10, 24, "div", 74, _forTrack1);
    \u0275\u0275elementStart(6, "button", 75);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_44_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 76);
    \u0275\u0275element(8, "line", 77)(9, "line", 78);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.weekDays);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.calendarDays());
  }
}
function CalendarPcWorkspaceComponent_Case_45_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_45_For_5_Template_div_click_0_listener() {
      const day_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDate(day_r21.date));
    });
    \u0275\u0275elementStart(1, "div", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", day_r21.isSelected);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", day_r21.dayOfWeek === 0)("text-blue-500", day_r21.dayOfWeek === 6)("text-slate-500", day_r21.dayOfWeek !== 0 && day_r21.dayOfWeek !== 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", day_r21.dayNum, "\uC77C(", ctx_r1.weekDays[day_r21.dayOfWeek], ") ");
  }
}
function CalendarPcWorkspaceComponent_Case_45_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatHour(hour_r22));
  }
}
function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_For_2_Template_div_click_0_listener($event) {
      const task_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r27));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r27 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", task_r27.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r27.title, " ");
  }
}
function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_For_5_Template_div_click_0_listener($event) {
      const task_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r29));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r29 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", task_r29.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r29.title, " ");
  }
}
function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_Template_div_click_0_listener() {
      const hour_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const day_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTaskAt(day_r25.date, hour_r24, "00"));
    });
    \u0275\u0275repeaterCreate(1, CalendarPcWorkspaceComponent_Case_45_For_13_For_2_For_2_Template, 2, 3, "div", 101, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 102);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_45_For_13_For_2_Template_div_click_3_listener() {
      const hour_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const day_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTaskAt(day_r25.date, hour_r24, "30"));
    });
    \u0275\u0275repeaterCreate(4, CalendarPcWorkspaceComponent_Case_45_For_13_For_2_For_5_Template, 2, 3, "div", 101, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r24 = ctx.$implicit;
    const day_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getTasksByDayAndTime(day_r25, hour_r24, "front"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getTasksByDayAndTime(day_r25, hour_r24, "back"));
  }
}
function CalendarPcWorkspaceComponent_Case_45_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275repeaterCreate(1, CalendarPcWorkspaceComponent_Case_45_For_13_For_2_Template, 6, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.hours);
  }
}
function CalendarPcWorkspaceComponent_Case_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 89);
    \u0275\u0275element(2, "div", 90);
    \u0275\u0275elementStart(3, "div", 91);
    \u0275\u0275repeaterCreate(4, CalendarPcWorkspaceComponent_Case_45_For_5_Template, 3, 10, "div", 92, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 93)(7, "div", 94)(8, "div", 95);
    \u0275\u0275repeaterCreate(9, CalendarPcWorkspaceComponent_Case_45_For_10_Template, 3, 1, "div", 96, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 91);
    \u0275\u0275repeaterCreate(12, CalendarPcWorkspaceComponent_Case_45_For_13_Template, 3, 0, "div", 97, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.calendarDays());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.hours);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.calendarDays());
  }
}
function CalendarPcWorkspaceComponent_Case_46_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\uC74C\uB825 ", ctx_r1.getLunarInfo(ctx_r1.selectedDate()).lunarDateStr);
  }
}
function CalendarPcWorkspaceComponent_Case_46_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1, "\u2728 \uC190\uC5C6\uB294\uB0A0");
    \u0275\u0275elementEnd();
  }
}
function CalendarPcWorkspaceComponent_Case_46_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_46_Conditional_12_For_5_Template_div_click_0_listener() {
      const task_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r31));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r31 = ctx.$implicit;
    \u0275\u0275styleProp("border-left-color", task_r31.color)("border-left-width", 4, "px");
    \u0275\u0275classProp("opacity-50", task_r31.completed);
    \u0275\u0275advance();
    \u0275\u0275classProp("line-through", task_r31.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r31.title);
  }
}
function CalendarPcWorkspaceComponent_Case_46_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "h4", 114);
    \u0275\u0275text(2, "All Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 115);
    \u0275\u0275repeaterCreate(4, CalendarPcWorkspaceComponent_Case_46_Conditional_12_For_5_Template, 3, 9, "div", 116, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.getTasksNoTime());
  }
}
function CalendarPcWorkspaceComponent_Case_46_For_15_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Case_46_For_15_For_7_Template_div_click_0_listener() {
      const task_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r33));
    });
    \u0275\u0275elementStart(1, "span", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 125);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r33 = ctx.$implicit;
    \u0275\u0275styleProp("border-left-color", task_r33.color)("border-left-width", 4, "px");
    \u0275\u0275classProp("opacity-50", task_r33.completed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r33.time);
    \u0275\u0275advance();
    \u0275\u0275classProp("line-through", task_r33.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r33.title);
  }
}
function CalendarPcWorkspaceComponent_Case_46_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 118)(2, "span", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 120)(5, "div", 121);
    \u0275\u0275repeaterCreate(6, CalendarPcWorkspaceComponent_Case_46_For_15_For_7_Template, 5, 10, "div", 122, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hour_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatHour(hour_r34));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getTasksByHour(hour_r34));
  }
}
function CalendarPcWorkspaceComponent_Case_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 104)(2, "div")(3, "h3", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 106);
    \u0275\u0275conditionalCreate(6, CalendarPcWorkspaceComponent_Case_46_Conditional_6_Template, 2, 1, "span", 107);
    \u0275\u0275conditionalCreate(7, CalendarPcWorkspaceComponent_Case_46_Conditional_7_Template, 2, 0, "span", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 109)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 110);
    \u0275\u0275conditionalCreate(12, CalendarPcWorkspaceComponent_Case_46_Conditional_12_Template, 6, 0, "div", 111);
    \u0275\u0275elementStart(13, "div", 112);
    \u0275\u0275repeaterCreate(14, CalendarPcWorkspaceComponent_Case_46_For_15_Template, 8, 1, "div", 113, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedDayNum(), "\uC77C ", ctx_r1.selectedDayName());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showLunar() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showSonless() && ctx_r1.getLunarInfo(ctx_r1.selectedDate()).isSonlessDay ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\uC624\uB298\uC758 \uC77C\uC815: ", ctx_r1.selectedDateTasks().length, "\uAC1C");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getTasksNoTime().length > 0 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.hours);
  }
}
function CalendarPcWorkspaceComponent_Conditional_49_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "p", 130);
    \u0275\u0275text(2, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r36 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r36.time);
  }
}
function CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 133);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_For_3_Template_li_click_0_listener() {
      const task_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToTaskDate(task_r36.dateStr));
    });
    \u0275\u0275elementStart(1, "div", 134)(2, "span", 135);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_For_3_Conditional_4_Template, 2, 1, "span", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 137);
    \u0275\u0275element(6, "div", 138);
    \u0275\u0275elementStart(7, "span", 139);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_For_3_Template_span_click_7_listener($event) {
      const task_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r36));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r36 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r36.dateStr);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r36.time ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", task_r36.color);
    \u0275\u0275advance();
    \u0275\u0275classProp("line-through", task_r36.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r36.title);
  }
}
function CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "ul", 131);
    \u0275\u0275repeaterCreate(2, CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_For_3_Template, 9, 7, "li", 132, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.searchResults());
  }
}
function CalendarPcWorkspaceComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 126)(2, "h3", 105);
    \u0275\u0275text(3, "\uAC80\uC0C9 \uACB0\uACFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, CalendarPcWorkspaceComponent_Conditional_49_Conditional_6_Template, 3, 0, "div", 128)(7, CalendarPcWorkspaceComponent_Conditional_49_Conditional_7_Template, 4, 0, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.searchResults().length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchResults().length === 0 ? 6 : 7);
  }
}
function CalendarPcWorkspaceComponent_Conditional_50_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 143)(1, "div", 144)(2, "span", 145);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 146);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 147);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 148);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const holiday_r37 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", holiday_r37.dateStr.split("-")[0], "\uC6D4");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r37.dateStr.split("-")[1]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(holiday_r37.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r37.type === "public" ? "\uACF5\uD734\uC77C" : "\uAE30\uB150\uC77C");
  }
}
function CalendarPcWorkspaceComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "h3", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 141)(4, "ul", 142);
    \u0275\u0275repeaterCreate(5, CalendarPcWorkspaceComponent_Conditional_50_For_6_Template, 11, 4, "li", 143, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.currentYear(), "\uB144 \uACF5\uD734\uC77C");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.yearHolidays());
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 180);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r39 = ctx.$implicit;
    const \u0275$index_372_r40 = ctx.$index;
    \u0275\u0275classProp("text-red-400", \u0275$index_372_r40 === 0)("text-blue-400", \u0275$index_372_r40 === 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r39);
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 183);
  }
  if (rf & 2) {
    const day_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bg-white", day_r42.isSelected)("bg-indigo-400", !day_r42.isSelected);
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 181);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_For_16_Template_button_click_0_listener() {
      const day_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDate(day_r42.date));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CalendarPcWorkspaceComponent_Conditional_51_For_16_Conditional_2_Template, 1, 4, "span", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r42 = ctx.$implicit;
    \u0275\u0275classProp("text-slate-300", !day_r42.isCurrentMonth)("bg-indigo-600", day_r42.isSelected)("text-white", day_r42.isSelected)("hover:bg-gray-100", !day_r42.isSelected)("font-bold", day_r42.isToday);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r42.dayNum, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r42.tasks.length > 0 ? 2 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "p", 130);
    \u0275\u0275text(2, "\uB4F1\uB85D\uB41C \uD560 \uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 186);
    \u0275\u0275element(1, "polyline", 195);
    \u0275\u0275elementEnd();
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 189);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r44.time);
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 184)(1, "button", 185);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Template_button_click_1_listener() {
      const task_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleTask(task_r44.id));
    });
    \u0275\u0275conditionalCreate(2, CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 187);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Template_div_click_3_listener() {
      const task_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetailModal(task_r44));
    });
    \u0275\u0275elementStart(4, "p", 188);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Conditional_6_Template, 2, 1, "p", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 190);
    \u0275\u0275elementStart(8, "button", 191);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Template_button_click_8_listener() {
      const task_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r44.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 192);
    \u0275\u0275element(10, "line", 193)(11, "line", 194);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r44 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", task_r44.completed ? task_r44.color : "#cbd5e1")("background-color", task_r44.completed ? task_r44.color : "transparent");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r44.completed ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-slate-400", task_r44.completed)("line-through", task_r44.completed)("text-slate-700", !task_r44.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r44.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r44.time ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", task_r44.color);
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 131);
    \u0275\u0275repeaterCreate(1, CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_For_2_Template, 12, 15, "li", 184, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.selectedDateTasks());
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 196);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_For_44_Template_button_click_0_listener() {
      const color_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedColor.set(color_r46));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r46 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", color_r46);
    \u0275\u0275classProp("ring-2", ctx_r1.selectedColor() === color_r46)("ring-offset-1", ctx_r1.selectedColor() === color_r46)("ring-gray-300", ctx_r1.selectedColor() === color_r46);
  }
}
function CalendarPcWorkspaceComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150)(2, "h4", 151);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 152)(5, "button", 153);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigate(-1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 154);
    \u0275\u0275element(7, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 153);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigate(1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 154);
    \u0275\u0275element(10, "path", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 64);
    \u0275\u0275repeaterCreate(12, CalendarPcWorkspaceComponent_Conditional_51_For_13_Template, 2, 5, "span", 155, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 156);
    \u0275\u0275repeaterCreate(15, CalendarPcWorkspaceComponent_Conditional_51_For_16_Template, 3, 12, "button", 157, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 158)(18, "div")(19, "p", 159);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3", 160);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 161)(24, "span", 162);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 163);
    \u0275\u0275text(27, "Tasks Left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 164);
    \u0275\u0275element(29, "div", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 166);
    \u0275\u0275conditionalCreate(31, CalendarPcWorkspaceComponent_Conditional_51_Conditional_31_Template, 3, 0, "div", 167)(32, CalendarPcWorkspaceComponent_Conditional_51_Conditional_32_Template, 3, 0, "ul", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 168)(34, "div", 169)(35, "span", 170);
    \u0275\u0275text(36, "\uC635\uC158 \uC124\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 137)(38, "div", 171);
    \u0275\u0275element(39, "input", 172, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "div", 173);
    \u0275\u0275elementStart(42, "div", 174);
    \u0275\u0275repeaterCreate(43, CalendarPcWorkspaceComponent_Conditional_51_For_44_Template, 1, 8, "button", 175, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 176)(46, "input", 177, 1);
    \u0275\u0275listener("keyup.enter", function CalendarPcWorkspaceComponent_Conditional_51_Template_input_keyup_enter_46_listener() {
      \u0275\u0275restoreView(_r38);
      const timeInput_r47 = \u0275\u0275reference(40);
      const taskInput_r48 = \u0275\u0275reference(47);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.addTask(taskInput_r48.value, timeInput_r47.value);
      return \u0275\u0275resetView(taskInput_r48.value = "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 178);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_51_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r38);
      const timeInput_r47 = \u0275\u0275reference(40);
      const taskInput_r48 = \u0275\u0275reference(47);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.addTask(taskInput_r48.value, timeInput_r47.value);
      return \u0275\u0275resetView(taskInput_r48.value = "");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 179);
    \u0275\u0275element(50, "line", 77)(51, "line", 78);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.currentYear(), "\uB144 ", ctx_r1.currentMonth() + 1, "\uC6D4");
    \u0275\u0275advance(9);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.miniCalendarDays());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedDayName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedDateTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.remainingCount());
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.progressPercentage(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedDateTasks().length === 0 ? 31 : 32);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.taskColors);
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 240);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isAddingCategory.set(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 241);
    \u0275\u0275element(2, "line", 77)(3, "line", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \uCD94\uAC00 ");
    \u0275\u0275elementEnd();
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 250);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_For_10_Template_button_click_0_listener() {
      const color_r53 = \u0275\u0275restoreView(_r52).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.newCategoryColor.set(color_r53));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r53 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r53);
    \u0275\u0275classProp("ring-2", ctx_r1.newCategoryColor() === color_r53)("ring-offset-1", ctx_r1.newCategoryColor() === color_r53)("ring-gray-300", ctx_r1.newCategoryColor() === color_r53);
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 213)(1, "p", 242);
    \u0275\u0275text(2, "\uC0C8 \uCE74\uD14C\uACE0\uB9AC \uB9CC\uB4E4\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 243);
    \u0275\u0275element(4, "input", 244, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 245);
    \u0275\u0275text(7, "\uC0C9\uC0C1 \uC120\uD0DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 243);
    \u0275\u0275repeaterCreate(9, CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_For_10_Template, 1, 8, "button", 246, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 247)(12, "button", 248);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isAddingCategory.set(false));
    });
    \u0275\u0275text(13, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 249);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r51);
      const newCategoryName_r54 = \u0275\u0275reference(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCategory(newCategoryName_r54.value));
    });
    \u0275\u0275text(15, "\uC800\uC7A5");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.taskColors);
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_38_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 253);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r56 = ctx.$implicit;
    \u0275\u0275property("value", cat_r56.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r56.name);
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 214);
    \u0275\u0275element(1, "div", 251);
    \u0275\u0275elementStart(2, "select", 252, 12);
    \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_38_Template_select_change_2_listener($event) {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCategory($event.target.value));
    });
    \u0275\u0275repeaterCreate(4, CalendarPcWorkspaceComponent_Conditional_52_Conditional_38_For_5_Template, 2, 2, "option", 253, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.modalSelectedColor());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.modalSelectedCategory());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uC77C ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uC8FC ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uAC1C\uC6D4 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uB144 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 262);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_12_For_5_Template_button_click_0_listener() {
      const \u0275$index_635_r59 = \u0275\u0275restoreView(_r58).$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleRecurrenceDay(\u0275$index_635_r59));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r60 = ctx.$implicit;
    const \u0275$index_635_r59 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-indigo-600", ctx_r1.modalRecurrenceDays().includes(\u0275$index_635_r59))("text-white", ctx_r1.modalRecurrenceDays().includes(\u0275$index_635_r59))("bg-gray-200", !ctx_r1.modalRecurrenceDays().includes(\u0275$index_635_r59))("text-slate-500", !ctx_r1.modalRecurrenceDays().includes(\u0275$index_635_r59));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r60, " ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 259);
    \u0275\u0275text(2, "\uBC18\uBCF5 \uC694\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 260);
    \u0275\u0275repeaterCreate(4, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_12_For_5_Template, 2, 9, "button", 261, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.weekDays);
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "span");
    \u0275\u0275text(2, "\uB0A0\uC9DC:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 263, 14);
    \u0275\u0275elementEnd();
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 221)(1, "div", 137)(2, "span");
    \u0275\u0275text(3, "\uB9E4");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 254, 13);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275conditionalCreate(7, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_7_Template, 1, 0)(8, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_8_Template, 1, 0)(9, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_9_Template, 1, 0)(10, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Case_10_Template, 1, 0);
    \u0275\u0275text(11, " \uB9C8\uB2E4 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_12_Template, 6, 0, "div");
    \u0275\u0275elementStart(13, "div", 255)(14, "label", 256)(15, "input", 257);
    \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Template_input_change_15_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.modalRecurrenceEndType.set("none"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\uC885\uB8CC\uC77C \uC5C6\uC74C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 256)(19, "input", 258);
    \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Template_input_change_19_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.modalRecurrenceEndType.set("date"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\uC885\uB8CC\uC77C \uC9C0\uC815");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Conditional_22_Template, 5, 0, "div", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.modalRecurrenceType()) === "daily" ? 7 : tmp_12_0 === "weekly" ? 8 : tmp_12_0 === "monthly" ? 9 : tmp_12_0 === "yearly" ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.modalRecurrenceType() === "weekly" ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.modalRecurrenceEndType() === "none");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.modalRecurrenceEndType() === "date");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.modalRecurrenceEndType() === "date" ? 22 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275elementStart(1, "div", 198);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r49);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 199)(3, "h3", 200);
    \u0275\u0275text(4, "\uC0C8\uB85C\uC6B4 \uC77C\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 201);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 202);
    \u0275\u0275element(7, "line", 193)(8, "line", 194);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 203)(10, "div")(11, "label", 204);
    \u0275\u0275text(12, "\uC81C\uBAA9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 205, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 206)(16, "div")(17, "label", 204);
    \u0275\u0275text(18, "\uC2DC\uC791");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 207);
    \u0275\u0275element(20, "input", 208, 3)(22, "input", 209, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "label", 204);
    \u0275\u0275text(26, "\uC885\uB8CC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 207);
    \u0275\u0275element(28, "input", 208, 5)(30, "input", 209, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div")(33, "div", 210)(34, "label", 211);
    \u0275\u0275text(35, "\uCE74\uD14C\uACE0\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, CalendarPcWorkspaceComponent_Conditional_52_Conditional_36_Template, 5, 0, "button", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, CalendarPcWorkspaceComponent_Conditional_52_Conditional_37_Template, 16, 0, "div", 213)(38, CalendarPcWorkspaceComponent_Conditional_52_Conditional_38_Template, 6, 3, "div", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 207)(40, "label", 211);
    \u0275\u0275text(41, "\uBC18\uBCF5 \uC124\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 215, 7);
    \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Conditional_52_Template_select_change_42_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalRecurrenceType.set($event.target.value));
    });
    \u0275\u0275elementStart(44, "option", 216);
    \u0275\u0275text(45, "\uBC18\uBCF5 \uC548\uD568");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 217);
    \u0275\u0275text(47, "\uB9E4\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 218);
    \u0275\u0275text(49, "\uB9E4\uC8FC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 219);
    \u0275\u0275text(51, "\uB9E4\uC6D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 220);
    \u0275\u0275text(53, "\uB9E4\uB144");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(54, CalendarPcWorkspaceComponent_Conditional_52_Conditional_54_Template, 23, 5, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div")(56, "label", 204);
    \u0275\u0275text(57, "\uBA54\uBAA8");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "textarea", 222, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 223)(61, "label", 224);
    \u0275\u0275text(62, "\uC54C\uB9BC \uC124\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 225)(64, "select", 226, 9)(66, "option", 216);
    \u0275\u0275text(67, "\uC54C\uB9BC \uC5C6\uC74C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 227);
    \u0275\u0275text(69, "10\uBD84 \uC804");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 228);
    \u0275\u0275text(71, "30\uBD84 \uC804");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 229);
    \u0275\u0275text(73, "1\uC2DC\uAC04 \uC804");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 230);
    \u0275\u0275text(75, "1\uC77C \uC804");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 231);
    \u0275\u0275text(77, "2\uC77C \uC804");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 232);
    \u0275\u0275text(79, "1\uC8FC\uC77C \uC804");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "label", 233)(81, "div", 176)(82, "input", 234, 10);
    \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Conditional_52_Template_input_change_82_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleServiceNoti());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "div", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 236);
    \u0275\u0275text(86, "\uC11C\uBE44\uC2A4 \uC54C\uB9BC");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(87, "div", 237)(88, "button", 238);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275text(89, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 239);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_52_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAddModalFromDOM());
    });
    \u0275\u0275text(91, " \uC77C\uC815 \uB4F1\uB85D ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("value", ctx_r1.formatDateForInput(ctx_r1.selectedDate()));
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.formatDateForInput(ctx_r1.selectedDate()));
    \u0275\u0275advance(8);
    \u0275\u0275conditional(!ctx_r1.isAddingCategory() ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAddingCategory() ? 37 : 38);
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r1.modalRecurrenceType() !== "none" ? 54 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.time, " ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.endTime, " ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, CalendarPcWorkspaceComponent_Conditional_53_Conditional_26_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ~ ", (tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.endDateStr, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.endTime) ? 1 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uC77C ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uC8FC ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uAC1C\uC6D4 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uB144 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_1_Template, 1, 0)(2, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_2_Template, 1, 0)(3, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_3_Template, 1, 0)(4, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Case_4_Template, 1, 0);
    \u0275\u0275text(5, " \uB9C8\uB2E4 ");
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.recurrenceInterval, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = (tmp_4_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_4_0.recurrenceType) === "daily" ? 1 : tmp_4_0 === "weekly" ? 2 : tmp_4_0 === "monthly" ? 3 : tmp_4_0 === "yearly" ? 4 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uB9E4\uC77C ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uB9E4\uC8FC ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uB9E4\uC6D4 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uB9E4\uB144 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_0_Template, 1, 0)(1, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_1_Template, 1, 0)(2, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_2_Template, 1, 0)(3, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Case_3_Template, 1, 0);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_3_0 = (tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.recurrenceType) === "daily" ? 0 : tmp_3_0 === "weekly" ? 1 : tmp_3_0 === "monthly" ? 2 : tmp_3_0 === "yearly" ? 3 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const dayIdx_r62 = ctx.$implicit;
    const \u0275$index_815_r63 = ctx.$index;
    const \u0275$count_815_r64 = ctx.$count;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.weekDays[dayIdx_r62], "", !(\u0275$index_815_r63 === \u0275$count_815_r64 - 1) ? "," : "", " ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 290);
    \u0275\u0275repeaterCreate(1, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_11_For_2_Template, 1, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.recurrenceDays);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.recurrenceEndDate, " \uAE4C\uC9C0 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \uACC4\uC18D \uBC18\uBCF5 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 272)(1, "div", 273);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 284);
    \u0275\u0275element(3, "path", 285)(4, "path", 286)(5, "path", 287)(6, "path", 288);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "p", 289);
    \u0275\u0275conditionalCreate(9, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_9_Template, 6, 2)(10, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_10_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_11_Template, 3, 0, "p", 290);
    \u0275\u0275elementStart(12, "p", 148);
    \u0275\u0275conditionalCreate(13, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_13_Template, 1, 1)(14, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.recurrenceInterval) && (((tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.recurrenceInterval) ?? 0) > 1 ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.recurrenceType) === "weekly" && ((tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.recurrenceDays == null ? null : tmp_3_0.recurrenceDays.length) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_4_0.recurrenceEndType) === "date" && ((tmp_4_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_4_0.recurrenceEndDate) ? 13 : 14);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 272)(1, "div", 273);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 40);
    \u0275\u0275element(3, "line", 291)(4, "line", 292)(5, "line", 293)(6, "line", 294);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p", 295);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.memo);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 10\uBD84 \uC804 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 30\uBD84 \uC804 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 1\uC2DC\uAC04 \uC804 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 1\uC77C \uC804 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 2\uC77C \uC804 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 1\uC8FC\uC77C \uC804 ");
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 298);
    \u0275\u0275text(1, " \u{1F514} ");
    \u0275\u0275conditionalCreate(2, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_2_Template, 1, 0)(3, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_3_Template, 1, 0)(4, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_4_Template, 1, 0)(5, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_5_Template, 1, 0)(6, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_6_Template, 1, 0)(7, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Case_7_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = (tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.notificationTime) === "10m" ? 2 : tmp_3_0 === "30m" ? 3 : tmp_3_0 === "1h" ? 4 : tmp_3_0 === "1d" ? 5 : tmp_3_0 === "2d" ? 6 : tmp_3_0 === "1w" ? 7 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 299);
    \u0275\u0275text(1, " \u{1F4E2} \uC11C\uBE44\uC2A4 \uC54C\uB9BC ON ");
    \u0275\u0275elementEnd();
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 272)(1, "div", 273);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 40);
    \u0275\u0275element(3, "path", 296)(4, "path", 297);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 121);
    \u0275\u0275conditionalCreate(6, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_6_Template, 8, 1, "span", 298);
    \u0275\u0275conditionalCreate(7, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Conditional_7_Template, 2, 0, "span", 299);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.notificationTime) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.serviceNotification) ? 7 : -1);
  }
}
function CalendarPcWorkspaceComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailModal());
    });
    \u0275\u0275elementStart(1, "div", 198);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_53_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r61);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 264)(3, "div", 265)(4, "div", 137);
    \u0275\u0275element(5, "div", 266);
    \u0275\u0275elementStart(6, "span", 267);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 268);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_53_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 269);
    \u0275\u0275element(10, "line", 193)(11, "line", 194);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "h3", 270);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 271)(15, "div", 272)(16, "div", 273);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 40);
    \u0275\u0275element(18, "rect", 274)(19, "line", 275)(20, "line", 276)(21, "line", 277);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div")(23, "p", 278);
    \u0275\u0275text(24);
    \u0275\u0275conditionalCreate(25, CalendarPcWorkspaceComponent_Conditional_53_Conditional_25_Template, 1, 1);
    \u0275\u0275conditionalCreate(26, CalendarPcWorkspaceComponent_Conditional_53_Conditional_26_Template, 2, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, CalendarPcWorkspaceComponent_Conditional_53_Conditional_27_Template, 15, 3, "div", 272);
    \u0275\u0275conditionalCreate(28, CalendarPcWorkspaceComponent_Conditional_53_Conditional_28_Template, 9, 1, "div", 272);
    \u0275\u0275conditionalCreate(29, CalendarPcWorkspaceComponent_Conditional_53_Conditional_29_Template, 8, 2, "div", 272);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 279)(31, "button", 280);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_53_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.deleteTask(ctx_r1.selectedTaskDetail().id);
      return \u0275\u0275resetView(ctx_r1.closeDetailModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 154);
    \u0275\u0275element(33, "polyline", 281)(34, "path", 282);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " \uC0AD\uC81C ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "button", 283);
    \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Conditional_53_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetailModal());
    });
    \u0275\u0275text(37, " \uB2EB\uAE30 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background-color", (tmp_1_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_1_0.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_2_0.category);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_3_0.title);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_4_0.dateStr, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_5_0.time) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_6_0.endDateStr) ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_7_0.recurrenceType) && ((tmp_7_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_7_0.recurrenceType) !== "none" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_8_0.memo) ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_9_0.notificationTime) || ((tmp_9_0 = ctx_r1.selectedTaskDetail()) == null ? null : tmp_9_0.serviceNotification) ? 29 : -1);
  }
}
var CalendarPcWorkspaceComponent = class _CalendarPcWorkspaceComponent {
  // --- Constants ---
  weekDays = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
  taskColors = ["#4f46e5", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];
  viewOptions = [
    { label: "\uC77C", value: "day" },
    { label: "\uC8FC", value: "week" },
    { label: "\uC6D4", value: "month" },
    { label: "\uB144", value: "year" }
  ];
  hours = Array.from({ length: 24 }, (_, i) => i);
  holidays = [
    { dateStr: "01-01", name: "\uC2E0\uC815", type: "public" },
    { dateStr: "03-01", name: "\uC0BC\uC77C\uC808", type: "public" },
    { dateStr: "05-05", name: "\uC5B4\uB9B0\uC774\uB0A0", type: "public" },
    { dateStr: "06-06", name: "\uD604\uCDA9\uC77C", type: "public" },
    { dateStr: "08-15", name: "\uAD11\uBCF5\uC808", type: "public" },
    { dateStr: "10-03", name: "\uAC1C\uCC9C\uC808", type: "public" },
    { dateStr: "10-09", name: "\uD55C\uAE00\uB0A0", type: "public" },
    { dateStr: "12-25", name: "\uC131\uD0C4\uC808", type: "public" }
  ];
  // --- State (Signals) ---
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : []);
  selectedDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "selectedDate" }] : []);
  selectedColor = signal(this.taskColors[0], ...ngDevMode ? [{ debugName: "selectedColor" }] : []);
  isSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "isSidebarOpen" }] : []);
  viewMode = signal("month", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  showLunar = signal(false, ...ngDevMode ? [{ debugName: "showLunar" }] : []);
  showSonless = signal(false, ...ngDevMode ? [{ debugName: "showSonless" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  isAddModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAddModalOpen" }] : []);
  modalSelectedColor = signal(this.taskColors[0], ...ngDevMode ? [{ debugName: "modalSelectedColor" }] : []);
  modalRecurrenceType = signal("none", ...ngDevMode ? [{ debugName: "modalRecurrenceType" }] : []);
  modalRecurrenceEndType = signal("none", ...ngDevMode ? [{ debugName: "modalRecurrenceEndType" }] : []);
  modalRecurrenceDays = signal([], ...ngDevMode ? [{ debugName: "modalRecurrenceDays" }] : []);
  modalRecurrenceInterval = signal(1, ...ngDevMode ? [{ debugName: "modalRecurrenceInterval" }] : []);
  modalServiceNotification = signal(false, ...ngDevMode ? [{ debugName: "modalServiceNotification" }] : []);
  // [NEW] 상세 모달 상태
  isDetailModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDetailModalOpen" }] : []);
  selectedTaskDetail = signal(null, ...ngDevMode ? [{ debugName: "selectedTaskDetail" }] : []);
  // Modal form inputs
  modalTitleInput = signal("", ...ngDevMode ? [{ debugName: "modalTitleInput" }] : []);
  modalStartDateInput = signal("", ...ngDevMode ? [{ debugName: "modalStartDateInput" }] : []);
  modalStartTimeInput = signal("", ...ngDevMode ? [{ debugName: "modalStartTimeInput" }] : []);
  modalEndDateInput = signal("", ...ngDevMode ? [{ debugName: "modalEndDateInput" }] : []);
  modalEndTimeInput = signal("", ...ngDevMode ? [{ debugName: "modalEndTimeInput" }] : []);
  modalMemoInput = signal("", ...ngDevMode ? [{ debugName: "modalMemoInput" }] : []);
  modalCategoryInputValue = signal("\uC5C5\uBB34", ...ngDevMode ? [{ debugName: "modalCategoryInputValue" }] : []);
  modalNotificationTimeInput = signal("none", ...ngDevMode ? [{ debugName: "modalNotificationTimeInput" }] : []);
  modalServiceNotiInput = signal(false, ...ngDevMode ? [{ debugName: "modalServiceNotiInput" }] : []);
  modalRecurrenceTypeInput = signal("none", ...ngDevMode ? [{ debugName: "modalRecurrenceTypeInput" }] : []);
  modalRecurrenceIntervalInputValue = signal("1", ...ngDevMode ? [{ debugName: "modalRecurrenceIntervalInputValue" }] : []);
  modalRecurrenceEndDateInputValue = signal("", ...ngDevMode ? [{ debugName: "modalRecurrenceEndDateInputValue" }] : []);
  categories = signal([
    { name: "\uC5C5\uBB34", color: "#4f46e5" },
    { name: "\uAC1C\uC778", color: "#10b981" },
    { name: "\uAC00\uC871", color: "#f59e0b" },
    { name: "\uAE30\uD0C0", color: "#6b7280" }
  ], ...ngDevMode ? [{ debugName: "categories" }] : []);
  isAddingCategory = signal(false, ...ngDevMode ? [{ debugName: "isAddingCategory" }] : []);
  newCategoryColor = signal(this.taskColors[0], ...ngDevMode ? [{ debugName: "newCategoryColor" }] : []);
  modalSelectedCategory = signal("\uC5C5\uBB34", ...ngDevMode ? [{ debugName: "modalSelectedCategory" }] : []);
  // [NEW] 풍부한 샘플 데이터 추가
  tasks = signal([
    {
      id: "1",
      dateStr: this.formatDate(/* @__PURE__ */ new Date()),
      title: "\uC8FC\uAC04 \uC5C5\uBB34 \uBCF4\uACE0 \uD68C\uC758",
      completed: false,
      color: "#4f46e5",
      // 업무 색상
      time: "10:00",
      endTime: "11:30",
      category: "\uC5C5\uBB34",
      memo: "\uC774\uBC88 \uC8FC \uC8FC\uC694 \uC774\uC288 \uC815\uB9AC \uBC0F \uB2E4\uC74C \uC8FC \uACC4\uD68D \uB17C\uC758.\n- A \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589 \uC0C1\uD669 \uACF5\uC720\n- B \uD504\uB85C\uC81D\uD2B8 \uB9AC\uC18C\uC2A4 \uBC30\uC815 \uD655\uC778",
      notificationTime: "10m",
      recurrenceType: "weekly",
      recurrenceDays: [1],
      // 월요일
      recurrenceInterval: 1
    },
    {
      id: "2",
      dateStr: this.formatDate(/* @__PURE__ */ new Date()),
      title: "\uC810\uC2EC \uC57D\uC18D (\uAC15\uB0A8\uC5ED)",
      completed: false,
      color: "#10b981",
      // 개인 색상
      time: "12:30",
      category: "\uAC1C\uC778",
      memo: "\uC624\uB79C\uB9CC\uC5D0 \uB3D9\uAE30 \uBAA8\uC784.",
      notificationTime: "30m"
    },
    {
      id: "3",
      dateStr: this.formatDate(new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 2))),
      title: "\uB514\uC790\uC778 \uD300 \uC6CC\uD06C\uC0F5",
      completed: false,
      color: "#4f46e5",
      time: "09:00",
      endDateStr: this.formatDate(new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 3))),
      // 1박 2일
      endTime: "18:00",
      category: "\uC5C5\uBB34",
      memo: "\uC7A5\uC18C: \uAC00\uD3C9 \uC5F0\uC218\uC6D0\n\uC900\uBE44\uBB3C: \uB178\uD2B8\uBD81, \uD3B8\uD55C \uC637",
      serviceNotification: true
    },
    {
      id: "4",
      dateStr: this.formatDate(new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 5))),
      title: "\uAC00\uC871 \uC2DD\uC0AC",
      completed: false,
      color: "#f59e0b",
      // 가족 색상
      time: "18:00",
      category: "\uAC00\uC871",
      notificationTime: "1d",
      recurrenceType: "monthly",
      recurrenceInterval: 1
    }
  ], ...ngDevMode ? [{ debugName: "tasks" }] : []);
  // --- Computed Values ---
  currentYear = computed(() => this.currentDate().getFullYear(), ...ngDevMode ? [{ debugName: "currentYear" }] : []);
  currentMonth = computed(() => this.currentDate().getMonth(), ...ngDevMode ? [{ debugName: "currentMonth" }] : []);
  searchResults = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query)
      return [];
    return this.tasks().filter((t) => t.title.toLowerCase().includes(query)).sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  }, ...ngDevMode ? [{ debugName: "searchResults" }] : []);
  yearHolidays = computed(() => {
    return this.holidays.sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  }, ...ngDevMode ? [{ debugName: "yearHolidays" }] : []);
  headerTitle = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth() + 1;
    const date = this.currentDate();
    switch (this.viewMode()) {
      case "year":
        return `${year}\uB144`;
      case "day":
        return `${month}\uC6D4 ${date.getDate()}\uC77C`;
      case "week":
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return `${startOfWeek.getMonth() + 1}.${startOfWeek.getDate()} - ${endOfWeek.getMonth() + 1}.${endOfWeek.getDate()}`;
      default:
        return `${year}\uB144 ${month}\uC6D4`;
    }
  }, ...ngDevMode ? [{ debugName: "headerTitle" }] : []);
  yearMonths = computed(() => {
    const year = this.currentYear();
    const today = /* @__PURE__ */ new Date();
    return Array.from({ length: 12 }, (_, i) => {
      const dateStrPrefix = `${year}-${String(i + 1).padStart(2, "0")}`;
      const taskCount = this.tasks().filter((t) => t.dateStr.startsWith(dateStrPrefix)).length;
      return {
        index: i,
        name: `${i + 1}\uC6D4`,
        isCurrentMonth: today.getFullYear() === year && today.getMonth() === i,
        taskCount
      };
    });
  }, ...ngDevMode ? [{ debugName: "yearMonths" }] : []);
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
  miniCalendarDays = computed(() => {
    const year = this.currentYear();
    const month = this.currentMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDay.getDay();
    const days = [];
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
    return days;
  }, ...ngDevMode ? [{ debugName: "miniCalendarDays" }] : []);
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
    const dateStr = this.formatDate(this.selectedDate());
    return this.tasks().filter((t) => t.dateStr === dateStr).sort((a, b) => {
      if (!a.time && !b.time)
        return 0;
      if (!a.time)
        return -1;
      if (!b.time)
        return 1;
      return a.time.localeCompare(b.time);
    });
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
  // --- Helpers & Actions ---
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDateForInput(date) {
    return this.formatDate(date);
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
  getLunarInfo(date) {
    try {
      const formatter = new Intl.DateTimeFormat("ko-KR-u-ca-chinese", {
        month: "numeric",
        day: "numeric"
      });
      const parts = formatter.formatToParts(date);
      let lunarMonth = 0;
      let lunarDay = 0;
      for (const part of parts) {
        if (part.type === "month")
          lunarMonth = parseInt(part.value, 10);
        if (part.type === "day")
          lunarDay = parseInt(part.value, 10);
      }
      if (!lunarMonth || !lunarDay) {
        return { lunarDateStr: "", isSonlessDay: false };
      }
      const lastDigit = lunarDay % 10;
      const isSonlessDay = lastDigit === 9 || lastDigit === 0;
      return {
        lunarDateStr: `${lunarMonth}.${lunarDay}`,
        isSonlessDay
      };
    } catch (e) {
      return { lunarDateStr: "", isSonlessDay: false };
    }
  }
  createCalendarDay(date, isCurrentMonth) {
    const dateStr = this.formatDate(date);
    const todayStr = this.formatDate(/* @__PURE__ */ new Date());
    const selectedStr = this.formatDate(this.selectedDate());
    const dayTasks = this.tasks().filter((t) => t.dateStr === dateStr);
    const lunarInfo = this.getLunarInfo(date);
    return {
      date,
      dateStr,
      dayNum: date.getDate(),
      dayOfWeek: date.getDay(),
      isCurrentMonth,
      isToday: dateStr === todayStr,
      isSelected: dateStr === selectedStr,
      tasks: dayTasks,
      lunarDateStr: lunarInfo.lunarDateStr,
      isSonlessDay: lunarInfo.isSonlessDay
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
  getTasksByDayAndTime(day, hour, part) {
    const targetHourStr = String(hour).padStart(2, "0");
    return day.tasks.filter((t) => {
      if (!t.time)
        return false;
      const [h, m] = t.time.split(":").map(Number);
      if (h !== hour)
        return false;
      return part === "front" ? m < 30 : m >= 30;
    });
  }
  getTasksNoTime() {
    return this.selectedDateTasks().filter((t) => !t.time);
  }
  setViewMode(mode) {
    this.viewMode.set(mode);
    this.currentDate.set(new Date(this.selectedDate()));
    if (mode === "day" || mode === "year") {
      this.isSidebarOpen.set(true);
    } else {
      this.isSidebarOpen.set(false);
    }
  }
  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
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
    if (input.value.trim()) {
      this.isSidebarOpen.set(true);
    } else {
      if (this.viewMode() !== "day" && this.viewMode() !== "year") {
        this.isSidebarOpen.set(false);
      }
    }
  }
  clearSearch() {
    this.searchQuery.set("");
    if (this.viewMode() !== "day" && this.viewMode() !== "year") {
      this.isSidebarOpen.set(false);
    }
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
    this.isSidebarOpen.set(true);
  }
  selectMonth(monthIndex) {
    const year = this.currentYear();
    const newDate = new Date(year, monthIndex, 1);
    this.currentDate.set(newDate);
    this.setViewMode("month");
  }
  addTask(title, timeValue) {
    if (!title.trim())
      return;
    const newTask = {
      id: crypto.randomUUID(),
      dateStr: this.formatDate(this.selectedDate()),
      title: title.trim(),
      completed: false,
      color: this.selectedColor(),
      time: timeValue ? timeValue : void 0,
      category: "\uAE30\uD0C0"
      // 기본 카테고리
    };
    this.tasks.update((prev) => [...prev, newTask]);
  }
  submitAddModal(titleInput, startDateInput, startTimeInput, endDateInput, endTimeInput, memoInput, categoryInput, notificationTimeInput, serviceNotiInput, recurrenceTypeInput, recurrenceIntervalInput, recurrenceEndDateInput) {
    this.addTaskFromModalDetailed(titleInput.value, startDateInput.value, startTimeInput.value, endDateInput.value, endTimeInput.value, memoInput.value, categoryInput.value, notificationTimeInput.value, serviceNotiInput.checked, recurrenceTypeInput.value, this.modalRecurrenceEndType(), recurrenceIntervalInput?.value, recurrenceEndDateInput?.value);
  }
  submitAddModalFromDOM() {
    const titleInput = document.querySelector('input[placeholder="\uC77C\uC815 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694"]');
    const startDateInputs = document.querySelectorAll('input[type="date"]');
    const startDateInput = startDateInputs[0];
    const endDateInput = startDateInputs[1];
    const startTimeInputs = document.querySelectorAll('input[type="time"]');
    const startTimeInput = startTimeInputs[0];
    const endTimeInput = startTimeInputs[1];
    const memoInput = document.querySelector('textarea[placeholder="\uC0C1\uC138 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694"]');
    const selects = document.querySelectorAll("select");
    const categoryInput = selects[0];
    const notificationTimeInput = selects[1];
    const recurrenceTypeInput = selects[2];
    const serviceNotiInput = document.querySelector('input[type="checkbox"]');
    const numberInputs = document.querySelectorAll('input[type="number"]');
    const recurrenceIntervalInput = numberInputs[0];
    const allDateInputs = Array.from(document.querySelectorAll('input[type="date"]'));
    const recurrenceEndDateInput = allDateInputs[allDateInputs.length - 1];
    this.addTaskFromModalDetailed(titleInput?.value || "", startDateInput?.value || "", startTimeInput?.value || "", endDateInput?.value || "", endTimeInput?.value || "", memoInput?.value || "", categoryInput?.value || "\uAE30\uD0C0", notificationTimeInput?.value || "none", serviceNotiInput?.checked || false, recurrenceTypeInput?.value || "none", this.modalRecurrenceEndType(), recurrenceIntervalInput?.value || "1", recurrenceEndDateInput?.value || "");
  }
  addTaskFromModalDetailed(title, startDate, startTime, endDate, endTime, memo, category, notificationTime, serviceNotification, recurrenceType, recurrenceEndType, recurrenceIntervalStr, recurrenceEndDateStr) {
    if (!title.trim())
      return;
    if (!startDate)
      return;
    const recurrenceInterval = parseInt(recurrenceIntervalStr, 10) || 1;
    const baseTask = {
      title: title.trim(),
      completed: false,
      color: this.modalSelectedColor(),
      time: startTime ? startTime : void 0,
      endDateStr: endDate ? endDate : void 0,
      endTime: endTime ? endTime : void 0,
      memo: memo ? memo.trim() : void 0,
      category,
      // 알림 정보 저장
      notificationTime: notificationTime !== "none" ? notificationTime : void 0,
      serviceNotification,
      recurrenceType: recurrenceType !== "none" ? recurrenceType : void 0,
      recurrenceEndType,
      recurrenceDays: this.modalRecurrenceDays(),
      recurrenceEndDate: recurrenceEndDateStr,
      recurrenceInterval
    };
    const tasksToAdd = [];
    const start = new Date(startDate);
    if (recurrenceType === "none") {
      tasksToAdd.push(__spreadValues({
        id: crypto.randomUUID(),
        dateStr: startDate
      }, baseTask));
    } else {
      let maxDateStr = recurrenceEndDateStr;
      if (recurrenceEndType === "none") {
        const oneYearLater = new Date(start);
        oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
        maxDateStr = this.formatDate(oneYearLater);
      }
      let currentDate = new Date(start);
      let safetyCount = 0;
      while (safetyCount < 366) {
        const currentStr = this.formatDate(currentDate);
        if (maxDateStr && currentStr > maxDateStr)
          break;
        let shouldAdd = false;
        const diffTime = currentDate.getTime() - start.getTime();
        const diffDays = Math.floor(diffTime / (1e3 * 3600 * 24));
        if (recurrenceType === "weekly") {
          const weekNum = Math.floor(diffDays / 7);
          if (weekNum % recurrenceInterval === 0) {
            const currentDay = currentDate.getDay();
            if (this.modalRecurrenceDays().includes(currentDay)) {
              shouldAdd = true;
            }
          }
        } else if (recurrenceType === "daily") {
          if (diffDays % recurrenceInterval === 0) {
            shouldAdd = true;
          }
        } else {
          shouldAdd = true;
        }
        if (shouldAdd) {
          tasksToAdd.push(__spreadValues({
            id: crypto.randomUUID(),
            dateStr: currentStr
          }, baseTask));
        }
        if (recurrenceType === "weekly") {
          currentDate.setDate(currentDate.getDate() + 1);
        } else if (recurrenceType === "daily") {
          currentDate.setDate(currentDate.getDate() + 1);
        } else if (recurrenceType === "monthly") {
          currentDate.setMonth(currentDate.getMonth() + recurrenceInterval);
        } else if (recurrenceType === "yearly") {
          currentDate.setFullYear(currentDate.getFullYear() + recurrenceInterval);
        }
        safetyCount++;
      }
    }
    this.tasks.update((prev) => [...prev, ...tasksToAdd]);
    this.closeAddModal();
    const [y, m, d] = startDate.split("-").map(Number);
    const newDate = new Date(y, m - 1, d);
    this.currentDate.set(newDate);
    this.selectDate(newDate);
  }
  addTaskAt(date, hour, minutes) {
    this.selectDate(date);
  }
  toggleTask(id) {
    this.tasks.update((prev) => prev.map((t) => t.id === id ? __spreadProps(__spreadValues({}, t), { completed: !t.completed }) : t));
  }
  deleteTask(id) {
    this.tasks.update((prev) => prev.filter((t) => t.id !== id));
  }
  openAddModal() {
    this.isAddModalOpen.set(true);
    const defaultCategory = this.categories()[0];
    this.modalSelectedCategory.set(defaultCategory.name);
    this.modalSelectedColor.set(defaultCategory.color);
    this.modalRecurrenceType.set("none");
    this.modalRecurrenceEndType.set("none");
    this.modalRecurrenceDays.set([]);
    this.modalRecurrenceInterval.set(1);
    this.isAddingCategory.set(false);
    this.modalServiceNotification.set(false);
  }
  closeAddModal() {
    this.isAddModalOpen.set(false);
  }
  toggleRecurrenceDay(dayIndex) {
    this.modalRecurrenceDays.update((days) => {
      if (days.includes(dayIndex)) {
        return days.filter((d) => d !== dayIndex);
      } else {
        return [...days, dayIndex].sort();
      }
    });
  }
  // 서비스 알림 토글
  toggleServiceNoti() {
    this.modalServiceNotification.update((v) => !v);
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
    const newCat = { name: name.trim(), color: this.newCategoryColor() };
    this.categories.update((cats) => [...cats, newCat]);
    this.selectCategory(newCat.name);
    this.isAddingCategory.set(false);
  }
  // 상세 모달 열기
  openDetailModal(task) {
    this.selectedTaskDetail.set(task);
    this.isDetailModalOpen.set(true);
  }
  // 상세 모달 닫기
  closeDetailModal() {
    this.isDetailModalOpen.set(false);
    this.selectedTaskDetail.set(null);
  }
  static \u0275fac = function CalendarPcWorkspaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarPcWorkspaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarPcWorkspaceComponent, selectors: [["app-calendar-pc-workspace"]], decls: 54, vars: 26, consts: [["timeInput", ""], ["taskInput", ""], ["modalTitleInput", ""], ["modalStartDateInput", ""], ["modalStartTimeInput", ""], ["modalEndDateInput", ""], ["modalEndTimeInput", ""], ["modalRecurrenceTypeInput", ""], ["modalMemoInput", ""], ["modalNotificationTimeInput", ""], ["modalServiceNotiInput", ""], ["newCategoryName", ""], ["modalCategoryInput", ""], ["modalRecurrenceIntervalInput", ""], ["modalRecurrenceEndDateInput", ""], [1, "min-h-screen", "bg-gray-50", "flex", "items-center", "justify-center", "p-4", "font-sans", "text-slate-800"], [1, "w-full", "max-w-7xl", "bg-white", "rounded-2xl", "shadow-xl", "overflow-hidden", "border", "border-gray-100", "flex", "flex-col", "md:flex-row", "h-[850px]", "md:h-[800px]", "transition-all", "duration-500", "ease-in-out", "relative"], [1, "flex-1", "p-6", "flex", "flex-col", "relative", "transition-all", "duration-500", "overflow-hidden"], [1, "flex", "flex-col", "gap-4", "mb-6", "flex-shrink-0"], [1, "flex", "justify-between", "items-center", "gap-4"], [1, "text-2xl", "font-bold", "text-slate-800", "tracking-tight", "flex", "items-center", "gap-2", "min-w-[180px]", "whitespace-nowrap"], [1, "flex", "items-center", "gap-3", "flex-1", "justify-end"], [1, "relative", "hidden", "sm:block", "group", "w-full", "max-w-[200px]"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-slate-400", "group-focus-within:text-indigo-500", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "\uC77C\uC815 \uAC80\uC0C9...", 1, "w-full", "pl-9", "pr-3", "py-1.5", "text-sm", "bg-gray-50", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:bg-white", "transition-all", "placeholder-slate-400", "text-slate-700", 3, "input", "value"], [1, "absolute", "inset-y-0", "right-0", "pr-2", "flex", "items-center", "text-slate-400", "hover:text-slate-600"], [1, "hidden", "md:flex", "bg-gray-100", "p-1", "rounded-lg", "flex-shrink-0"], [1, "px-3", "py-1.5", "text-xs", "font-semibold", "rounded-md", "transition-all", 3, "bg-white", "text-indigo-600", "shadow-sm", "text-slate-500"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "rounded-lg", "border", "transition-all", "duration-200", "text-sm", "font-medium", "flex-shrink-0", 3, "bg-indigo-50", "border-indigo-100", "text-indigo-600", "bg-white", "border-gray-200", "text-slate-600", "hover:bg-gray-50"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-3", "md:gap-4"], [1, "flex", "items-center", "gap-4", "text-sm", "text-slate-600", "bg-gray-50", "px-3", "py-1.5", "rounded-lg", "border", "border-gray-100"], [1, "flex", "items-center", "gap-1.5", "cursor-pointer", "hover:text-indigo-600", "transition-colors", "select-none"], ["type", "checkbox", 1, "rounded", "text-indigo-600", "focus:ring-indigo-500", "w-4", "h-4", "border-gray-300", 3, "change", "checked"], [1, "w-px", "h-3", "bg-gray-300"], [1, "flex", "w-full", "md:w-auto", "justify-between", "md:justify-end", "gap-2"], [1, "md:hidden", "flex", "bg-gray-100", "p-1", "rounded-lg"], [1, "flex", "bg-gray-50", "rounded-lg", "p-1", "border", "border-gray-100", "ml-auto", "md:ml-0"], ["aria-label", "\uC774\uC804", 1, "p-1.5", "hover:bg-white", "hover:shadow-sm", "rounded-md", "transition-all", "text-slate-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "m15 18-6-6 6-6"], [1, "px-3", "py-1.5", "text-xs", "font-bold", "hover:bg-white", "hover:shadow-sm", "rounded-md", "transition-all", "text-slate-600", 3, "click"], ["aria-label", "\uB2E4\uC74C", 1, "p-1.5", "hover:bg-white", "hover:shadow-sm", "rounded-md", "transition-all", "text-slate-600", 3, "click"], ["d", "m9 18 6-6-6-6"], [1, "flex-1", "overflow-hidden", "flex", "flex-col", "relative"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6", "h-full", "overflow-y-auto", "p-2", "custom-scrollbar"], [1, "flex", "flex-col", "h-full", "overflow-hidden"], [1, "flex-1", "bg-white", "rounded-xl", "border", "border-gray-100", "flex", "flex-col", "h-full", "overflow-hidden"], [1, "bg-gray-50", "border-l", "border-gray-100", "flex", "flex-col", "shadow-inner", "transition-all", "duration-500", "ease-in-out", "overflow-hidden"], [1, "min-w-[20rem]", "flex", "flex-col", "h-full"], [1, "h-full", "flex", "flex-col"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/50", "backdrop-blur-sm"], [1, "absolute", "inset-y-0", "right-0", "pr-2", "flex", "items-center", "text-slate-400", "hover:text-slate-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-3.5", "w-3.5"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", "clip-rule", "evenodd"], [1, "px-3", "py-1.5", "text-xs", "font-semibold", "rounded-md", "transition-all", 3, "click"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "rounded-lg", "border", "transition-all", "duration-200", "text-sm", "font-medium", "flex-shrink-0", 3, "click"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "9", "y1", "3", "x2", "9", "y2", "21"], [1, "hidden", "sm:inline"], [1, "bg-white", "rounded-xl", "border", "border-gray-100", "p-4", "hover:border-indigo-300", "hover:shadow-md", "transition-all", "cursor-pointer", "group", "flex", "flex-col", "h-full"], [1, "bg-white", "rounded-xl", "border", "border-gray-100", "p-4", "hover:border-indigo-300", "hover:shadow-md", "transition-all", "cursor-pointer", "group", "flex", "flex-col", "h-full", 3, "click"], [1, "text-sm", "font-bold", "text-slate-800", "mb-3", "px-1", "flex", "justify-between", "items-center", "group-hover:text-indigo-600", "transition-colors"], [1, "grid", "grid-cols-7", "text-center", "mb-1"], [1, "text-[10px]", "font-medium", 3, "text-red-400", "text-blue-400", "text-slate-400"], [1, "grid", "grid-cols-7", "gap-y-1", "flex-1", "content-start"], [1, "flex", "justify-center", "items-center", "h-6"], [1, "text-[10px]", "font-medium"], [1, "text-[10px]", "w-5", "h-5", "flex", "items-center", "justify-center", "rounded-full", 3, "bg-indigo-600", "text-white", "text-slate-600"], [1, "text-[10px]", "w-5", "h-5", "flex", "items-center", "justify-center", "rounded-full"], [1, "grid", "grid-cols-7", "mb-2", "text-center", "flex-shrink-0"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "py-2", 3, "text-red-500", "text-blue-500", "text-slate-400"], [1, "grid", "grid-cols-7", "flex-1", "auto-rows-fr", "gap-2", "h-full", "overflow-y-auto", "custom-scrollbar", "relative"], [1, "relative", "p-2", "rounded-xl", "cursor-pointer", "transition-all", "flex", "flex-col", "items-center", "justify-start", "gap-0.5", "group", "border-2", "hover:border-indigo-200", "min-h-[70px]", 3, "border-indigo-500", "bg-indigo-50", "border-transparent", "hover:bg-gray-50", "opacity-40"], ["aria-label", "\uC77C\uC815 \uCD94\uAC00", 1, "absolute", "bottom-6", "right-6", "w-14", "h-14", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "rounded-full", "shadow-lg", "flex", "items-center", "justify-center", "transition-transform", "hover:scale-105", "z-20", "focus:outline-none", "focus:ring-4", "focus:ring-indigo-300", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "py-2"], [1, "relative", "p-2", "rounded-xl", "cursor-pointer", "transition-all", "flex", "flex-col", "items-center", "justify-start", "gap-0.5", "group", "border-2", "hover:border-indigo-200", "min-h-[70px]", 3, "click"], [1, "text-sm", "font-medium", "w-7", "h-7", "flex", "items-center", "justify-center", "rounded-full", "transition-colors"], [1, "flex", "flex-col", "items-center", "gap-0.5", "min-h-[14px]"], [1, "text-[10px]", "text-slate-400", "leading-none"], [1, "text-[9px]", "bg-indigo-100", "text-indigo-700", "px-1", "rounded-sm", "leading-tight", "mt-0.5"], [1, "flex", "flex-wrap", "justify-center", "gap-1", "w-full", "px-1", "mt-1"], [1, "w-2", "h-2", "rounded-full", "transition-all", "cursor-pointer", "hover:scale-125", 3, "opacity-30", "backgroundColor", "title"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-slate-300"], [1, "w-2", "h-2", "rounded-full", "transition-all", "cursor-pointer", "hover:scale-125", 3, "click", "title"], [1, "flex", "border-b", "border-gray-100", "flex-shrink-0", "bg-white", "z-10"], [1, "w-14", "flex-shrink-0", "border-r", "border-gray-100", "bg-gray-50"], [1, "grid", "grid-cols-7", "flex-1"], [1, "text-center", "py-2", "border-r", "border-gray-100", "last:border-0", 3, "bg-indigo-50"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar", "relative"], [1, "flex", "relative", "min-h-[1920px]"], [1, "w-14", "flex-shrink-0", "border-r", "border-gray-100", "bg-gray-50", "sticky", "left-0", "z-10"], [1, "h-20", "border-b", "border-gray-100", "text-[10px]", "text-right", "pr-2", "pt-1", "text-slate-400", "relative"], [1, "border-r", "border-gray-100", "last:border-0", "relative"], [1, "text-center", "py-2", "border-r", "border-gray-100", "last:border-0", 3, "click"], [1, "text-xs", "font-semibold"], [1, "h-10", "border-b", "border-dotted", "border-gray-100", "box-border", "hover:bg-gray-50", "transition-colors", "relative", "group", 3, "click"], [1, "absolute", "inset-x-0.5", "top-0.5", "bottom-0.5", "rounded", "px-1.5", "py-0.5", "text-[10px]", "text-white", "overflow-hidden", "whitespace-nowrap", "z-10", "shadow-sm", "cursor-pointer", "opacity-90", "hover:opacity-100", "hover:z-20", 3, "backgroundColor"], [1, "h-10", "border-b", "border-gray-100", "box-border", "hover:bg-gray-50", "transition-colors", "relative", "group", 3, "click"], [1, "absolute", "inset-x-0.5", "top-0.5", "bottom-0.5", "rounded", "px-1.5", "py-0.5", "text-[10px]", "text-white", "overflow-hidden", "whitespace-nowrap", "z-10", "shadow-sm", "cursor-pointer", "opacity-90", "hover:opacity-100", "hover:z-20", 3, "click"], [1, "p-4", "border-b", "border-gray-100", "bg-gray-50", "flex", "items-center", "justify-between"], [1, "text-xl", "font-bold", "text-slate-800"], [1, "flex", "items-center", "gap-2", "mt-1"], [1, "text-xs", "text-slate-500"], [1, "text-[10px]", "bg-indigo-100", "text-indigo-700", "px-1.5", "rounded", "font-medium"], [1, "text-right", "text-xs", "text-slate-400"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar", "p-2", "relative"], [1, "mb-4", "bg-gray-50", "rounded-lg", "p-3", "border", "border-gray-100"], [1, "relative", "pb-10"], [1, "flex", "group", "min-h-[80px]"], [1, "text-xs", "font-bold", "text-slate-400", "mb-2", "uppercase", "tracking-wider"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1.5", "rounded-md", "text-sm", "bg-white", "border", "border-gray-200", "shadow-sm", "flex", "items-center", "gap-2", "cursor-pointer", "hover:border-indigo-300", "transition-colors", 3, "opacity-50", "border-left-color", "border-left-width"], [1, "px-3", "py-1.5", "rounded-md", "text-sm", "bg-white", "border", "border-gray-200", "shadow-sm", "flex", "items-center", "gap-2", "cursor-pointer", "hover:border-indigo-300", "transition-colors", 3, "click"], [1, "w-14", "text-right", "pr-3", "pt-0", "text-xs", "font-medium", "text-slate-400", "border-r", "border-gray-100", "relative"], [1, "sticky", "top-0", "-mt-2", "bg-white", "px-1"], [1, "flex-1", "border-t", "border-gray-100", "relative", "p-1", "pb-4", "hover:bg-gray-50", "transition-colors"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "gap-2", "p-2", "rounded-lg", "bg-indigo-50", "border", "border-indigo-100", "text-indigo-900", "text-sm", "shadow-sm", "cursor-pointer", "hover:bg-indigo-100", "transition-all", 3, "border-left-color", "border-left-width", "opacity-50"], [1, "flex", "items-center", "gap-2", "p-2", "rounded-lg", "bg-indigo-50", "border", "border-indigo-100", "text-indigo-900", "text-sm", "shadow-sm", "cursor-pointer", "hover:bg-indigo-100", "transition-all", 3, "click"], [1, "font-bold", "text-xs", "w-10", "shrink-0"], [1, "truncate"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-sm", "bg-indigo-100", "text-indigo-700", "px-2", "py-0.5", "rounded-full", "font-bold"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "text-slate-400"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar", "-mr-2", "pr-2"], [1, "text-sm"], [1, "space-y-3"], [1, "bg-white", "p-3", "rounded-xl", "border", "border-gray-100", "shadow-sm", "hover:border-indigo-300", "hover:shadow-md", "transition-all", "cursor-pointer", "group"], [1, "bg-white", "p-3", "rounded-xl", "border", "border-gray-100", "shadow-sm", "hover:border-indigo-300", "hover:shadow-md", "transition-all", "cursor-pointer", "group", 3, "click"], [1, "flex", "justify-between", "items-start", "mb-1"], [1, "text-xs", "font-bold", "text-slate-500", "bg-gray-50", "px-1.5", "py-0.5", "rounded"], [1, "text-xs", "text-indigo-500", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", "flex-shrink-0"], [1, "text-sm", "font-medium", "text-slate-700", "group-hover:text-indigo-700", "transition-colors", 3, "click"], [1, "text-xl", "font-bold", "text-slate-800", "mb-1"], [1, "flex-1", "overflow-y-auto", "custom-scrollbar"], [1, "space-y-3", "mt-4"], [1, "flex", "items-center", "bg-white", "p-4", "rounded-xl", "border", "border-gray-100", "shadow-sm"], [1, "flex", "flex-col", "items-center", "justify-center", "w-12", "h-12", "bg-red-50", "text-red-500", "rounded-lg", "mr-4", "border", "border-red-100"], [1, "text-xs", "font-bold"], [1, "text-lg", "font-bold", "leading-none"], [1, "font-bold", "text-slate-700"], [1, "text-xs", "text-slate-400", "mt-0.5"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-100", "p-4", "mb-6"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "flex", "gap-1"], [1, "p-1", "hover:bg-gray-100", "rounded", "text-slate-500", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "text-[10px]", "font-semibold", "text-slate-400", 3, "text-red-400", "text-blue-400"], [1, "grid", "grid-cols-7", "text-center", "gap-y-1"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "text-xs", "transition-colors", "mx-auto", "relative", 3, "text-slate-300", "bg-indigo-600", "text-white", "hover:bg-gray-100", "font-bold"], [1, "mb-4", "flex", "items-end", "justify-between"], [1, "text-indigo-600", "text-xs", "font-semibold", "mb-1"], [1, "text-xl", "font-bold", "text-slate-800", "whitespace-nowrap"], [1, "text-right"], [1, "text-2xl", "font-bold", "text-slate-700", "leading-none", "block"], [1, "text-[10px]", "text-slate-400", "font-medium", "uppercase", "tracking-wide"], [1, "w-full", "bg-gray-200", "h-1.5", "rounded-full", "overflow-hidden", "mb-4", "flex-shrink-0"], [1, "bg-indigo-500", "h-full", "transition-all", "duration-500"], [1, "flex-1", "overflow-y-auto", "mb-4", "custom-scrollbar", "pr-1"], [1, "h-full", "flex", "flex-col", "items-center", "justify-center", "text-center", "text-slate-400", "opacity-60"], [1, "mt-auto", "pt-4", "border-t", "border-gray-100", "flex-shrink-0"], [1, "flex", "justify-between", "items-center", "mb-2", "px-1"], [1, "text-xs", "font-semibold", "text-slate-400"], [1, "relative", "group"], ["type", "time", 1, "text-xs", "border", "border-gray-200", "rounded", "px-2", "py-1", "focus:outline-none", "focus:border-indigo-500", "text-slate-600", "bg-white"], [1, "w-px", "h-4", "bg-gray-200", "mx-1"], [1, "flex", "gap-1.5"], [1, "w-4", "h-4", "rounded-full", "transition-transform", "hover:scale-110", 3, "backgroundColor", "ring-2", "ring-offset-1", "ring-gray-300"], [1, "relative"], ["type", "text", "placeholder", "\uC0C8\uB85C\uC6B4 \uC77C\uC815 \uC785\uB825...", 1, "w-full", "pl-4", "pr-12", "py-3", "bg-white", "border", "border-gray-200", "rounded-xl", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "transition-all", "text-sm", "shadow-sm", 3, "keyup.enter"], [1, "absolute", "right-2", "top-2", "bottom-2", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "w-9", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-[10px]", "font-semibold", "text-slate-400"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "text-xs", "transition-colors", "mx-auto", "relative", 3, "click"], [1, "absolute", "bottom-0.5", "w-1", "h-1", "rounded-full", 3, "bg-white", "bg-indigo-400"], [1, "absolute", "bottom-0.5", "w-1", "h-1", "rounded-full"], [1, "group", "flex", "items-center", "gap-3", "bg-white", "p-3", "rounded-xl", "border", "border-gray-100", "shadow-sm", "hover:shadow-md", "hover:border-indigo-100", "transition-all", "duration-200"], [1, "relative", "flex-shrink-0", "w-5", "h-5", "rounded-full", "border-2", "transition-all", "duration-200", "flex", "items-center", "justify-center", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "flex-1", "min-w-0", "cursor-pointer", 3, "click"], [1, "text-sm", "font-medium", "transition-all", "duration-200", "truncate"], [1, "text-xs", "text-indigo-500", "font-medium", "mt-0.5", "flex", "items-center", "gap-1"], [1, "w-2", "h-2", "rounded-full", "flex-shrink-0", "opacity-50"], ["aria-label", "\uC0AD\uC81C", 1, "text-slate-300", "hover:text-red-500", "opacity-0", "group-hover:opacity-100", "transition-all", "p-1", "hover:bg-red-50", "rounded-lg", "ml-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["points", "20 6 9 17 4 12"], [1, "w-4", "h-4", "rounded-full", "transition-transform", "hover:scale-110", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/50", "backdrop-blur-sm", 3, "click"], [1, "bg-white", "rounded-2xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden", 3, "click"], [1, "bg-indigo-600", "p-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], [1, "text-white/80", "hover:text-white", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "p-6", "space-y-4", "h-[70vh]", "overflow-y-auto", "custom-scrollbar"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "\uC77C\uC815 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "focus:border-indigo-500", "outline-none", "transition-all"], [1, "grid", "grid-cols-2", "gap-4"], [1, "space-y-2"], ["type", "date", 1, "w-full", "px-3", "py-1.5", "border", "border-gray-300", "rounded-lg", "text-sm", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "text-slate-600", 3, "value"], ["type", "time", 1, "w-full", "px-3", "py-1.5", "border", "border-gray-300", "rounded-lg", "text-sm", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "text-slate-600"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "block", "text-sm", "font-medium", "text-slate-700"], [1, "text-xs", "text-indigo-600", "hover:text-indigo-800", "font-medium", "flex", "items-center", "gap-0.5"], [1, "p-3", "bg-gray-50", "rounded-lg", "border", "border-gray-200", "mb-2"], [1, "relative", "flex", "items-center"], [1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "text-sm", "bg-white", "text-slate-600", 3, "change"], ["value", "none"], ["value", "daily"], ["value", "weekly"], ["value", "monthly"], ["value", "yearly"], [1, "p-3", "bg-gray-50", "rounded-lg", "border", "border-gray-200", "mt-2", "text-sm", "space-y-3"], ["rows", "3", "placeholder", "\uC0C1\uC138 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "text-sm", "resize-none"], [1, "pt-2", "border-t", "border-gray-100", "mt-2"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-2"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "flex-1", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "text-sm", "bg-white", "text-slate-600"], ["value", "10m"], ["value", "30m"], ["value", "1h"], ["value", "1d"], ["value", "2d"], ["value", "1w"], [1, "flex", "items-center", "cursor-pointer", "select-none", "gap-2"], ["type", "checkbox", 1, "sr-only", "peer", 3, "change"], [1, "w-9", "h-5", "bg-gray-200", "peer-focus:outline-none", "peer-focus:ring-2", "peer-focus:ring-indigo-300", "rounded-full", "peer", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-4", "after:w-4", "after:transition-all", "peer-checked:bg-indigo-600"], [1, "text-sm", "text-slate-600"], [1, "p-4", "bg-gray-50", "flex", "justify-end", "gap-2", "border-t", "border-gray-100"], [1, "px-4", "py-2", "text-slate-600", "font-medium", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-medium", "rounded-lg", "shadow-sm", "transition-colors", 3, "click"], [1, "text-xs", "text-indigo-600", "hover:text-indigo-800", "font-medium", "flex", "items-center", "gap-0.5", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "text-xs", "font-bold", "text-slate-500", "mb-2"], [1, "flex", "gap-2", "mb-2"], ["type", "text", "placeholder", "\uC774\uB984", 1, "flex-1", "px-2", "py-1", "text-sm", "border", "border-gray-300", "rounded", "focus:ring-2", "focus:ring-indigo-500", "outline-none"], [1, "text-xs", "text-slate-500", "mb-1"], [1, "w-5", "h-5", "rounded-full", "transition-transform", "hover:scale-110", 3, "backgroundColor", "ring-2", "ring-offset-1", "ring-gray-300"], [1, "flex", "justify-end", "gap-2"], [1, "text-xs", "text-slate-500", "hover:text-slate-700", 3, "click"], [1, "text-xs", "bg-indigo-600", "text-white", "px-3", "py-1", "rounded", "hover:bg-indigo-700", 3, "click"], [1, "w-5", "h-5", "rounded-full", "transition-transform", "hover:scale-110", 3, "click"], [1, "absolute", "left-3", "w-4", "h-4", "rounded-full", "shadow-sm", "ring-1", "ring-black/5"], [1, "w-full", "pl-9", "pr-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "text-sm", "bg-white", "text-slate-600", "cursor-pointer", 3, "change", "value"], [3, "value"], ["type", "number", "min", "1", "value", "1", 1, "w-16", "px-2", "py-1", "border", "border-gray-300", "rounded", "text-center", "focus:ring-2", "focus:ring-indigo-500", "outline-none"], [1, "flex", "items-center", "gap-4", "mt-2"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "radio", "name", "recurrenceEnd", "value", "none", 1, "text-indigo-600", "focus:ring-indigo-500", 3, "change", "checked"], ["type", "radio", "name", "recurrenceEnd", "value", "date", 1, "text-indigo-600", "focus:ring-indigo-500", 3, "change", "checked"], [1, "text-xs", "text-slate-500", "mb-1.5", "font-semibold"], [1, "flex", "justify-between", "gap-1"], [1, "w-7", "h-7", "rounded-full", "text-xs", "font-medium", "transition-colors", 3, "bg-indigo-600", "text-white", "bg-gray-200", "text-slate-500"], [1, "w-7", "h-7", "rounded-full", "text-xs", "font-medium", "transition-colors", 3, "click"], ["type", "date", 1, "px-2", "py-1", "border", "border-gray-300", "rounded", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "w-full"], [1, "p-6"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "w-3", "h-3", "rounded-full"], [1, "text-sm", "font-bold", "text-slate-500", "bg-slate-100", "px-2", "py-0.5", "rounded"], [1, "text-slate-400", "hover:text-slate-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "text-xl", "font-bold", "text-slate-800", "mb-6"], [1, "space-y-4"], [1, "flex", "gap-3"], [1, "w-5", "h-5", "flex", "items-center", "justify-center", "text-slate-400", "mt-0.5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "text-sm", "font-medium", "text-slate-700"], [1, "bg-gray-50", "px-6", "py-4", "flex", "justify-between", "items-center", "border-t", "border-gray-100"], [1, "text-red-500", "hover:text-red-700", "text-sm", "font-medium", "flex", "items-center", "gap-1", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "px-4", "py-2", "bg-white", "border", "border-gray-300", "rounded-lg", "text-sm", "font-medium", "hover:bg-gray-50", "text-slate-700", "shadow-sm", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "m17 2 4 4-4 4"], ["d", "M3 11v-1a4 4 0 0 1 4-4h14"], ["d", "m7 22-4-4 4-4"], ["d", "M21 13v1a4 4 0 0 1-4 4H3"], [1, "text-sm", "font-medium", "text-slate-700", "flex", "items-center", "gap-1"], [1, "text-xs", "text-slate-500", "mt-0.5"], ["x1", "17", "y1", "10", "x2", "3", "y2", "10"], ["x1", "21", "y1", "6", "x2", "3", "y2", "6"], ["x1", "21", "y1", "14", "x2", "3", "y2", "14"], ["x1", "17", "y1", "18", "x2", "3", "y2", "18"], [1, "text-sm", "text-slate-600", "whitespace-pre-wrap"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "text-xs", "bg-yellow-100", "text-yellow-800", "px-2", "py-0.5", "rounded-full", "w-fit"], [1, "text-xs", "bg-indigo-100", "text-indigo-800", "px-2", "py-0.5", "rounded-full", "w-fit"]], template: function CalendarPcWorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "h2", 20);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "div", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 24);
      \u0275\u0275element(11, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "input", 26);
      \u0275\u0275listener("input", function CalendarPcWorkspaceComponent_Template_input_input_12_listener($event) {
        return ctx.updateSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, CalendarPcWorkspaceComponent_Conditional_13_Template, 3, 0, "button", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 28);
      \u0275\u0275repeaterCreate(15, CalendarPcWorkspaceComponent_For_16_Template, 2, 9, "button", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, CalendarPcWorkspaceComponent_Conditional_17_Template, 6, 15, "button", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 31)(19, "div", 32)(20, "label", 33)(21, "input", 34);
      \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Template_input_change_21_listener() {
        return ctx.toggleLunar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "\uC74C\uB825");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "div", 35);
      \u0275\u0275elementStart(25, "label", 33)(26, "input", 34);
      \u0275\u0275listener("change", function CalendarPcWorkspaceComponent_Template_input_change_26_listener() {
        return ctx.toggleSonless();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "\uC190\uC5C6\uB294\uB0A0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 36)(30, "div", 37);
      \u0275\u0275repeaterCreate(31, CalendarPcWorkspaceComponent_For_32_Template, 2, 9, "button", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 38)(34, "button", 39);
      \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Template_button_click_34_listener() {
        return ctx.navigate(-1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 40);
      \u0275\u0275element(36, "path", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "button", 42);
      \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Template_button_click_37_listener() {
        return ctx.goToday();
      });
      \u0275\u0275text(38, " \uC624\uB298 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 43);
      \u0275\u0275listener("click", function CalendarPcWorkspaceComponent_Template_button_click_39_listener() {
        return ctx.navigate(1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 40);
      \u0275\u0275element(41, "path", 44);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "div", 45);
      \u0275\u0275conditionalCreate(43, CalendarPcWorkspaceComponent_Case_43_Template, 3, 1, "div", 46)(44, CalendarPcWorkspaceComponent_Case_44_Template, 10, 0)(45, CalendarPcWorkspaceComponent_Case_45_Template, 14, 0, "div", 47)(46, CalendarPcWorkspaceComponent_Case_46_Template, 16, 6, "div", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 49)(48, "div", 50);
      \u0275\u0275conditionalCreate(49, CalendarPcWorkspaceComponent_Conditional_49_Template, 8, 2, "div", 51)(50, CalendarPcWorkspaceComponent_Conditional_50_Template, 7, 1, "div", 51)(51, CalendarPcWorkspaceComponent_Conditional_51_Template, 52, 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(52, CalendarPcWorkspaceComponent_Conditional_52_Template, 92, 5, "div", 52);
      \u0275\u0275conditionalCreate(53, CalendarPcWorkspaceComponent_Conditional_53_Template, 38, 10, "div", 52);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.headerTitle(), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchQuery() ? 13 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.viewOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.viewMode() !== "day" && ctx.viewMode() !== "year" && !ctx.searchQuery() ? 17 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("checked", ctx.showLunar());
      \u0275\u0275advance(5);
      \u0275\u0275property("checked", ctx.showSonless());
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.viewOptions);
      \u0275\u0275advance(12);
      \u0275\u0275conditional((tmp_8_0 = ctx.viewMode()) === "year" ? 43 : tmp_8_0 === "month" ? 44 : tmp_8_0 === "week" ? 45 : tmp_8_0 === "day" ? 46 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("w-0", !ctx.isSidebarOpen() && ctx.viewMode() !== "day" && ctx.viewMode() !== "year" && !ctx.searchQuery())("md:w-0", !ctx.isSidebarOpen() && ctx.viewMode() !== "day" && ctx.viewMode() !== "year" && !ctx.searchQuery())("w-full", ctx.isSidebarOpen() || ctx.viewMode() === "day" || ctx.viewMode() === "year" || ctx.searchQuery())("md:w-96", ctx.isSidebarOpen() || ctx.viewMode() === "day" || ctx.viewMode() === "year" || ctx.searchQuery())("opacity-0", !ctx.isSidebarOpen() && ctx.viewMode() !== "day" && ctx.viewMode() !== "year" && !ctx.searchQuery())("opacity-100", ctx.isSidebarOpen() || ctx.viewMode() === "day" || ctx.viewMode() === "year" || ctx.searchQuery())("p-0", !ctx.isSidebarOpen() && ctx.viewMode() !== "day" && ctx.viewMode() !== "year" && !ctx.searchQuery())("p-6", ctx.isSidebarOpen() || ctx.viewMode() === "day" || ctx.viewMode() === "year" || ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.searchQuery() ? 49 : ctx.viewMode() === "year" ? 50 : 51);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAddModalOpen() ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDetailModalOpen() && ctx.selectedTaskDetail() ? 53 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ], styles: ["\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #cbd5e1;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=workspace.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarPcWorkspaceComponent, [{
    type: Component,
    args: [{ selector: "app-calendar-pc-workspace", standalone: true, imports: [
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
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div class="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-[850px] md:h-[800px] transition-all duration-500 ease-in-out relative">
        
        <!-- \uC67C\uCABD: \uB2EC\uB825 \uBA54\uC778 \uC601\uC5ED -->
        <div class="flex-1 p-6 flex flex-col relative transition-all duration-500 overflow-hidden">
          <div class="flex flex-col gap-4 mb-6 flex-shrink-0">
            <div class="flex justify-between items-center gap-4">
              <h2 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2 min-w-[180px] whitespace-nowrap">
                {{ headerTitle() }}
              </h2>

              <div class="flex items-center gap-3 flex-1 justify-end">
                <div class="relative hidden sm:block group w-full max-w-[200px]">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="\uC77C\uC815 \uAC80\uC0C9..." 
                    [value]="searchQuery()"
                    (input)="updateSearch($event)"
                    class="w-full pl-9 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder-slate-400 text-slate-700"
                  />
                  @if (searchQuery()) {
                    <button (click)="clearSearch()" class="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-400 hover:text-slate-600">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>
                    </button>
                  }
                </div>

                <div class="hidden md:flex bg-gray-100 p-1 rounded-lg flex-shrink-0">
                  @for (mode of viewOptions; track mode.value) {
                    <button 
                      (click)="setViewMode(mode.value)"
                      class="px-3 py-1.5 text-xs font-semibold rounded-md transition-all"
                      [class.bg-white]="viewMode() === mode.value"
                      [class.text-indigo-600]="viewMode() === mode.value"
                      [class.shadow-sm]="viewMode() === mode.value"
                      [class.text-slate-500]="viewMode() !== mode.value">
                      {{ mode.label }}
                    </button>
                  }
                </div>

                @if (viewMode() !== 'day' && viewMode() !== 'year' && !searchQuery()) {
                  <button 
                    (click)="toggleSidebar()"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 text-sm font-medium flex-shrink-0"
                    [class.bg-indigo-50]="isSidebarOpen()"
                    [class.border-indigo-100]="isSidebarOpen()"
                    [class.text-indigo-600]="isSidebarOpen()"
                    [class.bg-white]="!isSidebarOpen()"
                    [class.border-gray-200]="!isSidebarOpen()"
                    [class.text-slate-600]="!isSidebarOpen()"
                    [class.hover:bg-gray-50]="!isSidebarOpen()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                    </svg>
                    <span class="hidden sm:inline">{{ isSidebarOpen() ? '\uD328\uB110 \uB2EB\uAE30' : '\uC77C\uC815 \uAD00\uB9AC' }}</span>
                  </button>
                }
              </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
               <div class="flex items-center gap-4 text-sm text-slate-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <label class="flex items-center gap-1.5 cursor-pointer hover:text-indigo-600 transition-colors select-none">
                    <input type="checkbox" [checked]="showLunar()" (change)="toggleLunar()" class="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 border-gray-300">
                    <span>\uC74C\uB825</span>
                  </label>
                  <div class="w-px h-3 bg-gray-300"></div>
                  <label class="flex items-center gap-1.5 cursor-pointer hover:text-indigo-600 transition-colors select-none">
                    <input type="checkbox" [checked]="showSonless()" (change)="toggleSonless()" class="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 border-gray-300">
                    <span>\uC190\uC5C6\uB294\uB0A0</span>
                  </label>
               </div>

               <div class="flex w-full md:w-auto justify-between md:justify-end gap-2">
                 <div class="md:hidden flex bg-gray-100 p-1 rounded-lg">
                    @for (mode of viewOptions; track mode.value) {
                      <button 
                        (click)="setViewMode(mode.value)"
                        class="px-3 py-1.5 text-xs font-semibold rounded-md transition-all"
                        [class.bg-white]="viewMode() === mode.value"
                        [class.text-indigo-600]="viewMode() === mode.value"
                        [class.shadow-sm]="viewMode() === mode.value"
                        [class.text-slate-500]="viewMode() !== mode.value">
                        {{ mode.label }}
                      </button>
                    }
                  </div>

                  <div class="flex bg-gray-50 rounded-lg p-1 border border-gray-100 ml-auto md:ml-0">
                    <button (click)="navigate(-1)" class="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all text-slate-600" aria-label="\uC774\uC804">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button (click)="goToday()" class="px-3 py-1.5 text-xs font-bold hover:bg-white hover:shadow-sm rounded-md transition-all text-slate-600">
                        \uC624\uB298
                    </button>
                    <button (click)="navigate(1)" class="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all text-slate-600" aria-label="\uB2E4\uC74C">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>
               </div>
            </div>
          </div>

          <div class="flex-1 overflow-hidden flex flex-col relative">
            @switch (viewMode()) {
              @case ('year') {
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-full overflow-y-auto p-2 custom-scrollbar">
                  @for (monthIdx of [0,1,2,3,4,5,6,7,8,9,10,11]; track monthIdx) {
                    <div 
                      (click)="selectMonth(monthIdx)"
                      class="bg-white rounded-xl border border-gray-100 p-4 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group flex flex-col h-full">
                      <h3 class="text-sm font-bold text-slate-800 mb-3 px-1 flex justify-between items-center group-hover:text-indigo-600 transition-colors">
                        <span>{{ monthIdx + 1 }}\uC6D4</span>
                      </h3>
                      <div class="grid grid-cols-7 text-center mb-1">
                        @for (day of ['\uC77C','\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0']; track day; let i = $index) {
                          <span class="text-[10px] font-medium" 
                            [class.text-red-400]="i === 0" 
                            [class.text-blue-400]="i === 6"
                            [class.text-slate-400]="i !== 0 && i !== 6">
                            {{ day }}
                          </span>
                        }
                      </div>
                      <div class="grid grid-cols-7 gap-y-1 flex-1 content-start">
                        @for (day of getMonthCalendar(currentYear(), monthIdx); track $index) {
                          <div class="flex justify-center items-center h-6">
                            @if (day) {
                              <span class="text-[10px] w-5 h-5 flex items-center justify-center rounded-full"
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
                <div class="grid grid-cols-7 mb-2 text-center flex-shrink-0">
                  @for (day of weekDays; track day; let i = $index) {
                    <div class="text-xs font-semibold uppercase tracking-wider py-2"
                         [class.text-red-500]="i === 0"
                         [class.text-blue-500]="i === 6"
                         [class.text-slate-400]="i !== 0 && i !== 6">
                      {{ day }}
                    </div>
                  }
                </div>
                <div class="grid grid-cols-7 flex-1 auto-rows-fr gap-2 h-full overflow-y-auto custom-scrollbar relative">
                  @for (day of calendarDays(); track day.dateStr) {
                    <div 
                      (click)="selectDate(day.date)"
                      class="relative p-2 rounded-xl cursor-pointer transition-all flex flex-col items-center justify-start gap-0.5 group border-2 hover:border-indigo-200 min-h-[70px]"
                      [class.border-indigo-500]="day.isSelected && isSidebarOpen() && !searchQuery()"
                      [class.bg-indigo-50]="day.isSelected && isSidebarOpen() && !searchQuery()"
                      [class.border-transparent]="!day.isSelected || !isSidebarOpen() || searchQuery()"
                      [class.hover:bg-gray-50]="!day.isSelected"
                      [class.opacity-40]="!day.isCurrentMonth">
                      
                      <span 
                        class="text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full transition-colors"
                        [class.bg-indigo-600]="day.isToday"
                        [class.text-white]="day.isToday"
                        [class.text-red-500]="!day.isToday && day.dayOfWeek === 0"
                        [class.text-blue-500]="!day.isToday && day.dayOfWeek === 6"
                        [class.text-slate-700]="!day.isToday && day.dayOfWeek !== 0 && day.dayOfWeek !== 6">
                        {{ day.dayNum }}
                      </span>

                      <div class="flex flex-col items-center gap-0.5 min-h-[14px]">
                        @if (showLunar()) {
                          <span class="text-[10px] text-slate-400 leading-none">{{ day.lunarDateStr }}</span>
                        }
                        @if (showSonless() && day.isSonlessDay) {
                           <span class="text-[9px] bg-indigo-100 text-indigo-700 px-1 rounded-sm leading-tight mt-0.5">\uC190\uC5C6\uB294\uB0A0</span>
                        }
                      </div>

                      <div class="flex flex-wrap justify-center gap-1 w-full px-1 mt-1">
                        @for (task of day.tasks.slice(0, 4); track task.id) {
                          <div 
                            (click)="$event.stopPropagation(); openDetailModal(task)"
                            class="w-2 h-2 rounded-full transition-all cursor-pointer hover:scale-125"
                            [class.opacity-30]="task.completed"
                            [style.backgroundColor]="task.color"
                            title="{{task.title}}">
                          </div>
                        }
                        @if (day.tasks.length > 4) {
                          <div class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                        }
                      </div>
                    </div>
                  }

                  <!-- \uD50C\uB85C\uD305 \uBC84\uD2BC -->
                  <button 
                    (click)="openAddModal()"
                    class="absolute bottom-6 right-6 w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 z-20 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    aria-label="\uC77C\uC815 \uCD94\uAC00">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              }

              @case ('week') {
                <div class="flex flex-col h-full overflow-hidden">
                    <div class="flex border-b border-gray-100 flex-shrink-0 bg-white z-10">
                        <div class="w-14 flex-shrink-0 border-r border-gray-100 bg-gray-50"></div>
                        <div class="grid grid-cols-7 flex-1">
                            @for (day of calendarDays(); track day.dateStr; let i = $index) {
                                <div class="text-center py-2 border-r border-gray-100 last:border-0"
                                     (click)="selectDate(day.date)"
                                     [class.bg-indigo-50]="day.isSelected">
                                    <div class="text-xs font-semibold"
                                         [class.text-red-500]="day.dayOfWeek === 0"
                                         [class.text-blue-500]="day.dayOfWeek === 6"
                                         [class.text-slate-500]="day.dayOfWeek !== 0 && day.dayOfWeek !== 6">
                                        {{ day.dayNum }}\uC77C({{ weekDays[day.dayOfWeek] }})
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto custom-scrollbar relative">
                        <div class="flex relative min-h-[1920px]">
                            <div class="w-14 flex-shrink-0 border-r border-gray-100 bg-gray-50 sticky left-0 z-10">
                                @for (hour of hours; track hour) {
                                    <div class="h-20 border-b border-gray-100 text-[10px] text-right pr-2 pt-1 text-slate-400 relative">
                                        <span>{{ formatHour(hour) }}</span>
                                    </div>
                                }
                            </div>
                            <div class="grid grid-cols-7 flex-1">
                                @for (day of calendarDays(); track day.dateStr) {
                                    <div class="border-r border-gray-100 last:border-0 relative">
                                        @for (hour of hours; track hour) {
                                            <div class="h-10 border-b border-dotted border-gray-100 box-border hover:bg-gray-50 transition-colors relative group"
                                                 (click)="addTaskAt(day.date, hour, '00')">
                                                @for (task of getTasksByDayAndTime(day, hour, 'front'); track task.id) {
                                                    <div class="absolute inset-x-0.5 top-0.5 bottom-0.5 rounded px-1.5 py-0.5 text-[10px] text-white overflow-hidden whitespace-nowrap z-10 shadow-sm cursor-pointer opacity-90 hover:opacity-100 hover:z-20"
                                                         (click)="$event.stopPropagation(); openDetailModal(task)"
                                                         [style.backgroundColor]="task.color">
                                                        {{ task.title }}
                                                    </div>
                                                }
                                            </div>
                                            <div class="h-10 border-b border-gray-100 box-border hover:bg-gray-50 transition-colors relative group"
                                                 (click)="addTaskAt(day.date, hour, '30')">
                                                @for (task of getTasksByDayAndTime(day, hour, 'back'); track task.id) {
                                                    <div class="absolute inset-x-0.5 top-0.5 bottom-0.5 rounded px-1.5 py-0.5 text-[10px] text-white overflow-hidden whitespace-nowrap z-10 shadow-sm cursor-pointer opacity-90 hover:opacity-100 hover:z-20"
                                                         (click)="$event.stopPropagation(); openDetailModal(task)"
                                                         [style.backgroundColor]="task.color">
                                                        {{ task.title }}
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
                <div class="flex-1 bg-white rounded-xl border border-gray-100 flex flex-col h-full overflow-hidden">
                    <div class="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                         <div>
                            <h3 class="text-xl font-bold text-slate-800">{{ selectedDayNum() }}\uC77C {{ selectedDayName() }}</h3>
                            <div class="flex items-center gap-2 mt-1">
                                @if (showLunar()) {
                                    <span class="text-xs text-slate-500">\uC74C\uB825 {{ getLunarInfo(selectedDate()).lunarDateStr }}</span>
                                }
                                @if (showSonless() && getLunarInfo(selectedDate()).isSonlessDay) {
                                    <span class="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 rounded font-medium">\u2728 \uC190\uC5C6\uB294\uB0A0</span>
                                }
                            </div>
                         </div>
                         <div class="text-right text-xs text-slate-400">
                             <p>\uC624\uB298\uC758 \uC77C\uC815: {{ selectedDateTasks().length }}\uAC1C</p>
                         </div>
                    </div>
                    
                    <div class="flex-1 overflow-y-auto custom-scrollbar p-2 relative">
                        @if (getTasksNoTime().length > 0) {
                            <div class="mb-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
                                <h4 class="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">All Day</h4>
                                <div class="flex flex-wrap gap-2">
                                    @for (task of getTasksNoTime(); track task.id) {
                                        <div 
                                            (click)="openDetailModal(task)"
                                            class="px-3 py-1.5 rounded-md text-sm bg-white border border-gray-200 shadow-sm flex items-center gap-2 cursor-pointer hover:border-indigo-300 transition-colors"
                                            [class.opacity-50]="task.completed"
                                            [style.border-left-color]="task.color"
                                            [style.border-left-width.px]="4">
                                            <span [class.line-through]="task.completed">{{ task.title }}</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        }

                        <div class="relative pb-10">
                            @for (hour of hours; track hour) {
                                <div class="flex group min-h-[80px]">
                                    <div class="w-14 text-right pr-3 pt-0 text-xs font-medium text-slate-400 border-r border-gray-100 relative">
                                        <span class="sticky top-0 -mt-2 bg-white px-1">{{ formatHour(hour) }}</span>
                                    </div>
                                    <div class="flex-1 border-t border-gray-100 relative p-1 pb-4 hover:bg-gray-50 transition-colors">
                                        <div class="flex flex-col gap-1">
                                            @for (task of getTasksByHour(hour); track task.id) {
                                                <div 
                                                    class="flex items-center gap-2 p-2 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-900 text-sm shadow-sm cursor-pointer hover:bg-indigo-100 transition-all"
                                                    [style.border-left-color]="task.color"
                                                    [style.border-left-width.px]="4"
                                                    [class.opacity-50]="task.completed"
                                                    (click)="openDetailModal(task)">
                                                    <span class="font-bold text-xs w-10 shrink-0">{{ task.time }}</span>
                                                    <span [class.line-through]="task.completed" class="truncate">{{ task.title }}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
              }
            }
          </div>
        </div>

        <!-- \uC624\uB978\uCABD: \uC0AC\uC774\uB4DC\uBC14 -->
        <div 
            class="bg-gray-50 border-l border-gray-100 flex flex-col shadow-inner transition-all duration-500 ease-in-out overflow-hidden"
            [class.w-0]="!isSidebarOpen() && viewMode() !== 'day' && viewMode() !== 'year' && !searchQuery()"
            [class.md:w-0]="!isSidebarOpen() && viewMode() !== 'day' && viewMode() !== 'year' && !searchQuery()"
            [class.w-full]="isSidebarOpen() || viewMode() === 'day' || viewMode() === 'year' || searchQuery()"
            [class.md:w-96]="isSidebarOpen() || viewMode() === 'day' || viewMode() === 'year' || searchQuery()"
            [class.opacity-0]="!isSidebarOpen() && viewMode() !== 'day' && viewMode() !== 'year' && !searchQuery()"
            [class.opacity-100]="isSidebarOpen() || viewMode() === 'day' || viewMode() === 'year' || searchQuery()"
            [class.p-0]="!isSidebarOpen() && viewMode() !== 'day' && viewMode() !== 'year' && !searchQuery()"
            [class.p-6]="isSidebarOpen() || viewMode() === 'day' || viewMode() === 'year' || searchQuery()">
            
          <div class="min-w-[20rem] flex flex-col h-full">
            <!-- \uC0AC\uC774\uB4DC\uBC14 \uB0B4\uC6A9 -->
            @if (searchQuery()) {
                <div class="h-full flex flex-col">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-slate-800">\uAC80\uC0C9 \uACB0\uACFC</h3>
                        <span class="text-sm bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">{{ searchResults().length }}</span>
                    </div>
                    @if (searchResults().length === 0) {
                        <div class="flex-1 flex flex-col items-center justify-center text-slate-400">
                            <p class="text-sm">\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
                        </div>
                    } @else {
                        <div class="flex-1 overflow-y-auto custom-scrollbar -mr-2 pr-2">
                            <ul class="space-y-3">
                                @for (task of searchResults(); track task.id) {
                                    <li class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group"
                                        (click)="goToTaskDate(task.dateStr)">
                                        <div class="flex justify-between items-start mb-1">
                                            <span class="text-xs font-bold text-slate-500 bg-gray-50 px-1.5 py-0.5 rounded">{{ task.dateStr }}</span>
                                            @if(task.time) { <span class="text-xs text-indigo-500 font-medium">{{ task.time }}</span> }
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <div class="w-2 h-2 rounded-full flex-shrink-0" [style.backgroundColor]="task.color"></div>
                                            <span class="text-sm font-medium text-slate-700 group-hover:text-indigo-700 transition-colors" [class.line-through]="task.completed" (click)="$event.stopPropagation(); openDetailModal(task)">{{ task.title }}</span>
                                        </div>
                                    </li>
                                }
                            </ul>
                        </div>
                    }
                </div>
            }
            @else if (viewMode() === 'year') {
                <div class="h-full flex flex-col">
                    <h3 class="text-xl font-bold text-slate-800 mb-1">{{ currentYear() }}\uB144 \uACF5\uD734\uC77C</h3>
                    <div class="flex-1 overflow-y-auto custom-scrollbar">
                        <ul class="space-y-3 mt-4">
                            @for (holiday of yearHolidays(); track holiday.dateStr) {
                                <li class="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div class="flex flex-col items-center justify-center w-12 h-12 bg-red-50 text-red-500 rounded-lg mr-4 border border-red-100">
                                        <span class="text-xs font-bold">{{ holiday.dateStr.split('-')[0] }}\uC6D4</span>
                                        <span class="text-lg font-bold leading-none">{{ holiday.dateStr.split('-')[1] }}</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-700">{{ holiday.name }}</p>
                                        <p class="text-xs text-slate-400 mt-0.5">{{ holiday.type === 'public' ? '\uACF5\uD734\uC77C' : '\uAE30\uB150\uC77C' }}</p>
                                    </div>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            } 
            @else {
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
                    <div class="flex justify-between items-center mb-3">
                    <h4 class="text-sm font-bold text-slate-800">{{ currentYear() }}\uB144 {{ currentMonth() + 1 }}\uC6D4</h4>
                    <div class="flex gap-1">
                        <button (click)="navigate(-1)" class="p-1 hover:bg-gray-100 rounded text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
                        <button (click)="navigate(1)" class="p-1 hover:bg-gray-100 rounded text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></button>
                    </div>
                    </div>
                    <div class="grid grid-cols-7 text-center mb-1">
                    @for (d of ['\uC77C','\uC6D4','\uD654','\uC218','\uBAA9','\uAE08','\uD1A0']; track d; let i = $index) {
                        <span class="text-[10px] font-semibold text-slate-400" 
                            [class.text-red-400]="i===0" [class.text-blue-400]="i===6">{{d}}</span>
                    }
                    </div>
                    <div class="grid grid-cols-7 text-center gap-y-1">
                    @for (day of miniCalendarDays(); track day.dateStr) {
                        <button 
                            (click)="selectDate(day.date)"
                            class="w-8 h-8 flex items-center justify-center rounded-full text-xs transition-colors mx-auto relative"
                            [class.text-slate-300]="!day.isCurrentMonth"
                            [class.bg-indigo-600]="day.isSelected"
                            [class.text-white]="day.isSelected"
                            [class.hover:bg-gray-100]="!day.isSelected"
                            [class.font-bold]="day.isToday">
                            {{ day.dayNum }}
                            @if (day.tasks.length > 0) {
                                <span class="absolute bottom-0.5 w-1 h-1 rounded-full" 
                                    [class.bg-white]="day.isSelected" 
                                    [class.bg-indigo-400]="!day.isSelected"></span>
                            }
                        </button>
                    }
                    </div>
                </div>

                <div class="mb-4 flex items-end justify-between">
                    <div>
                    <p class="text-indigo-600 text-xs font-semibold mb-1">{{ selectedDayName() }}</p>
                    <h3 class="text-xl font-bold text-slate-800 whitespace-nowrap">{{ selectedDateTitle() }}</h3>
                    </div>
                    <div class="text-right">
                    <span class="text-2xl font-bold text-slate-700 leading-none block">{{ remainingCount() }}</span>
                    <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Tasks Left</span>
                    </div>
                </div>

                <div class="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-4 flex-shrink-0">
                    <div class="bg-indigo-500 h-full transition-all duration-500" [style.width.%]="progressPercentage()"></div>
                </div>

                <div class="flex-1 overflow-y-auto mb-4 custom-scrollbar pr-1">
                    @if (selectedDateTasks().length === 0) {
                    <div class="h-full flex flex-col items-center justify-center text-center text-slate-400 opacity-60">
                        <p class="text-sm">\uB4F1\uB85D\uB41C \uD560 \uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
                    </div>
                    } @else {
                    <ul class="space-y-3">
                        @for (task of selectedDateTasks(); track task.id) {
                        <li class="group flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200">
                            <button 
                            (click)="toggleTask(task.id)"
                            class="relative flex-shrink-0 w-5 h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
                            [style.borderColor]="task.completed ? task.color : '#cbd5e1'"
                            [style.backgroundColor]="task.completed ? task.color : 'transparent'">
                            @if (task.completed) {
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            }
                            </button>
                            <div class="flex-1 min-w-0 cursor-pointer" (click)="openDetailModal(task)">
                            <p 
                                class="text-sm font-medium transition-all duration-200 truncate"
                                [class.text-slate-400]="task.completed"
                                [class.line-through]="task.completed"
                                [class.text-slate-700]="!task.completed">
                                {{ task.title }}
                            </p>
                            @if (task.time) {
                                <p class="text-xs text-indigo-500 font-medium mt-0.5 flex items-center gap-1">{{ task.time }}</p>
                            }
                            </div>
                            <div class="w-2 h-2 rounded-full flex-shrink-0 opacity-50" [style.backgroundColor]="task.color"></div>
                            <button 
                            (click)="deleteTask(task.id)"
                            class="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-red-50 rounded-lg ml-1"
                            aria-label="\uC0AD\uC81C">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </li>
                        }
                    </ul>
                    }
                </div>

                <div class="mt-auto pt-4 border-t border-gray-100 flex-shrink-0">
                    <div class="flex justify-between items-center mb-2 px-1">
                        <span class="text-xs font-semibold text-slate-400">\uC635\uC158 \uC124\uC815</span>
                        <div class="flex items-center gap-2">
                            <div class="relative group">
                                <input #timeInput type="time" class="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-indigo-500 text-slate-600 bg-white" />
                            </div>
                            <div class="w-px h-4 bg-gray-200 mx-1"></div>
                            <div class="flex gap-1.5">
                                @for (color of taskColors; track color) {
                                <button 
                                    (click)="selectedColor.set(color)"
                                    class="w-4 h-4 rounded-full transition-transform hover:scale-110"
                                    [style.backgroundColor]="color"
                                    [class.ring-2]="selectedColor() === color"
                                    [class.ring-offset-1]="selectedColor() === color"
                                    [class.ring-gray-300]="selectedColor() === color">
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                    <input 
                        #taskInput
                        type="text" 
                        placeholder="\uC0C8\uB85C\uC6B4 \uC77C\uC815 \uC785\uB825..." 
                        class="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm shadow-sm"
                        (keyup.enter)="addTask(taskInput.value, timeInput.value); taskInput.value = '';"
                    />
                    <button 
                        (click)="addTask(taskInput.value, timeInput.value); taskInput.value = '';"
                        class="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white w-9 rounded-lg flex items-center justify-center transition-colors shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    </div>
                </div>
            }
          </div>
        </div>

        <!-- \uC77C\uC815 \uB4F1\uB85D \uBAA8\uB2EC -->
        @if (isAddModalOpen()) {
            <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" (click)="closeAddModal()">
                <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" (click)="$event.stopPropagation()">
                    <div class="bg-indigo-600 p-4 flex justify-between items-center">
                        <h3 class="text-white font-bold text-lg">\uC0C8\uB85C\uC6B4 \uC77C\uC815</h3>
                        <button (click)="closeAddModal()" class="text-white/80 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    
                    <div class="p-6 space-y-4 h-[70vh] overflow-y-auto custom-scrollbar">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">\uC81C\uBAA9</label>
                            <input #modalTitleInput type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="\uC77C\uC815 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694">
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">\uC2DC\uC791</label>
                                <div class="space-y-2">
                                    <input #modalStartDateInput type="date" [value]="formatDateForInput(selectedDate())" class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600">
                                    <input #modalStartTimeInput type="time" class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-slate-700 mb-1">\uC885\uB8CC</label>
                                <div class="space-y-2">
                                    <input #modalEndDateInput type="date" [value]="formatDateForInput(selectedDate())" class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600">
                                    <input #modalEndTimeInput type="time" class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600">
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <label class="block text-sm font-medium text-slate-700">\uCE74\uD14C\uACE0\uB9AC</label>
                                @if (!isAddingCategory()) {
                                    <button (click)="isAddingCategory.set(true)" class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        \uCD94\uAC00
                                    </button>
                                }
                            </div>

                            @if (isAddingCategory()) {
                                <div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mb-2">
                                    <p class="text-xs font-bold text-slate-500 mb-2">\uC0C8 \uCE74\uD14C\uACE0\uB9AC \uB9CC\uB4E4\uAE30</p>
                                    <div class="flex gap-2 mb-2">
                                        <input #newCategoryName type="text" placeholder="\uC774\uB984" class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <p class="text-xs text-slate-500 mb-1">\uC0C9\uC0C1 \uC120\uD0DD</p>
                                    <div class="flex gap-2 mb-2">
                                         @for (color of taskColors; track color) {
                                            <button 
                                                (click)="newCategoryColor.set(color)"
                                                class="w-5 h-5 rounded-full transition-transform hover:scale-110"
                                                [style.backgroundColor]="color"
                                                [class.ring-2]="newCategoryColor() === color"
                                                [class.ring-offset-1]="newCategoryColor() === color"
                                                [class.ring-gray-300]="newCategoryColor() === color">
                                            </button>
                                        }
                                    </div>
                                    <div class="flex justify-end gap-2">
                                        <button (click)="isAddingCategory.set(false)" class="text-xs text-slate-500 hover:text-slate-700">\uCDE8\uC18C</button>
                                        <button (click)="addCategory(newCategoryName.value)" class="text-xs bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">\uC800\uC7A5</button>
                                    </div>
                                </div>
                            } @else {
                                <div class="relative flex items-center">
                                    <div class="absolute left-3 w-4 h-4 rounded-full shadow-sm ring-1 ring-black/5" [style.backgroundColor]="modalSelectedColor()"></div>
                                    <select 
                                        #modalCategoryInput 
                                        [value]="modalSelectedCategory()"
                                        (change)="selectCategory($any($event.target).value)"
                                        class="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white text-slate-600 cursor-pointer">
                                        @for (cat of categories(); track cat.name) {
                                            <option [value]="cat.name">{{ cat.name }}</option>
                                        }
                                    </select>
                                </div>
                            }
                        </div>

                        <div class="space-y-2">
                            <label class="block text-sm font-medium text-slate-700">\uBC18\uBCF5 \uC124\uC815</label>
                            <select 
                                #modalRecurrenceTypeInput 
                                (change)="modalRecurrenceType.set($any($event.target).value)" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white text-slate-600">
                                <option value="none">\uBC18\uBCF5 \uC548\uD568</option>
                                <option value="daily">\uB9E4\uC77C</option>
                                <option value="weekly">\uB9E4\uC8FC</option>
                                <option value="monthly">\uB9E4\uC6D4</option>
                                <option value="yearly">\uB9E4\uB144</option>
                            </select>

                            @if (modalRecurrenceType() !== 'none') {
                                <div class="p-3 bg-gray-50 rounded-lg border border-gray-200 mt-2 text-sm space-y-3">
                                    <div class="flex items-center gap-2">
                                        <span>\uB9E4</span>
                                        <input #modalRecurrenceIntervalInput type="number" min="1" value="1" class="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-indigo-500 outline-none">
                                        <span>
                                            @switch (modalRecurrenceType()) {
                                                @case ('daily') { \uC77C }
                                                @case ('weekly') { \uC8FC }
                                                @case ('monthly') { \uAC1C\uC6D4 }
                                                @case ('yearly') { \uB144 }
                                            }
                                            \uB9C8\uB2E4
                                        </span>
                                    </div>

                                    @if (modalRecurrenceType() === 'weekly') {
                                        <div>
                                            <p class="text-xs text-slate-500 mb-1.5 font-semibold">\uBC18\uBCF5 \uC694\uC77C</p>
                                            <div class="flex justify-between gap-1">
                                                @for (day of weekDays; track day; let i = $index) {
                                                    <button 
                                                        (click)="toggleRecurrenceDay(i)"
                                                        class="w-7 h-7 rounded-full text-xs font-medium transition-colors"
                                                        [class.bg-indigo-600]="modalRecurrenceDays().includes(i)"
                                                        [class.text-white]="modalRecurrenceDays().includes(i)"
                                                        [class.bg-gray-200]="!modalRecurrenceDays().includes(i)"
                                                        [class.text-slate-500]="!modalRecurrenceDays().includes(i)">
                                                        {{ day }}
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    }

                                    <div class="flex items-center gap-4 mt-2">
                                        <label class="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="recurrenceEnd" value="none" [checked]="modalRecurrenceEndType() === 'none'" (change)="modalRecurrenceEndType.set('none')" class="text-indigo-600 focus:ring-indigo-500">
                                            <span>\uC885\uB8CC\uC77C \uC5C6\uC74C</span>
                                        </label>
                                        <label class="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="recurrenceEnd" value="date" [checked]="modalRecurrenceEndType() === 'date'" (change)="modalRecurrenceEndType.set('date')" class="text-indigo-600 focus:ring-indigo-500">
                                            <span>\uC885\uB8CC\uC77C \uC9C0\uC815</span>
                                        </label>
                                    </div>

                                    @if (modalRecurrenceEndType() === 'date') {
                                        <div class="flex items-center gap-2">
                                            <span>\uB0A0\uC9DC:</span>
                                            <input #modalRecurrenceEndDateInput type="date" class="px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none w-full">
                                        </div>
                                    }
                                </div>
                            }
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">\uBA54\uBAA8</label>
                            <textarea #modalMemoInput rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm resize-none" placeholder="\uC0C1\uC138 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694"></textarea>
                        </div>

                        <div class="pt-2 border-t border-gray-100 mt-2">
                            <label class="block text-sm font-medium text-slate-700 mb-2">\uC54C\uB9BC \uC124\uC815</label>
                            <div class="flex items-center justify-between gap-4">
                                <select 
                                    #modalNotificationTimeInput
                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-white text-slate-600">
                                    <option value="none">\uC54C\uB9BC \uC5C6\uC74C</option>
                                    <option value="10m">10\uBD84 \uC804</option>
                                    <option value="30m">30\uBD84 \uC804</option>
                                    <option value="1h">1\uC2DC\uAC04 \uC804</option>
                                    <option value="1d">1\uC77C \uC804</option>
                                    <option value="2d">2\uC77C \uC804</option>
                                    <option value="1w">1\uC8FC\uC77C \uC804</option>
                                </select>

                                <label class="flex items-center cursor-pointer select-none gap-2">
                                    <div class="relative">
                                        <input #modalServiceNotiInput type="checkbox" class="sr-only peer" (change)="toggleServiceNoti()">
                                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                                    </div>
                                    <span class="text-sm text-slate-600">\uC11C\uBE44\uC2A4 \uC54C\uB9BC</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 flex justify-end gap-2 border-t border-gray-100">
                        <button (click)="closeAddModal()" class="px-4 py-2 text-slate-600 font-medium hover:bg-gray-100 rounded-lg transition-colors">\uCDE8\uC18C</button>
                        <button 
                            (click)="submitAddModalFromDOM()" 
                            class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors">
                            \uC77C\uC815 \uB4F1\uB85D
                        </button>
                    </div>
                </div>
            </div>
        }

        <!-- \uC0C1\uC138 \uBAA8\uB2EC -->
        @if (isDetailModalOpen() && selectedTaskDetail()) {
            <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" (click)="closeDetailModal()">
                <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" (click)="$event.stopPropagation()">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full" [style.backgroundColor]="selectedTaskDetail()?.color"></div>
                                <span class="text-sm font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{{ selectedTaskDetail()?.category }}</span>
                            </div>
                            <button (click)="closeDetailModal()" class="text-slate-400 hover:text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                        
                        <h3 class="text-xl font-bold text-slate-800 mb-6">{{ selectedTaskDetail()?.title }}</h3>
                        
                        <div class="space-y-4">
                            <div class="flex gap-3">
                                <div class="w-5 h-5 flex items-center justify-center text-slate-400 mt-0.5">
                                    <!-- \uB2EC\uB825 \uC544\uC774\uCF58 -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-slate-700">
                                        {{ selectedTaskDetail()?.dateStr }} 
                                        @if(selectedTaskDetail()?.time) { {{ selectedTaskDetail()?.time }} }
                                        @if(selectedTaskDetail()?.endDateStr) {
                                            ~ {{ selectedTaskDetail()?.endDateStr }}
                                            @if(selectedTaskDetail()?.endTime) { {{ selectedTaskDetail()?.endTime }} }
                                        }
                                    </p>
                                </div>
                            </div>
                            
                            <!-- \uBC18\uBCF5 \uC0C1\uC138 \uC815\uBCF4 -->
                            @if(selectedTaskDetail()?.recurrenceType && selectedTaskDetail()?.recurrenceType !== 'none') {
                                <div class="flex gap-3">
                                    <div class="w-5 h-5 flex items-center justify-center text-slate-400 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-slate-700 flex items-center gap-1">
                                            @if(selectedTaskDetail()?.recurrenceInterval && (selectedTaskDetail()?.recurrenceInterval ?? 0) > 1) { 
                                                {{selectedTaskDetail()?.recurrenceInterval}}
                                                @switch (selectedTaskDetail()?.recurrenceType) {
                                                    @case ('daily') { \uC77C }
                                                    @case ('weekly') { \uC8FC }
                                                    @case ('monthly') { \uAC1C\uC6D4 }
                                                    @case ('yearly') { \uB144 }
                                                }
                                                \uB9C8\uB2E4
                                            } @else {
                                                @switch (selectedTaskDetail()?.recurrenceType) {
                                                    @case ('daily') { \uB9E4\uC77C }
                                                    @case ('weekly') { \uB9E4\uC8FC }
                                                    @case ('monthly') { \uB9E4\uC6D4 }
                                                    @case ('yearly') { \uB9E4\uB144 }
                                                }
                                            }
                                        </p>
                                        
                                        <!-- \uB9E4\uC8FC \uBC18\uBCF5 \uC2DC \uC694\uC77C \uD45C\uC2DC -->
                                        @if (selectedTaskDetail()?.recurrenceType === 'weekly' && selectedTaskDetail()?.recurrenceDays?.length) {
                                            <p class="text-xs text-slate-500 mt-0.5">
                                                @for (dayIdx of selectedTaskDetail()?.recurrenceDays; track dayIdx; let last = $last) {
                                                    {{ weekDays[dayIdx] }}{{ !last ? ',' : '' }}
                                                }
                                            </p>
                                        }

                                        <!-- \uC885\uB8CC \uC870\uAC74 \uD45C\uC2DC -->
                                        <p class="text-xs text-slate-400 mt-0.5">
                                            @if (selectedTaskDetail()?.recurrenceEndType === 'date' && selectedTaskDetail()?.recurrenceEndDate) {
                                                {{ selectedTaskDetail()?.recurrenceEndDate }} \uAE4C\uC9C0
                                            } @else {
                                                \uACC4\uC18D \uBC18\uBCF5
                                            }
                                        </p>
                                    </div>
                                </div>
                            }

                            @if(selectedTaskDetail()?.memo) {
                                <div class="flex gap-3">
                                    <div class="w-5 h-5 flex items-center justify-center text-slate-400 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                                    </div>
                                    <p class="text-sm text-slate-600 whitespace-pre-wrap">{{ selectedTaskDetail()?.memo }}</p>
                                </div>
                            }

                            @if(selectedTaskDetail()?.notificationTime || selectedTaskDetail()?.serviceNotification) {
                                <div class="flex gap-3">
                                    <div class="w-5 h-5 flex items-center justify-center text-slate-400 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        @if(selectedTaskDetail()?.notificationTime) {
                                            <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full w-fit">
                                                \u{1F514} 
                                                @switch (selectedTaskDetail()?.notificationTime) {
                                                    @case ('10m') { 10\uBD84 \uC804 }
                                                    @case ('30m') { 30\uBD84 \uC804 }
                                                    @case ('1h') { 1\uC2DC\uAC04 \uC804 }
                                                    @case ('1d') { 1\uC77C \uC804 }
                                                    @case ('2d') { 2\uC77C \uC804 }
                                                    @case ('1w') { 1\uC8FC\uC77C \uC804 }
                                                }
                                            </span>
                                        }
                                        @if(selectedTaskDetail()?.serviceNotification) {
                                            <span class="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full w-fit">
                                                \u{1F4E2} \uC11C\uBE44\uC2A4 \uC54C\uB9BC ON
                                            </span>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-100">
                        <button (click)="deleteTask(selectedTaskDetail()!.id); closeDetailModal()" class="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            \uC0AD\uC81C
                        </button>
                        <button (click)="closeDetailModal()" class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-slate-700 shadow-sm">
                            \uB2EB\uAE30
                        </button>
                    </div>
                </div>
            </div>
        }

      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;421eb172c98bdfd55bffc92f6b9fdd3f2c82e5e5898fc92444534a4d0b4ea289;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/calendar/pc/pages/workspace/workspace.component.ts */\n.custom-scrollbar::-webkit-scrollbar {\n  width: 4px;\n}\n.custom-scrollbar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.custom-scrollbar::-webkit-scrollbar-thumb {\n  background-color: #cbd5e1;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=workspace.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarPcWorkspaceComponent, { className: "CalendarPcWorkspaceComponent", filePath: "src/app/modules/calendar/pc/pages/workspace/workspace.component.ts", lineNumber: 971 });
})();
export {
  CalendarPcWorkspaceComponent
};
//# sourceMappingURL=chunk-LOLRIDST.js.map
