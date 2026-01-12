import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-W2FRNP63.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-NZXI4AK5.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-ER3JRRHZ.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  CryptoUtil
} from "./chunk-G2D7UUZA.js";
import {
  MatProgressSpinnerModule
} from "./chunk-DZVWUGGM.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import "./chunk-IEXL5CIB.js";
import {
  environment
} from "./chunk-G4JOAHZY.js";
import {
  ThemeService
} from "./chunk-Z6AVJA4A.js";
import {
  MatDateRangeInput,
  MatDateRangePicker,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatEndDate,
  MatStartDate,
  provideNativeDateAdapter
} from "./chunk-LJBWKBWF.js";
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
import "./chunk-OWKVH3DN.js";
import {
  MatOptgroup,
  MatOption,
  MatSelectModule
} from "./chunk-66OK2TSW.js";
import "./chunk-F5RTWLKS.js";
import "./chunk-NQ2UJILS.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X67QRSHQ.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  JsonPipe,
  NgModule,
  Output,
  ViewChild,
  map,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-WY5M3RVA.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/modules/form/classes/abstracts/form.abstract.ts
var FormAbstract = class _FormAbstract {
  control;
  dynamicForm;
  getErrorMessage(control) {
    const formControl = this.dynamicForm.get(control.name);
    if (control.validations == null)
      return "";
    for (let validation of control.validations) {
      if (formControl?.hasError(validation.name)) {
        return validation.message;
      }
    }
    return "";
  }
  static \u0275fac = function FormAbstract_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormAbstract)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FormAbstract, inputs: { control: "control", dynamicForm: "dynamicForm" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormAbstract, [{
    type: Directive
  }], null, { control: [{
    type: Input
  }], dynamicForm: [{
    type: Input
  }] });
})();

