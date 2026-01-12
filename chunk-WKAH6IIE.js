import {
  MatSnackBar
} from "./chunk-XGFL2WJQ.js";
import {
  SharedModule,
  WindowModalComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import {
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MatDialog
} from "./chunk-EWZCM5ON.js";
import {
  MatButtonModule
} from "./chunk-5Z7BUDXM.js";
import {
  Router,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  DomSanitizer,
  HttpClient,
  HttpClientModule
} from "./chunk-OYJIDA3L.js";
import "./chunk-X67QRSHQ.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgStyle,
  Output,
  Pipe,
  Subscription,
  ViewChild,
  ViewContainerRef,
  debounceTime,
  fromEvent,
  inject,
  input,
  map,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/desk/components/spec-doc/spec-doc.component.ts
var _forTrack0 = ($index, $item) => $item.id + "_" + $index;
var _forTrack1 = ($index, $item) => $item.category + "_" + $index;
var _forTrack2 = ($index, $item) => $item + "_" + $index;
function SpecDocComponent_Conditional_2_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "span", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const spec_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r1.description);
    \u0275\u0275advance();
    \u0275\u0275property("title", spec_r1.details);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(spec_r1.details || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getPriorityClass(spec_r1.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", spec_r1.priority, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(spec_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", spec_r1.status, " ");
  }
}
function SpecDocComponent_Conditional_2_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "strong");
    \u0275\u0275text(2, "AI \uC5D4\uC9C4:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.systemArchitecture.aiEngine, " ");
  }
}
function SpecDocComponent_Conditional_2_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "strong");
    \u0275\u0275text(2, "\uD30C\uC77C \uC800\uC7A5\uC18C:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.systemArchitecture.fileStorage, " ");
  }
}
function SpecDocComponent_Conditional_2_For_71_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3);
  }
}
function SpecDocComponent_Conditional_2_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, SpecDocComponent_Conditional_2_For_71_For_5_Template, 2, 1, "li", null, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(req_r4.items);
  }
}
function SpecDocComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2, "\uD504\uB85C\uC81D\uD2B8 \uAC1C\uC694");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "p")(5, "strong");
    \u0275\u0275text(6, "\uD504\uB85C\uC81D\uD2B8\uBA85:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "\uBAA9\uD45C:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "\uB300\uC0C1 \uC0AC\uC6A9\uC790:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p")(17, "strong");
    \u0275\u0275text(18, "\uAC1C\uBC1C \uAE30\uAC04:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p")(21, "strong");
    \u0275\u0275text(22, "\uC0C1\uD0DC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 4);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 2)(26, "h2");
    \u0275\u0275text(27, "\uC8FC\uC694 \uAE30\uB2A5 \uBAA9\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 5)(29, "div", 6)(30, "div", 7);
    \u0275\u0275text(31, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 8);
    \u0275\u0275text(33, "\uAE30\uB2A5\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 9);
    \u0275\u0275text(35, "\uC124\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 10);
    \u0275\u0275text(37, "\uC0C1\uC138");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 11);
    \u0275\u0275text(39, "\uC6B0\uC120\uC21C\uC704");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 12);
    \u0275\u0275text(41, "\uC0C1\uD0DC");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(42, SpecDocComponent_Conditional_2_For_43_Template, 15, 11, "div", 13, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 2)(45, "h2");
    \u0275\u0275text(46, "\uC2DC\uC2A4\uD15C \uC544\uD0A4\uD14D\uCC98");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 14)(48, "div", 15)(49, "strong");
    \u0275\u0275text(50, "\uD504\uB860\uD2B8\uC5D4\uB4DC:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 15)(53, "strong");
    \u0275\u0275text(54, "\uBC31\uC5D4\uB4DC:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 15)(57, "strong");
    \u0275\u0275text(58, "\uB370\uC774\uD130\uBCA0\uC774\uC2A4:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(60, SpecDocComponent_Conditional_2_Conditional_60_Template, 4, 1, "div", 15);
    \u0275\u0275conditionalCreate(61, SpecDocComponent_Conditional_2_Conditional_61_Template, 4, 1, "div", 15);
    \u0275\u0275elementStart(62, "div", 15)(63, "strong");
    \u0275\u0275text(64, "\uBC30\uD3EC:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 2)(67, "h2");
    \u0275\u0275text(68, "\uC694\uAD6C\uC0AC\uD56D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 16);
    \u0275\u0275repeaterCreate(70, SpecDocComponent_Conditional_2_For_71_Template, 6, 1, "div", 17, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.overview.projectName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.overview.objective);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.overview.targetUsers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.overview.developmentPeriod);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentProjectSpec.overview.status);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.currentProjectSpec.specifications);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.systemArchitecture.frontend, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.systemArchitecture.backend, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.systemArchitecture.database, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentProjectSpec.systemArchitecture.aiEngine ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentProjectSpec.systemArchitecture.fileStorage ? 61 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentProjectSpec.systemArchitecture.deployment, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.currentProjectSpec.requirements);
  }
}
var SpecDocComponent = class _SpecDocComponent {
  http;
  folderType = "calendar";
  projectSpecs = {};
  currentProjectSpec = null;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadProjectSpecs();
  }
  ngOnChanges(changes) {
    if (changes["folderType"] && !changes["folderType"].firstChange) {
      this.updateCurrentSpec();
    }
  }
  ngAfterViewInit() {
    if (Object.keys(this.projectSpecs).length > 0) {
      this.updateCurrentSpec();
    }
  }
  loadProjectSpecs() {
    this.http.get("/assets/data/project-specs.json").subscribe((data) => {
      this.projectSpecs = data;
      this.updateCurrentSpec();
    }, (error) => {
      console.error("Failed to load spec data:", error);
    });
  }
  updateCurrentSpec() {
    this.currentProjectSpec = this.projectSpecs[this.folderType] || null;
  }
  getStatusClass(status) {
    switch (status) {
      case "\uC9C4\uD589\uC911":
        return "in-progress";
      case "\uC644\uB8CC":
        return "completed";
      case "\uACC4\uD68D":
        return "planned";
      default:
        return "";
    }
  }
  getPriorityClass(priority) {
    switch (priority) {
      case "\uB192\uC74C":
        return "high";
      case "\uC911\uAC04":
        return "medium";
      case "\uB0AE\uC74C":
        return "low";
      default:
        return "";
    }
  }
  static \u0275fac = function SpecDocComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpecDocComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecDocComponent, selectors: [["app-spec-doc"]], inputs: { folderType: "folderType" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [[1, "spec-doc-container"], [1, "spec-content"], [1, "spec-section"], [1, "overview-box"], [1, "status-badge"], [1, "spec-table"], [1, "table-header"], [1, "col-id"], [1, "col-title"], [1, "col-description"], [1, "col-details"], [1, "col-priority"], [1, "col-status"], [1, "table-row"], [1, "architecture-box"], [1, "arch-item"], [1, "requirements-container"], [1, "requirement-group"], [1, "col-details", 3, "title"], [1, "badge", "priority"], [1, "badge", "status"]], template: function SpecDocComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, SpecDocComponent_Conditional_2_Template, 72, 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentProjectSpec ? 2 : -1);
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.spec-doc-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #f0f4f8 100%);\n  padding: 0;\n  overflow-y: auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n}\n.spec-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 16px 30px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);\n}\n.spec-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.spec-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .folder-tag[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.spec-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 3px 0 0 0;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.spec-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.spec-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.spec-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.spec-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.spec-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.spec-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.spec-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 15px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #667eea;\n}\n.overview-box[_ngcontent-%COMP%], \n.architecture-box[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.overview-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.architecture-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.overview-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.architecture-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.overview-box[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%], \n.architecture-box[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #fbbf24;\n  color: #7c2d12;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.architecture-box[_ngcontent-%COMP%]   .arch-item[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  padding: 8px 12px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.architecture-box[_ngcontent-%COMP%]   .arch-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.requirements-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.requirements-container[_ngcontent-%COMP%]   .requirement-group[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.requirements-container[_ngcontent-%COMP%]   .requirement-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n}\n.requirements-container[_ngcontent-%COMP%]   .requirement-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  list-style: disc;\n}\n.requirements-container[_ngcontent-%COMP%]   .requirement-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n}\n.spec-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 3fr 1.5fr 1.5fr;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  font-size: 13px;\n  color: #333;\n}\n.table-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  text-align: left;\n}\n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 3fr 1.5fr 1.5fr;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 13px;\n  color: #666;\n}\n.table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.table-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n}\n.col-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #667eea;\n  flex: 0 0 80px;\n}\n.col-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  flex: 0 0 150px;\n}\n.col-description[_ngcontent-%COMP%] {\n  color: #777;\n  flex: 1;\n}\n.col-details[_ngcontent-%COMP%] {\n  color: #999;\n  flex: 0 0 120px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-priority[_ngcontent-%COMP%], \n.col-status[_ngcontent-%COMP%] {\n  justify-content: center;\n  flex: 0 0 100px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n.badge.priority.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge.priority.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.priority.low[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge.status.in-progress[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge.status.completed[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.status.planned[_ngcontent-%COMP%] {\n  background: #e9d5ff;\n  color: #7c3aed;\n}\n.ui-requirements[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.ui-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.ui-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #555;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.ui-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  margin-right: 8px;\n  color: #667eea;\n  font-weight: bold;\n}\n/*# sourceMappingURL=spec-doc.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecDocComponent, [{
    type: Component,
    args: [{ selector: "app-spec-doc", standalone: false, template: `<div class="spec-doc-container">
  <div class="spec-content">
    @if (currentProjectSpec) {
      <div class="spec-section">
        <h2>\uD504\uB85C\uC81D\uD2B8 \uAC1C\uC694</h2>
        <div class="overview-box">
          <p><strong>\uD504\uB85C\uC81D\uD2B8\uBA85:</strong> {{currentProjectSpec.overview.projectName}}</p>
          <p><strong>\uBAA9\uD45C:</strong> {{currentProjectSpec.overview.objective}}</p>
          <p><strong>\uB300\uC0C1 \uC0AC\uC6A9\uC790:</strong> {{currentProjectSpec.overview.targetUsers}}</p>
          <p><strong>\uAC1C\uBC1C \uAE30\uAC04:</strong> {{currentProjectSpec.overview.developmentPeriod}}</p>
          <p><strong>\uC0C1\uD0DC:</strong> <span class="status-badge">{{currentProjectSpec.overview.status}}</span></p>
        </div>
      </div>

      <div class="spec-section">
        <h2>\uC8FC\uC694 \uAE30\uB2A5 \uBAA9\uB85D</h2>
        <div class="spec-table">
          <div class="table-header">
            <div class="col-id">ID</div>
            <div class="col-title">\uAE30\uB2A5\uBA85</div>
            <div class="col-description">\uC124\uBA85</div>
            <div class="col-details">\uC0C1\uC138</div>
            <div class="col-priority">\uC6B0\uC120\uC21C\uC704</div>
            <div class="col-status">\uC0C1\uD0DC</div>
          </div>
          @for (spec of currentProjectSpec.specifications; let i = $index; track spec.id + '_' + i) {
            <div class="table-row">
              <div class="col-id">{{spec.id}}</div>
              <div class="col-title">{{spec.title}}</div>
              <div class="col-description">{{spec.description}}</div>
              <div class="col-details" [title]="spec.details">{{spec.details || '-'}}</div>
              <div class="col-priority">
                <span class="badge priority" [class]="getPriorityClass(spec.priority)">
                  {{spec.priority}}
                </span>
              </div>
              <div class="col-status">
                <span class="badge status" [class]="getStatusClass(spec.status)">
                  {{spec.status}}
                </span>
              </div>
            </div>
          }
        </div>
      </div>

      <div class="spec-section">
        <h2>\uC2DC\uC2A4\uD15C \uC544\uD0A4\uD14D\uCC98</h2>
        <div class="architecture-box">
          <div class="arch-item">
            <strong>\uD504\uB860\uD2B8\uC5D4\uB4DC:</strong> {{currentProjectSpec.systemArchitecture.frontend}}
          </div>
          <div class="arch-item">
            <strong>\uBC31\uC5D4\uB4DC:</strong> {{currentProjectSpec.systemArchitecture.backend}}
          </div>
          <div class="arch-item">
            <strong>\uB370\uC774\uD130\uBCA0\uC774\uC2A4:</strong> {{currentProjectSpec.systemArchitecture.database}}
          </div>
          @if (currentProjectSpec.systemArchitecture.aiEngine) {
            <div class="arch-item">
              <strong>AI \uC5D4\uC9C4:</strong> {{currentProjectSpec.systemArchitecture.aiEngine}}
            </div>
          }
          @if (currentProjectSpec.systemArchitecture.fileStorage) {
            <div class="arch-item">
              <strong>\uD30C\uC77C \uC800\uC7A5\uC18C:</strong> {{currentProjectSpec.systemArchitecture.fileStorage}}
            </div>
          }
          <div class="arch-item">
            <strong>\uBC30\uD3EC:</strong> {{currentProjectSpec.systemArchitecture.deployment}}
          </div>
        </div>
      </div>

      <div class="spec-section">
        <h2>\uC694\uAD6C\uC0AC\uD56D</h2>
        <div class="requirements-container">
          @for (req of currentProjectSpec.requirements; let i = $index; track req.category + '_' + i) {
            <div class="requirement-group">
              <h3>{{req.category}}</h3>
              <ul>
                @for (item of req.items; let j = $index; track item + '_' + j) {
                  <li>{{item}}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    }
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/desk/components/spec-doc/spec-doc.component.scss */\n.spec-doc-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #f0f4f8 100%);\n  padding: 0;\n  overflow-y: auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n}\n.spec-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 16px 30px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);\n}\n.spec-header h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.spec-header h1 .folder-tag {\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.spec-header .subtitle {\n  margin: 3px 0 0 0;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.spec-content {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.spec-content::-webkit-scrollbar {\n  width: 8px;\n}\n.spec-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.spec-content::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.spec-content::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.spec-section {\n  margin-bottom: 30px;\n}\n.spec-section h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 15px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #667eea;\n}\n.overview-box,\n.architecture-box {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.overview-box p,\n.architecture-box p {\n  margin: 8px 0;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.overview-box p strong,\n.architecture-box p strong {\n  color: #333;\n  font-weight: 600;\n}\n.overview-box .status-badge,\n.architecture-box .status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #fbbf24;\n  color: #7c2d12;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.architecture-box .arch-item {\n  margin: 12px 0;\n  padding: 8px 12px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.architecture-box .arch-item strong {\n  color: #667eea;\n}\n.requirements-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.requirements-container .requirement-group {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.requirements-container .requirement-group h3 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n}\n.requirements-container .requirement-group ul {\n  margin: 0;\n  padding-left: 20px;\n  list-style: disc;\n}\n.requirements-container .requirement-group ul li {\n  margin: 6px 0;\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n}\n.spec-table {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n}\n.table-header {\n  display: grid;\n  grid-template-columns: 1fr 2fr 3fr 1.5fr 1.5fr;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  font-size: 13px;\n  color: #333;\n}\n.table-header div {\n  padding: 15px 12px;\n  text-align: left;\n}\n.table-row {\n  display: grid;\n  grid-template-columns: 1fr 2fr 3fr 1.5fr 1.5fr;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 13px;\n  color: #666;\n}\n.table-row:last-child {\n  border-bottom: none;\n}\n.table-row:hover {\n  background: #fafbfc;\n}\n.table-row div {\n  padding: 12px;\n  display: flex;\n  align-items: center;\n}\n.col-id {\n  font-weight: 600;\n  color: #667eea;\n  flex: 0 0 80px;\n}\n.col-title {\n  font-weight: 500;\n  color: #333;\n  flex: 0 0 150px;\n}\n.col-description {\n  color: #777;\n  flex: 1;\n}\n.col-details {\n  color: #999;\n  flex: 0 0 120px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-priority,\n.col-status {\n  justify-content: center;\n  flex: 0 0 100px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n.badge.priority.high {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge.priority.medium {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge.priority.low {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge.status.in-progress {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.badge.status.completed {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge.status.planned {\n  background: #e9d5ff;\n  color: #7c3aed;\n}\n.ui-requirements {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.ui-requirements ul {\n  margin: 0;\n  padding-left: 20px;\n}\n.ui-requirements ul li {\n  margin: 8px 0;\n  color: #555;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.ui-requirements ul li:before {\n  content: "\\2713";\n  margin-right: 8px;\n  color: #667eea;\n  font-weight: bold;\n}\n/*# sourceMappingURL=spec-doc.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], { folderType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecDocComponent, { className: "SpecDocComponent", filePath: "src/app/modules/desk/components/spec-doc/spec-doc.component.ts", lineNumber: 29 });
})();

// src/app/modules/desk/components/wbs-doc/wbs-doc.component.ts
var _forTrack02 = ($index, $item) => $item.id + "_" + $index;
function WbsDocComponent_Conditional_1_For_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function WbsDocComponent_Conditional_1_For_29_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleExpand(item_r2.id));
    });
    \u0275\u0275text(1, " \u25B6 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expanded", ctx_r2.isExpanded(item_r2.id));
  }
}
function WbsDocComponent_Conditional_1_For_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function WbsDocComponent_Conditional_1_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 10);
    \u0275\u0275conditionalCreate(2, WbsDocComponent_Conditional_1_For_29_Conditional_2_Template, 2, 2, "button", 21)(3, WbsDocComponent_Conditional_1_For_29_Conditional_3_Template, 1, 0, "span", 22);
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 12)(12, "div", 25);
    \u0275\u0275element(13, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-left", ctx_r2.getItemLevel(item_r2) * 20 + 10 + "px");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasChildren(item_r2) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 12, item_r2.startDate, "yyyy-MM-dd"), " ~ ", \u0275\u0275pipeBind2(10, 15, item_r2.endDate, "yyyy-MM-dd"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", item_r2.progress + "%")("background", ctx_r2.getProgressColor(item_r2.progress));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.progress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.responsible);
  }
}
function WbsDocComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "75% \uC774\uC0C1 \uC9C4\uD589");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "50-75% \uC9C4\uD589");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 3);
    \u0275\u0275element(11, "div", 6);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "25-50% \uC9C4\uD589");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 3);
    \u0275\u0275element(15, "div", 7);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "25% \uBBF8\uB9CC \uC9C4\uD589");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "div", 10);
    \u0275\u0275text(21, "\uC791\uC5C5\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 11);
    \u0275\u0275text(23, "\uAE30\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 12);
    \u0275\u0275text(25, "\uC9C4\uD589\uB3C4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13);
    \u0275\u0275text(27, "\uB2F4\uB2F9\uC790");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(28, WbsDocComponent_Conditional_1_For_29_Template, 19, 18, "div", 14, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 15)(31, "h2");
    \u0275\u0275text(32, "\uD504\uB85C\uC81D\uD2B8 \uC694\uC57D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 16)(34, "div", 17)(35, "div", 18);
    \u0275\u0275text(36, "\uD504\uB85C\uC81D\uD2B8\uBA85");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 19);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 17)(40, "div", 18);
    \u0275\u0275text(41, "\uCD1D \uC791\uC5C5 \uC218");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r2.renderItems(ctx_r2.currentProjectData.wbs.tasks));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.currentProjectData.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.currentProjectData.wbs.tasks.length);
  }
}
var WbsDocComponent = class _WbsDocComponent {
  http;
  folderType = "calendar";
  projectSpecs = {};
  currentProjectData = null;
  expandedItems = /* @__PURE__ */ new Set();
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadProjectSpecs();
  }
  ngOnChanges(changes) {
    if (changes["folderType"] && !changes["folderType"].firstChange) {
      this.updateCurrentData();
    }
  }
  ngAfterViewInit() {
    if (Object.keys(this.projectSpecs).length > 0) {
      this.updateCurrentData();
    }
  }
  loadProjectSpecs() {
    this.http.get("/assets/data/project-specs.json").subscribe((data) => {
      this.projectSpecs = data;
      this.updateCurrentData();
    }, (error) => {
      console.error("Failed to load WBS data:", error);
    });
  }
  updateCurrentData() {
    const project = this.projectSpecs[this.folderType];
    if (project) {
      this.currentProjectData = {
        name: project.name,
        wbs: project.wbs
      };
      if (this.currentProjectData.wbs.tasks.length > 0) {
        this.expandedItems.add(this.currentProjectData.wbs.tasks[0].id);
      }
    }
  }
  toggleExpand(id) {
    if (this.expandedItems.has(id)) {
      this.expandedItems.delete(id);
    } else {
      this.expandedItems.add(id);
    }
  }
  isExpanded(id) {
    return this.expandedItems.has(id);
  }
  getProgressColor(progress) {
    if (progress >= 75)
      return "#10b981";
    if (progress >= 50)
      return "#f59e0b";
    if (progress >= 25)
      return "#f97316";
    return "#ef4444";
  }
  renderItems(items) {
    const result = [];
    items.forEach((item) => {
      result.push(item);
      if (item.subtasks && this.isExpanded(item.id)) {
        result.push(...this.renderItems(item.subtasks));
      }
    });
    return result;
  }
  getLevel(items, targetId, currentLevel = 0) {
    for (let item of items) {
      if (item.id === targetId) {
        return currentLevel;
      }
      if (item.subtasks) {
        const level = this.getLevel(item.subtasks, targetId, currentLevel + 1);
        if (level >= 0)
          return level;
      }
    }
    return 0;
  }
  hasChildren(item) {
    return !!(item.subtasks && item.subtasks.length > 0);
  }
  getItemLevel(item) {
    if (this.currentProjectData?.wbs.tasks) {
      return this.getLevel(this.currentProjectData.wbs.tasks, item.id);
    }
    return 0;
  }
  static \u0275fac = function WbsDocComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WbsDocComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WbsDocComponent, selectors: [["app-wbs-doc"]], inputs: { folderType: "folderType" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "wbs-doc-container"], [1, "wbs-content"], [1, "wbs-legend"], [1, "legend-item"], [1, "legend-color", 2, "background", "#10b981"], [1, "legend-color", 2, "background", "#f59e0b"], [1, "legend-color", 2, "background", "#f97316"], [1, "legend-color", 2, "background", "#ef4444"], [1, "wbs-table"], [1, "table-header"], [1, "col-name"], [1, "col-dates"], [1, "col-progress"], [1, "col-responsible"], [1, "table-row", 3, "padding-left"], [1, "wbs-summary"], [1, "summary-grid"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "table-row"], [1, "expand-btn", 3, "expanded"], [1, "no-expand"], [1, "item-name"], [1, "date-range"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "responsible-badge"], [1, "expand-btn", 3, "click"]], template: function WbsDocComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, WbsDocComponent_Conditional_1_Template, 44, 2, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currentProjectData ? 1 : -1);
    }
  }, dependencies: [DatePipe], styles: ['\n\n.wbs-doc-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #f0f4f8 100%);\n  padding: 0;\n  overflow-y: auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n}\n.wbs-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 100%);\n  color: white;\n  padding: 16px 30px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);\n}\n.wbs-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.wbs-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .folder-tag[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.wbs-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 3px 0 0 0;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.wbs-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.wbs-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.wbs-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wbs-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.wbs-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.wbs-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n.wbs-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 15px 12px;\n  text-align: left;\n}\n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 13px;\n  align-items: center;\n}\n.table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.table-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.col-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #333;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: #ff6b35;\n  font-size: 12px;\n  font-weight: bold;\n  transition: transform 0.2s;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.expand-btn.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.expand-btn[_ngcontent-%COMP%]:hover {\n  color: #f7931e;\n}\n.no-expand[_ngcontent-%COMP%] {\n  width: 20px;\n  display: inline-block;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.col-dates[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.date-range[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.col-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e0e0e0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n.progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  min-width: 35px;\n  text-align: right;\n}\n.col-responsible[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.responsible-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f3f4f6;\n  color: #555;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.wbs-summary[_ngcontent-%COMP%] {\n  background: white;\n  padding: 25px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.wbs-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #ff6b35;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 15px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 15px;\n  border-radius: 6px;\n  border-left: 3px solid #ff6b35;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n  font-weight: 500;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #ff6b35;\n}\n/*# sourceMappingURL=wbs-doc.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WbsDocComponent, [{
    type: Component,
    args: [{ selector: "app-wbs-doc", standalone: false, template: `<div class="wbs-doc-container">
  @if (currentProjectData) {
    <div class="wbs-content">
      <div class="wbs-legend">
        <div class="legend-item">
          <div class="legend-color" style="background: #10b981;"></div>
          <span>75% \uC774\uC0C1 \uC9C4\uD589</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #f59e0b;"></div>
          <span>50-75% \uC9C4\uD589</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #f97316;"></div>
          <span>25-50% \uC9C4\uD589</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background: #ef4444;"></div>
          <span>25% \uBBF8\uB9CC \uC9C4\uD589</span>
        </div>
      </div>

      <div class="wbs-table">
        <div class="table-header">
          <div class="col-name">\uC791\uC5C5\uBA85</div>
          <div class="col-dates">\uAE30\uAC04</div>
          <div class="col-progress">\uC9C4\uD589\uB3C4</div>
          <div class="col-responsible">\uB2F4\uB2F9\uC790</div>
        </div>

        @for (item of renderItems(currentProjectData.wbs.tasks); let i = $index; track item.id + '_' + i) {
          <div class="table-row" [style.padding-left]="(getItemLevel(item) * 20 + 10) + 'px'">
            <div class="col-name">
              @if (hasChildren(item)) {
                <button 
                  class="expand-btn" 
                  [class.expanded]="isExpanded(item.id)"
                  (click)="toggleExpand(item.id)">
                  \u25B6
                </button>
              } @else {
                <span class="no-expand"></span>
              }
              <span class="item-name">{{item.name}}</span>
            </div>
            <div class="col-dates">
              <span class="date-range">{{item.startDate | date: 'yyyy-MM-dd'}} ~ {{item.endDate | date: 'yyyy-MM-dd'}}</span>
            </div>
            <div class="col-progress">
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  [style.width]="item.progress + '%'"
                  [style.background]="getProgressColor(item.progress)">
                </div>
              </div>
              <span class="progress-text">{{item.progress}}%</span>
            </div>
            <div class="col-responsible">
              <span class="responsible-badge">{{item.responsible}}</span>
            </div>
          </div>
        }
      </div>

      <div class="wbs-summary">
        <h2>\uD504\uB85C\uC81D\uD2B8 \uC694\uC57D</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="summary-label">\uD504\uB85C\uC81D\uD2B8\uBA85</div>
            <div class="summary-value">{{currentProjectData.name}}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">\uCD1D \uC791\uC5C5 \uC218</div>
            <div class="summary-value">{{currentProjectData.wbs.tasks.length}}</div>
          </div>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/desk/components/wbs-doc/wbs-doc.component.scss */\n.wbs-doc-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #f0f4f8 100%);\n  padding: 0;\n  overflow-y: auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n}\n.wbs-header {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #f7931e 100%);\n  color: white;\n  padding: 16px 30px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);\n}\n.wbs-header h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.wbs-header h1 .folder-tag {\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.wbs-header .subtitle {\n  margin: 3px 0 0 0;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.wbs-content {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.wbs-content::-webkit-scrollbar {\n  width: 8px;\n}\n.wbs-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wbs-content::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.wbs-content::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.wbs-legend {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.legend-color {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n.wbs-table {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n}\n.table-header {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  font-size: 12px;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-header div {\n  padding: 15px 12px;\n  text-align: left;\n}\n.table-row {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 13px;\n  align-items: center;\n}\n.table-row:last-child {\n  border-bottom: none;\n}\n.table-row:hover {\n  background: #fafbfc;\n}\n.table-row div {\n  padding: 12px;\n}\n.col-name {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #333;\n}\n.expand-btn {\n  width: 20px;\n  height: 20px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: #ff6b35;\n  font-size: 12px;\n  font-weight: bold;\n  transition: transform 0.2s;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.expand-btn.expanded {\n  transform: rotate(90deg);\n}\n.expand-btn:hover {\n  color: #f7931e;\n}\n.no-expand {\n  width: 20px;\n  display: inline-block;\n}\n.item-name {\n  font-weight: 500;\n}\n.col-dates {\n  color: #666;\n  font-size: 12px;\n}\n.date-range {\n  white-space: nowrap;\n}\n.col-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.progress-bar {\n  flex: 1;\n  height: 6px;\n  background: #e0e0e0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n.progress-text {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  min-width: 35px;\n  text-align: right;\n}\n.col-responsible {\n  text-align: center;\n}\n.responsible-badge {\n  display: inline-block;\n  background: #f3f4f6;\n  color: #555;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.wbs-summary {\n  background: white;\n  padding: 25px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.wbs-summary h2 {\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #ff6b35;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 15px;\n}\n.summary-item {\n  background: #f9fafb;\n  padding: 15px;\n  border-radius: 6px;\n  border-left: 3px solid #ff6b35;\n}\n.summary-label {\n  font-size: 12px;\n  color: #777;\n  font-weight: 500;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #ff6b35;\n}\n/*# sourceMappingURL=wbs-doc.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], { folderType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WbsDocComponent, { className: "WbsDocComponent", filePath: "src/app/modules/desk/components/wbs-doc/wbs-doc.component.ts", lineNumber: 29 });
})();

// src/app/modules/desk/components/ia-canvas/ia-canvas.component.ts
var _c0 = ["container"];
var _c1 = ["intentName"];
var _c2 = ["fileInput"];
var _c3 = (a0) => ({ "height.px": a0 });
var _c4 = (a0) => ({ "transform": a0, "transform-origin": "0 0" });
var _c5 = () => ({ "left.px": 100, "top.px": 100 });
var _c6 = () => ({ "left.px": 400, "top.px": 150 });
var IaCanvasComponent = class _IaCanvasComponent {
  container;
  intentNameInput;
  fileInput;
  playSimulator = new EventEmitter();
  zoomLevelChange = new EventEmitter();
  penModeChange = new EventEmitter();
  width = input(1200, ...ngDevMode ? [{ debugName: "width" }] : []);
  height = input(0, ...ngDevMode ? [{ debugName: "height" }] : []);
  pages = [];
  userFlows = [];
  viewMode = "canvas";
  set zoomLevel(value) {
    this._zoomLevel = value;
  }
  get zoomLevel() {
    return this._zoomLevel;
  }
  set isPenMode(value) {
    this._isPenMode = value;
  }
  get isPenMode() {
    return this._isPenMode;
  }
  _zoomLevel = 100;
  _isPenMode = false;
  subscription = new Subscription();
  // 팬 기능 변수
  offsetX = 0;
  offsetY = 0;
  isPanning = false;
  panStartX = 0;
  panStartY = 0;
  dialog = inject(MatDialog);
  snackbar = inject(MatSnackBar);
  router = inject(Router);
  httpClient = inject(HttpClient);
  constructor() {
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  zoomIn() {
    if (this.zoomLevel < 200) {
      this.zoomLevel = Math.min(200, this.zoomLevel + 10);
      this.zoomLevelChange.emit(this.zoomLevel);
    }
  }
  zoomOut() {
    if (this.zoomLevel > 50) {
      this.zoomLevel = Math.max(50, this.zoomLevel - 10);
      this.zoomLevelChange.emit(this.zoomLevel);
    }
  }
  resetZoom() {
    this.zoomLevel = 100;
    this.zoomLevelChange.emit(this.zoomLevel);
  }
  onWheel(event) {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      if (event.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    }
  }
  handleKeyboard(event) {
    if (event.ctrlKey || event.metaKey) {
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        this.zoomIn();
      } else if (event.key === "-") {
        event.preventDefault();
        this.zoomOut();
      } else if (event.key === "0") {
        event.preventDefault();
        this.resetZoom();
      }
    }
  }
  // 팬 기능
  onCanvasMouseDown(event) {
    if ((event.shiftKey || this.isPenMode) && event.button === 0) {
      this.isPanning = true;
      this.panStartX = event.clientX;
      this.panStartY = event.clientY;
      event.preventDefault();
    }
  }
  togglePenMode() {
    this.isPenMode = !this.isPenMode;
    this.penModeChange.emit(this.isPenMode);
  }
  onCanvasMouseMove(event) {
    if (this.isPanning) {
      const deltaX = event.clientX - this.panStartX;
      const deltaY = event.clientY - this.panStartY;
      this.offsetX += deltaX;
      this.offsetY += deltaY;
      this.panStartX = event.clientX;
      this.panStartY = event.clientY;
    }
  }
  onCanvasMouseUp() {
    this.isPanning = false;
  }
  getTransformStyle() {
    return `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.zoomLevel / 100})`;
  }
  static \u0275fac = function IaCanvasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaCanvasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IaCanvasComponent, selectors: [["app-ia-canvas"]], viewQuery: function IaCanvasComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
      \u0275\u0275viewQuery(_c1, 7);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.intentNameInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, hostBindings: function IaCanvasComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function IaCanvasComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboard($event);
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { width: [1, "width"], height: [1, "height"], pages: "pages", userFlows: "userFlows", viewMode: "viewMode", zoomLevel: "zoomLevel", isPenMode: "isPenMode" }, outputs: { playSimulator: "playSimulator", zoomLevelChange: "zoomLevelChange", penModeChange: "penModeChange" }, standalone: false, decls: 16, vars: 12, consts: [["container", ""], [1, "chatflow-edit-container", 3, "ngStyle"], [1, "chatflow-canvas", 3, "wheel", "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "canvas-grid"], [1, "canvas-content", 3, "ngStyle"], [1, "node", 3, "ngStyle"], [1, "node-header"], [1, "node-type"]], template: function IaCanvasComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275listener("wheel", function IaCanvasComponent_Template_div_wheel_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWheel($event));
      })("mousedown", function IaCanvasComponent_Template_div_mousedown_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseDown($event));
      })("mousemove", function IaCanvasComponent_Template_div_mousemove_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseMove($event));
      })("mouseup", function IaCanvasComponent_Template_div_mouseup_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseUp());
      })("mouseleave", function IaCanvasComponent_Template_div_mouseleave_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCanvasMouseUp());
      });
      \u0275\u0275element(2, "div", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6);
      \u0275\u0275text(6, "\uD398\uC774\uC9C0 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275text(8, "Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275text(11, "\uD398\uC774\uC9C0 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275text(13, "Page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainer(14, null, 0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c3, ctx.height() ? ctx.height() : ""));
      \u0275\u0275advance();
      \u0275\u0275classProp("panning", ctx.isPanning);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c4, ctx.getTransformStyle()));
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(10, _c5));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(11, _c6));
    }
  }, dependencies: [NgStyle], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}\n.chatflow-edit-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: transparent;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 14px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.12);\n}\n.zoom-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(102, 126, 234, 0.04);\n  border-radius: 8px;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:not(:disabled) {\n  background: #e5e7eb;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.zoom-controls[_ngcontent-%COMP%]   .zoom-level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #667eea;\n  width: 50px;\n  text-align: center;\n}\n.pen-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n  margin-left: auto;\n}\n.pen-button[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pen-button[_ngcontent-%COMP%]:active {\n  background: #e5e7eb;\n}\n.pen-button.pen-active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);\n}\n.pen-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: rgba(229, 231, 235, 0.3);\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(229, 231, 235, 0.5);\n  color: #374151;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.connection-guide[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 16px;\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 10px;\n  font-size: 13px;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #374151;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item.info-item[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.connection-guide[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n}\n.chatflow-canvas[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  cursor: grab;\n}\n.chatflow-canvas.panning[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n.chatflow-canvas[_ngcontent-%COMP%]   .canvas-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image:\n    linear-gradient(rgba(229, 231, 235, 0.5) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(229, 231, 235, 0.5) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n  z-index: 0;\n}\n.chatflow-canvas[_ngcontent-%COMP%]   .canvas-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: auto;\n  z-index: 1;\n}\n.chatflow-canvas[_ngcontent-%COMP%]   .canvas-content[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 160px;\n  background: #667eea;\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  color: white;\n}\n.chatflow-canvas[_ngcontent-%COMP%]   .canvas-content[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.chatflow-canvas[_ngcontent-%COMP%]   .canvas-content[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.chatflow-canvas[_ngcontent-%COMP%]   .canvas-content[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .node-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=ia-canvas.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaCanvasComponent, [{
    type: Component,
    args: [{ selector: "app-ia-canvas", standalone: false, template: `<div class="chatflow-edit-container" [ngStyle]="{'height.px': height() ? height() : ''}">

    <div class="chatflow-canvas" 
         [class.panning]="isPanning"
         (wheel)="onWheel($event)"
         (mousedown)="onCanvasMouseDown($event)"
         (mousemove)="onCanvasMouseMove($event)"
         (mouseup)="onCanvasMouseUp()"
         (mouseleave)="onCanvasMouseUp()">
        <div class="canvas-grid"></div>
        <div class="canvas-content" [ngStyle]="{'transform': getTransformStyle(), 'transform-origin': '0 0'}">
            <!-- \uC0D8\uD50C \uB178\uB4DC 1 -->
            <div class="node" [ngStyle]="{'left.px': 100, 'top.px': 100}">
                <div class="node-header">\uD398\uC774\uC9C0 1</div>
                <div class="node-type">Page</div>
            </div>

            <!-- \uC0D8\uD50C \uB178\uB4DC 2 -->
            <div class="node" [ngStyle]="{'left.px': 400, 'top.px': 150}">
                <div class="node-header">\uD398\uC774\uC9C0 2</div>
                <div class="node-type">Page</div>
            </div>

            <ng-container #container></ng-container>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/desk/components/ia-canvas/ia-canvas.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #f5f5f5;\n}\n.chatflow-edit-container {\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: transparent;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 14px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.12);\n}\n.zoom-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(102, 126, 234, 0.04);\n  border-radius: 8px;\n}\n.zoom-controls button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.zoom-controls button:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.zoom-controls button:active:not(:disabled) {\n  background: #e5e7eb;\n}\n.zoom-controls button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.zoom-controls button span {\n  display: block;\n  line-height: 1;\n}\n.zoom-controls .zoom-level {\n  font-size: 12px;\n  font-weight: 600;\n  color: #667eea;\n  width: 50px;\n  text-align: center;\n}\n.pen-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n  margin-left: auto;\n}\n.pen-button:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pen-button:active {\n  background: #e5e7eb;\n}\n.pen-button.pen-active {\n  background: #667eea;\n  border-color: #667eea;\n  box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);\n}\n.pen-button span {\n  display: block;\n  line-height: 1;\n}\n.view-toggle {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: rgba(229, 231, 235, 0.3);\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.view-toggle .toggle-btn {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n.view-toggle .toggle-btn:hover {\n  background: rgba(229, 231, 235, 0.5);\n  color: #374151;\n}\n.view-toggle .toggle-btn.active {\n  background: white;\n  color: #667eea;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.connection-guide {\n  display: flex;\n  gap: 16px;\n  padding: 12px 16px;\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 10px;\n  font-size: 13px;\n}\n.connection-guide .guide-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #374151;\n}\n.connection-guide .guide-item.info-item {\n  font-weight: 500;\n}\n.connection-guide .guide-item span:first-child {\n  font-size: 18px;\n}\n.chatflow-canvas {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  cursor: grab;\n}\n.chatflow-canvas.panning {\n  cursor: grabbing;\n}\n.chatflow-canvas .canvas-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image:\n    linear-gradient(rgba(229, 231, 235, 0.5) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(229, 231, 235, 0.5) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n  z-index: 0;\n}\n.chatflow-canvas .canvas-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: auto;\n  z-index: 1;\n}\n.chatflow-canvas .canvas-content .node {\n  position: absolute;\n  width: 160px;\n  background: #667eea;\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  color: white;\n}\n.chatflow-canvas .canvas-content .node:hover {\n  box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.chatflow-canvas .canvas-content .node .node-header {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.chatflow-canvas .canvas-content .node .node-type {\n  font-size: 12px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=ia-canvas.component.css.map */\n"] }]
  }], () => [], { container: [{
    type: ViewChild,
    args: ["container", { static: true, read: ViewContainerRef }]
  }], intentNameInput: [{
    type: ViewChild,
    args: ["intentName", { static: true }]
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], playSimulator: [{
    type: Output
  }], zoomLevelChange: [{
    type: Output
  }], penModeChange: [{
    type: Output
  }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }], pages: [{
    type: Input
  }], userFlows: [{
    type: Input
  }], viewMode: [{
    type: Input
  }], zoomLevel: [{
    type: Input
  }], isPenMode: [{
    type: Input
  }], handleKeyboard: [{
    type: HostListener,
    args: ["window:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IaCanvasComponent, { className: "IaCanvasComponent", filePath: "src/app/modules/desk/components/ia-canvas/ia-canvas.component.ts", lineNumber: 17 });
})();

// src/app/modules/desk/components/ia-doc/ia-doc.component.ts
var _forTrack03 = ($index, $item) => $item.node.id + "_" + $index;
var _forTrack12 = ($index, $item) => $item.name + "_" + $index;
var _forTrack22 = ($index, $item) => $item.id + "_" + $index;
var _forTrack3 = ($index, $item) => $item + "_" + $index;
function IaDocComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ia-canvas", 12);
    \u0275\u0275listener("zoomLevelChange", function IaDocComponent_Conditional_1_Conditional_21_Template_app_ia_canvas_zoomLevelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.canvasZoomLevel = $event);
    })("penModeChange", function IaDocComponent_Conditional_1_Conditional_21_Template_app_ia_canvas_penModeChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isPenMode = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pages", ctx_r1.currentProjectData.ia.pages)("userFlows", ctx_r1.currentProjectData.ia.userFlows)("viewMode", ctx_r1.viewMode)("zoomLevel", ctx_r1.canvasZoomLevel)("isPenMode", ctx_r1.isPenMode);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode(item_r5.node.id));
    });
    \u0275\u0275text(1, " \u25B6 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expanded", ctx_r1.isNodeExpanded(item_r5.node.id));
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2, "\u2699");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comp_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comp_r6);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_13_For_2_Template, 5, 1, "div", 30, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r5.node.components);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275conditionalCreate(2, IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_2_Template, 2, 2, "button", 21)(3, IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_3_Template, 1, 0, "span", 22);
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275text(10, "\uD398\uC774\uC9C0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, IaDocComponent_Conditional_1_Conditional_22_For_5_Conditional_13_Template, 3, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("padding-left", item_r5.level * 30 + "px");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasChildren(item_r5.node) ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r5.node.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.node.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.node.components && item_r5.node.components.length > 0 ? 13 : -1);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_10_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_10_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, IaDocComponent_Conditional_1_Conditional_22_For_10_For_5_Conditional_3_Template, 2, 0, "div", 35);
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const \u0275$index_101_r8 = ctx.$index;
    const \u0275$count_101_r9 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_101_r8 === \u0275$count_101_r9 - 1) ? 3 : -1);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275repeaterCreate(4, IaDocComponent_Conditional_1_Conditional_22_For_10_For_5_Template, 4, 2, null, null, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const flow_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(flow_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(flow_r10.steps);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_16_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comp_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comp_r11);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "strong");
    \u0275\u0275text(2, "\uAD6C\uC131 \uC694\uC18C:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275repeaterCreate(4, IaDocComponent_Conditional_1_Conditional_22_For_16_Conditional_8_For_5_Template, 2, 1, "span", 40, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(page_r12.components);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "\uD398\uC774\uC9C0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, IaDocComponent_Conditional_1_Conditional_22_For_16_Conditional_8_Template, 6, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r12 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(page_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r12.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(page_r12.components && page_r12.components.length > 0 ? 8 : -1);
  }
}
function IaDocComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h2");
    \u0275\u0275text(3, "\uC0AC\uC774\uD2B8 \uAD6C\uC870");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, IaDocComponent_Conditional_1_Conditional_22_For_5_Template, 14, 6, "div", 14, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "h2");
    \u0275\u0275text(8, "\uC0AC\uC6A9\uC790 \uD50C\uB85C\uC6B0");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, IaDocComponent_Conditional_1_Conditional_22_For_10_Template, 6, 1, "div", 16, _forTrack12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "h2");
    \u0275\u0275text(13, "\uC8FC\uC694 \uD398\uC774\uC9C0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275repeaterCreate(15, IaDocComponent_Conditional_1_Conditional_22_For_16_Template, 9, 3, "div", 18, _forTrack22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.renderNodes(ctx_r1.currentProjectData.ia.pages));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.currentProjectData.ia.userFlows);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.currentProjectData.ia.pages.slice(0, 4));
  }
}
function IaDocComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomOut());
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u{1F50D}\u2212");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomIn());
    });
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "\u{1F50D}+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetZoom());
    });
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u21BA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 7);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePenMode());
    });
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "\u270B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewModeChange("canvas"));
    });
    \u0275\u0275text(18, " \u{1F4D0} \uCE94\uBC84\uC2A4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 9);
    \u0275\u0275listener("click", function IaDocComponent_Conditional_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onViewModeChange("tree"));
    });
    \u0275\u0275text(20, " \u{1F4CB} \uD2B8\uB9AC ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, IaDocComponent_Conditional_1_Conditional_21_Template, 1, 5, "app-ia-canvas", 10);
    \u0275\u0275conditionalCreate(22, IaDocComponent_Conditional_1_Conditional_22_Template, 17, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.canvasZoomLevel <= 50);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.canvasZoomLevel, "%");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.canvasZoomLevel >= 200);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("pen-active", ctx_r1.isPenMode);
    \u0275\u0275property("title", ctx_r1.isPenMode ? "\uD39C \uBAA8\uB4DC OFF" : "\uD39C \uBAA8\uB4DC ON (Shift \uC5C6\uC774 \uB4DC\uB798\uADF8)");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "canvas");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "tree");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.viewMode === "canvas" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode === "tree" ? 22 : -1);
  }
}
var IaDocComponent = class _IaDocComponent {
  http;
  folderType = "calendar";
  projectSpecs = {};
  currentProjectData = null;
  expandedNodes = /* @__PURE__ */ new Set();
  viewMode = "canvas";
  // 기본 모드
  // Canvas Toolbar 상태
  canvasZoomLevel = 100;
  isPenMode = false;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadProjectSpecs();
  }
  ngOnChanges(changes) {
    if (changes["folderType"] && !changes["folderType"].firstChange) {
      this.updateCurrentData();
    }
  }
  ngAfterViewInit() {
    if (Object.keys(this.projectSpecs).length > 0) {
      this.updateCurrentData();
    }
  }
  loadProjectSpecs() {
    this.http.get("/assets/data/project-specs.json").subscribe((data) => {
      this.projectSpecs = data;
      this.updateCurrentData();
    }, (error) => {
      console.error("Failed to load IA data:", error);
    });
  }
  updateCurrentData() {
    const project = this.projectSpecs[this.folderType];
    if (project) {
      this.currentProjectData = {
        name: project.name,
        ia: project.ia
      };
      if (this.currentProjectData.ia.pages.length > 0) {
        this.currentProjectData.ia.pages.forEach((page, index) => {
          if (index < 3) {
            this.expandedNodes.add(page.id);
          }
        });
      }
    }
  }
  toggleNode(id) {
    if (this.expandedNodes.has(id)) {
      this.expandedNodes.delete(id);
    } else {
      this.expandedNodes.add(id);
    }
  }
  isNodeExpanded(id) {
    return this.expandedNodes.has(id);
  }
  renderNodes(nodes, level = 0) {
    const result = [];
    nodes.forEach((node) => {
      result.push({ node, level });
      if (node.children && this.isNodeExpanded(node.id)) {
        result.push(...this.renderNodes(node.children, level + 1));
      }
    });
    return result;
  }
  hasChildren(node) {
    return !!(node.children && node.children.length > 0);
  }
  onViewModeChange(mode) {
    if (mode === "canvas" || mode === "tree") {
      this.viewMode = mode;
    }
  }
  zoomIn() {
    if (this.canvasZoomLevel < 200) {
      this.canvasZoomLevel = Math.min(200, this.canvasZoomLevel + 10);
    }
  }
  zoomOut() {
    if (this.canvasZoomLevel > 50) {
      this.canvasZoomLevel = Math.max(50, this.canvasZoomLevel - 10);
    }
  }
  resetZoom() {
    this.canvasZoomLevel = 100;
  }
  togglePenMode() {
    this.isPenMode = !this.isPenMode;
  }
  static \u0275fac = function IaDocComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaDocComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IaDocComponent, selectors: [["app-ia-doc"]], inputs: { folderType: "folderType" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "ia-doc-container"], [1, "toolbar"], [1, "zoom-controls"], ["title", "\uCD95\uC18C (Ctrl + -)", 3, "click", "disabled"], [1, "zoom-level"], ["title", "\uD655\uB300 (Ctrl + +)", 3, "click", "disabled"], ["title", "\uC6D0\uB798 \uD06C\uAE30 (Ctrl + 0)", 3, "click"], [1, "pen-button", 3, "click", "title"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], [1, "ia-canvas-wrapper", 3, "pages", "userFlows", "viewMode", "zoomLevel", "isPenMode"], [1, "ia-content"], [1, "ia-canvas-wrapper", 3, "zoomLevelChange", "penModeChange", "pages", "userFlows", "viewMode", "zoomLevel", "isPenMode"], [1, "ia-tree"], [1, "tree-node", 3, "padding-left"], [1, "ia-sections"], [1, "flow-section"], [1, "pages-grid"], [1, "page-card"], [1, "tree-node"], [1, "node-content"], [1, "expand-btn", 3, "expanded"], [1, "no-expand"], [1, "node-icon"], [1, "node-info"], [1, "node-name"], [1, "node-type-label"], [1, "node-description"], [1, "components-list"], [1, "expand-btn", 3, "click"], [1, "component-item"], [1, "component-icon"], [1, "flow-diagram"], [1, "flow-step"], [1, "step-content"], [1, "flow-arrow"], [1, "page-header"], [1, "page-type-badge"], [1, "components-summary"], [1, "component-tags"], [1, "tag"]], template: function IaDocComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, IaDocComponent_Conditional_1_Template, 23, 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currentProjectData ? 1 : -1);
    }
  }, dependencies: [IaCanvasComponent], styles: ['\n\n.ia-doc-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #f0f4f8 100%);\n  padding: 15px;\n  overflow-y: auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  gap: 12px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.12);\n}\n.zoom-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(102, 126, 234, 0.04);\n  border-radius: 8px;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:not(:disabled) {\n  background: #e5e7eb;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.zoom-controls[_ngcontent-%COMP%]   .zoom-level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #667eea;\n  width: 50px;\n  text-align: center;\n}\n.pen-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.pen-button[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pen-button[_ngcontent-%COMP%]:active {\n  background: #e5e7eb;\n}\n.pen-button.pen-active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);\n}\n.pen-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: rgba(229, 231, 235, 0.3);\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  margin-left: auto;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(229, 231, 235, 0.5);\n  color: #374151;\n}\n.view-toggle[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.ia-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fccb90 0%,\n      #d57eeb 100%);\n  color: white;\n  padding: 16px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 4px 20px rgba(252, 203, 144, 0.3);\n}\n.ia-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.ia-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.ia-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .folder-tag[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.ia-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 3px 0 0 0;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.ia-header[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: 20px;\n}\n.ia-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.ia-header[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.ia-header[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #d57eeb;\n  font-weight: 600;\n}\n.ia-canvas-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n.ia-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.ia-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.ia-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.ia-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.ia-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.ia-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.legend-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n.ia-tree[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n  margin-bottom: 30px;\n}\n.tree-node[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n}\n.tree-node[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.node-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 0;\n}\n.node-content[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: #667eea;\n  font-size: 12px;\n  font-weight: bold;\n  transition: transform 0.2s;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.expand-btn.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.expand-btn[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n.no-expand[_ngcontent-%COMP%] {\n  width: 24px;\n  display: inline-block;\n}\n.node-type[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.node-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.node-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n}\n.node-type-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.node-description[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 12px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.ia-sections[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.ia-sections[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 15px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #fccb90;\n}\n.flow-diagram[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  background: white;\n  padding: 25px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow-x: auto;\n  padding-bottom: 25px;\n}\n.flow-step[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  padding: 20px;\n  border-radius: 12px;\n  min-width: 120px;\n}\n.step-number[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 16px;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.step-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.9;\n}\n.flow-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.pages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.page-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n  border-left: 4px solid #fccb90;\n}\n.page-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.page-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.page-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fccb90;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.page-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=ia-doc.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaDocComponent, [{
    type: Component,
    args: [{ selector: "app-ia-doc", standalone: false, template: `<div class="ia-doc-container">
  @if (currentProjectData) {
    <!-- \uACF5\uD1B5 Toolbar -->
    <div class="toolbar">
      <!-- \uC90C \uCEE8\uD2B8\uB864 -->
      <div class="zoom-controls">
        <button (click)="zoomOut()" [disabled]="canvasZoomLevel <= 50" title="\uCD95\uC18C (Ctrl + -)">
          <span>\u{1F50D}\u2212</span>
        </button>
        <span class="zoom-level">{{ canvasZoomLevel }}%</span>
        <button (click)="zoomIn()" [disabled]="canvasZoomLevel >= 200" title="\uD655\uB300 (Ctrl + +)">
          <span>\u{1F50D}+</span>
        </button>
        <button (click)="resetZoom()" title="\uC6D0\uB798 \uD06C\uAE30 (Ctrl + 0)">
          <span>\u21BA</span>
        </button>
      </div>

      <!-- \uD39C \uAE30\uB2A5 \uD1A0\uAE00 -->
      <button (click)="togglePenMode()" 
              [class.pen-active]="isPenMode"
              [title]="isPenMode ? '\uD39C \uBAA8\uB4DC OFF' : '\uD39C \uBAA8\uB4DC ON (Shift \uC5C6\uC774 \uB4DC\uB798\uADF8)'"
              class="pen-button">
        <span>\u270B</span>
      </button>

      <!-- \uCE94\uBC84\uC2A4/\uD2B8\uB9AC \uD1A0\uAE00 -->
      <div class="view-toggle">
        <button [class.active]="viewMode === 'canvas'" 
                (click)="onViewModeChange('canvas')"
                class="toggle-btn">
          \u{1F4D0} \uCE94\uBC84\uC2A4
        </button>
        <button [class.active]="viewMode === 'tree'"
                (click)="onViewModeChange('tree')"
                class="toggle-btn">
          \u{1F4CB} \uD2B8\uB9AC
        </button>
      </div>
    </div>

    <!-- Canvas View -->
    @if (viewMode === 'canvas') {
      <app-ia-canvas 
        [pages]="currentProjectData.ia.pages"
        [userFlows]="currentProjectData.ia.userFlows"
        [viewMode]="viewMode"
        [zoomLevel]="canvasZoomLevel"
        [isPenMode]="isPenMode"
        (zoomLevelChange)="canvasZoomLevel = $event"
        (penModeChange)="isPenMode = $event"
        class="ia-canvas-wrapper">
      </app-ia-canvas>
    }

    <!-- Tree View -->
    @if (viewMode === 'tree') {
      <div class="ia-content">
      <div class="ia-tree">
        <h2>\uC0AC\uC774\uD2B8 \uAD6C\uC870</h2>
        @for (item of renderNodes(currentProjectData.ia.pages); let i = $index; track item.node.id + '_' + i) {
          <div class="tree-node" [style.padding-left]="(item.level * 30) + 'px'">
            <div class="node-content">
              @if (hasChildren(item.node)) {
                <button 
                  class="expand-btn" 
                  [class.expanded]="isNodeExpanded(item.node.id)"
                  (click)="toggleNode(item.node.id)">
                  \u25B6
                </button>
              } @else {
                <span class="no-expand"></span>
              }
              
              <div class="node-icon">\u{1F4C4}</div>
              
              <div class="node-info">
                <div class="node-name">{{item.node.name}}</div>
                <div class="node-type-label">\uD398\uC774\uC9C0</div>
              </div>
              
              <div class="node-description">{{item.node.description}}</div>
            </div>
            
            @if (item.node.components && item.node.components.length > 0) {
              <div class="components-list">
                @for (comp of item.node.components; let j = $index; track comp + '_' + j) {
                  <div class="component-item">
                    <span class="component-icon">\u2699</span>
                    <span>{{comp}}</span>
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>

      <div class="ia-sections">
        <h2>\uC0AC\uC6A9\uC790 \uD50C\uB85C\uC6B0</h2>
        @for (flow of currentProjectData.ia.userFlows; let i = $index; track flow.name + '_' + i) {
          <div class="flow-section">
            <h3>{{flow.name}}</h3>
            <div class="flow-diagram">
              @for (step of flow.steps; let k = $index; let last = $last; track step + '_' + k) {
                <div class="flow-step">
                  <div class="step-content">{{step}}</div>
                </div>
                @if (!last) {
                  <div class="flow-arrow">\u2192</div>
                }
              }
            </div>
          </div>
        }
      </div>

      <div class="ia-sections">
        <h2>\uC8FC\uC694 \uD398\uC774\uC9C0</h2>
        <div class="pages-grid">
          @for (page of currentProjectData.ia.pages.slice(0, 4); let i = $index; track page.id + '_' + i) {
            <div class="page-card">
              <div class="page-header">
                <span class="page-type-badge">\uD398\uC774\uC9C0</span>
                <h3>{{page.name}}</h3>
              </div>
              <p>{{page.description}}</p>
              @if (page.components && page.components.length > 0) {
                <div class="components-summary">
                  <strong>\uAD6C\uC131 \uC694\uC18C:</strong>
                  <div class="component-tags">
                    @for (comp of page.components; let j = $index; track comp + '_' + j) {
                      <span class="tag">{{comp}}</span>
                    }
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/desk/components/ia-doc/ia-doc.component.scss */\n.ia-doc-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #f0f4f8 100%);\n  padding: 15px;\n  overflow-y: auto;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  gap: 12px;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);\n  border: 1px solid rgba(102, 126, 234, 0.12);\n}\n.zoom-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(102, 126, 234, 0.04);\n  border-radius: 8px;\n}\n.zoom-controls button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.zoom-controls button:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.zoom-controls button:active:not(:disabled) {\n  background: #e5e7eb;\n}\n.zoom-controls button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.zoom-controls button span {\n  display: block;\n  line-height: 1;\n}\n.zoom-controls .zoom-level {\n  font-size: 12px;\n  font-weight: 600;\n  color: #667eea;\n  width: 50px;\n  text-align: center;\n}\n.pen-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.pen-button:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pen-button:active {\n  background: #e5e7eb;\n}\n.pen-button.pen-active {\n  background: #667eea;\n  border-color: #667eea;\n  box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);\n}\n.pen-button span {\n  display: block;\n  line-height: 1;\n}\n.view-toggle {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: rgba(229, 231, 235, 0.3);\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  margin-left: auto;\n}\n.view-toggle .toggle-btn {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n}\n.view-toggle .toggle-btn:hover {\n  background: rgba(229, 231, 235, 0.5);\n  color: #374151;\n}\n.view-toggle .toggle-btn.active {\n  background: white;\n  color: #667eea;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.ia-header {\n  background:\n    linear-gradient(\n      135deg,\n      #fccb90 0%,\n      #d57eeb 100%);\n  color: white;\n  padding: 16px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 4px 20px rgba(252, 203, 144, 0.3);\n}\n.ia-header .header-content {\n  flex: 1;\n  text-align: center;\n}\n.ia-header .header-content h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.ia-header .header-content h1 .folder-tag {\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.ia-header .header-content .subtitle {\n  margin: 3px 0 0 0;\n  font-size: 12px;\n  opacity: 0.9;\n}\n.ia-header .view-toggle {\n  display: flex;\n  gap: 8px;\n  margin-left: 20px;\n}\n.ia-header .toggle-btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.ia-header .toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.ia-header .toggle-btn.active {\n  background: white;\n  color: #d57eeb;\n  font-weight: 600;\n}\n.ia-canvas-wrapper {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n.ia-content {\n  flex: 1;\n  padding: 30px;\n  overflow-y: auto;\n}\n.ia-content::-webkit-scrollbar {\n  width: 8px;\n}\n.ia-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.ia-content::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.ia-content::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.ia-legend {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n}\n.legend-icon {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n}\n.ia-tree {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n  margin-bottom: 30px;\n}\n.tree-node {\n  border-bottom: 1px solid #e0e0e0;\n}\n.tree-node:last-child {\n  border-bottom: none;\n}\n.node-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 0;\n}\n.node-content:hover {\n  background: #fafbfc;\n}\n.expand-btn {\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: #667eea;\n  font-size: 12px;\n  font-weight: bold;\n  transition: transform 0.2s;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.expand-btn.expanded {\n  transform: rotate(90deg);\n}\n.expand-btn:hover {\n  color: #764ba2;\n}\n.no-expand {\n  width: 24px;\n  display: inline-block;\n}\n.node-type {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.node-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.node-name {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n}\n.node-type-label {\n  font-size: 11px;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.node-description {\n  color: #777;\n  font-size: 12px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.ia-sections {\n  margin-bottom: 30px;\n}\n.ia-sections h2 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 15px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #fccb90;\n}\n.flow-diagram {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  background: white;\n  padding: 25px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow-x: auto;\n  padding-bottom: 25px;\n}\n.flow-step {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  padding: 20px;\n  border-radius: 12px;\n  min-width: 120px;\n}\n.step-number {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 16px;\n}\n.step-title {\n  font-weight: 600;\n  font-size: 14px;\n}\n.step-description {\n  font-size: 12px;\n  opacity: 0.9;\n}\n.flow-arrow {\n  font-size: 24px;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.pages-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.page-card {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n  border-left: 4px solid #fccb90;\n}\n.page-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.page-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.page-type-badge {\n  display: inline-block;\n  background: #fccb90;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.page-card p {\n  margin: 0;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=ia-doc.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], { folderType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IaDocComponent, { className: "IaDocComponent", filePath: "src/app/modules/desk/components/ia-doc/ia-doc.component.ts", lineNumber: 33 });
})();

// src/app/modules/desk/services/device-detect.service.ts
var DeviceDetectService = class _DeviceDetectService {
  deviceInfoSubject = new BehaviorSubject(this.detectDevice());
  deviceInfo$ = this.deviceInfoSubject.asObservable();
  constructor() {
    fromEvent(window, "resize").pipe(debounceTime(300), map(() => this.detectDevice()), startWith(this.detectDevice())).subscribe((info) => this.deviceInfoSubject.next(info));
  }
  detectDevice() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    return {
      isMobile,
      isTablet,
      isDesktop,
      screenWidth: width,
      screenHeight: height
    };
  }
  get isMobile() {
    return this.deviceInfoSubject.value.isMobile;
  }
  get isTablet() {
    return this.deviceInfoSubject.value.isTablet;
  }
  get isDesktop() {
    return this.deviceInfoSubject.value.isDesktop;
  }
  get currentDeviceInfo() {
    return this.deviceInfoSubject.value;
  }
  static \u0275fac = function DeviceDetectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceDetectService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeviceDetectService, factory: _DeviceDetectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceDetectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/shared/pipes/sanitize-html.pipe.ts
var SanitizeHtmlPipe = class _SanitizeHtmlPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = function SanitizeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SanitizeHtmlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sanitizeHtml", type: _SanitizeHtmlPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanitizeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "sanitizeHtml",
      standalone: true
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/modules/desk/components/desktop/desktop.component.ts
var _forTrack04 = ($index, $item) => $item.id || $index;
var _forTrack13 = ($index, $item) => $item.id;
function DesktopComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activeWindow.metaData.label);
  }
}
function DesktopComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.minimizedWindows.length);
  }
}
function DesktopComponent_Conditional_1_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Conditional_20_For_2_Template_div_click_0_listener() {
      const level_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setZoomLevel(level_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", level_r5 === ctx_r1.zoomLevel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r5, "% ");
  }
}
function DesktopComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Conditional_20_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275repeaterCreate(1, DesktopComponent_Conditional_1_Conditional_20_For_2_Template, 2, 3, "div", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(3, "div", 44);
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Conditional_20_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetZoom());
    });
    \u0275\u0275text(5, " \uAE30\uBCF8\uAC12 \uC124\uC815 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.zoomLevels);
  }
}
function DesktopComponent_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Conditional_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 49);
    \u0275\u0275element(3, "path", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275text(5, "\uB4A4\uB85C");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-tooltip", "\uB4A4\uB85C");
  }
}
function DesktopComponent_Conditional_1_For_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function DesktopComponent_Conditional_1_For_41_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 53);
    \u0275\u0275pipe(1, "sanitizeHtml");
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.getIconSvg(item_r8.icon)), \u0275\u0275sanitizeHtml);
  }
}
function DesktopComponent_Conditional_1_For_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.currentFolderType === "calendar" ? "Calendar" : "Note", ")");
  }
}
function DesktopComponent_Conditional_1_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_For_41_Template_div_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWindow(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275conditionalCreate(2, DesktopComponent_Conditional_1_For_41_Conditional_2_Template, 2, 0, ":svg:svg", 49)(3, DesktopComponent_Conditional_1_For_41_Conditional_3_Template, 2, 3, ":svg:svg", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, DesktopComponent_Conditional_1_For_41_Conditional_6_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-tooltip", item_r8.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getIconGradient(item_r8.icon, item_r8.label));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.type === "folder" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r8.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r8.type || item_r8.type === "doc" ? 6 : -1);
  }
}
function DesktopComponent_Conditional_1_For_44_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-window-modal", 57);
    \u0275\u0275listener("moveToFront", function DesktopComponent_Conditional_1_For_44_Conditional_0_Template_app_window_modal_moveToFront_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveToFront($event));
    })("close", function DesktopComponent_Conditional_1_For_44_Conditional_0_Template_app_window_modal_close_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("minimizeWindow", function DesktopComponent_Conditional_1_For_44_Conditional_0_Template_app_window_modal_minimizeWindow_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.minimizeWindow($event));
    })("windowStyleChange", function DesktopComponent_Conditional_1_For_44_Conditional_0_Template_app_window_modal_windowStyleChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const window_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWindowStyleChange(window_r10.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const window_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", window_r10.id)("zIndex", window_r10.zIndex)("metaData", window_r10.metaData)("folderType", window_r10.folderType)("isMobileApp", ctx_r1.isMobileApp(window_r10.metaData))("zoomLevel", ctx_r1.zoomLevel);
  }
}
function DesktopComponent_Conditional_1_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DesktopComponent_Conditional_1_For_44_Conditional_0_Template, 1, 6, "app-window-modal", 56);
  }
  if (rf & 2) {
    const window_r10 = ctx.$implicit;
    \u0275\u0275conditional(!window_r10.isMinimized ? 0 : -1);
  }
}
function DesktopComponent_Conditional_1_For_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 60);
  }
}
function DesktopComponent_Conditional_1_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_For_48_Template_div_click_0_listener() {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWindow(item_r12));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 53);
    \u0275\u0275pipe(3, "sanitizeHtml");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DesktopComponent_Conditional_1_For_48_Conditional_4_Template, 1, 0, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isAppActive(item_r12));
    \u0275\u0275attribute("data-tooltip", item_r12.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getIconGradient(item_r12.icon, item_r12.label));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(3, 7, ctx_r1.getIconSvg(item_r12.icon)), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isAppActive(item_r12) ? 4 : -1);
  }
}
function DesktopComponent_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
function DesktopComponent_Conditional_1_For_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_For_51_Template_div_click_0_listener($event) {
      const window_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.restoreWindow(window_r14.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 53);
    \u0275\u0275pipe(3, "sanitizeHtml");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(4, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const window_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-tooltip", window_r14.metaData.label + " (\uCD5C\uC18C\uD654\uB428)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getIconGradient(window_r14.metaData.icon, window_r14.metaData.label));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(3, 4, ctx_r1.getIconSvg(window_r14.metaData.icon)), \u0275\u0275sanitizeHtml);
  }
}
function DesktopComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 5);
    \u0275\u0275element(4, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "MOBSOFT");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, DesktopComponent_Conditional_1_Conditional_7_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275conditionalCreate(9, DesktopComponent_Conditional_1_Conditional_9_Template, 5, 1, "div", 10);
    \u0275\u0275elementStart(10, "div", 11)(11, "button", 12);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decreaseZoom());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 5);
    \u0275\u0275element(13, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 14)(15, "span", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 16);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleZoomDropdown());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 5);
    \u0275\u0275element(19, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, DesktopComponent_Conditional_1_Conditional_20_Template, 6, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275listener("click", function DesktopComponent_Conditional_1_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.increaseZoom());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 5);
    \u0275\u0275element(23, "path", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 5);
    \u0275\u0275element(26, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 23);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275element(30, "div", 25);
    \u0275\u0275elementStart(31, "div", 26);
    \u0275\u0275element(32, "div", 27)(33, "div", 28)(34, "div", 29)(35, "div", 30)(36, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "div", 32);
    \u0275\u0275elementStart(38, "div", 33);
    \u0275\u0275conditionalCreate(39, DesktopComponent_Conditional_1_Conditional_39_Template, 6, 1, "div", 34);
    \u0275\u0275repeaterCreate(40, DesktopComponent_Conditional_1_For_41_Template, 7, 6, "div", 34, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 35);
    \u0275\u0275repeaterCreate(43, DesktopComponent_Conditional_1_For_44_Template, 1, 1, null, null, _forTrack13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 36)(46, "div", 37);
    \u0275\u0275repeaterCreate(47, DesktopComponent_Conditional_1_For_48_Template, 5, 9, "div", 38, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(49, DesktopComponent_Conditional_1_Conditional_49_Template, 1, 0, "div", 39);
    \u0275\u0275repeaterCreate(50, DesktopComponent_Conditional_1_For_51_Template, 5, 6, "div", 40, _forTrack13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.activeWindow ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.minimizedWindows.length > 0 ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.zoomLevel === ctx_r1.zoomLevels[0]);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.zoomLevel, "%");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showZoomDropdown ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.zoomLevel === ctx_r1.zoomLevels[ctx_r1.zoomLevels.length - 1]);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.currentTime);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.isInSubFolder() ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.desktopIcons);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.windows);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.icons);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.minimizedWindows.length > 0 ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.minimizedWindows);
  }
}
function DesktopComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 65);
    \u0275\u0275element(3, "rect", 66)(4, "line", 67)(5, "line", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1", 69);
    \u0275\u0275text(7, "PC\uC5D0\uC11C\uB9CC \uC81C\uACF5\uD569\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 70);
    \u0275\u0275text(9, "\uC774 \uC11C\uBE44\uC2A4\uB294 \uB370\uC2A4\uD06C\uD1B1 \uD658\uACBD\uC5D0\uC11C\uB9CC \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 71);
    \u0275\u0275text(11, "\uB354 \uD070 \uD654\uBA74\uC758 \uCEF4\uD4E8\uD130\uC5D0\uC11C \uC811\uC18D\uD574\uC8FC\uC138\uC694.");
    \u0275\u0275elementEnd()()();
  }
}
function generateId() {
  return `window-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
var DesktopComponent = class _DesktopComponent {
  cdr;
  deviceService;
  sanitizer;
  debugLogger;
  currentTime = "";
  timeInterval;
  backgroundImage = "";
  // 모바일 관련 속성
  isMobile = false;
  currentAppIndex = -1;
  // -1은 앱이 선택되지 않은 상태
  primaryApps = [];
  allApps = [];
  showAppDrawer = false;
  showAppSwitcher = false;
  // iOS 앱 스위처
  showMinimizedApps = false;
  // 최소화된 앱 목록 표시 (슬라이드 방식)
  currentMinimizedIndex = 0;
  // 현재 보고 있는 최소화된 앱 인덱스
  runningApps = [];
  // 실행 중인 앱 목록
  appIdCounter = 0;
  isFullscreen = false;
  // 전체화면 모드
  currentFolderPath = "root";
  // 현재 폴더 타입 추출 (folder-calendar -> calendar, folder-note -> note)
  get currentFolderType() {
    if (this.currentFolderPath === "folder-calendar") {
      return "calendar";
    } else if (this.currentFolderPath === "folder-note") {
      return "note";
    }
    return "calendar";
  }
  desktopFolders = {
    root: [
      {
        id: "folder-calendar",
        icon: "calendar",
        label: "Calendar",
        type: "folder",
        component: null,
        contents: [
          {
            component: SpecDocComponent,
            icon: "docs",
            label: "\uAE30\uB2A5\uC815\uC758\uC11C",
            route: "/docs/spec"
          },
          {
            component: WbsDocComponent,
            icon: "project",
            label: "WBS",
            route: "/docs/wbs"
          },
          {
            component: IaDocComponent,
            icon: "form",
            label: "IA",
            route: "/docs/ia"
          }
        ]
      },
      {
        id: "folder-note",
        icon: "note",
        label: "Note",
        type: "folder",
        component: null,
        contents: [
          {
            component: SpecDocComponent,
            icon: "docs",
            label: "\uAE30\uB2A5\uC815\uC758\uC11C",
            route: "/docs/spec"
          },
          {
            component: WbsDocComponent,
            icon: "project",
            label: "WBS",
            route: "/docs/wbs"
          },
          {
            component: IaDocComponent,
            icon: "form",
            label: "IA",
            route: "/docs/ia"
          }
        ]
      }
    ],
    "folder-calendar": [
      {
        component: SpecDocComponent,
        icon: "docs",
        label: "\uAE30\uB2A5\uC815\uC758\uC11C",
        route: "/docs/spec"
      },
      {
        component: WbsDocComponent,
        icon: "project",
        label: "WBS",
        route: "/docs/wbs"
      },
      {
        component: IaDocComponent,
        icon: "form",
        label: "IA",
        route: "/docs/ia"
      }
    ],
    "folder-note": [
      {
        component: SpecDocComponent,
        icon: "docs",
        label: "\uAE30\uB2A5\uC815\uC758\uC11C",
        route: "/docs/spec"
      },
      {
        component: WbsDocComponent,
        icon: "project",
        label: "WBS",
        route: "/docs/wbs"
      },
      {
        component: IaDocComponent,
        icon: "form",
        label: "IA",
        route: "/docs/ia"
      }
    ]
  };
  get desktopIcons() {
    return this.desktopFolders[this.currentFolderPath] || [];
  }
  icons = [
    {
      component: null,
      icon: "calendar",
      label: "\uCE98\uB9B0\uB354 (PC)",
      route: "/calendar/pc"
    },
    {
      component: null,
      icon: "calendar",
      label: "\uCE98\uB9B0\uB354 (\uBAA8\uBC14\uC77C)",
      route: "/calendar/mobile"
    },
    {
      component: null,
      icon: "note",
      label: "\uB178\uD2B8 (PC)",
      route: "/note/pc"
    },
    {
      component: null,
      icon: "note",
      label: "\uB178\uD2B8 (\uBAA8\uBC14\uC77C)",
      route: "/note/mobile"
    }
  ];
  windows = [];
  zIndex = 1e3;
  // 줌 레벨 관리
  zoomLevel = 100;
  // 기본값 100%
  zoomLevels = [50, 75, 100, 125, 150, 175, 200];
  // 사용 가능한 줌 레벨
  showZoomDropdown = false;
  // 줌 드롭다운 메뉴 표시 여부
  // 데스크톱 윈도우 관리
  get activeWindow() {
    return this.windows.filter((w) => !w.isMinimized).sort((a, b) => b.zIndex - a.zIndex)[0] || null;
  }
  get minimizedWindows() {
    return this.windows.filter((w) => w.isMinimized);
  }
  iconBoxStyle = {
    width: "80px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "12px",
    userSelect: "none",
    color: "white",
    gap: "8px",
    transition: "all 0.3s ease"
  };
  iconLabel = {
    maxWidth: "100%",
    fontSize: "12px",
    textAlign: "center",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    lineHeight: 1.2,
    height: "2.4em",
    wordWrap: "break-word",
    whiteSpace: "normal"
  };
  constructor(cdr, deviceService, sanitizer, debugLogger) {
    this.cdr = cdr;
    this.deviceService = deviceService;
    this.sanitizer = sanitizer;
    this.debugLogger = debugLogger;
    this.debugLogger.info("Desktop Component", "Constructor called");
  }
  ngOnInit() {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1e3);
    const savedZoom = localStorage.getItem("desk-zoom-level");
    if (savedZoom) {
      const zoom = parseInt(savedZoom, 10);
      if (this.zoomLevels.includes(zoom)) {
        this.zoomLevel = zoom;
      }
    }
    this.deviceService.deviceInfo$.subscribe((info) => {
      this.isMobile = info.isMobile;
      this.setupMobileLayout();
      this.cdr.detectChanges();
    });
    this.setupMobileLayout();
    this.setRandomBackgroundImage();
  }
  setRandomBackgroundImage() {
    const images = ["loworld_1.png", "loworld_2.png", "loworld_3.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const imagePath = `/images/ai/${selectedImage}`;
    this.backgroundImage = imagePath;
    this.debugLogger.info("Background Image", `\uB79C\uB364 \uC120\uD0DD: ${selectedImage}`);
    this.checkBackgroundImage(imagePath);
  }
  checkBackgroundImage(imagePath) {
    this.debugLogger.info("Background Image", `\uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC2DC\uB3C4: ${imagePath}`);
    const img = new Image();
    img.onload = () => {
      this.debugLogger.success("Background Image", `\uB85C\uB4DC \uC131\uACF5: ${imagePath}`);
      this.debugLogger.info("Background Image", `\uD06C\uAE30: ${img.width} x ${img.height}`);
    };
    img.onerror = () => {
      this.debugLogger.error("Background Image", `\uB85C\uB4DC \uC2E4\uD328: ${imagePath}`);
      this.debugLogger.warn("Background Image", "\uC774\uBBF8\uC9C0 \uACBD\uB85C\uB97C \uD655\uC778\uD558\uC138\uC694");
      const altPaths = [
        "images/ai/loworld_1.png",
        "./images/ai/loworld_1.png",
        "../../../../../../../public/images/ai/loworld_1.png",
        "assets/images/ai/loworld_1.png"
      ];
      this.debugLogger.info("Background Image", `\uB300\uCCB4 \uACBD\uB85C: ${altPaths.join(", ")}`);
      this.testAlternativePaths(altPaths);
    };
    img.src = imagePath;
  }
  testAlternativePaths(paths) {
    paths.forEach((path, index) => {
      const testImg = new Image();
      testImg.onload = () => {
        this.debugLogger.success("Background Image", `\uB300\uCCB4 \uACBD\uB85C \uC131\uACF5: ${path}`);
      };
      testImg.onerror = () => {
        this.debugLogger.error("Background Image", `\uB300\uCCB4 \uACBD\uB85C \uC2E4\uD328: ${path}`);
      };
      testImg.src = path;
    });
  }
  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
  updateTime() {
    const now = /* @__PURE__ */ new Date();
    const days = ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"];
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    this.currentTime = `${month}\uC6D4 ${date}\uC77C (${day}) ${hours}:${minutes}`;
  }
  // 모바일 레이아웃 설정 (현재 모바일 레이아웃은 표시되지 않으므로 최소한의 처리만 수행)
  setupMobileLayout() {
    if (this.isMobile) {
      this.primaryApps = [];
      this.allApps = [];
    } else {
      this.primaryApps = [];
      this.allApps = [...this.icons];
    }
  }
  // 모바일: 앱 전환
  switchToApp(index) {
    if (this.isMobile && index >= 0 && index < this.icons.length) {
      this.currentAppIndex = index;
      const appMetaData = this.icons[index];
      const existingApp = this.runningApps.find((app) => app.metaData.route === appMetaData.route);
      if (!existingApp) {
        const newApp = {
          id: `app-${this.appIdCounter++}`,
          zIndex: 1e3,
          metaData: appMetaData,
          isMinimized: false,
          isFullscreen: false
        };
        this.runningApps.push(newApp);
      }
      this.showAppDrawer = false;
      this.showAppSwitcher = false;
    }
  }
  // 모바일: Primary 앱 열기 (홈 화면에서)
  openPrimaryApp(index) {
    if (this.isMobile && index >= 0 && index < this.primaryApps.length) {
      const app = this.primaryApps[index];
      const fullAppIndex = this.icons.findIndex((a) => a.route === app.route);
      if (fullAppIndex !== -1) {
        this.currentAppIndex = fullAppIndex;
        const appMetaData = this.icons[fullAppIndex];
        const existingApp = this.runningApps.find((app2) => app2.metaData.route === appMetaData.route);
        if (!existingApp) {
          const newApp = {
            id: `app-${this.appIdCounter++}`,
            zIndex: 1e3,
            metaData: appMetaData,
            isMinimized: false,
            isFullscreen: false
          };
          this.runningApps.push(newApp);
        }
        this.showAppDrawer = false;
        this.showAppSwitcher = false;
      }
    }
  }
  // 모바일: 앱 닫기 (시작 화면으로)
  closeApp() {
    if (this.isMobile && this.currentAppIndex !== -1) {
      const currentApp = this.icons[this.currentAppIndex];
      this.runningApps = this.runningApps.filter((app) => app.metaData.route !== currentApp.route);
      this.currentAppIndex = -1;
    }
  }
  // 모바일: 스와이프로 앱 전환
  onSwipeLeft() {
    if (this.isMobile && this.currentAppIndex >= 0 && this.currentAppIndex < this.icons.length - 1) {
      this.currentAppIndex++;
      this.switchToApp(this.currentAppIndex);
    }
  }
  onSwipeRight() {
    if (this.isMobile && this.currentAppIndex > 0) {
      this.currentAppIndex--;
      this.switchToApp(this.currentAppIndex);
    }
  }
  // 모바일: 앱 드로어 토글
  toggleAppDrawer() {
    this.showAppDrawer = !this.showAppDrawer;
    this.showAppSwitcher = false;
  }
  // iOS 앱 스위처 열기
  openAppSwitcher() {
    if (this.isMobile) {
      this.showAppSwitcher = true;
      this.showAppDrawer = false;
    }
  }
  // iOS 앱 스위처 닫기
  closeAppSwitcher() {
    this.showAppSwitcher = false;
  }
  // 전체화면 토글
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
  // 실행 중인 앱으로 전환
  switchToRunningApp(appId) {
    const app = this.runningApps.find((a) => a.id === appId);
    if (app) {
      app.isMinimized = false;
      const index = this.allApps.findIndex((a) => a.route === app.metaData.route);
      if (index !== -1) {
        this.currentAppIndex = index;
        this.showAppSwitcher = false;
      }
    }
  }
  // 실행 중인 앱 닫기
  closeRunningApp(appId) {
    this.runningApps = this.runningApps.filter((app) => app.id !== appId);
    const closedApp = this.runningApps.find((app) => app.id === appId);
    if (closedApp && this.currentAppIndex !== -1) {
      const currentApp = this.allApps[this.currentAppIndex];
      if (currentApp.route === closedApp.metaData.route) {
        this.currentAppIndex = -1;
      }
    }
  }
  // 현재 앱 최소화 (내려두기)
  minimizeCurrentApp() {
    if (this.isMobile && this.currentAppIndex !== -1) {
      const currentApp = this.allApps[this.currentAppIndex];
      const runningApp = this.runningApps.find((app) => app.metaData.route === currentApp.route);
      if (runningApp) {
        runningApp.isMinimized = true;
        runningApp.screenshot = this.captureAppScreenshot(currentApp);
      }
      this.currentAppIndex = -1;
      this.currentMinimizedIndex = 0;
    }
  }
  // 앱 스크린샷 캡쳐 (placeholder)
  captureAppScreenshot(app) {
    return `screenshot-${app.icon}`;
  }
  // 최소화된 앱 목록 토글
  toggleMinimizedApps() {
    this.showMinimizedApps = !this.showMinimizedApps;
    if (this.showMinimizedApps) {
      this.currentMinimizedIndex = 0;
      this.showAppSwitcher = false;
      this.showAppDrawer = false;
    }
  }
  // 최소화된 앱 가져오기
  get minimizedApps() {
    return this.runningApps.filter((app) => app.isMinimized);
  }
  // 최소화된 앱 복원
  restoreMinimizedApp(appId) {
    const app = this.runningApps.find((a) => a.id === appId);
    if (app) {
      app.isMinimized = false;
      const index = this.allApps.findIndex((a) => a.route === app.metaData.route);
      if (index !== -1) {
        this.currentAppIndex = index;
        this.showMinimizedApps = false;
      }
    }
  }
  // 최소화된 앱 닫기
  closeMinimizedApp(appId, event) {
    if (event) {
      event.stopPropagation();
    }
    const index = this.runningApps.findIndex((app) => app.id === appId);
    this.runningApps = this.runningApps.filter((app) => app.id !== appId);
    if (this.currentMinimizedIndex >= this.minimizedApps.length && this.minimizedApps.length > 0) {
      this.currentMinimizedIndex = this.minimizedApps.length - 1;
    }
  }
  // 최소화된 앱 슬라이드 네비게이션
  nextMinimizedApp() {
    if (this.currentMinimizedIndex < this.minimizedApps.length - 1) {
      this.currentMinimizedIndex++;
    }
  }
  prevMinimizedApp() {
    if (this.currentMinimizedIndex > 0) {
      this.currentMinimizedIndex--;
    }
  }
  // 슬라이드에서 특정 앱으로 이동
  goToMinimizedApp(index) {
    if (index >= 0 && index < this.minimizedApps.length) {
      this.currentMinimizedIndex = index;
    }
  }
  // 현재 앱이 기본 4개 앱에 포함되는지 확인
  isPrimaryApp(app) {
    return this.primaryApps.some((p) => p.route === app.route);
  }
  isAppActive(icon) {
    return this.windows.some((w) => w.metaData.route === icon.route);
  }
  isMobileApp(metaData) {
    return metaData.route?.includes("mobile") || false;
  }
  openWindow(meta) {
    return __async(this, null, function* () {
      if (meta.type === "folder") {
        this.currentFolderPath = meta.id;
        return;
      }
      const existingWindow = this.windows.find((w) => w.metaData.route === meta.route && w.folderType === this.currentFolderPath);
      if (existingWindow) {
        this.moveToFront(existingWindow.id);
        return;
      }
      this.windows.push({
        id: generateId(),
        zIndex: this.zIndex++,
        metaData: meta,
        folderType: this.currentFolderType,
        windowStyle: {
          top: 20,
          left: 20
        }
      });
    });
  }
  // 폴더 나가기 (상위 폴더로)
  goBack() {
    if (this.currentFolderPath !== "root") {
      this.currentFolderPath = "root";
    }
  }
  // 현재 폴더가 root가 아닌지 확인
  isInSubFolder() {
    return this.currentFolderPath !== "root";
  }
  moveToFront(id) {
    const clickedWindow = this.windows.find((window2) => window2.id === id);
    if (!clickedWindow) {
      return;
    }
    const maxIndex = Math.max(...this.windows.map((window2) => Number(window2.zIndex)), this.zIndex);
    if (maxIndex === Number(clickedWindow.zIndex))
      return;
    this.windows = this.windows.map((window2) => window2.id === id ? __spreadProps(__spreadValues({}, window2), { zIndex: maxIndex + 1 }) : window2);
    this.zIndex = maxIndex + 1;
    console.log(`\u{1F7E3} Updated zIndex list:`, this.windows.map((w) => ({ id: w.id, zIndex: w.zIndex })));
    this.windows = [...this.windows];
  }
  close(id) {
    this.windows = this.windows.filter((window2) => window2.id !== id);
  }
  minimizeWindow(id) {
    const window2 = this.windows.find((w) => w.id === id);
    if (window2) {
      window2.isMinimized = true;
      this.windows = [...this.windows];
    } else {
    }
  }
  restoreWindow(id) {
    const window2 = this.windows.find((w) => w.id === id);
    if (window2) {
      window2.isMinimized = false;
      this.moveToFront(id);
      this.windows = [...this.windows];
    } else {
    }
  }
  onWindowStyleChange(id, style) {
    const window2 = this.windows.find((w) => w.id === id);
    if (window2) {
      window2.windowStyle = style;
      this.windows = [...this.windows];
    }
  }
  getIconSvg(iconName) {
    const svgs = {
      "novel": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
      "docs": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
      "erp": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
      "loworld": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      "store": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>',
      "chat-talk": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',
      "slack": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>',
      "project": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>',
      "form": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
      "calendar": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
      "note": '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>'
    };
    return svgs[iconName] || "";
  }
  getIconGradient(iconName, label = "") {
    const isMobileVersion = label.includes("(\uBAA8\uBC14\uC77C)");
    const gradients = {
      "novel": {
        pc: "linear-gradient(135deg, #ff1493, #ff4500)",
        mobile: "linear-gradient(135deg, #ff6b9d, #ffb347)"
      },
      "docs": {
        pc: "linear-gradient(135deg, #1e90ff, #00bfff)",
        mobile: "linear-gradient(135deg, #87ceeb, #4dd0e1)"
      },
      "erp": {
        pc: "linear-gradient(135deg, #32cd32, #00ff7f)",
        mobile: "linear-gradient(135deg, #66bb6a, #81c784)"
      },
      "loworld": {
        pc: "linear-gradient(135deg, #ff6347, #ffa500)",
        mobile: "linear-gradient(135deg, #ff8566, #ffb74d)"
      },
      "store": {
        pc: "linear-gradient(135deg, #9370db, #8a2be2)",
        mobile: "linear-gradient(135deg, #ba68c8, #ab47bc)"
      },
      "chat-talk": {
        pc: "linear-gradient(135deg, #ff69b4, #ff1493)",
        mobile: "linear-gradient(135deg, #ff99cc, #ff69b4)"
      },
      "slack": {
        pc: "linear-gradient(135deg, #10b981, #059669)",
        mobile: "linear-gradient(135deg, #4db8a8, #26a69a)"
      },
      "project": {
        pc: "linear-gradient(135deg, #ff6b35, #f7931e)",
        mobile: "linear-gradient(135deg, #ff9657, #ffb74d)"
      },
      "form": {
        pc: "linear-gradient(135deg, #ff6b35, #e65100)",
        mobile: "linear-gradient(135deg, #ff9657, #f4511e)"
      },
      "calendar": {
        pc: "linear-gradient(135deg, #06b6d4, #0891b2)",
        mobile: "linear-gradient(135deg, #4dd0e1, #26c6da)"
      },
      "note": {
        pc: "linear-gradient(135deg, #f97316, #ea580c)",
        mobile: "linear-gradient(135deg, #ffb74d, #ffa726)"
      }
    };
    const gradient = gradients[iconName];
    if (!gradient) {
      return "linear-gradient(135deg, #667eea, #764ba2)";
    }
    return isMobileVersion ? gradient.mobile : gradient.pc;
  }
  // ========== 줌 레벨 관리 메서드 ==========
  /**
   * 줌 레벨 설정
   */
  setZoomLevel(level) {
    if (this.zoomLevels.includes(level)) {
      this.zoomLevel = level;
      localStorage.setItem("desk-zoom-level", level.toString());
      this.cdr.detectChanges();
    }
  }
  /**
   * 줌 레벨 증가 (5%씩)
   */
  increaseZoom() {
    const newZoom = Math.min(200, this.zoomLevel + 5);
    this.zoomLevel = newZoom;
    localStorage.setItem("desk-zoom-level", newZoom.toString());
    this.cdr.detectChanges();
  }
  /**
   * 줌 레벨 감소 (5%씩)
   */
  decreaseZoom() {
    const newZoom = Math.max(50, this.zoomLevel - 5);
    this.zoomLevel = newZoom;
    localStorage.setItem("desk-zoom-level", newZoom.toString());
    this.cdr.detectChanges();
  }
  /**
   * 줌 레벨을 기본값(100%)으로 리셋
   */
  resetZoom() {
    this.setZoomLevel(100);
  }
  /**
   * 줌 스케일 CSS 트랜스폼 문자열 반환
   */
  getZoomTransform() {
    const scale = this.zoomLevel / 100;
    return `scale(${scale})`;
  }
  /**
   * 줌 드롭다운 메뉴 토글
   */
  toggleZoomDropdown() {
    this.showZoomDropdown = !this.showZoomDropdown;
  }
  /**
   * 문서 클릭 시 줌 드롭다운 닫기
   */
  closeZoomDropdown(event) {
    const target = event.target;
    if (!target.closest(".zoom-control")) {
      this.showZoomDropdown = false;
    }
  }
  /**
   * 마우스 휠 이벤트: 확대/축소
   */
  onMouseWheel(event) {
    if (!event.target.closest(".desktop-wallpaper")) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const zoomStep = 1;
    const isZoomIn = event.deltaY < 0;
    const newZoom = isZoomIn ? Math.min(200, this.zoomLevel + zoomStep) : Math.max(50, this.zoomLevel - zoomStep);
    this.zoomLevel = newZoom;
    localStorage.setItem("desk-zoom-level", newZoom.toString());
    this.cdr.detectChanges();
  }
  // 모바일: 안전한 URL 생성 (iframe용)
  getSafeUrl(route) {
    if (!route) {
      return this.sanitizer.bypassSecurityTrustResourceUrl("about:blank");
    }
    const baseUrl = window.location.origin + window.location.pathname;
    const fullUrl = `${baseUrl}#${route}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
  static \u0275fac = function DesktopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DesktopComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DeviceDetectService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(DebugLoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesktopComponent, selectors: [["app-desktop"]], hostBindings: function DesktopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DesktopComponent_click_HostBindingHandler($event) {
        return ctx.closeZoomDropdown($event);
      }, \u0275\u0275resolveDocument)("wheel", function DesktopComponent_wheel_HostBindingHandler($event) {
        return ctx.onMouseWheel($event);
      });
    }
  }, standalone: false, decls: 3, vars: 4, consts: [[1, "desktop-container"], [1, "mobile-blocked-screen"], [1, "menu-bar"], [1, "menu-bar-left"], [1, "brand-logo"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], [1, "brand-name"], [1, "menu-item", "active"], [1, "menu-bar-right"], ["title", "\uCD5C\uC18C\uD654\uB41C \uCC3D", 1, "minimized-count"], [1, "zoom-control"], ["title", "\uCD95\uC18C (Ctrl/Cmd + -)", 1, "zoom-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 12H4"], [1, "zoom-display"], [1, "zoom-value"], ["title", "\uC90C \uB808\uBCA8 \uC120\uD0DD", 1, "zoom-dropdown-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 14l-7 7m0 0l-7-7m7 7V3"], [1, "zoom-dropdown"], ["title", "\uD655\uB300 (Ctrl/Cmd + +)", 1, "zoom-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "menu-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "menu-time"], [1, "desktop-wallpaper"], [1, "wallpaper-gradient"], [1, "wallpaper-orbs"], [1, "orb", "orb-1"], [1, "orb", "orb-2"], [1, "orb", "orb-3"], [1, "orb", "orb-4"], [1, "orb", "orb-5"], [1, "wallpaper-overlay"], [1, "desktop-icons"], [1, "desktop-icon"], [1, "windows-scale-container"], [1, "dock-container"], [1, "dock"], [1, "dock-icon", 3, "active"], [1, "dock-separator"], [1, "dock-icon", "minimized-window"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 8h16M4 16h16"], [1, "zoom-dropdown", 3, "click"], [1, "zoom-option", 3, "active"], [1, "zoom-separator"], [1, "zoom-option", "reset-option", 3, "click"], [1, "zoom-option", 3, "click"], [1, "desktop-icon", 3, "click"], [1, "desktop-icon-wrapper", 2, "background", "linear-gradient(135deg, #888, #666)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "desktop-icon-label"], [1, "desktop-icon-wrapper"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 3, "innerHTML"], [1, "icon-folder-tag"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"], [3, "id", "zIndex", "metaData", "folderType", "isMobileApp", "zoomLevel"], [3, "moveToFront", "close", "minimizeWindow", "windowStyleChange", "id", "zIndex", "metaData", "folderType", "isMobileApp", "zoomLevel"], [1, "dock-icon", 3, "click"], [1, "icon-wrapper"], [1, "active-indicator"], [1, "dock-icon", "minimized-window", 3, "click"], [1, "icon-wrapper", "minimized"], [1, "minimized-indicator"], [1, "blocked-content"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "blocked-icon"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "ry", "2", "stroke-width", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21", "stroke-width", "2"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21", "stroke-width", "2"], [1, "blocked-title"], [1, "blocked-description"], [1, "blocked-hint"]], template: function DesktopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, DesktopComponent_Conditional_1_Template, 52, 9);
      \u0275\u0275conditionalCreate(2, DesktopComponent_Conditional_2_Template, 12, 0, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mobile-layout", ctx.isMobile);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isMobile ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMobile ? 2 : -1);
    }
  }, dependencies: [WindowModalComponent, SanitizeHtmlPipe], styles: ['@charset "UTF-8";\n\n\n\n.desktop-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  height: 100dvh;\n  position: relative;\n  overflow: hidden;\n  background: #000;\n  display: flex;\n  flex-direction: column;\n}\n.menu-bar[_ngcontent-%COMP%] {\n  height: 24px;\n  background: rgba(20, 20, 30, 0.85);\n  backdrop-filter: blur(30px) saturate(180%);\n  -webkit-backdrop-filter: blur(30px) saturate(180%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 400;\n  z-index: 10000;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  position: relative;\n}\n.menu-bar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 100%);\n}\n.menu-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.apple-logo[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.apple-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.apple-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.menu-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 2px 8px;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.menu-item.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.menu-bar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.minimized-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: rgba(255, 193, 7, 0.15);\n  border-radius: 12px;\n  cursor: default;\n  transition: all 0.2s;\n}\n.minimized-count[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  stroke: rgba(255, 193, 7, 0.9);\n}\n.minimized-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: rgb(255, 193, 7);\n}\n.minimized-count[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 193, 7, 0.25);\n}\n.zoom-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  background: rgba(100, 150, 200, 0.12);\n  border: 1px solid rgba(100, 150, 200, 0.25);\n  border-radius: 8px;\n  position: relative;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-btn[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: rgba(100, 150, 200, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  color: #fff;\n  transition: all 0.2s;\n  padding: 0;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  stroke-width: 2.5;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(100, 150, 200, 0.4);\n  transform: scale(1.1);\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 60px;\n  justify-content: center;\n  position: relative;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-value[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n  min-width: 35px;\n  text-align: center;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown-btn[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.7);\n  transition: all 0.2s;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  stroke-width: 2.5;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown-btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  transform: scale(1.15);\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 6px;\n  background: rgba(20, 30, 50, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(100, 150, 200, 0.3);\n  border-radius: 8px;\n  min-width: 100px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  z-index: 10001;\n  overflow: hidden;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%]   .zoom-option[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%]   .zoom-option[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 150, 200, 0.2);\n  color: #fff;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%]   .zoom-option.active[_ngcontent-%COMP%] {\n  background: rgba(100, 150, 200, 0.4);\n  color: #fff;\n  font-weight: 600;\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%]   .zoom-option.reset-option[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 150, 100, 0.8);\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%]   .zoom-option.reset-option[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 150, 100, 0.15);\n  color: rgb(255, 180, 120);\n}\n.zoom-control[_ngcontent-%COMP%]   .zoom-display[_ngcontent-%COMP%]   .zoom-dropdown[_ngcontent-%COMP%]   .zoom-separator[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(100, 150, 200, 0.2);\n  margin: 4px 0;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 12px;\n  border-radius: 8px;\n  transition: background 0.2s;\n  cursor: pointer;\n}\n.brand-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: currentColor;\n}\n.brand-logo[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.brand-logo[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.menu-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.menu-icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.menu-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.desktop-wallpaper[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background: #0a0e27;\n}\n.desktop-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  z-index: 100;\n}\n.desktop-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n}\n.desktop-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.desktop-icon[_ngcontent-%COMP%]:hover   .desktop-icon-label[_ngcontent-%COMP%] {\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);\n}\n.desktop-icon[_ngcontent-%COMP%]:hover   .desktop-icon-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n}\n.desktop-icon[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.desktop-icon-wrapper[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2);\n  transition: all 0.2s;\n}\n.desktop-icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  stroke: white;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.desktop-icon-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  max-width: 90px;\n  word-break: break-word;\n  line-height: 1.3;\n  transition: text-shadow 0.2s;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n.desktop-icon-label[_ngcontent-%COMP%]   .icon-folder-tag[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9px;\n  opacity: 0.7;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.windows-scale-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center top;\n  transition: transform 0.3s ease-out;\n}\n.wallpaper-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      ellipse at top left,\n      rgba(94, 114, 228, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at top right,\n      rgba(147, 51, 234, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at bottom left,\n      rgba(59, 130, 246, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at bottom right,\n      rgba(236, 72, 153, 0.4) 0%,\n      transparent 50%),\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #312e81 25%,\n      #581c87 50%,\n      #831843 75%,\n      #1e40af 100%);\n  filter: blur(0);\n}\n.wallpaper-orbs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_float 20s ease-in-out infinite;\n  mix-blend-mode: screen;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.8) 0%,\n      transparent 70%);\n  top: -10%;\n  left: -10%;\n  animation-delay: 0s;\n  animation-duration: 25s;\n}\n.orb-2[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 85, 247, 0.7) 0%,\n      transparent 70%);\n  top: 20%;\n  right: -15%;\n  animation-delay: -5s;\n  animation-duration: 30s;\n}\n.orb-3[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 450px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.6) 0%,\n      transparent 70%);\n  bottom: -10%;\n  left: 20%;\n  animation-delay: -10s;\n  animation-duration: 28s;\n}\n.orb-4[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 550px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(236, 72, 153, 0.7) 0%,\n      transparent 70%);\n  bottom: 10%;\n  right: 10%;\n  animation-delay: -15s;\n  animation-duration: 35s;\n}\n.orb-5[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(147, 197, 253, 0.5) 0%,\n      transparent 70%);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation-delay: -20s;\n  animation-duration: 32s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(30px, -30px) scale(1.1);\n  }\n  50% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n  75% {\n    transform: translate(20px, 30px) scale(1.05);\n  }\n}\n.wallpaper-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0.03) 0px,\n      transparent 1px,\n      transparent 2px,\n      rgba(255, 255, 255, 0.03) 3px),\n    repeating-linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 0px,\n      transparent 1px,\n      transparent 2px,\n      rgba(255, 255, 255, 0.03) 3px);\n  pointer-events: none;\n  opacity: 0.3;\n}\n.dock-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  pointer-events: none;\n}\n.dock[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(40px) saturate(200%);\n  -webkit-backdrop-filter: blur(40px) saturate(200%);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 20px;\n  padding: 8px;\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n  box-shadow:\n    0 12px 48px rgba(0, 0, 0, 0.4),\n    0 0 0 1px rgba(255, 255, 255, 0.1) inset,\n    0 2px 4px rgba(255, 255, 255, 0.2) inset;\n  pointer-events: all;\n  position: relative;\n}\n.dock[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.15) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-radius: 20px;\n  pointer-events: none;\n}\n.dock-icon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transform-origin: bottom;\n}\n.dock-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-12px) scale(1.2);\n}\n.dock-icon[_ngcontent-%COMP%]:hover::before {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-8px);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 11px;\n  white-space: nowrap;\n  pointer-events: none;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.dock-icon[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.dock-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n  transition: box-shadow 0.2s;\n}\n.dock-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  stroke: white;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.dock-icon[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4);\n}\n.dock-icon[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 50%;\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);\n}\n.dock-icon.minimized-window[_ngcontent-%COMP%]   .icon-wrapper.minimized[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  position: relative;\n}\n.dock-icon.minimized-window[_ngcontent-%COMP%]   .icon-wrapper.minimized[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.dock-icon.minimized-window[_ngcontent-%COMP%]   .icon-wrapper.minimized[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.dock-icon.minimized-window[_ngcontent-%COMP%]:hover   .icon-wrapper.minimized[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.dock-icon[_ngcontent-%COMP%]   .minimized-indicator[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 193, 7, 0.9);\n  border-radius: 50%;\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 6px rgba(255, 193, 7, 0.8);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: translateX(-50%) scale(1.2);\n  }\n}\n.dock-separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 48px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      rgba(255, 255, 255, 0.2) 20%,\n      rgba(255, 255, 255, 0.2) 80%,\n      transparent);\n  margin: 0 4px;\n  align-self: center;\n}\n@media (max-width: 768px) {\n  .menu-bar[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 0 8px;\n  }\n  .menu-bar-left[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-item.active[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dock[_ngcontent-%COMP%] {\n    padding: 6px;\n    gap: 6px;\n    border-radius: 16px;\n  }\n  .dock-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    border-radius: 12px;\n  }\n  .dock-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .dock-icon[_ngcontent-%COMP%]:hover {\n    transform: translateY(-8px) scale(1.15);\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .dock-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n.desktop-container.mobile-layout[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  min-height: 100vh;\n  min-height: 100dvh;\n  max-height: 100vh;\n  max-height: 100dvh;\n}\n.mobile-statusbar[_ngcontent-%COMP%] {\n  height: 44px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  color: white;\n  font-size: 14px;\n  position: relative;\n  z-index: 1000;\n}\n.mobile-statusbar[_ngcontent-%COMP%]   .statusbar-left[_ngcontent-%COMP%], \n.mobile-statusbar[_ngcontent-%COMP%]   .statusbar-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.mobile-statusbar[_ngcontent-%COMP%]   .statusbar-right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mobile-statusbar[_ngcontent-%COMP%]   .statusbar-center[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.mobile-statusbar[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n.mobile-statusbar[_ngcontent-%COMP%]   .notch[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 28px;\n  background: black;\n  border-radius: 0 0 16px 16px;\n}\n.mobile-statusbar[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  stroke-width: 2;\n}\n.mobile-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.home-screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  position: relative;\n  overflow: hidden;\n  background: #000;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n}\n.blur-background[_ngcontent-%COMP%] {\n  display: none;\n}\n.widget-area[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 24px 20px;\n  z-index: 2;\n  flex-shrink: 0;\n}\n.time-widget-ios[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(12px) saturate(110%);\n  -webkit-backdrop-filter: blur(12px) saturate(110%);\n  border-radius: 28px;\n  padding: 24px;\n  border: 0.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);\n}\n.time-widget-ios[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 200;\n  color: white;\n  letter-spacing: -1.5px;\n  line-height: 1;\n  margin-bottom: 4px;\n  font-variant-numeric: tabular-nums;\n  text-shadow: 0 3px 16px rgba(0, 0, 0, 0.5);\n}\n.time-widget-ios[_ngcontent-%COMP%]   .date-display[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.95);\n  letter-spacing: -0.3px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.apps-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 24px 20px;\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  z-index: 2;\n  padding-bottom: 140px;\n  padding-bottom: calc(140px + env(safe-area-inset-bottom, 0px));\n}\n.apps-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.apps-grid-ios[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px 16px;\n  padding: 0 0 20px 0;\n  min-height: min-content;\n}\n.app-icon-ios[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.app-icon-ios[_ngcontent-%COMP%]:active {\n  transform: scale(0.85);\n}\n.app-icon-ios[_ngcontent-%COMP%]:active   .icon-background[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.icon-background[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(10px) saturate(110%);\n  -webkit-backdrop-filter: blur(10px) saturate(110%);\n  border: 0.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  transition: all 0.2s ease;\n  position: relative;\n}\n.icon-background[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      transparent 100%);\n  border-radius: 16px 16px 0 0;\n  pointer-events: none;\n}\n.icon-background[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));\n  position: relative;\n  z-index: 1;\n}\n.icon-label-ios[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-align: center;\n  max-width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow:\n    0 2px 8px rgba(0, 0, 0, 0.8),\n    0 1px 2px rgb(0, 0, 0),\n    0 0 1px rgb(0, 0, 0);\n  letter-spacing: -0.2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.15) 0%,\n      rgba(0, 0, 0, 0.1) 100%);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  padding: 4px 8px;\n  border-radius: 8px;\n  margin-top: 2px;\n  border: 0.5px solid rgba(255, 255, 255, 0.08);\n}\n.dock-ios[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  bottom: max(24px, env(safe-area-inset-bottom));\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 48px);\n  max-width: 380px;\n  z-index: 10;\n  padding: 0 8px;\n}\n.dock-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px) saturate(110%);\n  -webkit-backdrop-filter: blur(12px) saturate(110%);\n  border-radius: 24px;\n  border: 0.5px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);\n}\n.dock-icons[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  padding: 12px 8px 8px;\n  gap: 8px;\n}\n.dock-icon-ios[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.dock-icon-ios[_ngcontent-%COMP%]:active {\n  transform: scale(0.85);\n}\n.dock-icon-bg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(10px) saturate(110%);\n  -webkit-backdrop-filter: blur(10px) saturate(110%);\n  border: 0.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.dock-icon-bg[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      transparent 100%);\n  border-radius: 16px 16px 0 0;\n  pointer-events: none;\n}\n.dock-icon-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));\n  position: relative;\n  z-index: 1;\n}\n.dock-label-ios[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n  text-align: center;\n  max-width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow:\n    0 2px 8px rgba(0, 0, 0, 0.8),\n    0 1px 2px rgb(0, 0, 0),\n    0 0 1px rgb(0, 0, 0);\n  letter-spacing: -0.2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.15) 0%,\n      rgba(0, 0, 0, 0.1) 100%);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  padding: 3px 7px;\n  border-radius: 6px;\n  border: 0.5px solid rgba(255, 255, 255, 0.08);\n}\n.page-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 105px;\n  bottom: calc(105px + env(safe-area-inset-bottom, 0px));\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 8px;\n  z-index: 10;\n}\n.page-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  transition: all 0.3s ease;\n}\n.page-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: white;\n  width: 7px;\n}\n.home-indicator-ios[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  bottom: max(8px, env(safe-area-inset-bottom));\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140px;\n  height: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 3px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.app-viewer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #f5f5f7;\n}\n.app-viewer.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  padding: 0;\n}\n.app-viewer.fullscreen[_ngcontent-%COMP%]   .app-slider[_ngcontent-%COMP%], \n.app-viewer.fullscreen[_ngcontent-%COMP%]   .app-slide[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.app-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.app-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.app-slide.active[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.app-header[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.05) 0%,\n      rgba(118, 75, 162, 0.05) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  min-height: 56px;\n  max-height: 56px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: #1d1d1f;\n  stroke-width: 2;\n}\n.back-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: rgba(0, 0, 0, 0.1);\n}\n.minimize-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 204, 0, 0.9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.minimize-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.minimize-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: rgb(255, 204, 0);\n}\n.fullscreen-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(52, 199, 89, 0.9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.fullscreen-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.fullscreen-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: rgb(52, 199, 89);\n}\n.floating-exit-fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: rgba(255, 59, 48, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10000;\n  box-shadow: 0 4px 12px rgba(255, 59, 48, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s;\n}\n.floating-exit-fullscreen[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  stroke: white;\n  stroke-width: 3;\n}\n.floating-exit-fullscreen[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 16px rgba(255, 59, 48, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.floating-exit-fullscreen[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.app-icon-small[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n  flex-shrink: 0;\n}\n.app-icon-small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  stroke: white;\n  stroke-width: 2;\n}\n.app-icon-large[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n}\n.app-icon-large[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  stroke: white;\n  stroke-width: 2;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1d1d1f;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.app-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n}\n.app-body[_ngcontent-%COMP%]   .app-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n  overflow: auto;\n}\n.app-body[_ngcontent-%COMP%]   .app-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #86868b;\n  font-size: 16px;\n  margin-top: 40px;\n  padding: 20px;\n}\n.app-switcher[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.95) 0%,\n      rgba(118, 75, 162, 0.95) 100%);\n  z-index: 3000;\n  display: flex;\n  flex-direction: column;\n  padding: 60px 20px 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s;\n  overflow: hidden;\n}\n.switcher-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.switcher-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.switcher-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-bottom: 20px;\n}\n.no-apps[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.no-apps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  text-align: center;\n}\n.app-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n.app-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.card-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.2s;\n}\n.card-close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.card-close-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  background: rgba(0, 0, 0, 0.8);\n}\n.card-preview[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n}\n.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  stroke: white;\n  stroke-width: 2;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1d1d1f;\n  margin: 0;\n}\n.card-content[_ngcontent-%COMP%] {\n  background: #f5f5f7;\n  border-radius: 8px;\n  padding: 20px;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-placeholder[_ngcontent-%COMP%] {\n  color: #86868b;\n  font-size: 14px;\n  text-align: center;\n  margin: 0;\n}\n.switcher-hint[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n}\n.switcher-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 13px;\n  margin: 0;\n  font-weight: 500;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.app-drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 2000;\n  display: flex;\n  align-items: flex-end;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s;\n}\n.app-drawer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 70vh;\n  background: white;\n  border-radius: 20px 20px 0 0;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1d1d1f;\n  margin: 0;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  stroke: #1d1d1f;\n  stroke-width: 2;\n}\n.drawer-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: rgba(0, 0, 0, 0.1);\n}\n.drawer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  overflow-y: auto;\n  max-height: calc(70vh - 100px);\n  padding-bottom: 20px;\n}\n.drawer-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.drawer-app[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.drawer-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n}\n.drawer-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  stroke: white;\n  stroke-width: 2;\n}\n.drawer-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1d1d1f;\n  text-align: center;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.minimized-apps-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 3500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n.minimized-slider[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n  height: 70vh;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98) 0%,\n      rgba(248, 249, 250, 0.96) 100%);\n  border-radius: 24px;\n  padding: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUpScale 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.slider-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.slider-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n}\n.close-slider-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.close-slider-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: #1d1d1f;\n  stroke-width: 2;\n}\n.close-slider-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: rgba(0, 0, 0, 0.1);\n}\n.slider-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n}\n.minimized-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.minimized-slide.active[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.screenshot-preview[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08) 0%,\n      rgba(118, 75, 162, 0.08) 100%);\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  border: 2px solid rgba(102, 126, 234, 0.15);\n  overflow: hidden;\n}\n.screenshot-preview[_ngcontent-%COMP%]:hover {\n  border-color: rgba(102, 126, 234, 0.3);\n}\n.screenshot-preview[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.12) 0%,\n      rgba(118, 75, 162, 0.12) 100%);\n}\n.quick-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 59, 48, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  box-shadow: 0 2px 8px rgba(255, 59, 48, 0.3);\n  transition: all 0.2s;\n}\n.quick-close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.quick-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(255, 59, 48);\n  transform: scale(1.05);\n}\n.quick-close-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.screenshot-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  pointer-events: none;\n}\n.preview-icon-large[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.3);\n}\n.preview-icon-large[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  stroke: white;\n  stroke-width: 2;\n}\n.app-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1d1d1f;\n  margin: 0;\n  text-align: center;\n}\n.restore-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 14px;\n  color: #007aff;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 10px 20px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: none;\n}\n.slide-indicators[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 0 8px;\n}\n.indicator-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.indicator-dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #007aff;\n}\n.indicator-dot[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n}\n.nav-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s;\n  z-index: 10;\n}\n.nav-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  stroke: #1d1d1f;\n  stroke-width: 2.5;\n}\n.nav-btn.prev-btn[_ngcontent-%COMP%] {\n  left: -50px;\n}\n.nav-btn.next-btn[_ngcontent-%COMP%] {\n  right: -50px;\n}\n.nav-btn[_ngcontent-%COMP%]:active:not(.disabled) {\n  transform: translateY(-50%) scale(0.95);\n}\n.nav-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.minimized-apps-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-right: 8px;\n}\n.minimized-apps-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  stroke: white;\n}\n.minimized-apps-icon[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 16px;\n  height: 16px;\n  background: #ff3b30;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n  box-shadow: 0 2px 4px rgba(255, 59, 48, 0.4);\n}\n@keyframes _ngcontent-%COMP%_slideUpScale {\n  from {\n    transform: translateY(20px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.card-minimize-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 40px;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 204, 0, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n}\n.card-minimize-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.card-minimize-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  background: rgb(255, 204, 0);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (max-width: 767px) {\n  .desktop-container.mobile-layout[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%], \n   .desktop-container.mobile-layout[_ngcontent-%COMP%]   .desktop-wallpaper[_ngcontent-%COMP%], \n   .desktop-container.mobile-layout[_ngcontent-%COMP%]   .dock-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767px) and (max-height: 667px) {\n  .widget-area[_ngcontent-%COMP%] {\n    padding: 40px 20px 12px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 20px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%]   .date-display[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .apps-container[_ngcontent-%COMP%] {\n    padding: 12px 20px 12px;\n    margin-bottom: 120px;\n  }\n  .apps-grid-ios[_ngcontent-%COMP%] {\n    gap: 18px 12px;\n  }\n  .app-icon-ios[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .icon-background[_ngcontent-%COMP%] {\n    width: 54px;\n    height: 54px;\n    border-radius: 14px;\n  }\n  .icon-background[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .icon-label-ios[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .dock-ios[_ngcontent-%COMP%] {\n    bottom: 24px;\n  }\n  .dock-icon-bg[_ngcontent-%COMP%] {\n    width: 54px;\n    height: 54px;\n  }\n  .dock-icon-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .page-dots[_ngcontent-%COMP%] {\n    bottom: 95px;\n  }\n}\n@media (max-width: 767px) and (min-height: 668px) and (max-height: 736px) {\n  .widget-area[_ngcontent-%COMP%] {\n    padding: 50px 22px 16px;\n  }\n  .apps-container[_ngcontent-%COMP%] {\n    padding: 16px 22px 16px;\n    margin-bottom: 130px;\n  }\n  .apps-grid-ios[_ngcontent-%COMP%] {\n    gap: 20px 14px;\n  }\n}\n@media (max-width: 767px) and (min-height: 737px) {\n  .widget-area[_ngcontent-%COMP%] {\n    padding: 60px 24px 20px;\n  }\n  .apps-container[_ngcontent-%COMP%] {\n    padding: 20px 24px 20px;\n    margin-bottom: 140px;\n  }\n}\n@media (max-width: 767px) and (min-height: 844px) {\n  .time-widget-ios[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    font-size: 64px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%]   .date-display[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .apps-grid-ios[_ngcontent-%COMP%] {\n    gap: 28px 18px;\n  }\n  .icon-background[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n    border-radius: 17px;\n  }\n  .icon-background[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .dock-icon-bg[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .dock-icon-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n}\n@media (min-width: 768px) and (max-width: 1023px) {\n  .mobile-content[_ngcontent-%COMP%] {\n    padding: 0 40px;\n  }\n  .drawer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  .tabbar-content[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  .apps-grid-ios[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n    gap: 32px 24px;\n  }\n  .dock-ios[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n}\n@media (max-width: 767px) and (orientation: landscape) {\n  .widget-area[_ngcontent-%COMP%] {\n    padding: 30px 20px 10px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .time-widget-ios[_ngcontent-%COMP%]   .date-display[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .apps-container[_ngcontent-%COMP%] {\n    padding: 10px 20px 10px;\n    margin-bottom: 100px;\n  }\n  .apps-grid-ios[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n    gap: 16px 12px;\n  }\n  .icon-background[_ngcontent-%COMP%], \n   .dock-icon-bg[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    border-radius: 13px;\n  }\n  .icon-background[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .dock-icon-bg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n  }\n  .dock-ios[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .dock-ios[_ngcontent-%COMP%]   .dock-icons[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n  }\n  .page-dots[_ngcontent-%COMP%] {\n    bottom: 80px;\n  }\n}\n.mobile-blocked-screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-direction: column;\n  padding: 20px;\n}\n.blocked-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.blocked-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  stroke: white;\n  stroke-width: 1.5;\n  margin: 0 auto 24px auto;\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_scaleIn 0.6s ease-out 0.1s both;\n}\n.blocked-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out 0.2s both;\n}\n.blocked-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 12px;\n  line-height: 1.6;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out 0.3s both;\n}\n.blocked-hint[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out 0.4s both;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.control-button[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.15s ease;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\n  background: transparent;\n}\n.control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  opacity: 0;\n  transition: opacity 0.15s ease;\n}\n.control-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.control-button.close[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6057 0%,\n      #ff5f56 100%);\n}\n.control-button.close[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff4b42 0%,\n      #ff3b30 100%);\n  box-shadow: 0 2px 4px rgba(255, 59, 48, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.close[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      135deg,\n      #d93025 0%,\n      #c9211e 100%);\n}\n.control-button.minimize[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffbd2e 0%,\n      #ffbc2d 100%);\n}\n.control-button.minimize[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ffb01f 0%,\n      #ffa900 100%);\n  box-shadow: 0 2px 4px rgba(255, 169, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.minimize[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      135deg,\n      #e09b00 0%,\n      #d08800 100%);\n}\n.control-button.maximize[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #28ca42 0%,\n      #27c93f 100%);\n}\n.control-button.maximize[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #20b038 0%,\n      #1fa832 100%);\n  box-shadow: 0 2px 4px rgba(31, 168, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.maximize[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      135deg,\n      #1a9930 0%,\n      #178528 100%);\n}\n/*# sourceMappingURL=desktop.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesktopComponent, [{
    type: Component,
    args: [{ selector: "app-desktop", standalone: false, template: `<div class="desktop-container" [class.mobile-layout]="isMobile">
  <!-- Desktop \uB808\uC774\uC544\uC6C3 -->
  @if (!isMobile) {
    <!-- macOS \uBA54\uB274\uBC14 -->
    <div class="menu-bar">
      <div class="menu-bar-left">
        <div class="brand-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span class="brand-name">MOBSOFT</span>
        </div>
        @if (activeWindow) {
          <div class="menu-item active">{{activeWindow.metaData.label}}</div>
        }
      </div>
      <div class="menu-bar-right">
        @if (minimizedWindows.length > 0) {
          <div class="minimized-count" title="\uCD5C\uC18C\uD654\uB41C \uCC3D">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
            </svg>
            <span>{{minimizedWindows.length}}</span>
          </div>
        }
        
        <!-- \uC90C \uB808\uBCA8 \uCEE8\uD2B8\uB864 -->
        <div class="zoom-control">
          <button class="zoom-btn" 
                  (click)="decreaseZoom()" 
                  [disabled]="zoomLevel === zoomLevels[0]"
                  title="\uCD95\uC18C (Ctrl/Cmd + -)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
          </button>
          
          <div class="zoom-display">
            <span class="zoom-value">{{zoomLevel}}%</span>
            <button class="zoom-dropdown-btn" 
                    (click)="toggleZoomDropdown()"
                    title="\uC90C \uB808\uBCA8 \uC120\uD0DD">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
            
            <!-- \uC90C \uB808\uBCA8 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274 -->
            @if (showZoomDropdown) {
              <div class="zoom-dropdown" (click)="$event.stopPropagation()">
                @for (level of zoomLevels; track level) {
                  <div class="zoom-option" 
                       [class.active]="level === zoomLevel"
                       (click)="setZoomLevel(level)">
                    {{level}}%
                  </div>
                }
                <div class="zoom-separator"></div>
                <div class="zoom-option reset-option" (click)="resetZoom()">
                  \uAE30\uBCF8\uAC12 \uC124\uC815
                </div>
              </div>
            }
          </div>
          
          <button class="zoom-btn" 
                  (click)="increaseZoom()" 
                  [disabled]="zoomLevel === zoomLevels[zoomLevels.length - 1]"
                  title="\uD655\uB300 (Ctrl/Cmd + +)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>
        
        <div class="menu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <div class="menu-time">{{currentTime}}</div>
      </div>
    </div>

    <!-- \uB370\uC2A4\uD06C\uD1B1 \uBC30\uACBD -->
    <div class="desktop-wallpaper">
  <!-- \uAE00\uB798\uC2A4\uBAA8\uD53C\uC998 \uBC30\uACBD \uB808\uC774\uC5B4\uB4E4 -->
      <div class="wallpaper-gradient"></div>
      <div class="wallpaper-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
        <div class="orb orb-5"></div>
      </div>
      <div class="wallpaper-overlay"></div>
      
      <!-- \uBC14\uD0D5\uD654\uBA74 \uC544\uC774\uCF58\uB4E4 -->
      <div class="desktop-icons">
        <!-- \uC0C1\uC704 \uD3F4\uB354\uB85C \uAC00\uAE30 \uBC84\uD2BC -->
        @if (isInSubFolder()) {
          <div (click)="goBack()" class="desktop-icon" [attr.data-tooltip]="'\uB4A4\uB85C'">
            <div class="desktop-icon-wrapper" style="background: linear-gradient(135deg, #888, #666);">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <div class="desktop-icon-label">\uB4A4\uB85C</div>
          </div>
        }
        
        @for (item of desktopIcons; let i = $index; track item.id || i) {
          <div (click)="openWindow(item)" class="desktop-icon" [attr.data-tooltip]="item.label">
            <div class="desktop-icon-wrapper" [style.background]="getIconGradient(item.icon, item.label)">
              @if (item.type === 'folder') {
                <!-- \uD3F4\uB354 \uC544\uC774\uCF58 -->
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                </svg>
              } @else {
                <!-- \uBB38\uC11C \uC544\uC774\uCF58 -->
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="getIconSvg(item.icon) | sanitizeHtml">
                </svg>
              }
            </div>
            <div class="desktop-icon-label">
              {{item.label}}
              @if (!item.type || item.type === 'doc') {
                <span class="icon-folder-tag">({{currentFolderType === 'calendar' ? 'Calendar' : 'Note'}})</span>
              }
            </div>
          </div>
        }
      </div>
      
      <!-- \uC708\uB3C4\uC6B0 \uC2A4\uCF00\uC77C \uCEE8\uD14C\uC774\uB108 (\uC90C \uCC98\uB9AC) -->
      <div class="windows-scale-container">
        <!-- \uC708\uB3C4\uC6B0\uB4E4 -->
        @for (window of windows; track window.id) {
          @if (!window.isMinimized) {
            <app-window-modal
              [id]="window.id"
              [zIndex]="window.zIndex"
              [metaData]="window.metaData"
              [folderType]="window.folderType"
              [isMobileApp]="isMobileApp(window.metaData)"
              [zoomLevel]="zoomLevel"
              (moveToFront)="moveToFront($event)"
              (close)="close($event)"
              (minimizeWindow)="minimizeWindow($event)"
              (windowStyleChange)="onWindowStyleChange(window.id, $event)">
            </app-window-modal>
          }
        }

    
      </div>
    </div>

    <!-- macOS Dock -->
    <div class="dock-container">
      <div class="dock">
        @for (item of icons; track $index) {
          <div (click)="openWindow(item)" 
               class="dock-icon"
               [class.active]="isAppActive(item)"
               [attr.data-tooltip]="item.label">
            <div class="icon-wrapper" [style.background]="getIconGradient(item.icon, item.label)">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="getIconSvg(item.icon) | sanitizeHtml">
              </svg>
            </div>
            @if (isAppActive(item)) {
              <div class="active-indicator"></div>
            }
          </div>
        }
        
        <!-- \uCD5C\uC18C\uD654\uB41C \uCC3D \uAD6C\uBD84\uC120 -->
        @if (minimizedWindows.length > 0) {
          <div class="dock-separator"></div>
        }
        
        <!-- \uCD5C\uC18C\uD654\uB41C \uCC3D\uB4E4 -->
        @for (window of minimizedWindows; track window.id) {
          <div (click)="restoreWindow(window.id); $event.stopPropagation()" 
               class="dock-icon minimized-window"
               [attr.data-tooltip]="window.metaData.label + ' (\uCD5C\uC18C\uD654\uB428)'">
            <div class="icon-wrapper minimized" [style.background]="getIconGradient(window.metaData.icon, window.metaData.label)">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="getIconSvg(window.metaData.icon) | sanitizeHtml">
              </svg>
            </div>
            <div class="minimized-indicator"></div>
          </div>
        }
      </div>
    </div>
  }

  <!-- Mobile \uC811\uADFC \uC81C\uD55C \uBA54\uC2DC\uC9C0 -->
  @if (isMobile) {
    <div class="mobile-blocked-screen">
      <div class="blocked-content">
        <svg class="blocked-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke-width="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke-width="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke-width="2"/>
        </svg>
        <h1 class="blocked-title">PC\uC5D0\uC11C\uB9CC \uC81C\uACF5\uD569\uB2C8\uB2E4</h1>
        <p class="blocked-description">\uC774 \uC11C\uBE44\uC2A4\uB294 \uB370\uC2A4\uD06C\uD1B1 \uD658\uACBD\uC5D0\uC11C\uB9CC \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p>
        <p class="blocked-hint">\uB354 \uD070 \uD654\uBA74\uC758 \uCEF4\uD4E8\uD130\uC5D0\uC11C \uC811\uC18D\uD574\uC8FC\uC138\uC694.</p>
      </div>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/desk/components/desktop/desktop.component.scss */\n.desktop-container {\n  width: 100vw;\n  height: 100vh;\n  height: 100dvh;\n  position: relative;\n  overflow: hidden;\n  background: #000;\n  display: flex;\n  flex-direction: column;\n}\n.menu-bar {\n  height: 24px;\n  background: rgba(20, 20, 30, 0.85);\n  backdrop-filter: blur(30px) saturate(180%);\n  -webkit-backdrop-filter: blur(30px) saturate(180%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 400;\n  z-index: 10000;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  position: relative;\n}\n.menu-bar::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 100%);\n}\n.menu-bar-left {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.apple-logo {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.apple-logo svg {\n  width: 100%;\n  height: 100%;\n}\n.apple-logo:hover {\n  opacity: 0.7;\n}\n.menu-item {\n  cursor: pointer;\n  padding: 2px 8px;\n  border-radius: 4px;\n  transition: background 0.2s;\n}\n.menu-item:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.menu-item.active {\n  font-weight: 600;\n}\n.menu-bar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.minimized-count {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: rgba(255, 193, 7, 0.15);\n  border-radius: 12px;\n  cursor: default;\n  transition: all 0.2s;\n}\n.minimized-count svg {\n  width: 14px;\n  height: 14px;\n  stroke: rgba(255, 193, 7, 0.9);\n}\n.minimized-count span {\n  font-size: 11px;\n  font-weight: 600;\n  color: rgb(255, 193, 7);\n}\n.minimized-count:hover {\n  background: rgba(255, 193, 7, 0.25);\n}\n.zoom-control {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 8px;\n  background: rgba(100, 150, 200, 0.12);\n  border: 1px solid rgba(100, 150, 200, 0.25);\n  border-radius: 8px;\n  position: relative;\n}\n.zoom-control .zoom-btn {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: rgba(100, 150, 200, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  color: #fff;\n  transition: all 0.2s;\n  padding: 0;\n}\n.zoom-control .zoom-btn svg {\n  width: 12px;\n  height: 12px;\n  stroke-width: 2.5;\n}\n.zoom-control .zoom-btn:hover:not(:disabled) {\n  background: rgba(100, 150, 200, 0.4);\n  transform: scale(1.1);\n}\n.zoom-control .zoom-btn:active:not(:disabled) {\n  transform: scale(0.95);\n}\n.zoom-control .zoom-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.zoom-control .zoom-display {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 60px;\n  justify-content: center;\n  position: relative;\n}\n.zoom-control .zoom-display .zoom-value {\n  font-size: 11px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n  min-width: 35px;\n  text-align: center;\n}\n.zoom-control .zoom-display .zoom-dropdown-btn {\n  width: 16px;\n  height: 16px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.7);\n  transition: all 0.2s;\n}\n.zoom-control .zoom-display .zoom-dropdown-btn svg {\n  width: 10px;\n  height: 10px;\n  stroke-width: 2.5;\n}\n.zoom-control .zoom-display .zoom-dropdown-btn:hover {\n  color: #fff;\n  transform: scale(1.15);\n}\n.zoom-control .zoom-display .zoom-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 6px;\n  background: rgba(20, 30, 50, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(100, 150, 200, 0.3);\n  border-radius: 8px;\n  min-width: 100px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  z-index: 10001;\n  overflow: hidden;\n}\n.zoom-control .zoom-display .zoom-dropdown .zoom-option {\n  padding: 8px 16px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.zoom-control .zoom-display .zoom-dropdown .zoom-option:hover {\n  background: rgba(100, 150, 200, 0.2);\n  color: #fff;\n}\n.zoom-control .zoom-display .zoom-dropdown .zoom-option.active {\n  background: rgba(100, 150, 200, 0.4);\n  color: #fff;\n  font-weight: 600;\n}\n.zoom-control .zoom-display .zoom-dropdown .zoom-option.reset-option {\n  font-size: 10px;\n  color: rgba(255, 150, 100, 0.8);\n}\n.zoom-control .zoom-display .zoom-dropdown .zoom-option.reset-option:hover {\n  background: rgba(255, 150, 100, 0.15);\n  color: rgb(255, 180, 120);\n}\n.zoom-control .zoom-display .zoom-dropdown .zoom-separator {\n  height: 1px;\n  background: rgba(100, 150, 200, 0.2);\n  margin: 4px 0;\n}\n.brand-logo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 12px;\n  border-radius: 8px;\n  transition: background 0.2s;\n  cursor: pointer;\n}\n.brand-logo svg {\n  width: 18px;\n  height: 18px;\n  stroke: currentColor;\n}\n.brand-logo .brand-name {\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.brand-logo:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.menu-icon {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.menu-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.menu-icon:hover {\n  opacity: 0.7;\n}\n.menu-time {\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n.desktop-wallpaper {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background: #0a0e27;\n}\n.desktop-icons {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  z-index: 100;\n}\n.desktop-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n}\n.desktop-icon:hover {\n  transform: scale(1.1);\n}\n.desktop-icon:hover .desktop-icon-label {\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);\n}\n.desktop-icon:hover .desktop-icon-wrapper {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n}\n.desktop-icon:active {\n  transform: scale(0.95);\n}\n.desktop-icon-wrapper {\n  width: 64px;\n  height: 64px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2);\n  transition: all 0.2s;\n}\n.desktop-icon-wrapper svg {\n  width: 36px;\n  height: 36px;\n  stroke: white;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.desktop-icon-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.9);\n  text-align: center;\n  max-width: 90px;\n  word-break: break-word;\n  line-height: 1.3;\n  transition: text-shadow 0.2s;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n.desktop-icon-label .icon-folder-tag {\n  display: block;\n  font-size: 9px;\n  opacity: 0.7;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.windows-scale-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center top;\n  transition: transform 0.3s ease-out;\n}\n.wallpaper-gradient {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      ellipse at top left,\n      rgba(94, 114, 228, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at top right,\n      rgba(147, 51, 234, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at bottom left,\n      rgba(59, 130, 246, 0.4) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at bottom right,\n      rgba(236, 72, 153, 0.4) 0%,\n      transparent 50%),\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #312e81 25%,\n      #581c87 50%,\n      #831843 75%,\n      #1e40af 100%);\n  filter: blur(0);\n}\n.wallpaper-orbs {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.6;\n  animation: float 20s ease-in-out infinite;\n  mix-blend-mode: screen;\n}\n.orb-1 {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.8) 0%,\n      transparent 70%);\n  top: -10%;\n  left: -10%;\n  animation-delay: 0s;\n  animation-duration: 25s;\n}\n.orb-2 {\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(168, 85, 247, 0.7) 0%,\n      transparent 70%);\n  top: 20%;\n  right: -15%;\n  animation-delay: -5s;\n  animation-duration: 30s;\n}\n.orb-3 {\n  width: 450px;\n  height: 450px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.6) 0%,\n      transparent 70%);\n  bottom: -10%;\n  left: 20%;\n  animation-delay: -10s;\n  animation-duration: 28s;\n}\n.orb-4 {\n  width: 550px;\n  height: 550px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(236, 72, 153, 0.7) 0%,\n      transparent 70%);\n  bottom: 10%;\n  right: 10%;\n  animation-delay: -15s;\n  animation-duration: 35s;\n}\n.orb-5 {\n  width: 400px;\n  height: 400px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(147, 197, 253, 0.5) 0%,\n      transparent 70%);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation-delay: -20s;\n  animation-duration: 32s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(30px, -30px) scale(1.1);\n  }\n  50% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n  75% {\n    transform: translate(20px, 30px) scale(1.05);\n  }\n}\n.wallpaper-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    repeating-linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0.03) 0px,\n      transparent 1px,\n      transparent 2px,\n      rgba(255, 255, 255, 0.03) 3px),\n    repeating-linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.03) 0px,\n      transparent 1px,\n      transparent 2px,\n      rgba(255, 255, 255, 0.03) 3px);\n  pointer-events: none;\n  opacity: 0.3;\n}\n.dock-container {\n  position: fixed;\n  bottom: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  pointer-events: none;\n}\n.dock {\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(40px) saturate(200%);\n  -webkit-backdrop-filter: blur(40px) saturate(200%);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 20px;\n  padding: 8px;\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n  box-shadow:\n    0 12px 48px rgba(0, 0, 0, 0.4),\n    0 0 0 1px rgba(255, 255, 255, 0.1) inset,\n    0 2px 4px rgba(255, 255, 255, 0.2) inset;\n  pointer-events: all;\n  position: relative;\n}\n.dock::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.15) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      rgba(255, 255, 255, 0.02) 100%);\n  border-radius: 20px;\n  pointer-events: none;\n}\n.dock-icon {\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transform-origin: bottom;\n}\n.dock-icon:hover {\n  transform: translateY(-12px) scale(1.2);\n}\n.dock-icon:hover::before {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-8px);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 11px;\n  white-space: nowrap;\n  pointer-events: none;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.dock-icon:active {\n  transform: scale(0.95);\n}\n.dock-icon .icon-wrapper {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n  transition: box-shadow 0.2s;\n}\n.dock-icon .icon-wrapper svg {\n  width: 32px;\n  height: 32px;\n  stroke: white;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.dock-icon:hover .icon-wrapper {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4);\n}\n.dock-icon .active-indicator {\n  width: 4px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 50%;\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);\n}\n.dock-icon.minimized-window .icon-wrapper.minimized {\n  opacity: 0.7;\n  position: relative;\n}\n.dock-icon.minimized-window .icon-wrapper.minimized::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.dock-icon.minimized-window .icon-wrapper.minimized svg {\n  position: relative;\n  z-index: 1;\n}\n.dock-icon.minimized-window:hover .icon-wrapper.minimized {\n  opacity: 0.9;\n}\n.dock-icon .minimized-indicator {\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 193, 7, 0.9);\n  border-radius: 50%;\n  position: absolute;\n  bottom: -2px;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 6px rgba(255, 193, 7, 0.8);\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: translateX(-50%) scale(1.2);\n  }\n}\n.dock-separator {\n  width: 1px;\n  height: 48px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      rgba(255, 255, 255, 0.2) 20%,\n      rgba(255, 255, 255, 0.2) 80%,\n      transparent);\n  margin: 0 4px;\n  align-self: center;\n}\n@media (max-width: 768px) {\n  .menu-bar {\n    font-size: 11px;\n    padding: 0 8px;\n  }\n  .menu-bar-left {\n    gap: 12px;\n  }\n  .menu-item {\n    display: none;\n  }\n  .menu-item.active {\n    display: block;\n  }\n  .dock {\n    padding: 6px;\n    gap: 6px;\n    border-radius: 16px;\n  }\n  .dock-icon .icon-wrapper {\n    width: 48px;\n    height: 48px;\n    border-radius: 12px;\n  }\n  .dock-icon .icon-wrapper svg {\n    width: 28px;\n    height: 28px;\n  }\n  .dock-icon:hover {\n    transform: translateY(-8px) scale(1.15);\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .dock-icon .icon-wrapper {\n    width: 52px;\n    height: 52px;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n.desktop-container.mobile-layout {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  min-height: 100vh;\n  min-height: 100dvh;\n  max-height: 100vh;\n  max-height: 100dvh;\n}\n.mobile-statusbar {\n  height: 44px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  color: white;\n  font-size: 14px;\n  position: relative;\n  z-index: 1000;\n}\n.mobile-statusbar .statusbar-left,\n.mobile-statusbar .statusbar-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.mobile-statusbar .statusbar-right {\n  justify-content: flex-end;\n  gap: 8px;\n}\n.mobile-statusbar .statusbar-center {\n  flex: 0 0 auto;\n}\n.mobile-statusbar .time {\n  font-weight: 600;\n  font-size: 15px;\n}\n.mobile-statusbar .notch {\n  width: 120px;\n  height: 28px;\n  background: black;\n  border-radius: 0 0 16px 16px;\n}\n.mobile-statusbar .status-icon {\n  width: 24px;\n  height: 24px;\n  stroke-width: 2;\n}\n.mobile-content {\n  flex: 1;\n  min-height: 0;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.home-screen {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  position: relative;\n  overflow: hidden;\n  background: #000;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n}\n.blur-background {\n  display: none;\n}\n.widget-area {\n  position: relative;\n  padding: 60px 24px 20px;\n  z-index: 2;\n  flex-shrink: 0;\n}\n.time-widget-ios {\n  background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(12px) saturate(110%);\n  -webkit-backdrop-filter: blur(12px) saturate(110%);\n  border-radius: 28px;\n  padding: 24px;\n  border: 0.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);\n}\n.time-widget-ios .time-display {\n  font-size: 56px;\n  font-weight: 200;\n  color: white;\n  letter-spacing: -1.5px;\n  line-height: 1;\n  margin-bottom: 4px;\n  font-variant-numeric: tabular-nums;\n  text-shadow: 0 3px 16px rgba(0, 0, 0, 0.5);\n}\n.time-widget-ios .date-display {\n  font-size: 17px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.95);\n  letter-spacing: -0.3px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.apps-container {\n  position: relative;\n  padding: 20px 24px 20px;\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  z-index: 2;\n  padding-bottom: 140px;\n  padding-bottom: calc(140px + env(safe-area-inset-bottom, 0px));\n}\n.apps-container::-webkit-scrollbar {\n  display: none;\n}\n.apps-grid-ios {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px 16px;\n  padding: 0 0 20px 0;\n  min-height: min-content;\n}\n.app-icon-ios {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.app-icon-ios:active {\n  transform: scale(0.85);\n}\n.app-icon-ios:active .icon-background {\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.icon-background {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(10px) saturate(110%);\n  -webkit-backdrop-filter: blur(10px) saturate(110%);\n  border: 0.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  transition: all 0.2s ease;\n  position: relative;\n}\n.icon-background::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      transparent 100%);\n  border-radius: 16px 16px 0 0;\n  pointer-events: none;\n}\n.icon-background svg {\n  width: 32px;\n  height: 32px;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));\n  position: relative;\n  z-index: 1;\n}\n.icon-label-ios {\n  font-size: 12px;\n  font-weight: 600;\n  color: white;\n  text-align: center;\n  max-width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow:\n    0 2px 8px rgba(0, 0, 0, 0.8),\n    0 1px 2px rgb(0, 0, 0),\n    0 0 1px rgb(0, 0, 0);\n  letter-spacing: -0.2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.15) 0%,\n      rgba(0, 0, 0, 0.1) 100%);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  padding: 4px 8px;\n  border-radius: 8px;\n  margin-top: 2px;\n  border: 0.5px solid rgba(255, 255, 255, 0.08);\n}\n.dock-ios {\n  position: absolute;\n  bottom: 24px;\n  bottom: max(24px, env(safe-area-inset-bottom));\n  left: 50%;\n  transform: translateX(-50%);\n  width: calc(100% - 48px);\n  max-width: 380px;\n  z-index: 10;\n  padding: 0 8px;\n}\n.dock-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(12px) saturate(110%);\n  -webkit-backdrop-filter: blur(12px) saturate(110%);\n  border-radius: 24px;\n  border: 0.5px solid rgba(255, 255, 255, 0.12);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);\n}\n.dock-icons {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  padding: 12px 8px 8px;\n  gap: 8px;\n}\n.dock-icon-ios {\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.dock-icon-ios:active {\n  transform: scale(0.85);\n}\n.dock-icon-bg {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.02);\n  backdrop-filter: blur(10px) saturate(110%);\n  -webkit-backdrop-filter: blur(10px) saturate(110%);\n  border: 0.5px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.dock-icon-bg::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      transparent 100%);\n  border-radius: 16px 16px 0 0;\n  pointer-events: none;\n}\n.dock-icon-bg svg {\n  width: 32px;\n  height: 32px;\n  stroke-width: 2;\n  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));\n  position: relative;\n  z-index: 1;\n}\n.dock-label-ios {\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n  text-align: center;\n  max-width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow:\n    0 2px 8px rgba(0, 0, 0, 0.8),\n    0 1px 2px rgb(0, 0, 0),\n    0 0 1px rgb(0, 0, 0);\n  letter-spacing: -0.2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.15) 0%,\n      rgba(0, 0, 0, 0.1) 100%);\n  backdrop-filter: blur(3px);\n  -webkit-backdrop-filter: blur(3px);\n  padding: 3px 7px;\n  border-radius: 6px;\n  border: 0.5px solid rgba(255, 255, 255, 0.08);\n}\n.page-dots {\n  position: absolute;\n  bottom: 105px;\n  bottom: calc(105px + env(safe-area-inset-bottom, 0px));\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 8px;\n  z-index: 10;\n}\n.page-dots .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  transition: all 0.3s ease;\n}\n.page-dots .dot.active {\n  background: white;\n  width: 7px;\n}\n.home-indicator-ios {\n  position: absolute;\n  bottom: 8px;\n  bottom: max(8px, env(safe-area-inset-bottom));\n  left: 50%;\n  transform: translateX(-50%);\n  width: 140px;\n  height: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 3px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n.app-viewer {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: #f5f5f7;\n}\n.app-viewer.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  padding: 0;\n}\n.app-viewer.fullscreen .app-slider,\n.app-viewer.fullscreen .app-slide {\n  height: 100%;\n}\n.app-slider {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.app-slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.app-slide.active {\n  z-index: 10;\n}\n.app-header {\n  padding: 8px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.05) 0%,\n      rgba(118, 75, 162, 0.05) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  position: relative;\n  min-height: 56px;\n  max-height: 56px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.back-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.back-btn svg {\n  width: 18px;\n  height: 18px;\n  stroke: #1d1d1f;\n  stroke-width: 2;\n}\n.back-btn:active {\n  transform: scale(0.95);\n  background: rgba(0, 0, 0, 0.1);\n}\n.minimize-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 204, 0, 0.9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.minimize-btn svg {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.minimize-btn:active {\n  transform: scale(0.95);\n  background: rgb(255, 204, 0);\n}\n.fullscreen-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(52, 199, 89, 0.9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.fullscreen-btn svg {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.fullscreen-btn:active {\n  transform: scale(0.95);\n  background: rgb(52, 199, 89);\n}\n.floating-exit-fullscreen {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: rgba(255, 59, 48, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10000;\n  box-shadow: 0 4px 12px rgba(255, 59, 48, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s;\n}\n.floating-exit-fullscreen svg {\n  width: 20px;\n  height: 20px;\n  stroke: white;\n  stroke-width: 3;\n}\n.floating-exit-fullscreen:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 16px rgba(255, 59, 48, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.floating-exit-fullscreen:active {\n  transform: scale(0.95);\n}\n.app-icon-small {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n  flex-shrink: 0;\n}\n.app-icon-small svg {\n  width: 24px;\n  height: 24px;\n  stroke: white;\n  stroke-width: 2;\n}\n.app-icon-large {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n}\n.app-icon-large svg {\n  width: 36px;\n  height: 36px;\n  stroke: white;\n  stroke-width: 2;\n}\n.app-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1d1d1f;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.app-body {\n  flex: 1;\n  overflow: auto;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n}\n.app-body .app-iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n  overflow: auto;\n}\n.app-body .app-placeholder {\n  text-align: center;\n  color: #86868b;\n  font-size: 16px;\n  margin-top: 40px;\n  padding: 20px;\n}\n.app-switcher {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.95) 0%,\n      rgba(118, 75, 162, 0.95) 100%);\n  z-index: 3000;\n  display: flex;\n  flex-direction: column;\n  padding: 60px 20px 20px;\n  animation: fadeIn 0.2s;\n  overflow: hidden;\n}\n.switcher-header {\n  margin-bottom: 20px;\n}\n.switcher-header h3 {\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.switcher-content {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-bottom: 20px;\n}\n.no-apps {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.no-apps p {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 16px;\n  text-align: center;\n}\n.app-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n.app-card:active {\n  transform: scale(0.98);\n}\n.card-close-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.2s;\n}\n.card-close-btn svg {\n  width: 16px;\n  height: 16px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.card-close-btn:active {\n  transform: scale(0.9);\n  background: rgba(0, 0, 0, 0.8);\n}\n.card-preview {\n  padding: 16px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n}\n.card-icon svg {\n  width: 28px;\n  height: 28px;\n  stroke: white;\n  stroke-width: 2;\n}\n.card-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1d1d1f;\n  margin: 0;\n}\n.card-content {\n  background: #f5f5f7;\n  border-radius: 8px;\n  padding: 20px;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-placeholder {\n  color: #86868b;\n  font-size: 14px;\n  text-align: center;\n  margin: 0;\n}\n.switcher-hint {\n  padding: 16px;\n  text-align: center;\n}\n.switcher-hint p {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 13px;\n  margin: 0;\n  font-weight: 500;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.app-drawer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 2000;\n  display: flex;\n  align-items: flex-end;\n  animation: fadeIn 0.3s;\n}\n.app-drawer {\n  width: 100%;\n  max-height: 70vh;\n  background: white;\n  border-radius: 20px 20px 0 0;\n  padding: 20px;\n  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.drawer-header h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1d1d1f;\n  margin: 0;\n}\n.drawer-header .close-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.drawer-header .close-btn svg {\n  width: 20px;\n  height: 20px;\n  stroke: #1d1d1f;\n  stroke-width: 2;\n}\n.drawer-header .close-btn:active {\n  transform: scale(0.95);\n  background: rgba(0, 0, 0, 0.1);\n}\n.drawer-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  overflow-y: auto;\n  max-height: calc(70vh - 100px);\n  padding-bottom: 20px;\n}\n.drawer-app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.drawer-app:active {\n  transform: scale(0.95);\n}\n.drawer-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3);\n}\n.drawer-icon svg {\n  width: 32px;\n  height: 32px;\n  stroke: white;\n  stroke-width: 2;\n}\n.drawer-label {\n  font-size: 12px;\n  color: #1d1d1f;\n  text-align: center;\n  font-weight: 500;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.minimized-apps-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 3500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.2s ease-out;\n}\n.minimized-slider {\n  width: 90%;\n  max-width: 400px;\n  height: 70vh;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98) 0%,\n      rgba(248, 249, 250, 0.96) 100%);\n  border-radius: 24px;\n  padding: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  animation: slideUpScale 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.slider-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n.slider-header h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0;\n}\n.close-slider-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.close-slider-btn svg {\n  width: 18px;\n  height: 18px;\n  stroke: #1d1d1f;\n  stroke-width: 2;\n}\n.close-slider-btn:active {\n  transform: scale(0.95);\n  background: rgba(0, 0, 0, 0.1);\n}\n.slider-container {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n}\n.minimized-slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.minimized-slide.active {\n  z-index: 1;\n}\n.screenshot-preview {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08) 0%,\n      rgba(118, 75, 162, 0.08) 100%);\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  border: 2px solid rgba(102, 126, 234, 0.15);\n  overflow: hidden;\n}\n.screenshot-preview:hover {\n  border-color: rgba(102, 126, 234, 0.3);\n}\n.screenshot-preview:active {\n  transform: scale(0.98);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.12) 0%,\n      rgba(118, 75, 162, 0.12) 100%);\n}\n.quick-close-btn {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 59, 48, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  box-shadow: 0 2px 8px rgba(255, 59, 48, 0.3);\n  transition: all 0.2s;\n}\n.quick-close-btn svg {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.quick-close-btn:hover {\n  background: rgb(255, 59, 48);\n  transform: scale(1.05);\n}\n.quick-close-btn:active {\n  transform: scale(0.95);\n}\n.screenshot-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  pointer-events: none;\n}\n.preview-icon-large {\n  width: 140px;\n  height: 140px;\n  border-radius: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.3);\n}\n.preview-icon-large svg {\n  width: 72px;\n  height: 72px;\n  stroke: white;\n  stroke-width: 2;\n}\n.app-name {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1d1d1f;\n  margin: 0;\n  text-align: center;\n}\n.restore-hint {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 14px;\n  color: #007aff;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.95);\n  padding: 10px 20px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: none;\n}\n.slide-indicators {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 0 8px;\n}\n.indicator-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.indicator-dot.active {\n  width: 24px;\n  border-radius: 4px;\n  background: #007aff;\n}\n.indicator-dot:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n}\n.nav-btn {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s;\n  z-index: 10;\n}\n.nav-btn svg {\n  width: 20px;\n  height: 20px;\n  stroke: #1d1d1f;\n  stroke-width: 2.5;\n}\n.nav-btn.prev-btn {\n  left: -50px;\n}\n.nav-btn.next-btn {\n  right: -50px;\n}\n.nav-btn:active:not(.disabled) {\n  transform: translateY(-50%) scale(0.95);\n}\n.nav-btn.disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.minimized-apps-icon {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  margin-right: 8px;\n}\n.minimized-apps-icon svg {\n  width: 100%;\n  height: 100%;\n  stroke: white;\n}\n.minimized-apps-icon .badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 16px;\n  height: 16px;\n  background: #ff3b30;\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n  box-shadow: 0 2px 4px rgba(255, 59, 48, 0.4);\n}\n@keyframes slideUpScale {\n  from {\n    transform: translateY(20px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.card-minimize-btn {\n  position: absolute;\n  top: 8px;\n  right: 40px;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(255, 204, 0, 0.95);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n}\n.card-minimize-btn svg {\n  width: 18px;\n  height: 18px;\n  stroke: white;\n  stroke-width: 2.5;\n}\n.card-minimize-btn:active {\n  transform: scale(0.9);\n  background: rgb(255, 204, 0);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@media (max-width: 767px) {\n  .desktop-container.mobile-layout .menu-bar,\n  .desktop-container.mobile-layout .desktop-wallpaper,\n  .desktop-container.mobile-layout .dock-container {\n    display: none;\n  }\n}\n@media (max-width: 767px) and (max-height: 667px) {\n  .widget-area {\n    padding: 40px 20px 12px;\n  }\n  .time-widget-ios {\n    padding: 16px;\n    border-radius: 20px;\n  }\n  .time-widget-ios .time-display {\n    font-size: 42px;\n  }\n  .time-widget-ios .date-display {\n    font-size: 14px;\n  }\n  .apps-container {\n    padding: 12px 20px 12px;\n    margin-bottom: 120px;\n  }\n  .apps-grid-ios {\n    gap: 18px 12px;\n  }\n  .app-icon-ios {\n    gap: 6px;\n  }\n  .icon-background {\n    width: 54px;\n    height: 54px;\n    border-radius: 14px;\n  }\n  .icon-background svg {\n    width: 28px;\n    height: 28px;\n  }\n  .icon-label-ios {\n    font-size: 11px;\n  }\n  .dock-ios {\n    bottom: 24px;\n  }\n  .dock-icon-bg {\n    width: 54px;\n    height: 54px;\n  }\n  .dock-icon-bg svg {\n    width: 28px;\n    height: 28px;\n  }\n  .page-dots {\n    bottom: 95px;\n  }\n}\n@media (max-width: 767px) and (min-height: 668px) and (max-height: 736px) {\n  .widget-area {\n    padding: 50px 22px 16px;\n  }\n  .apps-container {\n    padding: 16px 22px 16px;\n    margin-bottom: 130px;\n  }\n  .apps-grid-ios {\n    gap: 20px 14px;\n  }\n}\n@media (max-width: 767px) and (min-height: 737px) {\n  .widget-area {\n    padding: 60px 24px 20px;\n  }\n  .apps-container {\n    padding: 20px 24px 20px;\n    margin-bottom: 140px;\n  }\n}\n@media (max-width: 767px) and (min-height: 844px) {\n  .time-widget-ios .time-display {\n    font-size: 64px;\n  }\n  .time-widget-ios .date-display {\n    font-size: 18px;\n  }\n  .apps-grid-ios {\n    gap: 28px 18px;\n  }\n  .icon-background {\n    width: 64px;\n    height: 64px;\n    border-radius: 17px;\n  }\n  .icon-background svg {\n    width: 36px;\n    height: 36px;\n  }\n  .dock-icon-bg {\n    width: 64px;\n    height: 64px;\n  }\n  .dock-icon-bg svg {\n    width: 36px;\n    height: 36px;\n  }\n}\n@media (min-width: 768px) and (max-width: 1023px) {\n  .mobile-content {\n    padding: 0 40px;\n  }\n  .drawer-grid {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  .tabbar-content {\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  .apps-grid-ios {\n    grid-template-columns: repeat(6, 1fr);\n    gap: 32px 24px;\n  }\n  .dock-ios {\n    max-width: 500px;\n  }\n}\n@media (max-width: 767px) and (orientation: landscape) {\n  .widget-area {\n    padding: 30px 20px 10px;\n  }\n  .time-widget-ios {\n    padding: 16px;\n  }\n  .time-widget-ios .time-display {\n    font-size: 40px;\n  }\n  .time-widget-ios .date-display {\n    font-size: 13px;\n  }\n  .apps-container {\n    padding: 10px 20px 10px;\n    margin-bottom: 100px;\n  }\n  .apps-grid-ios {\n    grid-template-columns: repeat(6, 1fr);\n    gap: 16px 12px;\n  }\n  .icon-background,\n  .dock-icon-bg {\n    width: 50px;\n    height: 50px;\n    border-radius: 13px;\n  }\n  .icon-background svg,\n  .dock-icon-bg svg {\n    width: 26px;\n    height: 26px;\n  }\n  .dock-ios {\n    bottom: 20px;\n  }\n  .dock-ios .dock-icons {\n    padding: 10px 8px;\n  }\n  .page-dots {\n    bottom: 80px;\n  }\n}\n.mobile-blocked-screen {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  flex-direction: column;\n  padding: 20px;\n}\n.blocked-content {\n  text-align: center;\n  max-width: 400px;\n  animation: slideUp 0.5s ease-out;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.blocked-icon {\n  width: 80px;\n  height: 80px;\n  stroke: white;\n  stroke-width: 1.5;\n  margin: 0 auto 24px auto;\n  opacity: 0.9;\n  animation: scaleIn 0.6s ease-out 0.1s both;\n}\n.blocked-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n  animation: fadeIn 0.6s ease-out 0.2s both;\n}\n.blocked-description {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.85);\n  margin-bottom: 12px;\n  line-height: 1.6;\n  animation: fadeIn 0.6s ease-out 0.3s both;\n}\n.blocked-hint {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n  animation: fadeIn 0.6s ease-out 0.4s both;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.control-button {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.15s ease;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\n  background: transparent;\n}\n.control-button svg {\n  width: 6px;\n  height: 6px;\n  opacity: 0;\n  transition: opacity 0.15s ease;\n}\n.control-button:hover svg {\n  opacity: 1 !important;\n}\n.control-button.close {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6057 0%,\n      #ff5f56 100%);\n}\n.control-button.close:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff4b42 0%,\n      #ff3b30 100%);\n  box-shadow: 0 2px 4px rgba(255, 59, 48, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.close:active {\n  background:\n    linear-gradient(\n      135deg,\n      #d93025 0%,\n      #c9211e 100%);\n}\n.control-button.minimize {\n  background:\n    linear-gradient(\n      135deg,\n      #ffbd2e 0%,\n      #ffbc2d 100%);\n}\n.control-button.minimize:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ffb01f 0%,\n      #ffa900 100%);\n  box-shadow: 0 2px 4px rgba(255, 169, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.minimize:active {\n  background:\n    linear-gradient(\n      135deg,\n      #e09b00 0%,\n      #d08800 100%);\n}\n.control-button.maximize {\n  background:\n    linear-gradient(\n      135deg,\n      #28ca42 0%,\n      #27c93f 100%);\n}\n.control-button.maximize:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #20b038 0%,\n      #1fa832 100%);\n  box-shadow: 0 2px 4px rgba(31, 168, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.maximize:active {\n  background:\n    linear-gradient(\n      135deg,\n      #1a9930 0%,\n      #178528 100%);\n}\n/*# sourceMappingURL=desktop.component.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }, { type: DeviceDetectService }, { type: DomSanitizer }, { type: DebugLoggerService }], { closeZoomDropdown: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onMouseWheel: [{
    type: HostListener,
    args: ["wheel", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesktopComponent, { className: "DesktopComponent", filePath: "src/app/modules/desk/components/desktop/desktop.component.ts", lineNumber: 41 });
})();

// src/app/modules/desk/desk-routing.module.ts
var routes = [
  {
    path: "",
    component: DesktopComponent
  }
];
var DeskRoutingModule = class _DeskRoutingModule {
  static \u0275fac = function DeskRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeskRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DeskRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/desk/directives/swipe.directive.ts
var SwipeDirective = class _SwipeDirective {
  swipeleft = new EventEmitter();
  swiperight = new EventEmitter();
  swipeup = new EventEmitter();
  swipedown = new EventEmitter();
  swipeCoord;
  swipeTime;
  onTouchStart(e) {
    this.swipe(e, "start");
  }
  onTouchEnd(e) {
    this.swipe(e, "end");
  }
  swipe(e, when) {
    const coord = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    ];
    const time = (/* @__PURE__ */ new Date()).getTime();
    if (when === "start") {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === "end") {
      const direction = [
        coord[0] - (this.swipeCoord?.[0] ?? 0),
        coord[1] - (this.swipeCoord?.[1] ?? 0)
      ];
      const duration = time - (this.swipeTime ?? 0);
      if (duration < 1e3 && Math.abs(direction[0]) > 30 && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        if (direction[0] < 0) {
          this.swipeleft.emit();
        } else {
          this.swiperight.emit();
        }
      } else if (duration < 1e3 && Math.abs(direction[1]) > 30 && Math.abs(direction[1]) > Math.abs(direction[0] * 3)) {
        if (direction[1] < 0) {
          this.swipeup.emit();
        } else {
          this.swipedown.emit();
        }
      }
    }
  }
  static \u0275fac = function SwipeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwipeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SwipeDirective, selectors: [["", "swipe", ""]], hostBindings: function SwipeDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("touchstart", function SwipeDirective_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("touchend", function SwipeDirective_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      });
    }
  }, outputs: { swipeleft: "swipeleft", swiperight: "swiperight", swipeup: "swipeup", swipedown: "swipedown" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwipeDirective, [{
    type: Directive,
    args: [{
      selector: "[swipe]",
      standalone: true
    }]
  }], null, { swipeleft: [{
    type: Output
  }], swiperight: [{
    type: Output
  }], swipeup: [{
    type: Output
  }], swipedown: [{
    type: Output
  }], onTouchStart: [{
    type: HostListener,
    args: ["touchstart", ["$event"]]
  }], onTouchEnd: [{
    type: HostListener,
    args: ["touchend", ["$event"]]
  }] });
})();

// src/app/modules/desk/desk.module.ts
var DeskModule = class _DeskModule {
  static \u0275fac = function DeskModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeskModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DeskModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    DeviceDetectService
  ], imports: [
    CommonModule,
    HttpClientModule,
    DeskRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DesktopComponent,
        SpecDocComponent,
        WbsDocComponent,
        IaDocComponent,
        IaCanvasComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        DeskRoutingModule,
        SharedModule,
        SanitizeHtmlPipe,
        SwipeDirective,
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        DeviceDetectService
      ]
    }]
  }], null, null);
})();
export {
  DeskModule
};
//# sourceMappingURL=chunk-WKAH6IIE.js.map
