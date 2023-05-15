const AppError = require("../utils/AppError");
const sqliteConncection = require("../database/sqlite");

class UsersController {
  /** O controller poder ter no máximo 5 métodos
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * delete - DELETE para remover um registro.
   */
  async create(resquest, response) {
    const { name, email, password } = resquest.body;

    const database = await sqliteConncection();
    const checkUserExists = await database.get(
      "SELECT * FROM  users WHERE email = (?)",
      [email]
    ); // subtitui pela variável

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    return response.status(201).json();
  }
}

module.exports = UsersController;
