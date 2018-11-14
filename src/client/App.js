'use strict';

import React, { Component } from 'react';

import Counter from '../components/counter';
import ToDoList from '../components/to-do-list';

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
                <ToDoList />
            </>
        );
    }
}

export default App;
