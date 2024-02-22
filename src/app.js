export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(12, 'SyntaxError');
    this.errors.set(34, 'ReferenceError');
    this.errors.set(56, 'TypeError');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    }
    return this.errors.get(code);
  }
}
