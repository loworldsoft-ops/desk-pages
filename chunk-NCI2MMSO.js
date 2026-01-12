import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-CAM35WIM.js";
import {
  ProjectAuthGuard,
  ProjectAuthService,
  ProjectForgotPasswordComponent,
  ProjectGuestGuard,
  ProjectLoginComponent,
  ProjectRegisterComponent,
  ProjectRoleGuard
} from "./chunk-4DPYRCGT.js";
import {
  MatTableDataSource,
  MatTableModule
} from "./chunk-2NXQDRHH.js";
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-G4U5H7MU.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-NZXI4AK5.js";
import {
  MatDivider,
  MatDividerModule,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatSidenavModule
} from "./chunk-COH6PWQA.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  MatCheckboxModule
} from "./chunk-J3HFPNBL.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-3USWDC62.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DZVWUGGM.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-SVWY7C6P.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-XGFL2WJQ.js";
import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import "./chunk-IEXL5CIB.js";
import {
  environment
} from "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import {
  MatDatepickerModule,
  MatNativeDateModule
} from "./chunk-LJBWKBWF.js";
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
import "./chunk-OWKVH3DN.js";
import {
  MatSelectModule
} from "./chunk-66OK2TSW.js";
import "./chunk-F5RTWLKS.js";
import "./chunk-NQ2UJILS.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5Z7BUDXM.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-BE5X2S7S.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
  HttpParams
} from "./chunk-OYJIDA3L.js";
import {
  ReactiveFormsModule
} from "./chunk-X67QRSHQ.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Subject,
  TitleCasePipe,
  catchError,
  filter,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WY5M3RVA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/project/components/project-layout/project-layout.ts
var _c0 = () => ({ exact: true });
function ProjectLayout_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21)(4, "mat-icon");
    \u0275\u0275text(5, "account_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-menu", 22, 1)(8, "div", 23)(9, "div", 24)(10, "mat-icon");
    \u0275\u0275text(11, "account_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "div", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(20, "mat-divider");
    \u0275\u0275elementStart(21, "button", 28)(22, "mat-icon");
    \u0275\u0275text(23, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "\uD504\uB85C\uD544");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 28)(27, "mat-icon");
    \u0275\u0275text(28, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "\uC124\uC815");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "mat-divider");
    \u0275\u0275elementStart(32, "button", 29);
    \u0275\u0275listener("click", function ProjectLayout_div_7_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(33, "mat-icon");
    \u0275\u0275text(34, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "\uB85C\uADF8\uC544\uC6C3");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const userMenu_r4 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentUser.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", userMenu_r4);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.currentUser.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 6, ctx_r2.currentUser.role));
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r2.isLoading);
  }
}
var ProjectLayout = class _ProjectLayout {
  authService;
  router;
  snackBar;
  isSidenavOpen = true;
  currentUser = null;
  isLoading = false;
  destroy$ = new Subject();
  constructor(authService, router, snackBar) {
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.authService.authState$.pipe(takeUntil(this.destroy$)).subscribe((authState) => {
      this.currentUser = authState.user;
      this.isLoading = authState.isLoading;
      if (!authState.isAuthenticated) {
        this.router.navigate(["/project/auth/login"]);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.showSuccess("\uB85C\uADF8\uC544\uC6C3\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
      },
      error: (error) => {
        this.showError("\uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
      }
    });
  }
  showSuccess(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 3e3,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  showError(message) {
    this.snackBar.open(message, "\uB2EB\uAE30", {
      duration: 5e3,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
  static \u0275fac = function ProjectLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectLayout)(\u0275\u0275directiveInject(ProjectAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectLayout, selectors: [["app-project-layout"]], decls: 54, vars: 4, consts: [["sidenav", ""], ["userMenu", "matMenu"], [1, "project-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "spacer"], ["class", "user-info", 4, "ngIf"], ["mat-icon-button", ""], ["mat-icon-button", "", "routerLink", "/loworld"], [1, "project-container"], ["mode", "side", 1, "project-sidenav", 3, "opened"], [1, "sidenav-header"], ["mat-list-item", "", "routerLink", "list", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "kanban", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "gantt", "routerLinkActive", "active"], [2, "margin", "16px 0"], ["mat-list-item", ""], [1, "project-content"], [1, "user-info"], [1, "user-name"], ["mat-icon-button", "", 1, "user-menu-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], [1, "user-menu-header"], [1, "user-avatar"], [1, "user-details"], [1, "user-email"], [1, "user-role"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click", "disabled"]], template: function ProjectLayout_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "mat-toolbar", 2)(1, "button", 3);
      \u0275\u0275listener("click", function ProjectLayout_Template_button_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidenav());
      });
      \u0275\u0275elementStart(2, "mat-icon");
      \u0275\u0275text(3, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Project Management");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "span", 4);
      \u0275\u0275template(7, ProjectLayout_div_7_Template, 37, 8, "div", 5);
      \u0275\u0275elementStart(8, "button", 6)(9, "mat-icon");
      \u0275\u0275text(10, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 6)(12, "mat-icon");
      \u0275\u0275text(13, "notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 7)(15, "mat-icon");
      \u0275\u0275text(16, "home");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "mat-sidenav-container", 8)(18, "mat-sidenav", 9, 0)(20, "div", 10)(21, "h3");
      \u0275\u0275text(22, "\u{1F680} Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p");
      \u0275\u0275text(24, "Manage your workspace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "mat-nav-list")(26, "a", 11)(27, "mat-icon", 12);
      \u0275\u0275text(28, "view_list");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 13);
      \u0275\u0275text(30, "\uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "a", 14)(32, "mat-icon", 12);
      \u0275\u0275text(33, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 13);
      \u0275\u0275text(35, "\uCE78\uBC18 \uBCF4\uB4DC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "a", 15)(37, "mat-icon", 12);
      \u0275\u0275text(38, "timeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 13);
      \u0275\u0275text(40, "\uAC04\uD2B8 \uCC28\uD2B8");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "mat-divider", 16);
      \u0275\u0275elementStart(42, "a", 17)(43, "mat-icon", 12);
      \u0275\u0275text(44, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 13);
      \u0275\u0275text(46, "\uC124\uC815");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "a", 17)(48, "mat-icon", 12);
      \u0275\u0275text(49, "help_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 13);
      \u0275\u0275text(51, "\uB3C4\uC6C0\uB9D0");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "mat-sidenav-content", 18);
      \u0275\u0275element(53, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.currentUser);
      \u0275\u0275advance(11);
      \u0275\u0275property("opened", ctx.isSidenavOpen);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatToolbar,
    MatSidenavModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatIconButton,
    MatListModule,
    MatNavList,
    MatListItem,
    MatListItemIcon,
    MatDivider,
    MatListItemTitle,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDividerModule,
    MatSnackBarModule,
    TitleCasePipe
  ], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module[_ngcontent-%COMP%] {\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-focus-overlay[_ngcontent-%COMP%] {\n  background-color: var(--project-accent);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%] {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-dialog-container[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n@keyframes _ngcontent-%COMP%_project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.project-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.project-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.project-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: scale(1.05);\n}\n.project-toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.project-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: white !important;\n}\n.project-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.project-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-right: 1rem;\n}\n.project-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n  margin-right: 0.5rem;\n}\n@media (max-width: 768px) {\n  .project-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.project-toolbar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.project-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  background: var(--project-bg-secondary);\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n.project-sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n  border-right: 1px solid var(--project-border-color);\n  background: var(--project-bg-primary);\n  box-shadow: 4px 0 20px var(--project-shadow);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 4px 12px;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  color: var(--project-text-primary);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--project-gradient-primary);\n  transform: scaleY(0);\n  transition: transform 0.3s ease;\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--project-gradient-card);\n  transform: translateX(4px);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n  color: var(--project-primary);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: var(--project-gradient-card);\n  color: var(--project-primary);\n  font-weight: 600;\n  border: 1px solid var(--project-primary);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  transform: scaleY(1);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--project-primary);\n}\n.project-sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  color: var(--project-text-secondary);\n}\n.project-sidenav[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%] {\n  padding: 24px 20px;\n  border-bottom: 1px solid var(--project-border-color);\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-sidenav[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.project-sidenav[_ngcontent-%COMP%]   .sidenav-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.project-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background: var(--project-bg-secondary);\n}\n.project-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 4px;\n}\n.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n@media (max-width: 768px) {\n  .project-sidenav[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 280px;\n  }\n}\n.dark-theme[_ngcontent-%COMP%]   .project-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-sidenav[_ngcontent-%COMP%] {\n  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);\n}\n  .user-menu-panel .mat-mdc-menu-panel {\n  min-width: 280px;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--project-border-color);\n}\n  .user-menu-panel .user-menu-header {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background: var(--project-bg-secondary);\n  border-radius: 12px 12px 0 0;\n}\n  .user-menu-panel .user-menu-header .user-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--project-gradient-primary);\n  margin-right: 1rem;\n}\n  .user-menu-panel .user-menu-header .user-avatar mat-icon {\n  font-size: 32px;\n  color: white;\n}\n  .user-menu-panel .user-menu-header .user-details {\n  flex: 1;\n}\n  .user-menu-panel .user-menu-header .user-details .user-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--project-text-primary);\n  margin-bottom: 0.25rem;\n}\n  .user-menu-panel .user-menu-header .user-details .user-email {\n  font-size: 14px;\n  color: var(--project-text-secondary);\n  margin-bottom: 0.25rem;\n}\n  .user-menu-panel .user-menu-header .user-details .user-role {\n  font-size: 12px;\n  color: var(--project-primary);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n  .user-menu-panel .mat-mdc-menu-item {\n  height: 48px;\n  color: var(--project-text-primary);\n  transition: all 0.3s ease;\n}\n  .user-menu-panel .mat-mdc-menu-item:hover {\n  background: var(--project-bg-secondary);\n  color: var(--project-primary);\n}\n  .user-menu-panel .mat-mdc-menu-item mat-icon {\n  margin-right: 1rem;\n  color: var(--project-text-secondary);\n}\n  .user-menu-panel .mat-mdc-menu-item:hover mat-icon {\n  color: var(--project-primary);\n}\n  .user-menu-panel .mat-mdc-menu-item[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=project-layout.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectLayout, [{
    type: Component,
    args: [{ selector: "app-project-layout", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule,
      MatDividerModule,
      MatSnackBarModule
    ], template: '<mat-toolbar class="project-toolbar">\n  <button mat-icon-button (click)="toggleSidenav()">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>Project Management</span>\n  <span class="spacer"></span>\n  \n  <!-- \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD45C\uC2DC -->\n  <div class="user-info" *ngIf="currentUser">\n    <span class="user-name">{{ currentUser.fullName }}</span>\n    <button mat-icon-button [matMenuTriggerFor]="userMenu" class="user-menu-button">\n      <mat-icon>account_circle</mat-icon>\n    </button>\n    \n    <!-- \uC0AC\uC6A9\uC790 \uBA54\uB274 -->\n    <mat-menu #userMenu="matMenu" xPosition="before">\n      <div class="user-menu-header">\n        <div class="user-avatar">\n          <mat-icon>account_circle</mat-icon>\n        </div>\n        <div class="user-details">\n          <div class="user-name">{{ currentUser.fullName }}</div>\n          <div class="user-email">{{ currentUser.email }}</div>\n          <div class="user-role">{{ currentUser.role | titlecase }}</div>\n        </div>\n      </div>\n      <mat-divider></mat-divider>\n      <button mat-menu-item>\n        <mat-icon>person</mat-icon>\n        <span>\uD504\uB85C\uD544</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>settings</mat-icon>\n        <span>\uC124\uC815</span>\n      </button>\n      <mat-divider></mat-divider>\n      <button mat-menu-item (click)="logout()" [disabled]="isLoading">\n        <mat-icon>logout</mat-icon>\n        <span>\uB85C\uADF8\uC544\uC6C3</span>\n      </button>\n    </mat-menu>\n  </div>\n  \n  <button mat-icon-button>\n    <mat-icon>search</mat-icon>\n  </button>\n  <button mat-icon-button>\n    <mat-icon>notifications</mat-icon>\n  </button>\n  <button mat-icon-button routerLink="/loworld">\n    <mat-icon>home</mat-icon>\n  </button>\n</mat-toolbar>\n\n<mat-sidenav-container class="project-container">\n  <mat-sidenav #sidenav [opened]="isSidenavOpen" mode="side" class="project-sidenav">\n    \n    <!-- \uC0AC\uC774\uB4DC\uBC14 \uD5E4\uB354 -->\n    <div class="sidenav-header">\n      <h3>\u{1F680} Projects</h3>\n      <p>Manage your workspace</p>\n    </div>\n\n    <mat-nav-list>\n      <a mat-list-item \n         routerLink="list" \n         routerLinkActive="active"\n         [routerLinkActiveOptions]="{exact: true}">\n        <mat-icon matListItemIcon>view_list</mat-icon>\n        <span matListItemTitle>\uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D</span>\n      </a>\n\n      <a mat-list-item \n         routerLink="kanban" \n         routerLinkActive="active">\n        <mat-icon matListItemIcon>dashboard</mat-icon>\n        <span matListItemTitle>\uCE78\uBC18 \uBCF4\uB4DC</span>\n      </a>\n\n      <a mat-list-item \n         routerLink="gantt" \n         routerLinkActive="active">\n        <mat-icon matListItemIcon>timeline</mat-icon>\n        <span matListItemTitle>\uAC04\uD2B8 \uCC28\uD2B8</span>\n      </a>\n\n      <mat-divider style="margin: 16px 0;"></mat-divider>\n\n      <a mat-list-item>\n        <mat-icon matListItemIcon>settings</mat-icon>\n        <span matListItemTitle>\uC124\uC815</span>\n      </a>\n\n      <a mat-list-item>\n        <mat-icon matListItemIcon>help_outline</mat-icon>\n        <span matListItemTitle>\uB3C4\uC6C0\uB9D0</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content class="project-content">\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n', styles: ['/* src/app/modules/project/components/project-layout/project-layout.scss */\n:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module * {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme .project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module {\n}\n.project-module .mat-mdc-card {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-button.mat-primary,\n.project-module .mat-mdc-raised-button.mat-primary,\n.project-module .mat-mdc-fab.mat-primary,\n.project-module .mat-mdc-mini-fab.mat-primary {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module .mat-mdc-button.mat-primary:hover,\n.project-module .mat-mdc-raised-button.mat-primary:hover,\n.project-module .mat-mdc-fab.mat-primary:hover,\n.project-module .mat-mdc-mini-fab.mat-primary:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module .mat-toolbar {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  background: var(--project-bg-secondary);\n}\n.project-module .mat-mdc-form-field .mat-mdc-form-field-focus-overlay {\n  background-color: var(--project-accent);\n}\n.project-module .mat-mdc-chip {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-chip.mat-primary {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-dialog-container {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module .mat-drawer {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module .mat-drawer-content {\n  background: var(--project-bg-secondary);\n}\n@keyframes project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n:host {\n  display: block;\n  height: 100vh;\n}\n.project-toolbar {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.project-toolbar button {\n  color: white !important;\n}\n.project-toolbar button:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: scale(1.05);\n}\n.project-toolbar .spacer {\n  flex: 1 1 auto;\n}\n.project-toolbar span {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: white !important;\n}\n.project-toolbar mat-icon {\n  color: white !important;\n}\n.project-toolbar .user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-right: 1rem;\n}\n.project-toolbar .user-info .user-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n  margin-right: 0.5rem;\n}\n@media (max-width: 768px) {\n  .project-toolbar .user-info .user-name {\n    display: none;\n  }\n}\n.project-toolbar .user-info .user-menu-button mat-icon {\n  font-size: 28px;\n}\n.project-container {\n  height: calc(100vh - 64px);\n  background: var(--project-bg-secondary);\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n.project-sidenav {\n  width: 280px;\n  border-right: 1px solid var(--project-border-color);\n  background: var(--project-bg-primary);\n  box-shadow: 4px 0 20px var(--project-shadow);\n}\n.project-sidenav mat-nav-list {\n  padding: 16px 0;\n}\n.project-sidenav mat-nav-list a {\n  margin: 4px 12px;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  color: var(--project-text-primary);\n}\n.project-sidenav mat-nav-list a::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--project-gradient-primary);\n  transform: scaleY(0);\n  transition: transform 0.3s ease;\n}\n.project-sidenav mat-nav-list a:hover {\n  background: var(--project-gradient-card);\n  transform: translateX(4px);\n}\n.project-sidenav mat-nav-list a:hover mat-icon {\n  transform: scale(1.15);\n  color: var(--project-primary);\n}\n.project-sidenav mat-nav-list a.active {\n  background: var(--project-gradient-card);\n  color: var(--project-primary);\n  font-weight: 600;\n  border: 1px solid var(--project-primary);\n}\n.project-sidenav mat-nav-list a.active::before {\n  transform: scaleY(1);\n}\n.project-sidenav mat-nav-list a.active mat-icon {\n  color: var(--project-primary);\n}\n.project-sidenav mat-nav-list a mat-icon {\n  transition: all 0.3s ease;\n  color: var(--project-text-secondary);\n}\n.project-sidenav .sidenav-header {\n  padding: 24px 20px;\n  border-bottom: 1px solid var(--project-border-color);\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-sidenav .sidenav-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.project-sidenav .sidenav-header p {\n  margin: 4px 0 0 0;\n  font-size: 13px;\n  opacity: 0.9;\n}\n.project-content {\n  flex: 1;\n  overflow-y: auto;\n  background: var(--project-bg-secondary);\n}\n.project-content::-webkit-scrollbar {\n  width: 8px;\n}\n.project-content::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.project-content::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 4px;\n}\n.project-content::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n@media (max-width: 768px) {\n  .project-sidenav {\n    width: 100%;\n    max-width: 280px;\n  }\n}\n.dark-theme .project-toolbar {\n  box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);\n}\n.dark-theme .project-sidenav {\n  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);\n}\n::ng-deep .user-menu-panel .mat-mdc-menu-panel {\n  min-width: 280px;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--project-border-color);\n}\n::ng-deep .user-menu-panel .user-menu-header {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background: var(--project-bg-secondary);\n  border-radius: 12px 12px 0 0;\n}\n::ng-deep .user-menu-panel .user-menu-header .user-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--project-gradient-primary);\n  margin-right: 1rem;\n}\n::ng-deep .user-menu-panel .user-menu-header .user-avatar mat-icon {\n  font-size: 32px;\n  color: white;\n}\n::ng-deep .user-menu-panel .user-menu-header .user-details {\n  flex: 1;\n}\n::ng-deep .user-menu-panel .user-menu-header .user-details .user-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--project-text-primary);\n  margin-bottom: 0.25rem;\n}\n::ng-deep .user-menu-panel .user-menu-header .user-details .user-email {\n  font-size: 14px;\n  color: var(--project-text-secondary);\n  margin-bottom: 0.25rem;\n}\n::ng-deep .user-menu-panel .user-menu-header .user-details .user-role {\n  font-size: 12px;\n  color: var(--project-primary);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n::ng-deep .user-menu-panel .mat-mdc-menu-item {\n  height: 48px;\n  color: var(--project-text-primary);\n  transition: all 0.3s ease;\n}\n::ng-deep .user-menu-panel .mat-mdc-menu-item:hover {\n  background: var(--project-bg-secondary);\n  color: var(--project-primary);\n}\n::ng-deep .user-menu-panel .mat-mdc-menu-item mat-icon {\n  margin-right: 1rem;\n  color: var(--project-text-secondary);\n}\n::ng-deep .user-menu-panel .mat-mdc-menu-item:hover mat-icon {\n  color: var(--project-primary);\n}\n::ng-deep .user-menu-panel .mat-mdc-menu-item[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=project-layout.css.map */\n'] }]
  }], () => [{ type: ProjectAuthService }, { type: Router }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectLayout, { className: "ProjectLayout", filePath: "src/app/modules/project/components/project-layout/project-layout.ts", lineNumber: 37 });
})();

