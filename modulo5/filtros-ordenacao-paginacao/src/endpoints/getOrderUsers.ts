//------------------------EXERCICIO 02--------------------

import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const getOrderUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;

  try {
    let sort = req.query.sort as string;
    let order = req.query.order as string;

    if (!sort) {
      sort = "name";
    }

    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    if (
      order &&
      order.toUpperCase() !== "ASC" &&
      order.toUpperCase() !== "DESC"
    ) {
      order = "ASC";
    }

    //queries builder
    const result = await connection("aula48_exercicio").orderBy(sort, order);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
