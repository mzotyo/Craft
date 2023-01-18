import { Observable, Subscriber } from 'rxjs';
import { HotkeyEntity } from '../../../domain';
import { getAllHotkeysInteractor } from '../..';

/**
 * Prepares data for and calls GetAllHotkeys interactor
 */
interface GetAllHotkeys {
  (
    outputBoundary: (hotkeys: HotkeyEntity[]) => void,
    testData: HotkeyEntity[]
  ): void;
}

export const getAllHotkeys: GetAllHotkeys = (outputBoundary, testData) => {
  const entityGateway = getAllHotkeysEntityGateway(testData);
  const getAll = getAllHotkeysInteractor(outputBoundary, entityGateway);
  getAll();
};

/**
 * Fake GetAllHotkeys entity gateway
 */
interface GetAllHotkeysEntityGateway {
  (mockData: HotkeyEntity[]): () => Observable<HotkeyEntity[]>;
}

const getAllHotkeysEntityGateway: GetAllHotkeysEntityGateway =
  (mockData) => () =>
    new Observable((subscriber: Subscriber<HotkeyEntity[]>) => {
      subscriber.next(mockData);
    });
