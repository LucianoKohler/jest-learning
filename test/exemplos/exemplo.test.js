const { describe, it, expect } = require("@jest/globals")
const functions = require("../src/exercicio");

describe('Testando as funções do exercicio.js', () => {

  // SOMAR
  it('deve retornar 110', () => expect(functions.somar(100, 10)).toBe(110));
  it('deve retornar -33', () => expect(functions.somar(-40, 7)).toBe(-33));
  it('deve retornar 14.02', () => expect(functions.somar(11.3, 2.99)).toBeCloseTo(14.29));
  it('deve retornar 0', () => expect(functions.somar(0, -0)).toBe(0));

  // SUBTRAIR
  it('deve retornar 98', () => expect(functions.subtrair(100, 2)).toBe(98));
  it('deve retornar -33', () => expect(functions.subtrair(-20, 8)).toBe(-28));
  it('deve retornar 7', () => expect(functions.subtrair(10.5, 3.5)).toBe(7));
  it('deve retornar 0', () => expect(functions.subtrair(0, -0)).toBe(0));

  // MULTIPLICAR
  it('deve retornar 36', () => expect(functions.multiplicar(12, 3)).toBe(36));
  it('deve retornar -10', () => expect(functions.multiplicar(-2, 5)).toBe(-10));
  it('deve retornar 25', () => expect(functions.multiplicar(2.5, 10)).toBe(25));
  it('deve retornar 9', () => expect(functions.multiplicar(-3, -3)).toBe(9));

  // DIVIDIR
  it('deve retornar 10', () => expect(functions.dividir(100, 10)).toBe(10));
  it('deve retornar -18', () => expect(functions.dividir(-36, 2)).toBe(-18));
  it('deve retornar 3', () => expect(functions.dividir(10, 2.5)).toBe(4));
  it('deve retornar NaN', () => expect(functions.dividir(0, -0)).toBeNaN());
});
