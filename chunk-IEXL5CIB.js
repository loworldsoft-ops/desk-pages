import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-WY5M3RVA.js";

// src/app/utils/console-override.util.ts
var originalConsole = {
  log: console.log.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  info: console.info.bind(console),
  debug: console.debug.bind(console),
  group: console.group.bind(console),
  groupEnd: console.groupEnd.bind(console),
  groupCollapsed: console.groupCollapsed.bind(console)
};
var debugLoggerInstance = null;
var isProcessing = false;
function setDebugLoggerInstance(instance) {
  debugLoggerInstance = instance;
}
function isConsoleOverrideEnabled() {
  try {
    return localStorage.getItem("debugMode") === "true";
  } catch {
    return false;
  }
}
function isDebugMode() {
  try {
    return localStorage.getItem("debugMode") === "true";
  } catch {
    return false;
  }
}
function argsToString(args) {
  return args.map((arg) => {
    if (typeof arg === "string")
      return arg;
    if (arg instanceof Error)
      return arg.message;
    try {
      return JSON.stringify(arg);
    } catch {
      return String(arg);
    }
  }).join(" ");
}
function initializeConsoleOverride() {
  if (false) {
    const initialState = isConsoleOverrideEnabled();
    originalConsole.log(`%c[ConsoleOverride] \uCD08\uAE30\uD654 - Override: ${initialState ? "ON" : "OFF"}`, `color: ${initialState ? "#FF9800" : "#4CAF50"}; font-weight: bold;`);
  }
  console.log = function(...args) {
    originalConsole.log(...args);
    if (debugLoggerInstance && !isProcessing) {
      isProcessing = true;
      try {
        const message = argsToString(args);
        debugLoggerInstance.info("Console", message);
      } catch (e) {
        originalConsole.error("DebugLogger error:", e);
      } finally {
        isProcessing = false;
      }
    }
  };
  console.warn = function(...args) {
    originalConsole.warn(...args);
    if (debugLoggerInstance && !isProcessing) {
      isProcessing = true;
      try {
        const message = argsToString(args);
        debugLoggerInstance.warn("Console", message);
      } catch (e) {
        originalConsole.error("DebugLogger error:", e);
      } finally {
        isProcessing = false;
      }
    }
  };
  console.error = function(...args) {
    originalConsole.error(...args);
    if (debugLoggerInstance && !isProcessing) {
      isProcessing = true;
      try {
        const message = argsToString(args);
        debugLoggerInstance.error("Console", message);
      } catch (e) {
        originalConsole.error("DebugLogger error:", e);
      } finally {
        isProcessing = false;
      }
    }
  };
  console.info = function(...args) {
    originalConsole.info(...args);
  };
  console.debug = function(...args) {
    originalConsole.debug(...args);
  };
  console.group = function(...args) {
    originalConsole.group(...args);
  };
  console.groupEnd = function() {
    originalConsole.groupEnd();
  };
  console.groupCollapsed = function(...args) {
    originalConsole.groupCollapsed(...args);
  };
}
function toggleConsoleOverride() {
  const currentState = isConsoleOverrideEnabled();
  const newState = !currentState;
  try {
    localStorage.setItem("consoleOverride", newState.toString());
    if (newState) {
      originalConsole.log(`%c\u{1F504} Console Override \uD65C\uC131\uD654\uB428`, `color: #4CAF50; font-weight: bold; font-size: 14px;`);
      originalConsole.log(`%c\u{1F4CB} DebugLogger \u2192 \uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194\uC5D0\uB3C4 \uD45C\uC2DC\uB428`, "color: #4CAF50; font-weight: bold;");
    } else {
      originalConsole.log(`%c\u{1F504} Console Override \uBE44\uD65C\uC131\uD654\uB428`, `color: #F44336; font-weight: bold; font-size: 14px;`);
      originalConsole.log(`%c\u{1F4CB} DebugLogger \u2192 \uD328\uB110\uC5D0\uB9CC \uD45C\uC2DC\uB428 (\uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194 \uC228\uAE40)`, "color: #FF9800; font-weight: bold;");
    }
    originalConsole.log(`%c\u2139\uFE0F \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD558\uBA74 \uC801\uC6A9\uB429\uB2C8\uB2E4.`, "color: #2196F3; font-weight: bold;");
    return newState;
  } catch {
    originalConsole.error("\u274C localStorage \uC811\uADFC \uC2E4\uD328");
    return currentState;
  }
}
function getConsoleOverrideStatus() {
  const overrideEnabled = isConsoleOverrideEnabled();
  const debugEnabled = isDebugMode();
  originalConsole.log(`%c\u{1F4CA} Console Override \uC0C1\uD0DC`, "color: #9C27B0; font-weight: bold; font-size: 16px;");
  originalConsole.log(`%cConsole Override: ${overrideEnabled ? "\u2705 \uD65C\uC131\uD654" : "\u274C \uBE44\uD65C\uC131\uD654"}`, `color: ${overrideEnabled ? "#4CAF50" : "#F44336"}; font-weight: bold;`);
  if (overrideEnabled) {
    originalConsole.log(`%c  \u2192 DebugLogger\uB97C \uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194\uC5D0\uB3C4 \uD45C\uC2DC`, "color: #4CAF50;");
  } else {
    originalConsole.log(`%c  \u2192 DebugLogger\uB97C \uD328\uB110\uC5D0\uB9CC \uD45C\uC2DC (\uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194 \uC228\uAE40)`, "color: #FF9800;");
  }
  originalConsole.log(`%cDebug Mode: ${debugEnabled ? "\u2705 \uD65C\uC131\uD654" : "\u274C \uBE44\uD65C\uC131\uD654"}`, `color: ${debugEnabled ? "#4CAF50" : "#F44336"}; font-weight: bold;`);
  if (debugEnabled) {
    originalConsole.log(`%c  \u2192 Override \uD65C\uC131\uD654 \uC2DC\uC5D0\uB3C4 \uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194\uC5D0 \uD45C\uC2DC\uB428 (\uAC1C\uBC1C\uC790\uC6A9)`, "color: #2196F3;");
  }
  originalConsole.log(`%c
\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBA85\uB839\uC5B4:`, "color: #2196F3; font-weight: bold;");
  originalConsole.log("  \u2022 toggleConsoleOverride() - Override \uD1A0\uAE00");
  originalConsole.log("  \u2022 getConsoleOverrideStatus() - \uC0C1\uD0DC \uD655\uC778");
}
var originalLog = originalConsole.log;
var originalWarn = originalConsole.warn;
var originalError = originalConsole.error;

