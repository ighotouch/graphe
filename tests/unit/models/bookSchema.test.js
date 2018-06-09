import { Book } from '../../../graphe/api/resources/book/book.model';

describe('Book', () => {
  it('Should be invalid if title is empty', () => {
    const book = new Book({ description: 'good' });
    const validation = book.validateSync();
    expect(validation.errors.name.kind).toEqual('required');
  });

  it('Should be invalid if bible is empty', () => {
    const book = new Book({ description: 'good' });
    const validation = book.validateSync();
    expect(validation.errors.bible.kind).toEqual('required');
  });
});
