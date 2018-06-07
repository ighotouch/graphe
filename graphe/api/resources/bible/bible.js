import gql from 'graphql-tag';

export const bibleType = gql`
  type Bible {
    translation: String!
  }

  input NewBible {
    translation: String
  }

  type Query {
    getMe: [Bible]
  }

  type Mutation {
    newBible(input: NewBible!): Bible!
  }
`;

export default bibleType;
