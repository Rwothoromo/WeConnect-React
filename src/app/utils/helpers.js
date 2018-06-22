export function isLoggedIn() {
    if (localStorage.getItem("access_token") !== null) {
        return true;
    }
    return false;
}
