const AppError = require("../utils/AppError");

class UsersController {
  /** O controller poder ter no máximo 5 métodos
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */
  create(resquest, response) {
    const { name, email, password } = resquest.body;

    if (!name) {
      throw new AppError("Nome  é obrigatório");
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
