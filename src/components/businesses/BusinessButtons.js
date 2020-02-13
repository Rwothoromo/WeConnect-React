import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

/**
 * Generate `View` and `Review` buttons for non-business owners
 *
 * @param {object} props Component props containing Business
 *
 * ```html
 * <BusinessButtons business={business} />
 * ```
 *
 * @returns {component} BusinessButtons
 */
const BusinessButtons = (props) => {
	let { business } = props;

	return (
		<ul className="list-inline">
			<li className="list-inline-item">
				<Button title="View" className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#viewBusinessModal${business.id}`}>
					View <FontAwesomeIcon icon={faEye} />
				</Button>
			</li>
			<li className="list-inline-item">
				<Button title="Review" className="btn btn-info btn-sm" data-toggle="modal" data-target={`#reviewBusinessModal${business.id}`}>
					Review <FontAwesomeIcon icon={faStar} />
				</Button>
			</li>
		</ul>
	);
}

BusinessButtons.propTypes = {
	business: PropTypes.object.isRequired
};

export default BusinessButtons;
