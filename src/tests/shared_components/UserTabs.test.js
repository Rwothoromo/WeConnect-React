import React from 'react';
import { shallow } from 'enzyme';
import UserTabs from '../../components/shared/user_tabs';

describe('<Header />', () => {
	const wrapper = shallow(<UserTabs />);

	it('renders a `.header`', () => {
		expect(wrapper.find('#businessDropdown')).toHaveLength(1);
	});
});
