'use strict';

import React from 'react';
import Option from './option';

const SortUI = props => {

	const { options } = props;

	return (
		<>
			<label htmlFor="sort">Sort</label>
			<select id="sort" onChange={props.onChange}>
				<option>Sort by</option>
				{options.map((option, i) => <Option {...option} key={i} />)}
			</select>
		</>
	);

};

export default SortUI;