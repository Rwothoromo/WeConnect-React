import { mount } from 'enzyme';
import React from 'react'
import ReviewCards from './ReviewCards';

describe('<BusinessesList />', () => {
	it('renders correctly', async () => {
		const wrapper = mount(<ReviewCards reviews_list ={[{review: {id: 1}}]} />);
		expect(wrapper).toHaveLength(1);
	})
});
