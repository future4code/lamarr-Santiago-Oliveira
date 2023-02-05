import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async getUsers(): Promise<User[]> {
    try {
      const allUsers = await UserDatabase.connection()
        .select("*")
        .from("LABEFLIX_USER");

      return allUsers;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
