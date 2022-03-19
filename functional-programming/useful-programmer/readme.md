# Functional programming

[youtube - Useful Programmer - Functional Programming](https://youtube.com/playlist?list=PL3vpzVxKa3Pi7HqXYv0B_iudp1V6aeC1O)

## Create javascript project

### Install

```shell
# Initialize package.json
> npm init --yes

# Install typescript dependency
> sudo npm install -g typescript

# Initialize tsconfig.json
> tsc --init

# Install jest, ts-jest, @types/jest dependencies
> npm install --save-dev jest ts-jest @types/jest

# Set ts-jest as a preprocessor. The jest.config.js will be created.
npx ts-jest config:init
```

### Configure

tsconfig.json

```json
"outDir": "./out"
```

package.json

```json
"build": "tsc"
"test": "jest"
```

## Introduction

Functional programming is an approach to software development based around the 
evaluation of functions. Like mathematics, functions in programming map input
to output to produce a result. You can combine basic functions in many ways to
build more and more complex programs.

Functional programming follows a few core principles:

- Functions are independent from the state of the program or global variables.
  They only depend on the arguments passed into them to make a calculation.
- Functions try to limit any changes to the state of the program and avoid 
  changes to the global objects holding data.
- Functions have minimal side effect in the program.

Functional programming is a style of programming where solutions are simple, 
isolated functions without any side effects outside of the function scope.

```
INPUT --> PROCESS --> OUTPUT
```

Functional programming is about:

- Isolated functions: there is no dependence on the stat of program, which 
includes global variables that are subject to change.
- Pure functions: the same input always gives the same output.
- Functions with limited side effects: any changes, or mutations, to the 
state of the program outside the function are carefully controlled.

example-001.ts
```typescript
const prepareTea = (): string => "greenTea";

export const getTea = (numOfCups: number): string[] => {
  const teaCups: string[] = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};
```
## Understanding the hazards of using imperative code

Functional programming is a good habit. It keeps your code easy to manage, and 
saves you from sneaky bugs. But befor we get there, let's look at an imperative
approach to programming to highlight where you may have issues.

In English (and many other languages), the immperative tense is used to give 
commands. Similarly, an impertive style in programming is one that gives the
computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global
variables. A classic example is writing a `for` loop that gives exact 
directions to iterate over the indices of an array.

In contrast functional programming is a form of declarative programming. You
tell the computer what you want done by calling a method or functions.

Javascript offers many predefined methods that handle common tasks so you don't
need to write out how the computer should perform them. For example, instead of
using the `for` loop mentioned above, you coud call the `map` method which 
handles the details of iterationg over an array. This helps to avoid semantic 
errors like "Off by on errors" that were covered in the Debugging section.

Consider the scenario: you are bworsing the web in your browser, and wnat to 
track the tabs you have opened. Let's try to model this using some simple
object-oriented code.

A `BrowserWindow` object is made up of tabs, and you usually have more than one 
window open. The title of each opened site in each Window object is held 
in an array. After working in the browser (opening new tabs, merging `windows,
and closing tabs), you want to print the tabs that are still open. Closed tabs
are removed from the array and new tabs (for simplicity) get added at the end
of it.

```typescript
// Example of imperative coding style

// The tabs is an array of titles of each site open within the window
export class BrowserWindow {
  public tabs: string[];

  public constructor(tabs: string[]) {
    this.tabs = tabs; // We keep a record of the array inside the object
  }

  // When you join two windows into one window
  public join(otherWindow: BrowserWindow): BrowserWindow {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  }

  // When you open a new tab at the end
  public tabOpen(): BrowserWindow {
    this.tabs.push("new tab"); // Let's open a new tab for now
    return this;
  }

  // When you close tab
  public tabClose(index: number): BrowserWindow {
    // Only change code under this line
    var tabsBeforeIndex = this.tabs.splice(0, index);   // Get the tabs before the index
    var tabsAfterIndex = this.tabs.splice(index + 1);   // Get the tabs after the index
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    // Only change code above this line
    return this;
  }
}

var workWindow = new BrowserWindow([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]);
var socialWindow = new BrowserWindow([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]);
var videoWindow = new BrowserWindow(["Netflix", "Youtube", "Vimeo", "Vine"]);

var finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);
```
