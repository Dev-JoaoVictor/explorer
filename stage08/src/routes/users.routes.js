const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware");

  if (!request.body.isAdmin) {
    return response.json({ message: "User unauthorized" });
  }
  next();
}

const usersController = new UsersController();

// usersRoutes.use(myMiddleware) - caso queira utilizar em todas as rotas
usersRoutes.post("/", usersController.create); 
module.exports = usersRoutes;
