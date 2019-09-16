# Part 1 - 5

Goal and structure of course introduced:

- To get a solid grasp of Javascript theory with practical examples.

# Part 6 - 10

#### Syntax Parsers

A program that reads your code and determines what it does and if its grammar is valid.

#### Lexical Environments

A lexical environment exists in programming laguages in which **where** you write something is important.

#### Execution Contexts

A wrapper to help manage the code that is running.

##### Creation phase


###### Overview:

![](https://i.imgur.com/fbY3WyQ.png)

- Global Object setup in memory
- `this` setup in memory
- Outer Environment created

As the parser runs through the code, it recognizes where you've created variables and functions.

Memory space is setup for variables and functions. This is known as **hoisting.**

###### Example:

[Hoisting Example](https://github.com/robin-mckenna/slp-javascript/blob/robin/1/parts-1-10/js/app.js)

```
// Hoisting Example

console.log(a);
b();

var a = "Hello World";

function b() {
    console.log("Called function b");
}
```

![](https://i.imgur.com/mLYHKFY.png)

Variables and functions are hoisted differently

- A function in its entirity is placed into memory during the creation phase.
- All javascript variables are initially set to undefined.

*Don't rely on hoisting*

##### Code Execution Phase

After creation phase it runs your code line by line.

#### Name value pairs and objects

Name value pairs have a name which maps to a unique value. It is unique in any given context.

`Address = '100 Main st.'`

An object is a collection of *name value* pairs.

```
Address:
{
    Street: 'Main',
    Number: 100
    Apartment:
    {
        Floor: 3,
        Number: 301
    }
}
```

*A value may itself be an object*

#### The Global Environment and the Global Object

- Whenever javascript code is ran it's ran inside an execution context.
- The base execution context or global execution context creates:
    - The global object
    - *this* variable

##### Deomonstration

![](https://i.imgur.com/kBs7oKu.png)

The global Execution context creates the global object (window) = *this* variable.

#### Javascript and Undefined

"Not defined" is different to "undefined". If the output is "Uncaught reference error - not defined" the variable hasn't been set up in memory.

*Never set a variable to underfined. Let undefined mean "I, the programmer, never set the value."*
