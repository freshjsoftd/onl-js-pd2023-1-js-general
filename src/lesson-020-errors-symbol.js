'use strict';
// Map
/* const user = {
	fName: 'Jhon',
	lName: 'Doe',
	age: 20,
	email: 'doe@example.com',
};
const arrObj = Object.entries(user);
console.log(arrObj);
const map = new Map(arrObj);
console.log(map);
const arrArr = [
	[NaN, '10'],
	[20, '20'],
	['30', 30],
];
const arrMap = new Map(arrArr);
console.log(arrMap);
arrMap.set(40, '40');
arrMap.set(40, '50');
arrMap.set(user, 'log');
console.log(arrMap);
console.log(arrMap.get(NaN));
console.log(arrMap.has(NaN));
console.log(arrMap.delete(NaN));
console.log(arrMap.get(NaN));
// console.log(arrMap.clear());
console.log(arrMap.size);
arrMap.forEach((el, key) => console.log(`${key}: ${el}`));

for (const key of arrMap) {
  console.log(key) 
} */
// Set
/* const str = 'Butterfly';
const arr = [10, 20, 30];
const set = new Set(arr);
console.log(set);
set.add(40).add(50);
console.log(set);
set.delete(40)
console.log(set);
set.forEach((value, key) => console.log(`${key}: ${value}`));
console.log(str.length)
console.log(Array.from(set)); */
// =================================================================
const arr1 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
// Дать задание убрать из массива дубликаты.

/* const set = new Set(arr1);
console.log(Array.from(set)); */

/* const uniqueArr = [...new Set(arr1)];
console.log(uniqueArr); */

/* const set1 = new Set(arr1);
console.log(set1); */

/* const arr = Array.from(new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
const arr2 = [...new Set([1,2,3,4,5,5])];
console.log(arr);
console.log(arr2); */

/* const Arr = [...new Set(arr1)];
console.log(Arr); */
// ======================
// try-catch-finaly
/* - try...catch,
   - try...finally,
   - try...catch...finally */

/* const callRealFunction = () => `It is a real function`;
// callSomeFunction();
try {
	callSomeFunction();

	console.log(callRealFunction());
} catch (error) {
	console.log(`an error has happend`);
	console.error(error);
} finally {
	console.log('This message will print any way');
}
console.log('Other part of app will go on '); */
// ========Errors generation ========
/* class User {
	constructor(userName, userAge) {
		const age = parseInt(userAge);
		if (Number.isNaN(age)) throw new TypeError('Age must be a number');
		if (age < 0 || age > 150)
			throw new RangeError('Age must be between 0 and 150');
		this.age = age;
		this.userName = userName;
	}

	printProps() {
		return `Name is ${this.userName}, age is ${this.age}`;
	}
}

try {
	const bill = new User('Bill', );
	console.log(bill.printProps());
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error);
}
console.log('Other part of app will go on '); */
/* try {
  console.log(str)
  getSmth();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error);
}
const str ='ss' */
// Create own error
class UserError extends Error {
	constructor(value, options, ...params) {
		super(...params);
		this.name = 'UserError';
		this.argument = value;
		this.cause = options.cause ?? 'Common Error';
	}
}
class User {
	constructor(userName, userAge) {
		const age = parseInt(userAge);
		if (Number.isNaN(age))
			throw new UserError(userAge, {cause: 'Unexpected value'}, 'Age must be a number');
		if (age < 0 || age > 150)
			throw new UserError(userAge, {}, 'Age must be between 0 and 150');
		this.age = age;
		this.userName = userName;
	}

	printProps() {
		return `Name is ${this.userName}, age is ${this.age}`;
	}
}
try {
	const bill = new User('Bill', -20);
	console.log(bill.printProps());
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.cause);
	console.log(error);
}
console.log('Other part of app will go on ');
