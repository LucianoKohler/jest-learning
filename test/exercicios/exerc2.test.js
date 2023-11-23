const { describe, it, expect } = require("@jest/globals")
const getScore = require("../../src/exercicios/exerc2")

describe("Exercício 2", () => {
  const array1 = [1, 3, 2, 3, 1, 3, 2, 1, 3]
  const array2 = [1, 1, 1, 2, 2, 2, 3, 3, 3]
  const array3 = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  const array4 = [10, 10, 10, 10]
  
  it("deve retornar [3, 2, 4, 0]", () => expect(getScore(array1)).toEqual([3, 2, 4, 0]))
  it("deve retornar [3, 3, 3, 0]", () => expect(getScore(array2)).toEqual([3, 3, 3, 0]))
  it("deve retornar [9, 0, 0, 0]", () => expect(getScore(array3)).toEqual([9, 0, 0, 0]))
  it("deve retornar [0, 0, 0, 4]", () => expect(getScore(array4)).toEqual([0, 0, 0, 4]))
});
