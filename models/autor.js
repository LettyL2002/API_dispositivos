const express = require("express");
const app = express();
const port = 2002;

// Arreglo de objetos para representar a los autores
const autores = [
  { autor: "Maurice Sendak", nacionalidad: "Estadounidense" },
  { autor: "Antoine de Saint-Exupéry", nacionalidad: "Francés" },
  { autor: "Roald Dahl", nacionalidad: "Británico" },
  { autor: "Juan Ramón Jiménez", nacionalidad: "Español" },
  { autor: "Horacio Quiroga", nacionalidad: "Uruguayo" },
];

// Endpoint para obtener todos los autores
app.get("/autores", (req, res) => {
  res.json(autores);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
