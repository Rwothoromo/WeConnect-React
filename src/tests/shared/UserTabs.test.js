import React from 'react';
import { shallow } from 'enzyme';
import UserTabs from '../../components/shared/UserTabs';

describe('<UserTabs />', () => {
	const wrapper = shallow(<UserTabs />);

	it('renders without crashing', () => {
		expect(wrapper.find('#userDropdown')).toHaveLength(1);
	});
});
