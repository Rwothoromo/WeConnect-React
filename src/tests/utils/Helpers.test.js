import { isLoggedIn, contains } from '../utils/Helpers';

describe('Helper - isLoggedIn', () => {
	const jwt = require('jsonwebtoken');
	it('checks if user not logged in', () => {
		localStorage.clear();
		expect(isLoggedIn()).toBe(false);
	});

	it('checks if user logged in', () => {
		const token = jwt.sign({ sub: 1, iat: Math.floor(Date.now() / 1000) + 30 }, 'shhhhh');
		localStorage.setItem("access_token", token);
		expect(isLoggedIn()).toBe(true);
	});

	it('removes expired token', () => {
		const token = jwt.sign({ sub: 1, exp: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
		localStorage.setItem("access_token", token);
		expect(isLoggedIn()).toBe(false);
	});
});

describe('Helper - List contains', () => {
	it('checks if list contains variable', () => {
		const listVar = ['a', 'bc', 'def'];
		expect(contains(listVar, 'a')).toBe(true);
		expect(contains(listVar, 'xyz')).toBe(false);
	});
});
