import React from 'react';
import ShowBusiness from './ShowBusiness';
import UpdateBusiness from './UpdateBusiness';
import ReviewBusiness from './ReviewBusiness';
import DeleteBusiness from './DeleteBusiness';

/**
 * Generate `View`, `Review`, `Edit` and `Delete` modals for businesses
 *
 * @param {object} props.businesses Contains business list
 *
 * ```html
 * <BusinessModals businesses={businesses}/ >
 * ```
 */
const BusinessModals = (props) => {

	if (!props.businesses) return;

	const businesses = props.businesses;
	return (
		<div>
			{
				businesses.map(business =>
					<div key={business.id}>
						<ShowBusiness business={business} />
						<UpdateBusiness business={business} isUpdateModalOpen={props.isUpdateModalOpen} />
						<ReviewBusiness business={business} />
						<DeleteBusiness business={business} />
					</div>
				)
			}
		</div>
	);
}

export default BusinessModals;
