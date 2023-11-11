import Settings from '../sattings';

const settings = new Settings();

test('check default settings', () => {
  expect(settings.getSettings()).toEqual(settings.defaultSettings);
});

test('check user settings', () => {
  const testMap = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'hard'],
  ]);
  settings.userSettings.set('difficulty', 'hard');
  expect(settings.getSettings()).toEqual(testMap);
});
