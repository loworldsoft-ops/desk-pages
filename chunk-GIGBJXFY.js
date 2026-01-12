import {
  CommonModule,
  Component,
  Injectable,
  Input,
  NgSwitch,
  NgSwitchCase,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-WY5M3RVA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/note/core/services/storage.service.ts
var NOTES_KEY = "easyNote_notes";
var CATEGORIES_KEY = "easyNote_categories";
var StorageService = class _StorageService {
  saveNotes(notes) {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }
  loadNotes() {
    const saved = localStorage.getItem(NOTES_KEY);
    return saved ? JSON.parse(saved) : [];
  }
  saveCategories(categories) {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
  }
  loadCategories() {
    const saved = localStorage.getItem(CATEGORIES_KEY);
    return saved ? JSON.parse(saved) : ["\uC804\uCCB4", "\uC5C5\uBB34", "\uC0DD\uD65C", "\uC544\uC774\uB514\uC5B4", "\uC5EC\uD589"];
  }
  clear() {
    localStorage.removeItem(NOTES_KEY);
    localStorage.removeItem(CATEGORIES_KEY);
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/note/core/services/note.service.ts
var NoteService = class _NoteService {
  storageService = inject(StorageService);
  // State
  notes = signal([], ...ngDevMode ? [{ debugName: "notes" }] : []);
  categories = signal(["\uC804\uCCB4", "\uC5C5\uBB34", "\uC0DD\uD65C", "\uC544\uC774\uB514\uC5B4", "\uC5EC\uD589"], ...ngDevMode ? [{ debugName: "categories" }] : []);
  currentCategory = signal("\uC804\uCCB4", ...ngDevMode ? [{ debugName: "currentCategory" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  sortOrder = signal("date", ...ngDevMode ? [{ debugName: "sortOrder" }] : []);
  // Computed
  filteredNotes = computed(() => {
    let list = this.notes().filter((n) => {
      const catMatch = this.currentCategory() === "\uC804\uCCB4" || n.category === this.currentCategory();
      const searchMatch = n.title.toLowerCase().includes(this.searchQuery().toLowerCase()) || n.content.toLowerCase().includes(this.searchQuery().toLowerCase());
      return catMatch && searchMatch;
    });
    if (this.sortOrder() === "date") {
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list.sort((a, b) => a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1);
  }, ...ngDevMode ? [{ debugName: "filteredNotes" }] : []);
  pinnedNotes = computed(() => this.filteredNotes().filter((n) => n.isPinned), ...ngDevMode ? [{ debugName: "pinnedNotes" }] : []);
  otherNotes = computed(() => this.filteredNotes().filter((n) => !n.isPinned), ...ngDevMode ? [{ debugName: "otherNotes" }] : []);
  constructor() {
    this.loadData();
    effect(() => {
      this.storageService.saveNotes(this.notes());
      this.storageService.saveCategories(this.categories());
    });
  }
  loadData() {
    const savedNotes = this.storageService.loadNotes();
    if (savedNotes.length > 0) {
      this.notes.set(savedNotes);
    } else {
      this.initializeSampleData();
    }
    const savedCategories = this.storageService.loadCategories();
    if (savedCategories.length > 0) {
      this.categories.set(savedCategories);
    }
  }
  initializeSampleData() {
    this.notes.set([
      {
        id: 1,
        title: "\u{1F4CC} \uD504\uB85C\uC81D\uD2B8 \uAE30\uD68D\uC548",
        content: "Easy Note \uC571 \uAE30\uD68D\uC11C \uB9AC\uBDF0 \uBC0F \uAE30\uB2A5 \uC815\uC758.\nAI \uC790\uB3D9 \uBD84\uB958 \uAE30\uB2A5\uC774 \uD575\uC2EC.",
        category: "\uC5C5\uBB34",
        isPinned: true,
        date: (/* @__PURE__ */ new Date()).toISOString(),
        images: [],
        hasAudio: true
      },
      {
        id: 2,
        title: "\uC8FC\uB9D0 \uC7A5\uBCF4\uAE30 \uBAA9\uB85D",
        content: "- \uC6B0\uC720\n- \uACC4\uB780\n- \uC0AC\uACFC\n- \uD30C\uC2A4\uD0C0 \uBA74\n- \uD1A0\uB9C8\uD1A0 \uC18C\uC2A4",
        category: "\uC0DD\uD65C",
        isPinned: false,
        date: new Date(Date.now() - 864e5).toISOString(),
        images: [],
        hasAudio: false
      }
    ]);
  }
  // CRUD Operations
  createNote(category) {
    const newNote = {
      id: Date.now(),
      title: "",
      content: "",
      category: category || (this.currentCategory() === "\uC804\uCCB4" ? "\uC5C5\uBB34" : this.currentCategory()),
      isPinned: false,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      images: [],
      hasAudio: false
    };
    this.notes.update((notes) => [newNote, ...notes]);
    return newNote;
  }
  updateNote(id, changes) {
    this.notes.update((notes) => notes.map((n) => n.id === id ? __spreadProps(__spreadValues(__spreadValues({}, n), changes), { date: (/* @__PURE__ */ new Date()).toISOString() }) : n));
  }
  deleteNote(id) {
    this.notes.update((notes) => notes.filter((n) => n.id !== id));
  }
  togglePin(id) {
    this.notes.update((notes) => notes.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { isPinned: !n.isPinned }) : n));
  }
  duplicateNote(id) {
    const original = this.notes().find((n) => n.id === id);
    if (original) {
      const copy = __spreadProps(__spreadValues({}, original), {
        id: Date.now(),
        title: original.title + " (\uBCF5\uC0AC\uBCF8)",
        date: (/* @__PURE__ */ new Date()).toISOString()
      });
      this.notes.update((notes) => [copy, ...notes]);
      return copy;
    }
    return void 0;
  }
  getNoteById(id) {
    return this.notes().find((n) => n.id === id);
  }
  // Category Operations
  addCategory(name) {
    const trimmed = name.trim();
    if (trimmed && !this.categories().includes(trimmed)) {
      this.categories.update((cats) => [...cats, trimmed]);
      return true;
    }
    return false;
  }
  deleteCategory(name) {
    this.categories.update((cats) => cats.filter((c) => c !== name));
    this.notes.update((notes) => notes.filter((n) => n.category !== name));
    if (this.currentCategory() === name) {
      this.currentCategory.set("\uC804\uCCB4");
    }
  }
  getCategoryCount(category) {
    if (category === "\uC804\uCCB4")
      return this.notes().length;
    return this.notes().filter((n) => n.category === category).length;
  }
  static \u0275fac = function NoteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NoteService, factory: _NoteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/note/core/services/ai.service.ts
var AiService = class _AiService {
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  generateSummary(content) {
    return new Promise((resolve) => {
      this.isLoading.set(true);
      setTimeout(() => {
        this.isLoading.set(false);
        if (!content || content.length < 10) {
          resolve("\u{1F4A1} AI \uC694\uC57D: \uB0B4\uC6A9\uC744 \uB354 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.");
        } else {
          resolve("\u{1F4A1} AI \uC694\uC57D: \uC774 \uB178\uD2B8\uB294 \uC0AC\uC6A9\uC790\uC758 \uC77C\uC0C1\uACFC \uC5C5\uBB34 \uD6A8\uC728\uC131\uC744 \uB192\uC774\uAE30 \uC704\uD55C \uBA54\uBAA8\uC785\uB2C8\uB2E4.");
        }
      }, 1500);
    });
  }
  static \u0275fac = function AiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiService, factory: _AiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/note/core/services/audio.service.ts
var AudioService = class _AudioService {
  isRecording = signal(false, ...ngDevMode ? [{ debugName: "isRecording" }] : []);
  isPlaying = signal(false, ...ngDevMode ? [{ debugName: "isPlaying" }] : []);
  progress = signal(0, ...ngDevMode ? [{ debugName: "progress" }] : []);
  currentTime = signal(0, ...ngDevMode ? [{ debugName: "currentTime" }] : []);
  totalTime = signal(180, ...ngDevMode ? [{ debugName: "totalTime" }] : []);
  // 3분
  intervalId;
  startRecording() {
    return new Promise((resolve) => {
      this.isRecording.set(true);
      setTimeout(() => {
        this.stopRecording();
        resolve();
      }, 2e3);
    });
  }
  stopRecording() {
    this.isRecording.set(false);
  }
  play() {
    this.isPlaying.set(true);
    this.intervalId = setInterval(() => {
      const current = this.currentTime();
      const total = this.totalTime();
      if (current >= total) {
        this.stop();
        return;
      }
      this.currentTime.update((t) => t + 1);
      this.progress.set(this.currentTime() / total * 100);
    }, 1e3);
  }
  pause() {
    this.isPlaying.set(false);
    if (this.intervalId)
      clearInterval(this.intervalId);
  }
  stop() {
    this.isPlaying.set(false);
    this.currentTime.set(0);
    this.progress.set(0);
    if (this.intervalId)
      clearInterval(this.intervalId);
  }
  skip(seconds) {
    let newTime = this.currentTime() + seconds;
    if (newTime < 0)
      newTime = 0;
    if (newTime > this.totalTime())
      newTime = this.totalTime();
    this.currentTime.set(newTime);
    this.progress.set(newTime / this.totalTime() * 100);
  }
  formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }
  reset() {
    this.stop();
    this.totalTime.set(180);
  }
  static \u0275fac = function AudioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AudioService, factory: _AudioService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/note/shared/components/icon/icon.component.ts
function IconComponent__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 39);
  }
}
function IconComponent__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 40);
  }
}
function IconComponent__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 41);
  }
}
function IconComponent__svg_path_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 42);
  }
}
function IconComponent__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 43);
  }
}
function IconComponent__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 44);
  }
}
function IconComponent__svg_path_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 45);
  }
}
function IconComponent__svg_path_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 46);
  }
}
function IconComponent__svg_path_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 47);
  }
}
function IconComponent__svg_path_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 48);
  }
}
function IconComponent__svg_path_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 49);
  }
}
function IconComponent__svg_path_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 50);
  }
}
function IconComponent__svg_path_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 51);
  }
}
function IconComponent__svg_path_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 52);
  }
}
function IconComponent__svg_path_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 53);
  }
}
function IconComponent__svg_path_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 54);
  }
}
function IconComponent__svg_path_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 55);
  }
}
function IconComponent__svg_path_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 56);
  }
}
function IconComponent__svg_path_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 57);
  }
}
function IconComponent__svg_path_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 58);
  }
}
function IconComponent__svg_path_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 59);
  }
}
function IconComponent__svg_path_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 60);
  }
}
function IconComponent__svg_path_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 61);
  }
}
function IconComponent__svg_path_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 62);
  }
}
function IconComponent__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 63);
  }
}
function IconComponent__svg_path_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 64);
  }
}
function IconComponent__svg_path_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 65);
  }
}
function IconComponent__svg_path_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 66);
  }
}
function IconComponent__svg_path_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 67);
  }
}
function IconComponent__svg_path_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 68);
  }
}
function IconComponent__svg_path_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 69);
  }
}
function IconComponent__svg_path_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 70);
  }
}
function IconComponent__svg_path_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 69);
  }
}
function IconComponent__svg_path_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 70);
  }
}
function IconComponent__svg_path_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 71);
  }
}
function IconComponent__svg_path_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 72);
  }
}
function IconComponent__svg_path_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 73);
  }
}
function IconComponent__svg_path_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 74);
  }
}
function IconComponent__svg_path_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
var IconComponent = class _IconComponent {
  name = "";
  size = 24;
  className = "";
  static \u0275fac = function IconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["app-icon"]], inputs: { name: "name", size: "size", className: "className" }, decls: 41, vars: 44, consts: [["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "ngSwitch"], ["d", "M4 12h16M4 6h16M4 18h16", 4, "ngSwitchCase"], ["d", "m21 21-4.3-4.3M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12", 4, "ngSwitchCase"], ["d", "M12 5v14M5 12h14", 4, "ngSwitchCase"], ["d", "m12 19-7-7 7-7M19 12H5", 4, "ngSwitchCase"], ["d", "M20 6 9 17l-5-5", 4, "ngSwitchCase"], ["d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8", 4, "ngSwitchCase"], ["d", "M18 22H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-1.002-3.235-3.667-4.667L9.663 18.67 6.634 14.6l-3.3 4.165h13.664z", 4, "ngSwitchCase"], ["d", "m2 2 20 20M12 2v8l3 3v2h-5v6l-2-2-2 2v-6H3v-2l3-3V2h6z", 4, "ngSwitchCase"], ["d", "M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6", 4, "ngSwitchCase"], ["d", "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", 4, "ngSwitchCase"], ["d", "M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19M17.5 19H19a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.07A6.973 6.973 0 0 0 12 6a6.97 6.97 0 0 0-5.93 4H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1.5", 4, "ngSwitchCase"], ["d", "M16 11V7a4 4 0 0 0-8 0v4M5 11h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z", 4, "ngSwitchCase"], ["d", "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", 4, "ngSwitchCase"], ["d", "m5 3 14 9-14 9V3z", 4, "ngSwitchCase"], ["d", "M6 4h4v16H6zm8 0h4v16h-4z", 4, "ngSwitchCase"], ["d", "M18 6 6 18M6 6l12 12", 4, "ngSwitchCase"], ["d", "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z M11 6a2 2 0 0 0 2-2 M11 18a2 2 0 0 1-2 2 M19 10a2 2 0 0 1-2 2 M6 10a2 2 0 0 1 2-2", 4, "ngSwitchCase"], ["d", "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z M12 13h6 M15 10v6", 4, "ngSwitchCase"], ["d", "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z", 4, "ngSwitchCase"], ["d", "m18 15-6-6-6 6", 4, "ngSwitchCase"], ["d", "m6 9 6 6 6-6", 4, "ngSwitchCase"], ["d", "m15 18-6-6 6-6", 4, "ngSwitchCase"], ["d", "m9 18 6-6-6-6", 4, "ngSwitchCase"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", 4, "ngSwitchCase"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M12 4v16 M4 10h16", 4, "ngSwitchCase"], ["d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z", 4, "ngSwitchCase"], ["d", "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21 M22 21H7 M5 11l9 9", 4, "ngSwitchCase"], ["d", "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z", 4, "ngSwitchCase"], ["d", "M19 20 9 12l10-8v16z M5 19V5", 4, "ngSwitchCase"], ["d", "m5 4 10 8-10 8V4z M19 5v14", 4, "ngSwitchCase"], ["d", "M22 18V10h-2M18 10H7l4-4M7 10l4 4", 4, "ngSwitchCase"], ["d", "M2 18V10h2M6 10h11l-4-4M17 10l-4 4", 4, "ngSwitchCase"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5", 4, "ngSwitchCase"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5", 4, "ngSwitchCase"], ["d", "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01", 4, "ngSwitchCase"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z", 4, "ngSwitchCase"], ["d", "M9 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0", 4, "ngSwitchCase"], ["d", "M4 12h16M4 6h16M4 18h16"], ["d", "m21 21-4.3-4.3M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12"], ["d", "M12 5v14M5 12h14"], ["d", "m12 19-7-7 7-7M19 12H5"], ["d", "M20 6 9 17l-5-5"], ["d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"], ["d", "M18 22H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-1.002-3.235-3.667-4.667L9.663 18.67 6.634 14.6l-3.3 4.165h13.664z"], ["d", "m2 2 20 20M12 2v8l3 3v2h-5v6l-2-2-2 2v-6H3v-2l3-3V2h6z"], ["d", "M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"], ["d", "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"], ["d", "M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19M17.5 19H19a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.07A6.973 6.973 0 0 0 12 6a6.97 6.97 0 0 0-5.93 4H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1.5"], ["d", "M16 11V7a4 4 0 0 0-8 0v4M5 11h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"], ["d", "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"], ["d", "m5 3 14 9-14 9V3z"], ["d", "M6 4h4v16H6zm8 0h4v16h-4z"], ["d", "M18 6 6 18M6 6l12 12"], ["d", "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z M11 6a2 2 0 0 0 2-2 M11 18a2 2 0 0 1-2 2 M19 10a2 2 0 0 1-2 2 M6 10a2 2 0 0 1 2-2"], ["d", "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z M12 13h6 M15 10v6"], ["d", "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"], ["d", "m18 15-6-6-6 6"], ["d", "m6 9 6 6 6-6"], ["d", "m15 18-6-6 6-6"], ["d", "m9 18 6-6-6-6"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M12 4v16 M4 10h16"], ["d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"], ["d", "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21 M22 21H7 M5 11l9 9"], ["d", "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z"], ["d", "M19 20 9 12l10-8v16z M5 19V5"], ["d", "m5 4 10 8-10 8V4z M19 5v14"], ["d", "M22 18V10h-2M18 10H7l4-4M7 10l4 4"], ["d", "M2 18V10h2M6 10h11l-4-4M17 10l-4 4"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"], ["d", "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"], ["d", "M9 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0"]], template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0);
      \u0275\u0275elementContainerStart(1, 1);
      \u0275\u0275template(2, IconComponent__svg_path_2_Template, 1, 0, "path", 2)(3, IconComponent__svg_path_3_Template, 1, 0, "path", 3)(4, IconComponent__svg_path_4_Template, 1, 0, "path", 4)(5, IconComponent__svg_path_5_Template, 1, 0, "path", 5)(6, IconComponent__svg_path_6_Template, 1, 0, "path", 6)(7, IconComponent__svg_path_7_Template, 1, 0, "path", 7)(8, IconComponent__svg_path_8_Template, 1, 0, "path", 8)(9, IconComponent__svg_path_9_Template, 1, 0, "path", 9)(10, IconComponent__svg_path_10_Template, 1, 0, "path", 10)(11, IconComponent__svg_path_11_Template, 1, 0, "path", 11)(12, IconComponent__svg_path_12_Template, 1, 0, "path", 12)(13, IconComponent__svg_path_13_Template, 1, 0, "path", 13)(14, IconComponent__svg_path_14_Template, 1, 0, "path", 14)(15, IconComponent__svg_path_15_Template, 1, 0, "path", 15)(16, IconComponent__svg_path_16_Template, 1, 0, "path", 16)(17, IconComponent__svg_path_17_Template, 1, 0, "path", 17)(18, IconComponent__svg_path_18_Template, 1, 0, "path", 18)(19, IconComponent__svg_path_19_Template, 1, 0, "path", 19)(20, IconComponent__svg_path_20_Template, 1, 0, "path", 20)(21, IconComponent__svg_path_21_Template, 1, 0, "path", 21)(22, IconComponent__svg_path_22_Template, 1, 0, "path", 22)(23, IconComponent__svg_path_23_Template, 1, 0, "path", 23)(24, IconComponent__svg_path_24_Template, 1, 0, "path", 24)(25, IconComponent__svg_path_25_Template, 1, 0, "path", 25)(26, IconComponent__svg_path_26_Template, 1, 0, "path", 26)(27, IconComponent__svg_path_27_Template, 1, 0, "path", 27)(28, IconComponent__svg_path_28_Template, 1, 0, "path", 28)(29, IconComponent__svg_path_29_Template, 1, 0, "path", 29)(30, IconComponent__svg_path_30_Template, 1, 0, "path", 30)(31, IconComponent__svg_path_31_Template, 1, 0, "path", 31)(32, IconComponent__svg_path_32_Template, 1, 0, "path", 32)(33, IconComponent__svg_path_33_Template, 1, 0, "path", 33)(34, IconComponent__svg_path_34_Template, 1, 0, "path", 32)(35, IconComponent__svg_path_35_Template, 1, 0, "path", 33)(36, IconComponent__svg_path_36_Template, 1, 0, "path", 34)(37, IconComponent__svg_path_37_Template, 1, 0, "path", 35)(38, IconComponent__svg_path_38_Template, 1, 0, "path", 36)(39, IconComponent__svg_path_39_Template, 1, 0, "path", 37)(40, IconComponent__svg_path_40_Template, 1, 0, "path", 38);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.className);
      \u0275\u0275attribute("width", ctx.size)("height", ctx.size);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitch", ctx.name);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "menu");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "search");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "plus");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "arrow-left");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "check");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "mic");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "image");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "pin");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "trash-2");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "settings");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "cloud");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "lock");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "calendar");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "play");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "pause");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "x");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "wand-2");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "folder-edit");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "folder");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "chevron-up");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "chevron-down");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "chevron-left");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "chevron-right");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "copy");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "layout");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "pen-tool");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "eraser");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "square");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "skip-back");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "skip-forward");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "rewind");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "forward");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "rewind-10");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "forward-10");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "refresh-cw");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "refresh-cw-3");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "wifi");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "google");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "grip-vertical");
    }
  }, dependencies: [CommonModule, NgSwitch, NgSwitchCase], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "app-icon",
      standalone: true,
      imports: [CommonModule],
      template: `
    <svg [class]="className" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ng-container [ngSwitch]="name">
        <path *ngSwitchCase="'menu'" d="M4 12h16M4 6h16M4 18h16"/>
        <path *ngSwitchCase="'search'" d="m21 21-4.3-4.3M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/>
        <path *ngSwitchCase="'plus'" d="M12 5v14M5 12h14"/>
        <path *ngSwitchCase="'arrow-left'" d="m12 19-7-7 7-7M19 12H5"/>
        <path *ngSwitchCase="'check'" d="M20 6 9 17l-5-5"/>
        <path *ngSwitchCase="'mic'" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
        <path *ngSwitchCase="'image'" d="M18 22H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-1.002-3.235-3.667-4.667L9.663 18.67 6.634 14.6l-3.3 4.165h13.664z"/>
        <path *ngSwitchCase="'pin'" d="m2 2 20 20M12 2v8l3 3v2h-5v6l-2-2-2 2v-6H3v-2l3-3V2h6z"/>
        <path *ngSwitchCase="'trash-2'" d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/>
        <path *ngSwitchCase="'settings'" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
        <path *ngSwitchCase="'cloud'" d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19M17.5 19H19a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1.07A6.973 6.973 0 0 0 12 6a6.97 6.97 0 0 0-5.93 4H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1.5"/>
        <path *ngSwitchCase="'lock'" d="M16 11V7a4 4 0 0 0-8 0v4M5 11h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"/>
        <path *ngSwitchCase="'calendar'" d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
        <path *ngSwitchCase="'play'" d="m5 3 14 9-14 9V3z"/>
        <path *ngSwitchCase="'pause'" d="M6 4h4v16H6zm8 0h4v16h-4z"/>
        <path *ngSwitchCase="'x'" d="M18 6 6 18M6 6l12 12"/>
        <path *ngSwitchCase="'wand-2'" d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z M11 6a2 2 0 0 0 2-2 M11 18a2 2 0 0 1-2 2 M19 10a2 2 0 0 1-2 2 M6 10a2 2 0 0 1 2-2"/>
        <path *ngSwitchCase="'folder-edit'" d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z M12 13h6 M15 10v6"/>
        <path *ngSwitchCase="'folder'" d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"/>
        <path *ngSwitchCase="'chevron-up'" d="m18 15-6-6-6 6"/>
        <path *ngSwitchCase="'chevron-down'" d="m6 9 6 6 6-6"/>
        <path *ngSwitchCase="'chevron-left'" d="m15 18-6-6 6-6"/>
        <path *ngSwitchCase="'chevron-right'" d="m9 18 6-6-6-6"/>
        <path *ngSwitchCase="'copy'" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <path *ngSwitchCase="'layout'" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M12 4v16 M4 10h16"/>
        <path *ngSwitchCase="'pen-tool'" d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
        <path *ngSwitchCase="'eraser'" d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21 M22 21H7 M5 11l9 9"/>
        <path *ngSwitchCase="'square'" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z"/>
        <path *ngSwitchCase="'skip-back'" d="M19 20 9 12l10-8v16z M5 19V5"/>
        <path *ngSwitchCase="'skip-forward'" d="m5 4 10 8-10 8V4z M19 5v14"/>
        <path *ngSwitchCase="'rewind'" d="M22 18V10h-2M18 10H7l4-4M7 10l4 4"/>
        <path *ngSwitchCase="'forward'" d="M2 18V10h2M6 10h11l-4-4M17 10l-4 4"/>
        <path *ngSwitchCase="'rewind-10'" d="M22 18V10h-2M18 10H7l4-4M7 10l4 4"/>
        <path *ngSwitchCase="'forward-10'" d="M2 18V10h2M6 10h11l-4-4M17 10l-4 4"/>
        <path *ngSwitchCase="'refresh-cw'" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5"/>
        <path *ngSwitchCase="'refresh-cw-3'" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/>
        <path *ngSwitchCase="'wifi'" d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
        <path *ngSwitchCase="'google'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        <path *ngSwitchCase="'grip-vertical'" d="M9 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
      </ng-container>
    </svg>
  `
    }]
  }], null, { name: [{
    type: Input
  }], size: [{
    type: Input
  }], className: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "src/app/modules/note/shared/components/icon/icon.component.ts", lineNumber: 54 });
})();

export {
  NoteService,
  AiService,
  IconComponent
};
//# sourceMappingURL=chunk-GIGBJXFY.js.map
