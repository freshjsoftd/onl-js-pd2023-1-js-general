'use strict';
const user = {
	fName: 'Jhon',
	lName: 'Doe',
	age: 30,
	address: {
	  country: 'United States',
	  city: 'NY',
	},
	isMarried: true,
	'home address': 'hhh',
	0: 'ffv',
};
console.log(user);
// const person = new Object(user);
const person = user;
console.log(person);
console.log(user === person);
console.log(user.age);
console.log(user['home address']);
person.age = 40;
delete person.address;
console.log(person);
console.log(user);
// CRUD
// C - create
// R - read
// U - update
// D - delete
