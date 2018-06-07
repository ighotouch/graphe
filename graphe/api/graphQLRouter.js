import { makeExecutableSchema } from 'graphql-tools';
import gql from 'graphql-tag';
import merge from 'lodash.merge';
import { graphqlExpress } from 'apollo-server-express';
import { bibleType, bibleResolvers } from './resources/bible';

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};


const baseSchema = `
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    bible: req.bible,
  },
}));

export default graphQLRouter;
