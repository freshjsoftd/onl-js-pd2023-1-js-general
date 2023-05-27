class Transport {
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
console.log(Vehicle.isVehile(honda));
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
