'use strict';

import React from 'react';

const Previous = props => {
	
	return (
		<>
			<button data-operation="previous" disabled={props.disabled} onClick={props.onClick} type="button">Previous</button>
		</>
	);

};

export default Previous;
