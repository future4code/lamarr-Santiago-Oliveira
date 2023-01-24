import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error('Preencha os campos "name", "email" e "password"');
      }

      if (email.indexOf("@") === -1) {
        throw new Error("E-mail inválido");
      }

      if (password.length < 6) {
        throw new Error("Senha muito curta");
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  async get(): Promise<user[]> {
    return await new UserDatabase().get();
  }

  async deleteUser(input: { id: string }) {
    if (!input.id) {
      throw new Error("Insira um id!");
    }

    return await new UserDatabase().deleteUser(input.id);
  }

  findUser = () => {};
}
