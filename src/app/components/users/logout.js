import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { isLoggedIn } from '../../utils/helpers';
import LoginUser from './login';

class LogoutUser extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`https://weconnect-api-v2-rwothoromo.herokuapp.com/api/v2/auth/logout`, {
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
