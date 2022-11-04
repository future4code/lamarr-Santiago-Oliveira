import express, { Request, Response } from "express";
import cors from "cors";
import { users, posts } from "./data";

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
  res.status(200).send(listUsers);
});

app.get("/posts", (req: Request, res: Response) => {
  const listPosts = posts.map((post) => {
    return post;
  });
  res.status(200).send(listPosts);
});

app.get("/posts/:id", (req: Request, res: Response) => {
  const userId = Number(req.params.id);

  if (!userId) {
    res.status(400).send("Insira um id");
  }

  const postsUsuario = posts.find((user) => {
    return user.id === userId;
  });
  res.status(200).send(postsUsuario);
  /*  if (postsUsuario) {
    const listPosts = postsUsuario.posts.map((post) => {
      return post;
    });
    res.status(200).send(listPosts);
  } else {
    res.status(400).send("Não foi localizado usuário para o id informado");
  } */
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
