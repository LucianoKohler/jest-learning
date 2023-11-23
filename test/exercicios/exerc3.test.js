const { describe, it, expect } = require("@jest/globals");
const calculaAumento = require("../../src/exercicios/exerc3");

describe("Exercício 3", () =>{
  it("deve retornar 0.20", () => expect(calculaAumento(250)).toBe(0.20));
  it("deve retornar 0.15", () => expect(calculaAumento(645)).toBe(0.15));
  it("deve retornar 0.10", () => expect(calculaAumento(1200)).toBe(0.10));
  it("deve retornar 0.05", () => expect(calculaAumento(25000)).toBe(0.05));
});