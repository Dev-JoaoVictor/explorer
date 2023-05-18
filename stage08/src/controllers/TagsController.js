const { response } = require("express");
const knex = require("../database/knex")

class TagsController {
  async index(request,reponse) {
    const user_id = request.params;

    const tags = await knex("tags").where({ user_id })
    return response.json(tags)
  }
}

module.exports = TagsController