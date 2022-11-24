import { app } from "./app";
import { getAllUsers, getNameUser, getTypeUser } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers);
app.get("/users/name", getNameUser);
app.get("/users/:type", getTypeUser);
