import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { Redirect } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import axios from "axios";
import { apiUrl } from '../../App';
import { isLoggedIn, clearUser } from '../utils/Helpers';

/**
 * Logout user
 *
 * ```html
 * <Logout />
 * ```
 *
 * @returns {component} Logout
 */
class Logout extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/auth/logout`).then(response => {
			NotificationManager.success(response.data.message);
			this.setState({ loggedIn: false });
			localStorage.removeItem("access_token");
			clearUser();
			window.location = "/auth/login";
		});
	}

	render() {
		return (<Redirect to="/" />);
	}
}

export default Logout;
