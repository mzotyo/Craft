# Typescript

## Install

1. install package with *node package manager*
```bash
npm i -g typescript
```

## Compile 

### Visual Studio Code
*Visual Studio Code* configuration

- Configuration for run the code: *tasks.json*
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build",
            "command": "tsc",
            "type": "shell",
            "args": ["--target", "ES5",
                    "--outDir", "js",
                    "--sourceMap", 
                    "--watch",
                    "app.ts"],
            "problemMatcher": "$tsc"
        }
    ]
}
```

- Configuration for debugging the code: *launch.json*
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug",
            "type": "node",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\app.ts",
            "sourceMaps":  true,
            "outFiles": [
                "${workspaceFolder}/js/*.js"
            ],
            "console": "internalConsole"
        }
    ]
}
```

### Typescript CLI
Compile each *typescript* file in *javascript* files separately

- helloWorldUtility.js
```typescript
namespace Utility {
    export function helloWorld() {
        console.log('Helo Wolrd');
    }
}
```

- app.js
```typescript
/// <reference path="helloWorldUtility.ts" />
Utility.helloWorld();
```

Compiling
```bash
# The app.js references a namespace from helloWorldUtility.js. It will compile both files
# separately.
tsc --target ES5 app.ts

# Running app.js will not recognize Utility namespace which was declared in another file. 
# That's because node wants to load multiple files even modules not namespaces. Compiled 
# this way will work fine for client side web appliations. We have to js files we have to 
# add two script tags. One for helloWorldUtility.js first and one for app.js and it will 
# all work great.
node app.js
```

It can be compiled into one *out.js* file
```bash
tsc --target ES5 app.ts --outFile out.js
node out.js
```

compiler options
- command line (tsc)
- Options in the IDE
- build tasks
- tsconfig.json file

