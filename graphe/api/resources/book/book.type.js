import gql from 'graphql-tag';

export const bookType = gql`
  type Book {
    title: String!
    bible: ID!
    chapters: [String]!
    description: String
  }

  input UpdatedBook {
    id: ID!
    title: String
    chapters: [ID!]
    description: String
  }

  input NewBook {
    title: String!
    chapters: [ID!]
    bible: ID!
    description: String
  }

  extend type Query {
    getBooks(bible: ID!): [Book]
    getBook(bible: ID!, title: String!): Book!
  }

  extend type Mutation {
    newBook(input: NewBook!): Book!
    updateBook(input: UpdatedBook!): Book!
  }
`;

export default bookType;
