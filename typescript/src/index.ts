import { ApolloServer, gql } from "apollo-server";
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

const server = new ApolloServer({
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

server.listen().then(({ url }) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    🚀 Server ready at ${url}
  `);
})