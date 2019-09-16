## By Value vs By Reference

#### By value

Primitives use by value

```
a = 1
b = a
```

The variable `a` is a primitive. The variable `b` is copied by value.

#### By reference

Objects (Including functions) use by reference.

```
a = { };
b = a;
```

The variable `b` holds a reference to `a`

Objects are also passed by reference as parameters.

*See [by-val-by-ref.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/4/parts-31-40/js/by-val-by-ref.js)*

## Arrays

Since Javascript is dynamically typed, Javascript arrays can hold collections of anything and can be different types.

## Arguments

Arguments are set up in the creation phase of the execution context.

`arguments` is a keyword also.

*See [arguments-example.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/4/parts-31-40/js/arguments-example.js)*

## Javascript syntax parser

The javascript parser automatically injects semicolons where it thinks they should be. It's best practice to input your own semicolons to indicate the end of the statement.

##### Example

```javascript=
function getPerson() {
    return
    {
       firstName: "Danny"  
    }
}

console.log(getPerson());

```

The output is undefined. This is because the javascript syntax parser places a semicolon directly after `return` as it's not expecting the thing to be returned to be on the next line.

## Immediately Invoked Function Expressions (IIFE's)

A Function expression that is envoked as soon as it's created.

##### Example 1

```javascript=
var greeting = function(name) {
    console.log('Hello' + name)
}('Jonathan');
```

##### Example 2

Create a function and run it immediately. The parenthesis surounding the function tricks the syntax parser into believing it's valid.

```javascript=
(function(name) {
    console.log('Hello ' + name);
}("Robin"));
```

**See [iife example](https://github.com/robin-mckenna/slp-javascript/blob/robin/4/parts-31-40/js/iife.js)**

## IIFE's and safe code

Wrapping your code in an iffee ensures dosen't interfere with other code in the application. It is very common for frameworks to wrap their code in an imediately invoked function.

If you want to access the global object you just pass it by reference.
