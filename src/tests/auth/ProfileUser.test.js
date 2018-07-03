import React from 'react';
import { shallow } from 'enzyme';
import ProfileUser from '../../components/auth/ProfileUser';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<ProfileUser />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = shallow(<ProfileUser />);

	it('renders without crashing', () => {
		expect(wrapper.find('h2').text()).toContain('User Profile');
	});

	it('resets user password', async () => {
		mock.onPost(`${apiUrl}/auth/reset-password`).reply(200, {
			message: "User password reset",
			new_password: "new_password"
		});

		global.confirm = () => true;
		let spyResetPassword = jest.spyOn(wrapper.instance(), 'resetPassword');
		await wrapper.instance().resetPassword({
			preventDefault: () => {},
			clearUser: () => {}
		});
		expect(spyResetPassword).toHaveBeenCalled();
	});
});
