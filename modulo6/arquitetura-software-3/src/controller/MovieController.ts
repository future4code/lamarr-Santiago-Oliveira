import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { createMovieDTO } from "../model/movieDTO";

export class MovieController {
  async createMovie(req: Request, res: Response): Promise<void> {
    try {
      const input: createMovieDTO = {
        title: req.body.title,
        description: req.body.description,
        duration_in_minutes: req.body.duration_in_minutes,
        year_of_release: req.body.year_of_release,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.createMovie(input);

      res.status(201).send({ message: "Filme criado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getMovies(req: Request, res: Response): Promise<void> {
    try {
      const movies = await new MovieBusiness().getMovies();

      res.status(200).send(movies);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
