import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { apiUrl } from '../../App';
import { isLoggedIn } from '../../utils/Helpers';

/**
 * Form for updating a business
 * 
 * @param {object} props Component props
 * @param {integer} props.id Business id
 * 
 * ```html
 * <UpdateBusiness id={1} />
 * ```
 */
class UpdateBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			business: {},
			id: this.props.id,
			loggedIn: isLoggedIn(),
			description: '',
			updated: false
		};
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.get(`${apiUrl}/businesses/${this.state.id}`).then(response => {
			this.setState({
				business: response.data,
				description: response.data.description
			});
		});
	}

	handleDescriptionChange = (event) => {
    this.setState({description: event.target.description});
	}

	updateBusiness = (event) => {
		event.preventDefault();

		// Create a business object from user input
		let business = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value,
			category: event.target.elements.category.value,
			location: event.target.elements.location.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.put(`${apiUrl}/businesses/${this.state.id}`, JSON.stringify(business), {
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

		return (
			<div className="modal fade modal-backdrop" id={`updateBusinessModal${this.state.id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">WeConnect</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>
						<div className="modal-body">
							<div style={{overflowY: "auto", height: "auto" }}>
								<form onSubmit={this.updateBusiness}>
									<div className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
										<h5 className="card-header">Update business</h5>
										<div className="card-body">
											<div className="card-text weconnect-form">
												<div className="form-group">
													<label className="control-label col-md-12" style={{textAlign: 'center'}}></label>
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
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdateBusiness;
  