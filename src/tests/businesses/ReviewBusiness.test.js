import React from 'react';
import { mount } from 'enzyme';
import ReviewBusiness from '../../components/businesses/ReviewBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<ReviewBusiness />', () => {

	const mock = new MockAdapter(Axios);

	it('shows a businesses', async () => {
		mock.onGet(`${apiUrl}/businesses/2`).reply(200, {
			business: {
				author: "Edwin Kato",
				category: 2,
				category_name: "Food",
				created_at: "Thu, 28 Jun 2018 14:33:42 GMT",
				created_by: 3,
				description: "Cakes and confectionary",
				id: 2,
				location: 2,
				location_name: "Kabale",
				name: "Baker's",
				updated_at: "Thu, 28 Jun 2018 14:33:42 GMT"
			}
		});

		mock.onGet(`${apiUrl}/businesses/2/reviews`).reply(200, {
			reviews_list: [{}, {}],
			message: "review"
		});
		mock.onPost(`${apiUrl}/businesses/2/reviews`).reply(200, {
			reviews_list: [{}, {}],
			message: "review"
		});
		const wrapper = mount(<ReviewBusiness showUpdatedBusinesses={() => { }} business={{ id: 2 }} />);
		let form = wrapper.find('form')
		form.simulate('submit');
	});
});