Commonly used compiler options
([source](https://www.typescriptlang.org/docs/handbook/compiler-options.html))

```--module``` or ```--m```

```--moduleResolution```:  *node* and *classic*


```--target``` or ```--t```: ES6 is the default

```--watch``` or ```--w```: let you leave the compiler in watch mode

```--outDir```: specify a directory that let you receive all the compiled files

```--noImplicitAny```: the type *any* should be used expicitly

Example
```bash
tsc -t ES5 -outDir js --m commonjs --sourceMap app.ts
```

Role of **tsconfig.json**
- marks the root of the typescript project
- specifies typescript compiler options
- specifies files to include in the project

```json
{
	"compilerOptions": {
		"target": "es5",
		"outDir": "js",
		"out": "out.js",
		"module": "system",
		"sourceMap": false,
		"watch": true
	},
	"files": [
		"app.ts" 
	]
}
```

```json
{
	"compilerOptions": {
		"target": "es5",
		"outDir": "js",
		"module": "commonjs",
		"sourceMap": false
	},
	"exclude": [
		"node_modules",
		"lib"
	]
}
```

## Typescript Languge 

### Declaring variables
```typescript
function ScopeTest() {
	if(true) {
		var foo = 'use anywhere';
		let bar = 'use in this block';
		const ix = 'use in this block';
	}
}
```

Traits of variable declarations:
- Only available in the block in which it is declared
- Not *hoisted* to the top of the block
- Variable name may only be declared once per block

### Types

| | | | |	
|-|-|-|-|
|string|number|boolean|enum|
|array|any|void||

Type annotation
```typescript
let myString: string = 'this is a string';

function ReturnNumber(): number {
	return 42;
}
```

Enums
```typescript
enum Category { Biography, Poetry, Fiction }; // 0, 1, 2 
enum Category { Biography = 1, Poetry, Fiction }; // 1, 2, 3
enum Category { Biography = 5, Poetry = 8, Fiction = 9}; // 5, 8, 9

let favoriteCatgory: Category = Category.Biography;
console.log(favoriteCatgory); // 5

let categoryString = Category[favoriteCategory]; // Biography
```

Arrays
```typescript
let strArray1: string[] = ['here', 'are', 'strings'];

let strArray2: Array<string> = ['more', 'strings', 'here'];

let anyArray: any[] = [42, true, 'banana'];
```

Touples
```typescript
let myTouple: [number, string] = [25, truck];
```

### Functions
Traits of typescript functions
- Types
- Arrow functions
- Function types
- Required and optional parameters
- Default parameter
- Rest parameters
- Overloaded functions

Parameters and return types
```typescript
function CreateCustomerID(name: string, id: number): string {
	return name+id;
}
```

*Arrow functions* (or lambda functions)
```typescript
let arr = allBooks.filter(function(book) {
	return book.author === 'Herman Melville';
});

let arr = allBooks.filter(book => book.author === 'Herman Melville');
```

*Arrow function* syntax
```typescript
myBooks.forEach(() => console.log('Done reading!'));
myBooks.forEach(title => console.log(title));
myBooks.forEach((title, idx, arr) => console.log(idx + ' - ' + title));
myBooks.forEach((title, idx, arr) => {
	console.log(idx + ' - ' + title);
	// do more stuff here
});
```

Handling this in *Arrow functions*
```typescript
function Book() {
	let self = this;
	self.publishDate = 2016;
	setInterval(function() {
		console.log(self.publishDate);
	}, 1000);
}

function Book() {
	this.publishDate = 2016;
	setInterval(function() {
		console.log(this.publishDate);
	}, 1000);
}
```

Function types
- Combination of parameters and return type
- Variables may be declared with function types
```typescript
function PublicationMessage(year: number): string {
	return 'Date published: ' + year;
}
let publishFunc: (someYear: number) => string;
```

- Function assigned must have the same signature as the variable  type
```typescript
publishFunc = PublicationMessage;
let message: string = publishFunc(2016);
```

Optional and default parameters
- all parameters are required
- must appear after all required  parameters
```typescript
function CreateCustomer(name: string, age?: number) {}
```
- default parameters let you specify a default value to be used for optional parameters or required parameters when the caller passes undefined
```typescript
function GetBookByTitle(title: string = 'The C progrma language');
```

Rest parameters
```typescript
function GetBooksReadForCust(name: string, ...bookIDs: number[]) {}

let books = GetBooksReadForCust('Leigh', 2, 5);

let books = GetBooksReadForCust('Leigh', 2, 5, 12, 24);
```

Implementation of *Function overload*
```typescript
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any): string[] {
	if(typeof bookProperty == 'string') {
		// get books by author, add to foundTitles
	} else if (typeof bookProperty == 'boolean') {
		// get books by availability, add to foundTitles
	}
	return foundTitles;
}
```

### Interfaces
- Contracts that define types
- Compiler forces the contract via typechecking
- Collection of property and method definintions
- Duck typing:  as long as the object has the shape of an expected type then it can be used as if it were that type

Duck Typing
```typescript
interface Duck {
	walk: () => void;
	swim: () => void;
	quack: () => void;
}

let probablyADuck = {
	walk: () => console.log('walking like a duck');
	swim: () => console.log('swimming like a duck');
	quack: () => console.log('quacking like a duck');
}

function FlyOverWater(bird: Duck) {}

FlyOverWater(probablyADuck); // Works !!!
```

Defining an interface
- *interface* keyword
- list of properties with their types
- optional properties denoted with "?"
- provide function signatures - no implementations

```typescript
	interface Book {
		id: number;
		title: string;
		author: string; 
		pages?: string;

		markDamage: (reason: string) => void;
	}
```

Interfaces for function types
```typescript
function CreateCustomerID(name: string, id: number): string {
	return name + id;
}

interface StringGenerator {
	(chars: string, nums: number) => string;
}

// let IdGenerator: (chars: string, nums: number) => string;
let IdGenerator: StringGenerator = CreateCustomerID;
```

Extending interfaces
```typescript
interface LibraryResource {
	catalogNumber: number;
}

interface Book {
	title: string;
}

interface Encyclopedia extends LibraryResource, Book {
	volume: number;
}

let refBook: Encyclopedia = {
	catalogNumber: 1234,
	title: 'The Book of Everything',
	volume: 1
}
```

### Class types
```typescript
interface Librarian {
	doWork: () => void;
}

class ElementaryScoolLibrarian implements Librarian {
	doWork() {
		console.log('Reading to and teaching children ...');
	}
}

let kidsLibrarian: Librarian = new ElementaryScoolLibrarian();
kidsLibrarian.doWork();
```

Properties and methods
```typescript
class ReferenceItem {
	numberOfProperties: number;
	
	get editor(): string {
		// custom getter logic goes here, should return a value
	}
	
	set editor(newEditor: string) {
		// custom setter logic goes here
	}
	
	printChapterTitle(chapterNum: number): void {
		// print title here
	}
}
``` 

Parameter properties
```typescript
class Author {
	name: string;
	constructor(authorName: string) {
		name = authorName;
	}
}

class Author {
	constructor(public name: string) {
	}
}
```

Static properties
```typescript
class Library {
	constructor(public name: string) { }
	static description: string = 'A source of knowledge.';
}

let lib = new Library('New York Public Library');
let name = lib.name; // available on instance of the class
let desc = Library.description; // available on the class
```

Access modifiers
- *public*: per default all access modifiers re *public*
- *private*: not available from out side and subclasses
- *protected*: not available from outside but they are available from subclasses

Inheritance
```typescript
class ReferenceItem {
	title: string;
	printItem(): void {
		// print something here
	}
}

class Jurnal extends ReferenceItem {
	constructor() {
		super();
	}
	contribuitors: string[];
}
```

Abstract classes
```typescript
abstract class ReferenceItem {
    private _publisher: string;
    
    constructor(public title: string, private year: number) {
        console.log('Creating a new reference item ....');
    }

    printItem(): void {
        console.log(this.title + ' was published in ' + this.year);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
	
	abstract printCitation(): void;
}
```

Class expressions
```typescript
let Newspaper = class extends ReferenceItem {
	printCitation(): void {
		// print citation
	}
}

let myPaper = new Newspaper('The Gazette', 20161);
myPaper.printCitation();

class Novel extends class {title: string} {
	mainCharacter: string;
}
```

## Modules and Namespaces
Modules vs. Typescript

|Modules|Namespaces|
|-|-|
|Tool for organizeing code|Tool for organizeing code|
|Native support in node.js|No special loader required|
|Browser supported with module loader|Prevent global namespace pollution|
|Supports ES2015 module syntax|Best for smaller client applications|
|Facilitate code reuse||
|Modules are the future||

Defining Namespaces
```typescript
namespace Membership {
	export function AddMember(name: string) {
		// add new member
	}
	
	export namespace Cards {
		export function IssueCard(memberNumber: number) {
			// issue new card
		}
	}
}
```
```typescript
/// <reference path="membership.ts" />

import cards = Membership.Cards; // alias for namespace

let memberName: string = 'Elaine';
let memberNumber: number = 789;

Membership.AddMember(memberName);
Membership.Cards.IssueCard(memberNumber);

cards.IssueCard(memberName);
```

Reasons to use modules
- They are modular
- Maintainable
- Reusable
- Native to Node and ES2015
- Organized simply in files and folders

Supported Module Formats
- CommonJS: *node* uses the *CommonJS* format
- Asynchronous Module Definition (AMD): popular module format for browser apps
- Universal Module Definition (UMD): combines the *CommonJS* and the *AMD* format
- System: Supportsthe *CommonJS* and the *AMD* format also defines its own custom format
- ES2015: its own module format

Module Loaders
>Writing modules in typescript actually we're using the ES2015 format
- Node has a built in module loader understands the *CommonJS* format, and how to retrieve all the necessary dependecies when running code written in, or compile to that format.
- in 2016 browser do not provide that capability natively
- there are a couple of good libraries that give the capability to load and use modules in browser apps
  - *Require.js*: supports the *AMD* format 
  - *SystemJS*: another popular client side module: it supports *AMD*, *CommonJS*, *ES2015* and its own *System* format
  
Exporting from a Module
```typescript
// Export declarations
export interface Periodical {
	issueNumber: number;
}

export class Magazine implements Periodical {
	issueNumber: number;
}

export function GetMagazineByIssueNumbers(issue: number): Magazine {
	// retrive and return a magazine
}
```

```typescript
// Export statement
interface Periodical {
	issueNumber: number;
}

class Magazine implements Periodical {
	issueNumber: number;
}

function GetMagazineByIssueNumbers(issue: number): Magazine {
	// retrive and return a magazine
}

export { Periodical, Magazine, GetMagazineByIssueNumbers as GetMag }
```

Importing from Module
```typescript
import {Magazine, GetMag as GetMagazine} from './priodicals';
let newsMag: Magazine = GetMagazine('Weekly News');

import * as mag from './periodicals';
let kidMag: mag.Magazine = mag.GetMagazine('Games and stuff!');
```

Default export
- Giving a name to the default export is optional aince the importing module doesn't need to know its name
```typescript
export default class {
	title: string;
	directory: string;
}
```
```typescript
import AnimatedMovie from './movie';
```

### Generics
- Code thar works with multiple types
- Accept *type parameter* for each instance or invocation
- Apply to functions, interfaces and classes

Generic functions
```typescript
function LogAndReturn<T>(thing: T): T {
	console.log(thing);
	return thing;
}

let someString: string = LogAndReturn<string>('log this');
```

Generic interfaces
```typescript
interface Inventory<T> {
	getNewestItem: () => T;
	addItem: (newItem: T) => void;
	getAllItems: () => Array<T>;
}

let bookInventory: Invetory<Book>;
```

Generic classes
```typescript
class Catalog<T> implements Inventory<T> {
	private catalogItems = new Array<T>();
	addItem(newItem: T) {
		this.catalogItems.push(newItem);
	}
	// implement other interface methods here
}
let bookCatalog = new Catalog<Book>();
```

Generic constraints
- Describe types that may be passed as a generic parameter
- *extends* keyword applies constraint
- Only types satisfy the constraint mey be used

```typescript
interface CatalogItem {
	catalogNumber: number;
}

class Catalog<T extends CatalogItem> implements Inventory<T> {
	// implementat interface methods here
}
```


### Type definition
Type definition files
- files with type information for a library
- contain no implementation details
- primarily used as a typescript wrappers for javascript libraries
- designe-time for type-checking and editor support
- file names end with **.d.ts**

Type definition sources
- in alot of times the type definition files are developed independently from the library itself

|Sources|
|:-:|
|Typings Type Definition Manager (multiple sources)|
|DefinitelyTyped|
|npm packages|
|Write your own!|

Ambient module
- Created with the *declare* keyword
- Don't define an implementation

```typescript
// cardCatalog.d.ts
declare module "CardCatalog" {
	export function printCard(callNumber: string): void;
}

// app.ts
/// <reference path="cardCatalog.d.ts" />
import * as catalog from "CardCatalog";
```

Definietly Typed
- Huge repository of type definitions
- All definitions in a single Github repo
- Download several ways
  - Direct downoad from Github repo
  - Nuget (Visual Studio package)
  - tsd: type definition manager 
  - typings: type definition manager working with mutiple sources
  
#### Download from github
1. Create a library manager project with a package.json file to hold reference to all of the installed  npm packages
```bash
# Create a library manager project with a package.json file to hold reference to all of the installed  npm packages 
npm init -f
```
 
2. Download the *javascript* library
```bash
# Install the java script library 'lodash'
npm i --save lodash
```

3. Download the TypeDefinition file: *lodash.d.ts* and put it into your project: 
[github](https://github.com/DefinitelyTyped/DefinitelyTyped)
 
4. Import what you need from it
```javascript
/// <reference path="lodash.d.ts" />
import * as _ from "lodash";
// from_whom_the_bell_toll
_.snackeCase('From Whom The Bell Toll'); 
```

#### Download with tsd
**this method did not worked for me**
- is a command line tool which helps you find and download *type definitions* files
- uses *DefinietlyTyped* exclusively
- manages reference to installed definitions
- stores *tripple-slash* references in a single file
- but *tsd* has been deprecated

[tsd](https://definitelytyped.org/)
```bash
# install tsd command line tool
npm i -g tsd

# install type definition for 'lodash' javascript library
tsd i --save lodash
``` 

#### Download with typings
**this method worked for me**
- is a command line tool which helps you find and download *type definitions* files
- it can install files from mutiple sources
- manages reference to installed definitions
- stores *tripple-slash* references in a single file
- but it's new and not widely adopted (2016)

[typings](https://github.com/typings/typings)
```bash
# install typings CLI utility
npm i -g typings

# install type definition for 'lodash' javascript library
typings install lodash --ambient --save
```