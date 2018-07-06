import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "axios";
import { apiUrl } from '../../App';

/**
 * Form for registering a business
 * 
 * @param {function} props.showUpdatedBusinesses Form callback function
 * 
 * ```html
 * <RegisterBusiness showUpdatedBusinesses={showUpdatedBusinesses}/>
 * ```
 */
class RegisterBusiness extends Component {
	constructor(props) {
		super(props);
	}

	registerBusiness = (event) => {
		event.preventDefault();

		// Create a business object from user input
		let business = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value,
			category: event.target.elements.category.value,
			location: event.target.elements.location.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/businesses`, JSON.stringify(business), {
      headers: {'Content-Type': 'application/json'}
		}).then(response => {
			NotificationManager.success(response.data.message);
			this.props.showUpdatedBusinesses();
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	render() {
		return (
			<div className="modal fade" id="registerBusinessModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">WeConnect</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>
						<div className="modal-body">
							<div style={{overflowY: "auto", height: "auto" }}>
								<form onSubmit={this.registerBusiness}>
								<div className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
										<h5 className="card-header">Register business</h5>
										<div className="card-body">
											<div className="card-text weconnect-form">
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
													<input type="submit" className="btn btn-default weconnect-btn" id="register" name="register" defaultValue="Register" />
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

export default RegisterBusiness;
  