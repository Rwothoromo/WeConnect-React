import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import ReviewBusiness from '../../components/businesses/ReviewBusiness';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import { apiUrl } from '../../App';

describe('<ReviewBusiness />', () => {
	const mock = new MockAdapter(Axios);
	const wrapper = shallow(<MemoryRouter><ReviewBusiness match={{params: {id: 2}}} /></MemoryRouter>);

	it('reviews a business', async () => {
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

		mock.onPost(`${apiUrl}/businesses/2/reviews`).reply(201, {
			message: "Business review added"
		});

		const ReviewBusinessComponent = wrapper.find(ReviewBusiness).dive();
		ReviewBusinessComponent.setState({loggedIn: true});

		const reviewForm = ReviewBusinessComponent.find('form');
		reviewForm.simulate('submit', {
			preventDefault: () => {},
			target: {
				elements: {
					name: "Fair rates",
					description: "I did not feel cheated on my purchase"
				}
			}
		});
	});
});
