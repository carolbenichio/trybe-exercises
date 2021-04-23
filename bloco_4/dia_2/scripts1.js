//ARRAYS
//1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//3 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");

console.log(menu);

//FOR
//1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index +=1) {
    console.log(groceryList[index]);
}

//FOR OF
//1