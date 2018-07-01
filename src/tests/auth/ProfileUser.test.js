import React from 'react';
import { shallow } from 'enzyme';
import ProfileUser from '../../components/auth/ProfileUser';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

describe('<ProfileUser />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = shallow(<ProfileUser />);

	it('renders without crashing', () => {
		expect(wrapper.find('h2').text()).toContain('User Profile');
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});

	it('resets user password', () => {
		mock.onPost('auth/reset-password').reply(200, {});
	});
});
