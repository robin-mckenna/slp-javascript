// Imediately Invoked function expression

var greeting = function(name) {
    console.log('Hello ' + name)
}('Jonathan');


(function(name) {
    console.log('Hello ' + name);
}("Robin"));
