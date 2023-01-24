import { generateId } from "./../service/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { createUserDTO } from "../model/userDTO";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidPassword } from "../error/UserError";

export class UserBusiness {
  async create({ email, name, password }: createUserDTO): Promise<void> {
    try {
      if (!email || !name || !password) {
        throw new CustomError(
          400,
          "Preencha os campos 'name', 'e-mail', password'"
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length <= 6) {
        throw new InvalidPassword();
      }

      const id = generateId();

      const userDatabase = new UserDatabase();
      await userDatabase.create({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  async getUsers(): Promise<User[]> {
    return await new UserDatabase().getUsers();
  }
}
