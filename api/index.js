import express, { json } from "express";
import autorRoute from "../routes/autorRoute.js";
import libroRoute from "../routes/libroRoute.js";

const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://front-end-dispositivos.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(json());

app.use("/api/autores", autorRoute);
app.use("/api/libros", libroRoute);


export default app;
