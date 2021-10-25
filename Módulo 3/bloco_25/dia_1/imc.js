const rl = require('readline-sync');


function imc() {
  const peso = rl.questionFloat('Qual seu peso? ');
  const altura = rl.questionFloat('Qual sua altura? ');
  
  return((peso/(altura ** 2)).toFixed(1));
}

const result = imc();
console.log(`IMC: ${result}`);

if (result < 18.5) {
  console.log("Abaixo do peso (magreza)");
} else if (result <= 24.9) {
  console.log("Peso normal");
} else if (result <= 29.9) {
  console.log("Acima do peso (sobrepeso)");
} else if (result <= 34.9) {
  console.log("Obesidade graus I");
} else if (result <= 39.9) {
  console.log("Obesidade graus II");
} else {
  console.log("Obesidade graus III e IV")
}