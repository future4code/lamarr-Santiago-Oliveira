import * as jwt from "jsonwebtoken";
import { AutheticationData } from "./../model/user";

export class Autheticator {
  public generateTOken = ({ id }: AutheticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    return token;
  };

  getTokenData = (token: string): AutheticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AutheticationData;
    return payload;
  };
}
