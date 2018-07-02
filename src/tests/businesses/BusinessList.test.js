import React from 'react';
import { shallow } from 'enzyme';
import BusinessList from '../../components/businesses/BusinessesList';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

describe('<BusinessList />', () => {
	// const wrapper = shallow(<BusinessList />);
	const mock = new MockAdapter(Axios);

	it('renders a `.other-bg`', () => {
		// expect(wrapper.find('.other-bg')).toHaveLength(1);
	});

	it('lists businesses', () => {
		mock.onGet('businesses').reply(200, {});
	});
});
