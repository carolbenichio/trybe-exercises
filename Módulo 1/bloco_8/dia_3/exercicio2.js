const assert = require('assert');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

const books = require('./books');

function nameAndAge() {
  const objs = books.map((book) => (
    {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }));
  return objs.sort((a, b) => a.age - b.age);
  }

assert.deepStrictEqual(nameAndAge(), expectedResult);