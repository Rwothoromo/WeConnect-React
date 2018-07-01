import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

describe('<LogoutUser />', () => {
	const mock = new MockAdapter(Axios);

	it('logs out user', () => {
		mock.onPost('auth/logout').reply(200, {});
	});
});
