//1
//A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const soma45 = sum(4, 5);
assert.strictEqual(soma45, 9, 'A soma de 4 e 5 é 9');

//1.2
const soma00 = sum(0, 0); 
assert.strictEqual(soma00, 0);

//1.3
const soma45string = sum(4, '5');
assert.strictEqual(soma45string, 9);

//1.4
assert.throws(() => sum(4, '5'), new Error('parameters must be numbers'));

// Parte 2
// 1

const assert = require('assert');

const addOne = array => {
  newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    array[i] += 1;
    newArray.push(array[i]);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
