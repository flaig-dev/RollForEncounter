const { gql } = require('apollo-server');

const typeDefs = gql`
  #
  # Your schema will go here
  #

  type Fake {
    id: ID!
  }

  type Query {
    fakes: [Fake]!
    fake(id: ID!): Fake
  }
`;

module.exports = typeDefs;