const { describe, it, expect } = require("@jest/globals");
const mediaIdade = require("../../src/exercicios/exerc1");

describe("Exercício 1", () => {
  const array1 = [
    [25, "M"],
    [30, "F"],
    [40, "M"],
    [22, "F"],
    [35, "M"],
    [50, "F"],
    [28, "M"],
    [45, "M"],
    [33, "F"],
    [29, "F"],
  ];

  const array2 = [
    [44, "F"],
    [22, "M"],
    [59, "F"],
    [13, "M"],
    [21, "F"],
    [33, "M"],
    [36, "F"],
    [70, "M"],
    [21, "F"],
    [29, "M"],
  ];
  it("deve retornar [34.6, 32.8]", () =>
    expect(mediaIdade(array1)).toEqual([34.6, 32.8]));
  it("deve retornar [33.4, 36.2]", () =>
    expect(mediaIdade(array2)).toEqual([33.4, 36.2]));
});
