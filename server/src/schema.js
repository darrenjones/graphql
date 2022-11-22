const { gql } = require("apollo-server");

const typeDefs = gql`
  type Character {
    id: ID
    name: String
    status: String
    image: String
  }

  type CharacterInfo {
    info: Info
    results: [Character]
  }

  type Info {
    count: Int
    pages: Int
    next: String
    prev: String
  }

  type Query {
    character(id: ID!): Character
    charactersPage(page: Int!): CharacterInfo
    characters: CharacterInfo
  }
`;

module.exports = typeDefs;
