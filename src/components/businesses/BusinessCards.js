import React, { Component } from 'react';
import BusinessOwnerButtons from './BusinessOwnerButtons';
import BusinessButtons from './BusinessButtons';

/**
 * Generate a list of business cards
 *
 * @param {object} props.user Contains user data
 * @param {object} props.businesses_list Contains list of businesses
 *
 * ```html
 * <BusinessCards user={user} businesses_list={businesses_list} />
 * ```
 */
class BusinessCards extends Component {
	render() {
		const businesses_list = this.props.businesses_list;
		const user = this.props.user;
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
								{(business.created_by === user.sub) ? <BusinessOwnerButtons business={business} /> : <BusinessButtons business={business} />}
							</div>
						</div>
					)
				}
			</div>
		);
	}
}

export default BusinessCards;
