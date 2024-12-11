const express = require("express");
const mongoose = require("mongoose");
const autoresRouter = require("./routes/autores");
const librosRouter = require("./routes/libros");

const app = express();
const port = process.env.PORT || 2002;

// Conexión a la base de datos (reemplaza con tu URI de conexión)
mongoose
  .connect("mongodb://localhost/API_dispositivos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas
app.use("/API_dispositivos/routes/autores.js", autoresRouter);
app.use("/API_dispositivos/routes/libros.js", librosRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
