import React from 'react';
import { mount } from 'enzyme';
import RegisterBusiness from '../../components/businesses/RegisterBusiness';
import MockAdapter from 'axios-mock-adapter';

describe('<RegisterBusiness />', () => {
	const wrapper = mount(<RegisterBusiness />);
	const mock = new MockAdapter(wrapper.instance().xhr);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Register a business');
	});

	it('renders a `.other-bg`', () => {
		expect(wrapper.find('.other-bg')).toHaveLength(1);
	});

	it('registers business', async () => {
		mock.onPost(`${apiUrl}businesses/register`).reply(201, {
			message: "Business added"
		});

		expect(wrapper.state('registered')).toBe(false);

		let name = wrapper.find('input[name="name"]');
		name.simulate('change', {target: {name: 'name', value: 'jimz auto'}});

		let description = wrapper.find('input[name="description"]');
		description.simulate('change', {target: {name: 'description', value: 'best auto-part deals' }});

		let category = wrapper.find('input[name="category"]');
		category.simulate('change', {target: {name: 'category', value: 'cars' }});

		let location = wrapper.find('input[name="location"]');
		location.simulate('change', {target: {name: 'location', value: 'nakawa' }});

		const registerForm = wrapper.find('form');
		registerForm.simulate('submit', {
			preventDefault: () => {}
		});

	});
});
