'use strict';

import React from 'react';

const ShowMore = props => {

	console.log('--------------------');
	console.log(props);
	console.log('--------------------');

	return (
		<>
			<button onClick={props.onClick} type="button">Show more</button>
		</>
	);

};

export default ShowMore;
