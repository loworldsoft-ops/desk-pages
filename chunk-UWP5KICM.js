import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import {
  Router
} from "./chunk-BE5X2S7S.js";
import {
  Directive,
  EventEmitter,
  Injectable,
  Subject,
  inject,
  setClassMetadata,
  take,
  timer,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory
} from "./chunk-WY5M3RVA.js";

// src/app/modules/expedition/modules/chatflow-reader/services/chatflow-logic-context-manager.service.ts
var ChatflowLogicContextManagerService = class _ChatflowLogicContextManagerService {
  // 모든 컨텍스트를 저장하는 객체
  contexts = {};
  // 현재 활성화된 컨텍스트
  currentContext = null;
  // 이전 컨텍스트 스택 (되돌아가기 위해)
  contextStack = [];
  constructor() {
    console.log("ChatflowLogicContextManager initialized");
  }
  /**
   * 새로운 컨텍스트를 등록합니다
   */
  registerContext(name, context) {
    this.contexts[name] = context;
    console.log(`\uCEE8\uD14D\uC2A4\uD2B8 \uB4F1\uB85D\uB428: ${name}`);
  }
  /**
   * 컨텍스트를 변경합니다
   */
  changeContext(context, saveCurrentToStack = false) {
    if (saveCurrentToStack && this.currentContext) {
      this.contextStack.push(this.currentContext);
      console.log("\uC774\uC804 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC2A4\uD0DD\uC5D0 \uC800\uC7A5:", this.currentContext.contextName);
    }
    this.currentContext = context;
    console.log(`\uCEE8\uD14D\uC2A4\uD2B8 \uBCC0\uACBD\uB428: ${context.contextName}`);
  }
  /**
   * 이전 컨텍스트로 돌아갑니다
   */
  returnToPreviousContext() {
    const previousContext = this.contextStack.pop();
    if (previousContext) {
      this.currentContext = previousContext;
      console.log(`\uC774\uC804 \uCEE8\uD14D\uC2A4\uD2B8\uB85C \uBCF5\uADC0: ${previousContext.contextName}`);
      return previousContext;
    }
    console.warn("\uB3CC\uC544\uAC08 \uC774\uC804 \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    return null;
  }
  /**
   * 특정 이름의 컨텍스트를 가져옵니다
   */
  getContext(name) {
    return this.contexts[name];
  }
  /**
   * 모든 컨텍스트를 초기화합니다
   */
  clearAllContexts() {
    this.contexts = {};
    this.currentContext = null;
    this.contextStack = [];
    console.log("\uBAA8\uB4E0 \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uCD08\uAE30\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  /**
   * 특정 컨텍스트를 제거합니다
   */
  removeContext(name) {
    if (this.contexts[name]) {
      delete this.contexts[name];
      console.log(`\uCEE8\uD14D\uC2A4\uD2B8 \uC81C\uAC70\uB428: ${name}`);
    }
  }
  static \u0275fac = function ChatflowLogicContextManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatflowLogicContextManagerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatflowLogicContextManagerService, factory: _ChatflowLogicContextManagerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatflowLogicContextManagerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/expedition/modules/chatbot-logic/classes/chatbot.abstract.ts
var ChatbotBase = class {
  data;
};

// src/app/modules/expedition/modules/chatbot-logic/classes/chatbot-answer.class.ts
var ChatbotAnswer = class _ChatbotAnswer extends ChatbotBase {
  loadingFinished$ = new EventEmitter();
  ngOnInit() {
    if (this.data.isLoading === false) {
      this.loadingFinished$.emit(true);
      return;
    }
    const source$ = timer(this.data.loadingSec * 1e3);
    source$.pipe(take(1)).subscribe((d) => {
      this.data.isLoading = false;
      this.loadingFinished$.emit(true);
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChatbotAnswer_BaseFactory;
    return function ChatbotAnswer_Factory(__ngFactoryType__) {
      return (\u0275ChatbotAnswer_BaseFactory || (\u0275ChatbotAnswer_BaseFactory = \u0275\u0275getInheritedFactory(_ChatbotAnswer)))(__ngFactoryType__ || _ChatbotAnswer);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ChatbotAnswer, features: [\u0275\u0275InheritDefinitionFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotAnswer, [{
    type: Directive
  }], null, null);
})();

// src/app/modules/expedition/modules/chatbot-logic/classes/chatbot-button.class.ts
var ChatbotButton = class extends ChatbotBase {
  clicked$ = new EventEmitter();
  onClick(data) {
    this.clicked$.emit(data);
  }
};

// src/app/modules/expedition/modules/chatbot-logic/classes/chatbot-question.class.ts
var ChatbotQuestion = class _ChatbotQuestion extends ChatbotBase {
  chatbotActionService;
  constructor(chatbotActionService) {
    super();
    this.chatbotActionService = chatbotActionService;
  }
  ngOnInit() {
    if (!this.chatbotActionService.questionCreated$)
      return;
    this.chatbotActionService.questionCreated$.next(this.data.text);
  }
  static \u0275fac = function ChatbotQuestion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotQuestion)(\u0275\u0275directiveInject(ChatbotActionService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ChatbotQuestion, features: [\u0275\u0275InheritDefinitionFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotQuestion, [{
    type: Directive
  }], () => [{ type: ChatbotActionService }], null);
})();

// src/app/modules/expedition/modules/chatbot-logic/services/chatbot-action.service.ts
var ChatbotActionService = class _ChatbotActionService {
  question = "";
  // public behaviorManager!: BehaviorManager;
  // public scenarios: KeyValue<string, any[]>[] = [];
  // public currentScenarios: any[] = [];
  // public behaviorType: string = 'blog';
  chatbotScrollBody;
  chatbotContent;
  chatStyleSetting = {
    answer: ChatbotAnswer,
    question: ChatbotQuestion,
    button: ChatbotButton
  };
  // public chatbotTextArea!: HTMLTextAreaElement;
  router = inject(Router);
  questionCreated$ = null;
  messageCreated$ = new Subject();
  // 메시지 생성 알림
  createChatComponent(component, data) {
    const ref = this.chatbotContent.createComponent(component);
    const instance = ref.instance;
    if (data) {
      instance.data = data;
    }
    this.messageCreated$.next();
    return ref;
  }
  static \u0275fac = function ChatbotActionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotActionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatbotActionService, factory: _ChatbotActionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotActionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/expedition/modules/chatflow-reader/classes/node-logic.abstract.ts
var NodeLogicAbstract = class {
  logicReader;
  readData = {};
  //실행할 노드의 데이터
  chatbotActionService = inject(ChatbotActionService);
  constructor(logicReader) {
    this.logicReader = logicReader;
  }
  end(rightNodeId) {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u{1F3C1} NodeLogic.end() \uD638\uCD9C\uB428 (${this.readData.type})`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   rightNodeIds: [${this.readData.rightNodeIds?.join(", ") || "\uC5C6\uC74C"}]`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   rightNodeIds.length: ${this.readData.rightNodeIds?.length || 0}`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   \uC9C0\uC815\uB41C rightNodeId: ${rightNodeId || "\uC5C6\uC74C"}`);
    }
    if (this.readData.rightNodeIds.length === 0) {
      console.log("\uC5F0\uACB0\uB41C \uB178\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
      if (debugLogger) {
        debugLogger.warn("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", "\u26A0\uFE0F \uC5F0\uACB0\uB41C \uB178\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2DC\uBBAC\uB808\uC774\uC158 \uC911\uB2E8.");
      }
      return;
    }
    if (rightNodeId) {
      if (debugLogger) {
        debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u27A1\uFE0F \uB2E4\uC74C \uB178\uB4DC \uC2E4\uD589: ${rightNodeId}`);
      }
      this.logicReader.execute(rightNodeId);
      return;
    }
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `\u27A1\uFE0F \uB2E4\uC74C \uB178\uB4DC \uC2E4\uD589: ${this.readData.rightNodeIds[0]}`);
    }
    this.logicReader.execute(this.readData.rightNodeIds[0]);
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/button.logic.ts
var ButtonLogic = class extends NodeLogicAbstract {
  start() {
    console.log("button node started", this.readData.data);
    const ref = this.chatbotActionService.createChatComponent(this.chatbotActionService.chatStyleSetting.button, this.readData.data);
    ref.instance.clicked$.pipe(take(1)).subscribe((d) => {
      const index = this.readData.data.conditions.indexOf(d);
      if (index < 0) {
        console.log("\uC77C\uCE58\uD558\uB294 \uAC12\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
        this.end();
        return;
      }
      this.logicReader.variables[this.readData.data.variableName] = d.routingKey;
      this.end(d.targetNodeId);
    });
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/end.logic.ts
var EndLogic = class extends NodeLogicAbstract {
  start() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", "\u{1F3C1} EndLogic.start() \uD638\uCD9C\uB428");
      debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", "\u2705 \uCC57\uD50C\uB85C\uC6B0 \uC885\uB8CC \uC774\uBCA4\uD2B8 \uBC1C\uC0DD");
    }
    this.logicReader.$chatflowEnded.next(true);
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/listen.logic.ts
var ListenLogic = class extends NodeLogicAbstract {
  questionCreated$ = new Subject();
  debugLogger = inject(DebugLoggerService);
  start() {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Listen", `Listen \uB85C\uC9C1 \uC2DC\uC791 (\uBCC0\uC218: ${this.readData.data.variableName})`);
    this.chatbotActionService.questionCreated$ = this.questionCreated$;
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Listen", `\uC0AC\uC6A9\uC790 \uC785\uB825 \uB300\uAE30 \uC911... (\uBCC0\uC218: ${this.readData.data.variableName})`);
    this.chatbotActionService.questionCreated$.pipe(take(1)).subscribe((userInput) => {
      this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Listen", `\uC0AC\uC6A9\uC790 \uC785\uB825 \uC218\uC2E0: "${userInput}"`);
      this.chatbotActionService.questionCreated$ = null;
      this.logicReader.variables[this.readData.data.variableName] = userInput;
      this.debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-Listen", `\uBCC0\uC218 \uC800\uC7A5 \uC644\uB8CC: ${this.readData.data.variableName} = "${this.logicReader.variables[this.readData.data.variableName]}"`);
      this.end();
    });
  }
  end() {
    this.debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Listen", `Listen \uB85C\uC9C1 \uC885\uB8CC (\uB2E4\uC74C \uB178\uB4DC \uC218: ${this.readData.rightNodeIds?.length || 0})`);
    super.end();
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/speak.logic.ts
var SpeakLogic = class extends NodeLogicAbstract {
  start() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Speak", `\u{1F5E3}\uFE0F Speak \uB178\uB4DC \uC2DC\uC791`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Speak", `   \uD14D\uC2A4\uD2B8: "${this.readData.data.text}"`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Speak", `   \uB85C\uB529: ${this.readData.data.isLoading}, ${this.readData.data.loadingSec}\uCD08`);
    }
    let speakText = this.readData.data.text;
    const regex = /\{\{\{(.+?)\}\}\}/g;
    const matches = speakText.matchAll(regex);
    for (const match of matches) {
      const fullMatch = match[0];
      const variableName = match[1];
      if (this.logicReader.variables[variableName]) {
        speakText = speakText.replace(fullMatch, this.logicReader.variables[variableName]);
        if (debugLogger) {
          debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Speak", `   \uBCC0\uC218 \uCE58\uD658: {{{${variableName}}}} \u2192 ${this.logicReader.variables[variableName]}`);
        }
      }
    }
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Speak", `   \uCD5C\uC885 \uD14D\uC2A4\uD2B8: "${speakText}"`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-Speak", `   \uCC57\uBD07 \uBA54\uC2DC\uC9C0 \uC0DD\uC131 \uC911...`);
    }
    const ref = this.chatbotActionService.createChatComponent(this.chatbotActionService.chatStyleSetting.answer, {
      text: speakText,
      isLoading: this.readData.data.isLoading,
      loadingSec: this.readData.data.loadingSec
    });
    ref.instance.loadingFinished$.pipe(take(1)).subscribe((d) => {
      if (debugLogger) {
        debugLogger.success("\uCC57\uD50C\uB85C\uC6B0-Speak", `\u2705 Speak \uB178\uB4DC \uC644\uB8CC \u2192 \uB2E4\uC74C \uB178\uB4DC\uB85C \uC774\uB3D9`);
      }
      this.end();
    });
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/split.logic.ts
var SplitLogic = class extends NodeLogicAbstract {
  start() {
    console.log("Split node started", this.readData.data);
    if (this.readData.data.conditions.length === 0) {
      console.log("\uC870\uAC74\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
      this.end();
      return;
    }
    if (!this.logicReader.variables[this.readData.data.variableName]) {
      console.log("\uBCC0\uC218\uC5D0 \uAC12\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
      this.end();
      return;
    }
    let targetNodeId = "";
    this.readData.data.conditions.some((d, i) => {
      if (this.logicReader.variables[this.readData.data.variableName] === this.readData.data.conditions[i].routingKey) {
        targetNodeId = this.readData.data.conditions[i].targetNodeId;
        return true;
      }
      return false;
    });
    if (!targetNodeId) {
      console.log("\uC77C\uCE58\uD558\uB294 \uAC12\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
      this.end();
    }
    this.end(targetNodeId);
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/start.logic.ts
var StartLogic = class extends NodeLogicAbstract {
  start() {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", "\u{1F3AC} StartLogic.start() \uD638\uCD9C\uB428");
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   readData.id: ${this.readData.id}`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   readData.type: ${this.readData.type}`);
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uB85C\uC9C1", `   rightNodeIds: [${this.readData.rightNodeIds?.join(", ") || "\uC5C6\uC74C"}]`);
    }
    this.end();
  }
};

// src/app/modules/expedition/modules/chatflow-reader/logics/question.logic.ts
var QuestionLogic = class extends NodeLogicAbstract {
  start() {
    let speakText = this.readData.data.text;
    const regex = /\{\{\{(.+?)\}\}\}/g;
    const matches = speakText.matchAll(regex);
    console.log(matches);
    for (const match of matches) {
      const fullMatch = match[0];
      if (this.logicReader.variables[match[1]]) {
        speakText = speakText.replace(fullMatch, this.logicReader.variables[match[1]]);
      }
    }
    const ref = this.chatbotActionService.createChatComponent(this.chatbotActionService.chatStyleSetting.question, { text: speakText });
    this.end();
  }
};

// src/app/modules/expedition/modules/chatflow-reader/classes/chatflow-logic-context.ts
var ChatflowLogicContext = class {
  contextName;
  contextManager;
  chatbotActionService;
  // 노드 로직들
  nodeLogics = {};
  // 챗플로우 데이터
  chatflowData = {};
  // 챗플로우 변수들
  variables = {};
  // 챗플로우 종료 이벤트
  $chatflowEnded = new Subject();
  // 현재 노드 변경 이벤트
  currentNode$ = new Subject();
  constructor(contextName, contextManager, chatbotActionService) {
    this.contextName = contextName;
    this.contextManager = contextManager;
    this.chatbotActionService = chatbotActionService;
    this.initializeNodeLogics();
    console.log(`ChatflowLogicContext \uC0DD\uC131\uB428: ${contextName}`);
  }
  /**
   * 노드 로직 초기화
   */
  initializeNodeLogics() {
    this.nodeLogics["speak"] = new SpeakLogic(this);
    this.nodeLogics["start"] = new StartLogic(this);
    this.nodeLogics["listen"] = new ListenLogic(this);
    this.nodeLogics["split"] = new SplitLogic(this);
    this.nodeLogics["end"] = new EndLogic(this);
    this.nodeLogics["button"] = new ButtonLogic(this);
    this.nodeLogics["question"] = new QuestionLogic(this);
    import("./chunk-VXSFGSBZ.js").then((module) => {
      this.nodeLogics["contextChanger"] = new module.ContextChangerLogic(this);
    });
  }
  /**
   * 챗플로우 시작
   */
  start() {
    console.log(`\uCC57\uD50C\uB85C\uC6B0 \uC2DC\uC791: ${this.contextName}`);
    this.execute("start");
  }
  /**
   * 노드 실행
   */
  execute(nodeId) {
    const debugLogger = window.debugLogger;
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uCEE8\uD14D\uC2A4\uD2B8", `\u{1F504} execute() \uD638\uCD9C\uB428 - nodeId: ${nodeId}, context: ${this.contextName}`);
    }
    const readData = this.chatflowData[nodeId];
    if (!readData) {
      console.error(`\uB178\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: ${nodeId}`);
      return;
    }
    if (debugLogger) {
      debugLogger.info("\uCC57\uD50C\uB85C\uC6B0-\uCEE8\uD14D\uC2A4\uD2B8", `   \uB178\uB4DC \uD0C0\uC785: ${readData.type}`);
    }
    this.currentNode$.next(readData);
    const nodeLogic = this.nodeLogics[readData.type];
    if (!nodeLogic) {
      console.error(`\uB178\uB4DC \uB85C\uC9C1\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: ${readData.type}`);
      return;
    }
    nodeLogic.readData = readData;
    nodeLogic.start();
  }
  /**
   * 챗플로우 종료
   */
  end() {
    console.log(`\uCC57\uD50C\uB85C\uC6B0 \uC885\uB8CC: ${this.contextName}`);
    this.$chatflowEnded.next();
  }
  /**
   * 컨텍스트 초기화
   */
  reset() {
    this.variables = {};
    this.chatflowData = {};
    this.currentNode$.next(null);
    console.log(`\uCEE8\uD14D\uC2A4\uD2B8 \uCD08\uAE30\uD654\uB428: ${this.contextName}`);
  }
  /**
   * 다른 컨텍스트로 전환
   */
  switchToContext(contextName) {
    const targetContext = this.contextManager.getContext(contextName);
    if (targetContext) {
      this.contextManager.changeContext(targetContext, true);
      targetContext.start();
    } else {
      console.error(`\uCEE8\uD14D\uC2A4\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: ${contextName}`);
    }
  }
  /**
   * 이전 컨텍스트로 복귀
   */
  returnToPrevious() {
    const previousContext = this.contextManager.returnToPreviousContext();
    if (previousContext) {
      console.log(`\uC774\uC804 \uCEE8\uD14D\uC2A4\uD2B8\uB85C \uBCF5\uADC0: ${previousContext.contextName}`);
    }
  }
};

export {
  ChatflowLogicContextManagerService,
  ChatbotAnswer,
  ChatbotButton,
  ChatbotQuestion,
  ChatbotActionService,
  NodeLogicAbstract,
  ButtonLogic,
  EndLogic,
  ListenLogic,
  SpeakLogic,
  SplitLogic,
  StartLogic,
  QuestionLogic,
  ChatflowLogicContext
};
//# sourceMappingURL=chunk-UWP5KICM.js.map
