const uppercase = require('./exercicios.js');

it('Testa se a funcao uppercase funciona', (done) => {
  uppercase('caroline', (string) => {
    expect(string).toBe('CAROLINE')
    done();
  })
})