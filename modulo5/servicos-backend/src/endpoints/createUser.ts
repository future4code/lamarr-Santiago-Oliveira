import { Request, Response } from "express";
import { User } from "./../types";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";

export default async function creatUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, zipcode } = req.body;

    if (!name || !nickname || !email || !zipcode) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email', e 'zipcode' são obrigatórios ";
    }

    const id: string = Date.now().toString();
    const address = await getAddressInfo(zipcode);

    const newUser: User = { id, name, nickname, email, address };

    await connection("aula_webservices_users").insert(newUser);

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    console.log(error);
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu");
    }
  }
}
