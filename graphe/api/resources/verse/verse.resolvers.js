import { Verse } from './verse.model';

// get verses by translation, version, book, chapter
const getVerses = input => Verse.find({ input }).exec();

// get verses by translation, version, book, chapter, number
const getVerse = (_, { input }) => Verse.find({ input }).exec();

// add verse to a chapter
const newVerse = (_, { input }) => Verse.create(input);

export const verseResolvers = {
  Query: {
    getVerses,
    getVerse,
  },

  Mutation: {
    newVerse,
  },
};

export default verseResolvers;
