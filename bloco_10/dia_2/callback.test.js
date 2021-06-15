// Primeiro teste de falso positivo

// test("Não deveria passar!", () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//   }, 500);
// });

// Segundo teste sem falso positivo

// test("Não deveria passar!", done => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//     done();
//   }, 500);
// });

// Testar com 15 (vai passar) dps com 10 (nao vai passar)

// const SumNumbers = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500)
// }

// test('Testando SumNumbers, soma 5 mais 10', done => {
//   SumNumbers(5, 10, (result) => {
//     expect(result).toBe(15);
//     done();
//   });
// })
