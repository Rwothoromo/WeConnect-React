import React from 'react';
import { mount } from 'enzyme';
import UpdateBusiness from '../../components/businesses/UpdateBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<UpdateBusiness />', () => {
	const mock = new MockAdapter(Axios);
	let showUpdatedBusinesses = jest.fn()
	let business = {
		author: "Edwin Kato",
		category: 2,
		category_name: "Food",
		created_at: "Thu, 28 Jun 2018 14:33:42 GMT",
		created_by: 3,
		description: "Cakes and confectionary",
		id: 2,
		location: 2,
		location_name: "Kabale",
		name: "Baker's",
		updated_at:"Thu, 28 Jun 2018 14:33:42 GMT"
	}
	
	const wrapper = mount(<UpdateBusiness business={business} showUpdatedBusinesses={showUpdatedBusinesses}/>);

	it('updates a business', async () => {
		mock.onPut(`${apiUrl}/businesses/2`).reply(200, {
			message: "Business updated"
		});

		const updateBusinessComponent = wrapper;
		let spyUpdateBusiness = jest.spyOn(updateBusinessComponent.instance(), 'updateBusiness');

		updateBusinessComponent.instance().forceUpdate();
		updateBusinessComponent.find("input[name='name']").simulate('change', {target: {value: 'andela'}})
		updateBusinessComponent.find("input[name='category']").simulate('change', {target: {value: 'category'}})
		updateBusinessComponent.find("input[name='location']").simulate('change', {target: {value: 'location'}})
		updateBusinessComponent.find("textarea[name='description']").simulate('change', {target: {value: 'description'}})

		await updateBusinessComponent.find("form").simulate('submit', {preventDefault: ()=> {}})
		expect(spyUpdateBusiness).toHaveBeenCalled();
	});

	it('fails if the category or location are blank', async () => {
		mock.onPut(`${apiUrl}/businesses/2`).reply(400, {
			message: "category must be a string of maximum 50 characters"
		});

		const updateBusinessComponent = wrapper;
		let spyUpdateBusiness = jest.spyOn(updateBusinessComponent.instance(), 'updateBusiness');

		updateBusinessComponent.instance().forceUpdate();
		updateBusinessComponent.find("input[name='name']").simulate('change', {target: {value: 'andela'}})

		await updateBusinessComponent.find("form").simulate('submit', {preventDefault: ()=> {}})
		expect(spyUpdateBusiness).toHaveBeenCalled();
	});
});