const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usersController = new UsersController();

// usersRoutes.use(myMiddleware) - caso queira utilizar em todas as rotas
usersRoutes.post("/", usersController.create); 
module.exports = usersRoutes;
