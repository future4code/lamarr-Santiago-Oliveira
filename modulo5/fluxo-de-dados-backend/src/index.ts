import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data";
import { TProduct } from "./type";
import { isStringLiteral } from "typescript";

const app = express();

app.use(express.json());

app.use(cors());

//------------------------TESTE-------------------------------
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor rodando na porta 3003");
});

//---------------------Exercício 4----------------------------
app.post("/products", (req: Request, res: Response) => {
  const name = req.body.name;
  const price = req.body.price;

  /*   try {
    if (!name) {
      const erro = new Error("O nome do produto não foi informado!");
      erro.name = "dataProductNotFound";
      throw erro;
    }
    if (!price) {
      const erro = new Error("O preço do produto não foi informado!");
      erro.name = "dataProductNotFound";
      throw erro;
    }
    if (typeof name !== "string") {
      const erro = new Error("O nome precisa ser uma string");
      erro.name = "Tipo Inválido";
      throw erro;
    }
    if (typeof price !== typeof Number) {
      const erro = new Error("O preço precisa ser um número");
      erro.name = "Tipo Inválido";
      throw erro;
    }
    if (price <= 0) {
      const erro = new Error("O preço precisa ser superior a 0");
      erro.name = "Valor Inválido";
      throw erro;
    }
  } catch (e: any) {
    switch (e.name) {
      case "dataProductNotFound":
        res.status(422).send(e.message);
        break;
      case "Tipo Inválido":
        res.status(422).send(e.message);
        break;
      case "Valor Inválido":
        res.status(422).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
    }
  } */

  const newProduct: TProduct = {
    id: Date.now().toString(),
    name,
    price,
  };
  products.push(newProduct);

  res.status(201).send(products);
});

//---------------------Exercício 5----------------------------
app.get("/products", (req: Request, res: Response) => {
  const allProduct = products.map((prod) => {
    return prod;
  });

  res.status(200).send(allProduct);
});

//---------------------Exercício 6----------------------------
app.put("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const price = req.body.price;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].price = price;
    }
  }

  res.status(200).send(products);
});

//---------------------Exercício 7----------------------------
app.delete("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
    }
  }
  res.status(200).send(products);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
