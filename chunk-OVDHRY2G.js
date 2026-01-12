import {
  ChatBotService
} from "./chunk-PIR34DHO.js";
import {
  ChatTalkApiService,
  MatBadgeModule,
  RoomStatus,
  SenderType
} from "./chunk-576D3S7V.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DZVWUGGM.js";
import {
  MatChipsModule
} from "./chunk-SVWY7C6P.js";
import {
  ChatTalkSocketService
} from "./chunk-G4JOAHZY.js";
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-X67QRSHQ.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  ViewChild,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/chat-talk/client/components/chat-client/chat-client.component.ts
var _c0 = ["chatMessages"];
function ChatClientComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon", 18);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "\uC5F0\uACB0 \uC2E4\uD328");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function ChatClientComponent_div_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.initNewChat());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \uB2E4\uC2DC \uC2DC\uB3C4 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.connectionError);
  }
}
function ChatClientComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "mat-icon", 22);
    \u0275\u0275text(3, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "\uCC44\uD305 \uC5F0\uACB0 \uC911...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 23);
    \u0275\u0275listener("click", function ChatClientComponent_div_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelConnection());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " \uC5F0\uACB0 \uCDE8\uC18C ");
    \u0275\u0275elementEnd()();
  }
}
function ChatClientComponent_div_17_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon");
    \u0275\u0275text(2, "smart_toy");
    \u0275\u0275elementEnd()();
  }
}
function ChatClientComponent_div_17_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, ChatClientComponent_div_17_div_1_div_1_div_1_Template, 3, 0, "div", 30);
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275element(3, "div", 32);
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r5.senderType === "bot");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", message_r5.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(message_r5.createdAt));
  }
}
function ChatClientComponent_div_17_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 31)(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r5.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(message_r5.createdAt));
  }
}
function ChatClientComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ChatClientComponent_div_17_div_1_div_1_Template, 6, 3, "div", 28)(2, ChatClientComponent_div_17_div_1_div_2_Template, 6, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    \u0275\u0275classProp("user-message", message_r5.senderType === "client")("bot-message", message_r5.senderType === "bot")("system-message", message_r5.senderType === "system");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r5.senderType !== "client");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r5.senderType === "client");
  }
}
function ChatClientComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275element(2, "span")(3, "span")(4, "span");
    \u0275\u0275elementEnd()();
  }
}
function ChatClientComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, ChatClientComponent_div_17_div_1_Template, 3, 8, "div", 25)(2, ChatClientComponent_div_17_div_2_Template, 5, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
  }
}
function ChatClientComponent_div_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ChatClientComponent_div_18_button_1_Template_button_click_0_listener() {
      const reply_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectQuickReply(reply_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reply_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reply_r7, " ");
  }
}
function ChatClientComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ChatClientComponent_div_18_button_1_Template, 2, 1, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.quickReplies);
  }
}
var ChatClientComponent = class _ChatClientComponent {
  route;
  router;
  chatBotService;
  apiService;
  socketService;
  chatContainer;
  storeId = "";
  storeName = "";
  roomId = null;
  clientId = null;
  organizationId = "1";
  // TODO: 실제 organization ID 가져오기
  isNewChat = false;
  messages = [];
  newMessage = "";
  welcomeMessage = "";
  showQuickReplies = true;
  quickReplies = [];
  isLoading = false;
  isConnecting = false;
  connectionError = null;
  currentTime = /* @__PURE__ */ new Date();
  destroy$ = new Subject();
  constructor(route, router, chatBotService, apiService, socketService) {
    this.route = route;
    this.router = router;
    this.chatBotService = chatBotService;
    this.apiService = apiService;
    this.socketService = socketService;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => __async(this, null, function* () {
        this.storeId = params["storeId"] || "";
        this.storeName = params["storeName"] || "\uC2A4\uD1A0\uC5B4";
        this.roomId = params["roomId"] || null;
        this.isNewChat = params["isNew"] === "true";
        if (this.isNewChat) {
          yield this.initNewChat();
        } else if (this.roomId) {
          this.loadExistingChat();
        }
      }));
      this.quickReplies = this.chatBotService.getQuickReplies();
      yield this.connectWebSocket();
    });
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * 새 채팅 초기화
   */
  initNewChat() {
    return __async(this, null, function* () {
      this.isConnecting = true;
      this.connectionError = null;
      try {
        const fingerprintData = this.generateFingerprint();
        const identifyRequest = {
          fingerprintData,
          pluginKey: this.organizationId
          // organizationId를 pluginKey로 사용
        };
        const identifyResponse = yield this.apiService.identifyCustomerWithObject(identifyRequest).toPromise();
        if (!identifyResponse || !identifyResponse.client) {
          throw new Error("\uACE0\uAC1D \uC2DD\uBCC4 API \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
        }
        this.clientId = identifyResponse.client.id;
        const createRoomRequest = {
          clientId: this.clientId,
          organizationId: this.organizationId
        };
        const roomResponse = yield this.apiService.createRoomWithOrganization(createRoomRequest).toPromise();
        if (!roomResponse) {
          throw new Error("\uCC44\uD305\uBC29 \uC0DD\uC131 API \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
        }
        this.roomId = roomResponse.id;
        this.welcomeMessage = `${this.storeName}\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4! \uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?`;
        this.currentTime = /* @__PURE__ */ new Date();
        this.showQuickReplies = true;
        const welcomeMsg = {
          id: "welcome",
          roomId: this.roomId || "",
          senderType: SenderType.BOT,
          content: this.welcomeMessage,
          createdAt: /* @__PURE__ */ new Date()
        };
        this.messages = [welcomeMsg];
        yield this.joinRoom();
        this.isConnecting = false;
      } catch (error) {
        console.warn("\u274C \uC5D0\uB7EC \uC0C1\uC138:", {
          message: error.message,
          status: error.status,
          error: error.error,
          stack: error.stack
        });
        this.connectionError = "\uCC44\uD305\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.";
        if (error.status === 404) {
          this.connectionError = "\uCC44\uD305 \uC11C\uBE44\uC2A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD574\uC8FC\uC138\uC694.";
        } else if (error.status === 500) {
          this.connectionError = "\uC11C\uBC84 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.";
        } else if (error.status === 0) {
          this.connectionError = "\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC5F0\uACB0\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.";
        } else if (error.error?.message) {
          this.connectionError = `\uC624\uB958: ${error.error.message}`;
        }
        this.isConnecting = false;
      }
    });
  }
  /**
   * 브라우저 핑거프린트 생성
   */
  generateFingerprint() {
    const nav = window.navigator;
    const screen = window.screen;
    return {
      userAgent: nav.userAgent,
      language: nav.language,
      platform: nav.platform,
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      canvas: this.generateCanvasFingerprint(),
      memory: nav.deviceMemory || "unknown",
      cores: nav.hardwareConcurrency || "unknown",
      cookieEnabled: nav.cookieEnabled,
      doNotTrack: nav.doNotTrack || "unspecified",
      timestamp: Date.now()
    };
  }
  /**
   * Canvas 핑거프린트 생성
   */
  generateCanvasFingerprint() {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return "no-canvas";
      canvas.width = 200;
      canvas.height = 50;
      ctx.textBaseline = "top";
      ctx.font = "14px Arial";
      ctx.fillText("Browser Fingerprint", 10, 10);
      return canvas.toDataURL().substring(0, 100);
    } catch (e) {
      return "canvas-error";
    }
  }
  /**
   * WebSocket 연결
   */
  connectWebSocket() {
    return __async(this, null, function* () {
      try {
        yield this.socketService.connect();
        this.socketService.onEvent("newMessage").pipe(takeUntil(this.destroy$)).subscribe((data) => {
          if (data.roomId === this.roomId) {
            this.handleNewMessage(data.message);
          }
        });
      } catch (error) {
      }
    });
  }
  /**
   * 방 참가
   */
  joinRoom() {
    return __async(this, null, function* () {
      if (!this.roomId || !this.clientId)
        return;
      this.socketService.emitEvent("joinRoom", {
        roomId: this.roomId,
        clientId: this.clientId
      });
    });
  }
  /**
   * 새 메시지 처리
   */
  handleNewMessage(message) {
    const localMessage = __spreadProps(__spreadValues({}, message), {
      status: "sent"
    });
    this.messages.push(localMessage);
  }
  /**
   * 기존 채팅 로드
   */
  loadExistingChat() {
    this.isLoading = true;
    this.isLoading = false;
  }
  /**
   * 메시지 전송
   */
  sendMessage(event) {
    return __async(this, null, function* () {
      if (event) {
        event.preventDefault();
      }
      const content = this.newMessage.trim();
      if (!content || !this.roomId)
        return;
      const userMessage = {
        id: `temp-${Date.now()}`,
        roomId: this.roomId,
        senderType: SenderType.CLIENT,
        content,
        createdAt: /* @__PURE__ */ new Date(),
        status: "pending"
      };
      this.messages.push(userMessage);
      this.newMessage = "";
      try {
        this.socketService.emitEvent("sendMessage", {
          roomId: this.roomId,
          content,
          senderType: "client"
        });
        userMessage.status = "sent";
        if (this.showQuickReplies) {
          yield this.processBotResponse(content);
        }
      } catch (error) {
        userMessage.status = "failed";
      }
    });
  }
  /**
   * 챗봇 응답 처리
   */
  processBotResponse(userMessage) {
    return __async(this, null, function* () {
      setTimeout(() => __async(this, null, function* () {
        const response = yield this.chatBotService.processMessage(userMessage);
        const botMessage = {
          id: `bot-${Date.now()}`,
          roomId: this.roomId || "",
          senderType: SenderType.BOT,
          content: response.message,
          createdAt: /* @__PURE__ */ new Date()
        };
        this.messages.push(botMessage);
        if (response.action === "connectAgent") {
          this.connectToAgent();
        }
        if (response.quickReplies) {
          this.quickReplies = response.quickReplies;
        }
      }), 1e3);
    });
  }
  /**
   * 빠른 답장 선택
   */
  selectQuickReply(reply) {
    this.newMessage = reply;
    this.sendMessage();
  }
  /**
   * 상담원 연결
   */
  connectToAgent() {
    if (!this.roomId) {
      return;
    }
    this.socketService.emitEvent("requestSupport", {
      roomId: this.roomId
    });
    this.showQuickReplies = false;
    const systemMessage = {
      id: `system-${Date.now()}`,
      roomId: this.roomId,
      senderType: SenderType.SYSTEM,
      content: "\uC0C1\uB2F4\uC6D0\uC5D0\uAC8C \uC5F0\uACB0 \uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694...",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.messages.push(systemMessage);
  }
  /**
  /**
   * 뒤로 가기
   */
  goBack() {
    this.router.navigate(["/chat-talk/client/home"], {
      queryParams: { storeId: this.storeId }
    });
  }
  /**
   * 상담 종료 및 새로 시작
   */
  resetChat() {
    if (!confirm("\uD604\uC7AC \uC0C1\uB2F4\uC744 \uC885\uB8CC\uD558\uACE0 \uC0C8\uB85C \uC2DC\uC791\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      return;
    }
    if (this.roomId) {
      this.socketService.emitEvent("leaveRoom", { roomId: this.roomId });
    }
    this.messages = [];
    this.roomId = null;
    this.clientId = null;
    this.showQuickReplies = true;
    this.isConnecting = false;
    this.connectionError = null;
    this.initNewChat();
  }
  /**
   * 연결 취소
   */
  cancelConnection() {
    this.isConnecting = false;
    this.connectionError = null;
    this.goBack();
  }
  /**
   * 입력 변경 처리
   */
  onInputChange() {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      this.autoResizeTextarea(textarea);
    }
  }
  /**
   * Enter 키 처리
   */
  onEnterPress(event) {
    if (!event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  /**
   * 텍스트 영역 자동 크기 조정
   */
  autoResizeTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
  }
  /**
   * 스크롤 하단으로 이동
   */
  scrollToBottom() {
    try {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
    }
  }
  /**
   * 시간 포맷
   */
  formatTime(date) {
    return new Date(date).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function ChatClientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatClientComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChatBotService), \u0275\u0275directiveInject(ChatTalkApiService), \u0275\u0275directiveInject(ChatTalkSocketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatClientComponent, selectors: [["app-chat-client"]], viewQuery: function ChatClientComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatContainer = _t.first);
    }
  }, standalone: false, decls: 28, vars: 7, consts: [["chatMessages", ""], [1, "chat-container"], [1, "chat-header"], [1, "back-btn", 3, "click"], [1, "header-info"], [1, "status-text"], ["matTooltip", "\uC0C1\uB2F4 \uC0C8\uB85C \uC2DC\uC791", 1, "menu-btn", 3, "click"], [1, "messages-container"], ["class", "connection-error", 4, "ngIf"], ["class", "connecting-state", 4, "ngIf"], ["class", "messages-list", 4, "ngIf"], ["class", "quick-replies", 4, "ngIf"], [1, "input-container"], [1, "input-form", 3, "submit"], ["type", "button", "matTooltip", "\uD30C\uC77C \uCCA8\uBD80", 1, "attach-btn"], ["name", "message", "placeholder", "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694...", "rows", "1", 1, "message-input", 3, "ngModelChange", "input", "keydown.enter", "ngModel"], ["type", "submit", "matTooltip", "\uC804\uC1A1", 1, "send-btn", 3, "disabled"], [1, "connection-error"], [1, "error-icon"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "connecting-state"], [1, "spinner-wrapper"], [1, "spin"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "messages-list"], ["class", "message-wrapper", 3, "user-message", "bot-message", "system-message", 4, "ngFor", "ngForOf"], ["class", "loading-message", 4, "ngIf"], [1, "message-wrapper"], ["class", "message-bubble", 4, "ngIf"], [1, "message-bubble"], ["class", "message-avatar", 4, "ngIf"], [1, "message-content"], [1, "message-text", 3, "innerHTML"], [1, "message-time"], [1, "message-avatar"], [1, "message-text"], [1, "loading-message"], [1, "typing-indicator"], [1, "quick-replies"], ["class", "quick-reply-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-reply-btn", 3, "click"]], template: function ChatClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function ChatClientComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "h2");
      \u0275\u0275text(7, "\uACE0\uAC1D \uC0C1\uB2F4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function ChatClientComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetChat());
      });
      \u0275\u0275elementStart(11, "mat-icon");
      \u0275\u0275text(12, "refresh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 7, 0);
      \u0275\u0275template(15, ChatClientComponent_div_15_Template, 11, 1, "div", 8)(16, ChatClientComponent_div_16_Template, 12, 0, "div", 9)(17, ChatClientComponent_div_17_Template, 3, 2, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, ChatClientComponent_div_18_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(19, "div", 12)(20, "form", 13);
      \u0275\u0275listener("submit", function ChatClientComponent_Template_form_submit_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage($event));
      });
      \u0275\u0275elementStart(21, "button", 14)(22, "mat-icon");
      \u0275\u0275text(23, "attach_file");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "textarea", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ChatClientComponent_Template_textarea_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newMessage, $event) || (ctx.newMessage = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ChatClientComponent_Template_textarea_input_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputChange());
      })("keydown.enter", function ChatClientComponent_Template_textarea_keydown_enter_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEnterPress($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 16)(26, "mat-icon");
      \u0275\u0275text(27, "send");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.showQuickReplies ? "\uCC57\uBD07 \uC751\uB2F5" : "\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0\uB428", " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.connectionError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isConnecting && !ctx.connectionError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.connectionError && !ctx.isConnecting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showQuickReplies && ctx.quickReplies.length > 0);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.newMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.newMessage.trim());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatButton, MatIcon, MatTooltip], styles: ["\n\n.chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: #f5f5f5;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background: white;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.chat-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%], \n.chat-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background 0.2s;\n}\n.chat-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]:hover, \n.chat-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.chat-header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.chat-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #333;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 12px;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.chat-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  margin: 2px 0 0 0;\n  font-size: 12px;\n  color: #667eea;\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n}\n.messages-container[_ngcontent-%COMP%]   .connection-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 24px;\n  text-align: center;\n}\n.messages-container[_ngcontent-%COMP%]   .connection-error[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #f44336;\n  margin-bottom: 16px;\n}\n.messages-container[_ngcontent-%COMP%]   .connection-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.messages-container[_ngcontent-%COMP%]   .connection-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #666;\n  font-size: 14px;\n  max-width: 300px;\n  line-height: 1.5;\n}\n.messages-container[_ngcontent-%COMP%]   .connection-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.messages-container[_ngcontent-%COMP%]   .connecting-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 24px;\n  text-align: center;\n}\n.messages-container[_ngcontent-%COMP%]   .connecting-state[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.messages-container[_ngcontent-%COMP%]   .connecting-state[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #667eea;\n}\n.messages-container[_ngcontent-%COMP%]   .connecting-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 18px;\n  font-weight: 600;\n}\n.messages-container[_ngcontent-%COMP%]   .connecting-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.messages-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.message-wrapper.bot-message[_ngcontent-%COMP%], \n.message-wrapper.system-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message-wrapper.system-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  font-size: 14px;\n  text-align: center;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  max-width: 70%;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #667eea;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  margin-top: 4px;\n}\n.loading-message[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.typing-indicator[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  gap: 4px;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #999;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_typing 1.4s infinite;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.7;\n  }\n  30% {\n    transform: translateY(-10px);\n    opacity: 1;\n  }\n}\n.quick-replies[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.quick-replies[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.quick-replies[_ngcontent-%COMP%]   .quick-reply-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #667eea;\n  color: #667eea;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.quick-replies[_ngcontent-%COMP%]   .quick-reply-btn[_ngcontent-%COMP%]:hover {\n  background: #667eea;\n  color: white;\n}\n.input-container[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  padding: 12px 16px;\n}\n.input-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n.input-form[_ngcontent-%COMP%]   .attach-btn[_ngcontent-%COMP%], \n.input-form[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.input-form[_ngcontent-%COMP%]   .attach-btn[_ngcontent-%COMP%]:hover:not(:disabled), \n.input-form[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5f5f5;\n}\n.input-form[_ngcontent-%COMP%]   .attach-btn[_ngcontent-%COMP%]:disabled, \n.input-form[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.input-form[_ngcontent-%COMP%]   .attach-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.input-form[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.input-form[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  padding: 10px 16px;\n  font-size: 14px;\n  font-family: inherit;\n  resize: none;\n  max-height: 120px;\n  outline: none;\n}\n.input-form[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.input-form[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.input-form[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=chat-client.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatClientComponent, [{
    type: Component,
    args: [{ selector: "app-chat-client", standalone: false, template: `<div class="chat-container">
  <!-- \uD5E4\uB354 -->
  <div class="chat-header">
    <button class="back-btn" (click)="goBack()">
      <mat-icon>arrow_back</mat-icon>
    </button>
    <div class="header-info">
      <h2>\uACE0\uAC1D \uC0C1\uB2F4</h2>
      <p class="status-text">
        {{ showQuickReplies ? '\uCC57\uBD07 \uC751\uB2F5' : '\uC0C1\uB2F4\uC6D0 \uC5F0\uACB0\uB428' }}
      </p>
    </div>
    <button class="menu-btn" (click)="resetChat()" matTooltip="\uC0C1\uB2F4 \uC0C8\uB85C \uC2DC\uC791">
      <mat-icon>refresh</mat-icon>
    </button>
  </div>

  <!-- \uBA54\uC2DC\uC9C0 \uC601\uC5ED -->
  <div class="messages-container" #chatMessages>
    <!-- \uC5F0\uACB0 \uC624\uB958 -->
    <div class="connection-error" *ngIf="connectionError">
      <mat-icon class="error-icon">error_outline</mat-icon>
      <h3>\uC5F0\uACB0 \uC2E4\uD328</h3>
      <p>{{ connectionError }}</p>
      <button mat-raised-button color="primary" (click)="initNewChat()">
        <mat-icon>refresh</mat-icon>
        \uB2E4\uC2DC \uC2DC\uB3C4
      </button>
    </div>

    <!-- \uC5F0\uACB0 \uC911 -->
    <div class="connecting-state" *ngIf="isConnecting && !connectionError">
      <div class="spinner-wrapper">
        <mat-icon class="spin">autorenew</mat-icon>
      </div>
      <h3>\uCC44\uD305 \uC5F0\uACB0 \uC911...</h3>
      <p>\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694</p>
      <button mat-raised-button color="warn" (click)="cancelConnection()">
        <mat-icon>close</mat-icon>
        \uC5F0\uACB0 \uCDE8\uC18C
      </button>
    </div>

    <div class="messages-list" *ngIf="!connectionError && !isConnecting">
      <div *ngFor="let message of messages" 
           class="message-wrapper"
           [class.user-message]="message.senderType === 'client'"
           [class.bot-message]="message.senderType === 'bot'"
           [class.system-message]="message.senderType === 'system'">
        
        <!-- \uCC57\uBD07 \uB610\uB294 \uC2DC\uC2A4\uD15C \uBA54\uC2DC\uC9C0 -->
        <div *ngIf="message.senderType !== 'client'" class="message-bubble">
          <div class="message-avatar" *ngIf="message.senderType === 'bot'">
            <mat-icon>smart_toy</mat-icon>
          </div>
          <div class="message-content">
            <div class="message-text" [innerHTML]="message.content"></div>
            <div class="message-time">{{ formatTime(message.createdAt) }}</div>
          </div>
        </div>

        <!-- \uC0AC\uC6A9\uC790 \uBA54\uC2DC\uC9C0 -->
        <div *ngIf="message.senderType === 'client'" class="message-bubble">
          <div class="message-content">
            <div class="message-text">{{ message.content }}</div>
            <div class="message-time">{{ formatTime(message.createdAt) }}</div>
          </div>
        </div>
      </div>

      <!-- \uB85C\uB529 -->
      <div class="loading-message" *ngIf="isLoading">
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- \uBE60\uB978 \uB2F5\uC7A5 -->
  <div class="quick-replies" *ngIf="showQuickReplies && quickReplies.length > 0">
    <button *ngFor="let reply of quickReplies" 
            class="quick-reply-btn"
            (click)="selectQuickReply(reply)">
      {{ reply }}
    </button>
  </div>

  <!-- \uC785\uB825 \uC601\uC5ED -->
  <div class="input-container">
    <form (submit)="sendMessage($event)" class="input-form">
      <button type="button" class="attach-btn" matTooltip="\uD30C\uC77C \uCCA8\uBD80">
        <mat-icon>attach_file</mat-icon>
      </button>
      
      <textarea
        [(ngModel)]="newMessage"
        name="message"
        placeholder="\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694..."
        (input)="onInputChange()"
        (keydown.enter)="onEnterPress($any($event))"
        rows="1"
        class="message-input"></textarea>
      
      <button type="submit" 
              class="send-btn"
              [disabled]="!newMessage.trim()"
              matTooltip="\uC804\uC1A1">
        <mat-icon>send</mat-icon>
      </button>
    </form>
  </div>
</div>
`, styles: ["/* src/app/modules/chat-talk/client/components/chat-client/chat-client.component.scss */\n.chat-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: #f5f5f5;\n}\n.chat-header {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background: white;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.chat-header .back-btn,\n.chat-header .menu-btn {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background 0.2s;\n}\n.chat-header .back-btn:hover,\n.chat-header .menu-btn:hover {\n  background: #f5f5f5;\n}\n.chat-header .back-btn mat-icon,\n.chat-header .menu-btn mat-icon {\n  color: #333;\n}\n.chat-header .header-info {\n  flex: 1;\n  margin: 0 12px;\n}\n.chat-header .header-info h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.chat-header .header-info .status-text {\n  margin: 2px 0 0 0;\n  font-size: 12px;\n  color: #667eea;\n}\n.messages-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n}\n.messages-container .connection-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 24px;\n  text-align: center;\n}\n.messages-container .connection-error .error-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #f44336;\n  margin-bottom: 16px;\n}\n.messages-container .connection-error h3 {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.messages-container .connection-error p {\n  margin: 0 0 24px 0;\n  color: #666;\n  font-size: 14px;\n  max-width: 300px;\n  line-height: 1.5;\n}\n.messages-container .connection-error button {\n  min-width: 140px;\n}\n.messages-container .connecting-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 24px;\n  text-align: center;\n}\n.messages-container .connecting-state .spinner-wrapper {\n  margin-bottom: 16px;\n}\n.messages-container .connecting-state .spinner-wrapper mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: #667eea;\n}\n.messages-container .connecting-state h3 {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 18px;\n  font-weight: 600;\n}\n.messages-container .connecting-state p {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n.messages-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.message-wrapper {\n  display: flex;\n}\n.message-wrapper.user-message {\n  justify-content: flex-end;\n}\n.message-wrapper.user-message .message-bubble {\n  flex-direction: row-reverse;\n}\n.message-wrapper.user-message .message-bubble .message-content {\n  background: #667eea;\n  color: white;\n}\n.message-wrapper.user-message .message-bubble .message-content .message-time {\n  color: rgba(255, 255, 255, 0.8);\n}\n.message-wrapper.bot-message,\n.message-wrapper.system-message {\n  justify-content: flex-start;\n}\n.message-wrapper.system-message .message-bubble .message-content {\n  background: #e3f2fd;\n  color: #1976d2;\n  font-size: 14px;\n  text-align: center;\n}\n.message-bubble {\n  display: flex;\n  gap: 8px;\n  max-width: 70%;\n}\n.message-bubble .message-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #667eea;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.message-bubble .message-avatar mat-icon {\n  color: white;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.message-bubble .message-content {\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.message-bubble .message-content .message-text {\n  font-size: 14px;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.message-bubble .message-content .message-time {\n  font-size: 11px;\n  color: #999;\n  margin-top: 4px;\n}\n.loading-message {\n  display: flex;\n  justify-content: flex-start;\n}\n.typing-indicator {\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  gap: 4px;\n}\n.typing-indicator span {\n  width: 8px;\n  height: 8px;\n  background: #999;\n  border-radius: 50%;\n  animation: typing 1.4s infinite;\n}\n.typing-indicator span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.typing-indicator span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.7;\n  }\n  30% {\n    transform: translateY(-10px);\n    opacity: 1;\n  }\n}\n.quick-replies {\n  padding: 8px 16px;\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  flex-wrap: wrap;\n}\n.quick-replies::-webkit-scrollbar {\n  display: none;\n}\n.quick-replies .quick-reply-btn {\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #667eea;\n  color: #667eea;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.quick-replies .quick-reply-btn:hover {\n  background: #667eea;\n  color: white;\n}\n.input-container {\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  padding: 12px 16px;\n}\n.input-form {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n.input-form .attach-btn,\n.input-form .send-btn {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.input-form .attach-btn:hover:not(:disabled),\n.input-form .send-btn:hover:not(:disabled) {\n  background: #f5f5f5;\n}\n.input-form .attach-btn:disabled,\n.input-form .send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.input-form .attach-btn mat-icon,\n.input-form .send-btn mat-icon {\n  color: #667eea;\n}\n.input-form .message-input {\n  flex: 1;\n  border: 1px solid #e0e0e0;\n  border-radius: 20px;\n  padding: 10px 16px;\n  font-size: 14px;\n  font-family: inherit;\n  resize: none;\n  max-height: 120px;\n  outline: none;\n}\n.input-form .message-input:focus {\n  border-color: #667eea;\n}\n.input-form .message-input::placeholder {\n  color: #999;\n}\n.input-form .send-btn mat-icon {\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=chat-client.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ChatBotService }, { type: ChatTalkApiService }, { type: ChatTalkSocketService }], { chatContainer: [{
    type: ViewChild,
    args: ["chatMessages"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatClientComponent, { className: "ChatClientComponent", filePath: "src/app/modules/chat-talk/client/components/chat-client/chat-client.component.ts", lineNumber: 20 });
})();

// src/app/modules/chat-talk/client/components/chat-client-home/chat-client-home.component.ts
function ChatClientHomeComponent_div_14_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r2.unreadCount, " ");
  }
}
function ChatClientHomeComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ChatClientHomeComponent_div_14_div_4_Template_div_click_0_listener() {
      const room_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openChatRoom(room_r2));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "mat-icon");
    \u0275\u0275text(3, "chat_bubble");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ChatClientHomeComponent_div_14_div_4_span_4_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-icon", 16);
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", room_r2.unreadCount && room_r2.unreadCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getRoomStatusText(room_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(room_r2.lastMessageAt));
  }
}
function ChatClientHomeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h2");
    \u0275\u0275text(2, "\uC774\uC804 \uB300\uD654");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, ChatClientHomeComponent_div_14_div_4_Template, 12, 3, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.chatRooms);
  }
}
function ChatClientHomeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function ChatClientHomeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon");
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uC544\uC9C1 \uB300\uD654 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "\uC0C8 \uBB38\uC758\uB97C \uC2DC\uC791\uD574\uBCF4\uC138\uC694!");
    \u0275\u0275elementEnd()();
  }
}
var ChatClientHomeComponent = class _ChatClientHomeComponent {
  router;
  route;
  storeId = "";
  chatRooms = [];
  isLoading = false;
  destroy$ = new Subject();
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.storeId = params["storeId"] || "";
      if (this.storeId) {
        this.loadChatRooms();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * 채팅방 목록 로드
   */
  loadChatRooms() {
    this.isLoading = true;
    this.chatRooms = [];
    this.isLoading = false;
  }
  /**
   * 새 문의 시작
   */
  startNewChat() {
    this.router.navigate(["/chat-talk/client/chat"], {
      queryParams: {
        storeId: this.storeId,
        isNew: true
      }
    });
  }
  /**
   * 기존 채팅방 열기
   */
  openChatRoom(room) {
    this.router.navigate(["/chat-talk/client/chat"], {
      queryParams: {
        storeId: this.storeId,
        roomId: room.id
      }
    });
  }
  /**
   * 채팅방 상태 표시 텍스트
   */
  getRoomStatusText(status) {
    const statusMap = {
      [RoomStatus.BOT_ACTIVE]: "\uCC57\uBD07 \uC751\uB2F5",
      [RoomStatus.WAITING_AGENT]: "\uC0C1\uB2F4\uC6D0 \uB300\uAE30\uC911",
      [RoomStatus.AGENT_ACTIVE]: "\uC0C1\uB2F4 \uC9C4\uD589\uC911",
      [RoomStatus.RESOLVED]: "\uC644\uB8CC",
      [RoomStatus.CLOSED]: "\uC885\uB8CC"
    };
    return statusMap[status] || status;
  }
  /**
   * 마지막 메시지 시간 포맷
   */
  formatTime(date) {
    if (!date)
      return "";
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minutes = Math.floor(diff / (1e3 * 60));
    const hours = Math.floor(diff / (1e3 * 60 * 60));
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    if (minutes < 1)
      return "\uBC29\uAE08 \uC804";
    if (minutes < 60)
      return `${minutes}\uBD84 \uC804`;
    if (hours < 24)
      return `${hours}\uC2DC\uAC04 \uC804`;
    if (days < 7)
      return `${days}\uC77C \uC804`;
    return new Date(date).toLocaleDateString();
  }
  static \u0275fac = function ChatClientHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatClientHomeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatClientHomeComponent, selectors: [["app-chat-client-home"]], standalone: false, decls: 17, vars: 3, consts: [[1, "chat-home-container"], [1, "home-header"], [1, "home-content"], [1, "new-chat-btn", 3, "click"], ["class", "chat-history", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "chat-history"], [1, "room-list"], ["class", "room-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "room-item", 3, "click"], [1, "room-icon"], ["class", "unread-badge", 4, "ngIf"], [1, "room-info"], [1, "room-status"], [1, "room-time"], [1, "arrow-icon"], [1, "unread-badge"], [1, "loading-container"], ["diameter", "40"], [1, "empty-state"], [1, "empty-sub"]], template: function ChatClientHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
      \u0275\u0275text(4, "chat");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " \uACE0\uAC1D \uC0C1\uB2F4 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "\uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "button", 3);
      \u0275\u0275listener("click", function ChatClientHomeComponent_Template_button_click_9_listener() {
        return ctx.startNewChat();
      });
      \u0275\u0275elementStart(10, "mat-icon");
      \u0275\u0275text(11, "add_comment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "\uC0C8 \uBB38\uC758\uD558\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, ChatClientHomeComponent_div_14_Template, 5, 1, "div", 4)(15, ChatClientHomeComponent_div_15_Template, 2, 0, "div", 5)(16, ChatClientHomeComponent_div_16_Template, 7, 0, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.chatRooms.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.chatRooms.length === 0);
    }
  }, dependencies: [NgForOf, NgIf, MatIcon, MatProgressSpinner], styles: ["\n\n.chat-home-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.home-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n}\n.home-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 10px 0;\n}\n.home-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.home-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.home-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.new-chat-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 30px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.new-chat-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.new-chat-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n.new-chat-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.chat-history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 15px 0;\n  color: #333;\n}\n.room-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.room-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.room-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #667eea;\n}\n.room-item[_ngcontent-%COMP%]   .room-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 15px;\n}\n.room-item[_ngcontent-%COMP%]   .room-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #667eea;\n}\n.room-item[_ngcontent-%COMP%]   .room-icon[_ngcontent-%COMP%]   .unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ff4444;\n  color: white;\n  border-radius: 10px;\n  padding: 2px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  min-width: 18px;\n  text-align: center;\n}\n.room-item[_ngcontent-%COMP%]   .room-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.room-item[_ngcontent-%COMP%]   .room-info[_ngcontent-%COMP%]   .room-status[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 4px;\n}\n.room-item[_ngcontent-%COMP%]   .room-info[_ngcontent-%COMP%]   .room-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n}\n.room-item[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  margin-bottom: 20px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #bbb;\n}\n/*# sourceMappingURL=chat-client-home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatClientHomeComponent, [{
    type: Component,
    args: [{ selector: "app-chat-client-home", standalone: false, template: '<div class="chat-home-container">\n  <div class="home-header">\n    <h1>\n      <mat-icon>chat</mat-icon>\n      \uACE0\uAC1D \uC0C1\uB2F4\n    </h1>\n    <p>\uBB34\uC5C7\uC744 \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?</p>\n  </div>\n\n  <div class="home-content">\n    <!-- \uC0C8 \uBB38\uC758 \uC2DC\uC791 \uBC84\uD2BC -->\n    <button class="new-chat-btn" (click)="startNewChat()">\n      <mat-icon>add_comment</mat-icon>\n      <span>\uC0C8 \uBB38\uC758\uD558\uAE30</span>\n    </button>\n\n    <!-- \uC774\uC804 \uB300\uD654 \uBAA9\uB85D -->\n    <div class="chat-history" *ngIf="chatRooms.length > 0">\n      <h2>\uC774\uC804 \uB300\uD654</h2>\n      <div class="room-list">\n        <div class="room-item" *ngFor="let room of chatRooms" (click)="openChatRoom(room)">\n          <div class="room-icon">\n            <mat-icon>chat_bubble</mat-icon>\n            <span class="unread-badge" *ngIf="room.unreadCount && room.unreadCount > 0">\n              {{ room.unreadCount }}\n            </span>\n          </div>\n          <div class="room-info">\n            <div class="room-status">{{ getRoomStatusText(room.status) }}</div>\n            <div class="room-time">{{ formatTime(room.lastMessageAt) }}</div>\n          </div>\n          <mat-icon class="arrow-icon">chevron_right</mat-icon>\n        </div>\n      </div>\n    </div>\n\n    <!-- \uB85C\uB529 \uC0C1\uD0DC -->\n    <div class="loading-container" *ngIf="isLoading">\n      <mat-spinner diameter="40"></mat-spinner>\n    </div>\n\n    <!-- \uB300\uD654 \uC5C6\uC74C \uC0C1\uD0DC -->\n    <div class="empty-state" *ngIf="!isLoading && chatRooms.length === 0">\n      <mat-icon>chat_bubble_outline</mat-icon>\n      <p>\uC544\uC9C1 \uB300\uD654 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</p>\n      <p class="empty-sub">\uC0C8 \uBB38\uC758\uB97C \uC2DC\uC791\uD574\uBCF4\uC138\uC694!</p>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/chat-talk/client/components/chat-client-home/chat-client-home.component.scss */\n.chat-home-container {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.home-header {\n  text-align: center;\n  padding: 20px 0;\n}\n.home-header h1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 10px 0;\n}\n.home-header h1 mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.home-header p {\n  color: #666;\n  margin: 0;\n}\n.home-content {\n  flex: 1;\n  overflow-y: auto;\n}\n.new-chat-btn {\n  width: 100%;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 30px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.new-chat-btn mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.new-chat-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n.new-chat-btn:active {\n  transform: translateY(0);\n}\n.chat-history h2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 15px 0;\n  color: #333;\n}\n.room-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.room-item {\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.room-item:hover {\n  background: #f5f5f5;\n  border-color: #667eea;\n}\n.room-item .room-icon {\n  position: relative;\n  margin-right: 15px;\n}\n.room-item .room-icon mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #667eea;\n}\n.room-item .room-icon .unread-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ff4444;\n  color: white;\n  border-radius: 10px;\n  padding: 2px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  min-width: 18px;\n  text-align: center;\n}\n.room-item .room-info {\n  flex: 1;\n}\n.room-item .room-info .room-status {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 4px;\n}\n.room-item .room-info .room-time {\n  font-size: 12px;\n  color: #999;\n}\n.room-item .arrow-icon {\n  color: #ccc;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #999;\n}\n.empty-state mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  margin-bottom: 20px;\n  opacity: 0.3;\n}\n.empty-state p {\n  margin: 10px 0;\n  font-size: 16px;\n}\n.empty-state .empty-sub {\n  font-size: 14px;\n  color: #bbb;\n}\n/*# sourceMappingURL=chat-client-home.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatClientHomeComponent, { className: "ChatClientHomeComponent", filePath: "src/app/modules/chat-talk/client/components/chat-client-home/chat-client-home.component.ts", lineNumber: 12 });
})();

// src/app/modules/chat-talk/client/client-routing.module.ts
var routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: ChatClientHomeComponent
  },
  {
    path: "chat",
    component: ChatClientComponent
  }
];
var ClientRoutingModule = class _ClientRoutingModule {
  static \u0275fac = function ClientRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/chat-talk/client/client.module.ts
var ChatTalkClientModule = class _ChatTalkClientModule {
  static \u0275fac = function ChatTalkClientModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkClientModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatTalkClientModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBadgeModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkClientModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ChatClientComponent,
        ChatClientHomeComponent
      ],
      imports: [
        CommonModule,
        RouterModule,
        ClientRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // Material
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatBadgeModule
      ]
    }]
  }], null, null);
})();
export {
  ChatTalkClientModule
};
//# sourceMappingURL=chunk-OVDHRY2G.js.map
