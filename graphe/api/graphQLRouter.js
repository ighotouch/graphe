import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import { graphqlExpress } from 'apollo-server-express';
import { bibleType, bibleResolvers } from './resources/bible';
import { bookType, bookResolvers } from './resources/book';
import { verseType, verseResolvers } from './resources/verse';
import { chapterType, chapterResolvers } from './resources/chapter';

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [baseSchema, bibleType, bookType, verseType, chapterType],
  resolvers: merge(
    {},
    bibleResolvers,
    bookResolvers,
    verseResolvers,
    chapterResolvers,
  ),
});

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
  },
}));

export default graphQLRouter;
