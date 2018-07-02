import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App'
import { isLoggedIn } from '../../utils/Helpers';

class LoginUser extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: isLoggedIn()
		}
	}

	loginUser = (event) => {
		event.preventDefault();

		let user = {
			username: event.target.elements.username.value,
			password: event.target.elements.password.value
		}
    axios.post(`${apiUrl}/auth/login`, JSON.stringify(user), {
			headers: {'Content-Type': 'application/json'}
		}).then(response => {
			NotificationManager.success(response.data.message);
			localStorage.setItem("access_token", response.data.access_token);
			localStorage.setItem("username", response.data.username);
			localStorage.setItem("first_name", response.data.first_name);
			localStorage.setItem("last_name", response.data.last_name);
			this.setState({loggedIn: true});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		})
	}

	render() {
		if (this.state.loggedIn) {
			window.location = "/";
		}
		return (
			<main role="main" className="container-fluid home-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-6">
						<p className="home-title">WeConnect</p>
						<p className="home-body">
						<br /> Welcome to WeConnect!
						<br />
						<br /> WeConnect brings businesses
						<br /> and users together, and allows
						<br /> users to review businesses.
						</p>
					</div>
					<div className="col-md-6">
						<form className="weconnect-form" onSubmit={this.loginUser}>
							<div className="form-group">
								<label className="control-label col-md-12" style={{textAlign: 'center'}}>Login</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Username" required autoFocus id="username" name="username" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" required id="password" name="password" />
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-default weconnect-btn" id="login" name="login" defaultValue="Login" />
							</div>
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default LoginUser;
