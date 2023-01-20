import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  insertMovie = async (movie: any): Promise<void> => {
    try {
      await MovieDatabase.connection
        .insert({
          id: movie.id,
          title: movie.title,
          description: movie.description,
          duration_in_minutes: movie.durationInMinutes,
          year_of_release: movie.yearOfRelease,
        })
        .into("LABEFLIX_MOVIE");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
