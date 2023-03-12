import { USER_ROLES } from "./../../src/model/User";
import { ITokenGenerator } from "../../src/business/ports";

export class TokenGeneratorMOck implements ITokenGenerator {
  public generate = jest.fn(() => {
    return "token";
  });

  public verify = jest.fn(() => {
    return { id: "id", role: USER_ROLES.NORMAL };
  });
}
