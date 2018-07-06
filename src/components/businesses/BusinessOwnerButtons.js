import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

/**
 * Generate `View`, `Edit` and `Delete` buttons for business owners
 * 
 * @param {object} props Component props
 * @param {integer} props.business_id Business id
 * 
 * ```html
 * <BusinessOwnerButtons business_id={1} />
 * ```
 */
const BusinessOwnerButtons = (props) => {
  let { business_id } = props;

	return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <button title="View" type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#viewBusinessModal${business_id}`} data-backdrop="false">
          View <FontAwesomeIcon icon={faEye} />
        </button>
      </li>
      <li className="list-inline-item">
        <button title="Edit" type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target={`#updateBusinessModal${business_id}`} data-backdrop="false">
          Edit <FontAwesomeIcon icon={faEdit} />
        </button>
      </li>
      <li className="list-inline-item">
        <button title="Delete" type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target={`#deleteBusinessModal${business_id}`} data-backdrop="false">
          Delete <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </ul>
  );
}

export default BusinessOwnerButtons;
