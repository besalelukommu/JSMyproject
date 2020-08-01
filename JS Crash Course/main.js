//console.log('Hello world !!');
//console.error('This is error');
//console.warn('This is warning');

// let, const

// Data types
// Strings, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatination
console.log('My name is ' + name + ' and i am ' + age);

// Template String
const hello = `My name is ${name} and i am ${age}`;
console.log(hello.length);
console.log(hello.toUpperCase());
console.log(hello.toLowerCase());
console.log(hello.toString());
console.log(hello.substring(0, 15));
console.log(hello.split(' '));

// Arrays - variables that hold multiple valus

const num = new Array(1,2,3,4,5);
console.log(num);

const fruits = ['apples', 'oranges', 'mangoes', 10, 5.2, null];
console.log(fruits);

const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies : ['music', 'reading', 'sports'],
    address :{
        street : '50 main street',
        landmark : 'post office',
        city : 'New Jersy',
        state : 'LA',
    }
}

person.email = 'john@gmail.com';
console.log(person);
console.log(person.address.city.toUpperCase());
console.log(person.hobbies[2]);
console.log(person.age);

const {firstName, lastName, address : { street }, hobbies} = person;
console.log(firstName);
console.log(street);
console.log(hobbies[1]);


// FOR Loop
for(let i=0; i<10; i++){
    console.log(`for loop ${i}`);
}

// WHILE Loop
let i=0;
while(i<10){
    console.log(`while loop : ${i}`);
    i++;
}

const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isComplete : true

    },
    {
        id : 2,
        text : 'Meeting with bosss',
        isComplete : true

    },
    {
        id : 3,
        text : 'Dentist appointment',
        isComplete : false 

    }
];
console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for(let i=0;  i<todos.length; i++){
    console.log(todos[i].text)
}


for(let todo of todos){
    console.log(todo.id);
}

// forEach Loop
todos.forEach(function(todo) {

    console.log(todo.text);
});

// MAP
const todoText = todos.map(function(todo){
    return todo.text
});

console.log(todoText);

// Filter 
const todoCompleted = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){
    return todo.id;
});

console.log(todoCompleted);


// conditional statements IF
const max = 2;
if(max === 4){
    console.log("max is equals to 4");
}else if(max > 4){
    console.log('max is grater than 4 ');
} else {
    console.log('max is less than 4');
}

// ternary operator
const a = 5;
const color = a > 5 ? 'red' : 'blue';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red and blue');
        break;
}


// functions
function Numbers(num1, num2){
    console.log(num1 + num2);
}
Numbers(7, 4);

// Advance functions
const Numbers1 = (num1, num2) => num1 + num2;
console.log(Numbers1(5,4));