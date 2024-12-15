# 📚 API_dispositivos

Sistema de gestión para biblioteca

## 🛠️ Endpoints

### 📖 Libros

| Método | Endpoint | Descripción | URL |
|--------|----------|-------------|-----|
| GET | `/libros` | Obtiene todos los libros registrados | `http://localhost:3000/libros` |
| GET | `/libros/disponibles` | Lista los libros disponibles para préstamo | `http://localhost:3000/libros/disponibles` |
| GET | `/libros/nodisponibles` | Lista los libros que están prestados | `http://localhost:3000/libros/nodisponibles` |
| GET | `/libros/:titulo` | Busca un libro por su título | `http://localhost:3000/libros/{titulo}` |

### ✍️ Autores

| Método | Endpoint | Descripción | URL |
|--------|----------|-------------|-----|
| GET | `/autores` | Lista todos los autores registrados | `http://localhost:3000/autores` |
| GET | `/autores/:nombre` | Busca un autor por su nombre | `http://localhost:3000/autores/{nombre}` |

## 🔍 Detalles Técnicos

- Puerto: 3000
- Base URL: `http://localhost:3000`

## 📋 Respuestas

Los endpoints retornan datos en formato JSON.

### Códigos de Estado

| Código | Significado |
|--------|-------------|
| 200 | ✅ Éxito |
| 404 | ❌ No encontrado |
| 500 | 🔥 Error del servidor |
