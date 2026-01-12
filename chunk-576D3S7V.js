import {
  environment
} from "./chunk-G4JOAHZY.js";
import {
  A11yModule,
  AriaDescriber,
  InteractivityChecker,
  MatCommonModule,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  _animationsDisabled
} from "./chunk-5Z7BUDXM.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-OYJIDA3L.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  HOST_TAG_NAME,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Renderer2,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  inject,
  of,
  setClassMetadata,
  tap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@angular/material/fesm2022/badge.mjs
var BADGE_CONTENT_CLASS = "mat-badge-content";
var _MatBadgeStyleLoader = class __MatBadgeStyleLoader {
  static \u0275fac = function _MatBadgeStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatBadgeStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __MatBadgeStyleLoader,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function _MatBadgeStyleLoader_Template(rf, ctx) {
    },
    styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-sys-error));color:var(--mat-badge-text-color, var(--mat-sys-on-error));font-family:var(--mat-badge-text-font, var(--mat-sys-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-sys-corner-full))}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}@media(forced-colors: active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));color:var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, 6px);min-height:var(--mat-badge-small-size-container-size, 6px);line-height:var(--mat-badge-small-size-line-height, 6px);padding:var(--mat-badge-small-size-container-padding, 0);font-size:var(--mat-badge-small-size-text-size, 0);margin:var(--mat-badge-small-size-container-offset, -6px 0)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset, -6px)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, 16px);min-height:var(--mat-badge-container-size, 16px);line-height:var(--mat-badge-line-height, 16px);padding:var(--mat-badge-container-padding, 0 4px);font-size:var(--mat-badge-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-container-offset, -12px 0)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset, -12px)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, 16px);min-height:var(--mat-badge-large-size-container-size, 16px);line-height:var(--mat-badge-large-size-line-height, 16px);padding:var(--mat-badge-large-size-container-padding, 0 4px);font-size:var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-large-size-container-offset, -12px 0)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset, -12px)}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatBadgeStyleLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-sys-error));color:var(--mat-badge-text-color, var(--mat-sys-on-error));font-family:var(--mat-badge-text-font, var(--mat-sys-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-sys-corner-full))}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}@media(forced-colors: active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));color:var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, 6px);min-height:var(--mat-badge-small-size-container-size, 6px);line-height:var(--mat-badge-small-size-line-height, 6px);padding:var(--mat-badge-small-size-container-padding, 0);font-size:var(--mat-badge-small-size-text-size, 0);margin:var(--mat-badge-small-size-container-offset, -6px 0)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset, -6px)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, 16px);min-height:var(--mat-badge-container-size, 16px);line-height:var(--mat-badge-line-height, 16px);padding:var(--mat-badge-container-padding, 0 4px);font-size:var(--mat-badge-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-container-offset, -12px 0)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset, -12px)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, 16px);min-height:var(--mat-badge-large-size-container-size, 16px);line-height:var(--mat-badge-large-size-line-height, 16px);padding:var(--mat-badge-large-size-container-padding, 0 4px);font-size:var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-large-size-container-offset, -12px 0)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset, -12px)}\n"]
    }]
  }], null, null);
})();
var MatBadge = class _MatBadge {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _ariaDescriber = inject(AriaDescriber);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _idGenerator = inject(_IdGenerator);
  /**
   * Theme color of the badge. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/badge/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color;
  }
  set color(value) {
    this._setColor(value);
    this._color = value;
  }
  _color = "primary";
  /** Whether the badge should overlap its contents or not */
  overlap = true;
  /** Whether the badge is disabled. */
  disabled;
  /**
   * Position the badge should reside.
   * Accepts any combination of 'above'|'below' and 'before'|'after'
   */
  position = "above after";
  /** The content for the badge */
  get content() {
    return this._content;
  }
  set content(newContent) {
    this._updateRenderedContent(newContent);
  }
  _content;
  /** Message used to describe the decorated element via aria-describedby */
  get description() {
    return this._description;
  }
  set description(newDescription) {
    this._updateDescription(newDescription);
  }
  _description;
  /** Size of the badge. Can be 'small', 'medium', or 'large'. */
  size = "medium";
  /** Whether the badge is hidden. */
  hidden;
  /** Visible badge element. */
  _badgeElement;
  /** Inline badge description. Used when the badge is applied to non-interactive host elements. */
  _inlineBadgeDescription;
  /** Whether the OnInit lifecycle hook has run yet */
  _isInitialized = false;
  /** InteractivityChecker to determine if the badge host is focusable. */
  _interactivityChecker = inject(InteractivityChecker);
  _document = inject(DOCUMENT);
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_MatBadgeStyleLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const nativeElement = this._elementRef.nativeElement;
      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error("matBadge must be attached to an element node.");
      }
      const tagName = inject(HOST_TAG_NAME);
      if (tagName.toLowerCase() === "mat-icon" && nativeElement.getAttribute("aria-hidden") === "true") {
        console.warn(`Detected a matBadge on an "aria-hidden" "<mat-icon>". Consider setting aria-hidden="false" in order to surface the information assistive technology.
${nativeElement.outerHTML}`);
      }
    }
  }
  /** Whether the badge is above the host or not */
  isAbove() {
    return this.position.indexOf("below") === -1;
  }
  /** Whether the badge is after the host or not */
  isAfter() {
    return this.position.indexOf("before") === -1;
  }
  /**
   * Gets the element into which the badge's content is being rendered. Undefined if the element
   * hasn't been created (e.g. if the badge doesn't have content).
   */
  getBadgeElement() {
    return this._badgeElement;
  }
  ngOnInit() {
    this._clearExistingBadges();
    if (this.content && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
      this._updateRenderedContent(this.content);
    }
    this._isInitialized = true;
  }
  ngOnDestroy() {
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this._badgeElement);
      this._inlineBadgeDescription?.remove();
    }
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
  }
  /** Gets whether the badge's host element is interactive. */
  _isHostInteractive() {
    return this._interactivityChecker.isFocusable(this._elementRef.nativeElement, {
      ignoreVisibility: true
    });
  }
  /** Creates the badge element */
  _createBadgeElement() {
    const badgeElement = this._renderer.createElement("span");
    const activeClass = "mat-badge-active";
    badgeElement.setAttribute("id", this._idGenerator.getId("mat-badge-content-"));
    badgeElement.setAttribute("aria-hidden", "true");
    badgeElement.classList.add(BADGE_CONTENT_CLASS);
    if (this._animationsDisabled) {
      badgeElement.classList.add("_mat-animation-noopable");
    }
    this._elementRef.nativeElement.appendChild(badgeElement);
    if (typeof requestAnimationFrame === "function" && !this._animationsDisabled) {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          badgeElement.classList.add(activeClass);
        });
      });
    } else {
      badgeElement.classList.add(activeClass);
    }
    return badgeElement;
  }
  /** Update the text content of the badge element in the DOM, creating the element if necessary. */
  _updateRenderedContent(newContent) {
    const newContentNormalized = `${newContent ?? ""}`.trim();
    if (this._isInitialized && newContentNormalized && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
    }
    if (this._badgeElement) {
      this._badgeElement.textContent = newContentNormalized;
    }
    this._content = newContentNormalized;
  }
  /** Updates the host element's aria description via AriaDescriber. */
  _updateDescription(newDescription) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
    if (!newDescription || this._isHostInteractive()) {
      this._removeInlineDescription();
    }
    this._description = newDescription;
    if (this._isHostInteractive()) {
      this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
    } else {
      this._updateInlineDescription();
    }
  }
  _updateInlineDescription() {
    if (!this._inlineBadgeDescription) {
      this._inlineBadgeDescription = this._document.createElement("span");
      this._inlineBadgeDescription.classList.add("cdk-visually-hidden");
    }
    this._inlineBadgeDescription.textContent = this.description;
    this._badgeElement?.appendChild(this._inlineBadgeDescription);
  }
  _removeInlineDescription() {
    this._inlineBadgeDescription?.remove();
    this._inlineBadgeDescription = void 0;
  }
  /** Adds css theme class given the color to the component host */
  _setColor(colorPalette) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-badge-${this._color}`);
    if (colorPalette) {
      classList.add(`mat-badge-${colorPalette}`);
    }
  }
  /** Clears any existing badges that might be left over from server-side rendering. */
  _clearExistingBadges() {
    const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);
    for (const badgeElement of Array.from(badges)) {
      if (badgeElement !== this._badgeElement) {
        badgeElement.remove();
      }
    }
  }
  static \u0275fac = function MatBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBadge)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatBadge,
    selectors: [["", "matBadge", ""]],
    hostAttrs: [1, "mat-badge"],
    hostVars: 20,
    hostBindings: function MatBadge_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
      }
    },
    inputs: {
      color: [0, "matBadgeColor", "color"],
      overlap: [2, "matBadgeOverlap", "overlap", booleanAttribute],
      disabled: [2, "matBadgeDisabled", "disabled", booleanAttribute],
      position: [0, "matBadgePosition", "position"],
      content: [0, "matBadge", "content"],
      description: [0, "matBadgeDescription", "description"],
      size: [0, "matBadgeSize", "size"],
      hidden: [2, "matBadgeHidden", "hidden", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadge, [{
    type: Directive,
    args: [{
      selector: "[matBadge]",
      host: {
        "class": "mat-badge",
        "[class.mat-badge-overlap]": "overlap",
        "[class.mat-badge-above]": "isAbove()",
        "[class.mat-badge-below]": "!isAbove()",
        "[class.mat-badge-before]": "!isAfter()",
        "[class.mat-badge-after]": "isAfter()",
        "[class.mat-badge-small]": 'size === "small"',
        "[class.mat-badge-medium]": 'size === "medium"',
        "[class.mat-badge-large]": 'size === "large"',
        "[class.mat-badge-hidden]": "hidden || !content",
        "[class.mat-badge-disabled]": "disabled"
      }
    }]
  }], () => [], {
    color: [{
      type: Input,
      args: ["matBadgeColor"]
    }],
    overlap: [{
      type: Input,
      args: [{
        alias: "matBadgeOverlap",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matBadgeDisabled",
        transform: booleanAttribute
      }]
    }],
    position: [{
      type: Input,
      args: ["matBadgePosition"]
    }],
    content: [{
      type: Input,
      args: ["matBadge"]
    }],
    description: [{
      type: Input,
      args: ["matBadgeDescription"]
    }],
    size: [{
      type: Input,
      args: ["matBadgeSize"]
    }],
    hidden: [{
      type: Input,
      args: [{
        alias: "matBadgeHidden",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatBadgeModule = class _MatBadgeModule {
  static \u0275fac = function MatBadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatBadgeModule,
    imports: [A11yModule, MatCommonModule, MatBadge, _MatBadgeStyleLoader],
    exports: [MatBadge, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [A11yModule, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadgeModule, [{
    type: NgModule,
    args: [{
      // Note: we _shouldn't_ have to import `_MatBadgeStyleLoader`,
      // but it seems to be necessary for tests.
      imports: [A11yModule, MatCommonModule, MatBadge, _MatBadgeStyleLoader],
      exports: [MatBadge, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/modules/chat-talk/shared/interfaces/chat-talk.interface.ts
var RoomStatus;
(function(RoomStatus2) {
  RoomStatus2["BOT_ACTIVE"] = "bot_active";
  RoomStatus2["WAITING_AGENT"] = "waiting_agent";
  RoomStatus2["AGENT_ACTIVE"] = "agent_active";
  RoomStatus2["RESOLVED"] = "resolved";
  RoomStatus2["CLOSED"] = "closed";
})(RoomStatus || (RoomStatus = {}));
var SenderType;
(function(SenderType2) {
  SenderType2["CLIENT"] = "client";
  SenderType2["AGENT"] = "agent";
  SenderType2["BOT"] = "bot";
  SenderType2["SYSTEM"] = "system";
})(SenderType || (SenderType = {}));
var ClientDataType;
(function(ClientDataType2) {
  ClientDataType2["NAME"] = "name";
  ClientDataType2["EMAIL"] = "email";
  ClientDataType2["PHONE"] = "phone";
  ClientDataType2["ADDRESS"] = "address";
})(ClientDataType || (ClientDataType = {}));

// src/app/modules/chat-talk/shared/services/chat-talk-api.service.ts
var ChatTalkApiService = class _ChatTalkApiService {
  http;
  baseUrl = environment.channelTalkApiUrl;
  // ✅ 수정: channelTalkApiUrl 사용
  constructor(http) {
    this.http = http;
  }
  // ============ 클라이언트(고객) API ============
  /**
   * 세션 검증
   */
  validateSession(sessionId, storeId) {
    return this.http.post(`${this.baseUrl}/validate-session`, {
      sessionId,
      storeId
    });
  }
  /**
   * 고객 식별 (fingerprint 기반) - 기존 API (deprecated)
   */
  identifyCustomer(fingerprint, storeId, preProvidedToken) {
    return this.http.post(`${this.baseUrl}/identify-customer`, {
      fingerprint,
      storeId,
      preProvidedToken
    });
  }
  /**
   * 고객 식별 (객체 형식) - 백엔드 DTO 스펙에 맞춤
   */
  identifyCustomerWithObject(identifyDto) {
    return this.http.post(`${this.baseUrl}/identify-customer`, identifyDto).pipe(tap((response) => console.log("\u{1F4E1} \uACE0\uAC1D \uC2DD\uBCC4 \uC644\uB8CC:", response)), catchError((err) => {
      return of({ client: null, rooms: [] });
    }));
  }
  // ============ Store/Organization API ============
  /**
   * Store 정보 조회
   */
  getStore(storeId) {
    return this.http.get(`${environment.apiUrl}/stores/${storeId}`);
  }
  // ============ 채팅방 API ============
  /**
   * 클라이언트의 채팅방 목록 조회
   */
  getClientRooms(clientId) {
    return this.http.get(`${this.baseUrl}/rooms/${clientId}`).pipe(tap((rooms) => console.log("\u{1F4E1} \uCC44\uD305\uBC29 \uBAA9\uB85D \uC870\uD68C:", rooms)), catchError((err) => {
      return of([]);
    }));
  }
  /**
   * 특정 채팅방 정보 조회
   */
  getRoom(roomId) {
    return this.http.get(`${this.baseUrl}/room/${roomId}`).pipe(tap((room) => console.log("\u{1F4E1} \uCC44\uD305\uBC29 \uC815\uBCF4 \uC870\uD68C:", room)), catchError((err) => {
      return of(null);
    }));
  }
  /**
   * 새 채팅방 생성 (기존 DTO)
   */
  createRoom(dto) {
    return this.http.post(`${this.baseUrl}/rooms`, dto).pipe(tap((room) => console.log("\u{1F4E1} \uCC44\uD305\uBC29 \uC0DD\uC131 \uC644\uB8CC:", room)), catchError((err) => {
      return of(null);
    }));
  }
  /**
   * 새 채팅방 생성 (백엔드 DTO 스펙에 맞춤 - organizationId 사용)
   */
  createRoomWithOrganization(dto) {
    return this.http.post(`${this.baseUrl}/rooms`, dto).pipe(tap((room) => {
      console.log("\u{1F4E1} \uC751\uB2F5 \uAD6C\uC870:", JSON.stringify(room, null, 2));
    }), catchError((err) => {
      return of(null);
    }));
  }
  /**
   * 채팅방 상태 변경
   */
  updateRoomStatus(roomId, status) {
    return this.http.patch(`${this.baseUrl}/rooms/${roomId}/status`, {
      status
    });
  }
  /**
   * 대기 중인 채팅방 모두 삭제
   */
  deleteWaitingRooms(organizationId) {
    return this.http.delete(`${this.baseUrl}/rooms/waiting/${organizationId}`).pipe(tap((result) => console.log("\u{1F4E1} \uB300\uAE30 \uC911\uC778 \uCC44\uD305\uBC29 \uC0AD\uC81C \uC644\uB8CC:", result)), catchError((err) => {
      throw err;
    }));
  }
  // ============ 메시지 API ============
  /**
   * 채팅방의 메시지 목록 조회
   */
  getRoomMessages(roomId, limit, offset) {
    let params = new HttpParams();
    if (limit)
      params = params.set("limit", limit.toString());
    if (offset)
      params = params.set("offset", offset.toString());
    return this.http.get(`${this.baseUrl}/messages/room/${roomId}`, { params }).pipe(tap((messages) => console.log("\u{1F4E1} \uBA54\uC2DC\uC9C0 \uBAA9\uB85D \uC870\uD68C:", messages)), catchError((err) => {
      return of([]);
    }));
  }
  /**
   * 메시지 전송
   */
  sendMessage(dto) {
    return this.http.post(`${this.baseUrl}/messages`, dto).pipe(tap((message) => console.log("\u{1F4E1} \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uC644\uB8CC:", message)), catchError((err) => {
      return of(null);
    }));
  }
  /**
   * 메시지 읽음 처리
   */
  markAsRead(roomId, userId, userType) {
    return this.http.post(`${this.baseUrl}/messages/mark-as-read`, {
      roomId,
      userId,
      userType
    });
  }
  // ============ 폼 API ============
  /**
   * 메시지 폼 응답 동기화
   */
  syncMessageForms(roomId, messageId, forms) {
    return this.http.post(`${this.baseUrl}/messages/${messageId}/forms`, {
      roomId,
      forms
    });
  }
  // ============ 클라이언트 정보 API ============
  /**
   * 클라이언트 정보 업데이트
   */
  updateClient(clientId, updates) {
    return this.http.patch(`${this.baseUrl}/clients/${clientId}`, updates);
  }
  /**
   * 클라이언트 정보 일괄 업데이트 (폼 응답 자동 반영용)
   */
  updateClientData(roomId, clientId, data) {
    return this.http.patch(`${this.baseUrl}/clients/${clientId}/data`, __spreadValues({
      roomId
    }, data));
  }
  // ============ 상담원 전환 API ============
  /**
   * 상담원 연결 요청
   */
  transferToAgent(roomId) {
    return this.http.post(`${this.baseUrl}/transfer-to-human`, { roomId });
  }
  // ============ 상담원 API (Agent 전용) ============
  /**
   * 상담원의 채팅방 목록 조회
   * 백엔드: GET /channeltalk/agent/rooms/organization/:organizationId
   */
  getAgentRooms(organizationId, status) {
    let params = new HttpParams();
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.baseUrl}/agent/rooms/organization/${organizationId}`, { params });
  }
  /**
   * 상담원 배정 (Socket을 통해 처리하므로 현재 미사용)
   */
  assignAgent(roomId, agentId) {
    return this.http.patch(`${this.baseUrl}/rooms/${roomId}/assign`, {
      agentId
    });
  }
  /**
   * 대기중인 채팅방 목록
   */
  getWaitingRooms(storeId) {
    return this.http.get(`${this.baseUrl}/rooms/waiting`, {
      params: new HttpParams().set("storeId", storeId)
    });
  }
  static \u0275fac = function ChatTalkApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatTalkApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatTalkApiService, factory: _ChatTalkApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatTalkApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MatBadge,
  MatBadgeModule,
  RoomStatus,
  SenderType,
  ChatTalkApiService
};
//# sourceMappingURL=chunk-576D3S7V.js.map
