import Libro from "../models/libro.js";
import Autor from "../models/autor.js";

class Biblioteca {
  constructor() {
    this.libros = [];
    this.autores = [];
    this.inicializarDatos();
  }

  inicializarDatos() {
    this.libros = Libro.getAllLibros();
    this.autores = Autor.getAllAutores();
  }

  obtenerTodosLosLibros() {
    return this.libros;
  }

  obtenerLibrosDisponibles() {
    return Libro.getLibrosDisponibles();
  }

  obtenerLibrosNoDisponibles() {
    return Libro.getLibrosNoDisponibles();
  }

  obtenerTodosLosAutores() {
    return this.autores;
  }

  buscarLibroPorTitulo(titulo) {
    return Libro.findByTitulo(titulo);
  }

  buscarAutorPorNombre(nombre) {
    return Autor.findByNombre(nombre);
  }
}

const biblioteca = new Biblioteca();
export default biblioteca;
