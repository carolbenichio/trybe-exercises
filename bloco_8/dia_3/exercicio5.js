const assert = require('assert');
const books = require('./books');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const fanAndFicBooks = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  return fanAndFicBooks.map((book1) => book1.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);