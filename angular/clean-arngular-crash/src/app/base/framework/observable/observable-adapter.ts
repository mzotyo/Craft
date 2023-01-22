import { Subscriber, Subscribeable, Observer, Observable } from './observable';

export function createObservable<T>(): Observable<T> {
  return new ObservableImplementation<T>();
}

class ObservableImplementation<T> implements Observable<T> {
  private subscribers = new Set<Observer<T>>();

  subscribe(observer: Observer<T>): Subscriber {
    this.subscribers.add(observer);
    return new SubscriberImplementation<T>(() =>
      this.subscribers.delete(observer)
    );
  }

  update(data: T) {
    this.subscribers.forEach((subscriber) => subscriber.update(data));
  }

  error(message: any): void {
    this.subscribers.forEach((subscriber) => subscriber.error(message));
  }
}

class SubscriberImplementation<T> implements Subscriber {
  constructor(public unsubscribe: () => void) {}
}
