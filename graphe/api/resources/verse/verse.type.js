import gql from 'graphql-tag';

export const verseType = gql`
  type Verse {
    number: Int
    chapter: Chapter
    text: String
    references: [Verse]
    tags: [String]
    comment: String
  }

  input UpdatedVerse {
    id: ID!
    number: Int!
    book: ID!
    tags: [String]!
    comment: String
  }

  input NewVerse {
    number: Int!
    chapter: ID!
    text: String!
    tags: [String]
    comment: String
  }

  input GetVerse {
    number: Int!
    book: String!
    chapter: Int!
  }

  extend type Query {
    getVerses: [Verse]
    getVerse(input: GetVerse): Verse!
  }

  extend type Mutation {
    newVerse(input: NewVerse!): Verse!
  }
`;

export default verseType;
