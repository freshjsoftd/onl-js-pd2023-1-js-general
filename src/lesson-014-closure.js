'use strict';
// debugger
function Car(brand, model, transmition, color) {
	this.brand = brand;
	this.model = model;
	this.transmition = transmition;
	this.color = color;

	this.run = function (driver) {
		console.log(`Let's drive ${driver} on ${this.brand} ${this.model}`);
	};
}
const bmw = new Car('BMW', 'X5', 'automatic', 'black');
// console.log(bmw)
bmw.brand = 'Alpina'
// console.log(bmw)
// console.log(Object.getOwnPropertyDescriptor(bmw, 'brand'))
// console.log(Object.getOwnPropertyDescriptors(bmw))
console.log(Object.defineProperty(bmw, 'color', 
          {value: 'red',
          // enumerable: false,
           writable: false,
          // configurable: false
        }));
console.log(
	Object.defineProperties(bmw, {
		maxSpeed: {value: 300},
    power: {value: 200, writable: true}
	})
);
/* console.log(Object.getOwnPropertyDescriptor(bmw, 'color'));
for(let key in bmw) {
  console.log(`${key}: `)
} */
// bmw.color = 'green';
// delete bmw.color;
console.log(bmw);
const phone = {
  price: 200,
  resolution: '800x400'
}
const carPhone = Object.assign({}, bmw, phone);
console.log(carPhone);
console.log(Object.getOwnPropertyDescriptor(carPhone, 'color'));
// Object.preventExtensions(phone);
// Object.seal(phone);
// Object.freeze(phone);

// phone.color = 'red';
// phone.price = 300;
for (let key in phone) {
	console.log(`${key}: `);
}
console.log(Object.entries(bmw));
const obj = Object.create(new Array)
console.dir(obj);