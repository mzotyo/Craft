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

type Action = (n: number) => string;

// Completly generic array iteration
let printList3 = (action: Action, array: Array) => {
  for (let i = 0; i < array.length; i++) {
    action(i);
  }
};