// src/app/modules/project/services/project.service.ts
var ProjectService = class _ProjectService {
  http = inject(HttpClient);
  baseUrl = environment.baseSyncUrl + "/project";
  /**
   * 사용자 ID로 프로젝트 목록 조회
   * SyncBI-Station API: GET /project?userId={id}
   */
  getProjectsByUserId(userId) {
    const params = new HttpParams().set("userId", userId);
    return this.http.get(this.baseUrl, { params }).pipe(map((projects) => {
      return projects.map((project) => __spreadProps(__spreadValues({}, project), {
        startDate: new Date(project.startDate),
        endDate: new Date(project.endDate)
      }));
    }), catchError((error) => {
      return of([]);
    }));
  }
  /**
   * 조직 ID로 프로젝트 목록 조회
   * SyncBI-Station API: GET /project?organizationId={id}
   */
  getProjectsByOrganizationId(organizationId) {
    const params = new HttpParams().set("organizationId", organizationId);
    return this.http.get(this.baseUrl, { params }).pipe(map((projects) => projects.map((project) => __spreadProps(__spreadValues({}, project), {
      startDate: new Date(project.startDate),
      endDate: new Date(project.endDate)
    }))), catchError((error) => {
      return of([]);
    }));
  }
  /**
   * 새 프로젝트 생성
   * SyncBI-Station API: POST /project
   */
  createProject(payload) {
    return this.http.post(this.baseUrl, payload).pipe(map((result) => {
      if (result.project) {
        result.project.startDate = new Date(result.project.startDate);
        result.project.endDate = new Date(result.project.endDate);
      }
      return result;
    }), catchError((error) => {
      throw error;
    }));
  }
  /**
   * 프로젝트 업데이트
   * SyncBI-Station API: PATCH /project
   */
  updateProject(payload) {
    return this.http.patch(this.baseUrl, payload).pipe(map((project) => {
      return __spreadProps(__spreadValues({}, project), {
        startDate: new Date(project.startDate),
        endDate: new Date(project.endDate)
      });
    }), catchError((error) => {
      throw error;
    }));
  }
  /**
   * 프로젝트 삭제
   * SyncBI-Station API: DELETE /project?projectIdx={id}
   */
  deleteProject(projectId) {
    const params = new HttpParams().set("projectIdx", projectId);
    return this.http.delete(this.baseUrl, { params }).pipe(map(() => {
    }), catchError((error) => {
      throw error;
    }));
  }
  static \u0275fac = function ProjectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/project/abstracts/project-viewmodel.abstract.ts
var ProjectViewModelAbstract = class _ProjectViewModelAbstract {
  // 의존성 주입
  projectService = inject(ProjectService);
  dialog = inject(MatDialog);
  // 상태 관리 (RxJS BehaviorSubject)
  projects$ = new BehaviorSubject([]);
  selectedProject$ = new BehaviorSubject(null);
  loading$ = new BehaviorSubject(false);
  error$ = new BehaviorSubject(null);
  // 테이블 데이터
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["name", "status", "startDate", "endDate", "description", "actions"];
  // Destroy subject for cleanup
  destroy$ = new Subject();
  constructor() {
    this.init();
  }
  /**
   * 초기화
   */
  init() {
    this.projects$.subscribe((projects) => {
      this.dataSource.data = projects;
    });
  }
  /**
   * 프로젝트 선택
   */
  selectProject(project) {
    this.selectedProject$.next(project);
  }
  /**
   * 에러 처리
   */
  handleError(error) {
    this.error$.next(error.message || "An error occurred");
    this.loading$.next(false);
  }
  /**
   * 정리
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function ProjectViewModelAbstract_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectViewModelAbstract)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectViewModelAbstract, factory: _ProjectViewModelAbstract.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectViewModelAbstract, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/project/interfaces/project.interface.ts
var ProjectStatusEnum;
(function(ProjectStatusEnum2) {
  ProjectStatusEnum2["Receive"] = "receive";
  ProjectStatusEnum2["Progress"] = "progress";
  ProjectStatusEnum2["Complete"] = "complete";
})(ProjectStatusEnum || (ProjectStatusEnum = {}));

// src/app/modules/project/components/project-list/project-list.ts
function ProjectList_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function ProjectList_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r1 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(error_r1);
  }
}
function ProjectList_div_12_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-card-header")(7, "mat-card-title")(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-card-subtitle")(12, "mat-chip", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "mat-card-content")(15, "p", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 19)(18, "div", 20)(19, "mat-icon");
    \u0275\u0275text(20, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "mat-icon");
    \u0275\u0275text(28, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 22)(32, "mat-icon");
    \u0275\u0275text(33, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "mat-card-actions")(37, "button", 23);
    \u0275\u0275listener("click", function ProjectList_div_12_mat_card_1_Template_button_click_37_listener($event) {
      const project_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.onEdit(project_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " \uC218\uC815 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 24);
    \u0275\u0275listener("click", function ProjectList_div_12_mat_card_1_Template_button_click_41_listener($event) {
      const project_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.onDelete(project_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(42, "mat-icon");
    \u0275\u0275text(43, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " \uC0AD\uC81C ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r3.getProjectGradient(project_r3.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r3.getStatusIconColor(project_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusIcon(project_r3.status), " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", ctx_r3.getStatusColor(project_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusLabel(project_r3.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r3.description || "\uC124\uBA85\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(23, 14, project_r3.startDate, "yyyy\uB144 MM\uC6D4 dd\uC77C"), " ~ ", \u0275\u0275pipeBind2(24, 17, project_r3.endDate, "MM\uC6D4 dd\uC77C"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r3.getDuration(project_r3), "\uC77C");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.getProgress(project_r3), "%");
  }
}
function ProjectList_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "\uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC5EC \uD300 \uD611\uC5C5\uC744 \uC2DC\uC791\uD558\uC138\uC694");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 2);
    \u0275\u0275listener("click", function ProjectList_div_12_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onCreate());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \uCCAB \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30 ");
    \u0275\u0275elementEnd()();
  }
}
function ProjectList_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ProjectList_div_12_mat_card_1_Template, 45, 20, "mat-card", 10);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ProjectList_div_12_div_3_Template, 11, 0, "div", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 2, ctx_r3.projectVM.projects$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(4, 4, ctx_r3.projectVM.projects$)) == null ? null : tmp_2_0.length) === 0);
  }
}
var ProjectList = class _ProjectList {
  projectVM = inject(ProjectViewModelAbstract);
  ProjectStatusEnum = ProjectStatusEnum;
  ngOnInit() {
    this.projectVM.loadProjects();
  }
  ngOnDestroy() {
  }
  /**
   * 상태 라벨 가져오기
   */
  getStatusLabel(status) {
    const labels = {
      [ProjectStatusEnum.Receive]: "\uC811\uC218\uB428",
      [ProjectStatusEnum.Progress]: "\uC9C4\uD589\uC911",
      [ProjectStatusEnum.Complete]: "\uC644\uB8CC\uB428"
    };
    return labels[status] || status;
  }
  /**
   * 상태 색상 가져오기
   */
  getStatusColor(status) {
    const colors = {
      [ProjectStatusEnum.Receive]: "accent",
      [ProjectStatusEnum.Progress]: "primary",
      [ProjectStatusEnum.Complete]: "warn"
    };
    return colors[status] || "primary";
  }
  /**
   * 상태 아이콘 가져오기
   */
  getStatusIcon(status) {
    const icons = {
      [ProjectStatusEnum.Receive]: "inbox",
      [ProjectStatusEnum.Progress]: "trending_up",
      [ProjectStatusEnum.Complete]: "check_circle"
    };
    return icons[status] || "folder";
  }
  /**
   * 상태 아이콘 색상
   */
  getStatusIconColor(status) {
    const colors = {
      [ProjectStatusEnum.Receive]: "#ff9800",
      [ProjectStatusEnum.Progress]: "#2196f3",
      [ProjectStatusEnum.Complete]: "#4caf50"
    };
    return colors[status] || "#757575";
  }
  /**
   * 프로젝트 그라데이션 배경
   */
  getProjectGradient(status) {
    const gradients = {
      [ProjectStatusEnum.Receive]: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      [ProjectStatusEnum.Progress]: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      [ProjectStatusEnum.Complete]: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    };
    return gradients[status] || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }
  /**
   * 프로젝트 기간 계산 (일)
   */
  getDuration(project) {
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1e3 * 60 * 60 * 24));
  }
  /**
   * 진행률 계산
   */
  getProgress(project) {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    if (now < start)
      return 0;
    if (now > end)
      return 100;
    const total = end.getTime() - start.getTime();
    const current = now.getTime() - start.getTime();
    return Math.round(current / total * 100);
  }
  /**
   * 프로젝트 수정
   */
  onEdit(project) {
    this.projectVM.openEditDialog(project);
  }
  /**
   * 프로젝트 삭제
   */
  onDelete(project) {
    this.projectVM.deleteProject(project.id);
  }
  /**
   * 새 프로젝트 생성
   */
  onCreate() {
    this.projectVM.openCreateDialog();
  }
  static \u0275fac = function ProjectList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectList, selectors: [["app-project-list"]], decls: 14, vars: 9, consts: [[1, "project-list-container"], [1, "header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "project-cards", 4, "ngIf"], [1, "loading-container"], ["diameter", "50"], [1, "error-container"], [1, "project-cards"], ["class", "project-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "project-card"], [1, "project-header"], [1, "project-image"], [1, "project-overlay"], [1, "project-title-overlay"], ["highlighted", "", 3, "color"], [1, "description"], [1, "dates"], [1, "date-item"], [1, "project-meta"], [1, "meta-item"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "mat-warn", 3, "click"], [1, "empty-state"]], template: function ProjectList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u{1F4CB} \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ProjectList_Template_button_click_4_listener() {
        return ctx.onCreate();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " \uC0C8 \uD504\uB85C\uC81D\uD2B8 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ProjectList_div_8_Template, 2, 0, "div", 3);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275template(10, ProjectList_div_10_Template, 5, 1, "div", 4);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275template(12, ProjectList_div_12_Template, 5, 6, "div", 5);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 3, ctx.projectVM.loading$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 5, ctx.projectVM.error$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 7, ctx.projectVM.loading$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatButtonModule, MatButton, MatIconModule, MatIcon, MatChipsModule, MatChip, MatProgressSpinnerModule, MatProgressSpinner, AsyncPipe, DatePipe], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module[_ngcontent-%COMP%] {\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-focus-overlay[_ngcontent-%COMP%] {\n  background-color: var(--project-accent);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%] {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-dialog-container[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n@keyframes _ngcontent-%COMP%_project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--project-bg-secondary);\n  min-height: 100%;\n}\n.project-list-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 24px;\n}\n.project-list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--project-border-color);\n}\n.project-list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  background: var(--project-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.project-list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: var(--project-gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.project-list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px var(--project-shadow);\n}\n.project-list-container[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 24px;\n}\n.project-list-container[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.project-list-container[_ngcontent-%COMP%]   .project-cards[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px var(--project-shadow);\n}\n/*# sourceMappingURL=project-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectList, [{
    type: Component,
    args: [{ selector: "app-project-list", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatChipsModule,
      MatProgressSpinnerModule
    ], template: `<div class="project-list-container">
  <div class="header">
    <h1>\u{1F4CB} \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC</h1>
    <button mat-raised-button color="primary" (click)="onCreate()">
      <mat-icon>add_circle</mat-icon>
      \uC0C8 \uD504\uB85C\uC81D\uD2B8
    </button>
  </div>

  <!-- \uB85C\uB529 \uC0C1\uD0DC -->
  <div *ngIf="projectVM.loading$ | async" class="loading-container">
    <mat-spinner diameter="50"></mat-spinner>
  </div>

  <!-- \uC5D0\uB7EC \uC0C1\uD0DC -->
  <div *ngIf="projectVM.error$ | async as error" class="error-container">
    <mat-icon>error_outline</mat-icon>
    <span>{{ error }}</span>
  </div>

  <!-- \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D -->
  <div class="project-cards" *ngIf="!(projectVM.loading$ | async)">
    <mat-card *ngFor="let project of projectVM.projects$ | async" class="project-card">
      <!-- \uD504\uB85C\uC81D\uD2B8 \uD5E4\uB354 \uC774\uBBF8\uC9C0 -->
      <div class="project-header">
        <div class="project-image" 
             [style.background]="getProjectGradient(project.status)">
        </div>
        <div class="project-overlay">
          <div class="project-title-overlay">{{ project.name }}</div>
        </div>
      </div>

      <mat-card-header>
        <mat-card-title>
          <mat-icon [style.color]="getStatusIconColor(project.status)">
            {{ getStatusIcon(project.status) }}
          </mat-icon>
          {{ project.name }}
        </mat-card-title>
        <mat-card-subtitle>
          <mat-chip [color]="getStatusColor(project.status)" highlighted>
            {{ getStatusLabel(project.status) }}
          </mat-chip>
        </mat-card-subtitle>
      </mat-card-header>
      
      <mat-card-content>
        <p class="description">{{ project.description || '\uC124\uBA85\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.' }}</p>
        
        <div class="dates">
          <div class="date-item">
            <mat-icon>event</mat-icon>
            <span>{{ project.startDate | date:'yyyy\uB144 MM\uC6D4 dd\uC77C' }} ~ {{ project.endDate | date:'MM\uC6D4 dd\uC77C' }}</span>
          </div>
        </div>

        <div class="project-meta">
          <div class="meta-item">
            <mat-icon>schedule</mat-icon>
            <span>{{ getDuration(project) }}\uC77C</span>
          </div>
          <div class="meta-item">
            <mat-icon>update</mat-icon>
            <span>{{ getProgress(project) }}%</span>
          </div>
        </div>
      </mat-card-content>
      
      <mat-card-actions>
        <button mat-button (click)="onEdit(project); $event.stopPropagation()">
          <mat-icon>edit</mat-icon>
          \uC218\uC815
        </button>
        <button mat-button class="mat-warn" (click)="onDelete(project); $event.stopPropagation()">
          <mat-icon>delete</mat-icon>
          \uC0AD\uC81C
        </button>
      </mat-card-actions>
    </mat-card>

    <!-- \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC744 \uB54C -->
    <div *ngIf="(projectVM.projects$ | async)?.length === 0" class="empty-state">
      <mat-icon>folder_open</mat-icon>
      <h2>\uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</h2>
      <p>\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC5EC \uD300 \uD611\uC5C5\uC744 \uC2DC\uC791\uD558\uC138\uC694</p>
      <button mat-raised-button color="primary" (click)="onCreate()">
        <mat-icon>add_circle</mat-icon>
        \uCCAB \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/project/components/project-list/project-list.scss */\n:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module * {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme .project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module {\n}\n.project-module .mat-mdc-card {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-button.mat-primary,\n.project-module .mat-mdc-raised-button.mat-primary,\n.project-module .mat-mdc-fab.mat-primary,\n.project-module .mat-mdc-mini-fab.mat-primary {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module .mat-mdc-button.mat-primary:hover,\n.project-module .mat-mdc-raised-button.mat-primary:hover,\n.project-module .mat-mdc-fab.mat-primary:hover,\n.project-module .mat-mdc-mini-fab.mat-primary:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module .mat-toolbar {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  background: var(--project-bg-secondary);\n}\n.project-module .mat-mdc-form-field .mat-mdc-form-field-focus-overlay {\n  background-color: var(--project-accent);\n}\n.project-module .mat-mdc-chip {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-chip.mat-primary {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-dialog-container {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module .mat-drawer {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module .mat-drawer-content {\n  background: var(--project-bg-secondary);\n}\n@keyframes project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n:host {\n  display: block;\n  background: var(--project-bg-secondary);\n  min-height: 100%;\n}\n.project-list-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 24px;\n}\n.project-list-container .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--project-border-color);\n}\n.project-list-container .header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  background: var(--project-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.project-list-container .header button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: var(--project-gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.project-list-container .header button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px var(--project-shadow);\n}\n.project-list-container .project-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 24px;\n}\n.project-list-container .project-cards .project-card {\n  background: var(--project-bg-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.project-list-container .project-cards .project-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px var(--project-shadow);\n}\n/*# sourceMappingURL=project-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectList, { className: "ProjectList", filePath: "src/app/modules/project/components/project-list/project-list.ts", lineNumber: 28 });
})();

// src/app/modules/project/components/kanban/kanban.ts
var _c02 = (a0, a1) => [a0, a1];
function Kanban_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementEnd();
  }
}
function Kanban_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19)(9, "mat-icon");
    \u0275\u0275text(10, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "mat-card-actions", 20)(16, "button", 21);
    \u0275\u0275listener("click", function Kanban_div_10_div_9_Template_button_click_16_listener() {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEdit(project_r4));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function Kanban_div_10_div_9_Template_button_click_19_listener() {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(project_r4));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 4, project_r4.startDate, "MM/dd"), " ~ ", \u0275\u0275pipeBind2(14, 7, project_r4.endDate, "MM/dd"));
  }
}
function Kanban_div_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19)(9, "mat-icon");
    \u0275\u0275text(10, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "mat-card-actions", 20)(16, "button", 21);
    \u0275\u0275listener("click", function Kanban_div_10_div_18_Template_button_click_16_listener() {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEdit(project_r6));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function Kanban_div_10_div_18_Template_button_click_19_listener() {
      const project_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(project_r6));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r6.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 4, project_r6.startDate, "MM/dd"), " ~ ", \u0275\u0275pipeBind2(14, 7, project_r6.endDate, "MM/dd"));
  }
}
function Kanban_div_10_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19)(9, "mat-icon");
    \u0275\u0275text(10, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "mat-card-actions", 20)(16, "button", 21);
    \u0275\u0275listener("click", function Kanban_div_10_div_27_Template_button_click_16_listener() {
      const project_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEdit(project_r8));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function Kanban_div_10_div_27_Template_button_click_19_listener() {
      const project_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(project_r8));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r8.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 4, project_r8.startDate, "MM/dd"), " ~ ", \u0275\u0275pipeBind2(14, 7, project_r8.endDate, "MM/dd"));
  }
}
function Kanban_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h2");
    \u0275\u0275text(4, "\uC811\uC218\uB428");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13, 0);
    \u0275\u0275listener("cdkDropListDropped", function Kanban_div_10_Template_div_cdkDropListDropped_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event, ctx_r1.ProjectStatusEnum.Receive));
    });
    \u0275\u0275template(9, Kanban_div_10_div_9_Template, 22, 10, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 15)(12, "h2");
    \u0275\u0275text(13, "\uC9C4\uD589\uC911");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13, 1);
    \u0275\u0275listener("cdkDropListDropped", function Kanban_div_10_Template_div_cdkDropListDropped_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event, ctx_r1.ProjectStatusEnum.Progress));
    });
    \u0275\u0275template(18, Kanban_div_10_div_18_Template, 22, 10, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 10)(20, "div", 16)(21, "h2");
    \u0275\u0275text(22, "\uC644\uB8CC\uB428");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 13, 2);
    \u0275\u0275listener("cdkDropListDropped", function Kanban_div_10_Template_div_cdkDropListDropped_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event, ctx_r1.ProjectStatusEnum.Complete));
    });
    \u0275\u0275template(27, Kanban_div_10_div_27_Template, 22, 10, "div", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const receiveList_r9 = \u0275\u0275reference(8);
    const progressList_r10 = \u0275\u0275reference(17);
    const completeList_r11 = \u0275\u0275reference(26);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.receiveProjects.length);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", ctx_r1.receiveProjects)("cdkDropListConnectedTo", \u0275\u0275pureFunction2(12, _c02, progressList_r10, completeList_r11));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.receiveProjects);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.progressProjects.length);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", ctx_r1.progressProjects)("cdkDropListConnectedTo", \u0275\u0275pureFunction2(15, _c02, receiveList_r9, completeList_r11));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.progressProjects);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.completeProjects.length);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", ctx_r1.completeProjects)("cdkDropListConnectedTo", \u0275\u0275pureFunction2(18, _c02, receiveList_r9, progressList_r10));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.completeProjects);
  }
}
var Kanban = class _Kanban {
  projectVM = inject(ProjectViewModelAbstract);
  ProjectStatusEnum = ProjectStatusEnum;
  // 상태별 프로젝트 목록
  receiveProjects = [];
  progressProjects = [];
  completeProjects = [];
  ngOnInit() {
    this.projectVM.loadProjects();
    this.projectVM.projects$.subscribe((projects) => {
      this.categorizeProjects(projects);
    });
  }
  /**
   * 프로젝트를 상태별로 분류
   */
  categorizeProjects(projects) {
    this.receiveProjects = projects.filter((p) => p.status === ProjectStatusEnum.Receive);
    this.progressProjects = projects.filter((p) => p.status === ProjectStatusEnum.Progress);
    this.completeProjects = projects.filter((p) => p.status === ProjectStatusEnum.Complete);
  }
  /**
   * 드래그 앤 드롭 이벤트 처리
   */
  drop(event, newStatus) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const project = event.previousContainer.data[event.previousIndex];
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.projectVM.changeProjectStatus(project.id, newStatus);
    }
  }
  /**
   * 새 프로젝트 생성
   */
  onCreate() {
    this.projectVM.openCreateDialog();
  }
  /**
   * 프로젝트 수정
   */
  onEdit(project) {
    this.projectVM.openEditDialog(project);
  }
  /**
   * 프로젝트 삭제
   */
  onDelete(project) {
    this.projectVM.deleteProject(project.id);
  }
  static \u0275fac = function Kanban_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Kanban)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Kanban, selectors: [["app-kanban"]], decls: 12, vars: 6, consts: [["receiveList", "cdkDropList"], ["progressList", "cdkDropList"], ["completeList", "cdkDropList"], [1, "kanban-container"], [1, "header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "kanban-board", 4, "ngIf"], [1, "loading-container"], [1, "kanban-board"], [1, "kanban-column"], [1, "column-header", "receive"], [1, "count"], ["cdkDropList", "", 1, "project-list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["class", "project-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "column-header", "progress"], [1, "column-header", "complete"], ["cdkDrag", "", 1, "project-item"], [1, "description"], [1, "dates"], ["align", "end"], ["mat-icon-button", "", "matTooltip", "\uC218\uC815", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "\uC0AD\uC81C", 3, "click"]], template: function Kanban_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1");
      \u0275\u0275text(3, "\uD504\uB85C\uC81D\uD2B8 \uCE78\uBC18\uBCF4\uB4DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 5);
      \u0275\u0275listener("click", function Kanban_Template_button_click_4_listener() {
        return ctx.onCreate();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " \uC0C8 \uD504\uB85C\uC81D\uD2B8 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, Kanban_div_8_Template, 2, 0, "div", 6);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275template(10, Kanban_div_10_Template, 28, 21, "div", 7);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 2, ctx.projectVM.loading$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(11, 4, ctx.projectVM.loading$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DragDropModule, CdkDropList, CdkDrag, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatTooltip, AsyncPipe, DatePipe], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module[_ngcontent-%COMP%] {\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-focus-overlay[_ngcontent-%COMP%] {\n  background-color: var(--project-accent);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%] {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-dialog-container[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n@keyframes _ngcontent-%COMP%_project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.kanban-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: var(--project-bg-secondary);\n  padding: 24px;\n}\n.kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--project-border-color);\n}\n.kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  background: var(--project-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: var(--project-gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px var(--project-shadow);\n}\n.kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px var(--project-shadow);\n}\n.kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.kanban-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--project-bg-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 16px;\n  padding: 20px;\n  min-height: 0;\n  transition: all 0.3s ease;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  background: var(--project-gradient-primary);\n  box-shadow: 0 4px 12px var(--project-shadow);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 28px;\n  text-align: center;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header.receive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header.progress[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2196f3 0%,\n      #1976d2 100%);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header.complete[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #388e3c 100%);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 200px;\n  padding: 4px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 3px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 3px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  animation: fadeIn 0.3s ease;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: move;\n  background: var(--project-bg-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px var(--project-shadow);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px var(--project-shadow);\n  border-color: var(--project-primary);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  line-height: 1.4;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--project-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--project-text-secondary);\n  padding: 8px 12px;\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--project-primary);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0 -16px -16px -16px;\n  padding: 12px 16px;\n  border-top: 1px solid var(--project-border-color);\n  background: var(--project-bg-secondary);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--project-primary);\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--project-primary-light);\n  transform: scale(1.05);\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .project-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n  opacity: 0.95;\n  transform: rotate(3deg);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  border: 2px solid var(--project-primary);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  border: 2px dashed var(--project-primary);\n  background: var(--project-bg-secondary);\n  border-radius: 12px;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  opacity: 0.7;\n}\n@media (max-width: 1024px) {\n  .kanban-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    overflow-y: auto;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%] {\n    min-height: 400px;\n  }\n}\n@media (max-width: 768px) {\n  .kanban-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 13px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 12px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=kanban.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Kanban, [{
    type: Component,
    args: [{ selector: "app-kanban", standalone: true, imports: [
      CommonModule,
      DragDropModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatTooltipModule
    ], template: `<div class="kanban-container">
  <div class="header">
    <h1>\uD504\uB85C\uC81D\uD2B8 \uCE78\uBC18\uBCF4\uB4DC</h1>
    <button mat-raised-button color="primary" (click)="onCreate()">
      <mat-icon>add</mat-icon>
      \uC0C8 \uD504\uB85C\uC81D\uD2B8
    </button>
  </div>

  <!-- \uB85C\uB529 \uC0C1\uD0DC -->
  <div *ngIf="projectVM.loading$ | async" class="loading-container">
    <mat-spinner></mat-spinner>
  </div>

  <!-- \uCE78\uBC18\uBCF4\uB4DC -->
  <div class="kanban-board" *ngIf="!(projectVM.loading$ | async)">
    <!-- \uC811\uC218\uB428 \uCEEC\uB7FC -->
    <div class="kanban-column">
      <div class="column-header receive">
        <h2>\uC811\uC218\uB428</h2>
        <span class="count">{{ receiveProjects.length }}</span>
      </div>
      <div
        cdkDropList
        #receiveList="cdkDropList"
        [cdkDropListData]="receiveProjects"
        [cdkDropListConnectedTo]="[progressList, completeList]"
        class="project-list"
        (cdkDropListDropped)="drop($event, ProjectStatusEnum.Receive)">
        <div class="project-item" *ngFor="let project of receiveProjects" cdkDrag>
          <mat-card>
            <mat-card-header>
              <mat-card-title>{{ project.name }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="description">{{ project.description }}</p>
              <div class="dates">
                <mat-icon>event</mat-icon>
                <span>{{ project.startDate | date:'MM/dd' }} ~ {{ project.endDate | date:'MM/dd' }}</span>
              </div>
            </mat-card-content>
            <mat-card-actions align="end">
              <button mat-icon-button (click)="onEdit(project)" matTooltip="\uC218\uC815">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" (click)="onDelete(project)" matTooltip="\uC0AD\uC81C">
                <mat-icon>delete</mat-icon>
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>

    <!-- \uC9C4\uD589\uC911 \uCEEC\uB7FC -->
    <div class="kanban-column">
      <div class="column-header progress">
        <h2>\uC9C4\uD589\uC911</h2>
        <span class="count">{{ progressProjects.length }}</span>
      </div>
      <div
        cdkDropList
        #progressList="cdkDropList"
        [cdkDropListData]="progressProjects"
        [cdkDropListConnectedTo]="[receiveList, completeList]"
        class="project-list"
        (cdkDropListDropped)="drop($event, ProjectStatusEnum.Progress)">
        <div class="project-item" *ngFor="let project of progressProjects" cdkDrag>
          <mat-card>
            <mat-card-header>
              <mat-card-title>{{ project.name }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="description">{{ project.description }}</p>
              <div class="dates">
                <mat-icon>event</mat-icon>
                <span>{{ project.startDate | date:'MM/dd' }} ~ {{ project.endDate | date:'MM/dd' }}</span>
              </div>
            </mat-card-content>
            <mat-card-actions align="end">
              <button mat-icon-button (click)="onEdit(project)" matTooltip="\uC218\uC815">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" (click)="onDelete(project)" matTooltip="\uC0AD\uC81C">
                <mat-icon>delete</mat-icon>
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>

    <!-- \uC644\uB8CC\uB428 \uCEEC\uB7FC -->
    <div class="kanban-column">
      <div class="column-header complete">
        <h2>\uC644\uB8CC\uB428</h2>
        <span class="count">{{ completeProjects.length }}</span>
      </div>
      <div
        cdkDropList
        #completeList="cdkDropList"
        [cdkDropListData]="completeProjects"
        [cdkDropListConnectedTo]="[receiveList, progressList]"
        class="project-list"
        (cdkDropListDropped)="drop($event, ProjectStatusEnum.Complete)">
        <div class="project-item" *ngFor="let project of completeProjects" cdkDrag>
          <mat-card>
            <mat-card-header>
              <mat-card-title>{{ project.name }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="description">{{ project.description }}</p>
              <div class="dates">
                <mat-icon>event</mat-icon>
                <span>{{ project.startDate | date:'MM/dd' }} ~ {{ project.endDate | date:'MM/dd' }}</span>
              </div>
            </mat-card-content>
            <mat-card-actions align="end">
              <button mat-icon-button (click)="onEdit(project)" matTooltip="\uC218\uC815">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" (click)="onDelete(project)" matTooltip="\uC0AD\uC81C">
                <mat-icon>delete</mat-icon>
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/project/components/kanban/kanban.scss */\n:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module * {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme .project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module {\n}\n.project-module .mat-mdc-card {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-button.mat-primary,\n.project-module .mat-mdc-raised-button.mat-primary,\n.project-module .mat-mdc-fab.mat-primary,\n.project-module .mat-mdc-mini-fab.mat-primary {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module .mat-mdc-button.mat-primary:hover,\n.project-module .mat-mdc-raised-button.mat-primary:hover,\n.project-module .mat-mdc-fab.mat-primary:hover,\n.project-module .mat-mdc-mini-fab.mat-primary:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module .mat-toolbar {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  background: var(--project-bg-secondary);\n}\n.project-module .mat-mdc-form-field .mat-mdc-form-field-focus-overlay {\n  background-color: var(--project-accent);\n}\n.project-module .mat-mdc-chip {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-chip.mat-primary {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-dialog-container {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module .mat-drawer {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module .mat-drawer-content {\n  background: var(--project-bg-secondary);\n}\n@keyframes project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.kanban-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: var(--project-bg-secondary);\n  padding: 24px;\n}\n.kanban-container .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--project-border-color);\n}\n.kanban-container .header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  background: var(--project-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.kanban-container .header button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  background: var(--project-gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px var(--project-shadow);\n}\n.kanban-container .header button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px var(--project-shadow);\n}\n.kanban-container .header button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.kanban-container .loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n.kanban-container .kanban-board {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n}\n.kanban-container .kanban-board .kanban-column {\n  display: flex;\n  flex-direction: column;\n  background: var(--project-bg-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 16px;\n  padding: 20px;\n  min-height: 0;\n  transition: all 0.3s ease;\n}\n.kanban-container .kanban-board .kanban-column .column-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  background: var(--project-gradient-primary);\n  box-shadow: 0 4px 12px var(--project-shadow);\n}\n.kanban-container .kanban-board .kanban-column .column-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.kanban-container .kanban-board .kanban-column .column-header .count {\n  background: rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 28px;\n  text-align: center;\n}\n.kanban-container .kanban-board .kanban-column .column-header.receive {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n}\n.kanban-container .kanban-board .kanban-column .column-header.progress {\n  background:\n    linear-gradient(\n      135deg,\n      #2196f3 0%,\n      #1976d2 100%);\n}\n.kanban-container .kanban-board .kanban-column .column-header.complete {\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #388e3c 100%);\n}\n.kanban-container .kanban-board .kanban-column .project-list {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 200px;\n  padding: 4px;\n}\n.kanban-container .kanban-board .kanban-column .project-list::-webkit-scrollbar {\n  width: 6px;\n}\n.kanban-container .kanban-board .kanban-column .project-list::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 3px;\n}\n.kanban-container .kanban-board .kanban-column .project-list::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 3px;\n}\n.kanban-container .kanban-board .kanban-column .project-list::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item {\n  margin-bottom: 12px;\n  animation: fadeIn 0.3s ease;\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card {\n  cursor: move;\n  background: var(--project-bg-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px var(--project-shadow);\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px var(--project-shadow);\n  border-color: var(--project-primary);\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-header {\n  margin-bottom: 12px;\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-header mat-card-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  line-height: 1.4;\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-content .description {\n  font-size: 14px;\n  color: var(--project-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 16px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-content .dates {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--project-text-secondary);\n  padding: 8px 12px;\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-content .dates mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--project-primary);\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-actions {\n  margin: 0 -16px -16px -16px;\n  padding: 12px 16px;\n  border-top: 1px solid var(--project-border-color);\n  background: var(--project-bg-secondary);\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-actions button {\n  color: var(--project-primary);\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.kanban-container .kanban-board .kanban-column .project-list .project-item mat-card mat-card-actions button:hover {\n  background: var(--project-primary-light);\n  transform: scale(1.05);\n}\n.kanban-container .kanban-board .kanban-column .project-list.cdk-drop-list-dragging .project-item:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag-preview {\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);\n  opacity: 0.95;\n  transform: rotate(3deg);\n}\n.cdk-drag-preview mat-card {\n  background: var(--project-bg-primary);\n  border: 2px solid var(--project-primary);\n}\n.cdk-drag-placeholder {\n  opacity: 0.3;\n  border: 2px dashed var(--project-primary);\n  background: var(--project-bg-secondary);\n  border-radius: 12px;\n}\n.cdk-drag-placeholder mat-card {\n  visibility: hidden;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drop-list-dragging .project-item:not(.cdk-drag-placeholder) {\n  opacity: 0.7;\n}\n@media (max-width: 1024px) {\n  .kanban-container {\n    padding: 16px;\n  }\n  .kanban-container .header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .kanban-container .header h1 {\n    font-size: 24px;\n  }\n  .kanban-container .header button {\n    width: 100%;\n    justify-content: center;\n  }\n  .kanban-container .kanban-board {\n    grid-template-columns: 1fr;\n    overflow-y: auto;\n  }\n  .kanban-container .kanban-board .kanban-column {\n    min-height: 400px;\n  }\n}\n@media (max-width: 768px) {\n  .kanban-container {\n    padding: 12px;\n  }\n  .kanban-container .header {\n    margin-bottom: 20px;\n  }\n  .kanban-container .header h1 {\n    font-size: 20px;\n  }\n  .kanban-container .header button {\n    padding: 10px 20px;\n    font-size: 13px;\n  }\n  .kanban-container .kanban-board {\n    gap: 16px;\n  }\n  .kanban-container .kanban-board .kanban-column {\n    padding: 16px;\n    border-radius: 12px;\n  }\n  .kanban-container .kanban-board .kanban-column .column-header {\n    padding: 12px;\n  }\n  .kanban-container .kanban-board .kanban-column .column-header h2 {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=kanban.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Kanban, { className: "Kanban", filePath: "src/app/modules/project/components/kanban/kanban.ts", lineNumber: 30 });
})();

// src/app/modules/project/viewmodels/project.viewmodel.ts
var ProjectViewModel = class _ProjectViewModel extends ProjectViewModelAbstract {
  constructor() {
    super();
    this.loadProjects();
  }
  /**
   * 서버에서 프로젝트 목록 로드
   */
  loadProjects(userId) {
    this.loading$.next(true);
    this.error$.next(null);
    const targetUserId = userId || "temp-user-id";
    this.projectService.getProjectsByUserId(targetUserId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (projects) => {
        this.projects$.next(projects);
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 프로젝트 생성 다이얼로그 열기
   */
  openCreateDialog() {
    const testProject = {
      name: "Test Project",
      status: ProjectStatusEnum.Receive,
      startDate: /* @__PURE__ */ new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3),
      // 30일 후
      description: "Test project description",
      leader: "user-id",
      members: []
    };
  }
  /**
   * 프로젝트 수정 다이얼로그 열기
   */
  openEditDialog(project) {
  }
  /**
   * 프로젝트 생성
   */
  createProject(data) {
    this.loading$.next(true);
    const payload = {
      organizationId: data.organizationId || "temp-org-id",
      // 임시 조직 ID
      name: data.name,
      startDate: data.startDate,
      endDate: data.endDate,
      leader: data.leader || "temp-user-id",
      // 임시 리더 ID
      members: data.members || [],
      description: data.description || ""
    };
    this.projectService.createProject(payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        const project = result.project || result;
        const currentProjects = this.projects$.getValue();
        this.projects$.next([...currentProjects, project]);
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 프로젝트 업데이트
   */
  updateProject(projectId, data) {
    this.loading$.next(true);
    const payload = __spreadValues({
      id: projectId
    }, data);
    this.projectService.updateProject(payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedProject) => {
        const currentProjects = this.projects$.getValue();
        const index = currentProjects.findIndex((p) => p.id === projectId);
        if (index !== -1) {
          currentProjects[index] = updatedProject;
          this.projects$.next([...currentProjects]);
        }
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 프로젝트 삭제
   */
  deleteProject(projectId) {
    if (!confirm("\uC815\uB9D0\uB85C \uC774 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      return;
    }
    this.loading$.next(true);
    this.projectService.deleteProject(projectId).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        const currentProjects = this.projects$.getValue();
        this.projects$.next(currentProjects.filter((p) => p.id !== projectId));
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 프로젝트 상태 변경
   */
  changeProjectStatus(projectId, status) {
    this.updateProject(projectId, { status });
  }
  // TODO: 프로젝트 멤버 관리 기능 구현 예정
  // 별도의 project-permission API 연동 필요
  /**
   * 프로젝트 멤버 조회 (임시 비활성화)
   */
  loadProjectMembers(projectId) {
  }
  /**
   * 프로젝트에 멤버 추가 (임시 비활성화)
   */
  addMember(projectId, userId, role) {
  }
  /**
   * 프로젝트에서 멤버 제거 (임시 비활성화)
   */
  removeMember(projectId, userId) {
  }
  static \u0275fac = function ProjectViewModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectViewModel)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectViewModel, factory: _ProjectViewModel.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectViewModel, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/project/interfaces/schedule.interface.ts
var Priority;
(function(Priority2) {
  Priority2["High"] = "HIGH";
  Priority2["Medium"] = "MEDIUM";
  Priority2["Low"] = "LOW";
})(Priority || (Priority = {}));
var OwnerType;
(function(OwnerType2) {
  OwnerType2["User"] = "USER";
  OwnerType2["Project"] = "PROJECT";
})(OwnerType || (OwnerType = {}));

// src/app/modules/project/services/schedule.service.ts
var ScheduleService = class _ScheduleService {
  http = inject(HttpClient);
  baseUrl = environment.baseSyncUrl + "/schedule";
  /**
   * ID로 스케줄 조회
   * SyncBI-Station API: GET /schedule?id={id}
   */
  getScheduleById(id) {
    const params = new HttpParams().set("id", id);
    return this.http.get(this.baseUrl, { params }).pipe(map((schedule) => {
      if (!schedule)
        return null;
      return __spreadProps(__spreadValues({}, schedule), {
        startDate: new Date(schedule.startDate),
        endDate: new Date(schedule.endDate)
      });
    }), catchError((error) => {
      return of(null);
    }));
  }
  /**
   * 담당자 ID로 스케줄 목록 조회
   * SyncBI-Station API: GET /schedule?managerId={id}
   */
  getSchedulesByManagerId(managerId) {
    const params = new HttpParams().set("managerId", managerId);
    return this.http.get(this.baseUrl, { params }).pipe(map((schedules) => {
      return schedules.map((schedule) => __spreadProps(__spreadValues({}, schedule), {
        startDate: new Date(schedule.startDate),
        endDate: new Date(schedule.endDate)
      }));
    }), catchError((error) => {
      return of([]);
    }));
  }
  /**
   * 프로젝트 ID로 스케줄 목록 조회 (ownerId로 필터링)
   */
  getSchedulesByProjectId(projectId) {
    return this.http.get(this.baseUrl).pipe(map((schedules) => schedules.filter((s) => s.ownerId === projectId && s.ownerType === OwnerType.Project).map((schedule) => __spreadProps(__spreadValues({}, schedule), {
      startDate: new Date(schedule.startDate),
      endDate: new Date(schedule.endDate)
    }))), catchError((error) => {
      return of([]);
    }));
  }
  /**
   * 새 스케줄 생성
   * SyncBI-Station API: POST /schedule
   */
  createSchedule(payload) {
    return this.http.post(this.baseUrl, payload).pipe(map((schedule) => {
      return __spreadProps(__spreadValues({}, schedule), {
        startDate: new Date(schedule.startDate),
        endDate: new Date(schedule.endDate)
      });
    }), catchError((error) => {
      throw error;
    }));
  }
  /**
   * 스케줄 업데이트
   * SyncBI-Station API: PATCH /schedule
   */
  updateSchedule(payload) {
    return this.http.patch(this.baseUrl, payload).pipe(map((schedule) => {
      return __spreadProps(__spreadValues({}, schedule), {
        startDate: new Date(schedule.startDate),
        endDate: new Date(schedule.endDate)
      });
    }), catchError((error) => {
      throw error;
    }));
  }
  /**
   * 스케줄 상태만 업데이트 (칸반보드 Drag & Drop용)
   */
  updateScheduleStatus(id, status) {
    return this.updateSchedule({ id, status });
  }
  /**
   * 스케줄 삭제
   * SyncBI-Station API: DELETE /schedule?id={id}
   */
  deleteSchedule(id) {
    const params = new HttpParams().set("id", id);
    return this.http.delete(this.baseUrl, { params }).pipe(map(() => {
    }), catchError((error) => {
      throw error;
    }));
  }
  static \u0275fac = function ScheduleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleService, factory: _ScheduleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/project/abstracts/schedule-viewmodel.abstract.ts
var ScheduleViewModelAbstract = class _ScheduleViewModelAbstract {
  // 의존성 주입
  scheduleService = inject(ScheduleService);
  dialog = inject(MatDialog);
  // 상태 관리
  schedules$ = new BehaviorSubject([]);
  selectedSchedule$ = new BehaviorSubject(null);
  loading$ = new BehaviorSubject(false);
  error$ = new BehaviorSubject(null);
  // 테이블 데이터
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["name", "managerId", "priority", "status", "startDate", "endDate", "actions"];
  // Destroy subject
  destroy$ = new Subject();
  constructor() {
    this.init();
  }
  /**
   * 초기화
   */
  init() {
    this.schedules$.subscribe((schedules) => {
      this.dataSource.data = schedules;
    });
  }
  /**
   * 일정 선택
   */
  selectSchedule(schedule) {
    this.selectedSchedule$.next(schedule);
  }
  /**
   * 모든 일정 가져오기 (동기적)
   */
  getAllSchedules() {
    return this.schedules$.getValue();
  }
  /**
   * 에러 처리
   */
  handleError(error) {
    this.error$.next(error.message || "An error occurred");
    this.loading$.next(false);
  }
  /**
   * 정리
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function ScheduleViewModelAbstract_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleViewModelAbstract)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleViewModelAbstract, factory: _ScheduleViewModelAbstract.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleViewModelAbstract, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/project/viewmodels/schedule.viewmodel.ts
var ScheduleViewModel = class _ScheduleViewModel extends ScheduleViewModelAbstract {
  constructor() {
    super();
  }
  /**
   * 모든 일정 로드
   */
  loadSchedules(ownerId, ownerType) {
    this.loading$.next(true);
    this.error$.next(null);
    this.schedules$.next([]);
    this.loading$.next(false);
  }
  /**
   * 프로젝트의 일정들 로드
   */
  loadProjectSchedules(projectId) {
    this.loading$.next(true);
    this.error$.next(null);
    this.scheduleService.getSchedulesByProjectId(projectId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (schedules) => {
        this.schedules$.next(schedules);
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 일정 생성 다이얼로그 열기
   */
  openCreateDialog(projectId) {
  }
  /**
   * 일정 수정 다이얼로그 열기
   */
  openEditDialog(schedule) {
  }
  /**
   * 일정 생성
   */
  createSchedule(data) {
    this.loading$.next(true);
    this.scheduleService.createSchedule(data).pipe(takeUntil(this.destroy$)).subscribe({
      next: (schedule) => {
        const currentSchedules = this.schedules$.getValue();
        this.schedules$.next([...currentSchedules, schedule]);
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 일정 업데이트
   */
  updateSchedule(scheduleId, data) {
    this.loading$.next(true);
    const payload = __spreadValues({
      id: scheduleId
    }, data);
    this.scheduleService.updateSchedule(payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedSchedule) => {
        const currentSchedules = this.schedules$.getValue();
        const index = currentSchedules.findIndex((s) => s.id === scheduleId);
        if (index !== -1) {
          currentSchedules[index] = updatedSchedule;
          this.schedules$.next([...currentSchedules]);
        }
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 일정 삭제
   */
  deleteSchedule(scheduleId) {
    if (!confirm("\uC815\uB9D0\uB85C \uC774 \uC77C\uC815\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
      return;
    }
    this.loading$.next(true);
    this.scheduleService.deleteSchedule(scheduleId).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        const currentSchedules = this.schedules$.getValue();
        this.schedules$.next(currentSchedules.filter((s) => s.id !== scheduleId));
        this.loading$.next(false);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  /**
   * 일정 상태 변경
   */
  changeScheduleStatus(scheduleId, status) {
    const statusEnum = status;
    this.updateSchedule(scheduleId, { status: statusEnum });
  }
  /**
   * 우선순위 변경
   */
  changePriority(scheduleId, priority) {
    this.updateSchedule(scheduleId, { priority });
  }
  /**
   * 날짜 범위로 일정 필터링
   */
  filterSchedulesByDateRange(startDate, endDate) {
    const allSchedules = this.schedules$.getValue();
    return allSchedules.filter((schedule) => {
      const scheduleStart = new Date(schedule.startDate);
      const scheduleEnd = new Date(schedule.endDate);
      return scheduleStart >= startDate && scheduleEnd <= endDate;
    });
  }
  /**
   * 우선순위로 일정 필터링
   */
  filterSchedulesByPriority(priority) {
    const allSchedules = this.schedules$.getValue();
    return allSchedules.filter((schedule) => schedule.priority === priority);
  }
  /**
   * 상태로 일정 필터링
   */
  filterSchedulesByStatus(status) {
    const allSchedules = this.schedules$.getValue();
    return allSchedules.filter((schedule) => schedule.status === status);
  }
  static \u0275fac = function ScheduleViewModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleViewModel)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleViewModel, factory: _ScheduleViewModel.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleViewModel, [{
    type: Injectable
  }], () => [], null);
})();

// src/app/modules/project/components/gantt/gantt.ts
function GanttComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\uD504\uB85C\uC81D\uD2B8 \uB85C\uB529 \uC911...");
    \u0275\u0275elementEnd()();
  }
}
function GanttComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function GanttComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProjects());
    });
    \u0275\u0275text(6, " \uB2E4\uC2DC \uC2DC\uB3C4 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function GanttComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "calendar_view_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "\uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC5EC \uAC04\uD2B8 \uCC28\uD2B8\uB97C \uC2DC\uC791\uD558\uC138\uC694.");
    \u0275\u0275elementEnd()();
  }
}
function GanttComponent_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "mat-icon", 38);
    \u0275\u0275text(4, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "mat-chip");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r1.rowHeight, "px");
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", task_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", task_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(task_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDateDisplay(task_r3.startDate), " ~ ", ctx_r1.formatDateDisplay(task_r3.endDate), " ");
  }
}
function GanttComponent_div_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("min-width", ctx_r1.dayWidth, "px");
    \u0275\u0275classProp("today", column_r4.isToday);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r4.label);
  }
}
function GanttComponent_div_34_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 44);
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("min-width", ctx_r1.dayWidth, "px");
    \u0275\u0275classProp("today-line", column_r5.isToday);
  }
}
function GanttComponent_div_34_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275listener("click", function GanttComponent_div_34_div_16_Template_div_click_2_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTaskClick(task_r7));
    });
    \u0275\u0275elementStart(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r1.rowHeight, "px");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", ctx_r1.getBarStyle(task_r7))("matTooltip", task_r7.name + " (" + task_r7.progress.toFixed(0) + "%)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r7.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", task_r7.progress, "%");
  }
}
function GanttComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "div", 23);
    \u0275\u0275text(5, "\uD504\uB85C\uC81D\uD2B8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275template(7, GanttComponent_div_34_div_7_Template, 12, 9, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "div", 27)(10, "div", 28);
    \u0275\u0275template(11, GanttComponent_div_34_div_11_Template, 3, 5, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 30)(13, "div", 31);
    \u0275\u0275template(14, GanttComponent_div_34_div_14_Template, 1, 4, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 33);
    \u0275\u0275template(16, GanttComponent_div_34_div_16_Template, 7, 7, "div", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.ganttTasks);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.timelineColumns);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.timelineColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.ganttTasks);
  }
}
function GanttComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "h3");
    \u0275\u0275text(2, "\uBC94\uB840");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "div", 53);
    \u0275\u0275element(5, "div", 54);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\uC811\uC218");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 53);
    \u0275\u0275element(9, "div", 55);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\uC9C4\uD589\uC911");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 53);
    \u0275\u0275element(13, "div", 56);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "\uC644\uB8CC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275element(17, "div", 57);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\uC624\uB298");
    \u0275\u0275elementEnd()()()();
  }
}
var GanttComponent = class _GanttComponent {
  projectViewModel;
  scheduleViewModel;
  destroy$ = new Subject();
  projects = [];
  ganttTasks = [];
  timelineColumns = [];
  loading = false;
  error = null;
  // Gantt config
  dayWidth = 40;
  // 각 날짜 셀의 너비 (px)
  rowHeight = 60;
  // 각 행의 높이 (px)
  viewMode = "week";
  // Timeline range
  startDate = /* @__PURE__ */ new Date();
  endDate = /* @__PURE__ */ new Date();
  today = /* @__PURE__ */ new Date();
  constructor(projectViewModel, scheduleViewModel) {
    this.projectViewModel = projectViewModel;
    this.scheduleViewModel = scheduleViewModel;
  }
  ngOnInit() {
    this.loadProjects();
    this.setupSubscriptions();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupSubscriptions() {
    this.projectViewModel.projects$.pipe(takeUntil(this.destroy$)).subscribe((projects) => {
      this.projects = projects;
      this.buildGanttData();
    });
    this.projectViewModel.loading$.pipe(takeUntil(this.destroy$)).subscribe((loading) => this.loading = loading);
    this.projectViewModel.error$.pipe(takeUntil(this.destroy$)).subscribe((error) => this.error = error);
  }
  loadProjects() {
    const userId = "test-user-id";
    this.projectViewModel.loadProjects(userId);
  }
  buildGanttData() {
    if (!this.projects.length) {
      this.ganttTasks = [];
      this.timelineColumns = [];
      return;
    }
    this.ganttTasks = this.projects.map((project) => ({
      id: project.id,
      name: project.name,
      startDate: new Date(project.startDate),
      endDate: new Date(project.endDate),
      progress: this.calculateProgress(project),
      status: project.status,
      schedules: [],
      // TODO: Load schedules per project
      color: this.getStatusColor(project.status)
    }));
    this.calculateTimelineRange();
    this.generateTimelineColumns();
  }
  calculateTimelineRange() {
    if (!this.ganttTasks.length)
      return;
    const allDates = this.ganttTasks.flatMap((task) => [task.startDate, task.endDate]);
    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));
    this.startDate = new Date(minDate);
    this.startDate.setMonth(this.startDate.getMonth() - 1);
    this.endDate = new Date(maxDate);
    this.endDate.setMonth(this.endDate.getMonth() + 1);
  }
  generateTimelineColumns() {
    this.timelineColumns = [];
    const current = new Date(this.startDate);
    while (current <= this.endDate) {
      const isToday = this.isSameDay(current, this.today);
      switch (this.viewMode) {
        case "day":
          this.timelineColumns.push({
            date: new Date(current),
            label: this.formatDate(current, "day"),
            isToday
          });
          current.setDate(current.getDate() + 1);
          break;
        case "week":
          this.timelineColumns.push({
            date: new Date(current),
            label: this.formatDate(current, "week"),
            isToday
          });
          current.setDate(current.getDate() + 7);
          break;
        case "month":
          this.timelineColumns.push({
            date: new Date(current),
            label: this.formatDate(current, "month"),
            isToday
          });
          current.setMonth(current.getMonth() + 1);
          break;
      }
    }
  }
  formatDate(date, mode) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    switch (mode) {
      case "day":
        return `${month}/${day}`;
      case "week":
        return `W${this.getWeekNumber(date)}`;
      case "month":
        return date.toLocaleDateString("ko-KR", { year: "numeric", month: "short" });
      default:
        return "";
    }
  }
  getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 864e5;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }
  isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  calculateProgress(project) {
    const total = project.endDate.getTime() - project.startDate.getTime();
    const elapsed = Date.now() - project.startDate.getTime();
    return Math.min(Math.max(elapsed / total * 100, 0), 100);
  }
  getStatusColor(status) {
    switch (status) {
      case ProjectStatusEnum.Receive:
        return "#ff9800";
      case ProjectStatusEnum.Progress:
        return "#2196f3";
      case ProjectStatusEnum.Complete:
        return "#4caf50";
      default:
        return "#9e9e9e";
    }
  }
  // Calculate bar position and width
  getBarStyle(task) {
    const taskStart = task.startDate.getTime();
    const taskEnd = task.endDate.getTime();
    const timelineStart = this.startDate.getTime();
    const timelineEnd = this.endDate.getTime();
    const totalDuration = timelineEnd - timelineStart;
    const taskDuration = taskEnd - taskStart;
    const taskOffset = taskStart - timelineStart;
    const left = taskOffset / totalDuration * 100;
    const width = taskDuration / totalDuration * 100;
    return {
      left: `${left}%`,
      width: `${width}%`,
      backgroundColor: task.color,
      height: "80%",
      top: "10%"
    };
  }
  // View mode controls
  changeViewMode(mode) {
    this.viewMode = mode;
    this.generateTimelineColumns();
  }
  // Zoom controls
  zoomIn() {
    if (this.dayWidth < 80) {
      this.dayWidth += 10;
    }
  }
  zoomOut() {
    if (this.dayWidth > 20) {
      this.dayWidth -= 10;
    }
  }
  // Navigate timeline
  scrollToToday() {
    const todayColumn = this.timelineColumns.find((col) => col.isToday);
    if (todayColumn) {
    }
  }
  // Task interactions
  onTaskClick(task) {
  }
  formatDateDisplay(date) {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  getStatusText(status) {
    switch (status) {
      case ProjectStatusEnum.Receive:
        return "\uC811\uC218";
      case ProjectStatusEnum.Progress:
        return "\uC9C4\uD589\uC911";
      case ProjectStatusEnum.Complete:
        return "\uC644\uB8CC";
      default:
        return "\uC54C \uC218 \uC5C6\uC74C";
    }
  }
  static \u0275fac = function GanttComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GanttComponent)(\u0275\u0275directiveInject(ProjectViewModelAbstract), \u0275\u0275directiveInject(ScheduleViewModelAbstract));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GanttComponent, selectors: [["app-gantt"]], features: [\u0275\u0275ProvidersFeature([
    { provide: ProjectViewModelAbstract, useClass: ProjectViewModel },
    { provide: ScheduleViewModelAbstract, useClass: ScheduleViewModel },
    ProjectService,
    ScheduleService
  ])], decls: 36, vars: 11, consts: [[1, "gantt-container"], [1, "gantt-header"], [1, "header-left"], [1, "header-right"], [1, "view-mode-buttons"], ["mat-raised-button", "", 3, "click"], [1, "zoom-controls"], ["mat-icon-button", "", "matTooltip", "\uCD95\uC18C", 3, "click"], ["mat-icon-button", "", "matTooltip", "\uD655\uB300", 3, "click"], ["mat-icon-button", "", "matTooltip", "\uC624\uB298\uB85C \uC774\uB3D9", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "gantt-content", 4, "ngIf"], ["class", "gantt-legend", 4, "ngIf"], [1, "loading-container"], [1, "error-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "empty-state"], [1, "gantt-content"], [1, "gantt-wrapper"], [1, "task-list"], [1, "task-list-header"], [1, "header-cell"], [1, "task-list-body"], ["class", "task-row", 3, "height", 4, "ngFor", "ngForOf"], [1, "timeline-container"], [1, "timeline-header"], [1, "timeline-columns"], ["class", "timeline-column", 3, "today", "min-width", 4, "ngFor", "ngForOf"], [1, "timeline-body"], [1, "timeline-grid"], ["class", "grid-line", 3, "today-line", "min-width", 4, "ngFor", "ngForOf"], [1, "timeline-rows"], ["class", "timeline-row", 3, "height", 4, "ngFor", "ngForOf"], [1, "task-row"], [1, "task-info"], [1, "task-name"], [1, "task-icon"], [3, "matTooltip"], [1, "task-meta"], [1, "task-dates"], [1, "timeline-column"], [1, "column-label"], [1, "grid-line"], [1, "timeline-row"], [1, "task-bar-wrapper"], [1, "task-bar", 3, "click", "ngStyle", "matTooltip"], [1, "task-bar-content"], [1, "task-bar-label"], [1, "task-bar-progress"], [1, "gantt-legend"], [1, "legend-items"], [1, "legend-item"], [1, "legend-color", 2, "background-color", "#ff9800"], [1, "legend-color", 2, "background-color", "#2196f3"], [1, "legend-color", 2, "background-color", "#4caf50"], [1, "legend-color", "today-marker"]], template: function GanttComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "\u{1F4CA} \uAC04\uD2B8 \uCC28\uD2B8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "\uD504\uB85C\uC81D\uD2B8 \uD0C0\uC784\uB77C\uC778 \uBC0F \uC9C4\uD589 \uC0C1\uD669");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function GanttComponent_Template_button_click_9_listener() {
        return ctx.changeViewMode("day");
      });
      \u0275\u0275elementStart(10, "mat-icon");
      \u0275\u0275text(11, "view_day");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " \uC77C\uBCC4 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function GanttComponent_Template_button_click_13_listener() {
        return ctx.changeViewMode("week");
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "view_week");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " \uC8FC\uBCC4 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 5);
      \u0275\u0275listener("click", function GanttComponent_Template_button_click_17_listener() {
        return ctx.changeViewMode("month");
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "view_module");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " \uC6D4\uBCC4 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6)(22, "button", 7);
      \u0275\u0275listener("click", function GanttComponent_Template_button_click_22_listener() {
        return ctx.zoomOut();
      });
      \u0275\u0275elementStart(23, "mat-icon");
      \u0275\u0275text(24, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 8);
      \u0275\u0275listener("click", function GanttComponent_Template_button_click_25_listener() {
        return ctx.zoomIn();
      });
      \u0275\u0275elementStart(26, "mat-icon");
      \u0275\u0275text(27, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 9);
      \u0275\u0275listener("click", function GanttComponent_Template_button_click_28_listener() {
        return ctx.scrollToToday();
      });
      \u0275\u0275elementStart(29, "mat-icon");
      \u0275\u0275text(30, "today");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(31, GanttComponent_div_31_Template, 4, 0, "div", 10)(32, GanttComponent_div_32_Template, 7, 1, "div", 11)(33, GanttComponent_div_33_Template, 7, 0, "div", 12)(34, GanttComponent_div_34_Template, 17, 4, "div", 13)(35, GanttComponent_div_35_Template, 20, 0, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.viewMode === "day");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.viewMode === "week");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.viewMode === "month");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.ganttTasks.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.ganttTasks.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ganttTasks.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgStyle,
    MatCardModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatTooltipModule,
    MatTooltip,
    MatChipsModule,
    MatChip
  ], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme[_ngcontent-%COMP%] {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .project-module[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module[_ngcontent-%COMP%] {\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%], \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-raised-button.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-fab.mat-primary[_ngcontent-%COMP%]:hover, \n.project-module[_ngcontent-%COMP%]   .mat-mdc-mini-fab.mat-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-focus-overlay[_ngcontent-%COMP%] {\n  background-color: var(--project-accent);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%] {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-chip.mat-primary[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module[_ngcontent-%COMP%]   .mat-mdc-dialog-container[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  background: var(--project-bg-secondary);\n}\n@keyframes _ngcontent-%COMP%_project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes _ngcontent-%COMP%_project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--project-bg-secondary);\n}\n.gantt-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  overflow: hidden;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--project-border-color);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  background: var(--project-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--project-text-secondary);\n  font-size: 14px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .view-mode-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .view-mode-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .view-mode-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--project-gradient-primary);\n  color: white;\n  border-color: var(--project-primary);\n  box-shadow: 0 4px 12px var(--project-shadow);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .view-mode-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--project-gradient-card);\n  border-color: var(--project-primary);\n  transform: translateY(-2px);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .view-mode-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: var(--project-bg-primary);\n  border-radius: 8px;\n  border: 1px solid var(--project-border-color);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--project-primary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--project-gradient-card);\n}\n.gantt-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n}\n.gantt-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n  width: 120px;\n  height: 120px;\n  color: var(--project-text-disabled);\n  margin-bottom: 24px;\n  opacity: 0.5;\n}\n.gantt-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n}\n.gantt-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.gantt-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: var(--project-text-secondary);\n  font-size: 16px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--project-bg-primary);\n  border-radius: 16px;\n  border: 1px solid var(--project-border-color);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%] {\n  width: 320px;\n  min-width: 320px;\n  border-right: 2px solid var(--project-border-color);\n  display: flex;\n  flex-direction: column;\n  background: var(--project-bg-secondary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  background: var(--project-gradient-primary);\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  border-bottom: 2px solid var(--project-primary-dark);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-header[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 4px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--project-border-color);\n  transition: background 0.2s ease;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]:hover {\n  background: var(--project-gradient-card);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  color: var(--project-text-primary);\n  font-size: 15px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   .task-icon[_ngcontent-%COMP%] {\n  color: var(--project-primary);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  height: 24px;\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n  padding: 0 12px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%]   .task-list-body[_ngcontent-%COMP%]   .task-row[_ngcontent-%COMP%]   .task-info[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .task-dates[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--project-text-secondary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: relative;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 4px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  height: 60px;\n  background: var(--project-gradient-primary);\n  border-bottom: 2px solid var(--project-primary-dark);\n  overflow: hidden;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-columns[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-columns[_ngcontent-%COMP%]   .timeline-column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  font-weight: 600;\n  font-size: 13px;\n  text-align: center;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-columns[_ngcontent-%COMP%]   .timeline-column.today[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-right: 2px solid white;\n  border-left: 2px solid white;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-columns[_ngcontent-%COMP%]   .timeline-column.today[_ngcontent-%COMP%]   .column-label[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--project-primary);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-weight: 700;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow-y: auto;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 4px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  pointer-events: none;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--project-border-color);\n  background: var(--project-bg-primary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-grid[_ngcontent-%COMP%]   .grid-line.today-line[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 53, 0.05);\n  border-right: 2px solid var(--project-primary);\n  border-left: 2px solid var(--project-primary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--project-border-color);\n  position: relative;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]   .task-bar-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 8px 0;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]   .task-bar-wrapper[_ngcontent-%COMP%]   .task-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px var(--project-shadow);\n  overflow: hidden;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]   .task-bar-wrapper[_ngcontent-%COMP%]   .task-bar[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px var(--project-shadow);\n  z-index: 10;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]   .task-bar-wrapper[_ngcontent-%COMP%]   .task-bar[_ngcontent-%COMP%]   .task-bar-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]   .task-bar-wrapper[_ngcontent-%COMP%]   .task-bar[_ngcontent-%COMP%]   .task-bar-content[_ngcontent-%COMP%]   .task-bar-label[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  z-index: 2;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .timeline-container[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-rows[_ngcontent-%COMP%]   .timeline-row[_ngcontent-%COMP%]   .task-bar-wrapper[_ngcontent-%COMP%]   .task-bar[_ngcontent-%COMP%]   .task-bar-content[_ngcontent-%COMP%]   .task-bar-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.3);\n  transition: width 0.3s ease;\n  z-index: 1;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px 20px;\n  background: var(--project-bg-primary);\n  border-radius: 12px;\n  border: 1px solid var(--project-border-color);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%]   .legend-items[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%]   .legend-items[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%]   .legend-items[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 16px;\n  border-radius: 4px;\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%]   .legend-items[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.today-marker[_ngcontent-%COMP%] {\n  background:\n    repeating-linear-gradient(\n      45deg,\n      var(--project-primary),\n      var(--project-primary) 4px,\n      transparent 4px,\n      transparent 8px);\n  border: 2px solid var(--project-primary);\n}\n.gantt-container[_ngcontent-%COMP%]   .gantt-legend[_ngcontent-%COMP%]   .legend-items[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--project-text-secondary);\n  font-weight: 500;\n}\n@media (max-width: 1024px) {\n  .gantt-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%] {\n    width: 240px;\n    min-width: 240px;\n  }\n}\n@media (max-width: 768px) {\n  .gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .view-mode-buttons[_ngcontent-%COMP%], \n   .gantt-container[_ngcontent-%COMP%]   .gantt-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .gantt-container[_ngcontent-%COMP%]   .gantt-content[_ngcontent-%COMP%]   .gantt-wrapper[_ngcontent-%COMP%]   .task-list[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n    border-right: none;\n    border-bottom: 2px solid var(--project-border-color);\n    max-height: 300px;\n  }\n}\n/*# sourceMappingURL=gantt.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GanttComponent, [{
    type: Component,
    args: [{ selector: "app-gantt", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatChipsModule
    ], providers: [
      { provide: ProjectViewModelAbstract, useClass: ProjectViewModel },
      { provide: ScheduleViewModelAbstract, useClass: ScheduleViewModel },
      ProjectService,
      ScheduleService
    ], template: `<div class="gantt-container">
  <!-- Header with controls -->
  <div class="gantt-header">
    <div class="header-left">
      <h1>\u{1F4CA} \uAC04\uD2B8 \uCC28\uD2B8</h1>
      <p>\uD504\uB85C\uC81D\uD2B8 \uD0C0\uC784\uB77C\uC778 \uBC0F \uC9C4\uD589 \uC0C1\uD669</p>
    </div>

    <div class="header-right">
      <!-- View mode buttons -->
      <div class="view-mode-buttons">
        <button mat-raised-button 
                [class.active]="viewMode === 'day'"
                (click)="changeViewMode('day')">
          <mat-icon>view_day</mat-icon>
          \uC77C\uBCC4
        </button>
        <button mat-raised-button 
                [class.active]="viewMode === 'week'"
                (click)="changeViewMode('week')">
          <mat-icon>view_week</mat-icon>
          \uC8FC\uBCC4
        </button>
        <button mat-raised-button 
                [class.active]="viewMode === 'month'"
                (click)="changeViewMode('month')">
          <mat-icon>view_module</mat-icon>
          \uC6D4\uBCC4
        </button>
      </div>

      <!-- Zoom controls -->
      <div class="zoom-controls">
        <button mat-icon-button (click)="zoomOut()" matTooltip="\uCD95\uC18C">
          <mat-icon>zoom_out</mat-icon>
        </button>
        <button mat-icon-button (click)="zoomIn()" matTooltip="\uD655\uB300">
          <mat-icon>zoom_in</mat-icon>
        </button>
        <button mat-icon-button (click)="scrollToToday()" matTooltip="\uC624\uB298\uB85C \uC774\uB3D9">
          <mat-icon>today</mat-icon>
        </button>
      </div>
    </div>
  </div>

  <!-- Loading state -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner></mat-spinner>
    <p>\uD504\uB85C\uC81D\uD2B8 \uB85C\uB529 \uC911...</p>
  </div>

  <!-- Error state -->
  <div *ngIf="error && !loading" class="error-container">
    <mat-icon>error_outline</mat-icon>
    <p>{{ error }}</p>
    <button mat-raised-button color="primary" (click)="loadProjects()">
      \uB2E4\uC2DC \uC2DC\uB3C4
    </button>
  </div>

  <!-- Empty state -->
  <div *ngIf="!loading && !error && ganttTasks.length === 0" class="empty-state">
    <mat-icon>calendar_view_month</mat-icon>
    <h2>\uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</h2>
    <p>\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC5EC \uAC04\uD2B8 \uCC28\uD2B8\uB97C \uC2DC\uC791\uD558\uC138\uC694.</p>
  </div>

  <!-- Gantt chart -->
  <div *ngIf="!loading && !error && ganttTasks.length > 0" class="gantt-content">
    <div class="gantt-wrapper">
      
      <!-- Task list (left side) -->
      <div class="task-list">
        <div class="task-list-header">
          <div class="header-cell">\uD504\uB85C\uC81D\uD2B8</div>
        </div>
        
        <div class="task-list-body">
          <div class="task-row" 
               *ngFor="let task of ganttTasks"
               [style.height.px]="rowHeight">
            <div class="task-info">
              <div class="task-name">
                <mat-icon class="task-icon">folder</mat-icon>
                <span [matTooltip]="task.name">{{ task.name }}</span>
              </div>
              <div class="task-meta">
                <mat-chip [style.background-color]="task.color">
                  {{ getStatusText(task.status) }}
                </mat-chip>
                <span class="task-dates">
                  {{ formatDateDisplay(task.startDate) }} ~ {{ formatDateDisplay(task.endDate) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline (right side, scrollable) -->
      <div class="timeline-container">
        <!-- Timeline header -->
        <div class="timeline-header">
          <div class="timeline-columns">
            <div class="timeline-column"
                 *ngFor="let column of timelineColumns"
                 [class.today]="column.isToday"
                 [style.min-width.px]="dayWidth">
              <span class="column-label">{{ column.label }}</span>
            </div>
          </div>
        </div>

        <!-- Timeline body with bars -->
        <div class="timeline-body">
          <div class="timeline-grid">
            <!-- Grid lines -->
            <div class="grid-line"
                 *ngFor="let column of timelineColumns"
                 [class.today-line]="column.isToday"
                 [style.min-width.px]="dayWidth">
            </div>
          </div>

          <!-- Task bars -->
          <div class="timeline-rows">
            <div class="timeline-row"
                 *ngFor="let task of ganttTasks"
                 [style.height.px]="rowHeight">
              <div class="task-bar-wrapper">
                <div class="task-bar"
                     [ngStyle]="getBarStyle(task)"
                     [matTooltip]="task.name + ' (' + task.progress.toFixed(0) + '%)'"
                     (click)="onTaskClick(task)">
                  <div class="task-bar-content">
                    <span class="task-bar-label">{{ task.name }}</span>
                    <div class="task-bar-progress" [style.width.%]="task.progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Legend -->
  <div *ngIf="ganttTasks.length > 0" class="gantt-legend">
    <h3>\uBC94\uB840</h3>
    <div class="legend-items">
      <div class="legend-item">
        <div class="legend-color" style="background-color: #ff9800;"></div>
        <span>\uC811\uC218</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background-color: #2196f3;"></div>
        <span>\uC9C4\uD589\uC911</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background-color: #4caf50;"></div>
        <span>\uC644\uB8CC</span>
      </div>
      <div class="legend-item">
        <div class="legend-color today-marker"></div>
        <span>\uC624\uB298</span>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/project/components/gantt/gantt.scss */\n:root {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-primary: #ff6b35;\n  --project-primary-dark: #e55a2b;\n  --project-primary-light: #ff8746;\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-success: #198754;\n  --project-warning: #ffc107;\n  --project-error: #dc3545;\n  --project-info: #0dcaf0;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.dark-theme {\n  --project-bg-primary: #1a1a1a;\n  --project-bg-secondary: #1f2d1f;\n  --project-bg-tertiary: #2a4029;\n  --project-text-primary: #ffffff;\n  --project-text-secondary: #b0b0b0;\n  --project-text-tertiary: #8a8a8a;\n  --project-border-color: #2a4029;\n  --project-shadow: rgba(0, 0, 0, 0.3);\n  --project-primary: #00d4aa;\n  --project-primary-dark: #00b894;\n  --project-primary-light: #00e5bf;\n  --project-accent: #00d4aa;\n  --project-accent-secondary: #00b894;\n  --project-success: #4caf50;\n  --project-warning: #ff9800;\n  --project-error: #f44336;\n  --project-info: #2196f3;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #00d4aa 0%,\n      #00b894 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #1f2d1f 0%,\n      #2a4029 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #00e5bf 0%,\n      #00d4aa 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 170, 0.05) 0%,\n      rgba(0, 184, 148, 0.05) 100%);\n}\n.light-theme {\n  --project-bg-primary: #ffffff;\n  --project-bg-secondary: #fff8f5;\n  --project-bg-tertiary: #ffe8dc;\n  --project-text-primary: #212529;\n  --project-text-secondary: #6c757d;\n  --project-text-tertiary: #adb5bd;\n  --project-border-color: #dee2e6;\n  --project-shadow: rgba(0, 0, 0, 0.1);\n  --project-accent: #ff6b35;\n  --project-accent-secondary: #e55a2b;\n  --project-gradient-primary:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #e55a2b 100%);\n  --project-gradient-secondary:\n    linear-gradient(\n      135deg,\n      #fff8f5 0%,\n      #ffe8dc 100%);\n  --project-gradient-accent:\n    linear-gradient(\n      135deg,\n      #ff8746 0%,\n      #ff6b35 100%);\n  --project-gradient-card:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.05) 0%,\n      rgba(229, 90, 43, 0.05) 100%);\n}\n.project-module * {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n}\n.project-module ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n  border-radius: 8px;\n}\n.project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.dark-theme .project-module ::-webkit-scrollbar-track {\n  background: var(--project-bg-tertiary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb {\n  background: var(--project-gradient-primary);\n}\n.dark-theme .project-module ::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-light);\n}\n.project-module {\n}\n.project-module .mat-mdc-card {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-button.mat-primary,\n.project-module .mat-mdc-raised-button.mat-primary,\n.project-module .mat-mdc-fab.mat-primary,\n.project-module .mat-mdc-mini-fab.mat-primary {\n  background: var(--project-gradient-primary) !important;\n  color: white !important;\n}\n.project-module .mat-mdc-button.mat-primary:hover,\n.project-module .mat-mdc-raised-button.mat-primary:hover,\n.project-module .mat-mdc-fab.mat-primary:hover,\n.project-module .mat-mdc-mini-fab.mat-primary:hover {\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\n  transform: translateY(-2px);\n}\n.project-module .mat-toolbar {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  background: var(--project-bg-secondary);\n}\n.project-module .mat-mdc-form-field .mat-mdc-form-field-focus-overlay {\n  background-color: var(--project-accent);\n}\n.project-module .mat-mdc-chip {\n  background: var(--project-bg-tertiary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n}\n.project-module .mat-mdc-chip.mat-primary {\n  background: var(--project-gradient-primary);\n  color: white;\n}\n.project-module .mat-mdc-dialog-container {\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n}\n.project-module .mat-drawer {\n  background: var(--project-bg-primary);\n  border-right: 1px solid var(--project-border-color);\n}\n.project-module .mat-drawer-content {\n  background: var(--project-bg-secondary);\n}\n@keyframes project-shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes project-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@keyframes project-bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n:host {\n  display: block;\n  height: 100%;\n  background: var(--project-bg-secondary);\n}\n.gantt-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  overflow: hidden;\n}\n.gantt-container .gantt-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid var(--project-border-color);\n}\n.gantt-container .gantt-header .header-left h1 {\n  margin: 0 0 8px 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n  background: var(--project-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.gantt-container .gantt-header .header-left p {\n  margin: 0;\n  color: var(--project-text-secondary);\n  font-size: 14px;\n}\n.gantt-container .gantt-header .header-right {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.gantt-container .gantt-header .header-right .view-mode-buttons {\n  display: flex;\n  gap: 8px;\n}\n.gantt-container .gantt-header .header-right .view-mode-buttons button {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--project-bg-primary);\n  color: var(--project-text-primary);\n  border: 1px solid var(--project-border-color);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.gantt-container .gantt-header .header-right .view-mode-buttons button.active {\n  background: var(--project-gradient-primary);\n  color: white;\n  border-color: var(--project-primary);\n  box-shadow: 0 4px 12px var(--project-shadow);\n}\n.gantt-container .gantt-header .header-right .view-mode-buttons button:hover:not(.active) {\n  background: var(--project-gradient-card);\n  border-color: var(--project-primary);\n  transform: translateY(-2px);\n}\n.gantt-container .gantt-header .header-right .view-mode-buttons button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.gantt-container .gantt-header .header-right .zoom-controls {\n  display: flex;\n  gap: 4px;\n  padding: 4px;\n  background: var(--project-bg-primary);\n  border-radius: 8px;\n  border: 1px solid var(--project-border-color);\n}\n.gantt-container .gantt-header .header-right .zoom-controls button {\n  color: var(--project-primary);\n}\n.gantt-container .gantt-header .header-right .zoom-controls button:hover {\n  background: var(--project-gradient-card);\n}\n.gantt-container .loading-container,\n.gantt-container .error-container,\n.gantt-container .empty-state {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n}\n.gantt-container .loading-container mat-icon,\n.gantt-container .error-container mat-icon,\n.gantt-container .empty-state mat-icon {\n  font-size: 120px;\n  width: 120px;\n  height: 120px;\n  color: var(--project-text-disabled);\n  margin-bottom: 24px;\n  opacity: 0.5;\n}\n.gantt-container .loading-container h2,\n.gantt-container .error-container h2,\n.gantt-container .empty-state h2 {\n  margin: 0 0 12px 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n}\n.gantt-container .loading-container p,\n.gantt-container .error-container p,\n.gantt-container .empty-state p {\n  margin: 0 0 24px 0;\n  color: var(--project-text-secondary);\n  font-size: 16px;\n}\n.gantt-container .gantt-content {\n  flex: 1;\n  background: var(--project-bg-primary);\n  border-radius: 16px;\n  border: 1px solid var(--project-border-color);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.gantt-container .gantt-content .gantt-wrapper {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list {\n  width: 320px;\n  min-width: 320px;\n  border-right: 2px solid var(--project-border-color);\n  display: flex;\n  flex-direction: column;\n  background: var(--project-bg-secondary);\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-header {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  background: var(--project-gradient-primary);\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  border-bottom: 2px solid var(--project-primary-dark);\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-header .header-cell {\n  flex: 1;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body {\n  flex: 1;\n  overflow-y: auto;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body::-webkit-scrollbar {\n  width: 8px;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 4px;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--project-border-color);\n  transition: background 0.2s ease;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row:hover {\n  background: var(--project-gradient-card);\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info .task-name {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  color: var(--project-text-primary);\n  font-size: 15px;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info .task-name .task-icon {\n  color: var(--project-primary);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info .task-name span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info .task-meta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info .task-meta mat-chip {\n  height: 24px;\n  font-size: 11px;\n  font-weight: 600;\n  color: white;\n  padding: 0 12px;\n}\n.gantt-container .gantt-content .gantt-wrapper .task-list .task-list-body .task-row .task-info .task-meta .task-dates {\n  font-size: 12px;\n  color: var(--project-text-secondary);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: relative;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container::-webkit-scrollbar {\n  height: 8px;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 4px;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-header {\n  height: 60px;\n  background: var(--project-gradient-primary);\n  border-bottom: 2px solid var(--project-primary-dark);\n  overflow: hidden;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-header .timeline-columns {\n  display: flex;\n  height: 100%;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-header .timeline-columns .timeline-column {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  font-weight: 600;\n  font-size: 13px;\n  text-align: center;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-header .timeline-columns .timeline-column.today {\n  background: rgba(255, 255, 255, 0.2);\n  border-right: 2px solid white;\n  border-left: 2px solid white;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-header .timeline-columns .timeline-column.today .column-label {\n  background: white;\n  color: var(--project-primary);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-weight: 700;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body {\n  flex: 1;\n  position: relative;\n  overflow-y: auto;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body::-webkit-scrollbar {\n  width: 8px;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body::-webkit-scrollbar-track {\n  background: var(--project-bg-secondary);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body::-webkit-scrollbar-thumb {\n  background: var(--project-primary);\n  border-radius: 4px;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body::-webkit-scrollbar-thumb:hover {\n  background: var(--project-primary-dark);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  pointer-events: none;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-grid .grid-line {\n  border-right: 1px solid var(--project-border-color);\n  background: var(--project-bg-primary);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-grid .grid-line.today-line {\n  background: rgba(255, 107, 53, 0.05);\n  border-right: 2px solid var(--project-primary);\n  border-left: 2px solid var(--project-primary);\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows {\n  position: relative;\n  z-index: 1;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row {\n  border-bottom: 1px solid var(--project-border-color);\n  position: relative;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row .task-bar-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 8px 0;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row .task-bar-wrapper .task-bar {\n  position: absolute;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px var(--project-shadow);\n  overflow: hidden;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row .task-bar-wrapper .task-bar:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px var(--project-shadow);\n  z-index: 10;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row .task-bar-wrapper .task-bar .task-bar-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row .task-bar-wrapper .task-bar .task-bar-content .task-bar-label {\n  color: white;\n  font-weight: 600;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  z-index: 2;\n}\n.gantt-container .gantt-content .gantt-wrapper .timeline-container .timeline-body .timeline-rows .timeline-row .task-bar-wrapper .task-bar .task-bar-content .task-bar-progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.3);\n  transition: width 0.3s ease;\n  z-index: 1;\n}\n.gantt-container .gantt-legend {\n  margin-top: 20px;\n  padding: 16px 20px;\n  background: var(--project-bg-primary);\n  border-radius: 12px;\n  border: 1px solid var(--project-border-color);\n}\n.gantt-container .gantt-legend h3 {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--project-text-primary);\n}\n.gantt-container .gantt-legend .legend-items {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.gantt-container .gantt-legend .legend-items .legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.gantt-container .gantt-legend .legend-items .legend-item .legend-color {\n  width: 24px;\n  height: 16px;\n  border-radius: 4px;\n}\n.gantt-container .gantt-legend .legend-items .legend-item .legend-color.today-marker {\n  background:\n    repeating-linear-gradient(\n      45deg,\n      var(--project-primary),\n      var(--project-primary) 4px,\n      transparent 4px,\n      transparent 8px);\n  border: 2px solid var(--project-primary);\n}\n.gantt-container .gantt-legend .legend-items .legend-item span {\n  font-size: 13px;\n  color: var(--project-text-secondary);\n  font-weight: 500;\n}\n@media (max-width: 1024px) {\n  .gantt-container {\n    padding: 16px;\n  }\n  .gantt-container .gantt-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .gantt-container .gantt-header .header-right {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .gantt-container .gantt-content .gantt-wrapper .task-list {\n    width: 240px;\n    min-width: 240px;\n  }\n}\n@media (max-width: 768px) {\n  .gantt-container .gantt-header .header-left h1 {\n    font-size: 24px;\n  }\n  .gantt-container .gantt-header .header-right {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .gantt-container .gantt-header .header-right .view-mode-buttons,\n  .gantt-container .gantt-header .header-right .zoom-controls {\n    width: 100%;\n    justify-content: center;\n  }\n  .gantt-container .gantt-content .gantt-wrapper {\n    flex-direction: column;\n  }\n  .gantt-container .gantt-content .gantt-wrapper .task-list {\n    width: 100%;\n    min-width: unset;\n    border-right: none;\n    border-bottom: 2px solid var(--project-border-color);\n    max-height: 300px;\n  }\n}\n/*# sourceMappingURL=gantt.css.map */\n"] }]
  }], () => [{ type: ProjectViewModelAbstract }, { type: ScheduleViewModelAbstract }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GanttComponent, { className: "GanttComponent", filePath: "src/app/modules/project/components/gantt/gantt.ts", lineNumber: 57 });
})();

