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
// while
let  i = 0;
while(i < 10){
    console.log(`while Loop number: ${i}`);
    i++;
}
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);

}
for(let todo of todos){
    console.log(todo.text);
}
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});
const todoText = todos.map(function(todo){
    return todo.text;
});

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
 }).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);
// some new future
const x = 10;
const color = x < 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default: 
    console.log('color is not known')
}

// 
function addNums(num1, num2){
console.log(num1 + num2);
}
addNums(5, 3);
// same  above with ES6
const addNums2  = (num1 = 3, num2 = 7) => num1 + num2;
console.log(5 + 9);
// 
const addNums3 = num1 => num1 + 5;
console.log(addNums3(5));

//  

function Person(firName, lasName, dob){
    this.firName = firName;
    this.lasName = lasName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firName} ${this,lasName}`;
    }
}

// Instantiate object

const person1 = new Person('Mohamad', 'Asfour', 02-12-1980);
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());