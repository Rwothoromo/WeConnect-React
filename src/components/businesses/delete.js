import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App';

class DeleteBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deleted: false
		}
	}

	componentDidMount() {
		let confirm = window.confirm("This action will completely delete the business! Proceed?");
		if (!confirm) return;
		const id = this.props.match.params.id;
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.delete(`${apiUrl}/businesses/${id}`).then(response => {
			this.setState({deleted: true});
			NotificationManager.success(response.data.message);
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	render() {
		return (<Redirect to="/businesses/index"/>);
	}
}

export default DeleteBusiness;
