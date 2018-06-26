import React from 'react';
import { shallow } from 'enzyme';
import BusinessList from '../../components/businesses/index';

describe('<BusinessList />', () => {
	const wrapper = shallow(<BusinessList />);

	it('renders a `.other-bg`', () => {
		expect(wrapper.find('.other-bg')).toHaveLength(1);
	});
});
