import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';

/**
 * Generate `View` and `Review` buttons for non-business owners
 * 
 * @param {object} props Component props
 * @param {integer} props.business_id Business id
 * 
 * ```html
 * <BusinessButtons business_id={1} />
 * ```
 */
const BusinessButtons = (props) => {
  let { business_id } = props;

	return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <button title="View" className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#viewBusinessModal${business_id}`}>
          View <FontAwesomeIcon icon={faEye} />
        </button>
      </li>
      <li className="list-inline-item">
        <button title="Review" className="btn btn-info btn-sm" data-toggle="modal" data-target={`#reviewBusinessModal${business_id}`}>
          Review <FontAwesomeIcon icon={faStar} />
        </button>
      </li>
    </ul>
  );
}

export default BusinessButtons;
