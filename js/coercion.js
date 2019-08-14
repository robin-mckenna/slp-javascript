// Coercion Examples

var a = 1 + '2'; // Returns "12"
console.log(a);

//////////////////////////////////////////////////////////////

// Existance and Bools

var b;
// Imagine a goes out to the internet and returns something.

// Attempts to convert a to a boolean
// undefined -> boolean
if (b) {
    console.log("Something is here.");
} else {
    console.log("Nothing here.");
}

//////////////////////////////////////////////////////////////

var c = 0;

if (c || c === 0) {
    console.log("c is true");
} else {
    console.log("c is false");
}

//////////////////////////////////////////////////////////////

// Default values

function greet(name) {
    console.log("Hello " + name);
}

greet("Robin");

// No Paramater

greet();
