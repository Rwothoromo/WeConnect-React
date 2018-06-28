import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

describe('<DeleteBusiness />', () => {
	const mock = new MockAdapter(Axios);

	it('deletes a business', () => {
		mock.onPost('businesses/delete').reply(200, {});
	});
});
