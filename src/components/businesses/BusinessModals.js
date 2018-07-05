import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from '../../App';
import { NotificationManager } from 'react-notifications';
import ShowBusiness from './ShowBusiness';
import UpdateBusiness from './UpdateBusiness';
import RegisterBusiness from './RegisterBusiness';
import ReviewBusiness from './ReviewBusiness';
import DeleteBusiness from './DeleteBusiness';

class BusinessModals extends Component {
  constructor() {
		super();
		this.state = {
			businesses_list: []
		}
  }

  componentDidMount() {
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
		axios.get(`${apiUrl}/businesses`).then(response => {
			this.setState({
				businesses_list: response.data.businesses
			});
		}).catch(error => {
			NotificationManager.error(error.response.data.message);
			return (<Redirect to="/businesses/register"/>);
		});
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
