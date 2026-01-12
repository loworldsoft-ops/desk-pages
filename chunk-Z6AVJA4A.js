import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-WY5M3RVA.js";

// src/app/services/snackbar.service.ts
var SnackbarService = class _SnackbarService {
  messages = [];
  container = null;
  progressSnackbar = null;
  progressSteps = [];
  isProgressMode = false;
  // 프로그레스 모드 플래그
  constructor() {
    this.createContainer();
  }
  showSuccess(message, duration = 3e3) {
    if (this.isProgressMode) {
      return;
    }
    this.showMessage(message, "success", duration);
  }
  showError(message, duration = 4e3) {
    this.showMessage(message, "error", duration);
  }
  showWarning(message, duration = 3500) {
    if (this.isProgressMode) {
      return;
    }
    this.showMessage(message, "warning", duration);
  }
  showInfo(message, duration = 3e3) {
    if (this.isProgressMode) {
      return;
    }
    this.showMessage(message, "info", duration);
  }
  createContainer() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    this.container = document.createElement("div");
    this.container.className = "snackbar-container";
    this.container.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
      align-items: flex-start;
    `;
    document.body.appendChild(this.container);
  }
  showMessage(message, type, duration) {
    console.log(`[${type.toUpperCase()}] ${message}`);
    if (!this.container) {
      this.createContainer();
    }
    const id = Date.now().toString();
    const snackbarMessage = { id, message, type, duration };
    this.messages.push(snackbarMessage);
    this.renderMessage(snackbarMessage);
    setTimeout(() => {
      this.removeMessage(id);
    }, duration);
  }
  renderMessage(snackbarMessage) {
    if (!this.container)
      return;
    const element = document.createElement("div");
    element.id = `snackbar-${snackbarMessage.id}`;
    element.className = `snackbar snackbar-${snackbarMessage.type}`;
    element.style.cssText = `
      background: ${this.getBackgroundColor(snackbarMessage.type)};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-weight: 500;
      max-width: 400px;
      word-wrap: break-word;
      pointer-events: auto;
      transform: translateX(-100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      border-left: 4px solid ${this.getBorderColor(snackbarMessage.type)};
    `;
    element.textContent = snackbarMessage.message;
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "\xD7";
    closeBtn.style.cssText = `
      background: none;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      margin-left: 12px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.8;
    `;
    closeBtn.onclick = () => this.removeMessage(snackbarMessage.id);
    element.appendChild(closeBtn);
    this.container.appendChild(element);
    setTimeout(() => {
      element.style.transform = "translateX(0)";
      element.style.opacity = "1";
    }, 10);
  }
  removeMessage(id) {
    const element = document.getElementById(`snackbar-${id}`);
    if (element) {
      element.style.transform = "translateX(-100%)";
      element.style.opacity = "0";
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 300);
    }
    this.messages = this.messages.filter((msg) => msg.id !== id);
  }
  getBackgroundColor(type) {
    switch (type) {
      case "success":
        return "#28a745";
      case "error":
        return "#dc3545";
      case "warning":
        return "#ffc107";
      case "info":
        return "#17a2b8";
      default:
        return "#6c757d";
    }
  }
  getBorderColor(type) {
    switch (type) {
      case "success":
        return "#1e7e34";
      case "error":
        return "#c82333";
      case "warning":
        return "#e0a800";
      case "info":
        return "#138496";
      default:
        return "#5a6268";
    }
  }
  /**
   * 프로그레스 스낵바 시작
   * @param steps 진행 단계 배열 (예: ['텍스트 추출', '이미지 추출', '벡터 그래픽 추출'])
   */
  startProgress(steps) {
    this.isProgressMode = true;
    this.progressSteps = steps.map((label, index) => ({
      label,
      status: index === 0 ? "active" : "pending"
    }));
    this.renderProgressSnackbar();
  }
  /**
   * 현재 단계를 완료하고 다음 단계로 이동
   * @param currentStep 현재 단계 인덱스 (0부터 시작)
   */
  updateProgress(currentStep) {
    if (currentStep >= 0 && currentStep < this.progressSteps.length) {
      this.progressSteps[currentStep].status = "completed";
      if (currentStep + 1 < this.progressSteps.length) {
        this.progressSteps[currentStep + 1].status = "active";
      }
      this.updateProgressSnackbar();
    }
  }
  /**
   * 프로그레스 완료
   */
  completeProgress() {
    this.progressSteps.forEach((step) => {
      if (step.status !== "error") {
        step.status = "completed";
      }
    });
    this.updateProgressSnackbar();
    setTimeout(() => {
      this.closeProgress();
      this.isProgressMode = false;
    }, 1e3);
  }
  /**
   * 프로그레스 에러 처리
   * @param stepIndex 에러가 발생한 단계
   */
  errorProgress(stepIndex) {
    if (stepIndex >= 0 && stepIndex < this.progressSteps.length) {
      this.progressSteps[stepIndex].status = "error";
      this.updateProgressSnackbar();
    }
    this.isProgressMode = false;
  }
  /**
   * 프로그레스 스낵바 닫기
   */
  closeProgress() {
    if (this.progressSnackbar) {
      this.progressSnackbar.style.transform = "translateX(-50%) translateY(100%)";
      this.progressSnackbar.style.opacity = "0";
      setTimeout(() => {
        if (this.progressSnackbar && this.progressSnackbar.parentNode) {
          this.progressSnackbar.parentNode.removeChild(this.progressSnackbar);
        }
        this.progressSnackbar = null;
        this.progressSteps = [];
        this.isProgressMode = false;
      }, 300);
    }
  }
  renderProgressSnackbar() {
    if (!this.container)
      return;
    if (this.progressSnackbar) {
      this.closeProgress();
    }
    this.progressSnackbar = document.createElement("div");
    this.progressSnackbar.className = "progress-snackbar";
    this.progressSnackbar.style.cssText = `
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      font-size: 13px;
      min-width: 350px;
      max-width: 450px;
      pointer-events: auto;
      transform: translateX(-50%) translateY(100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      position: fixed;
      bottom: 80px;
      left: 50%;
      z-index: 10000;
      border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    const header = document.createElement("div");
    header.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `;
    const title = document.createElement("div");
    title.textContent = "\u{1F4CA} \uBD84\uC11D \uC9C4\uD589 \uC911";
    title.style.cssText = `
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
    `;
    title.className = "progress-title";
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "\xD7";
    closeBtn.style.cssText = `
      background: transparent;
      border: none;
      color: white;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      padding: 0;
      width: 20px;
      height: 20px;
      line-height: 1;
      transition: transform 0.2s;
      opacity: 0.6;
    `;
    closeBtn.onmouseover = () => {
      closeBtn.style.opacity = "1";
      closeBtn.style.transform = "scale(1.2)";
    };
    closeBtn.onmouseout = () => {
      closeBtn.style.opacity = "0.6";
      closeBtn.style.transform = "scale(1)";
    };
    closeBtn.onclick = () => this.closeProgress();
    header.appendChild(title);
    header.appendChild(closeBtn);
    const stepsContainer = document.createElement("div");
    stepsContainer.className = "progress-steps";
    stepsContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 8px;
      border-radius: 4px;
    `;
    this.progressSteps.forEach((step, index) => {
      const stepElement = this.createStepElement(step, index);
      stepsContainer.appendChild(stepElement);
    });
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar-container";
    progressBarContainer.style.cssText = `
      margin-top: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      height: 4px;
      overflow: hidden;
    `;
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.cssText = `
      background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
      height: 100%;
      width: 0%;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 3px;
    `;
    progressBarContainer.appendChild(progressBar);
    this.progressSnackbar.appendChild(header);
    this.progressSnackbar.appendChild(stepsContainer);
    this.progressSnackbar.appendChild(progressBarContainer);
    this.container.appendChild(this.progressSnackbar);
    if (!document.getElementById("progress-animation-styles")) {
      const style = document.createElement("style");
      style.id = "progress-animation-styles";
      style.textContent = `
        @keyframes flipIn {
          0% {
            transform: perspective(400px) rotateX(-90deg);
            opacity: 0;
          }
          40% {
            transform: perspective(400px) rotateX(20deg);
          }
          100% {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .flip-animation {
          animation: flipIn 0.4s ease-out;
        }
      `;
      document.head.appendChild(style);
    }
    setTimeout(() => {
      if (this.progressSnackbar) {
        this.progressSnackbar.style.transform = "translateX(-50%) translateY(0)";
        this.progressSnackbar.style.opacity = "1";
      }
    }, 10);
  }
  createStepElement(step, index) {
    const stepElement = document.createElement("div");
    stepElement.className = `progress-step step-${step.status} flip-animation`;
    stepElement.id = `progress-step-${index}`;
    stepElement.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 10px;
      border-radius: 3px;
      background: ${this.getStepBackground(step.status)};
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-left: 3px solid ${this.getStepBorderColor(step.status)};
      font-family: 'Courier New', monospace;
    `;
    const icon = document.createElement("div");
    icon.className = "step-icon";
    icon.style.cssText = `
      width: 20px;
      height: 20px;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
      font-weight: bold;
      ${this.getStepIconStyle(step.status)}
    `;
    icon.innerHTML = this.getStepIcon(step.status, index);
    const label = document.createElement("div");
    label.textContent = step.label;
    label.style.cssText = `
      flex: 1;
      font-size: 12px;
      opacity: ${step.status === "pending" ? "0.5" : "1"};
      font-weight: ${step.status === "active" ? "600" : "400"};
      letter-spacing: 0.3px;
      text-transform: uppercase;
    `;
    const statusText = document.createElement("div");
    statusText.style.cssText = `
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1px;
      opacity: 0.8;
    `;
    statusText.textContent = this.getStatusText(step.status);
    stepElement.appendChild(icon);
    stepElement.appendChild(label);
    stepElement.appendChild(statusText);
    return stepElement;
  }
  getStatusText(status) {
    switch (status) {
      case "active":
        return "IN PROGRESS";
      case "completed":
        return "COMPLETED";
      case "error":
        return "FAILED";
      default:
        return "WAITING";
    }
  }
  getStepBorderColor(status) {
    switch (status) {
      case "active":
        return "#3498db";
      case "completed":
        return "#2ecc71";
      case "error":
        return "#e74c3c";
      default:
        return "transparent";
    }
  }
  getStepBackground(status) {
    switch (status) {
      case "active":
        return "rgba(52, 152, 219, 0.15)";
      case "completed":
        return "rgba(46, 204, 113, 0.15)";
      case "error":
        return "rgba(231, 76, 60, 0.15)";
      default:
        return "rgba(255, 255, 255, 0.03)";
    }
  }
  getStepIconStyle(status) {
    switch (status) {
      case "active":
        return `
          background: #3498db;
          color: white;
          animation: pulse 1.5s ease-in-out infinite;
        `;
      case "completed":
        return `
          background: #2ecc71;
          color: white;
        `;
      case "error":
        return `
          background: #e74c3c;
          color: white;
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
        `;
    }
  }
  getStepIcon(status, index) {
    switch (status) {
      case "active":
        return "\u27F3";
      case "completed":
        return "\u2713";
      case "error":
        return "\u2717";
      default:
        return `${index + 1}`;
    }
  }
  updateProgressSnackbar() {
    if (!this.progressSnackbar)
      return;
    const stepsContainer = this.progressSnackbar.querySelector(".progress-steps");
    if (stepsContainer) {
      stepsContainer.innerHTML = "";
      this.progressSteps.forEach((step, index) => {
        const stepElement = this.createStepElement(step, index);
        stepsContainer.appendChild(stepElement);
      });
    }
    const progressBar = this.progressSnackbar.querySelector(".progress-bar");
    if (progressBar) {
      const completedSteps = this.progressSteps.filter((s) => s.status === "completed").length;
      const progress = completedSteps / this.progressSteps.length * 100;
      progressBar.style.width = `${progress}%`;
    }
    const allCompleted = this.progressSteps.every((s) => s.status === "completed");
    if (allCompleted) {
      const title = this.progressSnackbar.querySelector(".progress-title");
      if (title && title.textContent?.includes("\uC9C4\uD589 \uC911")) {
        title.textContent = "\u2705 \uBD84\uC11D \uC644\uB8CC!";
      }
    }
  }
  static \u0275fac = function SnackbarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SnackbarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SnackbarService, factory: _SnackbarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SnackbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  currentThemeSubject = new BehaviorSubject("light");
  currentTheme$ = this.currentThemeSubject.asObservable();
  constructor() {
    this.initializeTheme();
  }
  initializeTheme() {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      this.setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.setTheme(prefersDark ? "dark" : "light");
    }
  }
  getCurrentTheme() {
    return this.currentThemeSubject.value;
  }
  setTheme(theme) {
    this.currentThemeSubject.next(theme);
    localStorage.setItem("app-theme", theme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    document.documentElement.setAttribute("data-theme", theme);
  }
  toggleTheme() {
    const newTheme = this.getCurrentTheme() === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  isDarkMode() {
    return this.getCurrentTheme() === "dark";
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SnackbarService,
  ThemeService
};
//# sourceMappingURL=chunk-Z6AVJA4A.js.map
