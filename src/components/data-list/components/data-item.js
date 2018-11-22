'use strict';

import React from 'react';

const DataItem = props => {
	
	return (
		<tr>
			{props.dataToDisplay.map((item, i) => <td headers={item.value} key={i}>{props.item[item.value]}</td>)}
		</tr>
	);

};

export default DataItem;
