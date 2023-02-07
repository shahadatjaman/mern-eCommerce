export default class Storage {
  constructor() {
    if (!Storage.isSupported()) {
      throw new Error("Local storage is not supported in this browser.");
    }
  }

  static isSupported() {
    return (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    );
  }

  setData(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeData(key) {
    window.localStorage.removeItem(key);
  }
}
