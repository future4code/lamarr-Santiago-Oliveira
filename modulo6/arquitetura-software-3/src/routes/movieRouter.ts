import express from "express";
import { MovieController } from "../controller/MovieController";

export const movieRouter = express.Router();

const movieController = new MovieController();

movieRouter.get("/getAll", movieController.getMovies);
movieRouter.post("/create", movieController.createMovie);
