import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactPasswordStrength from 'react-password-strength';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";

class RegisterUser extends Component {
	constructor() {
		super();
		this.state = {
			registered: false
		}
	}

	registerUser = (event) => {
		event.preventDefault();
		var passwordStrength = document.getElementsByClassName("ReactPasswordStrength-strength-desc")[0];

		if (event.target.elements.password.value !== event.target.elements.confirm_password.value) {
			NotificationManager.error("Passwords do not match!");
		} else if (passwordStrength.innerHTML === 'weak') {
			NotificationManager.error("Please use a stronger password!");
		} else {
			let user = {
				first_name: event.target.elements.first_name.value,
				last_name: event.target.elements.last_name.value,
				username: event.target.elements.username.value,
				password: event.target.elements.password.value
			}
			axios.post(`http://127.0.0.1:5000/api/v2/auth/register`, JSON.stringify(user), {
				headers: {'Content-Type': 'application/json'}
			}).then(response => {
				NotificationManager.success(response.data.message);
				this.setState({registered: true});
			}).catch(error => {
				NotificationManager.error(error.response.data.message);
			})
		}
	}

	render() {
		if (this.state.registered) {
			return (<Redirect to="/users/login"/>)
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
						<form className="weconnect-form" id="register-user" onSubmit={this.registerUser}>
							<div className="form-group">
								<label className="control-label col-md-12" style={{textAlign: 'center'}}>Register</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="First name" id="first_name" name="first_name" required />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Last name" id="last_name" name="last_name" required />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Username" id="username" name="username" required />
							</div>
							<div className="form-group">
								<ReactPasswordStrength
									className="form-control"
									minLength={5}
									minScore={2}
									scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
									inputProps={{ type: "password", placeholder: "Password", id: "password", name: "password", required: "required", autoComplete: "off", className: "form-control" }}
									/>
							</div>
							<div className="form-group">
								<ReactPasswordStrength
									className="form-control"
									minLength={5}
									minScore={2}
									scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
									inputProps={{ type: "password", placeholder: "Confirm password", id: "confirm_password", name: "confirm_password", required: "required", autoComplete: "off", className: "form-control" }}
									/>
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-default weconnect-btn" id="register" name="register" defaultValue="Sign up" />
							</div>
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default RegisterUser;
