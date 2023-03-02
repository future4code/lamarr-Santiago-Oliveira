import { validateEmptyProperties } from "../src/validateEmptyProperties";

describe.skip("Teste validadeEmptyProperties", () => {
  test("Teste 1: Apenas uma propriedade com string vazia", () => {
    const input ={name: ""}
    const output = validateEmptyProperties(input)
   
    expect(output.isValid).toBe(false)
    expect(output.errors).toContainEqual({key: "name", value: ""})
  });

  test("Teste 2: Apenas uma propriedade com o número 0", () => {
    const input ={idade: 0}
    const output = validateEmptyProperties(input)
   
    expect(output.isValid).toBe(false)
    expect(output.errors).toContainEqual({key: "idade", value: 0})
  });

  test("Teste 3: Apenas uma propriedade com undefined", () => {
    const input ={endereco: undefined}
    const output = validateEmptyProperties(input)
   
    expect(output.isValid).toBe(false)
    expect(output.errors).toContainEqual({key: "endereco", value: undefined})
  });

  test("Teste 4: Apenas uma propriedade com null", () => {
    const input ={email: null}
    const output = validateEmptyProperties(input)
   
    expect(output.isValid).toBe(false)
    expect(output.errors).toContainEqual({key: "email", value: null})
  });

  test("Teste 5: 4 propriedades erradas", () => {
    const input = {
        email: null,
        endereco: undefined,
        nome: "",
        idade: 0
    }
    const output = validateEmptyProperties(input)
    expect(output.isValid).toBe(false)
    expect(output.errors.length).toBe(4)
    expect(output.errors).toContainEqual({key: "email", value: null})
  });
  
  test("Teste 6: Objeto válido", () => {
    const input = {
        email: "email@email",
        endereco: "Rua da dua",
        nome: "Rodrigo",
        idade: 33
    }
    const output = validateEmptyProperties(input)

    expect(output.isValid).toBe(true)
    expect(output.errors.length).toBe(0)
  });
});
