export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      ['404', 'страница недоступна'],
      ['503', 'ошибка сервера'],
    ]);
  }

  translate(code) {
    let error;
    if (this.errors.has(code)) {
      error = this.errors.get(code);
    } else {
      error = 'Unknown error';
    }
    return error;
  }
}
