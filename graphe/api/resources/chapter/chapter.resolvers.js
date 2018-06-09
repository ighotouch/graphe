import { Bible } from '../bible/bible.model';

const getChapters = () => Chapter.find({}).exec();

const getChapter = async (_, { translation, version, book }) => {
  const bible = await Bible.findOne({ translation, version }).exec();
  bible.books.find(bk => bk.name === book);
  // then search books for chapter
};

export const chapterResolvers = {
  Query: {
    getChapter,
  },
};

export default chapterResolvers;
