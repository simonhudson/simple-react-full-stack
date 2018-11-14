'use strict';

import React, { Component } from 'react';
import palette from '../palette';
import styled, { css } from 'styled-components';

class Button extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		
		const props = this.props;

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

};

export default Button;
