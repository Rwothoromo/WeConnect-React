import React from 'react';
import { mount } from 'enzyme';
import LoginUser from '../../components/auth/LoginUser';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App'

describe('<LoginUser />', () => {
	const wrapper = mount(<LoginUser />);
	const mock = new MockAdapter(Axios);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Login');
	});

	it('logs in', async () => {
		mock.onPost(`${apiUrl}/auth/login`).reply(200, {
			message: "User logged in",
			username: "rwothoromo",
			first_name: "elijah",
			last_name: "rwothoromo",
			access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA0ODQ0NTksImlhdCI6MTUzMDQ4MDg1OSwic3ViIjoxfQ.FpUS-ObeP9uTbS8bSE5vpDJ9amQtY26vrUrVNPcS1sE"
		});

		expect(wrapper.state('loggedIn')).toBe(false);

		let username = wrapper.find('input[name="username"]');
		username.simulate('change', {target: {name: 'username', value: 'rwothoromo'}});

		let password = wrapper.find('input[name="password"]');
		password.simulate('change', {target: {name: 'password', value: 'Chang3m31402'}});

		const loginForm = wrapper.find('form');
		loginForm.simulate('submit', {
			preventDefault: () => {}
		});
	});

	it('rejects wrong username and password', async () => {
		mock.onPost(`${apiUrl}/auth/login`).reply(401, {
			message: "Incorrect username and password combination!"
		});

		wrapper.setState({loggedIn: false});
		expect(wrapper.state('loggedIn')).toBe(false);

		const loginForm = wrapper.find('form');
		loginForm.simulate('submit', {
			preventDefault: () => {}
		});
	});
});
