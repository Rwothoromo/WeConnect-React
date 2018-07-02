import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import DeleteBusiness from '../../components/businesses/DeleteBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<DeleteBusiness />', () => {
	const wrapper = shallow(<MemoryRouter><DeleteBusiness match={{params: {id: 2}}} /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('deletes a business', async () => {
		localStorage.setItem({
			access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA1MTUwMjEsImlhdCI6MTUzMDUxMTQyMSwic3ViIjo0fQ.qE4TVdgp5a6PFO_gGlIGJW4vb5i63o5xzlLK9EJjJnM"
		});
		localStorage.setItem({first_name: "Sonia"});
		localStorage.setItem({last_name: "Karungi"});
		localStorage.setItem({username: "karungi"});

		const deleteBusinessComponent = wrapper.find(DeleteBusiness).dive();

		mock.onDelete(`${apiUrl}/businesses/2`).reply(200, {
			message: "Business deleted"
		});

		global.confirm = () => true
		let spyDeleteBusiness = jest.spyOn(deleteBusinessComponent.instance(), 'componentDidMount');
		await deleteBusinessComponent.instance().componentDidMount({confirm: () => {} });
		expect(spyDeleteBusiness).toHaveBeenCalled();
	});
});
