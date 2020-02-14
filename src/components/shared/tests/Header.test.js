import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import UserTabs from '../UserTabs';
import VisitorTabs from '../VisitorTabs';

describe('<Header />', () => {
	const wrapper = shallow(<Header />);

	it('renders a `.header`', () => {
		expect(wrapper.find('.header')).toHaveLength(1);
	});

	it('renders a <UserTabs /> component', async () => {
		wrapper.setState({loggedIn: true});
		expect(wrapper.find(UserTabs)).toHaveLength(1);
	});

	it('renders a <VisitorTabs /> component', () => {
		wrapper.setState({loggedIn: false});
		expect(wrapper.find(VisitorTabs)).toHaveLength(1);
	});

});
