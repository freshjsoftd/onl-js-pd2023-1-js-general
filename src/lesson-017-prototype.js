'use strict';

const users = ['Jhon', 'Bill', 'Petr'];
// let jhon = users[0];
// let bill = users[1];

let [vasya,, petr] = users;

console.log(vasya);
console.log(petr);
// console.log(bill);
const person = {
  name: 'Jane',
  age: 20
}

let {name:jane, age} = person;
console.log(jane);
console.log(age);

[jane, vasya] = [vasya, jane];

console.log(vasya);
console.log(jane);