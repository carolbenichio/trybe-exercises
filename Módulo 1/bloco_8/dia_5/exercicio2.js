const assert = require('assert');

const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
// sum é uma funcao que recebe a quantidade de numeros que for e pega esses numeros e reduz a uma soma unica

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);