'use strict';
// console.log(location)
// console.log(navigator)
// ===========geolocation================================
/* function success(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let altitude = position.coords.altitude;
	let speed = position.coords.speed;

	console.log(latitude);
	console.log(longitude);
	console.log(altitude);
	console.log(speed);
}

function error(obj){
  console.log('Geolocation error')
}

navigator.geolocation.getCurrentPosition(success, error); */
// ==============open, move, close =================
/* function openWiki() {
	const popup = open(
		'https://wikipedia.org',
		'_blank',
		'width=400,height=300,left=100,top=100'
	);
  popup.moveTo(500, 300);
  const timerId = setTimeout(() => popup.close(), 3000);
  // popup.close()
  // clearTimeout(timerId);
}

const span = document.querySelector('#new-rate');

span.addEventListener('click', openWiki); */
// =========watch================================
/* function updateTime(){
  const time = document.getElementById('time');
  const now = new Date();
  time.textContent = `${
      now.getHours() < 10 ? '0' + now.getHours() : now.getHours()} : 
       ${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()} :
       ${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`;
}
const intervalId = setInterval(updateTime, 1000)

// clearInterval(intervalId); */
// =========cookie================
/* console.log(document.cookie)
document.cookie = 'login=tom';
document.cookie = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
console.log(document.cookie) */
// http://localhost:5501/
// ==========localStorage================================
/* localStorage.setItem('login', 'tom32@gmail.com');
localStorage.setItem('name', 'Jhon');

localStorage.clear()
// localStorage.removeItem('login');

const login = localStorage.getItem('login'); 
// console.log(login);
 
const user = {
  fName: 'John',
  lName: 'Doe',
  age: 30,
  isMarried: true,
  arr: [1,2,3],
  address: {
    city: 'San Francisco',
    country: 'USA',
  },
  sayHi() {'hi'}
}

const jsonUser = JSON.stringify(user);
console.log(jsonUser);

const person1 = JSON.parse(jsonUser);

console.log(person1);

// localStorage.setItem('user', user); */
//  Practice #1
const btnOk = document.querySelector('#btn-person :first-child');
// console.log(btnOk);
class Person {
	constructor(firstName, lastName, email, nickName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.nickName = nickName;
	}
}

function collectPropsFromForm(event){
  event.preventDefault();
  const collectionProps = Array.from(
		document.querySelectorAll('#person input[type="text"]')
  );
  const lastName = document.querySelector('input[name="lastName"]');
  const arrValues = collectionProps.map((item) => item.value);
  const person = new Person(...arrValues);
  localStorage.setItem(`${lastName.value}`, JSON.stringify(person));
  console.log(collectionProps);
  console.log(arrValues);
}

const mick = JSON.parse(localStorage.getItem(`Box`));
console.log(mick);

btnOk.addEventListener('click', collectPropsFromForm);

// emailInput.addEventListener('change', checkEmail);
