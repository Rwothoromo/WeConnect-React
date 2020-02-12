import React from 'react';
import ShowBusiness from './ShowBusiness';
import UpdateBusiness from './UpdateBusiness';
import ReviewBusiness from './ReviewBusiness';
import DeleteBusiness from './DeleteBusiness';

/**
 * Generate `View`, `Review`, `Edit` and `Delete` modals for businesses
 *
 * @param {object} props.businesses Contains business list
 * @param {function} props.showUpdatedBusinesses Business list update function
 *
 * ```html
 * <BusinessModals businesses={businesses} showUpdatedBusinesses={showUpdatedBusinesses} />
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
						<UpdateBusiness business={business} showUpdatedBusinesses={props.showUpdatedBusinesses} />
						<ReviewBusiness business={business} showUpdatedBusinesses={props.howUpdatedBusinesses} />
						<DeleteBusiness business={business} showUpdatedBusinesses={props.showUpdatedBusinesses} />
					</div>
				)
			}
		</div>
	);
}

export default BusinessModals;
