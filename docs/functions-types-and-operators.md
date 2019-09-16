## Function Invocation and the Execution Stack

##### Invocation
- Running or calling a function

##### Execution Stack

- The global execution context is created
- Every time a function is called a new execution context is created
- When it's finished executing it's popped off the stack.

## Functions Context and Variable Environments

#### Variable Environments

Where the variables live and  how they relate to eachother in memory. Every execution context has its own variable environment.

#### The Scope Chain

Every execution context has a reference to it's outer environment. If a variable isn't found in it's current environment, the syntax parser works its way up the scope chain.

![](https://i.imgur.com/uoASQTr.png)

## Scope, ES6 and Let

#### Scope

Scope is to do with where a variable is in your code

## ES6

`Let` can be used instead of `var`

- You can't use the variable before it's defined
- It has block scope

## Asynchronous Callbacks

Asynchronous means more than one at a time.

The browser has multiple engines

- Javacript Engine
- Rendering Engine
- ...

## Event Queue

The event queue is processed when the execution stack is empty.

## Types and Javascript

#### Dynamic Typing

The engine works out what types to use for your variables.

#### Primitive Types

A primitive type is a type of data that represents a single value. It's not an object.

- undefined
    - Lack of existance, Undefined until a variable is set
- NULL
    - Lack of existance, You can set this.
- Boolean
    - True or False
- Number
    - Only numeric type in Javascript
    - It's a floating point number
- String
    - Sequence of characters
- Symbol
    - Used in ES6
    - Symbols are unique identifiers

## Operators

#### Infix notation
The operator sits between the two paramaters
`a = 3 + 4`

#### Prefix notation
The operator sits before the two paramaters
`a = +3 4`

#### Postfix notation
The operator sits after the two paramaters
`a = 3 4+`

##### Operator Precedence and Associativity

Javascript defines its own precendence

The precedence is the order that the functions are called. The associativity can be either left to right.

##### Example

`a * b / c`

The multiplication and / operators have the same presedence, the associativity is left to right. So the functions would execute in the order `a * b` then `b / c`
