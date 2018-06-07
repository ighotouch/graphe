import { Bible } from '../../../graphe/api/resources/bible/bible.model';

describe('Bible', () => {
  it('Should be invalid if translation is empty', () => {
    const bible = new Bible({ description: 'good' });
    const validation = bible.validateSync();
    expect(validation.errors.translation.kind).toEqual('required');
  });

  it('Should be invalid if version is empty', () => {
    const bible = new Bible({ description: 'good' });
    const validation = bible.validateSync();
    expect(validation.errors.version.kind).toEqual('required');
  });
});
