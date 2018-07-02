import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App';
import { isLoggedIn, clearUser } from '../../utils/Helpers';

class ProfileUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			first_name: '',
			last_name: '',
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount() {
		this.setState({
			username: localStorage.getItem("username"),
			first_name: localStorage.getItem("first_name"),
			last_name: localStorage.getItem("last_name"),
		});
	}

	resetPassword = (event) => {
		event.preventDefault();
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/auth/reset-password`).then(response => {
			NotificationManager.success(response.data.message);
			NotificationManager.info(response.data.new_password);
			window.confirm('Save the new password: ' + response.data.new_password);
			localStorage.removeItem("access_token");
			clearUser();
			window.location = '/auth/login';
		});
	}

  render() {
		if (!this.state.loggedIn) {
	  	window.location = "/";
		}

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
										<th style={{textAlign: 'right'}}>Name:</th><td>{this.state.first_name} {this.state.last_name}</td>
									</tr>
									<tr>
										<th style={{textAlign: 'right'}}>Username:</th><td>{this.state.username}</td>
									</tr>
									<tr>
										<th colSpan={2} style={{textAlign: 'right'}}><button className="btn btn-warning btn-sm" onClick={this.resetPassword}>Reset password</button></th>
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

export default ProfileUser;
