import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import BusinessesList from '../../components/businesses/BusinessesList';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<BusinessesList />', () => {
	const wrapper = shallow(<MemoryRouter><BusinessesList /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('lists businesses', async () => {
		mock.onGet(`${apiUrl}/businesses?limit=3`).reply(200, {
			businesses: [{},{}],
			next_page: 2,
			prev_page: null
		});

	});
	it('it shows updated businesses',()=>{
		let spyonshow = jest.spyOn(wrapper.find(BusinessesList).dive().instance(), "showUpdatedBusinesses") 
		wrapper.find(BusinessesList).dive().instance().showUpdatedBusinesses();
	});
});
