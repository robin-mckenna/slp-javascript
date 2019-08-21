var objectLiteral = {
    firstname: 'Kevin',
    isAProgrammer: true
}

console.log("I am JSON: " + JSON.stringify(objectLiteral));


var jsonValue = JSON.parse('{"firstName": "Mary", "isAProgrammer":true}');

console.log("I'm a javascript literal object: ");
console.log(jsonValue);
