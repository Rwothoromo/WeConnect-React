import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import ShowBusiness from '../../components/businesses/ShowBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<ShowBusiness />', () => {
	const wrapper = shallow(<MemoryRouter><ShowBusiness id={2} /></MemoryRouter>);
	const mock = new MockAdapter(Axios);

	it('shows a businesses', async () => {
		mock.onGet(`${apiUrl}/businesses/2`).reply(200, {
			business: {
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
		});

		const showBusinessComponent = wrapper.find(ShowBusiness).dive();

		mock.onGet(`${apiUrl}/businesses/2/reviews`).reply(200, {
			reviews_list:  [{}, {}]
		});

		let spyShowBusiness = jest.spyOn(showBusinessComponent.instance(), 'componentDidMount');
		await showBusinessComponent.instance().componentDidMount();
		expect(spyShowBusiness).toHaveBeenCalled();
	});
});
