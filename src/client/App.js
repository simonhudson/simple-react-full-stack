'use strict';

import React, { Component } from 'react';

import Counter from '../components/counter';
import DataList from '../components/data-list';
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
                <DataList endpoint="people"/>
            </>
        );
    }
}

export default App;
