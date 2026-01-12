import {
  DrawingCanvasComponent
} from "./chunk-5OXRQX4V.js";
import {
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
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/note/pc/components/sidebar-nav/sidebar-nav.component.ts
function SidebarNavComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2, "E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 16);
    \u0275\u0275text(4, "Easy Note");
    \u0275\u0275elementEnd()();
  }
}
function SidebarNavComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Folders");
    \u0275\u0275elementEnd();
  }
}
function SidebarNavComponent_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2);
  }
}
function SidebarNavComponent_button_7_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.noteService.getCategoryCount(cat_r2), " ");
  }
}
function SidebarNavComponent_button_7_ng_container_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function SidebarNavComponent_button_7_ng_container_3_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const cat_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.deleteCategory(cat_r2));
    });
    \u0275\u0275element(1, "app-icon", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 14);
  }
}
function SidebarNavComponent_button_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SidebarNavComponent_button_7_ng_container_3_span_1_Template, 2, 1, "span", 22)(2, SidebarNavComponent_button_7_ng_container_3_button_2_Template, 2, 1, "button", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.noteService.getCategoryCount(cat_r2) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cat_r2 !== "\uC804\uCCB4");
  }
}
function SidebarNavComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function SidebarNavComponent_button_7_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.noteService.currentCategory.set(cat_r2));
    });
    \u0275\u0275element(1, "app-icon", 19);
    \u0275\u0275template(2, SidebarNavComponent_button_7_span_2_Template, 2, 1, "span", 20)(3, SidebarNavComponent_button_7_ng_container_3_Template, 3, 2, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-blue-600", ctx_r2.noteService.currentCategory() === cat_r2)("text-white", ctx_r2.noteService.currentCategory() === cat_r2)("hover:bg-slate-800", ctx_r2.noteService.currentCategory() !== cat_r2)("justify-center", ctx_r2.collapsed);
    \u0275\u0275property("title", ctx_r2.collapsed ? cat_r2 : "");
    \u0275\u0275advance();
    \u0275\u0275property("name", cat_r2 === "\uC804\uCCB4" ? "layout" : "folder")("size", 20)("className", ctx_r2.noteService.currentCategory() === cat_r2 ? "text-blue-200" : "text-slate-500 group-hover:text-slate-300");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
  }
}
function SidebarNavComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SidebarNavComponent_div_8_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategoryInput, $event) || (ctx_r2.newCategoryInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SidebarNavComponent_div_8_Template_input_keydown_enter_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCategory());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function SidebarNavComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCategory());
    });
    \u0275\u0275element(4, "app-icon", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCategoryInput);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 18);
  }
}
function SidebarNavComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function SidebarNavComponent_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle.emit());
    });
    \u0275\u0275element(2, "app-icon", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
  }
}
function SidebarNavComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uC124\uC815 \uBC0F \uB3D9\uAE30\uD654");
    \u0275\u0275elementEnd();
  }
}
var SidebarNavComponent = class _SidebarNavComponent {
  collapsed = false;
  toggle = new EventEmitter();
  openSettings = new EventEmitter();
  noteService = inject(NoteService);
  newCategoryInput = "";
  addCategory() {
    if (this.noteService.addCategory(this.newCategoryInput)) {
      this.newCategoryInput = "";
    }
  }
  deleteCategory(cat) {
    if (confirm(`'${cat}' \uD3F4\uB354\uC640 \uD3EC\uD568\uB41C \uB178\uD2B8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`)) {
      this.noteService.deleteCategory(cat);
    }
  }
  static \u0275fac = function SidebarNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarNavComponent, selectors: [["app-sidebar-nav"]], inputs: { collapsed: "collapsed" }, outputs: { toggle: "toggle", openSettings: "openSettings" }, decls: 14, vars: 20, consts: [[1, "bg-slate-900", "text-slate-300", "flex", "flex-col", "border-r", "border-slate-800", "shrink-0", "transition-all", "duration-300", "ease-in-out", "relative", "h-screen", "overflow-hidden"], [1, "p-4", "border-b", "border-slate-800", "flex", "items-center", "h-16", "shrink-0"], ["class", "flex items-center gap-3 overflow-hidden animate-fade-in", 4, "ngIf"], [1, "text-slate-400", "hover:text-white", "transition-colors", "p-1", "rounded-md", "hover:bg-slate-800", 3, "click", "title"], ["name", "menu", 3, "size"], [1, "flex-1", "overflow-y-auto", "py-4", "px-2", "space-y-1"], ["class", "text-xs font-bold text-slate-500 px-3 mb-2 uppercase tracking-wider animate-fade-in", 4, "ngIf"], ["class", "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-sm font-medium", 3, "bg-blue-600", "text-white", "hover:bg-slate-800", "justify-center", "title", "click", 4, "ngFor", "ngForOf"], ["class", "pt-4 mt-2 border-t border-slate-800", 4, "ngIf"], ["class", "pt-4 mt-2 border-t border-slate-800 flex justify-center", 4, "ngIf"], [1, "p-4", "border-t", "border-slate-800"], [1, "flex", "items-center", "gap-3", "px-3", "py-2", "w-full", "hover:bg-slate-800", "rounded-lg", "text-sm", "transition-colors", "text-slate-400", "hover:text-white", 3, "click", "title"], ["name", "settings", 3, "size"], [4, "ngIf"], [1, "flex", "items-center", "gap-3", "overflow-hidden", "animate-fade-in"], [1, "w-8", "h-8", "bg-blue-600", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "font-bold", "shadow-lg", "shadow-blue-900/50", "shrink-0"], [1, "text-xl", "font-bold", "text-white", "tracking-tight", "whitespace-nowrap"], [1, "text-xs", "font-bold", "text-slate-500", "px-3", "mb-2", "uppercase", "tracking-wider", "animate-fade-in"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "transition-colors", "group", "text-sm", "font-medium", 3, "click", "title"], [3, "name", "size", "className"], ["class", "truncate", 4, "ngIf"], [1, "truncate"], ["class", "ml-auto text-xs opacity-60 bg-black/20 px-2 py-0.5 rounded-full", 4, "ngIf"], ["class", "opacity-0 group-hover:opacity-100 hover:text-red-400 p-1", 3, "click", 4, "ngIf"], [1, "ml-auto", "text-xs", "opacity-60", "bg-black/20", "px-2", "py-0.5", "rounded-full"], [1, "opacity-0", "group-hover:opacity-100", "hover:text-red-400", "p-1", 3, "click"], ["name", "trash-2", 3, "size"], [1, "pt-4", "mt-2", "border-t", "border-slate-800"], [1, "flex", "gap-2", "px-2"], ["type", "text", "placeholder", "New Folder...", 1, "bg-slate-800", "border-none", "text-sm", "rounded", "px-3", "py-2", "w-full", "text-slate-200", "focus:ring-1", "focus:ring-blue-500", "placeholder-slate-600", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "bg-slate-800", "hover:bg-slate-700", "text-slate-300", "p-2", "rounded", "shrink-0", 3, "click"], ["name", "plus", 3, "size"], [1, "pt-4", "mt-2", "border-t", "border-slate-800", "flex", "justify-center"], ["title", "\uD3F4\uB354 \uCD94\uAC00", 1, "bg-slate-800", "hover:bg-slate-700", "text-slate-300", "p-2", "rounded-full", 3, "click"]], template: function SidebarNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1);
      \u0275\u0275template(2, SidebarNavComponent_div_2_Template, 5, 0, "div", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function SidebarNavComponent_Template_button_click_3_listener() {
        return ctx.toggle.emit();
      });
      \u0275\u0275element(4, "app-icon", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "nav", 5);
      \u0275\u0275template(6, SidebarNavComponent_div_6_Template, 2, 0, "div", 6)(7, SidebarNavComponent_button_7_Template, 4, 14, "button", 7)(8, SidebarNavComponent_div_8_Template, 5, 2, "div", 8)(9, SidebarNavComponent_div_9_Template, 3, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10)(11, "button", 11);
      \u0275\u0275listener("click", function SidebarNavComponent_Template_button_click_11_listener() {
        return ctx.openSettings.emit();
      });
      \u0275\u0275element(12, "app-icon", 12);
      \u0275\u0275template(13, SidebarNavComponent_span_13_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("w-64", !ctx.collapsed)("w-20", ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("justify-between", !ctx.collapsed)("justify-center", ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.collapsed ? "\uBA54\uB274 \uC5F4\uAE30" : "\uBA54\uB274 \uB2EB\uAE30");
      \u0275\u0275advance();
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.noteService.categories());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.collapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.collapsed);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("justify-center", ctx.collapsed);
      \u0275\u0275property("title", ctx.collapsed ? "\uC124\uC815 \uBC0F \uB3D9\uAE30\uD654" : "");
      \u0275\u0275advance();
      \u0275\u0275property("size", 20);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.collapsed);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=sidebar-nav.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarNavComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar-nav", standalone: true, imports: [CommonModule, FormsModule, IconComponent], template: `
    <aside 
      class="bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 shrink-0 transition-all duration-300 ease-in-out relative h-screen overflow-hidden"
      [class.w-64]="!collapsed"
      [class.w-20]="collapsed"
    >
      <!-- Header -->
      <div class="p-4 border-b border-slate-800 flex items-center h-16 shrink-0" 
           [class.justify-between]="!collapsed" 
           [class.justify-center]="collapsed">
        
        <!-- Logo -->
        <div *ngIf="!collapsed" class="flex items-center gap-3 overflow-hidden animate-fade-in">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/50 shrink-0">E</div>
          <h1 class="text-xl font-bold text-white tracking-tight whitespace-nowrap">Easy Note</h1>
        </div>
        
        <!-- Toggle Button -->
        <button 
          (click)="toggle.emit()" 
          class="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800"
          [title]="collapsed ? '\uBA54\uB274 \uC5F4\uAE30' : '\uBA54\uB274 \uB2EB\uAE30'"
        >
          <app-icon name="menu" [size]="20"></app-icon>
        </button>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        <div *ngIf="!collapsed" class="text-xs font-bold text-slate-500 px-3 mb-2 uppercase tracking-wider animate-fade-in">Folders</div>
        
        <button 
          *ngFor="let cat of noteService.categories()"
          (click)="noteService.currentCategory.set(cat)"
          [class.bg-blue-600]="noteService.currentCategory() === cat"
          [class.text-white]="noteService.currentCategory() === cat"
          [class.hover:bg-slate-800]="noteService.currentCategory() !== cat"
          [class.justify-center]="collapsed"
          [title]="collapsed ? cat : ''"
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-sm font-medium"
        >
          <app-icon 
            [name]="cat === '\uC804\uCCB4' ? 'layout' : 'folder'" 
            [size]="20" 
            [className]="noteService.currentCategory() === cat ? 'text-blue-200' : 'text-slate-500 group-hover:text-slate-300'"
          ></app-icon>
          <span *ngIf="!collapsed" class="truncate">{{ cat }}</span>
          
          <ng-container *ngIf="!collapsed">
            <span class="ml-auto text-xs opacity-60 bg-black/20 px-2 py-0.5 rounded-full" *ngIf="noteService.getCategoryCount(cat) > 0">
              {{ noteService.getCategoryCount(cat) }}
            </span>
            <button 
              *ngIf="cat !== '\uC804\uCCB4'" 
              (click)="$event.stopPropagation(); deleteCategory(cat)" 
              class="opacity-0 group-hover:opacity-100 hover:text-red-400 p-1"
            >
              <app-icon name="trash-2" [size]="14"></app-icon>
            </button>
          </ng-container>
        </button>

        <!-- Add Category -->
        <div class="pt-4 mt-2 border-t border-slate-800" *ngIf="!collapsed">
          <div class="flex gap-2 px-2">
            <input 
              type="text" 
              [(ngModel)]="newCategoryInput" 
              (keydown.enter)="addCategory()"
              placeholder="New Folder..." 
              class="bg-slate-800 border-none text-sm rounded px-3 py-2 w-full text-slate-200 focus:ring-1 focus:ring-blue-500 placeholder-slate-600"
            >
            <button (click)="addCategory()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded shrink-0">
              <app-icon name="plus" [size]="18"></app-icon>
            </button>
          </div>
        </div>
        
        <div *ngIf="collapsed" class="pt-4 mt-2 border-t border-slate-800 flex justify-center">
          <button (click)="toggle.emit()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded-full" title="\uD3F4\uB354 \uCD94\uAC00">
            <app-icon name="plus" [size]="20"></app-icon>
          </button>
        </div>
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-slate-800">
        <button 
          (click)="openSettings.emit()" 
          class="flex items-center gap-3 px-3 py-2 w-full hover:bg-slate-800 rounded-lg text-sm transition-colors text-slate-400 hover:text-white"
          [class.justify-center]="collapsed"
          [title]="collapsed ? '\uC124\uC815 \uBC0F \uB3D9\uAE30\uD654' : ''"
        >
          <app-icon name="settings" [size]="20"></app-icon>
          <span *ngIf="!collapsed">\uC124\uC815 \uBC0F \uB3D9\uAE30\uD654</span>
        </button>
      </div>
    </aside>
  `, styles: ["/* angular:styles/component:scss;f8c452e60dc25f9c76834f9025bf59ff3c2e49c1f895b5bde75ce2f2ec7cd26f;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/pc/components/sidebar-nav/sidebar-nav.component.ts */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=sidebar-nav.component.css.map */\n"] }]
  }], null, { collapsed: [{
    type: Input
  }], toggle: [{
    type: Output
  }], openSettings: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarNavComponent, { className: "SidebarNavComponent", filePath: "src/app/modules/note/pc/components/sidebar-nav/sidebar-nav.component.ts", lineNumber: 115 });
})();

// src/app/modules/note/pc/components/note-list-item/note-list-item.component.ts
var _c0 = (a0, a1, a2) => ({ "text-purple-600 bg-purple-100": a0, "text-green-600 bg-green-100": a1, "text-gray-600 bg-gray-200": a2 });
function NoteListItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 14);
  }
}
function NoteListItemComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 9);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 12);
  }
}
function NoteListItemComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 12);
  }
}
function NoteListItemComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("size", 12);
  }
}
var NoteListItemComponent = class _NoteListItemComponent {
  note;
  isActive = false;
  onClick = new EventEmitter();
  onPin = new EventEmitter();
  onDelete = new EventEmitter();
  onContextMenu = new EventEmitter();
  onRightClick(event) {
    event.preventDefault();
    this.onContextMenu.emit({ event, note: this.note });
  }
  static \u0275fac = function NoteListItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteListItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoteListItemComponent, selectors: [["app-note-list-item"]], inputs: { note: "note", isActive: "isActive" }, outputs: { onClick: "onClick", onPin: "onPin", onDelete: "onDelete", onContextMenu: "onContextMenu" }, decls: 23, vars: 29, consts: [[1, "group", "relative", "p-4", "border-b", "border-gray-100", "hover:bg-blue-50", "cursor-pointer", "transition-colors", 3, "click", "contextmenu"], [1, "flex", "justify-between", "items-start", "mb-1"], [1, "font-bold", "text-gray-800", "line-clamp-1", "text-sm", "flex-1", "pr-4"], ["name", "pin", "className", "text-blue-500 fill-blue-500 shrink-0", 3, "size"], [1, "text-gray-500", "text-xs", "line-clamp-2", "mb-2", "h-8", "leading-relaxed"], [1, "flex", "justify-between", "items-center", "mt-2"], [1, "flex", "gap-2", "text-[10px]", "text-gray-400", "font-medium"], [1, "px-1.5", "py-0.5", "rounded-sm", 3, "ngClass"], [1, "flex", "gap-1.5"], ["name", "mic", "className", "text-gray-400", 3, "size"], ["name", "image", "className", "text-gray-400", 3, "size"], ["name", "pen-tool", "className", "text-gray-400", 3, "size"], [1, "absolute", "right-2", "top-2", "hidden", "group-hover:flex", "gap-1", "bg-white", "shadow-sm", "border", "border-gray-200", "rounded-md", "p-1", "opacity-0", "group-hover:opacity-100", "transition-opacity", "z-10"], [1, "p-1", "hover:bg-gray-100", "rounded", "text-gray-500", 3, "click", "title"], ["name", "pin", 3, "size"], ["title", "\uC0AD\uC81C", 1, "p-1", "hover:bg-red-50", "rounded", "text-red-500", 3, "click"], ["name", "trash-2", 3, "size"]], template: function NoteListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function NoteListItemComponent_Template_div_click_0_listener() {
        return ctx.onClick.emit(ctx.note);
      })("contextmenu", function NoteListItemComponent_Template_div_contextmenu_0_listener($event) {
        return ctx.onRightClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, NoteListItemComponent_Conditional_4_Template, 1, 1, "app-icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275conditionalCreate(15, NoteListItemComponent_Conditional_15_Template, 1, 1, "app-icon", 9);
      \u0275\u0275conditionalCreate(16, NoteListItemComponent_Conditional_16_Template, 1, 1, "app-icon", 10);
      \u0275\u0275conditionalCreate(17, NoteListItemComponent_Conditional_17_Template, 1, 1, "app-icon", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12)(19, "button", 13);
      \u0275\u0275listener("click", function NoteListItemComponent_Template_button_click_19_listener($event) {
        $event.stopPropagation();
        return ctx.onPin.emit(ctx.note.id);
      });
      \u0275\u0275element(20, "app-icon", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function NoteListItemComponent_Template_button_click_21_listener($event) {
        $event.stopPropagation();
        return ctx.onDelete.emit(ctx.note.id);
      });
      \u0275\u0275element(22, "app-icon", 16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("bg-blue-100", ctx.isActive)("border-l-4", ctx.isActive)("border-l-blue-600", ctx.isActive)("border-l-transparent", !ctx.isActive);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-blue-800", ctx.isActive);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.note.title || "\uC81C\uBAA9 \uC5C6\uC74C", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.note.isPinned ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.note.content || "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 22, ctx.note.date, "MM.dd"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(25, _c0, ctx.note.category === "\uC5C5\uBB34", ctx.note.category === "\uC0DD\uD65C", ctx.note.category !== "\uC5C5\uBB34" && ctx.note.category !== "\uC0DD\uD65C"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.note.category, " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.note.hasAudio ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.note.images.length ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.note.drawing ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("title", ctx.note.isPinned ? "\uACE0\uC815 \uD574\uC81C" : "\uACE0\uC815");
      \u0275\u0275advance();
      \u0275\u0275property("size", 14);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 14);
    }
  }, dependencies: [CommonModule, NgClass, IconComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteListItemComponent, [{
    type: Component,
    args: [{
      selector: "app-note-list-item",
      standalone: true,
      imports: [CommonModule, IconComponent],
      template: `
    <div 
      (click)="onClick.emit(note)"
      (contextmenu)="onRightClick($event)"
      class="group relative p-4 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors"
      [class.bg-blue-100]="isActive"
      [class.border-l-4]="isActive"
      [class.border-l-blue-600]="isActive"
      [class.border-l-transparent]="!isActive"
    >
      <div class="flex justify-between items-start mb-1">
        <h3 class="font-bold text-gray-800 line-clamp-1 text-sm flex-1 pr-4" [class.text-blue-800]="isActive">
          {{ note.title || "\uC81C\uBAA9 \uC5C6\uC74C" }}
        </h3>
        @if (note.isPinned) {
          <app-icon name="pin" [size]="14" className="text-blue-500 fill-blue-500 shrink-0"></app-icon>
        }
      </div>
      
      <p class="text-gray-500 text-xs line-clamp-2 mb-2 h-8 leading-relaxed">
        {{ note.content || "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }}
      </p>

      <div class="flex justify-between items-center mt-2">
        <div class="flex gap-2 text-[10px] text-gray-400 font-medium">
          <span>{{ note.date | date:'MM.dd' }}</span>
          <span [ngClass]="{
            'text-purple-600 bg-purple-100': note.category === '\uC5C5\uBB34',
            'text-green-600 bg-green-100': note.category === '\uC0DD\uD65C',
            'text-gray-600 bg-gray-200': note.category !== '\uC5C5\uBB34' && note.category !== '\uC0DD\uD65C'
          }" class="px-1.5 py-0.5 rounded-sm">
            {{ note.category }}
          </span>
        </div>

        <div class="flex gap-1.5">
          @if (note.hasAudio) { 
            <app-icon name="mic" [size]="12" className="text-gray-400"></app-icon> 
          }
          @if (note.images.length) { 
            <app-icon name="image" [size]="12" className="text-gray-400"></app-icon> 
          }
          @if (note.drawing) { 
            <app-icon name="pen-tool" [size]="12" className="text-gray-400"></app-icon> 
          }
        </div>
      </div>

      <!-- Hover Actions -->
      <div class="absolute right-2 top-2 hidden group-hover:flex gap-1 bg-white shadow-sm border border-gray-200 rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button (click)="$event.stopPropagation(); onPin.emit(note.id)" class="p-1 hover:bg-gray-100 rounded text-gray-500" [title]="note.isPinned ? '\uACE0\uC815 \uD574\uC81C' : '\uACE0\uC815'">
          <app-icon name="pin" [size]="14"></app-icon>
        </button>
        <button (click)="$event.stopPropagation(); onDelete.emit(note.id)" class="p-1 hover:bg-red-50 rounded text-red-500" title="\uC0AD\uC81C">
          <app-icon name="trash-2" [size]="14"></app-icon>
        </button>
      </div>
    </div>
  `
    }]
  }], null, { note: [{
    type: Input
  }], isActive: [{
    type: Input
  }], onClick: [{
    type: Output
  }], onPin: [{
    type: Output
  }], onDelete: [{
    type: Output
  }], onContextMenu: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoteListItemComponent, { className: "NoteListItemComponent", filePath: "src/app/modules/note/pc/components/note-list-item/note-list-item.component.ts", lineNumber: 70 });
})();

// src/app/modules/note/pc/components/audio-modal/audio-modal.component.ts
function AudioModalComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r1.height, "%")("animation-duration", bar_r1.speed);
  }
}
function AudioModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AudioModalComponent_Conditional_9_For_1_Template, 1, 4, "div", 18, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.visualizerBars);
  }
}
function AudioModalComponent_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r3.height * 0.5, "%");
  }
}
function AudioModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AudioModalComponent_Conditional_10_For_1_Template, 1, 2, "div", 20, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.visualizerBars);
  }
}
var AudioModalComponent = class _AudioModalComponent {
  date = (/* @__PURE__ */ new Date()).toISOString();
  close = new EventEmitter();
  delete = new EventEmitter();
  isPlaying = true;
  progress = 0;
  currentTime = 0;
  totalTime = 180;
  intervalId;
  visualizerBars = Array.from({ length: 20 }, () => ({
    height: Math.floor(Math.random() * 60 + 20),
    speed: Math.random() * 0.4 + 0.4 + "s"
  }));
  constructor() {
    this.startTimer();
  }
  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying)
      this.startTimer();
    else
      clearInterval(this.intervalId);
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
  static \u0275fac = function AudioModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AudioModalComponent, selectors: [["app-audio-modal"]], inputs: { date: "date" }, outputs: { close: "close", delete: "delete" }, decls: 27, vars: 10, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/40", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "w-[400px]", "rounded-xl", "shadow-2xl", "p-6", "flex", "flex-col", "items-center", "animate-scale-up", "border", "border-gray-100", 3, "click"], [1, "flex", "justify-between", "w-full", "mb-6", "items-center"], [1, "font-bold", "text-gray-800", "flex", "items-center", "gap-2"], ["name", "mic", "className", "text-blue-500", 3, "size"], [1, "text-gray-400", "hover:text-gray-600", 3, "click"], ["name", "x", 3, "size"], [1, "flex", "items-center", "justify-center", "gap-1", "h-16", "mb-6", "w-full", "px-4", "bg-gray-50", "rounded-lg"], [1, "w-full", "px-2", "mb-2"], ["type", "range", "min", "0", "max", "100", 1, "w-full", "h-1.5", "bg-gray-200", "rounded-lg", "appearance-none", "cursor-pointer", "accent-blue-600", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "text-xs", "text-gray-500", "mt-2", "font-mono"], [1, "flex", "items-center", "justify-center", "gap-6", "mb-6", "mt-2"], [1, "p-2", "text-gray-400", "hover:text-gray-600", "hover:bg-gray-100", "rounded-full", "transition-colors", 3, "click"], ["name", "rewind", 3, "size"], [1, "w-12", "h-12", "rounded-full", "bg-blue-600", "text-white", "flex", "items-center", "justify-center", "shadow-lg", "hover:bg-blue-700", "hover:shadow-xl", "transition-all", "active:scale-95", 3, "click"], ["className", "fill-current", 3, "name", "size"], ["name", "forward", 3, "size"], [1, "text-red-500", "hover:bg-red-50", "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-colors", "w-full", "border", "border-transparent", "hover:border-red-100", 3, "click"], [1, "w-1.5", "bg-blue-500", "rounded-full", "animate-wave", 3, "height", "animation-duration"], [1, "w-1.5", "bg-blue-500", "rounded-full", "animate-wave"], [1, "w-1.5", "bg-gray-300", "rounded-full", 3, "height"], [1, "w-1.5", "bg-gray-300", "rounded-full"]], template: function AudioModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AudioModalComponent_Template_div_click_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AudioModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h3", 3);
      \u0275\u0275element(4, "app-icon", 4);
      \u0275\u0275text(5, " \uC74C\uC131 \uBA54\uBAA8 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function AudioModalComponent_Template_button_click_6_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275element(7, "app-icon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275conditionalCreate(9, AudioModalComponent_Conditional_9_Template, 2, 0)(10, AudioModalComponent_Conditional_10_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AudioModalComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.progress, $event) || (ctx.progress = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "span");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 11)(19, "button", 12);
      \u0275\u0275listener("click", function AudioModalComponent_Template_button_click_19_listener() {
        return ctx.skip(-10);
      });
      \u0275\u0275element(20, "app-icon", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function AudioModalComponent_Template_button_click_21_listener() {
        return ctx.togglePlay();
      });
      \u0275\u0275element(22, "app-icon", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 12);
      \u0275\u0275listener("click", function AudioModalComponent_Template_button_click_23_listener() {
        return ctx.skip(10);
      });
      \u0275\u0275element(24, "app-icon", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 17);
      \u0275\u0275listener("click", function AudioModalComponent_Template_button_click_25_listener() {
        return ctx.delete.emit();
      });
      \u0275\u0275text(26, " \uC624\uB514\uC624 \uC0AD\uC81C ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isPlaying ? 9 : 10);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.progress);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formatTime(ctx.currentTime));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatTime(ctx.totalTime));
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.isPlaying ? "pause" : "play")("size", 24);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 24);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_scale-up {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 100% {\n    transform: scaleY(0.5);\n  }\n  50% {\n    transform: scaleY(1);\n  }\n}\n.animate-wave[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_wave;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=audio-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioModalComponent, [{
    type: Component,
    args: [{ selector: "app-audio-modal", standalone: true, imports: [CommonModule, FormsModule, IconComponent], template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in" (click)="close.emit()">
      <div 
        class="bg-white w-[400px] rounded-xl shadow-2xl p-6 flex flex-col items-center animate-scale-up border border-gray-100"
        (click)="$event.stopPropagation()"
      >
        <div class="flex justify-between w-full mb-6 items-center">
          <h3 class="font-bold text-gray-800 flex items-center gap-2">
            <app-icon name="mic" [size]="18" className="text-blue-500"></app-icon>
            \uC74C\uC131 \uBA54\uBAA8
          </h3>
          <button (click)="close.emit()" class="text-gray-400 hover:text-gray-600">
            <app-icon name="x" [size]="20"></app-icon>
          </button>
        </div>

        <!-- Visualizer -->
        <div class="flex items-center justify-center gap-1 h-16 mb-6 w-full px-4 bg-gray-50 rounded-lg">
          @if (isPlaying) {
            @for (bar of visualizerBars; track $index) {
              <div 
                class="w-1.5 bg-blue-500 rounded-full animate-wave" 
                [style.height.%]="bar.height"
                [style.animation-duration]="bar.speed"
              ></div>
            }
          } @else {
            @for (bar of visualizerBars; track $index) {
              <div class="w-1.5 bg-gray-300 rounded-full" [style.height.%]="bar.height * 0.5"></div>
            }
          }
        </div>

        <!-- Progress -->
        <div class="w-full px-2 mb-2">
          <input 
            type="range" 
            min="0" 
            max="100" 
            [(ngModel)]="progress" 
            class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          >
          <div class="flex justify-between text-xs text-gray-500 mt-2 font-mono">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(totalTime) }}</span>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-6 mb-6 mt-2">
          <button (click)="skip(-10)" class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <app-icon name="rewind" [size]="24"></app-icon>
          </button>
          
          <button 
            (click)="togglePlay()"
            class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
          >
            <app-icon [name]="isPlaying ? 'pause' : 'play'" [size]="24" className="fill-current"></app-icon>
          </button>

          <button (click)="skip(10)" class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <app-icon name="forward" [size]="24"></app-icon>
          </button>
        </div>

        <button (click)="delete.emit()" class="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full border border-transparent hover:border-red-100">
          \uC624\uB514\uC624 \uC0AD\uC81C
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;43846197aceaea3f5900b101766353d44ca9c3bd2956bd3c4f95591add975b61;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/pc/components/audio-modal/audio-modal.component.ts */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n@keyframes scale-up {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale-up {\n  animation: scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes wave {\n  0%, 100% {\n    transform: scaleY(0.5);\n  }\n  50% {\n    transform: scaleY(1);\n  }\n}\n.animate-wave {\n  animation-name: wave;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n}\n/*# sourceMappingURL=audio-modal.component.css.map */\n"] }]
  }], () => [], { date: [{
    type: Input
  }], close: [{
    type: Output
  }], delete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AudioModalComponent, { className: "AudioModalComponent", filePath: "src/app/modules/note/pc/components/audio-modal/audio-modal.component.ts", lineNumber: 91 });
})();

// src/app/modules/note/pc/components/settings-modal/settings-modal.component.ts
var SettingsModalComponent = class _SettingsModalComponent {
  close = new EventEmitter();
  static \u0275fac = function SettingsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsModalComponent, selectors: [["app-settings-modal"]], outputs: { close: "close" }, decls: 37, vars: 0, consts: [[1, "fixed", "inset-0", "z-50", "bg-black/50", "flex", "items-center", "justify-center", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-2xl", "w-[500px]", "max-h-[80vh]", "overflow-y-auto", "shadow-2xl", "p-6", 3, "click"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-xl", "font-bold"], [1, "p-2", "hover:bg-gray-100", "rounded-full", 3, "click"], ["name", "x"], [1, "space-y-6"], [1, "bg-gray-50", "p-4", "rounded-xl", "border", "border-gray-100"], [1, "text-sm", "font-bold", "text-gray-500", "mb-3"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-blue-100", "rounded-full", "flex", "items-center", "justify-center", "text-blue-600", "font-bold"], [1, "font-bold", "text-gray-800"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-500", "hover:text-red-500", "border", "border-gray-200", "px-3", "py-1.5", "rounded", "bg-white"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-gray-700"], [1, "w-10", "h-6", "bg-blue-600", "rounded-full", "relative", "cursor-pointer"], [1, "w-4", "h-4", "bg-white", "rounded-full", "absolute", "top-1", "right-1"], [1, "flex", "items-center", "justify-between", "text-sm", "text-gray-600"], [1, "text-center", "pt-4", "text-xs", "text-gray-400"]], template: function SettingsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function SettingsModalComponent_Template_div_click_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function SettingsModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "\uC124\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function SettingsModalComponent_Template_button_click_5_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275element(6, "app-icon", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "h3", 8);
      \u0275\u0275text(10, "\uACC4\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11);
      \u0275\u0275text(14, "U");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div")(16, "div", 12);
      \u0275\u0275text(17, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275text(19, "user@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275text(21, "\uB85C\uADF8\uC544\uC6C3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 7)(23, "h3", 8);
      \u0275\u0275text(24, "\uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "span", 16);
      \u0275\u0275text(27, "\uC790\uB3D9 \uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275element(29, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 19)(31, "span");
      \u0275\u0275text(32, "\uB9C8\uC9C0\uB9C9 \uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "\uBC29\uAE08 \uC804");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 20);
      \u0275\u0275text(36, " Easy Note Desktop v1.0.0 ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=settings-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsModalComponent, [{
    type: Component,
    args: [{ selector: "app-settings-modal", standalone: true, imports: [CommonModule, IconComponent], template: `
    <div class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center animate-fade-in" (click)="close.emit()">
      <div class="bg-white rounded-2xl w-[500px] max-h-[80vh] overflow-y-auto shadow-2xl p-6" (click)="$event.stopPropagation()">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">\uC124\uC815</h2>
          <button (click)="close.emit()" class="p-2 hover:bg-gray-100 rounded-full">
            <app-icon name="x"></app-icon>
          </button>
        </div>
        
        <div class="space-y-6">
          <!-- Account -->
          <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 class="text-sm font-bold text-gray-500 mb-3">\uACC4\uC815</h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">U</div>
                <div>
                  <div class="font-bold text-gray-800">User</div>
                  <div class="text-xs text-gray-500">user&#64;example.com</div>
                </div>
              </div>
              <button class="text-sm text-gray-500 hover:text-red-500 border border-gray-200 px-3 py-1.5 rounded bg-white">\uB85C\uADF8\uC544\uC6C3</button>
            </div>
          </div>

          <!-- Sync -->
          <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 class="text-sm font-bold text-gray-500 mb-3">\uB3D9\uAE30\uD654</h3>
            <div class="flex items-center justify-between mb-3">
              <span class="text-gray-700">\uC790\uB3D9 \uB3D9\uAE30\uD654</span>
              <div class="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                <div class="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
              </div>
            </div>
            <div class="flex items-center justify-between text-sm text-gray-600">
              <span>\uB9C8\uC9C0\uB9C9 \uB3D9\uAE30\uD654</span>
              <span>\uBC29\uAE08 \uC804</span>
            </div>
          </div>

          <div class="text-center pt-4 text-xs text-gray-400">
            Easy Note Desktop v1.0.0
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;f8c452e60dc25f9c76834f9025bf59ff3c2e49c1f895b5bde75ce2f2ec7cd26f;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/pc/components/settings-modal/settings-modal.component.ts */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=settings-modal.component.css.map */\n"] }]
  }], null, { close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsModalComponent, { className: "SettingsModalComponent", filePath: "src/app/modules/note/pc/components/settings-modal/settings-modal.component.ts", lineNumber: 62 });
})();

