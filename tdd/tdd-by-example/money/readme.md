# Test Driven Development

## The general TDD cycle

1. **Write a test.** Think about how you would like the operation in your mind to appear in your code. You are writing a story. Invent the interface you wish you had. Include all of the elements in the story that you imagine will be necessary to calculate the right answers.

- The followings are the three strategies for quickly getting green:
    - Fake It - Return a constant and gradually replace constants with variables until you have the real code.
    - Use Obvious Implementation - Type in the real Implementation
    - Trinagulation

2. **Make it run.** Quickly getting that bar to go to green dominates everything else. If a clean, simple solution is obvious, then type it in. If a clean simple solution is obvious but it will take you a minute, then make a note of it and get back to the main problem, which is getting the bar green in seconds. This shift in aesthetics is hard for some experienced software engineers. They only know how to follow the rules of good engineering. Quick green excuses all sins. But only for a moment.

3. **Make it right.** Now that the system is behaving, put the sinful ways of the recent past behind you. Step back onto the straight and narrow path of software righteousness. Remove the duplication that you have introduced, and get to the green quickly.

## Strategy

- You have to break out from this positive feedback loop. The more stress you feel, the less testing you will do. The less testing you do, the more errors you will make. The more errors yu make, the more stress you feel. **Writing the test first** will help you break out from this positive feedbak loop.

- Make tests so fast to run that I can run them myself, and run the often. That way I can catch errors before anyone else sees them.

- Isolate tests. One test result should not influence the result of other tests. If I have one test broken, I want one problem. If I have two tests broken, I want two problems.

- Begin with the assert, then write the rest of the test, and finally the implementation.

- If less input leads to same result, use less input data.

- Use different constant values for different inputs.

- Tests should be self explanatory. Include expected and actual results in the tes itself, and try to make relationship apparent. Magic numbers in the tests are alowed if these make the test intent more evident.

## Working Patterns

### Red Bar Patterns

- Pick a test that will teach you something and that you are confident you can implement. Each test should represent one step toward your overall goal. Start by a variant of an operation that doesn't do anything.

- When you are tired, use the *Hungarian shower method*. TDD is a refinement of the Hungarian Methodology. If you know what to type, type the obvious implementation. If you don't know what to type then fake it. If the design still isn't clear, then triangulate. If you still don't know what to type, then you can take a shower.

- **Learning test** are tests written for externally produced software whith the purpose to learn and verify that the API works as expected. Every time the external softvare is upgraded to a new version, the test written for it should be ran. If doesn't passes. There is no reason to use it because it doesn't behave as axpected.

- **Regression test**: What's first thing to do when a defect is reported? Write the smallest possible test that fails and that, once run, will be repaired.

- **Vacation**: Two contigguos weeks of vacation aren't enough. You spen the first week decompressing, and the second week getting ready to go back to work Therefore, three, weeks, or better four, are necessary for you to be your most effective the rest of the year.

### Testing Patterns

- If you encounter a test that is too big, write a smaller test that represents the broken part of a bigger test. When you write a test that is too big, first try to learn the lesson. Why was it too big? What could have been done differently that would have made it smaller.

- When testing an object that relies on expensive or complicated resource, **Mock Objects** become handy. Another value of mocks, aside performance and reliability is readability. Your realistic database might give you 14 replies, but you won't know why 14 is the right answer. And finally Mock Objects encourage you down the path of carefully considering the visibility of every object, reducing the copling in your designe.

- **Self shunt** is having the object under test communicate with the test case instead of with the objects it expects. Tests written with self shunt tend to read better than tests written without it.

- **Log strings** are  for testing the order in wich a sequence of messages are called. Keep a log in a string, and append to the string when a message is called.Log sttrings are particularry usefull, when you are implementing observer and you expect notifications to arrive in a certain order.

## Rules

- **Eliminate duplications**
    - Dependency is the key problem in software development at all scales, duplication is de symptom. Unlike most problems in life, by eliminating duplication in programs _eliminates dependency_.

- **Triangulation**
    - We only generalize code when we have two examples or more. When the second example demands a more general solution, then and only then do we generalize.

- **Polymorphism**
    - Any time we are checking classes explicitly, we should be using polymorphism instead.

- **Replace constant by a variable**
    - Take code that works in one instance and generalize it to work in many by replacing constants with variables.

- **Simplify test**
    - One test can be simple if and only if another test is in place and running correctly.

## Design Patterns

- **Value Object**
    - The instance variables of the object never change once they have been set in the constructor.
    - Operations needs to return a new object.
    - Needs to implement the `equals()` and the `hashCode()` methods.

- **Collecting Parameter**
    - A mutable value that we pass from method to method, accumulating data as it goes.
    - Allows us to refactor a bulky method in which the result of multiple operations are collected in a single variable. This can be handy if we are sure that our method is violating the *Single Responsibility Principle*
