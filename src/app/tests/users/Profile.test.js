import React from 'react';
import { shallow } from 'enzyme';
import ProfileUser from '../../components/users/profile';

describe('<ProfileUser />', () => {
	const wrapper = shallow(<ProfileUser />);

	it('renders without crashing', () => {
		expect(wrapper.find('h2').text()).toContain('User Profile');
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});
});
