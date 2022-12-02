Matix bejárás


Adott

1. egy `Matrix` típus

```typescript
type Matrix<T> = T[][];
```

2. és egy matrix bejárási algoritmus

```typescript
type ProcessElement<T> = (element: T) => void;
type Strategy = (matrix: Matrix<number>, execute: ProcessElement<number>) => void;

const strategy: Strategy = (matrixt, execute) => {
    ...
}
```

```typescript
type RequestModel<T> = {
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
	forEach: (
		callbackfn: (value: T, index: number, array: T[]) => void,
		thisArg?: any
	) => void;
};

const client: RequestBoundary => (request: RequestModel) => {
    request.forEach((value) => console.log(value))
}
```
