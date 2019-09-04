function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("Function has been invoked");
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);
