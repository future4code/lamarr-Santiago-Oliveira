import { USERTYPE } from "./types";
import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
import { User } from "./types";

const app = express();

app.use(express.json());

app.use(cors());

//------------------------EXERCÍCIO 1--------------------------
//Método get
//Entidade users
app.get("/allusers", (req: Request, res: Response) => {
  res.status(200).send(users);
});

//------------------------EXERCÍCIO 2--------------------------
app.get("/typeusers", (req: Request, res: Response) => {
  const usersAdmim = users.filter((user) => {
    return user.type === USERTYPE.ADMIN;
  });
  res.status(200).send(usersAdmim);
});

//------------------------EXERCÍCIO 3--------------------------
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//parametro query
// b. Altere este endpoint para que ele devolva uma
//  mensagem de erro caso nenhum usuário tenha sido encontrado.
app.get("/user", (req: Request, res: Response) => {
  const userName = req.query.name as string;
  const userSearched = users.find((user) => {
    return user.name.toLowerCase() === userName.toLowerCase();
  });
  res.status(200).send(userSearched);
});

//------------------------EXERCÍCIO 3--------------------------
// a. Mude o método do endpoint para PUT. O que mudou?
// Nada mudou.
// b. Você considera o método PUT apropriado para esta transação? Por quê?
// Não, porque o método PUT é para realizar alterações
// e não para criação de um novo usuário.

app.post("/newuser", (req: Request, res: Response) => {
  const { name, email, type, age } = req.body;

  const newUser: User = {
    id: Math.random(),
    name,
    email,
    type,
    age,
  };

  users.push(newUser);

  res.status(200).send(users);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
