import {
  UserManagementService
} from "./chunk-DV25GELL.js";
import "./chunk-J56MEKJT.js";
import {
  MatTooltipModule
} from "./chunk-HOZIBAFQ.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-J3HFPNBL.js";
import {
  CryptoUtil
} from "./chunk-G2D7UUZA.js";
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
  MatSnackBarModule
} from "./chunk-XGFL2WJQ.js";
import {
  SharedModule,
  UnifiedLoginComponent
} from "./chunk-5LDCF6IY.js";
import "./chunk-FFJ4GMB5.js";
import {
  DebugLoggerService
} from "./chunk-IEXL5CIB.js";
import {
  ChatTalkSocketService,
  environment
} from "./chunk-G4JOAHZY.js";
import "./chunk-Z6AVJA4A.js";
import {
  MatTooltip
} from "./chunk-QQXXBIKC.js";
import "./chunk-OWKVH3DN.js";
import {
  CdkTextareaAutosize,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSuffix,
  TextFieldModule
} from "./chunk-ZNLLQ5N3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-TBJT6P6X.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-EWZCM5ON.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-5Z7BUDXM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-BE5X2S7S.js";
import {
  HttpClient,
  HttpClientModule,
  HttpParams
} from "./chunk-OYJIDA3L.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  EventEmitter,
  Injectable,
  Input,
  NgForOf,
  NgModule,
  Observable,
  Output,
  Subject,
  ViewChild,
  debounceTime,
  inject,
  map,
  setClassMetadata,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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

// src/app/modules/slack/models/slack.interface.ts
var UserStatus;
(function(UserStatus2) {
  UserStatus2["ONLINE"] = "online";
  UserStatus2["AWAY"] = "away";
  UserStatus2["DO_NOT_DISTURB"] = "dnd";
  UserStatus2["OFFLINE"] = "offline";
})(UserStatus || (UserStatus = {}));

