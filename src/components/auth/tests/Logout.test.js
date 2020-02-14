import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Logout from '../Logout';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../../App';

describe('<Logout />', () => {
	const wrapper = shallow(<MemoryRouter><Logout /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('logs out', async () => {
		const logoutComponent = wrapper.find(Logout).dive();

		mock.onPost(`${apiUrl}/auth/logout`).reply(200, {
			message: "Logged out successfully"
		});

		let spyLogout = jest.spyOn(logoutComponent.instance(), 'componentDidMount');
		await logoutComponent.instance().componentDidMount({clearUser: () => {} });
		expect(spyLogout).toHaveBeenCalled();
	});
});
