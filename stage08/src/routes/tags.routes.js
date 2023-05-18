const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router();

const tagsController = new TagsController();

// usersRoutes.use(myMiddleware) - caso queira utilizar em todas as rotas
tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;
