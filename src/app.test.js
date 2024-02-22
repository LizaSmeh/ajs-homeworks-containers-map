import ErrorRepository from './app.js';

const err = new ErrorRepository();

test('Проверка существующей ошибки', () => {
  expect(err.translate(12)).toBe('SyntaxError');
});

test('Проверка не существующей ошибки', () => {
  expect(() => err.translate(89)).toThrow('Unknown error');
});
