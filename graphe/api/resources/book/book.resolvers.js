import { Book } from './book.model';

const getBooks = (_, { bible }) => Book.find({ bible }).exec();

const getBook = (_, { bible, book }) =>
  Book.findOne({ _id: bible, book }).exec();

const newBook = (_, { input }) => Book.create(input);

export const bookResolvers = {
  Query: {
    getBooks,
    getBook,
  },

  Mutation: {
    newBook,
  },

  Book: {
    async chapters(book) {
      const populated = await book.populate('chapters').execPopulate();
      return populated.chapters;
    },
  },
};

export default bookResolvers;
