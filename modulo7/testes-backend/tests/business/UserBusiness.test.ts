import { UserBusiness } from "./../../src/business/UserBusiness";
import { TokenGeneratorMOck } from "./../mocks/TokenGeneratorMock";
import { IdGeneratorMock } from "./../mocks/IdGeneratorMock";
import { HashGeneratorMock } from "./../mocks/HashGeneratorMock";
import { UserDatabaseMock } from "./../mocks/UserDatabaseMock";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new HashGeneratorMock(),
  new IdGeneratorMock(),
  new TokenGeneratorMOck()
);

describe("Teste getUserById", () => {
  test("Erro de usuário não existe", async () => {
    expect.assertions(2);

    try {
      await userBusiness.getUserById("idFound");
    } catch (error: any) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });
  test("Resposta de sucesso", async () => {
    expect.assertions(2);

    try {
      //const getUserById = jest.fn((id: string) => userBusiness.getUserById(id));
      const result = await userBusiness.getUserById("id");
      expect(result).toBeDefined();
      expect(result).toEqual({
        id: "id",
        name: "Mockinho, o seu testinho",
        email: "email",
        role: "NORMAL",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  });
});
