import ErrorRepository from '../errorRepo';

const errorRepo = new ErrorRepository();

test('get error 404', () => {
  expect(errorRepo.translate('404')).toBe('страница недоступна');
});

test('get error 503', () => {
  expect(errorRepo.translate('503')).toBe('ошибка сервера');
});

test('ather error', () => {
  expect(errorRepo.translate('101')).toBe('Unknown error');
});
