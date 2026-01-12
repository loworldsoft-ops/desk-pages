import {
  Autoplay,
  EffectCube,
  Pagination,
  Swiper
} from "./chunk-U6P2A3OP.js";
import {
  GeminiTranslationService,
  LocalAiTranslationService
} from "./chunk-IMXTMMJF.js";
import "./chunk-GJJ4NKAQ.js";
import {
  SnackbarService,
  ThemeService
} from "./chunk-Z6AVJA4A.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  Output,
  ViewChild,
  ViewportScroller,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/modules/ai/components/ai-features-panel/ai-features-panel.component.ts
function AiFeaturesPanelComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pdfContent.length > 500 ? ctx_r0.pdfContent.substring(0, 500) + "..." : ctx_r0.pdfContent, " ");
  }
}
function AiFeaturesPanelComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uCD1D \uAE00\uC790 \uC218: ", ctx_r0.pdfContent.length, " ");
  }
}
function AiFeaturesPanelComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " PDF\uB97C \uB85C\uB4DC\uD558\uBA74 \uBCF8\uBB38 \uB0B4\uC6A9\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "(\uD655\uC778 \uC911...)");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "(\uC0AC\uC6A9 \uBD88\uAC00)");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "(gemma3:1b)");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "\uB85C\uCEEC Ollama\uC758 gemma3:1b \uBAA8\uB378\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function AiFeaturesPanelComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "small");
    \u0275\u0275text(2, "LocalAI\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 Ollama\uC640 gemma3:1b \uBAA8\uB378\uC744 \uC124\uCE58\uD574\uC8FC\uC138\uC694.");
    \u0275\u0275elementEnd()();
  }
}
function AiFeaturesPanelComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2.label, " ");
  }
}
function AiFeaturesPanelComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.label, " ");
  }
}
function AiFeaturesPanelComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Gemini AI \uC694\uC57D \uC0DD\uC131");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "LocalAI \uC694\uC57D \uC0DD\uC131");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uC0DD\uC131 \uC911...");
    \u0275\u0275elementEnd();
  }
}
function AiFeaturesPanelComponent_div_47_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "button", 39);
    \u0275\u0275listener("click", function AiFeaturesPanelComponent_div_47_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCopySummary());
    });
    \u0275\u0275text(5, " \u{1F4CB} \uBCF5\uC0AC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function AiFeaturesPanelComponent_div_47_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onExportSummary());
    });
    \u0275\u0275text(7, " \u{1F4BE} \uC800\uC7A5 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.summaryText);
  }
}
function AiFeaturesPanelComponent_div_47_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275text(3, "AI\uAC00 \uBB38\uC11C\uB97C \uBD84\uC11D\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4...");
    \u0275\u0275elementEnd()();
  }
}
function AiFeaturesPanelComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2, "\uC694\uC57D \uACB0\uACFC");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AiFeaturesPanelComponent_div_47_div_3_Template, 8, 1, "div", 34)(4, AiFeaturesPanelComponent_div_47_div_4_Template, 4, 0, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
  }
}
function AiFeaturesPanelComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46)(5, "p")(6, "strong");
    \u0275\u0275text(7, "AI \uC694\uC57D \uAE30\uB2A5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "\uBB38\uC11C\uC758 \uD575\uC2EC \uB0B4\uC6A9\uC744 AI\uAC00 \uC790\uB3D9\uC73C\uB85C \uC694\uC57D\uD574\uB4DC\uB9BD\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "\u2022 \uBE60\uB978 \uBB38\uC11C \uC774\uD574");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "\u2022 \uD575\uC2EC \uD3EC\uC778\uD2B8 \uCD94\uCD9C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "\u2022 \uB2E4\uC591\uD55C \uC694\uC57D \uC2A4\uD0C0\uC77C");
    \u0275\u0275elementEnd()()()()();
  }
}
var AiFeaturesPanelComponent = class _AiFeaturesPanelComponent {
  geminiTranslationService;
  localAiTranslationService;
  snackbarService;
  isVisible = false;
  pdfTextStreamData = null;
  close = new EventEmitter();
  // AI 요약 관련 상태
  summaryText = "";
  isLoading = false;
  summaryLength = "medium";
  summaryType = "general";
  pdfContent = "";
  showPdfContent = false;
  // LocalAI 관련 속성
  isLocalAIAvailable = false;
  isCheckingLocalAI = true;
  selectedSummaryMethod = "gemini";
  // 'gemini' 또는 'localai'
  summaryLengthOptions = [
    { value: "short", label: "\uC9E7\uAC8C (1-2\uBB38\uB2E8)" },
    { value: "medium", label: "\uBCF4\uD1B5 (3-4\uBB38\uB2E8)" },
    { value: "long", label: "\uC790\uC138\uD788 (5-6\uBB38\uB2E8)" }
  ];
  summaryTypeOptions = [
    { value: "general", label: "\uC77C\uBC18 \uC694\uC57D" },
    { value: "bullet", label: "\uD575\uC2EC \uD3EC\uC778\uD2B8" },
    { value: "qa", label: "Q&A \uD615\uC2DD" },
    { value: "structure", label: "\uAD6C\uC870\uC801 \uC694\uC57D" }
  ];
  constructor(geminiTranslationService, localAiTranslationService, snackbarService) {
    this.geminiTranslationService = geminiTranslationService;
    this.localAiTranslationService = localAiTranslationService;
    this.snackbarService = snackbarService;
  }
  ngOnInit() {
    this.checkLocalAIAvailability();
    if (this.pdfTextStreamData) {
      this.extractAndDisplayPdfContent();
    } else {
    }
  }
  ngOnChanges() {
    if (this.pdfTextStreamData) {
      this.extractAndDisplayPdfContent();
    } else {
    }
  }
  checkLocalAIAvailability() {
    return __async(this, null, function* () {
      this.isCheckingLocalAI = true;
      try {
        this.isLocalAIAvailable = yield this.localAiTranslationService.checkOllamaAvailability();
        console.log("LocalAI \uAC00\uC6A9\uC131 (\uC694\uC57D):", this.isLocalAIAvailable);
        if (this.isLocalAIAvailable) {
        } else {
        }
      } catch (error) {
        this.isLocalAIAvailable = false;
      } finally {
        this.isCheckingLocalAI = false;
      }
    });
  }
  onSummaryMethodChange(method) {
    this.selectedSummaryMethod = method;
  }
  onClose() {
    this.close.emit();
  }
  extractAndDisplayPdfContent() {
    const texts = this.extractTextFromPdf();
    this.pdfContent = texts.join("\n").replace(/\n+/g, "\n").trim();
    this.showPdfContent = true;
  }
  extractTextFromPdf() {
    const texts = [];
    if (!this.pdfTextStreamData?.pages) {
      return texts;
    }
    const isFooterText = (text, y, pageHeight) => {
      const trimmedText = text.trim();
      const isInFooterArea = y < pageHeight * 0.1;
      const isFileName = /\.(pdf|doc|docx|txt|hwp)$/i.test(trimmedText);
      const isPageNumber = /^page\s*\d+$|^\d+\s*$|^\d+\s*\/\s*\d+$|^p\.\s*\d+$/i.test(trimmedText);
      const isDate = /^\d{4}[-\/]\d{1,2}[-\/]\d{1,2}$|^\d{1,2}[-\/]\d{1,2}[-\/]\d{4}$/.test(trimmedText);
      const isShortFooterText = isInFooterArea && trimmedText.length < 50 && (trimmedText.includes(".") || /^[a-zA-Z0-9\s\-_()]+$/.test(trimmedText));
      const isDocumentTitle = isInFooterArea && /AI.*PDF|PDF.*AI|보고서|report|document/i.test(trimmedText);
      return isFileName || isPageNumber || isDate || isShortFooterText || isDocumentTitle;
    };
    for (let pageIndex = 0; pageIndex < this.pdfTextStreamData.pages.length; pageIndex++) {
      const page = this.pdfTextStreamData.pages[pageIndex];
      let pageHeight = 800;
      if (page.textItems && page.textItems.length > 0) {
        const yPositions = page.textItems.map((item) => item.position.y);
        pageHeight = Math.max(...yPositions) - Math.min(...yPositions) + 100;
      }
      if (page.sentences && page.sentences.length > 0) {
        for (const sentence of page.sentences) {
          if (sentence.text && sentence.text.trim().length > 0) {
            const sentenceText = sentence.text.trim();
            if (!isFooterText(sentenceText, sentence.position.y, pageHeight)) {
              texts.push(sentenceText);
            }
          }
        }
      }
    }
    return texts;
  }
  onGenerateSummary() {
    if (!this.pdfTextStreamData || !this.pdfContent) {
      this.snackbarService.showError("PDF\uB97C \uBA3C\uC800 \uB85C\uB4DC\uD574\uC8FC\uC138\uC694.");
      return;
    }
    this.isLoading = true;
    this.summaryText = "";
    const methodName = this.selectedSummaryMethod === "localai" ? "LocalAI" : "Gemini AI";
    if (this.selectedSummaryMethod === "localai") {
      this.localAiTranslationService.summarizeText(this.pdfContent, this.summaryType, this.summaryLength).subscribe({
        next: (result) => {
          if (result.success) {
            this.summaryText = result.translatedText;
          } else {
            this.snackbarService.showError(`LocalAI \uC694\uC57D \uC2E4\uD328: ${result.error}`);
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.snackbarService.showError(`LocalAI \uC694\uC57D \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ${error.error || error.message || "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"}`);
          this.isLoading = false;
        }
      });
    } else {
      const summaryPrompt = this.generateSummaryPrompt();
      this.geminiTranslationService.translateText(summaryPrompt, "korean").subscribe({
        next: (result) => {
          if (result.success) {
            this.summaryText = result.translatedText;
          } else {
            this.snackbarService.showError(`Gemini \uC694\uC57D \uC2E4\uD328: ${result.error}`);
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.snackbarService.showError(`Gemini \uC694\uC57D \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ${error.error || error.message || "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"}`);
          this.isLoading = false;
        }
      });
    }
  }
  generateSummaryPrompt() {
    let prompt = "";
    switch (this.summaryType) {
      case "bullet":
        prompt = `\uB2E4\uC74C \uBB38\uC11C\uC758 \uD575\uC2EC \uD3EC\uC778\uD2B8\uB97C \uBC88\uD638\uAC00 \uB9E4\uACA8\uC9C4 \uBAA9\uB85D\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
        break;
      case "qa":
        prompt = `\uB2E4\uC74C \uBB38\uC11C\uB97C Q&A \uD615\uC2DD\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. \uC8FC\uC694 \uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC73C\uB85C \uAD6C\uC131\uD574\uC8FC\uC138\uC694. `;
        break;
      case "structure":
        prompt = `\uB2E4\uC74C \uBB38\uC11C\uB97C \uAD6C\uC870\uC801\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. \uC81C\uBAA9, \uC8FC\uC694 \uC139\uC158, \uD575\uC2EC \uB0B4\uC6A9\uC744 \uCCB4\uACC4\uC801\uC73C\uB85C \uC815\uB9AC\uD574\uC8FC\uC138\uC694. `;
        break;
      default:
        prompt = `\uB2E4\uC74C \uBB38\uC11C\uB97C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
    }
    switch (this.summaryLength) {
      case "short":
        prompt += `\uAC04\uACB0\uD558\uAC8C 1-2\uBB38\uB2E8\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
        break;
      case "long":
        prompt += `\uC790\uC138\uD558\uAC8C 5-6\uBB38\uB2E8\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
        break;
      default:
        prompt += `\uC801\uC808\uD55C \uAE38\uC774\uB85C 3-4\uBB38\uB2E8\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
    }
    prompt += `\uD55C\uAD6D\uC5B4\uB85C \uC791\uC131\uD574\uC8FC\uC138\uC694.

\uBB38\uC11C \uB0B4\uC6A9:
${this.pdfContent}`;
    return prompt;
  }
  onCopySummary() {
    if (this.summaryText) {
      navigator.clipboard.writeText(this.summaryText);
    }
  }
  onExportSummary() {
    if (this.summaryText) {
      const blob = new Blob([this.summaryText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ai-summary.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
  }
  static \u0275fac = function AiFeaturesPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiFeaturesPanelComponent)(\u0275\u0275directiveInject(GeminiTranslationService), \u0275\u0275directiveInject(LocalAiTranslationService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiFeaturesPanelComponent, selectors: [["app-ai-features-panel"]], inputs: { isVisible: "isVisible", pdfTextStreamData: "pdfTextStreamData" }, outputs: { close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 49, vars: 27, consts: [[1, "ai-features-panel"], [1, "sidebar-header"], [1, "panel-main-title"], ["title", "\uB2EB\uAE30", 1, "close-panel-btn", 3, "click"], [1, "panel-section"], [1, "panel-title"], ["class", "pdf-content-preview", 4, "ngIf"], ["class", "content-stats", 4, "ngIf"], ["class", "no-content-message", 4, "ngIf"], [1, "setting-group"], [1, "setting-label"], [1, "method-options"], [1, "method-option"], ["type", "radio", "name", "summaryMethod", "value", "gemini", 3, "ngModelChange", "change", "ngModel"], [1, "method-label"], ["type", "radio", "name", "summaryMethod", "value", "localai", 3, "ngModelChange", "change", "disabled", "ngModel"], ["class", "checking", 4, "ngIf"], ["class", "unavailable", 4, "ngIf"], ["class", "available", 4, "ngIf"], ["class", "method-info", 4, "ngIf"], [1, "property-input", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "generate-btn", 3, "click", "disabled"], [4, "ngIf"], [1, "divider"], ["class", "panel-section", 4, "ngIf"], [1, "pdf-content-preview"], [1, "content-stats"], [1, "no-content-message"], [1, "checking"], [1, "unavailable"], [1, "available"], [1, "method-info"], [3, "value"], ["class", "summary-result", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "summary-result"], [1, "summary-text"], [1, "summary-actions"], ["title", "\uBCF5\uC0AC", 1, "action-btn", 3, "click"], ["title", "\uB0B4\uBCF4\uB0B4\uAE30", 1, "action-btn", 3, "click"], [1, "loading-state"], [1, "spinner"], [1, "loading-text"], [1, "info-box"], [1, "info-icon"], [1, "info-text"]], template: function AiFeaturesPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "AI \uC694\uC57D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function AiFeaturesPanelComponent_Template_button_click_4_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(5, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275text(8, "PDF \uBCF8\uBB38 \uB0B4\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, AiFeaturesPanelComponent_div_9_Template, 2, 1, "div", 6)(10, AiFeaturesPanelComponent_div_10_Template, 2, 1, "div", 7)(11, AiFeaturesPanelComponent_div_11_Template, 2, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 4)(13, "div", 5);
      \u0275\u0275text(14, "\uC694\uC57D \uC124\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "label", 10);
      \u0275\u0275text(17, "\uC694\uC57D \uBC29\uBC95");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "label", 12)(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AiFeaturesPanelComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSummaryMethod, $event) || (ctx.selectedSummaryMethod = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AiFeaturesPanelComponent_Template_input_change_20_listener() {
        return ctx.onSummaryMethodChange("gemini");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22, "Gemini AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "label", 12)(24, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AiFeaturesPanelComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSummaryMethod, $event) || (ctx.selectedSummaryMethod = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AiFeaturesPanelComponent_Template_input_change_24_listener() {
        return ctx.onSummaryMethodChange("localai");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 14);
      \u0275\u0275text(26, " LocalAI ");
      \u0275\u0275template(27, AiFeaturesPanelComponent_span_27_Template, 2, 0, "span", 16)(28, AiFeaturesPanelComponent_span_28_Template, 2, 0, "span", 17)(29, AiFeaturesPanelComponent_span_29_Template, 2, 0, "span", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, AiFeaturesPanelComponent_div_30_Template, 3, 0, "div", 19)(31, AiFeaturesPanelComponent_div_31_Template, 3, 0, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 9)(33, "label", 10);
      \u0275\u0275text(34, "\uC694\uC57D \uAE38\uC774");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AiFeaturesPanelComponent_Template_select_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.summaryLength, $event) || (ctx.summaryLength = $event);
        return $event;
      });
      \u0275\u0275template(36, AiFeaturesPanelComponent_option_36_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 9)(38, "label", 10);
      \u0275\u0275text(39, "\uC694\uC57D \uC720\uD615");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AiFeaturesPanelComponent_Template_select_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.summaryType, $event) || (ctx.summaryType = $event);
        return $event;
      });
      \u0275\u0275template(41, AiFeaturesPanelComponent_option_41_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 22);
      \u0275\u0275listener("click", function AiFeaturesPanelComponent_Template_button_click_42_listener() {
        return ctx.onGenerateSummary();
      });
      \u0275\u0275template(43, AiFeaturesPanelComponent_span_43_Template, 2, 0, "span", 23)(44, AiFeaturesPanelComponent_span_44_Template, 2, 0, "span", 23)(45, AiFeaturesPanelComponent_span_45_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "hr", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, AiFeaturesPanelComponent_div_47_Template, 5, 2, "div", 25)(48, AiFeaturesPanelComponent_div_48_Template, 17, 0, "div", 25);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "" : "none");
      \u0275\u0275classProp("closed", !ctx.isVisible);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.pdfContent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pdfContent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.pdfContent);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSummaryMethod);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", !ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isLocalAIAvailable);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSummaryMethod);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isCheckingLocalAI);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingLocalAI && !ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingLocalAI && ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSummaryMethod === "localai" && ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLocalAIAvailable && !ctx.isCheckingLocalAI);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.summaryLength);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.summaryLengthOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.summaryType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.summaryTypeOptions);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || ctx.selectedSummaryMethod === "localai" && !ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.selectedSummaryMethod === "gemini");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.selectedSummaryMethod === "localai");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.summaryText || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.summaryText && !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.ai-features-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 130px;\n  right: 50px;\n  bottom: 0;\n  width: 380px;\n  background: var(--bg-primary);\n  border-left: 1px solid var(--border-color);\n  box-shadow: -2px 0 8px var(--shadow);\n  padding: 16px;\n  overflow-y: auto;\n  z-index: 1000;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n}\n.ai-features-panel.closed[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 0;\n  pointer-events: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 8px 16px 0;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.panel-main-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.close-panel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 14px;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.close-panel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.panel-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #333;\n}\n.setting-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.method-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n}\n.method-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: border-color 0.15s, background-color 0.15s;\n}\n.method-option[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: #007AFF;\n  background-color: #f8f9ff;\n}\n.method-option.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: #f5f5f5;\n}\n.method-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin: 0;\n}\n.method-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.checking[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.unavailable[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n  font-size: 12px;\n}\n.available[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 12px;\n}\n.method-info[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  border-left: 3px solid #007AFF;\n}\n.method-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.setting-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #555;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.property-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  background: var(--bg-primary);\n  transition: border-color 0.15s;\n}\n.property-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007AFF;\n  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.1);\n}\n.generate-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #007AFF,\n      #5856D6);\n  color: white;\n  border: none;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.generate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.generate-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #eee;\n  margin: 16px 0;\n}\n.summary-result[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid #e9ecef;\n}\n.summary-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333;\n  margin-bottom: 16px;\n  white-space: pre-wrap;\n}\n.summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--bg-primary);\n  border: 1px solid #ddd;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #bbb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 16px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007AFF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n.info-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 12px;\n}\n.info-text[_ngcontent-%COMP%] {\n  color: #555;\n}\n.info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n}\n.info-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 12px 0 0 0;\n  text-align: left;\n}\n.info-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 4px;\n  color: #666;\n}\n.content-view-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #17a2b8,\n      #138496);\n  border: none;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  width: 100%;\n  margin-top: 8px;\n  transition: all 0.2s ease;\n}\n.content-view-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #138496,\n      #117a8b);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(19, 132, 150, 0.3);\n}\n.content-view-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(19, 132, 150, 0.2);\n}\n.pdf-content-preview[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 12px;\n  margin-bottom: 8px;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #555;\n  max-height: 150px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.content-stats[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  text-align: right;\n  margin-bottom: 8px;\n}\n.no-content-message[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 13px;\n  font-style: italic;\n}\n/*# sourceMappingURL=ai-features-panel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiFeaturesPanelComponent, [{
    type: Component,
    args: [{ selector: "app-ai-features-panel", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- AI \uAE30\uB2A5 \uD328\uB110 -->
<div class="ai-features-panel" 
     [class.closed]="!isVisible"
     [style.display]="isVisible ? '' : 'none'">
  <div class="sidebar-header">
    <h3 class="panel-main-title">AI \uC694\uC57D</h3>
    <button class="close-panel-btn" 
            title="\uB2EB\uAE30"
            (click)="onClose()">
      \xD7
    </button>
  </div>
  
  <!-- PDF \uBCF8\uBB38 \uB0B4\uC6A9 -->
  <div class="panel-section">
    <div class="panel-title">PDF \uBCF8\uBB38 \uB0B4\uC6A9</div>
    <div *ngIf="pdfContent" class="pdf-content-preview">
      {{ pdfContent.length > 500 ? pdfContent.substring(0, 500) + '...' : pdfContent }}
    </div>
    <div *ngIf="pdfContent" class="content-stats">
      \uCD1D \uAE00\uC790 \uC218: {{ pdfContent.length }}
    </div>
    <div *ngIf="!pdfContent" class="no-content-message">
      PDF\uB97C \uB85C\uB4DC\uD558\uBA74 \uBCF8\uBB38 \uB0B4\uC6A9\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.
    </div>
  </div>
  
  <!-- AI \uC694\uC57D \uC124\uC815 -->
  <div class="panel-section">
    <div class="panel-title">\uC694\uC57D \uC124\uC815</div>
    
    <!-- \uC694\uC57D \uBC29\uBC95 \uC120\uD0DD -->
    <div class="setting-group">
      <label class="setting-label">\uC694\uC57D \uBC29\uBC95</label>
      <div class="method-options">
        <label class="method-option">
          <input type="radio" 
                 name="summaryMethod" 
                 value="gemini"
                 [(ngModel)]="selectedSummaryMethod"
                 (change)="onSummaryMethodChange('gemini')">
          <span class="method-label">Gemini AI</span>
        </label>
        <label class="method-option" 
               [class.disabled]="!isLocalAIAvailable">
          <input type="radio" 
                 name="summaryMethod" 
                 value="localai"
                 [disabled]="!isLocalAIAvailable"
                 [(ngModel)]="selectedSummaryMethod"
                 (change)="onSummaryMethodChange('localai')">
          <span class="method-label">
            LocalAI
            <span *ngIf="isCheckingLocalAI" class="checking">(\uD655\uC778 \uC911...)</span>
            <span *ngIf="!isCheckingLocalAI && !isLocalAIAvailable" class="unavailable">(\uC0AC\uC6A9 \uBD88\uAC00)</span>
            <span *ngIf="!isCheckingLocalAI && isLocalAIAvailable" class="available">(gemma3:1b)</span>
          </span>
        </label>
      </div>
      <div class="method-info" *ngIf="selectedSummaryMethod === 'localai' && isLocalAIAvailable">
        <small>\uB85C\uCEEC Ollama\uC758 gemma3:1b \uBAA8\uB378\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</small>
      </div>
      <div class="method-info" *ngIf="!isLocalAIAvailable && !isCheckingLocalAI">
        <small>LocalAI\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 Ollama\uC640 gemma3:1b \uBAA8\uB378\uC744 \uC124\uCE58\uD574\uC8FC\uC138\uC694.</small>
      </div>
    </div>
    
    <div class="setting-group">
      <label class="setting-label">\uC694\uC57D \uAE38\uC774</label>
      <select class="property-input" 
              [(ngModel)]="summaryLength">
        <option *ngFor="let option of summaryLengthOptions" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    
    <div class="setting-group">
      <label class="setting-label">\uC694\uC57D \uC720\uD615</label>
      <select class="property-input" 
              [(ngModel)]="summaryType">
        <option *ngFor="let option of summaryTypeOptions" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    
    <button class="generate-btn" 
            [disabled]="isLoading || (selectedSummaryMethod === 'localai' && !isLocalAIAvailable)"
            (click)="onGenerateSummary()">
      <span *ngIf="!isLoading && selectedSummaryMethod === 'gemini'">Gemini AI \uC694\uC57D \uC0DD\uC131</span>
      <span *ngIf="!isLoading && selectedSummaryMethod === 'localai'">LocalAI \uC694\uC57D \uC0DD\uC131</span>
      <span *ngIf="isLoading">\uC0DD\uC131 \uC911...</span>
    </button>
    
    <hr class="divider">
  </div>

  <!-- \uC694\uC57D \uACB0\uACFC -->
  <div class="panel-section" *ngIf="summaryText || isLoading">
    <div class="panel-title">\uC694\uC57D \uACB0\uACFC</div>
    
    <div class="summary-result" *ngIf="!isLoading">
      <div class="summary-text">{{ summaryText }}</div>
      
      <div class="summary-actions">
        <button class="action-btn" 
                title="\uBCF5\uC0AC"
                (click)="onCopySummary()">
          \u{1F4CB} \uBCF5\uC0AC
        </button>
        <button class="action-btn" 
                title="\uB0B4\uBCF4\uB0B4\uAE30"
                (click)="onExportSummary()">
          \u{1F4BE} \uC800\uC7A5
        </button>
      </div>
    </div>
    
    <div class="loading-state" *ngIf="isLoading">
      <div class="spinner"></div>
      <div class="loading-text">AI\uAC00 \uBB38\uC11C\uB97C \uBD84\uC11D\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4...</div>
    </div>
  </div>

  <!-- AI \uAE30\uB2A5 \uC548\uB0B4 -->
  <div class="panel-section" *ngIf="!summaryText && !isLoading">
    <div class="info-box">
      <div class="info-icon">\u{1F916}</div>
      <div class="info-text">
        <p><strong>AI \uC694\uC57D \uAE30\uB2A5</strong></p>
        <p>\uBB38\uC11C\uC758 \uD575\uC2EC \uB0B4\uC6A9\uC744 AI\uAC00 \uC790\uB3D9\uC73C\uB85C \uC694\uC57D\uD574\uB4DC\uB9BD\uB2C8\uB2E4.</p>
        <ul>
          <li>\u2022 \uBE60\uB978 \uBB38\uC11C \uC774\uD574</li>
          <li>\u2022 \uD575\uC2EC \uD3EC\uC778\uD2B8 \uCD94\uCD9C</li>
          <li>\u2022 \uB2E4\uC591\uD55C \uC694\uC57D \uC2A4\uD0C0\uC77C</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/ai/components/ai-features-panel/ai-features-panel.component.scss */\n.ai-features-panel {\n  position: fixed;\n  top: 130px;\n  right: 50px;\n  bottom: 0;\n  width: 380px;\n  background: var(--bg-primary);\n  border-left: 1px solid var(--border-color);\n  box-shadow: -2px 0 8px var(--shadow);\n  padding: 16px;\n  overflow-y: auto;\n  z-index: 1000;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n}\n.ai-features-panel.closed {\n  transform: translateX(100%);\n  opacity: 0;\n  pointer-events: none;\n}\n.sidebar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 8px 16px 0;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.panel-main-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.close-panel-btn {\n  background: none;\n  border: none;\n  font-size: 14px;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.close-panel-btn:hover {\n  background: #f0f0f0;\n}\n.panel-section {\n  margin-bottom: 20px;\n}\n.panel-title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #333;\n}\n.setting-group {\n  margin-bottom: 12px;\n}\n.method-options {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n}\n.method-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: border-color 0.15s, background-color 0.15s;\n}\n.method-option:hover:not(.disabled) {\n  border-color: #007AFF;\n  background-color: #f8f9ff;\n}\n.method-option.disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: #f5f5f5;\n}\n.method-option input[type=radio] {\n  margin: 0;\n}\n.method-label {\n  font-size: 14px;\n  font-weight: 500;\n}\n.checking {\n  color: #666;\n  font-size: 12px;\n}\n.unavailable {\n  color: #ff6b6b;\n  font-size: 12px;\n}\n.available {\n  color: #28a745;\n  font-size: 12px;\n}\n.method-info {\n  margin-top: 8px;\n  padding: 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  border-left: 3px solid #007AFF;\n}\n.method-info small {\n  color: #666;\n  font-size: 12px;\n}\n.setting-label {\n  display: block;\n  font-size: 13px;\n  color: #555;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.property-input {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  background: var(--bg-primary);\n  transition: border-color 0.15s;\n}\n.property-input:focus {\n  outline: none;\n  border-color: #007AFF;\n  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.1);\n}\n.generate-btn {\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #007AFF,\n      #5856D6);\n  color: white;\n  border: none;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.generate-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.generate-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.divider {\n  border: none;\n  border-top: 1px solid #eee;\n  margin: 16px 0;\n}\n.summary-result {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid #e9ecef;\n}\n.summary-text {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #333;\n  margin-bottom: 16px;\n  white-space: pre-wrap;\n}\n.summary-actions {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  flex: 1;\n  background: var(--bg-primary);\n  border: 1px solid #ddd;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.action-btn:hover {\n  background: #f5f5f5;\n  border-color: #bbb;\n}\n.loading-state {\n  text-align: center;\n  padding: 24px 16px;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007AFF;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-text {\n  font-size: 13px;\n  color: #666;\n}\n.info-box {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n}\n.info-icon {\n  font-size: 32px;\n  margin-bottom: 12px;\n}\n.info-text {\n  color: #555;\n}\n.info-text p {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n}\n.info-text strong {\n  color: #333;\n}\n.info-text ul {\n  list-style: none;\n  padding: 0;\n  margin: 12px 0 0 0;\n  text-align: left;\n}\n.info-text li {\n  font-size: 13px;\n  margin-bottom: 4px;\n  color: #666;\n}\n.content-view-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #17a2b8,\n      #138496);\n  border: none;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  width: 100%;\n  margin-top: 8px;\n  transition: all 0.2s ease;\n}\n.content-view-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #138496,\n      #117a8b);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(19, 132, 150, 0.3);\n}\n.content-view-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(19, 132, 150, 0.2);\n}\n.pdf-content-preview {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 12px;\n  margin-bottom: 8px;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #555;\n  max-height: 150px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.content-stats {\n  font-size: 11px;\n  color: #888;\n  text-align: right;\n  margin-bottom: 8px;\n}\n.no-content-message {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 13px;\n  font-style: italic;\n}\n/*# sourceMappingURL=ai-features-panel.component.css.map */\n'] }]
  }], () => [{ type: GeminiTranslationService }, { type: LocalAiTranslationService }, { type: SnackbarService }], { isVisible: [{
    type: Input
  }], pdfTextStreamData: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiFeaturesPanelComponent, { className: "AiFeaturesPanelComponent", filePath: "src/app/modules/ai/components/ai-features-panel/ai-features-panel.component.ts", lineNumber: 20 });
})();

// src/app/modules/ai/components/ai-translate-panel/ai-translate-panel.component.ts
function AiTranslatePanelComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "(\uD655\uC778 \uC911...)");
    \u0275\u0275elementEnd();
  }
}
function AiTranslatePanelComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "(\uC0AC\uC6A9 \uBD88\uAC00)");
    \u0275\u0275elementEnd();
  }
}
function AiTranslatePanelComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "(gemma3:1b)");
    \u0275\u0275elementEnd();
  }
}
function AiTranslatePanelComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "\uB85C\uCEEC Ollama\uC758 gemma3:1b \uBAA8\uB378\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
function AiTranslatePanelComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small");
    \u0275\u0275text(2, "LocalAI\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 Ollama\uC640 gemma3:1b \uBAA8\uB378\uC744 \uC124\uCE58\uD574\uC8FC\uC138\uC694.");
    \u0275\u0275elementEnd()();
  }
}
function AiTranslatePanelComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "PDF \uBCF8\uBB38 \uB0B4\uC6A9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pdfContent.length > 500 ? ctx_r0.pdfContent.substring(0, 500) + "..." : ctx_r0.pdfContent, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \uCD1D \uAE00\uC790 \uC218: ", ctx_r0.pdfContent.length, " ");
  }
}
function AiTranslatePanelComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    \u0275\u0275property("value", lang_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r2.label, " ");
  }
}
function AiTranslatePanelComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Gemini AI \uBC88\uC5ED\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function AiTranslatePanelComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "LocalAI \uBC88\uC5ED\uD558\uAE30");
    \u0275\u0275elementEnd();
  }
}
function AiTranslatePanelComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uBC88\uC5ED \uC911...");
    \u0275\u0275elementEnd();
  }
}
function AiTranslatePanelComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.translationProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\uBC88\uC5ED \uC9C4\uD589 \uC911... ", ctx_r0.translationProgress, "%");
  }
}
function AiTranslatePanelComponent_div_41_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const translation_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(translation_r3.translatedText);
  }
}
function AiTranslatePanelComponent_div_41_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const translation_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \uBC88\uC5ED \uC2E4\uD328: ", translation_r3.error, " ");
  }
}
function AiTranslatePanelComponent_div_41_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AiTranslatePanelComponent_div_41_div_4_div_1_Template, 3, 1, "div", 41)(2, AiTranslatePanelComponent_div_41_div_4_div_2_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const translation_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", translation_r3.success);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !translation_r3.success);
  }
}
function AiTranslatePanelComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "\uBC88\uC5ED \uACB0\uACFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275template(4, AiTranslatePanelComponent_div_41_div_4_Template, 3, 2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.translations);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \uC131\uACF5: ", ctx_r0.getSuccessfulTranslationCount(), " / ", ctx_r0.translations.length, " ");
  }
}
var AiTranslatePanelComponent = class _AiTranslatePanelComponent {
  geminiTranslationService;
  localAiTranslationService;
  snackbarService;
  isVisible = false;
  pdfTextStreamData = null;
  close = new EventEmitter();
  translationCompleted = new EventEmitter();
  selectedLanguage = "english";
  isTranslating = false;
  translationProgress = 0;
  translations = [];
  showHighlight = false;
  pdfContent = "";
  showPdfContent = false;
  // LocalAI 관련 속성
  isLocalAIAvailable = false;
  isCheckingLocalAI = true;
  selectedTranslationMethod = "gemini";
  // 'gemini' 또는 'localai'
  languages = [
    { value: "english", label: "\uC601\uC5B4" },
    { value: "korean", label: "\uD55C\uAD6D\uC5B4" },
    { value: "japanese", label: "\uC77C\uBCF8\uC5B4" },
    { value: "chinese", label: "\uC911\uAD6D\uC5B4" },
    { value: "spanish", label: "\uC2A4\uD398\uC778\uC5B4" },
    { value: "french", label: "\uD504\uB791\uC2A4\uC5B4" },
    { value: "german", label: "\uB3C5\uC77C\uC5B4" }
  ];
  constructor(geminiTranslationService, localAiTranslationService, snackbarService) {
    this.geminiTranslationService = geminiTranslationService;
    this.localAiTranslationService = localAiTranslationService;
    this.snackbarService = snackbarService;
  }
  ngOnInit() {
    this.checkLocalAIAvailability();
    if (this.pdfTextStreamData) {
      this.extractAndDisplayPdfContent();
    }
  }
  ngOnChanges() {
    if (this.pdfTextStreamData) {
      this.extractAndDisplayPdfContent();
    }
  }
  checkLocalAIAvailability() {
    return __async(this, null, function* () {
      this.isCheckingLocalAI = true;
      try {
        this.isLocalAIAvailable = yield this.localAiTranslationService.checkOllamaAvailability();
        if (this.isLocalAIAvailable) {
        } else {
        }
      } catch (error) {
        this.isLocalAIAvailable = false;
      } finally {
        this.isCheckingLocalAI = false;
      }
    });
  }
  onTranslationMethodChange(method) {
    this.selectedTranslationMethod = method;
  }
  extractAndDisplayPdfContent() {
    const texts = this.extractTextFromPdf();
    this.pdfContent = texts.join("\n").replace(/\n+/g, "\n").trim();
    this.showPdfContent = true;
  }
  onClose() {
    this.close.emit();
  }
  onLanguageChange(language) {
    this.selectedLanguage = language;
  }
  onStartTranslation() {
    return __async(this, null, function* () {
      if (!this.pdfTextStreamData || !this.pdfContent) {
        this.snackbarService.showError("PDF\uB97C \uBA3C\uC800 \uB85C\uB4DC\uD574\uC8FC\uC138\uC694.");
        return;
      }
      this.isTranslating = true;
      this.translationProgress = 0;
      this.translations = [];
      const methodName = this.selectedTranslationMethod === "localai" ? "LocalAI" : "Gemini AI";
      try {
        this.translationProgress = 25;
        if (this.selectedTranslationMethod === "localai") {
          this.localAiTranslationService.translateText(this.pdfContent, this.selectedLanguage).subscribe({
            next: (result) => {
              this.translationProgress = 100;
              const translationResult = {
                originalText: result.originalText,
                translatedText: result.translatedText,
                targetLanguage: result.targetLanguage,
                success: result.success,
                error: result.error
              };
              this.translations = [translationResult];
              if (result.success) {
                this.translationCompleted.emit([translationResult]);
              } else {
                this.snackbarService.showError(`LocalAI \uBC88\uC5ED \uC2E4\uD328: ${result.error}`);
              }
              this.isTranslating = false;
            },
            error: (error) => {
              this.snackbarService.showError(`LocalAI \uBC88\uC5ED \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ${error.error || error.message || "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"}`);
              this.isTranslating = false;
            }
          });
        } else {
          this.geminiTranslationService.translateText(this.pdfContent, this.selectedLanguage).subscribe({
            next: (result) => {
              this.translationProgress = 100;
              this.translations = [result];
              if (result.success) {
                this.translationCompleted.emit([result]);
              } else {
                this.snackbarService.showError(`Gemini \uBC88\uC5ED \uC2E4\uD328: ${result.error}`);
              }
              this.isTranslating = false;
            },
            error: (error) => {
              this.snackbarService.showError(`Gemini \uBC88\uC5ED \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ${error.error || error.message || "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958"}`);
              this.isTranslating = false;
            }
          });
        }
      } catch (error) {
        this.snackbarService.showError("\uBC88\uC5ED\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        this.isTranslating = false;
      }
    });
  }
  extractTextFromPdf() {
    const texts = [];
    if (!this.pdfTextStreamData?.pages) {
      return texts;
    }
    for (let pageIndex = 0; pageIndex < this.pdfTextStreamData.pages.length; pageIndex++) {
      const page = this.pdfTextStreamData.pages[pageIndex];
      if (page.sentences && page.sentences.length > 0) {
        for (let i = 0; i < page.sentences.length; i++) {
          const sentence = page.sentences[i];
          if (sentence.text && sentence.text.trim().length > 0) {
            const sentenceText = sentence.text.trim();
            texts.push(sentenceText);
          }
        }
      } else if (page.textItems && page.textItems.length > 0) {
        const allTextItems = page.textItems.filter((item) => item.text && item.text.trim().length > 0).map((item) => ({
          text: item.text.trim(),
          x: item.position.x,
          y: item.position.y,
          width: item.position.width,
          height: item.position.height
        })).sort((a, b) => {
          const yDiff = b.y - a.y;
          if (Math.abs(yDiff) > 15) {
            return yDiff;
          }
          return a.x - b.x;
        });
        allTextItems.forEach((item, index) => {
          console.log(`${index}: (${item.x.toFixed(1)}, ${item.y.toFixed(1)}) "${item.text}"`);
        });
        const lines = [];
        let currentLine = "";
        let currentY = allTextItems.length > 0 ? allTextItems[0].y : 0;
        let currentX = allTextItems.length > 0 ? allTextItems[0].x : 0;
        for (const item of allTextItems) {
          if (Math.abs(item.y - currentY) > 15) {
            if (currentLine.trim()) {
              lines.push(currentLine.trim());
              console.log(`\uC644\uC131\uB41C \uC904: "${currentLine.trim()}"`);
            }
            currentLine = item.text;
            currentY = item.y;
            currentX = item.x;
          } else {
            const gap = item.x - (currentX + 50);
            if (gap > 20) {
              currentLine += " " + item.text;
            } else {
              currentLine += item.text;
            }
            currentX = item.x;
          }
        }
        if (currentLine.trim()) {
          lines.push(currentLine.trim());
          console.log(`\uB9C8\uC9C0\uB9C9 \uC904: "${currentLine.trim()}"`);
        }
        texts.push(...lines);
      } else {
      }
    }
    texts.forEach((line, index) => {
    });
    return texts;
  }
  onToggleHighlight() {
    this.showHighlight = !this.showHighlight;
  }
  getTranslationPreview() {
    if (this.translations.length === 0) {
      return "\uBC88\uC5ED \uACB0\uACFC\uAC00 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";
    }
    const successfulTranslations = this.translations.filter((t) => t.success);
    if (successfulTranslations.length === 0) {
      return "\uBC88\uC5ED\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.";
    }
    return successfulTranslations.slice(0, 3).map((t) => t.translatedText.substring(0, 50) + (t.translatedText.length > 50 ? "..." : "")).join("\n\n");
  }
  getSuccessfulTranslationCount() {
    return this.translations.filter((t) => t.success).length;
  }
  static \u0275fac = function AiTranslatePanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiTranslatePanelComponent)(\u0275\u0275directiveInject(GeminiTranslationService), \u0275\u0275directiveInject(LocalAiTranslationService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiTranslatePanelComponent, selectors: [["app-ai-translate-panel"]], inputs: { isVisible: "isVisible", pdfTextStreamData: "pdfTextStreamData" }, outputs: { close: "close", translationCompleted: "translationCompleted" }, features: [\u0275\u0275NgOnChangesFeature], decls: 51, vars: 23, consts: [[1, "ai-translate-panel"], [1, "sidebar-header"], ["title", "\uB2EB\uAE30", 1, "close-panel-btn", 3, "click"], [1, "panel-section"], [1, "panel-title"], [1, "subtitle"], [1, "divider"], [1, "translation-method-selector"], [1, "selector-label"], [1, "method-options"], [1, "method-option"], ["type", "radio", "name", "translationMethod", "value", "gemini", 3, "ngModelChange", "change", "ngModel"], [1, "method-label"], ["type", "radio", "name", "translationMethod", "value", "localai", 3, "ngModelChange", "change", "disabled", "ngModel"], ["class", "checking", 4, "ngIf"], ["class", "unavailable", 4, "ngIf"], ["class", "available", 4, "ngIf"], ["class", "method-info", 4, "ngIf"], ["class", "panel-section", 4, "ngIf"], [1, "language-selector"], [1, "language-dropdown", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "translate-start-btn", 3, "click", "disabled"], [4, "ngIf"], ["class", "translation-progress", 4, "ngIf"], [1, "panel-section", "info-section"], [1, "info-text"], [1, "checking"], [1, "unavailable"], [1, "available"], [1, "method-info"], [1, "pdf-content-preview"], [1, "content-stats"], [3, "value"], [1, "translation-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "translation-full-content"], [4, "ngFor", "ngForOf"], [1, "translation-stats"], ["class", "translation-item", 4, "ngIf"], ["class", "translation-error", 4, "ngIf"], [1, "translation-item"], [1, "translation-text"], [1, "translation-error"]], template: function AiTranslatePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AiTranslatePanelComponent_Template_button_click_2_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(3, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275text(6, "AI \uBC88\uC5ED\uD558\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "\uBC88\uC5ED\uD560 \uC5B8\uC5B4\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "hr", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "div", 7)(12, "label", 8);
      \u0275\u0275text(13, "\uBC88\uC5ED \uBC29\uBC95");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10)(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AiTranslatePanelComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTranslationMethod, $event) || (ctx.selectedTranslationMethod = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AiTranslatePanelComponent_Template_input_change_16_listener() {
        return ctx.onTranslationMethodChange("gemini");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275text(18, "Gemini AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "label", 10)(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AiTranslatePanelComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTranslationMethod, $event) || (ctx.selectedTranslationMethod = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AiTranslatePanelComponent_Template_input_change_20_listener() {
        return ctx.onTranslationMethodChange("localai");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 12);
      \u0275\u0275text(22, " LocalAI ");
      \u0275\u0275template(23, AiTranslatePanelComponent_span_23_Template, 2, 0, "span", 14)(24, AiTranslatePanelComponent_span_24_Template, 2, 0, "span", 15)(25, AiTranslatePanelComponent_span_25_Template, 2, 0, "span", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(26, AiTranslatePanelComponent_div_26_Template, 3, 0, "div", 17)(27, AiTranslatePanelComponent_div_27_Template, 3, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, AiTranslatePanelComponent_div_28_Template, 7, 2, "div", 18);
      \u0275\u0275elementStart(29, "div", 3)(30, "div", 19)(31, "label", 8);
      \u0275\u0275text(32, "\uBC88\uC5ED\uD560 \uC5B8\uC5B4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AiTranslatePanelComponent_Template_select_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedLanguage, $event) || (ctx.selectedLanguage = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AiTranslatePanelComponent_Template_select_change_33_listener() {
        return ctx.onLanguageChange(ctx.selectedLanguage);
      });
      \u0275\u0275template(34, AiTranslatePanelComponent_option_34_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 3)(36, "button", 22);
      \u0275\u0275listener("click", function AiTranslatePanelComponent_Template_button_click_36_listener() {
        return ctx.onStartTranslation();
      });
      \u0275\u0275template(37, AiTranslatePanelComponent_span_37_Template, 2, 0, "span", 23)(38, AiTranslatePanelComponent_span_38_Template, 2, 0, "span", 23)(39, AiTranslatePanelComponent_span_39_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, AiTranslatePanelComponent_div_40_Template, 5, 3, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, AiTranslatePanelComponent_div_41_Template, 7, 3, "div", 18);
      \u0275\u0275elementStart(42, "div", 25)(43, "div", 26);
      \u0275\u0275text(44, " AI\uAC00 \uC0DD\uC131\uD55C \uBC88\uC5ED\uC740 \uC644\uB8CC\uB41C \uC758\uBBF8\uC640 ");
      \u0275\u0275element(45, "br");
      \u0275\u0275text(46, " \uB2E4\uB974\uAC8C \uD574\uC11D\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ");
      \u0275\u0275element(47, "br");
      \u0275\u0275text(48, " \uC911\uC694\uD55C \uB0B4\uC6A9\uC740 \uC6D0\uBB38\uACFC \uD568\uAED8 ");
      \u0275\u0275element(49, "br");
      \u0275\u0275text(50, " \uB2E4\uC2DC \uD655\uC778\uD574\uC8FC\uC138\uC694. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "" : "none");
      \u0275\u0275classProp("closed", !ctx.isVisible);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTranslationMethod);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", !ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isLocalAIAvailable);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTranslationMethod);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isCheckingLocalAI);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingLocalAI && !ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCheckingLocalAI && ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTranslationMethod === "localai" && ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLocalAIAvailable && !ctx.isCheckingLocalAI);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPdfContent && ctx.pdfContent);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedLanguage);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.languages);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isTranslating || ctx.selectedTranslationMethod === "localai" && !ctx.isLocalAIAvailable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isTranslating && ctx.selectedTranslationMethod === "gemini");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isTranslating && ctx.selectedTranslationMethod === "localai");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isTranslating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isTranslating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.translations.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: [`@charset "UTF-8";



.ai-translate-panel[_ngcontent-%COMP%] {
  position: fixed;
  top: 130px;
  right: 50px;
  bottom: 0;
  width: 380px;
  background: var(--bg-primary);
  border-left: 1px solid var(--border-color);
  box-shadow: -2px 0 8px var(--shadow);
  padding: 16px;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);
  transform: translateX(0);
  opacity: 1;
}
.ai-translate-panel.closed[_ngcontent-%COMP%] {
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
}
.sidebar-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 8px 16px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
}
.close-panel-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  border-radius: 4px;
  transition: background 0.15s;
}
.close-panel-btn[_ngcontent-%COMP%]:hover {
  background: #f0f0f0;
}
.panel-section[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}
.panel-title[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}
.subtitle[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}
.divider[_ngcontent-%COMP%] {
  border: none;
  border-top: 1px solid #eee;
  margin: 12px 0;
}
.language-selector[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.translation-method-selector[_ngcontent-%COMP%] {
  margin-bottom: 16px;
}
.method-options[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}
.method-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
}
.method-option[_ngcontent-%COMP%]:hover:not(.disabled) {
  border-color: #007AFF;
  background-color: #f8f9ff;
}
.method-option.disabled[_ngcontent-%COMP%] {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #f5f5f5;
}
.method-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {
  margin: 0;
}
.method-label[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 500;
}
.checking[_ngcontent-%COMP%] {
  color: #666;
  font-size: 12px;
}
.unavailable[_ngcontent-%COMP%] {
  color: #ff6b6b;
  font-size: 12px;
}
.available[_ngcontent-%COMP%] {
  color: #28a745;
  font-size: 12px;
}
.method-info[_ngcontent-%COMP%] {
  margin-top: 8px;
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #007AFF;
}
.method-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #666;
  font-size: 12px;
}
.selector-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}
.language-dropdown[_ngcontent-%COMP%] {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: var(--bg-primary);
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.15s;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}
.language-dropdown[_ngcontent-%COMP%]:hover {
  border-color: #007AFF;
  background-color: #f8f9ff;
}
.language-dropdown[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #007AFF;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.translate-start-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 14px;
  background: #007AFF;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}
.translate-start-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #0056b3;
}
.translate-start-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.translation-progress[_ngcontent-%COMP%] {
  margin-top: 16px;
}
.progress-bar[_ngcontent-%COMP%] {
  width: 100%;
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #007AFF,
      #0056b3);
  border-radius: 3px;
  transition: width 0.3s ease;
}
.progress-text[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #666;
  text-align: center;
}
.translation-preview[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.4;
  color: #555;
  max-height: 120px;
  overflow-y: auto;
  white-space: pre-line;
}
.translation-full-content[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 8px;
  max-height: 400px;
  overflow-y: auto;
}
.translation-item[_ngcontent-%COMP%] {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e9ecef;
}
.translation-item[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.translation-text[_ngcontent-%COMP%] {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  word-break: break-word;
}
.translation-error[_ngcontent-%COMP%] {
  color: #dc3545;
  font-size: 13px;
  font-style: italic;
  padding: 8px;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  margin-bottom: 8px;
}
.translation-stats[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #888;
  text-align: center;
  font-weight: 500;
}
.pdf-content-preview[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  max-height: 150px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
.content-stats[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #888;
  text-align: right;
  margin-bottom: 8px;
}
.translate-options[_ngcontent-%COMP%] {
  margin-top: 16px;
}
.option-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
}
.option-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.info-section[_ngcontent-%COMP%] {
  margin-top: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
}
.info-text[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  text-align: center;
}
/*# sourceMappingURL=ai-translate-panel.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiTranslatePanelComponent, [{
    type: Component,
    args: [{ selector: "app-ai-translate-panel", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- AI \uBC88\uC5ED \uD328\uB110 -->
<div class="ai-translate-panel" 
     [class.closed]="!isVisible"
     [style.display]="isVisible ? '' : 'none'">
  <div class="sidebar-header">
    <button class="close-panel-btn" 
            title="\uB2EB\uAE30"
            (click)="onClose()">
      \xD7
    </button>
  </div>
  
  <!-- AI \uBC88\uC5ED \uD5E4\uB354 -->
  <div class="panel-section">
    <div class="panel-title">AI \uBC88\uC5ED\uD558\uAE30</div>
    <div class="subtitle">\uBC88\uC5ED\uD560 \uC5B8\uC5B4\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694</div>
    <hr class="divider">
  </div>

  <!-- \uBC88\uC5ED \uBC29\uBC95 \uC120\uD0DD -->
  <div class="panel-section">
    <div class="translation-method-selector">
      <label class="selector-label">\uBC88\uC5ED \uBC29\uBC95</label>
      <div class="method-options">
        <label class="method-option">
          <input type="radio" 
                 name="translationMethod" 
                 value="gemini"
                 [(ngModel)]="selectedTranslationMethod"
                 (change)="onTranslationMethodChange('gemini')">
          <span class="method-label">Gemini AI</span>
        </label>
        <label class="method-option" 
               [class.disabled]="!isLocalAIAvailable">
          <input type="radio" 
                 name="translationMethod" 
                 value="localai"
                 [disabled]="!isLocalAIAvailable"
                 [(ngModel)]="selectedTranslationMethod"
                 (change)="onTranslationMethodChange('localai')">
          <span class="method-label">
            LocalAI
            <span *ngIf="isCheckingLocalAI" class="checking">(\uD655\uC778 \uC911...)</span>
            <span *ngIf="!isCheckingLocalAI && !isLocalAIAvailable" class="unavailable">(\uC0AC\uC6A9 \uBD88\uAC00)</span>
            <span *ngIf="!isCheckingLocalAI && isLocalAIAvailable" class="available">(gemma3:1b)</span>
          </span>
        </label>
      </div>
      <div class="method-info" *ngIf="selectedTranslationMethod === 'localai' && isLocalAIAvailable">
        <small>\uB85C\uCEEC Ollama\uC758 gemma3:1b \uBAA8\uB378\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</small>
      </div>
      <div class="method-info" *ngIf="!isLocalAIAvailable && !isCheckingLocalAI">
        <small>LocalAI\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 Ollama\uC640 gemma3:1b \uBAA8\uB378\uC744 \uC124\uCE58\uD574\uC8FC\uC138\uC694.</small>
      </div>
    </div>
  </div>

  <!-- PDF \uB0B4\uC6A9 \uD45C\uC2DC -->
  <div class="panel-section" *ngIf="showPdfContent && pdfContent">
    <div class="panel-title">PDF \uBCF8\uBB38 \uB0B4\uC6A9</div>
    <div class="pdf-content-preview">
      {{ pdfContent.length > 500 ? pdfContent.substring(0, 500) + '...' : pdfContent }}
    </div>
    <div class="content-stats">
      \uCD1D \uAE00\uC790 \uC218: {{ pdfContent.length }}
    </div>
  </div>

  <!-- \uC5B8\uC5B4 \uC120\uD0DD -->
  <div class="panel-section">
    <div class="language-selector">
      <label class="selector-label">\uBC88\uC5ED\uD560 \uC5B8\uC5B4</label>
      <select class="language-dropdown" 
              [(ngModel)]="selectedLanguage"
              (change)="onLanguageChange(selectedLanguage)">
        <option *ngFor="let lang of languages" [value]="lang.value">
          {{ lang.label }}
        </option>
      </select>
    </div>
  </div>

  <!-- \uBC88\uC5ED \uC2DC\uC791 \uBC84\uD2BC -->
  <div class="panel-section">
    <button class="translate-start-btn" 
            [disabled]="isTranslating || (selectedTranslationMethod === 'localai' && !isLocalAIAvailable)"
            (click)="onStartTranslation()">
      <span *ngIf="!isTranslating && selectedTranslationMethod === 'gemini'">Gemini AI \uBC88\uC5ED\uD558\uAE30</span>
      <span *ngIf="!isTranslating && selectedTranslationMethod === 'localai'">LocalAI \uBC88\uC5ED\uD558\uAE30</span>
      <span *ngIf="isTranslating">\uBC88\uC5ED \uC911...</span>
    </button>
    
    <!-- \uBC88\uC5ED \uC9C4\uD589\uB960 \uD45C\uC2DC -->
    <div *ngIf="isTranslating" class="translation-progress">
      <div class="progress-bar">
        <div class="progress-fill" [style.width.%]="translationProgress"></div>
      </div>
      <div class="progress-text">\uBC88\uC5ED \uC9C4\uD589 \uC911... {{translationProgress}}%</div>
    </div>
  </div>

  <!-- \uBC88\uC5ED \uACB0\uACFC \uC804\uCCB4 \uD45C\uC2DC -->
  <div class="panel-section" *ngIf="translations.length > 0">
    <div class="panel-title">\uBC88\uC5ED \uACB0\uACFC</div>
    <div class="translation-full-content">
      <div *ngFor="let translation of translations; let i = index">
        <div *ngIf="translation.success" class="translation-item">
          <div class="translation-text">{{ translation.translatedText }}</div>
        </div>
        <div *ngIf="!translation.success" class="translation-error">
          \uBC88\uC5ED \uC2E4\uD328: {{ translation.error }}
        </div>
      </div>
    </div>
    <div class="translation-stats">
      \uC131\uACF5: {{ getSuccessfulTranslationCount() }} / {{ translations.length }}
    </div>
  </div>


  <!-- \uBC88\uC5ED \uC815\uBCF4 -->
  <div class="panel-section info-section">
    <div class="info-text">
      AI\uAC00 \uC0DD\uC131\uD55C \uBC88\uC5ED\uC740 \uC644\uB8CC\uB41C \uC758\uBBF8\uC640 <br>
      \uB2E4\uB974\uAC8C \uD574\uC11D\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <br>
      \uC911\uC694\uD55C \uB0B4\uC6A9\uC740 \uC6D0\uBB38\uACFC \uD568\uAED8 <br>
      \uB2E4\uC2DC \uD655\uC778\uD574\uC8FC\uC138\uC694.
    </div>
  </div>
</div>
`, styles: [`@charset "UTF-8";

/* src/app/modules/ai/components/ai-translate-panel/ai-translate-panel.component.scss */
.ai-translate-panel {
  position: fixed;
  top: 130px;
  right: 50px;
  bottom: 0;
  width: 380px;
  background: var(--bg-primary);
  border-left: 1px solid var(--border-color);
  box-shadow: -2px 0 8px var(--shadow);
  padding: 16px;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);
  transform: translateX(0);
  opacity: 1;
}
.ai-translate-panel.closed {
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
}
.sidebar-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 8px 16px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--border-color);
}
.close-panel-btn {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  border-radius: 4px;
  transition: background 0.15s;
}
.close-panel-btn:hover {
  background: #f0f0f0;
}
.panel-section {
  margin-bottom: 20px;
}
.panel-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}
.subtitle {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}
.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 12px 0;
}
.language-selector {
  margin-bottom: 16px;
}
.translation-method-selector {
  margin-bottom: 16px;
}
.method-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}
.method-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
}
.method-option:hover:not(.disabled) {
  border-color: #007AFF;
  background-color: #f8f9ff;
}
.method-option.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #f5f5f5;
}
.method-option input[type=radio] {
  margin: 0;
}
.method-label {
  font-size: 14px;
  font-weight: 500;
}
.checking {
  color: #666;
  font-size: 12px;
}
.unavailable {
  color: #ff6b6b;
  font-size: 12px;
}
.available {
  color: #28a745;
  font-size: 12px;
}
.method-info {
  margin-top: 8px;
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #007AFF;
}
.method-info small {
  color: #666;
  font-size: 12px;
}
.selector-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}
.language-dropdown {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: var(--bg-primary);
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.15s;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}
.language-dropdown:hover {
  border-color: #007AFF;
  background-color: #f8f9ff;
}
.language-dropdown:focus {
  outline: none;
  border-color: #007AFF;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
.translate-start-btn {
  width: 100%;
  padding: 14px;
  background: #007AFF;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}
.translate-start-btn:hover:not(:disabled) {
  background: #0056b3;
}
.translate-start-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.translation-progress {
  margin-top: 16px;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #007AFF,
      #0056b3);
  border-radius: 3px;
  transition: width 0.3s ease;
}
.progress-text {
  font-size: 12px;
  color: #666;
  text-align: center;
}
.translation-preview {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.4;
  color: #555;
  max-height: 120px;
  overflow-y: auto;
  white-space: pre-line;
}
.translation-full-content {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 8px;
  max-height: 400px;
  overflow-y: auto;
}
.translation-item {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e9ecef;
}
.translation-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.translation-text {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
  word-break: break-word;
}
.translation-error {
  color: #dc3545;
  font-size: 13px;
  font-style: italic;
  padding: 8px;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  margin-bottom: 8px;
}
.translation-stats {
  font-size: 12px;
  color: #888;
  text-align: center;
  font-weight: 500;
}
.pdf-content-preview {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  max-height: 150px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
.content-stats {
  font-size: 11px;
  color: #888;
  text-align: right;
  margin-bottom: 8px;
}
.translate-options {
  margin-top: 16px;
}
.option-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
}
.option-item input[type=checkbox] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.info-section {
  margin-top: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
}
.info-text {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  text-align: center;
}
/*# sourceMappingURL=ai-translate-panel.component.css.map */
`] }]
  }], () => [{ type: GeminiTranslationService }, { type: LocalAiTranslationService }, { type: SnackbarService }], { isVisible: [{
    type: Input
  }], pdfTextStreamData: [{
    type: Input
  }], close: [{
    type: Output
  }], translationCompleted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiTranslatePanelComponent, { className: "AiTranslatePanelComponent", filePath: "src/app/modules/ai/components/ai-translate-panel/ai-translate-panel.component.ts", lineNumber: 25 });
})();

// src/app/modules/ai/components/ai-global-expedition/ai-global-expedition.component.ts
var _c0 = ["logoContainer"];
var _c1 = (a0) => [a0];
function AiGlobalExpeditionComponent_div_118__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 47);
    \u0275\u0275elementEnd();
  }
}
function AiGlobalExpeditionComponent_div_118__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function AiGlobalExpeditionComponent_div_118__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function AiGlobalExpeditionComponent_div_118__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 63);
    \u0275\u0275elementEnd();
  }
}
function AiGlobalExpeditionComponent_div_118_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", feature_r3);
  }
}
function AiGlobalExpeditionComponent_div_118_a_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 195);
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 196);
    \u0275\u0275element(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.services[ctx_r1.selectedService].link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.services[ctx_r1.selectedService].btnText, " ");
  }
}
function AiGlobalExpeditionComponent_div_118_a_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 197);
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 196);
    \u0275\u0275element(3, "path", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r1.services[ctx_r1.selectedService].link));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.services[ctx_r1.selectedService].btnText, " ");
  }
}
function AiGlobalExpeditionComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179)(2, "button", 180);
    \u0275\u0275listener("click", function AiGlobalExpeditionComponent_div_118_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 181);
    \u0275\u0275element(4, "path", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \uB4A4\uB85C ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 183)(7, "div", 184);
    \u0275\u0275elementContainerStart(8, 185);
    \u0275\u0275template(9, AiGlobalExpeditionComponent_div_118__svg_svg_9_Template, 2, 0, "svg", 186)(10, AiGlobalExpeditionComponent_div_118__svg_svg_10_Template, 2, 0, "svg", 186)(11, AiGlobalExpeditionComponent_div_118__svg_svg_11_Template, 2, 0, "svg", 186)(12, AiGlobalExpeditionComponent_div_118__svg_svg_12_Template, 2, 0, "svg", 186);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3", 187);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 188);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 189);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 190);
    \u0275\u0275template(20, AiGlobalExpeditionComponent_div_118_div_20_Template, 2, 1, "div", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AiGlobalExpeditionComponent_div_118_a_21_Template, 4, 2, "a", 192)(22, AiGlobalExpeditionComponent_div_118_a_22_Template, 4, 4, "a", 193);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.services[ctx_r1.selectedService].color);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", ctx_r1.services[ctx_r1.selectedService].icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "rocket");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "building");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "cart");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "school");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.services[ctx_r1.selectedService].title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.services[ctx_r1.selectedService].subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.services[ctx_r1.selectedService].desc);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.services[ctx_r1.selectedService].features);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExternalLink(ctx_r1.services[ctx_r1.selectedService].link));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isExternalLink(ctx_r1.services[ctx_r1.selectedService].link));
  }
}
function AiGlobalExpeditionComponent_a_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 198)(1, "div", 199);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 200);
    \u0275\u0275element(3, "path", 201);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 202);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    \u0275\u0275classProp("active", app_r4.id === "loworld");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, app_r4.link));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", app_r4.iconClass);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", app_r4.svg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.name);
  }
}
function AiGlobalExpeditionComponent_div_130_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 205);
    \u0275\u0275listener("click", function AiGlobalExpeditionComponent_div_130_span_1_Template_span_click_0_listener() {
      const idx_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageDotClick(idx_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const idx_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", idx_r6 === ctx_r1.currentModePage);
  }
}
function AiGlobalExpeditionComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203);
    \u0275\u0275template(1, AiGlobalExpeditionComponent_div_130_span_1_Template, 1, 2, "span", 204);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPaginationArray());
  }
}
function AiGlobalExpeditionComponent__svg_svg_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 206);
    \u0275\u0275element(1, "path", 207);
    \u0275\u0275elementEnd();
  }
}
function AiGlobalExpeditionComponent__svg_svg_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 206);
    \u0275\u0275element(1, "path", 208);
    \u0275\u0275elementEnd();
  }
}
var AiGlobalExpeditionComponent = class _AiGlobalExpeditionComponent {
  themeService;
  router;
  logoContainer;
  intersectionObserver;
  animationId;
  swiper;
  // 다크모드 상태
  isDarkMode = true;
  videoMuted = true;
  // 로고 이미지 배열
  logoImages = [
    "./images/ai/loworld_1.png",
    "./images/ai/loworld_2.png",
    "./images/ai/loworld_3.png"
  ];
  isDetailView = false;
  selectedService = "";
  // 앱 네비게이터 관련
  currentModePage = 0;
  modesPerPage = 6;
  // 스와이프 관련
  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  isDragging = false;
  swipeThreshold = 50;
  minDragDistance = 10;
  // 앱 데이터
  allApps = [
    { id: "loworld", name: "\uD648", iconClass: "blue", link: "/loworld", svg: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "novel", name: "\uC18C\uC124", iconClass: "green", link: "/novel", svg: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "erp", name: "\uC5C5\uBB34", iconClass: "orange", link: "/erp", svg: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "store", name: "\uC2A4\uD1A0\uC5B4", iconClass: "pink", link: "/store", svg: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
    { id: "education", name: "\uAD50\uC721", iconClass: "cyan", link: "/education", svg: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { id: "expedition", name: "\uC6D0\uC815\uB300", iconClass: "teal", link: "/expedition", svg: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
    { id: "project", name: "\uD504\uB85C\uC81D\uD2B8", iconClass: "blue", link: "/project", svg: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
    { id: "slack", name: "\uD611\uC5C5", iconClass: "purple", link: "/slack", svg: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { id: "calendar", name: "\uCE98\uB9B0\uB354", iconClass: "red", link: "/calendar", svg: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { id: "form", name: "\uC124\uBB38", iconClass: "orange", link: "/form", svg: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { id: "community", name: "\uCEE4\uBBA4\uB2C8\uD2F0", iconClass: "blue", link: "/community", svg: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { id: "dashboard", name: "\uB300\uC2DC\uBCF4\uB4DC", iconClass: "teal", link: "/dashboard", svg: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { id: "membership", name: "\uBA64\uBC84\uC2ED", iconClass: "purple", link: "/membership", svg: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { id: "chat-talk", name: "\uCC44\uD305", iconClass: "green", link: "/chat-talk", svg: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
    { id: "desk", name: "\uB370\uC2A4\uD06C", iconClass: "gray", link: "/desk", svg: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { id: "wix", name: "\uC6F9\uBE4C\uB354", iconClass: "blue", link: "/wix", svg: "M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" },
    { id: "dollar-token", name: "\uD1A0\uD070", iconClass: "orange", link: "/dollar-token", svg: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "diary", name: "\uC77C\uAE30", iconClass: "pink", link: "/diary", svg: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "startup-package", name: "\uC2A4\uD0C0\uD2B8\uC5C5", iconClass: "purple", link: "/loworld/startup-package", svg: "M13 10V3L4 14h7v7l9-11h-7z" },
    { id: "homepage-solution", name: "\uC194\uB8E8\uC158", iconClass: "teal", link: "/loworld/homepage-solution", svg: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" }
  ];
  // 서비스 데이터
  services = {
    "starter": {
      icon: "rocket",
      title: "\uC2A4\uD0C0\uD130 \uD328\uD0A4\uC9C0",
      subtitle: "\uC2A4\uD0C0\uD2B8\uC5C5\uC744 \uC704\uD55C \uC62C\uC778\uC6D0 \uC194\uB8E8\uC158",
      desc: "\uC544\uC774\uB514\uC5B4\uB9CC \uC788\uC73C\uBA74 OK! \uAE30\uD68D, \uB514\uC790\uC778, \uAC1C\uBC1C\uAE4C\uC9C0 \uC2A4\uD0C0\uD2B8\uC5C5\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uAC83\uC744 \uC6D4 99\uB9CC\uC6D0\uC5D0 \uC81C\uACF5\uD569\uB2C8\uB2E4.",
      features: ["MVP \uAC1C\uBC1C \uC9C0\uC6D0", "\uB514\uC790\uC778 \uC2DC\uC2A4\uD15C \uAD6C\uCD95", "\uD074\uB77C\uC6B0\uB4DC \uC778\uD504\uB77C \uC138\uD305"],
      link: "/loworld/startup-package",
      btnText: "\uC790\uC138\uD788 \uBCF4\uAE30",
      color: "purple"
    },
    "solution": {
      icon: "building",
      title: "\uB9DE\uCDA4\uD615 \uC194\uB8E8\uC158",
      subtitle: "\uC6F9/\uC571/AI \uD480\uC2A4\uD0DD \uAC1C\uBC1C",
      desc: "\uAE30\uC5C5 \uB9DE\uCDA4\uD615 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C. \uC6F9, \uBAA8\uBC14\uC77C \uC571, AI/ML \uC194\uB8E8\uC158\uAE4C\uC9C0 \uC804\uBB38 \uD300\uC774 \uD568\uAED8\uD569\uB2C8\uB2E4.",
      features: ["\uC694\uAD6C\uC0AC\uD56D \uBD84\uC11D \uBC0F \uC124\uACC4", "\uC560\uC790\uC77C \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4", "\uC720\uC9C0\uBCF4\uC218 \uBC0F \uAE30\uC220 \uC9C0\uC6D0"],
      link: "/loworld/homepage-solution",
      btnText: "\uC0C1\uB2F4 \uC2E0\uCCAD",
      color: "blue"
    },
    "commerce": {
      icon: "cart",
      title: "Loworld \uCEE4\uBA38\uC2A4",
      subtitle: "\uC2A4\uB9C8\uD2B8 \uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC",
      desc: "\uC628\uB77C\uC778 \uC1FC\uD551\uBAB0 \uAD6C\uCD95\uBD80\uD130 \uC6B4\uC601\uAE4C\uC9C0. AI \uAE30\uBC18 \uCD94\uCC9C \uC2DC\uC2A4\uD15C\uACFC \uACB0\uC81C \uC5F0\uB3D9\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.",
      features: ["AI \uC0C1\uD488 \uCD94\uCC9C", "\uAC04\uD3B8 \uACB0\uC81C \uC5F0\uB3D9", "\uC2E4\uC2DC\uAC04 \uC7AC\uACE0 \uAD00\uB9AC"],
      link: "/store/home",
      btnText: "\uC2A4\uD1A0\uC5B4 \uAC00\uAE30",
      color: "orange"
    },
    "expedition": {
      icon: "school",
      title: "AI \uC6D4\uB4DC\uC6D0\uC815\uB300",
      subtitle: "\uAFC8\uC744 \uD604\uC2E4\uB85C \uB9CC\uB4DC\uB294 12\uAC1C\uC6D4 \uC5EC\uC815",
      desc: "AI \uC2DC\uB300, 1\uC778 \uAE00\uB85C\uBC8C IP\uB97C \uB9CC\uB4E4\uC5B4 \uC138\uACC4 \uC2DC\uC7A5\uC5D0 \uB3C4\uC804\uD558\uC138\uC694. \uAE30\uD68D\uBD80\uD130 \uAC1C\uBC1C, \uB9C8\uCF00\uD305\uAE4C\uC9C0 \uC2E4\uBB34 \uC911\uC2EC \uCEE4\uB9AC\uD058\uB7FC\uC73C\uB85C \uD568\uAED8\uD569\uB2C8\uB2E4.",
      features: ["Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC", "\uAE00\uB85C\uBC8C \uCD9C\uC2DC \uBCF4\uC7A5", "1:1 \uBA58\uD1A0\uB9C1", "40\uAC1C \uACB0\uACFC\uBB3C \uC0DD\uC131"],
      link: "/education/home",
      btnText: "1\uAE30 \uC2E0\uCCAD\uD558\uAE30",
      color: "cyan"
    }
  };
  constructor(themeService, router) {
    this.themeService = themeService;
    this.router = router;
    this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
  }
  /**
   * 비디오 음소거 토글
   */
  toggleVideoMute() {
    this.videoMuted = !this.videoMuted;
    const video = document.querySelector(".curriculum-video");
    if (video) {
      video.muted = this.videoMuted;
    }
  }
  /**
   * 교육 페이지로 이동
   */
  navigateToEducation(event) {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigate(["/education/home"]);
  }
  /**
   * 비디오 메타데이터 로드 완료
   */
  onVideoLoaded(event) {
    const video = event.target;
    video.muted = this.videoMuted;
    video.play().catch((err) => {
      console.warn("\uBE44\uB514\uC624 \uC7AC\uC0DD \uC2E4\uD328:", err);
    });
  }
  // 앱 네비게이터 메서드
  getAppsForCurrentPage() {
    const startIndex = this.currentModePage * this.modesPerPage;
    return this.allApps.slice(startIndex, startIndex + this.modesPerPage);
  }
  nextModePage() {
    const totalPages = Math.ceil(this.allApps.length / this.modesPerPage);
    if (this.currentModePage < totalPages - 1) {
      this.currentModePage++;
    }
  }
  prevModePage() {
    if (this.currentModePage > 0) {
      this.currentModePage--;
    }
  }
  getTotalPages() {
    return Math.ceil(this.allApps.length / this.modesPerPage);
  }
  canGoNextPage() {
    return this.currentModePage < this.getTotalPages() - 1;
  }
  canGoPrevPage() {
    return this.currentModePage > 0;
  }
  onPageDotClick(page) {
    this.currentModePage = page;
  }
  getPaginationArray() {
    return Array(this.getTotalPages()).fill(0).map((x, i) => i);
  }
  // 스와이프 이벤트 핸들러
  onTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }
  onTouchMove(event) {
    if (!this.touchStartX)
      return;
    const deltaX = Math.abs(event.touches[0].clientX - this.touchStartX);
    const deltaY = Math.abs(event.touches[0].clientY - this.touchStartY);
    if (!this.isDragging && (deltaX > this.minDragDistance || deltaY > this.minDragDistance)) {
      this.isDragging = true;
    }
    if (this.isDragging) {
      this.touchEndX = event.touches[0].clientX;
    }
  }
  onTouchEnd() {
    if (!this.isDragging) {
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchEndX = 0;
      return;
    }
    this.handleSwipe();
    this.isDragging = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
  }
  onMouseDown(event) {
    this.touchStartX = event.clientX;
    this.touchStartY = event.clientY;
  }
  onMouseMove(event) {
    if (!this.touchStartX)
      return;
    const deltaX = Math.abs(event.clientX - this.touchStartX);
    const deltaY = Math.abs(event.clientY - this.touchStartY);
    if (!this.isDragging && (deltaX > this.minDragDistance || deltaY > this.minDragDistance)) {
      this.isDragging = true;
    }
    if (this.isDragging) {
      this.touchEndX = event.clientX;
    }
  }
  onMouseUp() {
    if (!this.isDragging) {
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchEndX = 0;
      return;
    }
    this.handleSwipe();
    this.isDragging = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
  }
  onMouseLeave() {
    if (this.isDragging) {
      this.isDragging = false;
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchEndX = 0;
    }
  }
  handleSwipe() {
    const swipeDistance = this.touchStartX - this.touchEndX;
    if (swipeDistance < -this.swipeThreshold && this.canGoPrevPage()) {
      this.prevModePage();
    } else if (swipeDistance > this.swipeThreshold && this.canGoNextPage()) {
      this.nextModePage();
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
  }
  ngOnInit() {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    this.initScrollAnimations();
    this.initGoogleAnalytics();
  }
  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
  openDetail(serviceKey) {
    this.selectedService = serviceKey;
    this.isDetailView = true;
  }
  closeDetail() {
    this.isDetailView = false;
    this.selectedService = "";
  }
  isExternalLink(link) {
    return link.startsWith("http");
  }
  ngAfterViewInit() {
    this.initSwiper();
    this.showAllContentImmediately();
    this.initVideoAutoplay();
  }
  initVideoAutoplay() {
    setTimeout(() => {
      const video = document.querySelector(".curriculum-video");
      if (video) {
        video.muted = this.videoMuted;
        video.play().catch((err) => {
          console.warn("\uBE44\uB514\uC624 \uC790\uB3D9 \uC7AC\uC0DD \uC2E4\uD328:", err);
        });
      }
    }, 100);
  }
  showAllContentImmediately() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
      el.classList.add("visible");
    });
  }
  initSwiper() {
    setTimeout(() => {
      this.swiper = new Swiper(".swiper-container", {
        modules: [EffectCube, Autoplay, Pagination],
        effect: "cube",
        grabCursor: true,
        loop: true,
        speed: 1e3,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }, 100);
  }
  initScrollAnimations() {
  }
  initGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag2(...args) {
      window.dataLayer.push(arguments);
    }
    gtag2("js", /* @__PURE__ */ new Date());
    gtag2("config", "G-6PVTZ4M4P2");
    ((w, d, s, l, i) => {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": (/* @__PURE__ */ new Date()).getTime(), event: "gtm.js" });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-MPGBKQ35");
  }
  onSmoothScroll(event, targetId) {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  onContactFormClick() {
    if (typeof gtag !== "undefined") {
      gtag("event", "contact_form_click", {
        event_category: "engagement",
        event_label: "ai_global_expedition_contact",
        value: 1
      });
    }
    const contactSection = document.querySelector(".contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  onServiceLinkClick(serviceName) {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "click", {
        event_category: "engagement",
        event_label: `service_link_${serviceName}`
      });
    }
  }
  static \u0275fac = function AiGlobalExpeditionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiGlobalExpeditionComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiGlobalExpeditionComponent, selectors: [["app-ai-global-expedition"]], viewQuery: function AiGlobalExpeditionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.logoContainer = _t.first);
    }
  }, standalone: false, decls: 557, vars: 10, consts: [[1, "homepage-viewport"], [1, "homepage-gradient-background"], [1, "cloudos-toolbar"], [1, "icloud-logo"], ["routerLink", "/loworld", 1, "logo-link"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "logo-icon"], ["d", "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"], [1, "logo-text"], [1, "action-buttons"], ["routerLink", "/education/home", 1, "toolbar-button", "primary"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "18", "height", "18"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], [1, "toolbar-button", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "22", "height", "22"], ["d", "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"], [1, "homepage-scrollview"], [1, "homepage-content"], [1, "home-page"], [1, "tile-grid"], [1, "tile-container", "tile-small", "fade-in"], [1, "tile", "profile-tile"], [1, "profile-avatar"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "cloud-bg"], [1, "avatar-icon"], ["viewBox", "0 0 64 64", "fill", "currentColor"], ["d", "M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 40c-7.732 0-14.29-4.924-16.734-11.803C18.336 36.855 24.89 34 32 34s13.664 2.855 16.734 6.197C46.29 47.076 39.732 52 32 52z"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "plan-badge"], [1, "tile-border"], [1, "tile-container", "tile-large", "fade-in"], [1, "tile", "services-tile"], [1, "tile-banner"], [1, "banner-link"], [1, "app-icon-wrapper"], [1, "app-icon", "software-dev"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], [1, "banner-text"], [1, "tile-heading"], [1, "tile-description"], [1, "tile-content", "tile-slider"], [1, "tile-pane", "service-list-pane"], [1, "service-list"], [1, "service-row", 2, "cursor", "pointer", 3, "click"], [1, "service-icon", "purple"], ["d", "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"], [1, "service-info"], [1, "service-name"], [1, "service-meta"], [1, "meta-text"], [1, "meta-price"], [1, "chevron"], ["d", "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"], [1, "service-icon", "blue"], ["d", "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"], [1, "service-icon", "orange"], ["d", "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1z"], [1, "meta-price", "live"], [1, "service-row", "featured", 2, "cursor", "pointer", 3, "click"], [1, "featured-badge", 3, "click"], [1, "service-icon", "cyan"], ["d", "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"], [1, "meta-price", "discount"], [2, "font-weight", "800", "margin-right", "2px"], ["class", "tile-pane detail-pane", 4, "ngIf"], ["id", "apps", 1, "tile-container", "tile-full", "fade-in"], [1, "tile", "app-library-wide"], [1, "app-navigator-header"], [1, "title"], [1, "badge"], [1, "app-navigator-container", 3, "touchstart", "touchmove", "touchend", "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "app-icon-grid-paginated"], ["class", "app-link", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["class", "pagination-dots", 4, "ngIf"], ["id", "curriculum", 1, "curriculum-section", "fade-in"], [1, "curriculum-video-background"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", 1, "curriculum-video", 3, "loadedmetadata"], ["src", "/movies/loworld_world.mp4", "type", "video/mp4"], [1, "curriculum-video-overlay"], [1, "curriculum-mute-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "24", "height", "24", 4, "ngIf"], [1, "curriculum-header"], [1, "curriculum-icon"], [1, "curriculum-title-wrapper"], [1, "curriculum-title"], [1, "curriculum-subtitle"], [1, "curriculum-badge", 2, "cursor", "pointer", 3, "click"], [1, "hero-story"], [1, "story-quote"], [1, "quote-icon"], [1, "quote-context"], [1, "story-message"], [1, "why-now-section"], [1, "section-header"], [1, "section-icon"], [1, "highlight"], [1, "why-now-grid"], [1, "why-card"], [1, "why-icon"], [1, "core-values-section"], [1, "values-grid"], [1, "value-card", "featured"], [1, "value-badge"], [1, "value-icon"], [1, "value-card"], [1, "operation-section"], [1, "operation-grid"], [1, "operation-card"], [1, "op-icon", "green"], [1, "op-content"], [1, "op-tag"], [1, "op-icon", "blue"], [1, "op-icon", "purple"], [1, "op-icon", "orange"], [1, "provide-section"], [1, "provide-grid"], [1, "provide-item"], [1, "provide-icon"], [1, "target-section"], [1, "target-grid"], [1, "target-card"], [1, "target-emoji"], [1, "vision-section"], [1, "vision-content"], [1, "vision-icon"], [1, "vision-main"], [1, "vision-sub"], [1, "curriculum-divider"], [1, "curriculum-intro"], [1, "intro-card"], [1, "intro-icon", "dream"], [1, "intro-stats"], [1, "intro-stat"], [1, "stat-value"], [1, "stat-desc"], [1, "intro-stat", "highlight-stat"], [1, "curriculum-phase"], [1, "phase-header"], [1, "phase-badge", "development"], [1, "phase-title"], [1, "phase-desc"], [1, "weekly-structure"], [1, "structure-title"], [1, "week-items"], [1, "week-item"], [1, "week-icon", "lecture"], [1, "week-content"], [1, "week-label"], [1, "week-desc"], [1, "week-arrow"], [1, "week-icon", "survey"], [1, "week-icon", "result"], [2, "text-align", "center", "margin-top", "20px", "color", "#666", "font-size", "14px"], [1, "curriculum-phase", "launch-phase"], [1, "phase-badge", "launch"], [1, "launch-grid"], [1, "launch-card"], [1, "launch-icon"], [1, "curriculum-cta"], [1, "cta-content"], [1, "cta-price"], [1, "original-price"], [1, "discount-price"], [1, "discount-badge"], [2, "font-size", "13px", "color", "rgba(255,255,255,0.7)", "margin-top", "8px", "line-height", "1.4"], ["routerLink", "/education/home", "target", "_blank", 1, "cta-button"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "20", "height", "20"], [1, "customize-section", "fade-in"], ["routerLink", "/education/home", 1, "customize-button"], ["d", "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"], [1, "legal-footer"], [1, "footer-content"], [1, "footer-links"], ["href", "#", 1, "footer-link"], [1, "separator"], [1, "copyright"], [1, "tile-pane", "detail-pane"], [1, "detail-header"], [1, "back-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "currentColor"], ["d", "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"], [1, "detail-content"], [1, "detail-icon", 3, "ngClass"], [3, "ngSwitch"], ["viewBox", "0 0 24 24", "fill", "currentColor", 4, "ngSwitchCase"], [1, "detail-title"], [1, "detail-subtitle"], [1, "detail-desc"], [1, "detail-features"], ["class", "feature-item", 4, "ngFor", "ngForOf"], ["target", "_blank", "class", "apply-btn", 3, "href", 4, "ngIf"], ["class", "apply-btn", 3, "routerLink", 4, "ngIf"], [1, "feature-item"], ["target", "_blank", 1, "apply-btn", 3, "href"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "fill", "currentColor"], [1, "apply-btn", 3, "routerLink"], [1, "app-link", 3, "routerLink"], [1, "app-icon", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "app-name"], [1, "pagination-dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "24", "height", "24"], ["d", "M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.99 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01492537 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99721575 L3.03521743,10.4382088 C3.03521743,10.5953061 3.34915502,10.7524035 3.50612381,10.7524035 L16.6915026,11.5378905 C16.6915026,11.5378905 17.1624089,11.5378905 17.1624089,12.0091827 C17.1624089,12.4804748 16.6915026,12.4744748 16.6915026,12.4744748 Z"], ["d", "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"]], template: function AiGlobalExpeditionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "header", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "Loworld");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 8)(10, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "button", 12);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_button_click_13_listener($event) {
        return ctx.onSmoothScroll($event, "#apps");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 13);
      \u0275\u0275element(15, "path", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "main", 17)(19, "div", 18)(20, "div", 19)(21, "article", 20)(22, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 22);
      \u0275\u0275element(24, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 24);
      \u0275\u0275element(27, "path", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div", 26)(29, "div", 27);
      \u0275\u0275text(30, "Loworld");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 28);
      \u0275\u0275text(32, "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC804\uBB38 \uAE30\uC5C5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 29);
      \u0275\u0275text(34, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 31)(37, "article", 32)(38, "div", 33)(39, "div", 34)(40, "div", 35)(41, "div", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 37);
      \u0275\u0275element(43, "path", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "div", 39)(45, "div", 40);
      \u0275\u0275text(46, "Loworld \uC11C\uBE44\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 41);
      \u0275\u0275text(48, "\uC2A4\uD0C0\uD2B8\uC5C5\uBD80\uD130 \uC5D4\uD130\uD504\uB77C\uC774\uC988\uAE4C\uC9C0");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 42)(50, "div", 43)(51, "div", 44)(52, "a", 45);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_a_click_52_listener() {
        return ctx.openDetail("starter");
      });
      \u0275\u0275elementStart(53, "div", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 37);
      \u0275\u0275element(55, "path", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "div", 48)(57, "div", 49);
      \u0275\u0275text(58, "\uC2A4\uD0C0\uD130 \uD328\uD0A4\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 50)(60, "span", 51);
      \u0275\u0275text(61, "\uC2A4\uD0C0\uD2B8\uC5C5\uC744 \uC704\uD55C \uC62C\uC778\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 52);
      \u0275\u0275text(63, "\uC6D4 99\uB9CC\uC6D0~");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(65, "svg", 37);
      \u0275\u0275element(66, "path", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "a", 45);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_a_click_67_listener() {
        return ctx.openDetail("solution");
      });
      \u0275\u0275elementStart(68, "div", 55);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 37);
      \u0275\u0275element(70, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(71, "div", 48)(72, "div", 49);
      \u0275\u0275text(73, "\uB9DE\uCDA4\uD615 \uC194\uB8E8\uC158");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 50)(75, "span", 51);
      \u0275\u0275text(76, "\uC6F9/\uC571/AI \uD480\uC2A4\uD0DD \uAC1C\uBC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 52);
      \u0275\u0275text(78, "300\uB9CC\uC6D0~");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 37);
      \u0275\u0275element(81, "path", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "a", 45);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_a_click_82_listener() {
        return ctx.openDetail("commerce");
      });
      \u0275\u0275elementStart(83, "div", 57);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 37);
      \u0275\u0275element(85, "path", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(86, "div", 48)(87, "div", 49);
      \u0275\u0275text(88, "Loworld \uCEE4\uBA38\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 50)(90, "span", 51);
      \u0275\u0275text(91, "\uC2A4\uB9C8\uD2B8 \uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 59);
      \u0275\u0275text(93, "Now Live");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(95, "svg", 37);
      \u0275\u0275element(96, "path", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(97, "a", 60);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_a_click_97_listener() {
        return ctx.openDetail("expedition");
      });
      \u0275\u0275elementStart(98, "span", 61);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_span_click_98_listener($event) {
        return ctx.navigateToEducation($event);
      });
      \u0275\u0275text(99, "1\uAE30 \uBAA8\uC9D1\uC911");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 62);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(101, "svg", 37);
      \u0275\u0275element(102, "path", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(103, "div", 48)(104, "div", 49);
      \u0275\u0275text(105, "AI\uC640 \uAE00\uB85C\uBC8C \uC6D0\uC815\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 50)(107, "span", 51);
      \u0275\u0275text(108, "12\uAC1C\uC6D4 \uC2E4\uBB34 \uD504\uB85C\uADF8\uB7A8 (40\uAC1C \uACB0\uACFC\uBB3C)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "span", 64)(110, "span", 65);
      \u0275\u0275text(111, "70%\u2193");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "del");
      \u0275\u0275text(113, "2,000\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(114, " \uC6D4 50\uB9CC\uC6D0 (\uAD50\uC721 \uBB34\uB8CC) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(116, "svg", 37);
      \u0275\u0275element(117, "path", 54);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(118, AiGlobalExpeditionComponent_div_118_Template, 23, 12, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(119, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 67)(121, "article", 68)(122, "div", 69)(123, "span", 70);
      \u0275\u0275text(124, "\uBAA8\uB4DC\uC804\uD658");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span", 71);
      \u0275\u0275text(126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 72);
      \u0275\u0275listener("touchstart", function AiGlobalExpeditionComponent_Template_div_touchstart_127_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function AiGlobalExpeditionComponent_Template_div_touchmove_127_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function AiGlobalExpeditionComponent_Template_div_touchend_127_listener() {
        return ctx.onTouchEnd();
      })("mousedown", function AiGlobalExpeditionComponent_Template_div_mousedown_127_listener($event) {
        return ctx.onMouseDown($event);
      })("mousemove", function AiGlobalExpeditionComponent_Template_div_mousemove_127_listener($event) {
        return ctx.onMouseMove($event);
      })("mouseup", function AiGlobalExpeditionComponent_Template_div_mouseup_127_listener() {
        return ctx.onMouseUp();
      })("mouseleave", function AiGlobalExpeditionComponent_Template_div_mouseleave_127_listener() {
        return ctx.onMouseLeave();
      });
      \u0275\u0275elementStart(128, "div", 73);
      \u0275\u0275template(129, AiGlobalExpeditionComponent_a_129_Template, 6, 8, "a", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275template(130, AiGlobalExpeditionComponent_div_130_Template, 2, 1, "div", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275element(131, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "section", 76)(133, "div", 77)(134, "video", 78);
      \u0275\u0275listener("loadedmetadata", function AiGlobalExpeditionComponent_Template_video_loadedmetadata_134_listener($event) {
        return ctx.onVideoLoaded($event);
      });
      \u0275\u0275element(135, "source", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275element(136, "div", 80);
      \u0275\u0275elementStart(137, "button", 81);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_button_click_137_listener() {
        return ctx.toggleVideoMute();
      });
      \u0275\u0275template(138, AiGlobalExpeditionComponent__svg_svg_138_Template, 2, 0, "svg", 82)(139, AiGlobalExpeditionComponent__svg_svg_139_Template, 2, 0, "svg", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 83)(141, "div", 84);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(142, "svg", 37);
      \u0275\u0275element(143, "path", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(144, "div", 85)(145, "h2", 86);
      \u0275\u0275text(146, "AI \uC6D4\uB4DC\uC6D0\uC815\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 87);
      \u0275\u0275text(148, "\uAFC8\uC744 \uD604\uC2E4\uB85C \uB9CC\uB4DC\uB294 12\uAC1C\uC6D4 \uC5EC\uC815");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "span", 88);
      \u0275\u0275listener("click", function AiGlobalExpeditionComponent_Template_span_click_149_listener($event) {
        return ctx.navigateToEducation($event);
      });
      \u0275\u0275text(150, "1\uAE30 \uBAA8\uC9D1\uC911");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 89)(152, "div", 90)(153, "div", 91);
      \u0275\u0275text(154, '"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "blockquote");
      \u0275\u0275text(156, ' "10\uB144 \uB4A4\uC5D0 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uAE30 \uC704\uD574 \uB0B4\uB144 \uD55C \uD574\uB97C \uC624\uB86F\uC774 \uC790\uC2E0\uC758 \uBAA9\uD45C\uC5D0 \uC62C\uC778\uD558\uACA0\uC2B5\uB2C8\uB2E4" ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "p", 92);
      \u0275\u0275text(158, " \uC548\uC815\uC801\uC778 CTO \uC81C\uC548\uC744 \uAC70\uC808\uD558\uACE0 \uAFC8\uC744 \uC120\uD0DD\uD55C \uD55C \uAC1C\uBC1C\uC790\uC758 \uBA54\uC2DC\uC9C0\uAC00");
      \u0275\u0275element(159, "br");
      \u0275\u0275text(160, " AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 \uC2DC\uC791\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 93)(162, "p");
      \u0275\u0275text(163, "\uB204\uAD70\uAC00\uC758 ");
      \u0275\u0275elementStart(164, "strong");
      \u0275\u0275text(165, "\uC778\uC0DD\uC774 \uAC78\uB9B0 \uC120\uD0DD");
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "\uC744 \uD568\uAED8\uD558\uAE30\uC5D0, \uD750\uC9C0\uBD80\uC9C0\uD558\uAC8C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      \u0275\u0275element(167, "br");
      \u0275\u0275text(168, " \uC774\uAC83\uC740 \uB2E8\uC21C\uD55C \uAD50\uC721\uC774 \uC544\uB2CC, ");
      \u0275\u0275elementStart(169, "strong");
      \u0275\u0275text(170, "\uAFC8\uC744 \uC2E4\uD604\uD558\uB294 \uC5EC\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, "\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "div", 94)(173, "div", 95)(174, "span", 96);
      \u0275\u0275text(175, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "h3");
      \u0275\u0275text(177, "\uC65C \uC9C0\uAE08\uC778\uAC00? ");
      \u0275\u0275elementStart(178, "span", 97);
      \u0275\u0275text(179, "\uAE00\uB85C\uBC8C IP \uC120\uC810\uC758 \uC2DC\uB300");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 98)(181, "div", 99)(182, "div", 100);
      \u0275\u0275text(183, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "h4");
      \u0275\u0275text(185, "AI \uD601\uBA85\uC758 \uC2DC\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "p");
      \u0275\u0275text(187, "\uC0B0\uC5C5\uD601\uBA85, \uC778\uD130\uB137 \uD601\uBA85\uC5D0 \uC774\uC740 ");
      \u0275\u0275elementStart(188, "strong");
      \u0275\u0275text(189, "AI \uD601\uBA85");
      \u0275\u0275elementEnd();
      \u0275\u0275text(190, "\uC740 \uC5C4\uCCAD\uB09C \uD63C\uB780\uC778 \uB3D9\uC2DC\uC5D0 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uAE30\uD68D, \uB514\uC790\uC778, \uAC1C\uBC1C, \uB9C8\uCF00\uD305\uC744 \uD63C\uC790 \uB2E4 \uD560 \uC218 \uC788\uB294 \uC2DC\uB300\uAC00 \uC5F4\uB838\uC2B5\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 99)(192, "div", 100);
      \u0275\u0275text(193, "\u{1F30D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "h4");
      \u0275\u0275text(195, "1\uC778 \uAE00\uB85C\uBC8C \uC2DC\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "p");
      \u0275\u0275text(197, "\uACFC\uAC70 100\uBA85\uC774 \uD558\uB358 \uC77C\uC744 \uC774\uC81C \uD63C\uC790\uC11C\uB3C4 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC790\uC2E0\uC758 ");
      \u0275\u0275elementStart(198, "strong");
      \u0275\u0275text(199, "IP(\uC9C0\uC2DD\uC7AC\uC0B0\uAD8C)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(200, "\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uCD9C\uC2DC\uD558\uC138\uC694.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 99)(202, "div", 100);
      \u0275\u0275text(203, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "h4");
      \u0275\u0275text(205, "\uC11C\uBD80 \uAC1C\uCC99 \uC2DC\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "p");
      \u0275\u0275text(207, "AI \uC5B8\uC5B4 \uB2A5\uB825\uC744 \uD65C\uC6A9\uD574 \uC778\uB3C4, \uC911\uAD6D, \uC544\uD504\uB9AC\uCE74 \uB4F1 ");
      \u0275\u0275elementStart(208, "strong");
      \u0275\u0275text(209, "\uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC758 \uCCAB \uBC88\uC9F8 \uD3EC\uC9C0\uC154\uB2DD");
      \u0275\u0275elementEnd();
      \u0275\u0275text(210, "\uC744 \uC120\uC810\uD574\uC57C \uD558\uB294 \uC2DC\uB300\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(211, "div", 101)(212, "div", 95)(213, "span", 96);
      \u0275\u0275text(214, "\u{1F48E}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "h3");
      \u0275\u0275text(216, "AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 ");
      \u0275\u0275elementStart(217, "span", 97);
      \u0275\u0275text(218, "\uD575\uC2EC \uAC00\uCE58");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(219, "div", 102)(220, "div", 103)(221, "div", 104);
      \u0275\u0275text(222, "\uD575\uC2EC \uCCA0\uD559");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 105);
      \u0275\u0275text(224, "\u2764\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "h4");
      \u0275\u0275text(226, "\uC0AC\uB791\uACFC \uC774\uD0C0\uC801 \uD0DC\uB3C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p");
      \u0275\u0275text(228, "\uC774\uAE30\uC801\uC778 \uC774\uB4DD\uBCF4\uB2E4 ");
      \u0275\u0275elementStart(229, "strong");
      \u0275\u0275text(230, "\uB0A8\uC744 \uB3D5\uB294 \uB9C8\uC74C");
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "\uC744 \uAC00\uC9C8 \uB54C \uC0B6\uC758 \uC120\uC21C\uD658\uC774 \uC77C\uC5B4\uB0A9\uB2C8\uB2E4. \uAE30\uC220\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uBCF4\uC774\uC9C0 \uC54A\uB294 \uAC00\uCE58\uC640 \uC8FC\uCCB4\uC801\uC778 \uC0B6\uC758 \uD0DC\uB3C4\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "div", 106)(233, "div", 105);
      \u0275\u0275text(234, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "h4");
      \u0275\u0275text(236, "\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "p");
      \u0275\u0275text(238, "'\uC62C\uC778'\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 ");
      \u0275\u0275elementStart(239, "strong");
      \u0275\u0275text(240, "\uC2EC\uB9AC\uAC00 \uBB34\uB108\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(241, "\uC785\uB2C8\uB2E4. \uC2E4\uD328\uD574\uB3C4 \uAD1C\uCC2E\uC740 \uC5B4\uB824\uC6B4 \uB3C4\uC804\uC744 \uC990\uAE30\uB294 \uD0DC\uB3C4\uAC00 \uB354 \uD070 \uC131\uC7A5\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "div", 106)(243, "div", 105);
      \u0275\u0275text(244, "\u{1F3AE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "h4");
      \u0275\u0275text(246, "\uD3C9\uC0DD\uC758 \uAE30\uC220\uB825");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "p");
      \u0275\u0275text(248, "\uAC8C\uC784(\uD0B9\uC624\uD30C 94, 95...)\uCC98\uB7FC ");
      \u0275\u0275elementStart(249, "strong");
      \u0275\u0275text(250, "\uB9E4\uB144 \uC81C\uD488\uC744 \uBC1C\uC804");
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, "\uC2DC\uCF1C \uB098\uAC00\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 \uD3C9\uC0DD \uD560 \uC77C\uACFC \uAE30\uC220\uB825\uC744 \uC5BB\uAC8C \uB429\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(252, "div", 107)(253, "div", 95)(254, "span", 96);
      \u0275\u0275text(255, "\u2728");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "h3");
      \u0275\u0275text(257, "\uCC28\uBCC4\uD654\uB41C ");
      \u0275\u0275elementStart(258, "span", 97);
      \u0275\u0275text(259, "\uC6B4\uC601 \uBC29\uC2DD");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "div", 108)(261, "div", 109)(262, "div", 110);
      \u0275\u0275text(263, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 111)(265, "h4");
      \u0275\u0275text(266, "\uD6C4\uBD88\uC81C \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "p");
      \u0275\u0275text(268, "\uD55C \uB2EC \uCC38\uC5EC \uD6C4 \uB9CC\uC871\uD558\uBA74 \uB2E4\uC74C \uB2EC \uBE44\uC6A9 \uC9C0\uBD88 (Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "span", 112);
      \u0275\u0275text(270, "\uACF5\uAE09\uC790\uC758 \uC790\uC2E0\uAC10");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "div", 109)(272, "div", 113);
      \u0275\u0275text(273, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 111)(275, "h4");
      \u0275\u0275text(276, "\uAE00\uB85C\uBC8C \uCD9C\uC2DC \uBCF4\uC7A5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "p");
      \u0275\u0275text(278, "\uBC14\uBE60\uC11C \uC644\uC131 \uBABB \uD574\uB3C4 \uB300\uD45C\uB2D8\uC774 \uC9C1\uC811 \uAC00\uC774\uB4DC\uD558\uC5EC ");
      \u0275\u0275elementStart(279, "strong");
      \u0275\u0275text(280, "\uBB34\uC870\uAC74 \uAE00\uB85C\uBC8C \uCD9C\uC2DC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "span", 112);
      \u0275\u0275text(282, "\uAC15\uB825\uD55C \uD3EC\uD2B8\uD3F4\uB9AC\uC624");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(283, "div", 109)(284, "div", 114);
      \u0275\u0275text(285, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "div", 111)(287, "h4");
      \u0275\u0275text(288, "\uC218\uC775 \uBAA9\uC801 \uC544\uB2D8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "p");
      \u0275\u0275text(290, "\uAFC8\uC744 \uB098\uB204\uACE0 \uD568\uAED8 \uC131\uC7A5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC5BB\uB294 \uBCF4\uB78C\uC744 \uC704\uD574 \uCD94\uC9C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "span", 112);
      \u0275\u0275text(292, "\uC9C4\uC815\uC131 \uC788\uB294 \uB3D9\uD589");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(293, "div", 109)(294, "div", 115);
      \u0275\u0275text(295, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "div", 111)(297, "h4");
      \u0275\u0275text(298, "\uC218\uC775 \uBC30\uBD84");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "p");
      \u0275\u0275text(300, "\uB85C\uC6D4\uB4DC \uD50C\uB7AB\uD3FC\uC744 \uD1B5\uD574 \uC218\uC775 \uBC30\uBD84 (\uC81C\uC791\uC790 80% : \uD50C\uB7AB\uD3FC 20%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "span", 112);
      \u0275\u0275text(302, "\uC0C1\uC0DD \uAD6C\uC870");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(303, "div", 116)(304, "div", 95)(305, "span", 96);
      \u0275\u0275text(306, "\u{1F6E0}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "h3");
      \u0275\u0275text(308, "AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uAC00 ");
      \u0275\u0275elementStart(309, "span", 97);
      \u0275\u0275text(310, "\uC81C\uACF5\uD558\uB294 \uAC83");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(311, "div", 117)(312, "div", 118)(313, "span", 119);
      \u0275\u0275text(314, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "span");
      \u0275\u0275text(316, "AI \uC5D0\uC774\uC804\uD2B8 & \uBC14\uC774\uBE0C \uCF54\uB529 \uAE30\uC220 \uC804\uC218");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(317, "div", 118)(318, "span", 119);
      \u0275\u0275text(319, "\u{1F4F1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "span");
      \u0275\u0275text(321, "iOS, Android, Web \uD1B5\uD569 Loworld AI Engine");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 118)(323, "span", 119);
      \u0275\u0275text(324, "\u{1F4E2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "span");
      \u0275\u0275text(326, "\uAE00\uB85C\uBC8C \uB9C8\uCF00\uD305 & SNS \uCF58\uD150\uCE20 \uC790\uB3D9\uD654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div", 118)(328, "span", 119);
      \u0275\u0275text(329, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "span");
      \u0275\u0275text(331, "\uAE00\uB85C\uBC8C \uACB0\uC81C(PayPal \uB4F1) & \uBC95\uC778 \uD5C8\uB4E4 \uD574\uACB0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 118)(333, "span", 119);
      \u0275\u0275text(334, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "span");
      \u0275\u0275text(336, "\uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0 (\uC601\uC5B4, \uC77C\uBCF8\uC5B4, \uC911\uAD6D\uC5B4)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "div", 118)(338, "span", 119);
      \u0275\u0275text(339, "\u2601\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "span");
      \u0275\u0275text(341, "AWS/GCP \uD074\uB77C\uC6B0\uB4DC \uC778\uD504\uB77C \uAD6C\uCD95");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(342, "div", 120)(343, "div", 95)(344, "span", 96);
      \u0275\u0275text(345, "\u{1F465}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "h3");
      \u0275\u0275text(347, "\uC774\uB7F0 \uBD84\uB4E4\uC744 ");
      \u0275\u0275elementStart(348, "span", 97);
      \u0275\u0275text(349, "\uAE30\uB2E4\uB9BD\uB2C8\uB2E4");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(350, "div", 121)(351, "div", 122)(352, "div", 123);
      \u0275\u0275text(353, "\u{1F468}\u200D\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "h4");
      \u0275\u0275text(355, "\uCDE8\uC5C5\uC774 \uC5B4\uB824\uC6B4 \uCCAD\uB144");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "p");
      \u0275\u0275text(357, "\uC2A4\uD399 \uC313\uAE30 \uB300\uC2E0 ");
      \u0275\u0275elementStart(358, "strong");
      \u0275\u0275text(359, "\uC9C4\uC9DC \uD3EC\uD2B8\uD3F4\uB9AC\uC624");
      \u0275\u0275elementEnd();
      \u0275\u0275text(360, "\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC0AC\uC5C5\uAC00\uB85C \uC131\uC7A5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 122)(362, "div", 123);
      \u0275\u0275text(363, "\u{1F468}\u200D\u{1F4BC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "h4");
      \u0275\u0275text(365, "\uC740\uD1F4\uD55C 50\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "p");
      \u0275\u0275text(367, "\uACBD\uD5D8\uACFC \uC9C0\uD61C\uC5D0 AI\uB97C \uB354\uD574 ");
      \u0275\u0275elementStart(368, "strong");
      \u0275\u0275text(369, "\uC0C8\uB85C\uC6B4 \uC0DD\uC0B0\uC790");
      \u0275\u0275elementEnd();
      \u0275\u0275text(370, "\uB85C\uC11C\uC758 \uAE38\uC744 \uAC1C\uCC99");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div", 122)(372, "div", 123);
      \u0275\u0275text(373, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "h4");
      \u0275\u0275text(375, "\uAFC8\uC744 \uAC00\uC9C4 \uB204\uAD6C\uB098");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "p");
      \u0275\u0275text(377, "10\uB144 \uB4A4 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uC744 ");
      \u0275\u0275elementStart(378, "strong");
      \u0275\u0275text(379, "\uC778\uC0DD\uC744 \uAC74 \uB3C4\uC804");
      \u0275\u0275elementEnd();
      \u0275\u0275text(380, "\uC744 \uD558\uACE0 \uC2F6\uC740 \uBD84");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(381, "div", 124)(382, "div", 125)(383, "div", 126);
      \u0275\u0275text(384, "\u{1F31F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "h3");
      \u0275\u0275text(386, "\uC6B0\uB9AC\uC758 \uBE44\uC804");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "p", 127);
      \u0275\u0275text(388, " \uC138\uC0C1\uC740 \uD798\uB4E4\uACE0 \uC9C1\uC7A5 \uC0DD\uD65C\uC740 \uACE0\uB418\uC9C0\uB9CC,");
      \u0275\u0275element(389, "br");
      \u0275\u0275elementStart(390, "strong");
      \u0275\u0275text(391, "\uC790\uAE30 \uB2A5\uB825\uC73C\uB85C \uBB34\uC5B8\uAC00\uB97C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uACFC\uC815\uC740 \uB9E4\uC6B0 \uC990\uAC70\uC6B4 \uC77C\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "p", 128);
      \u0275\u0275text(393, " AI\uB77C\uB294 \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD574 \uC774 \uC7AC\uBC0C\uB294 '\uD310'\uC5D0\uC11C \uD568\uAED8 \uB6F0\uC5B4\uB180\uACE0,");
      \u0275\u0275element(394, "br");
      \u0275\u0275text(395, " \uC804 \uC138\uACC4\uB97C \uBB34\uB300\uB85C \uD65C\uB3D9\uD558\uB294 ");
      \u0275\u0275elementStart(396, "strong");
      \u0275\u0275text(397, "'\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB9C8\uD53C\uC544'");
      \u0275\u0275elementEnd();
      \u0275\u0275text(398, " \uAC19\uC740 \uC9D1\uB2E8\uC744 \uB9CC\uB4DC\uB294 \uAC83.");
      \u0275\u0275element(399, "br");
      \u0275\u0275text(400, " \uD63C\uC790\uBCF4\uB2E4 \uC5F0\uD569\uD560 \uB54C \uB354 \uBA40\uB9AC \uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(401, "div", 129);
      \u0275\u0275elementStart(402, "div", 130)(403, "div", 131)(404, "div", 132);
      \u0275\u0275text(405, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "h3");
      \u0275\u0275text(407, "12\uAC1C\uC6D4 \uCEE4\uB9AC\uD058\uB7FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "p");
      \u0275\u0275text(409, "AI\uC640 \uD568\uAED8 \uB2F9\uC2E0\uC758 \uC544\uC774\uB514\uC5B4\uB97C \uAE00\uB85C\uBC8C \uC11C\uBE44\uC2A4\uB85C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uC2E4\uBB34 \uD504\uB85C\uADF8\uB7A8");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "div", 133)(411, "div", 134)(412, "span", 135);
      \u0275\u0275text(413, "10\uAC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "span", 136);
      \u0275\u0275text(415, "\uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 134)(417, "span", 135);
      \u0275\u0275text(418, "40+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "span", 136);
      \u0275\u0275text(420, "\uAD50\uC721 \uAC15\uC758");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "div", 134)(422, "span", 135);
      \u0275\u0275text(423, "40+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "span", 136);
      \u0275\u0275text(425, "AI \uACB0\uACFC\uBB3C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(426, "div", 137)(427, "span", 135);
      \u0275\u0275text(428, "1\uAC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "span", 136);
      \u0275\u0275text(430, "\uAE00\uB85C\uBC8C \uB7F0\uCE6D");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(431, "div", 138)(432, "div", 139)(433, "div", 140);
      \u0275\u0275text(434, "PHASE 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "h3", 141);
      \u0275\u0275text(436, "10\uAC1C\uC6D4 \uAC1C\uBC1C \uCF54\uC2A4 (40\uAC1C \uACB0\uACFC\uBB3C)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "p", 142);
      \u0275\u0275text(438, "\uB9E4\uC8FC \uACE0\uAE09 \uAC15\uC758 1 + \uC124\uACC4 1 + \uAC1C\uBC1C 1\uC744 \uC9C4\uD589\uD558\uBA70, \uD55C \uB2EC\uC5D0 4\uBC88\uC758 \uC0AC\uC774\uD074\uB85C 40\uAC1C\uC758 \uC644\uC131\uB41C \uACB0\uACFC\uBB3C \uC0DD\uC131");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "div", 143)(440, "h4", 144);
      \u0275\u0275text(441, "\u{1F4C5} \uB9E4\uC8FC \uC9C4\uD589 \uACFC\uC815 (4\uC8FC = 1\uC0AC\uC774\uD074)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "div", 145)(443, "div", 146)(444, "div", 147);
      \u0275\u0275text(445, "\u{1F393}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "div", 148)(447, "span", 149);
      \u0275\u0275text(448, "\uACE0\uAE09 \uAC15\uC758");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "span", 150);
      \u0275\u0275text(450, "\uC2EC\uD654 \uAE30\uC220 \uD559\uC2B5");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(451, "div", 151);
      \u0275\u0275text(452, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "div", 146)(454, "div", 152);
      \u0275\u0275text(455, "\u{1F4D0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "div", 148)(457, "span", 149);
      \u0275\u0275text(458, "\uC124\uACC4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "span", 150);
      \u0275\u0275text(460, "\uC2DC\uC2A4\uD15C \uC544\uD0A4\uD14D\uCC98");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(461, "div", 151);
      \u0275\u0275text(462, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "div", 146)(464, "div", 153);
      \u0275\u0275text(465, "\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "div", 148)(467, "span", 149);
      \u0275\u0275text(468, "\uAC1C\uBC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "span", 150);
      \u0275\u0275text(470, "\uC2E4\uC804 \uAD6C\uD604");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(471, "p", 154);
      \u0275\u0275text(472, " \u2728 \uB9E4\uC8FC \uC644\uC131\uB41C \uACB0\uACFC\uBB3C 1\uAC1C | \uD55C \uB2EC 4\uAC1C | 10\uAC1C\uC6D4 \uCD1D 40\uAC1C \uACB0\uACFC\uBB3C ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(473, "div", 155)(474, "div", 139)(475, "div", 156);
      \u0275\u0275text(476, "PHASE 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "h3", 141);
      \u0275\u0275text(478, "2\uAC1C\uC6D4 \uAE00\uB85C\uBC8C \uB7F0\uCE6D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "p", 142);
      \u0275\u0275text(480, "10\uAC1C\uC6D4 \uB3D9\uC548 \uC644\uC131\uD55C 40\uAC1C\uC758 \uACB0\uACFC\uBB3C\uC744 \uD558\uB098\uC758 \uC644\uC131\uB41C \uC81C\uD488\uC73C\uB85C \uD1B5\uD569\uD558\uC5EC \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uCD9C\uC2DC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(481, "div", 157)(482, "div", 158)(483, "div", 159);
      \u0275\u0275text(484, "\u{1F30D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "h4");
      \u0275\u0275text(486, "\uAE00\uB85C\uBC8C \uC11C\uBE44\uC2A4 \uB7F0\uCE6D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "ul")(488, "li");
      \u0275\u0275text(489, "\uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0 (\uC601\uC5B4, \uC77C\uBCF8\uC5B4, \uC911\uAD6D\uC5B4)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "li");
      \u0275\u0275text(491, "\uAE00\uB85C\uBC8C \uD074\uB77C\uC6B0\uB4DC \uBC30\uD3EC (AWS/GCP)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "li");
      \u0275\u0275text(493, "\uC571\uC2A4\uD1A0\uC5B4 & \uD50C\uB808\uC774\uC2A4\uD1A0\uC5B4 \uB4F1\uB85D");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(494, "div", 158)(495, "div", 159);
      \u0275\u0275text(496, "\u{1F4E2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "h4");
      \u0275\u0275text(498, "\uB9C8\uCF00\uD305 & \uD504\uB85C\uBAA8\uC158");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "ul")(500, "li");
      \u0275\u0275text(501, "SNS \uB9C8\uCF00\uD305 \uC804\uB7B5 \uC218\uB9BD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "li");
      \u0275\u0275text(503, "\uC778\uD50C\uB8E8\uC5B8\uC11C \uD611\uC5C5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "li");
      \u0275\u0275text(505, "\uAD11\uACE0 \uCEA0\uD398\uC778 \uC6B4\uC601");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(506, "div", 158)(507, "div", 159);
      \u0275\u0275text(508, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "h4");
      \u0275\u0275text(510, "\uC6B4\uC601 & \uC720\uC9C0\uBCF4\uC218");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "ul")(512, "li");
      \u0275\u0275text(513, "\uC0AC\uC6A9\uC790 \uD53C\uB4DC\uBC31 \uBD84\uC11D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "li");
      \u0275\u0275text(515, "\uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 & \uCD5C\uC801\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "li");
      \u0275\u0275text(517, "\uC9C0\uC18D\uC801 \uC5C5\uB370\uC774\uD2B8 & \uAC1C\uC120");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(518, "div", 160)(519, "div", 161)(520, "h3");
      \u0275\u0275text(521, "AI\uC640 \uD568\uAED8 \uAFC8\uC744 \uD604\uC2E4\uB85C!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "p");
      \u0275\u0275text(523, "1\uAE30 \uBAA8\uC9D1 \uB9C8\uAC10 \uC784\uBC15 \xB7 \uC120\uCC29\uC21C 10\uBA85");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "div", 162)(525, "span", 163);
      \u0275\u0275text(526, "Loworld AI Engine 2,000\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "span", 164);
      \u0275\u0275text(528, "\uC6D4 50\uB9CC\uC6D0 (\uAD50\uC721 \uBB34\uB8CC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "span", 165);
      \u0275\u0275text(530, "70% OFF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "p", 166);
      \u0275\u0275text(532, " Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(533, "a", 167);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(534, "svg", 168);
      \u0275\u0275element(535, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(536, " 1\uAE30 \uC2E0\uCCAD\uD558\uAE30 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(537, "article", 169)(538, "a", 170);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(539, "svg", 168);
      \u0275\u0275element(540, "path", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275text(541, " \uD504\uB85C\uC81D\uD2B8 \uBB38\uC758 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(542, "footer", 172)(543, "div", 173)(544, "div", 174)(545, "a", 175);
      \u0275\u0275text(546, "\uC2DC\uC2A4\uD15C \uC0C1\uD0DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "span", 176);
      \u0275\u0275text(548, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "a", 175);
      \u0275\u0275text(550, "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "span", 176);
      \u0275\u0275text(552, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "a", 175);
      \u0275\u0275text(554, "\uC774\uC6A9 \uC57D\uAD00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "div", 177);
      \u0275\u0275text(556, "Copyright \xA9 2024 Loworld. All rights reserved.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(49);
      \u0275\u0275classProp("show-detail", ctx.isDetailView);
      \u0275\u0275advance(69);
      \u0275\u0275property("ngIf", ctx.selectedService && ctx.services[ctx.selectedService]);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.allApps.length);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.getAppsForCurrentPage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getTotalPages() > 1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("muted", ctx.videoMuted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.videoMuted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.videoMuted);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #0061ff 0%,\n      #60efff 100%);\n  --text-primary: #1d1d1f;\n  --text-secondary: #333333;\n  --tile-radius: 24px;\n  --tile-bg: rgba(255, 255, 255, 0.65);\n  --tile-bg-hover: rgba(255, 255, 255, 0.8);\n  --tile-border: rgba(255, 255, 255, 0.4);\n  --tile-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  --blob-1: #ffffff;\n  --blob-2: #00c6fb;\n  --blob-3: #005bea;\n  --blob-4: #ffffff;\n  --toolbar-bg: rgba(255, 255, 255, 0.3);\n  --toolbar-border: rgba(255, 255, 255, 0.2);\n  --toolbar-text: #1d1d1f;\n  --toolbar-btn-hover: rgba(0, 0, 0, 0.06);\n  --profile-avatar-bg: #f5f5f7;\n  --profile-avatar-shadow: 0 8px 24px rgba(0,0,0,0.06);\n  --profile-icon-color: #98989d;\n  --service-list-bg: rgba(60, 60, 67, 0.08);\n  --service-row-bg: rgba(255, 255, 255, 0.85);\n  --service-row-hover: rgba(255, 255, 255, 1);\n  --service-row-active: rgba(242, 242, 247, 0.8);\n  --service-featured-bg: rgba(255, 245, 245, 0.9);\n  --service-featured-hover: rgba(255, 240, 240, 1);\n  --price-color: #007aff;\n  --chevron-color: #888888;\n  --intro-card-bg: rgba(255, 255, 255, 0.6);\n  --intro-card-border: rgba(255, 255, 255, 0.4);\n  --intro-stat-bg: rgba(255, 255, 255, 0.8);\n  --intro-stat-border: rgba(0, 0, 0, 0.06);\n  --blob-mix-blend: overlay;\n  --blob-opacity: 0.8;\n}\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #0f0c29 0%,\n      #302b63 50%,\n      #24243e 100%);\n  --text-primary: #f5f5f7;\n  --text-secondary: #a1a1a6;\n  --tile-bg: rgba(30, 30, 30, 0.6);\n  --tile-bg-hover: rgba(40, 40, 40, 0.7);\n  --tile-border: rgba(255, 255, 255, 0.1);\n  --tile-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);\n  --blob-1: #4facfe;\n  --blob-2: #7209b7;\n  --blob-3: #3a0ca3;\n  --blob-4: #f72585;\n  --toolbar-bg: rgba(28, 28, 30, 0.65);\n  --toolbar-border: rgba(255, 255, 255, 0.1);\n  --toolbar-text: #f5f5f7;\n  --toolbar-btn-hover: rgba(255, 255, 255, 0.1);\n  --profile-avatar-bg: rgba(255, 255, 255, 0.1);\n  --profile-avatar-shadow: 0 8px 24px rgba(0,0,0,0.2);\n  --profile-icon-color: #d1d1d6;\n  --service-list-bg: rgba(255, 255, 255, 0.1);\n  --service-row-bg: rgba(44, 44, 46, 0.6);\n  --service-row-hover: rgba(58, 58, 60, 0.8);\n  --service-row-active: rgba(28, 28, 30, 0.8);\n  --service-featured-bg: rgba(255, 69, 58, 0.15);\n  --service-featured-hover: rgba(255, 69, 58, 0.25);\n  --price-color: #0a84ff;\n  --chevron-color: #636366;\n  --intro-card-bg: rgba(44, 44, 46, 0.6);\n  --intro-card-border: rgba(255, 255, 255, 0.1);\n  --intro-stat-bg: rgba(44, 44, 46, 0.6);\n  --intro-stat-border: rgba(255, 255, 255, 0.1);\n  --blob-mix-blend: normal;\n  --blob-opacity: 0.4;\n}\n.homepage-viewport[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "SF Pro Display",\n    "Helvetica Neue",\n    Roboto,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n  background-color: transparent;\n  color: var(--text-primary);\n}\n.homepage-gradient-background[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  background: var(--bg-gradient);\n  overflow: hidden;\n}\n.cloudos-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 52px;\n  padding: 0 24px;\n  background: var(--toolbar-bg);\n  backdrop-filter: saturate(180%) blur(25px);\n  -webkit-backdrop-filter: saturate(180%) blur(25px);\n  border-bottom: 1px solid var(--toolbar-border);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);\n}\n.icloud-logo[_ngcontent-%COMP%]   .logo-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: var(--toolbar-text);\n}\n.icloud-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #3b82f6;\n}\n.icloud-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: var(--toolbar-text);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.toolbar-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.toolbar-button.primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  text-decoration: none;\n}\n.toolbar-button.primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.homepage-scrollview[_ngcontent-%COMP%] {\n  padding-top: 52px;\n  min-height: 100vh;\n}\n.homepage-content[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 40px 24px;\n}\n.home-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.tile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.6fr;\n  grid-auto-rows: auto;\n  gap: 24px;\n  align-items: stretch;\n}\n@media (max-width: 767px) {\n  .tile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    gap: 20px;\n  }\n}\n.tile-container.tile-small[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.tile-container.tile-large[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.tile-container.tile-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.tile-container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .tile-container.tile-small[_ngcontent-%COMP%], \n   .tile-container.tile-large[_ngcontent-%COMP%], \n   .tile-container.tile-full[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.tile[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--tile-bg);\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  border-radius: var(--tile-radius);\n  box-shadow: var(--tile-shadow);\n  border: 1px solid var(--tile-border);\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.tile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.01);\n  background: var(--tile-bg-hover);\n  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 10;\n}\n.tile[_ngcontent-%COMP%]   .tile-border[_ngcontent-%COMP%] {\n  display: none;\n}\n.tile-banner[_ngcontent-%COMP%] {\n  padding: 20px 20px 16px;\n}\n.tile-banner[_ngcontent-%COMP%]   .banner-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  text-decoration: none;\n  color: inherit;\n}\n.tile-banner.compact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n}\n.banner-text[_ngcontent-%COMP%]   .tile-heading[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.banner-text[_ngcontent-%COMP%]   .tile-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n  font-weight: 500;\n}\n.app-icon-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.app-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow:\n    0 4px 8px rgba(0, 0, 0, 0.12),\n    0 8px 16px rgba(0, 0, 0, 0.08),\n    inset 0 1px 1px rgba(255, 255, 255, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.app-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      rgba(255, 255, 255, 0) 40%);\n  pointer-events: none;\n}\n.app-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: white;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));\n}\n.app-icon.rocket[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n}\n.app-icon.code[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n}\n.app-icon.stats[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30b0c7 100%);\n}\n.app-icon.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n}\n.app-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n}\n.app-icon.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd60a 0%,\n      #ff9f0a 100%);\n}\n.app-icon.cyan[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #70d7ff 0%,\n      #5ac8fa 100%);\n}\n.app-icon.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30b0c7 100%);\n}\n.app-icon.red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n}\n.app-icon.teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #30b0c7 100%);\n}\n.app-icon.pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d 0%,\n      #ff2d55 100%);\n}\n.app-icon.indigo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c7ce0 0%,\n      #5856d6 100%);\n}\n.app-icon.gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8a8a8 0%,\n      #8e8e93 100%);\n}\n.app-icon.software-dev[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 50%,\n      #f093fb 100%);\n  box-shadow:\n    0 4px 15px rgba(102, 126, 234, 0.4),\n    0 8px 25px rgba(118, 75, 162, 0.3),\n    inset 0 1px 1px rgba(255, 255, 255, 0.4);\n}\n.profile-tile[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.profile-tile[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 104px;\n  height: 104px;\n  margin-bottom: 20px;\n  background: var(--profile-avatar-bg);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--profile-avatar-shadow);\n}\n.profile-tile[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .cloud-bg[_ngcontent-%COMP%] {\n  display: none;\n}\n.profile-tile[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-tile[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  color: var(--profile-icon-color);\n}\n.profile-tile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.profile-tile[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n  letter-spacing: -0.5px;\n  margin-bottom: 6px;\n}\n.profile-tile[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.profile-tile[_ngcontent-%COMP%]   .plan-badge[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 6px 14px;\n  background: rgba(0, 122, 255, 0.1);\n  color: #007aff;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 100px;\n  letter-spacing: 0;\n}\n.services-tile[_ngcontent-%COMP%]   .tile-content[_ngcontent-%COMP%] {\n  padding: 0 20px 24px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.services-tile[_ngcontent-%COMP%]   .tile-content.tile-slider[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  flex-direction: row;\n  width: 200%;\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.services-tile[_ngcontent-%COMP%]   .tile-content.tile-slider.show-detail[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n}\n.services-tile[_ngcontent-%COMP%]   .tile-content.tile-slider[_ngcontent-%COMP%]   .tile-pane[_ngcontent-%COMP%] {\n  width: 50%;\n  flex-shrink: 0;\n}\n.services-tile[_ngcontent-%COMP%]   .tile-content.tile-slider[_ngcontent-%COMP%]   .tile-pane.service-list-pane[_ngcontent-%COMP%] {\n  padding: 0 20px 24px;\n}\n.services-tile[_ngcontent-%COMP%]   .tile-content.tile-slider[_ngcontent-%COMP%]   .tile-pane.detail-pane[_ngcontent-%COMP%] {\n  padding: 16px 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--tile-bg);\n}\n.services-tile[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  background: var(--service-list-bg);\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: var(--service-row-bg);\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  transition: background 0.2s ease;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]:hover {\n  background: var(--service-row-hover);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]:active {\n  background: var(--service-row-active);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row.featured[_ngcontent-%COMP%] {\n  background: var(--service-featured-bg);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row.featured[_ngcontent-%COMP%]:hover {\n  background: var(--service-featured-hover);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 10px;\n  padding: 3px 8px;\n  background: #ff3b30;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 4px;\n  animation: _ngcontent-%COMP%_badge-pulse 2s infinite;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd60a 0%,\n      #ff9f0a 100%);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon.cyan[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #70d7ff 0%,\n      #5ac8fa 100%);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30b0c7 100%);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon.red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 3px;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-meta[_ngcontent-%COMP%]   .meta-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-meta[_ngcontent-%COMP%]   .meta-price[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--price-color);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-meta[_ngcontent-%COMP%]   .meta-price.live[_ngcontent-%COMP%] {\n  color: #30d158;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-meta[_ngcontent-%COMP%]   .meta-price.discount[_ngcontent-%COMP%] {\n  color: #ff453a;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-info[_ngcontent-%COMP%]   .service-meta[_ngcontent-%COMP%]   .meta-price.discount[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: #636366;\n  font-weight: 400;\n  margin-right: 4px;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  color: var(--chevron-color);\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]:hover   .chevron[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n@keyframes _ngcontent-%COMP%_badge-pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.85;\n    transform: scale(1.02);\n  }\n}\n.tech-tile[_ngcontent-%COMP%]   .tech-content[_ngcontent-%COMP%] {\n  padding: 0 16px 20px;\n  flex: 1;\n}\n.tech-tile[_ngcontent-%COMP%]   .tech-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tech-tile[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: var(--profile-avatar-bg);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.tech-tile[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]:hover {\n  background: #007aff;\n  color: white;\n}\n.app-library[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.app-library[_ngcontent-%COMP%]   .app-icon-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px 8px;\n}\n.app-library[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  padding: 8px 4px;\n  border-radius: 12px;\n  transition: transform 0.15s ease;\n}\n.app-library[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.app-library[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.app-library[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.app-library[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.app-library[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  max-width: 64px;\n}\n.app-library-wide[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.1);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 22px;\n  padding: 0 8px;\n  background: #667eea;\n  border-radius: 11px;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  line-height: 1;\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-navigator-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 24px 20px 16px;\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 24px 16px;\n  justify-items: center;\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: var(--text-primary);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: white;\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #5ac8fa 0%,\n      #007aff 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4cd964 0%,\n      #34c759 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #bf5af2 0%,\n      #af52de 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffcc00 0%,\n      #ff9500 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.pink[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d 0%,\n      #ff2d55 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.teal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #5ac8fa 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon.gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #98989d 0%,\n      #636366 100%);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: -0.2px;\n  max-width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.85);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]:hover   .app-icon[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]:active   .app-icon[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link.active[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5), 0 6px 20px rgba(0, 0, 0, 0.15);\n  transform: scale(1.05);\n}\n.app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link.active[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #667eea;\n}\n.app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding-top: 20px;\n}\n.app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  background: #667eea;\n  border-radius: 4px;\n}\n.app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.4);\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.2);\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-navigator-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link.active[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%]   .app-link.active[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  color: #8ba1ff;\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #8ba1ff;\n}\n.dark-theme[_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover:not(.active), .dark-theme   [_nghost-%COMP%]   .app-library-wide[_ngcontent-%COMP%]   .pagination-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.4);\n}\n.stats-tile[_ngcontent-%COMP%]   .tile-content[_ngcontent-%COMP%] {\n  padding: 0 16px 20px;\n}\n.stats-tile[_ngcontent-%COMP%]   .stats-showcase[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  padding: 8px 4px;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-circle[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.3px;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-circle.blue[_ngcontent-%COMP%] {\n  background: #007aff;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-circle.purple[_ngcontent-%COMP%] {\n  background: #af52de;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-circle.green[_ngcontent-%COMP%] {\n  background: #34c759;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-circle.orange[_ngcontent-%COMP%] {\n  background: #ff9500;\n}\n.stats-tile[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.customize-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.customize-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  border-radius: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  transition: all 0.2s;\n}\n.customize-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n.customize-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.legal-footer[_ngcontent-%COMP%] {\n  padding: 24px 16px 32px;\n  text-align: center;\n}\n.legal-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.legal-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.legal-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.legal-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover {\n  color: white;\n  text-decoration: underline;\n}\n.legal-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 12px;\n}\n.legal-footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.fade-in[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(16px);\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.fade-in.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (max-width: 767px) {\n  .homepage-content[_ngcontent-%COMP%] {\n    padding: 16px 16px 80px;\n  }\n  .tile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .tile-container.tile-small[_ngcontent-%COMP%], \n   .tile-container.tile-large[_ngcontent-%COMP%], \n   .tile-container.tile-full[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .tile-container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: auto;\n  }\n  .profile-tile[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    align-items: center;\n    text-align: center;\n  }\n  .profile-tile[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    margin-bottom: 16px;\n  }\n  .profile-tile[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .profile-tile[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 4px;\n  }\n  .profile-tile[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .profile-tile[_ngcontent-%COMP%]   .plan-badge[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n  .stats-tile[_ngcontent-%COMP%]   .stats-showcase[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .stats-tile[_ngcontent-%COMP%]   .stats-showcase[_ngcontent-%COMP%]   .stat-circle[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .stats-tile[_ngcontent-%COMP%]   .stats-showcase[_ngcontent-%COMP%]   .stat-circle[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .app-library[_ngcontent-%COMP%]   .app-icon-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px 8px;\n  }\n  .app-library-wide[_ngcontent-%COMP%] {\n    padding: 16px 0;\n  }\n  .app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding: 0 16px;\n  }\n  .app-library-wide[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%] {\n    min-width: 60px;\n    padding: 8px 4px;\n  }\n  .app-library-wide[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n    border-radius: 12px;\n  }\n  .app-library-wide[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n  }\n  .app-library-wide[_ngcontent-%COMP%]   .app-link[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .cloudos-toolbar[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .cloudos-toolbar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .curriculum-section[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin: 24px 0;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .curriculum-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .curriculum-intro[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .intro-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .week-items[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .week-item[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .week-arrow[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    align-self: center;\n    margin: 4px 0;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .launch-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .curriculum-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 24px;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .curriculum-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .curriculum-cta[_ngcontent-%COMP%]   .cta-price[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-bottom: 20px;\n  }\n  .curriculum-section[_ngcontent-%COMP%]   .curriculum-cta[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .hero-story[_ngcontent-%COMP%] {\n    padding: 24px;\n    margin-bottom: 24px;\n  }\n  .hero-story[_ngcontent-%COMP%]   .story-quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 1.4;\n  }\n  .hero-story[_ngcontent-%COMP%]   .story-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .why-now-grid[_ngcontent-%COMP%], \n   .values-grid[_ngcontent-%COMP%], \n   .target-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .operation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .provide-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .vision-section[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .vision-section[_ngcontent-%COMP%]   .vision-main[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .vision-section[_ngcontent-%COMP%]   .vision-sub[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .services-tile[_ngcontent-%COMP%]   .tile-content[_ngcontent-%COMP%] {\n    padding: 0 16px 20px;\n  }\n  .services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .service-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .meta-text[_ngcontent-%COMP%], \n   .services-tile[_ngcontent-%COMP%]   .service-row[_ngcontent-%COMP%]   .meta-price[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.curriculum-section[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  background: var(--tile-bg);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-radius: var(--tile-radius);\n  border: 1px solid var(--tile-border);\n  box-shadow: var(--tile-shadow);\n  padding: 32px;\n  overflow: hidden;\n}\n.curriculum-video-background[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 280px;\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  background: #000;\n}\n.curriculum-video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  z-index: 1;\n}\n.curriculum-video-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 97, 255, 0.15) 0%,\n      rgba(96, 239, 255, 0.1) 100%);\n  pointer-events: none;\n  z-index: 2;\n}\n.curriculum-mute-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  z-index: 10;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: all 0.3s ease;\n}\n.curriculum-mute-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n}\n.curriculum-mute-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n  transform: scale(1.1);\n}\n.curriculum-mute-toggle.muted[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.curriculum-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.curriculum-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      #5ac8fa 0%,\n      #007aff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.curriculum-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: white;\n}\n.curriculum-title-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.curriculum-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.curriculum-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-secondary);\n  margin: 4px 0 0 0;\n  font-weight: 500;\n}\n.curriculum-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 20px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.curriculum-intro[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n.intro-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n  background: var(--intro-card-bg);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--intro-card-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.intro-card[_ngcontent-%COMP%]   .intro-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n.intro-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.intro-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.5;\n  font-weight: 500;\n}\n.intro-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  flex: 1;\n  min-width: 280px;\n}\n.intro-stat[_ngcontent-%COMP%] {\n  background: var(--intro-stat-bg);\n  border-radius: var(--tile-radius);\n  padding: 16px;\n  text-align: center;\n  border: 1px solid var(--intro-stat-border);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.intro-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.intro-stat[_ngcontent-%COMP%]   .stat-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.intro-stat.highlight-stat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #007aff 0%,\n      #5856d6 100%);\n  border: none;\n  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.3);\n  transform: scale(1.05);\n  z-index: 1;\n}\n.intro-stat.highlight-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 28px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.intro-stat.highlight-stat[_ngcontent-%COMP%]   .stat-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n.intro-stat.highlight-stat[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08) translateY(-2px);\n  box-shadow: 0 12px 28px rgba(0, 122, 255, 0.4);\n}\n.curriculum-phase[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--tile-border);\n}\n.phase-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.phase-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 12px;\n  margin-bottom: 8px;\n}\n.phase-badge.development[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #5856d6 0%,\n      #af52de 100%);\n  color: white;\n}\n.phase-badge.launch[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30d158 100%);\n  color: white;\n}\n.phase-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 6px 0;\n}\n.phase-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.weekly-structure[_ngcontent-%COMP%] {\n  background: rgba(88, 86, 214, 0.06);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  border: 1px solid rgba(88, 86, 214, 0.1);\n}\n.structure-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #5856d6;\n  margin: 0 0 16px 0;\n}\n.week-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.week-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--tile-bg);\n  padding: 12px 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.week-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.week-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.week-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.week-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.week-arrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #5856d6;\n  font-weight: bold;\n}\n.month-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n.month-card[_ngcontent-%COMP%] {\n  background: var(--tile-bg);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.month-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.month-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #5856d6 0%,\n      #af52de 100%);\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n}\n.month-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n}\n.month-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n.month-output[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  color: #007aff;\n  background: rgba(0, 122, 255, 0.08);\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.launch-phase[_ngcontent-%COMP%] {\n  background: rgba(52, 199, 89, 0.04);\n  border: 1px solid rgba(52, 199, 89, 0.15);\n}\n.launch-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.launch-card[_ngcontent-%COMP%] {\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 20px;\n  border: 1px solid rgba(52, 199, 89, 0.15);\n}\n.launch-card[_ngcontent-%COMP%]   .launch-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 12px;\n}\n.launch-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 12px 0;\n}\n.launch-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.launch-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.launch-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: #34c759;\n  font-weight: bold;\n}\n.launch-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.curriculum-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1d1d1f 0%,\n      #3a3a3c 100%);\n  border-radius: 16px;\n  padding: 28px 32px;\n  margin-top: 8px;\n}\n.cta-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 6px 0;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0 0 12px 0;\n}\n.cta-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.original-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: line-through;\n}\n.discount-price[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #5ac8fa;\n}\n.discount-badge[_ngcontent-%COMP%] {\n  background: #ff3b30;\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.cta-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #007aff 0%,\n      #5856d6 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 28px;\n  border-radius: 12px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cta-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 122, 255, 0.4);\n}\n@media (max-width: 1024px) {\n  .month-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .intro-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .why-now-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .operation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .provide-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .target-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-story[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(88, 86, 214, 0.08) 0%,\n      rgba(175, 82, 222, 0.08) 100%);\n  border-radius: 20px;\n  padding: 32px;\n  border: 1px solid rgba(88, 86, 214, 0.15);\n}\n.story-quote[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.story-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #5856d6;\n  line-height: 1;\n  font-family: Georgia, serif;\n}\n.story-quote[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  font-style: italic;\n}\n.story-quote[_ngcontent-%COMP%]   .quote-context[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.story-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 20px;\n  border-top: 1px solid rgba(88, 86, 214, 0.15);\n}\n.story-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.7;\n}\n.story-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #5856d6;\n}\n.why-now-section[_ngcontent-%COMP%], \n.core-values-section[_ngcontent-%COMP%], \n.operation-section[_ngcontent-%COMP%], \n.provide-section[_ngcontent-%COMP%], \n.target-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n.why-now-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.why-card[_ngcontent-%COMP%] {\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.why-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.why-card[_ngcontent-%COMP%]   .why-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 12px;\n}\n.why-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.value-card[_ngcontent-%COMP%] {\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--tile-border);\n  position: relative;\n  transition: all 0.2s ease;\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.value-card.featured[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 59, 48, 0.06) 0%,\n      rgba(255, 149, 0, 0.06) 100%);\n  border-color: rgba(255, 59, 48, 0.15);\n}\n.value-card[_ngcontent-%COMP%]   .value-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #ff3b30 0%,\n      #ff9500 100%);\n  padding: 4px 10px;\n  border-radius: 10px;\n}\n.value-card[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 12px;\n}\n.value-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.operation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.operation-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 20px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.operation-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.green[_ngcontent-%COMP%] {\n  background: rgba(52, 199, 89, 0.12);\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.blue[_ngcontent-%COMP%] {\n  background: rgba(0, 122, 255, 0.12);\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.purple[_ngcontent-%COMP%] {\n  background: rgba(88, 86, 214, 0.12);\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.orange[_ngcontent-%COMP%] {\n  background: rgba(255, 149, 0, 0.12);\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 6px 0;\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin: 0 0 8px 0;\n  line-height: 1.5;\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   .op-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #007aff;\n  background: rgba(0, 122, 255, 0.08);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.provide-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.provide-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 16px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.provide-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 122, 255, 0.04);\n  border-color: rgba(0, 122, 255, 0.15);\n}\n.provide-item[_ngcontent-%COMP%]   .provide-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.provide-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.target-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.target-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 122, 255, 0.06) 0%,\n      rgba(90, 200, 250, 0.06) 100%);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid rgba(0, 122, 255, 0.12);\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.target-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 122, 255, 0.12);\n}\n.target-card[_ngcontent-%COMP%]   .target-emoji[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.target-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.target-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6e6e73;\n  margin: 0;\n  line-height: 1.5;\n}\n.target-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n.vision-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #1d1d1f 0%,\n      #3a3a3c 100%);\n  border-radius: 20px;\n  padding: 40px;\n  text-align: center;\n}\n.vision-content[_ngcontent-%COMP%]   .vision-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.vision-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 20px 0;\n}\n.vision-content[_ngcontent-%COMP%]   .vision-main[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.7;\n  margin: 0 0 16px 0;\n}\n.vision-content[_ngcontent-%COMP%]   .vision-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #5ac8fa;\n}\n.vision-content[_ngcontent-%COMP%]   .vision-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.7;\n  margin: 0;\n}\n.vision-content[_ngcontent-%COMP%]   .vision-sub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ff9500;\n}\n.curriculum-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(0, 0, 0, 0.1),\n      transparent);\n  margin: 32px 0;\n}\n@media (max-width: 1024px) {\n  .why-now-grid[_ngcontent-%COMP%], \n   .values-grid[_ngcontent-%COMP%], \n   .target-grid[_ngcontent-%COMP%], \n   .operation-grid[_ngcontent-%COMP%], \n   .provide-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .intro-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .month-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .why-now-grid[_ngcontent-%COMP%], \n   .values-grid[_ngcontent-%COMP%], \n   .target-grid[_ngcontent-%COMP%], \n   .operation-grid[_ngcontent-%COMP%], \n   .provide-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .intro-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .month-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .app-library[_ngcontent-%COMP%]   .app-icon-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.detail-pane[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  color: #007aff;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.detail-pane[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 122, 255, 0.1);\n}\n.detail-pane[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 0;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 12px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-icon.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n  box-shadow: 0 4px 12px rgba(175, 82, 222, 0.3);\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-icon.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-icon.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd60a 0%,\n      #ff9f0a 100%);\n  box-shadow: 0 4px 12px rgba(255, 159, 10, 0.3);\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-icon.cyan[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #70d7ff 0%,\n      #5ac8fa 100%);\n  box-shadow: 0 4px 12px rgba(90, 200, 250, 0.3);\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin: 0 0 12px 0;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.detail-pane[_ngcontent-%COMP%]   .detail-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  text-align: left;\n  padding: 8px 12px;\n  background: rgba(52, 199, 89, 0.08);\n  border-radius: 8px;\n}\n.detail-pane[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #007aff 0%,\n      #5856d6 100%);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.detail-pane[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 122, 255, 0.4);\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .app-library-wide[_ngcontent-%COMP%]   .app-icon-grid-paginated[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 18px 14px;\n  }\n}\n/*# sourceMappingURL=ai-global-expedition.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiGlobalExpeditionComponent, [{
    type: Component,
    args: [{ selector: "app-ai-global-expedition", standalone: false, template: `<div class="homepage-viewport">
  <!-- Gradient Background -->
  <div class="homepage-gradient-background">
  </div>

  <!-- Header Toolbar -->
  <header class="cloudos-toolbar">
    <div class="icloud-logo">
      <a routerLink="/loworld" class="logo-link">
        <svg viewBox="0 0 24 24" class="logo-icon" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
        <span class="logo-text">Loworld</span>
      </a>
    </div>
    <div class="action-buttons">
      <a routerLink="/education/home" 
         class="toolbar-button primary">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      </a>
      <button class="toolbar-button" (click)="onSmoothScroll($event, '#apps')">
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
        </svg>
      </button>
    </div>
  </header>

  <!-- Main Scrollview -->
  <div class="homepage-scrollview">
    <div class="homepage-content">
      <main class="home-page">
        <!-- Tile Grid -->
        <!-- Tile Grid - iCloud 2-column layout -->
        <div class="tile-grid">
          
          <!-- Row 1: Profile + Services -->
          <!-- Profile Card -->
          <div class="tile-container tile-small fade-in">
            <article class="tile profile-tile">
              <div class="profile-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor" class="cloud-bg">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
                <div class="avatar-icon">
                  <svg viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 40c-7.732 0-14.29-4.924-16.734-11.803C18.336 36.855 24.89 34 32 34s13.664 2.855 16.734 6.197C46.29 47.076 39.732 52 32 52z"/>
                  </svg>
                </div>
              </div>
              <div class="user-info">
                <div class="user-name">Loworld</div>
                <div class="user-email">\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC804\uBB38 \uAE30\uC5C5</div>
              </div>
              <div class="plan-badge">Enterprise</div>
              <div class="tile-border"></div>
            </article>
          </div>

          <!-- Services Tile (Large) -->
          <div class="tile-container tile-large fade-in">
            <article class="tile services-tile">
              <div class="tile-banner">
                <div class="banner-link">
                  <div class="app-icon-wrapper">
                    <div class="app-icon software-dev">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="banner-text">
                    <div class="tile-heading">Loworld \uC11C\uBE44\uC2A4</div>
                    <div class="tile-description">\uC2A4\uD0C0\uD2B8\uC5C5\uBD80\uD130 \uC5D4\uD130\uD504\uB77C\uC774\uC988\uAE4C\uC9C0</div>
                  </div>
                </div>
              </div>
              <div class="tile-content tile-slider" [class.show-detail]="isDetailView">
                <!-- Service List Pane -->
                <div class="tile-pane service-list-pane">
                  <div class="service-list">
                    <!-- Service Row 1 - \uC2A4\uD0C0\uD130 \uD328\uD0A4\uC9C0 -->
                    <a (click)="openDetail('starter')" class="service-row" style="cursor: pointer;">
                      <div class="service-icon purple">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                        </svg>
                      </div>
                      <div class="service-info">
                        <div class="service-name">\uC2A4\uD0C0\uD130 \uD328\uD0A4\uC9C0</div>
                        <div class="service-meta">
                          <span class="meta-text">\uC2A4\uD0C0\uD2B8\uC5C5\uC744 \uC704\uD55C \uC62C\uC778\uC6D0</span>
                          <span class="meta-price">\uC6D4 99\uB9CC\uC6D0~</span>
                        </div>
                      </div>
                      <div class="chevron">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                      </div>
                    </a>
                    
                    <!-- Service Row 2 - \uB9DE\uCDA4\uD615 \uC194\uB8E8\uC158 -->
                    <a (click)="openDetail('solution')" class="service-row" style="cursor: pointer;">
                      <div class="service-icon blue">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                        </svg>
                      </div>
                      <div class="service-info">
                        <div class="service-name">\uB9DE\uCDA4\uD615 \uC194\uB8E8\uC158</div>
                        <div class="service-meta">
                          <span class="meta-text">\uC6F9/\uC571/AI \uD480\uC2A4\uD0DD \uAC1C\uBC1C</span>
                          <span class="meta-price">300\uB9CC\uC6D0~</span>
                        </div>
                      </div>
                      <div class="chevron">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                      </div>
                    </a>

                    <!-- Service Row 3 - Loworld \uCEE4\uBA38\uC2A4 -->
                    <a (click)="openDetail('commerce')" class="service-row" style="cursor: pointer;">
                      <div class="service-icon orange">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1z"/>
                        </svg>
                      </div>
                      <div class="service-info">
                        <div class="service-name">Loworld \uCEE4\uBA38\uC2A4</div>
                        <div class="service-meta">
                          <span class="meta-text">\uC2A4\uB9C8\uD2B8 \uCEE4\uBA38\uC2A4 \uD50C\uB7AB\uD3FC</span>
                          <span class="meta-price live">Now Live</span>
                        </div>
                      </div>
                      <div class="chevron">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                      </div>
                    </a>

                    <!-- Service Row 4 - AI\uC640 \uAE00\uB85C\uBC8C \uC6D0\uC815\uB300 -->
                    <a (click)="openDetail('expedition')" class="service-row featured" style="cursor: pointer;">
                      <span class="featured-badge" (click)="navigateToEducation($event)">1\uAE30 \uBAA8\uC9D1\uC911</span>
                      <div class="service-icon cyan">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      </div>
                      <div class="service-info">
                        <div class="service-name">AI\uC640 \uAE00\uB85C\uBC8C \uC6D0\uC815\uB300</div>
                        <div class="service-meta">
                          <span class="meta-text">12\uAC1C\uC6D4 \uC2E4\uBB34 \uD504\uB85C\uADF8\uB7A8 (40\uAC1C \uACB0\uACFC\uBB3C)</span>
                          <span class="meta-price discount">
                            <span style="font-weight: 800; margin-right: 2px;">70%\u2193</span> <del>2,000\uB9CC\uC6D0</del> \uC6D4 50\uB9CC\uC6D0 (\uAD50\uC721 \uBB34\uB8CC)
                          </span>
                        </div>
                      </div>
                      <div class="chevron">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Detail Pane (Dynamic) -->
                <div class="tile-pane detail-pane" *ngIf="selectedService && services[selectedService]">
                  <div class="detail-header">
                    <button class="back-btn" (click)="closeDetail()">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                      </svg>
                      \uB4A4\uB85C
                    </button>
                  </div>
                  <div class="detail-content">
                    <div class="detail-icon" [ngClass]="services[selectedService].color">
                      <ng-container [ngSwitch]="services[selectedService].icon">
                        <svg *ngSwitchCase="'rocket'" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                        </svg>
                        <svg *ngSwitchCase="'building'" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                        </svg>
                        <svg *ngSwitchCase="'cart'" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1z"/>
                        </svg>
                        <svg *ngSwitchCase="'school'" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      </ng-container>
                    </div>
                    <h3 class="detail-title">{{ services[selectedService].title }}</h3>
                    <p class="detail-subtitle">{{ services[selectedService].subtitle }}</p>
                    <div class="detail-desc">{{ services[selectedService].desc }}</div>
                    <div class="detail-features">
                      <div class="feature-item" *ngFor="let feature of services[selectedService].features">\u2713 {{ feature }}</div>
                    </div>
                    <a *ngIf="isExternalLink(services[selectedService].link)" 
                       [href]="services[selectedService].link" 
                       target="_blank" 
                       class="apply-btn">
                      {{ services[selectedService].btnText }}
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                      </svg>
                    </a>
                    <a *ngIf="!isExternalLink(services[selectedService].link)" 
                       [routerLink]="[services[selectedService].link]" 
                       class="apply-btn">
                      {{ services[selectedService].btnText }}
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="tile-border"></div>
            </article>
          </div>

          <!-- App Library Tile (Full Width) -->
          <div class="tile-container tile-full fade-in" id="apps">
            <article class="tile app-library-wide">
              <div class="app-navigator-header">
                <span class="title">\uBAA8\uB4DC\uC804\uD658</span>
                <span class="badge">{{ allApps.length }}</span>
              </div>

              <div class="app-navigator-container"
                   (touchstart)="onTouchStart($event)"
                   (touchmove)="onTouchMove($event)"
                   (touchend)="onTouchEnd()"
                   (mousedown)="onMouseDown($event)"
                   (mousemove)="onMouseMove($event)"
                   (mouseup)="onMouseUp()"
                   (mouseleave)="onMouseLeave()">
                
                <div class="app-icon-grid-paginated">
                  <a *ngFor="let app of getAppsForCurrentPage()" 
                     [routerLink]="[app.link]" 
                     class="app-link"
                     [class.active]="app.id === 'loworld'">
                    <div class="app-icon" [ngClass]="app.iconClass">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="app.svg"></path>
                      </svg>
                    </div>
                    <span class="app-name">{{ app.name }}</span>
                  </a>
                </div>

                <!-- Pagination Dots -->
                <div class="pagination-dots" *ngIf="getTotalPages() > 1">
                  <span *ngFor="let page of getPaginationArray(); let idx = index"
                        class="dot"
                        [class.active]="idx === currentModePage"
                        (click)="onPageDotClick(idx)"></span>
                </div>
              </div>
              <div class="tile-border"></div>
            </article>
          </div>

        </div>

        <!-- AI \uC6D4\uB4DC\uC6D0\uC815\uB300 \uCEE4\uB9AC\uD058\uB7FC \uC139\uC158 -->
        <section class="curriculum-section fade-in" id="curriculum">
          <!-- \uBE44\uB514\uC624 \uBC30\uACBD -->
          <div class="curriculum-video-background">
            <video autoplay muted loop playsinline class="curriculum-video" (loadedmetadata)="onVideoLoaded($event)">
              <source src="/movies/loworld_world.mp4" type="video/mp4">
            </video>
            <div class="curriculum-video-overlay"></div>
            <button class="curriculum-mute-toggle" (click)="toggleVideoMute()" [class.muted]="videoMuted">
              <svg *ngIf="videoMuted" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.99 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.01492537 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99721575 L3.03521743,10.4382088 C3.03521743,10.5953061 3.34915502,10.7524035 3.50612381,10.7524035 L16.6915026,11.5378905 C16.6915026,11.5378905 17.1624089,11.5378905 17.1624089,12.0091827 C17.1624089,12.4804748 16.6915026,12.4744748 16.6915026,12.4744748 Z"/>
              </svg>
              <svg *ngIf="!videoMuted" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
          </div>
          
          <div class="curriculum-header">
            <div class="curriculum-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <div class="curriculum-title-wrapper">
              <h2 class="curriculum-title">AI \uC6D4\uB4DC\uC6D0\uC815\uB300</h2>
              <p class="curriculum-subtitle">\uAFC8\uC744 \uD604\uC2E4\uB85C \uB9CC\uB4DC\uB294 12\uAC1C\uC6D4 \uC5EC\uC815</p>
            </div>
            <span class="curriculum-badge" (click)="navigateToEducation($event)" style="cursor: pointer;">1\uAE30 \uBAA8\uC9D1\uC911</span>
          </div>

          <!-- \uD788\uC5B4\uB85C \uC2A4\uD1A0\uB9AC \uC139\uC158 -->
          <div class="hero-story">
            <div class="story-quote">
              <div class="quote-icon">"</div>
              <blockquote>
                "10\uB144 \uB4A4\uC5D0 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uAE30 \uC704\uD574 \uB0B4\uB144 \uD55C \uD574\uB97C \uC624\uB86F\uC774 \uC790\uC2E0\uC758 \uBAA9\uD45C\uC5D0 \uC62C\uC778\uD558\uACA0\uC2B5\uB2C8\uB2E4"
              </blockquote>
              <p class="quote-context">
                \uC548\uC815\uC801\uC778 CTO \uC81C\uC548\uC744 \uAC70\uC808\uD558\uACE0 \uAFC8\uC744 \uC120\uD0DD\uD55C \uD55C \uAC1C\uBC1C\uC790\uC758 \uBA54\uC2DC\uC9C0\uAC00<br>
                AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 \uC2DC\uC791\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.
              </p>
            </div>
            <div class="story-message">
              <p>\uB204\uAD70\uAC00\uC758 <strong>\uC778\uC0DD\uC774 \uAC78\uB9B0 \uC120\uD0DD</strong>\uC744 \uD568\uAED8\uD558\uAE30\uC5D0, \uD750\uC9C0\uBD80\uC9C0\uD558\uAC8C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br>
              \uC774\uAC83\uC740 \uB2E8\uC21C\uD55C \uAD50\uC721\uC774 \uC544\uB2CC, <strong>\uAFC8\uC744 \uC2E4\uD604\uD558\uB294 \uC5EC\uC815</strong>\uC785\uB2C8\uB2E4.</p>
            </div>
          </div>

          <!-- \uC65C \uC9C0\uAE08\uC778\uAC00? -->
          <div class="why-now-section">
            <div class="section-header">
              <span class="section-icon">\u26A1</span>
              <h3>\uC65C \uC9C0\uAE08\uC778\uAC00? <span class="highlight">\uAE00\uB85C\uBC8C IP \uC120\uC810\uC758 \uC2DC\uB300</span></h3>
            </div>
            <div class="why-now-grid">
              <div class="why-card">
                <div class="why-icon">\u{1F916}</div>
                <h4>AI \uD601\uBA85\uC758 \uC2DC\uB300</h4>
                <p>\uC0B0\uC5C5\uD601\uBA85, \uC778\uD130\uB137 \uD601\uBA85\uC5D0 \uC774\uC740 <strong>AI \uD601\uBA85</strong>\uC740 \uC5C4\uCCAD\uB09C \uD63C\uB780\uC778 \uB3D9\uC2DC\uC5D0 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uAE30\uD68D, \uB514\uC790\uC778, \uAC1C\uBC1C, \uB9C8\uCF00\uD305\uC744 \uD63C\uC790 \uB2E4 \uD560 \uC218 \uC788\uB294 \uC2DC\uB300\uAC00 \uC5F4\uB838\uC2B5\uB2C8\uB2E4.</p>
              </div>
              <div class="why-card">
                <div class="why-icon">\u{1F30D}</div>
                <h4>1\uC778 \uAE00\uB85C\uBC8C \uC2DC\uB300</h4>
                <p>\uACFC\uAC70 100\uBA85\uC774 \uD558\uB358 \uC77C\uC744 \uC774\uC81C \uD63C\uC790\uC11C\uB3C4 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC790\uC2E0\uC758 <strong>IP(\uC9C0\uC2DD\uC7AC\uC0B0\uAD8C)</strong>\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uCD9C\uC2DC\uD558\uC138\uC694.</p>
              </div>
              <div class="why-card">
                <div class="why-icon">\u{1F680}</div>
                <h4>\uC11C\uBD80 \uAC1C\uCC99 \uC2DC\uB300</h4>
                <p>AI \uC5B8\uC5B4 \uB2A5\uB825\uC744 \uD65C\uC6A9\uD574 \uC778\uB3C4, \uC911\uAD6D, \uC544\uD504\uB9AC\uCE74 \uB4F1 <strong>\uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC758 \uCCAB \uBC88\uC9F8 \uD3EC\uC9C0\uC154\uB2DD</strong>\uC744 \uC120\uC810\uD574\uC57C \uD558\uB294 \uC2DC\uB300\uC785\uB2C8\uB2E4.</p>
              </div>
            </div>
          </div>

          <!-- \uD575\uC2EC \uAC00\uCE58 -->
          <div class="core-values-section">
            <div class="section-header">
              <span class="section-icon">\u{1F48E}</span>
              <h3>AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 <span class="highlight">\uD575\uC2EC \uAC00\uCE58</span></h3>
            </div>
            <div class="values-grid">
              <div class="value-card featured">
                <div class="value-badge">\uD575\uC2EC \uCCA0\uD559</div>
                <div class="value-icon">\u2764\uFE0F</div>
                <h4>\uC0AC\uB791\uACFC \uC774\uD0C0\uC801 \uD0DC\uB3C4</h4>
                <p>\uC774\uAE30\uC801\uC778 \uC774\uB4DD\uBCF4\uB2E4 <strong>\uB0A8\uC744 \uB3D5\uB294 \uB9C8\uC74C</strong>\uC744 \uAC00\uC9C8 \uB54C \uC0B6\uC758 \uC120\uC21C\uD658\uC774 \uC77C\uC5B4\uB0A9\uB2C8\uB2E4. \uAE30\uC220\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uBCF4\uC774\uC9C0 \uC54A\uB294 \uAC00\uCE58\uC640 \uC8FC\uCCB4\uC801\uC778 \uC0B6\uC758 \uD0DC\uB3C4\uC785\uB2C8\uB2E4.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">\u{1F3AF}</div>
                <h4>\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5</h4>
                <p>'\uC62C\uC778'\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 <strong>\uC2EC\uB9AC\uAC00 \uBB34\uB108\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5</strong>\uC785\uB2C8\uB2E4. \uC2E4\uD328\uD574\uB3C4 \uAD1C\uCC2E\uC740 \uC5B4\uB824\uC6B4 \uB3C4\uC804\uC744 \uC990\uAE30\uB294 \uD0DC\uB3C4\uAC00 \uB354 \uD070 \uC131\uC7A5\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">\u{1F3AE}</div>
                <h4>\uD3C9\uC0DD\uC758 \uAE30\uC220\uB825</h4>
                <p>\uAC8C\uC784(\uD0B9\uC624\uD30C 94, 95...)\uCC98\uB7FC <strong>\uB9E4\uB144 \uC81C\uD488\uC744 \uBC1C\uC804</strong>\uC2DC\uCF1C \uB098\uAC00\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 \uD3C9\uC0DD \uD560 \uC77C\uACFC \uAE30\uC220\uB825\uC744 \uC5BB\uAC8C \uB429\uB2C8\uB2E4.</p>
              </div>
            </div>
          </div>

          <!-- \uC6B4\uC601 \uBC29\uC2DD -->
          <div class="operation-section">
            <div class="section-header">
              <span class="section-icon">\u2728</span>
              <h3>\uCC28\uBCC4\uD654\uB41C <span class="highlight">\uC6B4\uC601 \uBC29\uC2DD</span></h3>
            </div>
            <div class="operation-grid">
              <div class="operation-card">
                <div class="op-icon green">\u{1F4B3}</div>
                <div class="op-content">
                  <h4>\uD6C4\uBD88\uC81C \uC2DC\uC2A4\uD15C</h4>
                  <p>\uD55C \uB2EC \uCC38\uC5EC \uD6C4 \uB9CC\uC871\uD558\uBA74 \uB2E4\uC74C \uB2EC \uBE44\uC6A9 \uC9C0\uBD88 (Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC)</p>
                  <span class="op-tag">\uACF5\uAE09\uC790\uC758 \uC790\uC2E0\uAC10</span>
                </div>
              </div>
              <div class="operation-card">
                <div class="op-icon blue">\u{1F3AF}</div>
                <div class="op-content">
                  <h4>\uAE00\uB85C\uBC8C \uCD9C\uC2DC \uBCF4\uC7A5</h4>
                  <p>\uBC14\uBE60\uC11C \uC644\uC131 \uBABB \uD574\uB3C4 \uB300\uD45C\uB2D8\uC774 \uC9C1\uC811 \uAC00\uC774\uB4DC\uD558\uC5EC <strong>\uBB34\uC870\uAC74 \uAE00\uB85C\uBC8C \uCD9C\uC2DC</strong></p>
                  <span class="op-tag">\uAC15\uB825\uD55C \uD3EC\uD2B8\uD3F4\uB9AC\uC624</span>
                </div>
              </div>
              <div class="operation-card">
                <div class="op-icon purple">\u{1F91D}</div>
                <div class="op-content">
                  <h4>\uC218\uC775 \uBAA9\uC801 \uC544\uB2D8</h4>
                  <p>\uAFC8\uC744 \uB098\uB204\uACE0 \uD568\uAED8 \uC131\uC7A5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC5BB\uB294 \uBCF4\uB78C\uC744 \uC704\uD574 \uCD94\uC9C4</p>
                  <span class="op-tag">\uC9C4\uC815\uC131 \uC788\uB294 \uB3D9\uD589</span>
                </div>
              </div>
              <div class="operation-card">
                <div class="op-icon orange">\u{1F4B0}</div>
                <div class="op-content">
                  <h4>\uC218\uC775 \uBC30\uBD84</h4>
                  <p>\uB85C\uC6D4\uB4DC \uD50C\uB7AB\uD3FC\uC744 \uD1B5\uD574 \uC218\uC775 \uBC30\uBD84 (\uC81C\uC791\uC790 80% : \uD50C\uB7AB\uD3FC 20%)</p>
                  <span class="op-tag">\uC0C1\uC0DD \uAD6C\uC870</span>
                </div>
              </div>
            </div>
          </div>

          <!-- \uC81C\uACF5 \uAC00\uCE58 -->
          <div class="provide-section">
            <div class="section-header">
              <span class="section-icon">\u{1F6E0}\uFE0F</span>
              <h3>AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uAC00 <span class="highlight">\uC81C\uACF5\uD558\uB294 \uAC83</span></h3>
            </div>
            <div class="provide-grid">
              <div class="provide-item">
                <span class="provide-icon">\u{1F916}</span>
                <span>AI \uC5D0\uC774\uC804\uD2B8 & \uBC14\uC774\uBE0C \uCF54\uB529 \uAE30\uC220 \uC804\uC218</span>
              </div>
              <div class="provide-item">
                <span class="provide-icon">\u{1F4F1}</span>
                <span>iOS, Android, Web \uD1B5\uD569 Loworld AI Engine</span>
              </div>
              <div class="provide-item">
                <span class="provide-icon">\u{1F4E2}</span>
                <span>\uAE00\uB85C\uBC8C \uB9C8\uCF00\uD305 & SNS \uCF58\uD150\uCE20 \uC790\uB3D9\uD654</span>
              </div>
              <div class="provide-item">
                <span class="provide-icon">\u{1F4B3}</span>
                <span>\uAE00\uB85C\uBC8C \uACB0\uC81C(PayPal \uB4F1) & \uBC95\uC778 \uD5C8\uB4E4 \uD574\uACB0</span>
              </div>
              <div class="provide-item">
                <span class="provide-icon">\u{1F310}</span>
                <span>\uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0 (\uC601\uC5B4, \uC77C\uBCF8\uC5B4, \uC911\uAD6D\uC5B4)</span>
              </div>
              <div class="provide-item">
                <span class="provide-icon">\u2601\uFE0F</span>
                <span>AWS/GCP \uD074\uB77C\uC6B0\uB4DC \uC778\uD504\uB77C \uAD6C\uCD95</span>
              </div>
            </div>
          </div>

          <!-- \uB300\uC0C1\uC790 -->
          <div class="target-section">
            <div class="section-header">
              <span class="section-icon">\u{1F465}</span>
              <h3>\uC774\uB7F0 \uBD84\uB4E4\uC744 <span class="highlight">\uAE30\uB2E4\uB9BD\uB2C8\uB2E4</span></h3>
            </div>
            <div class="target-grid">
              <div class="target-card">
                <div class="target-emoji">\u{1F468}\u200D\u{1F4BB}</div>
                <h4>\uCDE8\uC5C5\uC774 \uC5B4\uB824\uC6B4 \uCCAD\uB144</h4>
                <p>\uC2A4\uD399 \uC313\uAE30 \uB300\uC2E0 <strong>\uC9C4\uC9DC \uD3EC\uD2B8\uD3F4\uB9AC\uC624</strong>\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC0AC\uC5C5\uAC00\uB85C \uC131\uC7A5</p>
              </div>
              <div class="target-card">
                <div class="target-emoji">\u{1F468}\u200D\u{1F4BC}</div>
                <h4>\uC740\uD1F4\uD55C 50\uB300</h4>
                <p>\uACBD\uD5D8\uACFC \uC9C0\uD61C\uC5D0 AI\uB97C \uB354\uD574 <strong>\uC0C8\uB85C\uC6B4 \uC0DD\uC0B0\uC790</strong>\uB85C\uC11C\uC758 \uAE38\uC744 \uAC1C\uCC99</p>
              </div>
              <div class="target-card">
                <div class="target-emoji">\u{1F680}</div>
                <h4>\uAFC8\uC744 \uAC00\uC9C4 \uB204\uAD6C\uB098</h4>
                <p>10\uB144 \uB4A4 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uC744 <strong>\uC778\uC0DD\uC744 \uAC74 \uB3C4\uC804</strong>\uC744 \uD558\uACE0 \uC2F6\uC740 \uBD84</p>
              </div>
            </div>
          </div>

          <!-- \uBE44\uC804 -->
          <div class="vision-section">
            <div class="vision-content">
              <div class="vision-icon">\u{1F31F}</div>
              <h3>\uC6B0\uB9AC\uC758 \uBE44\uC804</h3>
              <p class="vision-main">
                \uC138\uC0C1\uC740 \uD798\uB4E4\uACE0 \uC9C1\uC7A5 \uC0DD\uD65C\uC740 \uACE0\uB418\uC9C0\uB9CC,<br>
                <strong>\uC790\uAE30 \uB2A5\uB825\uC73C\uB85C \uBB34\uC5B8\uAC00\uB97C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uACFC\uC815\uC740 \uB9E4\uC6B0 \uC990\uAC70\uC6B4 \uC77C\uC785\uB2C8\uB2E4.</strong>
              </p>
              <p class="vision-sub">
                AI\uB77C\uB294 \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD574 \uC774 \uC7AC\uBC0C\uB294 '\uD310'\uC5D0\uC11C \uD568\uAED8 \uB6F0\uC5B4\uB180\uACE0,<br>
                \uC804 \uC138\uACC4\uB97C \uBB34\uB300\uB85C \uD65C\uB3D9\uD558\uB294 <strong>'\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB9C8\uD53C\uC544'</strong> \uAC19\uC740 \uC9D1\uB2E8\uC744 \uB9CC\uB4DC\uB294 \uAC83.<br>
                \uD63C\uC790\uBCF4\uB2E4 \uC5F0\uD569\uD560 \uB54C \uB354 \uBA40\uB9AC \uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
              </p>
            </div>
          </div>

          <div class="curriculum-divider"></div>

          <div class="curriculum-intro">
            <div class="intro-card">
              <div class="intro-icon dream">\u{1F680}</div>
              <h3>12\uAC1C\uC6D4 \uCEE4\uB9AC\uD058\uB7FC</h3>
              <p>AI\uC640 \uD568\uAED8 \uB2F9\uC2E0\uC758 \uC544\uC774\uB514\uC5B4\uB97C \uAE00\uB85C\uBC8C \uC11C\uBE44\uC2A4\uB85C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uC2E4\uBB34 \uD504\uB85C\uADF8\uB7A8</p>
            </div>
            <div class="intro-stats">
              <div class="intro-stat">
                <span class="stat-value">10\uAC1C</span>
                <span class="stat-desc">\uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8</span>
              </div>
              <div class="intro-stat">
                <span class="stat-value">40+</span>
                <span class="stat-desc">\uAD50\uC721 \uAC15\uC758</span>
              </div>
              <div class="intro-stat">
                <span class="stat-value">40+</span>
                <span class="stat-desc">AI \uACB0\uACFC\uBB3C</span>
              </div>
              <div class="intro-stat highlight-stat">
                <span class="stat-value">1\uAC1C</span>
                <span class="stat-desc">\uAE00\uB85C\uBC8C \uB7F0\uCE6D</span>
              </div>
            </div>
          </div>

          <!-- 10\uAC1C\uC6D4 \uAC1C\uBC1C \uCF54\uC2A4 -->
          <div class="curriculum-phase">
            <div class="phase-header">
              <div class="phase-badge development">PHASE 1</div>
              <h3 class="phase-title">10\uAC1C\uC6D4 \uAC1C\uBC1C \uCF54\uC2A4 (40\uAC1C \uACB0\uACFC\uBB3C)</h3>
              <p class="phase-desc">\uB9E4\uC8FC \uACE0\uAE09 \uAC15\uC758 1 + \uC124\uACC4 1 + \uAC1C\uBC1C 1\uC744 \uC9C4\uD589\uD558\uBA70, \uD55C \uB2EC\uC5D0 4\uBC88\uC758 \uC0AC\uC774\uD074\uB85C 40\uAC1C\uC758 \uC644\uC131\uB41C \uACB0\uACFC\uBB3C \uC0DD\uC131</p>
            </div>

            <div class="weekly-structure">
              <h4 class="structure-title">\u{1F4C5} \uB9E4\uC8FC \uC9C4\uD589 \uACFC\uC815 (4\uC8FC = 1\uC0AC\uC774\uD074)</h4>
              <div class="week-items">
                <div class="week-item">
                  <div class="week-icon lecture">\u{1F393}</div>
                  <div class="week-content">
                    <span class="week-label">\uACE0\uAE09 \uAC15\uC758</span>
                    <span class="week-desc">\uC2EC\uD654 \uAE30\uC220 \uD559\uC2B5</span>
                  </div>
                </div>
                <div class="week-arrow">\u2192</div>
                <div class="week-item">
                  <div class="week-icon survey">\u{1F4D0}</div>
                  <div class="week-content">
                    <span class="week-label">\uC124\uACC4</span>
                    <span class="week-desc">\uC2DC\uC2A4\uD15C \uC544\uD0A4\uD14D\uCC98</span>
                  </div>
                </div>
                <div class="week-arrow">\u2192</div>
                <div class="week-item">
                  <div class="week-icon result">\u{1F4BB}</div>
                  <div class="week-content">
                    <span class="week-label">\uAC1C\uBC1C</span>
                    <span class="week-desc">\uC2E4\uC804 \uAD6C\uD604</span>
                  </div>
                </div>
              </div>
              <p style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
                \u2728 \uB9E4\uC8FC \uC644\uC131\uB41C \uACB0\uACFC\uBB3C 1\uAC1C | \uD55C \uB2EC 4\uAC1C | 10\uAC1C\uC6D4 \uCD1D 40\uAC1C \uACB0\uACFC\uBB3C
              </p>
            </div>
          </div>

          <!-- 2\uAC1C\uC6D4 \uAE00\uB85C\uBC8C \uB7F0\uCE6D -->
          <div class="curriculum-phase launch-phase">
            <div class="phase-header">
              <div class="phase-badge launch">PHASE 2</div>
              <h3 class="phase-title">2\uAC1C\uC6D4 \uAE00\uB85C\uBC8C \uB7F0\uCE6D</h3>
              <p class="phase-desc">10\uAC1C\uC6D4 \uB3D9\uC548 \uC644\uC131\uD55C 40\uAC1C\uC758 \uACB0\uACFC\uBB3C\uC744 \uD558\uB098\uC758 \uC644\uC131\uB41C \uC81C\uD488\uC73C\uB85C \uD1B5\uD569\uD558\uC5EC \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uCD9C\uC2DC</p>
            </div>

            <div class="launch-grid">
              <div class="launch-card">
                <div class="launch-icon">\u{1F30D}</div>
                <h4>\uAE00\uB85C\uBC8C \uC11C\uBE44\uC2A4 \uB7F0\uCE6D</h4>
                <ul>
                  <li>\uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0 (\uC601\uC5B4, \uC77C\uBCF8\uC5B4, \uC911\uAD6D\uC5B4)</li>
                  <li>\uAE00\uB85C\uBC8C \uD074\uB77C\uC6B0\uB4DC \uBC30\uD3EC (AWS/GCP)</li>
                  <li>\uC571\uC2A4\uD1A0\uC5B4 & \uD50C\uB808\uC774\uC2A4\uD1A0\uC5B4 \uB4F1\uB85D</li>
                </ul>
              </div>
              <div class="launch-card">
                <div class="launch-icon">\u{1F4E2}</div>
                <h4>\uB9C8\uCF00\uD305 & \uD504\uB85C\uBAA8\uC158</h4>
                <ul>
                  <li>SNS \uB9C8\uCF00\uD305 \uC804\uB7B5 \uC218\uB9BD</li>
                  <li>\uC778\uD50C\uB8E8\uC5B8\uC11C \uD611\uC5C5</li>
                  <li>\uAD11\uACE0 \uCEA0\uD398\uC778 \uC6B4\uC601</li>
                </ul>
              </div>
              <div class="launch-card">
                <div class="launch-icon">\u{1F4CA}</div>
                <h4>\uC6B4\uC601 & \uC720\uC9C0\uBCF4\uC218</h4>
                <ul>
                  <li>\uC0AC\uC6A9\uC790 \uD53C\uB4DC\uBC31 \uBD84\uC11D</li>
                  <li>\uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 & \uCD5C\uC801\uD654</li>
                  <li>\uC9C0\uC18D\uC801 \uC5C5\uB370\uC774\uD2B8 & \uAC1C\uC120</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="curriculum-cta">
            <div class="cta-content">
              <h3>AI\uC640 \uD568\uAED8 \uAFC8\uC744 \uD604\uC2E4\uB85C!</h3>
              <p>1\uAE30 \uBAA8\uC9D1 \uB9C8\uAC10 \uC784\uBC15 \xB7 \uC120\uCC29\uC21C 10\uBA85</p>
              <div class="cta-price">
                <span class="original-price">Loworld AI Engine 2,000\uB9CC\uC6D0</span>
                <span class="discount-price">\uC6D4 50\uB9CC\uC6D0 (\uAD50\uC721 \uBB34\uB8CC)</span>
                <span class="discount-badge">70% OFF</span>
              </div>
              <p style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 8px; line-height: 1.4;">
                Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC
              </p>
            </div>
            <a routerLink="/education/home" 
               target="_blank" class="cta-button">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
              1\uAE30 \uC2E0\uCCAD\uD558\uAE30
            </a>
          </div>
        </section>

        <!-- Customize Button -->
        <article class="customize-section fade-in">
          <a routerLink="/education/home" 
             class="customize-button">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            \uD504\uB85C\uC81D\uD2B8 \uBB38\uC758
          </a>
        </article>
      </main>

      <!-- Footer -->
      <footer class="legal-footer">
        <div class="footer-content">
          <div class="footer-links">
            <a href="#" class="footer-link">\uC2DC\uC2A4\uD15C \uC0C1\uD0DC</a>
            <span class="separator">|</span>
            <a href="#" class="footer-link">\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68</a>
            <span class="separator">|</span>
            <a href="#" class="footer-link">\uC774\uC6A9 \uC57D\uAD00</a>
          </div>
          <div class="copyright">Copyright \xA9 2024 Loworld. All rights reserved.</div>
        </div>
      </footer>
    </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/ai/components/ai-global-expedition/ai-global-expedition.component.scss */\n:host {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #0061ff 0%,\n      #60efff 100%);\n  --text-primary: #1d1d1f;\n  --text-secondary: #333333;\n  --tile-radius: 24px;\n  --tile-bg: rgba(255, 255, 255, 0.65);\n  --tile-bg-hover: rgba(255, 255, 255, 0.8);\n  --tile-border: rgba(255, 255, 255, 0.4);\n  --tile-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);\n  --blob-1: #ffffff;\n  --blob-2: #00c6fb;\n  --blob-3: #005bea;\n  --blob-4: #ffffff;\n  --toolbar-bg: rgba(255, 255, 255, 0.3);\n  --toolbar-border: rgba(255, 255, 255, 0.2);\n  --toolbar-text: #1d1d1f;\n  --toolbar-btn-hover: rgba(0, 0, 0, 0.06);\n  --profile-avatar-bg: #f5f5f7;\n  --profile-avatar-shadow: 0 8px 24px rgba(0,0,0,0.06);\n  --profile-icon-color: #98989d;\n  --service-list-bg: rgba(60, 60, 67, 0.08);\n  --service-row-bg: rgba(255, 255, 255, 0.85);\n  --service-row-hover: rgba(255, 255, 255, 1);\n  --service-row-active: rgba(242, 242, 247, 0.8);\n  --service-featured-bg: rgba(255, 245, 245, 0.9);\n  --service-featured-hover: rgba(255, 240, 240, 1);\n  --price-color: #007aff;\n  --chevron-color: #888888;\n  --intro-card-bg: rgba(255, 255, 255, 0.6);\n  --intro-card-border: rgba(255, 255, 255, 0.4);\n  --intro-stat-bg: rgba(255, 255, 255, 0.8);\n  --intro-stat-border: rgba(0, 0, 0, 0.06);\n  --blob-mix-blend: overlay;\n  --blob-opacity: 0.8;\n}\n:host-context(.dark-theme) {\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #0f0c29 0%,\n      #302b63 50%,\n      #24243e 100%);\n  --text-primary: #f5f5f7;\n  --text-secondary: #a1a1a6;\n  --tile-bg: rgba(30, 30, 30, 0.6);\n  --tile-bg-hover: rgba(40, 40, 40, 0.7);\n  --tile-border: rgba(255, 255, 255, 0.1);\n  --tile-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);\n  --blob-1: #4facfe;\n  --blob-2: #7209b7;\n  --blob-3: #3a0ca3;\n  --blob-4: #f72585;\n  --toolbar-bg: rgba(28, 28, 30, 0.65);\n  --toolbar-border: rgba(255, 255, 255, 0.1);\n  --toolbar-text: #f5f5f7;\n  --toolbar-btn-hover: rgba(255, 255, 255, 0.1);\n  --profile-avatar-bg: rgba(255, 255, 255, 0.1);\n  --profile-avatar-shadow: 0 8px 24px rgba(0,0,0,0.2);\n  --profile-icon-color: #d1d1d6;\n  --service-list-bg: rgba(255, 255, 255, 0.1);\n  --service-row-bg: rgba(44, 44, 46, 0.6);\n  --service-row-hover: rgba(58, 58, 60, 0.8);\n  --service-row-active: rgba(28, 28, 30, 0.8);\n  --service-featured-bg: rgba(255, 69, 58, 0.15);\n  --service-featured-hover: rgba(255, 69, 58, 0.25);\n  --price-color: #0a84ff;\n  --chevron-color: #636366;\n  --intro-card-bg: rgba(44, 44, 46, 0.6);\n  --intro-card-border: rgba(255, 255, 255, 0.1);\n  --intro-stat-bg: rgba(44, 44, 46, 0.6);\n  --intro-stat-border: rgba(255, 255, 255, 0.1);\n  --blob-mix-blend: normal;\n  --blob-opacity: 0.4;\n}\n.homepage-viewport {\n  position: relative;\n  min-height: 100vh;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "SF Pro Display",\n    "Helvetica Neue",\n    Roboto,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n  background-color: transparent;\n  color: var(--text-primary);\n}\n.homepage-gradient-background {\n  position: fixed;\n  inset: 0;\n  z-index: -1;\n  background: var(--bg-gradient);\n  overflow: hidden;\n}\n.cloudos-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 52px;\n  padding: 0 24px;\n  background: var(--toolbar-bg);\n  backdrop-filter: saturate(180%) blur(25px);\n  -webkit-backdrop-filter: saturate(180%) blur(25px);\n  border-bottom: 1px solid var(--toolbar-border);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);\n}\n.icloud-logo .logo-link {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: var(--toolbar-text);\n}\n.icloud-logo .logo-icon {\n  width: 28px;\n  height: 28px;\n  color: #3b82f6;\n}\n.icloud-logo .logo-text {\n  font-size: 19px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: var(--toolbar-text);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.toolbar-button:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.toolbar-button.primary {\n  background: #3b82f6;\n  color: white;\n  text-decoration: none;\n}\n.toolbar-button.primary:hover {\n  background: #2563eb;\n}\n.homepage-scrollview {\n  padding-top: 52px;\n  min-height: 100vh;\n}\n.homepage-content {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 40px 24px;\n}\n.home-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.tile-grid {\n  display: grid;\n  grid-template-columns: 1fr 1.6fr;\n  grid-auto-rows: auto;\n  gap: 24px;\n  align-items: stretch;\n}\n@media (max-width: 767px) {\n  .tile-grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    gap: 20px;\n  }\n}\n.tile-container.tile-small {\n  grid-column: span 1;\n}\n.tile-container.tile-large {\n  grid-column: span 1;\n}\n.tile-container.tile-full {\n  grid-column: 1/-1;\n}\n.tile-container .tile {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 767px) {\n  .tile-container.tile-small,\n  .tile-container.tile-large,\n  .tile-container.tile-full {\n    grid-column: span 1;\n  }\n}\n.tile {\n  position: relative;\n  background: var(--tile-bg);\n  backdrop-filter: blur(30px);\n  -webkit-backdrop-filter: blur(30px);\n  border-radius: var(--tile-radius);\n  box-shadow: var(--tile-shadow);\n  border: 1px solid var(--tile-border);\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.tile:hover {\n  transform: translateY(-5px) scale(1.01);\n  background: var(--tile-bg-hover);\n  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  z-index: 10;\n}\n.tile .tile-border {\n  display: none;\n}\n.tile-banner {\n  padding: 20px 20px 16px;\n}\n.tile-banner .banner-link {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  text-decoration: none;\n  color: inherit;\n}\n.tile-banner.compact {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n}\n.banner-text .tile-heading {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.banner-text .tile-description {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n  font-weight: 500;\n}\n.app-icon-wrapper {\n  flex-shrink: 0;\n}\n.app-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow:\n    0 4px 8px rgba(0, 0, 0, 0.12),\n    0 8px 16px rgba(0, 0, 0, 0.08),\n    inset 0 1px 1px rgba(255, 255, 255, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.app-icon::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      rgba(255, 255, 255, 0) 40%);\n  pointer-events: none;\n}\n.app-icon svg {\n  width: 28px;\n  height: 28px;\n  color: white;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));\n}\n.app-icon.rocket {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n}\n.app-icon.code {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n}\n.app-icon.stats {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30b0c7 100%);\n}\n.app-icon.purple {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n}\n.app-icon.blue {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n}\n.app-icon.orange {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd60a 0%,\n      #ff9f0a 100%);\n}\n.app-icon.cyan {\n  background:\n    linear-gradient(\n      135deg,\n      #70d7ff 0%,\n      #5ac8fa 100%);\n}\n.app-icon.green {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30b0c7 100%);\n}\n.app-icon.red {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n}\n.app-icon.teal {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #30b0c7 100%);\n}\n.app-icon.pink {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d 0%,\n      #ff2d55 100%);\n}\n.app-icon.indigo {\n  background:\n    linear-gradient(\n      135deg,\n      #7c7ce0 0%,\n      #5856d6 100%);\n}\n.app-icon.gray {\n  background:\n    linear-gradient(\n      135deg,\n      #a8a8a8 0%,\n      #8e8e93 100%);\n}\n.app-icon.software-dev {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 50%,\n      #f093fb 100%);\n  box-shadow:\n    0 4px 15px rgba(102, 126, 234, 0.4),\n    0 8px 25px rgba(118, 75, 162, 0.3),\n    inset 0 1px 1px rgba(255, 255, 255, 0.4);\n}\n.profile-tile {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.profile-tile .profile-avatar {\n  position: relative;\n  width: 104px;\n  height: 104px;\n  margin-bottom: 20px;\n  background: var(--profile-avatar-bg);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--profile-avatar-shadow);\n}\n.profile-tile .profile-avatar .cloud-bg {\n  display: none;\n}\n.profile-tile .profile-avatar .avatar-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-tile .profile-avatar .avatar-icon svg {\n  width: 52px;\n  height: 52px;\n  color: var(--profile-icon-color);\n}\n.profile-tile .user-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.profile-tile .user-name {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n  letter-spacing: -0.5px;\n  margin-bottom: 6px;\n}\n.profile-tile .user-email {\n  font-size: 15px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.profile-tile .plan-badge {\n  margin-top: 20px;\n  padding: 6px 14px;\n  background: rgba(0, 122, 255, 0.1);\n  color: #007aff;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 100px;\n  letter-spacing: 0;\n}\n.services-tile .tile-content {\n  padding: 0 20px 24px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.services-tile .tile-content.tile-slider {\n  padding: 0;\n  overflow: hidden;\n  flex-direction: row;\n  width: 200%;\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.services-tile .tile-content.tile-slider.show-detail {\n  transform: translateX(-50%);\n}\n.services-tile .tile-content.tile-slider .tile-pane {\n  width: 50%;\n  flex-shrink: 0;\n}\n.services-tile .tile-content.tile-slider .tile-pane.service-list-pane {\n  padding: 0 20px 24px;\n}\n.services-tile .tile-content.tile-slider .tile-pane.detail-pane {\n  padding: 16px 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--tile-bg);\n}\n.services-tile .service-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  background: var(--service-list-bg);\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.services-tile .service-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: var(--service-row-bg);\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  transition: background 0.2s ease;\n}\n.services-tile .service-row:hover {\n  background: var(--service-row-hover);\n}\n.services-tile .service-row:active {\n  background: var(--service-row-active);\n}\n.services-tile .service-row.featured {\n  background: var(--service-featured-bg);\n}\n.services-tile .service-row.featured:hover {\n  background: var(--service-featured-hover);\n}\n.services-tile .service-row .featured-badge {\n  position: absolute;\n  top: 6px;\n  right: 10px;\n  padding: 3px 8px;\n  background: #ff3b30;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  border-radius: 4px;\n  animation: badge-pulse 2s infinite;\n}\n.services-tile .service-row .service-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n.services-tile .service-row .service-icon svg {\n  width: 24px;\n  height: 24px;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.services-tile .service-row .service-icon.purple {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n}\n.services-tile .service-row .service-icon.blue {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n}\n.services-tile .service-row .service-icon.orange {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd60a 0%,\n      #ff9f0a 100%);\n}\n.services-tile .service-row .service-icon.cyan {\n  background:\n    linear-gradient(\n      135deg,\n      #70d7ff 0%,\n      #5ac8fa 100%);\n}\n.services-tile .service-row .service-icon.green {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30b0c7 100%);\n}\n.services-tile .service-row .service-icon.red {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n}\n.services-tile .service-row .service-info {\n  flex: 1;\n  min-width: 0;\n}\n.services-tile .service-row .service-info .service-name {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n.services-tile .service-row .service-info .service-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 3px;\n}\n.services-tile .service-row .service-info .service-meta .meta-text {\n  font-size: 13px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.services-tile .service-row .service-info .service-meta .meta-price {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--price-color);\n}\n.services-tile .service-row .service-info .service-meta .meta-price.live {\n  color: #30d158;\n}\n.services-tile .service-row .service-info .service-meta .meta-price.discount {\n  color: #ff453a;\n}\n.services-tile .service-row .service-info .service-meta .meta-price.discount del {\n  color: #636366;\n  font-weight: 400;\n  margin-right: 4px;\n}\n.services-tile .service-row .chevron {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  color: var(--chevron-color);\n}\n.services-tile .service-row .chevron svg {\n  width: 100%;\n  height: 100%;\n}\n.services-tile .service-row:hover .chevron {\n  color: var(--text-secondary);\n}\n@keyframes badge-pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.85;\n    transform: scale(1.02);\n  }\n}\n.tech-tile .tech-content {\n  padding: 0 16px 20px;\n  flex: 1;\n}\n.tech-tile .tech-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tech-tile .tech-tag {\n  padding: 8px 14px;\n  background: var(--profile-avatar-bg);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.tech-tile .tech-tag:hover {\n  background: #007aff;\n  color: white;\n}\n.app-library {\n  padding: 16px;\n}\n.app-library .app-icon-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px 8px;\n}\n.app-library .app-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  padding: 8px 4px;\n  border-radius: 12px;\n  transition: transform 0.15s ease;\n}\n.app-library .app-link:hover {\n  transform: scale(1.02);\n}\n.app-library .app-link:active {\n  transform: scale(0.98);\n}\n.app-library .app-link .app-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.app-library .app-link .app-icon svg {\n  width: 26px;\n  height: 26px;\n}\n.app-library .app-link .app-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  max-width: 64px;\n}\n.app-library-wide {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.app-library-wide .app-navigator-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.1);\n}\n.app-library-wide .app-navigator-header .title {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n.app-library-wide .app-navigator-header .badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 22px;\n  padding: 0 8px;\n  background: #667eea;\n  border-radius: 11px;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  line-height: 1;\n}\n.app-library-wide .app-navigator-container {\n  position: relative;\n  min-height: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 24px 20px 16px;\n}\n.app-library-wide .app-icon-grid-paginated {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 24px 16px;\n  justify-items: center;\n}\n.app-library-wide .app-icon-grid-paginated .app-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: var(--text-primary);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon svg {\n  width: 32px;\n  height: 32px;\n  color: white;\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.blue {\n  background:\n    linear-gradient(\n      135deg,\n      #5ac8fa 0%,\n      #007aff 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.green {\n  background:\n    linear-gradient(\n      135deg,\n      #4cd964 0%,\n      #34c759 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.purple {\n  background:\n    linear-gradient(\n      135deg,\n      #bf5af2 0%,\n      #af52de 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.orange {\n  background:\n    linear-gradient(\n      135deg,\n      #ffcc00 0%,\n      #ff9500 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.pink {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d 0%,\n      #ff2d55 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.teal {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #5ac8fa 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.red {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-icon.gray {\n  background:\n    linear-gradient(\n      135deg,\n      #98989d 0%,\n      #636366 100%);\n}\n.app-library-wide .app-icon-grid-paginated .app-link .app-name {\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: -0.2px;\n  max-width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.85);\n}\n.app-library-wide .app-icon-grid-paginated .app-link:hover .app-icon {\n  transform: scale(1.08);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.app-library-wide .app-icon-grid-paginated .app-link:active .app-icon {\n  transform: scale(0.95);\n}\n.app-library-wide .app-icon-grid-paginated .app-link.active .app-icon {\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5), 0 6px 20px rgba(0, 0, 0, 0.15);\n  transform: scale(1.05);\n}\n.app-library-wide .app-icon-grid-paginated .app-link.active .app-name {\n  font-weight: 600;\n  color: #667eea;\n}\n.app-library-wide .pagination-dots {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding-top: 20px;\n}\n.app-library-wide .pagination-dots .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.app-library-wide .pagination-dots .dot.active {\n  width: 24px;\n  background: #667eea;\n  border-radius: 4px;\n}\n.app-library-wide .pagination-dots .dot:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.4);\n}\n:host-context(.dark-theme) .app-library-wide .app-navigator-header {\n  border-bottom-color: rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.2);\n}\n:host-context(.dark-theme) .app-library-wide .app-navigator-header .title {\n  color: rgba(255, 255, 255, 0.8);\n}\n:host-context(.dark-theme) .app-library-wide .app-icon-grid-paginated .app-link .app-name {\n  color: rgba(255, 255, 255, 0.9);\n}\n:host-context(.dark-theme) .app-library-wide .app-icon-grid-paginated .app-link.active .app-name {\n  color: #8ba1ff;\n}\n:host-context(.dark-theme) .app-library-wide .pagination-dots .dot {\n  background: rgba(255, 255, 255, 0.3);\n}\n:host-context(.dark-theme) .app-library-wide .pagination-dots .dot.active {\n  background: #8ba1ff;\n}\n:host-context(.dark-theme) .app-library-wide .pagination-dots .dot:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.4);\n}\n.stats-tile .tile-content {\n  padding: 0 16px 20px;\n}\n.stats-tile .stats-showcase {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.stats-tile .stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  padding: 8px 4px;\n}\n.stats-tile .stat-item .stat-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.stats-tile .stat-item .stat-circle .stat-number {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.3px;\n}\n.stats-tile .stat-item .stat-circle.blue {\n  background: #007aff;\n}\n.stats-tile .stat-item .stat-circle.purple {\n  background: #af52de;\n}\n.stats-tile .stat-item .stat-circle.green {\n  background: #34c759;\n}\n.stats-tile .stat-item .stat-circle.orange {\n  background: #ff9500;\n}\n.stats-tile .stat-item .stat-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.customize-section {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.customize-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  border-radius: 24px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  transition: all 0.2s;\n}\n.customize-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n.customize-button svg {\n  opacity: 0.9;\n}\n.legal-footer {\n  padding: 24px 16px 32px;\n  text-align: center;\n}\n.legal-footer .footer-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.legal-footer .footer-links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.legal-footer .footer-links .footer-link {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.legal-footer .footer-links .footer-link:hover {\n  color: white;\n  text-decoration: underline;\n}\n.legal-footer .footer-links .separator {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 12px;\n}\n.legal-footer .copyright {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.fade-in {\n  opacity: 0;\n  transform: translateY(16px);\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.fade-in.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (max-width: 767px) {\n  .homepage-content {\n    padding: 16px 16px 80px;\n  }\n  .tile-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .tile-container.tile-small,\n  .tile-container.tile-large,\n  .tile-container.tile-full {\n    grid-column: span 1;\n  }\n  .tile-container .tile {\n    height: auto;\n    min-height: auto;\n  }\n  .profile-tile {\n    padding: 24px 20px;\n    align-items: center;\n    text-align: center;\n  }\n  .profile-tile .profile-avatar {\n    width: 80px;\n    height: 80px;\n    margin-bottom: 16px;\n  }\n  .profile-tile .profile-avatar .avatar-icon svg {\n    width: 40px;\n    height: 40px;\n  }\n  .profile-tile .user-name {\n    font-size: 20px;\n    margin-bottom: 4px;\n  }\n  .profile-tile .user-email {\n    font-size: 14px;\n  }\n  .profile-tile .plan-badge {\n    margin-top: 16px;\n  }\n  .stats-tile .stats-showcase {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .stats-tile .stats-showcase .stat-circle {\n    width: 48px;\n    height: 48px;\n  }\n  .stats-tile .stats-showcase .stat-circle .stat-number {\n    font-size: 14px;\n  }\n  .app-library .app-icon-grid {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px 8px;\n  }\n  .app-library-wide {\n    padding: 16px 0;\n  }\n  .app-library-wide .app-icon-grid-paginated {\n    gap: 16px;\n    padding: 0 16px;\n  }\n  .app-library-wide .app-link {\n    min-width: 60px;\n    padding: 8px 4px;\n  }\n  .app-library-wide .app-link .app-icon {\n    width: 52px;\n    height: 52px;\n    border-radius: 12px;\n  }\n  .app-library-wide .app-link .app-icon svg {\n    width: 26px;\n    height: 26px;\n  }\n  .app-library-wide .app-link .app-name {\n    font-size: 11px;\n  }\n  .cloudos-toolbar {\n    padding: 0 16px;\n  }\n  .cloudos-toolbar .logo-text {\n    font-size: 17px;\n  }\n  .curriculum-section {\n    padding: 20px;\n    margin: 24px 0;\n  }\n  .curriculum-section .curriculum-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .curriculum-section .curriculum-intro {\n    gap: 16px;\n  }\n  .curriculum-section .intro-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .curriculum-section .week-items {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .curriculum-section .week-item {\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .curriculum-section .week-arrow {\n    transform: rotate(90deg);\n    align-self: center;\n    margin: 4px 0;\n  }\n  .curriculum-section .month-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .curriculum-section .launch-grid {\n    grid-template-columns: 1fr;\n  }\n  .curriculum-section .curriculum-cta {\n    flex-direction: column;\n    text-align: center;\n    padding: 24px;\n  }\n  .curriculum-section .curriculum-cta .cta-content {\n    margin-bottom: 20px;\n  }\n  .curriculum-section .curriculum-cta .cta-price {\n    justify-content: center;\n    margin-bottom: 20px;\n  }\n  .curriculum-section .curriculum-cta .cta-button {\n    width: 100%;\n    justify-content: center;\n  }\n  .hero-story {\n    padding: 24px;\n    margin-bottom: 24px;\n  }\n  .hero-story .story-quote blockquote {\n    font-size: 18px;\n    line-height: 1.4;\n  }\n  .hero-story .story-quote .quote-icon {\n    font-size: 32px;\n  }\n  .why-now-grid,\n  .values-grid,\n  .target-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .operation-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .provide-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .vision-section {\n    padding: 24px 20px;\n  }\n  .vision-section .vision-main {\n    font-size: 16px;\n  }\n  .vision-section .vision-sub {\n    font-size: 14px;\n  }\n  .services-tile .tile-content {\n    padding: 0 16px 20px;\n  }\n  .services-tile .service-row {\n    padding: 12px;\n    gap: 12px;\n  }\n  .services-tile .service-row .service-icon {\n    width: 36px;\n    height: 36px;\n  }\n  .services-tile .service-row .service-icon svg {\n    width: 20px;\n    height: 20px;\n  }\n  .services-tile .service-row .service-name {\n    font-size: 14px;\n  }\n  .services-tile .service-row .meta-text,\n  .services-tile .service-row .meta-price {\n    font-size: 12px;\n  }\n}\n.curriculum-section {\n  margin: 32px 0;\n  background: var(--tile-bg);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-radius: var(--tile-radius);\n  border: 1px solid var(--tile-border);\n  box-shadow: var(--tile-shadow);\n  padding: 32px;\n  overflow: hidden;\n}\n.curriculum-video-background {\n  position: relative;\n  width: 100%;\n  height: 280px;\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  background: #000;\n}\n.curriculum-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  z-index: 1;\n}\n.curriculum-video-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 97, 255, 0.15) 0%,\n      rgba(96, 239, 255, 0.1) 100%);\n  pointer-events: none;\n  z-index: 2;\n}\n.curriculum-mute-toggle {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  z-index: 10;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: all 0.3s ease;\n}\n.curriculum-mute-toggle svg {\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n}\n.curriculum-mute-toggle:hover {\n  background: rgba(0, 0, 0, 0.8);\n  transform: scale(1.1);\n}\n.curriculum-mute-toggle.muted svg {\n  opacity: 0.6;\n}\n.curriculum-header {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.curriculum-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      #5ac8fa 0%,\n      #007aff 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.curriculum-icon svg {\n  width: 32px;\n  height: 32px;\n  color: white;\n}\n.curriculum-title-wrapper {\n  flex: 1;\n}\n.curriculum-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.curriculum-subtitle {\n  font-size: 15px;\n  color: var(--text-secondary);\n  margin: 4px 0 0 0;\n  font-weight: 500;\n}\n.curriculum-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff3b30 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 20px;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.curriculum-intro {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n.intro-card {\n  flex: 1;\n  min-width: 280px;\n  background: var(--intro-card-bg);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--intro-card-border);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.intro-card .intro-icon {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n.intro-card h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.intro-card p {\n  font-size: 15px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.5;\n  font-weight: 500;\n}\n.intro-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  flex: 1;\n  min-width: 280px;\n}\n.intro-stat {\n  background: var(--intro-stat-bg);\n  border-radius: var(--tile-radius);\n  padding: 16px;\n  text-align: center;\n  border: 1px solid var(--intro-stat-border);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.intro-stat .stat-value {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.intro-stat .stat-desc {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.intro-stat.highlight-stat {\n  background:\n    linear-gradient(\n      135deg,\n      #007aff 0%,\n      #5856d6 100%);\n  border: none;\n  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.3);\n  transform: scale(1.05);\n  z-index: 1;\n}\n.intro-stat.highlight-stat .stat-value {\n  color: white;\n  font-size: 28px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.intro-stat.highlight-stat .stat-desc {\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n.intro-stat.highlight-stat:hover {\n  transform: scale(1.08) translateY(-2px);\n  box-shadow: 0 12px 28px rgba(0, 122, 255, 0.4);\n}\n.curriculum-phase {\n  margin-bottom: 28px;\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--tile-border);\n}\n.phase-header {\n  margin-bottom: 20px;\n}\n.phase-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 12px;\n  margin-bottom: 8px;\n}\n.phase-badge.development {\n  background:\n    linear-gradient(\n      135deg,\n      #5856d6 0%,\n      #af52de 100%);\n  color: white;\n}\n.phase-badge.launch {\n  background:\n    linear-gradient(\n      135deg,\n      #34c759 0%,\n      #30d158 100%);\n  color: white;\n}\n.phase-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 6px 0;\n}\n.phase-desc {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.weekly-structure {\n  background: rgba(88, 86, 214, 0.06);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  border: 1px solid rgba(88, 86, 214, 0.1);\n}\n.structure-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #5856d6;\n  margin: 0 0 16px 0;\n}\n.week-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.week-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--tile-bg);\n  padding: 12px 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.week-icon {\n  font-size: 24px;\n}\n.week-content {\n  display: flex;\n  flex-direction: column;\n}\n.week-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.week-desc {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.week-arrow {\n  font-size: 20px;\n  color: #5856d6;\n  font-weight: bold;\n}\n.month-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n.month-card {\n  background: var(--tile-bg);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.month-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.month-number {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #5856d6 0%,\n      #af52de 100%);\n  padding: 3px 8px;\n  border-radius: 6px;\n  margin-bottom: 10px;\n}\n.month-info h4 {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n}\n.month-info p {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin: 0 0 8px 0;\n  line-height: 1.4;\n}\n.month-output {\n  display: inline-block;\n  font-size: 11px;\n  color: #007aff;\n  background: rgba(0, 122, 255, 0.08);\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.launch-phase {\n  background: rgba(52, 199, 89, 0.04);\n  border: 1px solid rgba(52, 199, 89, 0.15);\n}\n.launch-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.launch-card {\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 20px;\n  border: 1px solid rgba(52, 199, 89, 0.15);\n}\n.launch-card .launch-icon {\n  font-size: 32px;\n  margin-bottom: 12px;\n}\n.launch-card h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 12px 0;\n}\n.launch-card ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.launch-card ul li {\n  font-size: 13px;\n  color: var(--text-secondary);\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.launch-card ul li::before {\n  content: "\\2713";\n  color: #34c759;\n  font-weight: bold;\n}\n.launch-card ul li:last-child {\n  border-bottom: none;\n}\n.curriculum-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1d1d1f 0%,\n      #3a3a3c 100%);\n  border-radius: 16px;\n  padding: 28px 32px;\n  margin-top: 8px;\n}\n.cta-content h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 6px 0;\n}\n.cta-content p {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0 0 12px 0;\n}\n.cta-price {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.original-price {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: line-through;\n}\n.discount-price {\n  font-size: 24px;\n  font-weight: 700;\n  color: #5ac8fa;\n}\n.discount-badge {\n  background: #ff3b30;\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.cta-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #007aff 0%,\n      #5856d6 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 28px;\n  border-radius: 12px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cta-button svg {\n  width: 20px;\n  height: 20px;\n}\n.cta-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 122, 255, 0.4);\n}\n@media (max-width: 1024px) {\n  .month-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .intro-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .why-now-grid {\n    grid-template-columns: 1fr;\n  }\n  .values-grid {\n    grid-template-columns: 1fr;\n  }\n  .operation-grid {\n    grid-template-columns: 1fr;\n  }\n  .provide-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .target-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-story {\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(88, 86, 214, 0.08) 0%,\n      rgba(175, 82, 222, 0.08) 100%);\n  border-radius: 20px;\n  padding: 32px;\n  border: 1px solid rgba(88, 86, 214, 0.15);\n}\n.story-quote {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.story-quote .quote-icon {\n  font-size: 48px;\n  color: #5856d6;\n  line-height: 1;\n  font-family: Georgia, serif;\n}\n.story-quote blockquote {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  font-style: italic;\n}\n.story-quote .quote-context {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.story-message {\n  text-align: center;\n  padding-top: 20px;\n  border-top: 1px solid rgba(88, 86, 214, 0.15);\n}\n.story-message p {\n  font-size: 16px;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.7;\n}\n.story-message p strong {\n  color: #5856d6;\n}\n.why-now-section,\n.core-values-section,\n.operation-section,\n.provide-section,\n.target-section {\n  margin-bottom: 28px;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.section-header .section-icon {\n  font-size: 24px;\n}\n.section-header h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.section-header h3 .highlight {\n  color: #007aff;\n}\n.why-now-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.why-card {\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.why-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.why-card .why-icon {\n  font-size: 36px;\n  margin-bottom: 12px;\n}\n.why-card h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.why-card p {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.why-card p strong {\n  color: var(--text-primary);\n}\n.values-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.value-card {\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid var(--tile-border);\n  position: relative;\n  transition: all 0.2s ease;\n}\n.value-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.value-card.featured {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 59, 48, 0.06) 0%,\n      rgba(255, 149, 0, 0.06) 100%);\n  border-color: rgba(255, 59, 48, 0.15);\n}\n.value-card .value-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #ff3b30 0%,\n      #ff9500 100%);\n  padding: 4px 10px;\n  border-radius: 10px;\n}\n.value-card .value-icon {\n  font-size: 36px;\n  margin-bottom: 12px;\n}\n.value-card h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.value-card p {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.value-card p strong {\n  color: var(--text-primary);\n}\n.operation-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.operation-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 20px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.operation-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.operation-card .op-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.operation-card .op-icon.green {\n  background: rgba(52, 199, 89, 0.12);\n}\n.operation-card .op-icon.blue {\n  background: rgba(0, 122, 255, 0.12);\n}\n.operation-card .op-icon.purple {\n  background: rgba(88, 86, 214, 0.12);\n}\n.operation-card .op-icon.orange {\n  background: rgba(255, 149, 0, 0.12);\n}\n.operation-card .op-content {\n  flex: 1;\n}\n.operation-card .op-content h4 {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 6px 0;\n}\n.operation-card .op-content p {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin: 0 0 8px 0;\n  line-height: 1.5;\n}\n.operation-card .op-content p strong {\n  color: var(--text-primary);\n}\n.operation-card .op-content .op-tag {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #007aff;\n  background: rgba(0, 122, 255, 0.08);\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.provide-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.provide-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--tile-bg);\n  border-radius: var(--tile-radius);\n  padding: 16px;\n  border: 1px solid var(--tile-border);\n  transition: all 0.2s ease;\n}\n.provide-item:hover {\n  background: rgba(0, 122, 255, 0.04);\n  border-color: rgba(0, 122, 255, 0.15);\n}\n.provide-item .provide-icon {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.provide-item span:last-child {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.target-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.target-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 122, 255, 0.06) 0%,\n      rgba(90, 200, 250, 0.06) 100%);\n  border-radius: var(--tile-radius);\n  padding: 24px;\n  border: 1px solid rgba(0, 122, 255, 0.12);\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.target-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 122, 255, 0.12);\n}\n.target-card .target-emoji {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.target-card h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n.target-card p {\n  font-size: 14px;\n  color: #6e6e73;\n  margin: 0;\n  line-height: 1.5;\n}\n.target-card p strong {\n  color: #007aff;\n}\n.vision-section {\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      #1d1d1f 0%,\n      #3a3a3c 100%);\n  border-radius: 20px;\n  padding: 40px;\n  text-align: center;\n}\n.vision-content .vision-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.vision-content h3 {\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 20px 0;\n}\n.vision-content .vision-main {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.7;\n  margin: 0 0 16px 0;\n}\n.vision-content .vision-main strong {\n  color: #5ac8fa;\n}\n.vision-content .vision-sub {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.7;\n  margin: 0;\n}\n.vision-content .vision-sub strong {\n  color: #ff9500;\n}\n.curriculum-divider {\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(0, 0, 0, 0.1),\n      transparent);\n  margin: 32px 0;\n}\n@media (max-width: 1024px) {\n  .why-now-grid,\n  .values-grid,\n  .target-grid,\n  .operation-grid,\n  .provide-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .intro-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .month-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .why-now-grid,\n  .values-grid,\n  .target-grid,\n  .operation-grid,\n  .provide-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .intro-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .month-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .app-library .app-icon-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.detail-pane .detail-header {\n  display: flex;\n  align-items: center;\n}\n.detail-pane .back-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  color: #007aff;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.detail-pane .back-btn:hover {\n  background: rgba(0, 122, 255, 0.1);\n}\n.detail-pane .back-btn svg {\n  color: #007aff;\n}\n.detail-pane .detail-content {\n  text-align: center;\n  padding: 8px 0;\n}\n.detail-pane .detail-icon {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 12px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-pane .detail-icon svg {\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.detail-pane .detail-icon.purple {\n  background:\n    linear-gradient(\n      135deg,\n      #d488ff 0%,\n      #af52de 100%);\n  box-shadow: 0 4px 12px rgba(175, 82, 222, 0.3);\n}\n.detail-pane .detail-icon.blue {\n  background:\n    linear-gradient(\n      135deg,\n      #64d2ff 0%,\n      #007aff 100%);\n  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);\n}\n.detail-pane .detail-icon.orange {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd60a 0%,\n      #ff9f0a 100%);\n  box-shadow: 0 4px 12px rgba(255, 159, 10, 0.3);\n}\n.detail-pane .detail-icon.cyan {\n  background:\n    linear-gradient(\n      135deg,\n      #70d7ff 0%,\n      #5ac8fa 100%);\n  box-shadow: 0 4px 12px rgba(90, 200, 250, 0.3);\n}\n.detail-pane .detail-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n}\n.detail-pane .detail-subtitle {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin: 0 0 12px 0;\n}\n.detail-pane .detail-desc {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.detail-pane .detail-features {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.detail-pane .detail-features .feature-item {\n  font-size: 13px;\n  color: var(--text-primary);\n  text-align: left;\n  padding: 8px 12px;\n  background: rgba(52, 199, 89, 0.08);\n  border-radius: 8px;\n}\n.detail-pane .apply-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #007aff 0%,\n      #5856d6 100%);\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.detail-pane .apply-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 122, 255, 0.4);\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .app-library-wide .app-icon-grid-paginated {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 18px 14px;\n  }\n}\n/*# sourceMappingURL=ai-global-expedition.component.css.map */\n'] }]
  }], () => [{ type: ThemeService }, { type: Router }], { logoContainer: [{
    type: ViewChild,
    args: ["logoContainer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiGlobalExpeditionComponent, { className: "AiGlobalExpeditionComponent", filePath: "src/app/modules/ai/components/ai-global-expedition/ai-global-expedition.component.ts", lineNumber: 16 });
})();

// src/app/modules/ai/components/startup-package/startup-package.ts
var StartupPackage = class _StartupPackage {
  viewportScroller;
  elementRef;
  themeService;
  isDarkMode = true;
  constructor(viewportScroller, elementRef, themeService) {
    this.viewportScroller = viewportScroller;
    this.elementRef = elementRef;
    this.themeService = themeService;
  }
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
    setTimeout(() => {
      const hostElement = this.elementRef.nativeElement;
      if (hostElement) {
        hostElement.scrollTop = 0;
      }
    }, 0);
  }
  ngAfterViewInit() {
    this.initScrollAnimations();
    setTimeout(() => {
      const hostElement = this.elementRef.nativeElement;
      if (hostElement) {
        hostElement.scrollTop = 0;
      }
    }, 100);
  }
  ngOnDestroy() {
  }
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const hostElement = this.elementRef.nativeElement;
    if (element && hostElement) {
      const elementTop = element.offsetTop;
      hostElement.scrollTo({
        top: elementTop - 100,
        behavior: "smooth"
      });
    }
  }
  initScrollAnimations() {
    const hostElement = this.elementRef.nativeElement;
    const observerOptions = {
      root: hostElement,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
    hostElement.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
    hostElement.querySelectorAll(".feature-card, .product-card, .plan-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }
  static \u0275fac = function StartupPackage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StartupPackage)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StartupPackage, selectors: [["app-startup-package"]], standalone: false, decls: 289, vars: 2, consts: [[1, "startup-package-container"], [1, "hero"], [1, "container"], [1, "hero-content", "fade-in"], [1, "hero-badge"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "hero-actions"], [1, "button-primary", 3, "click"], [1, "button-secondary", 3, "click"], ["id", "features", 1, "features"], [1, "section-header", "fade-in"], [1, "section-title"], [1, "section-subtitle"], [1, "features-grid"], [1, "feature-card", "fade-in"], [1, "feature-icon"], [1, "feature-title"], [1, "feature-description"], ["id", "products", 1, "products"], [1, "products-grid"], [1, "product-card", "fade-in"], [1, "product-icon"], [1, "product-title"], [1, "product-description"], [1, "product-features"], ["id", "plans", 1, "plans"], [1, "plans-grid"], [1, "plan-card", "fade-in"], [1, "plan-title"], [1, "plan-price"], [1, "plan-period"], [1, "plan-features"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSf-ZzMRC4iORs0LNUUC8CtYdT-cUu0WiI52N_4SkftEXHzuTw/viewform?usp=dialog", "target", "_blank", 1, "plan-button", "secondary"], [1, "plan-card", "featured", "fade-in"], [1, "plan-badge"], ["routerLink", "/education/home", 1, "plan-button"], ["id", "contact", 1, "contact"], [1, "contact-actions", "fade-in"], ["routerLink", "/education/home", 1, "contact-button"], [1, "contact-info", "fade-in"], [1, "footer"]], template: function StartupPackage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
      \u0275\u0275text(6, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "\uCC3D\uC5C5 \uC2A4\uD0C0\uD2B8\uC5C5 \uC804\uC6A9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "h1", 5);
      \u0275\u0275text(10, " \uC608\uBE44\uCC3D\uC5C5\uD328\uD0A4\uC9C0 \uC900\uBE44\uBD80\uD130");
      \u0275\u0275element(11, "br");
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "\uC2A4\uD0C0\uD2B8\uC5C5 \uC131\uACF5\uAE4C\uC9C0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 7);
      \u0275\u0275text(15, " \uC644\uC131\uB3C4 \uB192\uC740 MVP \uC81C\uD488\uC744 \uC81C\uC791\uD574\uB4DC\uB9AC\uACE0, \uC608\uCC3D\uD328 \uC9C4\uD589 \uC2DC \uD544\uC694\uD55C \uBAA8\uB4E0 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD328\uD0A4\uC9C0\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.");
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17, " \uC544\uC774\uB514\uC5B4\uB9CC \uC788\uC5B4\uB3C4 \uAC71\uC815\uC5C6\uC774! \uC800\uB834\uD55C \uC6D4 \uBE44\uC6A9\uC73C\uB85C \uC804\uBB38 \uAC1C\uBC1C\uD300\uC744 \uC774\uC6A9\uD558\uC138\uC694. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "a", 9);
      \u0275\u0275listener("click", function StartupPackage_Template_a_click_19_listener() {
        return ctx.scrollToSection("plans");
      });
      \u0275\u0275text(20, "MVP \uC2E0\uCCAD\uD558\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 10);
      \u0275\u0275listener("click", function StartupPackage_Template_a_click_21_listener() {
        return ctx.scrollToSection("products");
      });
      \u0275\u0275text(22, "\uC81C\uD488 \uB458\uB7EC\uBCF4\uAE30");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "section", 11)(24, "div", 2)(25, "div", 12)(26, "h2", 13);
      \u0275\u0275text(27, "\uC65C \uC2A4\uD0C0\uD130\uD328\uD0A4\uC9C0\uC778\uAC00?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 14);
      \u0275\u0275text(29, " \uC608\uBE44\uCC3D\uC5C5\uC790\uBD80\uD130 \uC131\uC7A5\uD558\uB294 \uC2A4\uD0C0\uD2B8\uC5C5\uAE4C\uC9C0, \uAC01 \uB2E8\uACC4\uC5D0 \uB9DE\uB294 \uC644\uBCBD\uD55C \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "div", 17);
      \u0275\u0275text(33, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h3", 18);
      \u0275\u0275text(35, "\uC608\uCC3D\uD328 \uB9DE\uCDA4 \uC9C0\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 19);
      \u0275\u0275text(37, " \uC608\uBE44\uCC3D\uC5C5\uD328\uD0A4\uC9C0 \uC900\uBE44\uC0DD\uC744 \uC704\uD55C \uC644\uC131\uB3C4 \uB192\uC740 MVP \uC81C\uD488\uC744 \uC81C\uC791\uD574\uB4DC\uB9BD\uB2C8\uB2E4. \uAC80\uC99D\uB41C \uC544\uC774\uB514\uC5B4\uB85C \uC131\uACF5\uC801\uC778 \uCC3D\uC5C5\uC744 \uC2DC\uC791\uD558\uC138\uC694. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 16)(39, "div", 17);
      \u0275\u0275text(40, "\u{1F4A1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h3", 18);
      \u0275\u0275text(42, "\uC544\uC774\uB514\uC5B4 \uC2E4\uD604");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 19);
      \u0275\u0275text(44, " \uAC1C\uBC1C \uC9C0\uC2DD\uC774 \uC5C6\uC5B4\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4. \uC800\uB834\uD55C \uC6D4 \uBE44\uC6A9\uC73C\uB85C \uC804\uBB38 \uAC1C\uBC1C\uD300\uC774 \uC5EC\uB7EC\uBD84\uC758 \uC544\uC774\uB514\uC5B4\uB97C \uD604\uC2E4\uB85C \uB9CC\uB4E4\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 16)(46, "div", 17);
      \u0275\u0275text(47, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "h3", 18);
      \u0275\u0275text(49, "\uC62C\uC778\uC6D0 \uD328\uD0A4\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 19);
      \u0275\u0275text(51, " \uD611\uC5C5\uD234\uBD80\uD130 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7AB\uD3FC\uAE4C\uC9C0, \uC2A4\uD0C0\uD2B8\uC5C5\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD558\uB098\uC758 \uD328\uD0A4\uC9C0\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "section", 20)(53, "div", 2)(54, "div", 12)(55, "h2", 13);
      \u0275\u0275text(56, "\uD575\uC2EC \uC81C\uD488\uAD70");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 14);
      \u0275\u0275text(58, " \uC2A4\uD0C0\uD2B8\uC5C5 \uC131\uACF5\uC744 \uC704\uD55C \uD544\uC218 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB4E4\uC744 \uC644\uBCBD\uD558\uAC8C \uAC16\uCDB0\uB4DC\uB9BD\uB2C8\uB2E4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 21)(60, "div", 22)(61, "div", 23);
      \u0275\u0275text(62, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h3", 24);
      \u0275\u0275text(64, "\uD611\uC5C5\uD234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 25);
      \u0275\u0275text(66, " \uD300\uC6D0\uB4E4\uACFC\uC758 \uC6D0\uD65C\uD55C \uC18C\uD1B5\uACFC \uD611\uC5C5\uC744 \uC704\uD55C \uD1B5\uD569 \uD611\uC5C5 \uD50C\uB7AB\uD3FC ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "ul", 26)(68, "li");
      \u0275\u0275text(69, "\uC2E4\uC2DC\uAC04 \uBA54\uC2DC\uC9D5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "li");
      \u0275\u0275text(71, "\uD30C\uC77C \uACF5\uC720 & \uBC84\uC804 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "li");
      \u0275\u0275text(73, "\uCE98\uB9B0\uB354 \uD1B5\uD569 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "li");
      \u0275\u0275text(75, "\uBAA8\uBC14\uC77C \uC571 \uC9C0\uC6D0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 22)(77, "div", 23);
      \u0275\u0275text(78, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "h3", 24);
      \u0275\u0275text(80, "\uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 25);
      \u0275\u0275text(82, " \uCCB4\uACC4\uC801\uC778 \uD504\uB85C\uC81D\uD2B8 \uACC4\uD68D\uBD80\uD130 \uC2E4\uD589\uAE4C\uC9C0 \uAD00\uB9AC\uD558\uB294 \uC804\uBB38 \uB3C4\uAD6C ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "ul", 26)(84, "li");
      \u0275\u0275text(85, "\uAC04\uD2B8\uCC28\uD2B8 & \uCE78\uBC18\uBCF4\uB4DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "li");
      \u0275\u0275text(87, "\uC791\uC5C5 \uBC30\uC815 & \uC9C4\uD589\uC0C1\uD669 \uCD94\uC801");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "li");
      \u0275\u0275text(89, "\uB9AC\uC18C\uC2A4 \uAD00\uB9AC & \uC77C\uC815 \uCD5C\uC801\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "li");
      \u0275\u0275text(91, "\uC0C1\uC138 \uBCF4\uACE0\uC11C \uC0DD\uC131");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 22)(93, "div", 23);
      \u0275\u0275text(94, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "h3", 24);
      \u0275\u0275text(96, "\uB9C8\uCF00\uD305 \uC790\uB3D9\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 25);
      \u0275\u0275text(98, " \uD6A8\uC728\uC801\uC778 \uB9C8\uCF00\uD305 \uCEA0\uD398\uC778 \uC2E4\uD589\uACFC \uACE0\uAC1D \uAD00\uB9AC\uB97C \uC704\uD55C \uC790\uB3D9\uD654 \uC2DC\uC2A4\uD15C ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "ul", 26)(100, "li");
      \u0275\u0275text(101, "\uC774\uBA54\uC77C \uB9C8\uCF00\uD305 \uC790\uB3D9\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "li");
      \u0275\u0275text(103, "SNS \uD1B5\uD569 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "li");
      \u0275\u0275text(105, "SNS \uCF58\uD150\uCE20 \uC0DD\uC131 \uBC0F \uBC30\uD3EC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "li");
      \u0275\u0275text(107, "\uACE0\uAC1D \uC138\uADF8\uBA3C\uD14C\uC774\uC158");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "li");
      \u0275\u0275text(109, "\uACE0\uAC1D\uAD00\uB9AC \uC790\uB3D9\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "li");
      \u0275\u0275text(111, "\uC131\uACFC \uBD84\uC11D & \uB9AC\uD3EC\uD305");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 22)(113, "div", 23);
      \u0275\u0275text(114, "\u{1F6D2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "h3", 24);
      \u0275\u0275text(116, "\uC1FC\uD551\uBAB0 & \uC911\uAC1C \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p", 25);
      \u0275\u0275text(118, " \uBAA8\uBC14\uC77C \uCD5C\uC801\uD654\uB41C \uC804\uBB38 \uC774\uCEE4\uBA38\uC2A4 \uBC0F \uC911\uAC1C \uD50C\uB7AB\uD3FC \uC194\uB8E8\uC158 (\uC77C\uBC18\uD615, \uC785\uC810\uD615, \uC7AC\uB2A5\uB9C8\uCF13, \uC911\uAC1C\uC2DC\uC2A4\uD15C \uD3EC\uD568) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "ul", 26)(120, "li");
      \u0275\u0275text(121, "\uBC18\uC751\uD615 \uC1FC\uD551\uBAB0 \uAD6C\uCD95");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "li");
      \u0275\u0275text(123, "\uC785\uC810\uD615 \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "li");
      \u0275\u0275text(125, "\uC7AC\uB2A5\uB9C8\uCF13 \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "li");
      \u0275\u0275text(127, "\uB9E4\uCE6D \uC54C\uACE0\uB9AC\uC998 \uAD6C\uD604");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "li");
      \u0275\u0275text(129, "\uC0AC\uC6A9\uC790 \uC778\uC99D & \uD3C9\uAC00 \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "li");
      \u0275\u0275text(131, "\uACB0\uC81C \uC2DC\uC2A4\uD15C & \uC911\uAC1C \uC11C\uBE44\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "li");
      \u0275\u0275text(133, "\uC7AC\uACE0 \uAD00\uB9AC & \uC8FC\uBB38 \uCC98\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "li");
      \u0275\u0275text(135, "\uBD84\uC7C1 \uC870\uC815 \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "li");
      \u0275\u0275text(137, "SEO \uCD5C\uC801\uD654");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "div", 22)(139, "div", 23);
      \u0275\u0275text(140, "\u{1F465}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h3", 24);
      \u0275\u0275text(142, "\uCEE4\uBBA4\uB2C8\uD2F0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p", 25);
      \u0275\u0275text(144, " \uC0AC\uC6A9\uC790 \uCC38\uC5EC\uD615 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uACE0\uAC1D \uCDA9\uC131\uB3C4\uC640 \uBE0C\uB79C\uB4DC \uAC00\uCE58\uB97C \uB192\uC774\uB294 \uC194\uB8E8\uC158 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "ul", 26)(146, "li");
      \u0275\u0275text(147, "\uAC8C\uC2DC\uD310 & \uD3EC\uB7FC \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "li");
      \u0275\u0275text(149, "\uC0AC\uC6A9\uC790 \uB808\uBCA8 & \uD3EC\uC778\uD2B8 \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "li");
      \u0275\u0275text(151, "\uC2E4\uC2DC\uAC04 \uC54C\uB9BC & \uD53C\uB4DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "li");
      \u0275\u0275text(153, "\uC774\uBCA4\uD2B8 & \uD22C\uD45C \uAE30\uB2A5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "li");
      \u0275\u0275text(155, "\uCF58\uD150\uCE20 \uAD00\uB9AC & \uC870\uD68C\uC218 \uBD84\uC11D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "li");
      \u0275\u0275text(157, "\uBAA8\uBC14\uC77C \uC571 \uC5F0\uB3D9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "div", 22)(159, "div", 23);
      \u0275\u0275text(160, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "h3", 24);
      \u0275\u0275text(162, "\uCC44\uD305 \uC0C1\uB2F4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "p", 25);
      \u0275\u0275text(164, " \uACE0\uAC1D\uACFC\uC758 \uC2E4\uC2DC\uAC04 \uC18C\uD1B5\uC744 \uC704\uD55C \uCC44\uD305 \uC0C1\uB2F4 \uC2DC\uC2A4\uD15C ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "ul", 26)(166, "li");
      \u0275\u0275text(167, "\uC6F9\uC0AC\uC774\uD2B8 \uD1B5\uD569 \uCC44\uD305");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "li");
      \u0275\u0275text(169, "AI \uCC57\uBD07 \uC5F0\uB3D9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "li");
      \u0275\u0275text(171, "\uC0C1\uB2F4 \uC774\uB825 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "li");
      \u0275\u0275text(173, "\uB2E4\uC911 \uCC44\uB110 \uC9C0\uC6D0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "div", 22)(175, "div", 23);
      \u0275\u0275text(176, "\u{1F4C4}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "h3", 24);
      \u0275\u0275text(178, "\uBB38\uC11C \uC0DD\uC131 \uBC0F \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p", 25);
      \u0275\u0275text(180, " \uC5C5\uBB34 \uD6A8\uC728\uC131\uC744 \uADF9\uB300\uD654\uD558\uB294 \uBB38\uC11C \uC0DD\uC131 \uBC0F \uAD00\uB9AC \uC2DC\uC2A4\uD15C ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "ul", 26)(182, "li");
      \u0275\u0275text(183, "\uC790\uB3D9 \uBB38\uC11C \uC0DD\uC131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "li");
      \u0275\u0275text(185, "\uD15C\uD50C\uB9BF \uB77C\uC774\uBE0C\uB7EC\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "li");
      \u0275\u0275text(187, "\uBC84\uC804 \uAD00\uB9AC & \uD788\uC2A4\uD1A0\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "li");
      \u0275\u0275text(189, "\uD611\uC5C5 \uD3B8\uC9D1 \uAE30\uB2A5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "li");
      \u0275\u0275text(191, "\uC804\uC790\uC11C\uBA85 \uC5F0\uB3D9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "li");
      \u0275\u0275text(193, "RAG AI\uB97C \uD65C\uC6A9\uD55C \uC99D\uAC15\uAC80\uC0C9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "li");
      \u0275\u0275text(195, "\uBB38\uC11C \uBCF4\uC548 & \uAD8C\uD55C \uAD00\uB9AC");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(196, "section", 27)(197, "div", 2)(198, "div", 12)(199, "h2", 13);
      \u0275\u0275text(200, "\uC694\uAE08\uC81C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "p", 14);
      \u0275\u0275text(202, " \uCC3D\uC5C5 \uB2E8\uACC4\uC5D0 \uB9DE\uB294 \uCD5C\uC801\uC758 \uD50C\uB79C\uC744 \uC120\uD0DD\uD558\uC138\uC694 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div", 28)(204, "div", 29)(205, "h3", 30);
      \u0275\u0275text(206, "\uC608\uCC3D\uD328 \uC900\uBE44");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 31);
      \u0275\u0275text(208, "1,000\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 32);
      \u0275\u0275text(210, "\uC644\uC131\uD615 \uC81C\uD488 \uC81C\uC791");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "ul", 33)(212, "li");
      \u0275\u0275text(213, "\uC644\uC131\uD615 \uC81C\uD488 1\uAC1C \uC81C\uC791");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "li");
      \u0275\u0275text(215, "\uBAA8\uB4E0 \uAE30\uB2A5 \uAD6C\uD604");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "li");
      \u0275\u0275text(217, "1\uB144 \uD638\uC2A4\uD305 \uD3EC\uD568");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "li");
      \u0275\u0275text(219, "\uAE30\uC220 \uBA58\uD1A0\uB9C1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "li");
      \u0275\u0275text(221, "\uC608\uCC3D\uD328 \uC9C0\uC6D0\uC11C \uC791\uC131 \uB3C4\uC6C0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "a", 34);
      \u0275\u0275text(223, " \uC608\uCC3D\uD328 \uC900\uBE44 \uC2E0\uCCAD ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 35)(225, "div", 36);
      \u0275\u0275text(226, "\uC778\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "h3", 30);
      \u0275\u0275text(228, "\uC2A4\uD0C0\uD2B8\uC5C5 \uD328\uD0A4\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 31);
      \u0275\u0275text(230, "99\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "div", 32);
      \u0275\u0275text(232, "\uC6D4 / 7\uAC1C \uC81C\uD488 \uD3EC\uD568");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "ul", 33)(234, "li");
      \u0275\u0275text(235, "7\uAC1C \uD575\uC2EC \uC81C\uD488 \uBAA8\uB450 \uC81C\uACF5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "li");
      \u0275\u0275text(237, "\uBB34\uC81C\uD55C \uC0AC\uC6A9\uC790");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "li");
      \u0275\u0275text(239, "24/7 \uAE30\uC220 \uC9C0\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "li");
      \u0275\u0275text(241, "\uC6D4 1\uD68C \uC5C5\uB370\uC774\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "li");
      \u0275\u0275text(243, "\uB370\uC774\uD130 \uBC31\uC5C5 \uC11C\uBE44\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "li");
      \u0275\u0275text(245, "\uB9DE\uCDA4 \uAE30\uB2A5 \uCD94\uAC00 (\uC6D4 1\uD68C)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "a", 37);
      \u0275\u0275text(247, " \uD328\uD0A4\uC9C0 \uC2DC\uC791\uD558\uAE30 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "div", 29)(249, "h3", 30);
      \u0275\u0275text(250, "\uC804\uB2F4 \uAC1C\uBC1C\uD300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 31);
      \u0275\u0275text(252, "500\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 32);
      \u0275\u0275text(254, "\uC6D4 / \uB9DE\uCDA4 \uAC1C\uBC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "ul", 33)(256, "li");
      \u0275\u0275text(257, "\uC804\uB2F4 \uAC1C\uBC1C\uD300 \uBC30\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "li");
      \u0275\u0275text(259, "\uC544\uC774\uB514\uC5B4 \uAE30\uD68D\uBD80\uD130 \uAD6C\uD604\uAE4C\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "li");
      \u0275\u0275text(261, "\uC8FC\uAC04 \uC9C4\uD589\uC0C1\uD669 \uBCF4\uACE0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "li");
      \u0275\u0275text(263, "\uBB34\uC81C\uD55C \uAE30\uB2A5 \uCD94\uAC00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "li");
      \u0275\u0275text(265, "\uC6B0\uC120 \uAE30\uC220 \uC9C0\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "li");
      \u0275\u0275text(267, "\uC18C\uC2A4\uCF54\uB4DC \uC81C\uACF5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "a", 34);
      \u0275\u0275text(269, " \uAC1C\uBC1C\uD300 \uC0C1\uB2F4 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(270, "section", 38)(271, "div", 2)(272, "div", 12)(273, "h2", 13);
      \u0275\u0275text(274, "\uC2A4\uD0C0\uD2B8\uC5C5 \uC5EC\uC815\uC744 \uC2DC\uC791\uD558\uC138\uC694");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "p", 14);
      \u0275\u0275text(276, " \uC544\uC774\uB514\uC5B4\uAC00 \uC788\uB2E4\uBA74 \uC9C0\uAE08 \uBC14\uB85C \uC0C1\uB2F4\uBC1B\uACE0 \uCCAB \uAC78\uC74C\uC744 \uB0B4\uB51B\uC5B4\uBCF4\uC138\uC694 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 39)(278, "a", 40);
      \u0275\u0275text(279, " \u{1F4DD} \uC0C1\uB2F4 \uC2E0\uCCAD ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 41)(281, "p");
      \u0275\u0275text(282, "\uD3C9\uC77C 09:00 - 18:00 | \uD1A0\uC694\uC77C 09:00 - 15:00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "p");
      \u0275\u0275text(284, "\uC608\uBE44\uCC3D\uC5C5\uC790\uB97C \uC704\uD55C \uD2B9\uBCC4 \uC0C1\uB2F4 \uD504\uB85C\uADF8\uB7A8 \uC6B4\uC601\uC911");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(285, "footer", 42)(286, "div", 2)(287, "p");
      \u0275\u0275text(288, "\xA9 2025 \uC2A4\uD0C0\uD130\uD328\uD0A4\uC9C0. All rights reserved. | \uC2A4\uD0C0\uD2B8\uC5C5\uC758 \uAFC8\uC744 \uD604\uC2E4\uB85C");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("light-mode", !ctx.isDarkMode);
    }
  }, dependencies: [RouterLink], styles: [`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.startup-package-container[_ngcontent-%COMP%] {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
.theme-icon[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: _ngcontent-%COMP%_iconPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
@keyframes _ngcontent-%COMP%_iconPop {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero[_ngcontent-%COMP%] {
  padding: 8rem 0 6rem;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
  position: relative;
  overflow: hidden;
}
.hero[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 30% 40%,
      rgba(99, 102, 241, 0.15) 0%,
      transparent 50%),
    radial-gradient(
      circle at 70% 60%,
      rgba(139, 92, 246, 0.12) 0%,
      transparent 55%),
    radial-gradient(
      circle at 50% 80%,
      rgba(236, 72, 153, 0.1) 0%,
      transparent 50%);
  opacity: 0.6;
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.hero-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #0066ff);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}
.hero-title[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
.gradient-text[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
}
.hero-subtitle[_ngcontent-%COMP%] {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.button-primary[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  min-height: 48px;
  touch-action: manipulation;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.button-primary[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.button-secondary[_ngcontent-%COMP%] {
  background: #ffffff;
  color: #0f0f0f;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid #d1d5db;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 48px;
  touch-action: manipulation;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.button-secondary[_ngcontent-%COMP%]:hover {
  border-color: #8b5cf6;
  color: #8b5cf6;
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.features[_ngcontent-%COMP%] {
  padding: 6rem 0;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
}
.section-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 4rem;
}
.section-title[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
.section-subtitle[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}
.features-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.feature-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.feature-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.feature-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  border-color: rgba(139, 92, 246, 0.5);
  background: rgba(255, 255, 255, 0.12);
}
.feature-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.feature-icon[_ngcontent-%COMP%] {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}
.feature-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}
.feature-description[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}
.products[_ngcontent-%COMP%] {
  padding: 6rem 0;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
}
.products-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.product-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.product-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(139, 92, 246, 0.5);
}
.product-icon[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: block;
}
.product-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}
.product-description[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.product-features[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
}
.product-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
}
.product-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {
  content: "\\2713";
  color: #10b981;
  font-weight: bold;
}
.plans[_ngcontent-%COMP%] {
  padding: 6rem 0;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
}
.plans-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.plan-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.5rem;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.plan-card.featured[_ngcontent-%COMP%] {
  border-color: #8b5cf6;
  transform: scale(1.05);
  background: rgba(139, 92, 246, 0.1);
}
.plan-card.featured[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
}
.plan-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  background: rgba(255, 255, 255, 0.12);
}
.plan-card.featured[_ngcontent-%COMP%]:hover {
  transform: scale(1.05) translateY(-5px);
}
.plan-badge[_ngcontent-%COMP%] {
  background: #8b5cf6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  display: inline-block;
}
.plan-title[_ngcontent-%COMP%] {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}
.plan-price[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 900;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
}
.plan-period[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}
.plan-features[_ngcontent-%COMP%] {
  list-style: none;
  text-align: left;
  margin-bottom: 3rem;
  padding: 0;
}
.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
}
.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {
  content: "\\2713";
  background: #10b981;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
  flex-shrink: 0;
}
.plan-button[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  display: block;
}
.plan-button[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.plan-button.secondary[_ngcontent-%COMP%] {
  background: #ffffff;
  color: #8b5cf6;
  border: 2px solid #8b5cf6;
}
.plan-button.secondary[_ngcontent-%COMP%]:hover {
  background: #8b5cf6;
  color: white;
}
.contact[_ngcontent-%COMP%] {
  padding: 6rem 0;
  background: #1a1a1a;
  color: white;
  text-align: center;
}
.contact[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  color: white;
}
.contact[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  color: #d1d5db;
}
.contact-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}
.contact-button[_ngcontent-%COMP%] {
  background: #8b5cf6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  min-height: 48px;
  touch-action: manipulation;
}
.contact-button[_ngcontent-%COMP%]:hover {
  background: #7c3aed;
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.contact-info[_ngcontent-%COMP%] {
  margin-top: 2rem;
  color: #d1d5db;
}
.footer[_ngcontent-%COMP%] {
  background: #111827;
  color: #d1d5db;
  padding: 2rem 0;
  text-align: center;
}
@media (max-width: 1024px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 1.5rem;
  }
  .features-grid[_ngcontent-%COMP%], 
   .products-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .hero[_ngcontent-%COMP%] {
    padding: 6rem 0 4rem;
  }
  .plan-card.featured[_ngcontent-%COMP%] {
    transform: none;
  }
}
@media (max-width: 768px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
  .hero[_ngcontent-%COMP%] {
    padding: 4rem 0 3rem;
  }
  .hero-title[_ngcontent-%COMP%] {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .hero-subtitle[_ngcontent-%COMP%] {
    font-size: clamp(1rem, 4vw, 1.1rem);
    margin-bottom: 2rem;
    padding: 0 0.5rem;
  }
  .hero-actions[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .button-primary[_ngcontent-%COMP%], 
   .button-secondary[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
  .features-grid[_ngcontent-%COMP%], 
   .products-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .feature-card[_ngcontent-%COMP%], 
   .product-card[_ngcontent-%COMP%] {
    padding: 2rem 1.5rem;
  }
  .plans-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .plan-card[_ngcontent-%COMP%] {
    padding: 2rem 1.5rem;
  }
  .contact-actions[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .contact-button[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  .section-subtitle[_ngcontent-%COMP%] {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
}
@media (max-width: 480px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 0.75rem;
  }
  .hero[_ngcontent-%COMP%] {
    padding: 3rem 0 2rem;
  }
  .hero-title[_ngcontent-%COMP%] {
    font-size: clamp(1.5rem, 7vw, 2rem);
    margin-bottom: 0.75rem;
  }
  .hero-subtitle[_ngcontent-%COMP%] {
    font-size: clamp(0.9rem, 3.5vw, 1rem);
    margin-bottom: 1.5rem;
  }
  .hero-badge[_ngcontent-%COMP%] {
    font-size: 0.8rem;
    padding: 0.375rem 0.75rem;
    margin-bottom: 1.5rem;
  }
  .features[_ngcontent-%COMP%], 
   .products[_ngcontent-%COMP%], 
   .plans[_ngcontent-%COMP%], 
   .contact[_ngcontent-%COMP%] {
    padding: 3rem 0;
  }
  .section-title[_ngcontent-%COMP%] {
    font-size: clamp(1.3rem, 5vw, 1.8rem);
    margin-bottom: 0.75rem;
  }
  .section-subtitle[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  .feature-card[_ngcontent-%COMP%], 
   .product-card[_ngcontent-%COMP%], 
   .plan-card[_ngcontent-%COMP%] {
    padding: 1.25rem;
  }
  .feature-title[_ngcontent-%COMP%], 
   .product-title[_ngcontent-%COMP%] {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  .feature-description[_ngcontent-%COMP%], 
   .product-description[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  .feature-icon[_ngcontent-%COMP%], 
   .product-icon[_ngcontent-%COMP%] {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .plan-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .plan-price[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .button-primary[_ngcontent-%COMP%], 
   .button-secondary[_ngcontent-%COMP%], 
   .contact-button[_ngcontent-%COMP%] {
    padding: 0.875rem 1.25rem;
    font-size: 1rem;
    max-width: 260px;
  }
}
@keyframes _ngcontent-%COMP%_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in[_ngcontent-%COMP%] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}
.fade-in.visible[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
}
.light-mode[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f9fafb 0%,
      #ffffff 100%);
}
.light-mode[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]::before {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e5e7eb" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
}
.light-mode[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
  color: #1a1a1a;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}
.light-mode[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
  color: #6b7280;
  text-shadow: none;
}
.light-mode[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
}
.light-mode[_ngcontent-%COMP%]   .features[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .plans[_ngcontent-%COMP%] {
  background: #ffffff;
}
.light-mode[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  color: #1a1a1a;
  text-shadow: none;
}
.light-mode[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {
  color: #6b7280;
}
.light-mode[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border-color: #e5e7eb;
}
.light-mode[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover, 
.light-mode[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover, 
.light-mode[_ngcontent-%COMP%]   .plan-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #8b5cf6;
  background: #ffffff;
}
.light-mode[_ngcontent-%COMP%]   .plan-card.featured[_ngcontent-%COMP%] {
  background: rgba(139, 92, 246, 0.05);
}
.light-mode[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .plan-title[_ngcontent-%COMP%] {
  color: #1a1a1a;
}
.light-mode[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%], 
.light-mode[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {
  color: #6b7280;
}
.light-mode[_ngcontent-%COMP%]   .product-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  color: #6b7280;
}
.light-mode[_ngcontent-%COMP%]   .plan-period[_ngcontent-%COMP%] {
  color: #6b7280;
}
.light-mode[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  color: #0f0f0f;
}
.light-mode[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%] {
  background: #ffffff;
  color: #0f0f0f;
  border-color: #d1d5db;
}
.light-mode[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%]:hover {
  border-color: #8b5cf6;
  color: #8b5cf6;
}
/*# sourceMappingURL=startup-package.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StartupPackage, [{
    type: Component,
    args: [{ selector: "app-startup-package", standalone: false, template: `<div class="startup-package-container" [class.light-mode]="!isDarkMode">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
        <div class="hero-content fade-in">
            <div class="hero-badge">
                <span>\u{1F680}</span>
                <span>\uCC3D\uC5C5 \uC2A4\uD0C0\uD2B8\uC5C5 \uC804\uC6A9</span>
            </div>
            <h1 class="hero-title">
                \uC608\uBE44\uCC3D\uC5C5\uD328\uD0A4\uC9C0 \uC900\uBE44\uBD80\uD130<br>
                <span class="gradient-text">\uC2A4\uD0C0\uD2B8\uC5C5 \uC131\uACF5\uAE4C\uC9C0</span>
            </h1>
            <p class="hero-subtitle">
                \uC644\uC131\uB3C4 \uB192\uC740 MVP \uC81C\uD488\uC744 \uC81C\uC791\uD574\uB4DC\uB9AC\uACE0, \uC608\uCC3D\uD328 \uC9C4\uD589 \uC2DC \uD544\uC694\uD55C \uBAA8\uB4E0 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uD328\uD0A4\uC9C0\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.<br>
                \uC544\uC774\uB514\uC5B4\uB9CC \uC788\uC5B4\uB3C4 \uAC71\uC815\uC5C6\uC774! \uC800\uB834\uD55C \uC6D4 \uBE44\uC6A9\uC73C\uB85C \uC804\uBB38 \uAC1C\uBC1C\uD300\uC744 \uC774\uC6A9\uD558\uC138\uC694.
            </p>
            <div class="hero-actions">
                <a (click)="scrollToSection('plans')" class="button-primary">MVP \uC2E0\uCCAD\uD558\uAE30</a>
                <a (click)="scrollToSection('products')" class="button-secondary">\uC81C\uD488 \uB458\uB7EC\uBCF4\uAE30</a>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="features" id="features">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">\uC65C \uC2A4\uD0C0\uD130\uD328\uD0A4\uC9C0\uC778\uAC00?</h2>
            <p class="section-subtitle">
                \uC608\uBE44\uCC3D\uC5C5\uC790\uBD80\uD130 \uC131\uC7A5\uD558\uB294 \uC2A4\uD0C0\uD2B8\uC5C5\uAE4C\uC9C0, \uAC01 \uB2E8\uACC4\uC5D0 \uB9DE\uB294 \uC644\uBCBD\uD55C \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4
            </p>
        </div>

        <div class="features-grid">
            <div class="feature-card fade-in">
                <div class="feature-icon">\u{1F3AF}</div>
                <h3 class="feature-title">\uC608\uCC3D\uD328 \uB9DE\uCDA4 \uC9C0\uC6D0</h3>
                <p class="feature-description">
                    \uC608\uBE44\uCC3D\uC5C5\uD328\uD0A4\uC9C0 \uC900\uBE44\uC0DD\uC744 \uC704\uD55C \uC644\uC131\uB3C4 \uB192\uC740 MVP \uC81C\uD488\uC744 \uC81C\uC791\uD574\uB4DC\uB9BD\uB2C8\uB2E4. 
                    \uAC80\uC99D\uB41C \uC544\uC774\uB514\uC5B4\uB85C \uC131\uACF5\uC801\uC778 \uCC3D\uC5C5\uC744 \uC2DC\uC791\uD558\uC138\uC694.
                </p>
            </div>

            <div class="feature-card fade-in">
                <div class="feature-icon">\u{1F4A1}</div>
                <h3 class="feature-title">\uC544\uC774\uB514\uC5B4 \uC2E4\uD604</h3>
                <p class="feature-description">
                    \uAC1C\uBC1C \uC9C0\uC2DD\uC774 \uC5C6\uC5B4\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4. 
                    \uC800\uB834\uD55C \uC6D4 \uBE44\uC6A9\uC73C\uB85C \uC804\uBB38 \uAC1C\uBC1C\uD300\uC774 \uC5EC\uB7EC\uBD84\uC758 \uC544\uC774\uB514\uC5B4\uB97C \uD604\uC2E4\uB85C \uB9CC\uB4E4\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4.
                </p>
            </div>

            <div class="feature-card fade-in">
                <div class="feature-icon">\u{1F4E6}</div>
                <h3 class="feature-title">\uC62C\uC778\uC6D0 \uD328\uD0A4\uC9C0</h3>
                <p class="feature-description">
                    \uD611\uC5C5\uD234\uBD80\uD130 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7AB\uD3FC\uAE4C\uC9C0, \uC2A4\uD0C0\uD2B8\uC5C5\uC5D0 \uD544\uC694\uD55C \uBAA8\uB4E0 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C 
                    \uD558\uB098\uC758 \uD328\uD0A4\uC9C0\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Products Section -->
<section class="products" id="products">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">\uD575\uC2EC \uC81C\uD488\uAD70</h2>
            <p class="section-subtitle">
                \uC2A4\uD0C0\uD2B8\uC5C5 \uC131\uACF5\uC744 \uC704\uD55C \uD544\uC218 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB4E4\uC744 \uC644\uBCBD\uD558\uAC8C \uAC16\uCDB0\uB4DC\uB9BD\uB2C8\uB2E4
            </p>
        </div>

        <div class="products-grid">
            <div class="product-card fade-in">
                <div class="product-icon">\u{1F91D}</div>
                <h3 class="product-title">\uD611\uC5C5\uD234</h3>
                <p class="product-description">
                    \uD300\uC6D0\uB4E4\uACFC\uC758 \uC6D0\uD65C\uD55C \uC18C\uD1B5\uACFC \uD611\uC5C5\uC744 \uC704\uD55C \uD1B5\uD569 \uD611\uC5C5 \uD50C\uB7AB\uD3FC
                </p>
                <ul class="product-features">
                    <li>\uC2E4\uC2DC\uAC04 \uBA54\uC2DC\uC9D5</li>
                    <li>\uD30C\uC77C \uACF5\uC720 & \uBC84\uC804 \uAD00\uB9AC</li>
                    <li>\uCE98\uB9B0\uB354 \uD1B5\uD569 \uAD00\uB9AC</li>
                    <li>\uBAA8\uBC14\uC77C \uC571 \uC9C0\uC6D0</li>
                </ul>
            </div>

            <div class="product-card fade-in">
                <div class="product-icon">\u{1F4CA}</div>
                <h3 class="product-title">\uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC</h3>
                <p class="product-description">
                    \uCCB4\uACC4\uC801\uC778 \uD504\uB85C\uC81D\uD2B8 \uACC4\uD68D\uBD80\uD130 \uC2E4\uD589\uAE4C\uC9C0 \uAD00\uB9AC\uD558\uB294 \uC804\uBB38 \uB3C4\uAD6C
                </p>
                <ul class="product-features">
                    <li>\uAC04\uD2B8\uCC28\uD2B8 & \uCE78\uBC18\uBCF4\uB4DC</li>
                    <li>\uC791\uC5C5 \uBC30\uC815 & \uC9C4\uD589\uC0C1\uD669 \uCD94\uC801</li>
                    <li>\uB9AC\uC18C\uC2A4 \uAD00\uB9AC & \uC77C\uC815 \uCD5C\uC801\uD654</li>
                    <li>\uC0C1\uC138 \uBCF4\uACE0\uC11C \uC0DD\uC131</li>
                </ul>
            </div>

            <div class="product-card fade-in">
                <div class="product-icon">\u{1F4C8}</div>
                <h3 class="product-title">\uB9C8\uCF00\uD305 \uC790\uB3D9\uD654</h3>
                <p class="product-description">
                    \uD6A8\uC728\uC801\uC778 \uB9C8\uCF00\uD305 \uCEA0\uD398\uC778 \uC2E4\uD589\uACFC \uACE0\uAC1D \uAD00\uB9AC\uB97C \uC704\uD55C \uC790\uB3D9\uD654 \uC2DC\uC2A4\uD15C
                </p>
                <ul class="product-features">
                    <li>\uC774\uBA54\uC77C \uB9C8\uCF00\uD305 \uC790\uB3D9\uD654</li>
                    <li>SNS \uD1B5\uD569 \uAD00\uB9AC</li>
                    <li>SNS \uCF58\uD150\uCE20 \uC0DD\uC131 \uBC0F \uBC30\uD3EC</li>
                    <li>\uACE0\uAC1D \uC138\uADF8\uBA3C\uD14C\uC774\uC158</li>
                    <li>\uACE0\uAC1D\uAD00\uB9AC \uC790\uB3D9\uD654</li>
                    <li>\uC131\uACFC \uBD84\uC11D & \uB9AC\uD3EC\uD305</li>
                </ul>
            </div>

            <div class="product-card fade-in">
                <div class="product-icon">\u{1F6D2}</div>
                <h3 class="product-title">\uC1FC\uD551\uBAB0 & \uC911\uAC1C \uD50C\uB7AB\uD3FC</h3>
                <p class="product-description">
                    \uBAA8\uBC14\uC77C \uCD5C\uC801\uD654\uB41C \uC804\uBB38 \uC774\uCEE4\uBA38\uC2A4 \uBC0F \uC911\uAC1C \uD50C\uB7AB\uD3FC \uC194\uB8E8\uC158 (\uC77C\uBC18\uD615, \uC785\uC810\uD615, \uC7AC\uB2A5\uB9C8\uCF13, \uC911\uAC1C\uC2DC\uC2A4\uD15C \uD3EC\uD568)
                </p>
                <ul class="product-features">
                    <li>\uBC18\uC751\uD615 \uC1FC\uD551\uBAB0 \uAD6C\uCD95</li>
                    <li>\uC785\uC810\uD615 \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4</li>
                    <li>\uC7AC\uB2A5\uB9C8\uCF13 \uD50C\uB7AB\uD3FC</li>
                    <li>\uB9E4\uCE6D \uC54C\uACE0\uB9AC\uC998 \uAD6C\uD604</li>
                    <li>\uC0AC\uC6A9\uC790 \uC778\uC99D & \uD3C9\uAC00 \uC2DC\uC2A4\uD15C</li>
                    <li>\uACB0\uC81C \uC2DC\uC2A4\uD15C & \uC911\uAC1C \uC11C\uBE44\uC2A4</li>
                    <li>\uC7AC\uACE0 \uAD00\uB9AC & \uC8FC\uBB38 \uCC98\uB9AC</li>
                    <li>\uBD84\uC7C1 \uC870\uC815 \uC2DC\uC2A4\uD15C</li>
                    <li>SEO \uCD5C\uC801\uD654</li>
                </ul>
            </div>

            <div class="product-card fade-in">
                <div class="product-icon">\u{1F465}</div>
                <h3 class="product-title">\uCEE4\uBBA4\uB2C8\uD2F0</h3>
                <p class="product-description">
                    \uC0AC\uC6A9\uC790 \uCC38\uC5EC\uD615 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7AB\uD3FC\uC73C\uB85C \uACE0\uAC1D \uCDA9\uC131\uB3C4\uC640 \uBE0C\uB79C\uB4DC \uAC00\uCE58\uB97C \uB192\uC774\uB294 \uC194\uB8E8\uC158
                </p>
                <ul class="product-features">
                    <li>\uAC8C\uC2DC\uD310 & \uD3EC\uB7FC \uC2DC\uC2A4\uD15C</li>
                    <li>\uC0AC\uC6A9\uC790 \uB808\uBCA8 & \uD3EC\uC778\uD2B8 \uC2DC\uC2A4\uD15C</li>
                    <li>\uC2E4\uC2DC\uAC04 \uC54C\uB9BC & \uD53C\uB4DC</li>
                    <li>\uC774\uBCA4\uD2B8 & \uD22C\uD45C \uAE30\uB2A5</li>
                    <li>\uCF58\uD150\uCE20 \uAD00\uB9AC & \uC870\uD68C\uC218 \uBD84\uC11D</li>
                    <li>\uBAA8\uBC14\uC77C \uC571 \uC5F0\uB3D9</li>
                </ul>
            </div>

            <div class="product-card fade-in">
                <div class="product-icon">\u{1F4AC}</div>
                <h3 class="product-title">\uCC44\uD305 \uC0C1\uB2F4</h3>
                <p class="product-description">
                    \uACE0\uAC1D\uACFC\uC758 \uC2E4\uC2DC\uAC04 \uC18C\uD1B5\uC744 \uC704\uD55C \uCC44\uD305 \uC0C1\uB2F4 \uC2DC\uC2A4\uD15C
                </p>
                <ul class="product-features">
                    <li>\uC6F9\uC0AC\uC774\uD2B8 \uD1B5\uD569 \uCC44\uD305</li>
                    <li>AI \uCC57\uBD07 \uC5F0\uB3D9</li>
                    <li>\uC0C1\uB2F4 \uC774\uB825 \uAD00\uB9AC</li>
                    <li>\uB2E4\uC911 \uCC44\uB110 \uC9C0\uC6D0</li>
                </ul>
            </div>

            <div class="product-card fade-in">
                <div class="product-icon">\u{1F4C4}</div>
                <h3 class="product-title">\uBB38\uC11C \uC0DD\uC131 \uBC0F \uAD00\uB9AC</h3>
                <p class="product-description">
                    \uC5C5\uBB34 \uD6A8\uC728\uC131\uC744 \uADF9\uB300\uD654\uD558\uB294 \uBB38\uC11C \uC0DD\uC131 \uBC0F \uAD00\uB9AC \uC2DC\uC2A4\uD15C
                </p>
                <ul class="product-features">
                    <li>\uC790\uB3D9 \uBB38\uC11C \uC0DD\uC131</li>
                    <li>\uD15C\uD50C\uB9BF \uB77C\uC774\uBE0C\uB7EC\uB9AC</li>
                    <li>\uBC84\uC804 \uAD00\uB9AC & \uD788\uC2A4\uD1A0\uB9AC</li>
                    <li>\uD611\uC5C5 \uD3B8\uC9D1 \uAE30\uB2A5</li>
                    <li>\uC804\uC790\uC11C\uBA85 \uC5F0\uB3D9</li>
                    <li>RAG AI\uB97C \uD65C\uC6A9\uD55C \uC99D\uAC15\uAC80\uC0C9</li>
                    <li>\uBB38\uC11C \uBCF4\uC548 & \uAD8C\uD55C \uAD00\uB9AC</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Plans Section -->
<section class="plans" id="plans">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">\uC694\uAE08\uC81C</h2>
            <p class="section-subtitle">
                \uCC3D\uC5C5 \uB2E8\uACC4\uC5D0 \uB9DE\uB294 \uCD5C\uC801\uC758 \uD50C\uB79C\uC744 \uC120\uD0DD\uD558\uC138\uC694
            </p>
        </div>

        <div class="plans-grid">
            <div class="plan-card fade-in">
                <h3 class="plan-title">\uC608\uCC3D\uD328 \uC900\uBE44</h3>
                <div class="plan-price">1,000\uB9CC\uC6D0</div>
                <div class="plan-period">\uC644\uC131\uD615 \uC81C\uD488 \uC81C\uC791</div>

                <ul class="plan-features">
                    <li>\uC644\uC131\uD615 \uC81C\uD488 1\uAC1C \uC81C\uC791</li>
                    <li>\uBAA8\uB4E0 \uAE30\uB2A5 \uAD6C\uD604</li>
                    <li>1\uB144 \uD638\uC2A4\uD305 \uD3EC\uD568</li>
                    <li>\uAE30\uC220 \uBA58\uD1A0\uB9C1</li>
                    <li>\uC608\uCC3D\uD328 \uC9C0\uC6D0\uC11C \uC791\uC131 \uB3C4\uC6C0</li>
                </ul>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-ZzMRC4iORs0LNUUC8CtYdT-cUu0WiI52N_4SkftEXHzuTw/viewform?usp=dialog" target="_blank" class="plan-button secondary">
                    \uC608\uCC3D\uD328 \uC900\uBE44 \uC2E0\uCCAD
                </a>
            </div>

            <div class="plan-card featured fade-in">
                <div class="plan-badge">\uC778\uAE30</div>
                <h3 class="plan-title">\uC2A4\uD0C0\uD2B8\uC5C5 \uD328\uD0A4\uC9C0</h3>
                <div class="plan-price">99\uB9CC\uC6D0</div>
                <div class="plan-period">\uC6D4 / 7\uAC1C \uC81C\uD488 \uD3EC\uD568</div>

                <ul class="plan-features">
                    <li>7\uAC1C \uD575\uC2EC \uC81C\uD488 \uBAA8\uB450 \uC81C\uACF5</li>
                    <li>\uBB34\uC81C\uD55C \uC0AC\uC6A9\uC790</li>
                    <li>24/7 \uAE30\uC220 \uC9C0\uC6D0</li>
                    <li>\uC6D4 1\uD68C \uC5C5\uB370\uC774\uD2B8</li>
                    <li>\uB370\uC774\uD130 \uBC31\uC5C5 \uC11C\uBE44\uC2A4</li>
                    <li>\uB9DE\uCDA4 \uAE30\uB2A5 \uCD94\uAC00 (\uC6D4 1\uD68C)</li>
                </ul>

                <a routerLink="/education/home" class="plan-button">
                    \uD328\uD0A4\uC9C0 \uC2DC\uC791\uD558\uAE30
                </a>
            </div>

            <div class="plan-card fade-in">
                <h3 class="plan-title">\uC804\uB2F4 \uAC1C\uBC1C\uD300</h3>
                <div class="plan-price">500\uB9CC\uC6D0</div>
                <div class="plan-period">\uC6D4 / \uB9DE\uCDA4 \uAC1C\uBC1C</div>

                <ul class="plan-features">
                    <li>\uC804\uB2F4 \uAC1C\uBC1C\uD300 \uBC30\uC815</li>
                    <li>\uC544\uC774\uB514\uC5B4 \uAE30\uD68D\uBD80\uD130 \uAD6C\uD604\uAE4C\uC9C0</li>
                    <li>\uC8FC\uAC04 \uC9C4\uD589\uC0C1\uD669 \uBCF4\uACE0</li>
                    <li>\uBB34\uC81C\uD55C \uAE30\uB2A5 \uCD94\uAC00</li>
                    <li>\uC6B0\uC120 \uAE30\uC220 \uC9C0\uC6D0</li>
                    <li>\uC18C\uC2A4\uCF54\uB4DC \uC81C\uACF5</li>
                </ul>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-ZzMRC4iORs0LNUUC8CtYdT-cUu0WiI52N_4SkftEXHzuTw/viewform?usp=dialog" target="_blank" class="plan-button secondary">
                    \uAC1C\uBC1C\uD300 \uC0C1\uB2F4
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact" id="contact">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">\uC2A4\uD0C0\uD2B8\uC5C5 \uC5EC\uC815\uC744 \uC2DC\uC791\uD558\uC138\uC694</h2>
            <p class="section-subtitle">
                \uC544\uC774\uB514\uC5B4\uAC00 \uC788\uB2E4\uBA74 \uC9C0\uAE08 \uBC14\uB85C \uC0C1\uB2F4\uBC1B\uACE0 \uCCAB \uAC78\uC74C\uC744 \uB0B4\uB51B\uC5B4\uBCF4\uC138\uC694
            </p>
        </div>

        <div class="contact-actions fade-in">
            <a routerLink="/education/home" class="contact-button">
                \u{1F4DD} \uC0C1\uB2F4 \uC2E0\uCCAD
            </a>
        </div>

        <div class="contact-info fade-in">
            <p>\uD3C9\uC77C 09:00 - 18:00 | \uD1A0\uC694\uC77C 09:00 - 15:00</p>
            <p>\uC608\uBE44\uCC3D\uC5C5\uC790\uB97C \uC704\uD55C \uD2B9\uBCC4 \uC0C1\uB2F4 \uD504\uB85C\uADF8\uB7A8 \uC6B4\uC601\uC911</p>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="container">
        <p>&copy; 2025 \uC2A4\uD0C0\uD130\uD328\uD0A4\uC9C0. All rights reserved. | \uC2A4\uD0C0\uD2B8\uC5C5\uC758 \uAFC8\uC744 \uD604\uC2E4\uB85C</p>
    </div>
</footer>
</div>
`, styles: [`@charset "UTF-8";

/* src/app/modules/ai/components/startup-package/startup-package.scss */
:host {
  display: block;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.startup-package-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
.theme-icon {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: iconPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
@keyframes iconPop {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero {
  padding: 8rem 0 6rem;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 30% 40%,
      rgba(99, 102, 241, 0.15) 0%,
      transparent 50%),
    radial-gradient(
      circle at 70% 60%,
      rgba(139, 92, 246, 0.12) 0%,
      transparent 55%),
    radial-gradient(
      circle at 50% 80%,
      rgba(236, 72, 153, 0.1) 0%,
      transparent 50%);
  opacity: 0.6;
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #0066ff);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
.gradient-text {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
}
.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.button-primary {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  min-height: 48px;
  touch-action: manipulation;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.button-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.button-secondary {
  background: #ffffff;
  color: #0f0f0f;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid #d1d5db;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 48px;
  touch-action: manipulation;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.button-secondary:hover {
  border-color: #8b5cf6;
  color: #8b5cf6;
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.features {
  padding: 6rem 0;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
}
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}
.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
.section-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.feature-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  border-color: rgba(139, 92, 246, 0.5);
  background: rgba(255, 255, 255, 0.12);
}
.feature-card:hover::before {
  transform: scaleX(1);
}
.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}
.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}
.feature-description {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}
.products {
  padding: 6rem 0;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.product-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(139, 92, 246, 0.5);
}
.product-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: block;
}
.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}
.product-description {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.product-features {
  list-style: none;
  padding: 0;
}
.product-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
}
.product-features li::before {
  content: "\\2713";
  color: #10b981;
  font-weight: bold;
}
.plans {
  padding: 6rem 0;
  background:
    linear-gradient(
      135deg,
      #0f0c29 0%,
      #302b63 50%,
      #24243e 100%);
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}
.plan-card {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.5rem;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}
.plan-card.featured {
  border-color: #8b5cf6;
  transform: scale(1.05);
  background: rgba(139, 92, 246, 0.1);
}
.plan-card.featured::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
}
.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  background: rgba(255, 255, 255, 0.12);
}
.plan-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}
.plan-badge {
  background: #8b5cf6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  display: inline-block;
}
.plan-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}
.plan-price {
  font-size: 2.5rem;
  font-weight: 900;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
}
.plan-period {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}
.plan-features {
  list-style: none;
  text-align: left;
  margin-bottom: 3rem;
  padding: 0;
}
.plan-features li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
}
.plan-features li::before {
  content: "\\2713";
  background: #10b981;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
  flex-shrink: 0;
}
.plan-button {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #0066ff 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  display: block;
}
.plan-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.plan-button.secondary {
  background: #ffffff;
  color: #8b5cf6;
  border: 2px solid #8b5cf6;
}
.plan-button.secondary:hover {
  background: #8b5cf6;
  color: white;
}
.contact {
  padding: 6rem 0;
  background: #1a1a1a;
  color: white;
  text-align: center;
}
.contact .section-title {
  color: white;
}
.contact .section-subtitle {
  color: #d1d5db;
}
.contact-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}
.contact-button {
  background: #8b5cf6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  min-height: 48px;
  touch-action: manipulation;
}
.contact-button:hover {
  background: #7c3aed;
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
.contact-info {
  margin-top: 2rem;
  color: #d1d5db;
}
.footer {
  background: #111827;
  color: #d1d5db;
  padding: 2rem 0;
  text-align: center;
}
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
  .features-grid,
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .hero {
    padding: 6rem 0 4rem;
  }
  .plan-card.featured {
    transform: none;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  .hero {
    padding: 4rem 0 3rem;
  }
  .hero-title {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.1rem);
    margin-bottom: 2rem;
    padding: 0 0.5rem;
  }
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .button-primary,
  .button-secondary {
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
  .features-grid,
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .feature-card,
  .product-card {
    padding: 2rem 1.5rem;
  }
  .plans-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .plan-card {
    padding: 2rem 1.5rem;
  }
  .contact-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .contact-button {
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  .section-subtitle {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
}
@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  .hero {
    padding: 3rem 0 2rem;
  }
  .hero-title {
    font-size: clamp(1.5rem, 7vw, 2rem);
    margin-bottom: 0.75rem;
  }
  .hero-subtitle {
    font-size: clamp(0.9rem, 3.5vw, 1rem);
    margin-bottom: 1.5rem;
  }
  .hero-badge {
    font-size: 0.8rem;
    padding: 0.375rem 0.75rem;
    margin-bottom: 1.5rem;
  }
  .features,
  .products,
  .plans,
  .contact {
    padding: 3rem 0;
  }
  .section-title {
    font-size: clamp(1.3rem, 5vw, 1.8rem);
    margin-bottom: 0.75rem;
  }
  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  .feature-card,
  .product-card,
  .plan-card {
    padding: 1.25rem;
  }
  .feature-title,
  .product-title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  .feature-description,
  .product-description {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  .feature-icon,
  .product-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .plan-title {
    font-size: 1.5rem;
  }
  .plan-price {
    font-size: 2rem;
  }
  .plan-features li {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .button-primary,
  .button-secondary,
  .contact-button {
    padding: 0.875rem 1.25rem;
    font-size: 1rem;
    max-width: 260px;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.light-mode .hero {
  background:
    linear-gradient(
      135deg,
      #f9fafb 0%,
      #ffffff 100%);
}
.light-mode .hero::before {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e5e7eb" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
}
.light-mode .hero-title {
  color: #1a1a1a;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}
.light-mode .hero-subtitle {
  color: #6b7280;
  text-shadow: none;
}
.light-mode .hero-badge {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
}
.light-mode .features,
.light-mode .products,
.light-mode .plans {
  background: #ffffff;
}
.light-mode .section-title {
  color: #1a1a1a;
  text-shadow: none;
}
.light-mode .section-subtitle {
  color: #6b7280;
}
.light-mode .feature-card,
.light-mode .product-card,
.light-mode .plan-card {
  background: #ffffff;
  border-color: #e5e7eb;
}
.light-mode .feature-card:hover,
.light-mode .product-card:hover,
.light-mode .plan-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #8b5cf6;
  background: #ffffff;
}
.light-mode .plan-card.featured {
  background: rgba(139, 92, 246, 0.05);
}
.light-mode .feature-title,
.light-mode .product-title,
.light-mode .plan-title {
  color: #1a1a1a;
}
.light-mode .feature-description,
.light-mode .product-description {
  color: #6b7280;
}
.light-mode .product-features li {
  color: #6b7280;
}
.light-mode .plan-period {
  color: #6b7280;
}
.light-mode .plan-features li {
  color: #0f0f0f;
}
.light-mode .button-secondary {
  background: #ffffff;
  color: #0f0f0f;
  border-color: #d1d5db;
}
.light-mode .button-secondary:hover {
  border-color: #8b5cf6;
  color: #8b5cf6;
}
/*# sourceMappingURL=startup-package.css.map */
`] }]
  }], () => [{ type: ViewportScroller }, { type: ElementRef }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StartupPackage, { className: "StartupPackage", filePath: "src/app/modules/ai/components/startup-package/startup-package.ts", lineNumber: 13 });
})();

// src/app/modules/ai/components/homepage-solution/homepage-solution.ts
var HomepageSolution = class _HomepageSolution {
  viewportScroller;
  elementRef;
  themeService;
  isDarkMode = false;
  constructor(viewportScroller, elementRef, themeService) {
    this.viewportScroller = viewportScroller;
    this.elementRef = elementRef;
    this.themeService = themeService;
  }
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
    setTimeout(() => {
      const hostElement = this.elementRef.nativeElement;
      if (hostElement) {
        hostElement.scrollTop = 0;
      }
    }, 0);
  }
  ngAfterViewInit() {
    this.initScrollAnimations();
    setTimeout(() => {
      const hostElement = this.elementRef.nativeElement;
      if (hostElement) {
        hostElement.scrollTop = 0;
      }
    }, 100);
  }
  ngOnDestroy() {
  }
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const hostElement = this.elementRef.nativeElement;
    if (element && hostElement) {
      const elementTop = element.offsetTop;
      hostElement.scrollTo({
        top: elementTop - 100,
        // 100px offset for better visibility
        behavior: "smooth"
      });
    }
  }
  initScrollAnimations() {
    const hostElement = this.elementRef.nativeElement;
    const observerOptions = {
      root: hostElement,
      // Use host element as scroll root
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
    hostElement.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
    hostElement.querySelectorAll(".service-card, .step-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }
  static \u0275fac = function HomepageSolution_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomepageSolution)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomepageSolution, selectors: [["app-homepage-solution"]], standalone: false, decls: 328, vars: 2, consts: [[1, "homepage-solution-container"], [1, "hero"], [1, "container"], [1, "hero-content", "fade-in"], [1, "hero-badge"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/education/home", 1, "button-primary"], [1, "button-secondary", 3, "click"], ["id", "services", 1, "services"], [1, "section-header", "fade-in"], [1, "section-title"], [1, "section-subtitle"], [1, "services-grid"], [1, "service-card", "fade-in"], [1, "service-icon"], [1, "service-title"], [1, "service-description"], [1, "service-features"], ["id", "portfolio", 1, "portfolio"], [1, "portfolio-project", "fade-in"], [1, "portfolio-header"], [1, "portfolio-icon"], [1, "portfolio-title"], [1, "portfolio-description"], [1, "portfolio-gallery"], ["href", "html/hompage/lizin0.html", "target", "_blank", "data-number", "1", 1, "portfolio-item", "fade-in"], [1, "portfolio-info"], ["href", "html/hompage/lizin1.html", "target", "_blank", "data-number", "2", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin2.html", "target", "_blank", "data-number", "3", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin3.html", "target", "_blank", "data-number", "4", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin4.html", "target", "_blank", "data-number", "5", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin5.html", "target", "_blank", "data-number", "6", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin6.html", "target", "_blank", "data-number", "7", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin7.html", "target", "_blank", "data-number", "8", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin8.html", "target", "_blank", "data-number", "9", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin9.html", "target", "_blank", "data-number", "10", 1, "portfolio-item", "fade-in"], ["href", "html/hompage/lizin10.html", "target", "_blank", "data-number", "11", 1, "portfolio-item", "fade-in"], [1, "portfolio-footer", "fade-in"], ["href", "html/hompage/lizin_homepage_portfolio.html", "target", "_blank", 1, "view-all-button"], ["id", "pricing", 1, "pricing"], [1, "pricing-card", "fade-in"], [1, "pricing-badge"], [1, "pricing-title"], [1, "pricing-price"], [1, "pricing-period"], [1, "pricing-features"], ["routerLink", "/education/home", 1, "button-primary", 2, "width", "100%", "text-align", "center", "display", "block"], [1, "pricing-note"], [1, "pricing-note-title"], [2, "margin", "0"], [1, "pricing-card", "fade-in", 2, "margin-top", "3rem"], [1, "pricing-badge", "premium"], ["routerLink", "/education/home", 1, "button-primary", "premium-btn", 2, "width", "100%", "text-align", "center", "display", "block"], ["id", "process", 1, "process"], [1, "process-steps"], [1, "step-card", "fade-in"], [1, "step-number"], [1, "step-title"], [1, "step-description"], ["id", "contact", 1, "contact"], [1, "contact-actions", "fade-in"], ["routerLink", "/education/home", 1, "contact-button"], [1, "contact-info", "fade-in"], [1, "footer"]], template: function HomepageSolution_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
      \u0275\u0275text(6, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "\uC804\uBB38 \uD648\uD398\uC774\uC9C0 \uAC1C\uBC1C \uC11C\uBE44\uC2A4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "h1", 5);
      \u0275\u0275text(10, " \uB2F9\uC2E0\uC758 \uBE44\uC988\uB2C8\uC2A4\uB97C \uC704\uD55C");
      \u0275\u0275element(11, "br");
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "\uC644\uBCBD\uD55C \uD648\uD398\uC774\uC9C0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 7);
      \u0275\u0275text(15, " \uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uBB34\uC81C\uD55C \uC218\uC815! \uBAA8\uBC14\uC77C \uCD5C\uC801\uD654\uBD80\uD130 \uC11C\uBC84 \uAD00\uB9AC\uAE4C\uC9C0");
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17, " \uC804\uBB38\uC801\uC778 \uD648\uD398\uC774\uC9C0 \uAC1C\uBC1C\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "a", 9);
      \u0275\u0275text(20, "\uBB34\uB8CC \uC0C1\uB2F4 \uBC1B\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 10);
      \u0275\u0275listener("click", function HomepageSolution_Template_a_click_21_listener() {
        return ctx.scrollToSection("portfolio");
      });
      \u0275\u0275text(22, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "section", 11)(24, "div", 2)(25, "div", 12)(26, "h2", 13);
      \u0275\u0275text(27, "\uC81C\uACF5 \uC11C\uBE44\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 14);
      \u0275\u0275text(29, " \uAE30\uD68D\uBD80\uD130 \uC6B4\uC601\uAE4C\uC9C0, \uD648\uD398\uC774\uC9C0 \uC81C\uC791\uC758 \uBAA8\uB4E0 \uACFC\uC815\uC744 \uC804\uBB38\uC801\uC73C\uB85C \uC9C0\uC6D0\uD569\uB2C8\uB2E4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "div", 17);
      \u0275\u0275text(33, "\u{1F3A8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "h3", 18);
      \u0275\u0275text(35, "\uB9DE\uCDA4\uD615 \uB514\uC790\uC778");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 19);
      \u0275\u0275text(37, " \uBE0C\uB79C\uB4DC \uC544\uC774\uB374\uD2F0\uD2F0\uC5D0 \uB9DE\uB294 \uB3C5\uCC3D\uC801\uC778 \uB514\uC790\uC778\uC744 \uC81C\uC791\uD569\uB2C8\uB2E4. \uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uBB34\uC81C\uD55C \uC218\uC815 \uAC00\uB2A5\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 20)(39, "li");
      \u0275\u0275text(40, "\uBE0C\uB79C\uB4DC \uB9DE\uCDA4 \uB514\uC790\uC778");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "li");
      \u0275\u0275text(42, "\uBB34\uC81C\uD55C \uB514\uC790\uC778 \uC218\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "li");
      \u0275\u0275text(44, "\uD2B8\uB80C\uB514\uD55C UI/UX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "li");
      \u0275\u0275text(46, "\uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801 \uC778\uD130\uD398\uC774\uC2A4");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 16)(48, "div", 17);
      \u0275\u0275text(49, "\u{1F4F1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h3", 18);
      \u0275\u0275text(51, "\uBC18\uC751\uD615 \uC6F9 \uAC1C\uBC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 19);
      \u0275\u0275text(53, " \uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC644\uBCBD\uD558\uAC8C \uC791\uB3D9\uD558\uB294 \uBC18\uC751\uD615 \uD648\uD398\uC774\uC9C0\uB97C \uAC1C\uBC1C\uD569\uB2C8\uB2E4. PC, \uD0DC\uBE14\uB9BF, \uBAA8\uBC14\uC77C \uBAA8\uB4E0 \uD658\uACBD\uC5D0 \uCD5C\uC801\uD654\uB429\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 20)(55, "li");
      \u0275\u0275text(56, "\uBAA8\uBC14\uC77C \uCD5C\uC801\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "li");
      \u0275\u0275text(58, "\uD06C\uB85C\uC2A4 \uBE0C\uB77C\uC6B0\uC800 \uD638\uD658");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "li");
      \u0275\u0275text(60, "\uBE60\uB978 \uB85C\uB529 \uC18D\uB3C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "li");
      \u0275\u0275text(62, "SEO \uCD5C\uC801\uD654");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 16)(64, "div", 17);
      \u0275\u0275text(65, "\u2699\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h3", 18);
      \u0275\u0275text(67, "\uC11C\uBC84 \uAD00\uB9AC & \uC720\uC9C0\uBCF4\uC218");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 19);
      \u0275\u0275text(69, " \uC548\uC815\uC801\uC778 \uC11C\uBC84 \uD658\uACBD \uAD6C\uCD95\uACFC \uC9C0\uC18D\uC801\uC778 \uAD00\uB9AC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. 1\uB144 \uC11C\uBC84\uBE44 \uD3EC\uD568\uC73C\uB85C \uAC71\uC815 \uC5C6\uC774 \uC774\uC6A9\uD558\uC138\uC694. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 20)(71, "li");
      \u0275\u0275text(72, "\uC11C\uBC84 \uC124\uC815 \uBC0F \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "li");
      \u0275\u0275text(74, "\uB3C4\uBA54\uC778 \uBC0F \uD638\uC2A4\uD305");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "li");
      \u0275\u0275text(76, "\uBCF4\uC548 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "li");
      \u0275\u0275text(78, "\uC815\uAE30 \uBC31\uC5C5 \uC11C\uBE44\uC2A4");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 16)(80, "div", 17);
      \u0275\u0275text(81, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h3", 18);
      \u0275\u0275text(83, "\uC628\uB514\uBC14\uC774\uC2A4 AI & \uBA40\uD2F0\uD50C\uB7AB\uD3FC \uC194\uB8E8\uC158");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p", 19);
      \u0275\u0275text(85, " \uCD5C\uC2E0 \uC628\uB514\uBC14\uC774\uC2A4 AI \uAE30\uC220\uACFC Windows, Mac, iOS, Android, \uC6F9 \uD50C\uB7AB\uD3FC\uC744 \uBAA8\uB450 \uC9C0\uC6D0\uD558\uB294 \uD1B5\uD569 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "ul", 20)(87, "li");
      \u0275\u0275text(88, "\uC628\uB514\uBC14\uC774\uC2A4 AI \uD1B5\uD569");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "li");
      \u0275\u0275text(90, "Windows & Mac \uB124\uC774\uD2F0\uBE0C \uC571");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "li");
      \u0275\u0275text(92, "iOS & Android \uBAA8\uBC14\uC77C \uC571");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "li");
      \u0275\u0275text(94, "\uC6F9 \uAE30\uBC18 \uD1B5\uD569 \uD50C\uB7AB\uD3FC");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "section", 21)(96, "div", 2)(97, "div", 12)(98, "h2", 13);
      \u0275\u0275text(99, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 14);
      \u0275\u0275text(101, " \uC2E4\uC81C \uC81C\uC791\uD55C \uD648\uD398\uC774\uC9C0\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 22)(103, "div", 23)(104, "div", 24);
      \u0275\u0275text(105, "\u{1F3E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div")(107, "h3", 25);
      \u0275\u0275text(108, "\uB9AC\uC988\uC778 \uC5EC\uC131\uC758\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 26);
      \u0275\u0275text(110, "11\uAC00\uC9C0 \uB2E4\uC591\uD55C \uCEE8\uC149\uC758 \uC804\uBB38 \uC758\uB8CC \uD648\uD398\uC774\uC9C0 \uB514\uC790\uC778 \uC2DC\uC548");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 27)(112, "a", 28)(113, "div", 29)(114, "h4");
      \u0275\u0275text(115, "\uD074\uB798\uC2DD \uD654\uC774\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "\uAE54\uB054\uD558\uACE0 \uC804\uBB38\uC801\uC778 \uC758\uB8CC \uC774\uBBF8\uC9C0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "a", 30)(119, "div", 29)(120, "h4");
      \u0275\u0275text(121, "\uBAA8\uB358 \uD551\uD06C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123, "\uBD80\uB4DC\uB7EC\uC6B4 \uC5EC\uC131\uC2A4\uB7EC\uC6B4 \uB290\uB08C");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "a", 31)(125, "div", 29)(126, "h4");
      \u0275\u0275text(127, "\uC5D8\uB808\uAC15\uD2B8 \uBE14\uB8E8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p");
      \u0275\u0275text(129, "\uC2E0\uB8B0\uAC10 \uC788\uB294 \uCC28\uBD84\uD55C \uB514\uC790\uC778");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "a", 32)(131, "div", 29)(132, "h4");
      \u0275\u0275text(133, "\uD504\uB9AC\uBBF8\uC5C4 \uACE8\uB4DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, "\uACE0\uAE09\uC2A4\uB7EC\uC6B4 \uD504\uB9AC\uBBF8\uC5C4 \uB290\uB08C");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "a", 33)(137, "div", 29)(138, "h4");
      \u0275\u0275text(139, "\uB0B4\uCD94\uB7F4 \uADF8\uB9B0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p");
      \u0275\u0275text(141, "\uC790\uC5F0\uC2A4\uB7FD\uACE0 \uD3B8\uC548\uD55C \uC774\uBBF8\uC9C0");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "a", 34)(143, "div", 29)(144, "h4");
      \u0275\u0275text(145, "\uBBF8\uB2C8\uBA40 \uD654\uC774\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "p");
      \u0275\u0275text(147, "\uC2EC\uD50C\uD558\uACE0 \uC138\uB828\uB41C \uB514\uC790\uC778");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "a", 35)(149, "div", 29)(150, "h4");
      \u0275\u0275text(151, "\uC18C\uD504\uD2B8 \uD37C\uD50C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p");
      \u0275\u0275text(153, "\uBD80\uB4DC\uB7FD\uACE0 \uC548\uC815\uAC10 \uC788\uB294 \uB290\uB08C");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "a", 36)(155, "div", 29)(156, "h4");
      \u0275\u0275text(157, "\uB2E4\uD06C \uB124\uC774\uBE44");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p");
      \u0275\u0275text(159, "\uC804\uBB38\uC801\uC774\uACE0 \uC2E0\uB8B0\uAC10 \uC788\uB294 \uBD84\uC704\uAE30");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "a", 37)(161, "div", 29)(162, "h4");
      \u0275\u0275text(163, "\uC6DC \uBCA0\uC774\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "\uB530\uB73B\uD558\uACE0 \uCE5C\uADFC\uD55C \uB290\uB08C");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "a", 38)(167, "div", 29)(168, "h4");
      \u0275\u0275text(169, "\uD504\uB808\uC2DC \uBBFC\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p");
      \u0275\u0275text(171, "\uC0C1\uCF8C\uD558\uACE0 \uC0DD\uB3D9\uAC10 \uC788\uB294 \uB514\uC790\uC778");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(172, "a", 39)(173, "div", 29)(174, "h4");
      \u0275\u0275text(175, "\uB85C\uB9E8\uD2F1 \uB85C\uC988");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "p");
      \u0275\u0275text(177, "\uC6B0\uC544\uD558\uACE0 \uC5EC\uC131\uC2A4\uB7EC\uC6B4 \uB290\uB08C");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(178, "div", 40)(179, "a", 41);
      \u0275\u0275text(180, " \uC804\uCCB4 \uC2DC\uC548 \uD55C\uB208\uC5D0 \uBCF4\uAE30 \u2192 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(181, "section", 42)(182, "div", 2)(183, "div", 12)(184, "h2", 13);
      \u0275\u0275text(185, "\uAC00\uACA9 \uC548\uB0B4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "p", 14);
      \u0275\u0275text(187, " \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC73C\uB85C \uC804\uBB38\uC801\uC778 \uD648\uD398\uC774\uC9C0\uB97C \uC81C\uC791\uD574\uB4DC\uB9BD\uB2C8\uB2E4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 43)(189, "div", 44);
      \u0275\u0275text(190, "\uBCA0\uC2A4\uD2B8 \uCD08\uC774\uC2A4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "h3", 45);
      \u0275\u0275text(192, "\uC804\uBB38 \uD648\uD398\uC774\uC9C0 \uC81C\uC791");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 46);
      \u0275\u0275text(194, "300\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 47);
      \u0275\u0275text(196, "\uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uC81C\uC791 (\uBD80\uAC00\uC138 \uD3EC\uD568)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "ul", 48)(198, "li");
      \u0275\u0275text(199, "\uB9DE\uCDA4\uD615 \uB514\uC790\uC778 (\uBB34\uC81C\uD55C \uC218\uC815)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "li");
      \u0275\u0275text(201, "\uBC18\uC751\uD615 \uC6F9 \uAC1C\uBC1C (PC + \uBAA8\uBC14\uC77C)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "li");
      \u0275\u0275text(203, "SEO \uCD5C\uC801\uD654 \uC791\uC5C5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "li");
      \u0275\u0275text(205, "\uB3C4\uBA54\uC778 \uBC0F \uD638\uC2A4\uD305 \uC124\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "li");
      \u0275\u0275text(207, "\uAD00\uB9AC\uC790 \uD398\uC774\uC9C0 \uAD6C\uCD95");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "li");
      \u0275\u0275text(209, "\uCEE8\uD150\uCE20 \uAD00\uB9AC \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "li");
      \u0275\u0275text(211, "\uAE30\uBCF8 \uBCF4\uC548 \uC124\uC815");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "a", 49);
      \u0275\u0275text(213, " \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 50)(215, "div", 51);
      \u0275\u0275text(216, "\u{1F4CB} \uCD94\uAC00 \uBE44\uC6A9 \uC548\uB0B4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p", 52)(218, "strong");
      \u0275\u0275text(219, "\uC11C\uBC84 \uAD00\uB9AC\uBE44:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(220, " \uC5F0 30\uB9CC\uC6D0 (\uB3C4\uBA54\uC778, \uD638\uC2A4\uD305, \uC720\uC9C0\uBCF4\uC218 \uD3EC\uD568)");
      \u0275\u0275element(221, "br");
      \u0275\u0275elementStart(222, "strong");
      \u0275\u0275text(223, "\uACB0\uC81C \uBC29\uC2DD:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(224, " \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791 \uC2DC 50% \uC120\uAE08, \uC644\uB8CC \uD6C4 50% \uC794\uAE08 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "div", 53)(226, "div", 54);
      \u0275\u0275text(227, "\uD504\uB9AC\uBBF8\uC5C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "h3", 45);
      \u0275\u0275text(229, "\uC628\uB514\uBC14\uC774\uC2A4 AI & \uBA40\uD2F0\uD50C\uB7AB\uD3FC \uC194\uB8E8\uC158");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "div", 46);
      \u0275\u0275text(231, "1,000\uB9CC\uC6D0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 47);
      \u0275\u0275text(233, "AI \uAE30\uC220 \uD1B5\uD569 + \uBAA8\uB4E0 \uD50C\uB7AB\uD3FC \uC9C0\uC6D0 (\uBD80\uAC00\uC138 \uD3EC\uD568)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "ul", 48)(235, "li");
      \u0275\u0275text(236, "\uC628\uB514\uBC14\uC774\uC2A4 AI \uAE30\uC220 \uD1B5\uD569");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "li");
      \u0275\u0275text(238, "Windows & Mac \uB124\uC774\uD2F0\uBE0C \uC571 \uAC1C\uBC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "li");
      \u0275\u0275text(240, "iOS & Android \uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "li");
      \u0275\u0275text(242, "\uC6F9 \uAE30\uBC18 \uD1B5\uD569 \uD50C\uB7AB\uD3FC \uAD6C\uCD95");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "li");
      \u0275\u0275text(244, "AI \uBAA8\uB378 \uCD5C\uC801\uD654 \uBC0F \uBC30\uD3EC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "li");
      \u0275\u0275text(246, "\uD06C\uB85C\uC2A4\uD50C\uB7AB\uD3FC \uB370\uC774\uD130 \uB3D9\uAE30\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "li");
      \u0275\u0275text(248, "\uACE0\uAE09 \uBCF4\uC548 \uBC0F \uC554\uD638\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "li");
      \u0275\u0275text(250, "1\uB144\uAC04 \uAE30\uC220 \uC9C0\uC6D0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "a", 55);
      \u0275\u0275text(252, " AI \uC194\uB8E8\uC158 \uBB38\uC758\uD558\uAE30 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 50)(254, "div", 51);
      \u0275\u0275text(255, "\u{1F916} AI \uC194\uB8E8\uC158 \uD2B9\uC9D5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "p", 52)(257, "strong");
      \u0275\u0275text(258, "\uAC1C\uBC1C \uAE30\uAC04:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(259, " 6-12\uAC1C\uC6D4 (\uBCF5\uC7A1\uB3C4\uC5D0 \uB530\uB77C \uC0C1\uC774)");
      \u0275\u0275element(260, "br");
      \u0275\u0275elementStart(261, "strong");
      \u0275\u0275text(262, "\uACB0\uC81C \uBC29\uC2DD:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(263, " \uACC4\uC57D\uAE08 30% \u2192 \uC911\uAC04 \uC9C4\uB3C4\uAE08 40% \u2192 \uC644\uB8CC \uD6C4 30%");
      \u0275\u0275element(264, "br");
      \u0275\u0275elementStart(265, "strong");
      \u0275\u0275text(266, "\uC9C0\uC6D0 \uBC94\uC704:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(267, " AI \uBAA8\uB378 \uD6C8\uB828, \uD50C\uB7AB\uD3FC\uBCC4 \uCD5C\uC801\uD654, \uBC30\uD3EC \uBC0F \uC6B4\uC601 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(268, "section", 56)(269, "div", 2)(270, "div", 12)(271, "h2", 13);
      \u0275\u0275text(272, "\uC81C\uC791 \uACFC\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "p", 14);
      \u0275\u0275text(274, " \uCCB4\uACC4\uC801\uC778 \uD504\uB85C\uC138\uC2A4\uB85C \uC644\uBCBD\uD55C \uD648\uD398\uC774\uC9C0\uB97C \uB9CC\uB4E4\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 57)(276, "div", 58)(277, "div", 59);
      \u0275\u0275text(278, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "h3", 60);
      \u0275\u0275text(280, "\uC0C1\uB2F4 & \uAE30\uD68D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "p", 61);
      \u0275\u0275text(282, " \uACE0\uAC1D\uC758 \uC694\uAD6C\uC0AC\uD56D\uC744 \uD30C\uC545\uD558\uACE0 \uC0AC\uC774\uD2B8 \uAD6C\uC870\uC640 \uAE30\uB2A5\uC744 \uAE30\uD68D\uD569\uB2C8\uB2E4. \uBAA9\uD45C\uC640 \uC608\uC0B0\uC5D0 \uB9DE\uB294 \uCD5C\uC801\uC758 \uC194\uB8E8\uC158\uC744 \uC81C\uC548\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "div", 58)(284, "div", 59);
      \u0275\u0275text(285, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "h3", 60);
      \u0275\u0275text(287, "\uB514\uC790\uC778 \uC81C\uC791");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "p", 61);
      \u0275\u0275text(289, " \uBE0C\uB79C\uB4DC \uC544\uC774\uB374\uD2F0\uD2F0\uC5D0 \uB9DE\uB294 \uB514\uC790\uC778\uC744 \uC81C\uC791\uD569\uB2C8\uB2E4. \uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uBB34\uC81C\uD55C \uC218\uC815\uD574\uB4DC\uB9BD\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "div", 58)(291, "div", 59);
      \u0275\u0275text(292, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "h3", 60);
      \u0275\u0275text(294, "\uAC1C\uBC1C & \uAD6C\uD604");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "p", 61);
      \u0275\u0275text(296, " \uC2B9\uC778\uB41C \uB514\uC790\uC778\uC744 \uBC14\uD0D5\uC73C\uB85C \uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAC1C\uBC1C\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 \uAE30\uB2A5\uC774 \uC644\uBCBD\uD558\uAC8C \uC791\uB3D9\uD558\uB3C4\uB85D \uAD6C\uD604\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 58)(298, "div", 59);
      \u0275\u0275text(299, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "h3", 60);
      \u0275\u0275text(301, "\uD14C\uC2A4\uD2B8 & \uCD5C\uC801\uD654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "p", 61);
      \u0275\u0275text(303, " \uB2E4\uC591\uD55C \uD658\uACBD\uC5D0\uC11C \uD14C\uC2A4\uD2B8\uB97C \uC9C4\uD589\uD558\uACE0 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. SEO \uCD5C\uC801\uD654\uC640 \uBCF4\uC548 \uC124\uC815\uB3C4 \uD568\uAED8 \uC9C4\uD589\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 58)(305, "div", 59);
      \u0275\u0275text(306, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "h3", 60);
      \u0275\u0275text(308, "\uB7F0\uCE6D & \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "p", 61);
      \u0275\u0275text(310, " \uC11C\uBC84 \uC124\uC815 \uD6C4 \uC0AC\uC774\uD2B8\uB97C \uB7F0\uCE6D\uD569\uB2C8\uB2E4. \uC774\uD6C4 \uC9C0\uC18D\uC801\uC778 \uAD00\uB9AC\uC640 \uC5C5\uB370\uC774\uD2B8 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(311, "section", 62)(312, "div", 2)(313, "div", 12)(314, "h2", 13);
      \u0275\u0275text(315, "\uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "p", 14);
      \u0275\u0275text(317, " \uBB34\uB8CC \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uC5EC\uB7EC\uBD84\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD574\uBCF4\uC138\uC694 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "div", 63)(319, "a", 64);
      \u0275\u0275text(320, " \u{1F4DD} \uBB38\uC758\uD558\uAE30 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "div", 65)(322, "p");
      \u0275\u0275text(323, "\uAD6C\uAE00\uD3FC\uC744 \uD1B5\uD574 \uBB38\uC758\uD574\uC8FC\uC2DC\uBA74 \uBE60\uB978 \uB2F5\uBCC0\uC744 \uBC1B\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(324, "footer", 66)(325, "div", 2)(326, "p");
      \u0275\u0275text(327, "\xA9 2025 LOWORLD. All rights reserved.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("light-mode", !ctx.isDarkMode);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.homepage-solution-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0c29 0%,\n      #302b63 50%,\n      #24243e 100%);\n  color: white;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  padding: 8rem 0 6rem;\n  text-align: center;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 2rem;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.8;\n  margin-bottom: 2.5rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .button-primary[_ngcontent-%COMP%], \n.homepage-solution-container[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  border-radius: 50px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  display: inline-block;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .button-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .button-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: white;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.65);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713  ";\n  color: #667eea;\n  font-weight: bold;\n  margin-right: 0.5rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2.5rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-decoration: none;\n  color: white;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(10px);\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]   .portfolio-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  flex-shrink: 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 3rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.5rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 50px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-badge.premium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 1rem 0;\n  color: white;\n  text-align: center;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-price[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 1rem 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-period[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n  margin-bottom: 2rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 2rem 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.85);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713  ";\n  color: #667eea;\n  font-weight: bold;\n  margin-right: 0.75rem;\n  font-size: 1.2rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%]   .pricing-note-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n  margin-bottom: 0.75rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.8;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .premium-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .premium-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(240, 147, 251, 0.4);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.12);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: white;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: white;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-actions[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1.5rem 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-decoration: none;\n  border-radius: 50px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin-top: 5rem;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .fade-in[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: opacity 0.8s ease, transform 0.8s ease;\n}\n.homepage-solution-container[_ngcontent-%COMP%]   .fade-in.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  border-color: rgba(0, 0, 0, 0.15);\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%] {\n  color: #1a202c;\n  border-color: rgba(0, 0, 0, 0.3);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.08);\n  border-color: rgba(0, 0, 0, 0.5);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%] {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: none;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  color: #1a202c !important;\n  font-weight: 600;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-description[_ngcontent-%COMP%] {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #2d3748 !important;\n  border-bottom-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .service-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  color: #667eea;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%] {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]   .portfolio-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-title[_ngcontent-%COMP%] {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-period[_ngcontent-%COMP%] {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #2d3748 !important;\n  border-bottom-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  color: #667eea;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%] {\n  background: #f7fafc !important;\n  border-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%]   .pricing-note-title[_ngcontent-%COMP%] {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%] {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .process[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  border-top-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n}\n@media (max-width: 1024px) {\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .homepage-solution-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n    padding: 5rem 0 3rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .button-primary[_ngcontent-%COMP%], \n   .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%], \n   .homepage-solution-container[_ngcontent-%COMP%]   .process-steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .portfolio-showcase[_ngcontent-%COMP%]   .portfolio-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .pricing-price[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .homepage-solution-container[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .button-primary[_ngcontent-%COMP%], \n   .homepage-solution-container[_ngcontent-%COMP%]   .button-secondary[_ngcontent-%COMP%] {\n    padding: 0.875rem 2rem;\n    font-size: 1rem;\n  }\n  .homepage-solution-container[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%] {\n    padding: 1.2rem 2.5rem;\n    font-size: 1.1rem;\n  }\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 3rem;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  flex-shrink: 0;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: white;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.1rem;\n  margin: 0;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 3rem;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  text-decoration: none;\n  color: white;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n  min-height: 60px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(8px);\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-thumbnail[_ngcontent-%COMP%] {\n  display: none;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\n  padding: 0;\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: white;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.8rem;\n  margin: 0;\n  line-height: 1.4;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]::before {\n  content: attr(data-number);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: white;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-footer[_ngcontent-%COMP%]   .view-all-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1.25rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-footer[_ngcontent-%COMP%]   .view-all-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%] {\n  background: white;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%] {\n  color: #1a202c;\n  font-weight: 700;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  background: white;\n  border-color: #e2e8f0;\n  color: #1a202c;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover {\n  background: #f7fafc;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n  border-color: #cbd5e0;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1a202c;\n  font-weight: 600;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-footer[_ngcontent-%COMP%]   .view-all-button[_ngcontent-%COMP%] {\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.homepage-solution-container.light-mode[_ngcontent-%COMP%]   .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-footer[_ngcontent-%COMP%]   .view-all-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);\n}\n@media (max-width: 768px) {\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem;\n    gap: 1rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-header[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-gallery[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n    padding: 0.875rem 1rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]::before {\n    width: 32px;\n    height: 32px;\n    font-size: 0.85rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .portfolio[_ngcontent-%COMP%]   .portfolio-project[_ngcontent-%COMP%]   .portfolio-footer[_ngcontent-%COMP%]   .view-all-button[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=homepage-solution.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomepageSolution, [{
    type: Component,
    args: [{ selector: "app-homepage-solution", standalone: false, template: `<div class="homepage-solution-container" [class.light-mode]="!isDarkMode">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content fade-in">
        <div class="hero-badge">
          <span>\u{1F680}</span>
          <span>\uC804\uBB38 \uD648\uD398\uC774\uC9C0 \uAC1C\uBC1C \uC11C\uBE44\uC2A4</span>
        </div>
        <h1 class="hero-title">
          \uB2F9\uC2E0\uC758 \uBE44\uC988\uB2C8\uC2A4\uB97C \uC704\uD55C<br>
          <span class="gradient-text">\uC644\uBCBD\uD55C \uD648\uD398\uC774\uC9C0</span>
        </h1>
        <p class="hero-subtitle">
          \uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uBB34\uC81C\uD55C \uC218\uC815! \uBAA8\uBC14\uC77C \uCD5C\uC801\uD654\uBD80\uD130 \uC11C\uBC84 \uAD00\uB9AC\uAE4C\uC9C0<br>
          \uC804\uBB38\uC801\uC778 \uD648\uD398\uC774\uC9C0 \uAC1C\uBC1C\uC758 \uBAA8\uB4E0 \uAC83\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.
        </p>
        <div class="hero-actions">
          <a routerLink="/education/home" class="button-primary">\uBB34\uB8CC \uC0C1\uB2F4 \uBC1B\uAE30</a>
          <a (click)="scrollToSection('portfolio')" class="button-secondary">\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">\uC81C\uACF5 \uC11C\uBE44\uC2A4</h2>
        <p class="section-subtitle">
          \uAE30\uD68D\uBD80\uD130 \uC6B4\uC601\uAE4C\uC9C0, \uD648\uD398\uC774\uC9C0 \uC81C\uC791\uC758 \uBAA8\uB4E0 \uACFC\uC815\uC744 \uC804\uBB38\uC801\uC73C\uB85C \uC9C0\uC6D0\uD569\uB2C8\uB2E4
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card fade-in">
          <div class="service-icon">\u{1F3A8}</div>
          <h3 class="service-title">\uB9DE\uCDA4\uD615 \uB514\uC790\uC778</h3>
          <p class="service-description">
            \uBE0C\uB79C\uB4DC \uC544\uC774\uB374\uD2F0\uD2F0\uC5D0 \uB9DE\uB294 \uB3C5\uCC3D\uC801\uC778 \uB514\uC790\uC778\uC744 \uC81C\uC791\uD569\uB2C8\uB2E4. 
            \uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uBB34\uC81C\uD55C \uC218\uC815 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
          </p>
          <ul class="service-features">
            <li>\uBE0C\uB79C\uB4DC \uB9DE\uCDA4 \uB514\uC790\uC778</li>
            <li>\uBB34\uC81C\uD55C \uB514\uC790\uC778 \uC218\uC815</li>
            <li>\uD2B8\uB80C\uB514\uD55C UI/UX</li>
            <li>\uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801 \uC778\uD130\uD398\uC774\uC2A4</li>
          </ul>
        </div>

        <div class="service-card fade-in">
          <div class="service-icon">\u{1F4F1}</div>
          <h3 class="service-title">\uBC18\uC751\uD615 \uC6F9 \uAC1C\uBC1C</h3>
          <p class="service-description">
            \uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uC644\uBCBD\uD558\uAC8C \uC791\uB3D9\uD558\uB294 \uBC18\uC751\uD615 \uD648\uD398\uC774\uC9C0\uB97C \uAC1C\uBC1C\uD569\uB2C8\uB2E4.
            PC, \uD0DC\uBE14\uB9BF, \uBAA8\uBC14\uC77C \uBAA8\uB4E0 \uD658\uACBD\uC5D0 \uCD5C\uC801\uD654\uB429\uB2C8\uB2E4.
          </p>
          <ul class="service-features">
            <li>\uBAA8\uBC14\uC77C \uCD5C\uC801\uD654</li>
            <li>\uD06C\uB85C\uC2A4 \uBE0C\uB77C\uC6B0\uC800 \uD638\uD658</li>
            <li>\uBE60\uB978 \uB85C\uB529 \uC18D\uB3C4</li>
            <li>SEO \uCD5C\uC801\uD654</li>
          </ul>
        </div>

        <div class="service-card fade-in">
          <div class="service-icon">\u2699\uFE0F</div>
          <h3 class="service-title">\uC11C\uBC84 \uAD00\uB9AC & \uC720\uC9C0\uBCF4\uC218</h3>
          <p class="service-description">
            \uC548\uC815\uC801\uC778 \uC11C\uBC84 \uD658\uACBD \uAD6C\uCD95\uACFC \uC9C0\uC18D\uC801\uC778 \uAD00\uB9AC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.
            1\uB144 \uC11C\uBC84\uBE44 \uD3EC\uD568\uC73C\uB85C \uAC71\uC815 \uC5C6\uC774 \uC774\uC6A9\uD558\uC138\uC694.
          </p>
          <ul class="service-features">
            <li>\uC11C\uBC84 \uC124\uC815 \uBC0F \uAD00\uB9AC</li>
            <li>\uB3C4\uBA54\uC778 \uBC0F \uD638\uC2A4\uD305</li>
            <li>\uBCF4\uC548 \uAD00\uB9AC</li>
            <li>\uC815\uAE30 \uBC31\uC5C5 \uC11C\uBE44\uC2A4</li>
          </ul>
        </div>

        <div class="service-card fade-in">
          <div class="service-icon">\u{1F916}</div>
          <h3 class="service-title">\uC628\uB514\uBC14\uC774\uC2A4 AI & \uBA40\uD2F0\uD50C\uB7AB\uD3FC \uC194\uB8E8\uC158</h3>
          <p class="service-description">
            \uCD5C\uC2E0 \uC628\uB514\uBC14\uC774\uC2A4 AI \uAE30\uC220\uACFC Windows, Mac, iOS, Android, \uC6F9 \uD50C\uB7AB\uD3FC\uC744 
            \uBAA8\uB450 \uC9C0\uC6D0\uD558\uB294 \uD1B5\uD569 \uC194\uB8E8\uC158\uC744 \uAC1C\uBC1C\uD569\uB2C8\uB2E4.
          </p>
          <ul class="service-features">
            <li>\uC628\uB514\uBC14\uC774\uC2A4 AI \uD1B5\uD569</li>
            <li>Windows & Mac \uB124\uC774\uD2F0\uBE0C \uC571</li>
            <li>iOS & Android \uBAA8\uBC14\uC77C \uC571</li>
            <li>\uC6F9 \uAE30\uBC18 \uD1B5\uD569 \uD50C\uB7AB\uD3FC</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="portfolio" id="portfolio">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">\uD3EC\uD2B8\uD3F4\uB9AC\uC624</h2>
        <p class="section-subtitle">
          \uC2E4\uC81C \uC81C\uC791\uD55C \uD648\uD398\uC774\uC9C0\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694
        </p>
      </div>

      <!-- \uB9AC\uC988\uC778 \uC5EC\uC131\uC758\uC6D0 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 -->
      <div class="portfolio-project fade-in">
        <div class="portfolio-header">
          <div class="portfolio-icon">\u{1F3E5}</div>
          <div>
            <h3 class="portfolio-title">\uB9AC\uC988\uC778 \uC5EC\uC131\uC758\uC6D0</h3>
            <p class="portfolio-description">11\uAC00\uC9C0 \uB2E4\uC591\uD55C \uCEE8\uC149\uC758 \uC804\uBB38 \uC758\uB8CC \uD648\uD398\uC774\uC9C0 \uB514\uC790\uC778 \uC2DC\uC548</p>
          </div>
        </div>

        <div class="portfolio-gallery">
          <a href="html/hompage/lizin0.html" target="_blank" class="portfolio-item fade-in" data-number="1">
            <div class="portfolio-info">
              <h4>\uD074\uB798\uC2DD \uD654\uC774\uD2B8</h4>
              <p>\uAE54\uB054\uD558\uACE0 \uC804\uBB38\uC801\uC778 \uC758\uB8CC \uC774\uBBF8\uC9C0</p>
            </div>
          </a>

          <a href="html/hompage/lizin1.html" target="_blank" class="portfolio-item fade-in" data-number="2">
            <div class="portfolio-info">
              <h4>\uBAA8\uB358 \uD551\uD06C</h4>
              <p>\uBD80\uB4DC\uB7EC\uC6B4 \uC5EC\uC131\uC2A4\uB7EC\uC6B4 \uB290\uB08C</p>
            </div>
          </a>

          <a href="html/hompage/lizin2.html" target="_blank" class="portfolio-item fade-in" data-number="3">
            <div class="portfolio-info">
              <h4>\uC5D8\uB808\uAC15\uD2B8 \uBE14\uB8E8</h4>
              <p>\uC2E0\uB8B0\uAC10 \uC788\uB294 \uCC28\uBD84\uD55C \uB514\uC790\uC778</p>
            </div>
          </a>

          <a href="html/hompage/lizin3.html" target="_blank" class="portfolio-item fade-in" data-number="4">
            <div class="portfolio-info">
              <h4>\uD504\uB9AC\uBBF8\uC5C4 \uACE8\uB4DC</h4>
              <p>\uACE0\uAE09\uC2A4\uB7EC\uC6B4 \uD504\uB9AC\uBBF8\uC5C4 \uB290\uB08C</p>
            </div>
          </a>

          <a href="html/hompage/lizin4.html" target="_blank" class="portfolio-item fade-in" data-number="5">
            <div class="portfolio-info">
              <h4>\uB0B4\uCD94\uB7F4 \uADF8\uB9B0</h4>
              <p>\uC790\uC5F0\uC2A4\uB7FD\uACE0 \uD3B8\uC548\uD55C \uC774\uBBF8\uC9C0</p>
            </div>
          </a>

          <a href="html/hompage/lizin5.html" target="_blank" class="portfolio-item fade-in" data-number="6">
            <div class="portfolio-info">
              <h4>\uBBF8\uB2C8\uBA40 \uD654\uC774\uD2B8</h4>
              <p>\uC2EC\uD50C\uD558\uACE0 \uC138\uB828\uB41C \uB514\uC790\uC778</p>
            </div>
          </a>

          <a href="html/hompage/lizin6.html" target="_blank" class="portfolio-item fade-in" data-number="7">
            <div class="portfolio-info">
              <h4>\uC18C\uD504\uD2B8 \uD37C\uD50C</h4>
              <p>\uBD80\uB4DC\uB7FD\uACE0 \uC548\uC815\uAC10 \uC788\uB294 \uB290\uB08C</p>
            </div>
          </a>

          <a href="html/hompage/lizin7.html" target="_blank" class="portfolio-item fade-in" data-number="8">
            <div class="portfolio-info">
              <h4>\uB2E4\uD06C \uB124\uC774\uBE44</h4>
              <p>\uC804\uBB38\uC801\uC774\uACE0 \uC2E0\uB8B0\uAC10 \uC788\uB294 \uBD84\uC704\uAE30</p>
            </div>
          </a>

          <a href="html/hompage/lizin8.html" target="_blank" class="portfolio-item fade-in" data-number="9">
            <div class="portfolio-info">
              <h4>\uC6DC \uBCA0\uC774\uC9C0</h4>
              <p>\uB530\uB73B\uD558\uACE0 \uCE5C\uADFC\uD55C \uB290\uB08C</p>
            </div>
          </a>

          <a href="html/hompage/lizin9.html" target="_blank" class="portfolio-item fade-in" data-number="10">
            <div class="portfolio-info">
              <h4>\uD504\uB808\uC2DC \uBBFC\uD2B8</h4>
              <p>\uC0C1\uCF8C\uD558\uACE0 \uC0DD\uB3D9\uAC10 \uC788\uB294 \uB514\uC790\uC778</p>
            </div>
          </a>

          <a href="html/hompage/lizin10.html" target="_blank" class="portfolio-item fade-in" data-number="11">
            <div class="portfolio-info">
              <h4>\uB85C\uB9E8\uD2F1 \uB85C\uC988</h4>
              <p>\uC6B0\uC544\uD558\uACE0 \uC5EC\uC131\uC2A4\uB7EC\uC6B4 \uB290\uB08C</p>
            </div>
          </a>
        </div>

        <div class="portfolio-footer fade-in">
          <a href="html/hompage/lizin_homepage_portfolio.html" target="_blank" class="view-all-button">
            \uC804\uCCB4 \uC2DC\uC548 \uD55C\uB208\uC5D0 \uBCF4\uAE30 \u2192
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing" id="pricing">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">\uAC00\uACA9 \uC548\uB0B4</h2>
        <p class="section-subtitle">
          \uD569\uB9AC\uC801\uC778 \uAC00\uACA9\uC73C\uB85C \uC804\uBB38\uC801\uC778 \uD648\uD398\uC774\uC9C0\uB97C \uC81C\uC791\uD574\uB4DC\uB9BD\uB2C8\uB2E4
        </p>
      </div>

      <div class="pricing-card fade-in">
        <div class="pricing-badge">\uBCA0\uC2A4\uD2B8 \uCD08\uC774\uC2A4</div>
        <h3 class="pricing-title">\uC804\uBB38 \uD648\uD398\uC774\uC9C0 \uC81C\uC791</h3>
        <div class="pricing-price">300\uB9CC\uC6D0</div>
        <div class="pricing-period">\uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uC81C\uC791 (\uBD80\uAC00\uC138 \uD3EC\uD568)</div>

        <ul class="pricing-features">
          <li>\uB9DE\uCDA4\uD615 \uB514\uC790\uC778 (\uBB34\uC81C\uD55C \uC218\uC815)</li>
          <li>\uBC18\uC751\uD615 \uC6F9 \uAC1C\uBC1C (PC + \uBAA8\uBC14\uC77C)</li>
          <li>SEO \uCD5C\uC801\uD654 \uC791\uC5C5</li>
          <li>\uB3C4\uBA54\uC778 \uBC0F \uD638\uC2A4\uD305 \uC124\uC815</li>
          <li>\uAD00\uB9AC\uC790 \uD398\uC774\uC9C0 \uAD6C\uCD95</li>
          <li>\uCEE8\uD150\uCE20 \uAD00\uB9AC \uC2DC\uC2A4\uD15C</li>
          <li>\uAE30\uBCF8 \uBCF4\uC548 \uC124\uC815</li>
        </ul>

        <a routerLink="/education/home" class="button-primary" style="width: 100%; text-align: center; display: block;">
          \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30
        </a>

        <div class="pricing-note">
          <div class="pricing-note-title">\u{1F4CB} \uCD94\uAC00 \uBE44\uC6A9 \uC548\uB0B4</div>
          <p style="margin: 0;">
            <strong>\uC11C\uBC84 \uAD00\uB9AC\uBE44:</strong> \uC5F0 30\uB9CC\uC6D0 (\uB3C4\uBA54\uC778, \uD638\uC2A4\uD305, \uC720\uC9C0\uBCF4\uC218 \uD3EC\uD568)<br>
            <strong>\uACB0\uC81C \uBC29\uC2DD:</strong> \uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791 \uC2DC 50% \uC120\uAE08, \uC644\uB8CC \uD6C4 50% \uC794\uAE08
          </p>
        </div>
      </div>

      <div class="pricing-card fade-in" style="margin-top: 3rem;">
        <div class="pricing-badge premium">\uD504\uB9AC\uBBF8\uC5C4</div>
        <h3 class="pricing-title">\uC628\uB514\uBC14\uC774\uC2A4 AI & \uBA40\uD2F0\uD50C\uB7AB\uD3FC \uC194\uB8E8\uC158</h3>
        <div class="pricing-price">1,000\uB9CC\uC6D0</div>
        <div class="pricing-period">AI \uAE30\uC220 \uD1B5\uD569 + \uBAA8\uB4E0 \uD50C\uB7AB\uD3FC \uC9C0\uC6D0 (\uBD80\uAC00\uC138 \uD3EC\uD568)</div>

        <ul class="pricing-features">
          <li>\uC628\uB514\uBC14\uC774\uC2A4 AI \uAE30\uC220 \uD1B5\uD569</li>
          <li>Windows & Mac \uB124\uC774\uD2F0\uBE0C \uC571 \uAC1C\uBC1C</li>
          <li>iOS & Android \uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C</li>
          <li>\uC6F9 \uAE30\uBC18 \uD1B5\uD569 \uD50C\uB7AB\uD3FC \uAD6C\uCD95</li>
          <li>AI \uBAA8\uB378 \uCD5C\uC801\uD654 \uBC0F \uBC30\uD3EC</li>
          <li>\uD06C\uB85C\uC2A4\uD50C\uB7AB\uD3FC \uB370\uC774\uD130 \uB3D9\uAE30\uD654</li>
          <li>\uACE0\uAE09 \uBCF4\uC548 \uBC0F \uC554\uD638\uD654</li>
          <li>1\uB144\uAC04 \uAE30\uC220 \uC9C0\uC6D0</li>
        </ul>

        <a routerLink="/education/home" class="button-primary premium-btn" style="width: 100%; text-align: center; display: block;">
          AI \uC194\uB8E8\uC158 \uBB38\uC758\uD558\uAE30
        </a>

        <div class="pricing-note">
          <div class="pricing-note-title">\u{1F916} AI \uC194\uB8E8\uC158 \uD2B9\uC9D5</div>
          <p style="margin: 0;">
            <strong>\uAC1C\uBC1C \uAE30\uAC04:</strong> 6-12\uAC1C\uC6D4 (\uBCF5\uC7A1\uB3C4\uC5D0 \uB530\uB77C \uC0C1\uC774)<br>
            <strong>\uACB0\uC81C \uBC29\uC2DD:</strong> \uACC4\uC57D\uAE08 30% \u2192 \uC911\uAC04 \uC9C4\uB3C4\uAE08 40% \u2192 \uC644\uB8CC \uD6C4 30%<br>
            <strong>\uC9C0\uC6D0 \uBC94\uC704:</strong> AI \uBAA8\uB378 \uD6C8\uB828, \uD50C\uB7AB\uD3FC\uBCC4 \uCD5C\uC801\uD654, \uBC30\uD3EC \uBC0F \uC6B4\uC601
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="process" id="process">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">\uC81C\uC791 \uACFC\uC815</h2>
        <p class="section-subtitle">
          \uCCB4\uACC4\uC801\uC778 \uD504\uB85C\uC138\uC2A4\uB85C \uC644\uBCBD\uD55C \uD648\uD398\uC774\uC9C0\uB97C \uB9CC\uB4E4\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4
        </p>
      </div>

      <div class="process-steps">
        <div class="step-card fade-in">
          <div class="step-number">1</div>
          <h3 class="step-title">\uC0C1\uB2F4 & \uAE30\uD68D</h3>
          <p class="step-description">
            \uACE0\uAC1D\uC758 \uC694\uAD6C\uC0AC\uD56D\uC744 \uD30C\uC545\uD558\uACE0 \uC0AC\uC774\uD2B8 \uAD6C\uC870\uC640 \uAE30\uB2A5\uC744 \uAE30\uD68D\uD569\uB2C8\uB2E4. 
            \uBAA9\uD45C\uC640 \uC608\uC0B0\uC5D0 \uB9DE\uB294 \uCD5C\uC801\uC758 \uC194\uB8E8\uC158\uC744 \uC81C\uC548\uD569\uB2C8\uB2E4.
          </p>
        </div>

        <div class="step-card fade-in">
          <div class="step-number">2</div>
          <h3 class="step-title">\uB514\uC790\uC778 \uC81C\uC791</h3>
          <p class="step-description">
            \uBE0C\uB79C\uB4DC \uC544\uC774\uB374\uD2F0\uD2F0\uC5D0 \uB9DE\uB294 \uB514\uC790\uC778\uC744 \uC81C\uC791\uD569\uB2C8\uB2E4. 
            \uC6D0\uD558\uB294 \uB514\uC790\uC778\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 \uBB34\uC81C\uD55C \uC218\uC815\uD574\uB4DC\uB9BD\uB2C8\uB2E4.
          </p>
        </div>

        <div class="step-card fade-in">
          <div class="step-number">3</div>
          <h3 class="step-title">\uAC1C\uBC1C & \uAD6C\uD604</h3>
          <p class="step-description">
            \uC2B9\uC778\uB41C \uB514\uC790\uC778\uC744 \uBC14\uD0D5\uC73C\uB85C \uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAC1C\uBC1C\uD569\uB2C8\uB2E4. 
            \uBAA8\uB4E0 \uAE30\uB2A5\uC774 \uC644\uBCBD\uD558\uAC8C \uC791\uB3D9\uD558\uB3C4\uB85D \uAD6C\uD604\uD569\uB2C8\uB2E4.
          </p>
        </div>

        <div class="step-card fade-in">
          <div class="step-number">4</div>
          <h3 class="step-title">\uD14C\uC2A4\uD2B8 & \uCD5C\uC801\uD654</h3>
          <p class="step-description">
            \uB2E4\uC591\uD55C \uD658\uACBD\uC5D0\uC11C \uD14C\uC2A4\uD2B8\uB97C \uC9C4\uD589\uD558\uACE0 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. 
            SEO \uCD5C\uC801\uD654\uC640 \uBCF4\uC548 \uC124\uC815\uB3C4 \uD568\uAED8 \uC9C4\uD589\uD569\uB2C8\uB2E4.
          </p>
        </div>

        <div class="step-card fade-in">
          <div class="step-number">5</div>
          <h3 class="step-title">\uB7F0\uCE6D & \uAD00\uB9AC</h3>
          <p class="step-description">
            \uC11C\uBC84 \uC124\uC815 \uD6C4 \uC0AC\uC774\uD2B8\uB97C \uB7F0\uCE6D\uD569\uB2C8\uB2E4. 
            \uC774\uD6C4 \uC9C0\uC18D\uC801\uC778 \uAD00\uB9AC\uC640 \uC5C5\uB370\uC774\uD2B8 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">\uD504\uB85C\uC81D\uD2B8 \uC2DC\uC791\uD558\uAE30</h2>
        <p class="section-subtitle">
          \uBB34\uB8CC \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uC5EC\uB7EC\uBD84\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD574\uBCF4\uC138\uC694
        </p>
      </div>

      <div class="contact-actions fade-in">
        <a routerLink="/education/home" class="contact-button">
          \u{1F4DD} \uBB38\uC758\uD558\uAE30
        </a>
      </div>

      <div class="contact-info fade-in">
        <p>\uAD6C\uAE00\uD3FC\uC744 \uD1B5\uD574 \uBB38\uC758\uD574\uC8FC\uC2DC\uBA74 \uBE60\uB978 \uB2F5\uBCC0\uC744 \uBC1B\uC73C\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 LOWORLD. All rights reserved.</p>
    </div>
  </footer>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/ai/components/homepage-solution/homepage-solution.scss */\n:host {\n  display: block;\n  height: 100vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.homepage-solution-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #0f0c29 0%,\n      #302b63 50%,\n      #24243e 100%);\n  color: white;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.homepage-solution-container .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.homepage-solution-container section {\n  padding: 5rem 0;\n}\n.homepage-solution-container .section-header {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.homepage-solution-container .section-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.homepage-solution-container .section-subtitle {\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n}\n.homepage-solution-container .hero {\n  padding: 8rem 0 6rem;\n  text-align: center;\n}\n.homepage-solution-container .hero .hero-content {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.homepage-solution-container .hero .hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 2rem;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.homepage-solution-container .hero .hero-title {\n  font-size: 3.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n}\n.homepage-solution-container .hero .hero-title .gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.homepage-solution-container .hero .hero-subtitle {\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.8;\n  margin-bottom: 2.5rem;\n}\n.homepage-solution-container .hero .hero-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.homepage-solution-container .button-primary,\n.homepage-solution-container .button-secondary {\n  padding: 1rem 2.5rem;\n  border-radius: 50px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  display: inline-block;\n}\n.homepage-solution-container .button-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.homepage-solution-container .button-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);\n}\n.homepage-solution-container .button-secondary {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.homepage-solution-container .button-secondary:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.homepage-solution-container .services .services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.homepage-solution-container .services .service-card {\n  padding: 2.5rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n.homepage-solution-container .services .service-card:hover {\n  transform: translateY(-10px);\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.homepage-solution-container .services .service-card .service-icon {\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n}\n.homepage-solution-container .services .service-card .service-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: white;\n}\n.homepage-solution-container .services .service-card .service-description {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.homepage-solution-container .services .service-card .service-features {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.homepage-solution-container .services .service-card .service-features li {\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.65);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.homepage-solution-container .services .service-card .service-features li:last-child {\n  border-bottom: none;\n}\n.homepage-solution-container .services .service-card .service-features li:before {\n  content: "\\2713  ";\n  color: #667eea;\n  font-weight: bold;\n  margin-right: 0.5rem;\n}\n.homepage-solution-container .portfolio .portfolio-showcase {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.homepage-solution-container .portfolio .portfolio-showcase .portfolio-link {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2.5rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-decoration: none;\n  color: white;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container .portfolio .portfolio-showcase .portfolio-link:hover {\n  transform: translateX(10px);\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.homepage-solution-container .portfolio .portfolio-showcase .portfolio-link .portfolio-icon {\n  font-size: 4rem;\n  flex-shrink: 0;\n}\n.homepage-solution-container .portfolio .portfolio-showcase .portfolio-link h3 {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.homepage-solution-container .portfolio .portfolio-showcase .portfolio-link p {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n}\n.homepage-solution-container .pricing .pricing-card {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 3rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container .pricing .pricing-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.homepage-solution-container .pricing .pricing-card .pricing-badge {\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.5rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 50px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-badge.premium {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.homepage-solution-container .pricing .pricing-card .pricing-title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 1rem 0;\n  color: white;\n  text-align: center;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-price {\n  font-size: 3.5rem;\n  font-weight: 700;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 1rem 0;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-period {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n  margin-bottom: 2rem;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-features {\n  list-style: none;\n  padding: 0;\n  margin: 2rem 0;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-features li {\n  padding: 1rem 0;\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.85);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.homepage-solution-container .pricing .pricing-card .pricing-features li:last-child {\n  border-bottom: none;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-features li:before {\n  content: "\\2713  ";\n  color: #667eea;\n  font-weight: bold;\n  margin-right: 0.75rem;\n  font-size: 1.2rem;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-note {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.homepage-solution-container .pricing .pricing-card .pricing-note .pricing-note-title {\n  font-weight: 600;\n  color: white;\n  margin-bottom: 0.75rem;\n}\n.homepage-solution-container .pricing .pricing-card .pricing-note p {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.8;\n}\n.homepage-solution-container .pricing .premium-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.homepage-solution-container .pricing .premium-btn:hover {\n  box-shadow: 0 10px 30px rgba(240, 147, 251, 0.4);\n}\n.homepage-solution-container .process .process-steps {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.homepage-solution-container .process .process-steps .step-card {\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container .process .process-steps .step-card:hover {\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.12);\n}\n.homepage-solution-container .process .process-steps .step-card .step-number {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: white;\n}\n.homepage-solution-container .process .process-steps .step-card .step-title {\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: white;\n}\n.homepage-solution-container .process .process-steps .step-card .step-description {\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.6;\n}\n.homepage-solution-container .contact {\n  text-align: center;\n}\n.homepage-solution-container .contact .contact-actions {\n  margin: 3rem 0;\n}\n.homepage-solution-container .contact .contact-button {\n  display: inline-block;\n  padding: 1.5rem 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-decoration: none;\n  border-radius: 50px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.homepage-solution-container .contact .contact-button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);\n}\n.homepage-solution-container .contact .contact-info {\n  margin-top: 2rem;\n}\n.homepage-solution-container .contact .contact-info p {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1rem;\n}\n.homepage-solution-container .footer {\n  padding: 3rem 0;\n  text-align: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin-top: 5rem;\n}\n.homepage-solution-container .footer p {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.homepage-solution-container .fade-in {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: opacity 0.8s ease, transform 0.8s ease;\n}\n.homepage-solution-container .fade-in.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n.homepage-solution-container.light-mode {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode .hero .hero-badge {\n  background: rgba(0, 0, 0, 0.08);\n  border-color: rgba(0, 0, 0, 0.15);\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode .hero .hero-title {\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode .hero .hero-subtitle {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode .section-title {\n  color: #1a202c;\n}\n.homepage-solution-container.light-mode .section-subtitle {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode .button-secondary {\n  color: #1a202c;\n  border-color: rgba(0, 0, 0, 0.3);\n}\n.homepage-solution-container.light-mode .button-secondary:hover {\n  background: rgba(0, 0, 0, 0.08);\n  border-color: rgba(0, 0, 0, 0.5);\n}\n.homepage-solution-container.light-mode .services .service-card {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode .services .service-card:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode .services .service-card .service-icon {\n  opacity: 1;\n  filter: none;\n}\n.homepage-solution-container.light-mode .services .service-card .service-title {\n  color: #1a202c !important;\n  font-weight: 600;\n}\n.homepage-solution-container.light-mode .services .service-card .service-description {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode .services .service-card .service-features li {\n  color: #2d3748 !important;\n  border-bottom-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode .services .service-card .service-features li:before {\n  color: #667eea;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-showcase .portfolio-link {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-showcase .portfolio-link:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-showcase .portfolio-link .portfolio-icon {\n  opacity: 1;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-showcase .portfolio-link h3 {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-showcase .portfolio-link p {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode .pricing .pricing-card:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-title {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-period {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-features li {\n  color: #2d3748 !important;\n  border-bottom-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-features li:before {\n  color: #667eea;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-note {\n  background: #f7fafc !important;\n  border-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-note .pricing-note-title {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-note p {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode .pricing .pricing-card .pricing-note strong {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode .process .step-card {\n  background: white !important;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode .process .step-card:hover {\n  background: white !important;\n  border-color: #cbd5e0;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n.homepage-solution-container.light-mode .process .step-card .step-number {\n  color: white !important;\n}\n.homepage-solution-container.light-mode .process .step-card .step-title {\n  color: #1a202c !important;\n}\n.homepage-solution-container.light-mode .process .step-card .step-description {\n  color: #4a5568 !important;\n}\n.homepage-solution-container.light-mode .contact .contact-info p {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode .footer {\n  border-top-color: #e2e8f0;\n}\n.homepage-solution-container.light-mode .footer p {\n  color: #718096;\n}\n@media (max-width: 1024px) {\n  .homepage-solution-container .hero .hero-title {\n    font-size: 3rem;\n  }\n  .homepage-solution-container .services-grid {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .homepage-solution-container section {\n    padding: 3rem 0;\n  }\n  .homepage-solution-container .container {\n    padding: 0 1.5rem;\n  }\n  .homepage-solution-container .hero {\n    padding: 5rem 0 3rem;\n  }\n  .homepage-solution-container .hero .hero-title {\n    font-size: 2.2rem;\n  }\n  .homepage-solution-container .hero .hero-subtitle {\n    font-size: 1rem;\n  }\n  .homepage-solution-container .hero .hero-actions {\n    flex-direction: column;\n    align-items: center;\n  }\n  .homepage-solution-container .hero .hero-actions .button-primary,\n  .homepage-solution-container .hero .hero-actions .button-secondary {\n    width: 100%;\n    text-align: center;\n  }\n  .homepage-solution-container .section-title {\n    font-size: 2rem;\n  }\n  .homepage-solution-container .section-subtitle {\n    font-size: 1rem;\n  }\n  .homepage-solution-container .services-grid,\n  .homepage-solution-container .process-steps {\n    grid-template-columns: 1fr;\n  }\n  .homepage-solution-container .portfolio-showcase .portfolio-link {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .homepage-solution-container .pricing-card {\n    padding: 2rem 1.5rem;\n  }\n  .homepage-solution-container .pricing-card .pricing-price {\n    font-size: 2.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .homepage-solution-container .hero .hero-title {\n    font-size: 1.8rem;\n  }\n  .homepage-solution-container .button-primary,\n  .homepage-solution-container .button-secondary {\n    padding: 0.875rem 2rem;\n    font-size: 1rem;\n  }\n  .homepage-solution-container .contact-button {\n    padding: 1.2rem 2.5rem;\n    font-size: 1.1rem;\n  }\n}\n.portfolio .portfolio-project {\n  max-width: 100%;\n}\n.portfolio .portfolio-project .portfolio-header {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 3rem;\n}\n.portfolio .portfolio-project .portfolio-header .portfolio-icon {\n  font-size: 4rem;\n  flex-shrink: 0;\n}\n.portfolio .portfolio-project .portfolio-header .portfolio-title {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: white;\n}\n.portfolio .portfolio-project .portfolio-header .portfolio-description {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.1rem;\n  margin: 0;\n}\n.portfolio .portfolio-project .portfolio-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 3rem;\n}\n.portfolio .portfolio-project .portfolio-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  text-decoration: none;\n  color: white;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n  min-height: 60px;\n}\n.portfolio .portfolio-project .portfolio-item:hover {\n  transform: translateX(8px);\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.portfolio .portfolio-project .portfolio-item .portfolio-thumbnail {\n  display: none;\n}\n.portfolio .portfolio-project .portfolio-item .portfolio-info {\n  padding: 0;\n  flex: 1;\n}\n.portfolio .portfolio-project .portfolio-item .portfolio-info h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: white;\n}\n.portfolio .portfolio-project .portfolio-item .portfolio-info p {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.8rem;\n  margin: 0;\n  line-height: 1.4;\n}\n.portfolio .portfolio-project .portfolio-item::before {\n  content: attr(data-number);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: white;\n}\n.portfolio .portfolio-project .portfolio-footer {\n  text-align: center;\n  padding: 2rem;\n}\n.portfolio .portfolio-project .portfolio-footer .view-all-button {\n  display: inline-block;\n  padding: 1.25rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.portfolio .portfolio-project .portfolio-footer .view-all-button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-header {\n  background: white;\n  border-color: #e2e8f0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-header .portfolio-icon {\n  opacity: 1;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-header .portfolio-title {\n  color: #1a202c;\n  font-weight: 700;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-header .portfolio-description {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-item {\n  background: white;\n  border-color: #e2e8f0;\n  color: #1a202c;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-item:hover {\n  background: #f7fafc;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n  border-color: #cbd5e0;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-item::before {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-item .portfolio-info h4 {\n  color: #1a202c;\n  font-weight: 600;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-item .portfolio-info p {\n  color: #4a5568;\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-footer .view-all-button {\n  color: white;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.homepage-solution-container.light-mode .portfolio .portfolio-project .portfolio-footer .view-all-button:hover {\n  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);\n}\n@media (max-width: 768px) {\n  .portfolio .portfolio-project .portfolio-header {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.5rem;\n    gap: 1rem;\n  }\n  .portfolio .portfolio-project .portfolio-header .portfolio-icon {\n    font-size: 3rem;\n  }\n  .portfolio .portfolio-project .portfolio-header .portfolio-title {\n    font-size: 1.5rem;\n  }\n  .portfolio .portfolio-project .portfolio-header .portfolio-description {\n    font-size: 1rem;\n  }\n  .portfolio .portfolio-project .portfolio-gallery {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .portfolio .portfolio-project .portfolio-item {\n    padding: 0.875rem 1rem;\n  }\n  .portfolio .portfolio-project .portfolio-item::before {\n    width: 32px;\n    height: 32px;\n    font-size: 0.85rem;\n  }\n  .portfolio .portfolio-project .portfolio-item .portfolio-info h4 {\n    font-size: 0.95rem;\n  }\n  .portfolio .portfolio-project .portfolio-item .portfolio-info p {\n    font-size: 0.75rem;\n  }\n  .portfolio .portfolio-project .portfolio-footer .view-all-button {\n    padding: 1rem 2rem;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=homepage-solution.css.map */\n'] }]
  }], () => [{ type: ViewportScroller }, { type: ElementRef }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomepageSolution, { className: "HomepageSolution", filePath: "src/app/modules/ai/components/homepage-solution/homepage-solution.ts", lineNumber: 13 });
})();

// src/app/modules/ai/components/ai-global-expedition-detail/ai-global-expedition-detail.ts
function AiGlobalExpeditionDetail_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 43);
    \u0275\u0275text(2, "LOWORLD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AiGlobalExpeditionDetail_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275listener("click", function AiGlobalExpeditionDetail_ng_template_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \uB4A4\uB85C\uAC00\uAE30 ");
    \u0275\u0275elementEnd();
  }
}
var AiGlobalExpeditionDetail = class _AiGlobalExpeditionDetail {
  viewportScroller;
  elementRef;
  themeService;
  isEmbedded = false;
  backRequest = new EventEmitter();
  isDarkMode = false;
  // 라이트 모드가 기본
  constructor(viewportScroller, elementRef, themeService) {
    this.viewportScroller = viewportScroller;
    this.elementRef = elementRef;
    this.themeService = themeService;
  }
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
    setTimeout(() => {
      const hostElement = this.elementRef.nativeElement;
      if (hostElement) {
        hostElement.scrollTop = 0;
      }
    }, 0);
  }
  ngAfterViewInit() {
    this.initScrollAnimations();
    setTimeout(() => {
      const hostElement = this.elementRef.nativeElement;
      if (hostElement) {
        hostElement.scrollTop = 0;
      }
    }, 100);
  }
  ngOnDestroy() {
  }
  goBack() {
    this.backRequest.emit();
  }
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const hostElement = this.elementRef.nativeElement;
    if (element && hostElement) {
      const elementTop = element.offsetTop;
      hostElement.scrollTo({
        top: elementTop - 100,
        behavior: "smooth"
      });
    }
  }
  initScrollAnimations() {
    const hostElement = this.elementRef.nativeElement;
    const observerOptions = {
      root: hostElement,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
    hostElement.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
  }
  static \u0275fac = function AiGlobalExpeditionDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiGlobalExpeditionDetail)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiGlobalExpeditionDetail, selectors: [["app-ai-global-expedition-detail"]], inputs: { isEmbedded: "isEmbedded" }, outputs: { backRequest: "backRequest" }, standalone: false, decls: 249, vars: 2, consts: [["embeddedNav", ""], [1, "page-container"], [1, "nav"], [1, "nav-container"], [4, "ngIf", "ngIfElse"], [1, "nav-cta", 3, "click"], [1, "bento-card", "header-card"], [1, "header-content"], [1, "icon-box"], [1, "text-box"], [1, "badge"], [1, "bento-card", "quote-card"], [1, "quote-icon"], [1, "quote-text"], [1, "quote-sub"], [1, "highlight"], [1, "section-label"], [1, "bento-grid-3"], [1, "bento-card", "info-card"], [1, "card-icon"], [1, "bento-card", "info-card", "target-card"], [1, "bento-grid-4"], [1, "bento-card", "operation-card"], [1, "op-icon", "bg-green"], [1, "op-content"], [1, "sub-tag"], [1, "op-icon", "bg-red"], [1, "op-icon", "bg-yellow"], [1, "op-icon", "bg-blue"], [1, "provider-grid"], [1, "provider-pill"], [1, "pill-icon"], [1, "bento-card", "target-card"], [1, "target-icon"], [1, "vision-card"], [1, "vision-icon"], [1, "bento-card", "curriculum-card"], [1, "rocket-icon"], [1, "curr-content"], [1, "stats-row"], [1, "stat-card"], ["id", "contact", 2, "text-align", "center", "margin-top", "60px", "margin-bottom", "40px"], ["routerLink", "/education/home", 2, "background", "#000", "color", "white", "padding", "16px 32px", "border-radius", "50px", "text-decoration", "none", "font-weight", "700", "font-size", "1.1rem", "display", "inline-block"], ["routerLink", "/loworld", 1, "logo"], [1, "back-button", 3, "click"], ["viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "currentColor"], ["d", "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"]], template: function AiGlobalExpeditionDetail_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "div", 3);
      \u0275\u0275template(3, AiGlobalExpeditionDetail_ng_container_3_Template, 3, 0, "ng-container", 4)(4, AiGlobalExpeditionDetail_ng_template_4_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(6, "a", 5);
      \u0275\u0275listener("click", function AiGlobalExpeditionDetail_Template_a_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToSection("contact"));
      });
      \u0275\u0275text(7, "1\uAE30 \uC2E0\uCCAD");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275text(11, " \u{1F393} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "h1");
      \u0275\u0275text(14, "AI \uC6D4\uB4DC\uC6D0\uC815\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "\uAFC8\uC744 \uD604\uC2E4\uB85C \uB9CC\uB4DC\uB294 12\uAC1C\uC6D4 \uC5EC\uC815");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275text(18, "1\uAE30 \uBAA8\uC9D1\uC911");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11)(20, "div", 12);
      \u0275\u0275text(21, "\u275D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13);
      \u0275\u0275text(23, ' "10\uB144 \uB4A4\uC5D0 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uAE30 \uC704\uD574 \uB0B4\uB144 \uD55C \uD574\uB97C \uC624\uB86F\uC774 \uC790\uC2E0\uC758 \uBAA9\uD45C\uC5D0 \uC62C\uC778\uD558\uACA0\uC2B5\uB2C8\uB2E4" ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14);
      \u0275\u0275text(25, " \uC548\uC815\uC801\uC778 CTO \uC81C\uC548\uC744 \uAC70\uC808\uD558\uACE0 \uAFC8\uC744 \uC120\uD0DD\uD55C \uD55C \uAC1C\uBC1C\uC790\uC758 \uBA54\uC2DC\uC9C0\uAC00");
      \u0275\u0275element(26, "br");
      \u0275\u0275text(27, " AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 \uC2DC\uC791\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
      \u0275\u0275element(28, "br")(29, "br");
      \u0275\u0275text(30, " \uB204\uAD70\uAC00\uC758 ");
      \u0275\u0275elementStart(31, "span", 15);
      \u0275\u0275text(32, "\uC778\uC0DD\uC774 \uAC78\uB9B0 \uC120\uD0DD");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, "\uC744 \uD568\uAED8\uD558\uAE30\uC5D0, \uD750\uC9C0\uBD80\uC9C0\uD558\uAC8C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      \u0275\u0275element(34, "br");
      \u0275\u0275text(35, " \uC774\uAC83\uC740 \uB2E8\uC21C\uD55C \uAD50\uC721\uC774 \uC544\uB2CC, ");
      \u0275\u0275elementStart(36, "span", 15);
      \u0275\u0275text(37, "\uAFC8\uC744 \uC2E4\uD604\uD558\uB294 \uC5EC\uC815");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "\uC785\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 16);
      \u0275\u0275text(40, " \u26A1\uFE0F \uC65C \uC9C0\uAE08\uC778\uAC00? ");
      \u0275\u0275elementStart(41, "span", 15);
      \u0275\u0275text(42, "\uAE00\uB85C\uBC8C IP \uC120\uC810\uC758 \uC2DC\uB300");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 17)(44, "div", 18)(45, "div", 19);
      \u0275\u0275text(46, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h3");
      \u0275\u0275text(48, "AI \uD601\uBA85\uC758 \uC2DC\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p");
      \u0275\u0275text(50, "\uC0B0\uC5C5\uD601\uBA85, \uC778\uD130\uB137 \uD601\uBA85\uC5D0 \uC774\uC740 AI \uD601\uBA85\uC740 \uC5C4\uCCAD\uB09C \uD63C\uB780\uC778 \uB3D9\uC2DC\uC5D0 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uAE30\uD68D, \uB514\uC790\uC778, \uAC1C\uBC1C, \uB9C8\uCF00\uD305\uC744 \uD63C\uC790 \uB2E4 \uD560 \uC218 \uC788\uB294 \uC2DC\uB300\uAC00 \uC5F4\uB838\uC2B5\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 18)(52, "div", 19);
      \u0275\u0275text(53, "\u{1F30D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h3");
      \u0275\u0275text(55, "1\uC778 \uAE00\uB85C\uBC8C \uC2DC\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "\uACFC\uAC70 100\uBA85\uC774 \uD558\uB358 \uC77C\uC744 \uC774\uC81C \uD63C\uC790\uC11C\uB3C4 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC790\uC2E0\uC758 IP(\uC9C0\uC2DD\uC7AC\uC0B0\uAD8C)\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uCD9C\uC2DC\uD558\uC138\uC694.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 18)(59, "div", 19);
      \u0275\u0275text(60, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "h3");
      \u0275\u0275text(62, "\uC11C\uBD80 \uAC1C\uCC99 \uC2DC\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "AI \uC5B8\uC5B4 \uB2A5\uB825\uC744 \uD65C\uC6A9\uD574 \uC778\uB3C4, \uC911\uAD6D, \uC544\uD504\uB9AC\uCE74 \uB4F1 \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC758 \uCCAB \uBC88\uC9F8 \uD3EC\uC9C0\uC154\uB2DD\uC744 \uC120\uC810\uD574\uC57C \uD558\uB294 \uC2DC\uB300\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 16);
      \u0275\u0275text(66, " \u{1F48E} AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 ");
      \u0275\u0275elementStart(67, "span", 15);
      \u0275\u0275text(68, "\uD575\uC2EC \uAC00\uCE58");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 17)(70, "div", 20)(71, "div", 19);
      \u0275\u0275text(72, "\u2764\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "h3");
      \u0275\u0275text(74, "\uC0AC\uB791\uACFC \uC774\uD0C0\uC801 \uD0DC\uB3C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, "\uC774\uAE30\uC801\uC778 \uC774\uB4DD\uBCF4\uB2E4 \uB0A8\uC744 \uB3D5\uB294 \uB9C8\uC74C\uC744 \uAC00\uC9C8 \uB54C \uC0B6\uC758 \uC120\uC21C\uD658\uC774 \uC77C\uC5B4\uB0A9\uB2C8\uB2E4. \uAE30\uC220\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uBCF4\uC774\uC9C0 \uC54A\uB294 \uAC00\uCE58\uC640 \uC8FC\uCCB4\uC801\uC778 \uC0B6\uC758 \uD0DC\uB3C4\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 20)(78, "div", 19);
      \u0275\u0275text(79, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "h3");
      \u0275\u0275text(81, "\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "'\uC62C\uC778'\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uC2EC\uB9AC\uAC00 \uBB34\uB108\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5\uC785\uB2C8\uB2E4. \uC2E4\uD328\uD574\uB3C4 \uAD1C\uCC2E\uC740 \uC5B4\uB824\uC6B4 \uB3C4\uC804\uC744 \uC990\uAE30\uB294 \uD0DC\uB3C4\uAC00 \uB354 \uD070 \uC131\uC7A5\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 20)(85, "div", 19);
      \u0275\u0275text(86, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "h3");
      \u0275\u0275text(88, "\uD3C9\uC0DD\uC758 \uAE30\uC220\uB825");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "\uAC8C\uC784(\uD0B9\uC624\uD30C 94, 95...)\uCC98\uB7FC \uB9E4\uB144 \uC81C\uD488\uC744 \uBC1C\uC804\uC2DC\uCF1C \uB098\uAC00\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 \uD3C9\uC0DD \uD560 \uC77C\uACFC \uAE30\uC220\uB825\uC744 \uC5BB\uAC8C \uB429\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 16);
      \u0275\u0275text(92, " \u2728 \uCC28\uBCC4\uD654\uB41C ");
      \u0275\u0275elementStart(93, "span", 15);
      \u0275\u0275text(94, "\uC6B4\uC601 \uBC29\uC2DD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 21)(96, "div", 22)(97, "div", 23);
      \u0275\u0275text(98, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 24)(100, "h4");
      \u0275\u0275text(101, "\uD6C4\uBD88\uC81C \uC2DC\uC2A4\uD15C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "\uD55C \uB2EC \uCC38\uC5EC \uD6C4 \uB9CC\uC871\uD558\uBA74 \uB2E4\uC74C \uB2EC \uBE44\uC6A9 \uC9C0\uBD88 (Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span", 25);
      \u0275\u0275text(105, "\uAD81\uADF9\uC758 \uC790\uC2E0\uAC10");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 22)(107, "div", 26);
      \u0275\u0275text(108, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 24)(110, "h4");
      \u0275\u0275text(111, "\uAE00\uB85C\uBC8C \uCD9C\uC2DC \uBCF4\uC7A5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p");
      \u0275\u0275text(113, "\uBC14\uBE60\uC11C \uC644\uC131 \uBABB \uD574\uB3C4 \uB300\uD45C\uB2D8\uC774 \uC9C1\uC811 \uAC00\uC774\uB4DC\uD558\uC5EC \uBB34\uC870\uAC74 \uAE00\uB85C\uBC8C \uCD9C\uC2DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "span", 25);
      \u0275\u0275text(115, "\uAC15\uB825\uD55C \uD3EC\uD2B8\uD3F4\uB9AC\uC624");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 22)(117, "div", 27);
      \u0275\u0275text(118, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 24)(120, "h4");
      \u0275\u0275text(121, "\uC218\uC775 \uBAA9\uC801 \uC544\uB2D8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123, "\uAFC8\uC744 \uB098\uB204\uACE0 \uD568\uAED8 \uC131\uC7A5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC5BB\uB294 \uBCF4\uB78C\uC744 \uC704\uD574 \uCD94\uC9C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "span", 25);
      \u0275\u0275text(125, "\uC9C4\uC815\uC131 \uC788\uB294 \uB3D9\uD589");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 22)(127, "div", 28);
      \u0275\u0275text(128, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 24)(130, "h4");
      \u0275\u0275text(131, "\uC218\uC775 \uBC30\uBD84");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p");
      \u0275\u0275text(133, "\uB85C\uC6D4\uB4DC \uD50C\uB7AB\uD3FC\uC744 \uD1B5\uD574 \uC218\uC775 \uBC30\uBD84 (\uC81C\uC791\uC790 80% : \uD50C\uB7AB\uD3FC 20%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span", 25);
      \u0275\u0275text(135, "\uC0C1\uC0DD \uAD6C\uC870");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 16);
      \u0275\u0275text(137, " \u{1F6E0} AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uAC00 ");
      \u0275\u0275elementStart(138, "span", 15);
      \u0275\u0275text(139, "\uC81C\uACF5\uD558\uB294 \uAC83");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 29)(141, "div", 30)(142, "span", 31);
      \u0275\u0275text(143, "\u{1F916}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "span");
      \u0275\u0275text(145, "AI \uC5D0\uC774\uC804\uD2B8 & \uBC14\uC774\uBE0C \uCF54\uB529 \uAE30\uC220 \uC804\uC218");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 30)(147, "span", 31);
      \u0275\u0275text(148, "\u{1F4F1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "iOS, Android, Web \uD1B5\uD569 \uD504\uB808\uC784\uC6CC\uD06C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 30)(152, "span", 31);
      \u0275\u0275text(153, "\u{1F4E2}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "span");
      \u0275\u0275text(155, "\uAE00\uB85C\uBC8C \uB9C8\uCF00\uD305 & SNS \uCF58\uD150\uCE20 \uC790\uB3D9\uD654");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 30)(157, "span", 31);
      \u0275\u0275text(158, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "span");
      \u0275\u0275text(160, "\uAE00\uB85C\uBC8C \uACB0\uC81C(PayPal \uB4F1) & \uBC95\uC778 \uD5C8\uB4E4 \uD574\uACB0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 30)(162, "span", 31);
      \u0275\u0275text(163, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "\uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0 (\uC601\uC5B4, \uC77C\uBCF8\uC5B4, \uC911\uAD6D\uC5B4)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 30)(167, "span", 31);
      \u0275\u0275text(168, "\u2601\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "span");
      \u0275\u0275text(170, "AWS/GCP \uD074\uB77C\uC6B0\uB4DC \uC778\uD504\uB77C \uAD6C\uCD95");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 16);
      \u0275\u0275text(172, " \u{1F465} \uC774\uB7F0 \uBD84\uB4E4\uC744 ");
      \u0275\u0275elementStart(173, "span", 15);
      \u0275\u0275text(174, "\uAE30\uB2E4\uB9BD\uB2C8\uB2E4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 17)(176, "div", 32)(177, "div", 33);
      \u0275\u0275text(178, "\u{1F468}\u200D\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "h4");
      \u0275\u0275text(180, "\uCDE8\uC5C5\uC774 \uC5B4\uB824\uC6B4 \uCCAD\uB144");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "p");
      \u0275\u0275text(182, "\uC2A4\uD399 \uC313\uAE30 \uB300\uC2E0 \uC9C4\uC9DC \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC0AC\uC5C5\uAC00\uB85C \uC131\uC7A5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 32)(184, "div", 33);
      \u0275\u0275text(185, "\u{1F468}\u200D\u{1F4BC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "h4");
      \u0275\u0275text(187, "\uC740\uD1F4\uD55C 50\uB300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "p");
      \u0275\u0275text(189, "\uACBD\uD5D8\uACFC \uC9C0\uD61C\uC5D0 AI\uB97C \uB354\uD574 \uC0C8\uB85C\uC6B4 \uC0DD\uC0B0\uC790\uB85C\uC11C\uC758 \uAE38\uC744 \uAC1C\uCC99");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 32)(191, "div", 33);
      \u0275\u0275text(192, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "h4");
      \u0275\u0275text(194, "\uAFC8\uC744 \uAC00\uC9C4 \uB204\uAD6C\uB098");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "p");
      \u0275\u0275text(196, "10\uB144 \uB4A4 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uC744 \uC778\uC0DD\uC744 \uAC74 \uB3C4\uC804\uC744 \uD558\uACE0 \uC2F6\uC740 \uBD84");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 34)(198, "div", 35);
      \u0275\u0275text(199, "\u{1F31F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "h2");
      \u0275\u0275text(201, "\uC6B0\uB9AC\uC758 \uBE44\uC804");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p");
      \u0275\u0275text(203, " \uC138\uC0C1\uC740 \uD798\uB4E4\uACE0 \uC9C1\uC7A5 \uC0DD\uD65C\uC740 \uACE0\uB418\uC9C0\uB9CC,");
      \u0275\u0275element(204, "br");
      \u0275\u0275elementStart(205, "span", 15);
      \u0275\u0275text(206, "\uC790\uAE30 \uB2A5\uB825\uC73C\uB85C \uBB34\uC5B8\uAC00\uB97C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uACFC\uC815\uC740 \uB9E4\uC6B0 \uC990\uAC70\uC6B4 \uC77C\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(207, "br")(208, "br");
      \u0275\u0275text(209, ' AI\uB77C\uB294 \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD574 \uC774 \uC7AC\uBC0C\uB294 "\uD310"\uC5D0\uC11C \uD568\uAED8 \uB6F0\uC5B4\uB180\uACE0,');
      \u0275\u0275element(210, "br");
      \u0275\u0275text(211, " \uC804 \uC138\uACC4\uB97C \uBB34\uB300\uB85C \uD65C\uB3D9\uD558\uB294 ");
      \u0275\u0275elementStart(212, "span", 15);
      \u0275\u0275text(213, "'\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB9C8\uD53C\uC544'");
      \u0275\u0275elementEnd();
      \u0275\u0275text(214, " \uAC19\uC740 \uC9D1\uB2E8\uC744 \uB9CC\uB4DC\uB294 \uAC83.");
      \u0275\u0275element(215, "br");
      \u0275\u0275text(216, " \uD63C\uC790\uBCF4\uB2E4 \uC5F0\uD569\uD560 \uB54C \uB354 \uBA40\uB9AC \uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 36)(218, "div", 37);
      \u0275\u0275text(219, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 38)(221, "h3");
      \u0275\u0275text(222, "12\uAC1C\uC6D4 \uCEE4\uB9AC\uD058\uB7FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "p");
      \u0275\u0275text(224, "AI\uC640 \uD568\uAED8 \uB2F9\uC2E0\uC758 \uC544\uC774\uB514\uC5B4\uB97C \uAE00\uB85C\uBC8C \uC11C\uBE44\uC2A4\uB85C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uC2E4\uBB34 \uD504\uB85C\uADF8\uB7A8");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "div", 39)(226, "div", 40)(227, "h3");
      \u0275\u0275text(228, "10\uAC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "p");
      \u0275\u0275text(230, "\uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 40)(232, "h3");
      \u0275\u0275text(233, "40+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "p");
      \u0275\u0275text(235, "\uAD50\uC721 \uAC15\uC758");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "div", 40)(237, "h3");
      \u0275\u0275text(238, "40+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "p");
      \u0275\u0275text(240, "AI \uACB0\uACFC\uBB3C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "div", 40)(242, "h3");
      \u0275\u0275text(243, "1\uAC1C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "p");
      \u0275\u0275text(245, "\uAE00\uB85C\uBC8C \uB7F0\uCE6D");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "div", 41)(247, "a", 42);
      \u0275\u0275text(248, " 1\uAE30 \uC9C0\uAE08 \uC2E0\uCCAD\uD558\uAE30 \u{1F680} ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const embeddedNav_r4 = \u0275\u0275reference(5);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.isEmbedded)("ngIfElse", embeddedNav_r4);
    }
  }, dependencies: [NgIf, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #f5f9fc;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.page-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 80px 20px 100px;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1d1d1f;\n  margin: 40px 0 20px;\n}\n.section-label[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #007aff;\n}\n.bento-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .bento-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.bento-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .bento-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.bento-grid-4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .bento-grid-4[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.bento-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.bento-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);\n}\n.header-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe 0%,\n      #bae6fd 100%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 20px;\n}\n.header-card[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.header-card[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #0ea5e9;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n}\n.header-card[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.header-card[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #334155;\n  margin-top: 4px;\n}\n.header-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #ff5252;\n  color: white;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .header-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.quote-card[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  text-align: center;\n  padding: 40px;\n  margin-bottom: 40px;\n  border: 1px solid #e0e7ff;\n}\n.quote-card[_ngcontent-%COMP%]   .quote-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #374151;\n  line-height: 1.5;\n  margin-bottom: 20px;\n  font-style: italic;\n}\n.quote-card[_ngcontent-%COMP%]   .quote-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.quote-card[_ngcontent-%COMP%]   .quote-sub[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 600;\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #111827;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #4b5563;\n  line-height: 1.6;\n}\n.value-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.value-card[_ngcontent-%COMP%]   .tag.red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.value-card[_ngcontent-%COMP%]   .tag.blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.value-card[_ngcontent-%COMP%]   .tag.green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.operation-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.bg-blue[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.bg-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.bg-yellow[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.operation-card[_ngcontent-%COMP%]   .op-icon.bg-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.operation-card[_ngcontent-%COMP%]   .op-content[_ngcontent-%COMP%]   .sub-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: #0ea5e9;\n  font-weight: 600;\n  background: #f0f9ff;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.provider-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .provider-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.provider-pill[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #f3f4f6;\n}\n.provider-pill[_ngcontent-%COMP%]   .pill-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.provider-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #374151;\n}\n.target-card[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  text-align: center;\n  padding: 30px 20px;\n}\n.target-card[_ngcontent-%COMP%]   .target-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 16px;\n}\n.target-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: #1e293b;\n}\n.target-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n.vision-card[_ngcontent-%COMP%] {\n  background: #1f2937;\n  color: white;\n  text-align: center;\n  padding: 60px 20px;\n  margin-top: 60px;\n  border-radius: 24px;\n}\n.vision-card[_ngcontent-%COMP%]   .vision-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n  color: #fbbf24;\n}\n.vision-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.vision-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #9ca3af;\n  line-height: 1.8;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.vision-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  font-weight: 600;\n}\n.curriculum-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 20px;\n}\n.curriculum-card[_ngcontent-%COMP%]   .rocket-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.curriculum-card[_ngcontent-%COMP%]   .curr-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.curriculum-card[_ngcontent-%COMP%]   .curr-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n.nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.2rem;\n  color: #000;\n  text-decoration: none;\n}\n.nav[_ngcontent-%COMP%]   .nav-cta[_ngcontent-%COMP%] {\n  background: #000;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1d1d1f;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.back-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n/*# sourceMappingURL=ai-global-expedition-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiGlobalExpeditionDetail, [{
    type: Component,
    args: [{ selector: "app-ai-global-expedition-detail", standalone: false, template: `<div class="page-container">
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-container">
      <ng-container *ngIf="!isEmbedded; else embeddedNav">
        <a routerLink="/loworld" class="logo">LOWORLD</a>
      </ng-container>
      <ng-template #embeddedNav>
        <a (click)="goBack()" class="back-button">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          \uB4A4\uB85C\uAC00\uAE30
        </a>
      </ng-template>
      <a (click)="scrollToSection('contact')" class="nav-cta">1\uAE30 \uC2E0\uCCAD</a>
    </div>
  </nav>

  <!-- 1. Header Card -->
  <div class="bento-card header-card">
    <div class="header-content">
      <div class="icon-box">
        \u{1F393}
      </div>
      <div class="text-box">
        <h1>AI \uC6D4\uB4DC\uC6D0\uC815\uB300</h1>
        <p>\uAFC8\uC744 \uD604\uC2E4\uB85C \uB9CC\uB4DC\uB294 12\uAC1C\uC6D4 \uC5EC\uC815</p>
      </div>
    </div>
    <div class="badge">1\uAE30 \uBAA8\uC9D1\uC911</div>
  </div>

  <!-- 2. Quote Card -->
  <div class="bento-card quote-card">
    <div class="quote-icon">\u275D</div>
    <div class="quote-text">
      "10\uB144 \uB4A4\uC5D0 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uAE30 \uC704\uD574 \uB0B4\uB144 \uD55C \uD574\uB97C \uC624\uB86F\uC774 \uC790\uC2E0\uC758 \uBAA9\uD45C\uC5D0 \uC62C\uC778\uD558\uACA0\uC2B5\uB2C8\uB2E4"
    </div>
    <div class="quote-sub">
      \uC548\uC815\uC801\uC778 CTO \uC81C\uC548\uC744 \uAC70\uC808\uD558\uACE0 \uAFC8\uC744 \uC120\uD0DD\uD55C \uD55C \uAC1C\uBC1C\uC790\uC758 \uBA54\uC2DC\uC9C0\uAC00<br>
      AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 \uC2DC\uC791\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.<br><br>
      \uB204\uAD70\uAC00\uC758 <span class="highlight">\uC778\uC0DD\uC774 \uAC78\uB9B0 \uC120\uD0DD</span>\uC744 \uD568\uAED8\uD558\uAE30\uC5D0, \uD750\uC9C0\uBD80\uC9C0\uD558\uAC8C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br>
      \uC774\uAC83\uC740 \uB2E8\uC21C\uD55C \uAD50\uC721\uC774 \uC544\uB2CC, <span class="highlight">\uAFC8\uC744 \uC2E4\uD604\uD558\uB294 \uC5EC\uC815</span>\uC785\uB2C8\uB2E4.
    </div>
  </div>

  <!-- 3. Why Now? -->
  <div class="section-label">
    \u26A1\uFE0F \uC65C \uC9C0\uAE08\uC778\uAC00? <span class="highlight">\uAE00\uB85C\uBC8C IP \uC120\uC810\uC758 \uC2DC\uB300</span>
  </div>
  <div class="bento-grid-3">
    <div class="bento-card info-card">
      <div class="card-icon">\u{1F916}</div>
      <h3>AI \uD601\uBA85\uC758 \uC2DC\uB300</h3>
      <p>\uC0B0\uC5C5\uD601\uBA85, \uC778\uD130\uB137 \uD601\uBA85\uC5D0 \uC774\uC740 AI \uD601\uBA85\uC740 \uC5C4\uCCAD\uB09C \uD63C\uB780\uC778 \uB3D9\uC2DC\uC5D0 \uAE30\uD68C\uC785\uB2C8\uB2E4. \uAE30\uD68D, \uB514\uC790\uC778, \uAC1C\uBC1C, \uB9C8\uCF00\uD305\uC744 \uD63C\uC790 \uB2E4 \uD560 \uC218 \uC788\uB294 \uC2DC\uB300\uAC00 \uC5F4\uB838\uC2B5\uB2C8\uB2E4.</p>
    </div>
    <div class="bento-card info-card">
      <div class="card-icon">\u{1F30D}</div>
      <h3>1\uC778 \uAE00\uB85C\uBC8C \uC2DC\uB300</h3>
      <p>\uACFC\uAC70 100\uBA85\uC774 \uD558\uB358 \uC77C\uC744 \uC774\uC81C \uD63C\uC790\uC11C\uB3C4 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC790\uC2E0\uC758 IP(\uC9C0\uC2DD\uC7AC\uC0B0\uAD8C)\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uCD9C\uC2DC\uD558\uC138\uC694.</p>
    </div>
    <div class="bento-card info-card">
      <div class="card-icon">\u{1F680}</div>
      <h3>\uC11C\uBD80 \uAC1C\uCC99 \uC2DC\uB300</h3>
      <p>AI \uC5B8\uC5B4 \uB2A5\uB825\uC744 \uD65C\uC6A9\uD574 \uC778\uB3C4, \uC911\uAD6D, \uC544\uD504\uB9AC\uCE74 \uB4F1 \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC758 \uCCAB \uBC88\uC9F8 \uD3EC\uC9C0\uC154\uB2DD\uC744 \uC120\uC810\uD574\uC57C \uD558\uB294 \uC2DC\uB300\uC785\uB2C8\uB2E4.</p>
    </div>
  </div>

  <!-- 4. Core Values -->
  <div class="section-label">
    \u{1F48E} AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uC758 <span class="highlight">\uD575\uC2EC \uAC00\uCE58</span>
  </div>
  <div class="bento-grid-3">
    <div class="bento-card info-card target-card">
      <div class="card-icon">\u2764\uFE0F</div>
      <h3>\uC0AC\uB791\uACFC \uC774\uD0C0\uC801 \uD0DC\uB3C4</h3>
      <p>\uC774\uAE30\uC801\uC778 \uC774\uB4DD\uBCF4\uB2E4 \uB0A8\uC744 \uB3D5\uB294 \uB9C8\uC74C\uC744 \uAC00\uC9C8 \uB54C \uC0B6\uC758 \uC120\uC21C\uD658\uC774 \uC77C\uC5B4\uB0A9\uB2C8\uB2E4. \uAE30\uC220\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uBCF4\uC774\uC9C0 \uC54A\uB294 \uAC00\uCE58\uC640 \uC8FC\uCCB4\uC801\uC778 \uC0B6\uC758 \uD0DC\uB3C4\uC785\uB2C8\uB2E4.</p>
    </div>
    <div class="bento-card info-card target-card">
      <div class="card-icon">\u{1F3AF}</div>
      <h3>\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5</h3>
      <p>'\uC62C\uC778'\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uC2EC\uB9AC\uAC00 \uBB34\uB108\uC9C0\uC9C0 \uC54A\uB294 \uC804\uB7B5\uC785\uB2C8\uB2E4. \uC2E4\uD328\uD574\uB3C4 \uAD1C\uCC2E\uC740 \uC5B4\uB824\uC6B4 \uB3C4\uC804\uC744 \uC990\uAE30\uB294 \uD0DC\uB3C4\uAC00 \uB354 \uD070 \uC131\uC7A5\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4.</p>
    </div>
    <div class="bento-card info-card target-card">
      <div class="card-icon">\u{1F4DA}</div>
      <h3>\uD3C9\uC0DD\uC758 \uAE30\uC220\uB825</h3>
      <p>\uAC8C\uC784(\uD0B9\uC624\uD30C 94, 95...)\uCC98\uB7FC \uB9E4\uB144 \uC81C\uD488\uC744 \uBC1C\uC804\uC2DC\uCF1C \uB098\uAC00\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 \uD3C9\uC0DD \uD560 \uC77C\uACFC \uAE30\uC220\uB825\uC744 \uC5BB\uAC8C \uB429\uB2C8\uB2E4.</p>
    </div>
  </div>

  <!-- 5. Operation Method -->
  <div class="section-label">
    \u2728 \uCC28\uBCC4\uD654\uB41C <span class="highlight">\uC6B4\uC601 \uBC29\uC2DD</span>
  </div>
  <div class="bento-grid-4">
    <div class="bento-card operation-card">
      <div class="op-icon bg-green">\u{1F4B3}</div>
      <div class="op-content">
        <h4>\uD6C4\uBD88\uC81C \uC2DC\uC2A4\uD15C</h4>
        <p>\uD55C \uB2EC \uCC38\uC5EC \uD6C4 \uB9CC\uC871\uD558\uBA74 \uB2E4\uC74C \uB2EC \uBE44\uC6A9 \uC9C0\uBD88 (Loworld AI Engine \uC0AC\uC6A9\uBE44\uC6A9 2\uCC9C\uB9CC\uC6D0\uC744 70% \uD560\uC778\uD574\uC11C 1\uB144 600\uB9CC\uC6D0(\uC6D4 50\uB9CC\uC6D0)\uC5D0 \uC81C\uACF5\uD558\uBA70, \uAD50\uC721\uC740 \uBB34\uB8CC)</p>
        <span class="sub-tag">\uAD81\uADF9\uC758 \uC790\uC2E0\uAC10</span>
      </div>
    </div>
    <div class="bento-card operation-card">
      <div class="op-icon bg-red">\u{1F3AF}</div>
      <div class="op-content">
        <h4>\uAE00\uB85C\uBC8C \uCD9C\uC2DC \uBCF4\uC7A5</h4>
        <p>\uBC14\uBE60\uC11C \uC644\uC131 \uBABB \uD574\uB3C4 \uB300\uD45C\uB2D8\uC774 \uC9C1\uC811 \uAC00\uC774\uB4DC\uD558\uC5EC \uBB34\uC870\uAC74 \uAE00\uB85C\uBC8C \uCD9C\uC2DC</p>
        <span class="sub-tag">\uAC15\uB825\uD55C \uD3EC\uD2B8\uD3F4\uB9AC\uC624</span>
      </div>
    </div>
    <div class="bento-card operation-card">
      <div class="op-icon bg-yellow">\u{1F91D}</div>
      <div class="op-content">
        <h4>\uC218\uC775 \uBAA9\uC801 \uC544\uB2D8</h4>
        <p>\uAFC8\uC744 \uB098\uB204\uACE0 \uD568\uAED8 \uC131\uC7A5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC5BB\uB294 \uBCF4\uB78C\uC744 \uC704\uD574 \uCD94\uC9C4</p>
        <span class="sub-tag">\uC9C4\uC815\uC131 \uC788\uB294 \uB3D9\uD589</span>
      </div>
    </div>
    <div class="bento-card operation-card">
      <div class="op-icon bg-blue">\u{1F4B0}</div>
      <div class="op-content">
        <h4>\uC218\uC775 \uBC30\uBD84</h4>
        <p>\uB85C\uC6D4\uB4DC \uD50C\uB7AB\uD3FC\uC744 \uD1B5\uD574 \uC218\uC775 \uBC30\uBD84 (\uC81C\uC791\uC790 80% : \uD50C\uB7AB\uD3FC 20%)</p>
        <span class="sub-tag">\uC0C1\uC0DD \uAD6C\uC870</span>
      </div>
    </div>
  </div>

  <!-- 6. What We Provide -->
  <div class="section-label">
    \u{1F6E0} AI \uC6D4\uB4DC\uC6D0\uC815\uB300\uAC00 <span class="highlight">\uC81C\uACF5\uD558\uB294 \uAC83</span>
  </div>
  <div class="provider-grid">
    <div class="provider-pill">
      <span class="pill-icon">\u{1F916}</span>
      <span>AI \uC5D0\uC774\uC804\uD2B8 & \uBC14\uC774\uBE0C \uCF54\uB529 \uAE30\uC220 \uC804\uC218</span>
    </div>
    <div class="provider-pill">
      <span class="pill-icon">\u{1F4F1}</span>
      <span>iOS, Android, Web \uD1B5\uD569 \uD504\uB808\uC784\uC6CC\uD06C</span>
    </div>
    <div class="provider-pill">
      <span class="pill-icon">\u{1F4E2}</span>
      <span>\uAE00\uB85C\uBC8C \uB9C8\uCF00\uD305 & SNS \uCF58\uD150\uCE20 \uC790\uB3D9\uD654</span>
    </div>
    <div class="provider-pill">
      <span class="pill-icon">\u{1F4B3}</span>
      <span>\uAE00\uB85C\uBC8C \uACB0\uC81C(PayPal \uB4F1) & \uBC95\uC778 \uD5C8\uB4E4 \uD574\uACB0</span>
    </div>
    <div class="provider-pill">
      <span class="pill-icon">\u{1F310}</span>
      <span>\uB2E4\uAD6D\uC5B4 \uC9C0\uC6D0 (\uC601\uC5B4, \uC77C\uBCF8\uC5B4, \uC911\uAD6D\uC5B4)</span>
    </div>
    <div class="provider-pill">
      <span class="pill-icon">\u2601\uFE0F</span>
      <span>AWS/GCP \uD074\uB77C\uC6B0\uB4DC \uC778\uD504\uB77C \uAD6C\uCD95</span>
    </div>
  </div>

  <!-- 7. Target Audience -->
  <div class="section-label">
    \u{1F465} \uC774\uB7F0 \uBD84\uB4E4\uC744 <span class="highlight">\uAE30\uB2E4\uB9BD\uB2C8\uB2E4</span>
  </div>
  <div class="bento-grid-3">
    <div class="bento-card target-card">
      <div class="target-icon">\u{1F468}\u200D\u{1F4BB}</div>
      <h4>\uCDE8\uC5C5\uC774 \uC5B4\uB824\uC6B4 \uCCAD\uB144</h4>
      <p>\uC2A4\uD399 \uC313\uAE30 \uB300\uC2E0 \uC9C4\uC9DC \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uB9CC\uB4E4\uC5B4 \uAE00\uB85C\uBC8C \uC0AC\uC5C5\uAC00\uB85C \uC131\uC7A5</p>
    </div>
    <div class="bento-card target-card">
      <div class="target-icon">\u{1F468}\u200D\u{1F4BC}</div>
      <h4>\uC740\uD1F4\uD55C 50\uB300</h4>
      <p>\uACBD\uD5D8\uACFC \uC9C0\uD61C\uC5D0 AI\uB97C \uB354\uD574 \uC0C8\uB85C\uC6B4 \uC0DD\uC0B0\uC790\uB85C\uC11C\uC758 \uAE38\uC744 \uAC1C\uCC99</p>
    </div>
    <div class="bento-card target-card">
      <div class="target-icon">\u{1F680}</div>
      <h4>\uAFC8\uC744 \uAC00\uC9C4 \uB204\uAD6C\uB098</h4>
      <p>10\uB144 \uB4A4 \uD6C4\uD68C\uD558\uC9C0 \uC54A\uC744 \uC778\uC0DD\uC744 \uAC74 \uB3C4\uC804\uC744 \uD558\uACE0 \uC2F6\uC740 \uBD84</p>
    </div>
  </div>

  <!-- 8. Vision -->
  <div class="vision-card">
    <div class="vision-icon">\u{1F31F}</div>
    <h2>\uC6B0\uB9AC\uC758 \uBE44\uC804</h2>
    <p>
      \uC138\uC0C1\uC740 \uD798\uB4E4\uACE0 \uC9C1\uC7A5 \uC0DD\uD65C\uC740 \uACE0\uB418\uC9C0\uB9CC,<br>
      <span class="highlight">\uC790\uAE30 \uB2A5\uB825\uC73C\uB85C \uBB34\uC5B8\uAC00\uB97C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uACFC\uC815\uC740 \uB9E4\uC6B0 \uC990\uAC70\uC6B4 \uC77C\uC785\uB2C8\uB2E4.</span><br><br>
      AI\uB77C\uB294 \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD574 \uC774 \uC7AC\uBC0C\uB294 "\uD310"\uC5D0\uC11C \uD568\uAED8 \uB6F0\uC5B4\uB180\uACE0,<br>
      \uC804 \uC138\uACC4\uB97C \uBB34\uB300\uB85C \uD65C\uB3D9\uD558\uB294 <span class="highlight">'\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB9C8\uD53C\uC544'</span> \uAC19\uC740 \uC9D1\uB2E8\uC744 \uB9CC\uB4DC\uB294 \uAC83.<br>
      \uD63C\uC790\uBCF4\uB2E4 \uC5F0\uD569\uD560 \uB54C \uB354 \uBA40\uB9AC \uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    </p>
  </div>

  <!-- 9. Curriculum -->
  <div class="bento-card curriculum-card">
    <div class="rocket-icon">\u{1F680}</div>
    <div class="curr-content">
      <h3>12\uAC1C\uC6D4 \uCEE4\uB9AC\uD058\uB7FC</h3>
      <p>AI\uC640 \uD568\uAED8 \uB2F9\uC2E0\uC758 \uC544\uC774\uB514\uC5B4\uB97C \uAE00\uB85C\uBC8C \uC11C\uBE44\uC2A4\uB85C \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uC2E4\uBB34 \uD504\uB85C\uADF8\uB7A8</p>
    </div>
  </div>
  
  <!-- Stats Row (Optional, from bottom of image) -->
  <div class="stats-row">
    <div class="stat-card">
      <h3>10\uAC1C</h3>
      <p>\uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8</p>
    </div>
    <div class="stat-card">
      <h3>40+</h3>
      <p>\uAD50\uC721 \uAC15\uC758</p>
    </div>
    <div class="stat-card">
      <h3>40+</h3>
      <p>AI \uACB0\uACFC\uBB3C</p>
    </div>
    <div class="stat-card">
      <h3>1\uAC1C</h3>
      <p>\uAE00\uB85C\uBC8C \uB7F0\uCE6D</p>
    </div>
  </div>

  <!-- Footer CTA -->
  <div style="text-align: center; margin-top: 60px; margin-bottom: 40px;" id="contact">
    <a routerLink="/education/home" 
       style="background: #000; color: white; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.1rem; display: inline-block;">
      1\uAE30 \uC9C0\uAE08 \uC2E0\uCCAD\uD558\uAE30 \u{1F680}
    </a>
  </div>

</div>
`, styles: ['/* src/app/modules/ai/components/ai-global-expedition-detail/ai-global-expedition-detail.scss */\n:host {\n  display: block;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #f5f9fc;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.page-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 80px 20px 100px;\n}\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n}\n.section-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1d1d1f;\n  margin: 40px 0 20px;\n}\n.section-label .highlight {\n  color: #007aff;\n}\n.bento-grid-3 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .bento-grid-3 {\n    grid-template-columns: 1fr;\n  }\n}\n.bento-grid-2 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .bento-grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n.bento-grid-4 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .bento-grid-4 {\n    grid-template-columns: 1fr;\n  }\n}\n.bento-card {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n.bento-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);\n}\n.header-card {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe 0%,\n      #bae6fd 100%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 20px;\n}\n.header-card .header-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.header-card .header-content .icon-box {\n  width: 48px;\n  height: 48px;\n  background: #0ea5e9;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n}\n.header-card .header-content .text-box h1 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.header-card .header-content .text-box p {\n  font-size: 0.95rem;\n  color: #334155;\n  margin-top: 4px;\n}\n.header-card .badge {\n  background: #ff5252;\n  color: white;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .header-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.quote-card {\n  background: #eef2ff;\n  text-align: center;\n  padding: 40px;\n  margin-bottom: 40px;\n  border: 1px solid #e0e7ff;\n}\n.quote-card .quote-text {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #374151;\n  line-height: 1.5;\n  margin-bottom: 20px;\n  font-style: italic;\n}\n.quote-card .quote-sub {\n  font-size: 0.95rem;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.quote-card .quote-sub .highlight {\n  color: #4f46e5;\n  font-weight: 600;\n}\n.info-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-card .card-icon {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.info-card h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #111827;\n}\n.info-card p {\n  font-size: 0.95rem;\n  color: #4b5563;\n  line-height: 1.6;\n}\n.value-card .tag {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.value-card .tag.red {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.value-card .tag.blue {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.value-card .tag.green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.operation-card {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.operation-card .op-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.operation-card .op-icon.bg-blue {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.operation-card .op-icon.bg-red {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.operation-card .op-icon.bg-yellow {\n  background: #fef3c7;\n  color: #d97706;\n}\n.operation-card .op-icon.bg-green {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.operation-card .op-content h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.operation-card .op-content p {\n  font-size: 0.9rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.operation-card .op-content .sub-tag {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: #0ea5e9;\n  font-weight: 600;\n  background: #f0f9ff;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.provider-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .provider-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.provider-pill {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #f3f4f6;\n}\n.provider-pill .pill-icon {\n  font-size: 20px;\n}\n.provider-pill span {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #374151;\n}\n.target-card {\n  background: #f0f9ff;\n  text-align: center;\n  padding: 30px 20px;\n}\n.target-card .target-icon {\n  font-size: 40px;\n  margin-bottom: 16px;\n}\n.target-card h4 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: #1e293b;\n}\n.target-card p {\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n.vision-card {\n  background: #1f2937;\n  color: white;\n  text-align: center;\n  padding: 60px 20px;\n  margin-top: 60px;\n  border-radius: 24px;\n}\n.vision-card .vision-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n  color: #fbbf24;\n}\n.vision-card h2 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.vision-card p {\n  font-size: 1.1rem;\n  color: #9ca3af;\n  line-height: 1.8;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.vision-card p .highlight {\n  color: #60a5fa;\n  font-weight: 600;\n}\n.curriculum-card {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 20px;\n}\n.curriculum-card .rocket-icon {\n  font-size: 40px;\n}\n.curriculum-card .curr-content h3 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.curriculum-card .curr-content p {\n  color: #6b7280;\n}\n.nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n.nav .nav-container {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav .logo {\n  font-weight: 800;\n  font-size: 1.2rem;\n  color: #000;\n  text-decoration: none;\n}\n.nav .nav-cta {\n  background: #000;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.back-button {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1d1d1f;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.back-button:hover {\n  opacity: 0.7;\n}\n.back-button svg {\n  margin-top: -1px;\n}\n/*# sourceMappingURL=ai-global-expedition-detail.css.map */\n'] }]
  }], () => [{ type: ViewportScroller }, { type: ElementRef }, { type: ThemeService }], { isEmbedded: [{
    type: Input
  }], backRequest: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiGlobalExpeditionDetail, { className: "AiGlobalExpeditionDetail", filePath: "src/app/modules/ai/components/ai-global-expedition-detail/ai-global-expedition-detail.ts", lineNumber: 13 });
})();

// src/app/modules/ai/ai-routing.module.ts
var routes = [
  {
    path: "",
    component: AiGlobalExpeditionComponent
  },
  {
    path: "features",
    component: AiFeaturesPanelComponent
  },
  {
    path: "global-expedition",
    component: AiGlobalExpeditionComponent
  },
  {
    path: "global-expedition-detail",
    component: AiGlobalExpeditionDetail
  },
  {
    path: "startup-package",
    component: StartupPackage
  },
  {
    path: "homepage-solution",
    component: HomepageSolution
  }
];
var AiRoutingModule = class _AiRoutingModule {
  static \u0275fac = function AiRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AiRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/ai/ai.module.ts
var AIModule = class _AIModule {
  static \u0275fac = function AIModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AIModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    AiRoutingModule,
    AiFeaturesPanelComponent,
    AiTranslatePanelComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIModule, [{
    type: NgModule,
    args: [{
      declarations: [
        AiGlobalExpeditionComponent,
        StartupPackage,
        HomepageSolution,
        AiGlobalExpeditionDetail
      ],
      imports: [
        CommonModule,
        FormsModule,
        AiRoutingModule,
        AiFeaturesPanelComponent,
        AiTranslatePanelComponent
      ],
      exports: [
        AiFeaturesPanelComponent,
        AiTranslatePanelComponent,
        AiGlobalExpeditionComponent
      ]
    }]
  }], null, null);
})();
export {
  AIModule
};
//# sourceMappingURL=chunk-R3ZHDZET.js.map
