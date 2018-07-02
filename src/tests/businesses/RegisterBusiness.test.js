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

	it('registers a business', async () => {
		mock.onPost(`${apiUrl}/businesses`).reply(201, {
			message: "Business added"
		});

		const registerBusinessComponent = wrapper.find(RegisterBusiness).dive();
		registerBusinessComponent.setState({loggedIn: true});

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
