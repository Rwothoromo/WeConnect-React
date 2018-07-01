import React from 'react';
import { mount } from 'enzyme';
import RegisterUser from '../../components/auth/RegisterUser';
import ReactPasswordStrength from 'react-password-strength';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App'

describe('<RegisterUser />', () => {
	const wrapper = mount(<RegisterUser />);
	const mock = new MockAdapter(Axios);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Register');
	});

	it('renders two <ReactPasswordStrength /> components', () => {
		expect(wrapper.find(ReactPasswordStrength)).toHaveLength(2);
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});

	it('registers user', async () => {
		mock.onPost(`${apiUrl}/auth/register`).reply(201, {
			message: "User added"
		});

		expect(wrapper.state('registered')).toBe(false);

		// let first_name = wrapper.find('input[name="first_name"]');
		// first_name.simulate('change', {target: {name: 'first_name', value: 'elijah'}});

		// let last_name = wrapper.find('input[name="last_name"]');
		// last_name.simulate('change', {target: {name: 'last_name', value: 'rwothoromo'}});

		// let username = wrapper.find('input[name="username"]');
		// username.simulate('change', {target: {name: 'username', value: 'rwothoromo'}});

		// let password = wrapper.find('password_div').find('input');
		// password.simulate('change', {target: {name: 'password', value: 'Chang3m31402'}});

		// let confirm_password = wrapper.find('confirm_password_div').find('input');
		// confirm_password.simulate('change', {target: {name: 'confirm_password', value: 'Chang3m31402'}});
	
		// const registerForm = wrapper.find('form');
		// registerForm.simulate('submit', {
		// 	preventDefault: () => {}
		// });

	});
});