// src/app/shared/services/debug-logger.service.ts
var DebugLoggerService = class _DebugLoggerService {
  logs = [];
  logsSubject = new BehaviorSubject([]);
  enabledSubject = new BehaviorSubject(false);
  logs$ = this.logsSubject.asObservable();
  enabled$ = this.enabledSubject.asObservable();
  maxLogs = 500;
  // 최대 로그 수 제한
  constructor() {
    const savedState = localStorage.getItem("debugMode");
    if (savedState === "true") {
      this.enabledSubject.next(true);
    }
  }
  /**
   * 디버그 모드 활성화/비활성화
   */
  setEnabled(enabled) {
    this.enabledSubject.next(enabled);
    localStorage.setItem("debugMode", enabled.toString());
    if (enabled) {
      this.info("System", "\u{1F41B} \uB514\uBC84\uADF8 \uBAA8\uB4DC \uD65C\uC131\uD654\uB428");
    }
  }
  /**
   * 디버그 모드 토글
   */
  toggle() {
    const newState = !this.enabledSubject.value;
    this.setEnabled(newState);
    return newState;
  }
  /**
   * 현재 디버그 모드 상태
   */
  isEnabled() {
    return this.enabledSubject.value;
  }
  /**
   * INFO 레벨 로그
   */
  info(category, message) {
    this.addLog("info", category, message);
  }
  /**
   * WARNING 레벨 로그 (비활성화됨 - 표시 안 함)
   */
  warn(category, message) {
  }
  /**
   * ERROR 레벨 로그
   */
  error(category, message) {
    this.addLog("error", category, message);
  }
  /**
   * SUCCESS 레벨 로그
   */
  success(category, message) {
    this.addLog("success", category, message);
  }
  /**
   * 로그 추가 (내부 메서드)
   */
  addLog(level, category, message) {
    const log = {
      timestamp: /* @__PURE__ */ new Date(),
      level,
      category,
      message
    };
    this.logs.push(log);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
    this.logsSubject.next([...this.logs]);
  }
  /**
   * 모든 로그 가져오기
   */
  getAllLogs() {
    return [...this.logs];
  }
  /**
   * 로그 지우기
   */
  clear() {
    this.logs = [];
    this.logsSubject.next([]);
    console.clear();
  }
  /**
   * 로그를 텍스트로 내보내기
   */
  exportAsText() {
    return this.logs.map((log) => {
      const time = log.timestamp.toLocaleTimeString("ko-KR");
      const icon = this.getIcon(log.level);
      return `[${time}] ${icon} [${log.category}] ${log.message}`;
    }).join("\n");
  }
  /**
   * 레벨별 아이콘
   */
  getIcon(level) {
    switch (level) {
      case "info":
        return "\u2139\uFE0F";
      case "warn":
        return "\u26A0\uFE0F";
      case "error":
        return "\u274C";
      case "success":
        return "\u2705";
    }
  }
  /**
   * 레벨별 색상
   */
  getColor(level) {
    switch (level) {
      case "info":
        return "#2196F3";
      case "warn":
        return "#FF9800";
      case "error":
        return "#F44336";
      case "success":
        return "#4CAF50";
    }
  }
  static \u0275fac = function DebugLoggerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebugLoggerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DebugLoggerService, factory: _DebugLoggerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugLoggerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  setDebugLoggerInstance,
  initializeConsoleOverride,
  toggleConsoleOverride,
  getConsoleOverrideStatus,
  DebugLoggerService
};
//# sourceMappingURL=chunk-IEXL5CIB.js.map
