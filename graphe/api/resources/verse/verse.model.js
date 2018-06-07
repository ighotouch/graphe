const mongoose = require('mongoose');

const verseSchema = mongoose.Schema({
  number: {
    type: Number,
    required: [true, 'Chapter must have a number'],
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book',
    required: true,
  },
  references: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'verse',
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  comment: {
    type: String,
  },
});

export const Verse = mongoose.model('Verse', verseSchema);

export default Verse;
