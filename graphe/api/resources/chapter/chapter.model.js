import { verseSchema } from '../verse/verse.model';

const mongoose = require('mongoose');

export const chapterSchema = mongoose.Schema({
  chapter: {
    type: Number,
    required: [true, 'Chapter must have a number'],
  },
  verses: [verseSchema],
  description: {
    type: String,
  },
});

export const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter;
