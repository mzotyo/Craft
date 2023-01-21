import * as rxjs from 'rxjs';
import { Observable, Observer, Subscriber, Updateable } from './observable';

export function createObservable<T>(): Observable<T> & {
  getUpdateable(): Updateable<T>;
} {
  console.debug(`[observable-adapter]: createObservable()`);
  return new ObservableImplementation();
}

class ObservableImplementation<T> implements Observable<T> {
  private observable: rxjs.Observable<T>;
  private updatable: Updateable<T>;

  constructor() {
    console.debug(`[ObservableImplementation]: constructor()`);
    const subject = new rxjs.Subject<T>();
    this.observable = subject.asObservable();
    this.updatable = new UpdatableImplementation(subject);
  }

  subscribe(observer: Observer<T>): Subscriber {
    console.debug('[ObservableImplementation]: subscribe()');
    return new SubscriberImplementation(this.observable.subscribe(observer));
  }

  getUpdateable(): Updateable<T> {
    console.debug(`[ObservableImplementation]: getUpdatable()`);
    return this.updatable;
  }
}

class UpdatableImplementation<T> implements Updateable<T> {
  subject: rxjs.Subject<T>;

  constructor(subject: rxjs.Subject<T>) {
    console.debug(`[UpdatableImplementation]: constructor()`);
    this.subject = subject;
  }

  update(data: T): void {
    console.debug(`[UpdatableImplementation]: update(${data})`);
    this.subject.next(data);
  }
}

class SubscriberImplementation implements Subscriber {
  subscription: rxjs.Subscription;

  constructor(subscription: rxjs.Subscription) {
    console.debug(`[SubscriberImplementation]: constructor()`);
    this.subscription = subscription;
  }

  unsubscribe() {
    console.debug(`[SubscriberImplementation]: unsubscribe()`);
    this.subscription.unsubscribe();
  }
}
