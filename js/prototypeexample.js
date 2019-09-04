var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Not best practice
john.__proto__ = person;

console.log(john);
console.log(john.getFullName());
