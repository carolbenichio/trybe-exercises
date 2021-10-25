const rl = require('readline-sync');

function vel() {
  const dist = rl.questionFloat('Qual a distância? ');
  const temp = rl.questionFloat('Qual o tempo? ');

  return dist/temp;
}

console.log(vel());