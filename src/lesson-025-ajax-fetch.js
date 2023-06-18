'use strict';
// AJAX - Asynchronous JavaScript And XML
// XMLHttpRequest
/* const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
  console.log(xhr.response);
  console.log(xhr.status);
  localStorage.setItem('users', JSON.stringify(xhr.response));
} */
// ================Fetch API=====================
/* const requestSrs = 'users';
const myRequest = new Request(
	`https://jsonplaceholder.typicode.com/${requestSrs}`
);
fetch(myRequest)//promise result = response
	.then((response) => {
		console.log(response);
		return response.json();
	})
	.then((json) => {
		console.log(json);
		localStorage.setItem(requestSrs, JSON.stringify(json));
	});

const users = JSON.parse(localStorage.getItem(requestSrs));
console.log(users);
users.forEach((user) =>
	console.log(
		`Name is: ${user.name},
    email is: ${user.email}
    phone is: ${user.phone}
    ======================`
	)
); */
// ==============POST============
/* const sendPostRequest = async () => {
	const url = `https://jsonplaceholder.typicode.com/users`;
	const body = {
		name: 'Jhon Doe',
		username: 'Jhon',
		email: 'jhon@example.com',
	};
	const headers = new Headers();
	headers.append('Content-Type', 'application/json; charset=UTF-8');
	const options = {
		method: 'POST',
		body: JSON.stringify(body),
		headers,
	};
	const request = new Request(url, options);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.status);
		const json = await response.json();
		localStorage.setItem('postUser', JSON.stringify(json));
		console.log(json);
	} catch (error) {
		console.log(error);
	}
};
sendPostRequest(); */
// ===============PUT============
/* const sendPutRequest = async () => {
	const url = `https://jsonplaceholder.typicode.com/users/1`;
	const body = {
		id: 1,
		name: 'Jane Smith',
		username: 'Jane',
		email: 'jane@example.com',
	};
	const headers = new Headers();
	headers.append('Content-Type', 'application/json; charset=UTF-8');
	const options = {
		method: 'PUT',
		body: JSON.stringify(body),
		headers,
	};
	const request = new Request(url, options);
	try {
		const response = await fetch(request);
		if (!response.ok) throw new Error(response.status);
		const json = await response.json();
    console.log(json)
	} catch (error) {}
};
sendPutRequest(); */
// =============PATCH=================
/* const patchRequestJPH = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users/1';
	const body = {
		email: 'jane_smith@typicode.com',
	};
	const headers = new Headers();
	headers.append('Content-Type', 'application/json; charset=UTF-8');
	const init = {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: headers,
	};
	const request = new Request(url, init);
	try {
		const response = await fetch(request);
    if(!response.ok) throw Error(response.statusText)
		const json = await response.json();
    console.log(json);
	} catch (error) {
    console.log('error', error);
  }
};
patchRequestJPH(); */
// =============DELETE=================
/* const deleteRequestJPH = async () => {
	const url = 'https://jsonplaceholder.typicode.com/users/2';
	const init = {
		method: 'DELETE',
	};
	const request = new Request(url, init);
	try {
		const response = await fetch(request);
    console.log(response);
    if(!response.ok) throw Error(response.status)
		const json = await response.json();
    console.log(json);
	} catch (error) {
    console.log('error', error);
  }
};
deleteRequestJPH(); */
// =============Get nested resources=================
/* const nestedRequestJPH = async () => {
	const url = 'https://jsonplaceholder.typicode.com/albums/2/photos';
	const request = new Request(url);
	try {
		const response = await fetch(request);
    console.log(response);
    if(!response.ok) throw Error(response.statusText)
		const json = await response.json();
    console.log(json);
	} catch (error) {
    console.log('error', error);
  }
};
nestedRequestJPH(); */
// ============Load images with fetch API =================
/* const myImage = document.querySelector('img');
// console.log(myImage);

const myRequest2 = new Request('../assets/imgs/GOT.jpg');

fetch(myRequest2)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }
    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  })
  .catch((err) => console.log(err)) */
  // ==============API Weather =============================
  /* const param = {
	url: 'https://api.openweathermap.org/data/2.5/',
	appid: '0e6d1d3bff8e0a32e113767624f5060e',
	cityName: 'Kiev',
	cityId: 709930,
};
// Kiev 703448

function getWeather(){
  fetch(
		`${param.url}weather?q=${param.cityName}&units=metric&APPID=${param.appid}`
  )
		.then((weather) => {
			console.log(weather);
			return weather.json();
		})
		.then((data) => {
			console.log(data);
		});
}
getWeather(); */
async function getPBOffice() {
	const url =
		'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
	const officeHeaders = new Headers();
	officeHeaders.append('Content-Type', 'application/json');
	// officeHeaders.append('Allow', 'OPTION, GET, POST, PUT, DELETE');
	// officeHeaders.append('Origin', 'http://localhost:5502');
	// officeHeaders.append('Access-Control-Allow-Origin', '*');
	// officeHeaders.append('Referrer-Policy', 'origin-when-cross-origin');
	const offInit = {
		method: 'GET',
		headers: officeHeaders,
		mode: 'no-cors',
	};
	const offRequest = new Request(url, offInit);
	try {
		const response = await fetch(offRequest);
		console.log(response);
		if (!response.ok) throw new Error(response.status);
		const result = await response.json();
		console.log(result);
		localStorage.setItem('officies', JSON.stringify(result));
	} catch (error) {
		console.log(error);
	}
}
getPBOffice();