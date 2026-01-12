import {
  environment
} from "./chunk-J56MEKJT.js";
import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-OYJIDA3L.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WY5M3RVA.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/store/services/user-management.service.ts
var UserManagementService = class _UserManagementService {
  http;
  baseUrl = environment.baseSyncUrl + "/users";
  debugLogger = inject(DebugLoggerService);
  constructor(http) {
    this.http = http;
  }
  /**
   * 전체 사용자 목록 조회
   */
  getAllUsers() {
    this.debugLogger.info("\uD68C\uC6D0\uAD00\uB9ACAPI", "\u{1F4DE} getAllUsers \uD638\uCD9C");
    this.debugLogger.info("\uD68C\uC6D0\uAD00\uB9ACAPI", `URL: ${this.baseUrl}`);
    return this.http.get(this.baseUrl).pipe(tap((response) => {
      this.debugLogger.info("\uD68C\uC6D0\uAD00\uB9ACAPI", `\uC751\uB2F5 \uC218\uC2E0 - \uD0C0\uC785: ${typeof response}, \uBC30\uC5F4: ${Array.isArray(response)}`);
    }), map((response) => {
      if (Array.isArray(response)) {
        this.debugLogger.success("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u2705 \uD328\uD134 1: \uC9C1\uC811 \uBC30\uC5F4, \uAC1C\uC218: ${response.length}`);
        return response;
      }
      if (response?.data?.users && Array.isArray(response.data.users)) {
        this.debugLogger.success("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u2705 \uD328\uD134 2: data.users, \uAC1C\uC218: ${response.data.users.length}`);
        return response.data.users;
      }
      if (response?.users && Array.isArray(response.users)) {
        this.debugLogger.success("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u2705 \uD328\uD134 3: users, \uAC1C\uC218: ${response.users.length}`);
        return response.users;
      }
      if (response?.data && Array.isArray(response.data)) {
        this.debugLogger.success("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u2705 \uD328\uD134 4: data, \uAC1C\uC218: ${response.data.length}`);
        return response.data;
      }
      this.debugLogger.error("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u274C \uC608\uC0C1\uCE58 \uBABB\uD55C \uC751\uB2F5 \uAD6C\uC870: ${JSON.stringify(Object.keys(response || {}))}`);
      return [];
    }));
  }
  /**
   * 역할별 사용자 목록 조회
   * @param role - CUSTOMER, SELLER, ADMIN, SUPER_ADMIN
   */
  getUsersByRole(role) {
    const params = new HttpParams().set("role", this.mapRoleToRoleId(role).toString());
    return this.http.get(`${this.baseUrl}/roles`, { params });
  }
  /**
   * 특정 사용자 상세 조회
   */
  getUserById(userId) {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
  /**
   * 사용자 정보 수정
   */
  updateUser(userId, data) {
    this.debugLogger.info("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u{1F4DD} \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uC218\uC815: ${userId}`);
    this.debugLogger.info("\uD68C\uC6D0\uAD00\uB9ACAPI", `\uC218\uC815 \uB370\uC774\uD130: ${JSON.stringify(data)}`);
    return this.http.post(`${this.baseUrl}/update`, __spreadValues({
      userId
    }, data)).pipe(tap((user) => {
      this.debugLogger.success("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u2705 \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uC218\uC815 \uC644\uB8CC: ${userId}`);
    }));
  }
  /**
   * 사용자 삭제 (soft delete)
   */
  deleteUser(userId) {
    this.debugLogger.warn("\uD68C\uC6D0\uAD00\uB9ACAPI", `\u{1F5D1}\uFE0F \uC0AC\uC6A9\uC790 \uC0AD\uC81C: ${userId}`);
    const url = `${this.baseUrl}?userId=${userId}`;
    const params = new HttpParams().set("userId", userId);
    return this.http.delete(this.baseUrl, { params }).pipe(map((response) => {
      return response;
    }));
  }
  /**
   * 사용자 상태 변경
   */
  updateUserStatus(userId, status) {
    return this.updateUser(userId, { status });
  }
  /**
   * Role을 RoleId로 매핑
   */
  mapRoleToRoleId(role) {
    const roleMap = {
      "CUSTOMER": 100,
      "SELLER": 200,
      "ADMIN": 300,
      "SUPER_ADMIN": 400
    };
    return roleMap[role] || 100;
  }
  /**
   * RoleId를 Role 이름으로 매핑
   */
  getRoleName(role) {
    const roleNameMap = {
      "CUSTOMER": "\uACE0\uAC1D",
      "SELLER": "\uD310\uB9E4\uC790",
      "ADMIN": "\uAD00\uB9AC\uC790",
      "SUPER_ADMIN": "\uCD5C\uACE0 \uAD00\uB9AC\uC790"
    };
    return roleNameMap[role] || "\uC54C \uC218 \uC5C6\uC74C";
  }
  static \u0275fac = function UserManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserManagementService, factory: _UserManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  UserManagementService
};
//# sourceMappingURL=chunk-DV25GELL.js.map