// src/app/modules/slack/services/slack-api.service.ts
var SlackApiService = class _SlackApiService {
  http;
  userManagementService;
  baseUrl = environment.apiUrl + "/slack";
  debugLogger = inject(DebugLoggerService);
  constructor(http, userManagementService) {
    this.http = http;
    this.userManagementService = userManagementService;
    this.debugLogger.info("SlackAPI", `\u{1F527} SlackApiService \uCD08\uAE30\uD654`);
    this.debugLogger.info("SlackAPI", `API Base URL: ${this.baseUrl}`);
  }
  // ============= 채널 API =============
  /**
   * 모든 채널 조회
   */
  getChannels() {
    this.debugLogger.info("SlackAPI", "\u{1F4DE} GET /slack/channels \uD638\uCD9C");
    return this.http.get(`${this.baseUrl}/channels`).pipe(tap((channels) => {
      this.debugLogger.success("SlackAPI", `\u2705 \uCC44\uB110 \uC870\uD68C \uC131\uACF5: ${channels.length}\uAC1C`);
    }));
  }
  /**
   * 특정 채널 조회
   */
  getChannel(channelId) {
    this.debugLogger.info("SlackAPI", `\u{1F4DE} GET /slack/channels/${channelId} \uD638\uCD9C`);
    return this.http.get(`${this.baseUrl}/channels/${channelId}`).pipe(tap((channel) => {
      this.debugLogger.success("SlackAPI", `\u2705 \uCC44\uB110 \uC870\uD68C \uC131\uACF5: ${channel.name}`);
    }));
  }
  /**
   * 채널 생성
   */
  createChannel(dto) {
    this.debugLogger.info("SlackAPI", "\u{1F4DE} POST /slack/channels \uD638\uCD9C");
    this.debugLogger.info("SlackAPI", `\uC694\uCCAD URL: ${this.baseUrl}/channels`);
    this.debugLogger.info("SlackAPI", `\uC694\uCCAD \uB370\uC774\uD130: ${JSON.stringify(dto)}`);
    return this.http.post(`${this.baseUrl}/channels`, dto).pipe(tap((channel) => {
      this.debugLogger.success("SlackAPI", `\u2705 \uCC44\uB110 \uC0DD\uC131 \uC131\uACF5: ${channel.name} (ID: ${channel.id})`);
      this.debugLogger.info("SlackAPI", `\uC751\uB2F5 \uB370\uC774\uD130: ${JSON.stringify(channel)}`);
    }));
  }
  /**
   * 채널 삭제
   */
  deleteChannel(channelId) {
    return this.http.delete(`${this.baseUrl}/channels/${channelId}`);
  }
  /**
   * 채널에 멤버 추가
   */
  addMember(channelId, userId) {
    return this.http.post(`${this.baseUrl}/channels/${channelId}/members`, { userId });
  }
  /**
   * 채널에서 멤버 제거
   */
  removeMember(channelId, userId) {
    return this.http.delete(`${this.baseUrl}/channels/${channelId}/members/${userId}`);
  }
  // ============= 메시지 API =============
  /**
   * 채널의 메시지 목록 조회 (페이지네이션)
   */
  getMessages(channelId, page = 1, limit = 50) {
    const params = new HttpParams().set("page", page.toString()).set("limit", limit.toString());
    return this.http.get(`${this.baseUrl}/channels/${channelId}/messages`, { params });
  }
  /**
   * 메시지 전송
   */
  sendMessage(dto) {
    return this.http.post(`${this.baseUrl}/messages`, dto);
  }
  /**
   * 메시지 수정
   */
  updateMessage(messageId, text) {
    return this.http.put(`${this.baseUrl}/messages/${messageId}`, { text });
  }
  /**
   * 메시지 삭제
   */
  deleteMessage(messageId) {
    return this.http.delete(`${this.baseUrl}/messages/${messageId}`);
  }
  // ============= 스레드 API =============
  /**
   * 스레드 답글 조회
   */
  getThreadReplies(parentMessageId) {
    return this.http.get(`${this.baseUrl}/messages/${parentMessageId}/replies`);
  }
  /**
   * 스레드 답글 작성
   */
  replyToThread(parentMessageId, text) {
    return this.http.post(`${this.baseUrl}/messages/${parentMessageId}/replies`, { text });
  }
  // ============= 파일 API =============
  /**
   * 파일 업로드
   */
  uploadFiles(channelId, files) {
    const formData = new FormData();
    formData.append("channelId", channelId);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    return this.http.post(`${this.baseUrl}/files/upload`, formData);
  }
  /**
   * 파일 다운로드 URL 생성
   */
  getFileDownloadUrl(fileId) {
    return `${this.baseUrl}/files/${fileId}/download`;
  }
  // ============= 사용자 API =============
  /**
   * 모든 사용자 조회
   * Store의 회원 데이터를 Slack 사용자로 변환하여 반환
   */
  getUsers() {
    this.debugLogger.info("SlackAPI", "\u{1F4DE} Store \uD68C\uC6D0 \uBAA9\uB85D \uC870\uD68C (UserManagementService)");
    return this.userManagementService.getAllUsers().pipe(tap((users) => {
      this.debugLogger.info("SlackAPI", `Store \uD68C\uC6D0 \uC218\uC2E0: ${users.length}\uBA85`);
    }), map((storeUsers) => storeUsers.map((user) => this.convertStoreUserToSlackUser(user))), tap((slackUsers) => {
      this.debugLogger.success("SlackAPI", `\u2705 Slack \uC0AC\uC6A9\uC790 \uBCC0\uD658 \uC644\uB8CC: ${slackUsers.length}\uBA85`);
    }));
  }
  /**
   * 특정 사용자 조회
   * Store의 회원 데이터를 Slack 사용자로 변환하여 반환
   */
  getUser(userId) {
    this.debugLogger.info("SlackAPI", `\u{1F4DE} Store \uD68C\uC6D0 \uC870\uD68C: ${userId}`);
    return this.userManagementService.getUserById(userId).pipe(tap((user) => {
      this.debugLogger.info("SlackAPI", `Store \uD68C\uC6D0 \uC218\uC2E0: ${user.name}`);
    }), map((storeUser) => this.convertStoreUserToSlackUser(storeUser)), tap((slackUser) => {
      this.debugLogger.success("SlackAPI", `\u2705 Slack \uC0AC\uC6A9\uC790 \uBCC0\uD658 \uC644\uB8CC: ${slackUser.name}`);
    }));
  }
  /**
   * Store 사용자를 Slack 사용자로 변환
   */
  convertStoreUserToSlackUser(storeUser) {
    return {
      id: storeUser.userIdx || storeUser.id,
      name: storeUser.name,
      email: storeUser.email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(storeUser.name)}&background=random`,
      status: storeUser.status === "ACTIVE" ? UserStatus.ONLINE : UserStatus.OFFLINE,
      customStatus: this.getRoleDisplayName(storeUser.role)
    };
  }
  /**
   * 역할을 한글 표시명으로 변환
   */
  getRoleDisplayName(role) {
    const roleMap = {
      "CUSTOMER": "\uACE0\uAC1D",
      "SELLER": "\uD310\uB9E4\uC790",
      "ADMIN": "\uAD00\uB9AC\uC790",
      "SUPER_ADMIN": "\uCD5C\uACE0 \uAD00\uB9AC\uC790"
    };
    return roleMap[role] || role;
  }
  /**
   * 사용자 상태 업데이트
   */
  updateUserStatus(status, customStatus) {
    return this.http.put(`${this.baseUrl}/users/me/status`, {
      status,
      customStatus
    });
  }
  // ============= 검색 API =============
  /**
   * 메시지 검색
   */
  searchMessages(query, channelId) {
    let params = new HttpParams().set("q", query);
    if (channelId) {
      params = params.set("channelId", channelId);
    }
    return this.http.get(`${this.baseUrl}/search/messages`, { params });
  }
  static \u0275fac = function SlackApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(UserManagementService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SlackApiService, factory: _SlackApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: UserManagementService }], null);
})();

// src/app/modules/slack/services/slack-socket.adapter.ts
var SlackSocketAdapter = class _SlackSocketAdapter {
  chatTalkSocket;
  // 메시지 스트림
  messageReceived$ = new Subject();
  messageDeleted$ = new Subject();
  messageUpdated$ = new Subject();
  // 리액션 스트림
  reactionAdded$ = new Subject();
  reactionRemoved$ = new Subject();
  // 채널 스트림
  channelCreated$ = new Subject();
  channelUpdated$ = new Subject();
  // 타이핑 인디케이터
  userTyping$ = new Subject();
  // 온라인 사용자 추적
  onlineUsers$ = new Subject();
  userOnline$ = new Subject();
  userOffline$ = new Subject();
  onlineUserIds = /* @__PURE__ */ new Set();
  constructor(chatTalkSocket) {
    this.chatTalkSocket = chatTalkSocket;
    this.setupSlackEventListeners();
  }
  /**
   * Slack 전용 이벤트 리스너 설정
   */
  setupSlackEventListeners() {
    this.chatTalkSocket.listenEvent("slack:message:received", (message) => {
      this.messageReceived$.next(message);
    });
    this.chatTalkSocket.listenEvent("slack:message:deleted", (messageId) => {
      this.messageDeleted$.next(messageId);
    });
    this.chatTalkSocket.listenEvent("slack:message:updated", (message) => {
      this.messageUpdated$.next(message);
    });
    this.chatTalkSocket.listenEvent("slack:reaction:added", (data) => {
      this.reactionAdded$.next(data);
    });
    this.chatTalkSocket.listenEvent("slack:reaction:removed", (data) => {
      this.reactionRemoved$.next(data);
    });
    this.chatTalkSocket.listenEvent("slack:channel:created", (channel) => {
      this.channelCreated$.next(channel);
    });
    this.chatTalkSocket.listenEvent("slack:channel:updated", (channel) => {
      this.channelUpdated$.next(channel);
    });
    this.chatTalkSocket.listenEvent("slack:user:typing", (data) => {
      this.userTyping$.next(data);
    });
    this.chatTalkSocket.listenEvent("slack:users:online", (userIds) => {
      this.onlineUserIds = new Set(userIds);
      this.onlineUsers$.next(userIds);
    });
    this.chatTalkSocket.listenEvent("slack:user:online", (userId) => {
      this.onlineUserIds.add(userId);
      this.userOnline$.next(userId);
      this.onlineUsers$.next(Array.from(this.onlineUserIds));
    });
    this.chatTalkSocket.listenEvent("slack:user:offline", (userId) => {
      this.onlineUserIds.delete(userId);
      this.userOffline$.next(userId);
      this.onlineUsers$.next(Array.from(this.onlineUserIds));
    });
  }
  /**
   * Socket 연결 (기존 ChatTalkSocket 사용)
   */
  connect(userId) {
    return __async(this, null, function* () {
      yield this.chatTalkSocket.connect();
      this.chatTalkSocket.emitEvent("slack:register:user", { userId });
    });
  }
  /**
   * Socket 연결 해제
   */
  disconnect() {
  }
  /**
   * 채널 참여
   */
  joinChannel(channelId) {
    this.chatTalkSocket.emitEvent("slack:channel:join", { channelId });
  }
  /**
   * 채널 나가기
   */
  leaveChannel(channelId) {
    this.chatTalkSocket.emitEvent("slack:channel:leave", { channelId });
  }
  /**
   * 메시지 전송
   */
  sendMessage(channelId, text, files) {
    this.chatTalkSocket.emitEvent("slack:message:send", {
      channelId,
      text,
      files,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * 메시지 삭제
   */
  deleteMessage(messageId) {
    this.chatTalkSocket.emitEvent("slack:message:delete", { messageId });
  }
  /**
   * 메시지 수정
   */
  updateMessage(messageId, text) {
    this.chatTalkSocket.emitEvent("slack:message:update", { messageId, text });
  }
  /**
   * 리액션 토글
   */
  toggleReaction(messageId, emoji) {
    this.chatTalkSocket.emitEvent("slack:reaction:toggle", { messageId, emoji });
  }
  /**
   * 타이핑 상태 전송
   */
  sendTypingStatus(channelId, isTyping) {
    this.chatTalkSocket.emitEvent("slack:user:typing", { channelId, isTyping });
  }
  /**
   * 특정 사용자가 온라인인지 확인
   */
  isUserOnline(userId) {
    return this.onlineUserIds.has(userId);
  }
  /**
   * 온라인 사용자 ID 목록 반환
   */
  getOnlineUserIds() {
    return Array.from(this.onlineUserIds);
  }
  /**
   * 연결 상태 확인
   */
  get isConnected$() {
    return new Observable((observer) => {
      const checkConnection = () => {
        observer.next(this.chatTalkSocket.isConnected());
      };
      checkConnection();
      const interval = setInterval(checkConnection, 1e3);
      return () => clearInterval(interval);
    });
  }
  // Observable Getters
  get onMessageReceived$() {
    return this.messageReceived$.asObservable();
  }
  get onMessageDeleted$() {
    return this.messageDeleted$.asObservable();
  }
  get onMessageUpdated$() {
    return this.messageUpdated$.asObservable();
  }
  get onReactionAdded$() {
    return this.reactionAdded$.asObservable();
  }
  get onReactionRemoved$() {
    return this.reactionRemoved$.asObservable();
  }
  get onChannelCreated$() {
    return this.channelCreated$.asObservable();
  }
  get onChannelUpdated$() {
    return this.channelUpdated$.asObservable();
  }
  get onUserTyping$() {
    return this.userTyping$.asObservable();
  }
  get onOnlineUsersChanged$() {
    return this.onlineUsers$.asObservable();
  }
  get onUserOnline$() {
    return this.userOnline$.asObservable();
  }
  get onUserOffline$() {
    return this.userOffline$.asObservable();
  }
  static \u0275fac = function SlackSocketAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackSocketAdapter)(\u0275\u0275inject(ChatTalkSocketService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SlackSocketAdapter, factory: _SlackSocketAdapter.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackSocketAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ChatTalkSocketService }], null);
})();

// src/app/modules/slack/viewmodels/channel.viewmodel.ts
var ChannelViewModel = class _ChannelViewModel {
  apiService;
  socketAdapter;
  destroy$ = new Subject();
  debugLogger = inject(DebugLoggerService);
  // 상태 관리
  channels$ = new BehaviorSubject([]);
  activeChannel$ = new BehaviorSubject(null);
  isLoading$ = new BehaviorSubject(false);
  constructor(apiService, socketAdapter) {
    this.apiService = apiService;
    this.socketAdapter = socketAdapter;
    this.debugLogger.info("SlackChannel", "\u{1F680} ChannelViewModel \uCD08\uAE30\uD654");
    this.initializeSocketListeners();
  }
  /**
   * Socket 이벤트 리스너 초기화
   */
  initializeSocketListeners() {
    this.debugLogger.info("SlackChannel", "\u{1F442} Socket \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uCD08\uAE30\uD654");
    this.socketAdapter.onChannelCreated$.pipe(takeUntil(this.destroy$)).subscribe((channel) => {
      this.debugLogger.success("SlackChannel", `\u2705 \uC0C8 \uCC44\uB110 \uC0DD\uC131\uB428: ${channel.name} (ID: ${channel.id})`);
      const current = this.channels$.value;
      this.channels$.next([...current, channel]);
    });
    this.socketAdapter.onChannelUpdated$.pipe(takeUntil(this.destroy$)).subscribe((updatedChannel) => {
      this.debugLogger.info("SlackChannel", `\u{1F4DD} \uCC44\uB110 \uC5C5\uB370\uC774\uD2B8\uB428: ${updatedChannel.name}`);
      const current = this.channels$.value;
      const index = current.findIndex((c) => c.id === updatedChannel.id);
      if (index !== -1) {
        const updated = [...current];
        updated[index] = updatedChannel;
        this.channels$.next(updated);
        if (this.activeChannel$.value?.id === updatedChannel.id) {
          this.activeChannel$.next(updatedChannel);
        }
      }
    });
  }
  /**
   * 모든 채널 로드
   */
  loadChannels() {
    this.debugLogger.info("SlackChannel", "\u{1F4DE} \uCC44\uB110 \uBAA9\uB85D \uB85C\uB4DC \uC2DC\uC791");
    this.isLoading$.next(true);
    this.apiService.getChannels().pipe(takeUntil(this.destroy$)).subscribe({
      next: (channels) => {
        this.debugLogger.success("SlackChannel", `\u2705 \uCC44\uB110 \uBAA9\uB85D \uB85C\uB4DC \uC131\uACF5: ${channels.length}\uAC1C`);
        this.debugLogger.info("SlackChannel", `\uCC44\uB110 \uBAA9\uB85D: ${JSON.stringify(channels.map((c) => c.name))}`);
        this.channels$.next(channels);
        this.isLoading$.next(false);
      },
      error: (error) => {
        this.debugLogger.error("SlackChannel", `\u274C \uCC44\uB110 \uBAA9\uB85D \uB85C\uB4DC \uC2E4\uD328: ${error.message}`);
        this.isLoading$.next(false);
      }
    });
  }
  /**
   * 채널 선택
   */
  selectChannel(channelId) {
    this.debugLogger.info("SlackChannel", `\u{1F3AF} \uCC44\uB110 \uC120\uD0DD: ${channelId}`);
    this.isLoading$.next(true);
    this.apiService.getChannel(channelId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (channel) => {
        this.debugLogger.success("SlackChannel", `\u2705 \uCC44\uB110 \uC120\uD0DD \uC131\uACF5: ${channel.name}`);
        this.activeChannel$.next(channel);
        this.socketAdapter.joinChannel(channelId);
        this.isLoading$.next(false);
      },
      error: (error) => {
        this.debugLogger.error("SlackChannel", `\u274C \uCC44\uB110 \uC120\uD0DD \uC2E4\uD328: ${error.message}`);
        this.isLoading$.next(false);
      }
    });
  }
  /**
   * 채널 생성
   */
  createChannel(name, description, isPrivate, members) {
    this.debugLogger.info("SlackChannel", "\u{1F528} \uCC44\uB110 \uC0DD\uC131 \uC2DC\uC791");
    this.debugLogger.info("SlackChannel", `\uCC44\uB110\uBA85: ${name}`);
    this.debugLogger.info("SlackChannel", `\uC124\uBA85: ${description}`);
    this.debugLogger.info("SlackChannel", `\uBE44\uACF5\uAC1C: ${isPrivate}`);
    this.debugLogger.info("SlackChannel", `\uBA64\uBC84 \uC218: ${members.length}\uBA85`);
    this.debugLogger.info("SlackChannel", `\uBA64\uBC84 IDs: ${JSON.stringify(members)}`);
    this.isLoading$.next(true);
    const channelData = { name, description, isPrivate, members };
    this.debugLogger.info("SlackChannel", `API \uD638\uCD9C \uB370\uC774\uD130: ${JSON.stringify(channelData)}`);
    this.apiService.createChannel(channelData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (channel) => {
        this.debugLogger.success("SlackChannel", `\u2705 \uCC44\uB110 \uC0DD\uC131 \uC131\uACF5: ${channel.name} (ID: ${channel.id})`);
        this.debugLogger.info("SlackChannel", `\uC0DD\uC131\uB41C \uCC44\uB110 \uB370\uC774\uD130: ${JSON.stringify(channel)}`);
        this.selectChannel(channel.id);
        this.isLoading$.next(false);
      },
      error: (error) => {
        this.debugLogger.error("SlackChannel", `\u274C \uCC44\uB110 \uC0DD\uC131 \uC2E4\uD328`);
        this.debugLogger.error("SlackChannel", `\uC5D0\uB7EC \uBA54\uC2DC\uC9C0: ${error.message}`);
        this.debugLogger.error("SlackChannel", `\uC5D0\uB7EC \uC0C1\uD0DC: ${error.status}`);
        this.debugLogger.error("SlackChannel", `\uC5D0\uB7EC \uC804\uCCB4: ${JSON.stringify(error)}`);
        this.isLoading$.next(false);
      }
    });
  }
  /**
   * 채널 삭제
   */
  deleteChannel(channelId) {
    this.apiService.deleteChannel(channelId).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        const current = this.channels$.value;
        this.channels$.next(current.filter((c) => c.id !== channelId));
        if (this.activeChannel$.value?.id === channelId) {
          this.activeChannel$.next(null);
        }
      },
      error: (error) => {
      }
    });
  }
  /**
   * 채널에 멤버 추가
   */
  addMember(channelId, userId) {
    this.apiService.addMember(channelId, userId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedChannel) => {
      },
      error: (error) => {
      }
    });
  }
  /**
   * 채널에서 멤버 제거
   */
  removeMember(channelId, userId) {
    this.apiService.removeMember(channelId, userId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedChannel) => {
      },
      error: (error) => {
      }
    });
  }
  // Getters
  getChannels() {
    return this.channels$.asObservable();
  }
  getActiveChannel() {
    return this.activeChannel$.asObservable();
  }
  getIsLoading() {
    return this.isLoading$.asObservable();
  }
  ngOnDestroy() {
    const activeChannel = this.activeChannel$.value;
    if (activeChannel) {
      this.socketAdapter.leaveChannel(activeChannel.id);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function ChannelViewModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChannelViewModel)(\u0275\u0275inject(SlackApiService), \u0275\u0275inject(SlackSocketAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChannelViewModel, factory: _ChannelViewModel.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChannelViewModel, [{
    type: Injectable
  }], () => [{ type: SlackApiService }, { type: SlackSocketAdapter }], null);
})();

// src/app/modules/slack/viewmodels/message.viewmodel.ts
var MessageViewModel = class _MessageViewModel {
  apiService;
  socketAdapter;
  destroy$ = new Subject();
  // 상태 관리
  messages$ = new BehaviorSubject([]);
  isLoading$ = new BehaviorSubject(false);
  isFileUploading$ = new BehaviorSubject(false);
  uploadedFiles$ = new BehaviorSubject([]);
  // 타이핑 인디케이터
  typingUsers$ = new BehaviorSubject(/* @__PURE__ */ new Set());
  // Form Control
  messageForm = new FormControl("", [Validators.required, Validators.maxLength(5e3)]);
  // 페이지네이션
  currentPage = 1;
  hasMore = true;
  constructor(apiService, socketAdapter) {
    this.apiService = apiService;
    this.socketAdapter = socketAdapter;
    this.initializeSocketListeners();
    this.initializeTypingHandler();
  }
  /**
   * Socket 이벤트 리스너 초기화
   */
  initializeSocketListeners() {
    this.socketAdapter.onMessageReceived$.pipe(takeUntil(this.destroy$)).subscribe((message) => {
      const current = this.messages$.value;
      this.messages$.next([...current, message]);
    });
    this.socketAdapter.onMessageDeleted$.pipe(takeUntil(this.destroy$)).subscribe((messageId) => {
      const current = this.messages$.value;
      this.messages$.next(current.filter((m) => m.id !== messageId));
    });
    this.socketAdapter.onMessageUpdated$.pipe(takeUntil(this.destroy$)).subscribe((updatedMessage) => {
      const current = this.messages$.value;
      const index = current.findIndex((m) => m.id === updatedMessage.id);
      if (index !== -1) {
        const updated = [...current];
        updated[index] = updatedMessage;
        this.messages$.next(updated);
      }
    });
    this.socketAdapter.onReactionAdded$.pipe(takeUntil(this.destroy$)).subscribe(({ messageId, reaction }) => {
      this.addReactionToMessage(messageId, reaction);
    });
    this.socketAdapter.onReactionRemoved$.pipe(takeUntil(this.destroy$)).subscribe(({ messageId, emoji, userId }) => {
      this.removeReactionFromMessage(messageId, emoji, userId);
    });
    this.socketAdapter.onUserTyping$.pipe(takeUntil(this.destroy$)).subscribe(({ userId, isTyping }) => {
      const current = new Set(this.typingUsers$.value);
      if (isTyping) {
        current.add(userId);
      } else {
        current.delete(userId);
      }
      this.typingUsers$.next(current);
    });
  }
  /**
   * 타이핑 핸들러 초기화 (debounce 적용)
   */
  initializeTypingHandler() {
    this.messageForm.valueChanges.pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe((value) => {
    });
  }
  /**
   * 메시지 로드 (페이지네이션)
   */
  loadMessages(channelId, reset = false) {
    if (!this.hasMore && !reset)
      return;
    if (reset) {
      this.currentPage = 1;
      this.messages$.next([]);
    }
    this.isLoading$.next(true);
    this.apiService.getMessages(channelId, this.currentPage, 50).pipe(takeUntil(this.destroy$)).subscribe({
      next: ({ messages, hasMore }) => {
        const current = this.messages$.value;
        this.messages$.next([...messages.reverse(), ...current]);
        this.hasMore = hasMore;
        this.currentPage++;
        this.isLoading$.next(false);
      },
      error: (error) => {
        this.isLoading$.next(false);
      }
    });
  }
  /**
   * 메시지 전송
   */
  sendMessage(channelId) {
    const text = this.messageForm.value?.trim();
    if (!text && this.uploadedFiles$.value.length === 0)
      return;
    const files = this.uploadedFiles$.value.map((f) => f.id);
    this.socketAdapter.sendMessage(channelId, text || "", files);
    this.messageForm.reset();
    this.uploadedFiles$.next([]);
  }
  /**
   * 메시지 삭제
   */
  deleteMessage(messageId) {
    this.socketAdapter.deleteMessage(messageId);
  }
  /**
   * 메시지 수정
   */
  updateMessage(messageId, text) {
    this.socketAdapter.updateMessage(messageId, text);
  }
  /**
   * 리액션 토글
   */
  toggleReaction(messageId, emoji) {
    this.socketAdapter.toggleReaction(messageId, emoji);
  }
  /**
   * 파일 업로드
   */
  uploadFiles(channelId, files) {
    if (files.length === 0)
      return;
    this.isFileUploading$.next(true);
    this.apiService.uploadFiles(channelId, files).pipe(takeUntil(this.destroy$)).subscribe({
      next: (uploadedFiles) => {
        const current = this.uploadedFiles$.value;
        this.uploadedFiles$.next([...current, ...uploadedFiles]);
        this.isFileUploading$.next(false);
      },
      error: (error) => {
        this.isFileUploading$.next(false);
      }
    });
  }
  /**
   * 업로드된 파일 제거
   */
  removeUploadedFile(fileId) {
    const current = this.uploadedFiles$.value;
    this.uploadedFiles$.next(current.filter((f) => f.id !== fileId));
  }
  /**
   * 메시지에 리액션 추가 (내부 메서드)
   */
  addReactionToMessage(messageId, reaction) {
    const current = this.messages$.value;
    const index = current.findIndex((m) => m.id === messageId);
    if (index !== -1) {
      const updated = [...current];
      const message = __spreadValues({}, updated[index]);
      message.reactions = [...message.reactions, reaction];
      updated[index] = message;
      this.messages$.next(updated);
    }
  }
  /**
   * 메시지에서 리액션 제거 (내부 메서드)
   */
  removeReactionFromMessage(messageId, emoji, userId) {
    const current = this.messages$.value;
    const index = current.findIndex((m) => m.id === messageId);
    if (index !== -1) {
      const updated = [...current];
      const message = __spreadValues({}, updated[index]);
      message.reactions = message.reactions.filter((r) => !(r.emoji === emoji && r.userId === userId));
      updated[index] = message;
      this.messages$.next(updated);
    }
  }
  /**
   * 리액션 그룹화
   */
  groupReactions(reactions) {
    const grouped = /* @__PURE__ */ new Map();
    reactions.forEach((reaction) => {
      if (!grouped.has(reaction.emoji)) {
        grouped.set(reaction.emoji, { count: 0, userIds: [] });
      }
      const group = grouped.get(reaction.emoji);
      group.count++;
      group.userIds.push(reaction.userId);
    });
    return Array.from(grouped.entries()).map(([emoji, data]) => ({
      emoji,
      count: data.count,
      userIds: data.userIds
    }));
  }
  /**
   * 현재 사용자가 리액션했는지 확인
   */
  hasUserReacted(reactions, emoji, userId) {
    return reactions.some((r) => r.emoji === emoji && r.userId === userId);
  }
  // Getters
  getMessages() {
    return this.messages$.asObservable();
  }
  getIsLoading() {
    return this.isLoading$.asObservable();
  }
  getIsFileUploading() {
    return this.isFileUploading$.asObservable();
  }
  getUploadedFiles() {
    return this.uploadedFiles$.asObservable();
  }
  getTypingUsers() {
    return this.typingUsers$.asObservable();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function MessageViewModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageViewModel)(\u0275\u0275inject(SlackApiService), \u0275\u0275inject(SlackSocketAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageViewModel, factory: _MessageViewModel.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageViewModel, [{
    type: Injectable
  }], () => [{ type: SlackApiService }, { type: SlackSocketAdapter }], null);
})();

// src/app/modules/slack/services/slack-auth.service.ts
var SlackAuthService = class _SlackAuthService {
  router;
  STORAGE_KEY = "slack_auth_token";
  SESSION_KEY = "slack_session_timestamp";
  SESSION_DURATION = 8 * 60 * 60 * 1e3;
  // 8시간
  isAuthenticatedSubject = new BehaviorSubject(this.checkAuth());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  // environment에서 암호화된 인증 정보를 복호화하여 사용
  AUTH_HASH = this.simpleHash(CryptoUtil.decrypt(environment.auth.username) + CryptoUtil.decrypt(environment.auth.password));
  constructor(router) {
    this.router = router;
    this.checkSessionExpiry();
  }
  /**
   * 로그인 검증 - environment에서 중앙 관리
   */
  login(username, password) {
    const inputHash = this.simpleHash(username + password);
    if (inputHash === this.AUTH_HASH) {
      const timestamp = Date.now().toString();
      sessionStorage.setItem(this.STORAGE_KEY, "authenticated");
      sessionStorage.setItem(this.SESSION_KEY, timestamp);
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }
  /**
   * 로그아웃
   */
  logout() {
    console.log("[SlackAuth] \uB85C\uADF8\uC544\uC6C3");
    try {
      sessionStorage.removeItem(this.STORAGE_KEY);
      sessionStorage.removeItem(this.SESSION_KEY);
      this.isAuthenticatedSubject.next(false);
    } catch (error) {
      console.error("[SlackAuth] \uB85C\uADF8\uC544\uC6C3 \uC911 \uC624\uB958:", error);
    } finally {
      this.router.navigate(["/slack/login"]).catch((err) => {
        console.error("[SlackAuth] \uB124\uBE44\uAC8C\uC774\uC158 \uC608\uC678 \uBC1C\uC0DD:", err);
        window.location.hash = "#/slack/login";
      });
    }
  }
  /**
   * 인증 상태 확인
   */
  isAuthenticated() {
    return this.checkAuth();
  }
  /**
   * 세션 유효성 검사
   */
  checkAuth() {
    const token = sessionStorage.getItem(this.STORAGE_KEY);
    const timestamp = sessionStorage.getItem(this.SESSION_KEY);
    if (!token || !timestamp) {
      return false;
    }
    const sessionStart = parseInt(timestamp, 10);
    const now = Date.now();
    if (now - sessionStart > this.SESSION_DURATION) {
      this.logout();
      return false;
    }
    return token === "authenticated";
  }
  /**
   * 세션 만료 체크 (1분마다)
   */
  checkSessionExpiry() {
    setInterval(() => {
      if (!this.checkAuth() && this.isAuthenticatedSubject.value) {
        this.logout();
      }
    }, 6e4);
  }
  /**
   * 간단한 해시 함수
   */
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }
  static \u0275fac = function SlackAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackAuthService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SlackAuthService, factory: _SlackAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/modules/slack/components/create-channel-dialog/create-channel-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CreateChannelDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\uCC44\uB110 \uC774\uB984\uC740 \uD544\uC218\uC785\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
  }
}
function CreateChannelDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "\uCC44\uB110 \uC774\uB984\uC740 \uCD5C\uC18C 2\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4");
    \u0275\u0275elementEnd();
  }
}
function CreateChannelDialogComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Only invited members can see this channel ");
  }
}
function CreateChannelDialogComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Anyone can join this channel ");
  }
}
function CreateChannelDialogComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CreateChannelDialogComponent_Conditional_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CreateChannelDialogComponent_Conditional_36_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275listener("click", function CreateChannelDialogComponent_Conditional_36_For_5_Template_button_click_4_listener() {
      const member_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMember(member_r4));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", member_r4.avatar, \u0275\u0275sanitizeUrl)("alt", member_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r4.name);
  }
}
function CreateChannelDialogComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h4");
    \u0275\u0275text(2, "Selected Members:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, CreateChannelDialogComponent_Conditional_36_For_5_Template, 7, 3, "div", 22, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.selectedMembers);
  }
}
function CreateChannelDialogComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading members...");
    \u0275\u0275elementEnd()();
  }
}
function CreateChannelDialogComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No members found");
    \u0275\u0275elementEnd()();
  }
}
function CreateChannelDialogComponent_Conditional_40_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r6.customStatus);
  }
}
function CreateChannelDialogComponent_Conditional_40_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function CreateChannelDialogComponent_Conditional_40_For_1_Template_div_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMember(user_r6));
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "mat-icon", 32);
    \u0275\u0275text(7, " fiber_manual_record ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "span", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, CreateChannelDialogComponent_Conditional_40_For_1_Conditional_11_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "mat-checkbox", 36);
    \u0275\u0275listener("click", function CreateChannelDialogComponent_Conditional_40_For_1_Template_mat_checkbox_click_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function CreateChannelDialogComponent_Conditional_40_For_1_Template_mat_checkbox_change_12_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMember(user_r6));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isMemberSelected(user_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r6.avatar, \u0275\u0275sanitizeUrl)("alt", user_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("online", user_r6.status === "online");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r6.customStatus ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isMemberSelected(user_r6.id));
  }
}
function CreateChannelDialogComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CreateChannelDialogComponent_Conditional_40_For_1_Template, 13, 10, "div", 26, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.filteredUsers);
  }
}
var CreateChannelDialogComponent = class _CreateChannelDialogComponent {
  fb;
  dialogRef;
  slackApiService;
  debugLogger;
  destroy$ = new Subject();
  channelForm;
  allUsers = [];
  selectedMembers = [];
  isLoading = false;
  searchQuery = "";
  constructor(fb, dialogRef, slackApiService, debugLogger) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.slackApiService = slackApiService;
    this.debugLogger = debugLogger;
    this.debugLogger.info("SlackDialog", "\u{1F3A8} \uCC44\uB110 \uC0DD\uC131 \uB2E4\uC774\uC5BC\uB85C\uADF8 \uC5F4\uB9BC");
    this.channelForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      isPrivate: [false]
    });
  }
  ngOnInit() {
    this.debugLogger.info("SlackDialog", "\u{1F504} \uB2E4\uC774\uC5BC\uB85C\uADF8 \uCD08\uAE30\uD654");
    this.loadUsers();
  }
  /**
   * Store 회원 목록 로드
   */
  loadUsers() {
    this.debugLogger.info("SlackDialog", "\u{1F4DE} Store \uD68C\uC6D0 \uBAA9\uB85D \uB85C\uB4DC \uC2DC\uC791");
    this.isLoading = true;
    this.slackApiService.getUsers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (users) => {
        this.debugLogger.success("SlackDialog", `\u2705 \uD68C\uC6D0 \uB85C\uB4DC \uC131\uACF5: ${users.length}\uBA85`);
        this.debugLogger.info("SlackDialog", `\uD68C\uC6D0 \uBAA9\uB85D: ${JSON.stringify(users.map((u) => ({ id: u.id, name: u.name })))}`);
        this.allUsers = users;
        this.isLoading = false;
      },
      error: (error) => {
        this.debugLogger.error("SlackDialog", `\u274C \uD68C\uC6D0 \uB85C\uB4DC \uC2E4\uD328: ${error.message}`);
        this.debugLogger.error("SlackDialog", `\uC5D0\uB7EC \uC804\uCCB4: ${JSON.stringify(error)}`);
        this.isLoading = false;
      }
    });
  }
  /**
   * 멤버 선택/해제 토글
   */
  toggleMember(user) {
    const index = this.selectedMembers.findIndex((m) => m.id === user.id);
    if (index > -1) {
      this.debugLogger.info("SlackDialog", `\u2796 \uBA64\uBC84 \uC120\uD0DD \uD574\uC81C: ${user.name} (${user.id})`);
      this.selectedMembers.splice(index, 1);
    } else {
      this.debugLogger.info("SlackDialog", `\u2795 \uBA64\uBC84 \uC120\uD0DD: ${user.name} (${user.id})`);
      this.selectedMembers.push(user);
    }
    this.debugLogger.info("SlackDialog", `\uD604\uC7AC \uC120\uD0DD\uB41C \uBA64\uBC84 \uC218: ${this.selectedMembers.length}\uBA85`);
  }
  /**
   * 멤버가 선택되었는지 확인
   */
  isMemberSelected(userId) {
    return this.selectedMembers.some((m) => m.id === userId);
  }
  /**
   * 검색 필터링된 사용자 목록
   */
  get filteredUsers() {
    if (!this.searchQuery) {
      return this.allUsers;
    }
    const query = this.searchQuery.toLowerCase();
    return this.allUsers.filter((user) => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query));
  }
  /**
   * 채널 생성
   */
  createChannel() {
    if (this.channelForm.invalid) {
      this.debugLogger.warn("SlackDialog", "\u26A0\uFE0F \uD3FC \uC720\uD6A8\uC131 \uAC80\uC0AC \uC2E4\uD328");
      this.debugLogger.info("SlackDialog", `\uD3FC \uC5D0\uB7EC: ${JSON.stringify(this.channelForm.errors)}`);
      return;
    }
    const formValue = this.channelForm.value;
    const result = {
      name: formValue.name,
      description: formValue.description || "",
      isPrivate: formValue.isPrivate,
      members: this.selectedMembers.map((m) => m.id)
    };
    this.debugLogger.info("SlackDialog", "\u2705 \uCC44\uB110 \uC0DD\uC131 \uB370\uC774\uD130 \uC900\uBE44 \uC644\uB8CC");
    this.debugLogger.info("SlackDialog", `\uCC44\uB110\uBA85: ${result.name}`);
    this.debugLogger.info("SlackDialog", `\uC124\uBA85: ${result.description}`);
    this.debugLogger.info("SlackDialog", `\uBE44\uACF5\uAC1C: ${result.isPrivate}`);
    this.debugLogger.info("SlackDialog", `\uC120\uD0DD\uB41C \uBA64\uBC84 \uC218: ${result.members.length}\uBA85`);
    this.debugLogger.info("SlackDialog", `\uBA64\uBC84 IDs: ${JSON.stringify(result.members)}`);
    this.debugLogger.info("SlackDialog", `\uC804\uC1A1 \uB370\uC774\uD130: ${JSON.stringify(result)}`);
    this.dialogRef.close(result);
  }
  /**
   * 취소
   */
  cancel() {
    this.debugLogger.info("SlackDialog", "\u274C \uCC44\uB110 \uC0DD\uC131 \uCDE8\uC18C");
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.debugLogger.info("SlackDialog", "\u{1F51A} \uB2E4\uC774\uC5BC\uB85C\uADF8 \uC885\uB8CC");
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function CreateChannelDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateChannelDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SlackApiService), \u0275\u0275directiveInject(DebugLoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateChannelDialogComponent, selectors: [["app-create-channel-dialog"]], standalone: false, decls: 46, vars: 10, consts: [[1, "create-channel-dialog"], ["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "placeholder", "e.g., project-updates"], ["matPrefix", ""], ["matInput", "", "formControlName", "description", "rows", "3", "placeholder", "What's this channel about?"], [1, "private-toggle"], ["formControlName", "isPrivate"], [1, "helper-text"], [1, "members-section"], ["matInput", "", "placeholder", "Search by name or email", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Clear"], [1, "selected-members"], [1, "users-list"], [1, "loading-state"], [1, "empty-state"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click"], [1, "member-chips"], [1, "member-chip"], [1, "member-avatar-small", 3, "src", "alt"], ["mat-icon-button", "", 1, "remove-button", 3, "click"], ["diameter", "40"], [1, "user-item", 3, "selected"], [1, "user-item", 3, "click"], [1, "user-info"], [1, "user-avatar", 3, "src", "alt"], [1, "user-details"], [1, "user-name"], [1, "status-indicator"], [1, "user-meta"], [1, "user-email"], [1, "user-role"], [3, "click", "change", "checked"]], template: function CreateChannelDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Create Channel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "form", 2)(5, "mat-form-field", 3)(6, "mat-label");
      \u0275\u0275text(7, "Channel Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 4);
      \u0275\u0275elementStart(9, "mat-icon", 5);
      \u0275\u0275text(10, "tag");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, CreateChannelDialogComponent_Conditional_11_Template, 2, 0, "mat-error");
      \u0275\u0275conditionalCreate(12, CreateChannelDialogComponent_Conditional_12_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-label");
      \u0275\u0275text(15, "Description (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "textarea", 6);
      \u0275\u0275text(17, "        ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-icon", 5);
      \u0275\u0275text(19, "description");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 7)(21, "mat-checkbox", 8);
      \u0275\u0275text(22, " Make Private ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 9);
      \u0275\u0275conditionalCreate(24, CreateChannelDialogComponent_Conditional_24_Template, 3, 0)(25, CreateChannelDialogComponent_Conditional_25_Template, 3, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 10)(27, "h3");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-form-field", 3)(30, "mat-label");
      \u0275\u0275text(31, "Search members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function CreateChannelDialogComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-icon", 5);
      \u0275\u0275text(34, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, CreateChannelDialogComponent_Conditional_35_Template, 3, 0, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, CreateChannelDialogComponent_Conditional_36_Template, 6, 0, "div", 13);
      \u0275\u0275elementStart(37, "div", 14);
      \u0275\u0275conditionalCreate(38, CreateChannelDialogComponent_Conditional_38_Template, 4, 0, "div", 15)(39, CreateChannelDialogComponent_Conditional_39_Template, 5, 0, "div", 16)(40, CreateChannelDialogComponent_Conditional_40_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "mat-dialog-actions", 17)(42, "button", 18);
      \u0275\u0275listener("click", function CreateChannelDialogComponent_Template_button_click_42_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(43, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 19);
      \u0275\u0275listener("click", function CreateChannelDialogComponent_Template_button_click_44_listener() {
        return ctx.createChannel();
      });
      \u0275\u0275text(45, " Create Channel ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.channelForm);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(((tmp_1_0 = ctx.channelForm.get("name")) == null ? null : tmp_1_0.hasError("required")) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.channelForm.get("name")) == null ? null : tmp_2_0.hasError("minlength")) ? 12 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(((tmp_3_0 = ctx.channelForm.get("isPrivate")) == null ? null : tmp_3_0.value) ? 24 : 25);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Add Members (", ctx.selectedMembers.length, " selected)");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.searchQuery ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedMembers.length > 0 ? 36 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading ? 38 : ctx.filteredUsers.length === 0 ? 39 : 40);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.channelForm.invalid);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, MatDialogTitle, MatDialogActions, MatDialogContent, MatButton, MatIconButton, MatIcon, MatFormField, MatLabel, MatError, MatPrefix, MatSuffix, MatInput, MatProgressSpinner, MatCheckbox], styles: ["\n\n.create-channel-dialog[_ngcontent-%COMP%] {\n  width: 600px;\n  max-width: 90vw;\n}\n.create-channel-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 20px 28px;\n  border-bottom: 2px solid var(--slack-primary);\n  background: var(--slack-primary-light);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 0.3px;\n  transition: all 0.3s ease;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding: 28px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\nmat-dialog-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 20px 28px;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--bg-secondary);\n  transition: all 0.3s ease;\n}\nmat-dialog-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%] {\n  background: var(--slack-gradient);\n}\nmat-dialog-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:hover {\n  background: var(--slack-gradient-hover);\n  box-shadow: 0 4px 8px var(--slack-shadow);\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.full-width[_ngcontent-%COMP%]     .mat-mdc-form-field-focus .mdc-notched-outline__leading, \n.full-width[_ngcontent-%COMP%]     .mat-mdc-form-field-focus .mdc-notched-outline__notch, \n.full-width[_ngcontent-%COMP%]     .mat-mdc-form-field-focus .mdc-notched-outline__trailing {\n  border-color: var(--slack-primary) !important;\n}\n.private-toggle[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  padding: 16px;\n  background-color: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s ease;\n}\n.private-toggle[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.private-toggle[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mdc-checkbox__background {\n  border-color: var(--slack-primary);\n}\n.private-toggle[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mdc-checkbox--selected .mdc-checkbox__background {\n  background-color: var(--slack-primary);\n  border-color: var(--slack-primary);\n}\n.private-toggle[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding-left: 32px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.private-toggle[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--slack-primary);\n}\n.members-section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.members-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 18px 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.members-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 14px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.selected-members[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--slack-primary-light);\n  border-radius: 10px;\n  border: 1px solid var(--slack-primary);\n  transition: all 0.3s ease;\n}\n.selected-members[_ngcontent-%COMP%]   .member-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.selected-members[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px 6px 6px;\n  background-color: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  box-shadow: 0 2px 4px var(--shadow);\n  transition: all 0.2s ease;\n}\n.selected-members[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--slack-primary);\n  box-shadow: 0 2px 6px var(--slack-shadow);\n}\n.selected-members[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]   .member-avatar-small[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.selected-members[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  padding: 0;\n  margin-left: 4px;\n  color: #868e96;\n}\n.selected-members[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.selected-members[_ngcontent-%COMP%]   .member-chip[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.users-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  margin-top: 16px;\n  background-color: var(--bg-primary);\n  box-shadow: 0 2px 4px var(--shadow);\n  transition: all 0.3s ease;\n}\n.users-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.users-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.users-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.users-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.users-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.users-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 20px;\n  color: var(--text-muted);\n}\n.users-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.users-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  width: 52px;\n  height: 52px;\n  margin-bottom: 16px;\n  color: var(--slack-primary);\n  opacity: 0.3;\n}\n.users-list[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.users-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0 0;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid var(--bg-tertiary);\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--slack-primary-light);\n}\n.users-list[_ngcontent-%COMP%]   .user-item.selected[_ngcontent-%COMP%] {\n  background: var(--slack-primary-light);\n  border-left: 3px solid var(--slack-primary);\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n  color: #dee2e6;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .status-indicator.online[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.users-list[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  background: var(--slack-primary-light);\n  color: var(--slack-primary);\n  border-radius: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=create-channel-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateChannelDialogComponent, [{
    type: Component,
    args: [{ selector: "app-create-channel-dialog", standalone: false, template: `<div class="create-channel-dialog">
  <h2 mat-dialog-title>Create Channel</h2>

  <mat-dialog-content>
    <form [formGroup]="channelForm">
      <!-- \uCC44\uB110 \uC774\uB984 -->
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Channel Name</mat-label>
        <input matInput formControlName="name" placeholder="e.g., project-updates">
        <mat-icon matPrefix>tag</mat-icon>
        @if (channelForm.get('name')?.hasError('required')) {
          <mat-error>\uCC44\uB110 \uC774\uB984\uC740 \uD544\uC218\uC785\uB2C8\uB2E4</mat-error>
        }
        @if (channelForm.get('name')?.hasError('minlength')) {
          <mat-error>\uCC44\uB110 \uC774\uB984\uC740 \uCD5C\uC18C 2\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4</mat-error>
        }
      </mat-form-field>

      <!-- \uCC44\uB110 \uC124\uBA85 -->
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Description (optional)</mat-label>
        <textarea 
          matInput 
          formControlName="description" 
          rows="3"
          placeholder="What's this channel about?">
        </textarea>
        <mat-icon matPrefix>description</mat-icon>
      </mat-form-field>

      <!-- \uBE44\uACF5\uAC1C \uCC44\uB110 -->
      <div class="private-toggle">
        <mat-checkbox formControlName="isPrivate">
          Make Private
        </mat-checkbox>
        <p class="helper-text">
          @if (channelForm.get('isPrivate')?.value) {
            <mat-icon>lock</mat-icon>
            Only invited members can see this channel
          } @else {
            <mat-icon>tag</mat-icon>
            Anyone can join this channel
          }
        </p>
      </div>
    </form>

    <!-- \uBA64\uBC84 \uC120\uD0DD \uC139\uC158 -->
    <div class="members-section">
      <h3>Add Members ({{ selectedMembers.length }} selected)</h3>

      <!-- \uAC80\uC0C9 -->
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Search members</mat-label>
        <input 
          matInput 
          [(ngModel)]="searchQuery"
          placeholder="Search by name or email">
        <mat-icon matPrefix>search</mat-icon>
        @if (searchQuery) {
          <button 
            mat-icon-button 
            matSuffix 
            (click)="searchQuery = ''"
            aria-label="Clear">
            <mat-icon>close</mat-icon>
          </button>
        }
      </mat-form-field>

      <!-- \uC120\uD0DD\uB41C \uBA64\uBC84 -->
      @if (selectedMembers.length > 0) {
        <div class="selected-members">
          <h4>Selected Members:</h4>
          <div class="member-chips">
            @for (member of selectedMembers; track member.id) {
              <div class="member-chip">
                <img [src]="member.avatar" [alt]="member.name" class="member-avatar-small">
                <span>{{ member.name }}</span>
                <button 
                  mat-icon-button 
                  (click)="toggleMember(member)"
                  class="remove-button">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
            }
          </div>
        </div>
      }

      <!-- \uC0AC\uC6A9\uC790 \uBAA9\uB85D -->
      <div class="users-list">
        @if (isLoading) {
          <div class="loading-state">
            <mat-spinner diameter="40"></mat-spinner>
            <p>Loading members...</p>
          </div>
        } @else if (filteredUsers.length === 0) {
          <div class="empty-state">
            <mat-icon>person_off</mat-icon>
            <p>No members found</p>
          </div>
        } @else {
          @for (user of filteredUsers; track user.id) {
            <div 
              class="user-item"
              [class.selected]="isMemberSelected(user.id)"
              (click)="toggleMember(user)">
              
              <div class="user-info">
                <img [src]="user.avatar" [alt]="user.name" class="user-avatar">
                
                <div class="user-details">
                  <div class="user-name">
                    {{ user.name }}
                    <mat-icon 
                      class="status-indicator"
                      [class.online]="user.status === 'online'">
                      fiber_manual_record
                    </mat-icon>
                  </div>
                  <div class="user-meta">
                    <span class="user-email">{{ user.email }}</span>
                    @if (user.customStatus) {
                      <span class="user-role">{{ user.customStatus }}</span>
                    }
                  </div>
                </div>
              </div>

              <mat-checkbox 
                [checked]="isMemberSelected(user.id)"
                (click)="$event.stopPropagation()"
                (change)="toggleMember(user)">
              </mat-checkbox>
            </div>
          }
        }
      </div>
    </div>
  </mat-dialog-content>

  <mat-dialog-actions align="end">
    <button mat-button (click)="cancel()">Cancel</button>
    <button 
      mat-raised-button 
      color="primary" 
      (click)="createChannel()"
      [disabled]="channelForm.invalid">
      Create Channel
    </button>
  </mat-dialog-actions>
</div>
`, styles: ["/* src/app/modules/slack/components/create-channel-dialog/create-channel-dialog.component.scss */\n.create-channel-dialog {\n  width: 600px;\n  max-width: 90vw;\n}\n.create-channel-dialog h2 {\n  margin: 0;\n  padding: 20px 28px;\n  border-bottom: 2px solid var(--slack-primary);\n  background: var(--slack-primary-light);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 0.3px;\n  transition: all 0.3s ease;\n}\nmat-dialog-content {\n  padding: 28px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\nmat-dialog-content::-webkit-scrollbar {\n  width: 6px;\n}\nmat-dialog-content::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\nmat-dialog-content::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\nmat-dialog-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\nmat-dialog-actions {\n  padding: 20px 28px;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--bg-secondary);\n  transition: all 0.3s ease;\n}\nmat-dialog-actions button[color=primary] {\n  background: var(--slack-gradient);\n}\nmat-dialog-actions button[color=primary]:hover {\n  background: var(--slack-gradient-hover);\n  box-shadow: 0 4px 8px var(--slack-shadow);\n}\n.full-width {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.full-width ::ng-deep .mat-mdc-form-field-focus .mdc-notched-outline__leading,\n.full-width ::ng-deep .mat-mdc-form-field-focus .mdc-notched-outline__notch,\n.full-width ::ng-deep .mat-mdc-form-field-focus .mdc-notched-outline__trailing {\n  border-color: var(--slack-primary) !important;\n}\n.private-toggle {\n  margin-bottom: 28px;\n  padding: 16px;\n  background-color: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s ease;\n}\n.private-toggle mat-checkbox {\n  display: block;\n  margin-bottom: 10px;\n}\n.private-toggle mat-checkbox ::ng-deep .mdc-checkbox__background {\n  border-color: var(--slack-primary);\n}\n.private-toggle mat-checkbox ::ng-deep .mdc-checkbox--selected .mdc-checkbox__background {\n  background-color: var(--slack-primary);\n  border-color: var(--slack-primary);\n}\n.private-toggle .helper-text {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding-left: 32px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.private-toggle .helper-text mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--slack-primary);\n}\n.members-section {\n  margin-top: 28px;\n}\n.members-section h3 {\n  margin: 0 0 18px 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.members-section h4 {\n  margin: 0 0 14px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.selected-members {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--slack-primary-light);\n  border-radius: 10px;\n  border: 1px solid var(--slack-primary);\n  transition: all 0.3s ease;\n}\n.selected-members .member-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.selected-members .member-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px 6px 6px;\n  background-color: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  box-shadow: 0 2px 4px var(--shadow);\n  transition: all 0.2s ease;\n}\n.selected-members .member-chip:hover {\n  border-color: var(--slack-primary);\n  box-shadow: 0 2px 6px var(--slack-shadow);\n}\n.selected-members .member-chip .member-avatar-small {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.selected-members .member-chip .remove-button {\n  width: 22px;\n  height: 22px;\n  padding: 0;\n  margin-left: 4px;\n  color: #868e96;\n}\n.selected-members .member-chip .remove-button:hover {\n  color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.selected-members .member-chip .remove-button mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.users-list {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  margin-top: 16px;\n  background-color: var(--bg-primary);\n  box-shadow: 0 2px 4px var(--shadow);\n  transition: all 0.3s ease;\n}\n.users-list::-webkit-scrollbar {\n  width: 6px;\n}\n.users-list::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.users-list::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.users-list::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.users-list .loading-state,\n.users-list .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 20px;\n  color: var(--text-muted);\n}\n.users-list .loading-state mat-icon,\n.users-list .empty-state mat-icon {\n  font-size: 52px;\n  width: 52px;\n  height: 52px;\n  margin-bottom: 16px;\n  color: var(--slack-primary);\n  opacity: 0.3;\n}\n.users-list .loading-state p,\n.users-list .empty-state p {\n  margin: 8px 0 0 0;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.users-list .user-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid var(--bg-tertiary);\n}\n.users-list .user-item:last-child {\n  border-bottom: none;\n}\n.users-list .user-item:hover {\n  background-color: var(--slack-primary-light);\n}\n.users-list .user-item.selected {\n  background: var(--slack-primary-light);\n  border-left: 3px solid var(--slack-primary);\n}\n.users-list .user-item .user-info {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n}\n.users-list .user-item .user-info .user-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.users-list .user-item .user-info .user-details {\n  flex: 1;\n  min-width: 0;\n}\n.users-list .user-item .user-info .user-details .user-name {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.users-list .user-item .user-info .user-details .user-name .status-indicator {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n  color: #dee2e6;\n}\n.users-list .user-item .user-info .user-details .user-name .status-indicator.online {\n  color: #198754;\n}\n.users-list .user-item .user-info .user-details .user-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.users-list .user-item .user-info .user-details .user-meta .user-email {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.users-list .user-item .user-info .user-details .user-meta .user-role {\n  padding: 3px 8px;\n  background: var(--slack-primary-light);\n  color: var(--slack-primary);\n  border-radius: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=create-channel-dialog.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialogRef }, { type: SlackApiService }, { type: DebugLoggerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateChannelDialogComponent, { className: "CreateChannelDialogComponent", filePath: "src/app/modules/slack/components/create-channel-dialog/create-channel-dialog.component.ts", lineNumber: 19 });
})();

// src/app/modules/slack/components/channel-list/channel-list.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ChannelListComponent_For_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(channel_r4.unreadCount);
  }
}
function ChannelListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function ChannelListComponent_For_9_Template_div_click_0_listener() {
      const channel_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectChannel(channel_r4.id));
    });
    \u0275\u0275elementStart(1, "mat-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ChannelListComponent_For_9_Conditional_6_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const channel_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isActive(channel_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", channel_r4.isPrivate ? "lock" : "tag", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(channel_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(channel_r4.unreadCount > 0 ? 6 : -1);
  }
}
function ChannelListComponent_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2, "No channels available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function ChannelListComponent_ForEmpty_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateChannelDialog());
    });
    \u0275\u0275text(4, " Create Channel ");
    \u0275\u0275elementEnd()();
  }
}
var ChannelListComponent = class _ChannelListComponent {
  dialog;
  debugLogger;
  channels = [];
  activeChannel = null;
  channelSelected = new EventEmitter();
  channelCreated = new EventEmitter();
  constructor(dialog, debugLogger) {
    this.dialog = dialog;
    this.debugLogger = debugLogger;
  }
  /**
   * 채널 선택
   */
  selectChannel(channelId) {
    this.debugLogger.info("SlackChannelList", `\u{1F3AF} \uCC44\uB110 \uC120\uD0DD \uC774\uBCA4\uD2B8 \uBC1C\uC0DD: ${channelId}`);
    this.channelSelected.emit(channelId);
  }
  /**
   * 채널 생성 다이얼로그 열기
   */
  openCreateChannelDialog() {
    this.debugLogger.info("SlackChannelList", "\u{1F3A8} \uCC44\uB110 \uC0DD\uC131 \uB2E4\uC774\uC5BC\uB85C\uADF8 \uC5F4\uAE30");
    const dialogRef = this.dialog.open(CreateChannelDialogComponent, {
      width: "600px",
      maxWidth: "90vw",
      disableClose: false
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.debugLogger.info("SlackChannelList", "\u2705 \uB2E4\uC774\uC5BC\uB85C\uADF8\uC5D0\uC11C \uB370\uC774\uD130 \uBC1B\uC74C");
        this.debugLogger.info("SlackChannelList", `\uBC1B\uC740 \uB370\uC774\uD130: ${JSON.stringify(result)}`);
        this.debugLogger.info("SlackChannelList", "\u{1F680} channelCreated \uC774\uBCA4\uD2B8 \uBC1C\uD589");
        this.channelCreated.emit(result);
      } else {
        this.debugLogger.info("SlackChannelList", "\u274C \uB2E4\uC774\uC5BC\uB85C\uADF8 \uCDE8\uC18C\uB428 (result \uC5C6\uC74C)");
      }
    });
  }
  /**
   * 활성 채널인지 확인
   */
  isActive(channelId) {
    return this.activeChannel?.id === channelId;
  }
  static \u0275fac = function ChannelListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChannelListComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DebugLoggerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChannelListComponent, selectors: [["app-channel-list"]], inputs: { channels: "channels", activeChannel: "activeChannel" }, outputs: { channelSelected: "channelSelected", channelCreated: "channelCreated" }, standalone: false, decls: 11, vars: 1, consts: [[1, "channel-list-container"], [1, "channel-list-header"], ["mat-icon-button", "", "matTooltip", "Create Channel", 3, "click"], [1, "channel-list"], [1, "channel-item", 3, "active"], [1, "empty-state"], [1, "channel-item", 3, "click"], [1, "channel-icon"], [1, "channel-info"], [1, "channel-name"], [1, "unread-badge"], ["mat-button", "", 3, "click"]], template: function ChannelListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Channels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ChannelListComponent_Template_button_click_4_listener() {
        return ctx.openCreateChannelDialog();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275repeaterCreate(8, ChannelListComponent_For_9_Template, 7, 5, "div", 4, _forTrack02, false, ChannelListComponent_ForEmpty_10_Template, 5, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.channels);
    }
  }, dependencies: [MatButton, MatIconButton, MatIcon, MatTooltip], styles: ["\n\n.channel-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--bg-primary);\n  transition: background-color 0.3s ease;\n}\n.channel-list-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--bg-primary);\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n}\n.channel-list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.channel-list-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--slack-primary);\n}\n.channel-list-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--slack-primary-light);\n}\n.channel-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.channel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.channel-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.channel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.channel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.channel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-secondary);\n  border-left: 3px solid transparent;\n}\n.channel-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--slack-primary-light);\n  color: var(--text-primary);\n}\n.channel-item.active[_ngcontent-%COMP%] {\n  background: var(--slack-primary-light);\n  color: var(--slack-primary);\n  border-left-color: var(--slack-primary);\n  font-weight: 600;\n}\n.channel-item[_ngcontent-%COMP%]   .channel-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: inherit;\n}\n.channel-item[_ngcontent-%COMP%]   .channel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 0;\n}\n.channel-item[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.channel-item[_ngcontent-%COMP%]   .unread-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 11px;\n  background: var(--slack-gradient);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  box-shadow: 0 2px 4px var(--slack-shadow);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=channel-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChannelListComponent, [{
    type: Component,
    args: [{ selector: "app-channel-list", standalone: false, template: `<div class="channel-list-container">
  <div class="channel-list-header">
    <h2>Channels</h2>
    <button mat-icon-button (click)="openCreateChannelDialog()" matTooltip="Create Channel">
      <mat-icon>add</mat-icon>
    </button>
  </div>

  <div class="channel-list">
    @for (channel of channels; track channel.id) {
      <div 
        class="channel-item"
        [class.active]="isActive(channel.id)"
        (click)="selectChannel(channel.id)">
        
        <mat-icon class="channel-icon">
          {{ channel.isPrivate ? 'lock' : 'tag' }}
        </mat-icon>
        
        <div class="channel-info">
          <span class="channel-name">{{ channel.name }}</span>
          @if (channel.unreadCount > 0) {
            <span class="unread-badge">{{ channel.unreadCount }}</span>
          }
        </div>
      </div>
    }

    @empty {
      <div class="empty-state">
        <p>No channels available</p>
        <button mat-button (click)="openCreateChannelDialog()">
          Create Channel
        </button>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/modules/slack/components/channel-list/channel-list.component.scss */\n.channel-list-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--bg-primary);\n  transition: background-color 0.3s ease;\n}\n.channel-list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--bg-primary);\n  transition: background-color 0.3s ease, border-color 0.3s ease;\n}\n.channel-list-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.channel-list-header button {\n  color: var(--slack-primary);\n}\n.channel-list-header button:hover {\n  background-color: var(--slack-primary-light);\n}\n.channel-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.channel-list::-webkit-scrollbar {\n  width: 6px;\n}\n.channel-list::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.channel-list::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.channel-list::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.channel-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-secondary);\n  border-left: 3px solid transparent;\n}\n.channel-item:hover {\n  background-color: var(--slack-primary-light);\n  color: var(--text-primary);\n}\n.channel-item.active {\n  background: var(--slack-primary-light);\n  color: var(--slack-primary);\n  border-left-color: var(--slack-primary);\n  font-weight: 600;\n}\n.channel-item .channel-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: inherit;\n}\n.channel-item .channel-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 0;\n}\n.channel-item .channel-name {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.channel-item .unread-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 11px;\n  background: var(--slack-gradient);\n  color: white;\n  font-size: 11px;\n  font-weight: 700;\n  box-shadow: 0 2px 4px var(--slack-shadow);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n}\n.empty-state p {\n  margin: 0 0 16px;\n  font-size: 14px;\n}\n.empty-state button {\n  color: white;\n}\n/*# sourceMappingURL=channel-list.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: DebugLoggerService }], { channels: [{
    type: Input
  }], activeChannel: [{
    type: Input
  }], channelSelected: [{
    type: Output
  }], channelCreated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChannelListComponent, { className: "ChannelListComponent", filePath: "src/app/modules/slack/components/channel-list/channel-list.component.ts", lineNumber: 16 });
})();

// src/app/modules/slack/components/message-card/message-card.component.ts
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.emoji;
function MessageCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.message.user.avatar, \u0275\u0275sanitizeUrl)("alt", ctx_r1.message.user.name);
  }
}
function MessageCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message.user.name.charAt(0).toUpperCase(), " ");
  }
}
function MessageCardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "(edited)");
    \u0275\u0275elementEnd();
  }
}
function MessageCardComponent_Conditional_14_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r3.url, \u0275\u0275sanitizeUrl)("alt", file_r3.name);
  }
}
function MessageCardComponent_Conditional_14_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon");
    \u0275\u0275text(2, "insert_drive_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(file_r3.name);
  }
}
function MessageCardComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, MessageCardComponent_Conditional_14_For_2_Conditional_1_Template, 1, 2, "img", 21)(2, MessageCardComponent_Conditional_14_For_2_Conditional_2_Template, 5, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r3.type.startsWith("image/") ? 1 : 2);
  }
}
function MessageCardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, MessageCardComponent_Conditional_14_For_2_Template, 3, 1, "div", 20, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.message.files);
  }
}
function MessageCardComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function MessageCardComponent_Conditional_15_For_2_Template_button_click_0_listener() {
      const reaction_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReactionClick(reaction_r5.emoji));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reaction_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reaction_r5.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reaction_r5.count);
  }
}
function MessageCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, MessageCardComponent_Conditional_15_For_2_Template, 5, 2, "button", 23, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groupReactions());
  }
}
function MessageCardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 15)(1, "mat-icon");
    \u0275\u0275text(2, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.message.threadCount);
  }
}
function MessageCardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2, "Emoji Picker (TODO: Install @ctrl/ngx-emoji-mart)");
    \u0275\u0275elementEnd()();
  }
}
var MessageCardComponent = class _MessageCardComponent {
  message;
  deleted = new EventEmitter();
  reactionToggled = new EventEmitter();
  isEmojiPickerOpen = false;
  /**
   * 메시지 삭제
   */
  deleteMessage() {
    this.deleted.emit();
  }
  /**
   * 이모지 피커 토글
   */
  toggleEmojiPicker() {
    this.isEmojiPickerOpen = !this.isEmojiPickerOpen;
  }
  /**
   * 이모지 선택
   */
  onEmojiSelected(event) {
    this.reactionToggled.emit(event.emoji.native);
    this.isEmojiPickerOpen = false;
  }
  /**
   * 리액션 클릭
   */
  onReactionClick(emoji) {
    this.reactionToggled.emit(emoji);
  }
  /**
   * 리액션 그룹화
   */
  groupReactions() {
    const grouped = /* @__PURE__ */ new Map();
    this.message.reactions?.forEach((reaction) => {
      grouped.set(reaction.emoji, (grouped.get(reaction.emoji) || 0) + 1);
    });
    return Array.from(grouped.entries()).map(([emoji, count]) => ({ emoji, count }));
  }
  static \u0275fac = function MessageCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageCardComponent, selectors: [["app-message-card"]], inputs: { message: "message" }, outputs: { deleted: "deleted", reactionToggled: "reactionToggled" }, standalone: false, decls: 42, vars: 13, consts: [["menu", "matMenu"], [1, "message-card"], [1, "message-avatar"], [3, "src", "alt"], [1, "avatar-placeholder"], [1, "message-content"], [1, "message-header"], [1, "message-author"], [1, "message-time"], [1, "message-edited"], [1, "message-text"], [1, "message-files"], [1, "message-reactions"], [1, "message-actions"], ["mat-icon-button", "", "matTooltip", "Add reaction", 3, "click"], ["mat-icon-button", "", "matTooltip", "View thread"], ["mat-icon-button", "", "matTooltip", "More actions", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "emoji-picker-wrapper"], [1, "file-item"], [1, "file-image", 3, "src", "alt"], [1, "file-placeholder"], ["mat-button", "", 1, "reaction-button"], ["mat-button", "", 1, "reaction-button", 3, "click"], [1, "reaction-count"], [1, "thread-count"]], template: function MessageCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275conditionalCreate(2, MessageCardComponent_Conditional_2_Template, 1, 2, "img", 3)(3, MessageCardComponent_Conditional_3_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "span", 7);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, MessageCardComponent_Conditional_11_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, MessageCardComponent_Conditional_14_Template, 3, 0, "div", 11);
      \u0275\u0275conditionalCreate(15, MessageCardComponent_Conditional_15_Template, 3, 0, "div", 12);
      \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
      \u0275\u0275listener("click", function MessageCardComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleEmojiPicker());
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "add_reaction");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, MessageCardComponent_Conditional_20_Template, 5, 1, "button", 15);
      \u0275\u0275elementStart(21, "button", 16)(22, "mat-icon");
      \u0275\u0275text(23, "more_vert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "mat-menu", null, 0)(26, "button", 17)(27, "mat-icon");
      \u0275\u0275text(28, "reply");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Reply in thread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 17)(32, "mat-icon");
      \u0275\u0275text(33, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function MessageCardComponent_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.deleteMessage());
      });
      \u0275\u0275elementStart(37, "mat-icon");
      \u0275\u0275text(38, "delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(41, MessageCardComponent_Conditional_41_Template, 3, 0, "div", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const menu_r6 = \u0275\u0275reference(25);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.message.user.avatar ? 2 : 3);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.message.user.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, ctx.message.timestamp, "short"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.message.edited ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.message.text, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message.files && ctx.message.files.length > 0 ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.groupReactions().length > 0 ? 15 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.message.threadCount && ctx.message.threadCount > 0 ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", menu_r6);
      \u0275\u0275advance(20);
      \u0275\u0275conditional(ctx.isEmojiPickerOpen ? 41 : -1);
    }
  }, dependencies: [MatButton, MatIconButton, MatIcon, MatTooltip, MatMenu, MatMenuItem, MatMenuTrigger, DatePipe], styles: ["\n\n.message-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 16px 0;\n  position: relative;\n  border-bottom: 1px solid var(--bg-tertiary);\n  transition: background-color 0.2s ease;\n}\n.message-card[_ngcontent-%COMP%]:hover {\n  background-color: var(--slack-primary-light);\n}\n.message-card[_ngcontent-%COMP%]:hover   .message-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.message-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.message-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.message-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px var(--shadow);\n}\n.message-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--slack-gradient);\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n}\n.message-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n}\n.message-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.message-header[_ngcontent-%COMP%]   .message-author[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.message-header[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.message-header[_ngcontent-%COMP%]   .message-edited[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.message-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--text-secondary);\n  word-wrap: break-word;\n}\n.message-files[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 12px;\n}\n.message-files[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.message-files[_ngcontent-%COMP%]   .file-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.message-files[_ngcontent-%COMP%]   .file-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background-color: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.message-files[_ngcontent-%COMP%]   .file-placeholder[_ngcontent-%COMP%]:hover {\n  border-color: var(--slack-primary);\n  background-color: var(--slack-primary-light);\n}\n.message-files[_ngcontent-%COMP%]   .file-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #616061;\n}\n.message-files[_ngcontent-%COMP%]   .file-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1d1c1d;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.message-reactions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.message-reactions[_ngcontent-%COMP%]   .reaction-button[_ngcontent-%COMP%] {\n  min-width: auto;\n  padding: 2px 8px;\n  height: 26px;\n  line-height: 26px;\n  border: 1px solid #e0e0e0;\n  border-radius: 13px;\n  font-size: 13px;\n}\n.message-reactions[_ngcontent-%COMP%]   .reaction-button[_ngcontent-%COMP%]:hover {\n  border-color: #1164a3;\n  background-color: #e8f5fa;\n}\n.message-reactions[_ngcontent-%COMP%]   .reaction-button[_ngcontent-%COMP%]   .reaction-count[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: #616061;\n}\n.message-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  right: 16px;\n  display: flex;\n  gap: 4px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background-color: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.message-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.message-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.message-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .thread-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-left: 2px;\n}\n.emoji-picker-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 100;\n  margin-top: 8px;\n  background-color: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  padding: 16px;\n}\n/*# sourceMappingURL=message-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageCardComponent, [{
    type: Component,
    args: [{ selector: "app-message-card", standalone: false, template: `<div class="message-card">
  <div class="message-avatar">
    @if (message.user.avatar) {
      <img [src]="message.user.avatar" [alt]="message.user.name">
    } @else {
      <div class="avatar-placeholder">
        {{ message.user.name.charAt(0).toUpperCase() }}
      </div>
    }
  </div>

  <div class="message-content">
    <div class="message-header">
      <span class="message-author">{{ message.user.name }}</span>
      <span class="message-time">{{ message.timestamp | date:'short' }}</span>
      @if (message.edited) {
        <span class="message-edited">(edited)</span>
      }
    </div>

    <div class="message-text">
      {{ message.text }}
    </div>

    <!-- Files -->
    @if (message.files && message.files.length > 0) {
      <div class="message-files">
        @for (file of message.files; track file.id) {
          <div class="file-item">
            @if (file.type.startsWith('image/')) {
              <img [src]="file.url" [alt]="file.name" class="file-image">
            } @else {
              <div class="file-placeholder">
                <mat-icon>insert_drive_file</mat-icon>
                <span>{{ file.name }}</span>
              </div>
            }
          </div>
        }
      </div>
    }

    <!-- Reactions -->
    @if (groupReactions().length > 0) {
      <div class="message-reactions">
        @for (reaction of groupReactions(); track reaction.emoji) {
          <button 
            mat-button 
            class="reaction-button"
            (click)="onReactionClick(reaction.emoji)">
            <span>{{ reaction.emoji }}</span>
            <span class="reaction-count">{{ reaction.count }}</span>
          </button>
        }
      </div>
    }

    <!-- Actions -->
    <div class="message-actions">
      <button 
        mat-icon-button 
        matTooltip="Add reaction"
        (click)="toggleEmojiPicker()">
        <mat-icon>add_reaction</mat-icon>
      </button>

      @if (message.threadCount && message.threadCount > 0) {
        <button mat-icon-button matTooltip="View thread">
          <mat-icon>forum</mat-icon>
          <span class="thread-count">{{ message.threadCount }}</span>
        </button>
      }

      <button 
        mat-icon-button 
        [matMenuTriggerFor]="menu"
        matTooltip="More actions">
        <mat-icon>more_vert</mat-icon>
      </button>

      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>reply</mat-icon>
          <span>Reply in thread</span>
        </button>
        <button mat-menu-item>
          <mat-icon>edit</mat-icon>
          <span>Edit</span>
        </button>
        <button mat-menu-item (click)="deleteMessage()">
          <mat-icon>delete</mat-icon>
          <span>Delete</span>
        </button>
      </mat-menu>
    </div>

    <!-- Emoji Picker -->
    @if (isEmojiPickerOpen) {
      <div class="emoji-picker-wrapper">
        <!-- TODO: emoji-mart \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC124\uCE58 \uD6C4 \uD65C\uC131\uD654 -->
        <!-- <emoji-mart 
          set="google" 
          [emojiTooltip]="true"
          (emojiSelect)="onEmojiSelected($event)">
        </emoji-mart> -->
        <p>Emoji Picker (TODO: Install &#64;ctrl/ngx-emoji-mart)</p>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/modules/slack/components/message-card/message-card.component.scss */\n.message-card {\n  display: flex;\n  gap: 14px;\n  padding: 16px 0;\n  position: relative;\n  border-bottom: 1px solid var(--bg-tertiary);\n  transition: background-color 0.2s ease;\n}\n.message-card:hover {\n  background-color: var(--slack-primary-light);\n}\n.message-card:hover .message-actions {\n  opacity: 1;\n}\n.message-avatar {\n  flex-shrink: 0;\n}\n.message-avatar img,\n.message-avatar .avatar-placeholder {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px var(--shadow);\n}\n.message-avatar .avatar-placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--slack-gradient);\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n}\n.message-content {\n  flex: 1;\n  min-width: 0;\n  position: relative;\n}\n.message-header {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.message-header .message-author {\n  font-weight: 700;\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.message-header .message-time {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.message-header .message-edited {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.message-text {\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--text-secondary);\n  word-wrap: break-word;\n}\n.message-files {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 12px;\n}\n.message-files .file-item {\n  max-width: 200px;\n}\n.message-files .file-image {\n  max-width: 100%;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.message-files .file-placeholder {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background-color: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.message-files .file-placeholder:hover {\n  border-color: var(--slack-primary);\n  background-color: var(--slack-primary-light);\n}\n.message-files .file-placeholder mat-icon {\n  color: #616061;\n}\n.message-files .file-placeholder span {\n  font-size: 13px;\n  color: #1d1c1d;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.message-reactions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.message-reactions .reaction-button {\n  min-width: auto;\n  padding: 2px 8px;\n  height: 26px;\n  line-height: 26px;\n  border: 1px solid #e0e0e0;\n  border-radius: 13px;\n  font-size: 13px;\n}\n.message-reactions .reaction-button:hover {\n  border-color: #1164a3;\n  background-color: #e8f5fa;\n}\n.message-reactions .reaction-button .reaction-count {\n  margin-left: 4px;\n  color: #616061;\n}\n.message-actions {\n  position: absolute;\n  top: -12px;\n  right: 16px;\n  display: flex;\n  gap: 4px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  background-color: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.message-actions button {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.message-actions button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.message-actions button .thread-count {\n  font-size: 11px;\n  margin-left: 2px;\n}\n.emoji-picker-wrapper {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 100;\n  margin-top: 8px;\n  background-color: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  padding: 16px;\n}\n/*# sourceMappingURL=message-card.component.css.map */\n"] }]
  }], null, { message: [{
    type: Input
  }], deleted: [{
    type: Output
  }], reactionToggled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageCardComponent, { className: "MessageCardComponent", filePath: "src/app/modules/slack/components/message-card/message-card.component.ts", lineNumber: 13 });
})();

// src/app/modules/slack/components/message-list/message-list.component.ts
var _c0 = ["scrollContainer"];
var _forTrack04 = ($index, $item) => $item.id;
function MessageListComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activeChannel.description);
  }
}
function MessageListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, MessageListComponent_Conditional_1_Conditional_6_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.activeChannel.isPrivate ? "lock" : "tag");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeChannel.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeChannel.description ? 6 : -1);
  }
}
function MessageListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading messages...");
    \u0275\u0275elementEnd()();
  }
}
function MessageListComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-message-card", 10);
    \u0275\u0275listener("deleted", function MessageListComponent_Conditional_5_For_1_Template_app_message_card_deleted_0_listener() {
      const message_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteMessage(message_r4.id));
    })("reactionToggled", function MessageListComponent_Conditional_5_For_1_Template_app_message_card_reactionToggled_0_listener($event) {
      const message_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleReaction(message_r4.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    \u0275\u0275property("message", message_r4);
  }
}
function MessageListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MessageListComponent_Conditional_5_For_1_Template, 1, 1, "app-message-card", 9, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.messages);
  }
}
function MessageListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon");
    \u0275\u0275text(2, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No messages yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Be the first to send a message!");
    \u0275\u0275elementEnd()();
  }
}
var MessageListComponent = class _MessageListComponent {
  messages = [];
  isLoading = false;
  activeChannel = null;
  messageDeleted = new EventEmitter();
  reactionToggled = new EventEmitter();
  scrollContainer;
  shouldScrollToBottom = true;
  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
    }
  }
  /**
   * 스크롤을 하단으로 이동
   */
  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
  /**
   * 스크롤 이벤트 핸들러
   */
  onScroll(event) {
    const element = event.target;
    const atBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 10;
    this.shouldScrollToBottom = atBottom;
  }
  /**
   * 메시지 삭제
   */
  deleteMessage(messageId) {
    this.messageDeleted.emit(messageId);
  }
  /**
   * 리액션 토글
   */
  toggleReaction(messageId, emoji) {
    this.reactionToggled.emit({ messageId, emoji });
  }
  static \u0275fac = function MessageListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageListComponent, selectors: [["app-message-list"]], viewQuery: function MessageListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollContainer = _t.first);
    }
  }, inputs: { messages: "messages", isLoading: "isLoading", activeChannel: "activeChannel" }, outputs: { messageDeleted: "messageDeleted", reactionToggled: "reactionToggled" }, standalone: false, decls: 7, vars: 2, consts: [["scrollContainer", ""], [1, "message-list-container"], [1, "channel-header"], [1, "messages-scroll", 3, "scroll"], [1, "loading-state"], [1, "empty-state"], [1, "channel-title"], [1, "channel-description"], ["diameter", "40"], [3, "message"], [3, "deleted", "reactionToggled", "message"]], template: function MessageListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, MessageListComponent_Conditional_1_Template, 7, 3, "div", 2);
      \u0275\u0275elementStart(2, "div", 3, 0);
      \u0275\u0275listener("scroll", function MessageListComponent_Template_div_scroll_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onScroll($event));
      });
      \u0275\u0275conditionalCreate(4, MessageListComponent_Conditional_4_Template, 4, 0, "div", 4)(5, MessageListComponent_Conditional_5_Template, 2, 0)(6, MessageListComponent_Conditional_6_Template, 7, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeChannel ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoading ? 4 : ctx.messages && ctx.messages.length > 0 ? 5 : 6);
    }
  }, dependencies: [MatIcon, MatProgressSpinner, MessageCardComponent], styles: ["\n\n.message-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  background-color: var(--bg-secondary);\n  transition: background-color 0.3s ease;\n  min-height: 0;\n}\n.channel-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--slack-gradient);\n  box-shadow: 0 2px 4px var(--shadow);\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.channel-header[_ngcontent-%COMP%]   .channel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.channel-header[_ngcontent-%COMP%]   .channel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.channel-header[_ngcontent-%COMP%]   .channel-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.3px;\n}\n.channel-header[_ngcontent-%COMP%]   .channel-description[_ngcontent-%COMP%] {\n  margin: 8px 0 0 34px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.messages-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 20px 24px;\n  background-color: var(--bg-primary);\n  transition: background-color 0.3s ease;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.messages-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.messages-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--border-color);\n  border-radius: 4px;\n}\n.messages-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: var(--text-muted);\n}\n.messages-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: var(--bg-secondary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  gap: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]     circle {\n  stroke: var(--slack-primary);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 16px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: var(--slack-primary);\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=message-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageListComponent, [{
    type: Component,
    args: [{ selector: "app-message-list", standalone: false, template: `<div class="message-list-container">
  <!-- Channel Header -->
  @if (activeChannel) {
    <div class="channel-header">
      <div class="channel-title">
        <mat-icon>{{ activeChannel.isPrivate ? 'lock' : 'tag' }}</mat-icon>
        <h2>{{ activeChannel.name }}</h2>
      </div>
      @if (activeChannel.description) {
        <p class="channel-description">{{ activeChannel.description }}</p>
      }
    </div>
  }

  <!-- Messages -->
  <div 
    class="messages-scroll" 
    #scrollContainer
    (scroll)="onScroll($event)">
    
    @if (isLoading) {
      <div class="loading-state">
        <mat-spinner diameter="40"></mat-spinner>
        <p>Loading messages...</p>
      </div>
    } @else if (messages && messages.length > 0) {
      @for (message of messages; track message.id) {
        <app-message-card
          [message]="message"
          (deleted)="deleteMessage(message.id)"
          (reactionToggled)="toggleReaction(message.id, $event)">
        </app-message-card>
      }
    } @else {
      <div class="empty-state">
        <mat-icon>forum</mat-icon>
        <h3>No messages yet</h3>
        <p>Be the first to send a message!</p>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/modules/slack/components/message-list/message-list.component.scss */\n.message-list-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  background-color: var(--bg-secondary);\n  transition: background-color 0.3s ease;\n  min-height: 0;\n}\n.channel-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--slack-gradient);\n  box-shadow: 0 2px 4px var(--shadow);\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.channel-header .channel-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.channel-header .channel-title mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.channel-header .channel-title h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.3px;\n}\n.channel-header .channel-description {\n  margin: 8px 0 0 34px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.messages-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 20px 24px;\n  background-color: var(--bg-primary);\n  transition: background-color 0.3s ease;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.messages-scroll::-webkit-scrollbar {\n  width: 8px;\n}\n.messages-scroll::-webkit-scrollbar-thumb {\n  background-color: var(--border-color);\n  border-radius: 4px;\n}\n.messages-scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--text-muted);\n}\n.messages-scroll::-webkit-scrollbar-track {\n  background-color: var(--bg-secondary);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 16px;\n  gap: 16px;\n}\n.loading-state mat-spinner ::ng-deep circle {\n  stroke: var(--slack-primary);\n}\n.loading-state p {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 16px;\n  text-align: center;\n}\n.empty-state mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: var(--slack-primary);\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=message-list.component.css.map */\n"] }]
  }], null, { messages: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], activeChannel: [{
    type: Input
  }], messageDeleted: [{
    type: Output
  }], reactionToggled: [{
    type: Output
  }], scrollContainer: [{
    type: ViewChild,
    args: ["scrollContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageListComponent, { className: "MessageListComponent", filePath: "src/app/modules/slack/components/message-list/message-list.component.ts", lineNumber: 13 });
})();

// src/app/modules/slack/components/message-input/message-input.component.ts
var _c02 = ["fileInput"];
var _forTrack05 = ($index, $item) => $item.id;
function MessageInputComponent_Conditional_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", file_r3.url, \u0275\u0275sanitizeUrl)("alt", file_r3.name);
  }
}
function MessageInputComponent_Conditional_1_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon");
    \u0275\u0275text(2, "insert_drive_file");
    \u0275\u0275elementEnd()();
  }
}
function MessageInputComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, MessageInputComponent_Conditional_1_For_2_Conditional_1_Template, 1, 2, "img", 13)(2, MessageInputComponent_Conditional_1_For_2_Conditional_2_Template, 3, 0, "div", 14);
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function MessageInputComponent_Conditional_1_For_2_Template_button_click_5_listener() {
      const file_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFile(file_r3.id));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r3.type.startsWith("image/") ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r3.name);
  }
}
function MessageInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, MessageInputComponent_Conditional_1_For_2_Template, 8, 2, "div", 12, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.uploadedFiles);
  }
}
function MessageInputComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function MessageInputComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
var MessageInputComponent = class _MessageInputComponent {
  messageForm;
  uploadedFiles = [];
  isUploading = false;
  activeChannel = null;
  messageSent = new EventEmitter();
  filesUploaded = new EventEmitter();
  fileRemoved = new EventEmitter();
  fileInput;
  /**
   * 파일 선택 트리거
   */
  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }
  /**
   * 파일 선택 핸들러
   */
  onFileSelected(event) {
    const files = event.target.files;
    if (files && files.length > 0 && this.activeChannel) {
      this.filesUploaded.emit({
        channelId: this.activeChannel.id,
        files
      });
      this.fileInput.nativeElement.value = "";
    }
  }
  /**
   * 업로드된 파일 제거
   */
  removeFile(fileId) {
    this.fileRemoved.emit(fileId);
  }
  /**
   * 키보드 이벤트 핸들러
   */
  onKeyDown(event) {
    if (event.isComposing)
      return;
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  /**
   * 메시지 전송
   */
  sendMessage() {
    if (!this.activeChannel)
      return;
    const text = this.messageForm.value?.trim();
    if (!text && (!this.uploadedFiles || this.uploadedFiles.length === 0))
      return;
    this.messageSent.emit(this.activeChannel.id);
  }
  /**
   * 전송 버튼 비활성화 여부
   */
  isSendDisabled() {
    const text = this.messageForm.value?.trim();
    return !text && (!this.uploadedFiles || this.uploadedFiles.length === 0);
  }
  static \u0275fac = function MessageInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageInputComponent, selectors: [["app-message-input"]], viewQuery: function MessageInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, inputs: { messageForm: "messageForm", uploadedFiles: "uploadedFiles", isUploading: "isUploading", activeChannel: "activeChannel" }, outputs: { messageSent: "messageSent", filesUploaded: "filesUploaded", fileRemoved: "fileRemoved" }, standalone: false, decls: 18, vars: 7, consts: [["fileInput", ""], [1, "message-input-container"], [1, "uploaded-files-preview"], [1, "input-wrapper"], ["appearance", "outline", 1, "message-field"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "10", 3, "keydown", "formControl", "placeholder"], [1, "input-actions"], ["mat-icon-button", "", "matTooltip", "Attach files", 3, "click", "disabled"], ["mat-icon-button", "", "matTooltip", "Add emoji", 3, "disabled"], ["mat-raised-button", "", "color", "primary", 1, "send-button", 3, "click", "disabled"], ["diameter", "20"], ["type", "file", "multiple", "", 2, "display", "none", 3, "change"], [1, "file-preview"], [1, "file-thumbnail", 3, "src", "alt"], [1, "file-icon"], [1, "file-name"], ["mat-icon-button", "", 1, "remove-file", 3, "click"]], template: function MessageInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, MessageInputComponent_Conditional_1_Template, 3, 0, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "mat-form-field", 4)(4, "textarea", 5);
      \u0275\u0275listener("keydown", function MessageInputComponent_Template_textarea_keydown_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyDown($event));
      });
      \u0275\u0275text(5, "      ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function MessageInputComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.triggerFileUpload());
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "attach_file");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 8)(11, "mat-icon");
      \u0275\u0275text(12, "sentiment_satisfied_alt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function MessageInputComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275conditionalCreate(14, MessageInputComponent_Conditional_14_Template, 1, 0, "mat-spinner", 10)(15, MessageInputComponent_Conditional_15_Template, 2, 0, "mat-icon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "input", 11, 0);
      \u0275\u0275listener("change", function MessageInputComponent_Template_input_change_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.uploadedFiles && ctx.uploadedFiles.length > 0 ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("formControl", ctx.messageForm)("placeholder", ctx.activeChannel ? "Message #" + ctx.activeChannel.name : "Select a channel");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.activeChannel);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.activeChannel);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isSendDisabled() || ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUploading ? 14 : 15);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButton, MatIconButton, MatIcon, MatFormField, MatInput, CdkTextareaAutosize, MatTooltip, MatProgressSpinner], styles: ["\n\n.message-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--bg-primary);\n  box-shadow: 0 -2px 8px var(--shadow);\n  transition: all 0.3s ease;\n}\n.uploaded-files-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background-color: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  max-width: 220px;\n  transition: all 0.2s ease;\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]:hover {\n  border-color: var(--slack-primary);\n  background-color: var(--slack-primary-light);\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .file-thumbnail[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .file-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: var(--slack-primary-light);\n  border-radius: 6px;\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .file-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--slack-primary);\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: var(--text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 0;\n  font-weight: 500;\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .remove-file[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  color: #868e96;\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .remove-file[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.uploaded-files-preview[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .remove-file[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.message-field[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n}\n.message-field[_ngcontent-%COMP%]     .mat-mdc-form-field-flex {\n  padding: 10px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background-color: var(--bg-secondary);\n  transition: all 0.2s ease;\n}\n.message-field[_ngcontent-%COMP%]     .mat-mdc-form-field-focus .mat-mdc-form-field-flex {\n  border-color: var(--slack-primary);\n  background-color: var(--bg-primary);\n  box-shadow: 0 0 0 3px var(--slack-primary-light);\n}\n.message-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  padding: 0;\n}\n.message-field[_ngcontent-%COMP%]     textarea {\n  resize: none;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--text-secondary);\n}\n.input-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-bottom: 8px;\n}\n.input-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--slack-primary);\n}\n.input-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--slack-primary-light);\n}\n.input-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%] {\n  background: var(--slack-gradient);\n  color: white;\n}\n.input-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:hover {\n  background: var(--slack-gradient-hover);\n  box-shadow: 0 4px 8px var(--slack-shadow);\n}\n.input-actions[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]:disabled {\n  background: var(--border-color);\n  color: var(--text-muted);\n}\n.input-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.input-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  min-width: 60px;\n  height: 36px;\n}\n.input-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=message-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageInputComponent, [{
    type: Component,
    args: [{ selector: "app-message-input", standalone: false, template: `<div class="message-input-container">
  <!-- Uploaded Files Preview -->
  @if (uploadedFiles && uploadedFiles.length > 0) {
    <div class="uploaded-files-preview">
      @for (file of uploadedFiles; track file.id) {
        <div class="file-preview">
          @if (file.type.startsWith('image/')) {
            <img [src]="file.url" [alt]="file.name" class="file-thumbnail">
          } @else {
            <div class="file-icon">
              <mat-icon>insert_drive_file</mat-icon>
            </div>
          }
          <span class="file-name">{{ file.name }}</span>
          <button 
            mat-icon-button 
            class="remove-file"
            (click)="removeFile(file.id)">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      }
    </div>
  }

  <!-- Input Area -->
  <div class="input-wrapper">
    <mat-form-field class="message-field" appearance="outline">
      <textarea
        matInput
        cdkTextareaAutosize
        cdkAutosizeMinRows="1"
        cdkAutosizeMaxRows="10"
        [formControl]="messageForm"
        [placeholder]="activeChannel ? 'Message #' + activeChannel.name : 'Select a channel'"
        (keydown)="onKeyDown($event)">
      </textarea>
    </mat-form-field>

    <div class="input-actions">
      <button 
        mat-icon-button 
        matTooltip="Attach files"
        (click)="triggerFileUpload()"
        [disabled]="!activeChannel">
        <mat-icon>attach_file</mat-icon>
      </button>

      <button 
        mat-icon-button 
        matTooltip="Add emoji"
        [disabled]="!activeChannel">
        <mat-icon>sentiment_satisfied_alt</mat-icon>
      </button>

      <button 
        mat-raised-button 
        color="primary"
        class="send-button"
        (click)="sendMessage()"
        [disabled]="isSendDisabled() || isUploading">
        @if (isUploading) {
          <mat-spinner diameter="20"></mat-spinner>
        } @else {
          <mat-icon>send</mat-icon>
        }
      </button>
    </div>
  </div>

  <!-- Hidden File Input -->
  <input 
    type="file" 
    #fileInput 
    (change)="onFileSelected($event)" 
    multiple 
    style="display: none;">
</div>
`, styles: ["/* src/app/modules/slack/components/message-input/message-input.component.scss */\n.message-input-container {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--bg-primary);\n  box-shadow: 0 -2px 8px var(--shadow);\n  transition: all 0.3s ease;\n}\n.uploaded-files-preview {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.uploaded-files-preview .file-preview {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background-color: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  max-width: 220px;\n  transition: all 0.2s ease;\n}\n.uploaded-files-preview .file-preview:hover {\n  border-color: var(--slack-primary);\n  background-color: var(--slack-primary-light);\n}\n.uploaded-files-preview .file-preview .file-thumbnail {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.uploaded-files-preview .file-preview .file-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: var(--slack-primary-light);\n  border-radius: 6px;\n}\n.uploaded-files-preview .file-preview .file-icon mat-icon {\n  color: var(--slack-primary);\n}\n.uploaded-files-preview .file-preview .file-name {\n  flex: 1;\n  font-size: 13px;\n  color: var(--text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  min-width: 0;\n  font-weight: 500;\n}\n.uploaded-files-preview .file-preview .remove-file {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  color: #868e96;\n}\n.uploaded-files-preview .file-preview .remove-file:hover {\n  color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.uploaded-files-preview .file-preview .remove-file mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.input-wrapper {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.message-field {\n  flex: 1;\n  margin: 0;\n}\n.message-field ::ng-deep .mat-mdc-form-field-flex {\n  padding: 10px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background-color: var(--bg-secondary);\n  transition: all 0.2s ease;\n}\n.message-field ::ng-deep .mat-mdc-form-field-focus .mat-mdc-form-field-flex {\n  border-color: var(--slack-primary);\n  background-color: var(--bg-primary);\n  box-shadow: 0 0 0 3px var(--slack-primary-light);\n}\n.message-field ::ng-deep .mat-mdc-text-field-wrapper {\n  padding: 0;\n}\n.message-field ::ng-deep textarea {\n  resize: none;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--text-secondary);\n}\n.input-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-bottom: 8px;\n}\n.input-actions button {\n  color: var(--slack-primary);\n}\n.input-actions button:hover {\n  background-color: var(--slack-primary-light);\n}\n.input-actions button[color=primary] {\n  background: var(--slack-gradient);\n  color: white;\n}\n.input-actions button[color=primary]:hover {\n  background: var(--slack-gradient-hover);\n  box-shadow: 0 4px 8px var(--slack-shadow);\n}\n.input-actions button[color=primary]:disabled {\n  background: var(--border-color);\n  color: var(--text-muted);\n}\n.input-actions button mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.input-actions .send-button {\n  min-width: 60px;\n  height: 36px;\n}\n.input-actions .send-button mat-spinner {\n  display: inline-block;\n}\n/*# sourceMappingURL=message-input.component.css.map */\n"] }]
  }], null, { messageForm: [{
    type: Input
  }], uploadedFiles: [{
    type: Input
  }], isUploading: [{
    type: Input
  }], activeChannel: [{
    type: Input
  }], messageSent: [{
    type: Output
  }], filesUploaded: [{
    type: Output
  }], fileRemoved: [{
    type: Output
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageInputComponent, { className: "MessageInputComponent", filePath: "src/app/modules/slack/components/message-input/message-input.component.ts", lineNumber: 14 });
})();

