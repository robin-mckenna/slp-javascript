var person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("-----------------------------------");
}.bind(person);

// var logPersonName = logName.bind(person);

console.log(logName);
logName();
// logPersonName();

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

// Function Borrowing

var person2 = {
    firstName: "Jane",
    lastName: "Doe",
}

var borrowing = person.getFullName.apply(person2);

console.log(borrowing);

// Function currying

function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(6));
