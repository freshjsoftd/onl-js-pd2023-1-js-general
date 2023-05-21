'use strict';
/* const obj = {
  age: 20,
};
const arr = [1];
arr.valueOf()
console.dir(obj);
console.log(arr); */

// arr.__proto__.__proto__.valueOf.apply(arr);

// const arr1 = Array(1, 2);
function someFun(a){
  // return 'I am a function'
  return arguments;
}
const someFunExp = function (a){
  return arguments;;
}

const someArrowFun = (a, b, ...args) => {
  args.forEach(arg => console.log(arg));
};

// console.log(someFun(1, 2, 'donic'));
// console.log(someFunExp(2));
someArrowFun(1, 5, 8, 10,12,15,18,20,);

const numbArr = [1, 2, 3, 4, 5, 500, 1000, true,]

const newNumbArr = [8000, ...numbArr, 10000]

console.log(newNumbArr);

const max = Math.max(...numbArr)
console.log(max)



// =======================
/* function getObj() {
	return this;
}
function Country(
	title = 'Ukraine',
	capital = 'Kiyv',
	area = 8e5,
	population = 4.9e6,
) {
  // without new
  if(!new.target){
    return new Country(title, capital, area, population);
  }
  this.title = title;
  this.capital = capital;
  this.area = `${area} square km`;
  this.population = `${population} persons`;
  // this.getCountry = getObj;
}
console.dir(Country);
Country.prototype.getCountry = getObj;
Country.prototype.isEuroMember = true;

const ukraine = new Country();
const usa = new Country('USA', 'Washington', 1e6, 15e6);
function printCountryPropeties(country){
  for(let key in country) {
    if(typeof country[key] !== 'function')
    console.log(`${key}: ${country.getCountry()[key]}`);
  }
}
// console.log(usa);
console.log(ukraine);

// printCountryPropeties(usa);
console.log('====================');
printCountryPropeties(ukraine);  */