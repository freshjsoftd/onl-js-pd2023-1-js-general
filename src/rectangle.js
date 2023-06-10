'use strict';
const rootSquare = document.getElementById('square1');
const secondSquare = document.getElementById('square2');
const thirdSquare = document.getElementById('square3');

rootSquare.addEventListener('click', (e) => {
	// e.stopPropagation();
	// e.stopImmediatePropagation();
	console.log('1');
	// console.log(e.target);
	// console.log(e.currentTarget);
},
// true
);
secondSquare.addEventListener('click', (e) => {
	// e.stopPropagation();
	// e.stopImmediatePropagation();
	console.log('2');
	// console.log(e.target);
	// console.log(e.currentTarget);
}, 
// {
// 	capture: true,
// 	once: true,
// }
// true
);
secondSquare.addEventListener('click', (e) => {
	// e.stopPropagation();
	// e.stopImmediatePropagation();
	console.log('2-2');
}, 
// {
// 	// caprture: true,
// 	once: true
// }
// true
);
thirdSquare.addEventListener(
	'click',
	(e)=> {
		// e.stopPropagation();
		// e.stopImmediatePropagation();
		console.log('3');
		// console.log(e.target);
		// console.log(e.currentTarget);
	},
	// true
);