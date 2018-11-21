'use strict';

import React, { Component } from 'react';
import AddItem from './components/add-item';
import ToDoItem from './components/item';

const moment = require('moment');

class ToDoList extends Component {

    constructor(props) {
		super(props);
        
        this.state = {
            items: []
        }
        
	}
    
    componentDidMount = () => {
        
    }
    
    addItem = value => {
        const { items } = this.state;
        items.push({
            added: moment().toISOString(),
            text: value
        });
        this.setState({ items });
    }
    
    deleteItem = index => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({ items });
    }
    
    render = () => {
        
        const { items } = this.state;
        
        return (
            <>
                <h1>To-do list</h1>
                <ul className="to-do__list">
                    {items.map((item, i) => <ToDoItem deleteOnClick={this.deleteItem} text={item.text} key={i} />)}
                </ul>
                <AddItem onClick={this.addItem} />
            </>
        );
    }
    
}

export default ToDoList;