// src/app/modules/project/project-routing-module.ts
var routes = [
  {
    path: "auth",
    loadChildren: () => import("./chunk-AZ36VDJB.js").then((m) => m.ProjectAuthRoutingModule)
  },
  {
    path: "",
    component: ProjectLayout,
    canActivate: [ProjectAuthGuard],
    canActivateChild: [ProjectAuthGuard],
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: ProjectList
      },
      {
        path: "kanban",
        component: Kanban
      },
      {
        path: "gantt",
        component: GanttComponent
      }
    ]
  }
];
var ProjectRoutingModule = class _ProjectRoutingModule {
  static \u0275fac = function ProjectRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/project/interceptors/auth.interceptor.ts
var ProjectAuthInterceptor = class _ProjectAuthInterceptor {
  authService;
  isRefreshing = false;
  refreshTokenSubject = new BehaviorSubject(null);
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const excludeUrls = ["/auth/login", "/auth/register", "/auth/refresh", "/auth/password-reset"];
    const isAuthUrl = excludeUrls.some((url) => req.url.includes(url));
    let authReq = req;
    const token = this.authService.getToken();
    if (token && !isAuthUrl) {
      authReq = this.addTokenHeader(req, token);
    }
    return next.handle(authReq).pipe(catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !isAuthUrl) {
        return this.handle401Error(authReq, next);
      }
      return throwError(error);
    }));
  }
  addTokenHeader(request, token) {
    return request.clone({
      headers: request.headers.set("Authorization", `Bearer ${token}`)
    });
  }
  handle401Error(request, next) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(switchMap((response) => {
        this.isRefreshing = false;
        this.refreshTokenSubject.next(response.token);
        return next.handle(this.addTokenHeader(request, response.token));
      }), catchError((error) => {
        this.isRefreshing = false;
        return throwError(error);
      }));
    } else {
      return this.refreshTokenSubject.pipe(filter((token) => token != null), take(1), switchMap((token) => {
        return next.handle(this.addTokenHeader(request, token));
      }));
    }
  }
  static \u0275fac = function ProjectAuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectAuthInterceptor)(\u0275\u0275inject(ProjectAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectAuthInterceptor, factory: _ProjectAuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectAuthInterceptor, [{
    type: Injectable
  }], () => [{ type: ProjectAuthService }], null);
})();

