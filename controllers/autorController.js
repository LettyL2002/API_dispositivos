import biblioteca from "../services/biblioteca.js";

const getAllAutores = (req, res) => {
  res.json(biblioteca.obtenerTodosLosAutores());
};

const getAutorPorNombre = (req, res) => {
  const autor = biblioteca.buscarAutorPorNombre(req.params.nombre);
  if (autor) {
    res.json(autor);
  } else {
    res.status(404).json({ message: "Autor no encontrado" });
  }
};

export { getAllAutores, getAutorPorNombre };
