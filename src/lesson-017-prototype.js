'use strict';
function MyArray(...args) {
	this.length = 0;
	for (let i = 0; i < args.length; i++) {
		this.push(args[i]);
	}
	/* this.push = function(item){
    this[this.length] = item;
    return ++this.length;
  } */
}
MyArray.prototype = new MyArrayProto();

console.dir(MyArray);
function MyArrayProto() {
	// Implement push
	this.push = function (...args) {
		if (args.length > 0) {
			for (let i = 0; i < args.length; i++) {
				this[this.length++] = args[i];
			}
		}
		return this.length;
	};
	// Implement pop
	this.pop = function () {
		if (this.length === 0) {
			return;
		}
		const lastEl = this[this.length - 1];
		delete this[--this.length];
		return lastEl;
	};
	// Implement forEach
	this.forEach = function (fn) {
		for (let i = 0; i < this.length; i++) {
			fn(this[i], i, this);
		}
	};
	// Implement some
	this.some = function (fn) {
		if (this.length === 0) {
			return false;
		}
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				return true;
			}
		}
		return false;
	};
	// Implement filter
	this.filter = function (fn) {
		const newArray = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				newArray.push(this[i]);
			}
		}
		return newArray;
	};
	// Implement map
  this.map = function(fn){
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++){
      newArray.push(fn(this[i], i, this));
    }
    return newArray;
  }
}

const myArr = new MyArray(20, 30, 50);
const myArr2 = new MyArray('Donic', 'MaLong');
// console.log(myArr.pop());
console.log(myArr2.pop());
myArr.forEach(el => console.log(el * 2));
console.log(myArr);
console.log(myArr.some(el => el % 8 === 0));
console.log(myArr.filter(el => el < 30 ));
console.log(myArr.map(el => el**2));

const arr = Array(12, 18, 20);
console.log(arr);
