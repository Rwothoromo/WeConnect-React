import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import RegisterUser from '../../components/auth/RegisterUser';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App'

describe('<RegisterUser />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = mount(<MemoryRouter><RegisterUser /></MemoryRouter>);

	it('registers user', async () => {
		mock.onPost(`${apiUrl}/auth/register`).reply(201, {
			message: "User added"
		});

		// global.document = {getElementsByClassName: () => {
		// 	return({value: "mango"})
		// }}
		const registerUserComponent = wrapper.find(RegisterUser);
		const registerForm = registerUserComponent.find('form');
		const inputs = registerForm.find('input');//input[name="password"]
		// console.log(inputs.get(3));
		// registerForm.simulate('submit', {
		// 	preventDefault: () => {},
		// 	target: {
		// 		elements: {
		// 			first_name: {value: "elijah"},//"elijah",
		// 			last_name: {value: "rwothoromo"},//"rwothoromo",
		// 			username: {value: "rwothoromo"}//"rwothoromo"
		// 		}
		// 	}
		// });
	});
});
