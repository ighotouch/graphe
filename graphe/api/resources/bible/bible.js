import gql from 'graphql-tag';

export const bibleType = gql`
  type Bible {
    translation: String!
    version: String
    books: [Book]
    description: String
  }

  type Query {
    Bible(id: ID!): Bible
    getBible(translation: String!): Bible
  }
`;

export default bibleType;
