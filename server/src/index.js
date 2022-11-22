require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const CharacterAPI = require("./datasources/CharacterAPI");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  dataSources: () => ({
    characterAPI: new CharacterAPI(),
  }),
  typeDefs,
  resolvers,
});
const URL = "http://localhost:"
const port = process.env.PORT || 9000;

server.listen({ port }).then((URL) => {
  console.log(`Server ready at ${URL}`);
});