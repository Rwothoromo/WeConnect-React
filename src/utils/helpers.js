import decode from 'jwt-decode';

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

export function contains(listVar, aVar) {
	var i;
	for (i=0; i<listVar.length; i++) {
		if (listVar[i] === aVar) {
			return true;
		}
	}
	return false;
}

export function clearUser() {
	localStorage.removeItem("username");
	localStorage.removeItem("first_name");
	localStorage.removeItem("last_name");
}
