import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from '../../App';
import decode from 'jwt-decode';
import { NotificationManager } from 'react-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { isLoggedIn } from '../../utils/Helpers';
import Paginator from '../shared/Paginator';
import BusinessSearch from './BusinessSearch';
import BusinessCards from './BusinessCards';
import BusinessModals from './BusinessModals';
import RegisterBusiness from './RegisterBusiness';

/**
 * List all businesses in a searchable, paginated display
 * 
 * ```html
 * <BusinessesList />
 * ```
 */
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

	componentDidMount() {
		// Query and return businesses, and paginate them.
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses?limit=3`).then(response => {
			this.setState({
				businesses_list: response.data.businesses,
				next_page: response.data.next_page,
				prev_page: response.data.prev_page
			});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	searchBusinesses = (event) => {
		// Search for businesses by name, category and/or location.
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

	handlePageChange = (event, page) => {
		// Query and return businesses for the requested page.
		event.preventDefault();

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses?limit=3&page=${page}`, {
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

		let user = decode(localStorage.getItem("access_token"));

		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<RegisterBusiness />
				<BusinessModals />
				<div className="row col-md-12">
					<div className="col-md-3" />
					<div className="col-md-6 weconnect-div">
						<BusinessSearch searchBusinesses={this.searchBusinesses} />
						<button title="Add business" type="button" className="btn btn-primary btn-sm" style={{marginBottom: 10, marginLeft: 20}}
							data-toggle="modal" data-target="#registerBusinessModal" data-backdrop="false">
							Add a business <FontAwesomeIcon icon={faPlus} />
						</button>
						<BusinessCards user={user} businesses_list={this.state.businesses_list} />
						<Paginator prev_page={this.state.prev_page} next_page={this.state.next_page} handlePageChange={this.handlePageChange} />
					</div>
					<div className="col-md-3" />
				</div>
			</main>
		);
	}
}

export default BusinessesList;
