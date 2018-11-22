'use strict';

import React from 'react';

const SortOption = props => {

	if (props.omitFromSort) return null;

	return (
		<>
			<option value={props.value}>{props.text}</option>
		</>
	);

};

export default SortOption;