// src/app/modules/slack/pages/slack-main/slack-main.component.ts
function SlackMainComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon", 19);
    \u0275\u0275text(2, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("online", member_r1.isOnline)("offline", !member_r1.isOnline);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u25CF ", member_r1.isOnline ? "Online" : "Offline", " ");
  }
}
var SlackMainComponent = class _SlackMainComponent {
  channelVM;
  messageVM;
  socketAdapter;
  slackApi;
  slackAuthService;
  destroy$ = new Subject();
  isConnected = false;
  isSidebarOpen = true;
  isMembersSidebarOpen = true;
  members = [];
  constructor(channelVM, messageVM, socketAdapter, slackApi, slackAuthService) {
    this.channelVM = channelVM;
    this.messageVM = messageVM;
    this.socketAdapter = socketAdapter;
    this.slackApi = slackApi;
    this.slackAuthService = slackAuthService;
  }
  ngOnInit() {
    this.socketAdapter.isConnected$.pipe(takeUntil(this.destroy$)).subscribe((connected) => {
      this.isConnected = connected;
    });
    this.socketAdapter.onOnlineUsersChanged$.pipe(takeUntil(this.destroy$)).subscribe((onlineUserIds) => {
      this.updateMembersOnlineStatus();
    });
    this.socketAdapter.onUserOnline$.pipe(takeUntil(this.destroy$)).subscribe((userId2) => {
      this.updateMembersOnlineStatus();
    });
    this.socketAdapter.onUserOffline$.pipe(takeUntil(this.destroy$)).subscribe((userId2) => {
      this.updateMembersOnlineStatus();
    });
    const userId = "user-123";
    this.socketAdapter.connect(userId);
    this.loadMembers();
    this.channelVM.loadChannels();
    this.channelVM.getActiveChannel().pipe(takeUntil(this.destroy$)).subscribe((channel) => {
      if (channel) {
        this.messageVM.loadMessages(channel.id, true);
      }
    });
  }
  /**
   * 멤버 목록 로드
   */
  loadMembers() {
    this.slackApi.getUsers().pipe(takeUntil(this.destroy$)).subscribe({
      next: (users) => {
        this.members = users;
        this.updateMembersOnlineStatus();
      },
      error: (error) => {
      }
    });
  }
  /**
   * 멤버의 온라인 상태 업데이트
   */
  updateMembersOnlineStatus() {
    if (!this.members || this.members.length === 0)
      return;
    this.members = this.members.map((member) => __spreadProps(__spreadValues({}, member), {
      isOnline: this.socketAdapter.isUserOnline(Number(member.id))
    }));
  }
  /**
   * 사이드바 토글
   */
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  /**
   * 멤버 사이드바 토글
   */
  toggleMembersSidebar() {
    this.isMembersSidebarOpen = !this.isMembersSidebarOpen;
  }
  /**
   * 로그아웃
   */
  logout() {
    this.slackAuthService.logout();
  }
  ngOnDestroy() {
    this.socketAdapter.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function SlackMainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackMainComponent)(\u0275\u0275directiveInject(ChannelViewModel), \u0275\u0275directiveInject(MessageViewModel), \u0275\u0275directiveInject(SlackSocketAdapter), \u0275\u0275directiveInject(SlackApiService), \u0275\u0275directiveInject(SlackAuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlackMainComponent, selectors: [["app-slack-main"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ChannelViewModel, MessageViewModel])], decls: 43, vars: 35, consts: [[1, "slack-container"], [1, "slack-header"], ["mat-icon-button", "", 3, "click"], [1, "header-actions"], ["mat-icon-button", "", "matTooltip", "\uB85C\uADF8\uC544\uC6C3", 3, "click"], ["mat-icon-button", "", "matTooltip", "Toggle Members", 3, "click"], [1, "connection-status"], [1, "slack-content"], [1, "slack-sidebar"], [3, "channelSelected", "channelCreated", "channels", "activeChannel"], [1, "slack-main"], [3, "messageDeleted", "reactionToggled", "messages", "isLoading", "activeChannel"], [3, "messageSent", "filesUploaded", "fileRemoved", "messageForm", "uploadedFiles", "isUploading", "activeChannel"], [1, "slack-members-sidebar"], [1, "members-header"], ["mat-icon-button", "", "matTooltip", "Close", 1, "close-btn", 3, "click"], [1, "members-list"], ["class", "member-item", 4, "ngFor", "ngForOf"], [1, "member-item"], [1, "member-avatar"], [1, "member-info"], [1, "member-name"], [1, "member-status"]], template: function SlackMainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
      \u0275\u0275listener("click", function SlackMainComponent_Template_button_click_2_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\uD611\uC5C5 \uCC57");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
      \u0275\u0275listener("click", function SlackMainComponent_Template_button_click_8_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "logout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function SlackMainComponent_Template_button_click_11_listener() {
        return ctx.toggleMembersSidebar();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "span", 6)(15, "mat-icon");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 7)(19, "aside", 8)(20, "app-channel-list", 9);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275pipe(22, "async");
      \u0275\u0275listener("channelSelected", function SlackMainComponent_Template_app_channel_list_channelSelected_20_listener($event) {
        return ctx.channelVM.selectChannel($event);
      })("channelCreated", function SlackMainComponent_Template_app_channel_list_channelCreated_20_listener($event) {
        return ctx.channelVM.createChannel($event.name, $event.description, $event.isPrivate, $event.members);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "main", 10)(24, "app-message-list", 11);
      \u0275\u0275pipe(25, "async");
      \u0275\u0275pipe(26, "async");
      \u0275\u0275pipe(27, "async");
      \u0275\u0275listener("messageDeleted", function SlackMainComponent_Template_app_message_list_messageDeleted_24_listener($event) {
        return ctx.messageVM.deleteMessage($event);
      })("reactionToggled", function SlackMainComponent_Template_app_message_list_reactionToggled_24_listener($event) {
        return ctx.messageVM.toggleReaction($event.messageId, $event.emoji);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "app-message-input", 12);
      \u0275\u0275pipe(29, "async");
      \u0275\u0275pipe(30, "async");
      \u0275\u0275pipe(31, "async");
      \u0275\u0275listener("messageSent", function SlackMainComponent_Template_app_message_input_messageSent_28_listener($event) {
        return ctx.messageVM.sendMessage($event);
      })("filesUploaded", function SlackMainComponent_Template_app_message_input_filesUploaded_28_listener($event) {
        return ctx.messageVM.uploadFiles($event.channelId, $event.files);
      })("fileRemoved", function SlackMainComponent_Template_app_message_input_fileRemoved_28_listener($event) {
        return ctx.messageVM.removeUploadedFile($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "aside", 13)(33, "div", 14)(34, "mat-icon");
      \u0275\u0275text(35, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3");
      \u0275\u0275text(37, "Loworld Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 15);
      \u0275\u0275listener("click", function SlackMainComponent_Template_button_click_38_listener() {
        return ctx.toggleMembersSidebar();
      });
      \u0275\u0275elementStart(39, "mat-icon");
      \u0275\u0275text(40, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 16);
      \u0275\u0275template(42, SlackMainComponent_div_42_Template, 8, 6, "div", 17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.isMembersSidebarOpen ? "people" : "people_outline");
      \u0275\u0275advance();
      \u0275\u0275classProp("connected", ctx.isConnected);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isConnected ? "wifi" : "wifi_off");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isConnected ? "Connected" : "Disconnected", " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.isSidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275property("channels", \u0275\u0275pipeBind1(21, 19, ctx.channelVM.getChannels()))("activeChannel", \u0275\u0275pipeBind1(22, 21, ctx.channelVM.getActiveChannel()));
      \u0275\u0275advance(4);
      \u0275\u0275property("messages", \u0275\u0275pipeBind1(25, 23, ctx.messageVM.getMessages()))("isLoading", \u0275\u0275pipeBind1(26, 25, ctx.messageVM.getIsLoading()))("activeChannel", \u0275\u0275pipeBind1(27, 27, ctx.channelVM.getActiveChannel()));
      \u0275\u0275advance(4);
      \u0275\u0275property("messageForm", ctx.messageVM.messageForm)("uploadedFiles", \u0275\u0275pipeBind1(29, 29, ctx.messageVM.getUploadedFiles()))("isUploading", \u0275\u0275pipeBind1(30, 31, ctx.messageVM.getIsFileUploading()))("activeChannel", \u0275\u0275pipeBind1(31, 33, ctx.channelVM.getActiveChannel()));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("closed", !ctx.isMembersSidebarOpen);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.members);
    }
  }, dependencies: [NgForOf, MatIconButton, MatIcon, MatTooltip, ChannelListComponent, MessageListComponent, MessageInputComponent, AsyncPipe], styles: ['\n\n.slack-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: var(--bg-secondary);\n  transition: background-color 0.3s ease;\n}\n.slack-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: var(--slack-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  transition: background 0.3s ease;\n}\n.slack-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%] {\n  color: white;\n}\n.slack-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.slack-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.slack-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.slack-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.slack-header[_ngcontent-%COMP%]   .connection-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.15);\n  font-weight: 500;\n}\n.slack-header[_ngcontent-%COMP%]   .connection-status.connected[_ngcontent-%COMP%] {\n  background-color: rgba(25, 135, 84, 0.3);\n}\n.slack-header[_ngcontent-%COMP%]   .connection-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.slack-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.slack-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background-color: var(--bg-primary);\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.3s ease,\n    background-color 0.3s ease,\n    border-color 0.3s ease;\n  overflow: hidden;\n  box-shadow: 2px 0 8px var(--shadow);\n}\n.slack-sidebar[_ngcontent-%COMP%]:not(.open) {\n  transform: translateX(-100%);\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--slack-gradient);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.3px;\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 0;\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.slack-sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n@media (max-width: 768px) {\n  .slack-sidebar[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 52px;\n    bottom: 0;\n    z-index: 10;\n    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n  }\n}\n.slack-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--bg-primary);\n  overflow: hidden;\n  transition: background-color 0.3s ease;\n  position: relative;\n}\n.slack-main[_ngcontent-%COMP%]   app-message-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.slack-main[_ngcontent-%COMP%]   app-message-input[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.slack-members-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  background-color: var(--bg-primary);\n  border-left: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    width 0.3s ease,\n    background-color 0.3s ease,\n    border-color 0.3s ease;\n  box-shadow: -2px 0 8px var(--shadow);\n}\n.slack-members-sidebar.closed[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  width: 0;\n  border-left: none;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  background: var(--slack-gradient);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  transition: background 0.3s ease;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  flex: 1;\n  letter-spacing: 0.3px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  color: white;\n  width: 32px;\n  height: 32px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 0;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid var(--bg-tertiary);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--slack-primary-light);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: var(--slack-primary);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-status.online[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-status.offline[_ngcontent-%COMP%] {\n  color: #868686;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-status[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-status.online[_ngcontent-%COMP%]::before {\n  background-color: #198754;\n  box-shadow: 0 0 6px rgba(25, 135, 84, 0.5);\n}\n.slack-members-sidebar[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   .member-status.offline[_ngcontent-%COMP%]::before {\n  background-color: #868686;\n}\n@media (max-width: 1024px) {\n  .slack-members-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=slack-main.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackMainComponent, [{
    type: Component,
    args: [{ selector: "app-slack-main", standalone: false, providers: [ChannelViewModel, MessageViewModel], template: `<div class="slack-container">
  <!-- Header -->
  <header class="slack-header">
    <button mat-icon-button (click)="toggleSidebar()">
      <mat-icon>menu</mat-icon>
    </button>
    
    <h1>\uD611\uC5C5 \uCC57</h1>
    
    <div class="header-actions">
      <button mat-icon-button (click)="logout()" matTooltip="\uB85C\uADF8\uC544\uC6C3">
        <mat-icon>logout</mat-icon>
      </button>
      
      <button mat-icon-button (click)="toggleMembersSidebar()" matTooltip="Toggle Members">
        <mat-icon>{{ isMembersSidebarOpen ? 'people' : 'people_outline' }}</mat-icon>
      </button>
      
      <span class="connection-status" [class.connected]="isConnected">
        <mat-icon>{{ isConnected ? 'wifi' : 'wifi_off' }}</mat-icon>
        {{ isConnected ? 'Connected' : 'Disconnected' }}
      </span>
    </div>
  </header>

  <div class="slack-content">
    <!-- Sidebar: Channel List -->
    <aside class="slack-sidebar" [class.open]="isSidebarOpen">
      <app-channel-list 
        [channels]="channelVM.getChannels() | async"
        [activeChannel]="channelVM.getActiveChannel() | async"
        (channelSelected)="channelVM.selectChannel($event)"
        (channelCreated)="channelVM.createChannel($event.name, $event.description, $event.isPrivate, $event.members)">
      </app-channel-list>
    </aside>

    <!-- Main: Message Area -->
    <main class="slack-main">
      <app-message-list
        [messages]="messageVM.getMessages() | async"
        [isLoading]="messageVM.getIsLoading() | async"
        [activeChannel]="channelVM.getActiveChannel() | async"
        (messageDeleted)="messageVM.deleteMessage($event)"
        (reactionToggled)="messageVM.toggleReaction($event.messageId, $event.emoji)">
      </app-message-list>

      <app-message-input
        [messageForm]="messageVM.messageForm"
        [uploadedFiles]="messageVM.getUploadedFiles() | async"
        [isUploading]="messageVM.getIsFileUploading() | async"
        [activeChannel]="channelVM.getActiveChannel() | async"
        (messageSent)="messageVM.sendMessage($event)"
        (filesUploaded)="messageVM.uploadFiles($event.channelId, $event.files)"
        (fileRemoved)="messageVM.removeUploadedFile($event)">
      </app-message-input>
    </main>

    <!-- Right Sidebar: Members -->
    <aside class="slack-members-sidebar" [class.closed]="!isMembersSidebarOpen">
      <div class="members-header">
        <mat-icon>group</mat-icon>
        <h3>Loworld Members</h3>
        <button mat-icon-button class="close-btn" (click)="toggleMembersSidebar()" matTooltip="Close">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      
      <div class="members-list">
        <div class="member-item" *ngFor="let member of members">
          <mat-icon class="member-avatar">account_circle</mat-icon>
          <div class="member-info">
            <span class="member-name">{{ member.name }}</span>
            <span class="member-status" [class.online]="member.isOnline" [class.offline]="!member.isOnline">
              \u25CF {{ member.isOnline ? 'Online' : 'Offline' }}
            </span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>
`, styles: ['/* src/app/modules/slack/pages/slack-main/slack-main.component.scss */\n.slack-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: var(--bg-secondary);\n  transition: background-color 0.3s ease;\n}\n.slack-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  background: var(--slack-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  transition: background 0.3s ease;\n}\n.slack-header button[mat-icon-button] {\n  color: white;\n}\n.slack-header button[mat-icon-button]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.slack-header h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.slack-header .header-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.slack-header .header-actions button {\n  color: white;\n}\n.slack-header .connection-status {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  background-color: rgba(255, 255, 255, 0.15);\n  font-weight: 500;\n}\n.slack-header .connection-status.connected {\n  background-color: rgba(25, 135, 84, 0.3);\n}\n.slack-header .connection-status mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.slack-content {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.slack-sidebar {\n  width: 280px;\n  background-color: var(--bg-primary);\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.3s ease,\n    background-color 0.3s ease,\n    border-color 0.3s ease;\n  overflow: hidden;\n  box-shadow: 2px 0 8px var(--shadow);\n}\n.slack-sidebar:not(.open) {\n  transform: translateX(-100%);\n}\n.slack-sidebar .sidebar-header {\n  padding: 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--slack-gradient);\n  transition: background 0.3s ease, border-color 0.3s ease;\n}\n.slack-sidebar .sidebar-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.3px;\n}\n.slack-sidebar .sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 0;\n}\n.slack-sidebar .sidebar-content::-webkit-scrollbar {\n  width: 6px;\n}\n.slack-sidebar .sidebar-content::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.slack-sidebar .sidebar-content::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.slack-sidebar .sidebar-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n@media (max-width: 768px) {\n  .slack-sidebar {\n    position: absolute;\n    left: 0;\n    top: 52px;\n    bottom: 0;\n    z-index: 10;\n    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n  }\n}\n.slack-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--bg-primary);\n  overflow: hidden;\n  transition: background-color 0.3s ease;\n  position: relative;\n}\n.slack-main app-message-list {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.slack-main app-message-input {\n  flex-shrink: 0;\n  position: sticky;\n  bottom: 0;\n  z-index: 10;\n}\n.slack-members-sidebar {\n  width: 280px;\n  background-color: var(--bg-primary);\n  border-left: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    width 0.3s ease,\n    background-color 0.3s ease,\n    border-color 0.3s ease;\n  box-shadow: -2px 0 8px var(--shadow);\n}\n.slack-members-sidebar.closed {\n  transform: translateX(100%);\n  width: 0;\n  border-left: none;\n}\n.slack-members-sidebar .members-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  background: var(--slack-gradient);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  transition: background 0.3s ease;\n}\n.slack-members-sidebar .members-header mat-icon {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.slack-members-sidebar .members-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  flex: 1;\n  letter-spacing: 0.3px;\n}\n.slack-members-sidebar .members-header .close-btn {\n  color: white;\n  width: 32px;\n  height: 32px;\n}\n.slack-members-sidebar .members-header .close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.slack-members-sidebar .members-header .close-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.slack-members-sidebar .members-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 0;\n}\n.slack-members-sidebar .members-list::-webkit-scrollbar {\n  width: 6px;\n}\n.slack-members-sidebar .members-list::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.slack-members-sidebar .members-list::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.slack-members-sidebar .members-list::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.slack-members-sidebar .member-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid var(--bg-tertiary);\n}\n.slack-members-sidebar .member-item:hover {\n  background-color: var(--slack-primary-light);\n}\n.slack-members-sidebar .member-item .member-avatar {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: var(--slack-primary);\n}\n.slack-members-sidebar .member-item .member-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.slack-members-sidebar .member-item .member-info .member-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.slack-members-sidebar .member-item .member-info .member-status {\n  font-size: 12px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.slack-members-sidebar .member-item .member-info .member-status.online {\n  color: #198754;\n}\n.slack-members-sidebar .member-item .member-info .member-status.offline {\n  color: #868686;\n}\n.slack-members-sidebar .member-item .member-info .member-status::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.slack-members-sidebar .member-item .member-info .member-status.online::before {\n  background-color: #198754;\n  box-shadow: 0 0 6px rgba(25, 135, 84, 0.5);\n}\n.slack-members-sidebar .member-item .member-info .member-status.offline::before {\n  background-color: #868686;\n}\n@media (max-width: 1024px) {\n  .slack-members-sidebar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=slack-main.component.css.map */\n'] }]
  }], () => [{ type: ChannelViewModel }, { type: MessageViewModel }, { type: SlackSocketAdapter }, { type: SlackApiService }, { type: SlackAuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlackMainComponent, { className: "SlackMainComponent", filePath: "src/app/modules/slack/pages/slack-main/slack-main.component.ts", lineNumber: 21 });
})();

// src/app/modules/slack/components/slack-login/slack-login.component.ts
var _c03 = ["loginComponent"];
var SlackLoginComponent = class _SlackLoginComponent {
  slackAuthService;
  router;
  route;
  loginComponent;
  loginConfig = {
    title: "\u{1F3AD} \uD300 \uD611\uC5C5",
    subtitle: "\uD6A8\uC728\uC801\uC778 \uD300\uC6CC\uD06C\uC758 \uC2DC\uC791",
    moduleName: "slack",
    showSocialLogin: false,
    showRegisterLink: false,
    themeColors: {
      primary: "#ec4899",
      // 핑크 (소셜/커뮤니케이션)
      secondary: "#db2777",
      // 진한 핑크
      accent: "#f472b6"
      // 밝은 핑크
    }
  };
  returnUrl = "/slack";
  constructor(slackAuthService, router, route) {
    this.slackAuthService = slackAuthService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    if (this.slackAuthService.isAuthenticated()) {
      this.router.navigate(["/slack"]);
      return;
    }
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/slack";
  }
  onLogin(credentials) {
    const success = this.slackAuthService.login(credentials.username, credentials.password);
    if (success) {
      this.router.navigate([this.returnUrl]);
    } else {
      if (this.loginComponent) {
        this.loginComponent.setError("\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
      }
    }
  }
  static \u0275fac = function SlackLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackLoginComponent)(\u0275\u0275directiveInject(SlackAuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlackLoginComponent, selectors: [["app-slack-login"]], viewQuery: function SlackLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginComponent = _t.first);
    }
  }, standalone: false, decls: 2, vars: 1, consts: [["loginComponent", ""], [3, "loginSubmit", "config"]], template: function SlackLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-unified-login", 1, 0);
      \u0275\u0275listener("loginSubmit", function SlackLoginComponent_Template_app_unified_login_loginSubmit_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogin($event));
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("config", ctx.loginConfig);
    }
  }, dependencies: [UnifiedLoginComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackLoginComponent, [{
    type: Component,
    args: [{
      selector: "app-slack-login",
      template: '<app-unified-login #loginComponent [config]="loginConfig" (loginSubmit)="onLogin($event)"></app-unified-login>',
      standalone: false
    }]
  }], () => [{ type: SlackAuthService }, { type: Router }, { type: ActivatedRoute }], { loginComponent: [{
    type: ViewChild,
    args: ["loginComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlackLoginComponent, { className: "SlackLoginComponent", filePath: "src/app/modules/slack/components/slack-login/slack-login.component.ts", lineNumber: 11 });
})();

// src/app/modules/slack/guards/slack-auth.guard.ts
var SlackAuthGuard = class _SlackAuthGuard {
  slackAuthService;
  router;
  constructor(slackAuthService, router) {
    this.slackAuthService = slackAuthService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.slackAuthService.isAuthenticated()) {
      return true;
    }
    return this.router.createUrlTree(["/slack/login"], {
      queryParams: { returnUrl: state.url }
    });
  }
  static \u0275fac = function SlackAuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackAuthGuard)(\u0275\u0275inject(SlackAuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SlackAuthGuard, factory: _SlackAuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: SlackAuthService }, { type: Router }], null);
})();

// src/app/modules/slack/slack-routing.module.ts
var routes = [
  {
    path: "login",
    component: SlackLoginComponent
  },
  {
    path: "",
    component: SlackMainComponent,
    canActivate: [SlackAuthGuard]
  }
];
var SlackRoutingModule = class _SlackRoutingModule {
  static \u0275fac = function SlackRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SlackRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/slack/slack.module.ts
var SlackModule = class _SlackModule {
  static \u0275fac = function SlackModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SlackModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SlackModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Shared
    SharedModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    TextFieldModule,
    // Routing (must be last)
    SlackRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlackModule, [{
    type: NgModule,
    args: [{
      declarations: [
        // Pages
        SlackMainComponent,
        // Components
        ChannelListComponent,
        MessageListComponent,
        MessageCardComponent,
        MessageInputComponent,
        CreateChannelDialogComponent,
        SlackLoginComponent
      ],
      imports: [
        // Angular
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // Shared
        SharedModule,
        // Material
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCheckboxModule,
        TextFieldModule,
        // Routing (must be last)
        SlackRoutingModule
      ],
      providers: []
    }]
  }], null, null);
})();
export {
  SlackModule
};
//# sourceMappingURL=chunk-NDJMWKKO.js.map
