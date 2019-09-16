## Closures

Closure is where you have functions bundled togeter (enclosed) with references to it's surrounding state (lexical environment)

Variables in a surrounding environment are accessable within inner functions.

**See [closure examples](https://github.com/robin-mckenna/slp-javascript/blob/robin/5/parts-41-50/js/closure1.js)**

## Function Factories

Closures can be used to create Factories in Javascript.

**See example in [js/GreetFactory.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/5/parts-41-50/js/GreetFactory.js)**

## Closures and Callbacks

A callback is a function that runs when a function is invoked.

Jquery uses function expressions and first-class functions

```javascript=
$("button").click(function() {
    ...
});
```

## Call, Apply, and Bind

Functions have access to a call, apply and bind method.

#### Bind

Bind creates a copy. Bind allows you to specify which object the *this* keyword points to.

**See examples in [closuresandcallbacks.js](https://github.com/robin-mckenna/slp-javascript/blob/robin/5/parts-41-50/js/closuresandcallbacks.js)**

#### Call

The function call() invokes a function, allows you to bind an object and accepts parameters.

#### Apply

The only difference between call and apply is that apply takes an array rather than a list of parameters.

## Function Borrowing

You can use methods from other functions if you have similar **property** names.

##### For example:

**See [Call apply and bind example](https://github.com/robin-mckenna/slp-javascript/blob/robin/5/parts-41-50/js/callapplybind.js)**

```javascript=
var person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var person2 = {
    firstName: "Jane",
    lastName: "Doe",
}

var borrowing = person.getFullName.apply(person2);

console.log(borrowing);

```

## Function Currying

Function currying is creating a copy of a function but with some preset paramaters.

Often used in functional programming

**See function currying example**

```javascript=
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo()); // prints 12
```

## Prototypes

All objects have a prototype property. The property is a reference to another object.

The prototype chain is the order in which an object looks for a property.

#### Example
**See [Prototype example](https://github.com/robin-mckenna/slp-javascript/blob/robin/5/parts-41-50/js/prototypeexample.js)**

*Setting prototypes is not best practice*

```javascript=
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullname: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var John = {
    firstName: 'John',
    lastName: 'Doe'
}

// Not best practice
john.__proto__ = person;

console.log(john);
console.log(john.getFullName());


```
