const assert = require('assert');
const books = require('./books');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const livro = books.find((book) => 
    book.author.name.substring(1,2) === '.' && book.author.name.substring(4,5) === '.' && book.author.name.substring(7,8) === '.');
  return livro.name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);