const express = require("express");

const app = express();



app.get("/primeira-rota" , (resquest, response) => {
    return response.json({
        message: "Acessou a primeira rota com nodemon",
    })
});

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))