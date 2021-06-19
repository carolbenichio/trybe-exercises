const assert = require('assert');

const people = [
  {
    nome: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    nome: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    nome: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    nome: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    nome: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (people) => people.filter(
  ({ nationality, bornIn }) => nationality === 'Australian' && bornIn > 1900 && bornIn < 1999
);

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { nome: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { nome: 'Toby', bornIn: 1901, nationality: 'Australian' });