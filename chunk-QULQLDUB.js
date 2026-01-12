import {
  JwtHelperService
} from "./chunk-GTYHAMOR.js";
import {
  environment
} from "./chunk-G4JOAHZY.js";
import {
  Router
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-OYJIDA3L.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";

// src/app/modules/membership/util/role-id.enum.ts
var RoleId;
(function(RoleId2) {
  RoleId2[RoleId2["User"] = 100] = "User";
  RoleId2[RoleId2["Admin"] = 200] = "Admin";
  RoleId2[RoleId2["SuperAdmin"] = 300] = "SuperAdmin";
})(RoleId || (RoleId = {}));

// src/app/modules/membership/membership.service.ts
var MembershipService = class _MembershipService {
  http;
  jwtHelper;
  router;
  baseUrl = `${environment.apiUrl}/users`;
  user$ = new BehaviorSubject({});
  _isLoggedIn = false;
  selectedOrganization = {};
  organizationPermission = {};
  constructor(http, jwtHelper, router) {
    this.http = http;
    this.jwtHelper = jwtHelper;
    this.router = router;
    this.initUser();
    this.checkStatus();
  }
  get currentUser() {
    return this.user$.value;
  }
  get user() {
    return this.user$.asObservable();
  }
  get isLoggedIn() {
    return this._isLoggedIn;
  }
  // 인증 관련
  login(param) {
    return this.http.post(`${this.baseUrl}/login`, param);
  }
  logout() {
    this.user$.next({});
    localStorage.removeItem("loworld_accessToken");
    localStorage.removeItem("user");
    this.router.navigate(["/membership/login"]);
  }
  signup(param) {
    return this.http.post(this.baseUrl, param);
  }
  // 사용자 조회
  getAllUsers() {
    return this.http.get(this.baseUrl);
  }
  getUserList() {
    const params = new HttpParams().set("role", RoleId.User);
    return this.http.get(`${this.baseUrl}/roles`, { params });
  }
  getAdminList() {
    const params = new HttpParams().set("role", RoleId.SuperAdmin);
    return this.http.get(`${this.baseUrl}/roles`, { params });
  }
  getUsersByRole(roleId) {
    const params = new HttpParams().set("role", roleId);
    return this.http.get(`${this.baseUrl}/roles`, { params });
  }
  getOrganizationMembers(organizationId, role) {
    const params = new HttpParams().set("organizationId", organizationId).set("role", role ?? 100);
    return this.http.get(`${this.baseUrl}/organizations`, { params });
  }
  // 사용자 수정
  updateUser(param) {
    return this.http.post(`${this.baseUrl}/update`, param);
  }
  updateAdmin(param) {
    return this.http.post(`${this.baseUrl}/admin`, param);
  }
  // 비밀번호 관리
  updatePassword(param) {
    return this.http.post(`${this.baseUrl}/init`, param);
  }
  validatePassword(param) {
    return this.http.post(`${this.baseUrl}/valid`, param);
  }
  resetPassword(param) {
    return this.http.post(`${this.baseUrl}/reset`, param);
  }
  // 사용자 삭제
  deleteUser(userIdx) {
    return this.http.post(`${this.baseUrl}/delete`, { userIdx });
  }
  deleteUserById(userId) {
    const params = new HttpParams().set("userId", userId);
    return this.http.delete(this.baseUrl, { params });
  }
  // 사용자 상태 관리
  setUser(user) {
    this.user$.next(user);
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        console.warn("\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD30C\uC2F1 \uC2E4\uD328:", e);
        return null;
      }
    }
    const currentUser = this.user$.value;
    return currentUser && currentUser.id ? currentUser : null;
  }
  removeUser() {
    this.user$.next({});
    localStorage.removeItem("user");
  }
  // JWT 토큰 관리
  setToken(accessToken) {
    localStorage.setItem("loworld_accessToken", accessToken);
  }
  getToken() {
    return localStorage.getItem("loworld_accessToken");
  }
  // 초기화
  initUser() {
    const accessToken = localStorage.getItem("loworld_accessToken");
    if (!accessToken) {
      return;
    }
    if (this.jwtHelper.isTokenExpired(accessToken)) {
      console.log("JWT \uD1A0\uD070\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
      this.logout();
      return;
    }
    try {
      const decodedToken = this.jwtHelper.decodeToken(accessToken);
      const user = decodedToken.payload;
      if (user && user.id) {
        this.user$.next(user);
        console.log("[MembershipService] initUser() - user$ \uC5C5\uB370\uC774\uD2B8 \uC644\uB8CC:", user);
        if (user.userOrganizations && user.userOrganizations.length > 0) {
          this.selectedOrganization = user.userOrganizations[0];
          this.organizationPermission = user.userPermission[0];
        }
      }
    } catch (error) {
      console.warn("\uD1A0\uD070 \uB514\uCF54\uB529 \uC2E4\uD328:", error);
      this.logout();
    }
  }
  decodeToken(accessToken) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    return decodedToken.payload;
  }
  checkStatus() {
    this.user$.subscribe({
      next: (user) => {
        this._isLoggedIn = !!user.id;
      }
    });
  }
  static \u0275fac = function MembershipService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MembershipService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(JwtHelperService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MembershipService, factory: _MembershipService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MembershipService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: JwtHelperService }, { type: Router }], null);
})();

export {
  RoleId,
  MembershipService
};
//# sourceMappingURL=chunk-QULQLDUB.js.map
