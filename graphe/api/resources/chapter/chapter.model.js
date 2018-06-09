const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
  chapter: {
    type: Number,
    required: [true, 'Chapter must have a number'],
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: [true, 'Chapter must belong to a book'],
  },
  verses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Verse',
    },
  ],
  description: {
    type: String,
  },
});

export const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter;
