import React from 'react';
import { shallow } from 'enzyme';
import UpdateUser from '../../components/auth/update';

describe('<UpdateUser />', () => {
	const wrapper = shallow(<UpdateUser />);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Update profile');
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});
});
