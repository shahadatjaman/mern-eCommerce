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
}
