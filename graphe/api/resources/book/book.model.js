const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book must have a title'],
  },
  bible: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bible',
    required: true,
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'chapter',
    },
  ],
  description: {
    type: String,
  },
});

export const Book = mongoose.model('Book', bookSchema);

export default Book;
