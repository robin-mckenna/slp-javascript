## Coercion

Converting a value from one type to another. Happens quite a lot in Javascript since it is dynamically typed.

#### Example

`var a = 1 + '2'; // Returns "12"`

The first paramater is coerced by the javascript engine into a string and it's concatonated.

## Existance and Booleans

Things that imply the lack of existance convert to false.

#### Example:

```
var b;

// Attempts to convert a to a boolean
// undefined -> boolean
if (b) {
    console.log("Something is here.");
} else {
    console.log("Nothing here.");
}
```

`b` returns true so `Something is here` is logged.

## Default Values

```
// Default values

function greet(name) {
    console.log("Hello " + name);
}

greet("Robin");

// No Paramater

greet();
```

Calling the function `greet()` with no paramaters returns `"Hello undefined"`

Undefined is coerced to be a string.

The default value can be set as of ES6.

#### Trick to set default value
```javascript=
function greet(name) {
    name = name || "Robin";
    console.log("Hello " + name);
}
```

`name = name || "Robin";` returns the first value which is true.

`greet(0)` returns false

## Objects and the Dot

Objects are collections of key value pairs.

Objects have properties and methods:
- Primitive "Property"
- Object "Property"
- Function "method"

#### Computed Member Access

Access properties of an object
```javascript=
person["firstname"] = "Steve";
person["lastname"] = "Smith";
```
#### Member Access

Much more common is the `member access` operator signalled with a `.`

You can create child objects of an object which is itself a property of the parent object.

For example:

`person.firstname;`

## Objects and Object Literals

#### Object Literals

Object literals are created using curly braces

```javascript=
var person = {
    firstname: 'Tony',
    lastname: 'Alicea'
}
```

Properties and methods can be created within the curly braces.

Same as:

```javascript=
person = new Object();
```


Objects can be parameters to functions:


```javascript=
function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet({firstname: 'Dave', lastname: 'Davidson'});
```

## Faking Namespaces

Often used in frameworks.

A namespace can be thought of as a container to keep variables and functions with the same name separate.

Objects can be used as contatiners to make sure that namespace collisions do not occur. (Variables which have the same name)

## JSON And object literals

Stands for Javascript Object Notation and is inspired by object literal syntax in Javascript. Looks like JSON but is **not** the exact same thing.

*See [json-example.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/3/parts-21-30/js/json-example.js)*

## Functions are Objects

#### First Class Functions

Everything you can do with other types, you cand do with functions. Assign them to variables, pass them around or create them on the fly.

A function is a special type of object. Properties and methods can be attached to a function.

**Function Properties**

- A function can contain primitives
- A function can contain objects
- A function can contain other functions
- A function has a name
    - This is optional however as a function can be *anonymous*


A function is and object that has code that just happens to be one of the properties of that object.

##### Example:

Add a property to a fuction

```javascript=
function greet() {
    console.log('hi');

}

greet.language = 'english';

console.log(greet.language);
```

###### Output

![](https://i.imgur.com/kVFHGZo.png)


'Greet' is a property that is attached to the function This happens because functions are objects.

Calling the function greet() runs the code in the function. So the output is 'hi' `console.log('hi')` is the code property.

*See [function-example.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/3/parts-21-30/js/function-example.js)*

#### Function statements and Function Expressions

A statement just does work. An expression is a unit of code that results in a value.

##### Function statement

Create a function
```javascript=
function greet() {
    console.log('hi');
}
```

##### Function Expression

Results in a value which is a function *object*.

```javascript=
var anonymousGreet = function() {
    console.log('Hi');
}
```

Function expressions are **not** hoisted.