// src/app/modules/form/components/forms/input/input.component.ts
function InputComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage(ctx_r0.control));
  }
}
var InputComponent = class _InputComponent extends FormAbstract {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputComponent_BaseFactory;
    return function InputComponent_Factory(__ngFactoryType__) {
      return (\u0275InputComponent_BaseFactory || (\u0275InputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InputComponent)))(__ngFactoryType__ || _InputComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputComponent, selectors: [["app-input"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 7, consts: [[3, "formGroup"], [2, "margin", "0", "line-height", "50px", "white-space", "nowrap"], ["appearance", "outline"], ["matInput", "", 3, "type", "placeholder", "formControlName"], [2, "margin-top", "-10px"]], template: function InputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-form-field", 2)(4, "mat-label");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, InputComponent_Conditional_7_Template, 2, 1, "mat-error", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275property("formGroup", ctx.dynamicForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.control.type)("placeholder", ctx.control.placeholder)("formControlName", ctx.control.name);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_6_0.touched) ? 7 : -1);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatLabel, MatError, MatInput], styles: ["\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{ selector: "app-input", standalone: false, template: '<div [formGroup]="dynamicForm">\n    <p style="margin: 0; line-height: 50px; white-space: nowrap;">{{ control.label }}</p>\n    <mat-form-field appearance="outline">\n        <mat-label>{{ control.label }}</mat-label>\n        <input matInput \n            [type]="control.type"    \n            [placeholder]="control.placeholder"\n            [formControlName]="control.name"\n        >\n    </mat-form-field>\n    @if (dynamicForm.get(control.name)?.invalid && dynamicForm.get(control.name)?.touched) {\n        <mat-error style="margin-top: -10px;">{{ getErrorMessage(control) }}</mat-error>\n    }\n</div>\n', styles: ["/* src/app/modules/form/components/forms/input/input.component.scss */\n.mat-mdc-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=input.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputComponent, { className: "InputComponent", filePath: "src/app/modules/form/components/forms/input/input.component.ts", lineNumber: 10 });
})();

// src/app/modules/form/components/forms/textarea/textarea.component.ts
function TextareaComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage(ctx_r0.control));
  }
}
var TextareaComponent = class _TextareaComponent extends FormAbstract {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaComponent_BaseFactory;
    return function TextareaComponent_Factory(__ngFactoryType__) {
      return (\u0275TextareaComponent_BaseFactory || (\u0275TextareaComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaComponent)))(__ngFactoryType__ || _TextareaComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextareaComponent, selectors: [["app-textarea"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [[3, "formGroup"], [2, "margin", "0 20px 0 0", "line-height", "50px", "white-space", "nowrap"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formControlName"], [2, "margin-top", "-10px"]], template: function TextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-form-field", 2)(4, "mat-label");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "textarea", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, TextareaComponent_Conditional_7_Template, 2, 1, "mat-error", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275property("formGroup", ctx.dynamicForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.control.placeholder)("formControlName", ctx.control.name);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_5_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_5_0.touched) ? 7 : -1);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatLabel, MatError, MatInput], styles: ["\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=textarea.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaComponent, [{
    type: Component,
    args: [{ selector: "app-textarea", standalone: false, template: '<div [formGroup]="dynamicForm">\n    <p style="margin: 0 20px 0 0; line-height: 50px; white-space: nowrap;">{{ control.label }}</p>\n    <mat-form-field appearance="outline">\n        <mat-label>{{ control.label }}</mat-label>\n        <textarea matInput\n            [placeholder]="control.placeholder"\n            [formControlName]="control.name"\n        ></textarea>\n    </mat-form-field>\n    @if (dynamicForm.get(control.name)?.invalid && dynamicForm.get(control.name)?.touched) {\n        <mat-error style="margin-top: -10px;">{{ getErrorMessage(control) }}</mat-error>\n    }\n</div>\n', styles: ["/* src/app/modules/form/components/forms/textarea/textarea.component.scss */\n.mat-mdc-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=textarea.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextareaComponent, { className: "TextareaComponent", filePath: "src/app/modules/form/components/forms/textarea/textarea.component.ts", lineNumber: 10 });
})();

// src/app/modules/form/components/forms/select/select.component.ts
function SelectComponent_For_11_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    \u0275\u0275property("value", element_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r1);
  }
}
function SelectComponent_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SelectComponent_For_11_Conditional_0_For_1_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(group_r2.sub);
  }
}
function SelectComponent_For_11_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275property("value", element_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r3);
  }
}
function SelectComponent_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-optgroup", 6);
    \u0275\u0275repeaterCreate(1, SelectComponent_For_11_Conditional_1_For_2_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("label", group_r2.main);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.sub);
  }
}
function SelectComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SelectComponent_For_11_Conditional_0_Template, 2, 0)(1, SelectComponent_For_11_Conditional_1_Template, 3, 1, "mat-optgroup", 6);
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275conditional(group_r2.main === "" ? 0 : 1);
  }
}
function SelectComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getErrorMessage(ctx_r3.control));
  }
}
var SelectComponent = class _SelectComponent extends FormAbstract {
  groupOptions = [];
  formData = [];
  getSelectIndex(name) {
    const selects = this.formData.reduce((indices, item, index) => {
      if (item.category === "select") {
        indices.push({
          name: item.name,
          index
        });
      }
      return indices;
    }, []);
    return selects.findIndex((item) => item.name === name);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectComponent_BaseFactory;
    return function SelectComponent_Factory(__ngFactoryType__) {
      return (\u0275SelectComponent_BaseFactory || (\u0275SelectComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectComponent)))(__ngFactoryType__ || _SelectComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], inputs: { groupOptions: "groupOptions", formData: "formData" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 10, consts: [["autoGroup", "matAutocomplete"], [3, "formGroup"], [2, "margin", "0 20px 0 0", "line-height", "50px", "white-space", "nowrap"], ["appearance", "outline"], ["matInput", "", 3, "type", "placeholder", "formControlName", "matAutocomplete"], [2, "margin-top", "-10px"], [3, "label"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div")(4, "mat-form-field", 3)(5, "mat-label");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 4);
      \u0275\u0275elementStart(8, "mat-autocomplete", null, 0);
      \u0275\u0275repeaterCreate(10, SelectComponent_For_11_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, SelectComponent_Conditional_13_Template, 2, 1, "mat-error", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_9_0;
      const autoGroup_r5 = \u0275\u0275reference(9);
      \u0275\u0275property("formGroup", ctx.dynamicForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.control.type)("placeholder", ctx.control.placeholder || "")("formControlName", ctx.control.name)("matAutocomplete", autoGroup_r5);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 8, ctx.groupOptions[ctx.getSelectIndex(ctx.control.name)]));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(((tmp_9_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_9_0.touched) ? 13 : -1);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatLabel, MatError, MatInput, MatOption, MatOptgroup, MatAutocomplete, MatAutocompleteTrigger, AsyncPipe], styles: ["\n\n.form-field-container[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{ selector: "app-select", standalone: false, template: `<div [formGroup]="dynamicForm">
    <p style="margin: 0 20px 0 0; line-height: 50px; white-space: nowrap;">{{ control.label }}</p>
    <div>
        <mat-form-field appearance="outline">
            <mat-label>{{ control.label }}</mat-label>
            <input matInput [type]="control.type" [placeholder]="control.placeholder || ''" [formControlName]="control.name"
              [matAutocomplete]="autoGroup">
            <mat-autocomplete #autoGroup="matAutocomplete">
                @for (group of groupOptions[getSelectIndex(control.name)] | async; track $index) {
                    @if (group.main === '') {
                        @for (element of group.sub; track $index) {
                            <mat-option [value]="element">{{ element }}</mat-option>
                        }
                    }
                    @else {
                        <mat-optgroup [label]="group.main">
                            @for (element of group.sub; track $index) {
                                <mat-option [value]="element">{{ element }}</mat-option>
                            }
                        </mat-optgroup>
                    }
                }
            </mat-autocomplete>
        </mat-form-field>
        @if (dynamicForm.get(control.name)?.invalid && dynamicForm.get(control.name)?.touched) {
            <mat-error style="margin-top: -10px;">{{ getErrorMessage(control) }}</mat-error>
        }
    </div>
</div>
`, styles: ["/* src/app/modules/form/components/forms/select/select.component.scss */\n.form-field-container .mat-mdc-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=select.component.css.map */\n"] }]
  }], null, { groupOptions: [{
    type: Input
  }], formData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "src/app/modules/form/components/forms/select/select.component.ts", lineNumber: 12 });
})();

// src/app/modules/form/components/forms/radio-button/radio-button.component.ts
function RadioButtonComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r1.main);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.Array.isArray(item_r1.sub) ? item_r1.sub[0] : item_r1.sub, " ");
  }
}
function RadioButtonComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getErrorMessage(ctx_r1.control));
  }
}
var RadioButtonComponent = class _RadioButtonComponent extends FormAbstract {
  // 템플릿에서 Array 사용을 위한 헬퍼
  Array = Array;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButtonComponent_BaseFactory;
    return function RadioButtonComponent_Factory(__ngFactoryType__) {
      return (\u0275RadioButtonComponent_BaseFactory || (\u0275RadioButtonComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButtonComponent)))(__ngFactoryType__ || _RadioButtonComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadioButtonComponent, selectors: [["app-radio-button"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 4, consts: [[3, "formGroup"], [2, "margin", "0", "line-height", "40px", "white-space", "nowrap"], [3, "formControlName"], [2, "margin-right", "20px", 3, "value"], [2, "margin-top", "-10px"]], template: function RadioButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-radio-group", 2);
      \u0275\u0275repeaterCreate(4, RadioButtonComponent_For_5_Template, 2, 2, "mat-radio-button", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, RadioButtonComponent_Conditional_6_Template, 2, 1, "mat-error", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275property("formGroup", ctx.dynamicForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance();
      \u0275\u0275property("formControlName", ctx.control.name);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.control.group);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.touched) ? 6 : -1);
    }
  }, dependencies: [NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatError, MatRadioGroup, MatRadioButton], styles: ["\n\n.radio-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.radio-group-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--form-text-primary);\n  margin-bottom: 10px;\n}\n.radio-group-container[_ngcontent-%COMP%]   .mat-mdc-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.radio-group-container[_ngcontent-%COMP%]   .mat-mdc-radio-button[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=radio-button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonComponent, [{
    type: Component,
    args: [{ selector: "app-radio-button", standalone: false, template: '<div [formGroup]="dynamicForm">\n    <p style="margin: 0; line-height: 40px; white-space: nowrap;">{{ control.label }}</p>\n    <mat-radio-group [formControlName]="control.name">\n        @for (item of control.group; track $index) {\n            <mat-radio-button style="margin-right: 20px;" [value]="item.main">\n                {{ Array.isArray(item.sub) ? item.sub[0] : item.sub }}\n            </mat-radio-button>\n        }\n      </mat-radio-group>\n    @if (dynamicForm.get(control.name)?.invalid && dynamicForm.get(control.name)?.touched) {\n        <mat-error style="margin-top: -10px;">{{ getErrorMessage(control) }}</mat-error>\n    }\n</div>\n', styles: ["/* src/app/modules/form/components/forms/radio-button/radio-button.component.scss */\n.radio-group-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.radio-group-container label {\n  font-weight: 500;\n  color: var(--form-text-primary);\n  margin-bottom: 10px;\n}\n.radio-group-container .mat-mdc-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.radio-group-container .mat-mdc-radio-button {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=radio-button.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioButtonComponent, { className: "RadioButtonComponent", filePath: "src/app/modules/form/components/forms/radio-button/radio-button.component.ts", lineNumber: 10 });
})();

// src/app/modules/form/components/forms/date-picker/date-picker.component.ts
function DatePickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", ctx_r0.control.controls[0].name)("placeholder", ctx_r0.control.controls[0].placeholder);
  }
}
function DatePickerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", ctx_r0.control.controls[1].name)("placeholder", ctx_r0.control.controls[1].placeholder);
  }
}
function DatePickerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage(ctx_r0.control));
  }
}
function DatePickerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getErrorMessage(ctx_r0.control));
  }
}
var DatePickerComponent = class _DatePickerComponent extends FormAbstract {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DatePickerComponent_BaseFactory;
    return function DatePickerComponent_Factory(__ngFactoryType__) {
      return (\u0275DatePickerComponent_BaseFactory || (\u0275DatePickerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DatePickerComponent)))(__ngFactoryType__ || _DatePickerComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatePickerComponent, selectors: [["app-date-picker"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 10, consts: [["picker", ""], [3, "formGroup"], [2, "margin", "0", "line-height", "50px", "white-space", "nowrap"], ["appearance", "outline"], [3, "formGroupName", "rangePicker"], ["matStartDate", "", 3, "formControlName", "placeholder"], ["matEndDate", "", 3, "formControlName", "placeholder"], ["matIconSuffix", "", 3, "for"], [2, "margin-top", "-10px"]], template: function DatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-form-field", 3)(4, "mat-label");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-date-range-input", 4);
      \u0275\u0275conditionalCreate(7, DatePickerComponent_Conditional_7_Template, 1, 2, "input", 5);
      \u0275\u0275conditionalCreate(8, DatePickerComponent_Conditional_8_Template, 1, 2, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "mat-datepicker-toggle", 7)(10, "mat-date-range-picker", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, DatePickerComponent_Conditional_12_Template, 2, 1, "mat-error", 8);
      \u0275\u0275conditionalCreate(13, DatePickerComponent_Conditional_13_Template, 2, 1, "mat-error", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_10_0;
      const picker_r2 = \u0275\u0275reference(11);
      \u0275\u0275property("formGroup", ctx.dynamicForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.control.label);
      \u0275\u0275advance();
      \u0275\u0275property("formGroupName", ctx.control.name)("rangePicker", picker_r2);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.control.controls ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.control.controls ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("for", picker_r2);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.control.controls && ((tmp_9_0 = ctx.dynamicForm.get(ctx.control.controls[0].name)) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.dynamicForm.get(ctx.control.controls[0].name)) == null ? null : tmp_9_0.touched) ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.control.controls && ((tmp_10_0 = ctx.dynamicForm.get(ctx.control.controls[1].name)) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.dynamicForm.get(ctx.control.controls[1].name)) == null ? null : tmp_10_0.touched) ? 13 : -1);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, MatFormField, MatLabel, MatError, MatSuffix, MatDatepickerToggle, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker], styles: ["\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=date-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{ selector: "app-date-picker", standalone: false, template: '<div [formGroup]="dynamicForm">\n    <p style="margin: 0; line-height: 50px; white-space: nowrap;">{{ control.label }}</p>\n    <mat-form-field appearance="outline">\n        <mat-label>{{ control.label }}</mat-label>\n        <mat-date-range-input [formGroupName]="control.name" [rangePicker]="picker">\n            @if (control.controls) {\n                <input matStartDate [formControlName]="control.controls[0].name" [placeholder]="control.controls[0].placeholder">\n            }\n            @if (control.controls) {\n                <input matEndDate [formControlName]="control.controls[1].name" [placeholder]="control.controls[1].placeholder">\n            }\n        </mat-date-range-input>\n        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\n        <mat-date-range-picker #picker></mat-date-range-picker>\n    </mat-form-field>\n    @if (control.controls && dynamicForm.get(control.controls[0].name)?.invalid && dynamicForm.get(control.controls[0].name)?.touched) {\n        <mat-error style="margin-top: -10px;">{{ getErrorMessage(control) }}</mat-error>\n    }\n    @if (control.controls && dynamicForm.get(control.controls[1].name)?.invalid && dynamicForm.get(control.controls[1].name)?.touched) {\n        <mat-error style="margin-top: -10px;">{{ getErrorMessage(control) }}</mat-error>\n    }\n</div>\n', styles: ["/* src/app/modules/form/components/forms/date-picker/date-picker.component.scss */\n.mat-mdc-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=date-picker.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatePickerComponent, { className: "DatePickerComponent", filePath: "src/app/modules/form/components/forms/date-picker/date-picker.component.ts", lineNumber: 10 });
})();

// src/app/modules/form/dynamic-form.component.ts
function DynamicFormComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-input", 1);
  }
  if (rf & 2) {
    const control_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("control", control_r1)("dynamicForm", ctx_r1.dynamicForm);
  }
}
function DynamicFormComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-textarea", 1);
  }
  if (rf & 2) {
    const control_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("control", control_r1)("dynamicForm", ctx_r1.dynamicForm);
  }
}
function DynamicFormComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-select", 2);
  }
  if (rf & 2) {
    const control_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("control", control_r1)("dynamicForm", ctx_r1.dynamicForm)("formData", ctx_r1.formData.controls)("groupOptions", ctx_r1.groupOptions);
  }
}
function DynamicFormComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-radio-button", 1);
  }
  if (rf & 2) {
    const control_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("control", control_r1)("dynamicForm", ctx_r1.dynamicForm);
  }
}
function DynamicFormComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-date-picker", 1);
  }
  if (rf & 2) {
    const control_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("control", control_r1)("dynamicForm", ctx_r1.dynamicForm);
  }
}
function DynamicFormComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicFormComponent_For_2_Conditional_0_Template, 1, 2, "app-input", 1);
    \u0275\u0275conditionalCreate(1, DynamicFormComponent_For_2_Conditional_1_Template, 1, 2, "app-textarea", 1);
    \u0275\u0275conditionalCreate(2, DynamicFormComponent_For_2_Conditional_2_Template, 1, 4, "app-select", 2);
    \u0275\u0275conditionalCreate(3, DynamicFormComponent_For_2_Conditional_3_Template, 1, 2, "app-radio-button", 1);
    \u0275\u0275conditionalCreate(4, DynamicFormComponent_For_2_Conditional_4_Template, 1, 2, "app-date-picker", 1);
  }
  if (rf & 2) {
    const control_r1 = ctx.$implicit;
    \u0275\u0275conditional(control_r1.category === "input" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(control_r1.category === "textarea" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(control_r1.category === "select" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(control_r1.category === "radio-button" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(control_r1.category === "datepicker" ? 4 : -1);
  }
}
var _filter = (opt, value) => {
  const filterValue = value.toLowerCase();
  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};
var DynamicFormComponent = class _DynamicFormComponent {
  formBuilder;
  formData;
  enter = new EventEmitter();
  dynamicForm;
  groupOptions = [];
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    let entireGroup = {};
    this.formData.controls.forEach((control) => {
      if (control.category === "datepicker") {
        let formGroup = {};
        control.controls?.forEach((groupControl) => {
          let validators = [];
          if (groupControl.validations != null) {
            validators = this.addValidation(groupControl.validations);
          }
          formGroup[groupControl.name] = [groupControl.value || "", validators];
        });
        entireGroup[control.name] = this.formBuilder.group(formGroup);
      } else {
        let validators = [];
        if (control.validations != null) {
          validators = this.addValidation(control.validations);
        }
        entireGroup[control.name] = [control.value || "", validators];
      }
    });
    this.dynamicForm = this.formBuilder.group(entireGroup);
    this.formData.controls.forEach((control) => {
      if (control.category === "select") {
        this.groupOptions.push(this.dynamicForm.get(control.name).valueChanges.pipe(startWith(""), map((value) => this.filterGroup(control.group, value || ""))));
      }
    });
  }
  enterSubmit(event) {
    event.stopPropagation();
    if (this.dynamicForm.valid) {
      this.enter.emit({ value: this.dynamicForm.value });
    }
  }
  addValidation(validations) {
    let controlValidators = [];
    if (validations) {
      validations.forEach((validation) => {
        if (validation.validator === "required")
          controlValidators.push(Validators.required);
      });
    }
    return controlValidators;
  }
  filterGroup(currentGroup, value) {
    if (value) {
      return currentGroup.map((group) => ({
        main: group.main,
        sub: Array.isArray(group.sub) ? _filter(group.sub, value) : group.sub
      })).filter((group) => Array.isArray(group.sub) ? group.sub.length > 0 : true);
    }
    return currentGroup;
  }
  static \u0275fac = function DynamicFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicFormComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { formData: "formData" }, outputs: { enter: "enter" }, standalone: false, decls: 3, vars: 1, consts: [[2, "display", "flex", "flex-direction", "column", 3, "keydown.enter", "formGroup"], [3, "control", "dynamicForm"], [3, "control", "dynamicForm", "formData", "groupOptions"]], template: function DynamicFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("keydown.enter", function DynamicFormComponent_Template_form_keydown_enter_0_listener($event) {
        return ctx.enterSubmit($event);
      });
      \u0275\u0275repeaterCreate(1, DynamicFormComponent_For_2_Template, 5, 5, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.dynamicForm);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.formData.controls);
    }
  }, dependencies: [\u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, InputComponent, TextareaComponent, SelectComponent, RadioButtonComponent, DatePickerComponent], styles: ["\n\n.dynamic-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dynamic-form-container[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n/*# sourceMappingURL=dynamic-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFormComponent, [{
    type: Component,
    args: [{ selector: "app-dynamic-form", standalone: false, template: `<form [formGroup]="dynamicForm" (keydown.enter)="enterSubmit($event)" style="display: flex; flex-direction: column;">
    @for (control of formData.controls; track $index) {
        @if (control.category === 'input') {
            <app-input [control]="control" [dynamicForm]="dynamicForm"></app-input>
        }
        @if (control.category === 'textarea') {
            <app-textarea [control]="control" [dynamicForm]="dynamicForm"></app-textarea>
        }
        @if (control.category === 'select') {
            <app-select [control]="control" [dynamicForm]="dynamicForm" [formData]="formData.controls"  [groupOptions]="groupOptions"></app-select>
        }
        @if (control.category === 'radio-button') {
            <app-radio-button [control]="control" [dynamicForm]="dynamicForm"></app-radio-button>
        }
        @if (control.category === 'datepicker') {
            <app-date-picker [control]="control" [dynamicForm]="dynamicForm"></app-date-picker>
        }
    }
</form>
`, styles: ["/* src/app/modules/form/dynamic-form.component.scss */\n.dynamic-form-container {\n  width: 100%;\n}\n.dynamic-form-container .form-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n/*# sourceMappingURL=dynamic-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], { formData: [{
    type: Input
  }], enter: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicFormComponent, { className: "DynamicFormComponent", filePath: "src/app/modules/form/dynamic-form.component.ts", lineNumber: 17 });
})();

// src/app/modules/form/services/form-auth.service.ts
var FormAuthService = class _FormAuthService {
  currentUserSubject = new BehaviorSubject(null);
  isFormLoggedInSubject = new BehaviorSubject(false);
  currentUser$ = this.currentUserSubject.asObservable();
  isFormLoggedIn$ = this.isFormLoggedInSubject.asObservable();
  // environment에서 암호화된 인증 정보를 복호화하여 사용
  VALID_USERNAME = CryptoUtil.decrypt(environment.auth.username);
  VALID_PASSWORD = CryptoUtil.decrypt(environment.auth.password);
  constructor() {
    const savedUser = localStorage.getItem("formUser");
    const savedToken = localStorage.getItem("formToken");
    if (savedUser && savedToken) {
      try {
        this.currentUserSubject.next(JSON.parse(savedUser));
        this.isFormLoggedInSubject.next(true);
      } catch (error) {
        this.clearFormAuth();
      }
    }
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get isFormLoggedIn() {
    return this.isFormLoggedInSubject.value;
  }
  /**
   * Form 시스템 로그인 (하드코딩)
   */
  formLogin(username, password) {
    return __async(this, null, function* () {
      try {
        yield new Promise((resolve) => setTimeout(resolve, 500));
        if (username === this.VALID_USERNAME && password === this.VALID_PASSWORD) {
          const user = {
            id: "1",
            username,
            role: "admin"
          };
          const token = "form_token_" + Date.now();
          this.currentUserSubject.next(user);
          this.isFormLoggedInSubject.next(true);
          localStorage.setItem("formUser", JSON.stringify(user));
          localStorage.setItem("formToken", token);
          return { success: true };
        } else {
          return { success: false, message: "\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." };
        }
      } catch (error) {
        return { success: false, message: "\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." };
      }
    });
  }
  /**
   * Form 로그아웃
   */
  formLogout() {
    this.currentUserSubject.next(null);
    this.isFormLoggedInSubject.next(false);
    this.clearFormAuth();
  }
  /**
   * Form 토큰 가져오기
   */
  getFormToken() {
    return localStorage.getItem("formToken");
  }
  /**
   * Form 인증 정보 초기화
   */
  clearFormAuth() {
    localStorage.removeItem("formUser");
    localStorage.removeItem("formToken");
  }
  static \u0275fac = function FormAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormAuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormAuthService, factory: _FormAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/form/pages/form-test/form-test.component.ts
function FormTestComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h4");
    \u0275\u0275text(2, "\uC81C\uCD9C \uACB0\uACFC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.basicFormResult));
  }
}
function FormTestComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h4");
    \u0275\u0275text(2, "\uC81C\uCD9C \uACB0\uACFC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.selectFormResult));
  }
}
function FormTestComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h4");
    \u0275\u0275text(2, "\uC81C\uCD9C \uACB0\uACFC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.dateFormResult));
  }
}
function FormTestComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h4");
    \u0275\u0275text(2, "\uC81C\uCD9C \uACB0\uACFC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.comprehensiveFormResult));
  }
}
var FormTestComponent = class _FormTestComponent {
  themeService;
  formAuthService;
  router;
  isDarkMode = false;
  themeSubscription;
  constructor(themeService, formAuthService, router) {
    this.themeService = themeService;
    this.formAuthService = formAuthService;
    this.router = router;
  }
  ngOnInit() {
    this.themeSubscription = this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
  }
  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  logout() {
    this.formAuthService.formLogout();
    this.router.navigate(["/form/login"]);
  }
  // 기본 폼 데이터
  basicFormData = {
    controls: [
      {
        label: "\uC774\uB984",
        category: "input",
        type: "text",
        name: "name",
        value: "",
        placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694",
        validations: [
          { name: "required", validator: "required", message: "\uC774\uB984\uC740 \uD544\uC218\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uC774\uBA54\uC77C",
        category: "input",
        type: "email",
        name: "email",
        value: "",
        placeholder: "example@email.com",
        validations: [
          { name: "required", validator: "required", message: "\uC774\uBA54\uC77C\uC740 \uD544\uC218\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uB098\uC774",
        category: "input",
        type: "number",
        name: "age",
        value: "",
        placeholder: "\uB098\uC774\uB97C \uC785\uB825\uD558\uC138\uC694",
        validations: []
      },
      {
        label: "\uC131\uBCC4",
        category: "radio-button",
        type: "radio",
        name: "gender",
        value: "",
        placeholder: "",
        validations: [],
        group: [
          { main: "male", sub: ["\uB0A8\uC131"] },
          { main: "female", sub: ["\uC5EC\uC131"] },
          { main: "other", sub: ["\uAE30\uD0C0"] }
        ]
      },
      {
        label: "\uC790\uAE30\uC18C\uAC1C",
        category: "textarea",
        type: "text",
        name: "bio",
        value: "",
        placeholder: "\uC790\uAE30\uC18C\uAC1C\uB97C \uC785\uB825\uD558\uC138\uC694",
        validations: []
      }
    ]
  };
  // Select 폼 데이터
  selectFormData = {
    controls: [
      {
        label: "\uAD6D\uAC00",
        category: "select",
        type: "text",
        name: "country",
        value: "",
        placeholder: "\uAD6D\uAC00\uB97C \uC120\uD0DD\uD558\uC138\uC694",
        validations: [],
        group: [
          {
            main: "\uC544\uC2DC\uC544",
            sub: ["\uD55C\uAD6D", "\uC77C\uBCF8", "\uC911\uAD6D", "\uB300\uB9CC", "\uC2F1\uAC00\uD3EC\uB974"]
          },
          {
            main: "\uC720\uB7FD",
            sub: ["\uC601\uAD6D", "\uD504\uB791\uC2A4", "\uB3C5\uC77C", "\uC774\uD0C8\uB9AC\uC544", "\uC2A4\uD398\uC778"]
          },
          {
            main: "\uC544\uBA54\uB9AC\uCE74",
            sub: ["\uBBF8\uAD6D", "\uCE90\uB098\uB2E4", "\uBE0C\uB77C\uC9C8", "\uC544\uB974\uD5E8\uD2F0\uB098"]
          }
        ]
      },
      {
        label: "\uC9C1\uC5C5",
        category: "select",
        type: "text",
        name: "job",
        value: "",
        placeholder: "\uC9C1\uC5C5\uC744 \uC120\uD0DD\uD558\uC138\uC694",
        validations: [],
        group: [
          {
            main: "",
            sub: ["\uAC1C\uBC1C\uC790", "\uB514\uC790\uC774\uB108", "\uAE30\uD68D\uC790", "\uB9C8\uCF00\uD130", "\uC601\uC5C5", "\uAE30\uD0C0"]
          }
        ]
      }
    ]
  };
  // DatePicker 폼 데이터
  dateFormData = {
    controls: [
      {
        label: "\uD504\uB85C\uC81D\uD2B8 \uAE30\uAC04",
        category: "datepicker",
        type: "date",
        name: "projectPeriod",
        value: null,
        placeholder: "",
        validations: [],
        controls: [
          {
            label: "\uC2DC\uC791\uC77C",
            name: "startDate",
            type: "date",
            placeholder: "\uC2DC\uC791\uC77C",
            value: null,
            category: "datepicker",
            validations: []
          },
          {
            label: "\uC885\uB8CC\uC77C",
            name: "endDate",
            type: "date",
            placeholder: "\uC885\uB8CC\uC77C",
            value: null,
            category: "datepicker",
            validations: []
          }
        ]
      }
    ]
  };
  // 종합 폼 데이터
  comprehensiveFormData = {
    controls: [
      {
        label: "\uC9C4\uD589 \uC5EC\uBD80",
        category: "radio-button",
        type: "text",
        name: "status",
        value: "",
        placeholder: "",
        group: [
          { main: "IN_PROGRESS", sub: ["\uC9C4\uD589"] },
          { main: "STOPPED", sub: ["\uC9C4\uD589\uC548\uD568"] }
        ],
        validations: [
          { name: "required", validator: "required", message: "\uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uD61C\uD0DD\uBA85",
        category: "input",
        type: "text",
        name: "name",
        value: "",
        placeholder: "\uC608\uC2DC) \uC2E0\uADDC \uAC00\uC785 \uD61C\uD0DD",
        validations: [
          { name: "required", validator: "required", message: "\uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uAE30\uAC04 \uC124\uC815",
        category: "radio-button",
        type: "text",
        name: "isSelectedPeriod",
        value: "",
        placeholder: "",
        group: [
          { main: true, sub: ["\uC0AC\uC6A9"] },
          { main: false, sub: ["\uC0AC\uC6A9\uC548\uD568"] }
        ],
        validations: [
          { name: "required", validator: "required", message: "\uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uAE30\uAC04",
        category: "datepicker",
        type: "string",
        name: "datepicker",
        value: "",
        placeholder: "MM/DD/YYYY",
        validations: [],
        controls: [
          {
            label: "\uC2DC\uC791 \uC77C\uC790",
            category: "datepicker",
            type: "string",
            name: "start_date",
            value: "",
            placeholder: "\uC2DC\uC791 \uC77C\uC790",
            validations: []
          },
          {
            label: "\uB9C8\uC9C0\uB9C9 \uC77C\uC790",
            category: "datepicker",
            type: "string",
            name: "end_date",
            value: "",
            placeholder: "\uB9C8\uC9C0\uB9C9 \uC77C\uC790",
            validations: []
          }
        ]
      },
      {
        label: "\uC218\uB7C9 \uC124\uC815",
        category: "radio-button",
        type: "text",
        name: "quantityType",
        value: "",
        placeholder: "",
        group: [
          { main: true, sub: ["\uC81C\uD55C\uC5C6\uC74C"] },
          { main: false, sub: ["\uC0AC\uC6A9"] }
        ],
        validations: [
          { name: "required", validator: "required", message: "\uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uCD5C\uB300 \uC218\uB7C9",
        category: "input",
        type: "number",
        name: "max_uses",
        value: "",
        placeholder: "\uCD5C\uC18C: 0",
        validations: []
      },
      {
        label: "\uC81C\uACF5 \uD06C\uB808\uB527",
        category: "input",
        type: "number",
        name: "discount_value",
        value: "",
        placeholder: "\uCD5C\uC18C: 100",
        validations: [
          { name: "required", validator: "required", message: "\uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uBCC0\uACBD \uC0AC\uC720",
        category: "radio-button",
        type: "text",
        name: "type",
        value: "",
        placeholder: "",
        group: [
          { main: "ILLEGAL_AD", sub: ["\uC131\uC778/\uB3C4\uBC15 \uB4F1 \uBD88\uBC95 \uAD11\uACE0 \uC601\uC0C1 \uC81C\uC791"] },
          { main: "POLICY_VIOLATION", sub: ["\uC6B4\uC601 \uC6D0\uCE59\uC5D0 \uC704\uBC30\uB418\uB294 \uD65C\uB3D9"] },
          { main: "OTHER", sub: ["\uC9C1\uC811 \uC785\uB825"] }
        ],
        validations: [
          { name: "required", validator: "required", message: "\uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4" }
        ]
      },
      {
        label: "\uC0C1\uC138 \uC124\uBA85",
        category: "textarea",
        type: "text",
        name: "description",
        value: "",
        placeholder: "\uC0C1\uC138 \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
        validations: []
      }
    ]
  };
  // 제출된 데이터들
  basicFormResult = null;
  selectFormResult = null;
  dateFormResult = null;
  comprehensiveFormResult = null;
  onBasicFormSubmit(event) {
    this.basicFormResult = event.value;
  }
  onSelectFormSubmit(event) {
    this.selectFormResult = event.value;
  }
  onDateFormSubmit(event) {
    this.dateFormResult = event.value;
  }
  onComprehensiveFormSubmit(event) {
    this.comprehensiveFormResult = event.value;
  }
  static \u0275fac = function FormTestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormTestComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(FormAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormTestComponent, selectors: [["app-form-test"]], standalone: false, decls: 98, vars: 14, consts: [[1, "form-test-container"], [1, "header-section"], [1, "subtitle"], [1, "header-actions"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-icon-button", "", "color", "accent", "routerLink", "/form/builder", "matTooltip", "\uD3FC \uBE4C\uB354\uB85C \uC774\uB3D9"], [2, "flex", "1"], ["mat-icon-button", "", "color", "primary", "matTooltip", "\uB85C\uADF8\uC544\uC6C3", 3, "click"], [1, "form-section"], [3, "enter", "formData"], [1, "submit-button"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "result-box"], [1, "info-section"], [1, "feature-list"]], template: function FormTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "\u{1F3A8} Dynamic Form Module \uD14C\uC2A4\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "loworld_ai Form Module \uB370\uBAA8 \uD398\uC774\uC9C0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
      \u0275\u0275listener("click", function FormTestComponent_Template_button_click_8_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 5)(12, "mat-icon");
      \u0275\u0275text(13, "build");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(14, "div", 6);
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function FormTestComponent_Template_button_click_15_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(16, "mat-icon");
      \u0275\u0275text(17, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "mat-card", 8)(19, "mat-card-header")(20, "mat-card-title");
      \u0275\u0275text(21, "1. \uAE30\uBCF8 \uD3FC (Input, Radio, Textarea)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "mat-card-content")(23, "app-dynamic-form", 9);
      \u0275\u0275listener("enter", function FormTestComponent_Template_app_dynamic_form_enter_23_listener($event) {
        return ctx.onBasicFormSubmit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
      \u0275\u0275listener("click", function FormTestComponent_Template_button_click_25_listener() {
        return ctx.onBasicFormSubmit({ value: ctx.basicFormData });
      });
      \u0275\u0275text(26, " \uC81C\uCD9C ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(27, FormTestComponent_Conditional_27_Template, 6, 3, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "mat-card", 8)(29, "mat-card-header")(30, "mat-card-title");
      \u0275\u0275text(31, "2. Select (\uC790\uB3D9\uC644\uC131 \uB4DC\uB86D\uB2E4\uC6B4)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-card-content")(33, "app-dynamic-form", 9);
      \u0275\u0275listener("enter", function FormTestComponent_Template_app_dynamic_form_enter_33_listener($event) {
        return ctx.onSelectFormSubmit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 10)(35, "button", 11);
      \u0275\u0275listener("click", function FormTestComponent_Template_button_click_35_listener() {
        return ctx.onSelectFormSubmit({ value: ctx.selectFormData });
      });
      \u0275\u0275text(36, " \uC81C\uCD9C ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(37, FormTestComponent_Conditional_37_Template, 6, 3, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "mat-card", 8)(39, "mat-card-header")(40, "mat-card-title");
      \u0275\u0275text(41, "3. DatePicker (\uB0A0\uC9DC \uBC94\uC704 \uC120\uD0DD)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "mat-card-content")(43, "app-dynamic-form", 9);
      \u0275\u0275listener("enter", function FormTestComponent_Template_app_dynamic_form_enter_43_listener($event) {
        return ctx.onDateFormSubmit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 10)(45, "button", 11);
      \u0275\u0275listener("click", function FormTestComponent_Template_button_click_45_listener() {
        return ctx.onDateFormSubmit({ value: ctx.dateFormData });
      });
      \u0275\u0275text(46, " \uC81C\uCD9C ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(47, FormTestComponent_Conditional_47_Template, 6, 3, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "mat-card", 8)(49, "mat-card-header")(50, "mat-card-title");
      \u0275\u0275text(51, "4. \uC885\uD569 \uD3FC (\uBAA8\uB4E0 \uD0C0\uC785)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "mat-card-content")(53, "app-dynamic-form", 9);
      \u0275\u0275listener("enter", function FormTestComponent_Template_app_dynamic_form_enter_53_listener($event) {
        return ctx.onComprehensiveFormSubmit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 10)(55, "button", 11);
      \u0275\u0275listener("click", function FormTestComponent_Template_button_click_55_listener() {
        return ctx.onComprehensiveFormSubmit({ value: ctx.comprehensiveFormData });
      });
      \u0275\u0275text(56, " \uC81C\uCD9C ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(57, FormTestComponent_Conditional_57_Template, 6, 3, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "mat-card", 13)(59, "mat-card-header")(60, "mat-card-title");
      \u0275\u0275text(61, "\u{1F4DA} \uC0AC\uC6A9 \uBC29\uBC95");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "mat-card-content")(63, "h3");
      \u0275\u0275text(64, "1. \uBAA8\uB4C8 Import");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "pre")(66, "code");
      \u0275\u0275text(67, "import { FormModule } from './modules/form/form.module';\n\n@NgModule({\n  imports: [FormModule]\n})");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "h3");
      \u0275\u0275text(69, "2. \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC0AC\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "pre")(71, "code");
      \u0275\u0275text(72, "import { IForm } from './modules/form/classes/interfaces/form.interface';\n\nformData: IForm = {\n  controls: [\n    {\n      label: '\uC774\uB984',\n      category: 'input',\n      type: 'text',\n      name: 'name',\n      value: '',\n      placeholder: '\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694',\n      validations: [\n        { name: 'required', validator: 'required', message: '\uD544\uC218\uC785\uB2C8\uB2E4' }\n      ]\n    }\n  ]\n};");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "h3");
      \u0275\u0275text(74, "3. \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC0AC\uC6A9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "pre")(76, "code");
      \u0275\u0275text(77, '<app-dynamic-form \n  [formData]="formData" \n  (enter)="onSubmit($event)">\n</app-dynamic-form>');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 14)(79, "h3");
      \u0275\u0275text(80, "\u2728 \uC9C0\uC6D0 \uAE30\uB2A5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "ul")(82, "li");
      \u0275\u0275text(83, "\u2705 Input (text, email, number, password)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "li");
      \u0275\u0275text(85, "\u2705 Textarea (\uC5EC\uB7EC \uC904 \uD14D\uC2A4\uD2B8)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "li");
      \u0275\u0275text(87, "\u2705 Select (\uC790\uB3D9\uC644\uC131 \uB4DC\uB86D\uB2E4\uC6B4, \uADF8\uB8F9\uD551 \uC9C0\uC6D0)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "li");
      \u0275\u0275text(89, "\u2705 RadioButton (\uB77C\uB514\uC624 \uBC84\uD2BC \uC120\uD0DD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "li");
      \u0275\u0275text(91, "\u2705 DatePicker (\uB0A0\uC9DC \uBC94\uC704 \uC120\uD0DD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "li");
      \u0275\u0275text(93, "\u2705 \uC790\uB3D9 \uAC80\uC99D (Validation)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "li");
      \u0275\u0275text(95, "\u2705 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 \uD45C\uC2DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "li");
      \u0275\u0275text(97, "\u2705 Material Design UI");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("dark-theme", ctx.isDarkMode)("light-theme", !ctx.isDarkMode);
      \u0275\u0275advance(8);
      \u0275\u0275property("matTooltip", ctx.isDarkMode ? "\uB77C\uC774\uD2B8 \uBAA8\uB4DC" : "\uB2E4\uD06C \uBAA8\uB4DC");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isDarkMode ? "light_mode" : "dark_mode");
      \u0275\u0275advance(13);
      \u0275\u0275property("formData", ctx.basicFormData);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.basicFormResult ? 27 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("formData", ctx.selectFormData);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.selectFormResult ? 37 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("formData", ctx.dateFormData);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.dateFormResult ? 47 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("formData", ctx.comprehensiveFormData);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.comprehensiveFormResult ? 57 : -1);
    }
  }, dependencies: [MatButton, MatIconButton, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIcon, MatTooltip, RouterLink, DynamicFormComponent, JsonPipe], styles: ['\n\n.form-test-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  min-height: 100vh;\n  background-color: #fff8f0;\n}\n.form-test-container.light-theme[_ngcontent-%COMP%] {\n  background-color: var(--form-bg-secondary);\n}\n.form-test-container.dark-theme[_ngcontent-%COMP%] {\n  background-color: var(--form-bg-secondary);\n}\n.form-test-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .form-test-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form-test-container[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.form-test-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n.form-test-container[_ngcontent-%COMP%]   .light-theme[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.form-test-container[_ngcontent-%COMP%]   .dark-theme[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.form-test-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0;\n}\n.form-test-container[_ngcontent-%COMP%]   .light-theme[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.form-test-container[_ngcontent-%COMP%]   .dark-theme[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.form-test-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 20px;\n  background-color: var(--form-bg-primary);\n  border: 1px solid var(--form-border-color);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px var(--form-shadow);\n  transition: all 0.3s ease;\n}\n.form-test-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px var(--form-shadow);\n}\n.form-test-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--form-border-color);\n  padding-bottom: 10px;\n}\n.form-test-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--form-text-primary);\n  font-weight: 600;\n}\n.form-test-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n.form-test-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.form-test-container[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: var(--form-success-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--form-success-color);\n}\n.form-test-container[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  color: var(--form-success-color);\n}\n.form-test-container[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px;\n  background-color: var(--form-field-bg);\n  border-radius: 4px;\n  overflow-x: auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: var(--form-text-primary);\n  font-family: "Courier New", monospace;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  background-color: var(--form-bg-tertiary);\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--form-primary-color);\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: var(--form-field-bg);\n  color: var(--form-text-primary);\n  padding: 15px;\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n  overflow-x: auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  font-size: 1rem;\n  color: var(--form-text-primary);\n}\n.form-test-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  background-color: var(--form-success-color);\n  border-radius: 50%;\n  margin-right: 10px;\n}\n@media (max-width: 768px) {\n  .form-test-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-test-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .form-test-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .form-test-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=form-test.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormTestComponent, [{
    type: Component,
    args: [{ selector: "app-form-test", standalone: false, template: `<div class="form-test-container" [class.dark-theme]="isDarkMode" [class.light-theme]="!isDarkMode">
  <div class="header-section">
    <div>
      <h1>\u{1F3A8} Dynamic Form Module \uD14C\uC2A4\uD2B8</h1>
      <p class="subtitle">loworld_ai Form Module \uB370\uBAA8 \uD398\uC774\uC9C0</p>
    </div>
    <div class="header-actions">
      <button mat-icon-button (click)="toggleTheme()" [matTooltip]="isDarkMode ? '\uB77C\uC774\uD2B8 \uBAA8\uB4DC' : '\uB2E4\uD06C \uBAA8\uB4DC'">
        <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
      <button mat-icon-button color="accent" routerLink="/form/builder" matTooltip="\uD3FC \uBE4C\uB354\uB85C \uC774\uB3D9">
        <mat-icon>build</mat-icon>
      </button>
      <div style="flex: 1;"></div>
      <button mat-icon-button color="primary" (click)="logout()" matTooltip="\uB85C\uADF8\uC544\uC6C3">
        <mat-icon>logout</mat-icon>
      </button>
    </div>
  </div>

  <!-- \uAE30\uBCF8 \uD3FC \uD14C\uC2A4\uD2B8 -->
  <mat-card class="form-section">
    <mat-card-header>
      <mat-card-title>1. \uAE30\uBCF8 \uD3FC (Input, Radio, Textarea)</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <app-dynamic-form 
        [formData]="basicFormData" 
        (enter)="onBasicFormSubmit($event)">
      </app-dynamic-form>
      
      <div class="submit-button">
        <button mat-raised-button color="primary" (click)="onBasicFormSubmit({value: basicFormData})">
          \uC81C\uCD9C
        </button>
      </div>

      @if (basicFormResult) {
        <div class="result-box">
          <h4>\uC81C\uCD9C \uACB0\uACFC:</h4>
          <pre>{{ basicFormResult | json }}</pre>
        </div>
      }
    </mat-card-content>
  </mat-card>

  <!-- Select \uD3FC \uD14C\uC2A4\uD2B8 -->
  <mat-card class="form-section">
    <mat-card-header>
      <mat-card-title>2. Select (\uC790\uB3D9\uC644\uC131 \uB4DC\uB86D\uB2E4\uC6B4)</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <app-dynamic-form 
        [formData]="selectFormData" 
        (enter)="onSelectFormSubmit($event)">
      </app-dynamic-form>
      
      <div class="submit-button">
        <button mat-raised-button color="primary" (click)="onSelectFormSubmit({value: selectFormData})">
          \uC81C\uCD9C
        </button>
      </div>

      @if (selectFormResult) {
        <div class="result-box">
          <h4>\uC81C\uCD9C \uACB0\uACFC:</h4>
          <pre>{{ selectFormResult | json }}</pre>
        </div>
      }
    </mat-card-content>
  </mat-card>

  <!-- DatePicker \uD3FC \uD14C\uC2A4\uD2B8 -->
  <mat-card class="form-section">
    <mat-card-header>
      <mat-card-title>3. DatePicker (\uB0A0\uC9DC \uBC94\uC704 \uC120\uD0DD)</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <app-dynamic-form 
        [formData]="dateFormData" 
        (enter)="onDateFormSubmit($event)">
      </app-dynamic-form>
      
      <div class="submit-button">
        <button mat-raised-button color="primary" (click)="onDateFormSubmit({value: dateFormData})">
          \uC81C\uCD9C
        </button>
      </div>

      @if (dateFormResult) {
        <div class="result-box">
          <h4>\uC81C\uCD9C \uACB0\uACFC:</h4>
          <pre>{{ dateFormResult | json }}</pre>
        </div>
      }
    </mat-card-content>
  </mat-card>

  <!-- \uC885\uD569 \uD3FC \uD14C\uC2A4\uD2B8 -->
  <mat-card class="form-section">
    <mat-card-header>
      <mat-card-title>4. \uC885\uD569 \uD3FC (\uBAA8\uB4E0 \uD0C0\uC785)</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <app-dynamic-form 
        [formData]="comprehensiveFormData" 
        (enter)="onComprehensiveFormSubmit($event)">
      </app-dynamic-form>
      
      <div class="submit-button">
        <button mat-raised-button color="primary" (click)="onComprehensiveFormSubmit({value: comprehensiveFormData})">
          \uC81C\uCD9C
        </button>
      </div>

      @if (comprehensiveFormResult) {
        <div class="result-box">
          <h4>\uC81C\uCD9C \uACB0\uACFC:</h4>
          <pre>{{ comprehensiveFormResult | json }}</pre>
        </div>
      }
    </mat-card-content>
  </mat-card>

  <!-- \uC0AC\uC6A9 \uAC00\uC774\uB4DC -->
  <mat-card class="info-section">
    <mat-card-header>
      <mat-card-title>\u{1F4DA} \uC0AC\uC6A9 \uBC29\uBC95</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <h3>1. \uBAA8\uB4C8 Import</h3>
      <pre><code>import &#123; FormModule &#125; from './modules/form/form.module';

&#64;NgModule(&#123;
  imports: [FormModule]
&#125;)</code></pre>

      <h3>2. \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC0AC\uC6A9</h3>
      <pre><code>import &#123; IForm &#125; from './modules/form/classes/interfaces/form.interface';

formData: IForm = &#123;
  controls: [
    &#123;
      label: '\uC774\uB984',
      category: 'input',
      type: 'text',
      name: 'name',
      value: '',
      placeholder: '\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694',
      validations: [
        &#123; name: 'required', validator: 'required', message: '\uD544\uC218\uC785\uB2C8\uB2E4' &#125;
      ]
    &#125;
  ]
&#125;;</code></pre>

      <h3>3. \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC0AC\uC6A9</h3>
      <pre><code>&lt;app-dynamic-form 
  [formData]="formData" 
  (enter)="onSubmit($event)"&gt;
&lt;/app-dynamic-form&gt;</code></pre>

      <div class="feature-list">
        <h3>\u2728 \uC9C0\uC6D0 \uAE30\uB2A5</h3>
        <ul>
          <li>\u2705 Input (text, email, number, password)</li>
          <li>\u2705 Textarea (\uC5EC\uB7EC \uC904 \uD14D\uC2A4\uD2B8)</li>
          <li>\u2705 Select (\uC790\uB3D9\uC644\uC131 \uB4DC\uB86D\uB2E4\uC6B4, \uADF8\uB8F9\uD551 \uC9C0\uC6D0)</li>
          <li>\u2705 RadioButton (\uB77C\uB514\uC624 \uBC84\uD2BC \uC120\uD0DD)</li>
          <li>\u2705 DatePicker (\uB0A0\uC9DC \uBC94\uC704 \uC120\uD0DD)</li>
          <li>\u2705 \uC790\uB3D9 \uAC80\uC99D (Validation)</li>
          <li>\u2705 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 \uD45C\uC2DC</li>
          <li>\u2705 Material Design UI</li>
        </ul>
      </div>
    </mat-card-content>
  </mat-card>
</div>
`, styles: ['/* src/app/modules/form/pages/form-test/form-test.component.scss */\n.form-test-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  min-height: 100vh;\n  background-color: #fff8f0;\n}\n.form-test-container.light-theme {\n  background-color: var(--form-bg-secondary);\n}\n.form-test-container.dark-theme {\n  background-color: var(--form-bg-secondary);\n}\n.form-test-container .header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .form-test-container .header-section {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form-test-container .header-actions button mat-icon {\n  margin-right: 8px;\n}\n.form-test-container h1 {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n.form-test-container .light-theme h1 {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.form-test-container .dark-theme h1 {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.form-test-container .subtitle {\n  font-size: 1.2rem;\n  margin-bottom: 0;\n}\n.form-test-container .light-theme .subtitle {\n  color: #78716c;\n}\n.form-test-container .dark-theme .subtitle {\n  color: #cbd5e1;\n}\n.form-test-container .form-section {\n  margin-bottom: 30px;\n  padding: 20px;\n  background-color: var(--form-bg-primary);\n  border: 1px solid var(--form-border-color);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px var(--form-shadow);\n  transition: all 0.3s ease;\n}\n.form-test-container .form-section:hover {\n  box-shadow: 0 4px 16px var(--form-shadow);\n}\n.form-test-container .form-section mat-card-header {\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--form-border-color);\n  padding-bottom: 10px;\n}\n.form-test-container .form-section mat-card-title {\n  font-size: 1.5rem;\n  color: var(--form-text-primary);\n  font-weight: 600;\n}\n.form-test-container .submit-button {\n  margin-top: 20px;\n  text-align: right;\n}\n.form-test-container .submit-button button {\n  min-width: 120px;\n}\n.form-test-container .result-box {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: var(--form-success-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--form-success-color);\n}\n.form-test-container .result-box h4 {\n  margin: 0 0 10px 0;\n  color: var(--form-success-color);\n}\n.form-test-container .result-box pre {\n  margin: 0;\n  padding: 10px;\n  background-color: var(--form-field-bg);\n  border-radius: 4px;\n  overflow-x: auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: var(--form-text-primary);\n  font-family: "Courier New", monospace;\n}\n.form-test-container .info-section {\n  background-color: var(--form-bg-tertiary);\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n}\n.form-test-container .info-section h3 {\n  color: var(--form-primary-color);\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n}\n.form-test-container .info-section h3:first-child {\n  margin-top: 0;\n}\n.form-test-container .info-section pre {\n  background-color: var(--form-field-bg);\n  color: var(--form-text-primary);\n  padding: 15px;\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n  overflow-x: auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.form-test-container .info-section pre code {\n  font-family:\n    "Consolas",\n    "Monaco",\n    "Courier New",\n    monospace;\n}\n.form-test-container .info-section .feature-list {\n  margin-top: 20px;\n}\n.form-test-container .info-section .feature-list ul {\n  list-style: none;\n  padding: 0;\n}\n.form-test-container .info-section .feature-list ul li {\n  padding: 8px 0;\n  font-size: 1rem;\n  color: var(--form-text-primary);\n}\n.form-test-container .info-section .feature-list ul li::before {\n  content: "";\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  background-color: var(--form-success-color);\n  border-radius: 50%;\n  margin-right: 10px;\n}\n@media (max-width: 768px) {\n  .form-test-container {\n    padding: 10px;\n  }\n  .form-test-container h1 {\n    font-size: 2rem;\n  }\n  .form-test-container .subtitle {\n    font-size: 1rem;\n  }\n  .form-test-container .form-section {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=form-test.component.css.map */\n'] }]
  }], () => [{ type: ThemeService }, { type: FormAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormTestComponent, { className: "FormTestComponent", filePath: "src/app/modules/form/pages/form-test/form-test.component.ts", lineNumber: 14 });
})();

// src/app/modules/form/pages/dynamic-form-builder/dynamic-form-builder.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.name;
function DynamicFormBuilderComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function DynamicFormBuilderComponent_For_37_Template_button_click_0_listener() {
      const fieldType_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addField(fieldType_r4.value));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fieldType_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(fieldType_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fieldType_r4.label);
  }
}
function DynamicFormBuilderComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon");
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\uC67C\uCABD\uC5D0\uC11C \uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uC5EC \uD3FC\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694");
    \u0275\u0275elementEnd()();
  }
}
function DynamicFormBuilderComponent_Conditional_49_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " text_fields ");
  }
}
function DynamicFormBuilderComponent_Conditional_49_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " subject ");
  }
}
function DynamicFormBuilderComponent_Conditional_49_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " arrow_drop_down_circle ");
  }
}
function DynamicFormBuilderComponent_Conditional_49_For_2_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " radio_button_checked ");
  }
}
function DynamicFormBuilderComponent_Conditional_49_For_2_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " date_range ");
  }
}
function DynamicFormBuilderComponent_Conditional_49_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 31)(2, "mat-icon", 32);
    \u0275\u0275conditionalCreate(3, DynamicFormBuilderComponent_Conditional_49_For_2_Case_3_Template, 1, 0)(4, DynamicFormBuilderComponent_Conditional_49_For_2_Case_4_Template, 1, 0)(5, DynamicFormBuilderComponent_Conditional_49_For_2_Case_5_Template, 1, 0)(6, DynamicFormBuilderComponent_Conditional_49_For_2_Case_6_Template, 1, 0)(7, DynamicFormBuilderComponent_Conditional_49_For_2_Case_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 34)(14, "button", 35);
    \u0275\u0275listener("click", function DynamicFormBuilderComponent_Conditional_49_For_2_Template_button_click_14_listener() {
      const \u0275$index_102_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.moveUp(\u0275$index_102_r8));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "arrow_upward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function DynamicFormBuilderComponent_Conditional_49_For_2_Template_button_click_17_listener() {
      const \u0275$index_102_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.moveDown(\u0275$index_102_r8));
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "arrow_downward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 36);
    \u0275\u0275listener("click", function DynamicFormBuilderComponent_Conditional_49_For_2_Template_button_click_20_listener() {
      const \u0275$index_102_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeField(\u0275$index_102_r8));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const control_r9 = ctx.$implicit;
    const \u0275$index_102_r8 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_13_0 = control_r9.category) === "input" ? 3 : tmp_13_0 === "textarea" ? 4 : tmp_13_0 === "select" ? 5 : tmp_13_0 === "radio-button" ? 6 : tmp_13_0 === "datepicker" ? 7 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(control_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", control_r9.name, " (", control_r9.category, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275$index_102_r8 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", \u0275$index_102_r8 === ctx_r4.formData.controls.length - 1);
  }
}
function DynamicFormBuilderComponent_Conditional_49_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "h4");
    \u0275\u0275text(2, "\uC81C\uCD9C \uACB0\uACFC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r4.formResult));
  }
}
function DynamicFormBuilderComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, DynamicFormBuilderComponent_Conditional_49_For_2_Template, 23, 6, "div", 25, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "h3");
    \u0275\u0275text(5, "\uD3FC \uBBF8\uB9AC\uBCF4\uAE30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-dynamic-form", 27);
    \u0275\u0275listener("enter", function DynamicFormBuilderComponent_Conditional_49_Template_app_dynamic_form_enter_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFormSubmit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 28)(8, "button", 29);
    \u0275\u0275listener("click", function DynamicFormBuilderComponent_Conditional_49_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFormSubmit({ value: ctx_r4.formData }));
    });
    \u0275\u0275text(9, " \uC81C\uCD9C \uD14C\uC2A4\uD2B8 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, DynamicFormBuilderComponent_Conditional_49_Conditional_10_Template, 6, 3, "div", 30);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.formData.controls);
    \u0275\u0275advance(5);
    \u0275\u0275property("formData", ctx_r4.formData);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r4.formResult ? 10 : -1);
  }
}
function DynamicFormBuilderComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2, "\uD3FC \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd()();
  }
}
function DynamicFormBuilderComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "p")(5, "strong");
    \u0275\u0275text(6, "\uCD1D \uD544\uB4DC \uC218:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "\uC774 JSON\uC744 \uBCF5\uC0AC\uD558\uC5EC \uC2E4\uC81C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r4.formData));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r4.formData.controls.length);
  }
}
var DynamicFormBuilderComponent = class _DynamicFormBuilderComponent {
  themeService;
  formAuthService;
  router;
  isDarkMode = false;
  themeSubscription;
  formData = {
    controls: []
  };
  // 제출된 데이터
  formResult = null;
  constructor(themeService, formAuthService, router) {
    this.themeService = themeService;
    this.formAuthService = formAuthService;
    this.router = router;
  }
  ngOnInit() {
    this.themeSubscription = this.themeService.currentTheme$.subscribe((theme) => {
      this.isDarkMode = theme === "dark";
    });
  }
  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  logout() {
    this.formAuthService.formLogout();
    this.router.navigate(["/form/login"]);
  }
  // 사용 가능한 폼 타입
  availableTypes = [
    { value: "input-text", label: "Text Input", icon: "text_fields" },
    { value: "input-email", label: "Email Input", icon: "email" },
    { value: "input-number", label: "Number Input", icon: "pin" },
    { value: "input-password", label: "Password Input", icon: "lock" },
    { value: "textarea", label: "Textarea", icon: "subject" },
    { value: "select", label: "Select Dropdown", icon: "arrow_drop_down_circle" },
    { value: "radio-button", label: "Radio Button", icon: "radio_button_checked" },
    { value: "datepicker", label: "Date Picker", icon: "date_range" }
  ];
  /**
   * 새로운 폼 필드 추가
   */
  addField(type) {
    let newControl;
    switch (type) {
      case "input-text":
        newControl = {
          label: "\uC0C8 \uD14D\uC2A4\uD2B8 \uD544\uB4DC",
          category: "input",
          type: "text",
          name: `field_${Date.now()}`,
          value: "",
          placeholder: "\uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694",
          validations: []
        };
        break;
      case "input-email":
        newControl = {
          label: "\uC774\uBA54\uC77C",
          category: "input",
          type: "email",
          name: `email_${Date.now()}`,
          value: "",
          placeholder: "example@email.com",
          validations: [
            { name: "required", validator: "required", message: "\uC774\uBA54\uC77C\uC740 \uD544\uC218\uC785\uB2C8\uB2E4" }
          ]
        };
        break;
      case "input-number":
        newControl = {
          label: "\uC22B\uC790",
          category: "input",
          type: "number",
          name: `number_${Date.now()}`,
          value: "",
          placeholder: "\uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694",
          validations: []
        };
        break;
      case "input-password":
        newControl = {
          label: "\uBE44\uBC00\uBC88\uD638",
          category: "input",
          type: "password",
          name: `password_${Date.now()}`,
          value: "",
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
          validations: [
            { name: "required", validator: "required", message: "\uBE44\uBC00\uBC88\uD638\uB294 \uD544\uC218\uC785\uB2C8\uB2E4" }
          ]
        };
        break;
      case "textarea":
        newControl = {
          label: "\uC124\uBA85",
          category: "textarea",
          type: "text",
          name: `textarea_${Date.now()}`,
          value: "",
          placeholder: "\uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694",
          validations: []
        };
        break;
      case "select":
        newControl = {
          label: "\uC120\uD0DD",
          category: "select",
          type: "text",
          name: `select_${Date.now()}`,
          value: "",
          placeholder: "\uC635\uC158\uC744 \uC120\uD0DD\uD558\uC138\uC694",
          validations: [],
          group: [
            {
              main: "\uC635\uC158",
              sub: ["\uC635\uC158 1", "\uC635\uC158 2", "\uC635\uC158 3"]
            }
          ]
        };
        break;
      case "radio-button":
        newControl = {
          label: "\uC120\uD0DD",
          category: "radio-button",
          type: "radio",
          name: `radio_${Date.now()}`,
          value: "",
          placeholder: "",
          validations: [],
          group: [
            { main: "option1", sub: ["\uC635\uC158 1"] },
            { main: "option2", sub: ["\uC635\uC158 2"] }
          ]
        };
        break;
      case "datepicker":
        newControl = {
          label: "\uAE30\uAC04",
          category: "datepicker",
          type: "string",
          name: `datepicker_${Date.now()}`,
          value: "",
          placeholder: "MM/DD/YYYY",
          validations: [],
          controls: [
            {
              label: "\uC2DC\uC791\uC77C",
              category: "datepicker",
              type: "string",
              name: "start_date",
              value: "",
              placeholder: "\uC2DC\uC791\uC77C",
              validations: []
            },
            {
              label: "\uC885\uB8CC\uC77C",
              category: "datepicker",
              type: "string",
              name: "end_date",
              value: "",
              placeholder: "\uC885\uB8CC\uC77C",
              validations: []
            }
          ]
        };
        break;
      default:
        return;
    }
    this.formData.controls.push(newControl);
  }
  /**
   * 필드 제거
   */
  removeField(index) {
    this.formData.controls.splice(index, 1);
  }
  /**
   * 필드 위로 이동
   */
  moveUp(index) {
    if (index > 0) {
      const temp = this.formData.controls[index];
      this.formData.controls[index] = this.formData.controls[index - 1];
      this.formData.controls[index - 1] = temp;
    }
  }
  /**
   * 필드 아래로 이동
   */
  moveDown(index) {
    if (index < this.formData.controls.length - 1) {
      const temp = this.formData.controls[index];
      this.formData.controls[index] = this.formData.controls[index + 1];
      this.formData.controls[index + 1] = temp;
    }
  }
  /**
   * 폼 초기화
   */
  clearForm() {
    this.formData.controls = [];
    this.formResult = null;
  }
  /**
   * 폼 제출
   */
  onFormSubmit(event) {
    this.formResult = event.value;
  }
  /**
   * 폼 JSON 내보내기
   */
  exportForm() {
    const json = JSON.stringify(this.formData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-config.json";
    a.click();
    window.URL.revokeObjectURL(url);
  }
  /**
   * 폼 JSON 가져오기
   */
  importForm(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          this.formData = JSON.parse(e.target.result);
        } catch (error) {
        }
      };
      reader.readAsText(file);
    }
  }
  static \u0275fac = function DynamicFormBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicFormBuilderComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(FormAuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicFormBuilderComponent, selectors: [["app-dynamic-form-builder"]], standalone: false, decls: 57, vars: 8, consts: [["fileInput", ""], [1, "form-builder-container"], [1, "builder-header"], [1, "header-title"], [1, "subtitle"], [1, "header-actions"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-icon-button", "", "routerLink", "/form/test", "matTooltip", "\uD14C\uC2A4\uD2B8 \uD398\uC774\uC9C0"], ["mat-icon-button", "", "color", "warn", "matTooltip", "\uC804\uCCB4 \uC0AD\uC81C", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "JSON \uB0B4\uBCF4\uB0B4\uAE30", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "JSON \uAC00\uC838\uC624\uAE30", 3, "click"], [2, "flex", "1"], ["mat-icon-button", "", "color", "primary", "matTooltip", "\uB85C\uADF8\uC544\uC6C3", 3, "click"], ["type", "file", "accept", ".json", 2, "display", "none", 3, "change"], [1, "builder-content"], [1, "field-types-panel"], [1, "field-type-grid"], ["mat-raised-button", "", 1, "field-type-button"], [1, "info-box"], [1, "form-preview-panel"], [1, "empty-state"], [1, "json-panel"], ["mat-raised-button", "", 1, "field-type-button", 3, "click"], [1, "icon-wrapper"], [1, "field-list"], [1, "field-item"], [1, "form-preview"], [3, "enter", "formData"], [1, "submit-button"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "result-box"], [1, "field-info"], [1, "field-icon"], [1, "field-details"], [1, "field-actions"], ["mat-icon-button", "", 3, "click", "disabled"], ["mat-icon-button", "", "color", "warn", 3, "click"], [1, "json-code"], [1, "json-info"]], template: function DynamicFormBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1");
      \u0275\u0275text(4, "\u{1F6E0}\uFE0F Dynamic Form Builder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "\uD3FC \uD544\uB4DC\uB97C \uCD94\uAC00/\uC81C\uAC70\uD558\uC5EC \uB3D9\uC801\uC73C\uB85C \uD3FC\uC744 \uAD6C\uC131\uD558\uC138\uC694");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function DynamicFormBuilderComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 7)(12, "mat-icon");
      \u0275\u0275text(13, "science");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function DynamicFormBuilderComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearForm());
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "delete_sweep");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function DynamicFormBuilderComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportForm());
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "download");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 10);
      \u0275\u0275listener("click", function DynamicFormBuilderComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(28);
        return \u0275\u0275resetView(fileInput_r2.click());
      });
      \u0275\u0275elementStart(21, "mat-icon");
      \u0275\u0275text(22, "upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "div", 11);
      \u0275\u0275elementStart(24, "button", 12);
      \u0275\u0275listener("click", function DynamicFormBuilderComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(25, "mat-icon");
      \u0275\u0275text(26, "logout");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "input", 13, 0);
      \u0275\u0275listener("change", function DynamicFormBuilderComponent_Template_input_change_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.importForm($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 14)(30, "mat-card", 15)(31, "mat-card-header")(32, "mat-card-title");
      \u0275\u0275text(33, "\u{1F4CB} \uD544\uB4DC \uD0C0\uC785");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "mat-card-content")(35, "div", 16);
      \u0275\u0275repeaterCreate(36, DynamicFormBuilderComponent_For_37_Template, 6, 2, "button", 17, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 18)(39, "mat-icon");
      \u0275\u0275text(40, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "\uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uD3FC\uC5D0 \uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uC138\uC694");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "mat-card", 19)(44, "mat-card-header")(45, "mat-card-title");
      \u0275\u0275text(46, "\u{1F441}\uFE0F \uD3FC \uBBF8\uB9AC\uBCF4\uAE30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "mat-card-content");
      \u0275\u0275conditionalCreate(48, DynamicFormBuilderComponent_Conditional_48_Template, 5, 0, "div", 20)(49, DynamicFormBuilderComponent_Conditional_49_Template, 11, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "mat-card", 21)(51, "mat-card-header")(52, "mat-card-title");
      \u0275\u0275text(53, "\u{1F4C4} \uD3FC JSON");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "mat-card-content");
      \u0275\u0275conditionalCreate(55, DynamicFormBuilderComponent_Conditional_55_Template, 3, 0, "div", 20)(56, DynamicFormBuilderComponent_Conditional_56_Template, 10, 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("dark-theme", ctx.isDarkMode)("light-theme", !ctx.isDarkMode);
      \u0275\u0275advance(8);
      \u0275\u0275property("matTooltip", ctx.isDarkMode ? "\uB77C\uC774\uD2B8 \uBAA8\uB4DC" : "\uB2E4\uD06C \uBAA8\uB4DC");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isDarkMode ? "light_mode" : "dark_mode");
      \u0275\u0275advance(26);
      \u0275\u0275repeater(ctx.availableTypes);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.formData.controls.length === 0 ? 48 : 49);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.formData.controls.length === 0 ? 55 : 56);
    }
  }, dependencies: [MatButton, MatIconButton, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIcon, MatTooltip, RouterLink, DynamicFormComponent, JsonPipe], styles: ['\n\n.form-builder-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  background-color: #fff8f0;\n}\n.form-builder-container.light-theme[_ngcontent-%COMP%] {\n  background-color: var(--form-bg-secondary);\n}\n.form-builder-container.dark-theme[_ngcontent-%COMP%] {\n  background-color: var(--form-bg-secondary);\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 24px;\n  border-radius: 16px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%);\n  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);\n}\n@media (max-width: 1024px) {\n  .form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 10px 0;\n  font-weight: 700;\n  color: white !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9) !important;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n  color: white !important;\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3) !important;\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: white !important;\n}\n.form-builder-container.dark-theme[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%) !important;\n  box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr 350px;\n  gap: 20px;\n  margin-bottom: 30px;\n  height: calc(100vh - 250px);\n  min-height: 600px;\n}\n@media (max-width: 1400px) {\n  .form-builder-container[_ngcontent-%COMP%]   .builder-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-content[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.form-builder-container[_ngcontent-%COMP%]   .builder-content[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  padding-right: 8px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff8f0;\n  border-radius: 10px;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1e293b;\n  border-radius: 10px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  transition: background 0.2s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #fed7aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #475569;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #10b981;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-transform: none;\n  cursor: pointer;\n  border: none;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--icon-color-1),\n      var(--icon-color-2));\n  transform: scaleX(0);\n  transform-origin: left center;\n  transition: transform 0.3s ease;\n  z-index: 2;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-3deg);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.2);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px) scale(0.98);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  padding: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--icon-color-1),\n      var(--icon-color-2));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  z-index: 1;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n  color: #292524;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1)   mat-icon[_ngcontent-%COMP%] {\n  color: #ff6b35;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(1)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(2) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(2) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(2)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #cffafe 0%,\n      #a5f3fc 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(2)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(2)   mat-icon[_ngcontent-%COMP%] {\n  color: #0891b2;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(2)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(3) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(3) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(3)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe 0%,\n      #ddd6fe 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(3)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(3)   mat-icon[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(3)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(4) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(4) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(4)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(4)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(4)   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(4)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(5) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(5) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(5)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(5)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(5)   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(5)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(6) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(6) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(6)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ccfbf1 0%,\n      #99f6e4 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(6)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(6)   mat-icon[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(6)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(7) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(7) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(7)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(7)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(7)   mat-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(7)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(8) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(8) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(8)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(8)   .icon-wrapper[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(8)   mat-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:nth-child(8)   mat-icon[_ngcontent-%COMP%] {\n  color: #00d4aa;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f1f5f9 !important;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%]   .field-type-button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 212, 170, 0.3) !important;\n}\n@media (max-width: 768px) {\n  .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .field-type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  border: 2px solid #f97316;\n  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.15);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border: 2px solid #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  opacity: 0.05;\n  transform: rotate(45deg);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #ff6b35,\n      transparent);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #00d4aa,\n      transparent);\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  z-index: 1;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  font-weight: 500;\n  z-index: 1;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .field-types-panel[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  padding-right: 8px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar, \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff8f0;\n  border-radius: 10px;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1e293b;\n  border-radius: 10px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  transition: background 0.2s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #fed7aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #475569;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #10b981;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--form-text-tertiary);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  margin-bottom: 20px;\n  color: var(--form-text-tertiary);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px;\n  margin-bottom: 16px;\n  border-radius: 16px;\n  border: 1px solid;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: move;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]::before, \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  transform: scaleX(0);\n  transform-origin: left center;\n  transition: transform 0.3s ease;\n  z-index: 1;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border-color: #fed7aa;\n  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.1);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]::before, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #e65100 0%,\n      #ff6b35 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.2);\n  border-color: #ff6b35;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover::before, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:active, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #1e293b);\n  border-color: #475569;\n  box-shadow: 0 2px 8px rgba(0, 212, 170, 0.15);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]::before, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #00d4aa 0%,\n      #00b894 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 212, 170, 0.3);\n  border-color: #10b981;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover::before, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:active, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n  padding-left: 0;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  padding: 8px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n  color: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #475569 100%);\n  color: #10b981;\n}\n.light-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.8;\n  line-height: 1.4;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-info[_ngcontent-%COMP%]   .field-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  opacity: 0.7;\n  transition: opacity 0.3s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]:hover   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  padding: 0;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.1);\n  color: #f97316;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f97316;\n  color: white;\n  transform: scale(1.1);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, \n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #10b981;\n  color: white;\n  transform: scale(1.1);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, \n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]   .field-item[_ngcontent-%COMP%]   .field-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .form-preview[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .form-preview[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: var(--form-bg-tertiary);\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .form-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .form-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 20px;\n  color: var(--form-text-primary);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: var(--form-success-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--form-success-color);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  color: var(--form-success-color);\n}\n.form-builder-container[_ngcontent-%COMP%]   .form-preview-panel[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px;\n  background-color: var(--form-field-bg);\n  border-radius: 4px;\n  overflow-x: auto;\n  font-size: 0.9rem;\n  color: var(--form-text-primary);\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff8f0;\n  border-radius: 10px;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1e293b;\n  border-radius: 10px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  transition: background 0.2s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #fed7aa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #475569;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #10b981;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 20px;\n  border-radius: 12px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  color: #a8a29e;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #94a3b8;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 12px;\n  border: 2px solid;\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 400px;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin-bottom: 16px;\n  font-family: "Courier New", monospace;\n  position: relative;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #ffedd5;\n  border-radius: 10px;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #0f172a;\n  border-radius: 10px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f97316;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ea580c;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #10b981;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #059669;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fff8f0 100%);\n  border-color: #fed7aa;\n  color: #292524;\n  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.1);\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #f97316 0%,\n      #fb8500 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  border-color: #475569;\n  color: #f1f5f9;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-code[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #10b981 0%,\n      #14b8a6 100%);\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-radius: 12px;\n  border: 2px solid;\n  position: relative;\n  overflow: hidden;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  border-color: #f97316;\n  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.15);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border-color: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%]::before {\n  content: "{}";\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  font-size: 120px;\n  opacity: 0.05;\n  font-family: "Courier New", monospace;\n  font-weight: bold;\n}\n.form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 0.95rem;\n  font-weight: 500;\n  z-index: 1;\n  position: relative;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-weight: 700;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .json-panel[_ngcontent-%COMP%]   .json-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n  font-weight: 700;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 2px solid;\n  padding: 0;\n  overflow: hidden;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  border-color: #fed7aa;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border-color: #475569;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 0;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 20px;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 2px solid #fed7aa;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 2px solid #475569;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:hover {\n  background: rgba(249, 115, 22, 0.05);\n  transform: translateY(-5px);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.1);\n  transform: translateY(-5px);\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n  color: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #475569 100%);\n  color: #10b981;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #292524;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(1)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  color: #dc2626;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(1)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #450a0a 0%,\n      #7f1d1d 100%);\n  color: #ef4444;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(2)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(2)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #1e40af 100%);\n  color: #60a5fa;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(3)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #ca8a04;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(3)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #713f12 0%,\n      #854d0e 100%);\n  color: #fbbf24;\n}\n.light-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(4)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16a34a;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]:nth-child(4)   mat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #14532d 0%,\n      #166534 100%);\n  color: #4ade80;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%] {\n  background-color: var(--form-bg-tertiary);\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--form-primary-color);\n  margin-bottom: 10px;\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: var(--form-text-primary);\n}\n.form-builder-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   .guide-grid[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--form-text-secondary);\n}\n@media (max-width: 768px) {\n  .form-builder-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .form-builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .form-builder-container[_ngcontent-%COMP%]   .builder-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n  .form-builder-container mat-card mat-card-header {\n  all: unset !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  width: 100% !important;\n  height: 64px !important;\n  padding: 0 20px !important;\n  margin: -16px -16px 16px -16px !important;\n  border-radius: 12px 12px 0 0 !important;\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%) !important;\n  box-sizing: border-box !important;\n}\n  .form-builder-container mat-card mat-card-header * {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n  .form-builder-container mat-card mat-card-header .mat-mdc-card-header-text {\n  all: unset !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  flex: 1 !important;\n}\n  .form-builder-container mat-card mat-card-header mat-card-title {\n  all: unset !important;\n  color: white !important;\n  font-weight: 600 !important;\n  font-size: 18px !important;\n  font-family: inherit !important;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  line-height: normal !important;\n}\n  .form-builder-container.dark-theme mat-card mat-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%) !important;\n}\n/*# sourceMappingURL=dynamic-form-builder.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFormBuilderComponent, [{
    type: Component,
    args: [{ selector: "app-dynamic-form-builder", standalone: false, template: `<div class="form-builder-container" [class.dark-theme]="isDarkMode" [class.light-theme]="!isDarkMode">
  <div class="builder-header">
    <div class="header-title">
      <h1>\u{1F6E0}\uFE0F Dynamic Form Builder</h1>
      <p class="subtitle">\uD3FC \uD544\uB4DC\uB97C \uCD94\uAC00/\uC81C\uAC70\uD558\uC5EC \uB3D9\uC801\uC73C\uB85C \uD3FC\uC744 \uAD6C\uC131\uD558\uC138\uC694</p>
    </div>
    
    <div class="header-actions">
      <button mat-icon-button (click)="toggleTheme()" [matTooltip]="isDarkMode ? '\uB77C\uC774\uD2B8 \uBAA8\uB4DC' : '\uB2E4\uD06C \uBAA8\uB4DC'">
        <mat-icon>{{ isDarkMode ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
      <button mat-icon-button routerLink="/form/test" matTooltip="\uD14C\uC2A4\uD2B8 \uD398\uC774\uC9C0">
        <mat-icon>science</mat-icon>
      </button>
      <button mat-icon-button color="warn" (click)="clearForm()" matTooltip="\uC804\uCCB4 \uC0AD\uC81C">
        <mat-icon>delete_sweep</mat-icon>
      </button>
      <button mat-icon-button color="accent" (click)="exportForm()" matTooltip="JSON \uB0B4\uBCF4\uB0B4\uAE30">
        <mat-icon>download</mat-icon>
      </button>
      <button mat-icon-button color="accent" (click)="fileInput.click()" matTooltip="JSON \uAC00\uC838\uC624\uAE30">
        <mat-icon>upload</mat-icon>
      </button>
      <div style="flex: 1;"></div>
      <button mat-icon-button color="primary" (click)="logout()" matTooltip="\uB85C\uADF8\uC544\uC6C3">
        <mat-icon>logout</mat-icon>
      </button>
    </div>
    <input #fileInput type="file" accept=".json" (change)="importForm($event)" style="display: none;">
  </div>

  <div class="builder-content">
    <!-- \uC67C\uCABD: \uD544\uB4DC \uD0C0\uC785 \uC120\uD0DD -->
    <mat-card class="field-types-panel">
      <mat-card-header>
        <mat-card-title>\u{1F4CB} \uD544\uB4DC \uD0C0\uC785</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="field-type-grid">
          @for (fieldType of availableTypes; track fieldType.value) {
            <button mat-raised-button 
                    class="field-type-button"
                    (click)="addField(fieldType.value)">
              <div class="icon-wrapper">
                <mat-icon>{{ fieldType.icon }}</mat-icon>
              </div>
              <span>{{ fieldType.label }}</span>
            </button>
          }
        </div>

        <div class="info-box">
          <mat-icon>info</mat-icon>
          <p>\uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uD3FC\uC5D0 \uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uC138\uC694</p>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- \uC911\uC559: \uD3FC \uBBF8\uB9AC\uBCF4\uAE30 -->
    <mat-card class="form-preview-panel">
      <mat-card-header>
        <mat-card-title>\u{1F441}\uFE0F \uD3FC \uBBF8\uB9AC\uBCF4\uAE30</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        @if (formData.controls.length === 0) {
          <div class="empty-state">
            <mat-icon>add_circle_outline</mat-icon>
            <p>\uC67C\uCABD\uC5D0\uC11C \uD544\uB4DC\uB97C \uCD94\uAC00\uD558\uC5EC \uD3FC\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694</p>
          </div>
        } @else {
          <!-- \uD544\uB4DC \uBAA9\uB85D -->
          <div class="field-list">
            @for (control of formData.controls; track control.name; let i = $index) {
              <div class="field-item">
                <div class="field-info">
                  <mat-icon class="field-icon">
                    @switch (control.category) {
                      @case ('input') { text_fields }
                      @case ('textarea') { subject }
                      @case ('select') { arrow_drop_down_circle }
                      @case ('radio-button') { radio_button_checked }
                      @case ('datepicker') { date_range }
                    }
                  </mat-icon>
                  <div class="field-details">
                    <strong>{{ control.label }}</strong>
                    <small>{{ control.name }} ({{ control.category }})</small>
                  </div>
                </div>
                
                <div class="field-actions">
                  <button mat-icon-button (click)="moveUp(i)" [disabled]="i === 0">
                    <mat-icon>arrow_upward</mat-icon>
                  </button>
                  <button mat-icon-button (click)="moveDown(i)" 
                          [disabled]="i === formData.controls.length - 1">
                    <mat-icon>arrow_downward</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" (click)="removeField(i)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </div>
            }
          </div>

          <!-- \uC2E4\uC81C \uD3FC \uBBF8\uB9AC\uBCF4\uAE30 -->
          <div class="form-preview">
            <h3>\uD3FC \uBBF8\uB9AC\uBCF4\uAE30</h3>
            <app-dynamic-form 
              [formData]="formData" 
              (enter)="onFormSubmit($event)">
            </app-dynamic-form>

            <div class="submit-button">
              <button mat-raised-button color="primary" (click)="onFormSubmit({value: formData})">
                \uC81C\uCD9C \uD14C\uC2A4\uD2B8
              </button>
            </div>
          </div>

          <!-- \uACB0\uACFC \uD45C\uC2DC -->
          @if (formResult) {
            <div class="result-box">
              <h4>\uC81C\uCD9C \uACB0\uACFC:</h4>
              <pre>{{ formResult | json }}</pre>
            </div>
          }
        }
      </mat-card-content>
    </mat-card>

    <!-- \uC624\uB978\uCABD: \uD3FC JSON -->
    <mat-card class="json-panel">
      <mat-card-header>
        <mat-card-title>\u{1F4C4} \uD3FC JSON</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        @if (formData.controls.length === 0) {
          <div class="empty-state">
            <p>\uD3FC \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</p>
          </div>
        } @else {
          <pre class="json-code">{{ formData | json }}</pre>
          
          <div class="json-info">
            <p><strong>\uCD1D \uD544\uB4DC \uC218:</strong> {{ formData.controls.length }}</p>
            <p>\uC774 JSON\uC744 \uBCF5\uC0AC\uD558\uC5EC \uC2E4\uC81C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
          </div>
        }
      </mat-card-content>
    </mat-card>
  </div>
</div>
`, styles: ['/* src/app/modules/form/pages/dynamic-form-builder/dynamic-form-builder.component.scss */\n.form-builder-container {\n  max-width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  background-color: #fff8f0;\n}\n.form-builder-container.light-theme {\n  background-color: var(--form-bg-secondary);\n}\n.form-builder-container.dark-theme {\n  background-color: var(--form-bg-secondary);\n}\n.form-builder-container .builder-header {\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 24px;\n  border-radius: 16px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%);\n  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);\n}\n@media (max-width: 1024px) {\n  .form-builder-container .builder-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form-builder-container .builder-header .header-title {\n  flex: 1;\n}\n.form-builder-container .builder-header .header-title h1 {\n  font-size: 2.5rem;\n  margin: 0 0 10px 0;\n  font-weight: 700;\n  color: white !important;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.form-builder-container .builder-header .header-title .subtitle {\n  font-size: 1.2rem;\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9) !important;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.form-builder-container .builder-header .header-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.form-builder-container .builder-header .header-actions button {\n  background: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n  color: white !important;\n}\n.form-builder-container .builder-header .header-actions button:hover {\n  background: rgba(255, 255, 255, 0.3) !important;\n}\n.form-builder-container .builder-header .header-actions button mat-icon {\n  margin-right: 5px;\n  color: white !important;\n}\n.form-builder-container.dark-theme .builder-header {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%) !important;\n  box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);\n}\n.form-builder-container .builder-content {\n  display: grid;\n  grid-template-columns: 300px 1fr 350px;\n  gap: 20px;\n  margin-bottom: 30px;\n  height: calc(100vh - 250px);\n  min-height: 600px;\n}\n@media (max-width: 1400px) {\n  .form-builder-container .builder-content {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n}\n.form-builder-container .builder-content mat-card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.form-builder-container .builder-content mat-card mat-card-content {\n  flex: 1;\n  overflow-y: auto;\n}\n.form-builder-container .field-types-panel {\n  height: 100%;\n  overflow: hidden;\n  padding-right: 8px;\n}\n.form-builder-container .field-types-panel::-webkit-scrollbar {\n  width: 8px;\n}\n.light-theme .form-builder-container .field-types-panel::-webkit-scrollbar-track {\n  background: #fff8f0;\n  border-radius: 10px;\n}\n.dark-theme .form-builder-container .field-types-panel::-webkit-scrollbar-track {\n  background: #1e293b;\n  border-radius: 10px;\n}\n.form-builder-container .field-types-panel::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  transition: background 0.2s ease;\n}\n.light-theme .form-builder-container .field-types-panel::-webkit-scrollbar-thumb {\n  background: #fed7aa;\n}\n.light-theme .form-builder-container .field-types-panel::-webkit-scrollbar-thumb:hover {\n  background: #f97316;\n}\n.dark-theme .form-builder-container .field-types-panel::-webkit-scrollbar-thumb {\n  background: #475569;\n}\n.dark-theme .form-builder-container .field-types-panel::-webkit-scrollbar-thumb:hover {\n  background: #10b981;\n}\n.form-builder-container .field-types-panel .field-type-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button {\n  width: 100%;\n  min-height: 100px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-transform: none;\n  cursor: pointer;\n  border: none;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--icon-color-1),\n      var(--icon-color-2));\n  transform: scaleX(0);\n  transform-origin: left center;\n  transition: transform 0.3s ease;\n  z-index: 2;\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button:hover::before {\n  transform: scaleX(1);\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button:hover .icon-wrapper {\n  transform: scale(1.1) rotate(-3deg);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:hover {\n  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.2);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:hover {\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button:active {\n  transform: translateY(-2px) scale(0.98);\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button .icon-wrapper {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button .icon-wrapper::before {\n  content: "";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  padding: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--icon-color-1),\n      var(--icon-color-2));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button .icon-wrapper mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  z-index: 1;\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button:hover .icon-wrapper::before {\n  opacity: 1;\n}\n.form-builder-container .field-types-panel .field-type-grid .field-type-button span {\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  letter-spacing: 0.2px;\n  line-height: 1.2;\n  color: #292524;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) mat-icon {\n  color: #ff6b35;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(1) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(2) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(2) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(2) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #cffafe 0%,\n      #a5f3fc 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(2) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(2) mat-icon {\n  color: #0891b2;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(2) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(3) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(3) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(3) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe 0%,\n      #ddd6fe 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(3) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(3) mat-icon {\n  color: #7c3aed;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(3) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(4) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(4) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(4) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(4) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(4) mat-icon {\n  color: #dc2626;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(4) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(5) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(5) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(5) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(5) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(5) mat-icon {\n  color: #2563eb;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(5) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(6) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(6) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(6) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #ccfbf1 0%,\n      #99f6e4 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(6) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(6) mat-icon {\n  color: #0d9488;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(6) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(7) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(7) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(7) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(7) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(7) mat-icon {\n  color: #16a34a;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(7) mat-icon {\n  color: #00d4aa;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(8) {\n  --icon-color-1: #ff6b35;\n  --icon-color-2: #e65100;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(8) {\n  --icon-color-1: #00d4aa;\n  --icon-color-2: #00b894;\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(8) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(8) .icon-wrapper {\n  background:\n    linear-gradient(\n      135deg,\n      #134e4a 0%,\n      #115e59 100%);\n}\n.light-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(8) mat-icon {\n  color: #d97706;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:nth-child(8) mat-icon {\n  color: #00d4aa;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button span {\n  color: #f1f5f9 !important;\n}\n.dark-theme .form-builder-container .field-types-panel .field-type-grid .field-type-button:hover {\n  box-shadow: 0 6px 20px rgba(0, 212, 170, 0.3) !important;\n}\n@media (max-width: 768px) {\n  .form-builder-container .field-types-panel .field-type-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-builder-container .field-types-panel .info-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.light-theme .form-builder-container .field-types-panel .info-box {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  border: 2px solid #f97316;\n  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.15);\n}\n.dark-theme .form-builder-container .field-types-panel .info-box {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border: 2px solid #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);\n}\n.form-builder-container .field-types-panel .info-box::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  opacity: 0.05;\n  transform: rotate(45deg);\n}\n.light-theme .form-builder-container .field-types-panel .info-box::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #ff6b35,\n      transparent);\n}\n.dark-theme .form-builder-container .field-types-panel .info-box::before {\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #00d4aa,\n      transparent);\n}\n.form-builder-container .field-types-panel .info-box mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  z-index: 1;\n}\n.light-theme .form-builder-container .field-types-panel .info-box mat-icon {\n  color: #f97316;\n}\n.dark-theme .form-builder-container .field-types-panel .info-box mat-icon {\n  color: #10b981;\n}\n.form-builder-container .field-types-panel .info-box p {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  font-weight: 500;\n  z-index: 1;\n}\n.light-theme .form-builder-container .field-types-panel .info-box p {\n  color: #78716c;\n}\n.dark-theme .form-builder-container .field-types-panel .info-box p {\n  color: #cbd5e1;\n}\n.form-builder-container .form-preview-panel,\n.form-builder-container .json-panel {\n  height: 100%;\n  overflow: hidden;\n  padding-right: 8px;\n}\n.form-builder-container .form-preview-panel::-webkit-scrollbar,\n.form-builder-container .json-panel::-webkit-scrollbar {\n  width: 8px;\n}\n.light-theme .form-builder-container .form-preview-panel::-webkit-scrollbar-track,\n.light-theme .form-builder-container .json-panel::-webkit-scrollbar-track {\n  background: #fff8f0;\n  border-radius: 10px;\n}\n.dark-theme .form-builder-container .form-preview-panel::-webkit-scrollbar-track,\n.dark-theme .form-builder-container .json-panel::-webkit-scrollbar-track {\n  background: #1e293b;\n  border-radius: 10px;\n}\n.form-builder-container .form-preview-panel::-webkit-scrollbar-thumb,\n.form-builder-container .json-panel::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  transition: background 0.2s ease;\n}\n.light-theme .form-builder-container .form-preview-panel::-webkit-scrollbar-thumb,\n.light-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb {\n  background: #fed7aa;\n}\n.light-theme .form-builder-container .form-preview-panel::-webkit-scrollbar-thumb:hover,\n.light-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb:hover {\n  background: #f97316;\n}\n.dark-theme .form-builder-container .form-preview-panel::-webkit-scrollbar-thumb,\n.dark-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb {\n  background: #475569;\n}\n.dark-theme .form-builder-container .form-preview-panel::-webkit-scrollbar-thumb:hover,\n.dark-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb:hover {\n  background: #10b981;\n}\n.form-builder-container .form-preview-panel .empty-state,\n.form-builder-container .json-panel .empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--form-text-tertiary);\n}\n.form-builder-container .form-preview-panel .empty-state mat-icon,\n.form-builder-container .json-panel .empty-state mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  margin-bottom: 20px;\n  color: var(--form-text-tertiary);\n}\n.form-builder-container .form-preview-panel .empty-state p,\n.form-builder-container .json-panel .empty-state p {\n  font-size: 1.1rem;\n}\n.form-builder-container .form-preview-panel .field-list,\n.form-builder-container .json-panel .field-list {\n  margin-bottom: 30px;\n}\n.form-builder-container .form-preview-panel .field-list .field-item,\n.form-builder-container .json-panel .field-list .field-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px;\n  margin-bottom: 16px;\n  border-radius: 16px;\n  border: 1px solid;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: move;\n}\n.form-builder-container .form-preview-panel .field-list .field-item::before,\n.form-builder-container .json-panel .field-list .field-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  transform: scaleX(0);\n  transform-origin: left center;\n  transition: transform 0.3s ease;\n  z-index: 1;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item,\n.light-theme .form-builder-container .json-panel .field-list .field-item {\n  background: var(--bg-primary, #ffffff);\n  border-color: #fed7aa;\n  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.1);\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item::before,\n.light-theme .form-builder-container .json-panel .field-list .field-item::before {\n  background:\n    linear-gradient(\n      90deg,\n      #e65100 0%,\n      #ff6b35 100%);\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item:hover,\n.light-theme .form-builder-container .json-panel .field-list .field-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.2);\n  border-color: #ff6b35;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item:hover::before,\n.light-theme .form-builder-container .json-panel .field-list .field-item:hover::before {\n  transform: scaleX(1);\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item:active,\n.light-theme .form-builder-container .json-panel .field-list .field-item:active {\n  transform: translateY(-2px);\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item,\n.dark-theme .form-builder-container .json-panel .field-list .field-item {\n  background: var(--bg-primary, #1e293b);\n  border-color: #475569;\n  box-shadow: 0 2px 8px rgba(0, 212, 170, 0.15);\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item::before,\n.dark-theme .form-builder-container .json-panel .field-list .field-item::before {\n  background:\n    linear-gradient(\n      90deg,\n      #00d4aa 0%,\n      #00b894 100%);\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item:hover,\n.dark-theme .form-builder-container .json-panel .field-list .field-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 212, 170, 0.3);\n  border-color: #10b981;\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item:hover::before,\n.dark-theme .form-builder-container .json-panel .field-list .field-item:hover::before {\n  transform: scaleX(1);\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item:active,\n.dark-theme .form-builder-container .json-panel .field-list .field-item:active {\n  transform: translateY(-2px);\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-info,\n.form-builder-container .json-panel .field-list .field-item .field-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n  padding-left: 0;\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-info .field-icon,\n.form-builder-container .json-panel .field-list .field-item .field-info .field-icon {\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  padding: 8px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-icon,\n.light-theme .form-builder-container .json-panel .field-list .field-item .field-info .field-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n  color: #f97316;\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-icon,\n.dark-theme .form-builder-container .json-panel .field-list .field-item .field-info .field-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #475569 100%);\n  color: #10b981;\n}\n.light-theme .field-item:hover .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-icon,\n.dark-theme .field-item:hover .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-icon,\n.light-theme .field-item:hover .form-builder-container .json-panel .field-list .field-item .field-info .field-icon,\n.dark-theme .field-item:hover .form-builder-container .json-panel .field-list .field-item .field-info .field-icon {\n  transform: scale(1.05);\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details,\n.form-builder-container .json-panel .field-list .field-item .field-info .field-details {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details strong,\n.form-builder-container .json-panel .field-list .field-item .field-info .field-details strong {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details strong,\n.light-theme .form-builder-container .json-panel .field-list .field-item .field-info .field-details strong {\n  color: #292524;\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details strong,\n.dark-theme .form-builder-container .json-panel .field-list .field-item .field-info .field-details strong {\n  color: #f1f5f9;\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details small,\n.form-builder-container .json-panel .field-list .field-item .field-info .field-details small {\n  font-size: 13px;\n  opacity: 0.8;\n  line-height: 1.4;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details small,\n.light-theme .form-builder-container .json-panel .field-list .field-item .field-info .field-details small {\n  color: #78716c;\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item .field-info .field-details small,\n.dark-theme .form-builder-container .json-panel .field-list .field-item .field-info .field-details small {\n  color: #cbd5e1;\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-actions,\n.form-builder-container .json-panel .field-list .field-item .field-actions {\n  display: flex;\n  gap: 8px;\n  opacity: 0.7;\n  transition: opacity 0.3s ease;\n}\n.light-theme .field-item:hover .form-builder-container .form-preview-panel .field-list .field-item .field-actions,\n.dark-theme .field-item:hover .form-builder-container .form-preview-panel .field-list .field-item .field-actions,\n.light-theme .field-item:hover .form-builder-container .json-panel .field-list .field-item .field-actions,\n.dark-theme .field-item:hover .form-builder-container .json-panel .field-list .field-item .field-actions {\n  opacity: 1;\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-actions button,\n.form-builder-container .json-panel .field-list .field-item .field-actions button {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  padding: 0;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item .field-actions button,\n.light-theme .form-builder-container .json-panel .field-list .field-item .field-actions button {\n  background: rgba(249, 115, 22, 0.1);\n  color: #f97316;\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item .field-actions button:hover,\n.light-theme .form-builder-container .json-panel .field-list .field-item .field-actions button:hover {\n  background: #f97316;\n  color: white;\n  transform: scale(1.1);\n}\n.light-theme .form-builder-container .form-preview-panel .field-list .field-item .field-actions button:active,\n.light-theme .form-builder-container .json-panel .field-list .field-item .field-actions button:active {\n  transform: scale(0.95);\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item .field-actions button,\n.dark-theme .form-builder-container .json-panel .field-list .field-item .field-actions button {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item .field-actions button:hover,\n.dark-theme .form-builder-container .json-panel .field-list .field-item .field-actions button:hover {\n  background: #10b981;\n  color: white;\n  transform: scale(1.1);\n}\n.dark-theme .form-builder-container .form-preview-panel .field-list .field-item .field-actions button:active,\n.dark-theme .form-builder-container .json-panel .field-list .field-item .field-actions button:active {\n  transform: scale(0.95);\n}\n.form-builder-container .form-preview-panel .field-list .field-item .field-actions button mat-icon,\n.form-builder-container .json-panel .field-list .field-item .field-actions button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.form-builder-container .form-preview-panel .form-preview,\n.form-builder-container .json-panel .form-preview {\n  margin-top: 30px;\n  padding: 20px;\n  background-color: var(--form-bg-tertiary);\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n}\n.form-builder-container .form-preview-panel .form-preview h3,\n.form-builder-container .json-panel .form-preview h3 {\n  margin-top: 0;\n  margin-bottom: 20px;\n  color: var(--form-text-primary);\n}\n.form-builder-container .form-preview-panel .submit-button,\n.form-builder-container .json-panel .submit-button {\n  margin-top: 20px;\n  text-align: right;\n}\n.form-builder-container .form-preview-panel .result-box,\n.form-builder-container .json-panel .result-box {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: var(--form-success-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--form-success-color);\n}\n.form-builder-container .form-preview-panel .result-box h4,\n.form-builder-container .json-panel .result-box h4 {\n  margin: 0 0 10px 0;\n  color: var(--form-success-color);\n}\n.form-builder-container .form-preview-panel .result-box pre,\n.form-builder-container .json-panel .result-box pre {\n  margin: 0;\n  padding: 10px;\n  background-color: var(--form-field-bg);\n  border-radius: 4px;\n  overflow-x: auto;\n  font-size: 0.9rem;\n  color: var(--form-text-primary);\n}\n.form-builder-container .json-panel {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.form-builder-container .json-panel::-webkit-scrollbar {\n  width: 8px;\n}\n.light-theme .form-builder-container .json-panel::-webkit-scrollbar-track {\n  background: #fff8f0;\n  border-radius: 10px;\n}\n.dark-theme .form-builder-container .json-panel::-webkit-scrollbar-track {\n  background: #1e293b;\n  border-radius: 10px;\n}\n.form-builder-container .json-panel::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  transition: background 0.2s ease;\n}\n.light-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb {\n  background: #fed7aa;\n}\n.light-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb:hover {\n  background: #f97316;\n}\n.dark-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb {\n  background: #475569;\n}\n.dark-theme .form-builder-container .json-panel::-webkit-scrollbar-thumb:hover {\n  background: #10b981;\n}\n.form-builder-container .json-panel .empty-state {\n  text-align: center;\n  padding: 50px 20px;\n  border-radius: 12px;\n}\n.light-theme .form-builder-container .json-panel .empty-state {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  color: #a8a29e;\n}\n.dark-theme .form-builder-container .json-panel .empty-state {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #94a3b8;\n}\n.form-builder-container .json-panel .empty-state p {\n  font-size: 1rem;\n}\n.form-builder-container .json-panel .json-code {\n  padding: 20px;\n  border-radius: 12px;\n  border: 2px solid;\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 400px;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin-bottom: 16px;\n  font-family: "Courier New", monospace;\n  position: relative;\n}\n.form-builder-container .json-panel .json-code::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.light-theme .form-builder-container .json-panel .json-code::-webkit-scrollbar-track {\n  background: #ffedd5;\n  border-radius: 10px;\n}\n.dark-theme .form-builder-container .json-panel .json-code::-webkit-scrollbar-track {\n  background: #0f172a;\n  border-radius: 10px;\n}\n.form-builder-container .json-panel .json-code::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n}\n.light-theme .form-builder-container .json-panel .json-code::-webkit-scrollbar-thumb {\n  background: #f97316;\n}\n.light-theme .form-builder-container .json-panel .json-code::-webkit-scrollbar-thumb:hover {\n  background: #ea580c;\n}\n.dark-theme .form-builder-container .json-panel .json-code::-webkit-scrollbar-thumb {\n  background: #10b981;\n}\n.dark-theme .form-builder-container .json-panel .json-code::-webkit-scrollbar-thumb:hover {\n  background: #059669;\n}\n.light-theme .form-builder-container .json-panel .json-code {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fff8f0 100%);\n  border-color: #fed7aa;\n  color: #292524;\n  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.1);\n}\n.light-theme .form-builder-container .json-panel .json-code::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #f97316 0%,\n      #fb8500 100%);\n}\n.dark-theme .form-builder-container .json-panel .json-code {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 100%);\n  border-color: #475569;\n  color: #f1f5f9;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);\n}\n.dark-theme .form-builder-container .json-panel .json-code::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #10b981 0%,\n      #14b8a6 100%);\n}\n.form-builder-container .json-panel .json-info {\n  padding: 18px;\n  border-radius: 12px;\n  border: 2px solid;\n  position: relative;\n  overflow: hidden;\n}\n.light-theme .form-builder-container .json-panel .json-info {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  border-color: #f97316;\n  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.15);\n}\n.dark-theme .form-builder-container .json-panel .json-info {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border-color: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);\n}\n.form-builder-container .json-panel .json-info::before {\n  content: "{}";\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  font-size: 120px;\n  opacity: 0.05;\n  font-family: "Courier New", monospace;\n  font-weight: bold;\n}\n.form-builder-container .json-panel .json-info p {\n  margin: 8px 0;\n  font-size: 0.95rem;\n  font-weight: 500;\n  z-index: 1;\n  position: relative;\n}\n.light-theme .form-builder-container .json-panel .json-info p {\n  color: #78716c;\n}\n.light-theme .form-builder-container .json-panel .json-info p strong {\n  color: #292524;\n  font-weight: 700;\n}\n.dark-theme .form-builder-container .json-panel .json-info p {\n  color: #cbd5e1;\n}\n.dark-theme .form-builder-container .json-panel .json-info p strong {\n  color: #f1f5f9;\n  font-weight: 700;\n}\n.form-builder-container .guide-section {\n  border-radius: 12px;\n  border: 2px solid;\n  padding: 0;\n  overflow: hidden;\n}\n.light-theme .form-builder-container .guide-section {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  border-color: #fed7aa;\n}\n.dark-theme .form-builder-container .guide-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  border-color: #475569;\n}\n.form-builder-container .guide-section .guide-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 0;\n}\n.form-builder-container .guide-section .guide-grid .guide-item {\n  text-align: center;\n  padding: 30px 20px;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item:not(:last-child) {\n  border-right: 2px solid #fed7aa;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item:not(:last-child) {\n  border-right: 2px solid #475569;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item:hover {\n  background: rgba(249, 115, 22, 0.05);\n  transform: translateY(-5px);\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item:hover {\n  background: rgba(16, 185, 129, 0.1);\n  transform: translateY(-5px);\n}\n.form-builder-container .guide-section .guide-grid .guide-item mat-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n  color: #f97316;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #475569 100%);\n  color: #10b981;\n}\n.form-builder-container .guide-section .guide-grid .guide-item:hover mat-icon {\n  transform: scale(1.1) rotate(5deg);\n}\n.form-builder-container .guide-section .guide-grid .guide-item h4 {\n  margin: 12px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item h4 {\n  color: #292524;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item h4 {\n  color: #f1f5f9;\n}\n.form-builder-container .guide-section .guide-grid .guide-item p {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item p {\n  color: #78716c;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item p {\n  color: #cbd5e1;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(1) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fee2e2 0%,\n      #fecaca 100%);\n  color: #dc2626;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(1) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #450a0a 0%,\n      #7f1d1d 100%);\n  color: #ef4444;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(2) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(2) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #1e40af 100%);\n  color: #60a5fa;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(3) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #ca8a04;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(3) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #713f12 0%,\n      #854d0e 100%);\n  color: #fbbf24;\n}\n.light-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(4) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16a34a;\n}\n.dark-theme .form-builder-container .guide-section .guide-grid .guide-item:nth-child(4) mat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #14532d 0%,\n      #166534 100%);\n  color: #4ade80;\n}\n.form-builder-container .guide-section {\n  background-color: var(--form-bg-tertiary);\n  border-radius: 8px;\n  border: 1px solid var(--form-border-color);\n}\n.form-builder-container .guide-section .guide-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.form-builder-container .guide-section .guide-grid .guide-item {\n  text-align: center;\n  padding: 20px;\n}\n.form-builder-container .guide-section .guide-grid .guide-item mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  color: var(--form-primary-color);\n  margin-bottom: 10px;\n}\n.form-builder-container .guide-section .guide-grid .guide-item h4 {\n  margin: 10px 0;\n  color: var(--form-text-primary);\n}\n.form-builder-container .guide-section .guide-grid .guide-item p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--form-text-secondary);\n}\n@media (max-width: 768px) {\n  .form-builder-container {\n    padding: 10px;\n  }\n  .form-builder-container .builder-header h1 {\n    font-size: 2rem;\n  }\n  .form-builder-container .builder-header .subtitle {\n    font-size: 1rem;\n  }\n  .form-builder-container .builder-content {\n    grid-template-columns: 1fr;\n  }\n}\n::ng-deep .form-builder-container mat-card mat-card-header {\n  all: unset !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  width: 100% !important;\n  height: 64px !important;\n  padding: 0 20px !important;\n  margin: -16px -16px 16px -16px !important;\n  border-radius: 12px 12px 0 0 !important;\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%) !important;\n  box-sizing: border-box !important;\n}\n::ng-deep .form-builder-container mat-card mat-card-header * {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n::ng-deep .form-builder-container mat-card mat-card-header .mat-mdc-card-header-text {\n  all: unset !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  flex: 1 !important;\n}\n::ng-deep .form-builder-container mat-card mat-card-header mat-card-title {\n  all: unset !important;\n  color: white !important;\n  font-weight: 600 !important;\n  font-size: 18px !important;\n  font-family: inherit !important;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  line-height: normal !important;\n}\n::ng-deep .form-builder-container.dark-theme mat-card mat-card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%) !important;\n}\n/*# sourceMappingURL=dynamic-form-builder.component.css.map */\n'] }]
  }], () => [{ type: ThemeService }, { type: FormAuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicFormBuilderComponent, { className: "DynamicFormBuilderComponent", filePath: "src/app/modules/form/pages/dynamic-form-builder/dynamic-form-builder.component.ts", lineNumber: 14 });
})();

// src/app/modules/form/pages/form-login/form-login.ts
var _c0 = ["loginComponent"];
var FormLogin = class _FormLogin {
  formAuthService;
  router;
  route;
  themeService;
  loginComponent;
  loginConfig = {
    title: "\uFFFD \uD3FC \uBE4C\uB354",
    subtitle: "\uC190\uC26C\uC6B4 \uD3FC \uC0DD\uC131",
    moduleName: "form",
    showSocialLogin: false,
    showRegisterLink: false,
    themeColors: {
      primary: "#14b8a6",
      // 틸 (데이터/폼)
      secondary: "#0d9488",
      // 진한 틸
      accent: "#2dd4bf"
      // 밝은 틸
    }
  };
  returnUrl = "/form/builder";
  constructor(formAuthService, router, route, themeService) {
    this.formAuthService = formAuthService;
    this.router = router;
    this.route = route;
    this.themeService = themeService;
  }
  ngOnInit() {
    if (this.formAuthService.isFormLoggedIn) {
      this.router.navigate(["/form/builder"]);
      return;
    }
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/form/builder";
  }
  onLogin(credentials) {
    return __async(this, null, function* () {
      if (this.loginComponent) {
        this.loginComponent.setLoading(true);
      }
      try {
        const result = yield this.formAuthService.formLogin(credentials.username, credentials.password);
        if (result.success) {
          yield this.router.navigateByUrl(this.returnUrl);
        } else {
          if (this.loginComponent) {
            this.loginComponent.setError(result.message || "\uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
          }
        }
      } catch (error) {
        if (this.loginComponent) {
          this.loginComponent.setError("\uB85C\uADF8\uC778 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
        }
      } finally {
        if (this.loginComponent) {
          this.loginComponent.setLoading(false);
        }
      }
    });
  }
  static \u0275fac = function FormLogin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormLogin)(\u0275\u0275directiveInject(FormAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormLogin, selectors: [["app-form-login"]], viewQuery: function FormLogin_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 3, vars: 1, consts: [["loginComponent", ""], [1, "form-login-container"], [3, "loginSubmit", "config"]], template: function FormLogin_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-unified-login", 2, 0);
      \u0275\u0275listener("loginSubmit", function FormLogin_Template_app_unified_login_loginSubmit_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogin($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("config", ctx.loginConfig);
    }
  }, dependencies: [UnifiedLoginComponent], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%);\n}\n.login-container.light-theme[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%);\n}\n.login-container.dark-theme[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  background: white;\n  border-radius: 24px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 48px;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-header[_ngcontent-%COMP%]   .login-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  padding: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.light-theme[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .login-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n  color: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .login-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #475569 100%);\n  color: #10b981;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.light-theme[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.login-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n}\n.light-theme[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #fee2e2;\n  color: #dc2626;\n  font-size: 14px;\n  animation: _ngcontent-%COMP%_shake 0.3s ease-in-out;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  color: #fca5a5;\n}\n.login-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.login-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 12px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n}\n.light-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  color: white;\n}\n.light-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);\n}\n.dark-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);\n}\n.login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n}\n.login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]     circle {\n  stroke: white;\n}\n.login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.login-form[_ngcontent-%COMP%]   .login-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.light-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-hint[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  color: #78716c;\n  border: 1px solid #fed7aa;\n}\n.light-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-hint[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #cbd5e1;\n  border: 1px solid #475569;\n}\n.dark-theme[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.login-form[_ngcontent-%COMP%]   .login-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 768px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .login-header[_ngcontent-%COMP%]   .login-icon[_ngcontent-%COMP%] {\n    font-size: 56px;\n    width: 56px;\n    height: 56px;\n  }\n  .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=form-login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormLogin, [{
    type: Component,
    args: [{ selector: "app-form-login", standalone: false, template: '<div class="form-login-container">\n  <app-unified-login\n    #loginComponent\n    [config]="loginConfig"\n    (loginSubmit)="onLogin($event)">\n  </app-unified-login>\n</div>\n', styles: ["/* src/app/modules/form/pages/form-login/form-login.scss */\n.login-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%);\n}\n.login-container.light-theme {\n  background:\n    linear-gradient(\n      135deg,\n      #e65100 0%,\n      #ff6b35 50%,\n      #ff8746 100%);\n}\n.login-container.dark-theme {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n}\n.login-card {\n  width: 100%;\n  max-width: 450px;\n  background: white;\n  border-radius: 24px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  padding: 48px;\n  animation: slideUp 0.5s ease-out;\n}\n.dark-theme .login-card {\n  background: #1e293b;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-header .login-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 16px;\n  padding: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.light-theme .login-header .login-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ffedd5 0%,\n      #fed7aa 100%);\n  color: #f97316;\n}\n.dark-theme .login-header .login-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #334155 0%,\n      #475569 100%);\n  color: #10b981;\n}\n.login-header h1 {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.light-theme .login-header h1 {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.dark-theme .login-header h1 {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.login-header .subtitle {\n  font-size: 16px;\n  margin: 0;\n}\n.light-theme .login-header .subtitle {\n  color: #78716c;\n}\n.dark-theme .login-header .subtitle {\n  color: #cbd5e1;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.login-form .error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: #fee2e2;\n  color: #dc2626;\n  font-size: 14px;\n  animation: shake 0.3s ease-in-out;\n}\n.dark-theme .login-form .error-message {\n  background: #7f1d1d;\n  color: #fca5a5;\n}\n.login-form .error-message mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.login-form .full-width {\n  width: 100%;\n}\n.login-form .login-button {\n  width: 100%;\n  height: 52px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 12px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n}\n.light-theme .login-form .login-button {\n  background:\n    linear-gradient(\n      135deg,\n      #f97316 0%,\n      #ea580c 100%);\n  color: white;\n}\n.light-theme .login-form .login-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);\n}\n.dark-theme .login-form .login-button {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n}\n.dark-theme .login-form .login-button:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);\n}\n.login-form .login-button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-form .login-button mat-spinner {\n  display: inline-block;\n  margin-right: 8px;\n}\n.login-form .login-button mat-spinner ::ng-deep circle {\n  stroke: white;\n}\n.login-form .login-button mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.login-form .login-hint {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.light-theme .login-form .login-hint {\n  background:\n    linear-gradient(\n      135deg,\n      #fff8f0 0%,\n      #ffedd5 100%);\n  color: #78716c;\n  border: 1px solid #fed7aa;\n}\n.light-theme .login-form .login-hint mat-icon {\n  color: #f97316;\n}\n.dark-theme .login-form .login-hint {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  color: #cbd5e1;\n  border: 1px solid #475569;\n}\n.dark-theme .login-form .login-hint mat-icon {\n  color: #10b981;\n}\n.login-form .login-hint mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 768px) {\n  .login-card {\n    padding: 32px 24px;\n  }\n  .login-header .login-icon {\n    font-size: 56px;\n    width: 56px;\n    height: 56px;\n  }\n  .login-header h1 {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=form-login.css.map */\n"] }]
  }], () => [{ type: FormAuthService }, { type: Router }, { type: ActivatedRoute }, { type: ThemeService }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormLogin, { className: "FormLogin", filePath: "src/app/modules/form/pages/form-login/form-login.ts", lineNumber: 13 });
})();

// src/app/guards/form-auth.guard.ts
var FormAuthGuard = class _FormAuthGuard {
  formAuthService;
  router;
  constructor(formAuthService, router) {
    this.formAuthService = formAuthService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.formAuthService.isFormLoggedIn) {
      return true;
    }
    return this.router.createUrlTree(["/form/login"], {
      queryParams: { returnUrl: state.url }
    });
  }
  static \u0275fac = function FormAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormAuthGuard)(\u0275\u0275inject(FormAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormAuthGuard, factory: _FormAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: FormAuthService }, { type: Router }], null);
})();

// src/app/modules/form/form-routing.module.ts
var routes = [
  {
    path: "",
    redirectTo: "builder",
    pathMatch: "full"
  },
  {
    path: "login",
    component: FormLogin
  },
  {
    path: "builder",
    component: DynamicFormBuilderComponent,
    canActivate: [FormAuthGuard]
  },
  {
    path: "test",
    component: FormTestComponent,
    canActivate: [FormAuthGuard]
  }
];
var FormRoutingModule = class _FormRoutingModule {
  static \u0275fac = function FormRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FormRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/form/form.module.ts
var FormModule = class _FormModule {
  static \u0275fac = function FormModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FormModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    provideNativeDateAdapter(),
    DatePipe
  ], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FormRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DynamicFormComponent,
        InputComponent,
        TextareaComponent,
        SelectComponent,
        RadioButtonComponent,
        DatePickerComponent,
        FormTestComponent,
        DynamicFormBuilderComponent,
        FormLogin
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        FormRoutingModule
      ],
      exports: [
        DynamicFormComponent
      ],
      providers: [
        provideNativeDateAdapter(),
        DatePipe
      ]
    }]
  }], null, null);
})();
export {
  FormModule
};
//# sourceMappingURL=chunk-CNY4W4GV.js.map
