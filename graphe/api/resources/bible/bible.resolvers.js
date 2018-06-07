import { Bible } from './bible.model';
import merge from 'lodash.merge';

const books = [
  {
    translation: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    translation: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const getMe = () => {
  return books;
};

const updateMe = () => {
  const bible = new Bible({ translation: 'EN' });
  bible.save();
};

const newBible = (_, { input }) => Bible.create(input);

export const bibleResolvers = {
  Query: {
    getMe,
  },
  Mutation: {
    newBible,
  },
};

export default bibleResolvers;
