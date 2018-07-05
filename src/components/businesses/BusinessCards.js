import React, { Component } from 'react';
import BusinessOwnerButtons from './BusinessOwnerButtons';
import BusinessButtons from './BusinessButtons';

class BusinessCards extends Component {
  render() {
    const businesses_list = this.props.businesses_list;
    const user = this.props.user;
    return (
      <div>
        {
          businesses_list.map((business, index) => 
            <div key={index} className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
              <h5 className="card-header">{business.name}</h5>
              <div className="card-body">
                <p className="card-text">
                  {business.description}<br />
                  <b>Category:</b> {business.category_name}, <b>Location:</b> {business.location_name}<br />
                </p>
                {(business.created_by === user.sub) ? <BusinessOwnerButtons business_id={business.id} /> : <BusinessButtons business_id={business.id} />}
              </div>
            </div>
          )
        }
      </div>
    );
	}
}

export default BusinessCards;
