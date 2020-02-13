import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import { updateBusiness } from '../utils/Helpers';
import Button from 'react-bootstrap/Button';

/**
 * Form for updating a business
 *
 * @param {object} props Business object
 *
 * ```html
 * <UpdateBusiness business={business} isUpdateModalOpen={isUpdateModalOpen} />
 * ```
 *
 * @returns {component} UpdateBusiness
 */
const UpdateBusiness = ({ business, isUpdateModalOpen }) => {

	const [isOpen, setIsOpen] = useState(true);
	useEffect(() => {
		setIsOpen(isUpdateModalOpen)
	}, [isUpdateModalOpen])
	const onUpdate = async (event) => {
		event.preventDefault();
		NotificationManager.success("Alas!");

		// Create a business object from user input
		let updatedBusiness = {
			name: event.target.elements.name.value,
			description: event.target.elements.description.value,
			category: event.target.elements.category.value,
			location: event.target.elements.location.value
		}
		try {
			NotificationManager.success("Alas again!");
			const response = await updateBusiness(business.id, updatedBusiness);
			NotificationManager.success("Alas Now!");
			console.log(business, updateBusiness)
			// close modal
			setIsOpen(false);
			NotificationManager.success(response.data.message);
		} catch (error) {
			NotificationManager.error(error.response.data.message);
			setIsOpen(false);
		}
	}
	return (
		isOpen &&
		<div className="modal fade" id={`updateBusinessModal${business.id}`}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">WeConnect</h4>
						<Button className="close" data-dismiss="modal">×</Button>
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
												<input type="text" className="form-control" placeholder="Business name" id="name" name="name" defaultValue={business.name} required />
											</div>
											<div className="form-group">
												<label>Description:</label>
												<textarea className="form-control" placeholder="Description" id="description" name="description" cols={28} rows={3} defaultValue={business.description} />
											</div>
											<div className="form-group">
												<label>Category:</label>
												<input type="text" className="form-control" placeholder="Category" id="category" name="category" defaultValue={business.category_name} required />
											</div>
											<div className="form-group">
												<label>Location:</label>
												<input type="text" className="form-control" placeholder="Location" id="location" name="location" defaultValue={business.location_name} required />
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
						<Button className="btn btn-danger" data-dismiss="modal">Close</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

UpdateBusiness.propTypes = {
	business: PropTypes.object.isRequired,
	isUpdateModalOpen: PropTypes.bool.isRequired
};

export default UpdateBusiness;
