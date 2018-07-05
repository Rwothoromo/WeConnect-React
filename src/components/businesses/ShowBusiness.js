import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from '../../App';
import { isLoggedIn } from '../../utils/Helpers';
import ReviewCards from './ReviewCards';

/**
 * Display a business' information and reviews
 * 
 * @param {object} props Component props
 * @param {integer} props.id Business id
 * 
 * ```html
 * <ShowBusiness id={1} />
 * ```
 */
class ShowBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			business: {},
			reviews_list: [],
			id: this.props.id,
			loggedIn: isLoggedIn()
		}
	}

	componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    axios.get(`${apiUrl}/businesses/${this.state.id}`).then(response => {
			this.setState({
				business: response.data
			});
		});

		axios.get(`${apiUrl}/businesses/${this.state.id}/reviews`).then(response => {
			this.setState({
				reviews_list: response.data
			})
		}).catch(error => {});
	}

	render() {
		if (!this.state.loggedIn) {
			return (<Redirect to="/auth/login"/>);
		}

		return (
			<div className="modal fade modal-backdrop" id={`viewBusinessModal${this.state.id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Business</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>
						<div className="modal-body">
							<div style={{overflowY: "auto", height: "auto" }}>
								<h1 className="display-4">{this.state.business.name}</h1>
								<p>{this.state.business.description}</p><br />
								<ReviewCards reviews_list={this.state.reviews_list} />
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

export default ShowBusiness;
  