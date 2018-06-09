import gql from 'graphql-tag';

export const verseType = gql`
  type Verse {
    verse: Int
    chapter: ID
    text: String
    references: [Verse]
    tags: [String]
    comment: String
  }

  input NewVerse {
    verse: Int!
    chapter: ID!
    text: String!
    tags: [String]
    comment: String
  }

  extend type Query {
    getVerses: [Verse]
    getVerse(chapter: ID!): Verse!
  }

  extend type Mutation {
    newVerse(input: NewVerse!): Verse!
  }
`;

export default verseType;
