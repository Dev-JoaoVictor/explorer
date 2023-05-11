const express = require("express"); // importando express

const app = express(); //iniciando express

app.get("/", (request, response) => {
  response.send("Hello, world") // envia uma resposta pra quem solicitou a rota
})

const PORT = 3333; //número da porta que será observada

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));