//Exercícios funções
//1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = 'arara';
let tamanho = palavra.length;
let palavra1 = '';
let palavra2 = '';


function palindromo (palavra) {
    for (let index = 0; index < tamanho; index +=1) {
        palavra1 += palavra[index];
    }
    for (let index2 = (tamanho-1); index2 >= 0; index2 -=1){
        palavra2 += palavra[index2];
    }
    if (palavra1 === palavra2) {
        return(true);
    } else {
        return(false);
    }
}

console.log(palindromo('arara'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numeros = [1, 2, 5, 4, 3];
let posicao = '';

function maior (numeros) {
    for (let index = 0; index < (numeros.length-1); index +=1) {
        if (numeros[index] > numeros[index+1] && numeros[index] > posicao) {
            posicao = numeros[index];
        } else if (numeros[index+1] > posicao) {
            posicao = numeros[index+1];
        } else {
            posicao = posicao;
        }
    }
    let index = numeros.indexOf(posicao);
    return(index);
}

console.log(maior(numeros));