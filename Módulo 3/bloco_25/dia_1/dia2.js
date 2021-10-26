// 1
function dia2(a, b, c) {
  return new Promise((resolve, reject) => {
    const numberA = typeof(a) === "number" ? true : false;
    const numberB = typeof(b) === "number" ? true : false;
    const numberC = typeof(c) === "number" ? true : false;
    
    const result = (a + b) * c;

    if (result < 50) {
      reject("Valor muito baixo");
    } else if (numberA && numberB && numberC) {
      resolve(result);
    } else {
      reject("Informe apenas números");
    }
  })
}

async function main() {
  try {
    await dia2(1, 2, 3);
  } catch (err) {
    console.log(err);
  }
}

main();

//2
const ran1 = Math.floor(Math.random() * 100 + 1);
const ran2 = Math.floor(Math.random() * 100 + 1);
const ran3 = Math.floor(Math.random() * 100 + 1);

console.log(ran1, ran2, ran3);

function call() {
  dia2(ran1, ran2, ran3)
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

call();

//3
// JA FIZ

//4
const fs = require('fs/promises');

const simpsons = 'simpsons.json';

async function call() {
  try {
    const result = await fs.readFile(simpsons, 'utf8');
    return result;
  } catch (err) {
    console.log(err);
  }
}

call();