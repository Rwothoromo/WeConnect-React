import { mount } from 'enzyme';
import React from 'react'
import BusinessModals from '../BusinessModals';

describe('<BusinessesList />', () => {
	it('it renders correctly', async () => {
		const wrapper = mount(<BusinessModals businesses={[{ business: { id: 1 } }]} />);
		expect(wrapper).toHaveLength(1);
	});
});
