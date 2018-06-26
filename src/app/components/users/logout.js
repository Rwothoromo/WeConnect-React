import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../../App';
import { isLoggedIn } from '../../utils/helpers';

class LogoutUser extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/auth/logout`, {
			headers: {'Content-Type': 'application/json'}
		}).then(response => {
			this.setState({loggedIn: false});
			localStorage.removeItem("access_token");
			window.location = "/users/login";
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	render() {
		return (<Redirect to="/"/>);
	}
}

export default LogoutUser;
