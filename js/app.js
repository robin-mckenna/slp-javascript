// Hoisting Example

console.log(a);
b();

var a = "Hello World";

function b() {
    console.log("Called function b");
}
