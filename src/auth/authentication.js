
export function isLoggedIn() {
    if (!sessionStorage.getItem('jwt')) {
        return false;
    }
    return true;
}

export function logOut() {
    sessionStorage.removeItem('jwt');
}