import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary";


describe("Testes calculateEmployeeSalary", () => {
  test("Teste 1: Erro no input, faltando, ao menos, uma informação ", () => {
    expect.assertions(2)
    const input = { 
      employeeName: "",
      baseSalary: 1000,
      benefits: [100, 50],
      extraHours: 5,
    }

    const validatorMock = jest.fn(()=>{
      return {
        isValid: false ,
        errors: []
      }
    })

    try {
      calculateEmployeeSalary(input, validatorMock)
    } catch (error:any) {
      expect(error.message).toBe("Missing Properties")
      expect(validatorMock).toBeCalled()
    } 

  });

  test("Teste 2: Erro no input com informação errada (benefício negativo)", () => {
    expect.assertions(2)
    const input = { 
      employeeName: "Rodrigo",
      baseSalary: 1000,
      benefits: [-100, 50],
      extraHours: 5,
    }

    const validatorMock = jest.fn(()=>{
      return {
        isValid: true ,
        errors: []
      }
    })

    try {
      calculateEmployeeSalary(input, validatorMock)
    } catch (error:any) {
      expect(error.message).toBe("Invalid Benefit")
      expect(validatorMock).toBeCalledTimes(1)
    } 

  });

  test("Teste 3: Input correto e cálculo do salário efetuado", () => {
    const input = { 
      employeeName: "Rodrigo",
      baseSalary: 1000,
      benefits: [100, 50],
      extraHours: 5,
    }

    const validatorMock = jest.fn(()=>{
      return {
        isValid: true ,
        errors: []
      }
    })

    const output = calculateEmployeeSalary(input, validatorMock)
    expect(output).toBe(1155)
    expect(validatorMock).toBeCalledWith(input)

  });
});
