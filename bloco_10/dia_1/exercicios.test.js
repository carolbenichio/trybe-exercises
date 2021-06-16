const { it } = require('@jest/globals');
const { sum, myRemove } = require('./exercicios.js');

describe('exercicio 1', () => {

  it('soma', () => {
    expect(sum(3, 3)).toBe(6);
  });
})

describe('exercicio 2', () => {

  it('array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  })
});