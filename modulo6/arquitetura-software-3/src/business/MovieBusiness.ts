import { MovieDatabase } from "../data/MovieDatabase";
import { CustomError } from "../error/CustomError";
import { Movie } from "../model/Movie";
import { createMovieDTO } from "../model/movieDTO";
import { generateId } from "../service/idGenerator";

export class MovieBusiness {
  createMovie = async (input: createMovieDTO): Promise<void> => {
    try {
      const { title, description, duration_in_minutes, year_of_release } =
        input;

      if (!title || !description || !duration_in_minutes || !year_of_release) {
        throw new CustomError(
          400,
          "Preencha os campos 'title', 'description', 'durationInMinutes', 'yearOfRelease'"
        );
      }

      const id = generateId();

      const movieDatabase = new MovieDatabase();
      await movieDatabase.insertMovie({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  async getMovies(): Promise<Movie[]> {
    return await new MovieDatabase().getMovies();
  }
}
