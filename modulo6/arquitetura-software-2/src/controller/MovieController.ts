import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async createMovie(req: Request, res: Response): Promise<void> {
    try {
      const input: any = {
        title: req.body.title,
        description: req.body.description,
        durationInMinutes: req.body.durationInMinutes,
        yearOfRelease: req.body.yearOfRelease,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.createMovie(input);

      res.status(201).send({ message: "Filme criado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
