class Storeage {
  constructor() {
    this.name = null;
    this.value = null;
  }

  setStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  removeStorage(name, value) {
    localStorage.removeItem(this.name);
  }
}

export default Storeage;
