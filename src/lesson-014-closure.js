'use strict';
// debugger
let firstName = 'John';
let lastName = 'Doe';

function sayHi(name) {
	console.log('Hi, ' + firstName);
  // console.log(message);
  function getHi() {
		console.log('Get ' + message);
  }
  getHi();
	return function () {
    let message ='qwerty'
		return `Hello ${name} ${message}`;
	};
  
}

firstName = 'Pete';
const hello = sayHi('Greg');
sayHi('Billy')
console.log(hello())

// console.log(sayHi());
// debugger
/* function makeWorker() {
	let firstName = 'Pete';

	return function () {
		return firstName;
	};
}

let firstName = 'John';

let work = makeWorker();

console.log(work()); */
