import React from 'react';
import { shallow } from 'enzyme';
import Index from '../components/index';

describe('<Index />', () => {
	const wrapper = shallow(<Index />);

	it('renders without crashing', () => {
		expect(wrapper.find('.home-title').text()).toContain('Welcome to WeConnect!');
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});
});
