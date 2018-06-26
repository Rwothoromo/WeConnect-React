import React from 'react';
import { shallow } from 'enzyme';
import ShowBusiness from '../../components/businesses/show';

describe('<ShowBusiness />', () => {
	const wrapper = shallow(<ShowBusiness />);

	it('renders a `.other-bg`', () => {
		expect(wrapper.find('.other-bg')).toHaveLength(1);
	});
});
