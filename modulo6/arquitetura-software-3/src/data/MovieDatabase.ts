import { CustomError } from "./../error/CustomError";
import { Movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  insertMovie = async (movie: any): Promise<void> => {
    try {
      await MovieDatabase.connection
        .insert({
          id: movie.id,
          title: movie.title,
          description: movie.description,
          duration_in_minutes: movie.duration_in_minutes,
          year_of_release: movie.year_of_release,
        })
        .into("LABEFLIX_MOVIE");
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  async getMovies(): Promise<Movie[]> {
    try {
      const allMovies = await MovieDatabase.connection()
        .select("*")
        .from("LABEFLIX_MOVIE");

      return allMovies;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.sqlMessage);
    }
  }
}
