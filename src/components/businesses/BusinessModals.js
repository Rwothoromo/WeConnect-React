import React from 'react';
import PropTypes from 'prop-types';
import ShowBusiness from './ShowBusiness';
import UpdateBusiness from './UpdateBusiness';
import ReviewBusiness from './ReviewBusiness';
import DeleteBusiness from './DeleteBusiness';

/**
 * Generate `View`, `Review`, `Edit` and `Delete` modals for businesses
 *
 * @param {object} props Contains business list
 *
 * ```html
 * <BusinessModals isUpdateModalOpen={isUpdateModalOpen} businesses={businesses} />
 * ```
 *
 * @returns {component} BusinessModals
 */
const BusinessModals = (props) => {

	let { isUpdateModalOpen, businesses } = props;

	if (!businesses) return;

	return (
		<div>
			{
				businesses.map(business =>
					<div key={business.id}>
						<ShowBusiness business={business} />
						<UpdateBusiness business={business} isUpdateModalOpen={isUpdateModalOpen} />
						<ReviewBusiness business={business} />
						<DeleteBusiness business={business} />
					</div>
				)
			}
		</div>
	);
}

BusinessModals.propTypes = {
	isUpdateModalOpen: PropTypes.bool.isRequired,
	businesses: PropTypes.array
};

export default BusinessModals;
