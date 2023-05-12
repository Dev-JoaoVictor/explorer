const express = require("express"); // importando express
const routes = require("./routes")
const app = express(); //iniciando express

app.use(express.json());
app.use(routes)

const PORT = 3333; //número da porta que será observada
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
