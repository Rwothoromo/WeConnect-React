import React, { Component } from 'react';
import axios from "axios";
import { apiUrl } from '../../App';
import ReviewCards from './ReviewCards';

/**
 * Display a business' information and reviews
 * 
 * @param {object} props Component props
 * @param {object} props.business Business object
 * 
 * ```html
 * <ShowBusiness business={business} />
 * ```
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
		}).catch(error => {});
	}

	render() {
		return (
			<div className="modal fade" id={`viewBusinessModal${this.props.business.id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Business</h4>
							<button type="button" className="close" data-dismiss="modal">×</button>
						</div>
						<div className="modal-body">
							<div style={{overflowY: "auto", height: "auto" }}>
								<h1 className="display-4">{this.props.business.name}</h1>
								<p>{this.props.business.description}</p><br />
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
  