import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "axios";
import { apiUrl } from '../../App';

/**
 * Form for deleting a business
 * 
 * @param {object} props Component props
 * @param {integer} props.id Business id
 * 
 * ```html
 * <DeleteBusiness id={1} />
 * ```
 */
class DeleteBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			deleted: false
		}
	}

	deleteBusiness = (event) => {
		event.preventDefault();

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.delete(`${apiUrl}/businesses/${this.state.id}`).then(response => {
			this.setState({deleted: true});
			NotificationManager.success(response.data.message);
			window.location.reload();
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	render() {
		return (
			<div className="modal fade" id={`deleteBusinessModal${this.state.id}`}>
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
									This action will completely delete the business! Proceed?
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
