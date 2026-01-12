import {
  ActivatedRoute,
  Router
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  DrawingCanvasComponent
} from "./chunk-5OXRQX4V.js";
import {
  AiService,
  IconComponent,
  NoteService
} from "./chunk-GIGBJXFY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/note/mobile/components/audio-player-sheet/audio-player-sheet.component.ts
function AudioPlayerSheetComponent_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r1.height, "%")("animation-duration", bar_r1.speed);
  }
}
function AudioPlayerSheetComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AudioPlayerSheetComponent_Conditional_10_For_1_Template, 1, 4, "div", 18, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.visualizerBars);
  }
}
function AudioPlayerSheetComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r3.height * 0.5, "%");
  }
}
function AudioPlayerSheetComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AudioPlayerSheetComponent_Conditional_11_For_1_Template, 1, 2, "div", 20, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.visualizerBars);
  }
}
var AudioPlayerSheetComponent = class _AudioPlayerSheetComponent {
  date = (/* @__PURE__ */ new Date()).toISOString();
  close = new EventEmitter();
  delete = new EventEmitter();
  isPlaying = true;
  progress = 0;
  currentTime = 0;
  totalTime = 180;
  intervalId;
  visualizerBars = Array.from({ length: 15 }, () => ({
    height: Math.floor(Math.random() * 60 + 20),
    speed: Math.random() * 0.4 + 0.4 + "s"
  }));
  ngOnInit() {
    this.startTimer();
  }
  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startTimer();
    } else {
      clearInterval(this.intervalId);
    }
  }
  startTimer() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.currentTime >= this.totalTime) {
        this.isPlaying = false;
        this.currentTime = 0;
        this.progress = 0;
        clearInterval(this.intervalId);
        return;
      }
      this.currentTime++;
      this.progress = this.currentTime / this.totalTime * 100;
    }, 1e3);
  }
  skip(seconds) {
    let newTime = this.currentTime + seconds;
    if (newTime < 0)
      newTime = 0;
    if (newTime > this.totalTime)
      newTime = this.totalTime;
    this.currentTime = newTime;
    this.progress = this.currentTime / this.totalTime * 100;
  }
  formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  static \u0275fac = function AudioPlayerSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioPlayerSheetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AudioPlayerSheetComponent, selectors: [["app-audio-player-sheet"]], inputs: { date: "date" }, outputs: { close: "close", delete: "delete" }, decls: 29, vars: 12, consts: [[1, "absolute", "inset-0", "z-50", "flex", "items-end", "justify-center", "bg-black/60", "animate-fade-in", 3, "click"], [1, "bg-white", "w-full", "rounded-t-3xl", "shadow-2xl", "p-6", "pb-12", "flex", "flex-col", "items-center", "animate-slide-up", 3, "click"], [1, "w-12", "h-1.5", "bg-gray-200", "rounded-full", "mb-6"], [1, "w-full", "mb-8", "text-center"], [1, "text-xl", "font-bold", "text-gray-800", "mb-1", "truncate"], [1, "text-sm", "text-gray-500"], [1, "flex", "items-center", "justify-center", "gap-1.5", "h-20", "mb-8", "w-full", "px-8"], [1, "w-full", "px-4", "mb-4"], ["type", "range", "min", "0", "max", "100", 1, "w-full", "h-2", "bg-gray-200", "rounded-lg", "appearance-none", "cursor-pointer", "accent-blue-600", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "text-xs", "text-gray-400", "mt-2", "font-mono"], [1, "flex", "items-center", "justify-center", "gap-8", "mb-8"], [1, "p-3", "text-gray-400", "hover:text-gray-600", "active:scale-95", "transition-transform", 3, "click"], ["name", "rewind-10", 3, "size"], [1, "w-16", "h-16", "rounded-full", "bg-blue-600", "text-white", "flex", "items-center", "justify-center", "shadow-xl", "hover:bg-blue-700", "active:scale-95", "transition-all", 3, "click"], ["className", "fill-current", 3, "name", "size"], ["name", "forward-10", 3, "size"], [1, "flex", "gap-4"], [1, "text-red-500", "hover:bg-red-50", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "w-2", "bg-blue-500", "rounded-full", "animate-wave", 3, "height", "animation-duration"], [1, "w-2", "bg-blue-500", "rounded-full", "animate-wave"], [1, "w-2", "bg-gray-300", "rounded-full", 3, "height"], [1, "w-2", "bg-gray-300", "rounded-full"]], template: function AudioPlayerSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AudioPlayerSheetComponent_Template_div_click_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AudioPlayerSheetComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "\uC624\uB514\uC624 \uC7AC\uC0DD \uC911");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275conditionalCreate(10, AudioPlayerSheetComponent_Conditional_10_Template, 2, 0)(11, AudioPlayerSheetComponent_Conditional_11_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AudioPlayerSheetComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.progress, $event) || (ctx.progress = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "span");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 10)(20, "button", 11);
      \u0275\u0275listener("click", function AudioPlayerSheetComponent_Template_button_click_20_listener() {
        return ctx.skip(-10);
      });
      \u0275\u0275element(21, "app-icon", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function AudioPlayerSheetComponent_Template_button_click_22_listener() {
        return ctx.togglePlay();
      });
      \u0275\u0275element(23, "app-icon", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 11);
      \u0275\u0275listener("click", function AudioPlayerSheetComponent_Template_button_click_24_listener() {
        return ctx.skip(10);
      });
      \u0275\u0275element(25, "app-icon", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 16)(27, "button", 17);
      \u0275\u0275listener("click", function AudioPlayerSheetComponent_Template_button_click_27_listener() {
        return ctx.delete.emit();
      });
      \u0275\u0275text(28, " \uC0AD\uC81C\uD558\uAE30 ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\uC74C\uC131 \uBA54\uBAA8 ", \u0275\u0275pipeBind2(6, 9, ctx.date, "MM.dd HH:mm"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isPlaying ? 10 : 11);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.progress);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formatTime(ctx.currentTime));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatTime(ctx.totalTime));
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.isPlaying ? "pause" : "play")("size", 32);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, IconComponent, DatePipe], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.animate-slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 100% {\n    transform: scaleY(0.5);\n  }\n  50% {\n    transform: scaleY(1);\n  }\n}\n.animate-wave[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_wave;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=audio-player-sheet.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioPlayerSheetComponent, [{
    type: Component,
    args: [{ selector: "app-audio-player-sheet", standalone: true, imports: [CommonModule, FormsModule, IconComponent], template: `
    <div class="absolute inset-0 z-50 flex items-end justify-center bg-black/60 animate-fade-in" (click)="close.emit()">
      <div 
        class="bg-white w-full rounded-t-3xl shadow-2xl p-6 pb-12 flex flex-col items-center animate-slide-up"
        (click)="$event.stopPropagation()"
      >
        <!-- Drag Handle -->
        <div class="w-12 h-1.5 bg-gray-200 rounded-full mb-6"></div>

        <!-- Header Info -->
        <div class="w-full mb-8 text-center">
          <h3 class="text-xl font-bold text-gray-800 mb-1 truncate">\uC74C\uC131 \uBA54\uBAA8 {{ date | date:'MM.dd HH:mm' }}</h3>
          <p class="text-sm text-gray-500">\uC624\uB514\uC624 \uC7AC\uC0DD \uC911</p>
        </div>

        <!-- Visualizer (Playing Animation) -->
        <div class="flex items-center justify-center gap-1.5 h-20 mb-8 w-full px-8">
          @if (isPlaying) {
            @for (bar of visualizerBars; track $index) {
              <div 
                class="w-2 bg-blue-500 rounded-full animate-wave" 
                [style.height.%]="bar.height"
                [style.animation-duration]="bar.speed"
              ></div>
            }
          } @else {
             @for (bar of visualizerBars; track $index) {
                <div class="w-2 bg-gray-300 rounded-full" [style.height.%]="bar.height * 0.5"></div>
             }
          }
        </div>

        <!-- Progress Bar -->
        <div class="w-full px-4 mb-4">
          <input 
            type="range" 
            min="0" 
            max="100" 
            [(ngModel)]="progress" 
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          >
          <div class="flex justify-between text-xs text-gray-400 mt-2 font-mono">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(totalTime) }}</span>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-8 mb-8">
          <button (click)="skip(-10)" class="p-3 text-gray-400 hover:text-gray-600 active:scale-95 transition-transform">
            <app-icon name="rewind-10" [size]="28"></app-icon>
          </button>
          
          <button 
            (click)="togglePlay()"
            class="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:bg-blue-700 active:scale-95 transition-all"
          >
            <app-icon [name]="isPlaying ? 'pause' : 'play'" [size]="32" className="fill-current"></app-icon>
          </button>

          <button (click)="skip(10)" class="p-3 text-gray-400 hover:text-gray-600 active:scale-95 transition-transform">
            <app-icon name="forward-10" [size]="28"></app-icon>
          </button>
        </div>

        <!-- Actions -->
        <div class="flex gap-4">
           <button (click)="delete.emit()" class="text-red-500 hover:bg-red-50 px-4 py-2 rounded-full text-sm font-medium transition-colors">
             \uC0AD\uC81C\uD558\uAE30
           </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;0051e2e4116c3f406e9a75bd982ae8f19e24713da39a482af9a54c384deefe97;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/mobile/components/audio-player-sheet/audio-player-sheet.component.ts */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.animate-slide-up {\n  animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes wave {\n  0%, 100% {\n    transform: scaleY(0.5);\n  }\n  50% {\n    transform: scaleY(1);\n  }\n}\n.animate-wave {\n  animation-name: wave;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=audio-player-sheet.component.css.map */\n"] }]
  }], null, { date: [{
    type: Input
  }], close: [{
    type: Output
  }], delete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AudioPlayerSheetComponent, { className: "AudioPlayerSheetComponent", filePath: "src/app/modules/note/mobile/components/audio-player-sheet/audio-player-sheet.component.ts", lineNumber: 110 });
})();

// src/app/modules/note/mobile/components/recording-modal/recording-modal.component.ts
function RecordingModalComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
  if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r1.height, "%")("animation-duration", bar_r1.speed);
  }
}
function RecordingModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RecordingModalComponent_Conditional_9_For_1_Template, 1, 4, "div", 10, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.visualizerBars);
  }
}
function RecordingModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function RecordingModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function RecordingModalComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel.emit());
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2, "\uCDE8\uC18C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function RecordingModalComponent_Conditional_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRecording());
    });
    \u0275\u0275element(4, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 16);
  }
}
function RecordingModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function RecordingModalComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopRecording());
    });
    \u0275\u0275element(1, "app-icon", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 28);
  }
}
function RecordingModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function RecordingModalComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetRecording());
    });
    \u0275\u0275element(1, "app-icon", 20);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3, "\uC7AC\uB179\uC74C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function RecordingModalComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.complete.emit());
    });
    \u0275\u0275element(5, "app-icon", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 24);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 40);
  }
}
var RecordingModalComponent = class _RecordingModalComponent {
  cancel = new EventEmitter();
  complete = new EventEmitter();
  isRecording = false;
  recordingTime = 0;
  timerId;
  visualizerBars = Array.from({ length: 10 }, () => ({
    height: Math.floor(Math.random() * 60 + 40),
    speed: Math.random() * 0.5 + 0.5 + "s"
  }));
  startRecording() {
    this.isRecording = true;
    this.timerId = setInterval(() => {
      this.recordingTime++;
    }, 1e3);
  }
  stopRecording() {
    this.isRecording = false;
    clearInterval(this.timerId);
  }
  resetRecording() {
    this.recordingTime = 0;
    this.startRecording();
  }
  formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }
  ngOnDestroy() {
    if (this.timerId)
      clearInterval(this.timerId);
  }
  static \u0275fac = function RecordingModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecordingModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecordingModalComponent, selectors: [["app-recording-modal"]], outputs: { cancel: "cancel", complete: "complete" }, decls: 15, vars: 4, consts: [[1, "absolute", "inset-0", "z-50", "flex", "items-end", "justify-center", "bg-black/60", "animate-fade-in", 3, "click"], [1, "bg-white", "w-full", "rounded-t-3xl", "shadow-2xl", "p-6", "pb-12", "flex", "flex-col", "items-center", "animate-slide-up", 3, "click"], [1, "w-12", "h-1.5", "bg-gray-200", "rounded-full", "mb-8"], [1, "mb-6", "text-center"], [1, "text-lg", "font-bold", "text-gray-800", "mb-1"], [1, "text-4xl", "font-mono", "text-blue-600", "font-bold", "tracking-wider"], [1, "flex", "items-center", "justify-center", "gap-2", "h-16", "mb-10", "w-full", "px-4"], [1, "w-full", "h-0.5", "bg-gray-200"], [1, "flex", "items-center", "justify-center", "gap-10", "w-full"], [1, "w-20", "h-20", "rounded-full", "border-4", "border-gray-200", "flex", "items-center", "justify-center", "hover:bg-gray-50", "transition-colors"], [1, "w-2", "bg-blue-400", "rounded-full", "animate-pulse", 3, "height", "animation-duration"], [1, "w-2", "bg-blue-400", "rounded-full", "animate-pulse"], [1, "text-gray-400", "hover:text-gray-600", "p-2", "flex", "flex-col", "items-center", "gap-1", 3, "click"], [1, "text-xs", "font-bold"], [1, "w-20", "h-20", "rounded-full", "bg-red-500", "hover:bg-red-600", "flex", "items-center", "justify-center", "text-white", "shadow-xl", "transition-transform", "active:scale-95", "ring-4", "ring-red-100", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-white"], [1, "w-8"], [1, "w-20", "h-20", "rounded-full", "border-4", "border-gray-200", "flex", "items-center", "justify-center", "hover:bg-gray-50", "transition-colors", 3, "click"], ["name", "square", "className", "fill-gray-600 text-gray-600", 3, "size"], [1, "p-4", "rounded-full", "text-gray-500", "hover:bg-gray-100", "flex", "flex-col", "items-center", 3, "click"], ["name", "refresh-cw", 3, "size"], [1, "text-xs", "mt-1"], [1, "w-20", "h-20", "rounded-full", "bg-blue-500", "hover:bg-blue-600", "flex", "items-center", "justify-center", "text-white", "shadow-xl", "transition-transform", "active:scale-95", "ring-4", "ring-blue-100", 3, "click"], ["name", "check", 3, "size"]], template: function RecordingModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function RecordingModalComponent_Template_div_click_0_listener() {
        return ctx.cancel.emit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function RecordingModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275conditionalCreate(9, RecordingModalComponent_Conditional_9_Template, 2, 0)(10, RecordingModalComponent_Conditional_10_Template, 1, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275conditionalCreate(12, RecordingModalComponent_Conditional_12_Template, 6, 0)(13, RecordingModalComponent_Conditional_13_Template, 2, 1, "button", 9)(14, RecordingModalComponent_Conditional_14_Template, 6, 2);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isRecording ? "\uB179\uC74C \uC911..." : "\uB179\uC74C \uB300\uAE30");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatTime(ctx.recordingTime));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isRecording ? 9 : 10);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isRecording && ctx.recordingTime === 0 ? 12 : ctx.isRecording ? 13 : 14);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.animate-slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n/*# sourceMappingURL=recording-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordingModalComponent, [{
    type: Component,
    args: [{ selector: "app-recording-modal", standalone: true, imports: [CommonModule, IconComponent], template: `
    <div class="absolute inset-0 z-50 flex items-end justify-center bg-black/60 animate-fade-in" (click)="cancel.emit()">
      <div 
        class="bg-white w-full rounded-t-3xl shadow-2xl p-6 pb-12 flex flex-col items-center animate-slide-up"
        (click)="$event.stopPropagation()"
      >
        <!-- Drag Handle Visual -->
        <div class="w-12 h-1.5 bg-gray-200 rounded-full mb-8"></div>

        <div class="mb-6 text-center">
          <h3 class="text-lg font-bold text-gray-800 mb-1">{{ isRecording ? '\uB179\uC74C \uC911...' : '\uB179\uC74C \uB300\uAE30' }}</h3>
          <p class="text-4xl font-mono text-blue-600 font-bold tracking-wider">{{ formatTime(recordingTime) }}</p>
        </div>

        <!-- Visualizer Placeholder -->
        <div class="flex items-center justify-center gap-2 h-16 mb-10 w-full px-4">
          @if (isRecording) {
            @for (bar of visualizerBars; track $index) {
              <div 
                class="w-2 bg-blue-400 rounded-full animate-pulse" 
                [style.height.%]="bar.height"
                [style.animation-duration]="bar.speed"
              ></div>
            }
          } @else {
             <div class="w-full h-0.5 bg-gray-200"></div>
          }
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-10 w-full">
          @if (!isRecording && recordingTime === 0) {
             <!-- Start Record -->
             <button (click)="cancel.emit()" class="text-gray-400 hover:text-gray-600 p-2 flex flex-col items-center gap-1">
               <span class="text-xs font-bold">\uCDE8\uC18C</span>
             </button>
             <button 
               (click)="startRecording()"
               class="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-xl transition-transform active:scale-95 ring-4 ring-red-100"
             >
               <div class="w-8 h-8 rounded-full bg-white"></div>
             </button>
             <div class="w-8"></div>
          } @else if (isRecording) {
             <!-- Stop Record -->
             <button 
               (click)="stopRecording()"
               class="w-20 h-20 rounded-full border-4 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
             >
               <app-icon name="square" [size]="28" className="fill-gray-600 text-gray-600"></app-icon>
             </button>
          } @else {
             <!-- Complete / Retry -->
             <button (click)="resetRecording()" class="p-4 rounded-full text-gray-500 hover:bg-gray-100 flex flex-col items-center">
               <app-icon name="refresh-cw" [size]="24"></app-icon>
               <span class="text-xs mt-1">\uC7AC\uB179\uC74C</span>
             </button>
             <button 
               (click)="complete.emit()"
               class="w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white shadow-xl transition-transform active:scale-95 ring-4 ring-blue-100"
             >
               <app-icon name="check" [size]="40"></app-icon>
             </button>
          }
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;5fc5bc0c3c868ac53d4d9948682e30d05b4b1ebd716a45c6936e30f53190859f;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/mobile/components/recording-modal/recording-modal.component.ts */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n@keyframes slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.animate-slide-up {\n  animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n/*# sourceMappingURL=recording-modal.component.css.map */\n"] }]
  }], null, { cancel: [{
    type: Output
  }], complete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecordingModalComponent, { className: "RecordingModalComponent", filePath: "src/app/modules/note/mobile/components/recording-modal/recording-modal.component.ts", lineNumber: 94 });
})();

// src/app/modules/note/mobile/pages/editor/editor.component.ts
var _c0 = ["drawingCanvas"];
function MobileEditorComponent_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function MobileEditorComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MobileEditorComponent_For_8_Conditional_0_Template, 2, 2, "option", 20);
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275conditional(cat_r1 !== "\uC804\uCCB4" ? 0 : -1);
  }
}
function MobileEditorComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAudioSheet.set(true));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275element(2, "app-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25);
    \u0275\u0275element(5, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7, "03:00");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
  }
}
function MobileEditorComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_14_For_2_Template_button_click_2_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeImage($index_r5));
    });
    \u0275\u0275element(3, "app-icon", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r6, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 12);
  }
}
function MobileEditorComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_14_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showDrawing.set(true));
    });
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275element(3, "app-icon", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_14_Conditional_3_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.editorDrawing.set(void 0));
    });
    \u0275\u0275element(5, "app-icon", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.editorDrawing(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 12);
  }
}
function MobileEditorComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, MobileEditorComponent_Conditional_14_For_2_Template, 4, 2, "div", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(3, MobileEditorComponent_Conditional_14_Conditional_3_Template, 6, 3, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.editorImages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.editorDrawing() ? 3 : -1);
  }
}
function MobileEditorComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-drawing-canvas", 37, 0);
    \u0275\u0275listener("apply", function MobileEditorComponent_Conditional_16_Template_app_drawing_canvas_apply_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDrawingApply($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("initialData", ctx_r2.editorDrawing());
  }
}
function MobileEditorComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 38);
    \u0275\u0275listener("ngModelChange", function MobileEditorComponent_Conditional_17_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editorContent.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.editorContent());
  }
}
function MobileEditorComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-recording-modal", 39);
    \u0275\u0275listener("cancel", function MobileEditorComponent_Conditional_18_Template_app_recording_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showRecordingModal.set(false));
    })("complete", function MobileEditorComponent_Conditional_18_Template_app_recording_modal_complete_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleRecordingComplete());
    });
    \u0275\u0275elementEnd();
  }
}
function MobileEditorComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-audio-player-sheet", 40);
    \u0275\u0275listener("close", function MobileEditorComponent_Conditional_19_Template_app_audio_player_sheet_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAudioSheet.set(false));
    })("delete", function MobileEditorComponent_Conditional_19_Template_app_audio_player_sheet_delete_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAudioDelete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r2.currentNoteDate());
  }
}
function MobileEditorComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 41)(2, "button", 42);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const fileInput_r13 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(fileInput_r13.click());
    });
    \u0275\u0275element(3, "app-icon", 43);
    \u0275\u0275elementStart(4, "input", 44, 1);
    \u0275\u0275listener("change", function MobileEditorComponent_Conditional_20_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleImageUpload($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showRecordingModal.set(true));
    });
    \u0275\u0275element(7, "app-icon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 47);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDrawing.set(true));
    });
    \u0275\u0275element(9, "app-icon", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 49);
    \u0275\u0275listener("click", function MobileEditorComponent_Conditional_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteNote());
    });
    \u0275\u0275element(11, "app-icon", 50);
    \u0275\u0275elementEnd()();
  }
}
var MobileEditorComponent = class _MobileEditorComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  noteService = inject(NoteService);
  aiService = inject(AiService);
  drawingCanvasComponent;
  activeNoteId = signal(null, ...ngDevMode ? [{ debugName: "activeNoteId" }] : []);
  editorTitle = signal("", ...ngDevMode ? [{ debugName: "editorTitle" }] : []);
  editorContent = signal("", ...ngDevMode ? [{ debugName: "editorContent" }] : []);
  editorCategory = signal("\uAE30\uBCF8", ...ngDevMode ? [{ debugName: "editorCategory" }] : []);
  editorImages = signal([], ...ngDevMode ? [{ debugName: "editorImages" }] : []);
  editorHasAudio = signal(false, ...ngDevMode ? [{ debugName: "editorHasAudio" }] : []);
  editorDrawing = signal(void 0, ...ngDevMode ? [{ debugName: "editorDrawing" }] : []);
  showDrawing = signal(false, ...ngDevMode ? [{ debugName: "showDrawing" }] : []);
  showRecordingModal = signal(false, ...ngDevMode ? [{ debugName: "showRecordingModal" }] : []);
  showAudioSheet = signal(false, ...ngDevMode ? [{ debugName: "showAudioSheet" }] : []);
  currentNoteDate = signal((/* @__PURE__ */ new Date()).toISOString(), ...ngDevMode ? [{ debugName: "currentNoteDate" }] : []);
  ngOnInit() {
    const noteId = this.route.snapshot.paramMap.get("id");
    if (noteId && noteId !== "new") {
      const id = parseInt(noteId, 10);
      const note = this.noteService.getNoteById(id);
      if (note) {
        this.activeNoteId.set(note.id);
        this.editorTitle.set(note.title);
        this.editorContent.set(note.content);
        this.editorCategory.set(note.category);
        this.editorImages.set(note.images || []);
        this.editorHasAudio.set(note.hasAudio || false);
        this.editorDrawing.set(note.drawing);
        this.currentNoteDate.set(note.date);
      }
    } else {
      const currentCat = this.noteService.currentCategory();
      this.editorCategory.set(currentCat === "\uC804\uCCB4" ? "\uAE30\uBCF8" : currentCat);
    }
  }
  goBack() {
    this.router.navigate(["/note/mobile"]);
  }
  handleSaveNote() {
    const drawingData = this.showDrawing() && this.drawingCanvasComponent ? this.drawingCanvasComponent.getImageData() : this.editorDrawing();
    const newNote = {
      id: this.activeNoteId() || Date.now(),
      title: this.editorTitle(),
      content: this.editorContent(),
      category: this.editorCategory(),
      isPinned: this.activeNoteId() ? this.noteService.getNoteById(this.activeNoteId())?.isPinned || false : false,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      images: this.editorImages(),
      hasAudio: this.editorHasAudio(),
      drawing: drawingData
    };
    if (this.activeNoteId()) {
      this.noteService.updateNote(this.activeNoteId(), newNote);
    } else {
      this.noteService.notes.update((notes) => [newNote, ...notes]);
    }
    this.goBack();
  }
  handleDeleteNote() {
    if (this.activeNoteId()) {
      if (confirm("\uC815\uB9D0 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
        this.noteService.deleteNote(this.activeNoteId());
        this.goBack();
      }
    } else {
      this.goBack();
    }
  }
  handleDrawingApply(data) {
    this.editorDrawing.set(data);
    this.showDrawing.set(false);
  }
  handleRecordingComplete() {
    this.showRecordingModal.set(false);
    this.editorHasAudio.set(true);
  }
  handleAudioDelete() {
    this.editorHasAudio.set(false);
    this.showAudioSheet.set(false);
  }
  handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.editorImages.update((imgs) => [...imgs, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  }
  removeImage(index) {
    this.editorImages.update((imgs) => imgs.filter((_, i) => i !== index));
  }
  static \u0275fac = function MobileEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileEditorComponent, selectors: [["app-mobile-editor"]], viewQuery: function MobileEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.drawingCanvasComponent = _t.first);
    }
  }, decls: 21, vars: 8, consts: [["drawingCanvas", ""], ["fileInput", ""], [1, "w-full", "h-[100vh]", "bg-white", "flex", "flex-col", "overflow-hidden", "relative"], [1, "flex", "flex-col", "h-full", "bg-white", "relative"], [1, "flex", "justify-between", "items-center", "p-4", "border-b", "border-gray-100"], [1, "p-2", "-ml-2", "text-gray-600", "rounded-full", "hover:bg-gray-100", 3, "click"], ["name", "x"], [1, "flex", "items-center", "gap-2"], [1, "bg-gray-100", "text-xs", "px-2", "py-1", "rounded-lg", "text-gray-600", "focus:outline-none", 3, "ngModelChange", "ngModel"], [1, "p-2", "-mr-2", "text-blue-600", "rounded-full", "hover:bg-blue-50", 3, "click"], ["name", "check"], [1, "flex-1", "overflow-y-auto", "p-5", "flex", "flex-col"], ["type", "text", "placeholder", "\uC81C\uBAA9", 1, "w-full", "text-2xl", "font-bold", "placeholder-gray-300", "border-none", "focus:outline-none", "focus:ring-0", "mb-4", "bg-transparent", 3, "ngModelChange", "ngModel"], [1, "bg-gray-100", "rounded-lg", "px-4", "py-3", "flex", "items-center", "gap-3", "mb-4", "border", "border-gray-200", "cursor-pointer", "hover:bg-gray-200", "transition-colors"], [1, "grid", "grid-cols-2", "gap-2", "mb-4"], [1, "flex-1", "relative"], [1, "w-full", "h-full", "absolute", "inset-0", 3, "initialData"], ["placeholder", "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...", 1, "w-full", "h-full", "resize-none", "placeholder-gray-300", "border-none", "focus:outline-none", "focus:ring-0", "text-base", "leading-relaxed", "bg-transparent", "absolute", "inset-0", 3, "ngModel"], [3, "date"], [1, "p-3", "bg-white", "border-t", "border-gray-100", "flex", "justify-between", "items-center", "pb-6", "sm:pb-3"], [3, "value"], [1, "bg-gray-100", "rounded-lg", "px-4", "py-3", "flex", "items-center", "gap-3", "mb-4", "border", "border-gray-200", "cursor-pointer", "hover:bg-gray-200", "transition-colors", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-white", "flex", "items-center", "justify-center", "text-blue-600", "shadow-sm"], ["name", "play", "className", "fill-current", 3, "size"], [1, "flex-1"], [1, "h-1", "bg-gray-300", "rounded-full", "overflow-hidden", "w-full"], [1, "h-full", "bg-blue-500", "w-1/3"], [1, "text-xs", "text-gray-500", "font-medium"], [1, "relative", "group", "aspect-video", "bg-gray-100", "rounded-lg", "overflow-hidden", "border", "border-gray-200"], [1, "relative", "group", "aspect-video", "bg-white", "rounded-lg", "overflow-hidden", "border", "border-purple-200", "shadow-sm"], ["alt", "attachment", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "absolute", "top-1", "right-1", "bg-black/50", "text-white", "rounded-full", "p-1", "opacity-0", "group-hover:opacity-100", "transition-opacity", 3, "click"], ["name", "x", 3, "size"], [1, "relative", "group", "aspect-video", "bg-white", "rounded-lg", "overflow-hidden", "border", "border-purple-200", "shadow-sm", 3, "click"], ["alt", "drawing", 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "absolute", "top-2", "left-2", "bg-purple-100", "text-purple-600", "p-1", "rounded-md"], ["name", "pen-tool", 3, "size"], [1, "w-full", "h-full", "absolute", "inset-0", 3, "apply", "initialData"], ["placeholder", "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...", 1, "w-full", "h-full", "resize-none", "placeholder-gray-300", "border-none", "focus:outline-none", "focus:ring-0", "text-base", "leading-relaxed", "bg-transparent", "absolute", "inset-0", 3, "ngModelChange", "ngModel"], [3, "cancel", "complete"], [3, "close", "delete", "date"], [1, "flex", "gap-4"], [1, "text-gray-500", "hover:text-blue-600", "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "click"], ["name", "image"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "text-gray-500", "hover:text-red-500", "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "click"], ["name", "mic"], [1, "p-2", "rounded-lg", "transition-colors", "text-gray-500", "hover:text-purple-600", "hover:bg-gray-100", 3, "click"], ["name", "pen-tool"], [1, "text-gray-400", "hover:text-red-500", "p-2", 3, "click"], ["name", "trash-2"]], template: function MobileEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "button", 5);
      \u0275\u0275listener("click", function MobileEditorComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(4, "app-icon", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "select", 8);
      \u0275\u0275listener("ngModelChange", function MobileEditorComponent_Template_select_ngModelChange_6_listener($event) {
        return ctx.editorCategory.set($event);
      });
      \u0275\u0275repeaterCreate(7, MobileEditorComponent_For_8_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 9);
      \u0275\u0275listener("click", function MobileEditorComponent_Template_button_click_9_listener() {
        return ctx.handleSaveNote();
      });
      \u0275\u0275element(10, "app-icon", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 11)(12, "input", 12);
      \u0275\u0275listener("ngModelChange", function MobileEditorComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.editorTitle.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, MobileEditorComponent_Conditional_13_Template, 8, 1, "div", 13);
      \u0275\u0275conditionalCreate(14, MobileEditorComponent_Conditional_14_Template, 4, 1, "div", 14);
      \u0275\u0275elementStart(15, "div", 15);
      \u0275\u0275conditionalCreate(16, MobileEditorComponent_Conditional_16_Template, 2, 1, "app-drawing-canvas", 16)(17, MobileEditorComponent_Conditional_17_Template, 1, 1, "textarea", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, MobileEditorComponent_Conditional_18_Template, 1, 0, "app-recording-modal");
      \u0275\u0275conditionalCreate(19, MobileEditorComponent_Conditional_19_Template, 1, 1, "app-audio-player-sheet", 18);
      \u0275\u0275conditionalCreate(20, MobileEditorComponent_Conditional_20_Template, 12, 0, "div", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.editorCategory());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.noteService.categories());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.editorTitle());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editorHasAudio() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editorImages().length > 0 || ctx.editorDrawing() ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showDrawing() ? 16 : 17);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRecordingModal() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAudioSheet() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.showDrawing() ? 20 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    DrawingCanvasComponent,
    AudioPlayerSheetComponent,
    RecordingModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileEditorComponent, [{
    type: Component,
    args: [{
      selector: "app-mobile-editor",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        DrawingCanvasComponent,
        AudioPlayerSheetComponent,
        RecordingModalComponent
      ],
      template: `
    <div class="w-full h-[100vh] bg-white flex flex-col overflow-hidden relative">
        
        <div class="flex flex-col h-full bg-white relative">
          <!-- Editor Header -->
          <div class="flex justify-between items-center p-4 border-b border-gray-100">
            <button (click)="goBack()" class="p-2 -ml-2 text-gray-600 rounded-full hover:bg-gray-100">
              <app-icon name="x"></app-icon>
            </button>
            
            <div class="flex items-center gap-2">
              <select 
                [ngModel]="editorCategory()"
                (ngModelChange)="editorCategory.set($event)"
                class="bg-gray-100 text-xs px-2 py-1 rounded-lg text-gray-600 focus:outline-none"
              >
                @for (cat of noteService.categories(); track cat) {
                   @if (cat !== '\uC804\uCCB4') {
                     <option [value]="cat">{{ cat }}</option>
                   }
                }
              </select>
              <button (click)="handleSaveNote()" class="p-2 -mr-2 text-blue-600 rounded-full hover:bg-blue-50">
                <app-icon name="check"></app-icon>
              </button>
            </div>
          </div>

          <!-- Editor Content -->
          <div class="flex-1 overflow-y-auto p-5 flex flex-col">
            <input 
              type="text" 
              placeholder="\uC81C\uBAA9" 
              [ngModel]="editorTitle()"
              (ngModelChange)="editorTitle.set($event)"
              class="w-full text-2xl font-bold placeholder-gray-300 border-none focus:outline-none focus:ring-0 mb-4 bg-transparent"
            />
            
            <!-- Audio Bar Trigger -->
            @if (editorHasAudio()) {
              <div class="bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-3 mb-4 border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors" (click)="showAudioSheet.set(true)">
                <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <app-icon name="play" [size]="14" className="fill-current"></app-icon>
                </div>
                <div class="flex-1">
                  <div class="h-1 bg-gray-300 rounded-full overflow-hidden w-full">
                    <div class="h-full bg-blue-500 w-1/3"></div>
                  </div>
                </div>
                <span class="text-xs text-gray-500 font-medium">03:00</span>
              </div>
            }
            
            <!-- Image & Drawing Grid -->
            @if (editorImages().length > 0 || editorDrawing()) {
              <div class="grid grid-cols-2 gap-2 mb-4">
                @for (img of editorImages(); track $index) {
                  <div class="relative group aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img [src]="img" alt="attachment" class="w-full h-full object-cover" />
                    <button 
                      (click)="removeImage($index)"
                      class="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <app-icon name="x" [size]="12"></app-icon>
                    </button>
                  </div>
                }
                @if (editorDrawing()) {
                  <div class="relative group aspect-video bg-white rounded-lg overflow-hidden border border-purple-200 shadow-sm" (click)="showDrawing.set(true)">
                    <img [src]="editorDrawing()" alt="drawing" class="w-full h-full object-contain" />
                    <div class="absolute top-2 left-2 bg-purple-100 text-purple-600 p-1 rounded-md">
                      <app-icon name="pen-tool" [size]="14"></app-icon>
                    </div>
                    <button 
                      (click)="$event.stopPropagation(); editorDrawing.set(undefined)"
                      class="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <app-icon name="x" [size]="12"></app-icon>
                    </button>
                  </div>
                }
              </div>
            }

            <!-- Content Area -->
            <div class="flex-1 relative">
              @if (showDrawing()) {
                <app-drawing-canvas 
                  #drawingCanvas
                  [initialData]="editorDrawing()"
                  (apply)="handleDrawingApply($event)"
                  class="w-full h-full absolute inset-0"
                ></app-drawing-canvas>
              } @else {
                <textarea 
                  placeholder="\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694..." 
                  [ngModel]="editorContent()"
                  (ngModelChange)="editorContent.set($event)"
                  class="w-full h-full resize-none placeholder-gray-300 border-none focus:outline-none focus:ring-0 text-base leading-relaxed bg-transparent absolute inset-0"
                ></textarea>
              }
            </div>
          </div>

          <!-- Recording Modal -->
          @if (showRecordingModal()) {
            <app-recording-modal 
              (cancel)="showRecordingModal.set(false)"
              (complete)="handleRecordingComplete()"
            ></app-recording-modal>
          }

          <!-- Audio Player Sheet -->
          @if (showAudioSheet()) {
            <app-audio-player-sheet
              [date]="currentNoteDate()"
              (close)="showAudioSheet.set(false)"
              (delete)="handleAudioDelete()"
            ></app-audio-player-sheet>
          }

          <!-- Editor Toolbar -->
          @if (!showDrawing()) {
            <div class="p-3 bg-white border-t border-gray-100 flex justify-between items-center pb-6 sm:pb-3">
              <div class="flex gap-4">
                <button 
                  (click)="fileInput.click()"
                  class="text-gray-500 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <app-icon name="image"></app-icon>
                  <input 
                    #fileInput
                    type="file" 
                    class="hidden" 
                    accept="image/*" 
                    (change)="handleImageUpload($event)"
                  />
                </button>
                <button 
                  (click)="showRecordingModal.set(true)"
                  class="text-gray-500 hover:text-red-500 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <app-icon name="mic"></app-icon>
                </button>
                <button 
                  (click)="showDrawing.set(true)"
                  class="p-2 rounded-lg transition-colors text-gray-500 hover:text-purple-600 hover:bg-gray-100"
                >
                  <app-icon name="pen-tool"></app-icon>
                </button>
              </div>
              <button 
                (click)="handleDeleteNote()"
                class="text-gray-400 hover:text-red-500 p-2"
              >
                <app-icon name="trash-2"></app-icon>
              </button>
            </div>
          }
        </div>
    </div>
  `
    }]
  }], null, { drawingCanvasComponent: [{
    type: ViewChild,
    args: ["drawingCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileEditorComponent, { className: "MobileEditorComponent", filePath: "src/app/modules/note/mobile/pages/editor/editor.component.ts", lineNumber: 185 });
})();
export {
  MobileEditorComponent
};
//# sourceMappingURL=chunk-MGARDYQK.js.map
