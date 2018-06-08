import mongoose from 'mongoose';
import { graphql } from 'graphql';
import { schema } from '../graphe/api/graphQLRouter';
import config from '../graphe/config';

mongoose.Promise = global.Promise;

export const removeModel = modelName => {
  const model = mongoose.model(modelName);
  return new Promise((resolve, reject) => {
    if (!model) {
      return resolve();
    }
    model.remove(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const dropDb = () =>
  mongoose
    .connect(config.databaseUrl)
    .then(() => Promise.all(mongoose.modelNames().map(removeModel)));

export const runQuery = async (query, variables, user) =>
  graphql(schema, query, {}, { user }, variables);
