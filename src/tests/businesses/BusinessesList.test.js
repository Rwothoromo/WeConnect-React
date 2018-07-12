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
	const jwt = require('jsonwebtoken');
	const token = jwt.sign({ sub: 1, iat: Math.floor(Date.now() / 1000) + 30 }, 'shhhhh');
	localStorage.setItem("access_token", token);

	it('lists businesses', async () => {
		mock.onGet(`${apiUrl}/businesses?limit=3`).reply(200, {
			businesses: [{},{}],
			next_page: 2,
			prev_page: null
		});
	});

	it('gets all lists businesses', () => {
		jest.spyOn(wrapper.find(BusinessesList).dive().instance(), "getAllBusinesses")
		wrapper.find(BusinessesList).dive().instance().getAllBusinesses();
	});

	it('shows updated businesses', () => {
		jest.spyOn(wrapper.find(BusinessesList).dive().instance(), "showUpdatedBusinesses")
		wrapper.find(BusinessesList).dive().instance().showUpdatedBusinesses();
	});

	it('handles page change', () => {
		jest.spyOn(wrapper.find(BusinessesList).dive().instance(), "handlePageChange")
		wrapper.find(BusinessesList).dive().instance().handlePageChange({ preventDefault: () => {} });
	});

});
