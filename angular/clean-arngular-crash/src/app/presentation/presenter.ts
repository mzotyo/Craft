import { TaskInteractorOutputBoundary } from '../usecase/task-interactor-outputboundary';
import { mapTaskEnabledToViewModel } from './mapper/map-task-to-header';
import { HeaderPresenterOutputBoundary } from './presenter-outputboundary';

export class Presenter implements TaskInteractorOutputBoundary {
  private header: HeaderPresenterOutputBoundary;

  constructor(header: HeaderPresenterOutputBoundary) {
    console.debug(`[Presenter]: constructor(${header})`);
    this.header = header;
  }

  setOuputBoundary(header: HeaderPresenterOutputBoundary) {
    console.debug(`[Presenter]: setOutputBoundary(${header})`);
    this.header = header;
  }

  updateTaskAddEnabled(enabled: boolean) {
    console.debug(`[Presenter]: updateTaskAddEnabled(${enabled})`);
    this.header.updateView(mapTaskEnabledToViewModel(enabled));
  }
}
