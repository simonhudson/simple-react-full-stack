'use strict';

import React, { Component } from 'react';
import Button from '../button';

const COUNTER_LIMIT_UPPER = 5;
const COUNTER_LIMIT_LOWER = 0;

class Counter extends Component {

    constructor(props) {
		super(props);
        
        this.state = {
            counterValue: null
        };
        
	}

    componentDidMount() {
        this.setState({ counterValue: 0 });
    }
    
    increment = () => {
        const { counterValue } = this.state;
        if (counterValue === COUNTER_LIMIT_UPPER) return;
        this.setState({ counterValue: counterValue + 1 });
    }
    
    decrement = () => {
        const { counterValue } = this.state;
        if (counterValue === COUNTER_LIMIT_LOWER) return;
        this.setState({ counterValue: counterValue - 1 });
    }

    render() {
        return (
            <>
                <h1>Counter</h1>
                <p>{this.state.counterValue}</p>
                <Button onClick={this.increment} text='+' />
                <Button onClick={this.decrement} text='-' />
            </>
        );
    }
}

export default Counter;
