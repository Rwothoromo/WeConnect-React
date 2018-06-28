import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';
import axios from "axios";
import { apiUrl } from '../../App';
import decode from 'jwt-decode';
import { NotificationManager } from 'react-notifications';
import { isLoggedIn } from '../../utils/helpers';
// import business_image from '../../static/img/business.jpg';

class ShowBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			business: {},
			reviews_list: [],
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount = () => {
		const id = this.props.match.params.id;
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.get(`${apiUrl}/businesses/${id}`).then(response => {
			this.setState({
				business: response.data
			});
		});

		axios.get(`${apiUrl}/businesses/${id}/reviews`).then(response => {
			this.setState({
				reviews_list: response.data
			});
		}).catch(error => {
			NotificationManager.warning(error.response.data.message);
		});
	}

	render() {
		if (!this.state.loggedIn) {
			return (<Redirect to="/auth/login"/>);
		}

		const user = decode(localStorage.getItem("access_token"));
		if (this.state.business.created_by === user.sub) {
			document.getElementById("owner").className = "show";
			document.getElementById("non-owner").className = "collapse";
		}

		let reviews = this.state.reviews_list.map((review, index) => {
			return (
				<div>
					<br />
					<h3>{review.name}</h3>
					<p>{review.description}</p>
					<p>
						<i>By: {review.author}</i>
					</p>
				</div>
			);
		});

		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<div className="row">
							<div className="col collapse" id="owner">
								<a href={'/businesses/edit/' + this.props.match.params.id} className="btn btn-info btn-sm">Edit</a>&nbsp;
								<a href={'/businesses/delete/' + this.props.match.params.id} className="btn btn-danger btn-sm">Delete</a>&nbsp;
							</div>
							<div className="row" id="non-owner">
								&nbsp;&nbsp;&nbsp;&nbsp;<a href={'/businesses/review/' + this.props.match.params.id} className="btn btn-success btn-sm">Review</a>
							</div>
						</div>
						<br />
						<div className="text-center text-white">
							<h1 className="display-4">{this.state.business.name}</h1>
							<p>{this.state.business.description}</p><br />
							<h1 className="display-5">Reviews</h1>
							{/* <p>
								<img className="rounded img-fluid" src={business_image} alt="Katwe Consultants" />
							</p> */}
							{reviews}
						</div>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default ShowBusiness;
  