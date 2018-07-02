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
		mock.onGet(`${apiUrl}/businesses?limit=5`).reply(200, {
			businesses: [{},{}],
			next_page: 2,
			prev_page: null
		});
	});

	it('searches businesses', async () => {
		const businessesListComponent = wrapper.find(BusinessesList).dive();
		businessesListComponent.setState({loggedIn: true});
		
		mock.onGet(`${apiUrl}/businesses?q=Baker&category=Food&location=Kabale`).reply(200, {
			businesses: [{},{}],
			next_page: null,
			prev_page: null
		});

		const searchForm = businessesListComponent.find('form');
		searchForm.simulate('submit', {
			preventDefault: () => {},
			target: {
				elements: {
					q: {value: "Baker"},
					category: {value: "Food"},
					location: {value: "Kabale"}
				}
			}
		});
	});

	it('handles page change in pagination', async () => {
		const businessesListComponent = wrapper.find(BusinessesList).dive();
		businessesListComponent.setState({loggedIn: true});
		
		mock.onGet(`${apiUrl}/businesses?limit=5&page=3`).reply(200, {
			businesses: [{},{},{},{},{},{}],
			next_page: 4,
			prev_page: 2
		});
	});
});
