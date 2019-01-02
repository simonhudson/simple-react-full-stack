'use strict';

import React, { Component } from 'react';
import { Content } from './content';
import { Toggle } from './toggle';

class ShowHide extends Component {

    constructor(props) {
		super(props);
        this.state = {
            isHidden: (props.defaultState === 'hide')
        };
	}

    componentDidMount = () => {
        
    }
    
    doToggle = () => {
        const newState = !this.state.isHidden
        this.setState({ isHidden: newState });
    };

    render = () => {
        
        const { props } = this;
        const { children, defaultState, toggleTextHide, toggleTextShow } = props;
        
        return (
            <>
                {this.state.isHidden}
                <Toggle {...props} onClick={this.doToggle} isHidden={this.state.isHidden} />
                <Content {...props} isHidden={this.state.isHidden}>
                    {children}
                </Content>
            </>
        );
    }
}

export default ShowHide;
