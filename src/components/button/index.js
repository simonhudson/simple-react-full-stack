'use strict';

import React, { Component } from 'react';
import { palette } from '../../config';
import styled, { css } from 'styled-components';

const Button = props => {
	
	const Button = styled.button`
		background: ${palette.brand.a};
		border-radius: 5px;
		border: 2px solid transparent;
		color: #fff;
		font-size: 1em;
		padding: 0.75em 1.25em;  
	`;
	
	return (
		<>
			<Button onClick={props.onClick}>{props.text}</Button>
		</>
	);
	
}

export default Button;