// src/app/modules/project/project-module.ts
var ProjectModule = class _ProjectModule {
  static \u0275fac = function ProjectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    // ViewModels
    { provide: ProjectViewModelAbstract, useClass: ProjectViewModel },
    { provide: ScheduleViewModelAbstract, useClass: ScheduleViewModel },
    // Services
    ProjectService,
    ScheduleService,
    ProjectAuthService,
    // Guards
    ProjectAuthGuard,
    ProjectGuestGuard,
    ProjectRoleGuard,
    // Interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProjectAuthInterceptor,
      multi: true
    }
  ], imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProjectRoutingModule,
    // Components (standalone imports)
    ProjectLayout,
    ProjectList,
    Kanban,
    GanttComponent,
    // Auth Components (standalone imports)
    ProjectLoginComponent,
    ProjectRegisterComponent,
    ProjectForgotPasswordComponent,
    // Angular CDK
    DragDropModule,
    // Material Modules
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDividerModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        ProjectRoutingModule,
        // Components (standalone imports)
        ProjectLayout,
        ProjectList,
        Kanban,
        GanttComponent,
        // Auth Components (standalone imports)
        ProjectLoginComponent,
        ProjectRegisterComponent,
        ProjectForgotPasswordComponent,
        // Angular CDK
        DragDropModule,
        // Material Modules
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatMenuModule,
        MatSnackBarModule,
        MatCheckboxModule,
        MatDividerModule
      ],
      providers: [
        // ViewModels
        { provide: ProjectViewModelAbstract, useClass: ProjectViewModel },
        { provide: ScheduleViewModelAbstract, useClass: ScheduleViewModel },
        // Services
        ProjectService,
        ScheduleService,
        ProjectAuthService,
        // Guards
        ProjectAuthGuard,
        ProjectGuestGuard,
        ProjectRoleGuard,
        // Interceptors
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ProjectAuthInterceptor,
          multi: true
        }
      ]
    }]
  }], null, null);
})();
export {
  ProjectModule
};
//# sourceMappingURL=chunk-NCI2MMSO.js.map
