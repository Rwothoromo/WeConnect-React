import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import LogoutUser from '../../components/auth/LogoutUser';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<LogoutUser />', () => {
	const wrapper = shallow(<MemoryRouter><LogoutUser /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('logs out', async () => {
		localStorage.setItem({
			access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA1MTUwMjEsImlhdCI6MTUzMDUxMTQyMSwic3ViIjo0fQ.qE4TVdgp5a6PFO_gGlIGJW4vb5i63o5xzlLK9EJjJnM"
		});
		localStorage.setItem({first_name: "Sonia"});
		localStorage.setItem({last_name: "Karungi"});
		localStorage.setItem({username: "karungi"});

		const logoutComponent = wrapper.find(LogoutUser).dive();

		mock.onPost(`${apiUrl}/auth/logout`).reply(200, {
			message: "Logged out successfully"
		});

		let spyLogoutUser = jest.spyOn(logoutComponent.instance(), 'componentDidMount');
		await logoutComponent.instance().componentDidMount({clearUser: () => {} });
		localStorage.removeItem("access_token");
		expect(spyLogoutUser).toHaveBeenCalled();
	});
});
