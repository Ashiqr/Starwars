import {ApolloServer, gql} from 'apollo-server';
import {readFileSync} from 'fs';
import {resolve} from 'path';
import {resolvers} from './resolvers';

const port = 4000;

const typeDefs = gql(
  readFileSync(resolve(__dirname, './schema.graphql'), {
    encoding: 'utf-8',
  }),
);

const server = new ApolloServer({typeDefs, resolvers, cors: { origin: [ "http://localhost:3000" ] }});

server
  .listen({port})
  .then(({url}) => {
    console.log(`🚀 SWAPI GQL ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
