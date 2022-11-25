import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getNameUser } from "./endpoints/getNameUser";
import { getOrderUsers } from "./endpoints/getOrderUsers";
import { getTypeUser } from "./endpoints/getTypeUser copy";

app.get("/users", getAllUsers);
app.get("/users", getOrderUsers);
app.get("/users/name", getNameUser);
app.get("/users/:type", getTypeUser);
