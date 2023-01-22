import { Observable, Subscription } from 'rxjs';
import * as ObservableFramework from 'src/app/base/framework/observable/observable';
import { createObservable as createBaseObservable } from 'src/app/base/framework/observable/observable-adapter';

export function createSubscribeable<T>(
  observable: Observable<T>
): ObservableFramework.Subscribeable<T> {
  return new ObservableRsjxAdapter<T>(observable);
}

class ObservableRsjxAdapter<T> implements ObservableFramework.Subscribeable<T> {
  private baseObservable = createBaseObservable<T>();
  private subscription: Subscription;

  constructor(observable: Observable<T>) {
    this.subscription = observable.subscribe(
      (data: T) => this.baseObservable.update(data),
      (message: any) => this.baseObservable.error(message)
    );
  }

  subscribe(
    observer: ObservableFramework.Observer<T>
  ): ObservableFramework.Subscriber {
    return this.baseObservable.subscribe(observer);
  }
}
