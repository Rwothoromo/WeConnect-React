import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

/**
 * Form for business search
 *
 * @param {object} props Component props containing callback function searchBusinesses
 *
 * ```html
 * <BusinessSearch searchBusinesses={searchBusinesses} />
 * ```
 *
 * @returns {component} BusinessSearch
 */
const BusinessSearch = (props) => {
	const { searchBusinesses } = props;

	return (
		<form className="weconnect-form" onSubmit={(event) => { searchBusinesses(event); }}>
			<ul className="list-inline">
				<li className="list-inline-item">
					<input type="text" style={{ width: 180 }} className="form-control" placeholder="Business" id="q" name="q" defaultValue="" />
				</li>
				<li className="list-inline-item">
					<input type="text" style={{ width: 180 }} className="form-control" placeholder="Category" id="category" name="category" defaultValue="" />
				</li>
				<li className="list-inline-item">
					<input type="text" style={{ width: 180 }} className="form-control" placeholder="Location" id="location" name="location" defaultValue="" />
				</li>
				<li className="list-inline-item">
					<Button title="Search" className="btn btn-success">
						<FontAwesomeIcon icon={faSearch} />
					</Button>
				</li>
			</ul>
		</form>
	);
};

BusinessSearch.propTypes = {
	searchBusinesses: PropTypes.function.isRequired
};

export default BusinessSearch;
