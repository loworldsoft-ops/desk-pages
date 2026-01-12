// src/app/core/utils/crypto.util.ts
var CryptoUtil = class {
  // 간단한 XOR 기반 암호화 (실제 프로덕션에서는 더 강력한 암호화 사용)
  static SECRET_KEY = "LOWORLD_SECRET_2025";
  /**
   * 문자열 암호화
   */
  static encrypt(text) {
    const key = this.SECRET_KEY;
    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      encrypted += String.fromCharCode(charCode);
    }
    return btoa(encrypted);
  }
  /**
   * 문자열 복호화
   */
  static decrypt(encryptedText) {
    try {
      const key = this.SECRET_KEY;
      const decoded = atob(encryptedText);
      let decrypted = "";
      for (let i = 0; i < decoded.length; i++) {
        const charCode = decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        decrypted += String.fromCharCode(charCode);
      }
      return decrypted;
    } catch (error) {
      console.warn("\uBCF5\uD638\uD654 \uC2E4\uD328:", error);
      return "";
    }
  }
  /**
   * 비밀번호 해시 (단방향)
   */
  static hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }
};

export {
  CryptoUtil
};
//# sourceMappingURL=chunk-G2D7UUZA.js.map
