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
//2
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   const names = books.reduce((acc, book, index, array) => {
//     if (index === array.length - 1) return `${acc} ${book.author.name}.`;
//     return `${acc} ${book.author.name},`;
//   }, '');
//   return names.trim();
// }

// assert.strictEqual(reduceNames(), expectedResult);

//3 
// const expectedResult = 43;

// function averageAge() {
//   const age = books.reduce((acc, book) => {
//     return acc + (book.releaseYear - book.author.birthYear);
//   }, 0);
//   return age/books.length;
// };

// assert.strictEqual(averageAge(), expectedResult);

//4 

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: { name: 'George R. R. Martin', birthYear: 1948 },
  releaseYear: 1991
};

function longestNamedBook() {
  return books.reduce((acc, book) => (acc.name.length > book.name.length) ? acc : book);
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);