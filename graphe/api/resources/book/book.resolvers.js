import { Book } from './book.model';

const getBooks = () => Book.find({}).exec();

const getBook = input => Book.find({ input }).exec();

const newBook = (_, { input }) => Book.create(input);

const updateBook = input => {
  const { id, ...update } = input;

  return Book.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const bookResolvers = {
  Query: {
    getBooks,
    getBook,
  },

  Mutation: {
    newBook,
    updateBook,
  },

  Book: {
    async chapters(book) {
      const populated = await book.populate('chapters').execPopulate();
      return populated.chapters;
    },
  },
};

export default bookResolvers;
