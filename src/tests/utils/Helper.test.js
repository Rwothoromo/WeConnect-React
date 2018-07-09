import { isLoggedIn, contains } from '../../utils/Helpers';

describe('Helper - isLoggedIn', () => {
	it('checks if user not logged in', () => {
		localStorage.clear();
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
