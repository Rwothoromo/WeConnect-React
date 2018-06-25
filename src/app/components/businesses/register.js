import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";

class RegisterBusiness extends Component {
	constructor() {
		super();
		this.state = {
			registered: false
		}
	}

	registerBusiness = (event) => {
		event.preventDefault();
		let business = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value,
			category: event.target.elements.category.value,
			location: event.target.elements.location.value,
			photo: event.target.elements.photo.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`http://127.0.0.1:5000/api/v2/businesses`, JSON.stringify(business), {
			headers: {'Content-Type': 'application/json'}
		}).then(response => {
			NotificationManager.success(response.data.message);
			this.setState({registered: true});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		})
	}

	render() {
		if (this.state.registered) {
			return (<Redirect to="/businesses/index"/>)
		}
		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<form className="weconnect-form" onSubmit={this.registerBusiness}>
							<div className="form-group">
								<label className="control-label col-md-12" style={{textAlign: 'center'}}>Register a business</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Business name" id="name" name="name" required />
							</div>
							<div className="form-group">
								<textarea className="form-control" placeholder="Description" id="description" name="description" cols={28} rows={3} defaultValue={""} />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Category" id="category" name="category" required />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Location" id="location" name="location" required />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Photo" id="photo" name="photo" required />
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-default weconnect-btn" id="register" name="register" defaultValue="Register" />
							</div>
						</form>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default RegisterBusiness;
  