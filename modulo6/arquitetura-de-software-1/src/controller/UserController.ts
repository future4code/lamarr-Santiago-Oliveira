import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  get = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await new UserBusiness().get();

      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const input = {
        id: req.params.id,
      };

      await new UserBusiness().deleteUser(input);

      res.status(200).send({ message: "Usuário apagado com sucesso" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
