# Functional Programming

## Concepts

### First-class citizen

- All items can be the actual parameters of functions.
- All items can be returned as results of functions.
- All items can be the subject of assignment statements.
- All items can be tested for equality.

### Function type

In functional programming languages the functions are **first-class citizens**.
Which means they can have a type.

```haskell
parseInt :: string -> int
```

Functions with multiple variables can be represented as functions returning 
another function. The two are equivalent.

```haskell
add :: int -> int -> int
```

### Pure function

There are three criteria which have to be satisfied with the function to be pure:

- It should not be capable of doing any **side effects**, or in other words,
  the external mutable state can not be modified.
- The result of its work has to be represented by the return value.
- The same combination of input arguments should always produce the same result.

### Function composition

Due to outlined qualities, pure functions can be combined via a **composition**.
Two methods are composed `f( g( x ) )` if the result of the `g` method is passed
as input into the `f` method. 

```haskell
f :: A -> B 
g :: B -> C

f o g :: A -> C
```

The composition operator is actually function itself and it is called a 
**higher order function**.

```haskell
o :: (A->B) -> (B->C) -> (A->C)
```

### Higher Order Function

It is a function which either receives a function as an argument and / or 
returns a function as a result.

### Functor

A functor is a mapping between types (`F :: type A -> type B`). When the 
functor `F` is applied, then from `type A` is created new `type B`. 

For something to be a functor it also has to be true that if given the 
functor `F` it should map a function `f :: A -> A` to `map(f) :: F(A) -> F(A)`.

In the programming world the functor is some kind of wrapper type that has a
`map` function. The `map` returns a new wrapper type and always changes the 
content of the wrapper type and never the structure.

As you might already notice, the pattern is very similar to **JavaScript's Array**, 
since Array is one of the most common instances of Functors

### Monad

The monad is a functor and it needs to have a `flatten` method. The `flatten` 
method gets rid of unnecessary wrapper objects. It returns only a one wrapper 
object around the raw type.

The problem When composing two functors is that the result will be wrapped two
times.

```
F :: A -> W[ B ]
G :: B -> W[ C ]

map(G) :: W[ B ] -> W[ W[ C ] ]

map(G) o F A -> W[ W[ C ] ]
```

This would be the monad `g >=> f :: A -> W[ C ]`.
Which solves the problem of double wrapping.

## Principles of Functional Programming

### Core Principles

