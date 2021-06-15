const uppercase = require('./exercicios.js');

test('Testa se a funcao uppercase funciona', () => {
  uppercase('caroline', (string) => {
    expect(string).toBe('CAROLINE')
  })
})