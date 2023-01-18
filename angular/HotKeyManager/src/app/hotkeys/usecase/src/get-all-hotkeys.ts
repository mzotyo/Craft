import { Observable } from 'rxjs';
import { HotkeyEntity } from '../../domain';

interface InputBoundary {
  (): void;
}

interface OutputBoundary<T> {
  (hotkeys: T[]): void;
}

interface GetAllHotkeysEntityGateway<T> {
  (): Observable<T[]>;
}

interface GetAllHotkeysInteractor<T> {
  (
    output: OutputBoundary<T>,
    getAll: GetAllHotkeysEntityGateway<T>
  ): InputBoundary;
}

export const getAllHotkeysInteractor: GetAllHotkeysInteractor<HotkeyEntity> =
  (output, getAll) => () => {
    getAll().subscribe((hotkeys) => output(hotkeys));
  };
