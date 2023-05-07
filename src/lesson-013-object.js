// 'use strict';
let address = 'Dnipro';
const sayHi = () => {
	return this;
};
function callBack(sayHi) {
	return this;
}
const user = {
	fName: 'Jhon',
	lName: 'Doe',
	age: 30,
	address,
	isMarried: true,
	'home address': 'hhh',
	// say: function(){
	//   console.log('Hi everybody')
	// }
	/* say() {
		console.log(`Hi ${this.fName + this.lName}`);
	}, */
	say: sayHi,
	// hi: () => console.log(`Hi ${this.fName + this.lName}`),
};
const person = {
	fName: 'Bill',
	lName: 'Doe',
	age: 30,
	address,
	isMarried: true,
	'home address': 'hhh',
	say: sayHi,
};
console.log(user.say());
console.log(person.say());
console.log(sayHi());
// user.hi();

// ====================
/* const car2 = {
	brand: 'Toyota',
	model: 'Avalon',
	'year of relise': 1995,
	transmition: 'mechanics',
	// '10': 10,
	isWell: true,
	color: 'green',
	go: driver =>
		console.log(`Let's go ${driver} on ${this.brand} ${this.model}`),
	run: function (driver) {
		console.log(`Let's drive ${driver} on ${this.brand} ${this.model}`);
	},
	// run(driver) {
	// 	console.log(`Let's drive ${driver} on ${this.brand} ${this.model}`);
	// },
}; */

// car2.run('Jhon')
// car2.go('Jhon')
function Car(brand, model, transmition, color) {
	// this = {};
	this.brand = brand;
	this.model = model;
	this.transmition = transmition;
	this.color = color;
	this.fullBrand = `${brand} ${model}`;
	this.run = function (driver) {
		console.log(`Let driver ${driver} on ${this.fullBrand}`);
	};
}

const bmw = new Car('BMW', 'X5', 'automatic', 'grey');
const toyota = new Car('Toyota', 'Camry', 'mechanic', 'red');
console.log(bmw.fullBrand);
console.log(bmw);
bmw.run('Jhon');
toyota.run('Jane');
