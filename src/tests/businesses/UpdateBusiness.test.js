import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import UpdateBusiness from '../../components/businesses/UpdateBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<UpdateBusiness />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = shallow(<MemoryRouter><UpdateBusiness match={{params: {id: 2}}} /></MemoryRouter>);

	it('updates a business', async () => {
		localStorage.setItem({
			access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA1MTUwMjEsImlhdCI6MTUzMDUxMTQyMSwic3ViIjo0fQ.qE4TVdgp5a6PFO_gGlIGJW4vb5i63o5xzlLK9EJjJnM"
		});
		localStorage.setItem({first_name: "Sonia"});
		localStorage.setItem({last_name: "Karungi"});
		localStorage.setItem({username: "karungi"});

		mock.onGet(`${apiUrl}/businesses/2`).reply(200, {
			business: {
        author: "Edwin Kato",
        category: 2,
        category_name: "Food",
        created_at: "Thu, 28 Jun 2018 14:33:42 GMT",
        created_by: 3,
        description: "Cakes and confectionary",
        id: 2,
        location: 2,
        location_name: "Kabale",
        name: "Baker's",
        updated_at:"Thu, 28 Jun 2018 14:33:42 GMT"
			},
			description: "Cakes and confectionary"
		});

		const updateBusinessComponent = wrapper.find(UpdateBusiness).dive();
		updateBusinessComponent.setState({loggedIn: true});
		expect(updateBusinessComponent.state('updated')).toBe(false);

		const description = updateBusinessComponent.find('#description');
		description.simulate('change', {target: {description: 'Best Cakes and Confectionary'}});
		expect(updateBusinessComponent.state('description')).toBe('Best Cakes and Confectionary');

		mock.onPut(`${apiUrl}/businesses/2`).reply(200, {
			message: "Business updated"
		});

		const updateForm = updateBusinessComponent.find('form');
		updateForm.simulate('submit', {
			preventDefault: () => {},
			target: {
				elements: {
					name: "Baker's",
					description: "Best Cakes and Confectionary",
					category: "Food",
					location: "Kabale"
				}
			}
		});

	});
});
