import React from 'react';
import { shallow } from 'enzyme';
import ShowBusiness from '../../components/businesses/show';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

describe('<ShowBusiness />', () => {
	// const wrapper = shallow(<ShowBusiness />);
	const mock = new MockAdapter(Axios);

	it('renders a `.other-bg`', () => {
		// expect(wrapper.find('.other-bg')).toHaveLength(1);
	});

	it('shows a businesses', () => {
		mock.onGet('businesses').reply(200, {});
	});
});
