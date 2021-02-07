import { ApolloClient, gql } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});

// ...ApolloClient instantiated here...

client
  .query({
    query: gql`
      query TestQuery {
        fake(id: 1) {
          id
        }
      }
    `
  })
  .then(result => console.log(result));