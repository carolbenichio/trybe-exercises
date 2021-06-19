const assert = require('assert');
const books = require('./books');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const arrayAgeOfOldBooks = books.filter((book) => 2021 - book.releaseYear > 60);
  return arrayAgeOfOldBooks.map((book1) => book1.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);