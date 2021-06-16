// 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// 2 e 3
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };
      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// 4
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// 6
// 6.1 e 6.2

const animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// const findAnimalByName = (name) => {
//   const animalObj = animals.find((animal) => animal.name === name);
//   return animalObj;
// };

const getAnimal = async (name) => {
  try {
    const animalObj = await animals.filter((animal) => name === animal.name);
    return animalObj[0];
  } catch (error) {
    return 'Nenhum animal com esse'; // ainda não sei como funciona direito
  }
};

module.exports = {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
};