const express = require("express"); // importando express

const app = express(); //iniciando express

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;

  response.send(`
    Id da mensagem ${id}.
    Para o usuário: ${user}.
  `) // envia uma resposta pra quem solicitou a rota
})

const PORT = 3333; //número da porta que será observada

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));