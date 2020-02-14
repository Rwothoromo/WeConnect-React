import React from 'react';
import PropTypes from 'prop-types';
import 'react-notifications/lib/notifications.css';
import { deleteBusiness } from '../utils/Helpers';
import Button from 'react-bootstrap/Button';

/**
 * Form for deleting a business
 *
 * @param {object} props Business object
 *
 * ```html
 * <DeleteBusiness business={business} />
 * ```
 *
 * @returns {component} DeleteBusiness
 */
const DeleteBusiness = ({ business }) => {

	const onDelete = (event) => {
		event.preventDefault();

		deleteBusiness(business);
	}

	return (
		<div className="modal fade" id={`deleteBusinessModal${business.id}`}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">WeConnect</h4>
						<Button className="close" data-dismiss="modal">×</Button>
					</div>
					<div className="modal-body">
						<div className="card" style={{ width: 'auto', marginBottom: 10, marginLeft: 20, marginRight: 20 }} >
							<h5 className="card-header">Delete business</h5>
							<div className="card-body">
								<div className="card-text">
									This action will completely delete the business <b>{business.name}</b>! Proceed?
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<Button className="btn btn-danger" id="onDelete" onClick={onDelete} data-dismiss="modal">Delete</Button>
						<Button className="btn btn-info" data-dismiss="modal">Close</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

DeleteBusiness.propTypes = {
	business: PropTypes.object.isRequired
};

export default DeleteBusiness;
