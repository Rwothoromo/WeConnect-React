import React from 'react';
import { shallow } from 'enzyme';
import UserTabs from './UserTabs';

describe('<UserTabs />', () => {
	const wrapper = shallow(<UserTabs />);

	it('renders without crashing', () => {
		expect(wrapper.find('#userDropdown')).toHaveLength(1);
	});
});
