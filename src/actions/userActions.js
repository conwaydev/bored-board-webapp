import * as types from '../constants/user-types';
import AuthService from '../services/AuthService';

export function login(data) {
    return function(dispatch) {
        return AuthService.login(data)
            .then(user => {
                dispatch(loginSuccess(user));
            }).catch(error => {
                throw(error);
            });
    };
}

export function logout() {
    AuthService.logout();
    return {type: types.LOGOUT};
}

export function loginSuccess(user) {
    return {type: types.LOGIN_SUCCESS, user};
}
