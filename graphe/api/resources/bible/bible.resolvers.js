import { Bible } from './bible.model';

const getBibles = () => Bible.find({}).exec();

const getBible = (_, { translation }) => Bible.findOne({ translation }).exec();

const newBible = (_, { input }) => Bible.create(input);

export const bibleResolvers = {
  Query: {
    getBibles,
    getBible,
  },
  Mutation: {
    newBible,
  },
  Bible: {
    async books(bible) {
      const populated = await bible.populate('books').execPopulate();
      return populated.books;
    },
  },
};

export default bibleResolvers;
