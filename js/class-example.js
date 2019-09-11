class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return 'Hi ' + this.firstName;
    }
}

let bob = new Person('Bob','Bobbish');

console.log(bob.greet());
