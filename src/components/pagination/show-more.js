'use strict';

import React from 'react';

const ShowMore = props => {

	return (
		<>
			<button disabled={props.disabled} onClick={props.onClick} type="button">Show more</button>
		</>
	);

};

export default ShowMore;
