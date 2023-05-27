const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

// usersRoutes.use(myMiddleware) - caso queira utilizar em todas as rotas
notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.post("/", notesController.create);
notesRoutes.delete("/:id", notesController.delete);
module.exports = notesRoutes;
