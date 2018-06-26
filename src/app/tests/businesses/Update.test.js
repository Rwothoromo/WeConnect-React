import React from 'react';
import { shallow } from 'enzyme';
import UpdateBusiness from '../../components/businesses/update';

describe('<UpdateBusiness />', () => {
	const wrapper = shallow(<UpdateBusiness />);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Update business');
	});

	it('renders a `.other-bg`', () => {
		expect(wrapper.find('.other-bg')).toHaveLength(1);
	});
});
