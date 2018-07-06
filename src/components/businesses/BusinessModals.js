import React, { Component } from 'react';
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
class BusinessModals extends Component {
  constructor(props) {
		super(props);
  }

  render() {
    if (!this.props.businesses) return;

    const businesses = this.props.businesses;
    return (
      <div>
        {
          businesses.map(business => 
            <div key={business.id}>
              <ShowBusiness business={business} />
              <UpdateBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
              <ReviewBusiness business={business} showUpdatedBusinesses={this.props.howUpdatedBusinesses} />
              <DeleteBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
            </div>
          )
        }
      </div>
    );
	}
}

export default BusinessModals;
