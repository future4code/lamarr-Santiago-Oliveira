export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class PasswordShort extends CustomError {
  constructor() {
    super(400, "Senha muito curta");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "usuário não encontrado");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "usuário não autorizado");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(401, "Token inválido");
  }
}
