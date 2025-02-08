const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);

//show a single value
console.log(person.firstName, person.lastName);

//select values from arrays 
console.log(person.hobbies[1]);
console.log(person.address.city)

//destructuring
const { firstName, lastName, address: {city}} = person;
console.log(city)

//add properties
person.email = 'john@email.com'
console.log(person)