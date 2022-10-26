import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";

const app = express();

app.use(express.json());

app.use(cors());

/* app.get("/", (req, res) => {
  console.log("bananinha");

  res.send("Hello from Express");
}); */

app.get("/users", (req: Request, res: Response) => {
  const listUsers = users.map((user) => {
    return user;
  });
  console.log(listUsers);
  res.status(200).send(listUsers);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
