'use strict';

module.exports = (data, sortKey, sortDirection) => {
	const isDescending = sortDirection === 'descending';
	const sorted = data.sort((a, b) => {
		let sortKeyA = a[sortKey];
		let sortKeyB = b[sortKey];
		if (!isNaN(parseInt(sortKeyA, 10))) sortKeyA = parseInt(sortKeyA, 10);
		if (!isNaN(parseInt(sortKeyB, 10))) sortKeyB = parseInt(sortKeyB, 10);
		if (isDescending) return ~~(sortKeyA < sortKeyB); 
		return ~~(sortKeyA > sortKeyB);
	});
	return sorted;
};
