import express, { json } from "express";
import chalk from "chalk";
import { networkInterfaces } from "os";
import autorRoute from "./routes/autorRoute.js";
import libroRoute from "./routes/libroRoute.js";

// Inicialización de la app
const app = express();
const port = 7100;
app.use(json());

//* Utils
// Helper function to get local IP
function getLocalIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "127.0.0.1";
}

// URLs
const localUrl = "http://localhost:" + port;
const networkUrl = "http://" + getLocalIP() + ":" + port;

// Rutas
app.use("/autores", autorRoute);
app.use("/libros", libroRoute);

app.listen(port, () => {
  // Server info banner
  console.log("\n" + chalk.bgBlue.white.bold(" API BIBLIOTECA ") + "\n");
  console.log(`${chalk.green("✨")} ${chalk.bold("Estado del servidor:")}`);

  console.log(`${chalk.blue("📡")} Local:            ${chalk.cyan(localUrl)}`);

  console.log(
    `${chalk.blue("🌐")} Red               ${chalk.cyan(networkUrl)}`
  );
  console.log(
    `${chalk.yellow("⚡")} Entorno           ${chalk.green("development")}\n`
  );

  const endpoints = [
    {
      Método: "GET",
      url: localUrl + "/libros",
      Descripción: "📚 Obtiene todos los libros registrados",
    },
    {
      Método: "GET",
      url: localUrl + "/libros/disponibles",
      Descripción: "✅ Lista los libros disponibles para préstamo",
    },
    {
      Método: "GET",
      url: localUrl + "/libros/nodisponibles",
      Descripción: "❌ Lista los libros que están prestados",
    },
    {
      Método: "GET",
      url: localUrl + "/libros/:titulo",
      Descripción: "🔍 Busca un libro por su título",
    },
    {
      Método: "GET",
      url: localUrl + "/autores",
      Descripción: "👥 Lista todos los autores registrados",
    },
    {
      Método: "GET",
      url: localUrl + "/autores/:nombre",
      Descripción: "👤 Busca un autor por su nombre",
    },
  ];

  console.log(chalk.yellow.bold("📡 Endpoints disponibles:"));
  console.table(
    endpoints.map((endpoint) => ({
      Método: endpoint.Método,
      URL: endpoint.url,
      Descripción: endpoint.Descripción,
    }))
  );
});
