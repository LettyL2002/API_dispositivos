const http = require("node:http"); //protocolo http

const desiredPort = process.env.PORT ?? 2002;

const server = http.createServer((req, res) => {
  res.writeHead(302, { Location: "https://your-desired-url" });
  res.end();
});

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`);
});
