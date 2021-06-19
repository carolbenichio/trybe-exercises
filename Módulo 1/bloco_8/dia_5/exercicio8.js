const assert = require('assert');

const greet = (name, greetings = 'Hi') => `${greetings} ${name}` 

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');