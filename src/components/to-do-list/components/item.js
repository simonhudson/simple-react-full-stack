'use strict';

import React, { Component } from 'react';

class ToDoItem extends Component {

    constructor(props) {
		super(props);
        
        this.state = {
            isComplete: false
        };
        
	}
    
    update = () => this.setState(prevState => ({ isComplete: !prevState.isComplete }))
    
    render() {
        
        const { props } = this;
        
        return (
            <>
                <li className={`${this.state.isComplete ? 'is-complete' : ''}`}>
                    <input onClick={this.update} type="checkbox" />&nbsp;
                    {props.text}
                </li>
            </>
        );
    }
}

export default ToDoItem;
