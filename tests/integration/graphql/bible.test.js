import { Bible } from '../../../graphe/api/resources/bible/bible.model';
import { Book } from '../../../graphe/api/resources/book/book.model';
import { Chapter } from '../../../graphe/api/resources/chapter/chapter.model';
import { runQuery, dropDb } from '../../helpers';

describe('Bible', () => {
  const input = { translation: 'EN', version: 'KJV' };
  const bookInput = { title: 'Genesis', description: 'test-book' };
  const chapterInput = { number: 1 };
  let bible;
  let book;
  let chapter;
  beforeAll(async () => {
    await dropDb();
    bible = await Bible.create(input);
    bookInput.bible = bible._id;

    bible.books.push({ name: 'genesis', description: 'test' });
    bible.save();
    book = await Book.create(bookInput);
    bible.books.push(book._id);
    book = await bible.save();
    chapterInput.book = book._id;
    chapter = await Chapter.create(chapterInput);
  });

  afterAll(async () => {
    // await dropDb();
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
      { input },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newBible).toMatchObject(input);
    expect(result.data.newBible.version).toEqual(bible.version);
  });

  // Testing Book Resource
  it('should get book by book ID', async () => {
    const result = await runQuery(
      `
      {
        getBooks(bible: "${bible._id}") {
          bible
          title
          description
        }
      }
    `,
      {},
      bible,
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.getBooks[0].title).toEqual(bookInput.title);
  });

  it('Should create new book', async () => {
    const result = await runQuery(
      `
      mutation CreateBook($input: NewBook!) {
        newBook(input: $input) {
          title
          description
          bible
        }
      }
    `,
      { input: bookInput },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newBook.title).toEqual(bookInput.title);
  });

  // Verse test
  it('Should create new verse', async () => {
    const verseInput = {
      number: 1,
      text: 'In the Be',
      chapter: chapter._id,
    };
    const result = await runQuery(
      `
      mutation CreateVerse($input: NewVerse!) {
        newVerse(input: $input) {
          number
          text
          chapter {
            number
          }
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
      number: 1,
      description: 'In the Be',
      book: book._id,
    };
    const result = await runQuery(
      `
      mutation CreateChapter($input: NewChapter!) {
        newChapter(input: $input) {
          number
        }
      }
    `,
      { input: chapteInput },
      {},
    );

    expect(result.errors).not.toBeDefined();
    expect(result.data.newChapter.number).toEqual(chapteInput.number);
  });
});
