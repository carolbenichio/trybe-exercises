//OBJECT.KEYS

// const student1 = {
  // Html: 'Muito Bom',
  // Css: 'Bom',
  // JavaScript: 'Ótimo',
  // SoftSkills: 'Ótimo',
// };
// 
// const student2 = {
  // Html: 'Bom',
  // Css: 'Ótimo',
  // JavaScript: 'Ruim',
  // SoftSkills: 'Ótimo',
  // Git: 'Bom', // chave adicionada
// };
// 
// const listSkills = (student) => {
  // const arrayOfSkills = Object.keys(student);
  // for(index in arrayOfSkills){
    // console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  // }
// };
// 
// console.log('Estudante 1');
// listSkills(student1);
// 
// console.log('Estudante 2');
// listSkills(student2);

// OBJECT.VALUES
// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

//OBJECT.ENTRIES
// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][1]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

//OBJECT.ASSIGN 

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */