const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//1
// function authorBornIn1947() {
//   return books.find((book) => book.author.birthYear === 1947).author.name;  
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');
// console.log(authorBornIn1947());

//2
// function smallerName() {
//   let nameBook;
//   books.forEach((book) => {
//     if (!nameBook || book.name.length < nameBook.length) {
//       nameBook = book.name;
//     }
//   })
//   return nameBook;
// }
// console.log(smallerName());
// assert.strictEqual(smallerName(), 'Duna');

//3 
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   const name26 = books.find((book) => book.name.length === 26);
//   return name26;
// }
// console.log(getNamedBook());
// assert.deepStrictEqual(getNamedBook(), expectedResult);

//4 
// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear); 
// }
// console.log(booksOrderedByReleaseYearDesc());

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

//5
// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >= 1900);
// }
// console.log(everyoneWasBornOnSecXX());
// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

//6 
// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1990);
// }
// console.log(someBookWasReleaseOnThe80s());
// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

//7 
const expectedResult = true;

//Bruno
// function authorUnique() {
//   const arr = [];
//   books.forEach((item) => arr.push(item.author.birthYear));
//   return arr.every((item, index) => arr.indexOf(item) === index);
// }
// // x = [1, 2, 3, 4, 2];
// // y = [0, 1, 2, 3, 4];

//Gabarito
function authorUnique() {
  return !books.every((book) => books.some((bookSome) =>
  (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult);

//Thalles
function authorUnique() {
  const birthYearObj = {};
  let result = true;
  books.forEach((book) => {
    if (!birthYearObj[book.author.birthYear]) {
      birthYearObj[book.author.birthYear] = 1;
    } else {
      result = false;
    }
  });
  return result;
};