import { Chapter } from './chapter.model';

const getChapters = () => Chapter.find({}).exec();

const getChapter = (_, { input }) => Chapter.find({ input }).exec();

const newChapter = (_, { input }) => Chapter.create(input);

export const chapterResolvers = {
  Query: {
    getChapter,
  },

  Mutation: {
    newChapter,
  },

  Chapter: {
    async verses(chapter) {
      const populated = await chapter.populate('verses').execPopulate();
      return populated.verses;
    },
  },
};

export default chapterResolvers;
