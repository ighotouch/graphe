import gql from 'graphql-tag';

export const bookType = gql`
  type Book {
    name: String!
    bible: ID!
    chapters: [String]!
    description: String
  }

  extend type Query {
    getBooks(translation: String!, version: String): [Book]
    getBook(translation: String!, version: String!, book: String!): Book!
  }
`;

export default bookType;
