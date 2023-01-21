export interface Observable<T> {
  subscribe(observer: Observer<T>): Subscriber;
}

export interface Observer<T> {
  (data: T): void;
}

export interface Subscriber {
  unsubscribe(): void;
}

export interface Updateable<T> {
  update(data: T): void;
}
