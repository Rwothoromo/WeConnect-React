import React from 'react';
import 'react-notifications/lib/notifications.css';
import { deleteBusiness } from '../utils/Helpers';
import Button from 'react-bootstrap/Button';

/**
 * Form for deleting a business
 *
 * @param {object} props.business Business object
 *
 * ```html
 * <DeleteBusiness business={business}/ >
 * ```
 */
const DeleteBusiness = (props) => {

	const onDelete = (event) => {
		event.preventDefault();
		if (props) { deleteBusiness(props); }
		else {
			// retry
		}
	}

	return (
		<div className="modal fade" id={`deleteBusinessModal${props.business.id}`}>
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
									This action will completely delete the business <b>{props.business.name}</b>! Proceed?
									</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<Button className="btn btn-danger" onClick={onDelete} data-dismiss="modal">Delete</Button>
						<Button className="btn btn-info" data-dismiss="modal">Close</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteBusiness;
