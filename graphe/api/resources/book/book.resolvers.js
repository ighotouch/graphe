import { Bible } from '../bible/bible.model';

const getBooks = async (_, { translation }) => {
  const bible = await Bible.findOne({ translation }).exec();
  return bible.books;
};

const getBook = async (_, { translation, version, book }) => {
  const bible = await Bible.findOne({ translation, version }).exec();
  return bible.books.find(bk => bk.name === book);
};

export const bookResolvers = {
  Query: {
    getBooks,
    getBook,
  },
};

export default bookResolvers;
