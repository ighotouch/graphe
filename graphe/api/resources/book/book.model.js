const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  book: {
    type: String,
    required: [true, 'Book must have a name'],
  },
  bible: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bible',
    required: true,
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
    },
  ],
  description: {
    type: String,
  },
});

export const Book = mongoose.model('Book', bookSchema);

export default Book;
