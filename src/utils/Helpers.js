import decode from 'jwt-decode';

/**
 * Check if a user is logged in
 * 
 * ```js
 * isLoggedIn()
 * ```
 */
export function isLoggedIn() {
	if (localStorage.getItem("access_token") !== null) {
		let token = decode(localStorage.getItem("access_token"));
		if (token.exp < Date.now() / 1000) {
			localStorage.removeItem("access_token");
			clearUser();
			return false;
		}
		return true;
	}
	return false;
}

/**
 * Check if a list contains a specific item
 * 
 * @param {array} listVar The list/haystack
 * @param {object} aVar The item/needle to find
 * 
 * ```js
 * contains(listVar, aVar)
 * ```
 */
export function contains(listVar, aVar) {
	var i;
	for (i=0; i<listVar.length; i++) {
		if (listVar[i] === aVar) {
			return true;
		}
	}
	return false;
}

/**
 * Clear user data from the local storage
 * 
 * ```js
 * clearUser()
 * ```
 */
export function clearUser() {
	localStorage.removeItem("username");
	localStorage.removeItem("first_name");
	localStorage.removeItem("last_name");
}
