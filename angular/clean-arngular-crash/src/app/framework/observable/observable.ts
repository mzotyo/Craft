export interface Subscriber {
  unsubscribe(): void;
}

export interface Subscribeable<T> {
  subscribe(observer: Observer<T>): Subscriber;
}

export interface Observer<T> {
  update(data: T): void;
  error(message: any): void;
}

export interface Observable<T> extends Subscribeable<T> {
  subscribe(observer: Observer<T>): Subscriber;
  update(data: T): void;
  error(message: any): void;
}
