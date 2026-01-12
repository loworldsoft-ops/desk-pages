import {
  GoogleGenAI,
  require_crypto_js
} from "./chunk-GJJ4NKAQ.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-OYJIDA3L.js";
import {
  Injectable,
  Observable,
  catchError,
  from,
  map,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";
import {
  __async,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/gemini-translation.service.ts
var CryptoJS = __toESM(require_crypto_js());
var GeminiTranslationService = class _GeminiTranslationService {
  ENCRYPTED_API_KEY = "U2FsdGVkX19ILCT33NvRMnrfGuGerBksJREzwCDAIb7VpwUoVn/Oc3vrAqfYplC8SjPFUU3npbu+85eFwOKgpw==";
  ENCRYPTION_KEY = "ezReader";
  API_KEY;
  ai;
  constructor() {
    try {
      const decrypted = CryptoJS.AES.decrypt(this.ENCRYPTED_API_KEY, this.ENCRYPTION_KEY);
      this.API_KEY = decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error("API \uD0A4 \uBCF5\uD638\uD654 \uC2E4\uD328:", error);
      this.API_KEY = "";
    }
    this.ai = new GoogleGenAI({ apiKey: this.API_KEY });
    console.log("GeminiTranslationService initialized with gemini-2.5-flash model");
  }
  /**
   * 텍스트를 지정된 언어로 번역
   */
  translateText(text, targetLanguage) {
    if (!text.trim()) {
      return throwError(() => new Error("\uBC88\uC5ED\uD560 \uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."));
    }
    const languageMap = {
      "english": "English",
      "korean": "Korean",
      "japanese": "Japanese",
      "chinese": "Chinese",
      "spanish": "Spanish",
      "french": "French",
      "german": "German"
    };
    const targetLangName = languageMap[targetLanguage] || "English";
    const prompt = `Translate the following text to ${targetLangName}. Provide only the translation without any explanations or additional text:

${text}`;
    return from(this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    })).pipe(map((response) => {
      console.log("Gemini API \uBC88\uC5ED \uC751\uB2F5:", response);
      if (response && response.text) {
        const translatedText = response.text.trim();
        return {
          originalText: text,
          translatedText,
          targetLanguage: targetLangName,
          success: true
        };
      } else {
        throw new Error("\uBC88\uC5ED \uC751\uB2F5\uC744 \uBC1B\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      }
    }), catchError((error) => {
      console.error("Gemini API \uBC88\uC5ED \uC624\uB958:", error);
      let errorMessage = "\uBC88\uC5ED \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
      if (error.message) {
        errorMessage = error.message;
      }
      return throwError(() => ({
        originalText: text,
        translatedText: "",
        targetLanguage: targetLangName,
        success: false,
        error: errorMessage
      }));
    }));
  }
  /**
   * 여러 텍스트 블록을 순차적으로 번역
   */
  translateMultipleTexts(texts, targetLanguage) {
    const translations = [];
    return new Observable((observer) => {
      let currentIndex = 0;
      const translateNext = () => {
        if (currentIndex >= texts.length) {
          observer.next(translations);
          observer.complete();
          return;
        }
        const currentText = texts[currentIndex];
        this.translateText(currentText, targetLanguage).subscribe({
          next: (result) => {
            translations.push(result);
            currentIndex++;
            setTimeout(translateNext, 100);
          },
          error: (error) => {
            translations.push({
              originalText: currentText,
              translatedText: "",
              targetLanguage,
              success: false,
              error: error.message || "\uBC88\uC5ED \uC2E4\uD328"
            });
            currentIndex++;
            setTimeout(translateNext, 100);
          }
        });
      };
      translateNext();
    });
  }
  static \u0275fac = function GeminiTranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeminiTranslationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeminiTranslationService, factory: _GeminiTranslationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeminiTranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/local-ai-translation.service.ts
var LocalAiTranslationService = class _LocalAiTranslationService {
  http;
  OLLAMA_BASE_URL = "http://localhost:11434";
  TARGET_MODEL = "gemma3:1b";
  constructor(http) {
    this.http = http;
  }
  /**
   * Ollama가 설치되어 있고 gemma2:1b 모델이 사용 가능한지 확인
   */
  checkOllamaAvailability() {
    return __async(this, null, function* () {
      return false;
    });
  }
  /**
   * 로컬 AI를 사용하여 텍스트 번역
   */
  translateText(text, targetLanguage) {
    if (!text.trim()) {
      return throwError(() => new Error("\uBC88\uC5ED\uD560 \uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."));
    }
    const languageMap = {
      "english": "\uC601\uC5B4",
      "korean": "\uD55C\uAD6D\uC5B4",
      "japanese": "\uC77C\uBCF8\uC5B4",
      "chinese": "\uC911\uAD6D\uC5B4",
      "spanish": "\uC2A4\uD398\uC778\uC5B4",
      "french": "\uD504\uB791\uC2A4\uC5B4",
      "german": "\uB3C5\uC77C\uC5B4"
    };
    const targetLangName = languageMap[targetLanguage] || targetLanguage;
    const prompt = `\uB2E4\uC74C \uD14D\uC2A4\uD2B8\uB97C ${targetLangName}\uB85C \uBC88\uC5ED\uD574\uC8FC\uC138\uC694. \uBC88\uC5ED\uB41C \uB0B4\uC6A9\uB9CC \uC751\uB2F5\uD558\uACE0 \uB2E4\uB978 \uC124\uBA85\uC740 \uD3EC\uD568\uD558\uC9C0 \uB9C8\uC138\uC694.

\uD14D\uC2A4\uD2B8:
${text}

\uBC88\uC5ED:`;
    const requestBody = {
      model: this.TARGET_MODEL,
      prompt,
      stream: false,
      options: {
        temperature: 0.3,
        top_p: 0.9,
        max_tokens: 4e3
      }
    };
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.OLLAMA_BASE_URL}/api/generate`, requestBody, { headers }).pipe(map((response) => {
      if (response.response && response.response.trim()) {
        return {
          originalText: text,
          translatedText: response.response.trim(),
          targetLanguage,
          success: true
        };
      } else {
        throw new Error("\uBC88\uC5ED \uC751\uB2F5\uC774 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4.");
      }
    }), catchError((error) => {
      let errorMessage = "\uB85C\uCEEC AI \uBC88\uC5ED \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
      if (error.status === 0) {
        errorMessage = "Ollama \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. Ollama\uAC00 \uC2E4\uD589 \uC911\uC778\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
      } else if (error.status === 404) {
        errorMessage = `${this.TARGET_MODEL} \uBAA8\uB378\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBAA8\uB378\uC744 \uC124\uCE58\uD574\uC8FC\uC138\uC694.`;
      } else if (error.error?.error) {
        errorMessage = error.error.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      return throwError(() => ({
        originalText: text,
        translatedText: "",
        targetLanguage,
        success: false,
        error: errorMessage
      }));
    }));
  }
  /**
   * 로컬 AI를 사용하여 텍스트 요약
   */
  summarizeText(text, summaryType = "general", summaryLength = "medium") {
    if (!text.trim()) {
      return throwError(() => new Error("\uC694\uC57D\uD560 \uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."));
    }
    let prompt = "";
    switch (summaryType) {
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
    switch (summaryLength) {
      case "short":
        prompt += `\uAC04\uACB0\uD558\uAC8C 1-2\uBB38\uB2E8\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
        break;
      case "long":
        prompt += `\uC790\uC138\uD558\uAC8C 5-6\uBB38\uB2E8\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
        break;
      default:
        prompt += `\uC801\uC808\uD55C \uAE38\uC774\uB85C 3-4\uBB38\uB2E8\uC73C\uB85C \uC694\uC57D\uD574\uC8FC\uC138\uC694. `;
    }
    prompt += `\uD55C\uAD6D\uC5B4\uB85C \uC791\uC131\uD574\uC8FC\uC138\uC694. \uC694\uC57D\uB41C \uB0B4\uC6A9\uB9CC \uC751\uB2F5\uD558\uACE0 \uB2E4\uB978 \uC124\uBA85\uC740 \uD3EC\uD568\uD558\uC9C0 \uB9C8\uC138\uC694.

\uBB38\uC11C \uB0B4\uC6A9:
${text}`;
    const requestBody = {
      model: this.TARGET_MODEL,
      prompt,
      stream: false,
      options: {
        temperature: 0.3,
        top_p: 0.9,
        max_tokens: 4e3
      }
    };
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.OLLAMA_BASE_URL}/api/generate`, requestBody, { headers }).pipe(map((response) => {
      if (response.response && response.response.trim()) {
        return {
          originalText: text,
          translatedText: response.response.trim(),
          targetLanguage: "korean",
          success: true
        };
      } else {
        throw new Error("\uC694\uC57D \uC751\uB2F5\uC774 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4.");
      }
    }), catchError((error) => {
      let errorMessage = "\uB85C\uCEEC AI \uC694\uC57D \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
      if (error.status === 0) {
        errorMessage = "Ollama \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. Ollama\uAC00 \uC2E4\uD589 \uC911\uC778\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
      } else if (error.status === 404) {
        errorMessage = `${this.TARGET_MODEL} \uBAA8\uB378\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBAA8\uB378\uC744 \uC124\uCE58\uD574\uC8FC\uC138\uC694.`;
      } else if (error.error?.error) {
        errorMessage = error.error.error;
      } else if (error.message) {
        errorMessage = error.message;
      }
      return throwError(() => ({
        originalText: text,
        translatedText: "",
        targetLanguage: "korean",
        success: false,
        error: errorMessage
      }));
    }));
  }
  getAvailableModels() {
    return __async(this, null, function* () {
      return [];
    });
  }
  static \u0275fac = function LocalAiTranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalAiTranslationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalAiTranslationService, factory: _LocalAiTranslationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalAiTranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  GeminiTranslationService,
  LocalAiTranslationService
};
//# sourceMappingURL=chunk-IMXTMMJF.js.map
