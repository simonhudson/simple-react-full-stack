'use strict';

import React, { Component } from 'react';
import DataItem from './components/data-item';
import Loading from '../../components/loading';

const api = require('../../functions/api');
const sortData = require('../../functions/sort-data');

class DataList extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			apiResponse: {
				data: null,
				metadata: null
			},
			errorMessage: null,
			isLoading: true
		}
		
	}
	
	componentDidMount() {
		api.get({ endpoint: this.props.endpoint, callback: this.handleApiResponse })
	}
	
	handleApiResponse = (err, data) => {
		this.setState({
			errorMessage: err ? 'Could not load data' : null,
			isLoading: false,
			apiResponse: {
				data: err ? null : data.results,
				metadata: err
					? null
					: {
						count: data.count,
						next: data.next,
						previous: data.previous
					}
			}
		});
	}
	
	sort = e => {		
		this.setState({
			apiResponse: {
				data: sortData(this.state.apiResponse.data, e.target.dataset.sortKey)
			}
		});
	}
	
	render() {
		if (this.state.isLoading) return <Loading />;
		if (this.state.errorMessage) return <div>{this.state.errorMessage}</div>;
		return (
			<>
				<ul>
					{this.state.apiResponse.data.map((item, i) => <DataItem {...item} key={i} />)}
				</ul>
				<button data-sort-direction="ascending" data-sort-key="name" onClick={this.sort}>Sort</button>
			</>
		)
	}

};

export default DataList;
