import {
  ActivatedRoute,
  Router
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  IconComponent,
  NoteService
} from "./chunk-GIGBJXFY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  NgClass,
  Output,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/note/shared/components/splash/splash.component.ts
var SplashComponent = class _SplashComponent {
  static \u0275fac = function SplashComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplashComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplashComponent, selectors: [["app-splash"]], decls: 6, vars: 0, consts: [[1, "fixed", "inset-0", "bg-blue-500", "flex", "flex-col", "items-center", "justify-center", "text-white", "z-50", "transition-opacity", "duration-500"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-sm", "opacity-80"], [1, "mt-8", "animate-spin", "rounded-full", "h-8", "w-8", "border-t-2", "border-b-2", "border-white"]], template: function SplashComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Easy Note");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2);
      \u0275\u0275text(4, "AI \uAE30\uBC18 \uC2A4\uB9C8\uD2B8 \uB178\uD2B8");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(5, "div", 3);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplashComponent, [{
    type: Component,
    args: [{
      selector: "app-splash",
      standalone: true,
      template: `
    <div class="fixed inset-0 bg-blue-500 flex flex-col items-center justify-center text-white z-50 transition-opacity duration-500">
      <div class="text-4xl font-bold mb-4">Easy Note</div>
      <div class="text-sm opacity-80">AI \uAE30\uBC18 \uC2A4\uB9C8\uD2B8 \uB178\uD2B8</div>
      <div class="mt-8 animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplashComponent, { className: "SplashComponent", filePath: "src/app/modules/note/shared/components/splash/splash.component.ts", lineNumber: 14 });
})();

// src/app/modules/note/mobile/components/note-card/note-card.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-purple-100 text-purple-600": a0, "bg-green-100 text-green-600": a1, "bg-gray-100 text-gray-600": a2 });
function NoteCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 16);
  }
}
function NoteCardComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    \u0275\u0275styleProp("background-image", "url(" + img_r1 + ")");
  }
}
function NoteCardComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.note.images.length - 2, " ");
  }
}
function NoteCardComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-icon", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 18);
  }
}
function NoteCardComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-icon", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 18);
  }
}
function NoteCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, NoteCardComponent_Conditional_7_For_2_Template, 1, 2, "div", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(3, NoteCardComponent_Conditional_7_Conditional_3_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(4, NoteCardComponent_Conditional_7_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275conditionalCreate(5, NoteCardComponent_Conditional_7_Conditional_5_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.note.images.slice(0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.note.images.length > 2 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.note.hasAudio && ctx_r1.note.images.length < 2 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.note.drawing && ctx_r1.note.images.length < 2 && !ctx_r1.note.hasAudio ? 5 : -1);
  }
}
var NoteCardComponent = class _NoteCardComponent {
  note;
  onClick = new EventEmitter();
  onPin = new EventEmitter();
  onDelete = new EventEmitter();
  onLongPress = new EventEmitter();
  longPressTimeout;
  onMouseDown() {
    this.startLongPress();
  }
  onTouchStart() {
    this.startLongPress();
  }
  onMouseUp() {
    this.cancelLongPress();
  }
  onTouchEnd() {
    this.cancelLongPress();
  }
  startLongPress() {
    this.longPressTimeout = setTimeout(() => {
      this.onLongPress.emit(this.note);
    }, 500);
  }
  cancelLongPress() {
    if (this.longPressTimeout) {
      clearTimeout(this.longPressTimeout);
    }
  }
  static \u0275fac = function NoteCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoteCardComponent, selectors: [["app-note-card"]], inputs: { note: "note" }, outputs: { onClick: "onClick", onPin: "onPin", onDelete: "onDelete", onLongPress: "onLongPress" }, decls: 19, vars: 18, consts: [[1, "bg-white", "rounded-xl", "p-4", "shadow-sm", "border", "border-gray-100", "h-full", "active:scale-[0.99]", "transition-transform", "cursor-pointer", "hover:shadow-md", "relative", "group", "flex", "flex-col", "select-none", 3, "click", "mousedown", "touchstart", "mouseup", "touchend", "mouseleave"], [1, "flex", "justify-between", "items-start", "mb-2"], [1, "font-bold", "text-gray-800", "line-clamp-1", "text-lg", "flex-1", "pr-8"], ["name", "pin", "className", "text-blue-500 fill-blue-500 absolute top-4 right-4", 3, "size"], [1, "text-gray-500", "text-sm", "line-clamp-2", "mb-3", "min-h-[1.25rem]", "flex-1"], [1, "flex", "gap-2", "mb-3", "overflow-hidden"], [1, "flex", "justify-between", "items-center", "text-xs", "text-gray-400", "mt-auto"], [1, "px-2", "py-1", "rounded-full", "truncate", "max-w-[80px]", 3, "ngClass"], [1, "absolute", "right-2", "bottom-2", "hidden", "group-hover:flex", "gap-1", "bg-white/95", "p-1", "rounded-lg", "shadow-sm", "border", "border-gray-100"], [1, "p-1.5", "hover:bg-gray-100", "rounded-full", "text-gray-500", 3, "click", "title"], ["name", "pin", 3, "size", "className"], ["title", "\uC0AD\uC81C", 1, "p-1.5", "hover:bg-red-50", "rounded-full", "text-red-500", 3, "click"], ["name", "trash-2", 3, "size"], [1, "w-10", "h-10", "rounded-lg", "bg-gray-100", "bg-cover", "bg-center", "border", "border-gray-200", "shrink-0", 3, "background-image"], [1, "w-10", "h-10", "rounded-lg", "bg-gray-50", "flex", "items-center", "justify-center", "border", "border-gray-200", "text-gray-400", "text-xs", "shrink-0"], [1, "w-10", "h-10", "rounded-lg", "bg-blue-50", "flex", "items-center", "justify-center", "border", "border-blue-100", "text-blue-500", "shrink-0"], [1, "w-10", "h-10", "rounded-lg", "bg-purple-50", "flex", "items-center", "justify-center", "border", "border-purple-100", "text-purple-500", "shrink-0"], [1, "w-10", "h-10", "rounded-lg", "bg-gray-100", "bg-cover", "bg-center", "border", "border-gray-200", "shrink-0"], ["name", "mic", 3, "size"], ["name", "pen-tool", 3, "size"]], template: function NoteCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function NoteCardComponent_Template_div_click_0_listener() {
        return ctx.onClick.emit(ctx.note);
      })("mousedown", function NoteCardComponent_Template_div_mousedown_0_listener() {
        return ctx.onMouseDown();
      })("touchstart", function NoteCardComponent_Template_div_touchstart_0_listener() {
        return ctx.onTouchStart();
      })("mouseup", function NoteCardComponent_Template_div_mouseup_0_listener() {
        return ctx.onMouseUp();
      })("touchend", function NoteCardComponent_Template_div_touchend_0_listener() {
        return ctx.onTouchEnd();
      })("mouseleave", function NoteCardComponent_Template_div_mouseleave_0_listener() {
        return ctx.onMouseUp();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, NoteCardComponent_Conditional_4_Template, 1, 1, "app-icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, NoteCardComponent_Conditional_7_Template, 6, 3, "div", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
      \u0275\u0275listener("click", function NoteCardComponent_Template_button_click_15_listener($event) {
        $event.stopPropagation();
        return ctx.onPin.emit(ctx.note.id);
      });
      \u0275\u0275element(16, "app-icon", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function NoteCardComponent_Template_button_click_17_listener($event) {
        $event.stopPropagation();
        return ctx.onDelete.emit(ctx.note.id);
      });
      \u0275\u0275element(18, "app-icon", 12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.note.title || "\uC81C\uBAA9 \uC5C6\uC74C", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.note.isPinned ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.note.content || "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.note.images && ctx.note.images.length > 0 || ctx.note.hasAudio || ctx.note.drawing ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, ctx.note.date, "MM.dd"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c0, ctx.note.category === "\uC5C5\uBB34", ctx.note.category === "\uC0DD\uD65C", ctx.note.category !== "\uC5C5\uBB34" && ctx.note.category !== "\uC0DD\uD65C"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.note.category, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.note.isPinned ? "\uACE0\uC815 \uD574\uC81C" : "\uC0C1\uB2E8 \uACE0\uC815");
      \u0275\u0275advance();
      \u0275\u0275property("size", 14)("className", ctx.note.isPinned ? "text-blue-500" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 14);
    }
  }, dependencies: [CommonModule, NgClass, IconComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteCardComponent, [{
    type: Component,
    args: [{
      selector: "app-note-card",
      standalone: true,
      imports: [CommonModule, IconComponent],
      template: `
    <div 
      (click)="onClick.emit(note)"
      (mousedown)="onMouseDown()"
      (touchstart)="onTouchStart()"
      (mouseup)="onMouseUp()"
      (touchend)="onTouchEnd()"
      (mouseleave)="onMouseUp()"
      class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 h-full active:scale-[0.99] transition-transform cursor-pointer hover:shadow-md relative group flex flex-col select-none"
    >
      <div class="flex justify-between items-start mb-2">
        <h3 class="font-bold text-gray-800 line-clamp-1 text-lg flex-1 pr-8">
          {{ note.title || "\uC81C\uBAA9 \uC5C6\uC74C" }}
        </h3>
        @if (note.isPinned) {
          <app-icon name="pin" [size]="16" className="text-blue-500 fill-blue-500 absolute top-4 right-4"></app-icon>
        }
      </div>
      
      <p class="text-gray-500 text-sm line-clamp-2 mb-3 min-h-[1.25rem] flex-1">
        {{ note.content || "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }}
      </p>

      @if ((note.images && note.images.length > 0) || note.hasAudio || note.drawing) {
        <div class="flex gap-2 mb-3 overflow-hidden">
          @for (img of note.images.slice(0, 2); track $index) {
            <div 
              class="w-10 h-10 rounded-lg bg-gray-100 bg-cover bg-center border border-gray-200 shrink-0"
              [style.background-image]="'url(' + img + ')'">
            </div>
          }
          @if (note.images.length > 2) {
             <div class="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200 text-gray-400 text-xs shrink-0">
               +{{note.images.length - 2}}
             </div>
          }
          @if (note.hasAudio && note.images.length < 2) {
            <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-500 shrink-0">
              <app-icon name="mic" [size]="18"></app-icon>
            </div>
          }
          @if (note.drawing && note.images.length < 2 && !note.hasAudio) {
            <div class="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100 text-purple-500 shrink-0">
              <app-icon name="pen-tool" [size]="18"></app-icon>
            </div>
          }
        </div>
      }

      <div class="flex justify-between items-center text-xs text-gray-400 mt-auto">
        <span>{{ note.date | date:'MM.dd' }}</span>
        <span [ngClass]="{
          'bg-purple-100 text-purple-600': note.category === '\uC5C5\uBB34',
          'bg-green-100 text-green-600': note.category === '\uC0DD\uD65C',
          'bg-gray-100 text-gray-600': note.category !== '\uC5C5\uBB34' && note.category !== '\uC0DD\uD65C'
        }" class="px-2 py-1 rounded-full truncate max-w-[80px]">
          {{ note.category }}
        </span>
      </div>
      
      <!-- Quick Actions (Only on Hover) -->
      <div class="absolute right-2 bottom-2 hidden group-hover:flex gap-1 bg-white/95 p-1 rounded-lg shadow-sm border border-gray-100">
         <button 
          (click)="$event.stopPropagation(); onPin.emit(note.id)"
          class="p-1.5 hover:bg-gray-100 rounded-full text-gray-500"
          [title]="note.isPinned ? '\uACE0\uC815 \uD574\uC81C' : '\uC0C1\uB2E8 \uACE0\uC815'"
        >
          <app-icon name="pin" [size]="14" [className]="note.isPinned ? 'text-blue-500' : ''"></app-icon>
        </button>
        <button 
          (click)="$event.stopPropagation(); onDelete.emit(note.id)"
          class="p-1.5 hover:bg-red-50 rounded-full text-red-500"
          title="\uC0AD\uC81C"
        >
          <app-icon name="trash-2" [size]="14"></app-icon>
        </button>
      </div>
    </div>
  `
    }]
  }], null, { note: [{
    type: Input
  }], onClick: [{
    type: Output
  }], onPin: [{
    type: Output
  }], onDelete: [{
    type: Output
  }], onLongPress: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoteCardComponent, { className: "NoteCardComponent", filePath: "src/app/modules/note/mobile/components/note-card/note-card.component.ts", lineNumber: 90 });
})();

// src/app/modules/note/mobile/components/sidebar-drawer/sidebar-drawer.component.ts
function SidebarDrawerComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 15);
    \u0275\u0275text(1, " Google \uACC4\uC815 \uB85C\uADF8\uC778 ");
  }
  if (rf & 2) {
    \u0275\u0275property("size", 20);
  }
}
function SidebarDrawerComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\uB85C\uADF8\uC544\uC6C3");
    \u0275\u0275elementEnd();
  }
}
function SidebarDrawerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function SidebarDrawerComponent_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275text(5, "Easy Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
    \u0275\u0275listener("click", function SidebarDrawerComponent_Conditional_0_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSyncSettings.emit());
    });
    \u0275\u0275element(10, "app-icon", 8);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\uB3D9\uAE30\uD654 \uBC0F \uBC31\uC5C5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275element(14, "app-icon", 10);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\uC124\uC815");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275element(18, "app-icon", 11);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "\uC7A0\uAE08 \uC124\uC815");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "button", 13);
    \u0275\u0275listener("click", function SidebarDrawerComponent_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login.emit());
    });
    \u0275\u0275conditionalCreate(23, SidebarDrawerComponent_Conditional_0_Conditional_23_Template, 2, 1)(24, SidebarDrawerComponent_Conditional_0_Conditional_24_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.isLoggedIn ? "user@example.com" : "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4");
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.isLoggedIn ? 23 : 24);
  }
}
var SidebarDrawerComponent = class _SidebarDrawerComponent {
  isOpen = false;
  isLoggedIn = false;
  close = new EventEmitter();
  login = new EventEmitter();
  openSyncSettings = new EventEmitter();
  static \u0275fac = function SidebarDrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarDrawerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarDrawerComponent, selectors: [["app-sidebar-drawer"]], inputs: { isOpen: "isOpen", isLoggedIn: "isLoggedIn" }, outputs: { close: "close", login: "login", openSyncSettings: "openSyncSettings" }, decls: 1, vars: 1, consts: [[1, "absolute", "inset-0", "z-40"], [1, "absolute", "inset-0", "bg-black/50", 3, "click"], [1, "absolute", "top-0", "left-0", "h-full", "w-3/4", "bg-white", "z-50", "shadow-2xl", "animate-slide-in", "p-6"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-blue-600", "mb-1"], [1, "text-gray-400", "text-sm"], [1, "space-y-6"], [1, "flex", "items-center", "gap-3", "text-gray-700", "p-2", "hover:bg-gray-50", "rounded-lg", "cursor-pointer", 3, "click"], ["name", "cloud", 3, "size"], [1, "flex", "items-center", "gap-3", "text-gray-700", "p-2", "hover:bg-gray-50", "rounded-lg", "cursor-pointer"], ["name", "settings", 3, "size"], ["name", "lock", 3, "size"], [1, "absolute", "bottom-8", "left-6", "right-6"], [1, "w-full", "bg-gray-800", "text-white", "py-3", "rounded-xl", "flex", "items-center", "justify-center", "gap-2", "hover:bg-gray-900", 3, "click"], [1, "w-full", "text-center"], ["name", "google", "className", "mr-2", 3, "size"]], template: function SidebarDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SidebarDrawerComponent_Conditional_0_Template, 25, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n.animate-slide-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n/*# sourceMappingURL=sidebar-drawer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarDrawerComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar-drawer", standalone: true, imports: [CommonModule, IconComponent], template: `
    @if (isOpen) {
      <div class="absolute inset-0 z-40">
        <div 
          class="absolute inset-0 bg-black/50"
          (click)="close.emit()"
        ></div>
        <div class="absolute top-0 left-0 h-full w-3/4 bg-white z-50 shadow-2xl animate-slide-in p-6">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-blue-600 mb-1">Easy Note</h2>
            <p class="text-gray-400 text-sm">{{ isLoggedIn ? 'user@example.com' : '\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4' }}</p>
          </div>

          <div class="space-y-6">
            <div 
              (click)="openSyncSettings.emit()"
              class="flex items-center gap-3 text-gray-700 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <app-icon name="cloud" [size]="20"></app-icon>
              <span>\uB3D9\uAE30\uD654 \uBC0F \uBC31\uC5C5</span>
            </div>
            <div class="flex items-center gap-3 text-gray-700 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <app-icon name="settings" [size]="20"></app-icon>
              <span>\uC124\uC815</span>
            </div>
            <div class="flex items-center gap-3 text-gray-700 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <app-icon name="lock" [size]="20"></app-icon>
              <span>\uC7A0\uAE08 \uC124\uC815</span>
            </div>
          </div>
          
          <div class="absolute bottom-8 left-6 right-6">
            <button 
              class="w-full bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900"
              (click)="login.emit()"
            >
              @if (!isLoggedIn) {
                <app-icon name="google" [size]="20" className="mr-2"></app-icon>
                Google \uACC4\uC815 \uB85C\uADF8\uC778
              } @else {
                <span class="w-full text-center">\uB85C\uADF8\uC544\uC6C3</span>
              }
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;592eabb651147cdec3707e32e332d4f8c7c83b09d4b59175227585800a7077d8;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/mobile/components/sidebar-drawer/sidebar-drawer.component.ts */\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n.animate-slide-in {\n  animation: slideIn 0.3s ease-out;\n}\n/*# sourceMappingURL=sidebar-drawer.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], isLoggedIn: [{
    type: Input
  }], close: [{
    type: Output
  }], login: [{
    type: Output
  }], openSyncSettings: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarDrawerComponent, { className: "SidebarDrawerComponent", filePath: "src/app/modules/note/mobile/components/sidebar-drawer/sidebar-drawer.component.ts", lineNumber: 67 });
})();

// src/app/modules/note/mobile/components/category-manager/category-manager.component.ts
function CategoryManagerComponent_Conditional_0_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("dragstart", function CategoryManagerComponent_Conditional_0_For_10_Conditional_0_Template_div_dragstart_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const \u0275$index_19_r4 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragStart($event, \u0275$index_19_r4));
    })("dragover", function CategoryManagerComponent_Conditional_0_For_10_Conditional_0_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function CategoryManagerComponent_Conditional_0_For_10_Conditional_0_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const \u0275$index_19_r4 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, \u0275$index_19_r4));
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "button", 16);
    \u0275\u0275listener("click", function CategoryManagerComponent_Conditional_0_For_10_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const cat_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCategory.emit(cat_r5));
    });
    \u0275\u0275element(5, "app-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275element(7, "app-icon", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const cat_r5 = ctx_r5.$implicit;
    const \u0275$index_19_r4 = ctx_r5.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-50", ctx_r1.draggedIndex === \u0275$index_19_r4)("border-2", ctx_r1.draggedIndex === \u0275$index_19_r4)("border-blue-200", ctx_r1.draggedIndex === \u0275$index_19_r4)("bg-blue-50", ctx_r1.draggedIndex === \u0275$index_19_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
  }
}
function CategoryManagerComponent_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CategoryManagerComponent_Conditional_0_For_10_Conditional_0_Template, 8, 11, "div", 12);
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    \u0275\u0275conditional(cat_r5 !== "\uC804\uCCB4" ? 0 : -1);
  }
}
function CategoryManagerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
    \u0275\u0275text(4, "\uD3F4\uB354 \uAD00\uB9AC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function CategoryManagerComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "app-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
    \u0275\u0275repeaterCreate(9, CategoryManagerComponent_Conditional_0_For_10_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryManagerComponent_Conditional_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCategoryName, $event) || (ctx_r1.newCategoryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function CategoryManagerComponent_Conditional_0_Template_input_keydown_enter_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addCategory());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function CategoryManagerComponent_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addCategory());
    });
    \u0275\u0275text(15, " \uCD94\uAC00 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCategoryName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newCategoryName.trim());
  }
}
var CategoryManagerComponent = class _CategoryManagerComponent {
  isOpen = false;
  categories = [];
  close = new EventEmitter();
  addNewCategory = new EventEmitter();
  deleteCategory = new EventEmitter();
  reorderCategories = new EventEmitter();
  newCategoryName = "";
  draggedIndex = null;
  addCategory() {
    const name = this.newCategoryName.trim();
    if (name && !this.categories.includes(name)) {
      this.addNewCategory.emit(name);
      this.newCategoryName = "";
    }
  }
  onDragStart(event, index) {
    this.draggedIndex = index;
    event.dataTransfer?.setData("text/plain", index.toString());
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDrop(event, dropIndex) {
    event.preventDefault();
    if (this.draggedIndex === null || this.draggedIndex === dropIndex) {
      this.draggedIndex = null;
      return;
    }
    const newCats = [...this.categories];
    const [draggedItem] = newCats.splice(this.draggedIndex, 1);
    newCats.splice(dropIndex, 0, draggedItem);
    this.reorderCategories.emit(newCats);
    this.draggedIndex = null;
  }
  static \u0275fac = function CategoryManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryManagerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryManagerComponent, selectors: [["app-category-manager"]], inputs: { isOpen: "isOpen", categories: "categories" }, outputs: { close: "close", addNewCategory: "addNewCategory", deleteCategory: "deleteCategory", reorderCategories: "reorderCategories" }, decls: 1, vars: 1, consts: [[1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/50", "p-4"], [1, "bg-white", "rounded-2xl", "w-full", "max-w-sm", "overflow-hidden", "shadow-2xl", "flex", "flex-col", "max-h-[80vh]"], [1, "p-4", "border-b", "border-gray-100", "flex", "justify-between", "items-center"], [1, "font-bold", "text-lg"], [1, "text-gray-400", "hover:text-gray-600", 3, "click"], ["name", "x", 3, "size"], [1, "flex-1", "overflow-y-auto", "p-4"], [1, "space-y-2"], [1, "p-4", "border-t", "border-gray-100", "bg-gray-50"], [1, "flex", "gap-2"], ["type", "text", "placeholder", "\uC0C8 \uD3F4\uB354 \uC774\uB984", 1, "flex-1", "px-3", "py-2", "rounded-lg", "border", "border-gray-200", "text-sm", "focus:outline-none", "focus:border-blue-500", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "text-sm", "font-bold", "hover:bg-blue-700", "disabled:opacity-50", 3, "click", "disabled"], ["draggable", "true", 1, "flex", "items-center", "justify-between", "bg-gray-50", "p-3", "rounded-lg", "group", "transition-all", "duration-200", 3, "opacity-50", "border-2", "border-blue-200", "bg-blue-50"], ["draggable", "true", 1, "flex", "items-center", "justify-between", "bg-gray-50", "p-3", "rounded-lg", "group", "transition-all", "duration-200", 3, "dragstart", "dragover", "drop"], [1, "font-medium", "text-gray-700"], [1, "flex", "items-center", "gap-1"], [1, "p-2", "text-gray-400", "hover:text-red-500", 3, "click"], ["name", "trash-2", 3, "size"], [1, "p-2", "text-gray-300", "cursor-grab", "active:cursor-grabbing", "hover:text-gray-500"], ["name", "grip-vertical", 3, "size"]], template: function CategoryManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CategoryManagerComponent_Conditional_0_Template, 16, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryManagerComponent, [{
    type: Component,
    args: [{
      selector: "app-category-manager",
      standalone: true,
      imports: [CommonModule, FormsModule, IconComponent],
      template: `
    @if (isOpen) {
      <div class="absolute inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div class="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
          <div class="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-bold text-lg">\uD3F4\uB354 \uAD00\uB9AC</h3>
            <button (click)="close.emit()" class="text-gray-400 hover:text-gray-600">
              <app-icon name="x" [size]="20"></app-icon>
            </button>
          </div>
          
          <div class="flex-1 overflow-y-auto p-4">
            <div class="space-y-2">
              @for (cat of categories; track cat; let i = $index) {
                @if (cat !== '\uC804\uCCB4') {
                  <div 
                    class="flex items-center justify-between bg-gray-50 p-3 rounded-lg group transition-all duration-200"
                    [class.opacity-50]="draggedIndex === i"
                    [class.border-2]="draggedIndex === i"
                    [class.border-blue-200]="draggedIndex === i"
                    [class.bg-blue-50]="draggedIndex === i"
                    draggable="true"
                    (dragstart)="onDragStart($event, i)"
                    (dragover)="onDragOver($event)"
                    (drop)="onDrop($event, i)"
                  >
                    <span class="font-medium text-gray-700">{{ cat }}</span>
                    <div class="flex items-center gap-1">
                      <button 
                        (click)="deleteCategory.emit(cat)"
                        class="p-2 text-gray-400 hover:text-red-500"
                      >
                        <app-icon name="trash-2" [size]="16"></app-icon>
                      </button>
                      
                      <div class="p-2 text-gray-300 cursor-grab active:cursor-grabbing hover:text-gray-500">
                        <app-icon name="grip-vertical" [size]="16"></app-icon>
                      </div>
                    </div>
                  </div>
                }
              }
            </div>
          </div>

          <div class="p-4 border-t border-gray-100 bg-gray-50">
            <div class="flex gap-2">
              <input 
                type="text" 
                [(ngModel)]="newCategoryName"
                (keydown.enter)="addCategory()"
                placeholder="\uC0C8 \uD3F4\uB354 \uC774\uB984" 
                class="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-500"
              />
              <button 
                (click)="addCategory()"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 disabled:opacity-50"
                [disabled]="!newCategoryName.trim()"
              >
                \uCD94\uAC00
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `
    }]
  }], null, { isOpen: [{
    type: Input
  }], categories: [{
    type: Input
  }], close: [{
    type: Output
  }], addNewCategory: [{
    type: Output
  }], deleteCategory: [{
    type: Output
  }], reorderCategories: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryManagerComponent, { className: "CategoryManagerComponent", filePath: "src/app/modules/note/mobile/components/category-manager/category-manager.component.ts", lineNumber: 78 });
})();

// src/app/modules/note/mobile/components/context-menu-overlay/context-menu-overlay.component.ts
function ContextMenuOverlayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, "\uC791\uC5C5\uC744 \uC120\uD0DD\uD558\uC138\uC694");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.pin.emit(ctx_r1.note.id);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275element(10, "app-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 7);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.duplicate.emit(ctx_r1.note);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275element(15, "app-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 10);
    \u0275\u0275text(17, "\uB178\uD2B8 \uBCF5\uC81C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 7);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.addWidget.emit(ctx_r1.note);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275element(20, "app-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22, "\uC704\uC82F \uCD94\uAC00");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 15);
    \u0275\u0275elementStart(24, "button", 16);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.delete.emit(ctx_r1.note.id);
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(25, "div", 17);
    \u0275\u0275element(26, "app-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 19);
    \u0275\u0275text(28, "\uC0AD\uC81C");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 20)(30, "button", 21);
    \u0275\u0275listener("click", function ContextMenuOverlayComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(31, " \uCDE8\uC18C ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.note.title || "\uC81C\uBAA9 \uC5C6\uC74C", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 20)("className", ctx_r1.note.isPinned ? "fill-blue-600" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.note.isPinned ? "\uACE0\uC815 \uD574\uC81C" : "\uC0C1\uB2E8 \uACE0\uC815", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 20);
  }
}
var ContextMenuOverlayComponent = class _ContextMenuOverlayComponent {
  note = null;
  close = new EventEmitter();
  pin = new EventEmitter();
  delete = new EventEmitter();
  duplicate = new EventEmitter();
  addWidget = new EventEmitter();
  static \u0275fac = function ContextMenuOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextMenuOverlayComponent, selectors: [["app-context-menu-overlay"]], inputs: { note: "note" }, outputs: { close: "close", pin: "pin", delete: "delete", duplicate: "duplicate", addWidget: "addWidget" }, decls: 1, vars: 1, consts: [[1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/60", "p-6", "animate-fade-in"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/60", "p-6", "animate-fade-in", 3, "click"], [1, "bg-white", "w-full", "max-w-xs", "rounded-2xl", "shadow-2xl", "overflow-hidden", "animate-scale-up", 3, "click"], [1, "bg-gray-100", "p-4", "border-b", "border-gray-200"], [1, "font-bold", "text-gray-800", "text-lg", "line-clamp-1"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "p-2"], [1, "w-full", "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-gray-50", "transition-colors", "text-left", 3, "click"], [1, "w-10", "h-10", "rounded-full", "bg-blue-50", "text-blue-600", "flex", "items-center", "justify-center"], ["name", "pin", 3, "size", "className"], [1, "font-medium", "text-gray-700"], [1, "w-10", "h-10", "rounded-full", "bg-green-50", "text-green-600", "flex", "items-center", "justify-center"], ["name", "copy", 3, "size"], [1, "w-10", "h-10", "rounded-full", "bg-purple-50", "text-purple-600", "flex", "items-center", "justify-center"], ["name", "layout", 3, "size"], [1, "h-px", "bg-gray-100", "my-1"], [1, "w-full", "flex", "items-center", "gap-3", "p-3", "rounded-xl", "hover:bg-red-50", "transition-colors", "text-left", "group", 3, "click"], [1, "w-10", "h-10", "rounded-full", "bg-red-50", "text-red-500", "flex", "items-center", "justify-center", "group-hover:bg-red-100", "transition-colors"], ["name", "trash-2", 3, "size"], [1, "font-medium", "text-red-500"], [1, "p-2", "border-t", "border-gray-100"], [1, "w-full", "py-3", "text-center", "text-gray-500", "hover:text-gray-800", "font-medium", 3, "click"]], template: function ContextMenuOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ContextMenuOverlayComponent_Conditional_0_Template, 32, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.note ? 0 : -1);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_scale-up {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n/*# sourceMappingURL=context-menu-overlay.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuOverlayComponent, [{
    type: Component,
    args: [{ selector: "app-context-menu-overlay", standalone: true, imports: [CommonModule, IconComponent], template: `
    @if (note) {
      <div 
        class="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-6 animate-fade-in"
        (click)="close.emit()"
      >
        <div 
          class="bg-white w-full max-w-xs rounded-2xl shadow-2xl overflow-hidden animate-scale-up"
          (click)="$event.stopPropagation()"
        >
          <div class="bg-gray-100 p-4 border-b border-gray-200">
            <h3 class="font-bold text-gray-800 text-lg line-clamp-1">
              {{ note.title || "\uC81C\uBAA9 \uC5C6\uC74C" }}
            </h3>
            <p class="text-xs text-gray-500 mt-1">\uC791\uC5C5\uC744 \uC120\uD0DD\uD558\uC138\uC694</p>
          </div>
          
          <div class="p-2">
            <button 
              (click)="pin.emit(note.id); close.emit()"
              class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
            >
              <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <app-icon name="pin" [size]="20" [className]="note.isPinned ? 'fill-blue-600' : ''"></app-icon>
              </div>
              <span class="font-medium text-gray-700">
                {{ note.isPinned ? '\uACE0\uC815 \uD574\uC81C' : '\uC0C1\uB2E8 \uACE0\uC815' }}
              </span>
            </button>

            <button 
              (click)="duplicate.emit(note); close.emit()"
              class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
            >
              <div class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                <app-icon name="copy" [size]="20"></app-icon>
              </div>
              <span class="font-medium text-gray-700">\uB178\uD2B8 \uBCF5\uC81C</span>
            </button>

            <button 
              (click)="addWidget.emit(note); close.emit()"
              class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
            >
              <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                <app-icon name="layout" [size]="20"></app-icon>
              </div>
              <span class="font-medium text-gray-700">\uC704\uC82F \uCD94\uAC00</span>
            </button>

            <div class="h-px bg-gray-100 my-1"></div>

            <button 
              (click)="delete.emit(note.id); close.emit()"
              class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors text-left group"
            >
              <div class="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <app-icon name="trash-2" [size]="20"></app-icon>
              </div>
              <span class="font-medium text-red-500">\uC0AD\uC81C</span>
            </button>
          </div>
          
          <div class="p-2 border-t border-gray-100">
             <button (click)="close.emit()" class="w-full py-3 text-center text-gray-500 hover:text-gray-800 font-medium">
               \uCDE8\uC18C
             </button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:scss;c79286f1c5d1ae73a848ad77ac44db1918bbaccf504039ea6e639d5792a6f499;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/mobile/components/context-menu-overlay/context-menu-overlay.component.ts */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n@keyframes scale-up {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale-up {\n  animation: scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n/*# sourceMappingURL=context-menu-overlay.component.css.map */\n"] }]
  }], null, { note: [{
    type: Input
  }], close: [{
    type: Output
  }], pin: [{
    type: Output
  }], delete: [{
    type: Output
  }], duplicate: [{
    type: Output
  }], addWidget: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextMenuOverlayComponent, { className: "ContextMenuOverlayComponent", filePath: "src/app/modules/note/mobile/components/context-menu-overlay/context-menu-overlay.component.ts", lineNumber: 99 });
})();

// src/app/modules/note/mobile/pages/home/home.component.ts
var _c02 = (a0, a1) => ({ "bg-blue-600 text-white shadow-md": a0, "bg-gray-100 text-gray-500 hover:bg-gray-200": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function MobileHomeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-splash");
  }
}
function MobileHomeComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 23);
    \u0275\u0275element(2, "app-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275listener("ngModelChange", function MobileHomeComponent_Conditional_2_Conditional_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.noteService.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 18);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.noteService.searchQuery());
  }
}
function MobileHomeComponent_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function MobileHomeComponent_Conditional_2_For_14_Template_button_click_0_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.noteService.currentCategory.set(cat_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c02, ctx_r1.noteService.currentCategory() === cat_r5, ctx_r1.noteService.currentCategory() !== cat_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r5, " ");
  }
}
function MobileHomeComponent_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 27);
    \u0275\u0275element(2, "app-icon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uC791\uC131\uB41C \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 32);
  }
}
function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("dragstart", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_div_dragstart_0_listener($event) {
      const note_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleNoteDragStart($event, note_r7));
    })("dragover", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleNoteDragOver($event));
    })("drop", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_div_drop_0_listener($event) {
      const note_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleNoteDrop($event, note_r7));
    });
    \u0275\u0275elementStart(1, "app-note-card", 34);
    \u0275\u0275listener("onClick", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_app_note_card_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditNote($event));
    })("onPin", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_app_note_card_onPin_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handlePinNote($event));
    })("onDelete", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_app_note_card_onDelete_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleDeleteNote($event));
    })("onLongPress", function MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template_app_note_card_onLongPress_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedNoteForMenu.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-50", (ctx_r1.draggedNote == null ? null : ctx_r1.draggedNote.id) === note_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("note", note_r7);
  }
}
function MobileHomeComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2", 29);
    \u0275\u0275element(2, "app-icon", 30);
    \u0275\u0275text(3, " \uACE0\uC815\uB41C \uB178\uD2B8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275repeaterCreate(5, MobileHomeComponent_Conditional_2_Conditional_17_For_6_Template, 2, 3, "div", 32, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 12);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pinnedNotes());
  }
}
function MobileHomeComponent_Conditional_2_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 35);
    \u0275\u0275text(1, "\uAE30\uD0C0 \uB178\uD2B8");
    \u0275\u0275elementEnd();
  }
}
function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("dragstart", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_div_dragstart_0_listener($event) {
      const note_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleNoteDragStart($event, note_r9));
    })("dragover", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleNoteDragOver($event));
    })("drop", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_div_drop_0_listener($event) {
      const note_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleNoteDrop($event, note_r9));
    });
    \u0275\u0275elementStart(1, "app-note-card", 34);
    \u0275\u0275listener("onClick", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_app_note_card_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleEditNote($event));
    })("onPin", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_app_note_card_onPin_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handlePinNote($event));
    })("onDelete", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_app_note_card_onDelete_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleDeleteNote($event));
    })("onLongPress", function MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template_app_note_card_onLongPress_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedNoteForMenu.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-50", (ctx_r1.draggedNote == null ? null : ctx_r1.draggedNote.id) === note_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("note", note_r9);
  }
}
function MobileHomeComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275conditionalCreate(1, MobileHomeComponent_Conditional_2_Conditional_18_Conditional_1_Template, 2, 0, "h2", 35);
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275repeaterCreate(3, MobileHomeComponent_Conditional_2_Conditional_18_For_4_Template, 2, 3, "div", 32, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pinnedNotes().length > 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.otherNotes());
  }
}
function MobileHomeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function MobileHomeComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen.set(true));
    });
    \u0275\u0275element(3, "app-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 5);
    \u0275\u0275text(5, "Easy Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
    \u0275\u0275listener("click", function MobileHomeComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCategoryManager.set(true));
    });
    \u0275\u0275element(8, "app-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function MobileHomeComponent_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isSearchVisible.set(!ctx_r1.isSearchVisible()));
    });
    \u0275\u0275element(10, "app-icon", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, MobileHomeComponent_Conditional_2_Conditional_11_Template, 4, 2, "div", 11);
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275repeaterCreate(13, MobileHomeComponent_Conditional_2_For_14_Template, 2, 5, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275conditionalCreate(16, MobileHomeComponent_Conditional_2_Conditional_16_Template, 5, 1, "div", 15);
    \u0275\u0275conditionalCreate(17, MobileHomeComponent_Conditional_2_Conditional_17_Template, 7, 1, "div", 16);
    \u0275\u0275conditionalCreate(18, MobileHomeComponent_Conditional_2_Conditional_18_Template, 5, 1, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275listener("click", function MobileHomeComponent_Conditional_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleCreateNote());
    });
    \u0275\u0275element(20, "app-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "app-sidebar-drawer", 20);
    \u0275\u0275listener("close", function MobileHomeComponent_Conditional_2_Template_app_sidebar_drawer_close_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen.set(false));
    })("login", function MobileHomeComponent_Conditional_2_Template_app_sidebar_drawer_login_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleLogin());
    })("openSyncSettings", function MobileHomeComponent_Conditional_2_Template_app_sidebar_drawer_openSyncSettings_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "app-category-manager", 21);
    \u0275\u0275listener("close", function MobileHomeComponent_Conditional_2_Template_app_category_manager_close_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCategoryManager.set(false));
    })("addNewCategory", function MobileHomeComponent_Conditional_2_Template_app_category_manager_addNewCategory_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleAddCategory($event));
    })("deleteCategory", function MobileHomeComponent_Conditional_2_Template_app_category_manager_deleteCategory_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDeleteCategory($event));
    })("reorderCategories", function MobileHomeComponent_Conditional_2_Template_app_category_manager_reorderCategories_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.noteService.categories.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "app-context-menu-overlay", 22);
    \u0275\u0275listener("close", function MobileHomeComponent_Conditional_2_Template_app_context_menu_overlay_close_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedNoteForMenu.set(null));
    })("pin", function MobileHomeComponent_Conditional_2_Template_app_context_menu_overlay_pin_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePinNote($event));
    })("delete", function MobileHomeComponent_Conditional_2_Template_app_context_menu_overlay_delete_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDeleteNote($event));
    })("duplicate", function MobileHomeComponent_Conditional_2_Template_app_context_menu_overlay_duplicate_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDuplicateNote($event));
    })("addWidget", function MobileHomeComponent_Conditional_2_Template_app_context_menu_overlay_addWidget_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleAddWidget($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("bg-gray-100", ctx_r1.isSearchVisible());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSearchVisible() ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.noteService.categories());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.noteService.filteredNotes().length === 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pinnedNotes().length > 0 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.otherNotes().length > 0 ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 28);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.sidebarOpen())("isLoggedIn", ctx_r1.isLoggedIn());
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showCategoryManager())("categories", ctx_r1.noteService.categories());
    \u0275\u0275advance();
    \u0275\u0275property("note", ctx_r1.selectedNoteForMenu());
  }
}
var MobileHomeComponent = class _MobileHomeComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  noteService = inject(NoteService);
  showSplash = signal(false, ...ngDevMode ? [{ debugName: "showSplash" }] : []);
  sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
  isSearchVisible = signal(false, ...ngDevMode ? [{ debugName: "isSearchVisible" }] : []);
  showCategoryManager = signal(false, ...ngDevMode ? [{ debugName: "showCategoryManager" }] : []);
  selectedNoteForMenu = signal(null, ...ngDevMode ? [{ debugName: "selectedNoteForMenu" }] : []);
  isLoggedIn = signal(false, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
  draggedNote = null;
  pinnedNotes = computed(() => this.noteService.filteredNotes().filter((n) => n.isPinned), ...ngDevMode ? [{ debugName: "pinnedNotes" }] : []);
  otherNotes = computed(() => this.noteService.filteredNotes().filter((n) => !n.isPinned), ...ngDevMode ? [{ debugName: "otherNotes" }] : []);
  ngOnInit() {
  }
  handleCreateNote() {
    this.router.navigate(["/note/mobile/edit", "new"]);
  }
  handleEditNote(note) {
    this.router.navigate(["/note/mobile/edit", note.id]);
  }
  handleDeleteNote(id) {
    if (confirm("\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      this.noteService.deleteNote(id);
    }
  }
  handlePinNote(id) {
    this.noteService.togglePin(id);
  }
  handleDuplicateNote(note) {
    this.noteService.duplicateNote(note.id);
    alert("\uB178\uD2B8\uAC00 \uBCF5\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  handleAddWidget(note) {
    alert(`'${note.title}' \uB178\uD2B8\uAC00 \uD648 \uD654\uBA74 \uC704\uC82F\uC5D0 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  }
  handleAddCategory(name) {
    if (!this.noteService.categories().includes(name)) {
      this.noteService.categories.update((cats) => [...cats, name]);
    } else {
      alert("\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uD3F4\uB354\uBA85\uC785\uB2C8\uB2E4.");
    }
  }
  handleDeleteCategory(name) {
    if (confirm(`'${name}' \uD3F4\uB354\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)) {
      this.noteService.categories.update((cats) => cats.filter((c) => c !== name));
      if (this.noteService.currentCategory() === name) {
        this.noteService.currentCategory.set("\uC804\uCCB4");
      }
    }
  }
  handleLogin() {
    if (this.isLoggedIn()) {
      this.isLoggedIn.set(false);
      alert("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    } else {
      this.isLoggedIn.set(true);
      alert("\uAD6C\uAE00 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    }
  }
  openSettings() {
    this.sidebarOpen.set(false);
    this.router.navigate(["/note/mobile/settings"]);
  }
  // Note Drag & Drop
  handleNoteDragStart(event, note) {
    this.draggedNote = note;
  }
  handleNoteDragOver(event) {
    event.preventDefault();
  }
  handleNoteDrop(event, targetNote) {
    event.preventDefault();
    if (!this.draggedNote || this.draggedNote.id === targetNote.id)
      return;
    if (this.draggedNote.isPinned !== targetNote.isPinned)
      return;
    this.noteService.notes.update((currentNotes) => {
      const newNotes = [...currentNotes];
      const draggedIndex = newNotes.findIndex((n) => n.id === this.draggedNote.id);
      const targetIndex = newNotes.findIndex((n) => n.id === targetNote.id);
      if (draggedIndex > -1 && targetIndex > -1) {
        newNotes.splice(draggedIndex, 1);
        newNotes.splice(targetIndex, 0, this.draggedNote);
      }
      return newNotes;
    });
    this.draggedNote = null;
  }
  static \u0275fac = function MobileHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileHomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileHomeComponent, selectors: [["app-mobile-home"]], decls: 3, vars: 1, consts: [[1, "w-full", "h-[100vh]", "bg-white", "flex", "flex-col", "overflow-hidden", "relative"], [1, "p-4", "pt-6", "bg-white", "sticky", "top-0", "z-10"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "p-2", "-ml-2", "text-gray-600", "rounded-full", "hover:bg-gray-100", 3, "click"], ["name", "menu"], [1, "text-xl", "font-bold", "text-gray-800"], [1, "flex", "gap-2"], ["title", "\uD3F4\uB354 \uAD00\uB9AC", 1, "p-2", "text-gray-600", "rounded-full", "hover:bg-gray-100", 3, "click"], ["name", "folder-edit"], [1, "p-2", "-mr-2", "text-gray-600", "rounded-full", "hover:bg-gray-100", 3, "click"], ["name", "search"], [1, "relative", "mb-4", "animate-fade-in"], [1, "flex", "gap-2", "overflow-x-auto", "pb-2", "scrollbar-hide"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "whitespace-nowrap", "transition-colors", 3, "ngClass"], [1, "flex-1", "overflow-y-auto", "px-4", "pb-20", "bg-gray-50"], [1, "flex", "flex-col", "items-center", "justify-center", "h-64", "text-gray-400"], [1, "mb-4", "mt-2"], [1, "mt-2"], [1, "absolute", "bottom-6", "right-6", "w-14", "h-14", "bg-blue-600", "text-white", "rounded-full", "shadow-lg", "flex", "items-center", "justify-center", "hover:bg-blue-700", "active:scale-90", "transition-all", "z-20", 3, "click"], ["name", "plus", 3, "size"], [3, "close", "login", "openSyncSettings", "isOpen", "isLoggedIn"], [3, "close", "addNewCategory", "deleteCategory", "reorderCategories", "isOpen", "categories"], [3, "close", "pin", "delete", "duplicate", "addWidget", "note"], [1, "absolute", "left-3", "top-2.5", "text-gray-400"], ["name", "search", 3, "size"], ["type", "text", "placeholder", "\uB178\uD2B8 \uAC80\uC0C9...", 1, "w-full", "bg-gray-100", "py-2", "pl-10", "pr-4", "rounded-xl", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-200", 3, "ngModelChange", "ngModel"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "whitespace-nowrap", "transition-colors", 3, "click", "ngClass"], [1, "w-16", "h-16", "bg-gray-200", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], ["name", "image", "className", "opacity-50", 3, "size"], [1, "text-xs", "font-bold", "text-gray-400", "mb-2", "flex", "items-center", "gap-1"], ["name", "pin", 3, "size"], [1, "grid", "grid-cols-2", "gap-3"], ["draggable", "true", 1, "h-full", 3, "opacity-50"], ["draggable", "true", 1, "h-full", 3, "dragstart", "dragover", "drop"], [3, "onClick", "onPin", "onDelete", "onLongPress", "note"], [1, "text-xs", "font-bold", "text-gray-400", "mb-2"]], template: function MobileHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, MobileHomeComponent_Conditional_1_Template, 1, 0, "app-splash")(2, MobileHomeComponent_Conditional_2_Template, 24, 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSplash() ? 1 : 2);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    SplashComponent,
    NoteCardComponent,
    SidebarDrawerComponent,
    CategoryManagerComponent,
    ContextMenuOverlayComponent
  ], styles: ["\n\n.scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileHomeComponent, [{
    type: Component,
    args: [{ selector: "app-mobile-home", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IconComponent,
      SplashComponent,
      NoteCardComponent,
      SidebarDrawerComponent,
      CategoryManagerComponent,
      ContextMenuOverlayComponent
    ], template: `
    <div class="w-full h-[100vh] bg-white flex flex-col overflow-hidden relative">
        
        @if (showSplash()) {
          <app-splash></app-splash>
        } @else {
          
          <!-- Header -->
          <div class="p-4 pt-6 bg-white sticky top-0 z-10">
            <div class="flex justify-between items-center mb-4">
              <button (click)="sidebarOpen.set(true)" class="p-2 -ml-2 text-gray-600 rounded-full hover:bg-gray-100">
                <app-icon name="menu"></app-icon>
              </button>
              <h1 class="text-xl font-bold text-gray-800">Easy Note</h1>
              <div class="flex gap-2">
                <button (click)="showCategoryManager.set(true)" class="p-2 text-gray-600 rounded-full hover:bg-gray-100" title="\uD3F4\uB354 \uAD00\uB9AC">
                  <app-icon name="folder-edit"></app-icon>
                </button>
                <button (click)="isSearchVisible.set(!isSearchVisible())" class="p-2 -mr-2 text-gray-600 rounded-full hover:bg-gray-100" [class.bg-gray-100]="isSearchVisible()">
                  <app-icon name="search"></app-icon>
                </button>
              </div>
            </div>

            <!-- Search Bar -->
            @if (isSearchVisible()) {
              <div class="relative mb-4 animate-fade-in">
                <div class="absolute left-3 top-2.5 text-gray-400">
                  <app-icon name="search" [size]="18"></app-icon>
                </div>
                <input 
                  type="text" 
                  placeholder="\uB178\uD2B8 \uAC80\uC0C9..." 
                  [ngModel]="noteService.searchQuery()"
                  (ngModelChange)="noteService.searchQuery.set($event)"
                  class="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            }

            <!-- Category Tabs -->
            <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              @for (cat of noteService.categories(); track cat) {
                <button
                  (click)="noteService.currentCategory.set(cat)"
                  [ngClass]="{
                    'bg-blue-600 text-white shadow-md': noteService.currentCategory() === cat,
                    'bg-gray-100 text-gray-500 hover:bg-gray-200': noteService.currentCategory() !== cat
                  }"
                  class="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
                >
                  {{ cat }}
                </button>
              }
            </div>
          </div>

          <!-- Note List (GRID LAYOUT) -->
          <div class="flex-1 overflow-y-auto px-4 pb-20 bg-gray-50">
            @if (noteService.filteredNotes().length === 0) {
              <div class="flex flex-col items-center justify-center h-64 text-gray-400">
                <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <app-icon name="image" [size]="32" className="opacity-50"></app-icon>
                </div>
                <p>\uC791\uC131\uB41C \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>
              </div>
            }

            <!-- Pinned Section -->
            @if (pinnedNotes().length > 0) {
              <div class="mb-4 mt-2">
                <h2 class="text-xs font-bold text-gray-400 mb-2 flex items-center gap-1">
                  <app-icon name="pin" [size]="12"></app-icon> \uACE0\uC815\uB41C \uB178\uD2B8
                </h2>
                <div class="grid grid-cols-2 gap-3">
                  @for (note of pinnedNotes(); track note.id) {
                    <div
                      draggable="true"
                      (dragstart)="handleNoteDragStart($event, note)"
                      (dragover)="handleNoteDragOver($event)"
                      (drop)="handleNoteDrop($event, note)"
                      [class.opacity-50]="draggedNote?.id === note.id"
                      class="h-full"
                    >
                      <app-note-card 
                        [note]="note" 
                        (onClick)="handleEditNote($event)"
                        (onPin)="handlePinNote($event)"
                        (onDelete)="handleDeleteNote($event)"
                        (onLongPress)="selectedNoteForMenu.set($event)"
                      ></app-note-card>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Normal Section -->
            @if (otherNotes().length > 0) {
              <div class="mt-2">
                @if (pinnedNotes().length > 0) {
                  <h2 class="text-xs font-bold text-gray-400 mb-2">\uAE30\uD0C0 \uB178\uD2B8</h2>
                }
                <div class="grid grid-cols-2 gap-3">
                  @for (note of otherNotes(); track note.id) {
                    <div
                      draggable="true"
                      (dragstart)="handleNoteDragStart($event, note)"
                      (dragover)="handleNoteDragOver($event)"
                      (drop)="handleNoteDrop($event, note)"
                      [class.opacity-50]="draggedNote?.id === note.id"
                      class="h-full"
                    >
                      <app-note-card 
                        [note]="note" 
                        (onClick)="handleEditNote($event)"
                        (onPin)="handlePinNote($event)"
                        (onDelete)="handleDeleteNote($event)"
                        (onLongPress)="selectedNoteForMenu.set($event)"
                      ></app-note-card>
                    </div>
                  }
                </div>
              </div>
            }
          </div>

          <!-- FAB -->
          <button 
            (click)="handleCreateNote()"
            class="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 active:scale-90 transition-all z-20"
          >
            <app-icon name="plus" [size]="28"></app-icon>
          </button>

          <!-- Sidebar Drawer -->
          <app-sidebar-drawer 
            [isOpen]="sidebarOpen()"
            [isLoggedIn]="isLoggedIn()"
            (close)="sidebarOpen.set(false)"
            (login)="handleLogin()"
            (openSyncSettings)="openSettings()"
          ></app-sidebar-drawer>

          <!-- Category Manager -->
          <app-category-manager
            [isOpen]="showCategoryManager()"
            [categories]="noteService.categories()"
            (close)="showCategoryManager.set(false)"
            (addNewCategory)="handleAddCategory($event)"
            (deleteCategory)="handleDeleteCategory($event)"
            (reorderCategories)="noteService.categories.set($event)"
          ></app-category-manager>

          <!-- Context Menu -->
          <app-context-menu-overlay
            [note]="selectedNoteForMenu()"
            (close)="selectedNoteForMenu.set(null)"
            (pin)="handlePinNote($event)"
            (delete)="handleDeleteNote($event)"
            (duplicate)="handleDuplicateNote($event)"
            (addWidget)="handleAddWidget($event)"
          ></app-context-menu-overlay>

        }
    </div>
  `, styles: ["/* angular:styles/component:scss;21e9fa9cc47e22dba61cd1668ff42f82cfbd0bbdf0cca8e54f56455f1078adbc;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/mobile/pages/home/home.component.ts */\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileHomeComponent, { className: "MobileHomeComponent", filePath: "src/app/modules/note/mobile/pages/home/home.component.ts", lineNumber: 210 });
})();
export {
  MobileHomeComponent
};
//# sourceMappingURL=chunk-QYED3NZ5.js.map
