'use strict';

import React, { Component } from 'react';

class AddItem extends Component {

	constructor(props) {
		super(props);
        
        this.state = {
            inputValue: false
        };
        
	}
	
	updateInputValue = e => this.setState({ inputValue: e.target.value }); 
	
	render = () => {
		const { props } = this;
		return (
			<>
				<input id="to-do__add" onChange={this.updateInputValue} placeholder="Add item" type="text" />
				<button onClick={e => props.onClick(this.state.inputValue)} type="button">Add</button>
			</>
		);
	}

};

export default AddItem;
