import express, { Request, Response } from "express";
import cors from "cors";
import { afazeres } from "./data";
import { Afazeres } from "./types";

const app = express();

app.use(express.json());

app.use(cors());

//-----------------TESTE----------------------------
app.get("/ping", (req: Request, resp: Response) => {
  resp.status(200).send("Pong! 🏓");
});

//-----------------EXERCÍCIO 4-----------------------
app.get("/afazeres/completed/:isCompleted", (req: Request, res: Response) => {
  let isCompleted: any = req.params.isCompleted;

  if (isCompleted === "true") {
    isCompleted = true;
  } else if (isCompleted === "false") {
    isCompleted = false;
  } else {
    res.send("Condição de tarefa deve ser 'true' ou 'false'");
  }

  const resultado = [];

  for (let i = 0; i < afazeres.length; i++) {
    if (afazeres[i].completed === isCompleted) {
      resultado.push(afazeres[i]);
    }
  }
  res.status(200).send(resultado);
});

//-----------------EXERCÍCIO 5-----------------------
app.post("/afazeres", (req: Request, res: Response) => {
  const userId = req.body.userId;
  const title = req.body.title;

  const novoAfazer: Afazeres = {
    userId,
    id: Date.now(),
    title,
    completed: false,
  };
  afazeres.push(novoAfazer);

  res.status(201).send(afazeres);
});

//-----------------EXERCÍCIO 6-----------------------
app.put("/afazeres/:id/completed", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  for (let afazer of afazeres) {
    if (afazer.id === id) {
      afazer.completed = !afazer.completed;
    }
  }

  res.status(200).send(afazeres);
});

//-----------------EXERCÍCIO 7-----------------------
app.delete("/afazeres/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  for (let i = 0; i < afazeres.length; i++) {
    if (afazeres[i].id === id) {
      afazeres.splice(i, 1);
    }
  }
  res.status(200).send(afazeres);
});

//-----------------EXERCÍCIO 8-----------------------
app.get("/users/:userId/afazeres", (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  let resultado = [];

  for (let afazer of afazeres) {
    if (afazer.userId === userId) {
      resultado.push(afazer);
    }
  }

  res.status(200).send(resultado);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

//-----------------EXERCÍCIO 9-----------------------
// https://documenter.getpostman.com/view/22349865/2s8YRmGrc9
