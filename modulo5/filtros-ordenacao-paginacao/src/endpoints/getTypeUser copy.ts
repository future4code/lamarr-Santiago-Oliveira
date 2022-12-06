import { Request, Response } from "express";
import { connection } from "../dataBase/connection";
import { Users } from "../types";

//--EXERCICIO 01
//b)

export const getTypeUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;

  try {
    let type = req.params.type as string;

    if (!type) {
      type = "%";
    }

    const result = await connection("aula48_exercicio").where(
      "type",
      "like",
      `%${type}%`
    );

    if (result.length < 1) {
      statusCode = 404;
      throw new Error("Nenhum type encontrado");
    }
    const typeUser = result.map(toTypeUser);

    res.status(200).send(typeUser);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

const toTypeUser = (input: any): Users => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  };
};
