import { mount } from 'enzyme';
import React from 'react'
import ReviewCards from '../../components/businesses/ReviewCards';

describe('<BusinessesList />', () => {
	it('renders correctly', async () => {
		const wrapper = mount(<ReviewCards reviews_list ={[{review: {id: 1}}]} />);
		expect(wrapper).toHaveLength(1);
	})
});
