const express = require("express");
const router = express.Router();
const Libro = require("../models/libro"); // Asegúrate de que el nombre del modelo coincida

// Función auxiliar para obtener todos los elementos
const getAll = async (model) => {
  try {
    const todosLosElementos = await model.find({});
    return todosLosElementos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const todosLosLibros = await getAll(Libro);
    res.json(todosLosLibros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los libros" });
  }
});

// Obtener un libro por ID
router.get("/:id", async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(libro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el libro" });
  }
});

// Crear un nuevo libro
router.post("/", async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    const libroGuardado = await nuevoLibro.save();
    res.status(201).json(libroGuardado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al crear el libro" });
  }
});

// Actualizar un libro
router.put("/:id", async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!libroActualizado) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(libroActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al actualizar el libro" });
  }
});

// Eliminar un libro
router.delete("/:id", async (req, res) => {
  try {
    const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
    if (!libroEliminado) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el libro" });
  }
});

module.exports = router;
