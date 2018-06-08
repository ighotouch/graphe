import { Verse } from './verse.model';

// get verses by translation, version, book, chapter
const getVerses = input => Verse.find({ input }).exec();

// get verses by translation, version, book, chapter, number
const getVerse = input => Verse.find({ input }).exec();

// add verse to a chapter
const newVerse = (_, { input }) => Verse.create(input);

// update verse
const updateBook = input => {
  const { id, ...update } = input;

  return Verse.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const verseResolvers = {
  Query: {
    getVerses,
    getVerse,
  },

  Mutation: {
    newVerse,
  },

  Verse: {
    async chapter(verse) {
      const populated = await verse.populate('chapter').execPopulate();
      return populated.chapter;
    },
  },
};

export default verseResolvers;
