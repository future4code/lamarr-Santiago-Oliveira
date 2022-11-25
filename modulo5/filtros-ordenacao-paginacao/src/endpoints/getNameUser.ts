import { Request, Response } from "express";
import { connection } from "../dataBase/connection";
import { Users } from "../types";

//-------------EXERCICIO 01--------------------
//a)

export const getNameUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;

  try {
    let name = req.query.name as string;

    if (!name) {
      name = "%";
    }

    const result = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${name}%`
    );

    if (result.length < 1) {
      statusCode = 404;
      throw new Error("Nenhum nome encontrado");
    }

    const user = result.map(toUser);

    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

const toUser = (input: any): Users => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  };
};
