# Functional Programming

## Concepts

### Pure function

There are three criteria which have to be satisfied with the function to be pure:

- It should not be capable of doing any **side effects**, or in other words,
  the external mutable state can not be modified.
- The result of its work has to be represented by the return value.
- The same combination of input arguments should always produce the same result.

### Function composition

Due to outlined qualities, pure functions can be combined via a **composition**.
Two methods are composed `f1( f2( x ) )` if the result of the `f2` method is passed
as input into the `f1` method. 

It is also possible to extract function composition in a separate stage by 
defining a function which will compose two functions in a following way:

```typescript
function compose<A, B, C>(f1: (value: A) => B, f2: (value: B) => C): (value: A) => C {
    return value => f2( f1( value ) );
}
```

Therefore the order of execution is not expressed in functional programming.

```typescript
const initialValue: A = ...;

function f1(value: A): B {
  return ...
}

function f2(value: B): C {
  return ...
}

// We don't know whether the f1 will be evaluated first or the f2. It depends
// on the implementation of the compose method which can be changed after wards
// in regard to optimize for performance for instance.
const result: C = compose(f1, f2)(initialValue);
```

### Functor

The Functor is container which has a constructor and function, which can apply 
a transformation to the content. This function returns a new functor. 
```typescript
const initialValues: A[] = [...];

function f1(value: A): B {
  return ...
}

function f2(value: B): C {
  return ...
}

interface Functor<A> {
    map<B>( transform: (value: A) => B ): Functor<B>
}

const result: B = new Functor<A>(initialValues)
  .map(f1)
  .map(f2);
```

The function responsible for application is traditionally called map or somehow
similarly. In our case, for convenience reason, it was defined as a method. It 
takes a function that is intended for an application to the content of the 
Functor and applies it. The action produces a new value, which is again wrapped
in a Functor of the same type, which provides us with a possibility to chain 
map calls.

It is also possible to define map as an external **pure function**.

```typescript


function map<A, B>( functor: Functor<A>, transform: (value: A) => B ): Functor<B>

const result = map( map( new Functor(initialValue), f1 ), f2);
```

Functors are another way of **composition** which **preservs the execution order**.

As you might already notice, the pattern is very similar to **JavaScript's Array**, 
since Array is one of the most common instances of Functors

### Monad

A Monad has a similar construct to a Functor, it has a constructor and a
special function (in mathematics traditionally is called **bind** and in 
some programming lanuages **flatMap**) capable of applying value to the 
data hidden inside. The bind method of the Monad has the same signature
as the map method of the Functor. The Monad however can accept another 
Monad `Monad<A>` as input value and in this case returns `Monad<Monad<B>>`.
Because of the flat map it will return only `Monad<B>`.

```typescript
interface Monad<A> {
    bind<B>( transform: (value: A) => Monad<B> ): Monad<B>;
}
```

A wide-spread example of a Monad is the **JavaScript Promise**. It has a **then**
method, which satisfies the signature of the bind function (and abstracts the 
fact that the data might be absent or only available later). 

## Principles of Functional Programming

### Core Principles

