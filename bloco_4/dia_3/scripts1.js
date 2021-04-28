//Exercícios dia 3
//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 3;
let linha = "";

for (let index = 0; index < n; index +=1) {
    linha += "*";
}
for (let index = 0; index < n; index +=1) {
    console.log(linha);
}

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 3;
let linha = "";

for (let index = 0; index < n; index +=1) {
    linha += "*";
    console.log(linha);
}

//3 - Agora inverta o lado do triângulo. (sem o espaço no começo do codigo como ta no gabarito)

let n = 3;
let line = "";
let simbolo = "*";
let posicao = n;

for (let linha = 1; linha <= n; linha +=1) {
    for (let coluna = 1; coluna < n+1; coluna +=1) {
        if (coluna < posicao) {
            line = line + " ";
        } else {
            line = line + "*";
        }
    }
    console.log(line);
    line = "";
    posicao -= 1;
}

//4 - Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

//Bônus:
//1 - Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

//2 
//Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');