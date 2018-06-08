import gql from 'graphql-tag';

export const chapterType = gql`
  type Chapter {
    number: Int!
    book: ID!
    description: String
    verses: [ID!]
  }

  input NewChapter {
    number: Int
    book: [ID!]
    description: String
    verses: [ID!]
  }

  extend type Query {
    getChapter: [Chapter]
  }

  extend type Mutation {
    newChapter(input: NewChapter!): Chapter!
  }
`;

export default chapterType;
