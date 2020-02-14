import React from 'react';
import { mount } from 'enzyme';
import DeleteBusiness from '../DeleteBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../../App';

describe('<DeleteBusiness />', () => {
	const mock = new MockAdapter(Axios);

	const wrapper = mount(<DeleteBusiness business={{ id: 2 }} />);
	const button = wrapper.find('[className="btn btn-danger"]');

	it('deletes a business', async () => {
		mock.onDelete(`${apiUrl}/businesses/2`).reply(200, {
			message: "Business deleted"
		});
		button.simulate('click');
	});

	it('does not delete a business if not found', async () => {
		mock.onDelete(`${apiUrl}/businesses/2`).reply(404, {
			message: "Business not found"
		});
		button.simulate('click');
	});

});
