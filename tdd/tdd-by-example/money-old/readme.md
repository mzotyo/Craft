# Test Driven Development

## The general TDD cycle

1. **Write a test.** Think about how you would like the operation in your mind to appear in your code. You are writing a story. Invent the interface you wish you had. Include all of the elements in the story that you imagine will be necessary to calculate the right answers.

- The followings are the three strategies for quickly getting green:
  - Fake It - Return a constant and gradually replace constants with variables until you have the real code.
  - Use Obvious Implementation - Type in the real Implementation
  - Trinagulation

2. **Make it run.** Quickly getting that bar to go to green dominates everything else. If a clean, simple solution is obvious, then type it in. If a clean simple solution is obvious but it will take you a minute, then make a note of it and get back to the main problem, which is getting the bar green in seconds. This shift in aesthetics is hard for some experienced software engineers. They only know how to follow the rules of good engineering. Quick green excuses all sins. But only for a moment.

3. **Make it right.** Now that the system is behaving, put the sinful ways of the recent past behind you. Step back onto the straight and narrow path of software righteousness. Remove the duplication that you have introduced, and get to the green quickly.

## Rules

- **Eliminate duplications**

  - Dependency is the key problem in software development at all scales, duplication is de symptom. Unlike most problems in life, by eliminating duplication in programs _eliminates dependency_.

- **Triangulation**
  - We only generalize code when we have two examples or more. When the second example demands a more general solution, then and only then do we generalize.

## Patterns

- **Value Object**
  - The instance variables of the object never change once they have been set in the constructor.
  - Operations needs to return a new object.
  - Needs to implement the `equals()` and the `hashCode()` methods.
