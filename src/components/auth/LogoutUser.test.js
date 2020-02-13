import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import LogoutUser from './LogoutUser';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<LogoutUser />', () => {
	const wrapper = shallow(<MemoryRouter><LogoutUser /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('logs out', async () => {
		const logoutComponent = wrapper.find(LogoutUser).dive();

		mock.onPost(`${apiUrl}/auth/logout`).reply(200, {
			message: "Logged out successfully"
		});

		let spyLogoutUser = jest.spyOn(logoutComponent.instance(), 'componentDidMount');
		await logoutComponent.instance().componentDidMount({clearUser: () => {} });
		expect(spyLogoutUser).toHaveBeenCalled();
	});
});
