import React from 'react';
import { shallow } from 'enzyme';
import BusinessButtons from '../BusinessButtons';

describe('<BusinessButtons />', () => {
	const wrapper = shallow(<BusinessButtons business={{}} />);

	it('renders without crashing', () => {
		expect(wrapper.find('.list-inline')).toHaveLength(1);
	});
});
