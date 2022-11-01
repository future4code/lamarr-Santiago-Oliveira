import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data";
import { TProduct } from "./type";

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
  const showProduct = products.map((prod) => {
    return prod;
  });

  res.status(200).send(showProduct);
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
