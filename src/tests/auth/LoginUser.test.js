import React from 'react';
import { shallow } from 'enzyme';
import LoginUser from '../../components/auth/login';
import MockAdapter from 'axios-mock-adapter';

describe('<LoginUser />', () => {
	const wrapper = shallow(<LoginUser />);
	const mock = new MockAdapter(wrapper.instance().xhr);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Login');
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});

	it('logs in user', () => {
		mock.onPost('auth/login').reply(200, {});
		wrapper.find('[type="submit"]').simulate('submit', {
			preventDefault: () => {}
		});
	});
});
