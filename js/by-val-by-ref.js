// By value (primitives)

var a = 3;
var b;

b = a;

console.log(a);
console.log(b);

// By reference (All objects including functions)

var c = {greeting: "Hi" };
var d;

d = c;
c.greeting = 'hello';
console.log(c);
console.log(d);
