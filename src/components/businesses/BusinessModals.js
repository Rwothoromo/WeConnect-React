import React, { Component } from 'react';
import axios from "axios";
import { apiUrl } from '../../App';
import { NotificationManager } from 'react-notifications';
import ShowBusiness from './ShowBusiness';
import UpdateBusiness from './UpdateBusiness';
import RegisterBusiness from './RegisterBusiness';
import ReviewBusiness from './ReviewBusiness';
import DeleteBusiness from './DeleteBusiness';

/**
 * Generate `View`, `Review`, `Edit` and `Delete` modals for businesses
 * 
 * ```html
 * <BusinessModals />
 * ```
 */
class BusinessModals extends Component {
  constructor() {
		super();
		this.state = {
			businesses_list: []
		}
  }

  componentDidMount() {
    // Query businesses to use in generating `Div modals`
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses`).then(response => {
			this.setState({
				businesses_list: response.data.businesses
			});
		}).catch(error => {});
  }

  render() {
    if (!this.state.businesses_list) return;
    const businesses_list = this.state.businesses_list;
    return (
      <div>
        {
          businesses_list.map((business, index) => 
            <div key={index}>
              <RegisterBusiness />
              <ShowBusiness id={business.id} />
              <UpdateBusiness id={business.id} />
              <ReviewBusiness id={business.id} />
              <DeleteBusiness id={business.id} />
            </div>
          )
        }
      </div>
    );
	}
}

export default BusinessModals;
