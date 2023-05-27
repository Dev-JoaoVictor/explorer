const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();

// usersRoutes.use(myMiddleware) - caso queira utilizar em todas as rotas
tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;
