'use strict';

const CONFIG = {
	apiUrl: 'https://swapi.co/api/'
};

const get = options => {
	const { callback, endpoint } = options;
	fetch(`${CONFIG.apiUrl}${endpoint}`)
		.then(response => response.json())
		.then(data => callback(null, data))
		.catch(error => callback(error));
}

module.exports = {
	get
};
