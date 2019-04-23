const name = 'John';
const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// let z;
console.log('my name is ' + name + ' and I am ' + age);
console.log(`my name is ${name} and I am ${age} years old`);
const s = 'Hello World';
console.log(s.substring(0, 4).toUpperCase());
console.log(s.split(''));   
//  Arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears', 10, 'bananas'];
console.log(fruits);
fruits.push('mango');
fruits.unshift('grapes');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
// select value from array or objects
const person = {
    firstName: 'john',
    lastName : 'doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50bmain st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.lastName);
console.log(person.firstName, person.hobbies[1]);
console.log(person.age, person.address.street);
const {firstName, lastName, address: {city}} = person;
console.log(city);
person.email = 'kjdh@mail.com';
console.log(person);

const todos = [
    {
        id: 1, 
        text: 'Take the trash',
        isCompleted: true
    },
    {
        id: 2, 
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3, 
        text: 'Do some sports',
        isCompleted: false
    },
];
console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
for (let i = 0; i< 10; i++){
    console.log(i);

}
