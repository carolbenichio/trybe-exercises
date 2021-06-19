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

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numeros = [55, 66, 99, 22, 100];
let posicao = numeros[0];

function menor (numeros) {
    for (let index = 0; index < (numeros.length-1); index +=1) {
        if (numeros[index] < numeros[index+1] && numeros[index] <= posicao) {
            posicao = numeros[index];
        } else {
            posicao = posicao;
        }
    }
    let index = numeros.indexOf(posicao);
    return(index);
}

console.log(menor(numeros));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ['Joana', 'Laura', 'Caroline', 'Fernanda'];
let maiorPalavra = nomes[0];

function maior (nomes) {
    for (let key in nomes) {
        if (maiorPalavra.length < nomes[key].length) {
            maiorPalavra = nomes[key];
        }
    }
    return(maiorPalavra);
}

console.log(maior(nomes));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.
let numeros = [2, 3, 2, 5, 8, 2, 3];

function inteiroMaisSeRepete (numeros) {
    let comparaContador = 0;
    let numeroMaisRepetido = '';
    for (let index = 0; index < numeros.length; index +=1) {
        let contador = 0;
        for (let index2 = 0; index2 < numeros.length; index2 +=1) {
            if (numeros[index] === numeros[index2]) {
                contador +=1;
            }
        }
        if (contador > comparaContador) {
            comparaContador = contador;
            numeroMaisRepetido = numeros[index];
        }
    }
    console.log(numeroMaisRepetido, comparaContador); 
}
inteiroMaisSeRepete(numeros);

//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let n = 5;

function somatorio (n) {
    let soma = 0;
    for (let index = n; index > 0; index -=1) {
        soma += index;
    }
    return soma;
}
console.log(somatorio(n));

//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
//Valor de teste: 'trybe' e 'be'
//Valor esperado no retorno da função: true
//verificaFimPalavra('trybe', 'be');
//Retorno esperado: true
//verificaFimPalavra('joaofernando', 'fernan');
//Retorno esperado: false


