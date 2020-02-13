import { mount } from 'enzyme';
import React from 'react'
import BusinessCards from '../../components/businesses/BusinessCards';

describe('<BusinessesList />', () => {
	it('renders correctly', async () => {
		const wrapper = mount(<BusinessCards user={{sub: 1}} businesses_list ={[{business: {id: 1}}]} />);
		expect(wrapper).toHaveLength(1);
	})
	it('renders with user buttons correctly', async () => {
		const wrapper = mount(<BusinessCards user={{sub: 1}} businesses_list ={[{business: {id: 1, created_by: 1}}]} />);
		expect(wrapper).toHaveLength(1);
	})
});
