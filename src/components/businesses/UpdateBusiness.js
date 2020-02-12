import React from 'react';
import { updateBusiness } from '../utils/Helpers';

/**
 * Form for updating a business
 *
 * @param {object} props.business Business object
 * @param {function} props.showUpdatedBusinesses Form callback function
 *
 * ```html
 * <UpdateBusiness business={business} showUpdatedBusinesses={showUpdatedBusinesses} />
 * ```
 */
const UpdateBusiness = (props) => {

	const onUpdate = (event) => {
		event.preventDefault();

		if (props) {
			// Create a business object from user input
			let business = {
				name: event.target.elements.name.value,
				description: event.target.elements.description.value,
				category: event.target.elements.category.value,
				location: event.target.elements.location.value
			}

			updateBusiness(props, business);
		}
		else {
			// retry
		}
	}

	return (
		<div className="modal fade" id={`updateBusinessModal${props.business.id}`}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">WeConnect</h4>
						<button type="button" className="close" data-dismiss="modal">×</button>
					</div>
					<div className="modal-body">
						<div style={{ overflowY: "auto", height: "auto" }}>
							<form onSubmit={onUpdate}>
								<div className="card" style={{ width: 'auto', marginBottom: 10, marginLeft: 20, marginRight: 20 }} >
									<h5 className="card-header">Update business</h5>
									<div className="card-body">
										<div className="card-text weconnect-form">
											<div className="form-group">
												<label className="control-label col-md-12" style={{ textAlign: 'center' }}></label>
											</div>
											<div className="form-group">
												<label>Name:</label>
												<input type="text" className="form-control" placeholder="Business name" id="name" name="name" defaultValue={props.business.name} required />
											</div>
											<div className="form-group">
												<label>Description:</label>
												<textarea className="form-control" placeholder="Description" id="description" name="description" cols={28} rows={3} defaultValue={props.business.description} />
											</div>
											<div className="form-group">
												<label>Category:</label>
												<input type="text" className="form-control" placeholder="Category" id="category" name="category" defaultValue={props.business.category_name} required />
											</div>
											<div className="form-group">
												<label>Location:</label>
												<input type="text" className="form-control" placeholder="Location" id="location" name="location" defaultValue={props.business.location_name} required />
											</div>
											<div className="form-group">
												<input type="submit" className="btn btn-default weconnect-btn" id="update" name="update" defaultValue="Update" />
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

export default UpdateBusiness;
