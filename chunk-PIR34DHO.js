import {
  HttpClient
} from "./chunk-OYJIDA3L.js";
import {
  Injectable,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/modules/chat-talk/shared/services/chatbot.service.ts
var ChatBotService = class _ChatBotService {
  http;
  chatbotConfig = null;
  keywordResponseMap = /* @__PURE__ */ new Map();
  noMatchCount = 0;
  failureCount = 0;
  constructor(http) {
    this.http = http;
    this.loadChatbotConfig();
  }
  /**
   * 챗봇 설정 파일 로드
   */
  loadChatbotConfig() {
    return __async(this, null, function* () {
      try {
        this.chatbotConfig = yield firstValueFrom(this.http.get("/assets/json/chat-talk-config.json"));
        this.buildKeywordMap();
      } catch (error) {
        this.setDefaultConfig();
      }
    });
  }
  /**
   * 기본 설정 사용
   */
  setDefaultConfig() {
    this.chatbotConfig = {
      chatbot: {
        name: "\uC2A4\uD1A0\uC5B4 \uCC57\uBD07",
        description: "Store \uC804\uC6A9 \uACE0\uAC1D \uC0C1\uB2F4 \uCC57\uBD07",
        welcomeMessage: "\uC548\uB155\uD558\uC138\uC694! \uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?",
        defaultResponses: {
          notFound: '\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC815\uD655\uD55C \uB2F5\uBCC0\uC744 \uCC3E\uAE30 \uC5B4\uB824\uC6CC\uC694. \uC0C1\uB2F4\uC6D0 \uC5F0\uACB0\uC744 \uC6D0\uD558\uC2DC\uBA74 "\uC0C1\uB2F4\uC6D0"\uC774\uB77C\uACE0 \uB9D0\uC500\uD574 \uC8FC\uC138\uC694.',
          error: "\uC77C\uC2DC\uC801\uC778 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.",
          transferToAgent: "\uC0C1\uB2F4\uC6D0\uC5D0\uAC8C \uC5F0\uACB0\uD574\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."
        }
      },
      quickReplies: ["\uC0C1\uD488 \uBB38\uC758", "\uC8FC\uBB38 \uC870\uD68C", "\uBC30\uC1A1 \uBB38\uC758", "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0"],
      responses: {
        greeting: {
          keywords: ["\uC548\uB155", "\uC548\uB155\uD558\uC138\uC694", "\uCC98\uC74C"],
          message: "\uC548\uB155\uD558\uC138\uC694! \uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?"
        },
        human_agent: {
          keywords: ["\uC0C1\uB2F4\uC6D0", "\uC0C1\uB2F4\uC0AC", "\uC0AC\uB78C", "\uC9C1\uC6D0", "\uC5F0\uACB0"],
          message: "\uC0C1\uB2F4\uC6D0\uC5D0\uAC8C \uC5F0\uACB0\uD574\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",
          action: "connectAgent"
        }
      },
      chatFlow: {
        triggers: {
          keywords: ["\uC0C1\uB2F4\uC6D0", "\uC0C1\uB2F4\uC0AC", "\uC0AC\uB78C"],
          failureCount: 3,
          noMatchCount: 2
        },
        humanHandoff: {
          message: "\uC0C1\uB2F4\uC6D0\uC5D0\uAC8C \uC5F0\uACB0\uD574\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",
          action: "connectAgent",
          endpoint: "/api/chat-talk/transfer-to-human"
        }
      }
    };
    this.buildKeywordMap();
  }
  /**
   * 키워드 → 응답 맵 생성
   */
  buildKeywordMap() {
    if (!this.chatbotConfig?.responses)
      return;
    Object.entries(this.chatbotConfig.responses).forEach(([intentName, responseConfig]) => {
      const response = {
        message: responseConfig.message,
        action: responseConfig.action || null,
        quickReplies: this.chatbotConfig?.quickReplies || []
      };
      responseConfig.keywords?.forEach((keyword) => {
        this.keywordResponseMap.set(keyword.toLowerCase(), response);
      });
    });
  }
  /**
   * 사용자 메시지 처리 및 봇 응답 생성
   */
  processMessage(userMessage) {
    return __async(this, null, function* () {
      if (!this.chatbotConfig) {
        yield this.loadChatbotConfig();
      }
      const normalizedMessage = this.normalizeMessage(userMessage);
      let response = this.findExactKeywordMatch(normalizedMessage);
      if (!response) {
        response = this.findPartialMatch(normalizedMessage);
      }
      if (response) {
        this.resetCounters();
        return response;
      }
      return this.handleNoMatch();
    });
  }
  /**
   * 메시지 정규화
   */
  normalizeMessage(message) {
    return message.toLowerCase().trim().replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g, "").replace(/\s+/g, " ");
  }
  /**
   * 정확한 키워드 매칭
   */
  findExactKeywordMatch(message) {
    return this.keywordResponseMap.get(message) || null;
  }
  /**
   * 부분 매칭
   */
  findPartialMatch(message) {
    for (const [keyword, response] of this.keywordResponseMap.entries()) {
      if (message.includes(keyword) || keyword.includes(message)) {
        return response;
      }
    }
    return null;
  }
  /**
   * 매칭 실패 처리
   */
  handleNoMatch() {
    this.noMatchCount++;
    this.failureCount++;
    const config = this.chatbotConfig;
    const triggers = config.chatFlow.triggers;
    if (this.failureCount >= triggers.failureCount || this.noMatchCount >= triggers.noMatchCount) {
      this.resetCounters();
      return {
        message: config.chatFlow.humanHandoff.message,
        action: config.chatFlow.humanHandoff.action,
        quickReplies: []
      };
    }
    return {
      message: config.chatbot.defaultResponses.notFound,
      quickReplies: config.quickReplies
    };
  }
  /**
   * 카운터 리셋
   */
  resetCounters() {
    this.noMatchCount = 0;
    this.failureCount = 0;
  }
  /**
   * 환영 메시지 가져오기
   */
  getWelcomeMessage() {
    return this.chatbotConfig?.chatbot.welcomeMessage || "\uC548\uB155\uD558\uC138\uC694!";
  }
  /**
   * 빠른 답장 가져오기
   */
  getQuickReplies() {
    return this.chatbotConfig?.quickReplies || [];
  }
  static \u0275fac = function ChatBotService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatBotService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatBotService, factory: _ChatBotService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatBotService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ChatBotService
};
//# sourceMappingURL=chunk-PIR34DHO.js.map
