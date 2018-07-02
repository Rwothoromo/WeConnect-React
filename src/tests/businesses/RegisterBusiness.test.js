import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import RegisterBusiness from '../../components/businesses/RegisterBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<RegisterBusiness />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = shallow(<MemoryRouter><RegisterBusiness /></MemoryRouter>);

	it('registers business', async () => {
		localStorage.setItem({
			access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA1MTUwMjEsImlhdCI6MTUzMDUxMTQyMSwic3ViIjo0fQ.qE4TVdgp5a6PFO_gGlIGJW4vb5i63o5xzlLK9EJjJnM"
		});
		localStorage.setItem({first_name: "Sonia"});
		localStorage.setItem({last_name: "Karungi"});
		localStorage.setItem({username: "karungi"});

		mock.onPost(`${apiUrl}/businesses`).reply(201, {
			message: "Business added"
		});

		const registerBusinessComponent = wrapper.find(RegisterBusiness).dive();
		registerBusinessComponent.setState({loggedIn: true});
		expect(registerBusinessComponent.state('registered')).toBe(false);

		const registerForm = registerBusinessComponent.find('form');
		registerForm.simulate('submit', {
			preventDefault: () => {},
			target: {
				elements: {
					name: "jimz auto",
					description: "best auto-part deals",
					category: "cars",
					location: "nakawa"
				}
			}
		});
	});
});
