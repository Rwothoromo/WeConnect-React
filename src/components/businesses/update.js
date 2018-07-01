import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App';
import { isLoggedIn } from '../../utils/helpers';

class UpdateBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			business: {},
			loggedIn: isLoggedIn(),
			description: '',
			updated: false
		};
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	handleDescriptionChange(event) {
    this.setState({description: event.target.description});
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.get(`${apiUrl}/businesses/${id}`).then(response => {
			this.setState({
				business: response.data,
				description: response.data.description
			});
		});
	}

	updateBusiness = (event) => {
		event.preventDefault();
		const id = this.props.match.params.id;
		let business = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value,
			category: event.target.elements.category.value,
			location: event.target.elements.location.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.put(`${apiUrl}/businesses/${id}`, JSON.stringify(business), {
      headers: {'Content-Type': 'application/json'}
		}).then(response => {
			NotificationManager.success(response.data.message);
			this.setState({updated: true});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		})
	}

	render() {
		if (!this.state.loggedIn) {
			return (<Redirect to="/auth/login" />);
		}

		if (this.state.updated) {
			return (<Redirect to="/businesses/index" />);
		}

		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<form className="weconnect-form" onSubmit={this.updateBusiness}>
							<div className="form-group">
								<label className="control-label col-md-12" style={{textAlign: 'center'}}>Update business</label>
							</div>
							<div className="form-group">
								<label>Name:</label>
								<input type="text" className="form-control" placeholder="Business name" id="name" name="name" defaultValue={this.state.business.name} required />
							</div>
							<div className="form-group">
								<label>Description:</label>
								<textarea className="form-control" placeholder="Description" id="description" name="description" cols={28} rows={3} value={this.state.description} onChange={this.handleDescriptionChange} />
							</div>
							<div className="form-group">
								<label>Category:</label>
								<input type="text" className="form-control" placeholder="Category" id="category" name="category" defaultValue={this.state.business.category_name} required />
							</div>
							<div className="form-group">
								<label>Location:</label>
								<input type="text" className="form-control" placeholder="Location" id="location" name="location" defaultValue={this.state.business.location_name} required />
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-default weconnect-btn" id="update" name="update" defaultValue="Update" />
							</div>
						</form>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default UpdateBusiness;
  