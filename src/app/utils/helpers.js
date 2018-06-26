export function isLoggedIn() {
    if (localStorage.getItem("access_token") !== null) {
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
