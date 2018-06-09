import gql from 'graphql-tag';

export const chapterType = gql`
  type Chapter {
    number: Int!
    description: String
    verses: [ID!]
  }

  extend type Query {
    getChapter(
      translation: String!
      version: String!
      book: String!
      chapter: Int!
    ): [Chapter]
  }
`;

export default chapterType;
