// ----------------------------------------------------------------------------
// A function is a standalone thing
export const add = (x: number, y: number) => x + y;

// ----------------------------------------------------------------------------
// If functions are things they can be used as inputs and outputs.

// Example of a function that returns a function
export const add2 = (x: number) => (y: number) => x + y;

// Example of function as an input parameter
export const add3 = (incrementByX: (x: number) => number) => incrementByX(3);

// Function that takes a number as an input a number as an output paramater and
// a function as an extra parameter. Functional version of the Strategy pattern.
export const add4 = (x: number, incrementByY: (y: number) => number) =>
  incrementByY(x);

// ----------------------------------------------------------------------------
// Function composition

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
export const appleToCherry: Function = compose(bananaToCherry, appleToBanana);

// ----------------------------------------------------------------------------
// Type composition
type Apple = string;
type Banana = string;
type Cherry = string;

// And type
type FrutiSalad = {
  a: Apple;
  b: Banana;
  c: Cherry;
};

// Or type
type Snack = Apple | Banana | Cherry;

// ----------------------------------------------------------------------------
// Parameterize all the things
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

type Action = (n?: number) => string;

// Completly generic array iteration
let printList3 = (action: Action, array: Array) => {
  for (let i = 0; i < array.length; i++) {
    action(i);
  }
};

// ----------------------------------------------------------------------------
// Functions as interfaces
interface Function2 {
  (x: string): string;
}

export function firstChar(x: string): string {
  return x.charAt(0);
}

export function process(f: Function2): string {
  return f("text");
}

// ----------------------------------------------------------------------------
// Strategy pattern
interface Incrementor {
  (x: number): number;
}

export const add6: Incrementor = (x: number) => x + 6;

export function add5(x: number): number {
  return x + 5;
}

export function evaluate(x: number, incrementor: Incrementor): number {
  return incrementor(x);
}

// ----------------------------------------------------------------------------
// Decorator pattern

interface TextGenerator {
  (): string;
}

export function getText(): string {
  return "Hello";
}

export function prefix(f: TextGenerator): TextGenerator {
  return function (): string {
    return "- " + f();
  };
}

export const postfix = (f: TextGenerator) => () => f() + "Bello";

// ----------------------------------------------------------------------------
// Every function can be turned into a single paramater Function
function multiply(x: number, y: number): number {
  return x * y;
}

export function multiplyBy(x: number): (y: number) => number {
  return function (y: number): number {
    return x * y;
  };
}

const multiply3 = multiplyBy(3);
console.log("3x2 =", multiply3(2));

// ----------------------------------------------------------------------------
// The Hollywood principle: Continuations

// The method decided to throw an exception
function Divide(top: number, bottom: number): number {
  if (bottom == 0) {
    throw "invalid operation";
  } else {
    return top / bottom;
  }
}

// Let the caller decide what happens.
// The problem with this is that now we have four parameters.
function DivideCallerDecides(
  top: number,
  bottom: number,
  ifZero: Action,
  ifSuccess: Action
): void {
  if (bottom == 0) {
    ifZero(); // What happens next
  } else {
    ifSuccess(top / bottom); // What happens next
  }
}

const ifZero = (): string => {
  console.log("invalid operation");
  return "invalid operation";
};

const ifSuccess = (result?: number): string => {
  console.log("result:", result);
  return "result: " + result;
};

// We backend in the two action parameters
export function DivideInjectCallerActions(ifZero: Action, ifSuccess: Action) {
  return function (top: number, bottom: number): void {
    if (bottom == 0) {
      ifZero();
    } else {
      ifSuccess(top / bottom);
    }
  };
}

const divide = DivideInjectCallerActions(ifZero, ifSuccess);

console.log("6 / 3 =", divide(6, 3));
console.log("6 / 0", divide(6, 0));

// ----------------------------------------------------------------------------
// Chaining callbacks with Continuations and the piramid of doom
type DoSomethingAction = (input: string) => string;

export function ifSomethingDo(f: DoSomethingAction, input?: string): string | undefined {
  if (input) {
    return f(input);
  }
  return undefined;
}

function doSomething(input: string) {
  return input + " doSomething";
}

function doSomethingElse(input: string) {
  return input + " doSomethingElse";
}

function doAThirdThing(input: string) {
  return input + " doAThirdThing";
}

let result: string | undefined = "hello";
result = ifSomethingDo(doSomething, result);
result = ifSomethingDo(doSomethingElse, result);
result = ifSomethingDo(doAThirdThing, result);
