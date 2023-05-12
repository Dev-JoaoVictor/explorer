const express = require("express"); // importando express

const app = express(); //iniciando express

app.use(express.json());

app.post("/users", (resquest, response) => {
  const { name, email, password } = resquest.body;
  response.json({ name, email, password });
});

const PORT = 3333; //número da porta que será observada

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
