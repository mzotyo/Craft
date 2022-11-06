export type ResponseModel<T> = T;

export type ResponseBoundary<T> = (value: ResponseModel<T>) => void;
