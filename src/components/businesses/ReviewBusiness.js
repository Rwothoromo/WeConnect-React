import React from 'react';
import PropTypes from 'prop-types';
import { reviewBusiness } from '../utils/Helpers';
import Button from 'react-bootstrap/Button';

/**
 * Form for reviewing a business
 *
 * @param {object} props Business object
 *
 * ```html
 * <ReviewBusiness business={business} />
 * ```
 *
 * @returns {component} ReviewBusiness
 */
const ReviewBusiness = (props) => {

	const onReview = (event) => {
		event.preventDefault();

		// Create a review object from user input
		let review = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value
		}

		reviewBusiness(props, review);
	}

	return (
		<div className="modal fade" id={`reviewBusinessModal${props.business.id}`}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">WeConnect</h4>
						<Button className="close" data-dismiss="modal">×</Button>
					</div>
					<div className="modal-body">
						<div style={{ overflowY: "auto", height: "auto" }}>
							<form onSubmit={onReview}>
								<div className="card" style={{ width: 'auto', marginBottom: 10, marginLeft: 20, marginRight: 20 }} >
									<h5 className="card-header">Review business</h5>
									<div className="card-body">
										<h1 className="display-5">{props.business.name}</h1>
										<p>{props.business.description}</p><br />
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
						<Button className="btn btn-danger" data-dismiss="modal">Close</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

ReviewBusiness.propTypes = {
	business: PropTypes.object.isRequired
};

export default ReviewBusiness;
