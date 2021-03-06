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
    
    render = () => {
        
        const { props } = this;
        
        return (
            <>
                <li className={`to-do__item ${this.state.isComplete ? 'is-complete' : ''}`}>
                    <input id={`to-to-item--${props.key}`} onClick={this.update} type="checkbox" />&nbsp;
                    <label htmlFor={`to-to-item--${props.key}`}>{props.text}</label>
                    <button onClick={e => props.deleteOnClick(props.key)} type="button">Delete</button>
                </li>
            </>
        );
    }
}

export default ToDoItem;
