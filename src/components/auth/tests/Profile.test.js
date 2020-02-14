import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../Profile';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../../App';

describe('<Profile />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = shallow(<Profile />);

	window.alert = jest.fn();

	it('resets user password', async () => {
		mock.onPost(`${apiUrl}/auth/reset-password`).reply(200, {
			message: "User password reset",
			new_password: "new_password"
		});

		wrapper.setState({ loggedIn: true });
		global.confirm = () => true;
		let spyResetPassword = jest.spyOn(wrapper.instance(), 'resetPassword');
		await wrapper.instance().resetPassword({
			preventDefault: () => { },
			clearUser: () => { }
		});
		expect(spyResetPassword).toHaveBeenCalled();
	});

	it('cancels user password reset', async () => {
		global.confirm = () => false;
		let spyResetPassword = jest.spyOn(wrapper.instance(), 'resetPassword');
		await wrapper.instance().resetPassword({
			preventDefault: () => { },
			clearUser: () => { }
		});
		expect(spyResetPassword).toHaveBeenCalled();
	});

	window.alert.mockClear();
});
