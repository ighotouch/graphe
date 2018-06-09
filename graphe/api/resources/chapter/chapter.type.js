import gql from 'graphql-tag';

export const chapterType = gql`
  type Chapter {
    id: ID!
    chapter: Int!
    book: ID!
    description: String
    verses: [Verse!]
  }

  input NewChapter {
    chapter: Int
    book: [ID!]
    description: String
    verses: [ID!]
  }

  extend type Query {
    getChapters(book: ID!): [Chapter]
    getChapter(book: ID!, chapter: Int): Chapter
  }

  extend type Mutation {
    newChapter(input: NewChapter!): Chapter!
  }
`;

export default chapterType;
