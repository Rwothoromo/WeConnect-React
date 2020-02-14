import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { apiUrl } from '../../App';
import { isLoggedIn, clearUser } from '../utils/Helpers';
import Button from 'react-bootstrap/Button';

/**
 * User profile page with password reset button
 *
 * ```html
 * <Profile />
 * ```
 *
 * @returns {component} Profile
 */
class Profile extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			first_name: '',
			last_name: '',
			loggedIn: isLoggedIn(localStorage)
		}
	}

	componentDidMount = () => {
		this.setState({
			username: localStorage.getItem("username"),
			first_name: localStorage.getItem("first_name"),
			last_name: localStorage.getItem("last_name"),
		});
	}

	/**
	 * Password reset event
	 *
	 * @param {event} event The submit event
	 *
	 * @returns {None} Null
	 */
	resetPassword = (event) => {
		event.preventDefault();

		let confirm = window.confirm("This action will reset your password! Proceed?");
		if (!confirm) return;

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/auth/reset-password`).then(response => {
			NotificationManager.success(response.data.message);
			NotificationManager.info(response.data.new_password);
			alert('Save the new password: ' + response.data.new_password);
			localStorage.removeItem("access_token");
			clearUser();
			window.location = '/auth/login';
		});
	}

	render() {
		if (!this.state.loggedIn) { return (<Redirect to="/auth/login" />); }

		return (
			<main role="main" className="container-fluid home-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<br />
						<div className="text-center text-white">
							<h2 className="display-4">User Profile</h2>
							<div className="text-left table-responsive">
								<table className="table h4">
									<tr>
										<th style={{ textAlign: 'right' }}>Name:</th><td>{this.state.first_name} {this.state.last_name}</td>
									</tr>
									<tr>
										<th style={{ textAlign: 'right' }}>Username:</th><td>{this.state.username}</td>
									</tr>
									<tr>
										<th colSpan={2} style={{ textAlign: 'right' }}><Button className="btn btn-warning btn-sm" onClick={this.resetPassword}>Reset password</Button></th>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default Profile;
