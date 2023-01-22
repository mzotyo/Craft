import { Observable, Subscription } from 'rxjs';
import * as ObservableAdapter from './observable';
import { createObservable as createBaseObservable } from './observable-adapter';

export function createSubscribeable<T>(
  observable: Observable<T>
): ObservableAdapter.Subscribeable<T> {
  return new ObservableRsjxAdapter<T>(observable);
}

class ObservableRsjxAdapter<T> implements ObservableAdapter.Subscribeable<T> {
  private baseObservable = createBaseObservable<T>();
  private subscription: Subscription;

  constructor(observable: Observable<T>) {
    this.subscription = observable.subscribe(
      (data: T) => this.baseObservable.update(data),
      (message: any) => this.baseObservable.error(message)
    );
  }

  subscribe(
    observer: ObservableAdapter.Observer<T>
  ): ObservableAdapter.Subscriber {
    return this.baseObservable.subscribe(observer);
  }
}
