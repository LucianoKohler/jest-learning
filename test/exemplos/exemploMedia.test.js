const { describe, it, expect } = require("@jest/globals");
const media = require("../src/exercicioMedia");

describe("Testando a função de média de alturas", () => {
  let sexos = ["M", "F", "M", "F", "M"];
  let alturas = [1.75, 1.65, 1.8, 1.6, 1.7];

  const result = media(sexos, alturas);

  it("deve retornar a maior altura", () => {
    expect(result.maxHeight).toBe(1.8);
  });
});
