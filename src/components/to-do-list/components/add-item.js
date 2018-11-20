'use strict';

import React, { Component } from 'react';

class AddItem extends Component {

	constructor(props) {
		super(props);
        
        this.state = {
            inputValue: ''
        };
        
	}
	
	updateInputValue = e => this.setState({ inputValue: e.target.value });
	
	sendValue = () => {
		this.setState({ inputValue: '' });
		this.props.onClick(this.state.inputValue)
	}
	
	render = () => {
		return (
			<>
				<input id="to-do__add" onChange={this.updateInputValue} placeholder="Add item" type="text" value={this.state.inputValue} />
				<button onClick={this.sendValue} type="button">Add</button>
			</>
		);
	}

};

export default AddItem;
