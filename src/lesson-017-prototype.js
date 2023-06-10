'use strict';

/* const users = ['Jhon', 'Bill', 'Petr'];
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
console.log(jane); */
// ===============Implementation own methods===================
/* function MyArray(...args) {
	this.length = 0;
	for (let i = 0; i < args.length; i++) {
		this.push(args[i]);
	}
}

MyArray.isMyArray = function (obj) {
	return obj instanceof MyArray;
};

// MyArray.prototype = new MyArrayProto();

// Without constructor
// MyArray.prototype.push = function (...args) {
// 	if (args) {
// 		for (let i = 0; i < args.length; i++) {
// 			this[this.length++] = args[i];
// 		}
// 	}
// 	return this.length;
// };
// MyArray.prototype.pop = function () {
// 	if (this.length === 0) {
// 		return;
// 	}
// 	const lastItem = this[this.length - 1];
// 	delete this[--this.length];
// 	return lastItem;
// };
// MyArray.prototype.forEach = function (fn) {
// 	for (let i = 0; i < this.length; i++) {
// 		fn(this[i], i, this);
// 	}
// };
// MyArray.prototype.concat = function (...args) {
// 	const result = this;
// 	for (let i = 0; i < args.length; i++) {
// 		if (Array.isArray(args[i])) {
// 			result.push(...args[i]);
// 		} else if (MyArray.isMyArray(args[i])) {
// 			for (let j = 0; j < args[i].length; j++) {
// 				result.push(args[i][j]);
// 			}
// 		} else {
// 			result.push(args[i]);
// 		}
// 	}
// 	return result;
// }; 

// MyArray.prototype.reverse = function() {
// 		const lastIndex = this.length - 1;
// 		for (let i = 0; i < Math.floor(this.length / 2); i++) {
// 			[this[i], this[lastIndex - i]] = [this[lastIndex - i], this[i]];
// 		}
// 		return this;
// 	}


function MyArrayProto() {
	// Implementation own push method
	this.push = function () {
		if (arguments) {
			for (let i = 0; i < arguments.length; i++) {
				this[this.length++] = arguments[i];
			}
		}
		return this.length;
	};
	// Implementation own pop method
	this.pop = function () {
		if (this.length === 0) {
			return;
		}
		const lastItem = this[this.length - 1];
		delete this[--this.length];
		return lastItem;
	};
	// Implementation own forEach method
	this.forEach = function (fn) {
		for (let i = 0; i < this.length; i++) {
			fn(this[i], i, this);
		}
	};
	// Implementation own some method
	this.some = function (fn) {
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				return true;
			}
		}
		return false;
	};
	// Implementation own every method
	this.every = function (fn) {
		for (let i = 0; i < this.length; i++) {
			if (!fn(this[i], i, this)) {
				return false;
			}
		}
		return true;
	};
	// Implementation own filter method
	this.filter = function (fn) {
		const newArray = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], i, this)) {
				newArray.push(this[i]);
			}
		}
		return newArray;
	};
	// Implementation own reverse method
	this.reverse = function () {
		const lengthMinusOne = this.length - 1;
		let temp;
		for (let i = 0; i < Math.floor(this.length / 2); i++) {
			[this[i], this[lengthMinusOne - i]] = [
				this[lengthMinusOne - i],
				this[i],
			];
		}
		return this;
	};
	// Implementation own map method
	this.map = function (fn) {
		const result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			result.push(fn(this[i], i, this));
		}
		return result;
	};
	// Implementation own concat method
	this.concat = function (...args) {
		const result = this;
		for (let i = 0; i < args.length; i++) {
			if (Array.isArray(args[i])) {
				result.push(...args[i]);
			} else if (MyArray.isMyArray(args[i])) {
				for (let j = 0; j < args[i].length; j++) {
					result.push(args[i][j]);
				}
			} else {
				result.push(args[i]);
			}
		}
		return result;
	};
} 
const myArr = new MyArray(20, 30);
const myArr1 = new MyArray(100, 500, 700, 900, 1000);

myArr.push(1, 5);
console.log(myArr);
// test pop
console.log(myArr.pop());
console.log(myArr);
// test concat
console.log(myArr.concat(myArr1));
// test forEach
myArr.forEach((item, index, arr) => {
	arr[index] = item * 10;
});
console.log(myArr1.reverse());*/
// =====================HW getting number================================
// debugger
/* function findSolution(target) {
	function find(current, history) {
		if (current === target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return (
				find(current * 5, `(${history} * 5)`) ||
				find(current * 3, `(${history} * 3)`) ||
				find(current + 5, `(${history} + 5)`) ||
				find(current + 3, `(${history} + 3)`)
			);
		}
	}
	return find(1, '1');
}
console.log(findSolution(26)); */
// ===================factorial with recursion=========================
function getFactorial(num) {
	if (num === 1 || !num) {
		return num;
	}
	return num * getFactorial(num - 1);
}
export default getFactorial;
console.log(getFactorial());
// ==============HW get new rate============================
/**
 * @param {number} winnerRate Winner's rate before game
 * @param {number} looserRate Looser's rate before game
 * @return {number} - Winner's rate after game
 */
export function getNewRate(winnerRate, looserRate) {
	const deltaRate = winnerRate - looserRate;
	if (
		winnerRate < 0 ||
		looserRate < 0 ||
		typeof winnerRate !== 'number' ||
		typeof looserRate !== 'number' ||
		Number.isNaN(deltaRate)
	) {
		return 'You entered wrong rate';
	}
	if (winnerRate === 0) {
		return looserRate;
	}
	if (deltaRate >= 0 && deltaRate <= 2) {
		return winnerRate + 2;
	}
	if (deltaRate > 2 && deltaRate < 20) {
		return winnerRate + 1;
	}
	if (deltaRate >= 20) {
		return winnerRate;
	}
	if (deltaRate < 0) {
		return winnerRate + Math.round((Math.abs(deltaRate) + 5) / 3);
	}
}
console.log(getNewRate(30, 51.1));
// export default getNewRate;
// ===========Father twofold older===============

/* function checkFatherAge(sonAge, fatherAge) {
	return (fatherAge - sonAge >= 15 && fatherAge > 0 && sonAge >= 0)
		? (fatherAge - 2 * sonAge)
		: 'You enterd wrong age';
}

console.log(checkFatherAge(15, 32)); */
