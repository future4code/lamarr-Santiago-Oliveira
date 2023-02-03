import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";
import { AutheticationData } from "./../model/user";

export class Autheticator {
  public generateToken = ({ id }: AutheticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    return token;
  };

  getTokenData = (token: string): AutheticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AutheticationData;
      return payload;
    } catch (error: any) {
      console.log(error.message);
      throw new Unauthorized();
    }
  };
}
