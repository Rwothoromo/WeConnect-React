import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import RegisterBusiness from '../../components/businesses/RegisterBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<RegisterBusiness />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = mount(<RegisterBusiness showUpdatedBusinesses={()=>{}} business={ {id: 2}} />);

	it('registers a business', async () => {
		mock.onPost(`${apiUrl}/businesses`).reply(201, {
			message: "Business added"
		});
	});
	
	it('deletes a business', async () => {
		mock.onPost(`${apiUrl}/businesses`).reply(201, {
			message: "Business added"
		})
		const form = wrapper.find('form')
		console.log(form)
		form.simulate('submit')
	});
});
