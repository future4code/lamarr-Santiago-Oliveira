import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const getAllFunc = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let size = Number(req.query.size);
    let page = Number(req.params.page);
    let sort = req.query.sort as string;
    let order = req.query.order as string;

    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    if (!order) {
      sort = "name";
      order = "DESC";
    }

    if (!page) {
      page = 1;
    }

    let offset = size * (page - 1);

    //queries builder
    const users = await connection("aula48_exercicio")
      .orderBy(sort, order)
      .limit(size)
      .offset(offset);

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
