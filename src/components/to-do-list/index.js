'use strict';

import React, { Component } from 'react';
import ToDoItem from './components/item';

const data = require('./data');

const ToDoList = props => {
    
    return (
        <>
            <h1>To-do list</h1>
            <ul className="to-do__list">
                {data.map((item, i) => <ToDoItem text={item.text} index={i} />)}
            </ul>
        </>
    );
    
}

export default ToDoList;
