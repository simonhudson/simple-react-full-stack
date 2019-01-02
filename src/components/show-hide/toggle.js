'use strict';

import React, { Component } from 'react';

class Toggle extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount = () => {
        
    }
    
    render = () => {
        
        const { props } = this;
        const { isHidden, onClick, toggleTextHide, toggleTextShow } = props;
        
        const text = (
            <button onClick={onClick}>
                {isHidden ? toggleTextShow : toggleTextHide}
            </button>
        );
        
        return (
            <>
                {text}
            </>
        );
    }
}

export { Toggle };
