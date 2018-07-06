import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import DeleteBusiness from '../../components/businesses/DeleteBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<DeleteBusiness />', () => {
	const wrapper = shallow(<MemoryRouter><DeleteBusiness id={2} /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('deletes a business', async () => {
		const deleteBusinessComponent = wrapper.find(DeleteBusiness).dive();

		mock.onDelete(`${apiUrl}/businesses/2`).reply(200, {
			message: "Business deleted"
		});

		let spyDeleteBusiness = jest.spyOn(deleteBusinessComponent.instance(), 'deleteBusiness');
		await deleteBusinessComponent.instance().deleteBusiness({preventDefault: () => {} });
		expect(spyDeleteBusiness).toHaveBeenCalled();
	});
});
