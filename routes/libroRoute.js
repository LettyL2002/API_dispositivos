import { Router } from "express";
import {
  getAllLibros,
  getLibrosDisponibles,
  getLibrosNoDisponibles,
  getLibroPorTitulo,
} from "../controllers/libroController.js";

const router = Router();

router.get("/", getAllLibros);
router.get("/disponibles", getLibrosDisponibles);
router.get("/nodisponibles", getLibrosNoDisponibles);
router.get("/:titulo", getLibroPorTitulo);

export default router;
