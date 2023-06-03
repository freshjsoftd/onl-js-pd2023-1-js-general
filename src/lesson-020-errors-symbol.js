'use strict';
// ==============Symbol as object's properties============
const mySuperSecretPassword = Symbol('asdfghytrewq');
const symbol1 = Symbol('id');
const symbol2 = Symbol.for('user-my-app-12');
console.log(Symbol('id') === Symbol('id'));
// console.log(String(symbol));
// console.log(symbol + '30');
const obj = {};

obj['myPassword'] = 'password';
obj[mySuperSecretPassword] = 'qwerty';
console.log(obj.myPassword);
console.log(Object.keys(obj))
console.log(obj);
for(let key in obj) {
  console.log(key);
}
console.log(obj[mySuperSecretPassword]);
console.log(symbol2 === Symbol.for('user-my-app-12'));
console.log('2' === Symbol.keyFor(symbol2));
// ============Symbol.iterator======================
class MyArrayIterator {
	/**
	 *
	 * @param {MyArray} myArray
	 */
	constructor(myArray) {
		this.array = myArray;
		this.count = 0;
	}
	next() {
		return {
			value: this.array[this.count++],
			done: this.count > this.array.length,
		};
	}
}
class MyArray {
	constructor(...args) {
		this.length = 0;
		for (let i = 0; i < args.length; i++) {
			this.push(args[i]);
		}
	}

	static isMyArray = function (obj) {
		return obj instanceof MyArray;
	};

	// Implementation own push method
	push(...args) {
		if (args) {
			for (let i = 0; i < args.length; i++) {
				this[this.length++] = args[i];
			}
		}
		return this.length;
	}
	// Implementation own concat method
	concat(...args) {
		const result = this;
		for (let i = 0; i < args.length; i++) {
			if (Array.isArray(args[i])) {
				result.push(...args[i]);
			} else if (MyArray.isMyArray(args[i])) {
				result.push(...args[i]);
				// for (let j = 0; j < args[i].length; j++) {
				// 	result.push(args[i][j]);
				// }
			} else {
				result.push(args[i]);
			}
		}
		return result;
	}
	[Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}

const myArr = new MyArray(1, 3, 5, 7, 9, 12, 16, 20);
const myArrArr = new MyArray(
	1,
	2,
	new MyArray(3, 4, new MyArray(5, 6, new MyArray(7, undefined, 8)))
);
console.log(myArr.concat(new MyArray(100, 200, 300), [1000, 2000, 3000]));
const fromMyArray = Array.from(myArr);
console.log(fromMyArray);
fromMyArray.forEach(elem => console.log(elem));
// =================Symbol.iterator for any object=================
const user = {
	fName: 'Jhon',
	lName: 'Doe',
	age: 30,
	email: 'doe@example.com',
	phone: '123-456',
};

function makeObjIterable() {
	const arrEntries = Object.entries(this);
	let current = 0;
	let last = arrEntries.length;
	return {
		next() {
			if (current < last) {
				return {
					done: false,
					value: arrEntries[current++],
				};
			} else {
				return {
					done: true,
				};
			}
		},
	};
}
user[Symbol.iterator] = makeObjIterable;

const propArray = [...user];
console.log(propArray);
for (const key of user) {
    console.log(`${key[0]}: ${key[1]}`);
}