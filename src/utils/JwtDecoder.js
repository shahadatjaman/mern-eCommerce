import jwt from "jwt-decode";

export default class JWTDecoder {
  constructor(secret) {
    this.secret = secret;
  }

  decode(token) {
    try {
      return jwt(token, this.secret, { complete: true });
    } catch (error) {
      return null;
    }
  }

  isValid(token) {
    const currentDate = new Date();
    if (this.decode(token)) {
      return this.decode(token).exp < currentDate.getTime();
    } else {
      return null;
    }
  }
  checkTokenExpiry(token) {
    try {
      const decoded = jwt(token);
      const currentTime = Date.now().valueOf() / 1000;

      if (decoded.exp < currentTime) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  }
}
