import { Verse } from './verse.model';

// get verses by translation, version, book, chapter
const getVerses = input => Verse.find({ input }).exec();

// get verses by translation, version, book, chapter, number
const getVerse = input => Verse.find({ input }).exec();

export const verseResolvers = {
  Query: {
    getVerse,
  },
};

export default verseResolvers;
