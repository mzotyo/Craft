import { Observable as ObservableFramework, Subject, Subscription } from 'rxjs';

export interface Observer<T> {
  (data: T): void;
}

export interface Subscriber {
  unsubscribe(): void;
}

export interface Observable<T> {
  subscribe(observer: Observer<T>): Subscriber;
  update(data: T): void;
}

export class Observable<T> {
  static create<T>(): Observable<T> {
    return new ObservableAdapter<T>();
  }
}

export class ObservableAdapter<T> implements Observable<T> {
  private subject: Subject<T> = new Subject();

  subscribe(observer: Observer<T>): Subscriber {
    console.debug('[ObservableAdapter]: subscribe()');

    return new SubscriberImplementation(
      this.subject.asObservable().subscribe(observer)
    );
  }

  update(data: T) {
    console.debug(`[ObservableAdapter]: update(${data})`);
    this.subject.next(data);
  }
}

class SubscriberImplementation implements Subscriber {
  subscription: Subscription;

  constructor(subscription: Subscription) {
    this.subscription = subscription;
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
