import capitalize from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает не Верно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает не Верно!');
}

console.log('Все тесты пройдены!');
