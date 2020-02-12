import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';

/**
 * Generate `View` and `Review` buttons for non-business owners
 *
 * @param {object} props.business Component props containing Business
 *
 * ```html
 * <BusinessButtons business={business} />
 * ```
 */
const BusinessButtons = (props) => {
	let { business } = props;

	return (
		<ul className="list-inline">
			<li className="list-inline-item">
				<button title="View" className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#viewBusinessModal${business.id}`}>
					View <FontAwesomeIcon icon={faEye} />
				</button>
			</li>
			<li className="list-inline-item">
				<button title="Review" className="btn btn-info btn-sm" data-toggle="modal" data-target={`#reviewBusinessModal${business.id}`}>
					Review <FontAwesomeIcon icon={faStar} />
				</button>
			</li>
		</ul>
	);
}

export default BusinessButtons;
