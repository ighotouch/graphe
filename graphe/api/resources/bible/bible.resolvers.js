import { Bible } from './bible.model';

const getBible = (_, { translation, version }) => {
  return Bible.findOne({ translation, version }).exec();
};

export const bibleResolvers = {
  Query: {
    getBible,
  },
};

export default bibleResolvers;