// src/app/modules/note/pc/components/context-menu/context-menu.component.ts
function ContextMenuComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function ContextMenuComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPin.emit(ctx_r1.data.noteId));
    });
    \u0275\u0275element(2, "app-icon", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 1);
    \u0275\u0275listener("click", function ContextMenuComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDuplicate.emit(ctx_r1.data.noteId));
    });
    \u0275\u0275element(5, "app-icon", 3);
    \u0275\u0275text(6, " \uB178\uD2B8 \uBCF5\uC81C ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 4);
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function ContextMenuComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete.emit(ctx_r1.data.noteId));
    });
    \u0275\u0275element(9, "app-icon", 6);
    \u0275\u0275text(10, " \uC0AD\uC81C ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275listener("click", function ContextMenuComponent_Conditional_0_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    })("contextmenu", function ContextMenuComponent_Conditional_0_Template_div_contextmenu_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.data.x, "px")("top", ctx_r1.data.y, "px");
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.isPinned ? "\uACE0\uC815 \uD574\uC81C" : "\uACE0\uC815", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 14);
  }
}
var ContextMenuComponent = class _ContextMenuComponent {
  data = null;
  close = new EventEmitter();
  onPin = new EventEmitter();
  onDuplicate = new EventEmitter();
  onDelete = new EventEmitter();
  static \u0275fac = function ContextMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextMenuComponent, selectors: [["app-context-menu"]], inputs: { data: "data" }, outputs: { close: "close", onPin: "onPin", onDuplicate: "onDuplicate", onDelete: "onDelete" }, decls: 1, vars: 1, consts: [[1, "fixed", "bg-white", "shadow-xl", "rounded-lg", "border", "border-gray-200", "py-1", "z-50", "min-w-[160px]", "animate-scale-up", "origin-top-left"], [1, "w-full", "text-left", "px-4", "py-2", "hover:bg-gray-100", "text-sm", "flex", "items-center", "gap-2", 3, "click"], ["name", "pin", 3, "size"], ["name", "copy", 3, "size"], [1, "h-px", "bg-gray-100", "my-1"], [1, "w-full", "text-left", "px-4", "py-2", "hover:bg-red-50", "text-red-500", "text-sm", "flex", "items-center", "gap-2", 3, "click"], ["name", "trash-2", 3, "size"], [1, "fixed", "inset-0", "z-40", 3, "click", "contextmenu"]], template: function ContextMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ContextMenuComponent_Conditional_0_Template, 12, 8);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.data ? 0 : -1);
    }
  }, dependencies: [CommonModule, IconComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_scale-up {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scale-up 0.15s ease-out;\n}\n/*# sourceMappingURL=context-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuComponent, [{
    type: Component,
    args: [{ selector: "app-context-menu", standalone: true, imports: [CommonModule, IconComponent], template: `
    @if (data) {
      <div 
        class="fixed bg-white shadow-xl rounded-lg border border-gray-200 py-1 z-50 min-w-[160px] animate-scale-up origin-top-left"
        [style.left.px]="data.x"
        [style.top.px]="data.y"
      >
        <button 
          (click)="onPin.emit(data.noteId)" 
          class="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm flex items-center gap-2"
        >
          <app-icon name="pin" [size]="14"></app-icon>
          {{ data.isPinned ? '\uACE0\uC815 \uD574\uC81C' : '\uACE0\uC815' }}
        </button>
        <button 
          (click)="onDuplicate.emit(data.noteId)" 
          class="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm flex items-center gap-2"
        >
          <app-icon name="copy" [size]="14"></app-icon> 
          \uB178\uD2B8 \uBCF5\uC81C
        </button>
        <div class="h-px bg-gray-100 my-1"></div>
        <button 
          (click)="onDelete.emit(data.noteId)" 
          class="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500 text-sm flex items-center gap-2"
        >
          <app-icon name="trash-2" [size]="14"></app-icon> 
          \uC0AD\uC81C
        </button>
      </div>
      <div class="fixed inset-0 z-40" (click)="close.emit()" (contextmenu)="close.emit()"></div>
    }
  `, styles: ["/* angular:styles/component:scss;c45c0604e0669a6ffafdce6239fe52d68a0ea2495b6aaadebe67cac9a46f43d7;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/pc/components/context-menu/context-menu.component.ts */\n@keyframes scale-up {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale-up {\n  animation: scale-up 0.15s ease-out;\n}\n/*# sourceMappingURL=context-menu.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], close: [{
    type: Output
  }], onPin: [{
    type: Output
  }], onDuplicate: [{
    type: Output
  }], onDelete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextMenuComponent, { className: "ContextMenuComponent", filePath: "src/app/modules/note/pc/components/context-menu/context-menu.component.ts", lineNumber: 57 });
})();

// src/app/modules/note/pc/pages/workspace/workspace.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PcWorkspaceComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-icon", 25);
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3, "\uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 48);
  }
}
function PcWorkspaceComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-note-list-item", 27);
    \u0275\u0275listener("onClick", function PcWorkspaceComponent_For_21_Template_app_note_list_item_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectNote($event));
    })("onPin", function PcWorkspaceComponent_For_21_Template_app_note_list_item_onPin_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.noteService.togglePin($event));
    })("onDelete", function PcWorkspaceComponent_For_21_Template_app_note_list_item_onDelete_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteNote($event));
    })("onContextMenu", function PcWorkspaceComponent_For_21_Template_app_note_list_item_onContextMenu_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleContextMenu($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("note", note_r3)("isActive", ctx_r1.activeNoteId() === note_r3.id);
  }
}
function PcWorkspaceComponent_Conditional_23_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.noteListOpen.set(true));
    });
    \u0275\u0275element(1, "app-icon", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function PcWorkspaceComponent_Conditional_23_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    \u0275\u0275property("value", cat_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r7);
  }
}
function PcWorkspaceComponent_Conditional_23_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Conditional_31_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showAudioModal.set(true));
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275element(2, "app-icon", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4, "\uC74C\uC131 \uBA54\uBAA8 \uC7AC\uC0DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 59);
    \u0275\u0275text(6, "03:00");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 20);
  }
}
function PcWorkspaceComponent_Conditional_23_Conditional_31_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "img", 60);
    \u0275\u0275elementStart(2, "button", 61);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Conditional_31_For_3_Template_button_click_2_listener() {
      const $index_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeImage($index_r10));
    });
    \u0275\u0275element(3, "app-icon", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r11, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 14);
  }
}
function PcWorkspaceComponent_Conditional_23_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275conditionalCreate(1, PcWorkspaceComponent_Conditional_23_Conditional_31_Conditional_1_Template, 7, 1, "div", 53);
    \u0275\u0275repeaterCreate(2, PcWorkspaceComponent_Conditional_23_Conditional_31_For_3_Template, 4, 2, "div", 54, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editorHasAudio() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.editorImages());
  }
}
function PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-drawing-canvas", 65);
    \u0275\u0275listener("apply", function PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_1_Template_app_drawing_canvas_apply_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleDrawingSave($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("initialData", ctx_r1.editorDrawing());
  }
}
function PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showDrawing.set(true));
    });
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementStart(2, "div", 68)(3, "span", 69);
    \u0275\u0275text(4, "\uC218\uC815\uD558\uAE30");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 70);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_2_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.deleteDrawing());
    });
    \u0275\u0275element(6, "app-icon", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.editorDrawing(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 16);
  }
}
function PcWorkspaceComponent_Conditional_23_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275conditionalCreate(1, PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_1_Template, 1, 1, "app-drawing-canvas", 63)(2, PcWorkspaceComponent_Conditional_23_Conditional_32_Conditional_2_Template, 7, 2, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDrawing() ? 1 : 2);
  }
}
function PcWorkspaceComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 28)(1, "div", 29);
    \u0275\u0275template(2, PcWorkspaceComponent_Conditional_23_button_2_Template, 2, 1, "button", 30);
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5)(9, "button", 33);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEditorPin());
    });
    \u0275\u0275element(10, "app-icon", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 35);
    \u0275\u0275elementStart(12, "button", 36);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteNote(ctx_r1.activeNoteId()));
    });
    \u0275\u0275element(13, "app-icon", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 38)(15, "input", 39);
    \u0275\u0275listener("ngModelChange", function PcWorkspaceComponent_Conditional_23_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateTitle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 40)(17, "button", 41);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r6 = \u0275\u0275reference(21);
      return \u0275\u0275resetView(fileInput_r6.click());
    });
    \u0275\u0275element(18, "app-icon", 42);
    \u0275\u0275text(19, " \uC774\uBBF8\uC9C0 ");
    \u0275\u0275elementStart(20, "input", 43, 0);
    \u0275\u0275listener("change", function PcWorkspaceComponent_Conditional_23_Template_input_change_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleImageUpload($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 41);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRecordingModal.set(true));
    });
    \u0275\u0275element(23, "app-icon", 44);
    \u0275\u0275text(24, " \uB179\uC74C ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 41);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_23_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDrawing.set(!ctx_r1.showDrawing()));
    });
    \u0275\u0275element(26, "app-icon", 45);
    \u0275\u0275text(27, " \uB4DC\uB85C\uC789 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 46);
    \u0275\u0275listener("ngModelChange", function PcWorkspaceComponent_Conditional_23_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateCategory($event));
    });
    \u0275\u0275repeaterCreate(29, PcWorkspaceComponent_Conditional_23_For_30_Template, 2, 2, "option", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, PcWorkspaceComponent_Conditional_23_Conditional_31_Template, 4, 1, "div", 48);
    \u0275\u0275conditionalCreate(32, PcWorkspaceComponent_Conditional_23_Conditional_32_Template, 3, 1, "div", 49);
    \u0275\u0275elementStart(33, "textarea", 50);
    \u0275\u0275listener("ngModelChange", function PcWorkspaceComponent_Conditional_23_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateContent($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.noteListOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editorCategory());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uB9C8\uC9C0\uB9C9 \uC218\uC815: ", \u0275\u0275pipeBind2(7, 20, (tmp_4_0 = ctx_r1.activeNote()) == null ? null : tmp_4_0.date, "MM.dd HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-blue-500", (tmp_5_0 = ctx_r1.activeNote()) == null ? null : tmp_5_0.isPinned);
    \u0275\u0275advance();
    \u0275\u0275property("size", 20)("className", ((tmp_7_0 = ctx_r1.activeNote()) == null ? null : tmp_7_0.isPinned) ? "fill-blue-500" : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.editorTitle());
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-purple-100", ctx_r1.showDrawing())("text-purple-700", ctx_r1.showDrawing());
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.editorCategory());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.noteService.categories().slice(1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editorImages().length > 0 || ctx_r1.editorHasAudio() ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDrawing() || ctx_r1.editorDrawing() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.editorContent());
  }
}
function PcWorkspaceComponent_Conditional_24_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_24_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.noteListOpen.set(true));
    });
    \u0275\u0275element(1, "app-icon", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function PcWorkspaceComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, PcWorkspaceComponent_Conditional_24_button_1_Template, 2, 1, "button", 71);
    \u0275\u0275elementStart(2, "div", 72);
    \u0275\u0275element(3, "app-icon", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 74);
    \u0275\u0275text(5, "\uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uB9CC\uB4DC\uC138\uC694");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 75);
    \u0275\u0275text(7, "\uC88C\uCE21 \uBAA9\uB85D\uC5D0\uC11C \uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uC0C8\uB85C\uC6B4 \uB178\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 76);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createNote());
    });
    \u0275\u0275element(9, "app-icon", 22);
    \u0275\u0275text(10, " \uC0C8 \uB178\uD2B8 \uC791\uC131 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.noteListOpen());
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 48);
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 20);
  }
}
function PcWorkspaceComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-settings-modal", 78);
    \u0275\u0275listener("close", function PcWorkspaceComponent_Conditional_27_Template_app_settings_modal_close_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showSettings.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function PcWorkspaceComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-audio-modal", 79);
    \u0275\u0275listener("close", function PcWorkspaceComponent_Conditional_28_Template_app_audio_modal_close_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAudioModal.set(false));
    })("delete", function PcWorkspaceComponent_Conditional_28_Template_app_audio_modal_delete_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleAudioDelete());
    });
    \u0275\u0275elementEnd();
  }
}
function PcWorkspaceComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 80)(2, "div", 81);
    \u0275\u0275text(3, "\uB179\uC74C \uC911...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 82);
    \u0275\u0275text(5, "00:05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 83);
    \u0275\u0275listener("click", function PcWorkspaceComponent_Conditional_29_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.finishRecording());
    });
    \u0275\u0275element(7, "div", 84);
    \u0275\u0275elementEnd()()();
  }
}
var PcWorkspaceComponent = class _PcWorkspaceComponent {
  noteService = inject(NoteService);
  // UI State
  sidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
  noteListOpen = signal(true, ...ngDevMode ? [{ debugName: "noteListOpen" }] : []);
  showSettings = signal(false, ...ngDevMode ? [{ debugName: "showSettings" }] : []);
  showAudioModal = signal(false, ...ngDevMode ? [{ debugName: "showAudioModal" }] : []);
  showRecordingModal = signal(false, ...ngDevMode ? [{ debugName: "showRecordingModal" }] : []);
  showDrawing = signal(false, ...ngDevMode ? [{ debugName: "showDrawing" }] : []);
  contextMenu = signal(null, ...ngDevMode ? [{ debugName: "contextMenu" }] : []);
  // Editor State
  activeNoteId = signal(null, ...ngDevMode ? [{ debugName: "activeNoteId" }] : []);
  editorTitle = signal("", ...ngDevMode ? [{ debugName: "editorTitle" }] : []);
  editorContent = signal("", ...ngDevMode ? [{ debugName: "editorContent" }] : []);
  editorCategory = signal("\uC5C5\uBB34", ...ngDevMode ? [{ debugName: "editorCategory" }] : []);
  editorImages = signal([], ...ngDevMode ? [{ debugName: "editorImages" }] : []);
  editorHasAudio = signal(false, ...ngDevMode ? [{ debugName: "editorHasAudio" }] : []);
  editorDrawing = signal(void 0, ...ngDevMode ? [{ debugName: "editorDrawing" }] : []);
  // Computed
  activeNote = computed(() => {
    const id = this.activeNoteId();
    return id ? this.noteService.getNoteById(id) : null;
  }, ...ngDevMode ? [{ debugName: "activeNote" }] : []);
  // Note Selection
  selectNote(note) {
    this.activeNoteId.set(note.id);
    this.editorTitle.set(note.title);
    this.editorContent.set(note.content);
    this.editorCategory.set(note.category);
    this.editorImages.set(note.images || []);
    this.editorHasAudio.set(note.hasAudio);
    this.editorDrawing.set(note.drawing);
    this.showDrawing.set(false);
  }
  createNote() {
    const note = this.noteService.createNote();
    this.selectNote(note);
  }
  deleteNote(id) {
    if (confirm("\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      this.noteService.deleteNote(id);
      if (this.activeNoteId() === id) {
        this.activeNoteId.set(null);
      }
    }
  }
  // Auto-save
  updateActiveNote(changes) {
    const id = this.activeNoteId();
    if (id) {
      this.noteService.updateNote(id, changes);
    }
  }
  updateTitle(val) {
    this.editorTitle.set(val);
    this.updateActiveNote({ title: val });
  }
  updateContent(val) {
    this.editorContent.set(val);
    this.updateActiveNote({ content: val });
  }
  updateCategory(val) {
    this.editorCategory.set(val);
    this.updateActiveNote({ category: val });
  }
  toggleEditorPin() {
    const id = this.activeNoteId();
    if (id) {
      this.noteService.togglePin(id);
    }
  }
  // Image
  handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const res = reader.result;
        this.editorImages.update((imgs) => [...imgs, res]);
        this.updateActiveNote({ images: this.editorImages() });
      };
      reader.readAsDataURL(file);
    }
  }
  removeImage(index) {
    this.editorImages.update((imgs) => imgs.filter((_, i) => i !== index));
    this.updateActiveNote({ images: this.editorImages() });
  }
  // Drawing
  handleDrawingSave(data) {
    this.editorDrawing.set(data);
    this.updateActiveNote({ drawing: data });
    this.showDrawing.set(false);
  }
  deleteDrawing() {
    this.editorDrawing.set(void 0);
    this.updateActiveNote({ drawing: void 0 });
  }
  // Audio
  finishRecording() {
    this.showRecordingModal.set(false);
    this.editorHasAudio.set(true);
    this.updateActiveNote({ hasAudio: true });
  }
  handleAudioDelete() {
    this.showAudioModal.set(false);
    this.editorHasAudio.set(false);
    this.updateActiveNote({ hasAudio: false });
  }
  // Context Menu
  handleContextMenu(data) {
    this.contextMenu.set({
      x: data.event.clientX,
      y: data.event.clientY,
      noteId: data.note.id,
      isPinned: data.note.isPinned
    });
  }
  handleContextPin(id) {
    this.noteService.togglePin(id);
    this.contextMenu.set(null);
  }
  handleContextDuplicate(id) {
    this.noteService.duplicateNote(id);
    this.contextMenu.set(null);
  }
  handleContextDelete(id) {
    this.deleteNote(id);
    this.contextMenu.set(null);
  }
  static \u0275fac = function PcWorkspaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PcWorkspaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PcWorkspaceComponent, selectors: [["app-pc-workspace"]], decls: 31, vars: 23, consts: [["fileInput", ""], [1, "flex", "h-screen", "bg-gray-50", "text-slate-800", "font-sans", "overflow-hidden"], [3, "toggle", "openSettings", "collapsed"], [1, "bg-white", "border-r", "border-gray-200", "flex", "flex-col", "shrink-0", "transition-all", "duration-300", "ease-in-out"], [1, "p-4", "border-b", "border-gray-100", "space-y-3", "shrink-0"], [1, "flex", "items-center", "gap-2"], [1, "relative", "flex-1"], ["name", "search", "className", "absolute left-3 top-2.5 text-gray-400", 3, "size"], ["type", "text", "placeholder", "\uB178\uD2B8 \uAC80\uC0C9", 1, "w-full", "bg-gray-100", "pl-9", "pr-4", "py-2", "rounded-lg", "text-sm", "border-none", "focus:ring-2", "focus:ring-blue-100", "transition-all", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], ["title", "\uBAA9\uB85D \uB2EB\uAE30", 1, "text-gray-400", "hover:text-gray-600", "p-1.5", "hover:bg-gray-100", "rounded-md", "shrink-0", 3, "click"], ["name", "chevron-left", 3, "size"], [1, "flex", "justify-between", "items-end"], [1, "text-xs", "font-bold", "text-gray-500", "pl-1"], [1, "text-xs", "border-none", "bg-transparent", "text-gray-500", "focus:ring-0", "cursor-pointer", "hover:text-gray-800", "p-0", 3, "ngModelChange", "ngModel"], ["value", "date"], ["value", "name"], [1, "flex-1", "overflow-y-auto", "scrollbar-thin"], [1, "flex", "flex-col", "items-center", "justify-center", "h-64", "text-gray-400", "opacity-60"], [3, "note", "isActive"], [1, "flex-1", "bg-white", "flex", "flex-col", "min-w-0", "relative"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "bg-gray-50", "text-gray-400", "select-none", "relative"], ["title", "\uC0C8 \uB178\uD2B8 (N)", 1, "absolute", "bottom-8", "right-8", "w-14", "h-14", "bg-blue-600", "text-white", "rounded-full", "shadow-xl", "shadow-blue-600/30", "flex", "items-center", "justify-center", "hover:bg-blue-700", "hover:scale-105", "transition-all", "z-10", 3, "click"], ["name", "plus", 3, "size"], [1, "fixed", "inset-0", "z-50", "bg-black/60", "flex", "items-center", "justify-center", "animate-fade-in"], [3, "close", "onPin", "onDuplicate", "onDelete", "data"], ["name", "folder-edit", "className", "mb-2", 3, "size"], [1, "text-sm"], [3, "onClick", "onPin", "onDelete", "onContextMenu", "note", "isActive"], [1, "h-16", "border-b", "border-gray-100", "flex", "items-center", "justify-between", "px-6", "bg-white", "shrink-0"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-500"], ["class", "mr-2 text-gray-500 hover:text-gray-800 p-1 rounded-md hover:bg-gray-100", "title", "\uBAA9\uB85D \uC5F4\uAE30", 3, "click", 4, "ngIf"], [1, "bg-gray-100", "px-2", "py-1", "rounded"], [1, "text-xs"], [1, "p-2", "text-gray-400", "hover:text-blue-500", "hover:bg-blue-50", "rounded-lg", "transition-colors", 3, "click"], ["name", "pin", 3, "size", "className"], [1, "h-4", "w-px", "bg-gray-200", "mx-1"], [1, "p-2", "text-gray-400", "hover:text-red-500", "hover:bg-red-50", "rounded-lg", "transition-colors", 3, "click"], ["name", "trash-2", 3, "size"], [1, "flex-1", "overflow-y-auto", "p-8", "max-w-4xl", "mx-auto", "w-full"], ["type", "text", "placeholder", "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694", 1, "w-full", "text-4xl", "font-bold", "text-gray-900", "placeholder-gray-300", "border-none", "focus:ring-0", "px-0", "mb-6", "bg-transparent", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-3", "mb-6", "p-2", "bg-gray-50", "rounded-xl", "border", "border-gray-100", "w-fit"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "hover:bg-white", "hover:shadow-sm", "rounded-lg", "text-sm", "text-gray-600", "transition-all", 3, "click"], ["name", "image", 3, "size"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["name", "mic", 3, "size"], ["name", "pen-tool", 3, "size"], [1, "bg-transparent", "border-none", "text-sm", "text-gray-600", "focus:ring-0", "cursor-pointer", "hover:bg-white", "hover:shadow-sm", "rounded-lg", "py-1.5", "pl-2", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4", "mb-6"], [1, "mb-6", "h-[400px]", "w-full", "transition-all"], ["placeholder", "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694...", 1, "w-full", "min-h-[50vh]", "resize-none", "border-none", "focus:ring-0", "text-lg", "leading-relaxed", "text-gray-700", "placeholder-gray-300", "p-0", "bg-transparent", 3, "ngModelChange", "ngModel"], ["title", "\uBAA9\uB85D \uC5F4\uAE30", 1, "mr-2", "text-gray-500", "hover:text-gray-800", "p-1", "rounded-md", "hover:bg-gray-100", 3, "click"], ["name", "chevron-right", 3, "size"], [1, "h-40", "bg-blue-50", "border", "border-blue-100", "rounded-xl", "flex", "flex-col", "items-center", "justify-center", "cursor-pointer", "hover:shadow-md", "transition-shadow", "group"], [1, "relative", "group", "h-40", "rounded-xl", "overflow-hidden", "border", "border-gray-200", "bg-gray-50"], [1, "h-40", "bg-blue-50", "border", "border-blue-100", "rounded-xl", "flex", "flex-col", "items-center", "justify-center", "cursor-pointer", "hover:shadow-md", "transition-shadow", "group", 3, "click"], [1, "w-12", "h-12", "bg-white", "rounded-full", "flex", "items-center", "justify-center", "text-blue-500", "shadow-sm", "group-hover:scale-110", "transition-transform"], ["name", "play", "className", "fill-current ml-1", 3, "size"], [1, "mt-3", "text-sm", "font-medium", "text-blue-700"], [1, "text-xs", "text-blue-400", "mt-1"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "absolute", "top-2", "right-2", "p-1", "bg-black/50", "text-white", "rounded", "opacity-0", "group-hover:opacity-100", "transition-opacity", 3, "click"], ["name", "x", 3, "size"], [1, "h-full", "block", 3, "initialData"], [1, "relative", "group", "h-full", "border", "border-purple-100", "rounded-lg", "bg-white", "shadow-sm", "overflow-hidden", "flex", "items-center", "justify-center", "cursor-pointer"], [1, "h-full", "block", 3, "apply", "initialData"], [1, "relative", "group", "h-full", "border", "border-purple-100", "rounded-lg", "bg-white", "shadow-sm", "overflow-hidden", "flex", "items-center", "justify-center", "cursor-pointer", 3, "click"], [1, "max-w-full", "max-h-full", "object-contain", 3, "src"], [1, "absolute", "inset-0", "bg-black/0", "group-hover:bg-black/5", "transition-colors", "flex", "items-center", "justify-center", "opacity-0", "group-hover:opacity-100"], [1, "bg-white", "px-3", "py-1.5", "rounded-full", "shadow", "text-sm", "font-medium"], [1, "absolute", "top-3", "right-3", "p-1.5", "bg-white", "text-red-500", "shadow", "rounded-md", "opacity-0", "group-hover:opacity-100", "transition-opacity", "hover:bg-red-50", 3, "click"], ["class", "absolute top-4 left-4 p-2 bg-white shadow-md border border-gray-100 rounded-full text-gray-500 hover:text-blue-600 transition-colors z-10", "title", "\uBAA9\uB85D \uC5F4\uAE30", 3, "click", 4, "ngIf"], [1, "w-24", "h-24", "bg-gray-200", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], ["name", "folder-edit", "className", "text-gray-400", 3, "size"], [1, "text-xl", "font-bold", "text-gray-600", "mb-2"], [1, "text-sm", "text-gray-400", "mb-8"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "px-6", "py-3", "rounded-full", "font-bold", "shadow-lg", "shadow-blue-200", "transition-all", "hover:scale-105", "flex", "items-center", "gap-2", 3, "click"], ["title", "\uBAA9\uB85D \uC5F4\uAE30", 1, "absolute", "top-4", "left-4", "p-2", "bg-white", "shadow-md", "border", "border-gray-100", "rounded-full", "text-gray-500", "hover:text-blue-600", "transition-colors", "z-10", 3, "click"], [3, "close"], [3, "close", "delete"], [1, "bg-white", "rounded-2xl", "p-8", "flex", "flex-col", "items-center", "gap-6", "shadow-2xl"], [1, "text-xl", "font-bold", "animate-pulse", "text-red-500"], [1, "text-4xl", "font-mono", "font-bold"], [1, "bg-red-500", "hover:bg-red-600", "text-white", "rounded-full", "p-4", "shadow-lg", "transition-transform", "hover:scale-110", 3, "click"], [1, "w-6", "h-6", "bg-white", "rounded-sm"]], template: function PcWorkspaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-sidebar-nav", 2);
      \u0275\u0275listener("toggle", function PcWorkspaceComponent_Template_app_sidebar_nav_toggle_1_listener() {
        return ctx.sidebarCollapsed.set(!ctx.sidebarCollapsed());
      })("openSettings", function PcWorkspaceComponent_Template_app_sidebar_nav_openSettings_1_listener() {
        return ctx.showSettings.set(true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
      \u0275\u0275element(6, "app-icon", 7);
      \u0275\u0275elementStart(7, "input", 8);
      \u0275\u0275listener("ngModelChange", function PcWorkspaceComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.noteService.searchQuery.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 9);
      \u0275\u0275listener("click", function PcWorkspaceComponent_Template_button_click_8_listener() {
        return ctx.noteListOpen.set(false);
      });
      \u0275\u0275element(9, "app-icon", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 11)(11, "span", 12);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 13);
      \u0275\u0275listener("ngModelChange", function PcWorkspaceComponent_Template_select_ngModelChange_13_listener($event) {
        return ctx.noteService.sortOrder.set($event);
      });
      \u0275\u0275elementStart(14, "option", 14);
      \u0275\u0275text(15, "\uCD5C\uC2E0\uC21C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 15);
      \u0275\u0275text(17, "\uC774\uB984\uC21C");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 16);
      \u0275\u0275conditionalCreate(19, PcWorkspaceComponent_Conditional_19_Template, 4, 1, "div", 17);
      \u0275\u0275repeaterCreate(20, PcWorkspaceComponent_For_21_Template, 1, 2, "app-note-list-item", 18, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "main", 19);
      \u0275\u0275conditionalCreate(23, PcWorkspaceComponent_Conditional_23_Template, 34, 23)(24, PcWorkspaceComponent_Conditional_24_Template, 11, 3, "div", 20);
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function PcWorkspaceComponent_Template_button_click_25_listener() {
        return ctx.createNote();
      });
      \u0275\u0275element(26, "app-icon", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(27, PcWorkspaceComponent_Conditional_27_Template, 1, 0, "app-settings-modal");
      \u0275\u0275conditionalCreate(28, PcWorkspaceComponent_Conditional_28_Template, 1, 0, "app-audio-modal");
      \u0275\u0275conditionalCreate(29, PcWorkspaceComponent_Conditional_29_Template, 8, 0, "div", 23);
      \u0275\u0275elementStart(30, "app-context-menu", 24);
      \u0275\u0275listener("close", function PcWorkspaceComponent_Template_app_context_menu_close_30_listener() {
        return ctx.contextMenu.set(null);
      })("onPin", function PcWorkspaceComponent_Template_app_context_menu_onPin_30_listener($event) {
        return ctx.handleContextPin($event);
      })("onDuplicate", function PcWorkspaceComponent_Template_app_context_menu_onDuplicate_30_listener($event) {
        return ctx.handleContextDuplicate($event);
      })("onDelete", function PcWorkspaceComponent_Template_app_context_menu_onDelete_30_listener($event) {
        return ctx.handleContextDelete($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("collapsed", ctx.sidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275classProp("w-80", ctx.noteListOpen())("w-0", !ctx.noteListOpen())("opacity-0", !ctx.noteListOpen())("overflow-hidden", !ctx.noteListOpen())("border-r-0", !ctx.noteListOpen());
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.noteService.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.noteService.filteredNotes().length, " Notes");
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.noteService.sortOrder());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.noteService.filteredNotes().length === 0 ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.noteService.filteredNotes());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeNote() ? 23 : 24);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSettings() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAudioModal() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRecordingModal() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.contextMenu());
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    DrawingCanvasComponent,
    SidebarNavComponent,
    NoteListItemComponent,
    AudioModalComponent,
    SettingsModalComponent,
    ContextMenuComponent,
    DatePipe
  ], styles: ["\n\n.scrollbar-thin[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollbar-thin[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.scrollbar-thin[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #cbd5e1;\n  border-radius: 3px;\n}\n.scrollbar-thin[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=workspace.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PcWorkspaceComponent, [{
    type: Component,
    args: [{ selector: "app-pc-workspace", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IconComponent,
      DrawingCanvasComponent,
      SidebarNavComponent,
      NoteListItemComponent,
      AudioModalComponent,
      SettingsModalComponent,
      ContextMenuComponent
    ], template: `
    <div class="flex h-screen bg-gray-50 text-slate-800 font-sans overflow-hidden">
      
      <!-- [LEFT] Sidebar Navigation -->
      <app-sidebar-nav 
        [collapsed]="sidebarCollapsed()"
        (toggle)="sidebarCollapsed.set(!sidebarCollapsed())"
        (openSettings)="showSettings.set(true)"
      ></app-sidebar-nav>

      <!-- [MIDDLE] Note List -->
      <div 
        class="bg-white border-r border-gray-200 flex flex-col shrink-0 transition-all duration-300 ease-in-out"
        [class.w-80]="noteListOpen()"
        [class.w-0]="!noteListOpen()"
        [class.opacity-0]="!noteListOpen()"
        [class.overflow-hidden]="!noteListOpen()"
        [class.border-r-0]="!noteListOpen()"
      >
        <div class="p-4 border-b border-gray-100 space-y-3 shrink-0">
          <!-- Search and Collapse Button -->
          <div class="flex items-center gap-2">
            <div class="relative flex-1">
              <app-icon name="search" [size]="16" className="absolute left-3 top-2.5 text-gray-400"></app-icon>
              <input 
                type="text" 
                [ngModel]="noteService.searchQuery()" 
                (ngModelChange)="noteService.searchQuery.set($event)"
                placeholder="\uB178\uD2B8 \uAC80\uC0C9" 
                class="w-full bg-gray-100 pl-9 pr-4 py-2 rounded-lg text-sm border-none focus:ring-2 focus:ring-blue-100 transition-all placeholder-gray-400"
              >
            </div>
            <button (click)="noteListOpen.set(false)" class="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-md shrink-0" title="\uBAA9\uB85D \uB2EB\uAE30">
              <app-icon name="chevron-left" [size]="20"></app-icon>
            </button>
          </div>

          <div class="flex justify-between items-end">
            <span class="text-xs font-bold text-gray-500 pl-1">{{ noteService.filteredNotes().length }} Notes</span>
            <select 
              [ngModel]="noteService.sortOrder()" 
              (ngModelChange)="noteService.sortOrder.set($event)"
              class="text-xs border-none bg-transparent text-gray-500 focus:ring-0 cursor-pointer hover:text-gray-800 p-0"
            >
              <option value="date">\uCD5C\uC2E0\uC21C</option>
              <option value="name">\uC774\uB984\uC21C</option>
            </select>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto scrollbar-thin">
          @if (noteService.filteredNotes().length === 0) {
            <div class="flex flex-col items-center justify-center h-64 text-gray-400 opacity-60">
              <app-icon name="folder-edit" [size]="48" className="mb-2"></app-icon>
              <span class="text-sm">\uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</span>
            </div>
          }
          @for (note of noteService.filteredNotes(); track note.id) {
            <app-note-list-item 
              [note]="note" 
              [isActive]="activeNoteId() === note.id"
              (onClick)="selectNote($event)"
              (onPin)="noteService.togglePin($event)"
              (onDelete)="deleteNote($event)"
              (onContextMenu)="handleContextMenu($event)"
            ></app-note-list-item>
          }
        </div>
      </div>

      <!-- [RIGHT] Editor Workspace -->
      <main class="flex-1 bg-white flex flex-col min-w-0 relative">
        @if (activeNote()) {
          <!-- Editor Header -->
          <header class="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <!-- Expand List Button -->
              <button *ngIf="!noteListOpen()" (click)="noteListOpen.set(true)" class="mr-2 text-gray-500 hover:text-gray-800 p-1 rounded-md hover:bg-gray-100" title="\uBAA9\uB85D \uC5F4\uAE30">
                <app-icon name="chevron-right" [size]="20"></app-icon>
              </button>

              <span class="bg-gray-100 px-2 py-1 rounded">{{ editorCategory() }}</span>
              <span class="text-xs">\uB9C8\uC9C0\uB9C9 \uC218\uC815: {{ activeNote()?.date | date:'MM.dd HH:mm' }}</span>
            </div>
            
            <div class="flex items-center gap-2">
              <button 
                (click)="toggleEditorPin()" 
                class="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" 
                [class.text-blue-500]="activeNote()?.isPinned"
              >
                <app-icon name="pin" [size]="20" [className]="activeNote()?.isPinned ? 'fill-blue-500' : ''"></app-icon>
              </button>
              <div class="h-4 w-px bg-gray-200 mx-1"></div>
              <button (click)="deleteNote(activeNoteId()!)" class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <app-icon name="trash-2" [size]="20"></app-icon>
              </button>
            </div>
          </header>

          <!-- Editor Body -->
          <div class="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
            <input 
              type="text" 
              [ngModel]="editorTitle()" 
              (ngModelChange)="updateTitle($event)"
              placeholder="\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694" 
              class="w-full text-4xl font-bold text-gray-900 placeholder-gray-300 border-none focus:ring-0 px-0 mb-6 bg-transparent"
            >

            <!-- Tools / Attachments Bar -->
            <div class="flex items-center gap-3 mb-6 p-2 bg-gray-50 rounded-xl border border-gray-100 w-fit">
              <button (click)="fileInput.click()" class="flex items-center gap-2 px-3 py-1.5 hover:bg-white hover:shadow-sm rounded-lg text-sm text-gray-600 transition-all">
                <app-icon name="image" [size]="16"></app-icon> \uC774\uBBF8\uC9C0
                <input #fileInput type="file" class="hidden" accept="image/*" (change)="handleImageUpload($event)">
              </button>
              <button (click)="showRecordingModal.set(true)" class="flex items-center gap-2 px-3 py-1.5 hover:bg-white hover:shadow-sm rounded-lg text-sm text-gray-600 transition-all">
                <app-icon name="mic" [size]="16"></app-icon> \uB179\uC74C
              </button>
              <button 
                (click)="showDrawing.set(!showDrawing())" 
                class="flex items-center gap-2 px-3 py-1.5 hover:bg-white hover:shadow-sm rounded-lg text-sm text-gray-600 transition-all" 
                [class.bg-purple-100]="showDrawing()" 
                [class.text-purple-700]="showDrawing()"
              >
                <app-icon name="pen-tool" [size]="16"></app-icon> \uB4DC\uB85C\uC789
              </button>
              <select 
                [ngModel]="editorCategory()" 
                (ngModelChange)="updateCategory($event)"
                class="bg-transparent border-none text-sm text-gray-600 focus:ring-0 cursor-pointer hover:bg-white hover:shadow-sm rounded-lg py-1.5 pl-2"
              >
                @for (cat of noteService.categories().slice(1); track cat) {
                  <option [value]="cat">{{ cat }}</option>
                }
              </select>
            </div>

            <!-- Attachments Grid -->
            @if (editorImages().length > 0 || editorHasAudio()) {
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                @if (editorHasAudio()) {
                  <div (click)="showAudioModal.set(true)" class="h-40 bg-blue-50 border border-blue-100 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow group">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
                      <app-icon name="play" [size]="20" className="fill-current ml-1"></app-icon>
                    </div>
                    <span class="mt-3 text-sm font-medium text-blue-700">\uC74C\uC131 \uBA54\uBAA8 \uC7AC\uC0DD</span>
                    <span class="text-xs text-blue-400 mt-1">03:00</span>
                  </div>
                }
                @for (img of editorImages(); track $index) {
                  <div class="relative group h-40 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                    <img [src]="img" class="w-full h-full object-cover">
                    <button (click)="removeImage($index)" class="absolute top-2 right-2 p-1 bg-black/50 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      <app-icon name="x" [size]="14"></app-icon>
                    </button>
                  </div>
                }
              </div>
            }

            <!-- Drawing Canvas Area -->
            @if (showDrawing() || editorDrawing()) {
              <div class="mb-6 h-[400px] w-full transition-all">
                @if (showDrawing()) {
                  <app-drawing-canvas 
                    [initialData]="editorDrawing()" 
                    (apply)="handleDrawingSave($event)"
                    class="h-full block"
                  ></app-drawing-canvas>
                } @else {
                  <div class="relative group h-full border border-purple-100 rounded-lg bg-white shadow-sm overflow-hidden flex items-center justify-center cursor-pointer" (click)="showDrawing.set(true)">
                    <img [src]="editorDrawing()" class="max-w-full max-h-full object-contain">
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span class="bg-white px-3 py-1.5 rounded-full shadow text-sm font-medium">\uC218\uC815\uD558\uAE30</span>
                    </div>
                    <button (click)="$event.stopPropagation(); deleteDrawing()" class="absolute top-3 right-3 p-1.5 bg-white text-red-500 shadow rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
                      <app-icon name="trash-2" [size]="16"></app-icon>
                    </button>
                  </div>
                }
              </div>
            }

            <!-- Main Text Content -->
            <textarea 
              [ngModel]="editorContent()" 
              (ngModelChange)="updateContent($event)"
              placeholder="\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694..." 
              class="w-full min-h-[50vh] resize-none border-none focus:ring-0 text-lg leading-relaxed text-gray-700 placeholder-gray-300 p-0 bg-transparent"
            ></textarea>
          </div>
        } @else {
          <!-- Empty State -->
          <div class="flex-1 flex flex-col items-center justify-center bg-gray-50 text-gray-400 select-none relative">
            <!-- Expand List Button (Empty State) -->
            <button *ngIf="!noteListOpen()" (click)="noteListOpen.set(true)" class="absolute top-4 left-4 p-2 bg-white shadow-md border border-gray-100 rounded-full text-gray-500 hover:text-blue-600 transition-colors z-10" title="\uBAA9\uB85D \uC5F4\uAE30">
              <app-icon name="chevron-right" [size]="20"></app-icon>
            </button>

            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <app-icon name="folder-edit" [size]="48" className="text-gray-400"></app-icon>
            </div>
            <h2 class="text-xl font-bold text-gray-600 mb-2">\uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uB9CC\uB4DC\uC138\uC694</h2>
            <p class="text-sm text-gray-400 mb-8">\uC88C\uCE21 \uBAA9\uB85D\uC5D0\uC11C \uB178\uD2B8\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uC0C8\uB85C\uC6B4 \uB178\uD2B8\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
            <button (click)="createNote()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-blue-200 transition-all hover:scale-105 flex items-center gap-2">
              <app-icon name="plus" [size]="20"></app-icon>
              \uC0C8 \uB178\uD2B8 \uC791\uC131
            </button>
          </div>
        }
        
        <!-- Floating FAB -->
        <button 
          (click)="createNote()" 
          class="absolute bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all z-10"
          title="\uC0C8 \uB178\uD2B8 (N)"
        >
          <app-icon name="plus" [size]="28"></app-icon>
        </button>
      </main>

      <!-- Settings Modal -->
      @if (showSettings()) {
        <app-settings-modal (close)="showSettings.set(false)"></app-settings-modal>
      }

      <!-- Audio Player Modal -->
      @if (showAudioModal()) {
        <app-audio-modal 
          (close)="showAudioModal.set(false)" 
          (delete)="handleAudioDelete()"
        ></app-audio-modal>
      }

      <!-- Recording Modal -->
      @if (showRecordingModal()) {
        <div class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center animate-fade-in">
          <div class="bg-white rounded-2xl p-8 flex flex-col items-center gap-6 shadow-2xl">
            <div class="text-xl font-bold animate-pulse text-red-500">\uB179\uC74C \uC911...</div>
            <div class="text-4xl font-mono font-bold">00:05</div>
            <button (click)="finishRecording()" class="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110">
              <div class="w-6 h-6 bg-white rounded-sm"></div>
            </button>
          </div>
        </div>
      }

      <!-- Context Menu -->
      <app-context-menu 
        [data]="contextMenu()"
        (close)="contextMenu.set(null)"
        (onPin)="handleContextPin($event)"
        (onDuplicate)="handleContextDuplicate($event)"
        (onDelete)="handleContextDelete($event)"
      ></app-context-menu>
    </div>
  `, styles: ["/* angular:styles/component:scss;34dcbe98fa47a964c19f83c6c211bd9660927d507442dff53ee549a577b45c6f;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/note/pc/pages/workspace/workspace.component.ts */\n.scrollbar-thin::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollbar-thin::-webkit-scrollbar-track {\n  background: transparent;\n}\n.scrollbar-thin::-webkit-scrollbar-thumb {\n  background-color: #cbd5e1;\n  border-radius: 3px;\n}\n.scrollbar-thin::-webkit-scrollbar-thumb:hover {\n  background-color: #94a3b8;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.2s ease-out;\n}\n/*# sourceMappingURL=workspace.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PcWorkspaceComponent, { className: "PcWorkspaceComponent", filePath: "src/app/modules/note/pc/pages/workspace/workspace.component.ts", lineNumber: 294 });
})();
export {
  PcWorkspaceComponent
};
//# sourceMappingURL=chunk-QXTHQF2Q.js.map
