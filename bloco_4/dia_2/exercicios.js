//1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

//2 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
    soma = soma + numbers[index];
}

console.log(`A soma de todos os valores é ${soma}.`);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
    soma = soma + numbers[index];
}

let media = soma/(numbers.length);

console.log(`A média aritmética é ${media}.`)

//4


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
    soma = soma + numbers[index];
}

let media = soma/(numbers.length);
if (media > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}

//5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index]>maiorNumero) {
        maiorNumero = numbers[index];
    } else {
        maiorNumero = maiorNumero;
    }
}

console.log(`O maior número é: ${maiorNumero}.`);

//6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];
let qtdNumerosImpares = 0;

for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index]%2 == 1) {
        numerosImpares.push(numbers[index]);
        qtdNumerosImpares+=1;
    } 
}

console.log(`Existem ${qtdNumerosImpares} números ímpares e são eles: ${numerosImpares}.`);

//7 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    } 
}

console.log(`O menor número é: ${menorNumero}.`)

//8 

let numeros = [];

for (index = 0; index < 25; index +=1) {
    numeros.push(index+1);
}

console.log(numeros);

// 9

let numeros = [];

for (index = 0; index < 25; index +=1) {
    numeros.push((index+1)/2);
}

console.log(numeros);

//BONUS
//1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);

//2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[secondIndex] < numbers[index]) {

        let position = numbers[secondIndex];

        numbers[secondIndex] = numbers[index];
        numbers[index] = position;
      }
    }
  }
console.log(numbers);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = 0;
let numbers2 = [];

for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index+1] == undefined) {
        multi = numbers[index]*2;
        numbers2.push(multi);
    } else { 
        multi = numbers[index]*numbers[(index+1)]
        numbers2.push(multi);
    }
}
console.log(numbers2);