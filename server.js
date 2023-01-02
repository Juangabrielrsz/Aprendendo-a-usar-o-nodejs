const http = require("http");

http
 .createServer = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/jason"});

  response.end(JSON.stringify({
    MessageEvent: "Minha primeira aplicação com NodeJS",
    }));
 })
.listen(300, () => console.log("Servidor está rodando na porta 300"))