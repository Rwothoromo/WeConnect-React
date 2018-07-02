import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import ShowBusiness from '../../components/businesses/ShowBusiness';
import MockAdapter from 'axios-mock-adapter';
import decode from 'jwt-decode';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<ShowBusiness />', () => {
	const wrapper = shallow(<MemoryRouter><ShowBusiness match={{params: {id: 2}}} /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('shows a businesses', async () => {
		localStorage.setItem({
			access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA1MTUwMjEsImlhdCI6MTUzMDUxMTQyMSwic3ViIjo0fQ.qE4TVdgp5a6PFO_gGlIGJW4vb5i63o5xzlLK9EJjJnM"
		});
		localStorage.setItem({first_name: "Sonia"});
		localStorage.setItem({last_name: "Karungi"});
		localStorage.setItem({username: "karungi"});

		const showBusinessComponent = wrapper.find(ShowBusiness).dive();
		const user = decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA1MTUwMjEsImlhdCI6MTUzMDUxMTQyMSwic3ViIjo0fQ.qE4TVdgp5a6PFO_gGlIGJW4vb5i63o5xzlLK9EJjJnM");

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
        photo: "Photo",
        updated_at:"Thu, 28 Jun 2018 14:33:42 GMT"
      }
		});

		mock.onGet(`${apiUrl}/businesses/2/reviews`).reply(200, {
			reviews_list:  [{}, {}]
		});

		let spyShowBusiness = jest.spyOn(showBusinessComponent.instance(), 'componentDidMount');
		await showBusinessComponent.instance().componentDidMount();
		expect(spyShowBusiness).toHaveBeenCalled();
	});
});
