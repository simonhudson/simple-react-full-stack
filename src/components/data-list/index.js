'use strict';

import React, { Component } from 'react';
import DataItem from './components/data-item';
import Loading from '../../components/loading';
import Next from '../../components/pagination/next';
import Previous from '../../components/pagination/previous';
import ShowMore from '../../components/pagination/show-more';
import SortUI from '../../components/sort';

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
		api.get({ endpoint: this.props.endpoint, callback: this.handleApiResponse });
	}
	
	handleApiResponse = (err, data) => {
		const currentData = this.state.apiResponse.data;
		const newData = currentData ? currentData.concat(data.results) : data.results;
		this.setState(prevState => ({
			errorMessage: err ? 'Could not load data' : null,
			isLoading: false,
			apiResponse: {
				data: err ? null : newData,
				metadata: err
					? null
					: {
						count: data.count,
						next: data.next,
						previous: data.previous
					}
			}
		}));
	}
	
	sort = e => {
		this.setState({
			apiResponse: {
				data: sortData(this.state.apiResponse.data, e.target.value)
			}
		});
	}
	
	showMore = e => {
		this.setState({ isLoading: true });
		api.get({ endpoint: this.state.apiResponse.metadata.next, callback: this.handleApiResponse });
	};
	
	paginate = e => {
		const operation = e.target.dataset.operation;
		const endpoint = this.state.apiResponse.metadata[operation];
		if (!endpoint) return;
		this.setState({
			apiResponse: { data: null },
			isLoading: true
		});
		api.get({ endpoint, callback: this.handleApiResponse });
	};
	
	render() {
		if (this.state.isLoading) return <Loading />;
		if (this.state.errorMessage) return <div>{this.state.errorMessage}</div>;
		
		const dataToDisplay = [
			{ text: 'Name', value: 'name' },
			{ text: 'Height', value: 'height' },
			{ text: 'Mass', value: 'mass' },
			{ text: 'Gender', value: 'gender' }
		];
		
		return (
			<>
				<hr />
				<table>
					<thead>
						<tr>
							{dataToDisplay.map((item, i) => <th id={item.value} key={i}>{item.text}</th>)}
						</tr>
					</thead>
					<tbody>
						{this.state.apiResponse.data.map((item, i) => <DataItem item={item} dataToDisplay={dataToDisplay} key={i} />)}
					</tbody>
				</table>
				<br />
				<SortUI onChange={this.sort} options={dataToDisplay} />
				<ShowMore onClick={this.showMore} disabled={!this.state.apiResponse.metadata.next} />
				<Previous onClick={this.paginate} disabled={!this.state.apiResponse.metadata.previous} />
				<Next onClick={this.paginate} disabled={!this.state.apiResponse.metadata.next} />
				<hr />
			</>
		)
	}

};

export default DataList;
