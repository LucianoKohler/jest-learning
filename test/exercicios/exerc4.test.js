const { describe, it, expect } = require("@jest/globals")
const geraDataPorExtenso = require("../../src/exercicios/exerc4")

describe("Exercício 4", () => {

  it("deve retornar 01 de fevereiro de 2021;", () => expect(geraDataPorExtenso("01/02/2021")).toBe("01 de fevereiro de 2021"));
  it("deve retornar 10 de março de 2021;",     () => expect(geraDataPorExtenso("10/3/2021")).toBe("10 de março de 2021"));
  it("deve retornar 22 de novembro de 2023;",  () => expect(geraDataPorExtenso("22/11/2023")).toBe("22 de novembro de 2023"));
  it("deve retornar 31 de dezembro de 2030;",  () => expect(geraDataPorExtenso("31/12/2030")).toBe("31 de dezembro de 2030"));
});