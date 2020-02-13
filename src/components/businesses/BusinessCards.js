import React from 'react';
import PropTypes from 'prop-types';
import BusinessOwnerButtons from './BusinessOwnerButtons';
import BusinessButtons from './BusinessButtons';

/**
 * Generate a list of business cards
 *
 * @param {object} props Contains user data and list of businesses
 *
 * ```html
 * <BusinessCards user={user} businesses_list={businesses_list} handleUpdateModal={handleUpdateModal} />
 * ```
 *
 * @returns {component} BusinessCards
 */
const BusinessCards = (props) => {
	const businesses_list = props.businesses_list;
	const user = props.user;
	return (
		<div>
			{
				businesses_list.map(business =>
					<div key={business.id} className="card" style={{ width: 'auto', marginBottom: 10, marginLeft: 20, marginRight: 20 }} >
						<h5 className="card-header">{business.name}</h5>
						<div className="card-body">
							<p className="card-text">
								{business.description}<br />
								<b>Category:</b> {business.category_name}, <b>Location:</b> {business.location_name}<br />
							</p>
							{(business.created_by === user.sub)
								? <BusinessOwnerButtons
									business={business}
									handleUpdateModal={props.handleUpdateModal}
								/>
								: <BusinessButtons business={business} />}
						</div>
					</div>
				)
			}
		</div>
	);
}

BusinessCards.propTypes = {
	user: PropTypes.object.isRequired,
	businesses_list: PropTypes.object.isRequired,
	handleUpdateModal: PropTypes.function.isRequired
};

export default BusinessCards;
