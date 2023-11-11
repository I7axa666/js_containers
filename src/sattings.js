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
    this.defaultSettings.forEach((value, key) => {
      if (this.userSettings.get(key) !== undefined) {
        result.set(key, this.userSettings.get(key));
      } else {
        result.set(key, value);
      }
    });
    return result;
  }
}
