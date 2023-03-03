import { validateCharacter } from "../src/func/validateCharacter";

describe("Teste validateCharacter", () => {
  test("Teste 1: nome vazio", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Teste 2: vida igual a zero", () => {
    const result = validateCharacter({
      name: "",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Teste 3: força igual a zero", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Teste 4: defesa igual a zero", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 50,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Teste 5: com valor negativo", () => {
    const result = validateCharacter({
      name: "",
      life: -1500,
      strength: 50,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Teste 6: com valor negativo", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 50,
      defense: 500,
    });

    expect(result).toBe(false);
  });
});
