/* class Transport {
	constructor(type) {
		this.type = type;
	}
	#speed = 300;

	move() {
		return `I can move`;
	}

	get speed() {
		return this.#speed;
	}

	set speed(value) {
		if (value > 10) {
			this.#speed = value;
		}
	}

	go() {
		return `I can go`;
	}
}

class Vehicle extends Transport {
	static isVehile(obj) {
		return obj instanceof this;
	}
	constructor(type, weelAmount) {
		super(type);
		this.weelAmount = weelAmount;
	}
	go() {
		return `I can move on ${this.weelAmount} weels`;
	}
	move() {
		return `I can go`;
	}
}

class Engine {
	constructor(type, power) {
		this.type = type;
		this.power = power;
	}
}

const engine = new Engine('gas', 200);
class Car extends Vehicle {
	#price;
	#priceUnit = '$';

	static isCar(obj) {
		return obj instanceof this;
	}

	constructor(type, weelAmount, brand, model, price, engine) {
		super(type, weelAmount);
		this.brand = brand;
		this.model = model;
		this.#price = price;
		this.engine = engine;
		// composition
		// this.engine = new Engine('electro', 300)
	}

	get price() {
		return this.#addUnit();
	}

	#addUnit() {
		return `${this.#price} ${this.#priceUnit}`;
	}

	go() {
		console.log('method of parent');
		return super.go();
	}

	move() {
		return `I can drive`;
	}
}
const veh = new Vehicle('moto', 2);

const honda = new Car('car', 4, 'Honda', 'CRV', 50000, engine);

console.log(honda);
console.log(honda.go());
console.log(honda.price);
console.log(veh.move());
console.log(honda.move());

console.log(Car.isCar(honda));
console.log(Vehicle.isVehile(honda)); */
// console.log(veh.go());

// const transp = new Transport();
// // console.log(transp.#speed);
// console.log(transp.speed);
// transp.speed = 20;

// console.dir(Transport);
// console.log(transp);
// for (let key in transp) {
// 	console.log(key);
// }
// console.log(transp.move());
// Implementation Array in class
class MyArray{
	constructor(...args) {
		this.length = 0;
		for (let i = 0; i < args.length; i++){
			this.push(args[i]);
		}
	}

	static isMyArray(obj){
		return obj instanceof MyArray;
	}

	// push
	push(...args){
		if(args){
			for(let i = 0; i < args.length; i++){
				this[this.length++] = args[i];
			}
			return this.length;
		}
	}
	forEach(fn) {
		for (let i = 0; i < this.length; i++) {
			fn(this[i], i, this);
		}
	}
	some(fn){
		for(let i = 0; i < this.length; i++){
			if(fn(this[i], i, this)){
				return true;
			}
		}
		return false;
	}
	every(fn){
		if(this.length === 0){
			return true;
		}
		for(let i = 0; i < this.length; i++){
			if(!fn(this[i], i, this)){
				return false;
			}
		}
		return true;
	}
	reverse(){
		const lastIndex = this.length - 1;
		// let temp;
		for (let i = 0; i < Math.floor(this.length / 2); i++) {
			// temp = this[i];
			// this[i] = this[lastIndex - i];
			// this[lastIndex - i] = temp;
			[this[i], this[lastIndex - i]] = [this[lastIndex - i], this[i]];
		}
		return this;
	}
	concat(...args) {
		const result = this;
		for (let i = 0; i < args.length; i++) {
			if(Array.isArray(args[i])) {
				result.push(...args[i])
			}else if(MyArray.isMyArray(args[i])){
				for(let j = 0; j < args[i].length; j++) {
					result.push(args[i][j]);
				}
			}else{
				result.push(args[i]);
			}
		}
		return result;
	}
	flat(depth = 1){
		let newMyArray = new MyArray();
		this.forEach(item => {
			if(MyArray.isMyArray(item) && depth){
				const tempArr = item.flat(depth-1);
				newMyArray = newMyArray.concat(tempArr);
			}else if(item !== undefined){
				newMyArray.push(item);
			}
		})
		return newMyArray;
	}
}

const myArr = new MyArray(10, 20, 30, 0);
const myArrArr = new MyArray(
	1,
	2,
	new MyArray(3, 4, new MyArray(5, 6, new MyArray(7, undefined, 8)))
);
console.log(myArr.some((el)=> el % 3 === 0 ));
console.log(myArr.every((el)=> (el % 10 === 0 && el !== 0)));
console.log(myArr);
console.log(myArr);
console.log(myArr.concat(new MyArray(1,2,3,), [100,200,300], true));
console.log(myArrArr.flat(Infinity));