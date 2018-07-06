import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { apiUrl } from '../../App';

/**
 * Form for reviewing a business
 * 
 * @param {object} props Component props
 * @param {object} props.business Business object
 * @param {function} props.showUpdatedBusinesses Form callback function
 * 
 * ```html
 * <ReviewBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
 * ```
 */
class ReviewBusiness extends Component {
	constructor(props) {
		super(props);
	}

	reviewBusiness = (event) => {
		event.preventDefault();

		let review = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/businesses/${this.props.business.id}/reviews`, JSON.stringify(review), {
      headers: {'Content-Type': 'application/json'}
		}).then(response => {
			NotificationManager.success(response.data.message);
			this.props.showUpdatedBusinesses();
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		})
	}

	render() {
		return (
			<div className="modal fade" id={`reviewBusinessModal${this.props.business.id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">WeConnect</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>
						<div className="modal-body">
							<div style={{overflowY: "auto", height: "auto" }}>
								<form onSubmit={this.reviewBusiness}>
									<div className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
										<h5 className="card-header">Review business</h5>
										<div className="card-body">
											<h1 className="display-5">{this.props.business.name}</h1>
											<p>{this.props.business.description}</p><br />
											<div className="card-text weconnect-form">
												<div className="form-group">
													<input type="text" className="form-control" placeholder="Review name" id="name" name="name" required />
												</div>
												<div className="form-group">
													<textarea className="form-control" placeholder="Description" id="description" name="description" cols={28} rows={3} defaultValue={""} />
												</div>
												<div className="form-group">
													<input type="submit" className="btn btn-default weconnect-btn" id="review" name="review" defaultValue="Submit Review" />
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

export default ReviewBusiness;
