import { bookSchema } from '../book/book.model';

const mongoose = require('mongoose');

const bibleSchema = mongoose.Schema({
  translation: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  books: [bookSchema],
  description: {
    type: String,
  },
});

export const Bible = mongoose.model('Bible', bibleSchema);

export default Bible;
