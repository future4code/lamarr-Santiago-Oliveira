import { Request, Response } from "express";
import { connection } from "../dataBase/connection";
// import { Users } from "../types";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found");
    }

    async function selectAllUsers(): Promise<any> {
      const result = await connection.raw(`
           SELECT id, name, email, type
           FROM aula48_exercicio;
        `);

      return result[0];
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

//-------------EXERCICIO 01--------------------
//a)

export const getNameUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectNameUser();
    let name = req.query.name as string;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found");
    }

    if (!name) {
      name = "%";
    }

    async function selectNameUser(): Promise<any> {
      const result = await connection.raw(`
           SELECT name
           FROM aula48_exercicio;
        `);

      return result[0];
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

//b)

export const getTypeUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectTypeUser();
    let type = req.params.type as string;

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found");
    }

    if (!type) {
      type = "%";
    }

    async function selectTypeUser(): Promise<any> {
      const result = await connection.raw(`
           SELECT type
           FROM aula48_exercicio;
        `);

      return result[0];
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
