const express = require("express");
const app = express();
const port = 2002;

// Arreglo de objetos para representar los libros
const libros = [
  { título: "Donde viven los monstruos", añoEdición: 1963 },
  { título: "El principito", añoEdición: 1943 },
  { título: "Matilda", añoEdición: 1988 },
  { título: "Platero y yo", añoEdición: 1914 },
  { título: "Charlie y la fábrica de chocolate", añoEdición: 1964 },
];

// Endpoint para obtener todos los libros
app.get("/libros", (req, res) => {
  res.json(libros);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
