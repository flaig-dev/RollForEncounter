//require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const context = require('./context.js');
const Encounters = require('./datasources/encounters.json');
const Monsters = require('./datasources/monsters.json');


// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

// Start the server
server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
    Or at http://localhost:4000/
  `);
});

// export all the important pieces for integration/e2e tests to use
module.exports = {
  typeDefs,
  resolvers,
  ApolloServer,
  server,
};