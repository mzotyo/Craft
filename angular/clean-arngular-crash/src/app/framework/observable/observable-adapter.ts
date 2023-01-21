import * as rxjs from 'rxjs';
import { Observable, Observer, Subscriber, Updateable } from './observable';

export function createObservable<T>(): Observable<T> & {
  getUpdateable(): Updateable<T>;
} {
  return new ObservableImplementation();
}

class ObservableImplementation<T> implements Observable<T> {
  private observable: rxjs.Observable<T>;
  private updatable: Updateable<T>;

  constructor() {
    const subject = new rxjs.Subject<T>();
    this.observable = subject.asObservable();
    this.updatable = new UpdatableImplementation(subject);
  }

  subscribe(observer: Observer<T>): Subscriber {
    return new SubscriberImplementation(this.observable.subscribe(observer));
  }

  getUpdateable(): Updateable<T> {
    return this.updatable;
  }
}

class UpdatableImplementation<T> implements Updateable<T> {
  subject: rxjs.Subject<T>;

  constructor(subject: rxjs.Subject<T>) {
    this.subject = subject;
  }

  update(data: T): void {
    this.subject.next(data);
  }
}

class SubscriberImplementation implements Subscriber {
  subscription: rxjs.Subscription;

  constructor(subscription: rxjs.Subscription) {
    this.subscription = subscription;
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
