import mongoose from 'mongoose';
import appConfig from './';

mongoose.Promise = global.Promise;

export const connect = (config = appConfig) =>
  mongoose.connect(config.databaseUrl);

export default connect;
