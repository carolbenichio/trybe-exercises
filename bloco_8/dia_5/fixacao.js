// SPREAD OPERATOR

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'mamao', 'goiaba'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// REST PARAMETER

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { }, [])); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 4, 4)); // 8

// OBJECT DESTRUCTURING

const product = {
  nome: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { nome, price, seller } = product;

console.log(nome); // Smart TV Crystal UHD
console.log(price);
console.log(seller);

// Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome1, b: turma, c: materia } = student;
console.log(nome1);

const { d } = student;
console.log(d); // undefined

// quando queremos passar os valores de um objeto como parâmetros para uma função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => { // pega as propriedades do product
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// ARRAY DESTRUCTURING

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// FIXACAO 1 ARRAY DESTRUCTURING
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [ola, funcao] = saudacoes;

console.log(funcao(ola));

// FIXACAO 2

// gabarito
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

// FIXACAO 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares; // ???????????

console.log(numerosPares); // [6, 8, 10, 12];

// DEFAULT DESTRUCTURING

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality);

// fixacao default
const getNationality = ({ firstName, nationality = 'Brazilian' }) => nationality !== undefined ? `${firstName} is ${nationality}` : `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian

console.log(getNationality(person));

// Object Property Shorthand

const getPosition = (latitude, longitude) => ({
  latitude, // antes tava "latitude: latitude"
  longitude
});

console.log(getPosition(-19.8157, -43.9542));

// DEFAULT PARAMETERS

const multiply = (number = 1, value = 1) => number * value;

console.log(multiply(8));