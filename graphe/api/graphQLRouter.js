import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import { graphqlExpress } from 'apollo-server-express';
import { bibleType, bibleResolvers } from './resources/bible';

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [baseSchema, bibleType],
  resolvers: merge({}, bibleResolvers),
});

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
  },
}));

export default graphQLRouter;
