import { CustomError } from "./CustomError";

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "usuário não autorizado");
  }
}

export class UserIdNotInformed extends CustomError {
  constructor() {
    super(400, "Id not informed");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "User not found");
  }
}
