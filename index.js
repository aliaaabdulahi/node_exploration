const Person = require('./person');

const person1 = new Person ('John Doe', 30)
console.log(person1.greeting())
console.log(person1.name, person1.age)