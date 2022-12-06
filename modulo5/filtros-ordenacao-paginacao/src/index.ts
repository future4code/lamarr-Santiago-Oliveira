import { app } from "./app";
import { getAllFunc } from "./endpoints/getAllFunc";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getLimitUsers } from "./endpoints/getLimitUser";
import { getNameUser } from "./endpoints/getNameUser";
import { getOrderUsers } from "./endpoints/getOrderUsers";
import { getTypeUser } from "./endpoints/getTypeUser copy";

app.get("/users", getAllUsers);
app.get("/users", getOrderUsers);
app.get("/users/name", getNameUser);
app.get("/users/:type", getTypeUser);
app.get("/users/:page", getLimitUsers);
app.get("/users/:page", getAllFunc);
