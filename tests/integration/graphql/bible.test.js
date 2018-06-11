import { Bible } from '../../../graphe/api/resources/bible/bible.model';
import { Book } from '../../../graphe/api/resources/book/book.model';
import { Chapter } from '../../../graphe/api/resources/chapter/chapter.model';
import { Verse } from '../../../graphe/api/resources/verse/verse.model';
import { runQuery, dropDb } from '../../helpers';

describe('Bible', () => {
  const input = { translation: 'EN', version: 'KJV' };
  const bookInput = { book: 'Genesis', description: 'test-book' };
  const chapterInput = { chapter: 1 };
  let bible;
  let book;
  let chapter;
  let verse;
  beforeAll(async () => {
    await dropDb();
    bible = await Bible.create(input);
    bookInput.bible = bible._id;
    book = await Book.create(bookInput);
    bible.books.push(book._id);
    bible = await bible.save();
    chapterInput.book = book._id;
    chapter = await Chapter.create(chapterInput);
    book.chapters.push(chapter._id);
    book.save();
    verse = await Verse.create({
      verse: 1,
      text: 'In the be',
      chapter: chapter._id,
    });
    chapter.verses.push(verse._id);
    chapter.save();
  });

  afterAll(async () => {
    await dropDb();
  });

  it('should get bible', async () => {
    const result = await runQuery(
      `
      {
        getBible(translation: "EN") {
          translation
          version
        }
      }
    `,
      {},
      bible,
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.getBible).toMatchObject(input);
    expect(result.data.getBible.version).toEqual(bible.version.toString());
  });

  it('Should create new bible', async () => {
    const result = await runQuery(
      `
      mutation CreateBible($input: NewBible!) {
        newBible(input: $input) {
          translation
          version
        }
      }
    `,
      { input: { translation: 'EN', version: 'NIV' } },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newBible).toMatchObject({
      translation: 'EN',
      version: 'NIV',
    });
    expect(result.data.newBible.version).toEqual('NIV');
  });

  // Testing Book Resource
  it('should get book by book ID', async () => {
    const result = await runQuery(
      `
      {
        getBooks(bible: "${bible._id}") {
          bible
          book
          description
        }
      }
    `,
      {},
      bible,
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.getBooks[0].book).toEqual(bookInput.book);
  });

  it('Should create new book', async () => {
    const result = await runQuery(
      `
      mutation CreateBook($input: NewBook!) {
        newBook(input: $input) {
          book
          description
          bible
        }
      }
    `,
      { input: bookInput },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newBook.book).toEqual(bookInput.book);
  });

  // Verse test
  it('Should create new verse', async () => {
    const verseInput = {
      verse: 1,
      text: 'In the Be',
      chapter: chapter._id,
    };
    const result = await runQuery(
      `
      mutation CreateVerse($input: NewVerse!) {
        newVerse(input: $input) {
          verse
          text
        }
      }
    `,
      { input: verseInput },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newVerse.text).toEqual(verseInput.text);
  });

  it('Should create new chapter', async () => {
    const chapteInput = {
      chapter: 1,
      description: 'In the Be',
      book: book._id,
    };
    const result = await runQuery(
      `
      mutation CreateChapter($input: NewChapter!) {
        newChapter(input: $input) {
          chapter
        }
      }
    `,
      { input: chapteInput },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newChapter.chapter).toEqual(chapteInput.chapter);
  });
});
