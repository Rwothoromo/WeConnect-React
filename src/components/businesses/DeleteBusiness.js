import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "axios";
import { apiUrl } from '../../App';

/**
 * Form for deleting a business
 * 
 * @param {object} props Component props
 * @param {object} props.business Business object
 * @param {function} props.showUpdatedBusinesses Form callback function
 * 
 * ```html
 * <DeleteBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
 * ```
 */
class DeleteBusiness extends Component {
	constructor(props) {
		super(props);
	}

	deleteBusiness = (event) => {
		event.preventDefault();

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.delete(`${apiUrl}/businesses/${this.props.business.id}`).then(response => {
			NotificationManager.success(response.data.message);
			this.props.showUpdatedBusinesses();
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	render() {
		return (
			<div className="modal fade" id={`deleteBusinessModal${this.props.business.id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">WeConnect</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>
						<div className="modal-body">
							<div className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
								<h5 className="card-header">Delete business</h5>
								<div className="card-body">
									<div className="card-text">
									This action will completely delete the business <b>{this.props.business.name}</b>! Proceed?
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" onClick={this.deleteBusiness} data-dismiss="modal">Delete</button>
							<button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DeleteBusiness;
