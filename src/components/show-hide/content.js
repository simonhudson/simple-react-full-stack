'use strict';

import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
		super(props);
        this.state = {
            default: props.defaultState
        }
	}

    componentDidMount = () => {
        
    };

    setClass = props => {
        let classes = [];
        classes.push(`show-hide-animate--${props.isHidden ? 'hide' : 'show'}`)
        return classes.join(' ');
    };

    render = () => {
        
        const { props } = this;
        const { children, id, isHidden } = props;
        
        return (
            <>
                <div className={`show-hide ${this.setClass(props)}`}>
                    {children}
                </div>
            </>
        );
    }
}

export { Content };
