import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

/**
 * Generate `View`, `Edit` and `Delete` buttons for business owners
 *
 * @param {object} props Component props containing Business
 *
 * ```html
 * <BusinessOwnerButtons business={business} handleUpdateModal={props.handleUpdateModal} />
 * ```
 *
 * @returns {component} BusinessOwnerButtons
 */
const BusinessOwnerButtons = ({ business, handleUpdateModal }) => {
	return (
		<ul className="list-inline">
			<li className="list-inline-item">
				<Button title="View" className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#viewBusinessModal${business.id}`}>
					View <FontAwesomeIcon icon={faEye} />
				</Button>
			</li>
			<li className="list-inline-item">
				<Button
					title="Edit"
					className="btn btn-info btn-sm"
					data-toggle="modal"
					data-target={`#updateBusinessModal${business.id}`}
					onClick={handleUpdateModal}
				>
					Edit <FontAwesomeIcon icon={faEdit} />
				</Button>
			</li>
			<li className="list-inline-item">
				<Button title="Delete" className="btn btn-danger btn-sm" data-toggle="modal" data-target={`#deleteBusinessModal${business.id}`}>
					Delete <FontAwesomeIcon icon={faTrash} />
				</Button>
			</li>
		</ul>
	);
}

BusinessOwnerButtons.propTypes = {
	business: PropTypes.object.isRequired,
	handleUpdateModal: PropTypes.function.isRequired
};

export default BusinessOwnerButtons;
