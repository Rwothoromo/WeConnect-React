import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App';
import { NotificationManager } from 'react-notifications';
import { isLoggedIn } from '../../utils/helpers';

class BusinessesList extends Component {
	constructor() {
		super();
		this.state = {
			businesses_list: [],
			next_page: null,
			prev_page: null,
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses`).then(response => {
			this.setState({
				businesses_list: response.data.businesses,
				next_page: response.data.next_page,
				prev_page: response.data.prev_page
			});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
			window.location = '/businesses/register';
		});
	}

	searchBusinesses = (event) => {
		event.preventDefault();
		let q = event.target.elements.q.value
		let	category = event.target.elements.category.value
		let location = event.target.elements.location.value
	
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses?q=${q}&category=${category}&location=${location}`, {
			headers: {'Content-Type': 'application/json'}
		}).then(response => {
			this.setState({
				businesses_list: response.data.businesses,
				next_page: response.data.next_page,
				prev_page: response.data.prev_page
			});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		})
	}

	render() {
		if (!this.state.loggedIn) {
			return (<Redirect to="/auth/login"/>);
		}
		let businesses = this.state.businesses_list.map((business, index) => {
			return (
				<tr key={index}>
					<td>{business.name}</td>
					<td>{business.description}</td>
					<td>{business.category_name}</td>
					<td>{business.location_name}</td>
					<td align="center">
						<a href={'/businesses/show/' + business.id} className="btn btn-info btn-sm">View</a>
					</td>
				</tr>
			);
		});

		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<form className="weconnect-form" onSubmit={this.searchBusinesses}>
							<div className="row col-md-12">
								<div className="col-md-3">
									<input type="text" className="form-control" placeholder="Business name" id="q" name="q" defaultValue="" />
								</div>
								<div className="col-md-3">
									<input type="text" className="form-control" placeholder="Category" id="category" name="category" defaultValue="" />
								</div>
								<div className="col-md-3">
									<input type="text" className="form-control" placeholder="Location" id="location" name="location" defaultValue="" />
								</div>
								<div className="col-md-3">
									<input type="submit" className="btn btn-success" defaultValue="Search" />
								</div>
							</div>
						</form>
						<br />
						<div className="table-responsive">
							<table className="table table-striped table-bordered table-hover table-condensed">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Category</th>
										<th>Location</th>
										<th>View</th>
									</tr>
								</thead>
								<tbody>
									{businesses}
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default BusinessesList;
