import { chapterSchema } from '../chapter/chapter.model';

const mongoose = require('mongoose');

export const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Book must have a name'],
  },
  chapters: [chapterSchema],
  description: {
    type: String,
  },
});

export const Book = mongoose.model('Book', bookSchema);

export default Book;
