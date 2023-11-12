export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      ['404', 'страница недоступна'],
      ['503', 'ошибка сервера'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
