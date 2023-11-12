export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map([
      ['theme', undefined],
      ['music', undefined],
      ['difficulty', undefined],
    ]);
  }

  getSettings() {
    const result = new Map();
    this.userSettings.forEach((value, key) => {
      result.set(key, value || this.defaultSettings.get(key));
    });
    return result;
  }
}
