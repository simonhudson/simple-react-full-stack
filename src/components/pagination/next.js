'use strict';

import React from 'react';

const Next = props => {

	return (
		<>
			<button data-operation={props.operation} onClick={props.onClick} type="button">Next</button>
		</>
	);

};

export default Next;
