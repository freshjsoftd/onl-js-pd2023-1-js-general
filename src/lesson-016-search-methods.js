'use strict';
/* function Player(firstName, lastName, foreHand, backHand, age, rate, city) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.foreHand = foreHand;
	this.backHand = backHand;
	this.age = age;
	this.rate = rate;
	this.city = city;
}
const maLong = new Player(
	'Ma',
	'Long',
	'Butterfly Tenergy 19',
	'Donic Acuda S1',
	35,
	40,
	'Dnipro'
);
const xuXin = new Player(
	'Xu',
	'Xin',
	'Butterfly Tenergy 05',
	'Stiga Calibra',
	30,
	38,
	'Kiev'
);
const kokiNiva = new Player(
	'Koki',
	'Niva',
	'DHS Huricane',
	'TSP',
	25,
	35,
	'Odessa'
);


const players = [maLong, xuXin, kokiNiva];

function getProps(limAge){
  if(this.age > limAge){
    console.log(`${this.firstName} ${this.lastName} is too old`);
  }else{
    for(let key in this) {
      console.log(`${key} = ${this[key]}`);
    }
  }
} */
// call and apply
/* const limAge = 25;
for(let i = 0; i < players.length; i++){
  getProps.apply(players[i], [limAge]);
  console.log('==================')
} */

// bind
/* const player = maLong;
const getPropsWithThis = getProps.bind(player, 40);
// getPropsWithThis();
const timoBoll = new Player(
	'Timo',
	'Boll',
	'Butterfly Tenergy 19',
	'Donic Acuda S1',
	35,
	40,
	'Dnipro'
);
timoBoll.run = getPropsWithThis;
timoBoll.run() */
// =====================
function getObj(key) {
	return this[key];
}
// console.log(getObj())
function Country(
	title = 'Ukraine',
	capital = 'Kiyv',
	area = 8e5,
	population = 4.8e7
) {
	this.title = title;
	this.capital = capital;
	this.area = `${area} square km`;
	this.population = `${population} persons`;
	// this.getCountry = getObj;
}

const ukraine = new Country();
const usa = new Country('USA', 'Washington', 1e6, 15e7);
function printCountryPropeties(country) {
	for (let prop in country) {
		if (typeof country[prop] !== 'function')
			console.log(`${prop}: ${getObj.call(country, prop)}`);
	}
}
console.log(usa);
console.log(ukraine);

// debugger
printCountryPropeties(usa);
console.log('====================');
printCountryPropeties(ukraine);

