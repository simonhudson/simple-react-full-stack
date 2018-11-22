'use strict';

const CONFIG = {
	apiUrl: 'https://swapi.co/api/'
};

const setUrl = endpoint => {
	if (endpoint.indexOf(CONFIG.apiUrl) > -1) return endpoint;
	return `${CONFIG.apiUrl}${endpoint}`;
};

const get = options => {
	const { callback, endpoint } = options;
	fetch(setUrl(endpoint))
		.then(response => response.json())
		.then(data => callback(null, data))
		.catch(error => callback(error));
}

module.exports = {
	get
};
