import biblioteca from "../services/biblioteca.js";

const getAllLibros = (req, res) => {
  res.json(biblioteca.obtenerTodosLosLibros());
};

const getLibrosDisponibles = (req, res) => {
  res.json(biblioteca.obtenerLibrosDisponibles());
};

const getLibrosNoDisponibles = (req, res) => {
  res.json(biblioteca.obtenerLibrosNoDisponibles());
};

const getLibroPorTitulo = (req, res) => {
  const libro = biblioteca.buscarLibroPorTitulo(req.params.titulo);
  if (libro) {
    res.json(libro);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
};

export { getAllLibros, getLibrosDisponibles, getLibrosNoDisponibles, getLibroPorTitulo };
