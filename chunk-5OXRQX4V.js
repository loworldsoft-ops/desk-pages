import {
  IconComponent
} from "./chunk-GIGBJXFY.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";

// src/app/modules/note/shared/components/drawing-canvas/drawing-canvas.component.ts
var _c0 = ["canvas"];
var DrawingCanvasComponent = class _DrawingCanvasComponent {
  canvasRef;
  initialData;
  apply = new EventEmitter();
  ctx;
  isDrawing = false;
  lastX = 0;
  lastY = 0;
  color = "#000000";
  isEraser = false;
  ngOnInit() {
    this.initCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }
  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext("2d");
    this.resizeCanvas();
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = this.color;
  }
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (!parent)
      return;
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.drawImage(canvas, 0, 0);
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.lineWidth = this.isEraser ? 15 : 3;
    this.ctx.strokeStyle = this.color;
    if (this.isEraser)
      this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.drawImage(tempCanvas, 0, 0);
    if (this.initialData && this.isCanvasBlank(tempCanvas)) {
      const img = new Image();
      img.onload = () => this.ctx.drawImage(img, 0, 0);
      img.src = this.initialData;
    }
  }
  isCanvasBlank(canvas) {
    const blank = document.createElement("canvas");
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
  }
  setColor(newColor) {
    this.color = newColor;
    this.isEraser = false;
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 3;
    this.ctx.globalCompositeOperation = "source-over";
  }
  setEraser() {
    this.isEraser = true;
    this.ctx.lineWidth = 15;
    this.ctx.globalCompositeOperation = "destination-out";
  }
  startDrawing(event) {
    this.isDrawing = true;
    const { x, y } = this.getMouseCoordinates(event);
    this.lastX = x;
    this.lastY = y;
  }
  draw(event) {
    if (!this.isDrawing)
      return;
    event.preventDefault();
    const { x, y } = this.getMouseCoordinates(event);
    this.drawLine(x, y);
  }
  startDrawingTouch(event) {
    event.preventDefault();
    this.isDrawing = true;
    const { x, y } = this.getTouchCoordinates(event);
    this.lastX = x;
    this.lastY = y;
  }
  drawTouch(event) {
    if (!this.isDrawing)
      return;
    event.preventDefault();
    const { x, y } = this.getTouchCoordinates(event);
    this.drawLine(x, y);
  }
  drawLine(x, y) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.lastX = x;
    this.lastY = y;
  }
  stopDrawing() {
    this.isDrawing = false;
    this.ctx.beginPath();
  }
  clearCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  applyDrawing() {
    const canvas = this.canvasRef.nativeElement;
    const data = this.isCanvasBlank(canvas) ? void 0 : canvas.toDataURL("image/png");
    this.apply.emit(data);
  }
  getImageData() {
    const canvas = this.canvasRef.nativeElement;
    return this.isCanvasBlank(canvas) ? void 0 : canvas.toDataURL("image/png");
  }
  getMouseCoordinates(event) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  getTouchCoordinates(event) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches[0];
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
  }
  static \u0275fac = function DrawingCanvasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawingCanvasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawingCanvasComponent, selectors: [["app-drawing-canvas"]], viewQuery: function DrawingCanvasComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, inputs: { initialData: "initialData" }, outputs: { apply: "apply" }, decls: 17, vars: 11, consts: [["canvas", ""], [1, "flex", "flex-col", "h-full", "bg-white", "rounded-lg", "shadow-inner", "border", "border-gray-200"], [1, "flex", "items-center", "justify-between", "p-3", "border-b", "border-gray-100", "bg-gray-50", "rounded-t-lg"], [1, "flex", "gap-2", "items-center"], [1, "w-6", "h-6", "rounded-full", "bg-black", "ring-offset-2", "ring-black", 3, "click"], [1, "w-6", "h-6", "rounded-full", "bg-blue-600", "ring-offset-2", "ring-blue-600", 3, "click"], [1, "w-6", "h-6", "rounded-full", "bg-red-600", "ring-offset-2", "ring-red-600", 3, "click"], [1, "w-px", "h-6", "bg-gray-300", "mx-2"], ["title", "\uC9C0\uC6B0\uAC1C", 1, "p-1.5", "rounded-md", "hover:bg-gray-200", "text-gray-600", 3, "click"], ["name", "eraser", 3, "size"], ["title", "\uC804\uCCB4 \uC9C0\uC6B0\uAE30", 1, "p-1.5", "rounded-md", "hover:bg-gray-200", "text-gray-600", 3, "click"], ["name", "trash-2", 3, "size"], [1, "flex", "items-center", "gap-1", "bg-blue-600", "text-white", "px-4", "py-1.5", "rounded-md", "text-sm", "font-bold", "hover:bg-blue-700", "transition-colors", 3, "click"], ["name", "check", 3, "size"], [1, "flex-1", "relative", "overflow-hidden", "bg-white"], [1, "absolute", "inset-0", "w-full", "h-full", "cursor-crosshair", "touch-none", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend"]], template: function DrawingCanvasComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function DrawingCanvasComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setColor("#000000"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 5);
      \u0275\u0275listener("click", function DrawingCanvasComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setColor("#2563eb"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 6);
      \u0275\u0275listener("click", function DrawingCanvasComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setColor("#dc2626"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 7);
      \u0275\u0275elementStart(7, "button", 8);
      \u0275\u0275listener("click", function DrawingCanvasComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setEraser());
      });
      \u0275\u0275element(8, "app-icon", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 10);
      \u0275\u0275listener("click", function DrawingCanvasComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearCanvas());
      });
      \u0275\u0275element(10, "app-icon", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 12);
      \u0275\u0275listener("click", function DrawingCanvasComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyDrawing());
      });
      \u0275\u0275element(12, "app-icon", 13);
      \u0275\u0275text(13, " \uC644\uB8CC ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 14)(15, "canvas", 15, 0);
      \u0275\u0275listener("mousedown", function DrawingCanvasComponent_Template_canvas_mousedown_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.startDrawing($event));
      })("mousemove", function DrawingCanvasComponent_Template_canvas_mousemove_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.draw($event));
      })("mouseup", function DrawingCanvasComponent_Template_canvas_mouseup_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.stopDrawing());
      })("mouseleave", function DrawingCanvasComponent_Template_canvas_mouseleave_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.stopDrawing());
      })("touchstart", function DrawingCanvasComponent_Template_canvas_touchstart_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.startDrawingTouch($event));
      })("touchmove", function DrawingCanvasComponent_Template_canvas_touchmove_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.drawTouch($event));
      })("touchend", function DrawingCanvasComponent_Template_canvas_touchend_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.stopDrawing());
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("ring-2", ctx.color === "#000000");
      \u0275\u0275advance();
      \u0275\u0275classProp("ring-2", ctx.color === "#2563eb");
      \u0275\u0275advance();
      \u0275\u0275classProp("ring-2", ctx.color === "#dc2626");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-gray-200", ctx.isEraser);
      \u0275\u0275advance();
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 16);
    }
  }, dependencies: [CommonModule, IconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawingCanvasComponent, [{
    type: Component,
    args: [{
      selector: "app-drawing-canvas",
      standalone: true,
      imports: [CommonModule, IconComponent],
      template: `
    <div class="flex flex-col h-full bg-white rounded-lg shadow-inner border border-gray-200">
      <!-- Toolbar -->
      <div class="flex items-center justify-between p-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
        <div class="flex gap-2 items-center">
          <button 
            (click)="setColor('#000000')" 
            [class.ring-2]="color === '#000000'" 
            class="w-6 h-6 rounded-full bg-black ring-offset-2 ring-black"
          ></button>
          <button 
            (click)="setColor('#2563eb')" 
            [class.ring-2]="color === '#2563eb'" 
            class="w-6 h-6 rounded-full bg-blue-600 ring-offset-2 ring-blue-600"
          ></button>
          <button 
            (click)="setColor('#dc2626')" 
            [class.ring-2]="color === '#dc2626'" 
            class="w-6 h-6 rounded-full bg-red-600 ring-offset-2 ring-red-600"
          ></button>
          <div class="w-px h-6 bg-gray-300 mx-2"></div>
          <button 
            (click)="setEraser()" 
            [class.bg-gray-200]="isEraser" 
            class="p-1.5 rounded-md hover:bg-gray-200 text-gray-600" 
            title="\uC9C0\uC6B0\uAC1C"
          >
            <app-icon name="eraser" [size]="20"></app-icon>
          </button>
          <button 
            (click)="clearCanvas()" 
            class="p-1.5 rounded-md hover:bg-gray-200 text-gray-600" 
            title="\uC804\uCCB4 \uC9C0\uC6B0\uAE30"
          >
            <app-icon name="trash-2" [size]="20"></app-icon>
          </button>
        </div>
        <button 
          (click)="applyDrawing()" 
          class="flex items-center gap-1 bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-bold hover:bg-blue-700 transition-colors"
        >
          <app-icon name="check" [size]="16"></app-icon>
          \uC644\uB8CC
        </button>
      </div>
      
      <!-- Canvas -->
      <div class="flex-1 relative overflow-hidden bg-white">
        <canvas 
          #canvas 
          class="absolute inset-0 w-full h-full cursor-crosshair touch-none"
          (mousedown)="startDrawing($event)" 
          (mousemove)="draw($event)" 
          (mouseup)="stopDrawing()" 
          (mouseleave)="stopDrawing()"
          (touchstart)="startDrawingTouch($event)"
          (touchmove)="drawTouch($event)"
          (touchend)="stopDrawing()"
        ></canvas>
      </div>
    </div>
  `
    }]
  }], null, { canvasRef: [{
    type: ViewChild,
    args: ["canvas", { static: true }]
  }], initialData: [{
    type: Input
  }], apply: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawingCanvasComponent, { className: "DrawingCanvasComponent", filePath: "src/app/modules/note/shared/components/drawing-canvas/drawing-canvas.component.ts", lineNumber: 72 });
})();

export {
  DrawingCanvasComponent
};
//# sourceMappingURL=chunk-5OXRQX4V.js.map
