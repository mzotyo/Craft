import {
  Observable,
  Subscriber,
} from 'src/app/framework/observable/observable-adapter';

export type HeaderVM = {
  title: string;
  addButton: {
    color: string;
    label: string;
  };
};

export interface HeaderPresenterOutput {
  updateView: (viewModel: HeaderVM) => void;
}

export class HeaderPresenter {
  public observable = Observable.create<HeaderVM>();

  subscribe(observer: HeaderPresenterOutput): Subscriber {
    console.debug('[HeaderPresenter]: subscribe()');
    return this.observable.subscribe(observer.updateView);
  }

  // Interactoor output boundary interface
  update() {
    console.debug('Header presenter: update');
    this.observable.update({
      title: 'Updated title',
      addButton: {
        color: 'red',
        label: 'close',
      },
    });
  }
}
