const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const mediaNotas = grades.map((grade) => parseFloat(grade.reduce((acc, grade1) => acc + grade1 / 5, 0).toFixed(1)));
  const reduceStudents = (acc, studentName, index) => {
    const alunoObject = {
      name: studentName,
      average: mediaNotas[index],
    }
    acc.push(alunoObject);
    return acc;
  };
  const nomeNota = students.reduce(reduceStudents, []);
  return nomeNota;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);