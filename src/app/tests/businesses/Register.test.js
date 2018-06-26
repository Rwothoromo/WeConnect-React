import React from 'react';
import { shallow } from 'enzyme';
import RegisterBusiness from '../../components/businesses/register';
import MockAdapter from 'axios-mock-adapter';

describe('<RegisterBusiness />', () => {
	const wrapper = shallow(<RegisterBusiness />);
	const mock = new MockAdapter(wrapper.instance().xhr);

	it('renders without crashing', () => {
		expect(wrapper.find('.control-label').text()).toContain('Register a business');
	});

	it('renders a `.other-bg`', () => {
		expect(wrapper.find('.other-bg')).toHaveLength(1);
	});

	it('registers business', () => {
		mock.onPost('businesses/register').reply(201, {});
		wrapper.find('[type="submit"]').simulate('submit', {
			preventDefault: () => {}
		});
  });
});
