import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labe_Users";

  public static getAllUsers = async () => {
    const result = await UserDatabase.connection(
      UserDatabase.TABLE_USERS
    ).select();

    return result;
  };

  public static createUsers = async (newUser: User) => {
    const result = await UserDatabase.connection(
      UserDatabase.TABLE_USERS
    ).insert(newUser);

    return result;
  };

  public getUserById = async (user: User) => {
    const result = await UserDatabase.connection(
      UserDatabase.TABLE_USERS
    ).where({ id: `${user}` });

    return result;
  };
}
