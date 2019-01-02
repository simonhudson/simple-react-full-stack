'use strict';

import React, { Component } from 'react';

import Counter from '../components/counter';
import DataList from '../components/data-list';
import ToDoList from '../components/to-do-list';
import ShowHide from '../components/show-hide';

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
                <ShowHide
                    defaultState="hide"
                    toggleTextShow="Show me"
                    toggleTextHide="Hide me"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla facilisis, tempus mauris quis, fringilla lectus. Mauris vel eleifend turpis. Vivamus iaculis felis in sapien pellentesque, laoreet cursus tellus convallis. Vivamus laoreet dolor tortor, id finibus lectus bibendum vel. Ut sollicitudin sit amet nisi sit amet aliquam. In scelerisque hendrerit risus, eu volutpat lacus pretium ut. Maecenas iaculis vel elit lacinia blandit. Cras eget eleifend nunc. Nullam arcu tellus, volutpat id quam at, auctor auctor metus. Pellentesque pulvinar rhoncus malesuada. In in urna eget neque viverra facilisis. Morbi risus leo, lobortis nec tincidunt id, dictum mollis nisl. Curabitur cursus molestie arcu nec lobortis. </p>
                </ShowHide>
            </>
        );
    }
}

export default App;
