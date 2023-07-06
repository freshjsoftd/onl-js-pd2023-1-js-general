'use strict';
// =================API OpenWeather======================
const btnWeather = document.querySelector('#btn-weather');
const cityNameInp = document.querySelector('#city-name');
const cityIdInp = document.querySelector('#city-id');
const cityNameRadio = document.querySelector('#city-opt-name');
const cityIdRadio = document.querySelector('#city-opt-id');
const weatherTemp = document.querySelector('#temp');
const weatherWindSpeed = document.querySelector('#wind-speed');
const weatherHumidity = document.querySelector('#humidity');

cityIdInp.setAttribute('disabled', true);

cityIdRadio.addEventListener('change', () => {
	if (cityIdRadio.checked) {
		cityIdInp.removeAttribute('disabled');
    cityNameInp.setAttribute('disabled', true);
	}
});
cityNameRadio.addEventListener('change', () => {
	if (cityNameRadio.checked) {
		cityNameInp.removeAttribute('disabled');
		cityIdInp.setAttribute('disabled', true);
	}
});

const param = {
	url: 'https://api.openweathermap.org/data/2.5/',
	appid: '0e6d1d3bff8e0a32e113767624f5060e',
	cityName: 'Dnipro',
	cityId: 709930,
};
// Kiev 703448
// Dnipro 709930
// Madras 1264527
// console.dir(cityNameRadio);

async function getWeather() {
	// e.preventDefault();
	const cityName = cityNameInp.value;
	const cityId = cityIdInp.value;
  const cityParam = cityNameRadio.checked ? `q=${cityName}` : `id=${cityId}`;
	const url = `${param.url}weather?${cityParam}&units=metric&lang=uk&APPID=${param.appid}`;
	const weatherRequest = new Request(url);
	try {
		const weather = await fetch(weatherRequest);
		if (!weather.ok) throw new Error(`Failed to fetch weather`);
		const weatherJson = await weather.json();
		console.log(weatherJson);
			weatherTemp.textContent = weatherJson.main.temp + ' °C';
			weatherWindSpeed.textContent = weatherJson.wind.speed + ' m/s';
			weatherHumidity.textContent = weatherJson.main.humidity;
	} catch (error) {
		console.log(error);
	}
}
btnWeather.addEventListener('click', getWeather);
// getWeather();
