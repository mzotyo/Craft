import { Observable } from 'rxjs';
import { HotkeyEntity } from '../../domain';
import { getAllHotkeys } from './api';
import { getAllHotkeysTestData } from './testdata';

describe('The getAllHotkeys intercator', () => {
  it('calls the output port with the list of HotkeyEntity provided by entity gateway', () => {
    const output = jasmine.createSpy();

    getAllHotkeys(output, getAllHotkeysTestData);

    expect(output).toHaveBeenCalledWith(getAllHotkeysTestData);
  });
});
