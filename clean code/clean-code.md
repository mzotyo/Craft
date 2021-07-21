# Clean Code

## Functions

- **Function names** should be verbs.
- Every line of a function should be at the **same level of abstraction**.
- A function should do only **one thing**.
- A function should get **max 3 arguments**, use data structures instead.
- **No boolean** should be passed as an argument.
- Avoid switch statements, use **polimorfizem** instead.
- Functions with output arguments should have **no side effects**.
- [?] Function pairs with **side effects**: process **with lambda**.
- [?] Nothing in the function except the **try block containing another function**.
- **DRY**: don't repeat yourself.

## Variables

- Don't use noise words like *data*, *info*.

## Length of names

- A variable name should be **proportional to the scope** that contains it.
- Function names should be **inversly proportional to the scope** that contains it.
- Class names are similar to function names.

## Comments

- Comments should explain the code if the **code can not explain itself**.
- **TODO** comments should not be checked in. Once they are checked in they become a DO NOT comment.
- **Java docs** are fine especially when writing an API for the outside world.
- Never talk about a **code that is not there** in a comment.
- **Commented out code** is not allowed.

## Tests

- Software should be **easely changeble**.
- Code should **improve** with time.
- **Fearless competence** with tests.
- Write test for the **code you wrote** first.
- Tests are part of the system and have to be designed as **part of the system**.
- Test coverage is **not a management metric**.
- **Pair-programming** for having enough knowledge to be able to cover each other.
- **Honest estimates**: best case, nominal case, worst case.

## Formatting

- 40 character long lines. All the code should fit on a screen.
