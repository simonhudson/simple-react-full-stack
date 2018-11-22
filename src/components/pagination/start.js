'use strict';

import React from 'react';

const Start = props => {

	return (
		<>
			<button data-operation="start" onClick={props.onClick} type="button">Start</button>
		</>
	);

};

export default Start;
