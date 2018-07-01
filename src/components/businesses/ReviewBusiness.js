import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App'
import { isLoggedIn } from '../../utils/Helpers';

class ReviewBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			business: {},
			loggedIn: isLoggedIn(),
      reviewed: false
		}
	}

  componentDidMount() {
		const id = this.props.match.params.id;
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.get(`${apiUrl}/businesses/${id}`).then(response => {
			this.setState({
				business: response.data
			});
		});
  }

	reviewBusiness = (event) => {
		event.preventDefault();
		const id = this.props.match.params.id;
		let review = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value
		}
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.post(`${apiUrl}/businesses/${id}/reviews`, JSON.stringify(review), {
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

		if (this.state.reviewed) {
			return (<Redirect to={'/businesses/show/' + this.props.match.params.id} />)
		}

		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<form className="weconnect-form" onSubmit={this.reviewBusiness}>
							<div className="form-group">
								<label className="control-label col-md-12" style={{textAlign: 'center'}}>Review business</label>
                <h1 className="display-4">{this.state.business.name}</h1>
							  <p>{this.state.business.description}</p>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Review name" id="name" name="name" required />
							</div>
							<div className="form-group">
								<textarea className="form-control" placeholder="Description" id="description" name="description" cols={28} rows={3} defaultValue={""} />
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-default weconnect-btn" id="review" name="review" defaultValue="Submit Review" />
							</div>
						</form>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default ReviewBusiness;
