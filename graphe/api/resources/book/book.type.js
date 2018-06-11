import gql from 'graphql-tag';

export const bookType = gql`
  type Book {
    id: ID
    book: String
    bible: ID
    chapters: [Chapter]!
    description: String
  }

  input NewBook {
    book: String!
    chapters: [ID!]
    bible: ID!
    description: String
  }

  extend type Query {
    getBooks(bible: ID!): [Book]
    getBook(bible: ID!, book: String!): Book!
  }

  extend type Mutation {
    newBook(input: NewBook!): Book!
  }
`;

export default bookType;
