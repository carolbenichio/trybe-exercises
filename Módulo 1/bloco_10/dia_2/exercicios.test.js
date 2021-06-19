const { uppercase, getUserName, getRepos, getAnimal } = require('./exercicios.js');

describe('Testes exercicios', () => { 
  // 1
  it('Testa se a funcao uppercase funciona', (done) => {
    uppercase('caroline', (string) => {
      expect(string).toBe('CAROLINE')
      done();
    });
  });
  
  // 2 e 3
  // com async/await
  
  it('Usuário foi encontrado', async () => {
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  });
  
  it('Usuario NÃO foi encontrado', async () => {
    try {
      await getUserName(155);
    } catch (error) {
      expect(error).toEqual({ error: "User with 155 not found." }); // não entendi pq tem q ser exatamente essa msg de erro
    }
  });
  
  // 4
  it('Testa se os projetos estão dentro do repositório', async () => {
    expect.assertions(2);
    const urlGit = 'https://api.github.com/orgs/tryber/repos';
    const fetchURL = await getRepos(urlGit);
    expect(fetchURL).toContain('sd-01-week4-5-project-todo-list');
    expect(fetchURL).toContain('sd-01-week4-5-project-meme-generator' );
  });

  // 5
  // beforeEach(() => console.log('1 - beforeEach'));
  // afterEach(() => console.log('1 - afterEach'));
  
  // test('', () => console.log('1 - test'));
  
  // describe('Scoped / Nested block', () => {
  //   beforeEach(() => console.log('2 - beforeEach'));
  //   afterEach(() => console.log('2 - afterEach'));
  
  //   test('', () => console.log('2 - test'));
  // });
  // 1- befEach
  // 1- test
  // 1- aftEach
  // +++++++ 1- befEach
  // 2- befEach
  // 2- test
  // 2- aftEach
  // +++++++ 1- aftEach

  // 6
  // 6.1 e 6.2

  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });

});