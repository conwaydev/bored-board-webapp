import { userConstants } from '../constants/user-types';
import { authService } from '../services/AuthService';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout
};

function login(data) {
    return function(dispatch) {
        return authService.login(data)
            .then(user => {
                dispatch(loginSuccess(user));
                history.push('/');
            }).catch(error => {
                throw(error);
            });
    };
}

function logout() {
    authService.logout();
    return { type: userConstants.LOGOUT };
}

function loginSuccess(user) {
    
    return {type: userConstants.LOGIN_SUCCESS, user};
}
