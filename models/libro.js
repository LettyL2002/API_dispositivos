import data from "../data/data.js";
const { libros } = data;

class Libro {
  constructor(título, añoEdición, disponible = true) {
    this.título = título;
    this.añoEdición = añoEdición;
    this.disponible = disponible;
  }

  getTítulo() {
    return this.título;
  }

  getAñoEdición() {
    return this.añoEdición;
  }

  getDisponible() {
    return this.disponible;
  }

  static getAllLibros() {
    return libros;
  }

  static getLibrosDisponibles() {
    return libros.filter((libro) => libro.disponible);
  }

  static getLibrosNoDisponibles() {
    return libros.filter((libro) => !libro.disponible);
  }

  static findByTitulo(titulo) {
    return libros.find(
      (libro) => libro.título.toLowerCase() === titulo.toLowerCase()
    );
  }
}

export default Libro;
