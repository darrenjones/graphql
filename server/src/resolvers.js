module.exports = {
  Query: {
    characters: async (_, __, { dataSources }) => {
      return await dataSources.characterAPI.getCharacters()
    },
    charactersPage: async (_, page = 1, { dataSources }) => {
      return await dataSources.characterAPI.getCharactersPage(page)
    },
  },
};