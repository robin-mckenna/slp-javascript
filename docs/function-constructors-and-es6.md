## Function Constructors

The new keyword is actually an operator.

When you use the keyword new:

1. An empty object is created
2. It calls the function (The execution context generates the this keyword)
3. When you use the keyword new it changes what the this variable points to. (The new empty object)
4. The properties get added to the newly created object and the object is returned.

#### Example

```javascript=
function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

var john = new Person();
console.log(john);
```

*Don't use a return statement when you create a function constructor.*

## Prototypes

#### Example

*prototype for any person object created using the function constructor*
```javascript=
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
```

Adding getFullName to Person would mean that every time we create an instance of person, a copy of getFullName is created. We can avoid this by adding getFullName to the prototype.

## Classes

Classes are syntactic sugar in Javascript

As of ES6 the class keyword can be used to create objects.

[Class Example](https://github.com/robin-mckenna/slp-javascript/blob/robin/6/parts-51-60/js/class-example.js)

The extends keyword can be used to create a subclass

---

[Object initialization example](https://github.com/robin-mckenna/slp-javascript/blob/robin/6/parts-51-60/js/initialization.js)

---

- Use `typeof` and `instance of` to figure out what something is
