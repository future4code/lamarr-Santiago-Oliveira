import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválido ela precisa ter no mínimo 6 caracteres");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(400, "Usuário não encontrado");
  }
}
