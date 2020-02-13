import React from 'react';
import { shallow } from 'enzyme';
import BusinessOwnerButtons from './BusinessOwnerButtons';

describe('<BusinessOwnerButtons />', () => {
	const wrapper = shallow(<BusinessOwnerButtons business={{}} />);

	it('renders without crashing', () => {
		expect(wrapper.find('.list-inline')).toHaveLength(1);
	});
});
