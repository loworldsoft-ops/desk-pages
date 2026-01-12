import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-WY5M3RVA.js";

// src/app/modules/chat-talk/shared/services/chat-consultation-toggle.service.ts
var ChatConsultationToggleService = class _ChatConsultationToggleService {
  // 기본값: 비활성화 (false)
  STORAGE_KEY = "chatConsultationEnabled";
  enabledSubject;
  constructor() {
    const savedState = localStorage.getItem(this.STORAGE_KEY);
    const initialState = savedState !== null ? savedState === "true" : false;
    this.enabledSubject = new BehaviorSubject(initialState);
  }
  /**
   * 채팅상담 활성화 상태 Observable
   */
  get enabled$() {
    return this.enabledSubject.asObservable();
  }
  /**
   * 현재 채팅상담 활성화 상태
   */
  isEnabled() {
    return this.enabledSubject.value;
  }
  /**
   * 채팅상담 활성화/비활성화 설정
   */
  setEnabled(enabled) {
    this.enabledSubject.next(enabled);
    localStorage.setItem(this.STORAGE_KEY, enabled.toString());
  }
  /**
   * 채팅상담 토글
   */
  toggle() {
    const newState = !this.isEnabled();
    this.setEnabled(newState);
    return newState;
  }
  static \u0275fac = function ChatConsultationToggleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatConsultationToggleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatConsultationToggleService, factory: _ChatConsultationToggleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatConsultationToggleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ChatConsultationToggleService
};
//# sourceMappingURL=chunk-FFJ4GMB5.js.map
