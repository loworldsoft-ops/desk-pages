import {
  ChatConsultationToggleService
} from "./chunk-FFJ4GMB5.js";
import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import {
  ChatTalkSocketService
} from "./chunk-G4JOAHZY.js";
import {
  SnackbarService,
  ThemeService
} from "./chunk-Z6AVJA4A.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-EWZCM5ON.js";
import {
  CdkScrollableModule,
  Directionality,
  MatButton,
  MatButtonModule,
  ScrollDispatcher,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _getEventTarget,
  _getShadowRoot,
  coerceArray,
  coerceElement,
  coerceNumberProperty,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-5Z7BUDXM.js";
import {
  NavigationEnd,
  Router
} from "./chunk-BE5X2S7S.js";
import {
  DomSanitizer
} from "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RangeValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-X67QRSHQ.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  DecimalPipe,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Output,
  Pipe,
  RendererFactory2,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  booleanAttribute,
  computed,
  filter,
  inject,
  interval,
  map,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  /** Cached positions of the scrollable parent elements. */
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  /** Reference to the view of the preview element. */
  _previewEmbeddedView;
  /** Reference to the preview element. */
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      "pointer-events": "none",
      // If the preview has a margin, it can throw off our positioning so we reset it. The reset
      // value for `margin-right` needs to be `auto` when opened as a popover, because our
      // positioning is always top/left based, but native popover seems to position itself
      // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
      // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var PLACEHOLDER_CLASS = "cdk-drag-placeholder";
var dragImportantProperties = /* @__PURE__ */ new Set([
  // Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
  "position"
]);
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  /** Element displayed next to the user's pointer while the element is dragged. */
  _preview;
  /** Container into which to insert the preview. */
  _previewContainer;
  /** Reference to the view of the placeholder element. */
  _placeholderRef;
  /** Element that is rendered instead of the draggable item while it is being sorted. */
  _placeholder;
  /** Coordinates within the element at which the user picked up the element. */
  _pickupPositionInElement;
  /** Coordinates on the page at which the user picked up the element. */
  _pickupPositionOnPage;
  /**
   * Marker node used to save the place in the DOM where the element was
   * picked up so that it can be restored at the end of the drag sequence.
   */
  _marker;
  /**
   * Element indicating the position from which the item was picked up initially.
   */
  _anchor = null;
  /**
   * CSS `transform` applied to the element when it isn't being dragged. We need a
   * passive transform in order for the dragged element to retain its new position
   * after the user has stopped dragging and because we need to know the relative
   * position in case they start dragging again. This corresponds to `element.style.transform`.
   */
  _passiveTransform = {
    x: 0,
    y: 0
  };
  /** CSS `transform` that is applied to the element while it's being dragged. */
  _activeTransform = {
    x: 0,
    y: 0
  };
  /** Inline `transform` value that the element had before the first dragging sequence. */
  _initialTransform;
  /**
   * Whether the dragging sequence has been started. Doesn't
   * necessarily mean that the element has been moved.
   */
  _hasStartedDragging = signal(false, ...ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []);
  /** Whether the element has moved since the user started dragging it. */
  _hasMoved;
  /** Drop container in which the DragRef resided when dragging began. */
  _initialContainer;
  /** Index at which the item started in its initial container. */
  _initialIndex;
  /** Cached positions of scrollable parent elements. */
  _parentPositions;
  /** Emits when the item is being moved. */
  _moveEvents = new Subject();
  /** Keeps track of the direction in which the user is dragging along each axis. */
  _pointerDirectionDelta;
  /** Pointer position at which the last change in the delta occurred. */
  _pointerPositionAtLastDirectionChange;
  /** Position of the pointer at the last pointer event. */
  _lastKnownPointerPosition;
  /**
   * Root DOM node of the drag instance. This is the element that will
   * be moved around as the user is dragging.
   */
  _rootElement;
  /**
   * Nearest ancestor SVG, relative to which coordinates are calculated if dragging SVGElement
   */
  _ownerSVGElement;
  /**
   * Inline style value of `-webkit-tap-highlight-color` at the time the
   * dragging was started. Used to restore the value once we're done dragging.
   */
  _rootElementTapHighlight;
  /** Subscription to pointer movement events. */
  _pointerMoveSubscription = Subscription.EMPTY;
  /** Subscription to the event that is dispatched when the user lifts their pointer. */
  _pointerUpSubscription = Subscription.EMPTY;
  /** Subscription to the viewport being scrolled. */
  _scrollSubscription = Subscription.EMPTY;
  /** Subscription to the viewport being resized. */
  _resizeSubscription = Subscription.EMPTY;
  /**
   * Time at which the last touch event occurred. Used to avoid firing the same
   * events multiple times on touch devices where the browser will fire a fake
   * mouse event for each touch event, after a certain time.
   */
  _lastTouchEventTime;
  /** Time at which the last dragging sequence was started. */
  _dragStartTime;
  /** Cached reference to the boundary element. */
  _boundaryElement = null;
  /** Whether the native dragging interactions have been enabled on the root element. */
  _nativeInteractionsEnabled = true;
  /** Client rect of the root element when the dragging sequence has started. */
  _initialDomRect;
  /** Cached dimensions of the preview element. Should be read via `_getPreviewRect`. */
  _previewRect;
  /** Cached dimensions of the boundary element. */
  _boundaryRect;
  /** Element that will be used as a template to create the draggable item's preview. */
  _previewTemplate;
  /** Template for placeholder element rendered to show where a draggable would be dropped. */
  _placeholderTemplate;
  /** Elements that can be used to drag the draggable item. */
  _handles = [];
  /** Registered handles that are currently disabled. */
  _disabledHandles = /* @__PURE__ */ new Set();
  /** Droppable container that the draggable is a part of. */
  _dropContainer;
  /** Layout direction of the item. */
  _direction = "ltr";
  /** Ref that the current drag item is nested in. */
  _parentDragRef;
  /**
   * Cached shadow root that the element is placed in. `null` means that the element isn't in
   * the shadow DOM and `undefined` means that it hasn't been resolved yet. Should be read via
   * `_getShadowRoot`, not directly.
   */
  _cachedShadowRoot;
  /** Axis along which dragging is locked. */
  lockAxis = null;
  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay = 0;
  /** Class to be added to the preview element. */
  previewClass;
  /**
   * If the parent of the dragged element has a `scale` transform, it can throw off the
   * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
   */
  scale = 1;
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  /** Emits as the drag sequence is being prepared. */
  beforeStarted = new Subject();
  /** Emits when the user starts dragging the item. */
  started = new Subject();
  /** Emits when the user has released a drag item, before any animations have started. */
  released = new Subject();
  /** Emits when the user stops dragging an item in the container. */
  ended = new Subject();
  /** Emits when the user has moved the item into a new container. */
  entered = new Subject();
  /** Emits when the user removes the item its container by dragging it into another container. */
  exited = new Subject();
  /** Emits when the user drops the item inside a container. */
  dropped = new Subject();
  /**
   * Emits as the user is dragging the item. Use with caution,
   * because this event will fire for every pixel that the user has dragged.
   */
  moved = this._moveEvents;
  /** Arbitrary data that can be attached to the drag item. */
  data;
  /**
   * Function that can be used to customize the logic of how the position of the drag item
   * is limited while it's being dragged. Gets called with a point containing the current position
   * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
   * Should return a point describing where the item should be rendered.
   */
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions), renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions), renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /** Resets drag item to end of boundary element. */
  resetToBoundary() {
    if (
      // can be null if the drag item was never dragged.
      this._boundaryElement && this._rootElement && // check if we are overflowing off our boundary element
      isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())
    ) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX, y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  /** Handler for the `mousedown`/`touchstart` events. */
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions$1);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-marker" : "");
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(
          this,
          x,
          y,
          // If we're re-entering the initial container and sorting is disabled,
          // put item the into its starting index to begin with.
          newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : void 0
        );
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? (
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      }
    ) : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Handles a native `dragstart` event. */
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  /** Inserts the anchor element, if it's valid. */
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add("cdk-drag-anchor");
      anchor.style.transform = "";
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        coerceElement(exitContainer.element).appendChild(anchor);
      }
    }
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  /** Root element container of the drop list. */
  _element;
  /** Function used to determine if an item can be sorted into a specific index. */
  _sortPredicate;
  /** Cache of the dimensions of all the items inside the container. */
  _itemPositions = [];
  /**
   * Draggable items that are currently active inside the container. Includes the items
   * that were there at the start of the sequence, as well as any items that have been dragged
   * in, but haven't been dropped yet.
   */
  _activeDraggables;
  /** Direction in which the list is oriented. */
  orientation = "vertical";
  /** Layout direction of the drop list. */
  direction;
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Keeps track of the item that was last swapped with the dragged item, as well as what direction
   * the pointer was moving in when the swap occurred and whether the user's pointer continued to
   * overlap with the swapped item after the swapping occurred.
   */
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? (
      // We use the coordinates of where the item entered the drop
      // zone to figure out at which index it should be inserted.
      this._getItemIndexFromPointerPosition(item, pointerX, pointerY)
    ) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex((currentItem) => currentItem.drag === item);
  }
  /** Gets the item at a specific index. */
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? (
        // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right)
      ) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  /** Root element container of the drop list. */
  _element;
  /** Function used to determine if an item can be sorted into a specific index. */
  _sortPredicate;
  /** Lazily-resolved root node containing the list. Use `_getRootNode` to read this. */
  _rootNode;
  /**
   * Draggable items that are currently active inside the container. Includes the items
   * that were there at the start of the sequence, as well as any items that have been dragged
   * in, but haven't been dropped yet.
   */
  _activeItems;
  /**
   * Keeps track of the item that was last swapped with the dragged item, as well as what direction
   * the pointer was moving in when the swap occurred and whether the user's pointer continued to
   * overlap with the swapped item after the swapping occurred.
   */
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  /**
   * Keeps track of the relationship between a node and its next sibling. This information
   * is used to restore the DOM to the order it was in before dragging started.
   */
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeItems = items.slice();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  /** Gets the item at a specific index. */
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  /** Lazily resolves the list's root node. */
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  /**
   * Finds the index of the item that's closest to the item being dragged.
   * @param item Item being dragged.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  /** Element that the drop list is attached to. */
  element;
  /** Whether starting a dragging sequence from this container is disabled. */
  disabled = false;
  /** Whether sorting items within the list is disabled. */
  sortingDisabled = false;
  /** Locks the position of the draggable elements inside the container along the specified axis. */
  lockAxis = null;
  /**
   * Whether auto-scrolling the view when the user
   * moves their pointer close to the edges is disabled.
   */
  autoScrollDisabled = false;
  /** Number of pixels to scroll for each frame when auto-scrolling an element. */
  autoScrollStep = 2;
  /**
   * Whether the items in the list should leave an anchor node when leaving the initial container.
   */
  hasAnchor = false;
  /**
   * Function that is used to determine whether an item
   * is allowed to be moved into a drop container.
   */
  enterPredicate = () => true;
  /** Function that is used to determine whether an item can be sorted into a particular index. */
  sortPredicate = () => true;
  /** Emits right before dragging has started. */
  beforeStarted = new Subject();
  /**
   * Emits when the user has moved a new drag item into this container.
   */
  entered = new Subject();
  /**
   * Emits when the user removes an item from the container
   * by dragging it into another container.
   */
  exited = new Subject();
  /** Emits when the user drops an item inside the container. */
  dropped = new Subject();
  /** Emits as the user is swapping items while actively dragging. */
  sorted = new Subject();
  /** Emits when a dragging sequence is started in a list connected to the current one. */
  receivingStarted = new Subject();
  /** Emits when a dragging sequence is stopped from a list connected to the current one. */
  receivingStopped = new Subject();
  /** Arbitrary data that can be attached to the drop list. */
  data;
  /** Element that is the direct parent of the drag items. */
  _container;
  /** Whether an item in the list is being dragged. */
  _isDragging = false;
  /** Keeps track of the positions of any parent scrollable elements. */
  _parentPositions;
  /** Strategy being used to sort items within the list. */
  _sortStrategy;
  /** Cached `DOMRect` of the drop list. */
  _domRect;
  /** Draggable items in the container. */
  _draggables = [];
  /** Drop lists that are connected to the current one. */
  _siblings = [];
  /** Connected siblings that currently have a dragged item. */
  _activeSiblings = /* @__PURE__ */ new Set();
  /** Subscription to the window being scrolled. */
  _viewportScrollSubscription = Subscription.EMPTY;
  /** Vertical direction in which the list is currently scrolling. */
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  /** Horizontal direction in which the list is currently scrolling. */
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  /** Node that is being auto-scrolled. */
  _scrollNode;
  /** Used to signal to the current auto-scroll sequence when to stop. */
  _stopScrollTimers = new Subject();
  /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
  _cachedShadowRoot = null;
  /** Reference to the document. */
  _document;
  /** Elements that can be scrolled while the user is dragging. */
  _scrollableElements = [];
  /** Initial value for the element's `scroll-snap-type` style. */
  _initialScrollSnap;
  /** Direction of the list's layout. */
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /**
   * Configures the drop list so that a different element is used as the container for the
   * dragged items. This is useful for the cases when one might not have control over the
   * full DOM that sets up the dragging.
   * Note that the alternate container needs to be a descendant of the drop list.
   * @param container New element container to be assigned.
   */
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Gets the item at a specific index.
   * @param index Index at which to retrieve the item.
   */
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && // Prevent the check from running on apps not using an alternate container. Ideally we
    // would always run it, but introducing it at this stage would be a breaking change.
    this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /** Starts the interval that'll auto-scroll the element. */
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  _scroll = new Subject();
  /** Registered drop container instances. */
  _dropInstances = /* @__PURE__ */ new Set();
  /** Registered drag item instances. */
  _dragInstances = /* @__PURE__ */ new Set();
  /** Drag item instances that are currently being dragged. */
  _activeDragInstances = signal([], ...ngDevMode ? [{
    debugName: "_activeDragInstances"
  }] : []);
  /** Keeps track of the event listeners that we've bound to the `document`. */
  _globalListeners;
  /**
   * Predicate function to check if an item is being dragged.  Moved out into a property,
   * because it'll be called a lot and we don't want to create a new function every time.
   */
  _draggingPredicate = (item) => item.isDragging();
  /**
   * Map tracking DOM nodes and their corresponding drag directives. Note that this is different
   * from looking through the `_dragInstances` and getting their root node, because the root node
   * isn't necessarily the node that the directive is set on.
   */
  _domNodesToDirectives = null;
  /**
   * Emits the `touchmove` or `mousemove` events that are dispatched
   * while the user is dragging a drag item instance.
   */
  pointerMove = new Subject();
  /**
   * Emits the `touchend` or `mouseup` events that are dispatched
   * while the user is dragging a drag item instance.
   */
  pointerUp = new Subject();
  constructor() {
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        ["scroll", (e) => this._scroll.next(e), capturingEventOptions],
        // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions]
      ];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this._scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  /**
   * Tracks the DOM node which has a draggable directive.
   * @param node Node to track.
   * @param dragRef Drag directive set on the node.
   */
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  /**
   * Stops tracking a draggable directive node.
   * @param node Node to stop tracking.
   */
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  /**
   * Gets the drag directive corresponding to a specific DOM node, if any.
   * @param node Node for which to do the lookup.
   */
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /**
   * Event listener that will prevent the default browser action while the user is dragging.
   * @param event Event whose default action should be prevented.
   */
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  /** Event listener for `touchmove` that is bound even if no dragging is happening. */
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
var DragDrop = class _DragDrop {
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _viewportRuler = inject(ViewportRuler);
  _dragDropRegistry = inject(DragDropRegistry);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  constructor() {
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry, this._renderer);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  /** Emits when the state of the handle has changed. */
  _stateChanges = new Subject();
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate;
  _placeholderTemplate;
  /** Reference to the underlying drag instance. */
  _dragRef;
  /** Arbitrary data to attach to this drag instance. */
  data;
  /** Locks the position of the dragged element along the specified axis. */
  lockAxis = null;
  /**
   * Selector that will be used to determine the root draggable element, starting from
   * the `cdkDrag` element and going up the DOM. Passing an alternate root element is useful
   * when trying to enable dragging on an element that you might not have access to.
   */
  rootElementSelector;
  /**
   * Node or selector that will be used to determine the element to which the draggable's
   * position will be constrained. If a string is passed in, it'll be used as a selector that
   * will be matched starting from the element's parent and going up the DOM until a match
   * has been found.
   */
  boundaryElement;
  /**
   * Amount of milliseconds to wait after the user has put their
   * pointer down before starting to drag the element.
   */
  dragStartDelay;
  /**
   * Sets the position of a `CdkDrag` that is outside of a drop container.
   * Can be used to restore the element's position for a returning user.
   */
  freeDragPosition;
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled;
  /**
   * Function that can be used to customize the logic of how the position of the drag item
   * is limited while it's being dragged. Gets called with a point containing the current position
   * of the user's pointer on the page, a reference to the item being dragged and its dimensions.
   * Should return a point describing where the item should be rendered.
   */
  constrainPosition;
  /** Class to be added to the preview element. */
  previewClass;
  /**
   * Configures the place into which the preview of the item will be inserted. Can be configured
   * globally through `CDK_DROP_LIST`. Possible values:
   * - `global` - Preview will be inserted at the bottom of the `<body>`. The advantage is that
   * you don't have to worry about `overflow: hidden` or `z-index`, but the item won't retain
   * its inherited styles.
   * - `parent` - Preview will be inserted into the parent of the drag item. The advantage is that
   * inherited styles will be preserved, but it may be clipped by `overflow: hidden` or not be
   * visible due to `z-index`. Furthermore, the preview is going to have an effect over selectors
   * like `:nth-child` and some flexbox configurations.
   * - `ElementRef<HTMLElement> | HTMLElement` - Preview will be inserted into a specific element.
   * Same advantages and disadvantages as `parent`.
   */
  previewContainer;
  /**
   * If the parent of the dragged element has a `scale` transform, it can throw off the
   * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
   */
  scale = 1;
  /** Emits when the user starts dragging the item. */
  started = new EventEmitter();
  /** Emits when the user has released a drag item, before any animations have started. */
  released = new EventEmitter();
  /** Emits when the user stops dragging an item in the container. */
  ended = new EventEmitter();
  /** Emits when the user has moved the item into a new container. */
  entered = new EventEmitter();
  /** Emits when the user removes the item its container by dragging it into another container. */
  exited = new EventEmitter();
  /** Emits when the user drops the item inside a container. */
  dropped = new EventEmitter();
  /**
   * Emits as the user is dragging the item. Use with caution,
   * because this event will fire for every pixel that the user has dragged.
   */
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const dragDrop = inject(DragDrop);
    this._dragRef = dragDrop.createDrag(this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /** Resets drag item to end of boundary element. */
  resetToBoundary() {
    this._dragRef.resetToBoundary();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : (
        // Comment tag doesn't have closest method, so use parent's one.
        element.parentElement?.closest(this.rootElementSelector)
      );
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    this.lockAxis = lockAxis || null;
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    this._handles.pipe(
      // Sync the new handles with the DragRef.
      tap((handles) => {
        const handleElements = handles.map((handle) => handle.element);
        if (this._selfHandle && this.rootElementSelector) {
          handleElements.push(this.element);
        }
        this._dragRef.withHandles(handleElements);
      }),
      // Listen if the state of any of the handles changes.
      switchMap((handles) => {
        return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
      }),
      takeUntil(this._destroyed)
    ).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  /** Drop lists registered inside the group. */
  _items = /* @__PURE__ */ new Set();
  /** Whether starting a dragging sequence from inside this group is disabled. */
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  /** Refs that have been synced with the drop ref most recently. */
  _latestSortedRefs;
  /** Emits when the list has been destroyed. */
  _destroyed = new Subject();
  /** Whether the element's scrollable parents have been resolved. */
  _scrollableParentsResolved;
  /** Keeps track of the drop lists that are currently on the page. */
  static _dropLists = [];
  /** Reference to the underlying drop list instance. */
  _dropListRef;
  /**
   * Other draggable containers that this container is connected to and into which the
   * container's items can be transferred. Can either be references to other drop containers,
   * or their unique IDs.
   */
  connectedTo = [];
  /** Arbitrary data to attach to this container. */
  data;
  /** Direction in which the list is oriented. */
  orientation;
  /**
   * Unique ID for the drop zone. Can be used as a reference
   * in the `connectedTo` of another `CdkDropList`.
   */
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  /** Locks the position of the draggable elements inside the container along the specified axis. */
  lockAxis = null;
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled;
  /** Whether sorting within this drop list is disabled. */
  sortingDisabled;
  /**
   * Function that is used to determine whether an item
   * is allowed to be moved into a drop container.
   */
  enterPredicate = () => true;
  /** Functions that is used to determine whether an item can be sorted into a particular index. */
  sortPredicate = () => true;
  /** Whether to auto-scroll the view when the user moves their pointer close to the edges. */
  autoScrollDisabled;
  /** Number of pixels to scroll for each frame when auto-scrolling an element. */
  autoScrollStep;
  /**
   * Selector that will be used to resolve an alternate element container for the drop list.
   * Passing an alternate container is useful for the cases where one might not have control
   * over the parent node of the draggable items within the list (e.g. due to content projection).
   * This allows for usages like:
   *
   * ```
   * <div cdkDropList cdkDropListElementContainer=".inner">
   *   <div class="inner">
   *     <div cdkDrag></div>
   *   </div>
   * </div>
   * ```
   */
  elementContainerSelector;
  /**
   * By default when an item leaves its initial container, its placeholder will be transferred
   * to the new container. If that's not desirable for your use case, you can enable this option
   * which will clone the placeholder and leave it inside the original container. If the item is
   * returned to the initial container, the anchor element will be removed automatically.
   *
   * The cloned placeholder can be styled by targeting the `cdk-drag-anchor` class.
   *
   * This option is useful in combination with `cdkDropListSortingDisabled` to implement copying
   * behavior in a drop list.
   */
  hasAnchor;
  /** Emits when the user drops an item inside the container. */
  dropped = new EventEmitter();
  /**
   * Emits when the user has moved a new drag item into this container.
   */
  entered = new EventEmitter();
  /**
   * Emits when the user removes an item from the container
   * by dragging it into another container.
   */
  exited = new EventEmitter();
  /** Emits as the user is swapping items while actively dragging. */
  sorted = new EventEmitter();
  /**
   * Keeps track of the items that are registered with this container. Historically we used to
   * do this with a `ContentChildren` query, however queries don't handle transplanted views very
   * well which means that we can't handle cases like dragging the headers of a `mat-table`
   * correctly. What we do instead is to have the items register themselves with the container
   * and then we sort them based on their position in the DOM.
   */
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const dragDrop = inject(DragDrop);
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = dragDrop.createDropList(this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    item._dragRef._withDropContainer(this._dropListRef);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.hasAnchor = this.hasAnchor;
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    this.lockAxis = lockAxis || null;
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
      hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", booleanAttribute]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      },
      {
        provide: CDK_DROP_LIST,
        useExisting: _CdkDropList
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [
        // Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CDK_DROP_LIST_GROUP,
          useValue: void 0
        },
        {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }
      ],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    hasAnchor: [{
      type: Input,
      args: [{
        alias: "cdkDropListHasAnchor",
        transform: booleanAttribute
      }]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  /** Context data to be added to the preview template instance. */
  data;
  /** Whether the preview should preserve the same size as the item that is being dragged. */
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  /** Context data to be added to the placeholder template instance. */
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  isLoggedInSubject = new BehaviorSubject(false);
  isGuestModeSubject = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  isGuestMode$ = this.isGuestModeSubject.asObservable();
  constructor() {
    const savedLoginState = localStorage.getItem("isLoggedIn");
    const savedGuestMode = localStorage.getItem("guestMode");
    if (savedLoginState === "true") {
      this.isLoggedInSubject.next(true);
    } else if (savedGuestMode === "true") {
      this.isGuestModeSubject.next(true);
    }
  }
  get isLoggedIn() {
    return this.isLoggedInSubject.value || this.isGuestModeSubject.value;
  }
  login() {
    this.isLoggedInSubject.next(true);
    this.isGuestModeSubject.next(false);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.removeItem("guestMode");
  }
  socialLogin(provider) {
    return __async(this, null, function* () {
      try {
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
        this.isLoggedInSubject.next(true);
        this.isGuestModeSubject.next(false);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginProvider", provider);
        localStorage.removeItem("guestMode");
        return true;
      } catch (error) {
        return false;
      }
    });
  }
  setGuestMode(isGuest) {
    if (isGuest) {
      this.isGuestModeSubject.next(true);
      this.isLoggedInSubject.next(false);
      localStorage.setItem("guestMode", "true");
      localStorage.removeItem("isLoggedIn");
    } else {
      this.isGuestModeSubject.next(false);
      localStorage.removeItem("guestMode");
    }
  }
  isGuest() {
    return this.isGuestModeSubject.value;
  }
  getLoginProvider() {
    return localStorage.getItem("loginProvider");
  }
  logout() {
    this.isLoggedInSubject.next(false);
    this.isGuestModeSubject.next(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("guestMode");
    localStorage.removeItem("loginProvider");
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/pipes/markdown.pipe.ts
var MarkdownPipe = class _MarkdownPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value)
      return "";
    let html = value;
    const choiceBlocks = [];
    let choiceIndex = 0;
    html = html.replace(/\[battle\](.*?)\[\/battle\]/g, (match, text) => {
      const placeholder = `\u25C6\u25C6\u25C6BATTLE${choiceIndex}\u25C6\u25C6\u25C6`;
      const battleId = `battle-area-${choiceIndex}`;
      choiceBlocks[choiceIndex] = `<div class="battle-container" id="${battleId}"><div class="battle-trigger-button" data-battle-type="select" data-battle-id="${battleId}"><span class="battle-icon">\u2694\uFE0F</span><span class="battle-text">${text || "\uC804\uD22C \uC2DC\uC791"}</span></div></div>`;
      choiceIndex++;
      return placeholder;
    });
    html = html.replace(/\[battle:([^:]+):([^\]]+)\](.*?)\[\/battle\]/g, (match, char1Id, char2Id, text) => {
      const placeholder = `\u25C6\u25C6\u25C6BATTLE${choiceIndex}\u25C6\u25C6\u25C6`;
      const battleId = `battle-area-${choiceIndex}`;
      choiceBlocks[choiceIndex] = `<div class="battle-container" id="${battleId}"><div class="battle-trigger-button" data-battle-type="direct" data-char1="${char1Id}" data-char2="${char2Id}" data-battle-id="${battleId}"><span class="battle-icon">\u2694\uFE0F</span><span class="battle-text">${text || "\uC804\uD22C \uC2DC\uC791"}</span></div></div>`;
      choiceIndex++;
      return placeholder;
    });
    html = html.replace(/\[choice:(positive|negative|neutral|aggressive|passive)\]"([^"]+)"/g, (match, type, text) => {
      const placeholder = `\u25C6\u25C6\u25C6CHOICE${choiceIndex}\u25C6\u25C6\u25C6`;
      choiceBlocks[choiceIndex] = `<div class="dialogue-choice" data-choice-type="${type}" data-choice-text="${text}"><span class="choice-icon">\u{1F4AC}</span><span class="choice-text">"${text}"</span><span class="choice-label">${type}</span></div>`;
      choiceIndex++;
      return placeholder;
    });
    html = html.replace(/\[choice:(positive|negative|neutral|aggressive|passive)\]「([^」]+)」/g, (match, type, text) => {
      const placeholder = `\u25C6\u25C6\u25C6CHOICE${choiceIndex}\u25C6\u25C6\u25C6`;
      choiceBlocks[choiceIndex] = `<div class="dialogue-choice" data-choice-type="${type}" data-choice-text="${text}"><span class="choice-icon">\u{1F4AC}</span><span class="choice-text">\u300C${text}\u300D</span><span class="choice-label">${type}</span></div>`;
      choiceIndex++;
      return placeholder;
    });
    html = html.replace(/"([^"]+)"/g, '<span class="dialogue" data-type="dialogue">"$1"</span>');
    html = html.replace(/'([^']+)'/g, `<span class="dialogue" data-type="dialogue">'$1'</span>`);
    html = html.replace(/「([^」]+)」/g, '<span class="dialogue" data-type="dialogue">\u300C$1\u300D</span>');
    html = html.replace(/『([^』]+)』/g, '<span class="dialogue" data-type="dialogue">\u300E$1\u300F</span>');
    html = html.replace(/^######\s+(.+)$/gm, "<h6>$1</h6>");
    html = html.replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>");
    html = html.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>");
    html = html.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>");
    html = html.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
    html = html.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.+?)_/g, "<em>$1</em>");
    html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");
    html = html.replace(/```([^`]+)```/g, "<pre><code>$1</code></pre>");
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
    html = html.replace(/^(\d+)\.\s+(.+)$/gm, "<li>$2</li>");
    html = html.replace(/(<li>.*<\/li>\n?)+/g, "<ol>$&</ol>");
    html = html.replace(/^[-*]\s+(.+)$/gm, "<li>$1</li>");
    html = html.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>");
    html = html.replace(/^>\s+(.+)$/gm, "<blockquote>$1</blockquote>");
    html = html.replace(/^(---|\*\*\*)$/gm, "<hr>");
    html = html.replace(/\n\n/g, "</p><p>");
    html = html.replace(/\n/g, "<br>");
    if (!html.startsWith("<h") && !html.startsWith("<ul") && !html.startsWith("<ol") && !html.startsWith("<blockquote")) {
      const lines = html.split("</p><p>");
      html = lines.map((line) => {
        if (line.match(/^◆◆◆(CHOICE|BATTLE)\d+◆◆◆$/)) {
          return line;
        }
        return line;
      }).join("</p><p>");
      html = "<p>" + html + "</p>";
    }
    html = html.replace(/<p>\s*(◆◆◆(?:CHOICE|BATTLE)\d+◆◆◆)\s*<\/p>/g, "$1");
    html = html.replace(/<br>\s*(◆◆◆(?:CHOICE|BATTLE)\d+◆◆◆)/g, "$1");
    html = html.replace(/(◆◆◆(?:CHOICE|BATTLE)\d+◆◆◆)\s*<br>/g, "$1");
    for (let i = 0; i < choiceBlocks.length; i++) {
      const placeholderChoice = `\u25C6\u25C6\u25C6CHOICE${i}\u25C6\u25C6\u25C6`;
      const placeholderBattle = `\u25C6\u25C6\u25C6BATTLE${i}\u25C6\u25C6\u25C6`;
      if (html.includes(placeholderChoice)) {
        const regex = new RegExp(placeholderChoice.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
        html = html.replace(regex, choiceBlocks[i]);
      } else if (html.includes(placeholderBattle)) {
        const regex = new RegExp(placeholderBattle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
        html = html.replace(regex, choiceBlocks[i]);
      }
    }
    html = html.replace(/<br>\s*(<div class="dialogue-choice")/g, "$1");
    html = html.replace(/(<\/div>)\s*<br>/g, "$1");
    html = html.replace(/<p>\s*(<div class="dialogue-choice")/g, "$1");
    html = html.replace(/(<\/div>)\s*<\/p>/g, "$1");
    html = html.replace(/<br>\s*(<div class="battle-trigger-button")/g, "$1");
    html = html.replace(/<p>\s*(<div class="battle-trigger-button")/g, "$1");
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static \u0275fac = function MarkdownPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkdownPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdown", type: _MarkdownPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown",
      standalone: true,
      pure: true
      // pure 파이프로 설정하여 입력값이 변경될 때만 실행
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/modules/shared/components/sidebar/sidebar.component.ts
function SidebarComponent_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const thumbnail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", thumbnail_r2.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", thumbnail_r2.title);
  }
}
function SidebarComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const thumbnail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(thumbnail_r2.pageNumber);
  }
}
function SidebarComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thumbnail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(thumbnail_r2.pageNumber);
  }
}
function SidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function SidebarComponent_div_7_Template_div_click_0_listener() {
      const thumbnail_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onThumbnailClick(thumbnail_r2));
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275template(2, SidebarComponent_div_7_img_2_Template, 1, 2, "img", 8)(3, SidebarComponent_div_7_div_3_Template, 5, 1, "div", 9)(4, SidebarComponent_div_7_div_4_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const thumbnail_r2 = ctx.$implicit;
    \u0275\u0275classProp("active", thumbnail_r2.active);
    \u0275\u0275property("title", thumbnail_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", thumbnail_r2.thumbnailUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !thumbnail_r2.thumbnailUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thumbnail_r2.thumbnailUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(thumbnail_r2.title);
  }
}
function SidebarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2, "PDF \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uBA74");
    \u0275\u0275element(3, "br");
    \u0275\u0275text(4, "\uD398\uC774\uC9C0 \uC378\uB124\uC77C\uC774");
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6, "\uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
}
var SidebarComponent = class _SidebarComponent {
  cdr;
  isVisible = true;
  pdfSrc = null;
  // PDF 소스
  totalPages = 0;
  // 전체 페이지 수
  currentPage = 1;
  // 현재 페이지
  close = new EventEmitter();
  thumbnailClick = new EventEmitter();
  thumbnails = [];
  pdfDocument = null;
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    if (typeof pdfjsLib !== "undefined") {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }
  }
  ngOnChanges(changes) {
    if (changes["totalPages"] && this.totalPages > 0) {
      this.generateThumbnails();
    }
    if (changes["currentPage"]) {
      this.updateActivePageThumbnail();
    }
    if (changes["pdfSrc"] && this.pdfSrc) {
      this.loadPdfForThumbnails();
    }
  }
  loadPdfForThumbnails() {
    return __async(this, null, function* () {
      if (!this.pdfSrc || typeof pdfjsLib === "undefined") {
        return;
      }
      try {
        this.pdfDocument = yield pdfjsLib.getDocument(this.pdfSrc).promise;
        this.generateThumbnailImages();
      } catch (error) {
      }
    });
  }
  generateThumbnailImages() {
    return __async(this, null, function* () {
      if (!this.pdfDocument || this.thumbnails.length === 0) {
        return;
      }
      for (let i = 0; i < this.thumbnails.length; i++) {
        const thumbnail = this.thumbnails[i];
        try {
          const page = yield this.pdfDocument.getPage(thumbnail.pageNumber);
          const thumbnailUrl = yield this.createThumbnailCanvas(page);
          thumbnail.thumbnailUrl = thumbnailUrl;
        } catch (error) {
        }
      }
      this.cdr.detectChanges();
    });
  }
  createThumbnailCanvas(page) {
    return __async(this, null, function* () {
      const viewport = page.getViewport({ scale: 0.2 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport
      };
      yield page.render(renderContext).promise;
      return canvas.toDataURL();
    });
  }
  generateThumbnails() {
    this.thumbnails = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.thumbnails.push({
        id: i,
        title: `\uD398\uC774\uC9C0 ${i}`,
        pageNumber: i,
        active: i === this.currentPage
      });
    }
  }
  updateActivePageThumbnail() {
    this.thumbnails.forEach((t) => t.active = t.pageNumber === this.currentPage);
  }
  onThumbnailClick(thumbnail) {
    this.thumbnails.forEach((t) => t.active = false);
    thumbnail.active = true;
    this.thumbnailClick.emit(thumbnail);
  }
  onClose() {
    this.close.emit();
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { isVisible: "isVisible", pdfSrc: "pdfSrc", totalPages: "totalPages", currentPage: "currentPage" }, outputs: { close: "close", thumbnailClick: "thumbnailClick" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 9, vars: 6, consts: [[1, "sidebar"], [1, "sidebar-header"], ["title", "\uB2EB\uAE30", 1, "close-panel-btn", 3, "click"], [1, "thumbnail-container"], ["class", "thumbnail", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], ["class", "no-pdf-message", 4, "ngIf"], [1, "thumbnail", 3, "click", "title"], [1, "thumbnail-image"], ["class", "pdf-thumbnail-img", 3, "src", "alt", 4, "ngIf"], ["class", "pdf-page-thumbnail", 4, "ngIf"], ["class", "page-number-overlay", 4, "ngIf"], [1, "page-title"], [1, "pdf-thumbnail-img", 3, "src", "alt"], [1, "pdf-page-thumbnail"], [1, "loading-placeholder"], [1, "loading-spinner"], [1, "page-number-overlay"], [1, "no-pdf-message"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "\uD398\uC774\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_4_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(5, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275template(7, SidebarComponent_div_7_Template, 7, 7, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, SidebarComponent_div_8_Template, 7, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "" : "none");
      \u0275\u0275classProp("closed", !ctx.isVisible);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.thumbnails);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.thumbnails.length === 0);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  background: red !important;\n  border-right: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n  z-index: 1000;\n}\n.sidebar.closed[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n  opacity: 0;\n  pointer-events: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.close-panel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.close-panel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.thumbnail-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.thumbnail[_ngcontent-%COMP%]:hover {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.thumbnail.active[_ngcontent-%COMP%] {\n  border-color: #007acc;\n  box-shadow: 0 2px 12px rgba(0, 122, 204, 0.3);\n}\n.thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.pdf-page-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-image:\n    repeating-linear-gradient(\n      45deg,\n      transparent,\n      transparent 10px,\n      rgba(0, 0, 0, 0.02) 10px,\n      rgba(0, 0, 0, 0.02) 20px);\n}\n.pdf-thumbnail-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: white;\n}\n.loading-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #e0e0e0;\n  border-top: 2px solid #007acc;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.page-number-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n  font-weight: 500;\n}\n.no-pdf-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  text-align: center;\n}\n.no-pdf-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 13px;\n  line-height: 1.4;\n  margin: 0;\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: false, template: `<div class="sidebar" 
     [class.closed]="!isVisible"
     [style.display]="isVisible ? '' : 'none'">
  <div class="sidebar-header">
    <h3>\uD398\uC774\uC9C0</h3>
    <button class="close-panel-btn" 
            title="\uB2EB\uAE30"
            (click)="onClose()">
      \xD7
    </button>
  </div>
  
  <div class="thumbnail-container">
    <div class="thumbnail" 
         *ngFor="let thumbnail of thumbnails"
         [class.active]="thumbnail.active"
         [title]="thumbnail.title"
         (click)="onThumbnailClick(thumbnail)">
      <div class="thumbnail-image">
        <!-- \uC2E4\uC81C PDF \uD398\uC774\uC9C0 \uC378\uB124\uC77C -->
        <img *ngIf="thumbnail.thumbnailUrl" 
             [src]="thumbnail.thumbnailUrl" 
             [alt]="thumbnail.title"
             class="pdf-thumbnail-img">
        <!-- \uC378\uB124\uC77C \uB85C\uB529 \uC911\uC77C \uB54C \uD50C\uB808\uC774\uC2A4\uD640\uB354 -->
        <div *ngIf="!thumbnail.thumbnailUrl" class="pdf-page-thumbnail">
          <div class="loading-placeholder">
            <div class="loading-spinner"></div>
          </div>
          <div class="page-number-overlay">{{ thumbnail.pageNumber }}</div>
        </div>
        <!-- \uD398\uC774\uC9C0 \uBC88\uD638 \uC624\uBC84\uB808\uC774 (\uC378\uB124\uC77C \uC788\uC744 \uB54C) -->
        <div *ngIf="thumbnail.thumbnailUrl" class="page-number-overlay">{{ thumbnail.pageNumber }}</div>
      </div>
      <div class="page-title">{{ thumbnail.title }}</div>
    </div>
  </div>
  
  <!-- PDF\uAC00 \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC558\uC744 \uB54C \uBA54\uC2DC\uC9C0 -->
  <div class="no-pdf-message" *ngIf="thumbnails.length === 0">
    <p>PDF \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uBA74<br>\uD398\uC774\uC9C0 \uC378\uB124\uC77C\uC774<br>\uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/sidebar/sidebar.component.scss */\n.sidebar {\n  width: 200px;\n  background: red !important;\n  border-right: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n  z-index: 1000;\n}\n.sidebar.closed {\n  transform: translateX(-100%);\n  opacity: 0;\n  pointer-events: none;\n}\n.sidebar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.sidebar-header h3 {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.close-panel-btn {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.close-panel-btn:hover {\n  background: #f0f0f0;\n}\n.thumbnail-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px;\n}\n.thumbnail {\n  width: 100%;\n  margin-bottom: 8px;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.thumbnail:hover {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.thumbnail.active {\n  border-color: #007acc;\n  box-shadow: 0 2px 12px rgba(0, 122, 204, 0.3);\n}\n.thumbnail-image {\n  width: 100%;\n  height: 140px;\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.pdf-page-thumbnail {\n  width: 100%;\n  height: 100%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-image:\n    repeating-linear-gradient(\n      45deg,\n      transparent,\n      transparent 10px,\n      rgba(0, 0, 0, 0.02) 10px,\n      rgba(0, 0, 0, 0.02) 20px);\n}\n.pdf-thumbnail-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: white;\n}\n.loading-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.loading-spinner {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #e0e0e0;\n  border-top: 2px solid #007acc;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.page-number-overlay {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-title {\n  margin-top: 6px;\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n  font-weight: 500;\n}\n.no-pdf-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  text-align: center;\n}\n.no-pdf-message p {\n  color: #999;\n  font-size: 13px;\n  line-height: 1.4;\n  margin: 0;\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }], { isVisible: [{
    type: Input
  }], pdfSrc: [{
    type: Input
  }], totalPages: [{
    type: Input
  }], currentPage: [{
    type: Input
  }], close: [{
    type: Output
  }], thumbnailClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/modules/shared/components/sidebar/sidebar.component.ts", lineNumber: 19 });
})();

// src/app/modules/shared/components/snackbar/snackbar.component.ts
var SnackbarComponent = class _SnackbarComponent {
  message = "";
  isVisible = false;
  duration = 3e3;
  // 3초 기본
  close = new EventEmitter();
  ngOnInit() {
    if (this.isVisible && this.duration > 0) {
      setTimeout(() => {
        this.onClose();
      }, this.duration);
    }
  }
  ngOnChanges() {
    if (this.isVisible && this.duration > 0) {
      setTimeout(() => {
        this.onClose();
      }, this.duration);
    }
  }
  onClose() {
    this.close.emit();
  }
  static \u0275fac = function SnackbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SnackbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SnackbarComponent, selectors: [["app-snackbar"]], inputs: { message: "message", isVisible: "isVisible", duration: "duration" }, outputs: { close: "close" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 3, consts: [[1, "snackbar"], [1, "snackbar-content"], [1, "snackbar-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "10", "stroke", "#ff9800", "stroke-width", "2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12", "stroke", "#ff9800", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16", "stroke", "#ff9800", "stroke-width", "2", "stroke-linecap", "round"], [1, "snackbar-message"], [1, "snackbar-close", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round"]], template: function SnackbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "line", 5)(6, "line", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function SnackbarComponent_Template_button_click_9_listener() {
        return ctx.onClose();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "line", 10)(12, "line", 11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("visible", ctx.isVisible);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, styles: ["\n\n.snackbar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%) translateY(100px);\n  background: #333;\n  color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  z-index: 10000;\n  opacity: 0;\n  transition: all 0.3s ease;\n  max-width: 500px;\n  min-width: 300px;\n}\n.snackbar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.snackbar-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.snackbar-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.snackbar-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.snackbar-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.snackbar-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=snackbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SnackbarComponent, [{
    type: Component,
    args: [{ selector: "app-snackbar", standalone: false, template: '<div class="snackbar" [class.visible]="isVisible">\n  <div class="snackbar-content">\n    <span class="snackbar-icon">\n      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="12" cy="12" r="10" stroke="#ff9800" stroke-width="2"/>\n        <line x1="12" y1="8" x2="12" y2="12" stroke="#ff9800" stroke-width="2" stroke-linecap="round"/>\n        <line x1="12" y1="16" x2="12.01" y2="16" stroke="#ff9800" stroke-width="2" stroke-linecap="round"/>\n      </svg>\n    </span>\n    <span class="snackbar-message">{{ message }}</span>\n    <button class="snackbar-close" (click)="onClose()">\n      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <line x1="18" y1="6" x2="6" y2="18" stroke="#666" stroke-width="2" stroke-linecap="round"/>\n        <line x1="6" y1="6" x2="18" y2="18" stroke="#666" stroke-width="2" stroke-linecap="round"/>\n      </svg>\n    </button>\n  </div>\n</div>\n', styles: ["/* src/app/modules/shared/components/snackbar/snackbar.component.scss */\n.snackbar {\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%) translateY(100px);\n  background: #333;\n  color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  z-index: 10000;\n  opacity: 0;\n  transition: all 0.3s ease;\n  max-width: 500px;\n  min-width: 300px;\n}\n.snackbar.visible {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.snackbar-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n}\n.snackbar-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.snackbar-message {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.snackbar-close {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.snackbar-close:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=snackbar.component.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], isVisible: [{
    type: Input
  }], duration: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SnackbarComponent, { className: "SnackbarComponent", filePath: "src/app/modules/shared/components/snackbar/snackbar.component.ts", lineNumber: 9 });
})();

// src/app/modules/shared/components/login-modal/login-modal.component.ts
var LoginModalComponent = class _LoginModalComponent {
  authService;
  loginSuccess = new EventEmitter();
  constructor(authService) {
    this.authService = authService;
  }
  onSocialLogin(provider) {
    this.authService.login();
    this.loginSuccess.emit();
  }
  onSkipLogin() {
    this.authService.login();
    this.loginSuccess.emit();
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function LoginModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginModalComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginModalComponent, selectors: [["app-login-modal"]], outputs: { loginSuccess: "loginSuccess" }, standalone: false, decls: 44, vars: 0, consts: [[1, "modal-backdrop", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "logo-section"], ["src", "./images/logo-ezreader@3x.png", "alt", "ezReader \uB85C\uACE0", 1, "logo"], [1, "app-title"], [1, "app-subtitle"], [1, "start-section"], [1, "start-btn", 3, "click"], [1, "social-login-section"], [1, "social-btn", "kakao", 3, "click"], [1, "social-icon", "kakao-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "#000", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 3C7.03 3 3 6.44 3 10.61C3 13.28 4.59 15.67 7.11 17.1L6.16 20.52C6.1 20.75 6.35 20.93 6.55 20.8L10.74 18.35C11.15 18.39 11.57 18.41 12 18.41C16.97 18.41 21 14.97 21 10.8C21 6.44 16.97 3 12 3Z"], [1, "social-btn", "naver", 3, "click"], [1, "social-icon"], [1, "naver-n"], [1, "social-btn", "instagram", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "#fff", "xmlns", "http://www.w3.org/2000/svg"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["d", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], ["x1", "17.5", "y1", "6.5", "x2", "17.51", "y2", "6.5"], [1, "social-btn", "facebook", 3, "click"], ["d", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"], [1, "social-btn", "google", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "fill", "#4285F4"], ["d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "fill", "#34A853"], ["d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "fill", "#FBBC05"], ["d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "fill", "#EA4335"], [1, "social-btn", "twitter", 3, "click"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]], template: function LoginModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function LoginModalComponent_Template_div_click_0_listener() {
        return ctx.onSkipLogin();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function LoginModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "\uB85C\uADF8\uC778");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, "ezreader");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "\uB85C\uADF8\uC778 \uD558\uACE0 \uC774\uC6A9\uD574\uBCF4\uC138\uC694");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_12_listener() {
        return ctx.onSkipLogin();
      });
      \u0275\u0275text(13, "\uC2DC\uC791\uD558\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_15_listener() {
        return ctx.onSocialLogin("kakao");
      });
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 13);
      \u0275\u0275element(18, "path", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_19_listener() {
        return ctx.onSocialLogin("naver");
      });
      \u0275\u0275elementStart(20, "div", 16)(21, "span", 17);
      \u0275\u0275text(22, "N");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "button", 18);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_23_listener() {
        return ctx.onSocialLogin("instagram");
      });
      \u0275\u0275elementStart(24, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 19);
      \u0275\u0275element(26, "rect", 20)(27, "path", 21)(28, "line", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "button", 23);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_29_listener() {
        return ctx.onSocialLogin("facebook");
      });
      \u0275\u0275elementStart(30, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 19);
      \u0275\u0275element(32, "path", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "button", 25);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_33_listener() {
        return ctx.onSocialLogin("google");
      });
      \u0275\u0275elementStart(34, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 26);
      \u0275\u0275element(36, "path", 27)(37, "path", 28)(38, "path", 29)(39, "path", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "button", 31);
      \u0275\u0275listener("click", function LoginModalComponent_Template_button_click_40_listener() {
        return ctx.onSocialLogin("twitter");
      });
      \u0275\u0275elementStart(41, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 19);
      \u0275\u0275element(43, "path", 32);
      \u0275\u0275elementEnd()()()()()();
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  z-index: 10000;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px 10px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n}\n.logo-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px 30px;\n}\n.logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  width: auto;\n  margin-bottom: 20px;\n  object-fit: contain;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  color: #333;\n  margin: 0 0 8px 0;\n  letter-spacing: -0.5px;\n}\n.app-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.start-section[_ngcontent-%COMP%] {\n  padding: 0 20px 30px;\n}\n.start-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #ddd;\n  color: #666;\n  border: none;\n  padding: 16px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.start-btn[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n.social-login-section[_ngcontent-%COMP%] {\n  padding: 0 20px 30px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 15px;\n  justify-items: center;\n  align-items: center;\n  max-width: 200px;\n  margin: 0 auto;\n}\n.social-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.social-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.social-btn.kakao[_ngcontent-%COMP%] {\n  background: #FEE500;\n}\n.social-btn.naver[_ngcontent-%COMP%] {\n  background: #03C75A;\n}\n.social-btn.instagram[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #f09433 0%,\n      #e6683c 25%,\n      #dc2743 50%,\n      #cc2366 75%,\n      #bc1888 100%);\n}\n.social-btn.facebook[_ngcontent-%COMP%] {\n  background: #1877F2;\n}\n.social-btn.google[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n.social-btn.twitter[_ngcontent-%COMP%] {\n  background: #000;\n}\n.social-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.naver-n[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: Arial, sans-serif;\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 10px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    max-width: 200px;\n    height: auto;\n  }\n  .app-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .social-login-section[_ngcontent-%COMP%] {\n    gap: 12px;\n    max-width: 180px;\n  }\n  .social-btn[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n  }\n}\n/*# sourceMappingURL=login-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginModalComponent, [{
    type: Component,
    args: [{ selector: "app-login-modal", standalone: false, template: `<!-- \uB85C\uADF8\uC778 \uBAA8\uB2EC \uBC30\uACBD -->
<div class="modal-backdrop" (click)="onSkipLogin()">
  <div class="modal-content" (click)="$event.stopPropagation()">
    <!-- \uD5E4\uB354 -->
    <div class="modal-header">
      <h2 class="modal-title">\uB85C\uADF8\uC778</h2>
    </div>

    <!-- \uB85C\uACE0 -->
    <div class="logo-section">
      <img src="./images/logo-ezreader@3x.png" alt="ezReader \uB85C\uACE0" class="logo" />
      <h1 class="app-title">ezreader</h1>
      <p class="app-subtitle">\uB85C\uADF8\uC778 \uD558\uACE0 \uC774\uC6A9\uD574\uBCF4\uC138\uC694</p>
    </div>

    <!-- \uC2DC\uC791\uD558\uAE30 \uBC84\uD2BC -->
    <div class="start-section">
      <button class="start-btn" (click)="onSkipLogin()">\uC2DC\uC791\uD558\uAE30</button>
    </div>

    <!-- \uC18C\uC15C \uB85C\uADF8\uC778 \uBC84\uD2BC\uB4E4 -->
    <div class="social-login-section">
      <!-- \uCE74\uCE74\uC624\uD1A1 -->
      <button class="social-btn kakao" (click)="onSocialLogin('kakao')">
        <div class="social-icon kakao-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C7.03 3 3 6.44 3 10.61C3 13.28 4.59 15.67 7.11 17.1L6.16 20.52C6.1 20.75 6.35 20.93 6.55 20.8L10.74 18.35C11.15 18.39 11.57 18.41 12 18.41C16.97 18.41 21 14.97 21 10.8C21 6.44 16.97 3 12 3Z"/>
          </svg>
        </div>
      </button>

      <!-- \uB124\uC774\uBC84 -->
      <button class="social-btn naver" (click)="onSocialLogin('naver')">
        <div class="social-icon">
          <span class="naver-n">N</span>
        </div>
      </button>

      <!-- \uC778\uC2A4\uD0C0\uADF8\uB7A8 -->
      <button class="social-btn instagram" (click)="onSocialLogin('instagram')">
        <div class="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </div>
      </button>

      <!-- \uD398\uC774\uC2A4\uBD81 -->
      <button class="social-btn facebook" (click)="onSocialLogin('facebook')">
        <div class="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      </button>

      <!-- \uAD6C\uAE00 -->
      <button class="social-btn google" (click)="onSocialLogin('google')">
        <div class="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </button>

      <!-- X (\uD2B8\uC704\uD130) -->
      <button class="social-btn twitter" (click)="onSocialLogin('twitter')">
        <div class="social-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/login-modal/login-modal.component.scss */\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.modal-content {\n  background: #fff;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  z-index: 10000;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px 10px;\n}\n.modal-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n}\n.logo-section {\n  text-align: center;\n  padding: 40px 20px 30px;\n}\n.logo {\n  max-width: 100%;\n  height: auto;\n  width: auto;\n  margin-bottom: 20px;\n  object-fit: contain;\n}\n.app-title {\n  font-size: 28px;\n  font-weight: bold;\n  color: #333;\n  margin: 0 0 8px 0;\n  letter-spacing: -0.5px;\n}\n.app-subtitle {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.start-section {\n  padding: 0 20px 30px;\n}\n.start-btn {\n  width: 100%;\n  background: #ddd;\n  color: #666;\n  border: none;\n  padding: 16px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.start-btn:hover {\n  background: #ccc;\n}\n.social-login-section {\n  padding: 0 20px 30px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 15px;\n  justify-items: center;\n  align-items: center;\n  max-width: 200px;\n  margin: 0 auto;\n}\n.social-btn {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.social-btn:hover {\n  transform: scale(1.05);\n}\n.social-btn.kakao {\n  background: #FEE500;\n}\n.social-btn.naver {\n  background: #03C75A;\n}\n.social-btn.instagram {\n  background:\n    linear-gradient(\n      45deg,\n      #f09433 0%,\n      #e6683c 25%,\n      #dc2743 50%,\n      #cc2366 75%,\n      #bc1888 100%);\n}\n.social-btn.facebook {\n  background: #1877F2;\n}\n.social-btn.google {\n  background: #fff;\n  border: 1px solid #ddd;\n}\n.social-btn.twitter {\n  background: #000;\n}\n.social-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.naver-n {\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: Arial, sans-serif;\n}\n@media (max-width: 480px) {\n  .modal-content {\n    width: 95%;\n    margin: 10px;\n  }\n  .logo {\n    max-width: 200px;\n    height: auto;\n  }\n  .app-title {\n    font-size: 24px;\n  }\n  .social-login-section {\n    gap: 12px;\n    max-width: 180px;\n  }\n  .social-btn {\n    width: 45px;\n    height: 45px;\n  }\n}\n/*# sourceMappingURL=login-modal.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], { loginSuccess: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginModalComponent, { className: "LoginModalComponent", filePath: "src/app/modules/shared/components/login-modal/login-modal.component.ts", lineNumber: 10 });
})();

// src/app/modules/shared/components/properties-panel/properties-panel.component.ts
function PropertiesPanelComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r1.label, " ");
  }
}
function PropertiesPanelComponent_button_34__svg_rect_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 39);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 40);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 41);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 42);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 43);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 44);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 39);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 45);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 46);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 39);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 43);
  }
}
function PropertiesPanelComponent_button_34__svg_rect_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 47);
  }
}
function PropertiesPanelComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function PropertiesPanelComponent_button_34_Template_button_click_0_listener() {
      const align_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAlignmentChange(align_r3.value));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275template(2, PropertiesPanelComponent_button_34__svg_rect_2_Template, 1, 0, "rect", 30)(3, PropertiesPanelComponent_button_34__svg_rect_3_Template, 1, 0, "rect", 31)(4, PropertiesPanelComponent_button_34__svg_rect_4_Template, 1, 0, "rect", 32)(5, PropertiesPanelComponent_button_34__svg_rect_5_Template, 1, 0, "rect", 33)(6, PropertiesPanelComponent_button_34__svg_rect_6_Template, 1, 0, "rect", 34)(7, PropertiesPanelComponent_button_34__svg_rect_7_Template, 1, 0, "rect", 35)(8, PropertiesPanelComponent_button_34__svg_rect_8_Template, 1, 0, "rect", 30)(9, PropertiesPanelComponent_button_34__svg_rect_9_Template, 1, 0, "rect", 36)(10, PropertiesPanelComponent_button_34__svg_rect_10_Template, 1, 0, "rect", 37)(11, PropertiesPanelComponent_button_34__svg_rect_11_Template, 1, 0, "rect", 30)(12, PropertiesPanelComponent_button_34__svg_rect_12_Template, 1, 0, "rect", 34)(13, PropertiesPanelComponent_button_34__svg_rect_13_Template, 1, 0, "rect", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const align_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.fontProperties.align === align_r3.value);
    \u0275\u0275property("title", align_r3.tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", align_r3.value === "left");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "left");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "left");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "right");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "right");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "right");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "justify");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "justify");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", align_r3.value === "justify");
  }
}
function PropertiesPanelComponent_button_47__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 52);
  }
}
function PropertiesPanelComponent_button_47__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 53);
  }
}
function PropertiesPanelComponent_button_47__svg_g_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "path", 54)(2, "path", 55)(3, "line", 56);
    \u0275\u0275elementEnd();
  }
}
function PropertiesPanelComponent_button_47__svg_g_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "path", 57)(2, "path", 58)(3, "line", 59);
    \u0275\u0275elementEnd();
  }
}
function PropertiesPanelComponent_button_47__svg_g_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 60)(2, "path", 61);
    \u0275\u0275elementEnd();
  }
}
function PropertiesPanelComponent_button_47__svg_g_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 60)(2, "circle", 62)(3, "path", 63);
    \u0275\u0275elementEnd();
  }
}
function PropertiesPanelComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function PropertiesPanelComponent_button_47_Template_button_click_0_listener() {
      const action_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onAction(action_r6.name));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275template(2, PropertiesPanelComponent_button_47__svg_path_2_Template, 1, 0, "path", 49)(3, PropertiesPanelComponent_button_47__svg_path_3_Template, 1, 0, "path", 50)(4, PropertiesPanelComponent_button_47__svg_g_4_Template, 4, 0, "g", 51)(5, PropertiesPanelComponent_button_47__svg_g_5_Template, 4, 0, "g", 51)(6, PropertiesPanelComponent_button_47__svg_g_6_Template, 3, 0, "g", 51)(7, PropertiesPanelComponent_button_47__svg_g_7_Template, 4, 0, "g", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    \u0275\u0275property("title", action_r6.tooltip);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", action_r6.name === "undo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r6.name === "redo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r6.name === "flip-horizontal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r6.name === "flip-vertical");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r6.name === "crop");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r6.name === "convert-image");
  }
}
var PropertiesPanelComponent = class _PropertiesPanelComponent {
  isVisible = false;
  close = new EventEmitter();
  fontProperties = {
    type: "text",
    size: 30,
    color: "#000000",
    bold: true,
    italic: false,
    underline: false,
    strikethrough: false,
    align: "left"
  };
  spacingProperties = {
    letterSpacing: 0,
    lineHeight: 10,
    paragraphSpacing: 0
  };
  fontTypes = [
    { value: "text", label: "\uD14D\uC2A4\uD2B8" },
    { value: "heading", label: "\uC81C\uBAA9" },
    { value: "caption", label: "\uCEA1\uC158" }
  ];
  alignments = [
    { value: "left", icon: "align-left", tooltip: "\uC67C\uCABD \uC815\uB82C" },
    { value: "center", icon: "align-center", tooltip: "\uAC00\uC6B4\uB370 \uC815\uB82C" },
    { value: "right", icon: "align-right", tooltip: "\uC624\uB978\uCABD \uC815\uB82C" },
    { value: "justify", icon: "align-justify", tooltip: "\uC591\uCABD \uC815\uB82C" }
  ];
  actions = [
    { name: "undo", tooltip: "\uB418\uB3CC\uB9AC\uAE30" },
    { name: "redo", tooltip: "\uB2E4\uC2DC\uD558\uAE30" },
    { name: "flip-horizontal", tooltip: "\uC88C\uC6B0\uBC18\uC804" },
    { name: "flip-vertical", tooltip: "\uC0C1\uD558\uBC18\uC804" },
    { name: "crop", tooltip: "\uC790\uB974\uAE30" },
    { name: "convert-image", tooltip: "\uC774\uBBF8\uC9C0 \uBCC0\uD658" }
  ];
  onClose() {
    this.close.emit();
  }
  onFontStyleToggle(style2) {
    this.fontProperties[style2] = !this.fontProperties[style2];
  }
  onAlignmentChange(alignment) {
    this.fontProperties.align = alignment;
  }
  onAction(action) {
  }
  static \u0275fac = function PropertiesPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropertiesPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertiesPanelComponent, selectors: [["app-properties-panel"]], inputs: { isVisible: "isVisible" }, outputs: { close: "close" }, standalone: false, decls: 48, vars: 21, consts: [[1, "properties-panel"], [1, "sidebar-header"], ["title", "\uB2EB\uAE30", 1, "close-panel-btn", 3, "click"], [1, "panel-section"], [1, "panel-title"], [1, "property-type"], [1, "property-value"], [1, "divider"], [1, "panel-title", "collapsible"], [1, "font-controls"], [1, "property-input", "font-type", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", 1, "property-input", "font-size", 3, "ngModelChange", "ngModel"], ["type", "color", 1, "color-input", 3, "ngModelChange", "ngModel"], [1, "style-buttons"], ["title", "\uAD75\uAC8C", 1, "property-btn", 3, "click"], ["title", "\uAE30\uC6B8\uC784", 1, "property-btn", 3, "click"], ["title", "\uBC11\uC904", 1, "property-btn", 3, "click"], ["title", "\uCDE8\uC18C\uC120", 1, "property-btn", 3, "click"], [1, "alignment-buttons"], ["class", "property-btn", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "spacing-controls"], ["type", "number", "placeholder", "\uC790\uAC04", 1, "property-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "\uC904\uAC04\uACA9", 1, "property-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "\uB2E8\uB77D\uAC04\uACA9", 1, "property-input", 3, "ngModelChange", "ngModel"], [1, "action-buttons"], ["class", "property-btn", 3, "title", "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "property-btn", 3, "click", "title"], ["width", "22", "height", "22", "viewBox", "0 0 22 22"], ["x", "4", "y", "6", "width", "14", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "4", "y", "10", "width", "10", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "4", "y", "14", "width", "8", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "6", "y", "6", "width", "10", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "4", "y", "10", "width", "14", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "6", "y", "14", "width", "10", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "8", "y", "10", "width", "10", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "10", "y", "14", "width", "8", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "4", "y", "14", "width", "14", "height", "2", "fill", "#444", 4, "ngIf"], ["x", "4", "y", "6", "width", "14", "height", "2", "fill", "#444"], ["x", "4", "y", "10", "width", "10", "height", "2", "fill", "#444"], ["x", "4", "y", "14", "width", "8", "height", "2", "fill", "#444"], ["x", "6", "y", "6", "width", "10", "height", "2", "fill", "#444"], ["x", "4", "y", "10", "width", "14", "height", "2", "fill", "#444"], ["x", "6", "y", "14", "width", "10", "height", "2", "fill", "#444"], ["x", "8", "y", "10", "width", "10", "height", "2", "fill", "#444"], ["x", "10", "y", "14", "width", "8", "height", "2", "fill", "#444"], ["x", "4", "y", "14", "width", "14", "height", "2", "fill", "#444"], ["width", "22", "height", "22", "viewBox", "0 0 22 22", "fill", "none"], ["d", "M7 11V7H3M5 9a7 7 0 1 1 2 7", "stroke", "#444", "stroke-width", "1.5", "fill", "none", 4, "ngIf"], ["d", "M15 11V7h4M17 9a7 7 0 1 0-2 7", "stroke", "#444", "stroke-width", "1.5", "fill", "none", 4, "ngIf"], [4, "ngIf"], ["d", "M7 11V7H3M5 9a7 7 0 1 1 2 7", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["d", "M15 11V7h4M17 9a7 7 0 1 0-2 7", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["d", "M7 6v10M7 6l-2 2M7 6l2 2", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["d", "M15 6v10M15 16l2-2M15 16l-2-2", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["x1", "11", "y1", "5", "x2", "11", "y2", "17", "stroke", "#444", "stroke-width", "1"], ["d", "M6 15h10M6 15l2 2M6 15l2-2", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["d", "M16 7H6M16 7l-2-2M16 7l-2 2", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["x1", "5", "y1", "11", "x2", "17", "y2", "11", "stroke", "#444", "stroke-width", "1"], ["x", "5", "y", "5", "width", "12", "height", "12", "stroke", "#444", "stroke-width", "1.5", "fill", "none"], ["d", "M5 5l12 12", "stroke", "#444", "stroke-width", "1"], ["cx", "9", "cy", "9", "r", "2", "stroke", "#444", "stroke-width", "1"], ["d", "M17 17l-4-6-4 5", "stroke", "#444", "stroke-width", "1"]], template: function PropertiesPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function PropertiesPanelComponent_Template_button_click_2_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(3, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275text(6, "\uC18D\uC131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "\uC885\uB958");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10, "\uD14D\uC2A4\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "hr", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3)(13, "div", 8);
      \u0275\u0275text(14, "\u25BC \uD3F0\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PropertiesPanelComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fontProperties.type, $event) || (ctx.fontProperties.type = $event);
        return $event;
      });
      \u0275\u0275template(17, PropertiesPanelComponent_option_17_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function PropertiesPanelComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fontProperties.size, $event) || (ctx.fontProperties.size = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function PropertiesPanelComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fontProperties.color, $event) || (ctx.fontProperties.color = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "button", 15);
      \u0275\u0275listener("click", function PropertiesPanelComponent_Template_button_click_21_listener() {
        return ctx.onFontStyleToggle("bold");
      });
      \u0275\u0275elementStart(22, "strong");
      \u0275\u0275text(23, "T");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 16);
      \u0275\u0275listener("click", function PropertiesPanelComponent_Template_button_click_24_listener() {
        return ctx.onFontStyleToggle("italic");
      });
      \u0275\u0275elementStart(25, "em");
      \u0275\u0275text(26, "T");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "button", 17);
      \u0275\u0275listener("click", function PropertiesPanelComponent_Template_button_click_27_listener() {
        return ctx.onFontStyleToggle("underline");
      });
      \u0275\u0275elementStart(28, "u");
      \u0275\u0275text(29, "T");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 18);
      \u0275\u0275listener("click", function PropertiesPanelComponent_Template_button_click_30_listener() {
        return ctx.onFontStyleToggle("strikethrough");
      });
      \u0275\u0275elementStart(31, "s");
      \u0275\u0275text(32, "T");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 19);
      \u0275\u0275template(34, PropertiesPanelComponent_button_34_Template, 14, 15, "button", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 3)(36, "div", 8);
      \u0275\u0275text(37, "\u25BC \uAC04\uACA9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 21)(39, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function PropertiesPanelComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.spacingProperties.letterSpacing, $event) || (ctx.spacingProperties.letterSpacing = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PropertiesPanelComponent_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.spacingProperties.lineHeight, $event) || (ctx.spacingProperties.lineHeight = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 21)(42, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PropertiesPanelComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.spacingProperties.paragraphSpacing, $event) || (ctx.spacingProperties.paragraphSpacing = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 3)(44, "div", 8);
      \u0275\u0275text(45, "\u25BC \uB3D9\uC791");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 25);
      \u0275\u0275template(47, PropertiesPanelComponent_button_47_Template, 8, 7, "button", 26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "" : "none");
      \u0275\u0275classProp("closed", !ctx.isVisible);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.fontProperties.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.fontTypes);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.fontProperties.size);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.fontProperties.color);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.fontProperties.bold);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.fontProperties.italic);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.fontProperties.underline);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.fontProperties.strikethrough);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.alignments);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.spacingProperties.letterSpacing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.spacingProperties.lineHeight);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.spacingProperties.paragraphSpacing);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.actions);
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.properties-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 130px;\n  right: 50px;\n  bottom: 0;\n  width: 380px;\n  background: #fff;\n  border-left: 1px solid #e0e0e0;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);\n  padding: 16px;\n  overflow-y: auto;\n  z-index: 1000;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n}\nl[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 130px;\n  right: 10px;\n  bottom: 0;\n  width: 380px;\n  background: #fff;\n  border-left: 1px solid #e0e0e0;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);\n  padding: 16px;\n  overflow-y: auto;\n  z-index: 1000;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n}\n.properties-panel.closed[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 0;\n  pointer-events: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 8px 8px 16px 0;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.close-panel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n  margin-left: auto;\n}\n.close-panel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: #333;\n}\n.panel-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #333;\n}\n.panel-title.collapsible[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 13px;\n  color: #444;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.property-type[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #444;\n  margin-bottom: 8px;\n}\n.property-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-bottom: 12px;\n}\n.divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #eee;\n  margin: 8px 0;\n}\n.font-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.property-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.font-type[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.font-size[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.color-input[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.style-buttons[_ngcontent-%COMP%], \n.alignment-buttons[_ngcontent-%COMP%], \n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.property-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px;\n  border: 1px solid #ccc;\n  background: #f8f8f8;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  height: 30px;\n}\n.property-btn.active[_ngcontent-%COMP%] {\n  background: #007acc;\n  color: white;\n  border-color: #007acc;\n}\n.property-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.property-btn.active[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n.spacing-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.spacing-controls[_ngcontent-%COMP%]   .property-input[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.action-buttons[_ngcontent-%COMP%]   .property-btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 40px;\n}\n/*# sourceMappingURL=properties-panel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertiesPanelComponent, [{
    type: Component,
    args: [{ selector: "app-properties-panel", standalone: false, template: `<!-- \uC18D\uC131 \uD328\uB110 -->
<div class="properties-panel" 
     [class.closed]="!isVisible"
     [style.display]="isVisible ? '' : 'none'">
  <div class="sidebar-header">
    <button class="close-panel-btn" 
            title="\uB2EB\uAE30"
            (click)="onClose()">
      \xD7
    </button>
  </div>
  
  <!-- \uAE30\uBCF8 \uC18D\uC131 -->
  <div class="panel-section">
    <div class="panel-title">\uC18D\uC131</div>
    <div class="property-type">\uC885\uB958</div>
    <div class="property-value">\uD14D\uC2A4\uD2B8</div>
    <hr class="divider">
  </div>

  <!-- \uD3F0\uD2B8 \uC124\uC815 -->
  <div class="panel-section">
    <div class="panel-title collapsible">\u25BC \uD3F0\uD2B8</div>
    <div class="font-controls">
      <select class="property-input font-type" 
              [(ngModel)]="fontProperties.type">
        <option *ngFor="let type of fontTypes" [value]="type.value">
          {{ type.label }}
        </option>
      </select>
      <input type="number" 
             class="property-input font-size" 
             [(ngModel)]="fontProperties.size">
      <input type="color" 
             class="color-input" 
             [(ngModel)]="fontProperties.color">
    </div>
    
    <!-- \uC2A4\uD0C0\uC77C \uBC84\uD2BC -->
    <div class="style-buttons">
      <button class="property-btn" 
              [class.active]="fontProperties.bold"
              (click)="onFontStyleToggle('bold')"
              title="\uAD75\uAC8C">
        <strong>T</strong>
      </button>
      <button class="property-btn" 
              [class.active]="fontProperties.italic"
              (click)="onFontStyleToggle('italic')"
              title="\uAE30\uC6B8\uC784">
        <em>T</em>
      </button>
      <button class="property-btn" 
              [class.active]="fontProperties.underline"
              (click)="onFontStyleToggle('underline')"
              title="\uBC11\uC904">
        <u>T</u>
      </button>
      <button class="property-btn" 
              [class.active]="fontProperties.strikethrough"
              (click)="onFontStyleToggle('strikethrough')"
              title="\uCDE8\uC18C\uC120">
        <s>T</s>
      </button>
    </div>
    
    <!-- \uC815\uB82C \uBC84\uD2BC -->
    <div class="alignment-buttons">
      <button class="property-btn" 
              *ngFor="let align of alignments"
              [class.active]="fontProperties.align === align.value"
              (click)="onAlignmentChange(align.value)"
              [title]="align.tooltip">
        <svg width="22" height="22" viewBox="0 0 22 22">
          <rect *ngIf="align.value === 'left'" x="4" y="6" width="14" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'left'" x="4" y="10" width="10" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'left'" x="4" y="14" width="8" height="2" fill="#444"/>
          
          <rect *ngIf="align.value === 'center'" x="6" y="6" width="10" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'center'" x="4" y="10" width="14" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'center'" x="6" y="14" width="10" height="2" fill="#444"/>
          
          <rect *ngIf="align.value === 'right'" x="4" y="6" width="14" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'right'" x="8" y="10" width="10" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'right'" x="10" y="14" width="8" height="2" fill="#444"/>
          
          <rect *ngIf="align.value === 'justify'" x="4" y="6" width="14" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'justify'" x="4" y="10" width="14" height="2" fill="#444"/>
          <rect *ngIf="align.value === 'justify'" x="4" y="14" width="14" height="2" fill="#444"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- \uAC04\uACA9 \uC124\uC815 -->
  <div class="panel-section">
    <div class="panel-title collapsible">\u25BC \uAC04\uACA9</div>
    <div class="spacing-controls">
      <input type="number" 
             class="property-input" 
             [(ngModel)]="spacingProperties.letterSpacing"
             placeholder="\uC790\uAC04">
      <input type="number" 
             class="property-input" 
             [(ngModel)]="spacingProperties.lineHeight"
             placeholder="\uC904\uAC04\uACA9">
    </div>
    <div class="spacing-controls">
      <input type="number" 
             class="property-input" 
             [(ngModel)]="spacingProperties.paragraphSpacing"
             placeholder="\uB2E8\uB77D\uAC04\uACA9">
    </div>
  </div>

  <!-- \uB3D9\uC791 \uC124\uC815 -->
  <div class="panel-section">
    <div class="panel-title collapsible">\u25BC \uB3D9\uC791</div>
    <div class="action-buttons">
      <button class="property-btn" 
              *ngFor="let action of actions"
              (click)="onAction(action.name)"
              [title]="action.tooltip">
        <!-- \uAC01 \uC561\uC158\uC5D0 \uB300\uD55C SVG \uC544\uC774\uCF58\uB4E4 -->
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <!-- \uB418\uB3CC\uB9AC\uAE30 -->
          <path *ngIf="action.name === 'undo'" 
                d="M7 11V7H3M5 9a7 7 0 1 1 2 7" 
                stroke="#444" stroke-width="1.5" fill="none"/>
          
          <!-- \uB2E4\uC2DC\uD558\uAE30 -->
          <path *ngIf="action.name === 'redo'" 
                d="M15 11V7h4M17 9a7 7 0 1 0-2 7" 
                stroke="#444" stroke-width="1.5" fill="none"/>
          
          <!-- \uC88C\uC6B0\uBC18\uC804 -->
          <g *ngIf="action.name === 'flip-horizontal'">
            <path d="M7 6v10M7 6l-2 2M7 6l2 2" stroke="#444" stroke-width="1.5" fill="none"/>
            <path d="M15 6v10M15 16l2-2M15 16l-2-2" stroke="#444" stroke-width="1.5" fill="none"/>
            <line x1="11" y1="5" x2="11" y2="17" stroke="#444" stroke-width="1"/>
          </g>
          
          <!-- \uC0C1\uD558\uBC18\uC804 -->
          <g *ngIf="action.name === 'flip-vertical'">
            <path d="M6 15h10M6 15l2 2M6 15l2-2" stroke="#444" stroke-width="1.5" fill="none"/>
            <path d="M16 7H6M16 7l-2-2M16 7l-2 2" stroke="#444" stroke-width="1.5" fill="none"/>
            <line x1="5" y1="11" x2="17" y2="11" stroke="#444" stroke-width="1"/>
          </g>
          
          <!-- \uC790\uB974\uAE30 -->
          <g *ngIf="action.name === 'crop'">
            <rect x="5" y="5" width="12" height="12" stroke="#444" stroke-width="1.5" fill="none"/>
            <path d="M5 5l12 12" stroke="#444" stroke-width="1"/>
          </g>
          
          <!-- \uC774\uBBF8\uC9C0 \uBCC0\uD658 -->
          <g *ngIf="action.name === 'convert-image'">
            <rect x="5" y="5" width="12" height="12" stroke="#444" stroke-width="1.5" fill="none"/>
            <circle cx="9" cy="9" r="2" stroke="#444" stroke-width="1"/>
            <path d="M17 17l-4-6-4 5" stroke="#444" stroke-width="1"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/properties-panel/properties-panel.component.scss */\n.properties-panel {\n  position: fixed;\n  top: 130px;\n  right: 50px;\n  bottom: 0;\n  width: 380px;\n  background: #fff;\n  border-left: 1px solid #e0e0e0;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);\n  padding: 16px;\n  overflow-y: auto;\n  z-index: 1000;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n}\nl {\n  position: fixed;\n  top: 130px;\n  right: 10px;\n  bottom: 0;\n  width: 380px;\n  background: #fff;\n  border-left: 1px solid #e0e0e0;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);\n  padding: 16px;\n  overflow-y: auto;\n  z-index: 1000;\n  transition: transform 0.25s cubic-bezier(0.4, 1.4, 0.6, 1), opacity 0.25s cubic-bezier(0.4, 1.4, 0.6, 1);\n  transform: translateX(0);\n  opacity: 1;\n}\n.properties-panel.closed {\n  transform: translateX(100%);\n  opacity: 0;\n  pointer-events: none;\n}\n.sidebar-header {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 8px 8px 16px 0;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.close-panel-btn {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n  margin-left: auto;\n}\n.close-panel-btn:hover {\n  background: #f0f0f0;\n  color: #333;\n}\n.panel-section {\n  margin-bottom: 16px;\n}\n.panel-title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #333;\n}\n.panel-title.collapsible {\n  cursor: pointer;\n  font-size: 13px;\n  color: #444;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.property-type {\n  font-size: 13px;\n  color: #444;\n  margin-bottom: 8px;\n}\n.property-value {\n  font-size: 13px;\n  color: #888;\n  margin-bottom: 12px;\n}\n.divider {\n  border: none;\n  border-top: 1px solid #eee;\n  margin: 8px 0;\n}\n.font-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.property-input {\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.font-type {\n  width: 100px;\n}\n.font-size {\n  width: 50px;\n}\n.color-input {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.style-buttons,\n.alignment-buttons,\n.action-buttons {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.property-btn {\n  flex: 1;\n  padding: 6px;\n  border: 1px solid #ccc;\n  background: #f8f8f8;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n  height: 30px;\n}\n.property-btn.active {\n  background: #007acc;\n  color: white;\n  border-color: #007acc;\n}\n.property-btn:hover {\n  background: #e0e0e0;\n}\n.property-btn.active:hover {\n  background: #0056b3;\n}\n.spacing-controls {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.spacing-controls .property-input {\n  width: 50px;\n}\n.action-buttons .property-btn {\n  flex: 0 0 auto;\n  width: 40px;\n}\n/*# sourceMappingURL=properties-panel.component.css.map */\n'] }]
  }], null, { isVisible: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertiesPanelComponent, { className: "PropertiesPanelComponent", filePath: "src/app/modules/shared/components/properties-panel/properties-panel.component.ts", lineNumber: 9 });
})();

// src/app/modules/shared/components/tab-bar/tab-bar.component.ts
function TabBarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function TabBarComponent_div_3_Template_div_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function TabBarComponent_div_3_Template_button_click_3_listener($event) {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.closeTab(tab_r2.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    \u0275\u0275classProp("active", tab_r2.active);
    \u0275\u0275property("title", tab_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.name);
  }
}
function TabBarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TabBarComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 11)(3, "polyline", 12)(4, "line", 13);
    \u0275\u0275elementEnd()();
  }
}
var TabBarComponent = class _TabBarComponent {
  authService;
  currentFileName = "";
  currentPdfSrc = null;
  tabChanged = new EventEmitter();
  tabs = [
    { id: 1, name: "\uC0C8\uD30C\uC77C", active: true, pdfSrc: null }
  ];
  constructor(authService) {
    this.authService = authService;
  }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  ngOnChanges(changes) {
    if (changes["currentFileName"] && changes["currentFileName"].currentValue) {
      this.updateCurrentTabName(changes["currentFileName"].currentValue);
    }
  }
  updateCurrentTabName(fileName) {
    const activeTab = this.tabs.find((tab) => tab.active);
    if (activeTab) {
      activeTab.name = fileName;
    }
  }
  updateCurrentTabPdfSrc(pdfSrc) {
    const activeTab = this.tabs.find((tab) => tab.active);
    if (activeTab) {
      activeTab.pdfSrc = pdfSrc;
    }
  }
  closeTab(tabId) {
    const wasActive = this.tabs.find((tab) => tab.id === tabId)?.active;
    this.tabs = this.tabs.filter((tab) => tab.id !== tabId);
    if (wasActive && this.tabs.length > 0) {
      this.tabs[0].active = true;
      this.tabChanged.emit({ pdfSrc: this.tabs[0].pdfSrc, fileName: this.tabs[0].name });
    }
  }
  addTab() {
    this.tabs.forEach((tab) => tab.active = false);
    const newTab = {
      id: Date.now(),
      name: "\uC0C8\uD30C\uC77C",
      active: true,
      pdfSrc: null
    };
    this.tabs.push(newTab);
    this.tabChanged.emit({ pdfSrc: null, fileName: "\uC0C8\uD30C\uC77C" });
  }
  selectTab(tabId) {
    this.tabs.forEach((tab) => {
      tab.active = tab.id === tabId;
    });
    const selected = this.tabs.find((tab) => tab.id === tabId);
    this.tabChanged.emit({ pdfSrc: selected?.pdfSrc ?? null, fileName: selected?.name ?? "" });
  }
  // 파일 열기 시 App에서 호출
  setActiveTabPdf(fileName, pdfSrc) {
    const activeTab = this.tabs.find((tab) => tab.active);
    if (activeTab) {
      activeTab.name = fileName;
      activeTab.pdfSrc = pdfSrc;
    }
  }
  onLogout() {
    this.authService.logout();
    this.tabs = [{ id: 1, name: "\uC0C8\uD30C\uC77C", active: true, pdfSrc: null }];
    this.tabChanged.emit({ pdfSrc: null, fileName: "\uC0C8\uD30C\uC77C" });
  }
  static \u0275fac = function TabBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabBarComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabBarComponent, selectors: [["app-tab-bar"]], inputs: { currentFileName: "currentFileName", currentPdfSrc: "currentPdfSrc" }, outputs: { tabChanged: "tabChanged" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 2, consts: [[1, "tab-bar"], [1, "tab-ezreader"], ["src", "./images/logo-ezreader@3x.png", "alt", "ezreader \uB85C\uACE0", 1, "tab-ezreader-logo"], ["class", "tab", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], ["title", "\uC0C8 \uD0ED \uCD94\uAC00", 1, "tab-add-btn", 3, "click"], ["class", "logout-btn", "title", "\uB85C\uADF8\uC544\uC6C3", 3, "click", 4, "ngIf"], [1, "tab", 3, "click", "title"], [1, "tab-name-ellipsis"], ["title", "\uB2EB\uAE30", 1, "tab-close-btn", 3, "click"], ["title", "\uB85C\uADF8\uC544\uC6C3", 1, "logout-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "16,17 21,12 16,7", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round"]], template: function TabBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, TabBarComponent_div_3_Template, 5, 4, "div", 3);
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function TabBarComponent_Template_button_click_4_listener() {
        return ctx.addTab();
      });
      \u0275\u0275text(5, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, TabBarComponent_button_6_Template, 5, 0, "button", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--bg-secondary);\n  height: 38px;\n  padding: 0 8px;\n  gap: 2px;\n  z-index: 1100;\n  position: relative;\n  flex-shrink: 0;\n  margin: 0;\n}\n.tab-ezreader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tab-ezreader-logo[_ngcontent-%COMP%] {\n  height: 13px;\n  width: auto;\n  display: block;\n  margin-right: 10px;\n}\n.tab-home-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  display: flex;\n  align-items: center;\n}\n.tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--bg-primary);\n  border-radius: 6px 6px 0 0;\n  margin-right: 10px;\n  padding: 0 16px 0 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  height: 32px;\n  position: relative;\n  gap: 6px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  margin-bottom: -4px;\n  min-width: 0;\n}\n.tab-name-ellipsis[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--accent-color);\n  border-bottom: 2px solid var(--accent-color);\n  font-weight: 600;\n  z-index: 1;\n}\n.tab-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 15px;\n  color: var(--text-muted);\n  cursor: pointer;\n  margin-left: 6px;\n  padding: 0 2px;\n  border-radius: 3px;\n  transition: background 0.15s;\n  position: static;\n  top: auto;\n  right: auto;\n  transform: none;\n}\n.tab-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n}\n.tab-add-btn[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  color: var(--text-muted);\n  border: 0px solid var(--border-color);\n  border-radius: 6px 6px 0 0;\n  font-size: 18px;\n  width: 32px;\n  height: 32px;\n  margin-left: 2px;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tab-add-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 8px;\n  margin-left: auto;\n  margin-right: 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--bg-tertiary);\n}\n/*# sourceMappingURL=tab-bar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabBarComponent, [{
    type: Component,
    args: [{ selector: "app-tab-bar", standalone: false, template: '<!-- \uD0ED \uAE30\uB2A5 -->\n<div class="tab-bar">\n  <!-- ezreader \uB85C\uACE0/\uD14D\uC2A4\uD2B8 -->\n  <span class="tab-ezreader">\n    <img src="./images/logo-ezreader@3x.png" alt="ezreader \uB85C\uACE0" class="tab-ezreader-logo" />\n  </span>\n\n  <!-- \uADF8 \uB2E4\uC74C\uBD80\uD130 \uD0ED \uC2DC\uC791 -->\n  <div class="tab" \n       *ngFor="let tab of tabs" \n       [class.active]="tab.active"\n       [title]="tab.name"\n       (click)="selectTab(tab.id)">\n    <span class="tab-name-ellipsis">{{ tab.name }}</span>\n    <button class="tab-close-btn" \n            title="\uB2EB\uAE30"\n            (click)="closeTab(tab.id); $event.stopPropagation()">&times;</button>\n  </div>\n  <button class="tab-add-btn" \n          title="\uC0C8 \uD0ED \uCD94\uAC00"\n          (click)="addTab()">+</button>\n  \n  <!-- \uB85C\uADF8\uC544\uC6C3 \uBC84\uD2BC -->\n  <button class="logout-btn" \n          *ngIf="isLoggedIn"\n          title="\uB85C\uADF8\uC544\uC6C3"\n          (click)="onLogout()">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      <polyline points="16,17 21,12 16,7" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      <line x1="21" y1="12" x2="9" y2="12" stroke="#666" stroke-width="2" stroke-linecap="round"/>\n    </svg>\n  </button>\n</div>\n', styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/tab-bar/tab-bar.component.scss */\n.tab-bar {\n  display: flex;\n  align-items: center;\n  background: var(--bg-secondary);\n  height: 38px;\n  padding: 0 8px;\n  gap: 2px;\n  z-index: 1100;\n  position: relative;\n  flex-shrink: 0;\n  margin: 0;\n}\n.tab-ezreader {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tab-ezreader-logo {\n  height: 13px;\n  width: auto;\n  display: block;\n  margin-right: 10px;\n}\n.tab-home-icon {\n  margin-right: 8px;\n  display: flex;\n  align-items: center;\n}\n.tab {\n  display: flex;\n  align-items: center;\n  background: var(--bg-primary);\n  border-radius: 6px 6px 0 0;\n  margin-right: 10px;\n  padding: 0 16px 0 8px;\n  font-size: 13px;\n  color: var(--text-primary);\n  height: 32px;\n  position: relative;\n  gap: 6px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  margin-bottom: -4px;\n  min-width: 0;\n}\n.tab-name-ellipsis {\n  display: block;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tab.active {\n  background: var(--bg-primary);\n  color: var(--accent-color);\n  border-bottom: 2px solid var(--accent-color);\n  font-weight: 600;\n  z-index: 1;\n}\n.tab-close-btn {\n  background: none;\n  border: none;\n  font-size: 15px;\n  color: var(--text-muted);\n  cursor: pointer;\n  margin-left: 6px;\n  padding: 0 2px;\n  border-radius: 3px;\n  transition: background 0.15s;\n  position: static;\n  top: auto;\n  right: auto;\n  transform: none;\n}\n.tab-close-btn:hover {\n  background: var(--bg-tertiary);\n}\n.tab-add-btn {\n  background: var(--bg-secondary);\n  color: var(--text-muted);\n  border: 0px solid var(--border-color);\n  border-radius: 6px 6px 0 0;\n  font-size: 18px;\n  width: 32px;\n  height: 32px;\n  margin-left: 2px;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tab-add-btn:hover {\n  background: var(--bg-tertiary);\n}\n.logout-btn {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 8px;\n  margin-left: auto;\n  margin-right: 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logout-btn:hover {\n  background-color: var(--bg-tertiary);\n}\n/*# sourceMappingURL=tab-bar.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], { currentFileName: [{
    type: Input
  }], currentPdfSrc: [{
    type: Input
  }], tabChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabBarComponent, { className: "TabBarComponent", filePath: "src/app/modules/shared/components/tab-bar/tab-bar.component.ts", lineNumber: 17 });
})();

// src/app/modules/shared/components/top-menu-bar/top-menu-bar.component.ts
var _c0 = ["fileInput"];
function TopMenuBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function TopMenuBarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function TopMenuBarComponent_button_8_Template_button_click_0_listener() {
      const action_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onToolbarAction(action_r3.action));
    });
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", !ctx_r3.pdfSrc && action_r3.action !== "novel-generator");
    \u0275\u0275property("title", action_r3.tooltip)("disabled", !ctx_r3.pdfSrc && action_r3.action !== "novel-generator");
    \u0275\u0275advance();
    \u0275\u0275property("src", action_r3.icon, \u0275\u0275sanitizeUrl)("alt", action_r3.tooltip);
  }
}
function TopMenuBarComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275listener("click", function TopMenuBarComponent_li_11_Template_li_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onMenuItemClick(item_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", item_r6.active)("disabled", ctx_r3.isMenuDisabled(item_r6.name));
    \u0275\u0275property("title", item_r6.name + " \uBA54\uB274");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.name, " ");
  }
}
function TopMenuBarComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\uAC1C ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.searchResultCount);
  }
}
function TopMenuBarComponent_div_19__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 44)(2, "polyline", 45)(3, "polyline", 46);
    \u0275\u0275elementEnd();
  }
}
function TopMenuBarComponent_div_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function TopMenuBarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275listener("mousedown", function TopMenuBarComponent_div_19_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragStart($event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "circle", 27)(4, "circle", 28)(5, "circle", 29)(6, "circle", 30)(7, "circle", 31)(8, "circle", 32)(9, "circle", 33)(10, "circle", 34)(11, "circle", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span", 36);
    \u0275\u0275text(13, "\uC800\uC7A5\uBC29\uC2DD:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 37)(15, "button", 38);
    \u0275\u0275listener("click", function TopMenuBarComponent_div_19_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveModeChange("overlay"));
    });
    \u0275\u0275text(16, " \uC624\uBC84\uB808\uC774 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 39);
    \u0275\u0275listener("click", function TopMenuBarComponent_div_19_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveModeChange("textstream"));
    });
    \u0275\u0275text(18, " \uC6D0\uBCF8\uD14D\uC2A4\uD2B8\uBCC0\uACBD ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 40);
    \u0275\u0275listener("click", function TopMenuBarComponent_div_19_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSavePdf());
    });
    \u0275\u0275template(20, TopMenuBarComponent_div_19__svg_svg_20_Template, 4, 0, "svg", 41)(21, TopMenuBarComponent_div_19_div_21_Template, 1, 0, "div", 42);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r3.togglePosition.x, "px")("top", ctx_r3.togglePosition.y, "px");
    \u0275\u0275classProp("dragging", ctx_r3.isDragging);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("active", ctx_r3.saveMode === "overlay");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.saveMode === "textstream");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("saving", ctx_r3.isSaving);
    \u0275\u0275property("disabled", ctx_r3.isSaving)("title", ctx_r3.isSaving ? "\uC800\uC7A5 \uC911..." : "\uD604\uC7AC \uC120\uD0DD\uB41C \uBC29\uC2DD\uC73C\uB85C PDF \uC800\uC7A5");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSaving ? "\uC800\uC7A5 \uC911..." : "\uC800\uC7A5", " ");
  }
}
var TopMenuBarComponent = class _TopMenuBarComponent {
  router;
  saveMode = "overlay";
  currentActiveMenu = "\uD648";
  pdfSrc = null;
  // PDF 파일 상태 추가
  showSnackbar = new EventEmitter();
  // 드래그 관련 속성
  togglePosition = { x: 250, y: 10 };
  // 초기 위치 (상단 메뉴바 내 기본 위치)
  isDragging = false;
  dragOffset = { x: 0, y: 0 };
  isSaving = false;
  // 저장 중 상태 추가
  TOGGLE_POSITION_KEY = "saveModeTogglePosition";
  isSearching = false;
  searchResultCount = null;
  searchChange = new EventEmitter();
  fileSelected = new EventEmitter();
  createTextEditor = new EventEmitter();
  createSentenceOverlay = new EventEmitter();
  // 문장 오버레이 생성 이벤트 추가
  saveOverlayedPdf = new EventEmitter();
  // PDF 저장 이벤트 추가
  downloadModifiedPdf = new EventEmitter();
  // PDF 다운로드 이벤트 추가
  printPdf = new EventEmitter();
  // PDF 인쇄 이벤트 추가
  saveModeChanged = new EventEmitter();
  // 저장 모드 변경 이벤트 추가
  menuChanged = new EventEmitter();
  // 메뉴 변경 이벤트 추가
  fileInput;
  searchQuery = "";
  menuItems = [
    { name: "\uD648", active: true },
    { name: "\uD3B8\uC9D1", active: false },
    { name: "\uD30C\uC77C\uBCC0\uD658", active: false },
    { name: "\uAD6C\uC131", active: false },
    { name: "\uBCF4\uC548", active: false }
  ];
  toolbarActions = [
    { icon: "./images/ico-save@3x.png", tooltip: "\uC800\uC7A5", action: "save" },
    { icon: "./images/ico-print@3x.png", tooltip: "\uC778\uC1C4", action: "print" },
    { icon: "./images/ico-mail@3x.png", tooltip: "\uC774\uBA54\uC77C", action: "email" },
    { icon: "./images/ico-more@3x.png", tooltip: "\uB354\uBCF4\uAE30", action: "more" },
    { icon: "./images/ico-before@3x.png", tooltip: "\uC2E4\uD589\uCDE8\uC18C", action: "undo" },
    { icon: "./images/ico-after@3x.png", tooltip: "\uB2E4\uC2DC\uC2E4\uD589", action: "redo" },
    { icon: "./images/btn-top-ai@3x.png", tooltip: "AI \uBB34\uD611\uC9C0 \uC0DD\uC131", action: "novel-generator" }
  ];
  constructor(router) {
    this.router = router;
  }
  onToolbarAction(action) {
    if (action === "open") {
      this.openFileDialog();
    } else if (action === "save") {
      this.downloadModifiedPdf.emit();
    } else if (action === "print") {
      this.printPdf.emit();
    } else if (action === "novel-generator") {
      this.router.navigate(["/novel"]);
    }
  }
  goToPdfPage() {
    this.router.navigate(["/pdf"]);
  }
  openFileDialog() {
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === "application/pdf") {
        this.fileSelected.emit(file);
      } else {
        this.showSnackbar.emit("PDF \uD30C\uC77C\uB9CC \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
      }
    }
  }
  onSearchChange(query2) {
    this.searchQuery = query2;
    this.isSearching = true;
    this.searchResultCount = null;
    this.searchChange.emit(query2);
  }
  onMenuItemClick(item) {
    const requiresPdfMenus = ["\uD3B8\uC9D1", "\uD30C\uC77C\uBCC0\uD658", "\uAD6C\uC131", "\uBCF4\uC548"];
    if (requiresPdfMenus.includes(item.name) && !this.pdfSrc) {
      this.menuChanged.emit(item.name);
      return;
    }
    this.menuItems.forEach((menu) => menu.active = false);
    item.active = true;
    this.menuChanged.emit(item.name);
    if (item.name === "\uD3B8\uC9D1") {
      this.createSentenceOverlay.emit();
    }
  }
  onSearchEnter() {
    this.isSearching = true;
    this.searchResultCount = null;
    this.searchChange.emit(this.searchQuery);
  }
  setSearchResultCount(count) {
    this.searchResultCount = count;
  }
  ngOnInit() {
    this.loadTogglePosition();
    document.addEventListener("pdf-save-completed", () => {
      this.isSaving = false;
    });
    document.addEventListener("search-finished", () => {
      this.isSearching = false;
    });
    document.addEventListener("search-result-count", (e) => {
      this.searchResultCount = e.detail.count;
      this.isSearching = false;
    });
  }
  ngOnChanges() {
    this.updateMenuActiveState();
  }
  updateMenuActiveState() {
    this.menuItems.forEach((menu) => {
      menu.active = menu.name === this.currentActiveMenu;
    });
  }
  onSaveModeChange(mode) {
    if (this.isDragging)
      return;
    this.saveModeChanged.emit(mode);
  }
  onSavePdf() {
    if (this.isDragging || this.isSaving)
      return;
    this.isSaving = true;
    this.saveOverlayedPdf.emit();
    setTimeout(() => {
      this.isSaving = false;
    }, 3e3);
  }
  isMenuDisabled(menuName) {
    const requiresPdfMenus = ["\uD3B8\uC9D1", "\uD30C\uC77C\uBCC0\uD658", "\uAD6C\uC131", "\uBCF4\uC548"];
    return requiresPdfMenus.includes(menuName) && !this.pdfSrc;
  }
  // 드래그 시작
  onDragStart(event) {
    event.preventDefault();
    this.isDragging = true;
    const rect = event.target.closest(".save-mode-toggle")?.getBoundingClientRect();
    if (rect) {
      this.dragOffset.x = event.clientX - rect.left;
      this.dragOffset.y = event.clientY - rect.top;
    }
    document.addEventListener("mousemove", this.onDragMove.bind(this));
    document.addEventListener("mouseup", this.onDragEnd.bind(this));
  }
  // 드래그 이동
  onDragMove(event) {
    if (!this.isDragging)
      return;
    const parentRect = document.querySelector(".top-menu-bar")?.getBoundingClientRect();
    if (!parentRect)
      return;
    let newX = event.clientX - parentRect.left - this.dragOffset.x;
    let newY = event.clientY - parentRect.top - this.dragOffset.y;
    const toggleWidth = 280;
    const toggleHeight = 40;
    newX = Math.max(0, Math.min(newX, parentRect.width - toggleWidth));
    newY = Math.max(0, Math.min(newY, parentRect.height - toggleHeight));
    this.togglePosition.x = newX;
    this.togglePosition.y = newY;
  }
  // 드래그 종료
  onDragEnd() {
    this.isDragging = false;
    document.removeEventListener("mousemove", this.onDragMove.bind(this));
    document.removeEventListener("mouseup", this.onDragEnd.bind(this));
    this.saveTogglePosition();
  }
  // 토글 위치 저장
  saveTogglePosition() {
    localStorage.setItem(this.TOGGLE_POSITION_KEY, JSON.stringify(this.togglePosition));
  }
  // 토글 위치 로드
  loadTogglePosition() {
    const saved = localStorage.getItem(this.TOGGLE_POSITION_KEY);
    if (saved) {
      try {
        this.togglePosition = JSON.parse(saved);
      } catch {
      }
    }
  }
  static \u0275fac = function TopMenuBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopMenuBarComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopMenuBarComponent, selectors: [["app-top-menu-bar"]], viewQuery: function TopMenuBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, inputs: { saveMode: "saveMode", currentActiveMenu: "currentActiveMenu", pdfSrc: "pdfSrc" }, outputs: { showSnackbar: "showSnackbar", searchChange: "searchChange", fileSelected: "fileSelected", createTextEditor: "createTextEditor", createSentenceOverlay: "createSentenceOverlay", saveOverlayedPdf: "saveOverlayedPdf", downloadModifiedPdf: "downloadModifiedPdf", printPdf: "printPdf", saveModeChanged: "saveModeChanged", menuChanged: "menuChanged" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 20, vars: 6, consts: [["fileInput", ""], ["class", "search-progress-bar", 4, "ngIf"], [1, "top-menu-bar"], ["type", "file", "accept", ".pdf", 2, "display", "none", 3, "change"], [1, "brand"], [1, "toolbar"], ["title", "PDF \uD30C\uC77C \uC5F4\uAE30", 1, "toolbar-menu-label", "file-menu-btn", 3, "click"], ["class", "toolbar-btn", 3, "title", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "menu-center"], [3, "active", "disabled", "title", "click", 4, "ngFor", "ngForOf"], [1, "menu-right", 2, "display", "flex", "align-items", "center", "gap", "8px"], ["class", "search-result-count-inline", 4, "ngIf"], ["type", "text", "placeholder", "\uD14D\uC2A4\uD2B8 \uAC80\uC0C9", 1, "search-box", 3, "ngModelChange", "input", "keydown.enter", "ngModel"], [1, "search-icon"], ["width", "18", "height", "18", "viewBox", "0 0 20 20", "fill", "none"], ["cx", "9", "cy", "9", "r", "7", "stroke", "#888", "stroke-width", "2"], ["x1", "14.5", "y1", "14.5", "x2", "19", "y2", "19", "stroke", "#888", "stroke-width", "2", "stroke-linecap", "round"], ["class", "save-mode-toggle", 3, "dragging", "left", "top", 4, "ngIf"], [1, "search-progress-bar"], [1, "search-progress"], [1, "toolbar-btn", 3, "click", "title", "disabled"], [1, "toolbar-icon", 3, "src", "alt"], [3, "click", "title"], [1, "search-result-count-inline"], [1, "save-mode-toggle"], ["title", "\uB4DC\uB798\uADF8\uD558\uC5EC \uC704\uCE58 \uC774\uB3D9", 1, "drag-handle", 3, "mousedown"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "5", "cy", "5", "r", "2", "fill", "#999"], ["cx", "12", "cy", "5", "r", "2", "fill", "#999"], ["cx", "19", "cy", "5", "r", "2", "fill", "#999"], ["cx", "5", "cy", "12", "r", "2", "fill", "#999"], ["cx", "12", "cy", "12", "r", "2", "fill", "#999"], ["cx", "19", "cy", "12", "r", "2", "fill", "#999"], ["cx", "5", "cy", "19", "r", "2", "fill", "#999"], ["cx", "12", "cy", "19", "r", "2", "fill", "#999"], ["cx", "19", "cy", "19", "r", "2", "fill", "#999"], [1, "toggle-label"], [1, "toggle-switch"], ["title", "\uC624\uBC84\uB808\uC774 \uBC29\uC2DD\uC73C\uB85C \uC800\uC7A5", 1, "toggle-btn", 3, "click"], ["title", "\uC6D0\uBCF8\uD14D\uC2A4\uD2B8 \uBCC0\uACBD \uBC29\uC2DD\uC73C\uB85C \uC800\uC7A5", 1, "toggle-btn", 3, "click"], [1, "save-btn", 3, "click", "disabled", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "17,21 17,13 7,13 7,21", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "7,3 7,8 15,8", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "loading-spinner"]], template: function TopMenuBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, TopMenuBarComponent_div_0_Template, 2, 0, "div", 1);
      \u0275\u0275elementStart(1, "nav", 2)(2, "input", 3, 0);
      \u0275\u0275listener("change", function TopMenuBarComponent_Template_input_change_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275listener("click", function TopMenuBarComponent_Template_span_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goToPdfPage());
      });
      \u0275\u0275text(7, "\uD30C\uC77C");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, TopMenuBarComponent_button_8_Template, 2, 6, "button", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "ul");
      \u0275\u0275template(11, TopMenuBarComponent_li_11_Template, 2, 6, "li", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275template(13, TopMenuBarComponent_span_13_Template, 4, 1, "span", 11);
      \u0275\u0275elementStart(14, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TopMenuBarComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function TopMenuBarComponent_Template_input_input_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchChange(ctx.searchQuery));
      })("keydown.enter", function TopMenuBarComponent_Template_input_keydown_enter_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchEnter());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 14);
      \u0275\u0275element(17, "circle", 15)(18, "line", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, TopMenuBarComponent_div_19_Template, 23, 17, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isSearching);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.toolbarActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searchResultCount !== null && !ctx.isSearching);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.currentActiveMenu === "\uD3B8\uC9D1");
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.search-result-count-inline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #222;\n  background: #fffbe6;\n  border: 1px solid #ffe066;\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-weight: 500;\n  margin-left: 4px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.search-result-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 24px;\n  font-size: 15px;\n  color: #222;\n  background: #fffbe6;\n  border: 1px solid #ffe066;\n  border-radius: 4px;\n  padding: 2px 10px;\n  z-index: 1001;\n  font-weight: 500;\n}\n.search-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: transparent;\n  z-index: 1000;\n}\n.search-progress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ffd700 0%,\n      #ffe066 100%);\n  animation: _ngcontent-%COMP%_search-progress-ani 0.7s linear infinite alternate;\n  border-radius: 2px;\n}\n@keyframes _ngcontent-%COMP%_search-progress-ani {\n  0% {\n    opacity: 0.5;\n    transform: scaleX(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n}\n.top-menu-bar[_ngcontent-%COMP%] {\n  background: #fff;\n  color: rgb(56, 56, 56);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  position: relative;\n  z-index: 1000;\n  height: 48px;\n  flex-shrink: 0;\n  margin: 0;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(18, 18, 18);\n  margin-right: 32px;\n  letter-spacing: 1px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0;\n}\n.toolbar-menu-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  margin-right: 12px;\n  padding: 4px 10px 4px 0;\n  letter-spacing: -0.5px;\n}\n.toolbar-menu-label.file-menu-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n.toolbar-menu-label.file-menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.toolbar-menu-label.file-menu-btn[_ngcontent-%COMP%]:active {\n  background-color: #e0e0e0;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover, \n.toolbar-btn[_ngcontent-%COMP%]:focus {\n  background: #f2f2f2;\n}\n.toolbar-btn.disabled[_ngcontent-%COMP%], \n.toolbar-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.toolbar-btn.disabled[_ngcontent-%COMP%]   .toolbar-icon[_ngcontent-%COMP%], \n.toolbar-btn[_ngcontent-%COMP%]:disabled   .toolbar-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.menu-center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.menu-center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-left: -90px;\n}\n.menu-center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  transition: color 0.2s;\n  color: rgb(57, 57, 57);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 6px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n}\n.menu-center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  height: 2px;\n  background: #e0e0e0;\n  border-radius: 1px;\n}\n.menu-center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after {\n  background: rgb(255, 98, 0);\n}\n.menu-center[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]::after {\n  background: rgb(255, 98, 0);\n}\n.menu-center[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: rgb(255, 98, 0);\n  font-weight: 600;\n}\n.menu-center[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.menu-center[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.menu-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%] {\n  padding: 6px 32px 6px 12px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 180px;\n  font-size: 13px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\n.toolbar-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  object-fit: contain;\n  display: block;\n}\n.save-mode-toggle[_ngcontent-%COMP%] {\n  position: absolute !important;\n  display: flex !important;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 6px 12px;\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n.save-mode-toggle[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.save-mode-toggle.dragging[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);\n  transform: scale(1.02);\n  cursor: grabbing;\n}\n.drag-handle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: grab;\n  padding: 2px;\n  border-radius: 3px;\n  transition: background 0.2s;\n}\n.drag-handle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.drag-handle[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #555;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 11px;\n  border: none;\n  background: transparent;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  font-weight: 500;\n  min-width: 60px;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #e8e8e8;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background: #007acc;\n  color: white;\n}\n.toggle-btn.active[_ngcontent-%COMP%]:hover {\n  background: #005a9e;\n}\n.toggle-btn[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #ddd;\n}\n.save-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #007acc;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-left: 8px;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #005a9e;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.save-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.save-btn.saving[_ngcontent-%COMP%] {\n  background: #6c757d;\n  cursor: not-allowed;\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.save-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=top-menu-bar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopMenuBarComponent, [{
    type: Component,
    args: [{ selector: "app-top-menu-bar", standalone: false, template: `<div *ngIf="isSearching" class="search-progress-bar">
  <div class="search-progress"></div>
</div>
<!-- \uAC80\uC0C9 \uC785\uB825\uCC3D \uC624\uB978\uCABD\uC5D0 \uACB0\uACFC \uAC1C\uC218 \uD45C\uC2DC -->
<!-- \uAE30\uC874 \uC0C1\uB2E8 \uBA54\uB274\uBC14 -->
<nav class="top-menu-bar">
  <!-- \uC228\uACA8\uC9C4 \uD30C\uC77C \uC785\uB825 -->
  <input 
    #fileInput 
    type="file" 
    accept=".pdf" 
    style="display: none;" 
    (change)="onFileSelected($event)">

  <div class="brand">
    <div class="toolbar">
      <span class="toolbar-menu-label file-menu-btn" 
            (click)="goToPdfPage()" 
            title="PDF \uD30C\uC77C \uC5F4\uAE30">\uD30C\uC77C</span>
      <button class="toolbar-btn"
              *ngFor="let action of toolbarActions"
              [title]="action.tooltip"
              [class.disabled]="!pdfSrc && action.action !== 'novel-generator'"
              [disabled]="!pdfSrc && action.action !== 'novel-generator'"
              (click)="onToolbarAction(action.action)">
        <img [src]="action.icon" [alt]="action.tooltip" class="toolbar-icon" />
      </button>
    </div>
  </div>

  <div class="menu-center">
    <ul>
      <li *ngFor="let item of menuItems"
          [class.active]="item.active"
          [class.disabled]="isMenuDisabled(item.name)"
          [title]="item.name + ' \uBA54\uB274'"
          (click)="onMenuItemClick(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>

  <div class="menu-right" style="display: flex; align-items: center; gap: 8px;">
    <span *ngIf="searchResultCount !== null && !isSearching" class="search-result-count-inline">
      <b>{{searchResultCount}}</b>\uAC1C
    </span>
    <input type="text" 
           class="search-box" 
           placeholder="\uD14D\uC2A4\uD2B8 \uAC80\uC0C9"
           [(ngModel)]="searchQuery"
           (input)="onSearchChange(searchQuery)"
           (keydown.enter)="onSearchEnter()">
    <span class="search-icon">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#888" stroke-width="2" />
        <line x1="14.5" y1="14.5" x2="19" y2="19" stroke="#888" stroke-width="2" stroke-linecap="round" />
      </svg>
    </span>
  </div>

  <!-- \uC800\uC7A5 \uBAA8\uB4DC \uD1A0\uAE00 \uBC84\uD2BC (\uD3B8\uC9D1 \uBA54\uB274 \uD65C\uC131\uD654 \uC2DC\uC5D0\uB9CC \uD45C\uC2DC) -->
  <div class="save-mode-toggle" 
       *ngIf="currentActiveMenu === '\uD3B8\uC9D1'"
       [class.dragging]="isDragging"
       [style.left.px]="togglePosition.x"
       [style.top.px]="togglePosition.y">
    <div class="drag-handle" 
         title="\uB4DC\uB798\uADF8\uD558\uC5EC \uC704\uCE58 \uC774\uB3D9"
         (mousedown)="onDragStart($event)">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="5" r="2" fill="#999"/>
        <circle cx="12" cy="5" r="2" fill="#999"/>
        <circle cx="19" cy="5" r="2" fill="#999"/>
        <circle cx="5" cy="12" r="2" fill="#999"/>
        <circle cx="12" cy="12" r="2" fill="#999"/>
        <circle cx="19" cy="12" r="2" fill="#999"/>
        <circle cx="5" cy="19" r="2" fill="#999"/>
        <circle cx="12" cy="19" r="2" fill="#999"/>
        <circle cx="19" cy="19" r="2" fill="#999"/>
      </svg>
    </div>
    <span class="toggle-label">\uC800\uC7A5\uBC29\uC2DD:</span>
    <div class="toggle-switch">
      <button 
        class="toggle-btn"
        [class.active]="saveMode === 'overlay'"
        (click)="onSaveModeChange('overlay')"
        title="\uC624\uBC84\uB808\uC774 \uBC29\uC2DD\uC73C\uB85C \uC800\uC7A5">
        \uC624\uBC84\uB808\uC774
      </button>
      <button 
        class="toggle-btn"
        [class.active]="saveMode === 'textstream'"
        (click)="onSaveModeChange('textstream')"
        title="\uC6D0\uBCF8\uD14D\uC2A4\uD2B8 \uBCC0\uACBD \uBC29\uC2DD\uC73C\uB85C \uC800\uC7A5">
        \uC6D0\uBCF8\uD14D\uC2A4\uD2B8\uBCC0\uACBD
      </button>
    </div>
    
    <!-- \uC800\uC7A5 \uBC84\uD2BC -->
    <button class="save-btn" 
            [class.saving]="isSaving"
            [disabled]="isSaving"
            (click)="onSavePdf()"
            [title]="isSaving ? '\uC800\uC7A5 \uC911...' : '\uD604\uC7AC \uC120\uD0DD\uB41C \uBC29\uC2DD\uC73C\uB85C PDF \uC800\uC7A5'">
      <svg *ngIf="!isSaving" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="17,21 17,13 7,13 7,21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="7,3 7,8 15,8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div *ngIf="isSaving" class="loading-spinner"></div>
      {{ isSaving ? '\uC800\uC7A5 \uC911...' : '\uC800\uC7A5' }}
    </button>
  </div>
</nav>
`, styles: ['/* src/app/modules/shared/components/top-menu-bar/top-menu-bar.component.scss */\n.search-result-count-inline {\n  font-size: 15px;\n  color: #222;\n  background: #fffbe6;\n  border: 1px solid #ffe066;\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-weight: 500;\n  margin-left: 4px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.search-result-count {\n  position: absolute;\n  top: 5px;\n  right: 24px;\n  font-size: 15px;\n  color: #222;\n  background: #fffbe6;\n  border: 1px solid #ffe066;\n  border-radius: 4px;\n  padding: 2px 10px;\n  z-index: 1001;\n  font-weight: 500;\n}\n.search-progress-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: transparent;\n  z-index: 1000;\n}\n.search-progress {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ffd700 0%,\n      #ffe066 100%);\n  animation: search-progress-ani 0.7s linear infinite alternate;\n  border-radius: 2px;\n}\n@keyframes search-progress-ani {\n  0% {\n    opacity: 0.5;\n    transform: scaleX(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n}\n.top-menu-bar {\n  background: #fff;\n  color: rgb(56, 56, 56);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 14px;\n  position: relative;\n  z-index: 1000;\n  height: 48px;\n  flex-shrink: 0;\n  margin: 0;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: bold;\n  font-size: 20px;\n  color: rgb(18, 18, 18);\n  margin-right: 32px;\n  letter-spacing: 1px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0;\n}\n.toolbar-menu-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  margin-right: 12px;\n  padding: 4px 10px 4px 0;\n  letter-spacing: -0.5px;\n}\n.toolbar-menu-label.file-menu-btn {\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n.toolbar-menu-label.file-menu-btn:hover {\n  background-color: #f0f0f0;\n}\n.toolbar-menu-label.file-menu-btn:active {\n  background-color: #e0e0e0;\n}\n.toolbar-btn {\n  background: none;\n  border: none;\n  padding: 4px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.toolbar-btn:hover,\n.toolbar-btn:focus {\n  background: #f2f2f2;\n}\n.toolbar-btn.disabled,\n.toolbar-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.toolbar-btn.disabled .toolbar-icon,\n.toolbar-btn:disabled .toolbar-icon {\n  opacity: 0.5;\n}\n.menu-center {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.menu-center ul {\n  display: flex;\n  gap: 4px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-left: -90px;\n}\n.menu-center li {\n  position: relative;\n  cursor: pointer;\n  transition: color 0.2s;\n  color: rgb(57, 57, 57);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 6px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n}\n.menu-center li::after {\n  content: "";\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  height: 2px;\n  background: #e0e0e0;\n  border-radius: 1px;\n}\n.menu-center li:hover::after {\n  background: rgb(255, 98, 0);\n}\n.menu-center li.active::after {\n  background: rgb(255, 98, 0);\n}\n.menu-center li.active {\n  color: rgb(255, 98, 0);\n  font-weight: 600;\n}\n.menu-center li.disabled {\n  color: #ccc;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.menu-center li.disabled::after {\n  display: none;\n}\n.menu-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  position: relative;\n}\n.search-box {\n  padding: 6px 32px 6px 12px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 180px;\n  font-size: 13px;\n}\n.search-icon {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\n.toolbar-icon {\n  width: 15px;\n  height: 15px;\n  object-fit: contain;\n  display: block;\n}\n.save-mode-toggle {\n  position: absolute !important;\n  display: flex !important;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  padding: 6px 12px;\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  animation: slideIn 0.3s ease-out;\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n.save-mode-toggle:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.save-mode-toggle.dragging {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);\n  transform: scale(1.02);\n  cursor: grabbing;\n}\n.drag-handle {\n  display: flex;\n  align-items: center;\n  cursor: grab;\n  padding: 2px;\n  border-radius: 3px;\n  transition: background 0.2s;\n}\n.drag-handle:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.drag-handle:active {\n  cursor: grabbing;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.toggle-label {\n  font-size: 12px;\n  color: #555;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.toggle-switch {\n  display: flex;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.toggle-btn {\n  padding: 5px 10px;\n  font-size: 11px;\n  border: none;\n  background: transparent;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  font-weight: 500;\n  min-width: 60px;\n}\n.toggle-btn:hover {\n  background: #e8e8e8;\n}\n.toggle-btn.active {\n  background: #007acc;\n  color: white;\n}\n.toggle-btn.active:hover {\n  background: #005a9e;\n}\n.toggle-btn:first-child {\n  border-right: 1px solid #ddd;\n}\n.save-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  background: #007acc;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-left: 8px;\n}\n.save-btn:hover:not(:disabled) {\n  background: #005a9e;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.save-btn:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.save-btn.saving {\n  background: #6c757d;\n  cursor: not-allowed;\n}\n.save-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.save-btn svg {\n  flex-shrink: 0;\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=top-menu-bar.component.css.map */\n'] }]
  }], () => [{ type: Router }], { saveMode: [{
    type: Input
  }], currentActiveMenu: [{
    type: Input
  }], pdfSrc: [{
    type: Input
  }], showSnackbar: [{
    type: Output
  }], searchChange: [{
    type: Output
  }], fileSelected: [{
    type: Output
  }], createTextEditor: [{
    type: Output
  }], createSentenceOverlay: [{
    type: Output
  }], saveOverlayedPdf: [{
    type: Output
  }], downloadModifiedPdf: [{
    type: Output
  }], printPdf: [{
    type: Output
  }], saveModeChanged: [{
    type: Output
  }], menuChanged: [{
    type: Output
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopMenuBarComponent, { className: "TopMenuBarComponent", filePath: "src/app/modules/shared/components/top-menu-bar/top-menu-bar.component.ts", lineNumber: 11 });
})();

// src/app/modules/shared/components/vertical-menu/vertical-menu.component.ts
function VerticalMenuComponent_ng_container_1_button_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementContainerEnd();
  }
}
function VerticalMenuComponent_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function VerticalMenuComponent_ng_container_1_button_1_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMenuItemClick(item_r2));
    });
    \u0275\u0275template(1, VerticalMenuComponent_ng_container_1_button_1_ng_container_1_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275classProp("active", item_r2.active)("page-toggle-btn", item_r2.id === "page-panel-toggle");
    \u0275\u0275property("title", item_r2.tooltip);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.id === "page-panel-toggle");
  }
}
function VerticalMenuComponent_ng_container_1_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementContainerEnd();
  }
}
function VerticalMenuComponent_ng_container_1_button_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementContainerEnd();
  }
}
function VerticalMenuComponent_ng_container_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function VerticalMenuComponent_ng_container_1_button_4_Template_button_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMenuItemClick(item_r5));
    });
    \u0275\u0275template(1, VerticalMenuComponent_ng_container_1_button_4_ng_container_1_Template, 2, 0, "ng-container", 1)(2, VerticalMenuComponent_ng_container_1_button_4_ng_container_2_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("title", item_r5.tooltip);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.id === "zoom-in");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.id === "zoom-out");
  }
}
function VerticalMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, VerticalMenuComponent_ng_container_1_button_1_Template, 2, 6, "button", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275template(4, VerticalMenuComponent_ng_container_1_button_4_Template, 3, 3, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.leftMenuItems);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.zoomItems);
  }
}
function VerticalMenuComponent_ng_container_2_button_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementContainerEnd();
  }
}
function VerticalMenuComponent_ng_container_2_button_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementContainerEnd();
  }
}
function VerticalMenuComponent_ng_container_2_button_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 14);
    \u0275\u0275elementContainerEnd();
  }
}
function VerticalMenuComponent_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function VerticalMenuComponent_ng_container_2_button_1_Template_button_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMenuItemClick(item_r7));
    });
    \u0275\u0275template(1, VerticalMenuComponent_ng_container_2_button_1_ng_container_1_Template, 2, 0, "ng-container", 1)(2, VerticalMenuComponent_ng_container_2_button_1_ng_container_2_Template, 2, 0, "ng-container", 1)(3, VerticalMenuComponent_ng_container_2_button_1_ng_container_3_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275classProp("active", item_r7.active)("edit-toggle-btn", item_r7.id === "edit-mode")("pdf-content-btn", item_r7.id === "pdf-content");
    \u0275\u0275property("title", item_r7.tooltip);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.id === "ai-features");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.id === "translate");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.id === "edit-mode");
  }
}
function VerticalMenuComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, VerticalMenuComponent_ng_container_2_button_1_Template, 4, 10, "button", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.rightMenuItems);
  }
}
var VerticalMenuComponent = class _VerticalMenuComponent {
  position = "left";
  sidebarVisible = false;
  propertiesVisible = false;
  aiTranslateVisible = false;
  aiFeaturesVisible = false;
  pdfContentVisible = false;
  menuAction = new EventEmitter();
  get leftMenuItems() {
    return [
      {
        id: "page-panel-toggle",
        icon: "",
        tooltip: "\uD398\uC774\uC9C0 \uD328\uB110 \uC5F4\uAE30/\uB2EB\uAE30",
        action: "toggle-sidebar",
        active: this.sidebarVisible
      }
    ];
  }
  get rightMenuItems() {
    return [
      {
        id: "ai-features",
        icon: "",
        tooltip: "AI \uAE30\uB2A5",
        action: "ai-features",
        active: this.aiFeaturesVisible
      },
      {
        id: "translate",
        icon: "",
        tooltip: "AI \uBC88\uC5ED \uAE30\uB2A5",
        action: "translate",
        active: this.aiTranslateVisible
      },
      {
        id: "edit-mode",
        icon: "",
        tooltip: "\uD3B8\uC9D1 \uAE30\uB2A5",
        action: "toggle-properties",
        active: this.propertiesVisible
      }
    ];
  }
  get zoomItems() {
    return [
      {
        id: "zoom-in",
        icon: "",
        tooltip: "\uD655\uB300",
        action: "zoom-in"
      },
      {
        id: "zoom-out",
        icon: "",
        tooltip: "\uCD95\uC18C",
        action: "zoom-out"
      }
    ];
  }
  onMenuItemClick(item) {
    this.menuAction.emit(item.action);
  }
  static \u0275fac = function VerticalMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerticalMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerticalMenuComponent, selectors: [["app-vertical-menu"]], inputs: { position: "position", sidebarVisible: "sidebarVisible", propertiesVisible: "propertiesVisible", aiTranslateVisible: "aiTranslateVisible", aiFeaturesVisible: "aiFeaturesVisible", pdfContentVisible: "pdfContentVisible" }, outputs: { menuAction: "menuAction" }, standalone: false, decls: 3, vars: 6, consts: [[1, "vertical-menu"], [4, "ngIf"], [3, "active", "page-toggle-btn", "title", "click", 4, "ngFor", "ngForOf"], [2, "flex", "1"], [1, "zoom-vertical-group"], ["class", "zoom-btn", 3, "title", "click", 4, "ngFor", "ngForOf"], [3, "click", "title"], ["src", "./images/ico-page@3x.png", "alt", "ai", "width", "22", "height", "22"], [1, "zoom-btn", 3, "click", "title"], ["src", "./images/btn-gnb-zoom@3x.png", "alt", "ai", "width", "20", "height", "20"], ["src", "./images/btn-gnb-zoom1@3x.png", "alt", "ai", "width", "20", "height", "20"], [3, "active", "edit-toggle-btn", "pdf-content-btn", "title", "click", 4, "ngFor", "ngForOf"], ["src", "./images/btn-rnb-ai-on@3x.png", "alt", "ai", "width", "22", "height", "22"], ["src", "./images/btn-rnb-tranlator-off@3x.png", "alt", "ai", "width", "22", "height", "22"], ["src", "./images/btn-rnb-setting-off@3x.png", "alt", "ai", "width", "22", "height", "22"]], template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, VerticalMenuComponent_ng_container_1_Template, 5, 2, "ng-container", 1)(2, VerticalMenuComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("left", ctx.position === "left")("right", ctx.position === "right");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.position === "left");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.position === "right");
    }
  }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.vertical-menu[_ngcontent-%COMP%] {\n  width: 40px;\n  background: #fff;\n  border-radius: 0;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0;\n  position: fixed;\n  top: 130px;\n  bottom: 0;\n  z-index: 200;\n  height: calc(100vh - 130px);\n}\n.vertical-menu.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.vertical-menu.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n.vertical-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #555;\n  border-radius: 0;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: auto;\n  position: relative;\n  z-index: 201;\n}\n.vertical-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\nbutton[_ngcontent-%COMP%]   .ai-icon-bg[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%]   img[src$="btn-rnb-ai-on@3x.png"][_ngcontent-%COMP%] {\n  background: #555;\n  border-radius: 6px;\n  padding: 2px;\n}\n.vertical-menu[_ngcontent-%COMP%]   img[src$="ico-page@3x.png"][_ngcontent-%COMP%] {\n  background: #555;\n  border-radius: 2px;\n  padding: 2px;\n}\n.zoom-vertical-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: center;\n  margin-bottom: 90px;\n}\n.zoom-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #555;\n  border-radius: 0;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zoom-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.page-toggle-btn.active[_ngcontent-%COMP%] {\n  background: #f0f0f0 !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\n.page-toggle-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  stroke: #fff !important;\n  fill: #d32f2f !important;\n  transition: stroke 0.2s, fill 0.2s;\n}\n.edit-toggle-btn.active[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\nbutton[title*=\\bc88\\c5ed].active[_ngcontent-%COMP%], \nbutton[title*="AI \\bc88\\c5ed"].active[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\nbutton[title*="AI \\ae30\\b2a5"].active[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\n.pdf-content-btn.active[_ngcontent-%COMP%] {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\n/*# sourceMappingURL=vertical-menu.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerticalMenuComponent, [{
    type: Component,
    args: [{ selector: "app-vertical-menu", standalone: false, template: `<!-- \uC138\uB85C \uBA54\uB274 -->
<div class="vertical-menu" [class.left]="position === 'left'" [class.right]="position === 'right'">

  <!-- \uC67C\uCABD \uBA54\uB274 \uD56D\uBAA9\uB4E4 -->
  <ng-container *ngIf="position === 'left'">
    <button *ngFor="let item of leftMenuItems" [class.active]="item.active"
      [class.page-toggle-btn]="item.id === 'page-panel-toggle'" [title]="item.tooltip" (click)="onMenuItemClick(item)">
      <!-- \uD398\uC774\uC9C0 \uD328\uB110 \uD1A0\uAE00 \uC544\uC774\uCF58 -->
      <ng-container *ngIf="item.id === 'page-panel-toggle'">
        <img src="./images/ico-page@3x.png" alt="ai" width="22" height="22" />
      </ng-container>
    </button>

    <!-- \uC2A4\uD398\uC774\uC11C -->
    <div style="flex: 1;"></div>

    <!-- \uC90C \uCEE8\uD2B8\uB864 -->
    <div class="zoom-vertical-group">
      <button *ngFor="let item of zoomItems" class="zoom-btn" [title]="item.tooltip" (click)="onMenuItemClick(item)">
        <!-- \uD655\uB300 \uC544\uC774\uCF58 -->
        <ng-container *ngIf="item.id === 'zoom-in'">
          <img src="./images/btn-gnb-zoom@3x.png" alt="ai" width="20" height="20" />
        </ng-container>
        <!-- \uCD95\uC18C \uC544\uC774\uCF58 -->
        <ng-container *ngIf="item.id === 'zoom-out'">
          <img src="./images/btn-gnb-zoom1@3x.png" alt="ai" width="20" height="20" />
        </ng-container>
      </button>
    </div>
  </ng-container>

  <!-- \uC624\uB978\uCABD \uBA54\uB274 \uD56D\uBAA9\uB4E4 -->
  <ng-container *ngIf="position === 'right'">
    <button *ngFor="let item of rightMenuItems" [class.active]="item.active"
      [class.edit-toggle-btn]="item.id === 'edit-mode'"
      [class.pdf-content-btn]="item.id === 'pdf-content'"
      [title]="item.tooltip" (click)="onMenuItemClick(item)">
      <!-- AI \uAE30\uB2A5 \uC544\uC774\uCF58 -->
      <ng-container *ngIf="item.id === 'ai-features'">
        <img src="./images/btn-rnb-ai-on@3x.png" alt="ai" width="22" height="22" />
      </ng-container>
      <!-- \uBC88\uC5ED \uAE30\uB2A5 \uC544\uC774\uCF58 -->
      <ng-container *ngIf="item.id === 'translate'">
        <img src="./images/btn-rnb-tranlator-off@3x.png" alt="ai" width="22" height="22" />
      </ng-container>
      <!-- \uD3B8\uC9D1 \uBAA8\uB4DC \uC544\uC774\uCF58 -->
      <ng-container *ngIf="item.id === 'edit-mode'">
        <img src="./images/btn-rnb-setting-off@3x.png" alt="ai" width="22" height="22" />
      </ng-container>
    </button>
  </ng-container>

</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/vertical-menu/vertical-menu.component.scss */\n.vertical-menu {\n  width: 40px;\n  background: #fff;\n  border-radius: 0;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 0;\n  position: fixed;\n  top: 130px;\n  bottom: 0;\n  z-index: 200;\n  height: calc(100vh - 130px);\n}\n.vertical-menu.left {\n  left: 0;\n}\n.vertical-menu.right {\n  right: 0;\n}\n.vertical-menu button {\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #555;\n  border-radius: 0;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: auto;\n  position: relative;\n  z-index: 201;\n}\n.vertical-menu button:hover {\n  background: #f0f0f0;\n}\nbutton .ai-icon-bg,\nbutton img[src$="btn-rnb-ai-on@3x.png"] {\n  background: #555;\n  border-radius: 6px;\n  padding: 2px;\n}\n.vertical-menu img[src$="ico-page@3x.png"] {\n  background: #555;\n  border-radius: 2px;\n  padding: 2px;\n}\n.zoom-vertical-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: center;\n  margin-bottom: 90px;\n}\n.zoom-btn {\n  width: 40px;\n  height: 40px;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #555;\n  border-radius: 0;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zoom-btn:hover {\n  background: #f0f0f0;\n}\n.page-toggle-btn.active {\n  background: #f0f0f0 !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\n.page-toggle-btn.active svg rect {\n  stroke: #fff !important;\n  fill: #d32f2f !important;\n  transition: stroke 0.2s, fill 0.2s;\n}\n.edit-toggle-btn.active {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\nbutton[title*=\\bc88\\c5ed].active,\nbutton[title*="AI \\bc88\\c5ed"].active {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\nbutton[title*="AI \\ae30\\b2a5"].active {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\n.pdf-content-btn.active {\n  background: rgba(211, 47, 47, 0.13) !important;\n  border-radius: 10px !important;\n  transition: background 0.2s;\n  width: 35px;\n  height: 35px;\n}\n/*# sourceMappingURL=vertical-menu.component.css.map */\n'] }]
  }], null, { position: [{
    type: Input
  }], sidebarVisible: [{
    type: Input
  }], propertiesVisible: [{
    type: Input
  }], aiTranslateVisible: [{
    type: Input
  }], aiFeaturesVisible: [{
    type: Input
  }], pdfContentVisible: [{
    type: Input
  }], menuAction: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerticalMenuComponent, { className: "VerticalMenuComponent", filePath: "src/app/modules/shared/components/vertical-menu/vertical-menu.component.ts", lineNumber: 20 });
})();

// src/app/services/iframe-detector.service.ts
var IframeDetectorService = class _IframeDetectorService {
  /**
   * 현재 페이지가 iframe 내부에서 실행되는지 확인
   */
  isInsideIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  /**
   * 데스크톱 모드인지 확인 (iframe이 아닌 경우)
   */
  isDesktopMode() {
    return !this.isInsideIframe();
  }
  static \u0275fac = function IframeDetectorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IframeDetectorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IframeDetectorService, factory: _IframeDetectorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IframeDetectorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/components/debug-console/debug-console.component.ts
function DebugConsoleComponent_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Debug Console");
    \u0275\u0275elementEnd();
  }
}
function DebugConsoleComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.logs.length, ")");
  }
}
function DebugConsoleComponent_div_0_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function DebugConsoleComponent_div_0_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAutoScroll());
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.autoScroll ? "\uC790\uB3D9 \uC2A4\uD06C\uB864 \uB044\uAE30" : "\uC790\uB3D9 \uC2A4\uD06C\uB864 \uCF1C\uAE30");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.autoScroll ? "\u25BC" : "\u23F8");
  }
}
function DebugConsoleComponent_div_0_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function DebugConsoleComponent_div_0_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearLogs());
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275elementEnd()();
  }
}
function DebugConsoleComponent_div_0_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function DebugConsoleComponent_div_0_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyLogs());
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "\u2398");
    \u0275\u0275elementEnd()();
  }
}
function DebugConsoleComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("log-info", log_r6.level === "info")("log-warn", log_r6.level === "warn")("log-error", log_r6.level === "error")("log-success", log_r6.level === "success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(log_r6.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getIcon(log_r6.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("[", log_r6.category, "]");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r6.message);
  }
}
function DebugConsoleComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " \uB85C\uADF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
  }
}
function DebugConsoleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("mousedown", function DebugConsoleComponent_div_0_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayMouseDown($event));
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("mousedown", function DebugConsoleComponent_div_0_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275listener("mousedown", function DebugConsoleComponent_div_0_Template_div_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHeaderMouseDown($event));
    });
    \u0275\u0275elementStart(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5, "\u{1F39A}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DebugConsoleComponent_div_0_span_6_Template, 2, 0, "span", 7)(7, DebugConsoleComponent_div_0_span_7_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275template(9, DebugConsoleComponent_div_0_button_9_Template, 3, 2, "button", 10)(10, DebugConsoleComponent_div_0_button_10_Template, 3, 0, "button", 11)(11, DebugConsoleComponent_div_0_button_11_Template, 3, 0, "button", 12);
    \u0275\u0275elementStart(12, "button", 13);
    \u0275\u0275listener("click", function DebugConsoleComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14, "\u2715");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 15, 0);
    \u0275\u0275template(17, DebugConsoleComponent_div_0_div_17_Template, 9, 12, "div", 16)(18, DebugConsoleComponent_div_0_div_18_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275listener("mousedown", function DebugConsoleComponent_div_0_Template_div_mousedown_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResizeMouseDown($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r1.position.x, "px")("top", ctx_r1.position.y, "px")("width", ctx_r1.size.width, "px")("height", ctx_r1.size.height, "px");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.size.width > 250);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.size.width > 250);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.size.width > 200);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.size.width > 200);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.size.width > 200);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.logs)("ngForTrackBy", ctx_r1.trackByIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.logs.length === 0);
  }
}
var DebugConsoleComponent = class _DebugConsoleComponent {
  debugLogger;
  snackbar;
  destroy$ = new Subject();
  iframeDetector = inject(IframeDetectorService);
  isVisible = false;
  isInsideIframe = false;
  logs = [];
  autoScroll = true;
  hasUserManuallyClosed = false;
  // 사용자가 수동으로 닫았는지 추적
  // 드래그 상태
  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;
  // 리사이즈 상태
  isResizing = false;
  resizeStartX = 0;
  resizeStartY = 0;
  // 위치 및 크기
  position = { x: 100, y: 100 };
  size = { width: 600, height: 400 };
  constructor(debugLogger, snackbar) {
    this.debugLogger = debugLogger;
    this.snackbar = snackbar;
    this.isInsideIframe = this.iframeDetector.isInsideIframe();
    const savedVisibility = localStorage.getItem("debugConsoleVisible");
    const userManuallyClosed = localStorage.getItem("debugConsoleUserClosed");
    if (userManuallyClosed === "true") {
      this.hasUserManuallyClosed = true;
      this.isVisible = false;
    } else if (savedVisibility === "true") {
      this.isVisible = true;
    }
    const savedPosition = localStorage.getItem("debugConsolePosition");
    const savedSize = localStorage.getItem("debugConsoleSize");
    if (savedPosition) {
      try {
        this.position = JSON.parse(savedPosition);
      } catch (e) {
      }
    }
    if (savedSize) {
      try {
        this.size = JSON.parse(savedSize);
      } catch (e) {
      }
    }
  }
  ngOnInit() {
    this.debugLogger.logs$.pipe(takeUntil(this.destroy$)).subscribe((logs) => {
      this.logs = logs;
      if (this.autoScroll) {
        setTimeout(() => this.scrollToBottom(), 10);
      }
    });
    this.debugLogger.enabled$.pipe(takeUntil(this.destroy$)).subscribe((enabled) => {
      if (enabled && !this.hasUserManuallyClosed) {
        this.isVisible = true;
        localStorage.setItem("debugConsoleVisible", "true");
      } else if (!enabled) {
        this.isVisible = false;
        this.hasUserManuallyClosed = false;
        localStorage.removeItem("debugConsoleUserClosed");
      }
    });
    const savedPosition = localStorage.getItem("debugConsolePosition");
    if (!savedPosition) {
      this.centerWindow();
    } else {
      this.ensureVisible();
    }
    window.addEventListener("resize", () => this.ensureVisible());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * 콘솔 표시
   */
  show() {
    this.isVisible = true;
    this.hasUserManuallyClosed = false;
    localStorage.setItem("debugConsoleVisible", "true");
    localStorage.removeItem("debugConsoleUserClosed");
    this.debugLogger.setEnabled(true);
  }
  /**
   * 콘솔 숨기기
   */
  close() {
    this.isVisible = false;
    this.hasUserManuallyClosed = true;
    localStorage.setItem("debugConsoleVisible", "false");
    localStorage.setItem("debugConsoleUserClosed", "true");
    this.debugLogger.setEnabled(false);
  }
  /**
   * 콘솔 토글
   */
  toggle() {
    if (this.isVisible) {
      this.close();
    } else {
      this.show();
    }
  }
  /**
   * 로그 지우기
   */
  clearLogs() {
    this.debugLogger.clear();
    this.snackbar.showInfo("\uB85C\uADF8\uB97C \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4.");
  }
  /**
   * 로그 복사
   */
  copyLogs() {
    const text = this.debugLogger.exportAsText();
    navigator.clipboard.writeText(text).then(() => {
      this.snackbar.showSuccess("\uB85C\uADF8\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4!");
    }).catch((err) => {
      console.warn("\uBCF5\uC0AC \uC2E4\uD328:", err);
      this.snackbar.showError("\uB85C\uADF8 \uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
    });
  }
  /**
   * 자동 스크롤 토글
   */
  toggleAutoScroll() {
    this.autoScroll = !this.autoScroll;
    if (this.autoScroll) {
      this.scrollToBottom();
    }
  }
  /**
   * 오버레이 클릭 (닫기)
   */
  onOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  /**
   * 헤더 드래그 시작
   */
  onHeaderMouseDown(event) {
    if (event.button !== 0)
      return;
    this.isDragging = true;
    this.dragStartX = event.clientX - this.position.x;
    this.dragStartY = event.clientY - this.position.y;
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    event.preventDefault();
  }
  /**
   * 리사이즈 시작
   */
  onResizeMouseDown(event) {
    if (event.button !== 0)
      return;
    this.isResizing = true;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * 마우스 이동
   */
  onMouseMove = (event) => {
    if (this.isDragging) {
      this.position.x = event.clientX - this.dragStartX;
      this.position.y = event.clientY - this.dragStartY;
      this.ensureVisible();
    } else if (this.isResizing) {
      const deltaX = event.clientX - this.resizeStartX;
      const deltaY = event.clientY - this.resizeStartY;
      this.size.width = Math.max(120, this.size.width + deltaX);
      this.size.height = Math.max(100, this.size.height + deltaY);
      this.resizeStartX = event.clientX;
      this.resizeStartY = event.clientY;
      this.ensureVisible();
    }
  };
  /**
   * 마우스 업
   */
  onMouseUp = () => {
    this.isDragging = false;
    this.isResizing = false;
    localStorage.setItem("debugConsolePosition", JSON.stringify(this.position));
    localStorage.setItem("debugConsoleSize", JSON.stringify(this.size));
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  };
  /**
   * 화면 내 위치 보장
   */
  ensureVisible() {
    const margin = 20;
    const maxX = window.innerWidth - this.size.width - margin;
    const maxY = window.innerHeight - this.size.height - margin;
    this.position.x = Math.max(margin, Math.min(this.position.x, maxX));
    this.position.y = Math.max(margin, Math.min(this.position.y, maxY));
  }
  /**
   * 화면 중앙 배치
   */
  centerWindow() {
    this.position.x = (window.innerWidth - this.size.width) / 2;
    this.position.y = (window.innerHeight - this.size.height) / 2;
  }
  /**
   * 맨 아래로 스크롤
   */
  scrollToBottom() {
    const content = document.querySelector(".debug-content");
    if (content) {
      content.scrollTop = content.scrollHeight;
    }
  }
  /**
   * 시간 포맷
   */
  formatTime(date) {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
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
   * TrackBy 함수
   */
  trackByIndex(index) {
    return index;
  }
  static \u0275fac = function DebugConsoleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebugConsoleComponent)(\u0275\u0275directiveInject(DebugLoggerService), \u0275\u0275directiveInject(SnackbarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugConsoleComponent, selectors: [["app-debug-console"]], decls: 1, vars: 1, consts: [["logContainer", ""], ["class", "debug-console-overlay", 3, "mousedown", 4, "ngIf"], [1, "debug-console-overlay", 3, "mousedown"], [1, "debug-console", 3, "mousedown"], [1, "debug-header", 3, "mousedown"], [1, "debug-title"], [1, "debug-icon"], ["class", "debug-title-text", 4, "ngIf"], ["class", "debug-count", 4, "ngIf"], [1, "debug-actions"], ["class", "debug-btn", 3, "title", "click", 4, "ngIf"], ["class", "debug-btn", "title", "\uB85C\uADF8 \uC9C0\uC6B0\uAE30", 3, "click", 4, "ngIf"], ["class", "debug-btn", "title", "\uB85C\uADF8 \uBCF5\uC0AC", 3, "click", 4, "ngIf"], ["title", "\uB2EB\uAE30", 1, "debug-btn", 3, "click"], [1, "btn-icon"], [1, "debug-content"], ["class", "debug-log", 3, "log-info", "log-warn", "log-error", "log-success", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "debug-empty", 4, "ngIf"], [1, "resize-handle", 3, "mousedown"], [1, "debug-title-text"], [1, "debug-count"], [1, "debug-btn", 3, "click", "title"], ["title", "\uB85C\uADF8 \uC9C0\uC6B0\uAE30", 1, "debug-btn", 3, "click"], ["title", "\uB85C\uADF8 \uBCF5\uC0AC", 1, "debug-btn", 3, "click"], [1, "debug-log"], [1, "log-time"], [1, "log-icon"], [1, "log-category"], [1, "log-message"], [1, "debug-empty"]], template: function DebugConsoleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DebugConsoleComponent_div_0_Template, 20, 16, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible && !ctx.isInsideIframe);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.debug-console-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  pointer-events: none;\n}\n.debug-console[_ngcontent-%COMP%] {\n  position: fixed;\n  background: rgba(26, 26, 46, 0.75);\n  border: 1px solid rgba(83, 168, 182, 0.6);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  overflow: hidden;\n  pointer-events: auto;\n}\n.debug-header[_ngcontent-%COMP%] {\n  background: rgba(15, 52, 96, 0.7);\n  border-bottom: 1px solid rgba(83, 168, 182, 0.5);\n  padding: 6px 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: move;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #87ceeb;\n  font-weight: bold;\n  font-size: 12px;\n  min-width: 0;\n  flex-shrink: 1;\n}\n.debug-title-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.debug-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  filter: drop-shadow(0 0 2px rgba(135, 206, 235, 0.8));\n  animation: _ngcontent-%COMP%_wiggle 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_wiggle {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(-5deg);\n  }\n  75% {\n    transform: rotate(5deg);\n  }\n}\n.debug-count[_ngcontent-%COMP%] {\n  color: #e94560;\n  font-size: 11px;\n  font-weight: normal;\n  background: rgba(233, 69, 96, 0.2);\n  padding: 2px 6px;\n  border-radius: 10px;\n}\n.debug-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  flex-shrink: 0;\n}\n.debug-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  padding: 3px 5px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.2s;\n  color: #ffffff;\n  min-width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.debug-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: scale(1.05);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 1;\n  display: block;\n}\n.debug-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px;\n  background: transparent;\n  color: #e8e8e8;\n  font-size: 10px;\n  line-height: 1.4;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.debug-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.debug-log[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding: 4px 0;\n  border-bottom: 1px solid rgba(83, 168, 182, 0.1);\n  transition: background 0.2s;\n}\n.debug-log[_ngcontent-%COMP%]:hover {\n  background: rgba(83, 168, 182, 0.1);\n  padding-left: 4px;\n  margin-left: -4px;\n  border-radius: 4px;\n}\n.debug-log[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.log-time[_ngcontent-%COMP%] {\n  color: #858585;\n  flex-shrink: 0;\n  width: 70px;\n  font-size: 10px;\n}\n.log-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 18px;\n  font-size: 12px;\n}\n.log-category[_ngcontent-%COMP%] {\n  color: #53a8b6;\n  font-weight: bold;\n  flex-shrink: 0;\n  min-width: 90px;\n  font-size: 11px;\n}\n.log-message[_ngcontent-%COMP%] {\n  color: #d4d4d4;\n  word-break: break-word;\n  font-size: 11px;\n}\n.log-info[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%] {\n  color: #4fc3f7;\n}\n.log-warn[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%] {\n  color: #ffb74d;\n}\n.log-error[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%] {\n  color: #e57373;\n}\n.log-success[_ngcontent-%COMP%]   .log-message[_ngcontent-%COMP%] {\n  color: #81c784;\n}\n.debug-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n  padding: 30px;\n  font-style: italic;\n  font-size: 12px;\n}\n.resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  cursor: nwse-resize;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0%,\n      transparent 50%,\n      #53a8b6 50%,\n      #53a8b6 100%);\n  border-radius: 0 0 14px 0;\n  opacity: 0.6;\n  transition: opacity 0.2s, transform 0.2s;\n  z-index: 10;\n}\n.resize-handle[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0%,\n      transparent 50%,\n      #e94560 50%,\n      #e94560 100%);\n  transform: scale(1.1);\n}\n.resize-handle[_ngcontent-%COMP%]::before {\n  content: "\\22f0";\n  position: absolute;\n  right: 2px;\n  bottom: 0px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  font-weight: bold;\n  pointer-events: none;\n}\n/*# sourceMappingURL=debug-console.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugConsoleComponent, [{
    type: Component,
    args: [{ selector: "app-debug-console", standalone: true, imports: [CommonModule], template: `
    <!-- iframe \uB0B4\uBD80\uC5D0\uC11C\uB294 \uB514\uBC84\uADF8 \uCF58\uC194 \uC228\uAE40 -->
    <div class="debug-console-overlay" 
         *ngIf="isVisible && !isInsideIframe"
         (mousedown)="onOverlayMouseDown($event)">
      <div class="debug-console"
           [style.left.px]="position.x"
           [style.top.px]="position.y"
           [style.width.px]="size.width"
           [style.height.px]="size.height"
           (mousedown)="$event.stopPropagation()">
        
        <!-- \uD5E4\uB354 (\uB4DC\uB798\uADF8 \uAC00\uB2A5) -->
        <div class="debug-header"
             (mousedown)="onHeaderMouseDown($event)">
          <div class="debug-title">
            <span class="debug-icon">\u{1F39A}\uFE0F</span>
            <span class="debug-title-text" *ngIf="size.width > 250">Debug Console</span>
            <span class="debug-count" *ngIf="size.width > 250">({{ logs.length }})</span>
          </div>
          <div class="debug-actions">
            <button class="debug-btn" (click)="toggleAutoScroll()" [title]="autoScroll ? '\uC790\uB3D9 \uC2A4\uD06C\uB864 \uB044\uAE30' : '\uC790\uB3D9 \uC2A4\uD06C\uB864 \uCF1C\uAE30'" *ngIf="size.width > 200">
              <span class="btn-icon">{{ autoScroll ? '\u25BC' : '\u23F8' }}</span>
            </button>
            <button class="debug-btn" (click)="clearLogs()" title="\uB85C\uADF8 \uC9C0\uC6B0\uAE30" *ngIf="size.width > 200">
              <span class="btn-icon">\xD7</span>
            </button>
            <button class="debug-btn" (click)="copyLogs()" title="\uB85C\uADF8 \uBCF5\uC0AC" *ngIf="size.width > 200">
              <span class="btn-icon">\u2398</span>
            </button>
            <button class="debug-btn" (click)="close()" title="\uB2EB\uAE30">
              <span class="btn-icon">\u2715</span>
            </button>
          </div>
        </div>

        <!-- \uB85C\uADF8 \uB0B4\uC6A9 -->
        <div class="debug-content" #logContainer>
          <div class="debug-log" 
               *ngFor="let log of logs; trackBy: trackByIndex"
               [class.log-info]="log.level === 'info'"
               [class.log-warn]="log.level === 'warn'"
               [class.log-error]="log.level === 'error'"
               [class.log-success]="log.level === 'success'">
            <span class="log-time">{{ formatTime(log.timestamp) }}</span>
            <span class="log-icon">{{ getIcon(log.level) }}</span>
            <span class="log-category">[{{ log.category }}]</span>
            <span class="log-message">{{ log.message }}</span>
          </div>
          <div class="debug-empty" *ngIf="logs.length === 0">
            \uB85C\uADF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
          </div>
        </div>

        <!-- \uB9AC\uC0AC\uC774\uC988 \uD578\uB4E4 -->
        <div class="resize-handle" 
             (mousedown)="onResizeMouseDown($event)">
        </div>
      </div>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;8e8a210a7e89205b673104950dbfd9616dae37aafb235934f1dd805c2d735874;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/shared/components/debug-console/debug-console.component.ts */\n.debug-console-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  pointer-events: none;\n}\n.debug-console {\n  position: fixed;\n  background: rgba(26, 26, 46, 0.75);\n  border: 1px solid rgba(83, 168, 182, 0.6);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n  overflow: hidden;\n  pointer-events: auto;\n}\n.debug-header {\n  background: rgba(15, 52, 96, 0.7);\n  border-bottom: 1px solid rgba(83, 168, 182, 0.5);\n  padding: 6px 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: move;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #87ceeb;\n  font-weight: bold;\n  font-size: 12px;\n  min-width: 0;\n  flex-shrink: 1;\n}\n.debug-title-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.debug-icon {\n  font-size: 14px;\n  filter: drop-shadow(0 0 2px rgba(135, 206, 235, 0.8));\n  animation: wiggle 2s infinite;\n}\n@keyframes wiggle {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(-5deg);\n  }\n  75% {\n    transform: rotate(5deg);\n  }\n}\n.debug-count {\n  color: #e94560;\n  font-size: 11px;\n  font-weight: normal;\n  background: rgba(233, 69, 96, 0.2);\n  padding: 2px 6px;\n  border-radius: 10px;\n}\n.debug-actions {\n  display: flex;\n  gap: 3px;\n  flex-shrink: 0;\n}\n.debug-btn {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  padding: 3px 5px;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.2s;\n  color: #ffffff;\n  min-width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.debug-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: scale(1.05);\n}\n.btn-icon {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 1;\n  display: block;\n}\n.debug-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px;\n  background: transparent;\n  color: #e8e8e8;\n  font-size: 10px;\n  line-height: 1.4;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.debug-content::-webkit-scrollbar {\n  display: none;\n}\n.debug-log {\n  display: flex;\n  gap: 6px;\n  padding: 4px 0;\n  border-bottom: 1px solid rgba(83, 168, 182, 0.1);\n  transition: background 0.2s;\n}\n.debug-log:hover {\n  background: rgba(83, 168, 182, 0.1);\n  padding-left: 4px;\n  margin-left: -4px;\n  border-radius: 4px;\n}\n.debug-log:last-child {\n  border-bottom: none;\n}\n.log-time {\n  color: #858585;\n  flex-shrink: 0;\n  width: 70px;\n  font-size: 10px;\n}\n.log-icon {\n  flex-shrink: 0;\n  width: 18px;\n  font-size: 12px;\n}\n.log-category {\n  color: #53a8b6;\n  font-weight: bold;\n  flex-shrink: 0;\n  min-width: 90px;\n  font-size: 11px;\n}\n.log-message {\n  color: #d4d4d4;\n  word-break: break-word;\n  font-size: 11px;\n}\n.log-info .log-message {\n  color: #4fc3f7;\n}\n.log-warn .log-message {\n  color: #ffb74d;\n}\n.log-error .log-message {\n  color: #e57373;\n}\n.log-success .log-message {\n  color: #81c784;\n}\n.debug-empty {\n  text-align: center;\n  color: #666;\n  padding: 30px;\n  font-style: italic;\n  font-size: 12px;\n}\n.resize-handle {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  cursor: nwse-resize;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0%,\n      transparent 50%,\n      #53a8b6 50%,\n      #53a8b6 100%);\n  border-radius: 0 0 14px 0;\n  opacity: 0.6;\n  transition: opacity 0.2s, transform 0.2s;\n  z-index: 10;\n}\n.resize-handle:hover {\n  opacity: 1;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 0%,\n      transparent 50%,\n      #e94560 50%,\n      #e94560 100%);\n  transform: scale(1.1);\n}\n.resize-handle::before {\n  content: "\\22f0";\n  position: absolute;\n  right: 2px;\n  bottom: 0px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  font-weight: bold;\n  pointer-events: none;\n}\n/*# sourceMappingURL=debug-console.component.css.map */\n'] }]
  }], () => [{ type: DebugLoggerService }, { type: SnackbarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugConsoleComponent, { className: "DebugConsoleComponent", filePath: "src/app/shared/components/debug-console/debug-console.component.ts", lineNumber: 302 });
})();

// src/app/modules/shared/components/global-navigator/global-navigator.component.ts
var _c02 = () => [];
function GlobalNavigatorComponent_div_0__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 10)(2, "path", 11)(3, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 15);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 10)(2, "path", 11)(3, "path", 12);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 15);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_div_15_Template_div_click_0_listener($event) {
      const mode_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateToMode(mode_r5, $event));
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275template(2, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_2_Template, 2, 0, "svg", 4)(3, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_3_Template, 4, 0, "svg", 4)(4, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_4_Template, 2, 0, "svg", 4)(5, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_5_Template, 2, 0, "svg", 4)(6, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_6_Template, 2, 0, "svg", 4)(7, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_7_Template, 2, 0, "svg", 4)(8, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_8_Template, 2, 0, "svg", 4)(9, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_9_Template, 2, 0, "svg", 4)(10, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_10_Template, 2, 0, "svg", 4)(11, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_11_Template, 2, 0, "svg", 4)(12, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_12_Template, 2, 0, "svg", 4)(13, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_13_Template, 2, 0, "svg", 4)(14, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_14_Template, 2, 0, "svg", 4)(15, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_15_Template, 2, 0, "svg", 4)(16, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_16_Template, 2, 0, "svg", 4)(17, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_17_Template, 2, 0, "svg", 4)(18, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_18_Template, 2, 0, "svg", 4)(19, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_19_Template, 2, 0, "svg", 4)(20, GlobalNavigatorComponent_div_0_div_25_div_15__svg_svg_20_Template, 2, 0, "svg", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 58);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mode_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentMode === mode_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", mode_r5 === "novel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "education");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "erp");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "loworld");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "store");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "expedition");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "chat-talk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "slack");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "project");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "desk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "wix");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "membership");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "dollar-token");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "calendar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "diary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "dashboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "community");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mode_r5 === "content");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", mode_r5 === "novel" ? "\uC18C\uC124" : mode_r5 === "education" ? "\uAD50\uC721" : mode_r5 === "erp" ? "\uC5C5\uBB34" : mode_r5 === "loworld" ? "\uD648" : mode_r5 === "store" ? "\uC2A4\uD1A0\uC5B4" : mode_r5 === "expedition" ? "\uC6D0\uC815\uB300" : mode_r5 === "chat-talk" ? "\uCC44\uD305" : mode_r5 === "slack" ? "\uD611\uC5C5" : mode_r5 === "project" ? "\uD504\uB85C\uC81D\uD2B8" : mode_r5 === "form" ? "\uD3FC" : mode_r5 === "desk" ? "\uB370\uC2A4\uD06C" : mode_r5 === "wix" ? "\uBE4C\uB354" : mode_r5 === "membership" ? "\uBA64\uBC84\uC2ED" : mode_r5 === "dollar-token" ? "\uB2EC\uB7EC\uD1A0\uD070" : mode_r5 === "calendar" ? "\uCE98\uB9B0\uB354" : mode_r5 === "diary" ? "\uB2E4\uC774\uC5B4\uB9AC" : mode_r5 === "dashboard" ? "\uB300\uC2DC\uBCF4\uB4DC" : mode_r5 === "community" ? "\uCEE4\uBBA4\uB2C8\uD2F0" : mode_r5 === "content" ? "\uCF58\uD150\uCE20" : mode_r5, " ");
  }
}
function GlobalNavigatorComponent_div_0_div_25_span_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_span_19_Template_span_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageDotClick(i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", i_r7 === ctx_r1.currentModePage);
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_20__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "path", 67);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_20__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "path", 68);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_20_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.autoSlideCounter);
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, " \u23F8 \uC911\uB2E8\uB428 ");
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "button", 61);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAutoSlide());
    });
    \u0275\u0275template(2, GlobalNavigatorComponent_div_0_div_25_div_20__svg_svg_2_Template, 2, 0, "svg", 62)(3, GlobalNavigatorComponent_div_0_div_25_div_20__svg_svg_3_Template, 2, 0, "svg", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275template(5, GlobalNavigatorComponent_div_0_div_25_div_20_span_5_Template, 3, 1, "span", 64)(6, GlobalNavigatorComponent_div_0_div_25_div_20_span_6_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.isAutoSlideActive() ? "\uC790\uB3D9 \uC2AC\uB77C\uC774\uB4DC \uC815\uC9C0" : "\uC790\uB3D9 \uC2AC\uB77C\uC774\uB4DC \uC2DC\uC791");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAutoSlideActive());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAutoSlideActive());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isAutoSlideActive());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAutoSlideActive());
  }
}
function GlobalNavigatorComponent_div_0_div_25__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 72);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25__svg_svg_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 73);
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchTab("modes"));
    });
    \u0275\u0275text(4, " \uBAA8\uB4DC\uC804\uD658 ");
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchTab("settings"));
    });
    \u0275\u0275text(8, " \uAE00\uB85C\uBC8C \uAE30\uB2A5 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 34);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNavigator());
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 35)(12, "div", 36)(13, "div", 37)(14, "div", 38);
    \u0275\u0275listener("touchstart", function GlobalNavigatorComponent_div_0_div_25_Template_div_touchstart_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTouchStart($event));
    })("touchmove", function GlobalNavigatorComponent_div_0_div_25_Template_div_touchmove_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTouchMove($event));
    })("touchend", function GlobalNavigatorComponent_div_0_div_25_Template_div_touchend_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTouchEnd());
    })("mousedown", function GlobalNavigatorComponent_div_0_div_25_Template_div_mousedown_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMouseDown($event));
    })("mousemove", function GlobalNavigatorComponent_div_0_div_25_Template_div_mousemove_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMouseMove($event));
    })("mouseup", function GlobalNavigatorComponent_div_0_div_25_Template_div_mouseup_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMouseUp());
    })("mouseleave", function GlobalNavigatorComponent_div_0_div_25_Template_div_mouseleave_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMouseLeave());
    });
    \u0275\u0275template(15, GlobalNavigatorComponent_div_0_div_25_div_15_Template, 23, 22, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 40)(17, "div", 41)(18, "div", 42);
    \u0275\u0275template(19, GlobalNavigatorComponent_div_0_div_25_span_19_Template, 1, 2, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, GlobalNavigatorComponent_div_0_div_25_div_20_Template, 7, 5, "div", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 45)(22, "div", 46)(23, "div", 47);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTheme());
    });
    \u0275\u0275elementStart(24, "div", 48);
    \u0275\u0275template(25, GlobalNavigatorComponent_div_0_div_25__svg_svg_25_Template, 2, 0, "svg", 4)(26, GlobalNavigatorComponent_div_0_div_25__svg_svg_26_Template, 2, 0, "svg", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 49)(28, "div", 50);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 51);
    \u0275\u0275text(31, "\uD654\uBA74 \uD14C\uB9C8 \uBCC0\uACBD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 52)(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 47);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_Template_div_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDebugConsole());
    });
    \u0275\u0275elementStart(36, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 8);
    \u0275\u0275element(38, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 49)(40, "div", 50);
    \u0275\u0275text(41, "\uB514\uBC84\uADF8 \uCF58\uC194");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 51);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 52)(45, "div", 54);
    \u0275\u0275element(46, "div", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 47);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_25_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleChatConsultation());
    });
    \u0275\u0275elementStart(48, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 8);
    \u0275\u0275element(50, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 49)(52, "div", 50);
    \u0275\u0275text(53, "\uCC44\uD305\uC0C1\uB2F4 \uD65C\uC131\uD654");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 51);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 52)(57, "div", 54);
    \u0275\u0275element(58, "div", 55);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "modes");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.allModes.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "settings");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("transform", "translateX(" + (ctx_r1.activeTab === "modes" ? "0%" : "-50%") + ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getModesForCurrentPage());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(22, _c02).constructor(ctx_r1.getTotalPages()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "modes");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isDarkMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDarkMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isDarkMode ? "\uB2E4\uD06C \uBAA8\uB4DC" : "\uB77C\uC774\uD2B8 \uBAA8\uB4DC");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isDarkMode ? "\u{1F319}" : "\u2600\uFE0F");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.debugLogger.isEnabled());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.debugLogger.isEnabled() ? "\uD65C\uC131\uD654\uB428" : "\uBE44\uD65C\uC131\uD654\uB428");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.debugLogger.isEnabled());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.isChatConsultationEnabled() ? "\uD65C\uC131\uD654\uB428" : "\uBE44\uD65C\uC131\uD654\uB428");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isChatConsultationEnabled());
  }
}
function GlobalNavigatorComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNavigator());
    });
    \u0275\u0275elementEnd();
  }
}
function GlobalNavigatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function GlobalNavigatorComponent_div_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNavigator());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, GlobalNavigatorComponent_div_0__svg_svg_3_Template, 2, 0, "svg", 4)(4, GlobalNavigatorComponent_div_0__svg_svg_4_Template, 4, 0, "svg", 4)(5, GlobalNavigatorComponent_div_0__svg_svg_5_Template, 2, 0, "svg", 4)(6, GlobalNavigatorComponent_div_0__svg_svg_6_Template, 2, 0, "svg", 4)(7, GlobalNavigatorComponent_div_0__svg_svg_7_Template, 2, 0, "svg", 4)(8, GlobalNavigatorComponent_div_0__svg_svg_8_Template, 2, 0, "svg", 4)(9, GlobalNavigatorComponent_div_0__svg_svg_9_Template, 2, 0, "svg", 4)(10, GlobalNavigatorComponent_div_0__svg_svg_10_Template, 2, 0, "svg", 4)(11, GlobalNavigatorComponent_div_0__svg_svg_11_Template, 2, 0, "svg", 4)(12, GlobalNavigatorComponent_div_0__svg_svg_12_Template, 2, 0, "svg", 4)(13, GlobalNavigatorComponent_div_0__svg_svg_13_Template, 2, 0, "svg", 4)(14, GlobalNavigatorComponent_div_0__svg_svg_14_Template, 2, 0, "svg", 4)(15, GlobalNavigatorComponent_div_0__svg_svg_15_Template, 2, 0, "svg", 4)(16, GlobalNavigatorComponent_div_0__svg_svg_16_Template, 2, 0, "svg", 4)(17, GlobalNavigatorComponent_div_0__svg_svg_17_Template, 2, 0, "svg", 4)(18, GlobalNavigatorComponent_div_0__svg_svg_18_Template, 2, 0, "svg", 4)(19, GlobalNavigatorComponent_div_0__svg_svg_19_Template, 2, 0, "svg", 4)(20, GlobalNavigatorComponent_div_0__svg_svg_20_Template, 2, 0, "svg", 4)(21, GlobalNavigatorComponent_div_0__svg_svg_21_Template, 2, 0, "svg", 4)(22, GlobalNavigatorComponent_div_0__svg_svg_22_Template, 2, 0, "svg", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 5);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, GlobalNavigatorComponent_div_0_div_25_Template, 59, 23, "div", 6)(26, GlobalNavigatorComponent_div_0_div_26_Template, 1, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getCurrentModeGradient());
    \u0275\u0275attribute("aria-label", ctx_r1.isOpen ? "Close navigator" : "Open navigator");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "novel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "education");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "erp");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "loworld");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "store");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "expedition");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "chat-talk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "slack");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "project");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "desk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "wix");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "membership");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "dollar-token");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "calendar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "diary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "dashboard");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "community");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentMode === "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.currentMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentModeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpen);
  }
}
var GlobalNavigatorComponent = class _GlobalNavigatorComponent {
  router;
  authService;
  themeService;
  isOpen = false;
  currentMode = "";
  activeTab = "modes";
  isDarkMode = false;
  // iframe 감지
  isInsideIframe = false;
  // 모드 페이지 관련
  currentModePage = 0;
  modesPerPage = 6;
  allModes = ["novel", "education", "erp", "loworld", "store", "expedition", "chat-talk", "slack", "project", "form", "desk", "wix", "membership", "dollar-token", "calendar", "diary", "dashboard", "community", "content"];
  // 자동 페이지 넘김
  autoSlideInterval;
  autoSlideCounterInterval;
  autoSlideCounter = 3;
  userInteracted = false;
  // 사용자 인터랙션 플래그
  // 스와이프 관련
  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  isDragging = false;
  swipeThreshold = 50;
  // 최소 스와이프 거리
  minDragDistance = 10;
  // 최소 드래그 거리 (픽셀) - 클릭과 드래그 구분
  // 🐛 디버그 콘솔 참조
  debugConsole;
  debugLogger = inject(DebugLoggerService);
  socketService = inject(ChatTalkSocketService);
  chatConsultationToggle = inject(ChatConsultationToggleService);
  iframeDetector = inject(IframeDetectorService);
  constructor(router, authService, themeService) {
    this.router = router;
    this.authService = authService;
    this.themeService = themeService;
    this.isInsideIframe = this.iframeDetector.isInsideIframe();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.updateCurrentMode(event.url);
    });
    this.updateCurrentMode(this.router.url);
    this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  // 🐛 디버그 콘솔 토글
  toggleDebugConsole() {
    const newState = this.debugLogger.toggle();
    if (this.debugConsole) {
      if (newState) {
        this.debugConsole.show();
      } else {
        this.debugConsole.close();
      }
    }
  }
  // 🔌 채팅상담 활성화/비활성화 토글
  toggleChatConsultation() {
    const newState = this.chatConsultationToggle.toggle();
    if (newState) {
      this.debugLogger.info("\uCC44\uD305\uC0C1\uB2F4", "\uFFFD \uCC44\uD305\uC0C1\uB2F4 \uD65C\uC131\uD654 - Socket \uC5F0\uACB0 \uC2DC\uC791");
    } else {
      this.debugLogger.info("\uCC44\uD305\uC0C1\uB2F4", "\u{1F4DE} \uCC44\uD305\uC0C1\uB2F4 \uBE44\uD65C\uC131\uD654 - Socket \uC5F0\uACB0 \uD574\uC81C");
      if (this.socketService.isConnected()) {
        this.socketService.disconnect();
      }
    }
  }
  // 채팅상담 활성화 상태 확인
  isChatConsultationEnabled() {
    return this.chatConsultationToggle.isEnabled();
  }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  updateCurrentMode(url) {
    if (url.includes("/education")) {
      this.currentMode = "education";
    } else if (url.includes("/novel")) {
      this.currentMode = "novel";
    } else if (url.includes("/loworld")) {
      this.currentMode = "loworld";
    } else if (url.includes("/erp")) {
      this.currentMode = "erp";
    } else if (url.includes("/store")) {
      this.currentMode = "store";
    } else if (url.includes("/expedition")) {
      this.currentMode = "expedition";
    } else if (url.includes("/chat-talk")) {
      this.currentMode = "chat-talk";
    } else if (url.includes("/slack")) {
      this.currentMode = "slack";
    } else if (url.includes("/project")) {
      this.currentMode = "project";
    } else if (url.includes("/form")) {
      this.currentMode = "form";
    } else if (url.includes("/desk")) {
      this.currentMode = "desk";
    } else if (url.includes("/wix")) {
      this.currentMode = "wix";
    } else if (url.includes("/calendar")) {
      this.currentMode = "calendar";
    } else if (url.includes("/diary")) {
      this.currentMode = "diary";
    } else {
      this.currentMode = "loworld";
    }
  }
  toggleNavigator() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.activeTab === "modes") {
      this.userInteracted = false;
      this.startAutoSlide();
    } else {
      this.stopAutoSlide();
    }
  }
  closeNavigator() {
    this.isOpen = false;
    this.userInteracted = false;
    this.stopAutoSlide();
  }
  switchTab(tab) {
    this.activeTab = tab;
    if (tab === "modes" && this.isOpen) {
      this.startAutoSlide();
    } else {
      this.stopAutoSlide();
    }
  }
  // 자동 슬라이드 시작
  startAutoSlide() {
    if (this.userInteracted) {
      return;
    }
    this.stopAutoSlide();
    this.autoSlideCounter = 3;
    this.autoSlideInterval = setInterval(() => {
      if (this.userInteracted) {
        this.stopAutoSlide();
        return;
      }
      const totalPages = this.getTotalPages();
      this.currentModePage = (this.currentModePage + 1) % totalPages;
      this.autoSlideCounter = 3;
    }, 3e3);
    this.autoSlideCounterInterval = setInterval(() => {
      if (this.userInteracted) {
        this.stopAutoSlide();
        return;
      }
      this.autoSlideCounter--;
      if (this.autoSlideCounter < 0) {
        this.autoSlideCounter = 3;
      }
    }, 1e3);
  }
  // 자동 슬라이드 중지
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
    if (this.autoSlideCounterInterval) {
      clearInterval(this.autoSlideCounterInterval);
      this.autoSlideCounterInterval = null;
    }
  }
  // 페이지 닷 클릭 시 자동 슬라이드 중지
  onPageDotClick(page) {
    this.currentModePage = page;
    this.userInteracted = true;
    this.stopAutoSlide();
  }
  // 자동 슬라이드 토글 (플레이/정지)
  toggleAutoSlide() {
    if (this.isAutoSlideActive()) {
      this.userInteracted = true;
      this.stopAutoSlide();
    } else {
      this.userInteracted = false;
      this.startAutoSlide();
    }
  }
  // 자동 슬라이드 활성화 상태 확인
  isAutoSlideActive() {
    return this.autoSlideInterval !== null && this.autoSlideInterval !== void 0 && !this.userInteracted;
  }
  ngOnDestroy() {
    this.stopAutoSlide();
  }
  navigateToMode(mode, event) {
    if (event) {
      event.stopPropagation();
    }
    this.userInteracted = true;
    this.stopAutoSlide();
    if (mode === this.currentMode) {
      this.closeNavigator();
      return;
    }
    this.closeNavigator();
    switch (mode) {
      case "novel":
        this.router.navigate(["/novel"]).catch((err) => {
        });
        break;
      case "loworld":
        this.router.navigate(["/loworld"]).catch((err) => {
        });
        break;
      case "education":
        this.router.navigate(["/education/home"]).catch((err) => {
        });
        break;
      case "erp":
        this.router.navigate(["/erp"]).catch((err) => {
        });
        break;
      case "store":
        this.router.navigate(["/store"]).catch((err) => {
        });
        break;
      case "expedition":
        this.router.navigate(["/expedition"]).catch((err) => {
          console.warn("Navigation to Expedition failed:", err);
        });
        break;
      case "chat-talk":
        this.router.navigate(["/chat-talk"]).catch((err) => {
        });
        break;
      case "slack":
        this.router.navigate(["/slack"]).catch((err) => {
        });
        break;
      case "project":
        this.router.navigate(["/project"]).catch((err) => {
        });
        break;
      case "form":
        this.router.navigate(["/form"]).catch((err) => {
        });
        break;
      case "desk":
        this.router.navigate(["/desk"]).catch((err) => {
        });
        break;
      case "wix":
        this.router.navigate(["/wix"]).catch((err) => {
        });
        break;
      case "membership":
        this.router.navigate(["/membership"]).catch((err) => {
          console.warn("Navigation to Membership failed:", err);
        });
        break;
      case "dollar-token":
        this.router.navigate(["/dollar-token"]).catch((err) => {
          console.warn("Navigation to Dollar Token failed:", err);
        });
        break;
      case "calendar":
        this.router.navigate(["/calendar"]).catch((err) => {
          console.warn("Navigation to Calendar failed:", err);
        });
        break;
      case "diary":
        this.router.navigate(["/diary"]).catch((err) => {
          console.warn("Navigation to Diary failed:", err);
        });
        break;
      case "dashboard":
        this.router.navigate(["/dashboard"]).catch((err) => {
          console.warn("Navigation to Dashboard failed:", err);
        });
        break;
      case "community":
        this.router.navigate(["/community"]).catch((err) => {
          console.warn("Navigation to Community failed:", err);
        });
        break;
      case "content":
        this.router.navigate(["/content"]).catch((err) => {
          console.warn("Navigation to Content failed:", err);
        });
        break;
    }
  }
  getCurrentModeLabel() {
    switch (this.currentMode) {
      case "novel":
        return "\uC18C\uC124";
      case "loworld":
        return "\uD648";
      case "education":
        return "\uAD50\uC721";
      case "erp":
        return "\uC5C5\uBB34";
      case "store":
        return "\uC2A4\uD1A0\uC5B4";
      case "expedition":
        return "\uC6D0\uC815\uB300";
      case "chat-talk":
        return "\uCC44\uD305";
      case "slack":
        return "\uD611\uC5C5";
      case "project":
        return "\uD504\uB85C\uC81D\uD2B8";
      case "form":
        return "\uD3FC";
      case "desk":
        return "Desk";
      case "wix":
        return "\uBE4C\uB354";
      case "membership":
        return "Membership";
      case "dollar-token":
        return "\uB2EC\uB7EC\uD1A0\uD070";
      case "calendar":
        return "\uCE98\uB9B0\uB354";
      case "diary":
        return "\uB2E4\uC774\uC5B4\uB9AC";
      case "dashboard":
        return "\uB300\uC2DC\uBCF4\uB4DC";
      case "community":
        return "\uCEE4\uBBA4\uB2C8\uD2F0";
      case "content":
        return "\uCF58\uD150\uCE20";
      default:
        return "\uD648";
    }
  }
  getCurrentModeGradient() {
    switch (this.currentMode) {
      case "novel":
        return "linear-gradient(135deg, #ff1493, #ff4500)";
      case "education":
        return "linear-gradient(135deg, #007AFF, #00C6FF)";
      case "erp":
        return "linear-gradient(135deg, #32cd32, #00ff7f)";
      case "loworld":
        return "linear-gradient(135deg, #ff6347, #ffa500)";
      case "store":
        return "linear-gradient(135deg, #9370db, #8a2be2)";
      case "expedition":
        return "linear-gradient(135deg, #667eea, #764ba2)";
      case "chat-talk":
        return "linear-gradient(135deg, #ff69b4, #ff1493)";
      case "slack":
        return "linear-gradient(135deg, #10b981, #059669)";
      case "project":
        return "linear-gradient(135deg, #ff6b35, #f7931e)";
      case "form":
        return "linear-gradient(135deg, #ff6b35, #e65100)";
      case "desk":
        return "linear-gradient(135deg, #667eea, #764ba2)";
      case "wix":
        return "linear-gradient(135deg, #0041ff, #00d4ff)";
      case "membership":
        return "linear-gradient(135deg, #f59e0b, #d97706)";
      case "dollar-token":
        return "linear-gradient(135deg, #22c55e, #16a34a)";
      case "calendar":
        return "linear-gradient(135deg, #06b6d4, #0891b2)";
      case "diary":
        return "linear-gradient(135deg, #667eea, #764ba2)";
      case "dashboard":
        return "linear-gradient(135deg, #4facfe, #00f2fe)";
      case "community":
        return "linear-gradient(135deg, #f093fb, #f5576c)";
      case "content":
        return "linear-gradient(135deg, #667eea, #764ba2)";
      default:
        return "linear-gradient(135deg, var(--accent-color) 0%, #667eea 100%)";
    }
  }
  onEscapeKey() {
    if (this.isOpen) {
      this.closeNavigator();
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".global-navigator")) {
      this.closeNavigator();
    }
  }
  // 모드 페이지 관련 메서드
  getModesForCurrentPage() {
    const startIndex = this.currentModePage * this.modesPerPage;
    return this.allModes.slice(startIndex, startIndex + this.modesPerPage);
  }
  nextModePage() {
    this.userInteracted = true;
    this.stopAutoSlide();
    const totalPages = Math.ceil(this.allModes.length / this.modesPerPage);
    if (this.currentModePage < totalPages - 1) {
      this.currentModePage++;
    }
  }
  prevModePage() {
    this.userInteracted = true;
    this.stopAutoSlide();
    if (this.currentModePage > 0) {
      this.currentModePage--;
    }
  }
  getTotalPages() {
    return Math.ceil(this.allModes.length / this.modesPerPage);
  }
  canGoNextPage() {
    return this.currentModePage < this.getTotalPages() - 1;
  }
  canGoPrevPage() {
    return this.currentModePage > 0;
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
      this.userInteracted = true;
      this.stopAutoSlide();
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
      this.userInteracted = true;
      this.stopAutoSlide();
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
  static \u0275fac = function GlobalNavigatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalNavigatorComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalNavigatorComponent, selectors: [["app-global-navigator"]], viewQuery: function GlobalNavigatorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(DebugConsoleComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.debugConsole = _t.first);
    }
  }, hostBindings: function GlobalNavigatorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function GlobalNavigatorComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscapeKey();
      }, \u0275\u0275resolveDocument)("click", function GlobalNavigatorComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["class", "global-navigator", 4, "ngIf"], [1, "global-navigator"], [1, "navigator-toggle", 3, "click"], [1, "toggle-icon"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "current-mode"], ["class", "navigator-menu", 4, "ngIf"], ["class", "navigator-overlay", 3, "click", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "navigator-menu"], [1, "menu-header"], [1, "tab-buttons"], [1, "tab-btn", 3, "click"], [1, "badge"], [1, "close-btn", 3, "click"], [1, "tab-container"], [1, "tab-content-wrapper"], [1, "tab-panel", "modes-panel"], [1, "menu-options", "ios-grid", 3, "touchstart", "touchmove", "touchend", "mousedown", "mousemove", "mouseup", "mouseleave"], ["class", "app-icon", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "menu-footer"], [1, "footer-content"], [1, "page-indicator"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "auto-slide-controls", 4, "ngIf"], [1, "tab-panel", "settings-panel"], [1, "settings-list"], [1, "setting-item", 3, "click"], [1, "setting-icon"], [1, "setting-text"], [1, "setting-label"], [1, "setting-description"], [1, "setting-action"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"], [1, "toggle-switch"], [1, "toggle-slider"], [1, "app-icon", 3, "click"], [1, "icon-wrapper"], [1, "app-name"], [1, "dot", 3, "click"], [1, "auto-slide-controls"], [1, "control-btn", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "20", "height", "20", 4, "ngIf"], [1, "auto-slide-status"], ["class", "status-text", 4, "ngIf"], ["class", "status-text paused", 4, "ngIf"], ["fill", "currentColor", "viewBox", "0 0 24 24", "width", "20", "height", "20"], ["d", "M8 5v14l11-7z"], ["d", "M6 4h4v16H6V4zm8 0h4v16h-4V4z"], [1, "status-text"], [1, "timer-text"], [1, "status-text", "paused"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"], [1, "navigator-overlay", 3, "click"]], template: function GlobalNavigatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GlobalNavigatorComponent_div_0_Template, 27, 26, "div", 0);
      \u0275\u0275element(1, "app-debug-console");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isInsideIframe);
    }
  }, dependencies: [NgForOf, NgIf, DebugConsoleComponent], styles: ["\n\n.global-navigator[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 10001;\n  pointer-events: none;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  padding: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-color) 0%,\n      #667eea 100%);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1);\n  color: white;\n  pointer-events: auto;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]   .current-mode[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.2px;\n  text-align: center;\n  line-height: 1.2;\n  max-width: 54px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n.global-navigator.open[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.6), 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.global-navigator.open[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 75px;\n  right: 0;\n  width: 380px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 24px;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  overflow: hidden;\n  transform-origin: bottom right;\n  animation: _ngcontent-%COMP%_slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  pointer-events: auto;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.1);\n  gap: 12px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: rgba(102, 126, 234, 0.2);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: rgb(102, 126, 234);\n  line-height: 1;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.15);\n  color: rgba(0, 0, 0, 0.87);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgb(102, 126, 234);\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.05);\n  color: rgba(0, 0, 0, 0.7);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n  font-size: 22px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.6);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  font-weight: 300;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n  transform: scale(1.1);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200%;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .tab-container[_ngcontent-%COMP%]   .tab-content-wrapper[_ngcontent-%COMP%]   .tab-panel[_ngcontent-%COMP%] {\n  width: 50%;\n  flex-shrink: 0;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 28px 24px;\n  height: 280px;\n  overflow-y: auto;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.15);\n  border-radius: 2px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.25);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-tap-highlight-color: transparent;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  transition: transform 0.2s ease;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n  text-align: center;\n  letter-spacing: -0.2px;\n  max-width: 76px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: color 0.2s ease;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n  opacity: 0.9;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:active   .icon-wrapper[_ngcontent-%COMP%] {\n  transform: scale(0.92);\n  box-shadow: none;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.25);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 2px solid rgba(102, 126, 234, 0.5);\n  transform: scale(1.05);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #667eea;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(1)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff1493,\n      #ff4500);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(1)   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(2)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e90ff,\n      #00bfff);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(2)   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(3)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #32cd32,\n      #00ff7f);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(3)   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(4)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6347,\n      #ffa500);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(4)   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(5)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9370db,\n      #8a2be2);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(5)   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(6)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff69b4,\n      #ff1493);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(6)   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px 24px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item.active[_ngcontent-%COMP%] {\n  background: rgba(123, 97, 255, 0.15);\n  border-color: rgba(123, 97, 255, 0.3);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item.active[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(123, 97, 255, 0.3),\n      rgba(118, 75, 162, 0.3));\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item.active[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #7b61ff;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item.active[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%] {\n  color: #7b61ff;\n  font-weight: 600;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.2),\n      rgba(118, 75, 162, 0.2));\n  margin-right: 16px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #667eea;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-text[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-text[_ngcontent-%COMP%]   .setting-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-action[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 48px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-action[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 22px;\n  height: 22px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-action[_ngcontent-%COMP%]   .toggle-switch.active[_ngcontent-%COMP%] {\n  background: #4CAF50;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .settings-list[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .setting-action[_ngcontent-%COMP%]   .toggle-switch.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  width: 18px;\n  border-radius: 3px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.4);\n  transform: scale(1.2);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.2);\n  transform: scale(1.1);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .auto-slide-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .auto-slide-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 4px 12px;\n  border-radius: 12px;\n  min-width: 60px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .auto-slide-status[_ngcontent-%COMP%]   .status-text.paused[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n  background: rgba(255, 107, 107, 0.1);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .auto-slide-controls[_ngcontent-%COMP%]   .auto-slide-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%]   .timer-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_pulse 1s ease-in-out infinite;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .current-mode[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: -0.1px;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: transparent;\n  z-index: -1;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .global-navigator[_ngcontent-%COMP%] {\n    bottom: 16px;\n    right: 16px;\n    left: 16px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n    margin-left: auto;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    bottom: 70px;\n    right: 0;\n    left: 0;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 20px;\n    padding: 24px 20px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n    font-size: 11px;\n    max-width: 70px;\n  }\n}\n@media (max-width: 480px) {\n  .global-navigator[_ngcontent-%COMP%] {\n    bottom: 12px;\n    right: 12px;\n    left: 12px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    margin-left: auto;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    border-radius: 20px;\n    left: 0;\n    right: 0;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n    padding: 16px 20px 12px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n    padding: 20px 16px;\n    max-height: 400px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n    border-radius: 16px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n    font-size: 10px;\n    max-width: 64px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n    padding: 12px 20px 16px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .current-mode[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 375px) {\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 14px;\n    padding: 18px 14px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n  }\n  .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n    font-size: 9.5px;\n    max-width: 60px;\n  }\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.3);\n  border: 2px solid rgba(102, 126, 234, 0.6);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #a5b4fc;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-footer[_ngcontent-%COMP%]   .current-mode[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(1)   .icon-wrapper.novel-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9333ea 0%,\n      #7e22ce 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(1):hover   .icon-wrapper.novel-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7 0%,\n      #9333ea 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(2)   .icon-wrapper.docs-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(2):hover   .icon-wrapper.docs-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa 0%,\n      #3b82f6 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(3)   .icon-wrapper.erp-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(3):hover   .icon-wrapper.erp-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #10b981 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(4)   .icon-wrapper.loworld-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(4):hover   .icon-wrapper.loworld-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(5)   .icon-wrapper.store-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #db2777 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(5):hover   .icon-wrapper.store-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f472b6 0%,\n      #ec4899 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(6)   .icon-wrapper.chat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #0891b2 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(6):hover   .icon-wrapper.chat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22d3ee 0%,\n      #06b6d4 100%) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.novel-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.3) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.docs-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.erp-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.loworld-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.store-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3) !important;\n}\n.global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.chat-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.3) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(1)   .icon-wrapper.novel-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7 0%,\n      #9333ea 100%) !important;\n  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.15) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(1):hover   .icon-wrapper.novel-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #c084fc 0%,\n      #a855f7 100%) !important;\n  box-shadow: 0 6px 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(2)   .icon-wrapper.docs-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa 0%,\n      #3b82f6 100%) !important;\n  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.3), 0 0 40px rgba(96, 165, 250, 0.15) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(2):hover   .icon-wrapper.docs-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd 0%,\n      #60a5fa 100%) !important;\n  box-shadow: 0 6px 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(3)   .icon-wrapper.erp-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #10b981 100%) !important;\n  box-shadow: 0 4px 20px rgba(52, 211, 153, 0.3), 0 0 40px rgba(52, 211, 153, 0.15) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(3):hover   .icon-wrapper.erp-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6ee7b7 0%,\n      #34d399 100%) !important;\n  box-shadow: 0 6px 30px rgba(52, 211, 153, 0.4), 0 0 60px rgba(52, 211, 153, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(4)   .icon-wrapper.loworld-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(4):hover   .icon-wrapper.loworld-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fcd34d 0%,\n      #fbbf24 100%) !important;\n  box-shadow: 0 6px 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(251, 191, 36, 0.3) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(5)   .icon-wrapper.store-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f472b6 0%,\n      #ec4899 100%) !important;\n  box-shadow: 0 4px 20px rgba(244, 114, 182, 0.3), 0 0 40px rgba(244, 114, 182, 0.15) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(5):hover   .icon-wrapper.store-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f9a8d4 0%,\n      #f472b6 100%) !important;\n  box-shadow: 0 6px 30px rgba(244, 114, 182, 0.4), 0 0 60px rgba(244, 114, 182, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(6)   .icon-wrapper.chat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22d3ee 0%,\n      #06b6d4 100%) !important;\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.15) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:nth-child(6):hover   .icon-wrapper.chat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #67e8f9 0%,\n      #22d3ee 100%) !important;\n  box-shadow: 0 6px 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.novel-icon[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 0 3px rgba(168, 85, 247, 0.5),\n    0 4px 20px rgba(168, 85, 247, 0.4),\n    0 0 50px rgba(168, 85, 247, 0.3) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.docs-icon[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 0 3px rgba(96, 165, 250, 0.5),\n    0 4px 20px rgba(96, 165, 250, 0.4),\n    0 0 50px rgba(96, 165, 250, 0.3) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.erp-icon[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 0 3px rgba(52, 211, 153, 0.5),\n    0 4px 20px rgba(52, 211, 153, 0.4),\n    0 0 50px rgba(52, 211, 153, 0.3) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.loworld-icon[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 0 3px rgba(251, 191, 36, 0.6),\n    0 4px 20px rgba(251, 191, 36, 0.5),\n    0 0 50px rgba(251, 191, 36, 0.4) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.store-icon[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 0 3px rgba(244, 114, 182, 0.5),\n    0 4px 20px rgba(244, 114, 182, 0.4),\n    0 0 50px rgba(244, 114, 182, 0.3) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon.active[_ngcontent-%COMP%]   .icon-wrapper.chat-icon[_ngcontent-%COMP%] {\n  box-shadow:\n    0 0 0 3px rgba(34, 211, 238, 0.5),\n    0 4px 20px rgba(34, 211, 238, 0.4),\n    0 0 50px rgba(34, 211, 238, 0.3) !important;\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: brightness(1.2) contrast(1.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .global-navigator[_ngcontent-%COMP%]   .navigator-menu[_ngcontent-%COMP%]   .menu-options.ios-grid[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: brightness(1.3) contrast(1.15);\n}\n.menu-options.ios-grid[_ngcontent-%COMP%] {\n  cursor: grab;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-y pinch-zoom;\n}\n.menu-options.ios-grid[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.menu-options.ios-grid[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.page-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 0;\n}\n.page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-indicator[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: var(--accent-color);\n  width: 24px;\n  border-radius: 4px;\n}\n.page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  opacity: 0.8;\n}\n.dark-theme[_nghost-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\n.dark-theme[_nghost-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .page-indicator[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: var(--accent-color);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 0.8;\n  }\n}\n/*# sourceMappingURL=global-navigator.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalNavigatorComponent, [{
    type: Component,
    args: [{ selector: "app-global-navigator", standalone: false, template: `<!-- iframe \uB0B4\uBD80\uC5D0\uC11C\uB294 \uAE00\uB85C\uBC8C \uB124\uBE44\uAC8C\uC774\uD130 \uC228\uAE40 -->
<div class="global-navigator" *ngIf="!isInsideIframe">
  <!-- \uB124\uBE44\uAC8C\uC774\uD130 \uD1A0\uAE00 \uBC84\uD2BC -->
  <button class="navigator-toggle" (click)="toggleNavigator()" [attr.aria-label]="isOpen ? 'Close navigator' : 'Open navigator'" [style.background]="getCurrentModeGradient()">
    <div class="toggle-icon">
      <svg *ngIf="currentMode === 'novel'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
      <svg *ngIf="currentMode === 'education'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
      </svg>
      <svg *ngIf="currentMode === 'erp'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
      <svg *ngIf="currentMode === 'loworld'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <svg *ngIf="currentMode === 'store'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
      <svg *ngIf="currentMode === 'expedition'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
      <svg *ngIf="currentMode === 'chat-talk'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <svg *ngIf="currentMode === 'slack'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
      </svg>
      <svg *ngIf="currentMode === 'project'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
      <svg *ngIf="currentMode === 'form'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <svg *ngIf="currentMode === 'desk'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
      <svg *ngIf="currentMode === 'wix'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"/>
      </svg>
      <svg *ngIf="currentMode === 'membership'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
      <svg *ngIf="currentMode === 'dollar-token'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <svg *ngIf="currentMode === 'calendar'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
      <svg *ngIf="currentMode === 'diary'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      <svg *ngIf="currentMode === 'dashboard'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
      <svg *ngIf="currentMode === 'community'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
      </svg>
      <svg *ngIf="currentMode === 'content'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
      <svg *ngIf="!currentMode" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
    <span class="current-mode">{{ getCurrentModeLabel() }}</span>
  </button>

  <!-- \uB124\uBE44\uAC8C\uC774\uD130 \uBA54\uB274 -->
  <div class="navigator-menu" *ngIf="isOpen">
    <div class="menu-header">
      <div class="tab-buttons">
        <button class="tab-btn" [class.active]="activeTab === 'modes'" (click)="switchTab('modes')">
          \uBAA8\uB4DC\uC804\uD658 <span class="badge">{{ allModes.length }}</span>
        </button>
        <button class="tab-btn" [class.active]="activeTab === 'settings'" (click)="switchTab('settings')">
          \uAE00\uB85C\uBC8C \uAE30\uB2A5
        </button>
      </div>
      <button class="close-btn" (click)="closeNavigator()">&times;</button>
    </div>

    <div class="tab-container">
      <div class="tab-content-wrapper" [style.transform]="'translateX(' + (activeTab === 'modes' ? '0%' : '-50%') + ')'">
        <div class="tab-panel modes-panel">
          <div class="menu-options ios-grid"
               (touchstart)="onTouchStart($event)"
               (touchmove)="onTouchMove($event)"
               (touchend)="onTouchEnd()"
               (mousedown)="onMouseDown($event)"
               (mousemove)="onMouseMove($event)"
               (mouseup)="onMouseUp()"
               (mouseleave)="onMouseLeave()">
            <div class="app-icon" 
                 *ngFor="let mode of getModesForCurrentPage()"
                 [class.active]="currentMode === mode" 
                 (click)="navigateToMode(mode, $event)">
              <div class="icon-wrapper">
                <svg *ngIf="mode === 'novel'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <svg *ngIf="mode === 'education'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
                <svg *ngIf="mode === 'erp'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <svg *ngIf="mode === 'loworld'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <svg *ngIf="mode === 'store'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                <svg *ngIf="mode === 'expedition'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <svg *ngIf="mode === 'chat-talk'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <svg *ngIf="mode === 'slack'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
                <svg *ngIf="mode === 'project'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
                <svg *ngIf="mode === 'form'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <svg *ngIf="mode === 'desk'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <svg *ngIf="mode === 'wix'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"/>
                </svg>
                <svg *ngIf="mode === 'membership'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <svg *ngIf="mode === 'dollar-token'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <svg *ngIf="mode === 'calendar'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <svg *ngIf="mode === 'diary'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <svg *ngIf="mode === 'dashboard'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <svg *ngIf="mode === 'community'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
                <svg *ngIf="mode === 'content'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <span class="app-name">
                {{ mode === 'novel' ? '\uC18C\uC124' : 
                   mode === 'education' ? '\uAD50\uC721' : 
                   mode === 'erp' ? '\uC5C5\uBB34' : 
                   mode === 'loworld' ? '\uD648' : 
                   mode === 'store' ? '\uC2A4\uD1A0\uC5B4' :
                   mode === 'expedition' ? '\uC6D0\uC815\uB300' : 
                   mode === 'chat-talk' ? '\uCC44\uD305' : 
                   mode === 'slack' ? '\uD611\uC5C5' : 
                   mode === 'project' ? '\uD504\uB85C\uC81D\uD2B8' : 
                   mode === 'form' ? '\uD3FC' : 
                   mode === 'desk' ? '\uB370\uC2A4\uD06C' :
                   mode === 'wix' ? '\uBE4C\uB354' :
                   mode === 'membership' ? '\uBA64\uBC84\uC2ED' :
                   mode === 'dollar-token' ? '\uB2EC\uB7EC\uD1A0\uD070' :
                   mode === 'calendar' ? '\uCE98\uB9B0\uB354' :
                   mode === 'diary' ? '\uB2E4\uC774\uC5B4\uB9AC' :
                   mode === 'dashboard' ? '\uB300\uC2DC\uBCF4\uB4DC' :
                   mode === 'community' ? '\uCEE4\uBBA4\uB2C8\uD2F0' :
                   mode === 'content' ? '\uCF58\uD150\uCE20' : mode }}
              </span>
            </div>
          </div>
          
          <div class="menu-footer">
            <div class="footer-content">
              <div class="page-indicator">
                <span class="dot" 
                      *ngFor="let page of [].constructor(getTotalPages()); let i = index"
                      [class.active]="i === currentModePage"
                      (click)="onPageDotClick(i)"></span>
              </div>
              <div class="auto-slide-controls" *ngIf="activeTab === 'modes'">
                <button class="control-btn" 
                        (click)="toggleAutoSlide()"
                        [attr.aria-label]="isAutoSlideActive() ? '\uC790\uB3D9 \uC2AC\uB77C\uC774\uB4DC \uC815\uC9C0' : '\uC790\uB3D9 \uC2AC\uB77C\uC774\uB4DC \uC2DC\uC791'">
                  <!-- \uD50C\uB808\uC774 \uBC84\uD2BC -->
                  <svg *ngIf="!isAutoSlideActive()" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <!-- \uC815\uC9C0 \uBC84\uD2BC -->
                  <svg *ngIf="isAutoSlideActive()" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                </button>
                <div class="auto-slide-status">
                  <span class="status-text" *ngIf="isAutoSlideActive()">
                    <span class="timer-text">{{ autoSlideCounter }}</span>
                  </span>
                  <span class="status-text paused" *ngIf="!isAutoSlideActive()">
                    \u23F8 \uC911\uB2E8\uB428
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-panel settings-panel">
          <div class="settings-list">
          <div class="setting-item" (click)="toggleTheme()">
            <div class="setting-icon">
              <svg *ngIf="!isDarkMode" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <svg *ngIf="isDarkMode" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </div>
            <div class="setting-text">
              <div class="setting-label">{{ isDarkMode ? '\uB2E4\uD06C \uBAA8\uB4DC' : '\uB77C\uC774\uD2B8 \uBAA8\uB4DC' }}</div>
              <div class="setting-description">\uD654\uBA74 \uD14C\uB9C8 \uBCC0\uACBD</div>
            </div>
            <div class="setting-action">
              <span>{{ isDarkMode ? '\u{1F319}' : '\u2600\uFE0F' }}</span>
            </div>
          </div>

          <!-- \u{1F41B} \uB514\uBC84\uADF8 \uCF58\uC194 -->
          <div class="setting-item" [class.active]="debugLogger.isEnabled()" (click)="toggleDebugConsole()">
            <div class="setting-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
            <div class="setting-text">
              <div class="setting-label">\uB514\uBC84\uADF8 \uCF58\uC194</div>
              <div class="setting-description">{{ debugLogger.isEnabled() ? '\uD65C\uC131\uD654\uB428' : '\uBE44\uD65C\uC131\uD654\uB428' }}</div>
            </div>
            <div class="setting-action">
              <div class="toggle-switch" [class.active]="debugLogger.isEnabled()">
                <div class="toggle-slider"></div>
              </div>
            </div>
          </div>

          <!-- \uFFFD \uCC44\uD305\uC0C1\uB2F4 \uD65C\uC131\uD654 -->
          <div class="setting-item" (click)="toggleChatConsultation()">
            <div class="setting-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <div class="setting-text">
              <div class="setting-label">\uCC44\uD305\uC0C1\uB2F4 \uD65C\uC131\uD654</div>
              <div class="setting-description">{{ isChatConsultationEnabled() ? '\uD65C\uC131\uD654\uB428' : '\uBE44\uD65C\uC131\uD654\uB428' }}</div>
            </div>
            <div class="setting-action">
              <div class="toggle-switch" [class.active]="isChatConsultationEnabled()">
                <div class="toggle-slider"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="navigator-overlay" *ngIf="isOpen" (click)="closeNavigator()"></div>
</div>

<!-- \u{1F41B} \uB514\uBC84\uADF8 \uCF58\uC194 (\uC804\uC5ED) -->
<app-debug-console></app-debug-console>`, styles: ["/* src/app/modules/shared/components/global-navigator/global-navigator.component.scss */\n.global-navigator {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 10001;\n  pointer-events: none;\n}\n.global-navigator .navigator-toggle {\n  width: 64px;\n  height: 64px;\n  padding: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-color) 0%,\n      #667eea 100%);\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1);\n  color: white;\n  pointer-events: auto;\n}\n.global-navigator .navigator-toggle .toggle-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.global-navigator .navigator-toggle .toggle-icon svg {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.global-navigator .navigator-toggle .current-mode {\n  font-size: 9px;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.2px;\n  text-align: center;\n  line-height: 1.2;\n  max-width: 54px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.global-navigator .navigator-toggle:hover {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.global-navigator .navigator-toggle:active {\n  transform: translateY(0) scale(0.98);\n}\n.global-navigator.open .navigator-toggle {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.6), 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.global-navigator.open .navigator-toggle .toggle-icon svg {\n  transform: rotate(180deg);\n}\n.global-navigator .navigator-menu {\n  position: absolute;\n  bottom: 75px;\n  right: 0;\n  width: 380px;\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 24px;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  overflow: hidden;\n  transform-origin: bottom right;\n  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  pointer-events: auto;\n}\n.global-navigator .navigator-menu .menu-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.1);\n  gap: 12px;\n}\n.global-navigator .navigator-menu .menu-header .tab-buttons {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.global-navigator .navigator-menu .menu-header .tab-buttons .tab-btn {\n  flex: 1;\n  padding: 8px 16px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.global-navigator .navigator-menu .menu-header .tab-buttons .tab-btn .badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: rgba(102, 126, 234, 0.2);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  color: rgb(102, 126, 234);\n  line-height: 1;\n}\n.global-navigator .navigator-menu .menu-header .tab-buttons .tab-btn.active {\n  background: rgba(102, 126, 234, 0.15);\n  color: rgba(0, 0, 0, 0.87);\n}\n.global-navigator .navigator-menu .menu-header .tab-buttons .tab-btn.active .badge {\n  background: rgb(102, 126, 234);\n  color: white;\n}\n.global-navigator .navigator-menu .menu-header .tab-buttons .tab-btn:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.05);\n  color: rgba(0, 0, 0, 0.7);\n}\n.global-navigator .navigator-menu .menu-header .close-btn {\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n  font-size: 22px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.6);\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  font-weight: 300;\n}\n.global-navigator .navigator-menu .menu-header .close-btn:hover {\n  background: rgba(0, 0, 0, 0.1);\n  transform: scale(1.1);\n}\n.global-navigator .navigator-menu .menu-header .close-btn:active {\n  transform: scale(0.95);\n}\n.global-navigator .navigator-menu .tab-container {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.global-navigator .navigator-menu .tab-container .tab-content-wrapper {\n  display: flex;\n  width: 200%;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.global-navigator .navigator-menu .tab-container .tab-content-wrapper .tab-panel {\n  width: 50%;\n  flex-shrink: 0;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 28px 24px;\n  height: 280px;\n  overflow-y: auto;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid::-webkit-scrollbar {\n  width: 4px;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid::-webkit-scrollbar-track {\n  background: transparent;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.15);\n  border-radius: 2px;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.25);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-tap-highlight-color: transparent;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper {\n  width: 76px;\n  height: 76px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper svg {\n  width: 32px;\n  height: 32px;\n  transition: transform 0.2s ease;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon .app-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n  text-align: center;\n  letter-spacing: -0.2px;\n  max-width: 76px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: color 0.2s ease;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:hover .icon-wrapper {\n  transform: scale(1.08);\n  opacity: 0.9;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:hover .icon-wrapper svg {\n  transform: scale(1.05);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:active .icon-wrapper {\n  transform: scale(0.92);\n  box-shadow: none;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper {\n  background: rgba(102, 126, 234, 0.25);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 2px solid rgba(102, 126, 234, 0.5);\n  transform: scale(1.05);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper svg {\n  color: #667eea;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .app-name {\n  font-weight: 600;\n  color: #667eea;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(1) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #ff1493,\n      #ff4500);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(1) .icon-wrapper svg {\n  color: white;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(2) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #1e90ff,\n      #00bfff);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(2) .icon-wrapper svg {\n  color: white;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(3) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #32cd32,\n      #00ff7f);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(3) .icon-wrapper svg {\n  color: white;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(4) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6347,\n      #ffa500);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(4) .icon-wrapper svg {\n  color: white;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(5) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #9370db,\n      #8a2be2);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(5) .icon-wrapper svg {\n  color: white;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(6) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #ff69b4,\n      #ff1493);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(6) .icon-wrapper svg {\n  color: white;\n}\n.global-navigator .navigator-menu .settings-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 20px 24px;\n}\n.global-navigator .navigator-menu .settings-list .setting-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.global-navigator .navigator-menu .settings-list .setting-item:hover {\n  background: rgba(255, 255, 255, 0.5);\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.global-navigator .navigator-menu .settings-list .setting-item.active {\n  background: rgba(123, 97, 255, 0.15);\n  border-color: rgba(123, 97, 255, 0.3);\n}\n.global-navigator .navigator-menu .settings-list .setting-item.active .setting-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(123, 97, 255, 0.3),\n      rgba(118, 75, 162, 0.3));\n}\n.global-navigator .navigator-menu .settings-list .setting-item.active .setting-icon svg {\n  color: #7b61ff;\n}\n.global-navigator .navigator-menu .settings-list .setting-item.active .setting-label {\n  color: #7b61ff;\n  font-weight: 600;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.2),\n      rgba(118, 75, 162, 0.2));\n  margin-right: 16px;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-icon svg {\n  width: 20px;\n  height: 20px;\n  color: #667eea;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-text .setting-label {\n  font-size: 15px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-text .setting-description {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-action {\n  display: flex;\n  align-items: center;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-action .toggle-switch {\n  position: relative;\n  width: 48px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  transition: background-color 0.3s ease;\n  cursor: pointer;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-action .toggle-switch .toggle-slider {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 22px;\n  height: 22px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-action .toggle-switch.active {\n  background: #4CAF50;\n}\n.global-navigator .navigator-menu .settings-list .setting-item .setting-action .toggle-switch.active .toggle-slider {\n  transform: translateX(20px);\n}\n.global-navigator .navigator-menu .menu-footer {\n  padding: 16px 24px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.global-navigator .navigator-menu .menu-footer .footer-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  width: 100%;\n}\n.global-navigator .navigator-menu .menu-footer .page-indicator {\n  display: flex;\n  gap: 6px;\n}\n.global-navigator .navigator-menu .menu-footer .page-indicator .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.global-navigator .navigator-menu .menu-footer .page-indicator .dot.active {\n  background: #667eea;\n  width: 18px;\n  border-radius: 3px;\n}\n.global-navigator .navigator-menu .menu-footer .page-indicator .dot:hover {\n  background: rgba(0, 0, 0, 0.4);\n  transform: scale(1.2);\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .control-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .control-btn:hover {\n  background: rgba(102, 126, 234, 0.2);\n  transform: scale(1.1);\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .control-btn:active {\n  transform: scale(0.95);\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .control-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .auto-slide-status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .auto-slide-status .status-text {\n  font-size: 13px;\n  font-weight: 600;\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 4px 12px;\n  border-radius: 12px;\n  min-width: 60px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .auto-slide-status .status-text.paused {\n  color: #ff6b6b;\n  background: rgba(255, 107, 107, 0.1);\n}\n.global-navigator .navigator-menu .menu-footer .auto-slide-controls .auto-slide-status .status-text .timer-text {\n  font-size: 14px;\n  font-weight: 700;\n  animation: pulse 1s ease-in-out infinite;\n}\n.global-navigator .navigator-menu .menu-footer .current-mode {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: -0.1px;\n}\n.global-navigator .navigator-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: transparent;\n  z-index: -1;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .global-navigator {\n    bottom: 16px;\n    right: 16px;\n    left: 16px;\n  }\n  .global-navigator .navigator-toggle {\n    width: 52px;\n    height: 52px;\n    margin-left: auto;\n  }\n  .global-navigator .navigator-menu {\n    width: 100%;\n    max-width: none;\n    bottom: 70px;\n    right: 0;\n    left: 0;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 20px;\n    padding: 24px 20px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper {\n    width: 70px;\n    height: 70px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .app-name {\n    font-size: 11px;\n    max-width: 70px;\n  }\n}\n@media (max-width: 480px) {\n  .global-navigator {\n    bottom: 12px;\n    right: 12px;\n    left: 12px;\n  }\n  .global-navigator .navigator-toggle {\n    width: 48px;\n    height: 48px;\n    margin-left: auto;\n  }\n  .global-navigator .navigator-toggle svg {\n    width: 22px;\n    height: 22px;\n  }\n  .global-navigator .navigator-menu {\n    width: 100%;\n    max-width: none;\n    border-radius: 20px;\n    left: 0;\n    right: 0;\n  }\n  .global-navigator .navigator-menu .menu-header {\n    padding: 16px 20px 12px;\n  }\n  .global-navigator .navigator-menu .menu-header h4 {\n    font-size: 16px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n    padding: 20px 16px;\n    max-height: 400px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon {\n    gap: 6px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper {\n    width: 64px;\n    height: 64px;\n    border-radius: 16px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper svg {\n    width: 28px;\n    height: 28px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .app-name {\n    font-size: 10px;\n    max-width: 64px;\n  }\n  .global-navigator .navigator-menu .menu-footer {\n    padding: 12px 20px 16px;\n  }\n  .global-navigator .navigator-menu .menu-footer .current-mode {\n    font-size: 11px;\n  }\n}\n@media (max-width: 375px) {\n  .global-navigator .navigator-menu .menu-options.ios-grid {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 14px;\n    padding: 18px 14px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper {\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper svg {\n    width: 26px;\n    height: 26px;\n  }\n  .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .app-name {\n    font-size: 9.5px;\n    max-width: 60px;\n  }\n}\n[data-theme=dark] .global-navigator .navigator-menu {\n  background: rgba(30, 30, 30, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-header {\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-header h4 {\n  color: rgba(255, 255, 255, 0.95);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-header .close-btn {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.8);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-options.ios-grid::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-options.ios-grid::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .app-name {\n  color: rgba(255, 255, 255, 0.95);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper {\n  background: rgba(102, 126, 234, 0.3);\n  border: 2px solid rgba(102, 126, 234, 0.6);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper svg {\n  color: #a5b4fc;\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .app-name {\n  color: #a5b4fc;\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-footer {\n  background: rgba(255, 255, 255, 0.05);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-footer .page-indicator .dot {\n  background: rgba(255, 255, 255, 0.3);\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-footer .page-indicator .dot.active {\n  background: #a5b4fc;\n}\n[data-theme=dark] .global-navigator .navigator-menu .menu-footer .current-mode {\n  color: rgba(255, 255, 255, 0.7);\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(1) .icon-wrapper.novel-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #9333ea 0%,\n      #7e22ce 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(1):hover .icon-wrapper.novel-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7 0%,\n      #9333ea 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(2) .icon-wrapper.docs-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(2):hover .icon-wrapper.docs-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa 0%,\n      #3b82f6 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(3) .icon-wrapper.erp-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(3):hover .icon-wrapper.erp-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #10b981 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(4) .icon-wrapper.loworld-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(4):hover .icon-wrapper.loworld-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(5) .icon-wrapper.store-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899 0%,\n      #db2777 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(5):hover .icon-wrapper.store-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f472b6 0%,\n      #ec4899 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(6) .icon-wrapper.chat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #0891b2 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(6):hover .icon-wrapper.chat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #22d3ee 0%,\n      #06b6d4 100%) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.novel-icon {\n  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.3) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.docs-icon {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.erp-icon {\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.loworld-icon {\n  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.store-icon {\n  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3) !important;\n}\n.global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.chat-icon {\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.3) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(1) .icon-wrapper.novel-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #a855f7 0%,\n      #9333ea 100%) !important;\n  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.15) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(1):hover .icon-wrapper.novel-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #c084fc 0%,\n      #a855f7 100%) !important;\n  box-shadow: 0 6px 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(2) .icon-wrapper.docs-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa 0%,\n      #3b82f6 100%) !important;\n  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.3), 0 0 40px rgba(96, 165, 250, 0.15) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(2):hover .icon-wrapper.docs-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd 0%,\n      #60a5fa 100%) !important;\n  box-shadow: 0 6px 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(96, 165, 250, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(3) .icon-wrapper.erp-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #34d399 0%,\n      #10b981 100%) !important;\n  box-shadow: 0 4px 20px rgba(52, 211, 153, 0.3), 0 0 40px rgba(52, 211, 153, 0.15) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(3):hover .icon-wrapper.erp-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #6ee7b7 0%,\n      #34d399 100%) !important;\n  box-shadow: 0 6px 30px rgba(52, 211, 153, 0.4), 0 0 60px rgba(52, 211, 153, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(4) .icon-wrapper.loworld-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24 0%,\n      #f59e0b 100%) !important;\n  box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(4):hover .icon-wrapper.loworld-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fcd34d 0%,\n      #fbbf24 100%) !important;\n  box-shadow: 0 6px 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(251, 191, 36, 0.3) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(5) .icon-wrapper.store-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f472b6 0%,\n      #ec4899 100%) !important;\n  box-shadow: 0 4px 20px rgba(244, 114, 182, 0.3), 0 0 40px rgba(244, 114, 182, 0.15) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(5):hover .icon-wrapper.store-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f9a8d4 0%,\n      #f472b6 100%) !important;\n  box-shadow: 0 6px 30px rgba(244, 114, 182, 0.4), 0 0 60px rgba(244, 114, 182, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(6) .icon-wrapper.chat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #22d3ee 0%,\n      #06b6d4 100%) !important;\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.15) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:nth-child(6):hover .icon-wrapper.chat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #67e8f9 0%,\n      #22d3ee 100%) !important;\n  box-shadow: 0 6px 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.25) !important;\n  transform: scale(1.08) translateY(-2px) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.novel-icon {\n  box-shadow:\n    0 0 0 3px rgba(168, 85, 247, 0.5),\n    0 4px 20px rgba(168, 85, 247, 0.4),\n    0 0 50px rgba(168, 85, 247, 0.3) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.docs-icon {\n  box-shadow:\n    0 0 0 3px rgba(96, 165, 250, 0.5),\n    0 4px 20px rgba(96, 165, 250, 0.4),\n    0 0 50px rgba(96, 165, 250, 0.3) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.erp-icon {\n  box-shadow:\n    0 0 0 3px rgba(52, 211, 153, 0.5),\n    0 4px 20px rgba(52, 211, 153, 0.4),\n    0 0 50px rgba(52, 211, 153, 0.3) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.loworld-icon {\n  box-shadow:\n    0 0 0 3px rgba(251, 191, 36, 0.6),\n    0 4px 20px rgba(251, 191, 36, 0.5),\n    0 0 50px rgba(251, 191, 36, 0.4) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.store-icon {\n  box-shadow:\n    0 0 0 3px rgba(244, 114, 182, 0.5),\n    0 4px 20px rgba(244, 114, 182, 0.4),\n    0 0 50px rgba(244, 114, 182, 0.3) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon.active .icon-wrapper.chat-icon {\n  box-shadow:\n    0 0 0 3px rgba(34, 211, 238, 0.5),\n    0 4px 20px rgba(34, 211, 238, 0.4),\n    0 0 50px rgba(34, 211, 238, 0.3) !important;\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon .icon-wrapper svg {\n  filter: brightness(1.2) contrast(1.1);\n}\n.dark-mode .global-navigator .navigator-menu .menu-options.ios-grid .app-icon:hover .icon-wrapper svg {\n  filter: brightness(1.3) contrast(1.15);\n}\n.menu-options.ios-grid {\n  cursor: grab;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-y pinch-zoom;\n}\n.menu-options.ios-grid:active {\n  cursor: grabbing;\n}\n.menu-options.ios-grid * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.page-indicator {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 0;\n}\n.page-indicator .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-indicator .dot.active {\n  background: var(--accent-color);\n  width: 24px;\n  border-radius: 4px;\n}\n.page-indicator .dot:hover {\n  transform: scale(1.2);\n  opacity: 0.8;\n}\n:host-context(.dark-theme) .page-indicator .dot {\n  background: rgba(255, 255, 255, 0.3);\n}\n:host-context(.dark-theme) .page-indicator .dot.active {\n  background: var(--accent-color);\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 0.8;\n  }\n}\n/*# sourceMappingURL=global-navigator.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: ThemeService }], { debugConsole: [{
    type: ViewChild,
    args: [DebugConsoleComponent]
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalNavigatorComponent, { className: "GlobalNavigatorComponent", filePath: "src/app/modules/shared/components/global-navigator/global-navigator.component.ts", lineNumber: 18 });
})();

// src/app/modules/shared/components/under-development/under-development.component.ts
var UnderDevelopmentComponent = class _UnderDevelopmentComponent {
  title = "\uAC1C\uBC1C\uC911";
  description = "\uC774 \uAE30\uB2A5\uC740 \uD604\uC7AC \uAC1C\uBC1C \uC911\uC785\uB2C8\uB2E4.";
  static \u0275fac = function UnderDevelopmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnderDevelopmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnderDevelopmentComponent, selectors: [["app-under-development"]], inputs: { title: "title", description: "description" }, standalone: false, decls: 12, vars: 2, consts: [[1, "under-development-panel"], [1, "panel-content"], [1, "development-message"], [1, "icon"], [1, "progress-info"]], template: function UnderDevelopmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "\u{1F6A7}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "p");
      \u0275\u0275text(11, "\uBE60\uB978 \uC2DC\uC77C \uB0B4\uC5D0 \uC644\uC131\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.description);
    }
  }, styles: ["\n\n.under-development-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 120px);\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 16px;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #007bff;\n}\n.under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #495057;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 48px;\n    margin-bottom: 16px;\n  }\n  .under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 12px;\n  }\n  .under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 16px;\n  }\n  .under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .under-development-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .development-message[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=under-development.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnderDevelopmentComponent, [{
    type: Component,
    args: [{ selector: "app-under-development", standalone: false, template: '<div class="under-development-panel">\n  <div class="panel-content">\n    <div class="development-message">\n      <div class="icon">\u{1F6A7}</div>\n      <h3>{{ title }}</h3>\n      <p>{{ description }}</p>\n      <div class="progress-info">\n        <p>\uBE60\uB978 \uC2DC\uC77C \uB0B4\uC5D0 \uC644\uC131\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.</p>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/shared/components/under-development/under-development.component.scss */\n.under-development-panel {\n  width: 100%;\n  height: calc(100vh - 120px);\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.under-development-panel .panel-content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.under-development-panel .panel-content .development-message {\n  text-align: center;\n  max-width: 400px;\n}\n.under-development-panel .panel-content .development-message .icon {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.under-development-panel .panel-content .development-message h3 {\n  font-size: 28px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 16px;\n}\n.under-development-panel .panel-content .development-message p {\n  color: #666;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\n.under-development-panel .panel-content .development-message .progress-info {\n  padding: 16px 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #007bff;\n}\n.under-development-panel .panel-content .development-message .progress-info p {\n  margin: 0;\n  color: #495057;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .under-development-panel .panel-content {\n    padding: 24px 16px;\n  }\n  .under-development-panel .panel-content .development-message .icon {\n    font-size: 48px;\n    margin-bottom: 16px;\n  }\n  .under-development-panel .panel-content .development-message h3 {\n    font-size: 24px;\n    margin-bottom: 12px;\n  }\n  .under-development-panel .panel-content .development-message p {\n    font-size: 14px;\n    margin-bottom: 16px;\n  }\n  .under-development-panel .panel-content .development-message .progress-info {\n    padding: 12px 16px;\n  }\n  .under-development-panel .panel-content .development-message .progress-info p {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=under-development.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], description: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnderDevelopmentComponent, { className: "UnderDevelopmentComponent", filePath: "src/app/modules/shared/components/under-development/under-development.component.ts", lineNumber: 9 });
})();

// src/app/modules/shared/components/mobile-bottom-nav.component.ts
var MobileBottomNavComponent = class _MobileBottomNavComponent {
  router;
  activeTab = "home";
  constructor(router) {
    this.router = router;
  }
  onHomeClick() {
    this.navigateWithFallback(["/docs_mobile"]);
  }
  onFilesClick() {
    this.navigateWithFallback(["/docs_mobile/myfiles"]);
  }
  onToolsClick() {
    this.navigateWithFallback(["/docs_mobile/tools"]);
  }
  onSettingsClick() {
    this.navigateWithFallback(["/docs_mobile/settings"]);
  }
  /**
   * 네비게이션 시도 후 실패하면 DocsMobile 홈으로 폴백
   */
  navigateWithFallback(commands, extras) {
    this.router.navigate(commands, extras).catch((error) => {
      console.error("[MobileBottomNav] Navigation failed:", error);
      console.log("[MobileBottomNav] Redirecting to DocsMobile home");
      this.router.navigate(["/docs_mobile"]).catch((fallbackError) => {
        console.error("[MobileBottomNav] Fallback navigation also failed:", fallbackError);
      });
    });
  }
  isActive(tab) {
    return this.activeTab === tab;
  }
  static \u0275fac = function MobileBottomNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileBottomNavComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MobileBottomNavComponent, selectors: [["app-docs-mobile-bottom-nav"]], inputs: { activeTab: "activeTab" }, standalone: false, decls: 21, vars: 8, consts: [[1, "bottom-nav"], [1, "nav-item", 3, "click"], [1, "nav-icon"], ["src", "./images/gnb-home-on@3x.png", "alt", "\uD648 \uC544\uC774\uCF58"], ["src", "./images/gnb-file@3x.png", "alt", "\uD30C\uC77C \uC544\uC774\uCF58"], ["src", "./images/gnb-tool@3x.png", "alt", "\uB3C4\uAD6C \uC544\uC774\uCF58"], ["src", "./images/gnb-setting@3x.png", "alt", "\uC124\uC815 \uC544\uC774\uCF58"]], template: function MobileBottomNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function MobileBottomNavComponent_Template_button_click_1_listener() {
        return ctx.onHomeClick();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "\uD648");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 1);
      \u0275\u0275listener("click", function MobileBottomNavComponent_Template_button_click_6_listener() {
        return ctx.onFilesClick();
      });
      \u0275\u0275elementStart(7, "span", 2);
      \u0275\u0275element(8, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "\uD30C\uC77C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 1);
      \u0275\u0275listener("click", function MobileBottomNavComponent_Template_button_click_11_listener() {
        return ctx.onToolsClick();
      });
      \u0275\u0275elementStart(12, "span", 2);
      \u0275\u0275element(13, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "\uB3C4\uAD6C");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 1);
      \u0275\u0275listener("click", function MobileBottomNavComponent_Template_button_click_16_listener() {
        return ctx.onSettingsClick();
      });
      \u0275\u0275elementStart(17, "span", 2);
      \u0275\u0275element(18, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "\uC124\uC815");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isActive("home"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isActive("files"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isActive("tools"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.isActive("settings"));
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.bottom-nav[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 8px 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 16px 16px 0 0;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 3px;\n  transition: color 0.2s ease;\n  color: #999;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: #ff5757;\n}\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: inherit;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2px;\n}\n.nav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  filter: grayscale(100%) brightness(0.6);\n  transition: filter 0.2s ease;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(49%) sepia(96%) saturate(2291%) hue-rotate(346deg) brightness(103%) contrast(101%);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(50%) brightness(0.8);\n}\n/*# sourceMappingURL=mobile-bottom-nav.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileBottomNavComponent, [{
    type: Component,
    args: [{ selector: "app-docs-mobile-bottom-nav", standalone: false, template: `<!-- \uD558\uB2E8 \uB124\uBE44\uAC8C\uC774\uC158 -->
<div class="bottom-nav">
  <button class="nav-item" 
          [class.active]="isActive('home')" 
          (click)="onHomeClick()">
    <span class="nav-icon">
      <img src="./images/gnb-home-on@3x.png" alt="\uD648 \uC544\uC774\uCF58" />
    </span>
    <span>\uD648</span>
  </button>

  <button class="nav-item" 
          [class.active]="isActive('files')" 
          (click)="onFilesClick()">
    <span class="nav-icon">
      <img src="./images/gnb-file@3x.png" alt="\uD30C\uC77C \uC544\uC774\uCF58" />
    </span>
    <span>\uD30C\uC77C</span>
  </button>

  <button class="nav-item" 
          [class.active]="isActive('tools')" 
          (click)="onToolsClick()">
     <span class="nav-icon">
      <img src="./images/gnb-tool@3x.png" alt="\uB3C4\uAD6C \uC544\uC774\uCF58" />
    </span>
    <span>\uB3C4\uAD6C</span>
  </button>

  <button class="nav-item" 
          [class.active]="isActive('settings')" 
          (click)="onSettingsClick()">
    <span class="nav-icon">
      <img src="./images/gnb-setting@3x.png" alt="\uC124\uC815 \uC544\uC774\uCF58" />
    </span>
    <span>\uC124\uC815</span>
  </button>
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/mobile-bottom-nav.component.scss */\n.bottom-nav {\n  background-color: white;\n  padding: 8px 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 16px 16px 0 0;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n}\n.nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 3px;\n  transition: color 0.2s ease;\n  color: #999;\n}\n.nav-item:hover {\n  color: #666;\n}\n.nav-item.active {\n  color: #ff5757;\n}\n.nav-item span {\n  font-size: 10px;\n  color: inherit;\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2px;\n}\n.nav-icon img {\n  width: 18px;\n  height: 18px;\n  filter: grayscale(100%) brightness(0.6);\n  transition: filter 0.2s ease;\n}\n.nav-item.active .nav-icon img {\n  filter: brightness(0) saturate(100%) invert(49%) sepia(96%) saturate(2291%) hue-rotate(346deg) brightness(103%) contrast(101%);\n}\n.nav-item:hover .nav-icon img {\n  filter: grayscale(50%) brightness(0.8);\n}\n/*# sourceMappingURL=mobile-bottom-nav.component.css.map */\n'] }]
  }], () => [{ type: Router }], { activeTab: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MobileBottomNavComponent, { className: "MobileBottomNavComponent", filePath: "src/app/modules/shared/components/mobile-bottom-nav.component.ts", lineNumber: 10 });
})();

// src/app/modules/shared/components/pdf-text-modifier/pdf-text-modifier.component.ts
function PdfTextModifierComponent_div_0_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_div_15_div_1_Template_div_click_0_listener() {
      const editor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectEditor(editor_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 26)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_div_15_div_1_Template_button_click_4_listener($event) {
      const editor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.deleteEditor(editor_r4.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(5, "i", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const editor_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", editor_r4.id === ctx_r1.activeEditorId);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-family", editor_r4.fontFamily)("font-size", editor_r4.fontSize, "px")("color", editor_r4.color)("font-weight", editor_r4.bold ? "bold" : "normal")("font-style", editor_r4.italic ? "italic" : "normal")("text-decoration", editor_r4.underline ? "underline" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", editor_r4.text || "\uBE48 \uD14D\uC2A4\uD2B8", " ");
  }
}
function PdfTextModifierComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, PdfTextModifierComponent_div_0_div_15_div_1_Template, 6, 15, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.editors);
  }
}
function PdfTextModifierComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "\uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C8 \uD14D\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD574\uBCF4\uC138\uC694.");
    \u0275\u0275elementEnd()();
  }
}
function PdfTextModifierComponent_div_0_div_17_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const font_r6 = ctx.$implicit;
    \u0275\u0275property("value", font_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(font_r6);
  }
}
function PdfTextModifierComponent_div_0_div_17_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r7 = ctx.$implicit;
    \u0275\u0275property("value", size_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", size_r7, "px");
  }
}
function PdfTextModifierComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 8)(2, "h4");
    \u0275\u0275text(3, "\uD14D\uC2A4\uD2B8 \uC18D\uC131");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 31)(5, "label");
    \u0275\u0275text(6, "\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "textarea", 32);
    \u0275\u0275twoWayListener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEditor.text, $event) || (ctx_r1.selectedEditor.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTextChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34)(10, "label");
    \u0275\u0275text(11, "\uD3F0\uD2B8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEditor.fontFamily, $event) || (ctx_r1.selectedEditor.fontFamily = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFontFamilyChange($event));
    });
    \u0275\u0275template(13, PdfTextModifierComponent_div_0_div_17_option_13_Template, 2, 2, "option", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275text(16, "\uD06C\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEditor.fontSize, $event) || (ctx_r1.selectedEditor.fontSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFontSizeChange($event));
    });
    \u0275\u0275template(18, PdfTextModifierComponent_div_0_div_17_option_18_Template, 2, 2, "option", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 31)(20, "label");
    \u0275\u0275text(21, "\uC0C9\uC0C1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 37)(23, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEditor.color, $event) || (ctx_r1.selectedEditor.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEditor.color, $event) || (ctx_r1.selectedEditor.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 31)(26, "label");
    \u0275\u0275text(27, "\uC2A4\uD0C0\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 40)(29, "button", 41);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_div_17_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBold());
    });
    \u0275\u0275element(30, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 41);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_div_17_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleItalic());
    });
    \u0275\u0275element(32, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 41);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_div_17_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUnderline());
    });
    \u0275\u0275element(34, "i", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 33)(36, "div", 34)(37, "label");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 45);
    \u0275\u0275listener("input", function PdfTextModifierComponent_div_0_div_17_Template_input_input_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOpacityChange(+$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 34)(42, "label");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEditor.rotation, $event) || (ctx_r1.selectedEditor.rotation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PdfTextModifierComponent_div_0_div_17_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRotationChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEditor.text);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEditor.fontFamily);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.fontFamilies);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEditor.fontSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.fontSizes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEditor.color);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEditor.color);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.selectedEditor.bold);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedEditor.italic);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedEditor.underline);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\uD22C\uBA85\uB3C4: ", \u0275\u0275pipeBind2(39, 17, ctx_r1.selectedEditor.opacity * 100, "1.0-0"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.selectedEditor.opacity * 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\uD68C\uC804: ", ctx_r1.selectedEditor.rotation, "\xB0");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEditor.rotation);
  }
}
function PdfTextModifierComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, "\uD14D\uC2A4\uD2B8\uB97C \uC120\uD0DD\uD558\uC5EC \uC18D\uC131\uC744 \uD3B8\uC9D1\uD558\uC138\uC694.");
    \u0275\u0275elementEnd()();
  }
}
function PdfTextModifierComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3");
    \u0275\u0275text(4, "\uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h4");
    \u0275\u0275text(11, "\uD14D\uC2A4\uD2B8 \uBAA9\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTextEditor());
    });
    \u0275\u0275element(13, "i", 10);
    \u0275\u0275text(14, " \uCD94\uAC00 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, PdfTextModifierComponent_div_0_div_15_Template, 2, 1, "div", 11)(16, PdfTextModifierComponent_div_0_div_16_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PdfTextModifierComponent_div_0_div_17_Template, 45, 20, "div", 13)(18, PdfTextModifierComponent_div_0_div_18_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "button", 17);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAllEditors());
    });
    \u0275\u0275element(22, "i", 18);
    \u0275\u0275text(23, " \uBAA8\uB450 \uC0AD\uC81C ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "button", 20);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(26, "\uCDE8\uC18C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275listener("click", function PdfTextModifierComponent_div_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyTextsToDocument());
    });
    \u0275\u0275element(28, "i", 22);
    \u0275\u0275text(29, " \uC801\uC6A9 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.editors.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editors.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedEditor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedEditor && ctx_r1.editors.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.editors.length === 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.editors.length === 0);
  }
}
var PdfTextModifierComponent = class _PdfTextModifierComponent {
  isVisible = false;
  editors = [];
  activeEditorId = null;
  editorsChanged = new EventEmitter();
  activeEditorChanged = new EventEmitter();
  applyTexts = new EventEmitter();
  visibilityChanged = new EventEmitter();
  selectedEditor = null;
  // 폰트 옵션들
  fontFamilies = [
    "Arial",
    "Arial Black",
    "Times New Roman",
    "Courier New",
    "Helvetica",
    "Georgia",
    "Verdana",
    "Comic Sans MS"
  ];
  fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 48, 72];
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.activeEditorId) {
      this.selectedEditor = this.editors.find((e) => e.id === this.activeEditorId) || null;
    } else {
      this.selectedEditor = null;
    }
  }
  onClose() {
    this.isVisible = false;
    this.visibilityChanged.emit(false);
  }
  addTextEditor() {
    const newEditor = {
      id: `text-editor-${Date.now()}`,
      x: 100,
      y: 100,
      text: "\uC0C8 \uD14D\uC2A4\uD2B8",
      fontSize: 14,
      fontFamily: "Arial",
      color: "#000000",
      bold: false,
      italic: false,
      underline: false,
      width: 200,
      height: 50,
      rotation: 0,
      opacity: 1,
      pageNumber: 1
    };
    const updatedEditors = [...this.editors, newEditor];
    this.editors = updatedEditors;
    this.editorsChanged.emit(updatedEditors);
    this.selectEditor(newEditor.id);
  }
  selectEditor(editorId) {
    this.activeEditorId = editorId;
    this.selectedEditor = this.editors.find((e) => e.id === editorId) || null;
    this.activeEditorChanged.emit(editorId);
  }
  deleteEditor(editorId) {
    const updatedEditors = this.editors.filter((e) => e.id !== editorId);
    this.editors = updatedEditors;
    this.editorsChanged.emit(updatedEditors);
    if (this.activeEditorId === editorId) {
      this.activeEditorId = null;
      this.selectedEditor = null;
      this.activeEditorChanged.emit(null);
    }
  }
  updateSelectedEditor() {
    if (this.selectedEditor) {
      const index = this.editors.findIndex((e) => e.id === this.selectedEditor.id);
      if (index !== -1) {
        this.editors[index] = __spreadValues({}, this.selectedEditor);
        this.editorsChanged.emit([...this.editors]);
      }
    }
  }
  onTextChange(text) {
    if (this.selectedEditor) {
      this.selectedEditor.text = text;
      this.updateSelectedEditor();
    }
  }
  onFontSizeChange(fontSize) {
    if (this.selectedEditor) {
      this.selectedEditor.fontSize = fontSize;
      this.updateSelectedEditor();
    }
  }
  onFontFamilyChange(fontFamily) {
    if (this.selectedEditor) {
      this.selectedEditor.fontFamily = fontFamily;
      this.updateSelectedEditor();
    }
  }
  onColorChange(color) {
    if (this.selectedEditor) {
      this.selectedEditor.color = color;
      this.updateSelectedEditor();
    }
  }
  toggleBold() {
    if (this.selectedEditor) {
      this.selectedEditor.bold = !this.selectedEditor.bold;
      this.updateSelectedEditor();
    }
  }
  toggleItalic() {
    if (this.selectedEditor) {
      this.selectedEditor.italic = !this.selectedEditor.italic;
      this.updateSelectedEditor();
    }
  }
  toggleUnderline() {
    if (this.selectedEditor) {
      this.selectedEditor.underline = !this.selectedEditor.underline;
      this.updateSelectedEditor();
    }
  }
  onOpacityChange(opacity) {
    if (this.selectedEditor) {
      this.selectedEditor.opacity = opacity / 100;
      this.updateSelectedEditor();
    }
  }
  onRotationChange(rotation) {
    if (this.selectedEditor) {
      this.selectedEditor.rotation = rotation;
      this.updateSelectedEditor();
    }
  }
  applyTextsToDocument() {
    this.applyTexts.emit([...this.editors]);
  }
  clearAllEditors() {
    this.editors = [];
    this.selectedEditor = null;
    this.activeEditorId = null;
    this.editorsChanged.emit([]);
    this.activeEditorChanged.emit(null);
  }
  static \u0275fac = function PdfTextModifierComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdfTextModifierComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdfTextModifierComponent, selectors: [["app-pdf-text-modifier"]], inputs: { isVisible: "isVisible", editors: "editors", activeEditorId: "activeEditorId" }, outputs: { editorsChanged: "editorsChanged", activeEditorChanged: "activeEditorChanged", applyTexts: "applyTexts", visibilityChanged: "visibilityChanged" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "pdf-text-modifier-overlay", 3, "click", 4, "ngIf"], [1, "pdf-text-modifier-overlay", 3, "click"], [1, "pdf-text-modifier-panel", 3, "click"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "panel-content"], [1, "editors-section"], [1, "section-header"], [1, "add-btn", 3, "click"], [1, "fas", "fa-plus"], ["class", "editors-list", 4, "ngIf"], ["class", "no-editors", 4, "ngIf"], ["class", "properties-section", 4, "ngIf"], ["class", "no-selection", 4, "ngIf"], [1, "panel-footer"], [1, "footer-left"], [1, "clear-btn", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"], [1, "footer-right"], [1, "cancel-btn", 3, "click"], [1, "apply-btn", 3, "click", "disabled"], [1, "fas", "fa-check"], [1, "editors-list"], ["class", "editor-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "editor-item", 3, "click"], [1, "editor-preview"], [1, "delete-btn", 3, "click"], [1, "fas", "fa-trash"], [1, "no-editors"], [1, "properties-section"], [1, "property-group"], ["placeholder", "\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "property-row"], [1, "property-group", "half"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "color-input-group"], ["type", "color", 1, "color-input", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "color-text", 3, "ngModelChange", "ngModel"], [1, "style-buttons"], [3, "click"], [1, "fas", "fa-bold"], [1, "fas", "fa-italic"], [1, "fas", "fa-underline"], ["type", "range", "min", "0", "max", "100", 1, "range-input", 3, "input", "value"], ["type", "range", "min", "-180", "max", "180", 1, "range-input", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "no-selection"]], template: function PdfTextModifierComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PdfTextModifierComponent_div_0_Template, 30, 6, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RangeValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ["\n\n.pdf-text-modifier-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.pdf-text-modifier-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90vw;\n  max-width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #f8f9fa;\n  border-radius: 8px 8px 0 0;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  color: #666;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #555;\n}\n.section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n.section-header[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.editors-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.editors-section[_ngcontent-%COMP%]   .editors-list[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item.active[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-color: #2196f3;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%]   .editor-preview[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%]   .editor-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc3545;\n  padding: 4px 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  opacity: 0.7;\n}\n.editors-section[_ngcontent-%COMP%]   .editor-item[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: #f8d7da;\n}\n.editors-section[_ngcontent-%COMP%]   .no-editors[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #666;\n}\n.editors-section[_ngcontent-%COMP%]   .no-editors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #555;\n}\n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: inherit;\n}\n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.properties-section[_ngcontent-%COMP%]   .property-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 60px;\n}\n.properties-section[_ngcontent-%COMP%]   .property-group.half[_ngcontent-%COMP%] {\n  width: calc(50% - 8px);\n}\n.properties-section[_ngcontent-%COMP%]   .property-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.properties-section[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.properties-section[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 36px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.properties-section[_ngcontent-%COMP%]   .color-input-group[_ngcontent-%COMP%]   .color-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.properties-section[_ngcontent-%COMP%]   .style-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.properties-section[_ngcontent-%COMP%]   .style-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.properties-section[_ngcontent-%COMP%]   .style-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.properties-section[_ngcontent-%COMP%]   .style-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.properties-section[_ngcontent-%COMP%]   .style-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.properties-section[_ngcontent-%COMP%]   .range-input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 4px;\n}\n.no-selection[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #666;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px dashed #ccc;\n}\n.no-selection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  background: #f8f9fa;\n  border-radius: 0 0 8px 8px;\n}\n.panel-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], \n.panel-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.panel-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.panel-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.panel-footer[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  border: 1px solid #dc3545;\n}\n.panel-footer[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c82333;\n}\n.panel-footer[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.panel-footer[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: #666;\n  border: 1px solid #ccc;\n}\n.panel-footer[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.panel-footer[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n  border: 1px solid #28a745;\n}\n.panel-footer[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #218838;\n}\n.panel-footer[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n@media (max-width: 768px) {\n  .pdf-text-modifier-panel[_ngcontent-%COMP%] {\n    width: 95vw;\n    max-height: 90vh;\n  }\n  .property-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .property-row[_ngcontent-%COMP%]   .property-group.half[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .panel-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .panel-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%], \n   .panel-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=pdf-text-modifier.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfTextModifierComponent, [{
    type: Component,
    args: [{ selector: "app-pdf-text-modifier", standalone: false, template: `<div class="pdf-text-modifier-overlay" *ngIf="isVisible" (click)="onClose()">
  <div class="pdf-text-modifier-panel" (click)="$event.stopPropagation()">
    <div class="panel-header">
      <h3>\uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30</h3>
      <button class="close-btn" (click)="onClose()">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="panel-content">
      <!-- \uD14D\uC2A4\uD2B8 \uC5D0\uB514\uD130 \uBAA9\uB85D -->
      <div class="editors-section">
        <div class="section-header">
          <h4>\uD14D\uC2A4\uD2B8 \uBAA9\uB85D</h4>
          <button class="add-btn" (click)="addTextEditor()">
            <i class="fas fa-plus"></i> \uCD94\uAC00
          </button>
        </div>
        
        <div class="editors-list" *ngIf="editors.length > 0">
          <div *ngFor="let editor of editors" 
               class="editor-item"
               [class.active]="editor.id === activeEditorId"
               (click)="selectEditor(editor.id)">
            <div class="editor-preview">
              <span [style.font-family]="editor.fontFamily"
                    [style.font-size.px]="editor.fontSize"
                    [style.color]="editor.color"
                    [style.font-weight]="editor.bold ? 'bold' : 'normal'"
                    [style.font-style]="editor.italic ? 'italic' : 'normal'"
                    [style.text-decoration]="editor.underline ? 'underline' : 'none'">
                {{ editor.text || '\uBE48 \uD14D\uC2A4\uD2B8' }}
              </span>
            </div>
            <button class="delete-btn" (click)="deleteEditor(editor.id); $event.stopPropagation()">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="no-editors" *ngIf="editors.length === 0">
          <p>\uD14D\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C8 \uD14D\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD574\uBCF4\uC138\uC694.</p>
        </div>
      </div>

      <!-- \uC120\uD0DD\uB41C \uC5D0\uB514\uD130 \uC18D\uC131 -->
      <div class="properties-section" *ngIf="selectedEditor">
        <div class="section-header">
          <h4>\uD14D\uC2A4\uD2B8 \uC18D\uC131</h4>
        </div>

        <div class="property-group">
          <label>\uD14D\uC2A4\uD2B8 \uB0B4\uC6A9</label>
          <textarea [(ngModel)]="selectedEditor.text" 
                   (ngModelChange)="onTextChange($event)"
                   placeholder="\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694"
                   rows="3"></textarea>
        </div>

        <div class="property-row">
          <div class="property-group half">
            <label>\uD3F0\uD2B8</label>
            <select [(ngModel)]="selectedEditor.fontFamily" 
                   (ngModelChange)="onFontFamilyChange($event)">
              <option *ngFor="let font of fontFamilies" [value]="font">{{ font }}</option>
            </select>
          </div>

          <div class="property-group half">
            <label>\uD06C\uAE30</label>
            <select [(ngModel)]="selectedEditor.fontSize" 
                   (ngModelChange)="onFontSizeChange($event)">
              <option *ngFor="let size of fontSizes" [value]="size">{{ size }}px</option>
            </select>
          </div>
        </div>

        <div class="property-group">
          <label>\uC0C9\uC0C1</label>
          <div class="color-input-group">
            <input type="color" 
                   [(ngModel)]="selectedEditor.color" 
                   (ngModelChange)="onColorChange($event)"
                   class="color-input">
            <input type="text" 
                   [(ngModel)]="selectedEditor.color" 
                   (ngModelChange)="onColorChange($event)"
                   class="color-text">
          </div>
        </div>

        <div class="property-group">
          <label>\uC2A4\uD0C0\uC77C</label>
          <div class="style-buttons">
            <button [class.active]="selectedEditor.bold" (click)="toggleBold()">
              <i class="fas fa-bold"></i>
            </button>
            <button [class.active]="selectedEditor.italic" (click)="toggleItalic()">
              <i class="fas fa-italic"></i>
            </button>
            <button [class.active]="selectedEditor.underline" (click)="toggleUnderline()">
              <i class="fas fa-underline"></i>
            </button>
          </div>
        </div>

        <div class="property-row">
          <div class="property-group half">
            <label>\uD22C\uBA85\uB3C4: {{ (selectedEditor.opacity! * 100) | number:'1.0-0' }}%</label>
            <input type="range" 
                   min="0" max="100" 
                   [value]="selectedEditor.opacity! * 100"
                   (input)="onOpacityChange(+($any($event.target).value))"
                   class="range-input">
          </div>

          <div class="property-group half">
            <label>\uD68C\uC804: {{ selectedEditor.rotation }}\xB0</label>
            <input type="range" 
                   min="-180" max="180" 
                   [(ngModel)]="selectedEditor.rotation"
                   (ngModelChange)="onRotationChange($event)"
                   class="range-input">
          </div>
        </div>
      </div>

      <div class="no-selection" *ngIf="!selectedEditor && editors.length > 0">
        <p>\uD14D\uC2A4\uD2B8\uB97C \uC120\uD0DD\uD558\uC5EC \uC18D\uC131\uC744 \uD3B8\uC9D1\uD558\uC138\uC694.</p>
      </div>
    </div>

    <!-- \uC561\uC158 \uBC84\uD2BC\uB4E4 -->
    <div class="panel-footer">
      <div class="footer-left">
        <button class="clear-btn" (click)="clearAllEditors()" [disabled]="editors.length === 0">
          <i class="fas fa-trash-alt"></i> \uBAA8\uB450 \uC0AD\uC81C
        </button>
      </div>
      <div class="footer-right">
        <button class="cancel-btn" (click)="onClose()">\uCDE8\uC18C</button>
        <button class="apply-btn" (click)="applyTextsToDocument()" [disabled]="editors.length === 0">
          <i class="fas fa-check"></i> \uC801\uC6A9
        </button>
      </div>
    </div>
  </div>
</div>`, styles: ["/* src/app/modules/shared/components/pdf-text-modifier/pdf-text-modifier.component.scss */\n.pdf-text-modifier-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.pdf-text-modifier-panel {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90vw;\n  max-width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n  background: #f8f9fa;\n  border-radius: 8px 8px 0 0;\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n}\n.panel-header .close-btn {\n  background: none;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n  color: #666;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.panel-header .close-btn:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.section-header h4 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #555;\n}\n.section-header .add-btn {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.section-header .add-btn:hover {\n  background: #0056b3;\n}\n.section-header .add-btn i {\n  margin-right: 4px;\n}\n.editors-section {\n  margin-bottom: 24px;\n}\n.editors-section .editors-list {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.editors-section .editor-item {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.editors-section .editor-item:last-child {\n  border-bottom: none;\n}\n.editors-section .editor-item:hover {\n  background: #f8f9fa;\n}\n.editors-section .editor-item.active {\n  background: #e3f2fd;\n  border-color: #2196f3;\n}\n.editors-section .editor-item .editor-preview {\n  flex: 1;\n}\n.editors-section .editor-item .editor-preview span {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n}\n.editors-section .editor-item .delete-btn {\n  background: none;\n  border: none;\n  color: #dc3545;\n  padding: 4px 6px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  opacity: 0.7;\n}\n.editors-section .editor-item .delete-btn:hover {\n  opacity: 1;\n  background: #f8d7da;\n}\n.editors-section .no-editors {\n  text-align: center;\n  padding: 32px 16px;\n  color: #666;\n}\n.editors-section .no-editors p {\n  margin: 0;\n  font-size: 14px;\n}\n.properties-section .property-group {\n  margin-bottom: 16px;\n}\n.properties-section .property-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #555;\n}\n.properties-section .property-group textarea,\n.properties-section .property-group select,\n.properties-section .property-group input[type=text] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: inherit;\n}\n.properties-section .property-group textarea:focus,\n.properties-section .property-group select:focus,\n.properties-section .property-group input[type=text]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.properties-section .property-group textarea {\n  resize: vertical;\n  min-height: 60px;\n}\n.properties-section .property-group.half {\n  width: calc(50% - 8px);\n}\n.properties-section .property-row {\n  display: flex;\n  gap: 16px;\n}\n.properties-section .color-input-group {\n  display: flex;\n  gap: 8px;\n}\n.properties-section .color-input-group .color-input {\n  width: 50px;\n  height: 36px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.properties-section .color-input-group .color-text {\n  flex: 1;\n}\n.properties-section .style-buttons {\n  display: flex;\n  gap: 4px;\n}\n.properties-section .style-buttons button {\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.properties-section .style-buttons button:hover {\n  background: #f8f9fa;\n}\n.properties-section .style-buttons button.active {\n  background: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n.properties-section .style-buttons button i {\n  font-size: 14px;\n}\n.properties-section .range-input {\n  width: 100%;\n  margin-top: 4px;\n}\n.no-selection {\n  text-align: center;\n  padding: 32px 16px;\n  color: #666;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px dashed #ccc;\n}\n.no-selection p {\n  margin: 0;\n  font-size: 14px;\n}\n.panel-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  background: #f8f9fa;\n  border-radius: 0 0 8px 8px;\n}\n.panel-footer .footer-left,\n.panel-footer .footer-right {\n  display: flex;\n  gap: 8px;\n}\n.panel-footer button {\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.panel-footer button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.panel-footer .clear-btn {\n  background: #dc3545;\n  color: white;\n  border: 1px solid #dc3545;\n}\n.panel-footer .clear-btn:hover:not(:disabled) {\n  background: #c82333;\n}\n.panel-footer .clear-btn i {\n  margin-right: 4px;\n}\n.panel-footer .cancel-btn {\n  background: white;\n  color: #666;\n  border: 1px solid #ccc;\n}\n.panel-footer .cancel-btn:hover {\n  background: #f8f9fa;\n}\n.panel-footer .apply-btn {\n  background: #28a745;\n  color: white;\n  border: 1px solid #28a745;\n}\n.panel-footer .apply-btn:hover:not(:disabled) {\n  background: #218838;\n}\n.panel-footer .apply-btn i {\n  margin-right: 4px;\n}\n@media (max-width: 768px) {\n  .pdf-text-modifier-panel {\n    width: 95vw;\n    max-height: 90vh;\n  }\n  .property-row {\n    flex-direction: column;\n  }\n  .property-row .property-group.half {\n    width: 100%;\n  }\n  .panel-footer {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .panel-footer .footer-left,\n  .panel-footer .footer-right {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=pdf-text-modifier.component.css.map */\n"] }]
  }], () => [], { isVisible: [{
    type: Input
  }], editors: [{
    type: Input
  }], activeEditorId: [{
    type: Input
  }], editorsChanged: [{
    type: Output
  }], activeEditorChanged: [{
    type: Output
  }], applyTexts: [{
    type: Output
  }], visibilityChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdfTextModifierComponent, { className: "PdfTextModifierComponent", filePath: "src/app/modules/shared/components/pdf-text-modifier/pdf-text-modifier.component.ts", lineNumber: 27 });
})();

// src/app/modules/shared/components/recent-files/recent-files.component.ts
function RecentFilesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "rect", 8);
    \u0275\u0275elementStart(4, "text", 9);
    \u0275\u0275text(5, "PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "PDF \uD30C\uC77C\uC744 \uC5EC\uAE30\uC5D0 \uB4DC\uB86D\uD558\uC138\uC694");
    \u0275\u0275elementEnd()()();
  }
}
function RecentFilesComponent_div_4_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18)(3, "span", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 20);
    \u0275\u0275element(5, "rect", 21);
    \u0275\u0275elementStart(6, "text", 22);
    \u0275\u0275text(7, "PDF");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275listener("click", function RecentFilesComponent_div_4_tr_12_Template_span_click_8_listener() {
      const file_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onFileNameClick(file_r4));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 24);
    \u0275\u0275listener("click", function RecentFilesComponent_div_4_tr_12_Template_button_click_15_listener() {
      const file_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deleteFile.emit(file_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 25);
    \u0275\u0275element(17, "path", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(file_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r4.lastModified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r4.size);
  }
}
function RecentFilesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th", 12);
    \u0275\u0275text(5, "\uC774\uB984");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 13);
    \u0275\u0275text(7, "\uB9C8\uC9C0\uB9C9 \uC218\uC815\uC2DC\uAC04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 14);
    \u0275\u0275text(9, "\uD06C\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, RecentFilesComponent_div_4_tr_12_Template, 18, 3, "tr", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 17);
    \u0275\u0275listener("change", function RecentFilesComponent_div_4_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onRecentFileInputChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r4.files);
  }
}
function RecentFilesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uCD5C\uADFC \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "PDF \uD30C\uC77C\uC744 \uC5F4\uBA74 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4");
    \u0275\u0275elementEnd()();
  }
}
var RecentFilesComponent = class _RecentFilesComponent {
  files = [];
  deleteFile = new EventEmitter();
  // emit: File만 openFile로 전달
  openFile = new EventEmitter();
  showSnackbar = new EventEmitter();
  selectedRecentFile = null;
  // 드래그 앤 드롭 관련 속성
  isDragOver = false;
  dragCounter = 0;
  onFileNameClick(file) {
    this.selectedRecentFile = file;
    const input = document.getElementById("recent-file-input");
    if (input) {
      input.value = "";
      input.click();
    }
  }
  onRecentFileInputChange(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const fileObj = input.files[0];
      this.openFile.emit(fileObj);
    }
    this.selectedRecentFile = null;
  }
  // 드래그 앤 드롭 이벤트 핸들러
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.types.includes("Files")) {
      event.dataTransfer.dropEffect = "copy";
    }
  }
  onDragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter++;
    if (event.dataTransfer?.types.includes("Files")) {
      this.isDragOver = true;
    }
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter <= 0) {
      this.isDragOver = false;
      this.dragCounter = 0;
    }
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this.dragCounter = 0;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
      if (isPdf) {
        this.openFile.emit(file);
      } else {
        this.showSnackbar.emit("PDF \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
      }
    }
  }
  static \u0275fac = function RecentFilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentFilesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentFilesComponent, selectors: [["app-recent-files"]], inputs: { files: "files" }, outputs: { deleteFile: "deleteFile", openFile: "openFile", showSnackbar: "showSnackbar" }, decls: 7, vars: 5, consts: [["noFiles", ""], [1, "recent-files-panel", 3, "dragover", "dragenter", "dragleave", "drop"], [1, "recent-title"], ["class", "drag-overlay", 4, "ngIf"], ["class", "recent-table-wrap", 4, "ngIf", "ngIfElse"], [1, "drag-overlay"], [1, "drag-message"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "3", "fill", "#007acc"], ["x", "12", "y", "17", "text-anchor", "middle", "fill", "white", "font-size", "8", "font-family", "Arial", "font-weight", "bold"], [1, "recent-table-wrap"], [1, "recent-files-table"], [2, "width", "50%"], [2, "width", "30%"], [2, "width", "15%"], [2, "width", "5%"], [4, "ngFor", "ngForOf"], ["id", "recent-file-input", "type", "file", "accept", "application/pdf", 2, "display", "none", 3, "change"], [1, "file-name-cell"], [1, "pdf-svg"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "3", "fill", "#F44336"], ["x", "12", "y", "17", "text-anchor", "middle", "fill", "white", "font-size", "10", "font-family", "Arial", "font-weight", "bold"], [1, "file-name-text", 2, "cursor", "pointer", "color", "#1976d2", 3, "click"], ["title", "\uC0AD\uC81C", 1, "delete-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z", "stroke", "#888", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "no-files-message"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z", "fill", "#ddd"]], template: function RecentFilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("dragover", function RecentFilesComponent_Template_div_dragover_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("dragenter", function RecentFilesComponent_Template_div_dragenter_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragEnter($event));
      })("dragleave", function RecentFilesComponent_Template_div_dragleave_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragLeave($event));
      })("drop", function RecentFilesComponent_Template_div_drop_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275text(2, "\uCD5C\uADFC\uD30C\uC77C");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, RecentFilesComponent_div_3_Template, 8, 0, "div", 3)(4, RecentFilesComponent_div_4_Template, 14, 1, "div", 4)(5, RecentFilesComponent_ng_template_5_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noFiles_r6 = \u0275\u0275reference(6);
      \u0275\u0275classProp("drag-over", ctx.isDragOver);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isDragOver);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.files.length > 0)("ngIfElse", noFiles_r6);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.recent-files-panel[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 2px dashed #ddd;\n  transition: all 0.3s ease;\n}\n.recent-files-panel.drag-over[_ngcontent-%COMP%] {\n  border-color: #007acc;\n  background: rgba(0, 122, 204, 0.05);\n}\n.recent-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #222;\n  margin-bottom: 18px;\n  flex-shrink: 0;\n}\n.recent-table-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-height: 0;\n  max-height: calc(100vh - 400px);\n}\n.recent-table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.recent-table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.recent-table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.recent-table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n@media (max-width: 768px) {\n  .recent-table-wrap[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 350px);\n  }\n}\n@media (max-width: 480px) {\n  .recent-table-wrap[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 300px);\n  }\n}\n.recent-files-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  background: #fff;\n}\n.recent-files-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #888;\n  font-weight: 500;\n  font-size: 15px;\n  background: #fafafa;\n  border-bottom: 2px solid #f0f0f0;\n  padding: 12px 8px;\n  text-align: left;\n}\n.recent-files-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #222;\n  font-size: 15px;\n  padding: 12px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.file-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pdf-svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.file-name-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #222;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.no-files-message[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #666;\n  padding: 40px 20px;\n}\n.no-files-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.no-files-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n  color: #333;\n}\n.no-files-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.recent-files-panel.drag-over[_ngcontent-%COMP%] {\n  border: 2px dashed #007acc;\n  background: rgba(0, 122, 204, 0.05);\n  position: relative;\n}\n.drag-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 122, 204, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  z-index: 1000;\n}\n.drag-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #007acc;\n}\n.drag-message[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.drag-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=recent-files.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentFilesComponent, [{
    type: Component,
    args: [{ selector: "app-recent-files", standalone: true, imports: [CommonModule, NgForOf], template: `
    <div class="recent-files-panel"
         (dragover)="onDragOver($event)"
         (dragenter)="onDragEnter($event)"
         (dragleave)="onDragLeave($event)"
         (drop)="onDrop($event)"
         [class.drag-over]="isDragOver">
      <div class="recent-title">\uCD5C\uADFC\uD30C\uC77C</div>
      <div class="drag-overlay" *ngIf="isDragOver">
        <div class="drag-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="3" fill="#007acc"/>
            <text x="12" y="17" text-anchor="middle" fill="white" font-size="8" font-family="Arial" font-weight="bold">PDF</text>
          </svg>
          <p>PDF \uD30C\uC77C\uC744 \uC5EC\uAE30\uC5D0 \uB4DC\uB86D\uD558\uC138\uC694</p>
        </div>
      </div>
      <div class="recent-table-wrap" *ngIf="files.length > 0; else noFiles">
        <table class="recent-files-table">
          <thead>
            <tr>
              <th style="width:50%">\uC774\uB984</th>
              <th style="width:30%">\uB9C8\uC9C0\uB9C9 \uC218\uC815\uC2DC\uAC04</th>
              <th style="width:15%">\uD06C\uAE30</th>
              <th style="width:5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let file of files">
              <td>
                <span class="file-name-cell">
                  <span class="pdf-svg">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="3" fill="#F44336"/>
                      <text x="12" y="17" text-anchor="middle" fill="white" font-size="10" font-family="Arial" font-weight="bold">PDF</text>
                    </svg>
                  </span>
                    <span class="file-name-text" style="cursor:pointer;color:#1976d2;" (click)="onFileNameClick(file)">{{file.name}}</span>
                </span>
              </td>
              <td>{{file.lastModified}}</td>
              <td>{{file.size}}</td>
              <td>
                <button class="delete-btn" (click)="deleteFile.emit(file)" title="\uC0AD\uC81C">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <input id="recent-file-input" type="file" accept="application/pdf" style="display:none" (change)="onRecentFileInputChange($event)" />
      </div>
      <ng-template #noFiles>
        <div class="no-files-message">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" fill="#ddd"/>
          </svg>
          <p>\uCD5C\uADFC \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</p>
          <span>PDF \uD30C\uC77C\uC744 \uC5F4\uBA74 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4</span>
        </div>
      </ng-template>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;060aad0f15b3d56e8186e8d2b7bb3da68af33e9911f42d37fa2906c0a9dc7162;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/shared/components/recent-files/recent-files.component.ts */\n.recent-files-panel {\n  padding: 32px 24px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 2px dashed #ddd;\n  transition: all 0.3s ease;\n}\n.recent-files-panel.drag-over {\n  border-color: #007acc;\n  background: rgba(0, 122, 204, 0.05);\n}\n.recent-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #222;\n  margin-bottom: 18px;\n  flex-shrink: 0;\n}\n.recent-table-wrap {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-height: 0;\n  max-height: calc(100vh - 400px);\n}\n.recent-table-wrap::-webkit-scrollbar {\n  width: 8px;\n}\n.recent-table-wrap::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.recent-table-wrap::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.recent-table-wrap::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n@media (max-width: 768px) {\n  .recent-table-wrap {\n    max-height: calc(100vh - 350px);\n  }\n}\n@media (max-width: 480px) {\n  .recent-table-wrap {\n    max-height: calc(100vh - 300px);\n  }\n}\n.recent-files-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  background: #fff;\n}\n.recent-files-table th {\n  color: #888;\n  font-weight: 500;\n  font-size: 15px;\n  background: #fafafa;\n  border-bottom: 2px solid #f0f0f0;\n  padding: 12px 8px;\n  text-align: left;\n}\n.recent-files-table td {\n  color: #222;\n  font-size: 15px;\n  padding: 12px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.file-name-cell {\n  display: flex;\n  align-items: center;\n}\n.pdf-svg {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.file-name-text {\n  font-weight: 500;\n  color: #222;\n}\n.delete-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.delete-btn:hover {\n  background: #f5f5f5;\n}\n.no-files-message {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #666;\n  padding: 40px 20px;\n}\n.no-files-message svg {\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.no-files-message p {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 8px 0;\n  color: #333;\n}\n.no-files-message span {\n  font-size: 14px;\n  color: #666;\n}\n.recent-files-panel.drag-over {\n  border: 2px dashed #007acc;\n  background: rgba(0, 122, 204, 0.05);\n  position: relative;\n}\n.drag-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 122, 204, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  z-index: 1000;\n}\n.drag-message {\n  text-align: center;\n  color: #007acc;\n}\n.drag-message svg {\n  margin-bottom: 12px;\n}\n.drag-message p {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n/*# sourceMappingURL=recent-files.component.css.map */\n'] }]
  }], null, { files: [{
    type: Input
  }], deleteFile: [{
    type: Output
  }], openFile: [{
    type: Output
  }], showSnackbar: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentFilesComponent, { className: "RecentFilesComponent", filePath: "src/app/modules/shared/components/recent-files/recent-files.component.ts", lineNumber: 258 });
})();

// src/app/modules/shared/components/shared-file-upload.component.ts
function SharedFileUploadComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", option_r2.icon, \u0275\u0275sanitizeUrl)("alt", option_r2.title);
  }
}
function SharedFileUploadComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("data-type", option_r2.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r2.getIconPath(option_r2.id));
  }
}
function SharedFileUploadComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function SharedFileUploadComponent_div_1_Template_div_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOptionSelect(option_r2));
    });
    \u0275\u0275template(1, SharedFileUploadComponent_div_1_div_1_Template, 2, 2, "div", 3)(2, SharedFileUploadComponent_div_1_div_2_Template, 3, 2, "div", 3);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mobile-option", ctx_r2.isMobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", option_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !option_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.title);
  }
}
var SharedFileUploadComponent = class _SharedFileUploadComponent {
  options = [];
  isMobile = false;
  optionSelect = new EventEmitter();
  onOptionSelect(option) {
    this.optionSelect.emit(option);
  }
  getIconPath(optionId) {
    const iconPaths = {
      "file": "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",
      "photo": "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",
      "pdf": "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
      "image": "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",
      "excel": "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z",
      "powerpoint": "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z",
      "word": "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"
    };
    return iconPaths[optionId] || iconPaths["file"];
  }
  static \u0275fac = function SharedFileUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedFileUploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SharedFileUploadComponent, selectors: [["app-shared-file-upload"]], inputs: { options: "options", isMobile: "isMobile" }, outputs: { optionSelect: "optionSelect" }, decls: 2, vars: 3, consts: [[1, "upload-options"], ["class", "upload-option", 3, "mobile-option", "click", 4, "ngFor", "ngForOf"], [1, "upload-option", 3, "click"], ["class", "option-icon", 4, "ngIf"], [1, "option-text"], [1, "option-icon"], [3, "src", "alt"], ["viewBox", "0 0 24 24"]], template: function SharedFileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, SharedFileUploadComponent_div_1_Template, 5, 5, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("mobile", ctx.isMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.options);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.upload-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.upload-options.mobile[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 0;\n}\n.upload-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #fff;\n  min-width: 120px;\n}\n.upload-option[_ngcontent-%COMP%]:hover {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.1);\n}\n.upload-option.mobile-option[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #e5e7eb;\n  border-radius: 0;\n  padding: 16px 20px;\n}\n.upload-option.mobile-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.option-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.option-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.option-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: #374151;\n}\n.option-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.mobile[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=shared-file-upload.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedFileUploadComponent, [{
    type: Component,
    args: [{ selector: "app-shared-file-upload", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="upload-options" [class.mobile]="isMobile">
      <div 
        class="upload-option" 
        *ngFor="let option of options"
        (click)="onOptionSelect(option)"
        [class.mobile-option]="isMobile"
      >
        <div class="option-icon" *ngIf="option.icon">
          <img [src]="option.icon" [alt]="option.title" />
        </div>
        <div class="option-icon" *ngIf="!option.icon">
          <svg viewBox="0 0 24 24" [attr.data-type]="option.id">
            <path [attr.d]="getIconPath(option.id)"/>
          </svg>
        </div>
        <span class="option-text">{{ option.title }}</span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;6ddb80fd2d89e34f3250f45a8cf9c120b502c98afe8ed509de4a0c9b132c2776;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/shared/components/shared-file-upload.component.ts */\n.upload-options {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.upload-options.mobile {\n  flex-direction: column;\n  gap: 0;\n}\n.upload-option {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #fff;\n  min-width: 120px;\n}\n.upload-option:hover {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.1);\n}\n.upload-option.mobile-option {\n  border: none;\n  border-bottom: 1px solid #e5e7eb;\n  border-radius: 0;\n  padding: 16px 20px;\n}\n.upload-option.mobile-option:last-child {\n  border-bottom: none;\n}\n.option-icon {\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.option-icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.option-icon svg {\n  width: 100%;\n  height: 100%;\n  fill: #374151;\n}\n.option-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.mobile .option-text {\n  font-size: 16px;\n}\n/*# sourceMappingURL=shared-file-upload.component.css.map */\n"] }]
  }], null, { options: [{
    type: Input
  }], isMobile: [{
    type: Input
  }], optionSelect: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SharedFileUploadComponent, { className: "SharedFileUploadComponent", filePath: "src/app/modules/shared/components/shared-file-upload.component.ts", lineNumber: 102 });
})();

// src/app/modules/shared/components/shared-recent-files.component.ts
function SharedRecentFilesComponent_div_3_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function SharedRecentFilesComponent_div_3_div_1_button_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const file_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDeleteClick(file_r2, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
function SharedRecentFilesComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function SharedRecentFilesComponent_div_3_div_1_Template_div_click_0_listener() {
      const file_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFileClick(file_r2));
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SharedRecentFilesComponent_div_3_div_1_button_8_Template, 3, 0, "button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mobile-item", ctx_r2.isMobile)("selected", ctx_r2.isSelected(file_r2));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getFileIcon(file_r2), \u0275\u0275sanitizeUrl)("alt", ctx_r2.getFileTypeLabel(file_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.formatDate(file_r2.date), " \xB7 ", file_r2.size, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showDeleteButton);
  }
}
function SharedRecentFilesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, SharedRecentFilesComponent_div_3_div_1_Template, 9, 10, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.recentFiles);
  }
}
function SharedRecentFilesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5, "\uCD5C\uADFC \uBCF8 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275text(7, "PDF \uD30C\uC77C\uC744 \uC5F4\uBA74 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mobile-empty", ctx_r2.isMobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getEmptyIcon(), \u0275\u0275sanitizeUrl);
  }
}
var SharedRecentFilesComponent = class _SharedRecentFilesComponent {
  recentFiles = [];
  isMobile = false;
  showDeleteButton = true;
  selectedFileId = null;
  sectionTitle = "\uCD5C\uADFC \uBCF8 \uD30C\uC77C";
  fileClick = new EventEmitter();
  deleteClick = new EventEmitter();
  onFileClick(file) {
    this.fileClick.emit(file);
  }
  isSelected(file) {
    return file.id === this.selectedFileId;
  }
  onDeleteClick(file, event) {
    event.stopPropagation();
    this.deleteClick.emit(file);
  }
  formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  }
  getPdfIcon() {
    return "./images/ico-pdf@3x.png";
  }
  getEmptyIcon() {
    return "./images/img-latest-file@3x.png";
  }
  getFileIcon(file) {
    if (file.documentType === "viewer") {
      return "./images/ico-pdf@3x.png";
    }
    return "./images/ico-m-pdf-file@3x.png";
  }
  getFileTypeLabel(file) {
    return file.documentType === "viewer" ? "\uC77D\uAE30 \uC804\uC6A9 PDF" : "\uB0B4 \uBB38\uC11C";
  }
  static \u0275fac = function SharedRecentFilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedRecentFilesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SharedRecentFilesComponent, selectors: [["app-shared-recent-files"]], inputs: { recentFiles: "recentFiles", isMobile: "isMobile", showDeleteButton: "showDeleteButton", selectedFileId: "selectedFileId", sectionTitle: "sectionTitle" }, outputs: { fileClick: "fileClick", deleteClick: "deleteClick" }, decls: 6, vars: 5, consts: [["noRecent", ""], [1, "recent-files-container"], [1, "section-title"], ["class", "recent-files-content", 4, "ngIf", "ngIfElse"], [1, "recent-files-content"], ["class", "recent-file-item", 3, "mobile-item", "selected", "click", 4, "ngFor", "ngForOf"], [1, "recent-file-item", 3, "click"], [1, "recent-file-thumb"], [3, "src", "alt"], [1, "recent-file-info"], [1, "recent-file-name"], [1, "recent-file-meta"], ["class", "delete-btn", "title", "\uC0AD\uC81C", 3, "click", 4, "ngIf"], ["title", "\uC0AD\uC81C", 1, "delete-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24"], ["d", "M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z", "stroke", "#888", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "recent-files-content", "empty"], [1, "recent-empty-icon"], ["alt", "\uCD5C\uADFC \uD30C\uC77C \uC5C6\uC74C", 3, "src"], [1, "recent-empty-text"], [1, "empty-title"], [1, "empty-subtitle"]], template: function SharedRecentFilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, SharedRecentFilesComponent_div_3_Template, 2, 1, "div", 3)(4, SharedRecentFilesComponent_ng_template_4_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noRecent_r5 = \u0275\u0275reference(5);
      \u0275\u0275classProp("mobile", ctx.isMobile);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.sectionTitle);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recentFiles.length > 0)("ngIfElse", noRecent_r5);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.recent-files-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.recent-files-container.mobile[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: none;\n  background: #f8f9fa;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222;\n  margin-bottom: 16px;\n}\n.recent-files-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recent-file-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  border-radius: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.recent-file-item[_ngcontent-%COMP%]:hover {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.1);\n}\n.recent-file-item.selected[_ngcontent-%COMP%] {\n  border-color: #2196F3;\n  border-width: 2px;\n  background: #e3f2fd;\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);\n}\n.recent-file-item.mobile-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.recent-file-item.mobile-item.selected[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  box-shadow: 0 1px 3px rgba(33, 150, 243, 0.3);\n}\n.recent-file-item.mobile-item.selected[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  background: #2196F3;\n  border-radius: 50%;\n  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);\n}\n.recent-file-item.mobile-item.selected[_ngcontent-%COMP%]   .recent-file-thumb[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.recent-file-thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recent-file-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.recent-file-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.recent-file-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.recent-file-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  z-index: 10;\n}\n.recent-file-item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.mobile[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #e5e7eb;\n  padding: 6px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.recent-files-content.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.recent-files-content.empty.mobile-empty[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n}\n.recent-empty-icon[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.recent-empty-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  opacity: 0.5;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.empty-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n}\n/*# sourceMappingURL=shared-recent-files.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedRecentFilesComponent, [{
    type: Component,
    args: [{ selector: "app-shared-recent-files", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="recent-files-container" [class.mobile]="isMobile">
      <div class="section-title">{{ sectionTitle }}</div>
      
      <div class="recent-files-content" *ngIf="recentFiles.length > 0; else noRecent">
        <div
          class="recent-file-item"
          *ngFor="let file of recentFiles"
          (click)="onFileClick(file)"
          [class.mobile-item]="isMobile"
          [class.selected]="isSelected(file)"
        >
          <div class="recent-file-thumb">
            <img [src]="getFileIcon(file)" [alt]="getFileTypeLabel(file)" />
          </div>
          <div class="recent-file-info">
            <div class="recent-file-name">{{ file.name }}</div>
            <div class="recent-file-meta">
              {{ formatDate(file.date) }} \xB7 {{ file.size }}
            </div>
          </div>
          <button 
            *ngIf="showDeleteButton" 
            class="delete-btn" 
            (click)="onDeleteClick(file, $event)"
            title="\uC0AD\uC81C">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z" 
                    stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <ng-template #noRecent>
        <div class="recent-files-content empty" [class.mobile-empty]="isMobile">
          <div class="recent-empty-icon">
            <img [src]="getEmptyIcon()" alt="\uCD5C\uADFC \uD30C\uC77C \uC5C6\uC74C" />
          </div>
          <div class="recent-empty-text">
            <div class="empty-title">\uCD5C\uADFC \uBCF8 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</div>
            <div class="empty-subtitle">PDF \uD30C\uC77C\uC744 \uC5F4\uBA74 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4</div>
          </div>
        </div>
      </ng-template>
    </div>
  `, styles: ['/* angular:styles/component:scss;a786359d897ad10401f4cda588604c12e4aa11a74187ab371afc759c1dfa49a2;/Users/ansanghyun/Documents/IA/loworld_ai/src/app/modules/shared/components/shared-recent-files.component.ts */\n.recent-files-container {\n  padding: 24px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.recent-files-container.mobile {\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: none;\n  background: #f8f9fa;\n}\n.section-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222;\n  margin-bottom: 16px;\n}\n.recent-files-content {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recent-file-item {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  border-radius: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.recent-file-item:hover {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.1);\n}\n.recent-file-item.selected {\n  border-color: #2196F3;\n  border-width: 2px;\n  background: #e3f2fd;\n  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);\n}\n.recent-file-item.mobile-item {\n  background: #fff;\n  border: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.recent-file-item.mobile-item.selected {\n  background: #e3f2fd;\n  box-shadow: 0 1px 3px rgba(33, 150, 243, 0.3);\n}\n.recent-file-item.mobile-item.selected::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n  height: 8px;\n  background: #2196F3;\n  border-radius: 50%;\n  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);\n}\n.recent-file-item.mobile-item.selected .recent-file-thumb {\n  margin-left: 12px;\n}\n.recent-file-thumb {\n  width: 40px;\n  height: 40px;\n  margin-right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.recent-file-thumb img {\n  width: 32px;\n  height: 32px;\n}\n.recent-file-info {\n  flex: 1;\n  min-width: 0;\n}\n.recent-file-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.recent-file-meta {\n  font-size: 12px;\n  color: #666;\n}\n.delete-btn {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  z-index: 10;\n}\n.recent-file-item:hover .delete-btn {\n  opacity: 1;\n}\n.mobile .delete-btn {\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #e5e7eb;\n  padding: 6px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.delete-btn:hover {\n  background: #f3f4f6;\n}\n.recent-files-content.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.recent-files-content.empty.mobile-empty {\n  padding: 30px 20px;\n}\n.recent-empty-icon {\n  margin-bottom: 16px;\n}\n.recent-empty-icon img {\n  width: 64px;\n  height: 64px;\n  opacity: 0.5;\n}\n.empty-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 8px;\n}\n.empty-subtitle {\n  font-size: 14px;\n  color: #6b7280;\n}\n/*# sourceMappingURL=shared-recent-files.component.css.map */\n'] }]
  }], null, { recentFiles: [{
    type: Input
  }], isMobile: [{
    type: Input
  }], showDeleteButton: [{
    type: Input
  }], selectedFileId: [{
    type: Input
  }], sectionTitle: [{
    type: Input
  }], fileClick: [{
    type: Output
  }], deleteClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SharedRecentFilesComponent, { className: "SharedRecentFilesComponent", filePath: "src/app/modules/shared/components/shared-recent-files.component.ts", lineNumber: 238 });
})();

// src/app/shared/components/confirmation-dialog/confirmation-dialog.component.ts
var ConfirmationDialogComponent = class _ConfirmationDialogComponent {
  dialogRef;
  data;
  title;
  message;
  confirmText;
  cancelText;
  confirmColor;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.title = data.title || "\uD655\uC778";
    this.message = data.message;
    this.confirmText = data.confirmText || "\uD655\uC778";
    this.cancelText = data.cancelText || "\uCDE8\uC18C";
    this.confirmColor = data.confirmColor || "primary";
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static \u0275fac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], standalone: false, decls: 11, vars: 5, consts: [[1, "confirmation-dialog"], ["mat-dialog-title", ""], [1, "confirmation-message"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", 3, "click", "color"]], template: function ConfirmationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-dialog-actions", 3)(7, "button", 4);
      \u0275\u0275listener("click", function ConfirmationDialogComponent_Template_button_click_7_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function ConfirmationDialogComponent_Template_button_click_9_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.message);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.cancelText, " ");
      \u0275\u0275advance();
      \u0275\u0275property("color", ctx.confirmColor);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.confirmText, " ");
    }
  }, dependencies: [MatDialogTitle, MatDialogActions, MatDialogContent, MatButton], styles: ["\n\n.confirmation-dialog[_ngcontent-%COMP%] {\n  min-width: 300px;\n  max-width: 500px;\n}\n.confirmation-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\nmat-dialog-content[_ngcontent-%COMP%]   .confirmation-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--text-primary, #333);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 8px 24px 16px;\n  gap: 8px;\n}\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n/*# sourceMappingURL=confirmation-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirmation-dialog", standalone: false, template: '<div class="confirmation-dialog">\n  <h2 mat-dialog-title>{{ title }}</h2>\n  \n  <mat-dialog-content>\n    <p class="confirmation-message">{{ message }}</p>\n  </mat-dialog-content>\n  \n  <mat-dialog-actions align="end">\n    <button mat-button (click)="onCancel()">\n      {{ cancelText }}\n    </button>\n    <button mat-raised-button [color]="confirmColor" (click)="onConfirm()">\n      {{ confirmText }}\n    </button>\n  </mat-dialog-actions>\n</div>\n', styles: ["/* src/app/shared/components/confirmation-dialog/confirmation-dialog.component.scss */\n.confirmation-dialog {\n  min-width: 300px;\n  max-width: 500px;\n}\n.confirmation-dialog h2 {\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\nmat-dialog-content {\n  padding: 16px 24px;\n}\nmat-dialog-content .confirmation-message {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--text-primary, #333);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\nmat-dialog-actions {\n  padding: 8px 24px 16px;\n  gap: 8px;\n}\nmat-dialog-actions button {\n  min-width: 80px;\n}\n/*# sourceMappingURL=confirmation-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationDialogComponent, { className: "ConfirmationDialogComponent", filePath: "src/app/shared/components/confirmation-dialog/confirmation-dialog.component.ts", lineNumber: 18 });
})();

// src/app/shared/components/shared-pdf-left-panel/shared-pdf-left-panel.component.ts
function SharedPdfLeftPanelComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p");
    \u0275\u0275text(2, "\uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd()();
  }
}
function SharedPdfLeftPanelComponent_div_8_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const thumbnail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", thumbnail_r2.icon, \u0275\u0275sanitizeUrl)("alt", "\uD398\uC774\uC9C0 " + thumbnail_r2.pageNumber);
  }
}
function SharedPdfLeftPanelComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thumbnail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", thumbnail_r2.icon || "\u{1F4C4}", " ");
  }
}
function SharedPdfLeftPanelComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thumbnail_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(thumbnail_r2.title);
  }
}
function SharedPdfLeftPanelComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function SharedPdfLeftPanelComponent_div_8_Template_div_click_0_listener() {
      const thumbnail_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onThumbnailClick(thumbnail_r2));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275template(2, SharedPdfLeftPanelComponent_div_8_img_2_Template, 1, 2, "img", 10)(3, SharedPdfLeftPanelComponent_div_8_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SharedPdfLeftPanelComponent_div_8_div_6_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const thumbnail_r2 = ctx.$implicit;
    \u0275\u0275classProp("active", thumbnail_r2.active);
    \u0275\u0275property("title", "\uD398\uC774\uC9C0 " + thumbnail_r2.pageNumber + (thumbnail_r2.title ? ": " + thumbnail_r2.title : ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", thumbnail_r2.icon && thumbnail_r2.icon.startsWith("data:"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !thumbnail_r2.icon || !thumbnail_r2.icon.startsWith("data:"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(thumbnail_r2.pageNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", thumbnail_r2.title);
  }
}
var SharedPdfLeftPanelComponent = class _SharedPdfLeftPanelComponent {
  cdr;
  isVisible = false;
  thumbnails = [];
  close = new EventEmitter();
  thumbnailClick = new EventEmitter();
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnChanges(changes) {
    if (changes["thumbnails"]) {
      console.log("\u{1F4F8} \uC88C\uCE21 \uD328\uB110 \uC378\uB124\uC77C \uC5C5\uB370\uC774\uD2B8:", this.thumbnails.length);
      this.cdr.detectChanges();
    }
  }
  onThumbnailClick(thumbnail) {
    this.thumbnails.forEach((t) => t.active = false);
    thumbnail.active = true;
    this.thumbnailClick.emit(thumbnail);
  }
  onClose() {
    this.close.emit();
  }
  static \u0275fac = function SharedPdfLeftPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedPdfLeftPanelComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SharedPdfLeftPanelComponent, selectors: [["app-shared-pdf-left-panel"]], inputs: { isVisible: "isVisible", thumbnails: "thumbnails" }, outputs: { close: "close", thumbnailClick: "thumbnailClick" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 9, vars: 2, consts: [[1, "left-panel"], [1, "panel-header"], [1, "panel-title"], ["title", "\uB2EB\uAE30", 1, "close-panel-btn", 3, "click"], [1, "thumbnail-container"], ["class", "empty-state", 4, "ngIf"], ["class", "thumbnail", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "empty-state"], [1, "thumbnail", 3, "click", "title"], [1, "thumbnail-image"], ["class", "thumbnail-img", 3, "src", "alt", 4, "ngIf"], ["class", "page-icon", 4, "ngIf"], [1, "page-number"], ["class", "page-title", 4, "ngIf"], [1, "thumbnail-img", 3, "src", "alt"], [1, "page-icon"], [1, "page-title"]], template: function SharedPdfLeftPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "\uD398\uC774\uC9C0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function SharedPdfLeftPanelComponent_Template_button_click_4_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(5, " \xD7 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, SharedPdfLeftPanelComponent_div_7_Template, 3, 0, "div", 5)(8, SharedPdfLeftPanelComponent_div_8_Template, 7, 7, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.thumbnails || ctx.thumbnails.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.thumbnails);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.left-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background: #fff;\n  border-right: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  z-index: 900;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.close-panel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 4px;\n  transition: background 0.15s;\n  padding: 0;\n}\n.close-panel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: #333;\n}\n.thumbnail-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #999;\n  font-size: 14px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 20px;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 12px;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.thumbnail[_ngcontent-%COMP%]:hover {\n  border-color: #ccc;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.thumbnail.active[_ngcontent-%COMP%] {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.2);\n}\n.thumbnail-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  background:\n    linear-gradient(\n      135deg,\n      #f9f9f9 0%,\n      #f0f0f0 100%);\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.thumbnail-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: white;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 0.4;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.page-number[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 4px;\n}\n.thumbnail-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.thumbnail-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.thumbnail-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.thumbnail-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n/*# sourceMappingURL=shared-pdf-left-panel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedPdfLeftPanelComponent, [{
    type: Component,
    args: [{ selector: "app-shared-pdf-left-panel", standalone: false, template: `<div class="left-panel">
  <div class="panel-header">
    <h3 class="panel-title">\uD398\uC774\uC9C0</h3>
    <button class="close-panel-btn" 
            title="\uB2EB\uAE30"
            (click)="onClose()">
      \xD7
    </button>
  </div>
  
  <div class="thumbnail-container">
    <!-- \uC378\uB124\uC77C\uC774 \uC5C6\uC744 \uB54C \uC548\uB0B4 \uBA54\uC2DC\uC9C0 -->
    <div *ngIf="!thumbnails || thumbnails.length === 0" class="empty-state">
      <p>\uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</p>
    </div>
    
    <!-- \uC378\uB124\uC77C \uBAA9\uB85D -->
    <div class="thumbnail" 
         *ngFor="let thumbnail of thumbnails"
         [class.active]="thumbnail.active"
         [title]="'\uD398\uC774\uC9C0 ' + thumbnail.pageNumber + (thumbnail.title ? ': ' + thumbnail.title : '')"
         (click)="onThumbnailClick(thumbnail)">
      <div class="thumbnail-image">
        <!-- \uC2E4\uC81C \uC378\uB124\uC77C \uC774\uBBF8\uC9C0 \uB610\uB294 \uB85C\uB529 \uD50C\uB808\uC774\uC2A4\uD640\uB354 -->
        <img *ngIf="thumbnail.icon && thumbnail.icon.startsWith('data:')" 
             [src]="thumbnail.icon" 
             [alt]="'\uD398\uC774\uC9C0 ' + thumbnail.pageNumber"
             class="thumbnail-img">
        <div *ngIf="!thumbnail.icon || !thumbnail.icon.startsWith('data:')" 
             class="page-icon">
          {{ thumbnail.icon || '\u{1F4C4}' }}
        </div>
        <div class="page-number">{{ thumbnail.pageNumber }}</div>
      </div>
      <div class="page-title" *ngIf="thumbnail.title">{{ thumbnail.title }}</div>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/components/shared-pdf-left-panel/shared-pdf-left-panel.component.scss */\n.left-panel {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background: #fff;\n  border-right: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  z-index: 900;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.panel-title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.close-panel-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 4px;\n  transition: background 0.15s;\n  padding: 0;\n}\n.close-panel-btn:hover {\n  background: #f0f0f0;\n  color: #333;\n}\n.thumbnail-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #999;\n  font-size: 14px;\n  text-align: center;\n}\n.empty-state p {\n  margin: 0;\n  padding: 20px;\n}\n.thumbnail {\n  width: 100%;\n  margin-bottom: 12px;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.thumbnail:hover {\n  border-color: #ccc;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.thumbnail.active {\n  border-color: #007acc;\n  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.2);\n}\n.thumbnail-image {\n  width: 100%;\n  height: 140px;\n  background:\n    linear-gradient(\n      135deg,\n      #f9f9f9 0%,\n      #f0f0f0 100%);\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.thumbnail-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: white;\n}\n.page-icon {\n  font-size: 52px;\n  opacity: 0.6;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 0.4;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.page-number {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n  background: rgba(0, 0, 0, 0.75);\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.page-title {\n  margin-top: 6px;\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 4px;\n}\n.thumbnail-container::-webkit-scrollbar {\n  width: 6px;\n}\n.thumbnail-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.thumbnail-container::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 3px;\n}\n.thumbnail-container::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n/*# sourceMappingURL=shared-pdf-left-panel.component.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }], { isVisible: [{
    type: Input
  }], thumbnails: [{
    type: Input
  }], close: [{
    type: Output
  }], thumbnailClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SharedPdfLeftPanelComponent, { className: "SharedPdfLeftPanelComponent", filePath: "src/app/shared/components/shared-pdf-left-panel/shared-pdf-left-panel.component.ts", lineNumber: 17 });
})();

// node_modules/@angular/animations/fesm2022/private_export.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function state(name, styles, options) {
  return { type: AnimationMetadataType.State, name, styles, options };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// src/app/modules/shared/components/window-modal/window-modal.component.ts
var _c03 = ["container"];
var _c1 = ["containerBody"];
function WindowModalComponent__svg_path_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 18);
  }
}
function WindowModalComponent__svg_path_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 19);
  }
}
function WindowModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.folderType === "calendar" ? "Calendar" : "Note", ")");
  }
}
function WindowModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.iframeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function WindowModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 1);
  }
}
var WindowModalComponent = class _WindowModalComponent {
  cdr;
  sanitizer;
  id;
  zIndex;
  metaData;
  folderType;
  // 폴더 타입 정보
  isMobileApp = false;
  // 모바일 앱 스타일 적용 여부
  set zoomLevel(value) {
    this.zoomLevelSignal.set(value);
  }
  get zoomLevel() {
    return this.zoomLevelSignal();
  }
  moveToFront = new EventEmitter();
  close = new EventEmitter();
  minimizeWindow = new EventEmitter();
  windowStyleChange = new EventEmitter();
  // Signal으로 줌 레벨 관리
  zoomLevelSignal = signal(100, ...ngDevMode ? [{ debugName: "zoomLevelSignal" }] : []);
  // computed로 transform 값 자동 계산
  zoomTransform = computed(() => {
    const scale = this.zoomLevelSignal() / 100;
    return `scale(${scale})`;
  }, ...ngDevMode ? [{ debugName: "zoomTransform" }] : []);
  container;
  cdkDrag;
  containerBody;
  componentRef;
  iframeUrl = null;
  isMaximized = false;
  windowStyle = {
    position: "absolute",
    width: "900px",
    height: "700px",
    top: `${Math.floor(Math.random() * 100) + 50}px`,
    left: `${Math.floor(Math.random() * 200) + 100}px`,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
    overflow: "hidden"
  };
  // 포인터 드래그 처리
  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;
  elementStartX = 0;
  elementStartY = 0;
  activePointerId = null;
  constructor(cdr, sanitizer) {
    this.cdr = cdr;
    this.sanitizer = sanitizer;
  }
  ngAfterContentInit() {
    console.log("Zoom Level after content init:", this.zoomLevel);
  }
  ngOnInit() {
    if (!this.metaData) {
      return;
    }
    timer(1e3).subscribe(() => {
      console.log("Zoom Level on Init:", this.zoomLevel);
      this.zoomLevelSignal.set(this.zoomLevel + 1);
    });
    if (this.isMobileApp) {
      this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
        width: "393px",
        height: "852px",
        borderRadius: "10px"
      });
    } else {
      const baseWidth = 1200;
      const baseHeight = 900;
      this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
        width: `${Math.round(baseWidth)}px`,
        height: `${Math.round(baseHeight)}px`
      });
    }
    if (this.metaData.component) {
      this.containerBody.clear();
      this.componentRef = this.containerBody.createComponent(this.metaData.component);
      if (this.folderType && this.componentRef.instance) {
        this.componentRef.instance.folderType = this.folderType;
      }
    } else if (this.metaData.route) {
      const baseUrl = window.location.origin + window.location.pathname;
      const iframeUrlString = `${baseUrl}#${this.metaData.route}`;
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(iframeUrlString);
    }
    const topValue = parseInt(this.windowStyle.top, 10);
    const leftValue = parseInt(this.windowStyle.left, 10);
    this.windowStyleChange.emit({
      top: topValue,
      left: leftValue
    });
  }
  ngOnChanges(changes) {
    if (changes["zIndex"]) {
      this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
        zIndex: this.zIndex
      });
      this.cdr.detectChanges();
    }
  }
  onClick(event) {
    this.moveToFront.emit(this.id);
  }
  minimize(event) {
    event.stopPropagation();
    this.minimizeWindow.emit(this.id);
  }
  onContainerWheel(event) {
    event.stopPropagation();
  }
  maximize() {
    if (this.isMaximized) {
      if (this.isMobileApp) {
        this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
          position: "absolute",
          width: "393px",
          height: "852px",
          top: "50px",
          left: "calc(50% - 196.5px)",
          borderRadius: "10px"
        });
        this.windowStyleChange.emit({
          top: 50,
          left: 0
        });
      } else {
        const baseWidth = 900;
        const baseHeight = 700;
        this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
          position: "absolute",
          width: `${Math.round(baseWidth)}px`,
          height: `${Math.round(baseHeight)}px`,
          top: "50px",
          left: "100px",
          borderRadius: "12px"
        });
        this.windowStyleChange.emit({
          top: 50,
          left: 100
        });
      }
      this.cdkDrag._dragRef.setFreeDragPosition({ x: 0, y: 0 });
    } else {
      if (this.isMobileApp) {
        this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
          position: "fixed",
          top: "0px",
          left: "calc(50% - 196.5px)",
          transform: "none",
          width: "393px",
          height: "100vh",
          borderRadius: "10px",
          zIndex: 10001
        });
        this.windowStyleChange.emit({
          top: 0,
          left: 0
        });
      } else {
        this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
          position: "fixed",
          top: "0px",
          left: "0px",
          transform: "none",
          width: "100vw",
          height: "100vh",
          borderRadius: "0",
          zIndex: 10001
          // 메뉴바(10000)보다 높게
        });
        this.windowStyleChange.emit({
          top: 0,
          left: 0
        });
      }
      this.cdkDrag._dragRef.reset();
      this.cdkDrag._dragRef.setFreeDragPosition({ x: 0, y: 0 });
    }
    this.isMaximized = !this.isMaximized;
  }
  closeWindow() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    if (this.containerBody && this.containerBody.length > 0) {
      this.containerBody.detach(0);
    }
    this.close.emit(this.id);
  }
  /**
   * 포인터 다운 이벤트: 드래그 시작
   * 헤더 또는 노치 영역에서만 드래그 가능
   */
  onPointerDown(event) {
    if (!this.isDragTarget(event.target)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.activePointerId = event.pointerId;
    const modalElement = this.container.nativeElement;
    const rect = modalElement.getBoundingClientRect();
    this.elementStartX = rect.left;
    this.elementStartY = rect.top;
    event.target.setPointerCapture(event.pointerId);
    this.moveToFront.emit(this.id);
    document.addEventListener("pointermove", this.onPointerMove, true);
    document.addEventListener("pointerup", this.onPointerUp, true);
  }
  /**
   * 포인터 무브 이벤트: 윈도우 위치 업데이트
   * 바인딩된 화살표 함수로 정의하여 this 컨텍스트 유지
   */
  onPointerMove = (event) => {
    if (!this.isDragging || this.activePointerId !== event.pointerId) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const deltaX = event.clientX - this.dragStartX;
    const deltaY = event.clientY - this.dragStartY;
    const newLeft = this.elementStartX + deltaX;
    const newTop = this.elementStartY + deltaY;
    this.windowStyle = __spreadProps(__spreadValues({}, this.windowStyle), {
      left: newLeft + "px",
      top: newTop + "px"
    });
    this.windowStyleChange.emit({
      top: newTop,
      left: newLeft
    });
    this.cdr.markForCheck();
  };
  /**
   * 포인터 업 이벤트: 드래그 종료
   */
  onPointerUp = (event) => {
    if (!this.isDragging || this.activePointerId !== event.pointerId) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    this.activePointerId = null;
    if (this.container) {
      const modalElement = this.container.nativeElement;
      try {
        modalElement.releasePointerCapture(event.pointerId);
      } catch (e) {
      }
    }
    document.removeEventListener("pointermove", this.onPointerMove, true);
    document.removeEventListener("pointerup", this.onPointerUp, true);
  };
  /**
   * 드래그 대상 확인 (헤더 또는 모바일 노치)
   */
  isDragTarget(target) {
    if (!target)
      return false;
    let element = target;
    while (element && element !== this.container?.nativeElement) {
      if (element.classList.contains("container-header") || element.classList.contains("mobile-notch")) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }
  /**
   * 컴포넌트 소멸 시 이벤트 리스너 정리
   */
  ngOnDestroy() {
    if (this.isDragging) {
      this.isDragging = false;
      this.activePointerId = null;
      document.removeEventListener("pointermove", this.onPointerMove, true);
      document.removeEventListener("pointerup", this.onPointerUp, true);
    }
  }
  static \u0275fac = function WindowModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WindowModalComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WindowModalComponent, selectors: [["app-window-modal"]], viewQuery: function WindowModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5, ElementRef);
      \u0275\u0275viewQuery(CdkDrag, 5);
      \u0275\u0275viewQuery(_c1, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkDrag = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerBody = _t.first);
    }
  }, hostBindings: function WindowModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointerdown", function WindowModalComponent_pointerdown_HostBindingHandler($event) {
        return ctx.onPointerDown($event);
      });
    }
  }, inputs: { id: "id", zIndex: "zIndex", metaData: "metaData", folderType: "folderType", isMobileApp: "isMobileApp", zoomLevel: "zoomLevel" }, outputs: { moveToFront: "moveToFront", close: "close", minimizeWindow: "minimizeWindow", windowStyleChange: "windowStyleChange" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 21, vars: 15, consts: [["container", ""], ["containerBody", ""], ["cdkDrag", "", 1, "modal-container", 3, "mousedown"], ["cdkDragHandle", "", 1, "container-header", 3, "dblclick"], [1, "window-controls-left"], [1, "control-button", "close", 3, "click"], ["viewBox", "0 0 12 12", "fill", "currentColor"], ["d", "M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L7.06 6l2.72 2.72a.75.75 0 1 1-1.06 1.06L6 7.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L4.94 6 2.22 3.28a.75.75 0 0 1 0-1.06z"], [1, "control-button", "minimize", 3, "click"], ["d", "M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6z"], [1, "control-button", "maximize", 3, "click"], ["d", "M3 3.5A1.5 1.5 0 0 1 4.5 2h3A1.5 1.5 0 0 1 9 3.5v5A1.5 1.5 0 0 1 7.5 10h-3A1.5 1.5 0 0 1 3 8.5v-5zm1.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-3z", 4, "ngIf"], ["d", "M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3h-5zM8.354 4.854a.5.5 0 0 0-.708-.708L6 5.793 4.354 4.146a.5.5 0 1 0-.708.708L5.293 6.5l-1.647 1.646a.5.5 0 0 0 .708.708L6 7.207l1.646 1.647a.5.5 0 0 0 .708-.708L6.707 6.5l1.647-1.646z", 4, "ngIf"], [1, "header-label"], [1, "folder-tag"], [1, "spacer"], [1, "container-body", 3, "wheel"], ["frameborder", "0", 1, "app-iframe", 3, "src"], ["d", "M3 3.5A1.5 1.5 0 0 1 4.5 2h3A1.5 1.5 0 0 1 9 3.5v5A1.5 1.5 0 0 1 7.5 10h-3A1.5 1.5 0 0 1 3 8.5v-5zm1.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-3z"], ["d", "M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3h-5zM8.354 4.854a.5.5 0 0 0-.708-.708L6 5.793 4.354 4.146a.5.5 0 1 0-.708.708L5.293 6.5l-1.647 1.646a.5.5 0 0 0 .708.708L6 7.207l1.646 1.647a.5.5 0 0 0 .708-.708L6.707 6.5l1.647-1.646z"]], template: function WindowModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2, 0);
      \u0275\u0275listener("mousedown", function WindowModalComponent_Template_div_mousedown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClick($event));
      });
      \u0275\u0275elementStart(2, "div", 3);
      \u0275\u0275listener("dblclick", function WindowModalComponent_Template_div_dblclick_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.maximize());
      });
      \u0275\u0275elementStart(3, "div", 4)(4, "button", 5);
      \u0275\u0275listener("click", function WindowModalComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeWindow());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 6);
      \u0275\u0275element(6, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "button", 8);
      \u0275\u0275listener("click", function WindowModalComponent_Template_button_click_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.minimize($event));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "button", 10);
      \u0275\u0275listener("click", function WindowModalComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.maximize());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 6);
      \u0275\u0275template(12, WindowModalComponent__svg_path_12_Template, 1, 0, "path", 11)(13, WindowModalComponent__svg_path_13_Template, 1, 0, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span", 13);
      \u0275\u0275text(15);
      \u0275\u0275conditionalCreate(16, WindowModalComponent_Conditional_16_Template, 2, 1, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 16);
      \u0275\u0275listener("wheel", function WindowModalComponent_Template_div_wheel_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContainerWheel($event));
      });
      \u0275\u0275conditionalCreate(19, WindowModalComponent_Conditional_19_Template, 1, 1, "iframe", 17)(20, WindowModalComponent_Conditional_20_Template, 2, 0, "ng-container");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275styleMap(ctx.windowStyle);
      \u0275\u0275styleProp("transform", ctx.zoomTransform())("transform-origin", "top center");
      \u0275\u0275property("@modalAnimation", void 0);
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-label", "Close");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", "Minimize");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", ctx.isMaximized ? "Restore" : "Maximize");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isMaximized);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMaximized);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.metaData.label, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.folderType ? 16 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.iframeUrl ? 19 : 20);
    }
  }, dependencies: [NgIf, CdkDrag, CdkDragHandle], styles: ['@charset "UTF-8";\n\n\n\n.modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: rgba(240, 240, 245, 0.7);\n  backdrop-filter: blur(60px) saturate(200%);\n  -webkit-backdrop-filter: blur(60px) saturate(200%);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow:\n    0 25px 75px rgba(0, 0, 0, 0.35),\n    0 0 0 0.5px rgba(255, 255, 255, 0.4) inset,\n    0 1px 2px rgba(255, 255, 255, 0.3) inset;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.modal-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      rgba(255, 255, 255, 0.02) 100%);\n  pointer-events: none;\n  border-radius: 10px;\n}\n.container-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px 16px;\n  cursor: move;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n  min-height: 40px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(248, 248, 250, 0.8) 50%,\n      rgba(246, 246, 248, 0.75) 100%);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  position: relative;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -webkit-user-drag: none;\n}\n.container-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.6) 50%,\n      transparent 100%);\n}\n.container-header[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.window-controls-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  z-index: 1;\n}\n.control-button[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.15s ease;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  opacity: 0;\n  transition: opacity 0.15s ease;\n}\n.container-header[_ngcontent-%COMP%]:hover   .control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.control-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.control-button.close[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6057 0%,\n      #ff5f56 100%);\n}\n.control-button.close[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff4b42 0%,\n      #ff3b30 100%);\n  box-shadow: 0 2px 4px rgba(255, 59, 48, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.close[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      135deg,\n      #d93025 0%,\n      #c9211e 100%);\n}\n.control-button.minimize[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffbd2e 0%,\n      #ffbc2d 100%);\n}\n.control-button.minimize[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ffb01f 0%,\n      #ffa900 100%);\n  box-shadow: 0 2px 4px rgba(255, 169, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.minimize[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      135deg,\n      #e09b00 0%,\n      #d08800 100%);\n}\n.control-button.maximize[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #28ca42 0%,\n      #27c93f 100%);\n}\n.control-button.maximize[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #20b038 0%,\n      #1fa832 100%);\n  box-shadow: 0 2px 4px rgba(31, 168, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.maximize[_ngcontent-%COMP%]:active {\n  background:\n    linear-gradient(\n      135deg,\n      #1a9930 0%,\n      #178528 100%);\n}\n.header-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(100% - 200px);\n  font-weight: 600;\n  font-size: 13px;\n  color: #ffffff;\n  text-align: center;\n  letter-spacing: 0.2px;\n}\n.header-label[_ngcontent-%COMP%]   .folder-tag[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  opacity: 0.7;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.container-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  flex: 1;\n  padding: 0;\n  margin: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(252, 252, 254, 0.85) 100%);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  position: relative;\n}\n.app-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n  background: white;\n}\n.route-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.placeholder-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 20px;\n  stroke: white;\n  stroke-width: 1.5;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n}\n.placeholder-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 24px;\n  font-weight: 600;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.placeholder-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 14px;\n  opacity: 0.9;\n}\n.info-text[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n  font-size: 12px !important;\n  opacity: 0.7 !important;\n  font-style: italic;\n}\n.container-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.container-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.container-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.container-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n@media (prefers-color-scheme: dark) {\n  .modal-container[_ngcontent-%COMP%] {\n    background: rgba(40, 40, 50, 0.7);\n    border-color: rgba(255, 255, 255, 0.15);\n    box-shadow:\n      0 25px 75px rgba(0, 0, 0, 0.6),\n      0 0 0 0.5px rgba(255, 255, 255, 0.2) inset,\n      0 1px 2px rgba(255, 255, 255, 0.1) inset;\n  }\n  .modal-container[_ngcontent-%COMP%]::before {\n    background:\n      linear-gradient(\n        135deg,\n        rgba(255, 255, 255, 0.05) 0%,\n        rgba(255, 255, 255, 0.02) 50%,\n        rgba(255, 255, 255, 0.01) 100%);\n  }\n  .container-header[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        180deg,\n        rgba(55, 55, 65, 0.9) 0%,\n        rgba(45, 45, 55, 0.85) 50%,\n        rgba(40, 40, 50, 0.8) 100%);\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n  .container-header[_ngcontent-%COMP%]::after {\n    background:\n      linear-gradient(\n        90deg,\n        transparent 0%,\n        rgba(255, 255, 255, 0.1) 50%,\n        transparent 100%);\n  }\n  .header-label[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  .container-body[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        180deg,\n        rgba(30, 30, 40, 0.9) 0%,\n        rgba(25, 25, 35, 0.85) 100%);\n  }\n  .container-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.2);\n  }\n  .container-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n}\n/*# sourceMappingURL=window-modal.component.css.map */'], data: { animation: [
    trigger("modalAnimation", [
      state("void", style({ opacity: 0, transform: "scale(0.3)" })),
      state("*", style({ opacity: 1, transform: "scale(1)" })),
      transition("void => *", [
        animate("0.2s ease-out")
      ]),
      transition("* => void", [
        animate("0.2s ease-in")
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowModalComponent, [{
    type: Component,
    args: [{ selector: "app-window-modal", standalone: false, animations: [
      trigger("modalAnimation", [
        state("void", style({ opacity: 0, transform: "scale(0.3)" })),
        state("*", style({ opacity: 1, transform: "scale(1)" })),
        transition("void => *", [
          animate("0.2s ease-out")
        ]),
        transition("* => void", [
          animate("0.2s ease-in")
        ])
      ])
    ], template: `<div class="modal-container"
     [style]="windowStyle"
     [style.transform]="zoomTransform()"
     [style.transformOrigin]="'top center'"
     cdkDrag
     (mousedown)="onClick($event)" 
     #container 
     @modalAnimation>
  
  <!-- \uD5E4\uB354 (\uBAA8\uBC14\uC77C/PC \uACF5\uD1B5) -->
  <div class="container-header" cdkDragHandle (dblclick)="maximize()">
      <div class="window-controls-left">
        <button class="control-button close" (click)="closeWindow()" [attr.aria-label]="'Close'">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <path d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L7.06 6l2.72 2.72a.75.75 0 1 1-1.06 1.06L6 7.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L4.94 6 2.22 3.28a.75.75 0 0 1 0-1.06z"/>
          </svg>
        </button>
        <button class="control-button minimize" (click)="minimize($event)" [attr.aria-label]="'Minimize'">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6z"/>
          </svg>
        </button>
        <button class="control-button maximize" (click)="maximize()" [attr.aria-label]="isMaximized ? 'Restore' : 'Maximize'">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <path *ngIf="!isMaximized" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h3A1.5 1.5 0 0 1 9 3.5v5A1.5 1.5 0 0 1 7.5 10h-3A1.5 1.5 0 0 1 3 8.5v-5zm1.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-3z"/>
            <path *ngIf="isMaximized" d="M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5v-4A1.5 1.5 0 0 0 8.5 3h-5zM8.354 4.854a.5.5 0 0 0-.708-.708L6 5.793 4.354 4.146a.5.5 0 1 0-.708.708L5.293 6.5l-1.647 1.646a.5.5 0 0 0 .708.708L6 7.207l1.646 1.647a.5.5 0 0 0 .708-.708L6.707 6.5l1.647-1.646z"/>
          </svg>
        </button>
      </div>
      <span class="header-label">
        {{metaData.label}}
        @if (folderType) {
          <span class="folder-tag">({{folderType === 'calendar' ? 'Calendar' : 'Note'}})</span>
        }
      </span>
      <div class="spacer"></div>
    </div>
  
  <!-- \uCEE8\uD150\uCE20 \uC601\uC5ED -->
  <div class="container-body" (wheel)="onContainerWheel($event)">
    <!-- iframe\uC73C\uB85C \uB77C\uC6B0\uD2B8 \uB85C\uB4DC-->
    @if (iframeUrl) {
      <iframe 
        [src]="iframeUrl" 
        class="app-iframe"
        frameborder="0">
      </iframe>
    } @else {
      <!-- \uCEF4\uD3EC\uB10C\uD2B8 \uB3D9\uC801 \uB85C\uB4DC (\uB808\uAC70\uC2DC) -->
      <ng-container #containerBody></ng-container>
    }
  </div>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/shared/components/window-modal/window-modal.component.scss */\n.modal-container {\n  display: flex;\n  flex-direction: column;\n  background: rgba(240, 240, 245, 0.7);\n  backdrop-filter: blur(60px) saturate(200%);\n  -webkit-backdrop-filter: blur(60px) saturate(200%);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow:\n    0 25px 75px rgba(0, 0, 0, 0.35),\n    0 0 0 0.5px rgba(255, 255, 255, 0.4) inset,\n    0 1px 2px rgba(255, 255, 255, 0.3) inset;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.modal-container::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      rgba(255, 255, 255, 0.02) 100%);\n  pointer-events: none;\n  border-radius: 10px;\n}\n.container-header {\n  display: flex;\n  padding: 10px 16px;\n  cursor: move;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n  min-height: 40px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.85) 0%,\n      rgba(248, 248, 250, 0.8) 50%,\n      rgba(246, 246, 248, 0.75) 100%);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  position: relative;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -webkit-user-drag: none;\n}\n.container-header::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.6) 50%,\n      transparent 100%);\n}\n.container-header:active {\n  cursor: grabbing;\n}\n.window-controls-left {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  z-index: 1;\n}\n.control-button {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 0.5px solid rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.15s ease;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);\n}\n.control-button svg {\n  width: 6px;\n  height: 6px;\n  opacity: 0;\n  transition: opacity 0.15s ease;\n}\n.container-header:hover .control-button svg {\n  opacity: 0.7;\n}\n.control-button:hover svg {\n  opacity: 1 !important;\n}\n.control-button.close {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6057 0%,\n      #ff5f56 100%);\n}\n.control-button.close:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff4b42 0%,\n      #ff3b30 100%);\n  box-shadow: 0 2px 4px rgba(255, 59, 48, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.close:active {\n  background:\n    linear-gradient(\n      135deg,\n      #d93025 0%,\n      #c9211e 100%);\n}\n.control-button.minimize {\n  background:\n    linear-gradient(\n      135deg,\n      #ffbd2e 0%,\n      #ffbc2d 100%);\n}\n.control-button.minimize:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ffb01f 0%,\n      #ffa900 100%);\n  box-shadow: 0 2px 4px rgba(255, 169, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.minimize:active {\n  background:\n    linear-gradient(\n      135deg,\n      #e09b00 0%,\n      #d08800 100%);\n}\n.control-button.maximize {\n  background:\n    linear-gradient(\n      135deg,\n      #28ca42 0%,\n      #27c93f 100%);\n}\n.control-button.maximize:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #20b038 0%,\n      #1fa832 100%);\n  box-shadow: 0 2px 4px rgba(31, 168, 50, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n}\n.control-button.maximize:active {\n  background:\n    linear-gradient(\n      135deg,\n      #1a9930 0%,\n      #178528 100%);\n}\n.header-label {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(100% - 200px);\n  font-weight: 600;\n  font-size: 13px;\n  color: #ffffff;\n  text-align: center;\n  letter-spacing: 0.2px;\n}\n.header-label .folder-tag {\n  margin-left: 6px;\n  opacity: 0.7;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n}\n.spacer {\n  flex: 1;\n}\n.container-body {\n  overflow: auto;\n  flex: 1;\n  padding: 0;\n  margin: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(252, 252, 254, 0.85) 100%);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  position: relative;\n}\n.app-iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n  background: white;\n}\n.route-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.placeholder-content {\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.placeholder-icon {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 20px;\n  stroke: white;\n  stroke-width: 1.5;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n}\n.placeholder-content h3 {\n  margin: 0 0 10px 0;\n  font-size: 24px;\n  font-weight: 600;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.placeholder-content p {\n  margin: 5px 0;\n  font-size: 14px;\n  opacity: 0.9;\n}\n.info-text {\n  margin-top: 20px !important;\n  font-size: 12px !important;\n  opacity: 0.7 !important;\n  font-style: italic;\n}\n.container-body::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.container-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.container-body::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n.container-body::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n@media (prefers-color-scheme: dark) {\n  .modal-container {\n    background: rgba(40, 40, 50, 0.7);\n    border-color: rgba(255, 255, 255, 0.15);\n    box-shadow:\n      0 25px 75px rgba(0, 0, 0, 0.6),\n      0 0 0 0.5px rgba(255, 255, 255, 0.2) inset,\n      0 1px 2px rgba(255, 255, 255, 0.1) inset;\n  }\n  .modal-container::before {\n    background:\n      linear-gradient(\n        135deg,\n        rgba(255, 255, 255, 0.05) 0%,\n        rgba(255, 255, 255, 0.02) 50%,\n        rgba(255, 255, 255, 0.01) 100%);\n  }\n  .container-header {\n    background:\n      linear-gradient(\n        180deg,\n        rgba(55, 55, 65, 0.9) 0%,\n        rgba(45, 45, 55, 0.85) 50%,\n        rgba(40, 40, 50, 0.8) 100%);\n    border-bottom-color: rgba(255, 255, 255, 0.08);\n  }\n  .container-header::after {\n    background:\n      linear-gradient(\n        90deg,\n        transparent 0%,\n        rgba(255, 255, 255, 0.1) 50%,\n        transparent 100%);\n  }\n  .header-label {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  .container-body {\n    background:\n      linear-gradient(\n        180deg,\n        rgba(30, 30, 40, 0.9) 0%,\n        rgba(25, 25, 35, 0.85) 100%);\n  }\n  .container-body::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.2);\n  }\n  .container-body::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, 0.3);\n  }\n}\n/*# sourceMappingURL=window-modal.component.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }, { type: DomSanitizer }], { id: [{
    type: Input
  }], zIndex: [{
    type: Input
  }], metaData: [{
    type: Input
  }], folderType: [{
    type: Input
  }], isMobileApp: [{
    type: Input
  }], zoomLevel: [{
    type: Input
  }], moveToFront: [{
    type: Output
  }], close: [{
    type: Output
  }], minimizeWindow: [{
    type: Output
  }], windowStyleChange: [{
    type: Output
  }], container: [{
    type: ViewChild,
    args: ["container", { read: ElementRef, static: false }]
  }], cdkDrag: [{
    type: ViewChild,
    args: [CdkDrag, { static: false }]
  }], containerBody: [{
    type: ViewChild,
    args: ["containerBody", { read: ViewContainerRef, static: false }]
  }], onPointerDown: [{
    type: HostListener,
    args: ["pointerdown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WindowModalComponent, { className: "WindowModalComponent", filePath: "src/app/modules/shared/components/window-modal/window-modal.component.ts", lineNumber: 49 });
})();

// src/app/modules/shared/components/unified-login/unified-login.component.ts
function UnifiedLoginComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emoji_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r2 * 2, "s");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", emoji_r1, " ");
  }
}
function UnifiedLoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, UnifiedLoginComponent_div_1_div_1_Template, 2, 3, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.config.backgroundAnimation);
  }
}
function UnifiedLoginComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275element(2, "img", 38)(3, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.config.logoUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r2.config.title + " \uB85C\uACE0");
  }
}
function UnifiedLoginComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40)(1, "span", 41);
    \u0275\u0275text(2, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.config.subtitle, " ");
  }
}
function UnifiedLoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("username"), " ");
  }
}
function UnifiedLoginComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("password"), " ");
  }
}
function UnifiedLoginComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function UnifiedLoginComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u{1F680}");
    \u0275\u0275elementEnd();
  }
}
function UnifiedLoginComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275elementEnd();
  }
}
function UnifiedLoginComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 51);
    \u0275\u0275listener("click", function UnifiedLoginComponent_div_42_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRegisterClick());
    });
    \u0275\u0275text(4, " \uD68C\uC6D0\uAC00\uC785 ");
    \u0275\u0275elementEnd()();
  }
}
function UnifiedLoginComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3, "\uB610\uB294");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 55)(5, "button", 56);
    \u0275\u0275listener("click", function UnifiedLoginComponent_div_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSocialLogin("kakao"));
    });
    \u0275\u0275elementStart(6, "span", 57);
    \u0275\u0275text(7, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 58);
    \u0275\u0275text(9, "\uCE74\uCE74\uC624\uD1A1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 59);
    \u0275\u0275listener("click", function UnifiedLoginComponent_div_43_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSocialLogin("naver"));
    });
    \u0275\u0275elementStart(11, "span", 60);
    \u0275\u0275text(12, "N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 58);
    \u0275\u0275text(14, "\uB124\uC774\uBC84");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 61);
    \u0275\u0275listener("click", function UnifiedLoginComponent_div_43_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSocialLogin("google"));
    });
    \u0275\u0275elementStart(16, "span", 57);
    \u0275\u0275text(17, "\u{1F310}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 58);
    \u0275\u0275text(19, "\uAD6C\uAE00");
    \u0275\u0275elementEnd()()()();
  }
}
var UnifiedLoginComponent = class _UnifiedLoginComponent {
  fb;
  themeService;
  config = {
    title: "\uB85C\uADF8\uC778",
    moduleName: "default"
  };
  loginSubmit = new EventEmitter();
  socialLogin = new EventEmitter();
  // 소셜 로그인 제공자
  registerClick = new EventEmitter();
  loginForm;
  hidePassword = true;
  _isLoading = false;
  errorMessage = "";
  isDarkMode = false;
  destroy$ = new Subject();
  // isLoading getter/setter로 FormControl 상태 관리
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    this._isLoading = value;
    this.updateFormControlsState(value);
  }
  constructor(fb, themeService) {
    this.fb = fb;
    this.themeService = themeService;
  }
  ngOnInit() {
    this.initForm();
    this.subscribeToTheme();
    this.applyThemeColors();
  }
  applyThemeColors() {
    if (this.config.themeColors) {
      const root = document.documentElement;
      root.style.setProperty("--login-primary", this.config.themeColors.primary);
      root.style.setProperty("--login-secondary", this.config.themeColors.secondary);
      root.style.setProperty("--login-accent", this.config.themeColors.accent || this.config.themeColors.secondary);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }
  subscribeToTheme() {
    this.themeService.currentTheme$.pipe(takeUntil(this.destroy$)).subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    const { username, password } = this.loginForm.value;
    this.loginSubmit.emit({ username, password });
  }
  onSocialLogin(provider) {
    this.socialLogin.emit(provider);
  }
  onRegisterClick() {
    this.registerClick.emit();
  }
  // 외부에서 에러 메시지 설정
  setError(message) {
    this.errorMessage = message;
    this.isLoading = false;
  }
  // 외부에서 로딩 상태 설정
  setLoading(loading) {
    this.isLoading = loading;
  }
  // 폼 초기화
  resetForm() {
    this.loginForm.reset();
    this.errorMessage = "";
    this.isLoading = false;
  }
  // 필드 에러 체크
  isFieldInvalid(fieldName) {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  // 필드 에러 메시지
  getFieldError(fieldName) {
    const field = this.loginForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"]) {
      return fieldName === "username" ? "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694" : "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694";
    }
    if (field.errors["minlength"]) {
      const minLength = field.errors["minlength"].requiredLength;
      return fieldName === "username" ? `\uC544\uC774\uB514\uB294 \uCD5C\uC18C ${minLength}\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4` : `\uBE44\uBC00\uBC88\uD638\uB294 \uCD5C\uC18C ${minLength}\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
    }
    return "";
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
  // FormControl의 enable/disable 상태 업데이트
  updateFormControlsState(disabled) {
    if (!this.loginForm)
      return;
    if (disabled) {
      this.loginForm.get("username")?.disable({ emitEvent: false });
      this.loginForm.get("password")?.disable({ emitEvent: false });
    } else {
      this.loginForm.get("username")?.enable({ emitEvent: false });
      this.loginForm.get("password")?.enable({ emitEvent: false });
    }
  }
  static \u0275fac = function UnifiedLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnifiedLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnifiedLoginComponent, selectors: [["app-unified-login"]], inputs: { config: "config" }, outputs: { loginSubmit: "loginSubmit", socialLogin: "socialLogin", registerClick: "registerClick" }, standalone: false, decls: 44, vars: 19, consts: [[1, "unified-login-container"], ["class", "background-animation", 4, "ngIf"], [1, "gradient-overlay"], [1, "login-card"], [1, "glass-effect"], [1, "login-header"], ["class", "logo-section", 4, "ngIf"], [1, "title-wrapper"], [1, "login-title"], [1, "title-gradient"], ["class", "login-subtitle", 4, "ngIf"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "username", 1, "form-label"], [1, "label-icon"], [1, "label-text"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694", "autocomplete", "username", 1, "form-input"], ["class", "field-error", 4, "ngIf"], ["for", "password", 1, "form-label"], [1, "password-input-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694", "autocomplete", "current-password", 1, "form-input", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "toggle-icon"], ["class", "error-message", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "btn-content"], ["class", "btn-icon", 4, "ngIf"], ["class", "btn-spinner", 4, "ngIf"], [1, "btn-text"], [1, "btn-shine"], ["class", "register-link", 4, "ngIf"], ["class", "social-login-section", 4, "ngIf"], [1, "background-animation"], ["class", "floating-element", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "floating-element"], [1, "logo-section"], [1, "logo-wrapper"], [1, "logo", 3, "src", "alt"], [1, "logo-glow"], [1, "login-subtitle"], [1, "subtitle-icon"], [1, "field-error"], [1, "error-message"], [1, "error-icon"], [1, "error-text"], [1, "btn-icon"], [1, "btn-spinner"], [1, "spinner-circle"], [1, "register-link"], [1, "register-text"], ["type", "button", 1, "register-btn", 3, "click"], [1, "social-login-section"], [1, "divider"], [1, "divider-text"], [1, "social-buttons"], ["type", "button", 1, "social-btn", "kakao", 3, "click"], [1, "social-icon"], [1, "social-text"], ["type", "button", 1, "social-btn", "naver", 3, "click"], [1, "social-icon", "naver-icon"], ["type", "button", 1, "social-btn", "google", 3, "click"]], template: function UnifiedLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UnifiedLoginComponent_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, UnifiedLoginComponent_div_6_Template, 4, 2, "div", 6);
      \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8)(9, "span", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, UnifiedLoginComponent_p_11_Template, 4, 1, "p", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 11);
      \u0275\u0275listener("ngSubmit", function UnifiedLoginComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(13, "div", 12)(14, "label", 13)(15, "span", 14);
      \u0275\u0275text(16, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 15);
      \u0275\u0275text(18, "\uC544\uC774\uB514");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "input", 16);
      \u0275\u0275template(20, UnifiedLoginComponent_div_20_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "label", 18)(23, "span", 14);
      \u0275\u0275text(24, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "\uBE44\uBC00\uBC88\uD638");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 19);
      \u0275\u0275element(28, "input", 20);
      \u0275\u0275elementStart(29, "button", 21);
      \u0275\u0275listener("click", function UnifiedLoginComponent_Template_button_click_29_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementStart(30, "span", 22);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(32, UnifiedLoginComponent_div_32_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, UnifiedLoginComponent_div_33_Template, 5, 1, "div", 23);
      \u0275\u0275elementStart(34, "div", 24)(35, "button", 25)(36, "span", 26);
      \u0275\u0275template(37, UnifiedLoginComponent_span_37_Template, 2, 0, "span", 27)(38, UnifiedLoginComponent_span_38_Template, 2, 0, "span", 28);
      \u0275\u0275elementStart(39, "span", 29);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, UnifiedLoginComponent_div_42_Template, 5, 0, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, UnifiedLoginComponent_div_43_Template, 20, 0, "div", 32);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("dark-mode", ctx.isDarkMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.backgroundAnimation && ctx.config.backgroundAnimation.length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.config.logoUrl);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.config.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.subtitle);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("username"));
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.hidePassword ? "\uBE44\uBC00\uBC88\uD638 \uBCF4\uAE30" : "\uBE44\uBC00\uBC88\uD638 \uC228\uAE30\uAE30");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword ? "\u{1F441}\uFE0F" : "\u{1F648}");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading || ctx.loginForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLoading ? "\uB85C\uADF8\uC778 \uC911..." : "\uB85C\uADF8\uC778");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.config.showRegisterLink);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.showSocialLogin);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.unified-login-container[_ngcontent-%COMP%] {\n  --login-primary: #667eea;\n  --login-secondary: #764ba2;\n  --login-accent: #f093fb;\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      color-mix(in srgb, var(--login-primary) 30%, transparent),\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      color-mix(in srgb, var(--login-secondary) 30%, transparent),\n      transparent 50%),\n    linear-gradient(\n      135deg,\n      var(--login-primary) 0%,\n      var(--login-secondary) 50%,\n      var(--login-accent) 100%);\n  padding: 20px;\n  transition: all 0.5s ease;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_backgroundShift 15s ease infinite;\n  background-size: 200% 200%;\n}\n@keyframes _ngcontent-%COMP%_backgroundShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.unified-login-container[_ngcontent-%COMP%]   .gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 30% 70%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 30%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 50%);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_overlayPulse 8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_overlayPulse {\n  0%, 100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@keyframes _ngcontent-%COMP%_backgroundShiftDark {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(26, 26, 46, 0.8),\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(22, 33, 62, 0.8),\n      transparent 50%),\n    linear-gradient(\n      135deg,\n      #0f0c29 0%,\n      #302b63 50%,\n      #24243e 100%);\n  animation: _ngcontent-%COMP%_backgroundShiftDark 15s ease infinite;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .gradient-overlay[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 30% 70%,\n      rgba(102, 126, 234, 0.08) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 30%,\n      rgba(118, 75, 162, 0.08) 0%,\n      transparent 50%);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  background: rgba(20, 20, 35, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  box-shadow:\n    0 8px 32px 0 rgba(0, 0, 0, 0.6),\n    0 30px 60px -12px rgba(0, 0, 0, 0.5),\n    inset 0 -2px 6px 0 rgba(255, 255, 255, 0.05);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.15) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      rgba(255, 255, 255, 0.15) 100%);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .glass-effect[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.03) 50%,\n      transparent 70%);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]:hover {\n  background: rgba(25, 25, 40, 0.75);\n  box-shadow:\n    0 12px 48px 0 rgba(0, 0, 0, 0.7),\n    0 40px 80px -12px rgba(0, 0, 0, 0.6),\n    inset 0 -2px 8px 0 rgba(255, 255, 255, 0.08);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]   .title-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e0e7ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .login-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);\n  font-weight: 600;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  font-weight: 700;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .label-icon[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-weight: 500;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 400;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: color-mix(in srgb, var(--login-primary) 80%, transparent);\n  box-shadow:\n    0 0 0 4px color-mix(in srgb, var(--login-primary) 15%, transparent),\n    0 4px 12px color-mix(in srgb, var(--login-primary) 30%, transparent),\n    inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: rgb(255, 255, 255);\n  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2));\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.15);\n  border: 1px solid rgba(244, 67, 54, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.2);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n  font-weight: 600;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--login-primary) 90%, white) 0%,\n      color-mix(in srgb, var(--login-secondary) 90%, white) 100%);\n  box-shadow:\n    0 8px 24px color-mix(in srgb, var(--login-primary) 50%, transparent),\n    0 4px 12px color-mix(in srgb, var(--login-secondary) 40%, transparent),\n    inset 0 -2px 8px rgba(0, 0, 0, 0.2),\n    inset 0 2px 4px rgba(255, 255, 255, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%] {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--login-primary) 95%, white) 0%,\n      color-mix(in srgb, var(--login-secondary) 95%, white) 100%);\n  box-shadow:\n    0 12px 32px color-mix(in srgb, var(--login-primary) 60%, transparent),\n    0 6px 16px color-mix(in srgb, var(--login-secondary) 50%, transparent),\n    inset 0 -2px 10px rgba(0, 0, 0, 0.2),\n    inset 0 2px 6px rgba(255, 255, 255, 0.4);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%] {\n  background: rgba(20, 20, 35, 0.7);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 600;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {\n  color: #8c9ef5;\n  font-weight: 700;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%]:hover {\n  color: #9d6bc9;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  font-weight: 600;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .social-btn.kakao[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  color: #fee500;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .social-btn.naver[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  color: #03c75a;\n}\n.unified-login-container.dark-mode[_ngcontent-%COMP%]   .social-btn.google[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  color: #4285f4;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 0;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 3rem;\n  opacity: 0.15;\n  animation: _ngcontent-%COMP%_float 20s infinite ease-in-out;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(1) {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(2) {\n  top: 20%;\n  right: 15%;\n  animation-delay: 2s;\n  animation-duration: 25s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 15%;\n  left: 20%;\n  animation-delay: 4s;\n  animation-duration: 22s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(4) {\n  top: 60%;\n  right: 20%;\n  animation-delay: 6s;\n  animation-duration: 28s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(5) {\n  bottom: 25%;\n  right: 30%;\n  animation-delay: 8s;\n  animation-duration: 24s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(n+6) {\n  top: 30%;\n  left: 50%;\n  animation-delay: 10s;\n  animation-duration: 26s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(7) {\n  top: 40%;\n  left: 15%;\n  animation-delay: 12s;\n  animation-duration: 23s;\n}\n.unified-login-container[_ngcontent-%COMP%]   .background-animation[_ngcontent-%COMP%]   .floating-element[_ngcontent-%COMP%]:nth-child(8) {\n  bottom: 30%;\n  right: 10%;\n  animation-delay: 14s;\n  animation-duration: 27s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg);\n    opacity: 0.15;\n  }\n  25% {\n    transform: translate(30px, -30px) rotate(5deg);\n    opacity: 0.25;\n  }\n  50% {\n    transform: translate(-20px, 20px) rotate(-5deg);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate(20px, 30px) rotate(3deg);\n    opacity: 0.25;\n  }\n}\n.unified-login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 440px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 28px;\n  padding: 50px 45px;\n  box-shadow:\n    0 8px 32px 0 rgba(31, 38, 135, 0.37),\n    0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3),\n    inset 0 -2px 6px 0 rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_cardFloat 6s ease-in-out infinite;\n}\n.unified-login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 28px;\n  padding: 2px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      rgba(255, 255, 255, 0.4) 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.unified-login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .glass-effect[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transform: rotate(45deg);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_shimmer 8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%) translateY(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) translateY(100%) rotate(45deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_cardFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.unified-login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow:\n    0 12px 48px 0 rgba(31, 38, 135, 0.45),\n    0 40px 80px -12px rgba(50, 50, 93, 0.35),\n    0 24px 48px -24px rgba(0, 0, 0, 0.4),\n    inset 0 -2px 8px 0 rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 480px) {\n  .unified-login-container[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    padding: 36px 28px;\n    border-radius: 20px;\n  }\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 36px;\n  position: relative;\n  z-index: 2;\n}\n.login-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.login-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.login-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));\n  animation: _ngcontent-%COMP%_logoFloat 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_logoFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.login-header[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .logo-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background:\n    radial-gradient(\n      circle,\n      rgba(102, 126, 234, 0.4) 0%,\n      transparent 70%);\n  filter: blur(20px);\n  animation: _ngcontent-%COMP%_glowPulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_glowPulse {\n  0%, 100% {\n    opacity: 0.5;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0.8;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n.login-header[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0 0 12px 0;\n  letter-spacing: -1px;\n  position: relative;\n}\n.login-header[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]   .title-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.9) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  display: inline-block;\n  animation: _ngcontent-%COMP%_titleShine 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_titleShine {\n  0%, 100% {\n    filter: brightness(1);\n  }\n  50% {\n    filter: brightness(1.2);\n  }\n}\n.login-header[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .login-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.login-header[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .login-subtitle[_ngcontent-%COMP%]   .subtitle-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  animation: _ngcontent-%COMP%_iconTwinkle 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_iconTwinkle {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .label-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  padding: 0 18px;\n  font-size: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: #1a1a2e;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.4);\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: color-mix(in srgb, var(--login-primary) 60%, transparent);\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow:\n    0 0 0 4px color-mix(in srgb, var(--login-primary) 10%, transparent),\n    0 4px 12px color-mix(in srgb, var(--login-primary) 20%, transparent),\n    inset 0 1px 2px rgba(255, 255, 255, 0.5);\n  transform: translateY(-2px);\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:disabled {\n  background: rgba(245, 245, 245, 0.5);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  color: rgba(0, 0, 0, 0.4);\n  transition: color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  color: #f44336;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.login-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.1);\n  border: 1px solid rgba(244, 67, 54, 0.3);\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.login-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.login-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #d32f2f;\n  font-weight: 500;\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #ffffff;\n  border: none;\n  border-radius: 14px;\n  font-size: 17px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow:\n    0 8px 24px rgba(102, 126, 234, 0.4),\n    0 4px 12px rgba(118, 75, 162, 0.3),\n    inset 0 -2px 8px rgba(0, 0, 0, 0.1),\n    inset 0 2px 4px rgba(255, 255, 255, 0.2);\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  animation: _ngcontent-%COMP%_iconBounce 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-3px);\n  }\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%]   .spinner-circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]   .btn-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transform: rotate(45deg);\n  animation: _ngcontent-%COMP%_shine 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shine {\n  0% {\n    transform: translateX(-100%) translateY(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) translateY(100%) rotate(45deg);\n  }\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--login-primary) 90%, white) 0%,\n      color-mix(in srgb, var(--login-secondary) 90%, white) 100%);\n  box-shadow:\n    0 12px 32px color-mix(in srgb, var(--login-primary) 50%, transparent),\n    0 6px 16px color-mix(in srgb, var(--login-secondary) 40%, transparent),\n    inset 0 -2px 10px rgba(0, 0, 0, 0.1),\n    inset 0 2px 6px rgba(255, 255, 255, 0.3);\n  transform: translateY(-3px) scale(1.02);\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(-1px) scale(0.98);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4), inset 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.login-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);\n}\n.login-form[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 14px;\n}\n.login-form[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 8px;\n}\n.login-form[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.login-form[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n.social-login-section[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.social-login-section[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.social-login-section[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n}\n.social-login-section[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .divider-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 0 16px;\n  background: rgba(255, 255, 255, 0.98);\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.4);\n  font-weight: 500;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 100px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  background: #ffffff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n  font-weight: 600;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   .social-icon.naver-icon[_ngcontent-%COMP%] {\n  background: #03c75a;\n  color: #ffffff;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn.kakao[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  filter: hue-rotate(20deg);\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn.naver[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  color: #03c75a;\n}\n.social-login-section[_ngcontent-%COMP%]   .social-buttons[_ngcontent-%COMP%]   .social-btn.google[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  color: #4285f4;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=unified-login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnifiedLoginComponent, [{
    type: Component,
    args: [{ selector: "app-unified-login", standalone: false, template: `<div class="unified-login-container" [class.dark-mode]="isDarkMode">
  <!-- \uBC30\uACBD \uC560\uB2C8\uBA54\uC774\uC158 (\uC635\uC158) -->
  <div class="background-animation" *ngIf="config.backgroundAnimation && config.backgroundAnimation.length > 0">
    <div class="floating-element" *ngFor="let emoji of config.backgroundAnimation; let i = index" [style.animation-delay.s]="i * 2">
      {{ emoji }}
    </div>
  </div>

  <!-- \uBC30\uACBD \uADF8\uB77C\uB370\uC774\uC158 \uC624\uBC84\uB808\uC774 -->
  <div class="gradient-overlay"></div>

  <div class="login-card">
    <!-- \uAE00\uB798\uC2A4\uBAA8\uD53C\uC998 \uD6A8\uACFC -->
    <div class="glass-effect"></div>
    
    <!-- \uD5E4\uB354 -->
    <div class="login-header">
      <div class="logo-section" *ngIf="config.logoUrl">
        <div class="logo-wrapper">
          <img [src]="config.logoUrl" [alt]="config.title + ' \uB85C\uACE0'" class="logo">
          <div class="logo-glow"></div>
        </div>
      </div>
      <div class="title-wrapper">
        <h1 class="login-title">
          <span class="title-gradient">{{ config.title }}</span>
        </h1>
        <p class="login-subtitle" *ngIf="config.subtitle">
          <span class="subtitle-icon">\u2728</span>
          {{ config.subtitle }}
        </p>
      </div>
    </div>

    <!-- \uB85C\uADF8\uC778 \uD3FC -->
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
      <!-- \uC544\uC774\uB514 \uC785\uB825 -->
      <div class="form-field">
        <label for="username" class="form-label">
          <span class="label-icon">\u{1F464}</span>
          <span class="label-text">\uC544\uC774\uB514</span>
        </label>
        <input
          type="text"
          id="username"
          formControlName="username"
          class="form-input"
          placeholder="\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694"
          autocomplete="username"
        />
        <div class="field-error" *ngIf="isFieldInvalid('username')">
          {{ getFieldError('username') }}
        </div>
      </div>

      <!-- \uBE44\uBC00\uBC88\uD638 \uC785\uB825 -->
      <div class="form-field">
        <label for="password" class="form-label">
          <span class="label-icon">\u{1F512}</span>
          <span class="label-text">\uBE44\uBC00\uBC88\uD638</span>
        </label>
        <div class="password-input-wrapper">
          <input
            [type]="hidePassword ? 'password' : 'text'"
            id="password"
            formControlName="password"
            class="form-input"
            placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
            autocomplete="current-password"
          />
          <button
            type="button"
            class="password-toggle"
            (click)="hidePassword = !hidePassword"
            [attr.aria-label]="hidePassword ? '\uBE44\uBC00\uBC88\uD638 \uBCF4\uAE30' : '\uBE44\uBC00\uBC88\uD638 \uC228\uAE30\uAE30'"
          >
            <span class="toggle-icon">{{ hidePassword ? '\u{1F441}\uFE0F' : '\u{1F648}' }}</span>
          </button>
        </div>
        <div class="field-error" *ngIf="isFieldInvalid('password')">
          {{ getFieldError('password') }}
        </div>
      </div>

      <!-- \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 -->
      <div class="error-message" *ngIf="errorMessage">
        <span class="error-icon">\u26A0\uFE0F</span>
        <span class="error-text">{{ errorMessage }}</span>
      </div>

      <!-- \uB85C\uADF8\uC778 \uBC84\uD2BC -->
      <div class="form-actions">
        <button
          type="submit"
          class="login-btn"
          [disabled]="isLoading || loginForm.invalid"
        >
          <span class="btn-content">
            <span class="btn-icon" *ngIf="!isLoading">\u{1F680}</span>
            <span class="btn-spinner" *ngIf="isLoading">
              <span class="spinner-circle"></span>
            </span>
            <span class="btn-text">{{ isLoading ? '\uB85C\uADF8\uC778 \uC911...' : '\uB85C\uADF8\uC778' }}</span>
          </span>
          <span class="btn-shine"></span>
        </button>
      </div>

      <!-- \uD68C\uC6D0\uAC00\uC785 \uB9C1\uD06C -->
      <div class="register-link" *ngIf="config.showRegisterLink">
        <span class="register-text">\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?</span>
        <button type="button" class="register-btn" (click)="onRegisterClick()">
          \uD68C\uC6D0\uAC00\uC785
        </button>
      </div>
    </form>

    <!-- \uC18C\uC15C \uB85C\uADF8\uC778 -->
    <div class="social-login-section" *ngIf="config.showSocialLogin">
      <div class="divider">
        <span class="divider-text">\uB610\uB294</span>
      </div>

      <div class="social-buttons">
        <!-- \uCE74\uCE74\uC624\uD1A1 -->
        <button
          type="button"
          class="social-btn kakao"
          (click)="onSocialLogin('kakao')"
        >
          <span class="social-icon">\u{1F4AC}</span>
          <span class="social-text">\uCE74\uCE74\uC624\uD1A1</span>
        </button>

        <!-- \uB124\uC774\uBC84 -->
        <button
          type="button"
          class="social-btn naver"
          (click)="onSocialLogin('naver')"
        >
          <span class="social-icon naver-icon">N</span>
          <span class="social-text">\uB124\uC774\uBC84</span>
        </button>

        <!-- \uAD6C\uAE00 -->
        <button
          type="button"
          class="social-btn google"
          (click)="onSocialLogin('google')"
        >
          <span class="social-icon">\u{1F310}</span>
          <span class="social-text">\uAD6C\uAE00</span>
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/modules/shared/components/unified-login/unified-login.component.scss */\n.unified-login-container {\n  --login-primary: #667eea;\n  --login-secondary: #764ba2;\n  --login-accent: #f093fb;\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      color-mix(in srgb, var(--login-primary) 30%, transparent),\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      color-mix(in srgb, var(--login-secondary) 30%, transparent),\n      transparent 50%),\n    linear-gradient(\n      135deg,\n      var(--login-primary) 0%,\n      var(--login-secondary) 50%,\n      var(--login-accent) 100%);\n  padding: 20px;\n  transition: all 0.5s ease;\n  overflow: hidden;\n  animation: backgroundShift 15s ease infinite;\n  background-size: 200% 200%;\n}\n@keyframes backgroundShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.unified-login-container .gradient-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 30% 70%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 30%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 50%);\n  pointer-events: none;\n  animation: overlayPulse 8s ease-in-out infinite;\n}\n@keyframes overlayPulse {\n  0%, 100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@keyframes backgroundShiftDark {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.unified-login-container.dark-mode {\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(26, 26, 46, 0.8),\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(22, 33, 62, 0.8),\n      transparent 50%),\n    linear-gradient(\n      135deg,\n      #0f0c29 0%,\n      #302b63 50%,\n      #24243e 100%);\n  animation: backgroundShiftDark 15s ease infinite;\n}\n.unified-login-container.dark-mode .gradient-overlay {\n  background:\n    radial-gradient(\n      circle at 30% 70%,\n      rgba(102, 126, 234, 0.08) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 30%,\n      rgba(118, 75, 162, 0.08) 0%,\n      transparent 50%);\n}\n.unified-login-container.dark-mode .login-card {\n  background: rgba(20, 20, 35, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  box-shadow:\n    0 8px 32px 0 rgba(0, 0, 0, 0.6),\n    0 30px 60px -12px rgba(0, 0, 0, 0.5),\n    inset 0 -2px 6px 0 rgba(255, 255, 255, 0.05);\n}\n.unified-login-container.dark-mode .login-card::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.15) 0%,\n      rgba(255, 255, 255, 0.05) 50%,\n      rgba(255, 255, 255, 0.15) 100%);\n}\n.unified-login-container.dark-mode .login-card .glass-effect {\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.03) 50%,\n      transparent 70%);\n}\n.unified-login-container.dark-mode .login-card:hover {\n  background: rgba(25, 25, 40, 0.75);\n  box-shadow:\n    0 12px 48px 0 rgba(0, 0, 0, 0.7),\n    0 40px 80px -12px rgba(0, 0, 0, 0.6),\n    inset 0 -2px 8px 0 rgba(255, 255, 255, 0.08);\n}\n.unified-login-container.dark-mode .login-header .title-wrapper .login-title .title-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #e0e7ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));\n}\n.unified-login-container.dark-mode .login-header .title-wrapper .login-subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);\n  font-weight: 600;\n}\n.unified-login-container.dark-mode .form-label {\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  font-weight: 700;\n}\n.unified-login-container.dark-mode .form-label .label-icon {\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));\n}\n.unified-login-container.dark-mode .form-input {\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-weight: 500;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1);\n}\n.unified-login-container.dark-mode .form-input::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 400;\n}\n.unified-login-container.dark-mode .form-input:focus {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: color-mix(in srgb, var(--login-primary) 80%, transparent);\n  box-shadow:\n    0 0 0 4px color-mix(in srgb, var(--login-primary) 15%, transparent),\n    0 4px 12px color-mix(in srgb, var(--login-primary) 30%, transparent),\n    inset 0 1px 2px rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.unified-login-container.dark-mode .password-toggle {\n  color: rgba(255, 255, 255, 0.7);\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));\n}\n.unified-login-container.dark-mode .password-toggle:hover {\n  color: rgb(255, 255, 255);\n  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2));\n}\n.unified-login-container.dark-mode .error-message {\n  background: rgba(244, 67, 54, 0.15);\n  border: 1px solid rgba(244, 67, 54, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.2);\n}\n.unified-login-container.dark-mode .error-message .error-text {\n  color: #ff6b6b;\n  font-weight: 600;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode .login-btn {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--login-primary) 90%, white) 0%,\n      color-mix(in srgb, var(--login-secondary) 90%, white) 100%);\n  box-shadow:\n    0 8px 24px color-mix(in srgb, var(--login-primary) 50%, transparent),\n    0 4px 12px color-mix(in srgb, var(--login-secondary) 40%, transparent),\n    inset 0 -2px 8px rgba(0, 0, 0, 0.2),\n    inset 0 2px 4px rgba(255, 255, 255, 0.3);\n}\n.unified-login-container.dark-mode .login-btn .btn-content {\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode .login-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--login-primary) 95%, white) 0%,\n      color-mix(in srgb, var(--login-secondary) 95%, white) 100%);\n  box-shadow:\n    0 12px 32px color-mix(in srgb, var(--login-primary) 60%, transparent),\n    0 6px 16px color-mix(in srgb, var(--login-secondary) 50%, transparent),\n    inset 0 -2px 10px rgba(0, 0, 0, 0.2),\n    inset 0 2px 6px rgba(255, 255, 255, 0.4);\n}\n.unified-login-container.dark-mode .divider-text {\n  background: rgba(20, 20, 35, 0.7);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 600;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode .register-link .register-text {\n  color: rgba(255, 255, 255, 0.8);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode .register-link .register-btn {\n  color: #8c9ef5;\n  font-weight: 700;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode .register-link .register-btn:hover {\n  color: #9d6bc9;\n}\n.unified-login-container.dark-mode .social-btn {\n  background: rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-color: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.unified-login-container.dark-mode .social-btn .social-text {\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  font-weight: 600;\n}\n.unified-login-container.dark-mode .social-btn:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n}\n.unified-login-container.dark-mode .social-btn.kakao .social-text {\n  color: #fee500;\n}\n.unified-login-container.dark-mode .social-btn.naver .social-text {\n  color: #03c75a;\n}\n.unified-login-container.dark-mode .social-btn.google .social-text {\n  color: #4285f4;\n}\n.unified-login-container .background-animation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 0;\n}\n.unified-login-container .background-animation .floating-element {\n  position: absolute;\n  font-size: 3rem;\n  opacity: 0.15;\n  animation: float 20s infinite ease-in-out;\n}\n.unified-login-container .background-animation .floating-element:nth-child(1) {\n  top: 10%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(2) {\n  top: 20%;\n  right: 15%;\n  animation-delay: 2s;\n  animation-duration: 25s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(3) {\n  bottom: 15%;\n  left: 20%;\n  animation-delay: 4s;\n  animation-duration: 22s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(4) {\n  top: 60%;\n  right: 20%;\n  animation-delay: 6s;\n  animation-duration: 28s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(5) {\n  bottom: 25%;\n  right: 30%;\n  animation-delay: 8s;\n  animation-duration: 24s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(n+6) {\n  top: 30%;\n  left: 50%;\n  animation-delay: 10s;\n  animation-duration: 26s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(7) {\n  top: 40%;\n  left: 15%;\n  animation-delay: 12s;\n  animation-duration: 23s;\n}\n.unified-login-container .background-animation .floating-element:nth-child(8) {\n  bottom: 30%;\n  right: 10%;\n  animation-delay: 14s;\n  animation-duration: 27s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg);\n    opacity: 0.15;\n  }\n  25% {\n    transform: translate(30px, -30px) rotate(5deg);\n    opacity: 0.25;\n  }\n  50% {\n    transform: translate(-20px, 20px) rotate(-5deg);\n    opacity: 0.2;\n  }\n  75% {\n    transform: translate(20px, 30px) rotate(3deg);\n    opacity: 0.25;\n  }\n}\n.unified-login-container .login-card {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 440px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 28px;\n  padding: 50px 45px;\n  box-shadow:\n    0 8px 32px 0 rgba(31, 38, 135, 0.37),\n    0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3),\n    inset 0 -2px 6px 0 rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: cardFloat 6s ease-in-out infinite;\n}\n.unified-login-container .login-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 28px;\n  padding: 2px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.4) 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      rgba(255, 255, 255, 0.4) 100%);\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.unified-login-container .login-card .glass-effect {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transform: rotate(45deg);\n  pointer-events: none;\n  animation: shimmer 8s linear infinite;\n}\n@keyframes shimmer {\n  0% {\n    transform: translateX(-100%) translateY(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) translateY(100%) rotate(45deg);\n  }\n}\n@keyframes cardFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.unified-login-container .login-card:hover {\n  transform: translateY(-5px);\n  box-shadow:\n    0 12px 48px 0 rgba(31, 38, 135, 0.45),\n    0 40px 80px -12px rgba(50, 50, 93, 0.35),\n    0 24px 48px -24px rgba(0, 0, 0, 0.4),\n    inset 0 -2px 8px 0 rgba(255, 255, 255, 0.3);\n}\n@media (max-width: 480px) {\n  .unified-login-container .login-card {\n    padding: 36px 28px;\n    border-radius: 20px;\n  }\n}\n.login-header {\n  text-align: center;\n  margin-bottom: 36px;\n  position: relative;\n  z-index: 2;\n}\n.login-header .logo-section {\n  margin-bottom: 24px;\n}\n.login-header .logo-section .logo-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.login-header .logo-section .logo-wrapper .logo {\n  width: 90px;\n  height: 90px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));\n  animation: logoFloat 3s ease-in-out infinite;\n}\n@keyframes logoFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.login-header .logo-section .logo-wrapper .logo-glow {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  background:\n    radial-gradient(\n      circle,\n      rgba(102, 126, 234, 0.4) 0%,\n      transparent 70%);\n  filter: blur(20px);\n  animation: glowPulse 2s ease-in-out infinite;\n}\n@keyframes glowPulse {\n  0%, 100% {\n    opacity: 0.5;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0.8;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n.login-header .title-wrapper .login-title {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0 0 12px 0;\n  letter-spacing: -1px;\n  position: relative;\n}\n.login-header .title-wrapper .login-title .title-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      rgba(255, 255, 255, 0.9) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  display: inline-block;\n  animation: titleShine 3s ease-in-out infinite;\n}\n@keyframes titleShine {\n  0%, 100% {\n    filter: brightness(1);\n  }\n  50% {\n    filter: brightness(1.2);\n  }\n}\n.login-header .title-wrapper .login-subtitle {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.login-header .title-wrapper .login-subtitle .subtitle-icon {\n  font-size: 16px;\n  animation: iconTwinkle 2s ease-in-out infinite;\n}\n@keyframes iconTwinkle {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n.login-form .form-field {\n  margin-bottom: 20px;\n}\n.login-form .form-field .form-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.login-form .form-field .form-label .label-icon {\n  font-size: 16px;\n}\n.login-form .form-field .form-input {\n  width: 100%;\n  height: 52px;\n  padding: 0 18px;\n  font-size: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: #1a1a2e;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5);\n}\n.login-form .form-field .form-input::placeholder {\n  color: rgba(0, 0, 0, 0.4);\n}\n.login-form .form-field .form-input:focus {\n  outline: none;\n  border-color: color-mix(in srgb, var(--login-primary) 60%, transparent);\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow:\n    0 0 0 4px color-mix(in srgb, var(--login-primary) 10%, transparent),\n    0 4px 12px color-mix(in srgb, var(--login-primary) 20%, transparent),\n    inset 0 1px 2px rgba(255, 255, 255, 0.5);\n  transform: translateY(-2px);\n}\n.login-form .form-field .form-input:disabled {\n  background: rgba(245, 245, 245, 0.5);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.login-form .form-field .password-input-wrapper {\n  position: relative;\n}\n.login-form .form-field .password-input-wrapper .form-input {\n  padding-right: 48px;\n}\n.login-form .form-field .password-input-wrapper .password-toggle {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  color: rgba(0, 0, 0, 0.4);\n  transition: color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-form .form-field .password-input-wrapper .password-toggle:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\n.login-form .form-field .password-input-wrapper .password-toggle .toggle-icon {\n  font-size: 20px;\n}\n.login-form .form-field .field-error {\n  margin-top: 6px;\n  font-size: 12px;\n  color: #f44336;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.login-form .error-message {\n  background: rgba(244, 67, 54, 0.1);\n  border: 1px solid rgba(244, 67, 54, 0.3);\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.login-form .error-message .error-icon {\n  font-size: 18px;\n}\n.login-form .error-message .error-text {\n  font-size: 13px;\n  color: #d32f2f;\n  font-weight: 500;\n}\n.login-form .form-actions {\n  margin-top: 24px;\n}\n.login-form .form-actions .login-btn {\n  position: relative;\n  width: 100%;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #ffffff;\n  border: none;\n  border-radius: 14px;\n  font-size: 17px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow:\n    0 8px 24px rgba(102, 126, 234, 0.4),\n    0 4px 12px rgba(118, 75, 162, 0.3),\n    inset 0 -2px 8px rgba(0, 0, 0, 0.1),\n    inset 0 2px 4px rgba(255, 255, 255, 0.2);\n}\n.login-form .form-actions .login-btn .btn-content {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.login-form .form-actions .login-btn .btn-content .btn-icon {\n  font-size: 20px;\n  animation: iconBounce 1s ease-in-out infinite;\n}\n@keyframes iconBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-3px);\n  }\n}\n.login-form .form-actions .login-btn .btn-content .btn-spinner .spinner-circle {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.login-form .form-actions .login-btn .btn-content .btn-text {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n.login-form .form-actions .login-btn .btn-shine {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transform: rotate(45deg);\n  animation: shine 3s ease-in-out infinite;\n}\n@keyframes shine {\n  0% {\n    transform: translateX(-100%) translateY(-100%) rotate(45deg);\n  }\n  100% {\n    transform: translateX(100%) translateY(100%) rotate(45deg);\n  }\n}\n.login-form .form-actions .login-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--login-primary) 90%, white) 0%,\n      color-mix(in srgb, var(--login-secondary) 90%, white) 100%);\n  box-shadow:\n    0 12px 32px color-mix(in srgb, var(--login-primary) 50%, transparent),\n    0 6px 16px color-mix(in srgb, var(--login-secondary) 40%, transparent),\n    inset 0 -2px 10px rgba(0, 0, 0, 0.1),\n    inset 0 2px 6px rgba(255, 255, 255, 0.3);\n  transform: translateY(-3px) scale(1.02);\n}\n.login-form .form-actions .login-btn:active:not(:disabled) {\n  transform: translateY(-1px) scale(0.98);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4), inset 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.login-form .form-actions .login-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);\n}\n.login-form .register-link {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 14px;\n}\n.login-form .register-link .register-text {\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 8px;\n}\n.login-form .register-link .register-btn {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.login-form .register-link .register-btn:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n.social-login-section {\n  margin-top: 32px;\n}\n.social-login-section .divider {\n  position: relative;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.social-login-section .divider::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n}\n.social-login-section .divider .divider-text {\n  position: relative;\n  display: inline-block;\n  padding: 0 16px;\n  background: rgba(255, 255, 255, 0.98);\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.4);\n  font-weight: 500;\n}\n.social-login-section .social-buttons {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.social-login-section .social-buttons .social-btn {\n  flex: 1;\n  min-width: 100px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 2px solid #e0e0e0;\n  border-radius: 12px;\n  background: #ffffff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n  font-weight: 600;\n}\n.social-login-section .social-buttons .social-btn:hover:not(:disabled) {\n  border-color: #667eea;\n  background: #f8f9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.social-login-section .social-buttons .social-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.social-login-section .social-buttons .social-btn .social-icon {\n  font-size: 20px;\n}\n.social-login-section .social-buttons .social-btn .social-icon.naver-icon {\n  background: #03c75a;\n  color: #ffffff;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n}\n.social-login-section .social-buttons .social-btn .social-text {\n  font-size: 13px;\n}\n.social-login-section .social-buttons .social-btn.kakao .social-icon {\n  filter: hue-rotate(20deg);\n}\n.social-login-section .social-buttons .social-btn.naver .social-text {\n  color: #03c75a;\n}\n.social-login-section .social-buttons .social-btn.google .social-text {\n  color: #4285f4;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=unified-login.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: ThemeService }], { config: [{
    type: Input
  }], loginSubmit: [{
    type: Output
  }], socialLogin: [{
    type: Output
  }], registerClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnifiedLoginComponent, { className: "UnifiedLoginComponent", filePath: "src/app/modules/shared/components/unified-login/unified-login.component.ts", lineNumber: 28 });
})();

// src/app/modules/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    AuthService
  ], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    // Standalone 컴포넌트들
    RecentFilesComponent,
    SharedFileUploadComponent,
    SharedRecentFilesComponent,
    // 🐛 디버그 콘솔
    DebugConsoleComponent,
    // 다른 모듈에서도 사용할 수 있도록 CommonModule도 export
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [
        SidebarComponent,
        SnackbarComponent,
        LoginModalComponent,
        PropertiesPanelComponent,
        TabBarComponent,
        TopMenuBarComponent,
        VerticalMenuComponent,
        GlobalNavigatorComponent,
        UnderDevelopmentComponent,
        MobileBottomNavComponent,
        PdfTextModifierComponent,
        ConfirmationDialogComponent,
        SharedPdfLeftPanelComponent,
        WindowModalComponent,
        UnifiedLoginComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        DragDropModule,
        // Standalone 컴포넌트들
        RecentFilesComponent,
        SharedFileUploadComponent,
        SharedRecentFilesComponent,
        MarkdownPipe,
        // 🐛 디버그 콘솔
        DebugConsoleComponent
      ],
      exports: [
        SidebarComponent,
        SnackbarComponent,
        LoginModalComponent,
        PropertiesPanelComponent,
        TabBarComponent,
        TopMenuBarComponent,
        VerticalMenuComponent,
        GlobalNavigatorComponent,
        UnderDevelopmentComponent,
        MobileBottomNavComponent,
        PdfTextModifierComponent,
        ConfirmationDialogComponent,
        SharedPdfLeftPanelComponent,
        WindowModalComponent,
        UnifiedLoginComponent,
        // Standalone 컴포넌트들도 export
        RecentFilesComponent,
        SharedFileUploadComponent,
        SharedRecentFilesComponent,
        MarkdownPipe,
        // 다른 모듈에서도 사용할 수 있도록 CommonModule도 export
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        DragDropModule
      ],
      providers: [
        AuthService
      ]
    }]
  }], null, null);
})();

export {
  AnimationMetadataType,
  AUTO_STYLE,
  trigger,
  animate,
  sequence,
  style,
  state,
  transition,
  NoopAnimationPlayer,
  AnimationGroupPlayer,
  ɵPRE_STYLE,
  moveItemInArray,
  transferArrayItem,
  CdkDragHandle,
  CdkDrag,
  CdkDropList,
  CdkDragPreview,
  DragDropModule,
  WindowModalComponent,
  AuthService,
  GlobalNavigatorComponent,
  ConfirmationDialogComponent,
  UnifiedLoginComponent,
  SharedModule
};
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.5
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-5LDCF6IY.js.map
