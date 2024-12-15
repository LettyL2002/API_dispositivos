import express, { json } from "express";
import autorRoute from "../routes/autorRoute.js";
import libroRoute from "../routes/libroRoute.js";

const app = express();
app.use(json());

app.use("/api/autores", autorRoute);
app.use("/api/libros", libroRoute);


export default app;
