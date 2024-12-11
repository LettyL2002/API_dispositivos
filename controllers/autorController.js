const express = require("express");
const app = express();
const port = 2002;

// Modelos (datos en memoria)
const autores = [
  { autor: "Maurice Sendak", nacionalidad: "Estadounidense" },
  { autor: "Antoine de Saint-Exupéry", nacionalidad: "Francés" },
  // ... otros autores
];

const libros = [
  {
    título: "Donde viven los monstruos",
    añoEdición: 1963,
    autor: "Maurice Sendak",
  },
  {
    título: "El principito",
    añoEdición: 1943,
    autor: "Antoine de Saint-Exupéry",
  },
  
];

// Controlador de autores
const autorController = {
  getAutores: (req, res) => {
    res.json(autores);
  },
};

// Rutas
app.get("/autores", autorController.getAutores);
app.get("/libros", (req, res) => {
  res.json(libros);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
