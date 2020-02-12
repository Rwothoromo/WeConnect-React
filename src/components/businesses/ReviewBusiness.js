import React from 'react';
import { reviewBusiness } from '../utils/Helpers';

/**
 * Form for reviewing a business
 *
 * @param {object} props.business Business object
 * @param {function} props.showUpdatedBusinesses Form callback function
 *
 * ```html
 * <ReviewBusiness business={business} showUpdatedBusinesses={showUpdatedBusinesses} />
 * ```
 */
const ReviewBusiness = (props) => {

	const onReview = (event) => {
		event.preventDefault();

		if (props) {
			// Create a review object from user input
			let review = {
				name: event.target.elements.name.value,
				description: event.target.elements.description.value
			}

			reviewBusiness(props, review);
		}
		else {
			// retry
		}
	}

	return (
		<div className="modal fade" id={`reviewBusinessModal${props.business.id}`}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">WeConnect</h4>
						<button type="button" className="close" data-dismiss="modal">×</button>
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
						<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReviewBusiness;
