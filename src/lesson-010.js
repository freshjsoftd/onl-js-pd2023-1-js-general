'use strict';
let color = 'black';
let wigh = 500
if (color === 'red') {
	console.log('no go');
} else if (color === 'yellow') {
	console.log('wait');
} else if (color === 'green') {
	console.log('go');
}else{
  console.log('no streetlight');
}

let variant = 'rrr';
let result = typeof variant;
// console.log(result)
switch (result) {
	case 'string':
		console.log(`${variant} is a string`);
		break;
	case 'number':
		console.log(`${variant} is a number`);
		break;
	case 'bigint':
		console.log(`${variant} is a bigint`);
		break;
	case 'boolean':
		console.log(`${variant} is a boolean`);
		break;
	case 'function':
		console.log(`${variant} is a function`);
		break;
	case 'object':
		console.log(`${variant} is a object`);
		break;
	case 'undefined':
		console.log(`${variant} is a undefined`);
		break;
	default:
		console.log(`${variant} is I don't know what`);
}

// Switch for animals
// birds: sparrow, hawk, falcon, eagle, owl
// fishes: salmon, pike, carp, crucian, shark, tuna
// mammalia: dog, cat, whale, horse, human
let creature = 'sparrow';
switch (creature) {
	case 'sparrow':
	case 'hawk':
	case 'falcon':
	case 'eagle':
	case 'owl':
		console.log('It is a bird');
		break;
	case 'salmon':
	case 'pike':
	case 'carp':
	case 'crucian':
	case 'shark':
	case 'tuna':
		console.log('It is a fish');
		break;
	case 'dog':
	case 'cat':
	case 'whale':
	case 'horse':
	case 'human':
		console.log('It is a mammal');
		break;
	default: console.log('It is an unknown creature');
}
let numb = 4
numb > 5
	? console.log('it is cool')
	: numb <= 5 && numb > 3
	? console.log('no bed')
	: console.log('bed');

