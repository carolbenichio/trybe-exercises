//2
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const ficha = (nome) => {
  const email = `${nome.toLowerCase().replace(' ', '_')}@trybe.com`;
  return { nome, email };
}

console.log(newEmployees(ficha));

//2
const resulSorteio = (num, callback) => {
  let numSorteado = Math.floor(Math.random() * 5) + 1;
  return callback(num, numSorteado);
}

const checkResul = (num, numSorteado) => {
  if (num === numSorteado) {
    return 'Parabéns você ganhou ';
  }
  return 'Tente novamente';
}

console.log(resulSorteio(3, checkResul));

//3

const nota = (rightAnswers, studentAnswers, callback) => callback(rightAnswers, studentAnswers);

const checkGab = (rightAnswers, studentAnswers) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (rightAnswers[i] === studentAnswers[i]) {
      count += 1;
    }
  }
  return count;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(nota(rightAnswers, studentAnswers, checkGab));