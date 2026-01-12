import {
  ChatflowLogicContext,
  ChatflowLogicContextManagerService,
  NodeLogicAbstract
} from "./chunk-UWP5KICM.js";
import "./chunk-IEXL5CIB.js";
import "./chunk-BE5X2S7S.js";
import {
  HttpClient
} from "./chunk-OYJIDA3L.js";
import {
  inject
} from "./chunk-WY5M3RVA.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/expedition/modules/chatflow-reader/logics/context-changer.logic.ts
var ContextChangerLogic = class extends NodeLogicAbstract {
  http = inject(HttpClient);
  contextManager = inject(ChatflowLogicContextManagerService);
  start() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", "\u{1F504} \uCEE8\uD14D\uC2A4\uD2B8 \uBCC0\uACBD \uC2DC\uC791");
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", `   \uACBD\uB85C: ${this.readData.data.path}`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", `   \uD30C\uC77C: ${this.readData.data.fileName}`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", `   \uBCF5\uADC0 \uCEE8\uD14D\uC2A4\uD2B8: ${this.readData.data.returnContextName}`);
    }
    const fullPath = `./${this.readData.data.path}/${this.readData.data.fileName}.json`;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", `   \uC804\uCCB4 \uACBD\uB85C: ${fullPath}`);
    }
    this.http.get(fullPath).subscribe({
      next: (data) => {
        if (debugLogger) {
          debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", "\u2705 JSON \uD30C\uC77C \uB85C\uB4DC \uC131\uACF5");
        }
        const newContextName = `${this.readData.data.fileName}_${Date.now()}`;
        const newContext = new ChatflowLogicContext(newContextName, this.contextManager, this.chatbotActionService);
        newContext.chatflowData = data.connected || data;
        this.contextManager.registerContext(newContextName, newContext);
        this.contextManager.changeContext(newContext, true);
        newContext.$chatflowEnded.subscribe(() => {
          if (debugLogger) {
            debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", "\u{1F519} \uC11C\uBE0C \uCC57\uD50C\uB85C\uC6B0 \uC885\uB8CC, \uC774\uC804 \uCEE8\uD14D\uC2A4\uD2B8\uB85C \uBCF5\uADC0");
          }
          const returnContext = this.contextManager.getContext(this.readData.data.returnContextName);
          if (returnContext) {
            this.contextManager.returnToPreviousContext();
            this.end();
          } else {
            console.error(`\uBCF5\uADC0\uD560 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: ${this.readData.data.returnContextName}`);
          }
        });
        newContext.start();
      },
      error: (error) => {
        console.error("JSON \uD30C\uC77C \uB85C\uB4DC \uC2E4\uD328:", error);
        if (debugLogger) {
          debugLogger.error("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", `\u274C JSON \uD30C\uC77C \uB85C\uB4DC \uC2E4\uD328: ${error.message}`);
        }
        this.end();
      }
    });
  }
  end() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-ContextChanger", "\u2705 ContextChanger \uB178\uB4DC \uC885\uB8CC");
    }
    super.end();
  }
};
export {
  ContextChangerLogic
};
//# sourceMappingURL=chunk-VXSFGSBZ.js.map
