import gql from 'graphql-tag';

export const bibleType = gql`
  type Bible {
    id: ID!
    translation: String!
    version: String
    books: [Book]
    description: String
  }

  input GetBible {
    translation: String
    version: String
  }

  input NewBible {
    translation: String!
    version: String!
    books: [ID!]
    description: String
  }

  type Query {
    Bible(id: ID!): Bible
    getBibles: [Bible]
    getBible(translation: String!): Bible
  }

  type Mutation {
    newBible(input: NewBible!): Bible!
  }
`;

export default bibleType;
