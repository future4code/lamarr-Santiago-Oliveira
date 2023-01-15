import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";
import { getAllClients } from "./endpoints/allClients";
import { getAllProducts } from "./endpoints/allProducts";
import { createOrder } from "./endpoints/createOrder";
import { getStock } from "./endpoints/stock";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

//test
app.get("/ping", ping);
//return data clients
app.get("/clients", getAllClients);
//return data products
app.get("/products", getAllProducts);
//return stock
app.get("/stock", getStock);

//add order
app.post("/order", createOrder);
//add client
app.post("/client", createClient);
