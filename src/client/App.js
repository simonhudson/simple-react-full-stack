'use strict';

import React, { Component } from 'react';

import Counter from '../components/counter';

class App extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <Counter />
            </>
        );
    }
}

export default App;
