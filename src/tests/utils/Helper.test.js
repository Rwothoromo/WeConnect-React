import { isLoggedIn, contains, clearUser } from '../../utils/helpers';

describe('Helper - Logged in', () => {
	it('checks if user logged in', () => {
		localStorage.clear();
		localStorage.setItem("access_token", "dummy-token");
		expect(isLoggedIn()).toBe(true);
		localStorage.removeItem("access_token");
		clearUser();
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
