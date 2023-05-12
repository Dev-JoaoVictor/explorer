const express = require("express"); // importando express

const app = express(); //iniciando express

app.post("/users", (resquest, response) => {
  response.send(`Você chamou o POST`);
});

const PORT = 3333; //número da porta que será observada

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
