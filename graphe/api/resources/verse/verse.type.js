import gql from 'graphql-tag';

export const verseType = gql`
  type Verse {
    number: Int
    text: String
    tags: [String]
    comment: String
  }

  extend type Query {
    getVerse(
      translation: String!
      version: String!
      book: String!
      chapter: Int!
      verse: Int!
    ): Verse!
  }
`;

export default verseType;
