const assert = require('assert');
const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const livro = books.find((book) => book.author.name.substring(1,2) === '.');
  return livro.name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);