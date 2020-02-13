import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import axios from "axios";
import { apiUrl } from '../../App';
import ReviewCards from './ReviewCards';
import Button from 'react-bootstrap/Button';

/**
 * Display a business' information and reviews
 *
 * @param {object} props  Component props containing Business
 *
 * ```html
 * <ShowBusiness business={business} />
 * ```
 *
 * @returns {component} ShowBusiness
 */
class ShowBusiness extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews_list: []
		}
	}

	componentDidMount = () => {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses/${this.props.business.id}/reviews`).then(response => {
			this.setState({
				reviews_list: response.data
			})
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
		});
	}

	render() {
		return (
			<div className="modal fade" id={`viewBusinessModal${this.props.business.id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Business</h4>
							<Button className="close" data-dismiss="modal">×</Button>
						</div>
						<div className="modal-body">
							<div style={{ overflowY: "auto", height: "auto" }}>
								<h1 className="display-4">{this.props.business.name}</h1>
								<p>{this.props.business.description}</p><br />
								<ReviewCards reviews_list={this.state.reviews_list} />
							</div>
						</div>
						<div className="modal-footer">
							<Button className="btn btn-danger" data-dismiss="modal">Close</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ShowBusiness.propTypes = {
	business: PropTypes.object.isRequired
};

export default ShowBusiness;
