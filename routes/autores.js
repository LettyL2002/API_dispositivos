const express = require("express");
const router = express.Router();
const Autor = require("../models/autor"); // Asegúrate de que el nombre del modelo coincida

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

// Obtener todos los autores
router.get("/", async (req, res) => {
  try {
    const todosLosAutores = await getAll(Autor);
    res.json(todosLosAutores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los autores" });
  }
});

// Obtener un autor por ID
router.get("/:id", async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    if (!autor) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }
    res.json(autor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el autor" });
  }
});

// Crear un nuevo autor
router.post("/", async (req, res) => {
  try {
    const nuevoAutor = new Autor(req.body);
    const autorGuardado = await nuevoAutor.save();
    res.status(201).json(autorGuardado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al crear el autor" });
  }
});

// Actualizar un autor
router.put("/:id", async (req, res) => {
  try {
    const autorActualizado = await Autor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!autorActualizado) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }
    res.json(autorActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error al actualizar el autor" });
  }
});

// Eliminar un autor
router.delete("/:id", async (req, res) => {
  try {
    const autorEliminado = await Autor.findByIdAndDelete(req.params.id);
    if (!autorEliminado) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }
    res.json({ message: "Autor eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el autor" });
  }
});

module.exports = router;
