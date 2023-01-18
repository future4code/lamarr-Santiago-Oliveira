import { createConnection } from "net";
import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  insertUser = async (user: any): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  async get(): Promise<user[]> {
    try {
      const users: user[] = [];

      const result = await UserDatabase.connection()
        .select("*")
        .from("User_Arq");

      for (let user of result) {
        users.push(user);
      }
      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await UserDatabase.connection().where({ id }).from("User_Arq").delete();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
