import React from 'react';
import { mount } from 'enzyme';
import DeleteBusiness from '../DeleteBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../../App';

describe('<DeleteBusiness />', () => {
	const mock = new MockAdapter(Axios);
	mock.onDelete(`${apiUrl}/businesses/2`).reply(200, {
		message: "Business deleted"
	});

	const wrapper = mount(<DeleteBusiness business={{ id: 2 }} />);

	it('deletes a business', async () => {
		const button = wrapper.find('.btn-danger');
		// button.simulate('click');
	});
});
