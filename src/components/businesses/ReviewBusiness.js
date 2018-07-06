import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { apiUrl } from '../../App'
import { isLoggedIn } from '../../utils/Helpers';

/**
 * Form for reviewing a business
 * 
 * @param {object} props Component props
 * @param {integer} props.id Business id
 * 
 * ```html
 * <ReviewBusiness id={1} />
 * ```
 */
class ReviewBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			business: {},
			id: this.props.id,
			loggedIn: isLoggedIn(),
      reviewed: false
		}
	}

  componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.get(`${apiUrl}/businesses/${this.state.id}`).then(response => {
			this.setState({
				business: response.data
			});
		});
  }

	reviewBusiness = (event) => {
		event.preventDefault();

		let review = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/businesses/${this.state.id}/reviews`, JSON.stringify(review), {
      headers: {'Content-Type': 'application/json'}
		}).then(response => {
			NotificationManager.success(response.data.message);
			this.setState({reviewed: true});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		})
	}

	render() {
		if (!this.state.loggedIn) {
			return (<Redirect to="/auth/login"/>);
		}

		return (
			<div className="modal fade modal-backdrop" id={`reviewBusinessModal${this.state.id}`}>
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
											<h1 className="display-5">{this.state.business.name}</h1>
											<p>{this.state.business.description}</p><br />
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
