import data from "../data/data.js";
const { autores } = data;

class Autor {
  constructor(nombre, nacionalidad, nacimiento) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.nacimiento = nacimiento;
  }

  getNombre() {
    return this.nombre;
  }

  getNacionalidad() {
    return this.nacionalidad;
  }

  getNacimiento() {
    return this.nacimiento;
  }

  static getAllAutores() {
    return autores;
  }

  static findByNombre(nombre) {
    return autores.find(
      (autor) => autor.nombre.toLowerCase() === nombre.toLowerCase()
    );
  }
}

export default Autor;
