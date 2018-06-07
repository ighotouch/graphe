import { Bible } from './bible.model';
import merge from 'lodash.merge';

const getMe = (_, __, { user }) => {
  return user;
};

export const userResolvers = {
  Query: {
    getMe,
  },
};
