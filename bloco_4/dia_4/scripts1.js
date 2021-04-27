//OBJETOS

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};

console.log('A jogadora '+player.name+' '+player.lastName +' tem '+player.age+' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora '+player.name+' '+player.lastName +' foi eleita a melhor do mundo por '+player.bestInTheWorld.length+' vezes.');

console.log('A jogadora possui '+ player.medals.golden + ' medalhas de ouro e '+ player.medals.silver + ' medalhas de prata.');

//FOR IN

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let x in food) {
    console.log(x);
  }
  //resultado: 0, 1, 2;

  let food = ['hamburguer', 'bife', 'acarajé'];
for (let x of food) {
  console.log(x);
}
//resultado: hamburguer, bife, acarajé;

//1 - Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }

for (let key in names) {
    console.log('Olá '+names[key]); 
}

//2

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

for (let key in carro) {
    console.log(key, carro[key]);
}