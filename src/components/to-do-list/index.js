'use strict';

import React, { Component } from 'react';

const data = require('./data.json');
import ToDoItem from './components/item';

class ToDoList extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount() {
        
    }

    render() {
        
        return (
            <>
                <h1>To-do list</h1>
                {data.map(item => <ToDoItem text={item.text} />)}
            </>
        );
        
    }
}

export default ToDoList;
