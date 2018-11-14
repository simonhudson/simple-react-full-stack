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
        
        const items = [];
        data.forEach(item => items.push(<ToDoItem text={item.text} />));
        
        return (
            <>
                <h1>To-do list</h1>
                {items}
            </>
        );
    }
}

export default ToDoList;
