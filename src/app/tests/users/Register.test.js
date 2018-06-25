import React from 'react';
import { shallow } from 'enzyme';
import RegisterUser from '../../components/users/register';
import ReactPasswordStrength from 'react-password-strength';
import MockAdapter from 'axios-mock-adapter';

describe('<RegisterUser />', () => {
	const wrapper = shallow(<RegisterUser />);
	const mock = new MockAdapter(wrapper.instance().xhr);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Register');
	});

	it('renders two <ReactPasswordStrength /> components', () => {
		expect(wrapper.find(ReactPasswordStrength)).toHaveLength(2);
	});

	it('renders a `.home-bg`', () => {
		expect(wrapper.find('.home-bg')).toHaveLength(1);
	});

	it('registers user', () => {
		mock.onPost('auth/register').reply(201, {});
		wrapper.find('[type="submit"]').simulate('submit', {
			preventDefault: () => {}
		});
  });
});
