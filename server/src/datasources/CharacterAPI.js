const { RESTDataSource } = require("apollo-datasource-rest");

class CharacterAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://rickandmortyapi.com/api";
  }

  async getCharacters() {
    const response = await this.get("/character");
    return response || [];
  }

  async getCharactersPage({ page }) {
    const response = await this.get(`/character/?page=${page}`);
    return response || [];
  }
}

module.exports = CharacterAPI;