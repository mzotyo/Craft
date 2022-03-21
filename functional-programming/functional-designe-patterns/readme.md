# Functional Design Patterns

_Scott Wlaschin - [Youtube](https://youtu.be/srQt1NAHYC0)_

## Table of Contents

- Core Principles of FP design
  - Functions, types, compositions
- Functions as parameters
  - Functions as interfaces
  - Partial applications & dependency injections
  - Continuations, chaining & the pyramid of doom
- Monads
  - Error handling, async
  - Dealing with wrapped data
  - Functors
- Monoids
  - Aggregating data and operations

## Core Principles of Functional Programming

### Functions are things

A function is a standalone thing, not attached to a class.

```typescript
const add = (x: number, y: number) => x + y;
```

If functions are things they can be used as inputs and outputs.

```typescript
// Add is a function that returns a function
const add = (x: number) => (y: number) => x + y;

// Example of function as an input parameter
const add3 = (incrementByX: (x: number) => number) => incrementByX(3);

// Function that takes a number as an input a number as an output paramater and
// a function as an extra parameter. Functional version of the Strategy pattern.
const add4 = (x: number, incrementByY: (y: number) => number) =>
  incrementByY(x);
```

> Functional version of the **strategy pattern**.

```typescript
const context = (i: number, strategy: (s: number) => number) => strategy(i);
```

> A very complex system can be built from this simple fundation!

### Function composition

```typescript
// Defining a function
type Function = (x: string) => string;

// Composes two methods by passing the result of the second function into the firt one.
const compose =
  (f1: Function, f2: Function): Function =>
  (x) =>
    f1(f2(x));

// Converts an appla into banana
const appleToBanana: Function = (x: string) => (x === "apple" ? "banana" : x);

// Convert a banana into cherry
const bananaToCherry: Function = (x: string) => (x === "banana" ? "cherry" : x);

// Composed method which converts an applet into cherry
const appleToCherry: Function = compose(bananaToCherry, appleToBanana);

console.log(appleToCherry("apple")); // cherry
```

> Can't tell it was built from smaller functions.

> Where did the banana go? It's called **encapsulation**.

#### Designing with composition: Functions all th way down.

```
Low level opertion + ... + Low level operation -> Service

Service + ... + Service -> Use Case

Use Case + ... + Use Case -> Web Application
```

### Types are not classes

The type is just a set of name for a set of things that can be used as inputs and outputs.

#### Composition everywhere: Types can be composed too

(Composable Type System)

```typescript
type Apple = string;
type Banana = string;
type Cherry = string;

// AND type
type FrutiSalad = {
  a: Apple;
  b: Banana;
  c: Cherry;
};

// OR type
type Snack = Apple | Banana | Cherry;
```

## Designing Principles

### Strive for totality

Input parameters and output parameters should have the set of types what the
function can handle. Don't accept an input if you can not handle it.

- Put a constraint on the input.
- Extend the output.

### Use static types for domain modelling and documentation

Static typing help modelling the domain and documenting it at the same time.

## Functions as Parameters

### Parameterize all the things

```typescript
let printList = () => {
  // The numbers 1 to 10 are hardcoded
  for (let i = 1; i < 10; i++) {
    console.log("the number is:", i);
  }
};

type Array = any[];

let printList2 = (array: Array) => {
  for (let i = 0; i < array.length; i++) {
    // The behavior is hardcoded too
    console.log("the number is:", i);
  }
};

type Action = (n: number) => string;

// Completly generic array iteration
let printList3 = (action: Action, array: Array) => {
  for (let i = 0; i < array.length; i++) {
    action(i);
  }
};
```

### Functions as interfaces

```typescript
interface Function {
  (s: string): string;
}

export function firstChar(s: string): string {
  return s.charAt(0);
}

let function: Function = firstChar;

function process(f: Function, t: string) {
  return f(t);
}

console.log(process(firstChar, 'text'));
```

If we take the _Single Responsability Principle_ and _Interface Segragation
Principle_ to the extreme then every interface should have only one method.
But this interface is just a function type. Iterfaces with identical
signatures are compatible with each other.

#### Strategy pattern

```typescript
interface Strategy {
  (input: Input): Output;
}

function strategy(input: Input): Output {
  return ...
}

function context(input: Input, strategy: Strategy) {
  return strategy(input);
}

const input: Input = ...;
context(strategy, input);
```

With functional programming you don't need to create an f(Input) => Output
interface in advance.

### Decorator pattern

using function parameter

```typescript
interface Function {
  (input: Input): Output;
}

function baseFunction(input: Input): Output {
  return ...;
}

interface Decorator {
  (baseFunction: Function): Function;
}

function decorator(baseFunction: Function): Function {
  return function(input: Input): Output {
    ...
    baseFunction(input);
    return ...;
  }
}
```

Decorator pattern is actually a function composition.

Composition patterns only work for functions that have one parameter!


