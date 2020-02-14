import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Register from '../Register';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../../App'

describe('<Register />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = mount(<MemoryRouter><Register /></MemoryRouter>);

	it('registers user', async () => {
		mock.onPost(`${apiUrl}/auth/register`).reply(201, {
			message: "User added"
		});

		const RegisterComponent = wrapper.find(Register);
		const registerForm = RegisterComponent.find('form');
		const inputs = registerForm.find('input');
	});
});
