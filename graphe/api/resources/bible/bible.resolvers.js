import { Bible } from './bible.model';
import merge from 'lodash.merge';

const getBible = (_, { translation }) => Bible.findOne({ translation }).exec();

const updateMe = () => {
  const bible = new Bible({ translation: 'EN' });
  bible.save();
};

const newBible = (_, { input }) => Bible.create(input);

export const bibleResolvers = {
  Query: {
    getBible,
  },
  Mutation: {
    newBible,
  },
};

export default bibleResolvers;
