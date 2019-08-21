function greet(firstname, lastName, language) {
    console.log(firstname);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('------------------');

}

greet();
greet('John');

greet('John','Doe');

greet('John', 'Doe', 'En');
