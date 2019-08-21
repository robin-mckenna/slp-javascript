var person = new Object();

// Add properties and methods

person["firstname"] = "Steve";
person["lastname"] = "Smith";

var firstNameProperty = "firstname";

console.log(person);
console.log(person["firstname"]);

console.log(person.firstname);


var person = {
    firstname: 'Tony',
    lastname: 'Alicea'
}

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet({firstname: 'Dave', lastname: 'Davidson'});
