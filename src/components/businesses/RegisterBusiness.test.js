import React from 'react';
import { mount } from 'enzyme';
import RegisterBusiness from './RegisterBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<RegisterBusiness />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = mount(<RegisterBusiness business={ {id: 2}} />);

	it('registers a business', () => {
		mock.onPost(`${apiUrl}/businesses`).reply(201, {
			message: "Business added"
		})
		const form = wrapper.find('form')
		form.simulate('submit')
	});
});
