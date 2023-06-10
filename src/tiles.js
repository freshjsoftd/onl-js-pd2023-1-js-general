'use strict';

function random(number) {
	return Math.floor(Math.random() * number);
}

function bgChange() {
	return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
function setBackground(e) {
	// console.log(this);
	// console.log(e.target);
	// console.log(e.currentTarget);
	return (e.target.style.backgroundColor = bgChange());
}

const container = document.querySelector('#container');
container.addEventListener('click', setBackground);
/* container.addEventListener('click', (event) => {
  console.log(this)
	console.log(event.target);
	console.log(event.currentTarget);
	return (event.target.style.backgroundColor = bgChange());
}); */
