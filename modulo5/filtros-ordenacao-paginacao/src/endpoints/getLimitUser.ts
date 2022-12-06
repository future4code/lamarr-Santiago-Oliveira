import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const getLimitUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let size = Number(req.query.size);
    let page = Number(req.params.page);

    if (!size && !page) {
      statusCode = 402;
      throw new Error("Informar parâmetros");
    }

    if (!page) {
      page = 1;
    }

    let offset = size * (page - 1);

    //queries builder
    const users = await connection("aula48_exercicio")
      .limit(size)
      .offset(offset);

    if (!size) {
      size = users.length;
    }

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
