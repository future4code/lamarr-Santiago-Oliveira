import { v4 as generateId } from "uuid";
import { MovieDatabase } from "../data/MovieDatabase";

export class MovieBusiness {
  createMovie = async (input: any): Promise<void> => {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = input;

      if (!title || !description || !durationInMinutes || !yearOfRelease) {
        throw new Error(
          "Preencha os campos 'title', 'description', 'durationInMinutes', 'yearOfRelease'"
        );
      }

      const id = generateId();

      const movieDatabase = new MovieDatabase();
      await movieDatabase.insertMovie({
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
